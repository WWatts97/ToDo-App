import React from 'react'
//any time we want to log a use in or out or check on who the user is, we need to complete 3 steps:
// step 1 import the useAuth function from out authcontext
import { useAuth } from '../../contexts/AuthContext'
//the useAuth function above gives us access to the cuurentUser, login, and logout objects.
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    //step2 write a hook to access any of the objects we wish to use from our useAuth()
    const {login} = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        //Await keyword below pauses code from executing until we get a response from firebase
        await login()

        //return the user to a specific location suing the useNaviogate from react-router-dom
        return navigate('/')
    }

  return (
    //step3 create the UI and call upon useAuth() objects as needed
    <div className='login'>
        <article className="bg-info mb-5 p-5 text-dark">
            <h1 className="text-center">Welcome to ResourcesPlus!</h1>
        </article>
        <Container>
            <Card className='m-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    <button className="btn btn-success" onClick={() => handleAuth()}>
                        Login w/ GitHub
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
