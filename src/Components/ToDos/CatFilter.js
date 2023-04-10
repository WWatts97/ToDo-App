// This component will house a button for each category, as well as an ALL button to remove filtering in resource.js
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Navigation.css'
import {ImEye, ImEyeBlocked} from 'react-icons/im'

export default function CatFilter(props) {
    //We need to access and store categories from the API for this component to work
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.williamdwatts.com/api/categories`).then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }, []);

  return (
    <div className='text-center mt-3'>
        <button className="btn btn-outline-info custom-bg-color text-white m-1" onClick={() => props.setFilter(0)}>
            All
        </button>
        {categories.map(cat => 
            <button key={cat.categoryId} className="btn btn-outline-info custom-bg-color text-white m-1" onClick={() => props.setFilter(Number(cat.categoryId))}>
                {cat.catName}
            </button>
            )}
<div></div>
            {!props.showDone ?
            <button className='btn btn-outline-info custom-bg-color text-white m-1' onClick={() =>props.setShowDone(!props.showDone)}>
                Show Complete &ensp;<ImEye/>
            </button>:
            <button className='btn btn-outline-info custom-bg-color text-white m-1' onClick={() => props.setShowDone(!props.showDone)}>
                Hide Complete &ensp;<ImEyeBlocked/>
                </button>
                }
    </div>
  )
}
