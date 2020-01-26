import React, { Component } from 'react';
import api from '../services/api';
import './is-holiday.scss'
import Image from '../components/image'

export default class IsHoliday extends Component {
    state = { isHoliday: false, holiday: {} }

    async componentDidMount(){
        const response = await api.get("NextPublicHolidays/BR");
        const { data } = response;
        console.log(data)
        this.setState({ holiday: data[0] })
    }

    render() {
        const { holiday } = this.state;

        if( !holiday || holiday === {}) return <></>;

        if( holiday.date === this.formatDateToUS( new Date() )){
            return this.todayIsAHoliday( holiday );
        }
        else {
            return this.todayIsNotAHoliday( holiday );
        }
    }

    formatDateToUS = (date) =>`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

    todayIsAHoliday = (holiday) => {
        return (
            <div className="is-holiday-today text-center">
                <h2>Obaaa!!! Hoje é <strong>{holiday.name}</strong></h2>
                <div className="image-container happy-calendar">
                    <Image filename={"funny-calendar.png"} />
                </div>
                <p>Aproveite sua folga!</p>
            </div>
        )
    }
    todayIsNotAHoliday = (holiday) => {
        return (
            <div className="is-holiday-today text-center">
                <h2>Aaah não... Hoje não é feriado.</h2>
                <div className="image-container">
                    <Image filename={"sad-calendar.png"} />
                </div>
                <p>O próximo feriado é somente dia {this.formatDateToCursive(holiday.date)}.</p>
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