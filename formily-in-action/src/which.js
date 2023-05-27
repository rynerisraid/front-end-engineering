import { createForm } from '@formily/core'
import { observable, Tracker } from '@formily/reactive'

// import { 
//     FormProvider,
//     Field,
//     FormConsumer,
//     FieldContext,
//     FormContext,
//     useParentForm
// } from '@formily/react'



import { 
    FormProvider,
    Field,
    FormConsumer,
    FormContext,
    FieldContext,
    useParentForm
} from './components/my-formily/react'

//import {observer} from "@formily/reactive-react";
import {observer} from '@/components/my-formily/reactive-react'

//import { FormItem, Input, Submit } from './components/my-rc-field-form'
import { FormItem, Input, Submit } from './components/my-formily/antd'


export {
    createForm,
    FormProvider,
    Field,
    FormConsumer,
    FieldContext,
    useParentForm,
    observer,
    observable, 
    Tracker,
    FormItem, 
    Input, 
    Submit,
    //FormContext,
}