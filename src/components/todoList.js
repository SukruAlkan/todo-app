import React, {useEffect, useState} from 'react';
import Form from "./Form/form";
import List from "./List/list";
import Header from "./Header/header";

function TodoList(props) {
    const [todo, setTodo] = useState([
        {
            id:0,
            todoname: "Taste JavaScript",
            todostatus: "completed",
        },
        {
            id:1,
            todoname: "Code furiously",
            todostatus: "completed",
        },
        {
            id:2,
            todoname: "Give talks",
            todostatus: "",
        },
        {
            id:3,
            todoname: "Write tutorials",
            todostatus: "completed",
        },
        {
            id:4,
            todoname: "Have a life!",
            todostatus: "",
        }
    ]);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    const deleteTodo = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
    };

    return (
        <section className="todoapp">
            <Form todo={todo} addTodo={setTodo}/>
            <List todo={todo} delTodo={deleteTodo}/>
            <Header/>
        </section>
    );
}

export default TodoList;