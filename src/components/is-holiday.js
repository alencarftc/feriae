import React, { Component } from 'react';
import api from '../services/api';
import './is-holiday.scss'
import Image from '../components/image'
import { Link } from 'gatsby';

export default class IsHoliday extends Component {
    state = { 
        holiday: {},
    }
    constructor(props) {
        super(props);

        this.MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        this.WEEK_DAYS = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

        this.response = {
            isHoliday: {
                title: (holiday) => `Oba!!! Amanhã é ${holiday.localName}`,
                description: (holiday) => "Aproveite seu dia!",
                image: "funny-calendar.png"
            },
            isNotAHoliday: {
                title: (holiday) => "Ah.. Amanhã não é feriado.",
                description: (holiday) => (<p>O próximo feriado é <b>{holiday.localName}</b>, <b>{this.formatDateToCursive(holiday.date)}</b>. </p>),
                image: "sad-calendar.png"
            }
        };
    }

    async componentDidMount(){
        const response = await api.get("NextPublicHolidays/BR");
        const { data } = response;
        this.setState(() => ({ holiday: data[0] }))
    }

    isTomorrowAHoliday = (holiday) => {
        return holiday.date === this.formatDateToUS( this.getTomorrowDate() ) ? "isHoliday" : "isNotAHoliday";
    }

    render() {
        const { holiday } = this.state;

        if( !holiday || !holiday.date ) return <></>;
        
        const key = this.isTomorrowAHoliday(holiday);
        const response = this.response[key];
        console.log(response)

        return (
            <div className="is-holiday-today text-center">
                <h2>{response.title(holiday)}</h2>
                
                {response.description(holiday)}

                <div className="image-container">
                    <Image filename={response.image} />
                </div>
                <Link to="/next-holidays">
                    <button>Conferir próximos feriados</button>
                </Link>
            </div>
        )
    }

    getTomorrowDate(){
        var date = new Date();

        date.setDate(date.getDate() + 1);

        return date;
    }

    formatDateToUS = (date) =>`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

    tomorrowIsAHoliday = (holiday) => {
        if( holiday ) return <></>;
    
        return (
            <div className="is-holiday-today text-center">
                <h2><strong>{holiday.name}!</strong></h2>
                <div className="image-container happy-calendar">
                    <Image filename={""} />
                </div>
                <p></p>
            </div>
        )
    }

    formatDateToCursive = (date) => {
        date = date.split('-');
        const dateObject = new Date(`${date[0]}, ${+date[1] - 1}, ${date[2]}`);
        return `${this.WEEK_DAYS[dateObject.getDay()]}, dia ${dateObject.getDate()} de ${this.MONTHS[dateObject.getMonth()]} de ${dateObject.getFullYear()}`
    }

    whatDayIsToday = (date) => {       
        return `${date.getDate()} de ${this.MONTHS[date.getMonth()]} de ${date.getFullYear()}`
    }
};