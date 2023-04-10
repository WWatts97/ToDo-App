import React from 'react'
import {Modal} from 'react-bootstrap'
import ToDoForm from './ToDoForm'

export default function ToDoEdit(props) {
  return (
    <Modal
        show={props.showEdit}
        onHide={() => props.setShowEdit(false)}
        size='lg'>
            <Modal.Header closeButton>
                <h2>Editing {props.toDo.name}</h2>
            </Modal.Header>
            <Modal.Body>
                <ToDoForm 
                setShowEdit={props.setShowEdit} 
                getToDos={props.getToDos}
                toDo={props.toDo}/>
            </Modal.Body>
    </Modal>
  )
}
