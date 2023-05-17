import { useEffect } from "react";
import { FormContext } from './context'

export default function FormProvider({form, children}){

    useEffect(()=>{
        form.onMount();
        return ()=>{
            form.onMount();
        }
    },[]);

    return (
        <FormContext.FormProvider value={form}>{children}</FormContext.FormProvider>
    )

}

