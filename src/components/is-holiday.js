import React, { Component } from 'react';
import api from '../services/api';
import './is-holiday.scss'
import Image from '../components/image'
import { Link } from 'gatsby';

export default class IsHoliday extends Component {
    state = { holiday: {} }

    async componentDidMount(){
        const response = await api.get("NextPublicHolidays/BR");
        const { data } = response;
        this.setState({ holiday: data[0] })
    }

    render() {
        const { holiday } = this.state;

        if( !holiday || holiday === {}) return <></>;

        if( holiday.date === this.formatDateToUS( this.getTomorrowDate() ) ){
            return this.tomorrowIsAHoliday( holiday );
        }
        else {
            return this.tomorrowIsNotAHoliday( holiday );
        }
    }

    getTomorrowDate(){
        var date = new Date();

        date.setDate(date.getDate() + 1);

        return date;
    }

    formatDateToUS = (date) =>`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

    tomorrowIsAHoliday = (holiday) => {
        return (
            <div className="is-holiday-today text-center">
                <h2>Oba!!! Amanhã é <strong>{holiday.name}!</strong></h2>
                <div className="image-container happy-calendar">
                    <Image filename={"funny-calendar.png"} />
                </div>
                <p>Aproveite seu dia!</p>
            </div>
        )
    }
    tomorrowIsNotAHoliday = (holiday) => {
        const cursiveDate = this.formatDateToCursive(holiday.date);

        return (
            <div className="is-holiday-today text-center">
                <h2>Amanhã não é feriado.</h2>
                
                { cursiveDate && 
                    <p> 
                        O próximo feriado é <b>{holiday.localName}</b>, 
                        dia <b>{cursiveDate}</b>.
                    </p>
                }
                <div className="image-container">
                    <Image filename={"sad-calendar.png"} />
                </div>
                <button>
                    <Link to="/next-holidays">Conferir próximos feriados</Link>
                </button>
            </div>
        )
    }

    formatDateToCursive = (date) => {
        if( !date ) return;

        let months = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        date = date.split('-');
        return `${+date[2]} de ${months[+date[1] - 1]} de ${+date[0]}`
    }

    whatDayIsToday = (date) => {
        let months = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
    }
};