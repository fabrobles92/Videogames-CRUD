import {useEffect, useState} from 'react'
import Container from '../Container/Container'
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import SnackbarMessage from '../Landing/SnackbarMessage'
import './AddVideoGame.css'



function AddVideoGame() {
  const [message, setMessage] = useState({flag: null, message: null})

  useEffect(() => {
    const time = setTimeout(()=>{
        setMessage({flag: null, message: null})
    }, 3000)
    return () => clearTimeout(time)
}, [message.flag])

  const handleAdd = async (values, resetForm) => {
    // console.log(values)
    const formData = new FormData()
    for(let key in values){
      formData.append(key, values[key])
    }
    const response =  await fetch("/api", {
      method: 'POST',
      // headers: {'Content-Type': 'application/json'},
      body: formData
    })
    // console.log("data", await response.json())
    if(response.status === 200){
      resetForm()
      setMessage({flag: true, message: 'Videogame Added Successfully'})
    }
    else {
      setMessage({flag: false, message: 'There was an error adding the videogame, please try again'})
    }
  }

  return (
      <Container>
        {console.log('Renderizando AddVideoGame')}
        <Layout>
          <Form handleAdd={handleAdd}/>
          <SnackbarMessage state={message}/>
      </Layout>
      </Container>
  )
}

export default AddVideoGame