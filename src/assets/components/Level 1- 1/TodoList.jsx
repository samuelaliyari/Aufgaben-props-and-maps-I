import TodoItem from './TodoItem';
import data from './data.json'
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    return ( 
        <ul>
            {data.map((todo) => <TodoItem
                key = {uuidv4()}
                task = {todo.task}
            />
            )}
        </ul>
    );
}

export default TodoList;