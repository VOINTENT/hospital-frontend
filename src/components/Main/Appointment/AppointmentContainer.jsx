import React from "react";
import Appointment from "./Appointment";
import {connect} from "react-redux";
import {
    getDoctorsData, getRegistersData, getServicesData, getSpecialtiesData,
    updateCurrentDoctor, updateCurrentFilter, updateCurrentFinishDate, updateCurrentFinishTime,
    updateCurrentService,
    updateCurrentSpecialty,
    updateCurrentStartDate, updateCurrentStartTime
} from "../../../redux/appointment-reducer";


class AppointmentContainer extends React.Component {

    componentDidMount() {
        this.props.getDoctorsData();
        this.props.getServicesData();
        this.props.getSpecialtiesData();
    }

    render() {
        return <Appointment {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    doctors: state.appointment.doctors,
    currentDoctorId: state.appointment.currentDoctorId,

    specialties: state.appointment.specialties,
    currentSpecialtyId: state.appointment.currentSpecialtyId,

    services: state.appointment.services,
    currentServiceId: state.appointment.currentServiceId,

    currentStartDate: state.appointment.currentStartDate,
    currentFinishDate: state.appointment.currentFinishDate,

    currentStartTime: state.appointment.currentStartTime,
    currentFinishTime: state.appointment.currentFinishTime,

    registers: state.appointment.registers
});

const mapDispatchToProps = {
    updateCurrentDoctor,
    updateCurrentSpecialty,
    updateCurrentService,
    updateCurrentStartDate,
    updateCurrentFinishDate,
    updateCurrentStartTime,
    updateCurrentFinishTime,

    getDoctorsData,
    getServicesData,
    getSpecialtiesData,

    getRegistersData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentContainer);