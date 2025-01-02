import * as Yup from "yup";

export const signUpSchema = Yup.object({
  Name: Yup.string().min(3).max(25).required("Please enter your name."),
  Email: Yup.string().email().required("Please enter your email."),
  Password: Yup.string().min(6).required("Please enter your password."),
  Confirm_Password: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Password must match."),
});
