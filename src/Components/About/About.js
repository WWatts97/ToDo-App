import React from 'react'
import image from '../../images/me.jpg'
import '../Navigation.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function About() {
  return (
    <section className='bg-image'>
      <article className='custom-bg-color p-4 o '>
        <h1 className='text-center header-text text-color'>About Me!</h1>
      </article>
      <Container className=' custom-bg-color-o mt-5 rounded-me'>
        <Row>
          <Col lg={6} className='mt-5'>
          <img src={image} alt='Me' className='rounded-me mb-5 fill' />
          </Col>
          <Col lg={6} className='about-text mt-5'>
            <h3 className='text-white'>Welcome!</h3>

            <p className='text-white about'>
              Hi, I'm William Watts. Thank you for checking out my ToDo app! This app is written with
              <a href="https://reactjs.org/" target='_blank' rel='noreferrer' className="p-link"> ReactJS</a>
              &nbsp; and has a&nbsp;  
              <a href="https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16" target='_blank' rel='noreferrer' className="p-link">SQL </a>
              &nbsp;(using SSMS) database. The app and database are connected via an&nbsp; 
              <a href="https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-6.0"
              target='_blank' rel='noreferrer' className="p-link">ASP.NET Web API</a>. 
              Using help from npm packages, I was able to implement extra functionality, including routing via&nbsp;
              <a href="https://reactrouter.com/en/main" target='_blank' rel='noreferrer' className="p-link">
                React Router Dom</a>,
              API request handling through&nbsp;
              <a href="https://axios-http.com/" target='_blank' rel='noreferrer' className="p-link">Axios</a>,
              authorization via <a href="https://firebase.google.com/products/auth"
              target='_blank' rel='noreferrer' className="p-link"> Google Firebase</a>
              &nbsp;and form handling and schema validation using a combination of&nbsp; 
              <a href="https://formik.org/docs/overview" target='_blank' rel='noreferrer'
              className="p-link">Formik</a>
              &nbsp;and <a href="https://github.com/jquense/yup" target='_blank' rel='noreferrer' className="p-link"> Yup</a>.
              My full source code is available <a href="" target='_blank' rel='noreferrer' className="p-link">here on GitHub</a>.
            </p>
          </Col>
        </Row>
      </Container>
      </section>
  )
}

        
        
