import React, {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik'
import { todoSchema } from '../../utilities/validationSchema';
import axios from 'axios'

export default function ToDoForm(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.williamdwatts.com/api/categories`).then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }, []);

    const handleSubmit = (values) => {
        console.log(values)
        if(!props.toDo) {
            const toDoToCreate = {
                name: values.name,
                done: false,
                categoryId: values.categoryId
            }
            axios.post(`http://todoapi.williamdwatts.com/api/todos`, toDoToCreate).then(() => {
                props.setShowCreate(false)
                props.getToDos()
            })
        }
        else{ 
            const toDoToEdit = {
                toDoId: props.toDo.toDoId,
            name: values.name,
            done: props.todo.done,
            categoryId: values.categoryId
        }

        axios.put(`http://todoapi.williamdwatts.com/api/todos/${props.toDo.toDoId}`, toDoToEdit).then(() => {
            props.getToDos()
            props.setShowEdit(false)
        })

        }
    }


  return (
    <Formik 
    initialValues={{
        name: props.toDo ? props.toDo.name : '',
        done: props.toDo ? props.toDo.done : false,
        categoryId: props.toDo ? props.toDo.categoryId : '',
    }}
    validationSchema={todoSchema}
    onSubmit={(values) => handleSubmit(values)}>
        {({errors, touched}) => (
            <Form id='todoForm'>
                <div className="form-group m-3">
                        <Field name='name' className='form-control' placeholder='Name'/>
                        {errors.name && touched.name &&
                            <div className='text-danger'>{errors.name}</div>
                        }
                    </div>
                    <div className="form-group m-3">
                        <Field name='categoryId' as='select' className='form-control' >
                            <option value='' disabled>
                                [---Please Choose---]
                            </option>
                            {/* Below we will map out an option for every category in the API */}
                            {categories.map(cat => 
                                <option key={cat.categoryId} value={cat.categoryId}>
                                    {cat.catName}
                                </option>
                                )}
                        </Field>
                    </div>
                    <div className="form-group m-3">
                        <button type='submit' className="btn btn-info m-3">
                            Confirm ToDo
                        </button>
                    </div>
            </Form> 
        )}

    </Formik>
  )
}
