import React from 'react'
import Container from '../Container/Container'
import { useNavigate } from "react-router-dom";
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import './AddVideoGame.css'



function AddVideoGame({rows, addData}) {
  const navigate = useNavigate()

  const handleAdd = (values) => {

    rows.push({...values, id:  rows.length ? rows.slice(-1)[0].id + 1 : 1})
    // console.log(rows)
    addData(rows)
    navigate('/')
  }

  return (
      <Container>
        {console.log('Renderizando AddVideoGame')}
        <Layout>
          <Form handleAdd={handleAdd}/>
      </Layout>
      </Container>
  )
}

export default AddVideoGame