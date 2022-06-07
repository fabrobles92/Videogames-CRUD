import { useField } from "formik";
import './Input.css'

import React from 'react'

function Input({label, type, ...props}){
    const [field, meta] = useField(props)
    // console.log(field, meta)
    return (
    <div className="field">
        <h3>{label}</h3>
        { type === "textarea" ? <textarea type={'textarea'} cols={40} rows={7} {...field} {...props}/> : <input type={ type } {...field} {...props}/> }
        {meta.touched && meta.error ? <label className="error">{meta.error}</label> : null}
    </div>
    )
}

export default Input