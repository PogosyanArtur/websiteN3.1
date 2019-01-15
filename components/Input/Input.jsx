import React from 'react'
import styles from './styles.module.scss'

const Input = (props) => {
    const {
        elementType,
        elementConfig,
        changed,
        value,
        className,
        label
    } = props

    let inputElement = null;

    switch (elementType) {
        case 'input':
            if (elementConfig.type === "submit") {
                inputElement = <input
                    className={`${styles.Controls} ${styles.Submit} ${className}`}
                    {...elementConfig}
                    onChange={changed}
                    value={value}
                />
                break;
            } else {
                inputElement = <input
                    className={`${styles.Controls} ${styles.Input} ${className}`}
                    {...elementConfig}
                    onChange={changed}
                    value={value}
                />
                break;
            }

        case 'textarea':
            inputElement = <textarea
                className={`${styles.Controls} ${styles.Textarea} ${className}`}
                {...elementConfig}
                onChange={changed}
                value={value}
            />
            break;
        default:
            inputElement = <input
                className={`${styles.Controls} ${styles.Input} ${className}`}
                {...elementConfig}
                onChange={changed}
                value={value}
            />
    }


    return (
        <div>
            {label && <label className={styles.Label}>{label}</label>}            
            {inputElement}
        </div>
    )
}

export default Input
