import React from 'react'
import Container from '../Container/Container'
import { useNavigate } from "react-router-dom";
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import axios from 'axios';
import './AddVideoGame.css'



function AddVideoGame() {
  const navigate = useNavigate()

  const handleAdd = async (values) => {
    console.log(values)
    const response =  await fetch("/api", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    })
    console.log("data", response)
    if(response.status === 200){
      navigate('/')
    }
    // const formData = new FormData()
    // formData.append('profileImg', values.photo)

    // const response =  await fetch("/api/img", {
    //   method: 'POST',
    //   headers: {'Content-Type': 'undefined'},
    //   body: formData
    // })

    // // axios.post("/api/img", values.photo, {
    // //     }).then(res => {
    // //         console.log(res)
    // //     })
    // console.log("data", response)
  
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