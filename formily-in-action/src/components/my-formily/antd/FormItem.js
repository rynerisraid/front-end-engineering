import { useContext } from 'react'
import { FieldContext,observer } from '@/which'

const FormItem = observer(({children}) => {
  
  const field = useContext(FieldContext)


  return (
    <div>
      <div className="green">{field.title}</div>
        {children}
      <div className="red">{field.selfErrors.join(",")}</div>
    </div>
    
  )
});

export default FormItem;