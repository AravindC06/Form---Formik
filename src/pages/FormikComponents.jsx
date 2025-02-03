import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "../components/TextError";

const initialValues = {
  //name should match with input name="name"
  name: "",
  email: "",
  postName: "",
  postMessage: "",
  shareTo: "",
};

const onSubmit = (values) => {
  console.log("Form Data : ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  postName: Yup.string().required("Required"),
  postMessage: Yup.string().required("Required"),
  shareTo: Yup.string().required("Required"),
});

//Instead of using the {...formik.getFieldProps("name")} we can use the components from formik

const FormikComponents = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="postName">Post Name</label>
          <Field type="text" id="postName" name="postName" />
          <ErrorMessage name="postName">{(errorMessage) => <div className="error">{errorMessage}</div>}</ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="postMessage">Post Message</label>
          <Field as="textarea" id="postMessage" name="postMessage" />
          <ErrorMessage name="postMessage" />
        </div>

        <div className="form-control">
          <label htmlFor="shareTo">Share To</label>
          <Field name="shareTo">
            {({ field, meta }) => (
              <div>
                <input type="text" id="shareTo" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            )}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikComponents;
