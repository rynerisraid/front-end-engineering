import { createForm } from '@formily/core'
// import { 
//     FormProvider,
//     Field,
//     FormConsumer,
//     FieldContext,
//     useParentForm
// } from '@formily/react'

import { 
    FormProvider,
    Field,
    FormConsumer,
    FieldContext,
    useParentForm
} from './components/my-formily/react'

import {observer} from "@formily/reactive-react";

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
    FormItem, 
    Input, 
    Submit
}