import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDocumentTitle } from "../../GeneralCustomHook/useDocumentTitle";
import { userSignup } from "../../store/Auth/signup-action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useDocumentTitle();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .max(15, "Must be 15 characters or less")
        .min(3, "Minimum 3 character")
        .required("Required"),
      userName: Yup.string()
        .trim()
        .max(15, "Must be 15 characters or less")
        .min(3, "Minimum 3 character")
        .required("Required"),
      lastName: Yup.string()
        .trim()
        .max(20, "Must be 20 characters or less")
        .min(3, "Minimum 3 character")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .trim()
        .min(6, "Must be 6 character long")
        .required("Required"),
      confirmpassword: Yup.string()
        .trim()
        .min(6, "Must be 6 character long")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(userSignup(values, navigate));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="min-w-fit p-4 m-auto mt-5 dark:text-white shadow-md dark:bg-darkPrimary rounded-lg"
    >
      <h3 className="text-buttonBgColor mb-3">Sign-up</h3>
      <div className="md:flex gap-3 ">
        <div className="text-inherit flex-1 flex gap-1 flex-col text-left">
          <label htmlFor="firstName">FirstName</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your  first Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600 dark:text-slate-300">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className=" flex flex-1 flex-col gap-1 text-left">
          <label htmlFor="lastName">LastName</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Maurya"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className=" border-1 rounded-md shadow-md outline-none dark:bg-darkHover"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-600 dark:text-slate-300">
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>
      </div>
      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="userName">UserName</label>
        <input
          id="userName"
          name="userName"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.userName}
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
          placeholder="Enter your userName"
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="text-red-600 dark:text-slate-300">
            {formik.errors.userName}
          </div>
        ) : null}
      </div>
      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="shashimourya1@gmail.com"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 dark:text-slate-300">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="password">Password</label>
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
      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="confirmpasswrod">ConfirmPassword</label>
        <input
          type="password"
          placeholder="*****"
          id="confirmpassword"
          name="confirmpassword"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <div className="text-red-600 dark:text-slate-300">
            {formik.errors.confirmpassword}
          </div>
        ) : null}
      </div>
      <button
        className="text-white
       bg-buttonBgColor w-full py-2 mt-4 rounded-md hover:opacity-95"
      >
        SignUP
      </button>
    </form>
  );
};

export { SignUp };
