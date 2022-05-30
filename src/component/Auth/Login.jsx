import React from "react";
import { useDocumentTitle } from "../../GeneralCustomHook/useDocumentTitle";
import * as Yup from "yup";
import { useFormik } from "formik";
import { userLogin } from "../../store/Auth/login-action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../GeneralCustomHook/useDebounce";
const Login = () => {
  useDocumentTitle();
  const loading = useSelector((state) => state.login.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginTestUser = () => {
    ("hello");
    dispatch(
      userLogin({ username: "shashi1", password: "shashi1234" }, navigate)
    );
  };
  const debounceLoginTestUser = useDebounce(loginTestUser, 400);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .max(15, "Must be 15 characters or less")
        .min(3, "Minimum 3 character")
        .required("Required"),
      password: Yup.string()
        .trim()
        .min(6, "Must be 6 character long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(userLogin(values, navigate));
    },
  });
  return (
    <form
      className="min-w-fit p-4 m-auto mt-5 dark:text-white shadow-md dark:bg-darkPrimary rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <h3 className="text-buttonBgColor mb-3">Log-in</h3>

      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
          placeholder="Enter your userName"
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-600 dark:text-slate-300">
            {formik.errors.username}
          </div>
        ) : null}
      </div>

      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="passwrod">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
          placeholder="Enter your password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 dark:text-slate-300">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button
        type="button"
        disabled={loading}
        onClick={() => debounceLoginTestUser()}
        className="text-white  
   bg-buttonBgColor w-full py-2 mt-4 rounded-md hover:opacity-95"
      >
        Login with testCredential
      </button>
      <button
        disabled={loading}
        type="submit"
        className="text-white
   bg-buttonBgColor w-full py-2 mt-4 rounded-md hover:opacity-95"
      >
        Login
      </button>
    </form>
  );
};

export { Login };
