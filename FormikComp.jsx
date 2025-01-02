import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  Name: "",
  Email: "",
  Password: "",
  Confirm_Password: "",
};

function FormikComp() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  //console.log(values);

  return (
    <>
      <h1>Main component</h1>
      <form className="p-2 m-2 border" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="m-2"
          type="text"
          name="Name"
          value={values.Name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Name && touched.Name ? <p>{errors.Name}</p> : null}
        <br />
        <label>Email</label>
        <input
          className="m-2"
          type="text"
          name="Email"
          value={values.Email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Email && touched.Email ? <p>{errors.Email}</p> : null}
        <br />
        <label>Password</label>
        <input
          className="m-2"
          type="password"
          name="Password"
          value={values.Password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Password && touched.Password ? <p>{errors.Password}</p> : null}
        <br />
        <label>Confirm Password</label>
        <input
          className="m-2"
          type="password"
          name="Confirm_Password"
          value={values.Confirm_Password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Confirm_Password && touched.Confirm_Password ? (
          <p>{errors.Confirm_Password}</p>
        ) : null}
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default FormikComp;
