import React from 'react'
import { Formik, Form, Field } from 'formik' //this wil produce the form for creating/editing a category
import { catSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function CatForm(props) {
    const handleSubmit = (values) => {
        console.log(values)
        if(!props.category){
            //any code in this scope will only execute if we ate in create mode
            const catToCreate = values

            //send the object in a POST request to the API
            axios.post(`http://todoapi.williamdwatts.com/api/categories`, catToCreate).then(() => {
                //first we want to close the create form when a new category is submitted
                props.setShowCreate(false)
                //next we want to display the new set of categories to the user, which will include the new cat
                props.getCategories()
            })
        }
        else{
            const catToEdit = {
                categoryId: props.category.categoryId,
                catName: values.catName,
                catDesc: values.catDesc
            }
            
            axios.put(`http://todoapi.williamdwatts.com/api/categories/${props.category.categoryId}`, catToEdit).then(() => {
                props.setShowEdit(false)

                props.getCategories()
            })
        }
    }

  return (
    <div className='createCategory m-2 text-white text-center'>
        <Formik
            initialValues={{
                //Below is a ternary operator that makes our form behave differently based on whether we have a prop
                // called "category" (if we have that prop we are in edit mode)
                catName: props.category ? props.category.catName : '',
                catDesc: props.category ? props.category.catDesc : ''
            }}
            validationSchema={catSchema}
            onSubmit={values => handleSubmit(values)}>
            {({errors, touched}) => (
                <Form id='catForm' className='row text-center m-auto'>
                    <div className="form-group m-1 p-1">
                        <Field name='catName' className='form-control' placeholder='Name' />
                        {errors.catName && touched.catName ? 
                            <div className="text-danger">{errors.catName}</div>
                        : null}
                    </div>
                    <div className="form-group m-1 p-1">
                        <Field name='catDesc' className='form-control' placeholder='Description' />
                        {errors.catDesc && touched.catDesc && 
                            <div className="text-danger">{errors.catDesc}</div>
                        }
                    </div>
                    <div className="form-group m-1">
                        <button type='submit' className="btn btn-success">Create Category</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}
