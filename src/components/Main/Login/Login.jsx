import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import styles from './Login.module.css'


const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData) => {
        let {emailOrPhone, password} = formData;
        props.login(emailOrPhone, password);
    };

    return (
        <div className={styles.dia}>



            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const LoginForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <img className={styles.header_img2} src={require('../../../assets/images/2.png')} alt="logo"/>
                <img className={styles.header_img3} src={require('../../../assets/images/3.png')} alt="logo"/>
                <img className={styles.header_img4} src={require('../../../assets/images/4.png')} alt="logo"/>
                <img className={styles.header_img5} src={require('../../../assets/images/5.png')} alt="logo"/>
                <h1 className={styles.h13}>Ваш личный кабинет</h1>
                <h2 className={styles.h10}>Оплата сервиса банковской картой</h2>
                <h2 className={styles.h11}>Просмотр анализов</h2>
                <h2 className={styles.h12}>Возможность записаться на приём</h2>
                <h2 className={styles.h9}>Получить 15% скидки на первое посещение при использование мобильного приложения</h2>
            </div>
            <div className={styles.dip}>

                <h1 className={styles.h1}>Вход</h1>


                <Field className={styles.input} placeholder={"Email или телефон"} name={"emailOrPhone"} component={Input}/>





                <Field className={styles.input} placeholder={"Пароль"} name={"password"} component={Input}/>



                <button className={styles.button}>Войти</button>




                <NavLink to={'/restore-password/send-email'} className={styles.button1}>Забыли пароль?</NavLink>

            </div>

            <div  className={styles.die}>
                <p className={styles.p}>Ещё нет аккаунта?</p>
                <NavLink to={'/SignUp'} className={styles.button2}>Зарегистрируйтесь</NavLink>

            </div>
        </form>

    );
};



const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default withRouter(Login);
// export default Login;