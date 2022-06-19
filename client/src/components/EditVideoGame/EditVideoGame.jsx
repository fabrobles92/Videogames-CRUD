
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from '../Container/Container';
import Layout from '../Layout/Layout';
import Form from '../Form/Form'

const EditVideoGame = () => {
    const params = useParams();
    const [videogame, setVideoGame] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {        
      const getItem = async () => {
        const response = await fetch('/api/' + params.id, {
          method: 'GET',
          headers: {"Content-Type":"application/json"}
          }
        )
        if(response.status === 200){
          const data = await response.json()
          // console.log('despues llamar api', data)
          setVideoGame(data)
        }
      }
      getItem()
    }, [])
    
const handleEdit = async (id, values) => {
    // console.log(id)
    const formData = new FormData()
    for(let key in values){
      formData.append(key, values[key])
    }
    const response = await fetch('/api/' + id, {
      method: 'PUT',
      // headers: {'Content-Type':'application/json'},
      body: formData
    })
    if (response.status === 200){
      navigate('/')
    }
}

    const render = () => {
      // console.log(videogame)
      switch (videogame) {
        case true:
          return(
            null
          )
        case false:
          return(<h1>Game doesn't exist</h1>)
        default:
          return <Form videogame={videogame} id={videogame._id} handleEdit={handleEdit}/>
      }
    }
    return(
      <Container>
        {console.log('Renderizando EditVideoGame')}
          <Layout>
            {render()}
          </Layout>          
      </Container>
    )
  }

export default EditVideoGame