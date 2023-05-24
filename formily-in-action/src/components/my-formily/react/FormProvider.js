import { useEffect } from "react";
import { FormContext } from './context'

export function FormProvider({form, children}){

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

