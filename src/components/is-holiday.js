import React, { Component } from 'react';
import api from '../services/api';
import './is-holiday.scss'
import Image from '../components/image'

export default class IsHoliday extends Component {
    state = {
        isHoliday: false,
        holidays: []
    }

    async componentDidMount(){
        const response = await api.get("NextPublicHolidays/BR");
        const { data } = response;
        this.setState({ holidays: data })
    }

    renderRow = (holiday) => {
        return (<li>{holiday.date} - {holiday.localName}</li>)
    }

    render() {
        const { holidays } = this.state;

        if( holidays.length === 0 ) return <div></div>;

        const nextHoliday = holidays[0].date;
        if( nextHoliday === this.formatToUS(new Date())){
            return this.todayIsAHoliday(nextHoliday);
        }
        else {
            return this.todayIsNotAHoliday();
        }
    }

    listNextHolidays(){
        const { holidays } = this.state;

        if( holidays.length === 0 ) return;

        return (<ul>{holidays.map(this.renderRow)}</ul>);
    }

    formatToUS = (date) => {
        return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    }

    todayIsAHoliday = (holiday) => {
        return (
            <div>
                <h2>Oba!!!</h2>
                <p>Hoje é <strong>{holiday.name}</strong>. Aproveite sua folga!</p>
                <div className="image-container happy-calendar">
                    <Image filename={"calendar-sad-and-funny.jpg"} />
                </div>
            </div>
        )
    }
    todayIsNotAHoliday = () => {
        return (
            <div>
                <h2>Aaah não...</h2>
                <p>Sinto muito, mas hoje não é feriado.</p>
                <h4>Hoje é {this.whatDayIsToday(new Date())}</h4>
                <div className="image-container sad-calendar">
                    <Image filename={"calendar-sad-and-funny.jpg"} />
                </div>
            </div>
        )
    }

    whatDayIsToday = (date) => {
        let months = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        
        return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
    }
};