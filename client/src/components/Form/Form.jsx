import React from 'react'
import { Formik, Form} from 'formik'
import Input from '../Form/Input'
import Select from '../Form/Select'
import CheckBox from '../Form/CheckBox'
import './Form.css'

let years = []

for (let index = 1980; index < 2023; index++) {
  years = [...years, index]
  // years.push(index)
}

const validate = (values) => {
    const errors = {}
    if(!values.name){
        errors.name = 'Required'
    }
    if(!values.year){
        errors.year = 'Required'
    }else if(isNaN(values.year)){
        errors.year = 'Only number'
    }
    if(!values.description){
        errors.description = 'Required'
    }
    if(!values.consoles.length){
        errors.consoles = 'Must select one!'
    }
    return errors
    }

function form({values, setFieldValue }){
    return(
        <Form>
            {values.name ? <h2>Edit an existing Game!</h2> : <h2>Add a Game!</h2>}
            <Input label='Name' name='name'/>
            <h3>Console</h3>
            <div className='console-list'>                
                <CheckBox name='consoles' value='Xbox' label='Xbox One'/>
                <CheckBox name='consoles' value='Switch' label='Nintendo Switch'/>
                <CheckBox name='consoles' value='PS4' label='Play Station 4'/>
                <CheckBox name='consoles' value='PC' label='PC'/>
            </div>
            <div className='year-photo-group'>
                <Select label='Release Year' name='year'>
                    {years.map( year => (
                    <option key={year}>{year}</option>
                    ))}
                </Select>
                <div className="field">
                    <h3>Photo</h3>
                    <input 
                        label='Photo' 
                        name='photo' 
                        type='file' 
                        onChange={(event) => {
                            setFieldValue("photo", event.currentTarget.files[0])
                            }}/>
                </div>  
            </div>
            <Input label='Description' name='description' type='textarea'/>
            <button type='submit'>Submit</button>
        </Form>
    )    
}


function CrudForm({videogame, handleEdit, handleAdd, id}) {    
    const videogameObject = videogame ? {name: videogame.name, consoles: videogame.consoles, year: videogame.year, photo: '', description: videogame.description} : {name: '', consoles: [], year: '2022', photo: '', description: ''}
    return (
        <Formik
        initialValues={videogameObject}
        validate={validate}
        onSubmit={(values, {resetForm}) => {videogame ? handleEdit(id, values) : handleAdd(values, resetForm)}}
        component={form}
        />
    )
}



export default CrudForm