import React, {useState} from 'react'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import CatEdit from './CatEdit'
import axios from 'axios';

export default function SingleCategory(props) {
  const [showEdit, setShowEdit] = useState(false);

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.category.catName}?`)) {
      axios.delete(`http://todoapi.williamdwatts.com/api/categories/${id}`).then(() => props.getCategories())
    }
  }
  return (
    <tr>
        <td>{props.category.catName}</td>
        <td>{props.category.catDesc}</td>
        <td>
          <button className="m-1 rounded" id="editLink" onClick={() => setShowEdit(true)}>
            <FaEdit/>
          </button>
          <button className="m-1 rounded" id="deleteLink" onClick={() => deleteCat(props.category.categoryId)}>
            <FaTrashAlt/>
          </button>
          {showEdit &&
            <CatEdit 
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              getCategories={props.getCategories}
              category={props.category} />
          }
        </td>
    </tr>
  )
}