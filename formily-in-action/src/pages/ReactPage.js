import React from "react";
import {
  createForm,
  FormProvider,
  Field,
  FormConsumer,
  FormItem,
  Input,
  Submit,
} from "@/which";

const form = createForm();

const createPasswordEqualValidate = (equalName) => (field) => {
  if (
    form.values.confirm_password &&
    field.value &&
    form.values[equalName] !== field.value
  ) {
    field.selfErrors = ["Password does not match Confirm Password."];
  } else {
    field.selfErrors = [];
  }
};



const ReactPage = () => {
  return (
    <div>
      <h3>ReactPage</h3>
      <FormProvider form={form}>
        <Field
          name="name"
          title="Name"
          require
          decorator={[FormItem]}
          component={[Input, { placeholder: "Please Input" }]}
        />
        <Field
          name="password"
          title="Password"
          require
          decorator={[FormItem]}
          component={[Input, { type: "password", placeholder: "Please Input" }]}
          reactions={createPasswordEqualValidate("confirm_password")}
        />
        <Field
          name="confirm_password"
          title="Confirm Password"
          require
          decorator={[FormItem]}
          component={[Input, { type: "password", placeholder: "Please Input" }]}
          reactions={createPasswordEqualValidate("password")}
        />
        <Submit
          onSubmit={(res) => {
            console.log(res);
          }}
          onSuccess={() => {
            console.log("omg success");
          }}
          onSubmitFailed={() => {
            console.log("omg failed");
          }}
        >
          提交
        </Submit>
        <div>
          <FormConsumer> {() => form.values.name} </FormConsumer>
        </div>
      </FormProvider>
    </div>
  );
};

export default ReactPage;
