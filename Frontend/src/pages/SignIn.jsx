import React, { useState } from "react";
import { Link } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return setErrorMessage("Please fill out all fields!");
    }

    const formData = {
      email,
      password,
    };

    try {
      setLoading(true);
      const res = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

        // credentials include means that we will be seeting cookies from backend
        // in simple it allows server to set cookies
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        // return error or set error variable
      }
      if (res.ok) {
        setLoading(false);

        // dispatch data globally from here e.g saving it in redux toolkit or context api
      }
    } catch (error) {
      setLoading(false);
      // return or set error
    }
  }
  return (
    <div className="flex justify-center items-center  mt-12 ">
      <form
        className="bg-white shadow-lg rounded  w-full sm:w-1/2  md:w-1/2 lg:w-1/3 px-8 pt-6 pb-8 mb-4 border"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 font-bold">Sign In</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between flex-col space-y-2">
          <button
            className="bg-sky-950 hover:bg-blue-800 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-sm"
            type="submit"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
        <div className="flex space-x-1 mt-2">
          <span className="text-sm">Don't have an account?</span>
          <Link className="text-blue-800 text-sm" to={"/register"}>
            Sign Up
          </Link>
        </div>
        {errorMessage ? (
          <div
            className={`p-2 ${
              errorMessage === "Login successfully"
                ? "bg-green-400"
                : "bg-red-400"
            } text-white rounded text-center bg-opacity-70`}
          >
            {errorMessage}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default SignIn;
