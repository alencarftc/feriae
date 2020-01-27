import React, { Component } from 'react';
import api from '../../services/api';
import './style.scss';

export default class NextHolidays extends Component {
    state = { 
        holidays: [],
        months: [
            'Janeiro', 
            'Fevereiro', 
            'Março', 
            'Maio', 
            'Abril', 
            'Junho', 
            'Julho', 
            'Agosto', 
            'Setembro', 
            'Outubro', 
            'Novembro', 
            'Dezembro'
        ]
     }

    async componentDidMount(){
        const { holidays } = this.state;

        if( holidays.length > 0 ) return;

        const response = await api.get("NextPublicHolidays/BR");

        this.setState({ holidays: response.data })
    }
    render() {
        const { holidays } = this.state;

        if( holidays.length === 0 ) return <></>;

        return (
            <div className="next-holidays">
                <h2>Próximos feriados</h2>
                <ul className="holiday-list">{holidays.map(this.renderRow)}</ul>
            </div>
        );
    }

    renderRow = (holiday) => (
        <li>
            <h3>{this.formatDateToCursive(holiday.date)}</h3>
            <p>{holiday.localName}</p>
        </li>      
    );

    formatDateToCursive = (date) => {
        const { months } = this.state;

        date = date.split('-');
        return `${+date[2]} de ${months[+date[1] - 1]} de ${+date[0]}`
    }

    formatSringToBR = (date) => {
        date = date.split('-');
        return `${date[2]}/${date[1]}/${date[0]}`;
    }
}