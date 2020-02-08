import React from "react";
import user from './assets/user.svg'

const LoginForm = () => {
  return (
    <div className="w-full max-w-sm">
      <form className="p-6 m-4 bg-white shadow rounded">
        <div className="mb-4">
          <label className="block font-bold text-gray-700 text-sm mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-gray-700 text-sm mb-2" htmlFor="password">
            password
          </label>
          <input className="w-full rounded border shadow py-2 px-3" type="password" placeholder="**********" />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download</span>
          </button>
          <button className="bg-blue-500 text-white px-2 py-2 font-semibold rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" /></svg>
            <span>Download</span></button>
          <a href="" className="text-blue-500 font-bold">
            Forgot Password
          </a>
        </div>
      </form>
      <div className=" h-64 grid grid-rows-3 grid-flow-col gap-4">
        <div className="bg-blue-100 border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>
        <div className="border text-blue-600 bg-blue-100  flex justify-center items-center">1</div>

      </div>
    </div>
  );
};
export default LoginForm;
