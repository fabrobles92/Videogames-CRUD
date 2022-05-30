import React from 'react'
import { Formik, Form } from 'formik'
import Input from './Form/Input'
import Select from './Form/Select'
import CheckBox from './Form/CheckBox'
import Container from '../Container/Container'
import './AddUser.css'

let years = []

for (let index = 1980; index < 2023; index++) {
  years = [...years, index]
  // years.push(index)
}





function AddUser() {
  const validate = (values) => {
    const errors = {}
    console.log('values:', values.xbox)
      if(!values.name){
        errors.name = 'Required'
      }
      if(!values.year){
        errors.year = 'Required'
      }else if(isNaN(values.year)){
        errors.year = 'Only number'
      }
      if(!values.photo){
        errors.photo = 'Required'
      }
      if(!values.description){
        errors.description = 'Required'
      }
      if(!values.xbox.length && !values.switch.length && !values.ps4.length && !values.pc.length){
        errors.xbox = 'Must select one!'
      }
    return errors
  }
  return (
      <Container>
        <h2>Add a Game!</h2>
        <Formik
        initialValues={{name: '', xbox: '', switch: '', ps4: '', pc: '', year: '1980', photo: '', description: ''}}
        validate={validate}
        onSubmit={(values) => {console.log(values)}}>
            <Form>
              <Input label='Name' name='name' checked/>
              <h3>Console</h3>
              <div className='console-list'>                
                <CheckBox name='xbox' value='xbox' label='Xbox One'/>
                <CheckBox name='switch' value='switch' label='Nintendo Switch'/>
                <CheckBox name='ps4' value='ps4' label='Play Station 4'/>
                <CheckBox name='pc' value='pc' label='PC'/>
              </div>
              <div className='year-photo-group'>
              <Select label='Release Year' name='year'>
                {years.map( year => (
                  <option key={year}>{year}</option>
                ))}
              </Select>
              <Input label='Photo' name='photo' type='file'/>
              </div>
              <Input label='Description' name='description' type='textarea'/>
              <button type='submit'>Add</button>
            </Form>
        </Formik>
      </Container>
  )
}

export default AddUser