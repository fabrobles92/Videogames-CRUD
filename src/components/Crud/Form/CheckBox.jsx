import React from 'react'
import { useField } from 'formik'

function CheckBox({label, ...props}) {
    const [field, meta] = useField({...props, type:'checkbox'})
    // console.log(field, meta)
  return (
    <div className='field'>
        <span>{label}</span>
        <input type='checkbox' {...field} {...props}/>        
        {meta.error ? <span className='error'>{' '+ meta.error}</span> : null}
    </div>
  )
}

export default CheckBox