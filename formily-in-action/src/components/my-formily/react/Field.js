import React,{useContext}  from 'react'
import { FieldContext, FormContext } from './context'
import { observer } from '@formily/reactive-react'

const Field = observer((props) =>{
    const form = useContext(FormContext)
    const field = form.createField(props)
    const component = React.createElement(field.component[0], {...field.component[1], value: field.value})

    const decorator = React.createElement(field.decorator[0], field.decorator[1],component)
    
    return (
      <FieldContext.Provider value={field}>{decorator}</FieldContext.Provider>
    )
  }
);

export default Field