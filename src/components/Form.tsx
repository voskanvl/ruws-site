import React from "react";
import styles from "./Form.module.sass";

function Form() {
    return (
        <div className={styles.form__form}>
            <h2 style={{ marginTop: 0 }}>Связаться с нами</h2>
            <form className={styles.form}>
                <label htmlFor="">
                    <input
                        className={styles.form__input}
                        type="text"
                        name="name"
                        placeholder="Представьтесь, пожалуйста"
                    />
                </label>
                <label htmlFor="">
                    <input
                        className={styles.form__input}
                        type="email"
                        name="email"
                        placeholder="Ваш e-mail"
                    />
                </label>
                <label htmlFor="">
                    <input
                        className={styles.form__input}
                        type="phone"
                        name="phone"
                        placeholder="Ваш телефон"
                    />
                </label>
                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Расскажите немного о вашем проекте"></textarea>
                <label
                    htmlFor="file"
                    style={{ marginTop: "20px", display: "block", cursor: "pointer" }}>
                    <span className={styles.form__file}>Прикрепить файл</span>
                    <input type="file" name="file" id="file" hidden />
                </label>
                <button style={{ marginTop: "45px" }}>Отправить</button>
            </form>
        </div>
    );
}

export default Form;
