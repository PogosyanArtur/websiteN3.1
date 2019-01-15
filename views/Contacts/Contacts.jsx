import React, { Component } from 'react'


import Title from '../../components/Title'
import data from '../../data/contacts'
import Input from '../../components/Input'
import styles from './styles.module.scss'


class Contacts extends Component {
    state = {
        form: {
            formInputs: [
                {
                    elementType: 'input',
                    elementConfig: {
                        name: 'name',
                        type: 'text',
                        id: 'form_name',
                    },
                    value: '',
                    label:'Имя',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                {
                    elementType: 'input',
                    elementConfig: {
                        name: 'mail',
                        type: 'email',
                        id: 'form_mail',
                    },
                    value: '',
                    label:'E-mail',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                {
                    elementType: 'textarea',
                    elementConfig: {
                        name: 'massage',
                        id: 'form_massage',
                    },
                    value: '',
                    label:'Cообщение',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                {
                    elementType: 'input',
                    elementConfig: {
                        type: "submit",
                        name: 'submit',
                        id: 'form_submit',
                    },
                    value: 'Отправить',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }
            ]
        }
    }

    inputChangedHandler = () => {

    }

    render() {
        return (
            <section id="contacts" >
                <Title className={styles.Title}>контакты</Title>
                <div className={styles.Content}>
                    <div className={styles.ContentContainer}>
                        <div>
                            <h4 className={styles.Label}>Ответы на вопросы</h4>
                            <p className={styles.Context}>С удовольствем ответим на все ваши вопросы по телефону <br /> {data.tel1.name} Или просто заполните форму ниже:</p>
                        </div>
                        <form className={styles.Form}>
                            {this.state.form.formInputs.map(el => (
                                <Input
                                    elementType={el.elementType}
                                    elementConfig={el.elementConfig}
                                    key={el.elementConfig.name}
                                    changed={this.inputChangedHandler}
                                    value={el.value}
                                    label={el.label}
                                />
                            ))}
                        </form>
                    </div>
                    <div className={styles.ContentContainer}>
                        <div>
                            <h4 className={styles.Label}>Центральный офис</h4>
                            <p className={styles.Context}>МО, г. Котельники мкр. Силикат, промзона, стр.9</p>
                            <p className={styles.Context}><span>E-mail: </span><a href={data.mail1.href} className={styles.Link}>{data.mail1.name}</a></p>
                            <p className={styles.Context}><span>Телефон: </span><a href={data.tel1.href} className={styles.Link}>{data.tel1.name}</a></p>
                        </div>
                        <div>
                            <div className={styles.TelephoneLine}></div>
                            <span className={styles.Label}>Звоните: </span><a href={data.tel1.href} className={`${styles.Link} ${styles.Link_lg}`}>{data.tel1.name}</a>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default Contacts
