import { useEffect } from "react";
import { FormContext } from './context'

export default function FormProvider({form, children}){

    useEffect(()=>{
        form.onMount();
        return ()=>{
            form.onUnmounted();
        }
    },[]);

    return (
        <FormContext.Provider value={form}>{children}</FormContext.Provider>
    )

}

