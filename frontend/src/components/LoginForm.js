import { withFormik } from "formik";
import React from "react";
import { compose, graphql } from "react-apollo";
import * as Yup from "yup";
import { loginUser } from "../queries/user";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="card-title">Login</h4>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="text"
          className={`form-control ${errors.email &&
            touched.email &&
            "is-invalid"}`}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          className={`form-control ${errors.password &&
            touched.password &&
            "is-invalid"}`}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <div className="form-group m-0">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wait Please" : "Login"}
        </button>
      </div>
      <div className="mt-4 text-center">
        Don't have an account? <a href="register.html">Create One</a>
      </div>
    </form>
  );
};

export default compose(
  graphql(loginUser),
  withFormik({
    mapPropsToValues: () => ({ email: "", password: "" }),

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("E-mail is not valid!")
        .required("This field is requuired !"),
      password: Yup.string().required("This field is requuired !")
    }),

    handleSubmit: async (
      values,
      { props: { mutate }, setSubmitting, resetForm }
    ) => {
      try {
        const { data } = await mutate({
          variables: values
        });
        setSubmitting(false);
        console.log(data);
      } catch (error) {
        setSubmitting(false);
        console.log(error);
      }
    }
  })
)(LoginForm);
