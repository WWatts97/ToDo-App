import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    catName: Yup.string().max(25, '*Max 25 characters').required('*REQUIRED'),
    catDesc: Yup.string().max(100, '*Max 100 characters')
})

const todoSchema = Yup.object().shape({
    name: Yup.string().max(100, '*Max 100 characters').required('*REQUIRED'),
    categoryId: Yup.number().required('*REQUIRED')
})

export {catSchema, todoSchema}