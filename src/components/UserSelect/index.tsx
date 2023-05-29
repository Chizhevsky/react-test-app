import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserSelect.module.css';

type UserSelectProps = {
    user?: number,
    idx: number,
}

function UserSelect(props: UserSelectProps) {
    const dispatch = useDispatch();
    const todos = useSelector((state: {list: { todos: any[] }}) => state.list.todos);

    // As described we need to use full functionality of redux-toolkit
    // So let use import hook from RKTQuery and use it's method to fetch users
    // And handle loading process
    React.useEffect(
        () => {
            console.log('userSelect');
            fetch('https://jsonplaceholder.typicode.com/users/').then(
                (users) => users.json(),
            ).then(users => setOptions(users))
        },
        [],
    )

    const [options, setOptions] = React.useState([]);

    const { idx } = props;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // I'd advice to like that
        // todos.map((todo, index) => index === idx ? { ...todo, user: e.target.value} : todo)
        // of find it using findIndex method of Array's
        const changedTodos = todos.map((t, index) => {
            const res = { ...t }
            if (index == idx) {
                console.log('props.user', props.user);
                res.user = e.target.value;
            }
            return res;
        })
        dispatch({type: 'CHANGE_TODO', payload: changedTodos})
    }

    return (
        <select name="user" className={styles.user} onChange={handleChange}>
            {options.map((user: any) => <option value={user.id}>{user.name}</option>)}
        </select>
    );
}

export default UserSelect;
