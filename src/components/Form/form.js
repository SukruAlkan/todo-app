import React, {useEffect, useState} from 'react';
import '../styles.css';
import { v4 as uuidv4 } from "uuid";

const initialFormValue = {todoname: "", todostatus: ""};

function Form({todo, addTodo}) {
    const [form, setForm] = useState(initialFormValue);
    useEffect(() => {
        setForm(initialFormValue);
    }, [todo]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    };

    const onSubmit = (e) => {
        e.preventDefault(); // tarayıcı sayfayı yeniden yüklerse state in içi boşalıyor bunu önlemek için
        if (form.todoname === "") {
            return false;
        }
        addTodo([...todo, form]);
    };
    const uniqueId = uuidv4();
    const onChangeInput = (event) => {
        setForm({...form, id:uniqueId ,todoname: event.target.value, todostatus: ""});
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name="todoname" className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onChangeInput}
                       onKeyDown={handleKeyDown} value={form.todoname}/>
            </form>
        </header>
    );
}

export default Form;