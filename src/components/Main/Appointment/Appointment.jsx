import React from "react";
import styles from './Appointment.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import RegisterContainer from "./Register/RegisterContainer";

const Appointment = (props) => {

    let doctors = props.doctors.map(doctor => <option value={doctor.id}>{doctor.name}</option>);
    let specialties = props.specialties.map(specialty => <option value={specialty.id}>{specialty.name}</option>);
    let services = props.services.map(service => <option value={service.id}>{service.name}</option>);
    let registers = props.registers.map(register => <RegisterContainer id={register.id} doctor={register.doctor} service={register.service} specialty={register.specialty} date={register.date} time={register.time}/>);

    return (
        <div className={styles.wrapper}>

            <h1 className={styles.h30}>Запись на прием</h1>
            <div>
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
                currentFinishTime={props.currentFinishTime}

                getRegistersData={props.getRegistersData}/>

                <hr/>

            {registers}
        </div> </div>
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
            params += 'date_start=' + this.props.currentStartDate.getDate() + '-' + (this.props.currentStartDate.getMonth() + 1) + '-' + this.props.currentStartDate.getFullYear()
        }

        if (this.props.currentFinishDate !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'date_finish=' + this.props.currentFinishDate.getDate() + '-' + (this.props.currentFinishDate.getMonth() + 1) + '-' + this.props.currentFinishDate.getFullYear()
        }

        if (this.props.currentStartTime !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'time_start=' + this.props.currentStartTime.getHours() + ':' + (this.props.currentStartTime.getMinutes())
        }

        if (this.props.currentFinishTime !== null) {
            params += empty ? '' : '&';
            empty = false;
            params += 'time_finish=' + this.props.currentFinishTime.getHours() + '-' + (this.props.currentFinishTime.getMinutes())
        }

        // alert(params);
        this.props.getRegistersData(params);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.all}>
                    <div>
                        <img className={styles.header_img6} src={require('../../../assets/images/6.png')} alt="logo"/>
                        <img className={styles.header_img8} src={require('../../../assets/images/6.png')} alt="logo"/>
                        <img className={styles.header_img10} src={require('../../../assets/images/6.png')} alt="logo"/>
                        <img className={styles.header_img7} src={require('../../../assets/images/7.png')} alt="logo"/>
                        <img className={styles.header_img9} src={require('../../../assets/images/9.png')} alt="logo"/>
                    </div>

                <label> <div className={styles.hh9}>
                    Выбрать врача:
                    <select className={styles.select} value={this.props.currentDoctorId} onChange={this.handleDoctorChange}>
                        {this.props.doctors}
                    </select>
                </div>
                </label><br/>

                <label><div className={styles.hh10}>
                     Выбрать специальность:
                    <select className={styles.select2} value={this.props.currentSpecialtyId} onChange={this.handleSpecialtyChange}>
                        {this.props.specialties}
                    </select>
                    </div>
                </label><br/>

                <label><div className={styles.hh11}>

                    Выбрать услугу:
                    <select className={styles.select3} value={this.props.currentServiceId} onChange={this.handleServiceChange}>
                        {this.props.services}
                    </select>

                </div>
                </label><br/>

                <label>
                    <div className={styles.ot}>
                     Выбрать промежуток даты:
                    <div className={styles.select4}>
                    От:
                    <DatePicker
                        locale={ru}
                        selected={this.props.currentStartDate}
                        onChange={date => this.handleStartDateChange(date)}
                        minDate={new Date()}
                        placeholderText="От"
                    /></div>
                        <div className={styles.select5}>
                    До:
                    <DatePicker
                        locale={ru}
                        selected={this.props.currentFinishDate}
                        onChange={date => this.handleFinishDateChange(date)}
                        minDate={new Date()}
                        placeholderText="До"
                    /></div>
</div>
                </label><br/>

                <label>
                    <div className={styles.ot1}>
                  Выбрать промежуток времени:
                        <div className={styles.select6}>
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
                    /></div>
                        <div className={styles.select7}>
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
                    /></div>
                    </div>
                </label><br/>

                <button className={styles.button50}>Найти</button>
                {/*<input type="submit" value="Submit" />*/}
                </div>

                </form>
        );
    }
}

export default Appointment;