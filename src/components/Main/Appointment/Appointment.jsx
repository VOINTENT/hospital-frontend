import React from "react";
import styles from './Appointment.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import Register from "./Register/Register";

const Appointment = (props) => {

    let doctors = props.doctors.map(doctor => <option value={doctor.id}>{doctor.name}</option>);
    let specialties = props.specialties.map(specialty => <option value={specialty.id}>{specialty.name}</option>);
    let services = props.services.map(service => <option value={service.id}>{service.name}</option>);
    let registers = props.registers.map(register => <Register doctor={register.doctor} service={register.service} specialty={register.specialty} date={register.date} time={register.time}/>);

    return (
        <div className={styles.wrapper}>
            <h3>Запись на прием</h3>

            <FilterForm
                doctors={doctors} specialties={specialties} services={services}
                currentDoctorId={props.currentDoctorId} currentSpecialtyId={props.currentSpecialtyId} currentServiceId={props.currentServiceId}

                updateCurrentDoctor={props.updateCurrentDoctor}
                updateCurrentSpecialty={props.updateCurrentSpecialty}
                updateCurrentService={props.updateCurrentService}
                updateCurrentStartDate={props.updateCurrentStartDate}
                updateCurrentFinishDate={props.updateCurrentFinishDate}
                updateCurrentStartTime={props.updateCurrentStartTime}
                updateCurrentFinishTime={props.updateCurrentFinishTime}

                currentStartDate={props.currentStartDate}
                currentFinishDate={props.currentFinishDate}
                currentStartTime={props.currentStartTime}
                currentFinishTime={props.currentFinishTime}/>

                <hr/>

            {registers}
        </div>
    );
};

class FilterForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleDoctorChange = this.handleDoctorChange.bind(this);
        this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this);
        this.handleServiceChange = this.handleServiceChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleFinishDateChange = this.handleFinishDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleFinishTimeChange = this.handleFinishTimeChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    };



    handleDoctorChange(event) {
        this.props.updateCurrentDoctor(event.target.value)
    }

    handleSpecialtyChange(event) {
        this.props.updateCurrentSpecialty(event.target.value)
    }

    handleServiceChange(event) {
        this.props.updateCurrentService(event.target.value)
    }

    handleStartDateChange(date) {
        this.props.updateCurrentStartDate(date)
    }

    handleFinishDateChange(date) {
        this.props.updateCurrentFinishDate(date)
    }

    handleStartTimeChange(time) {
        this.props.updateCurrentStartTime(time)
    }

    handleFinishTimeChange(time) {
        this.props.updateCurrentFinishTime(time)
    }

    handleSubmit(event) {
        let params = '?';
        let empty = true;

        if (this.props.currentDoctorId !== '0') {
            params += empty ? '' : '&';
            empty = false;
            params += 'doctor_id=' + this.props.currentDoctorId
        }

        if (this.props.currentServiceId !== '0') {
            params += empty ? '' : '&';
            empty = false;
            params += 'service_id=' + this.props.currentServiceId
        }

        if (this.props.currentSpecialtyId !== '0') {
            params += empty ? '' : '&';
            empty = false;
            params += 'specialty_id=' + this.props.currentSpecialtyId
        }

        if (this.props.currentStartDate !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'start_date=' + this.props.currentStartDate.getFullYear() + '-' + (this.props.currentStartDate.getMonth() + 1) + '-' + this.props.currentStartDate.getDate()
        }

        if (this.props.currentFinishDate !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'finish_date=' + this.props.currentFinishDate.getFullYear() + '-' + (this.props.currentFinishDate.getMonth() + 1) + '-' + this.props.currentFinishDate.getDate()
        }

        if (this.props.currentStartTime !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'start_time=' + this.props.currentStartTime.getHours() + '-' + (this.props.currentStartTime.getMinutes())
        }

        if (this.props.currentFinishTime !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'finish_time=' + this.props.currentFinishTime.getHours() + '-' + (this.props.currentFinishTime.getMinutes())
        }

        alert(params);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Выберите врача:
                    <select value={this.props.currentDoctorId} onChange={this.handleDoctorChange}>
                        {this.props.doctors}
                    </select>
                </label><br/>

                <label>
                    Выберите специальность:
                    <select value={this.props.currentSpecialtyId} onChange={this.handleSpecialtyChange}>
                        {this.props.specialties}
                    </select>
                </label><br/>

                <label>
                    Выберите услугу:
                    <select value={this.props.currentServiceId} onChange={this.handleServiceChange}>
                        {this.props.services}
                    </select>
                </label><br/>

                <label>
                    Выберите промежуток даты:

                    От:
                    <DatePicker
                        locale={ru}
                        selected={this.props.currentStartDate}
                        onChange={date => this.handleStartDateChange(date)}
                        minDate={new Date()}
                        placeholderText="От"
                    />
                    До:
                    <DatePicker
                        locale={ru}
                        selected={this.props.currentFinishDate}
                        onChange={date => this.handleFinishDateChange(date)}
                        minDate={new Date()}
                        placeholderText="До"
                    />

                </label><br/>

                <label>
                    Выберите промежуток времени:

                    От:
                    <DatePicker
                        locale={ru}
                        selected={this.props.currentStartTime}
                        onChange={time => this.handleStartTimeChange(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Время"
                        dateFormat="h:mm aa"
                    />
                    До:
                    <DatePicker
                        locale={ru}
                        selected={this.props.currentFinishTime}
                        onChange={time => this.handleFinishTimeChange(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Время"
                        dateFormat="h:mm"
                    />

                </label><br/>

                <button>Фильтр</button>
                {/*<input type="submit" value="Submit" />*/}
            </form>
        );
    }
}

export default Appointment;