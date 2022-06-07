import _ from 'lodash'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from '../Container/Container';
import Layout from '../Layout/Layout';
import Form from '../Form/Form'

const EditVideoGame = () => {
    const params = useParams();
    const [videogame, setVideoGame] = useState({})
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
          // console.log(data)
          setVideoGame(data)
        }
      }
      getItem()
    }, [])
    
const handleEdit = async (id, values) => {
    console.log(id)
    const response = await fetch('/api/' + id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(values)
    })
    if (response.status === 200){
      navigate('/')
    }
    
}
    return(
      <Container>
        {console.log('Renderizando EditVideoGame')}
          <Layout>
            {_.isEmpty(videogame) ? <h1>Game doesnt exist!</h1> : <Form videogame={videogame} handleEdit={handleEdit} id={videogame._id}/>}
          </Layout>          
      </Container>
    )
  }

export default EditVideoGame