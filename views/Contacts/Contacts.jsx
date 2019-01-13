import React from 'react'

import Title from '../../components/Title'
import data from '../../data/contacts'
import styles from './styles.module.scss'




const Contacts = () => {
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
                        <div><input className={`${styles.Controls} ${styles.Input}`} type="text" name="name" placeholder="Имя*" id="" /></div>
                        <div><input className={`${styles.Controls} ${styles.Input}`} type="email" name="mail" placeholder="E-mail*" id="" /></div>
                        <textarea className={`${styles.Controls} ${styles.Textarea}`} placeholder="Cообщение"></textarea>
                        <div><input className={styles.Submit} type="submit" /></div>
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
        </section>

    )
}

export default Contacts
