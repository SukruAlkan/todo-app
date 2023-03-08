import React, {useDebugValue, useEffect, useState} from 'react';
import '../styles.css'

function List({todo, delTodo}) {

    const [list, setList] = useState(todo);
    useEffect(() => {
        setList(list)
    }, [list]);

    return (
        <section className="todoapp">
            <ul className="todo-list">
                {todo.map((item, index) => (
                    <li key={index} className={item.todostatus}>
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>{item.todoname}</label>
                            <button className="destroy" onClick={() => delTodo(item.id)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default List;