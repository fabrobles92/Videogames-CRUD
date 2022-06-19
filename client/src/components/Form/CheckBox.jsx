import React from 'react'
import { useField } from 'formik'

function CheckBox({label, ...props}) {
    const [field, meta] = useField({...props, type:'checkbox'})
    // const [checkeado, setCheckeado] = useState(meta.value.length && meta.value.includes(field.value) ? true : false)
    // console.log(field, meta)
    // console.log('Checkeado: ' , checkeado)
  return (    
    <div className='field'>
        {/* {console.log('Renderizando')} */}
        <span>{label}</span>
        {/* <input type='checkbox' {...field} {...props} onClick={()=>{setCheckeado(!checkeado)}} checked={checkeado}/> */}
        <input type='checkbox' {...field} {...props} />
        {meta.error && meta.touched ? <span className='error'>{' '+ meta.error}</span> : null}
    </div>
  )
}

export default CheckBox