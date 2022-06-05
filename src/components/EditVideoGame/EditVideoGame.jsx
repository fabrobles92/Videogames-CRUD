import _ from 'lodash'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from '../Container/Container';
import Layout from '../Layout/Layout';
import Form from '../Form/Form'

const EditVideoGame = ({rows, addData}) => {
    const params = useParams();
    const [videogame, setVideoGame] = useState({})
    const navigate = useNavigate()
    useEffect(() => {        
        setVideoGame(rows.find(row => row.id == params.id))
    }, [])
    
const handleEdit = (id, values) => {
    rows = rows.map(object => {
        if(object.id == id){
            console.log('encontrado', object)
            return {...object, ...values}
        }
        return object
    })
    // const row = rows.find( object => object.id == id)   
    // const editedRow = {...row, ...values}
    // console.log(editedRow)
    addData(rows)
    navigate('/')
}
    return(
      <Container>
        {console.log('Renderizando EditVideoGame')}
          <Layout>
            {_.isEmpty(videogame) ? <h1>Game doesnt exist!</h1> : <Form videogame={videogame} handleEdit={handleEdit} id={videogame.id}/>}
          </Layout>          
      </Container>
    )
  }

export default EditVideoGame