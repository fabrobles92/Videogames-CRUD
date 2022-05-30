import { useField } from 'formik'
import React from 'react'


function Select({label, ...props}) {
  const [field, meta] = useField({...props})
  // console.log(field, meta)
  return (
    <div className='field'>
      <h3>{label}</h3>
      <select className='' {...field} {...props}/>
    </div>
  )
}

export default Select