import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

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

      <div class="form-group m-0">
        <button
          type="submit"
          class="btn btn-primary btn-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wait Please" : "Login"}
        </button>
      </div>
      <div class="mt-4 text-center">
        Don't have an account? <a href="register.html">Create One</a>
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    email: props.user.email,
    password: props.user.password
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("E-mail is not valid!")
      .required("This field is requuired !"),
    password: Yup.string().required("This field is requuired !")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // submit them do the server. do whatever you like!
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(LoginForm);
