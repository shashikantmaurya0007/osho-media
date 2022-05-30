import React from "react";
import { useDocumentTitle } from "../../GeneralCustomHook/useDocumentTitle";

const Login = () => {
  useDocumentTitle();
  return (
    <form className="min-w-fit p-4 m-auto mt-5 dark:text-white shadow-md dark:bg-darkPrimary rounded-lg">
      <h3 className="text-buttonBgColor mb-3">LogIN</h3>

      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="lastName">UserName</label>
        <input
          id="lastName"
          type="text"
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
          placeholder="Enter your userName"
        />
      </div>

      <div className=" flex flex-col gap-1 text-left">
        <label htmlFor="passwrod">Password</label>
        <input
          id="password"
          type="password"
          className=" border-1 rounded-md outline-none shadow-md dark:bg-darkHover"
          placeholder="Enter your password"
        />
      </div>

      <button
        className="text-white
   bg-buttonBgColor w-full py-2 mt-4 rounded-md hover:opacity-95"
      >
        Login with testCredential
      </button>
      <button
        className="text-white
   bg-buttonBgColor w-full py-2 mt-4 rounded-md hover:opacity-95"
      >
        Login
      </button>
    </form>
  );
};

export { Login };
