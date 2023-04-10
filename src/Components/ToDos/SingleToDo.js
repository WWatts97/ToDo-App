import React, {useState} from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import ToDoEdit from './ToDoEdit'
import axios from 'axios';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

export default function SingleToDo(props) {

  const [showEdit, setShowEdit] = useState(false);

  const flipDone = () => {
    let updatedToDo = {
      toDoId: props.todo.toDoId,
      name: props.todo.name,
      done: !props.todo.done,
      categoryId: props.todo.categoryId
    }
    axios.put(`http://todoapi.williamdwatts.com/api/todos/${props.todo.toDoId}`, updatedToDo).then(response => {
      console.log(response)
      props.getToDos()
    })
  }

  const deleteTodo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todo.name}?`)) {
      axios.delete(`http://todoapi.williamdwatts.com/api/todos/${id}`).then(() => props.getToDos())
    }
  }

  return (
    <tr>
        <td><input type='checkbox' checked={props.todo.done} onChange={() => flipDone()}/></td>
        <td>{props.todo.name}</td>
        <td>{props.todo.category.catName}</td>
        <td>
          <button id="editLink" onClick={() => setShowEdit(true)}><FaEdit/></button>
          <button id="deleteLink" onClick={() => deleteTodo(props.todo.toDoId)}><FaTrashAlt/></button>
          </td>
        {showEdit &&
          <ToDoEdit
            toDo={props.todo}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            getToDos={props.getToDos} />
        }
    </tr>
  )
}