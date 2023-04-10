import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Container } from 'react-bootstrap';
import SingleToDo from './SingleToDo';
import CatFilter from './CatFilter';
import ToDoCreate from './ToDoCreate'
import '../Navigation.css'


export default function ToDos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(0);
  const [showCreate, setShowCreate] = useState(false);
  const [showDone, setShowDone] = useState(false);

  const getToDos = () => {
    axios.get(`http://todoapi.williamdwatts.com/api/todos`).then(response => {
      console.log(response)
      setTodos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  return (
    <section className='bg-image'>
      <article className='custom-bg-color p-4 o'>
        <h1 className='text-center text-color header-text'>ToDo Checklist!</h1>
      </article>
      {/* CREATE UI STARTS */}
        <div className="bg-dark p-2 mb-3 text-center o">
          <button className="btn btn-info" onClick={() => setShowCreate(!showCreate)}>
            {!showCreate ? 'Create ToDo' : 'Cancel'}
          </button>
          <div className="createContainer">
            {showCreate &&
              <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate}/>
            }
          </div>
        </div>
      {/* CREATE UI ENDS */}
      <CatFilter setFilter={setFilter} showDone={showDone} setShowDone={setShowDone}/>
      <Container className='p-2'>
                <table className='table table-hover bg-info table-dark my-3'>
                    <thead className='table-secondary text-uppercase'>
                        <tr>
                            <th>Done?</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {!showDone ?
              <>
               {filter === 0 ? todos.filter(x => x.done === false).map(x =>
                <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                todos.filter(x => x.done === false && x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </> :
            <>
              {filter === 0 ? todos.map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos}/>
                ) :
                todos.filter(x => x.categoryId === filter).map(x =>
                  <SingleToDo key={x.toDoId} todo={x} getToDos={getToDos} />
              )}
            </>
            }
          </tbody>
        </table>
            {!showDone ?
            <>
            {filter !== 0 && todos.filter(x => x.done === false && x.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are ToDo's to complete in this category.
              </h2>
            }
            </> :
            <>
              {filter !== 0 && todos.filter(x => x.categoryId === filter).length === 0 &&
              <h2 className="alert alert-warning text-dark">
                There are ToDo's to complete in this category.
              </h2>
            }
            </>

            }
            </Container>
    </section>
  )
}