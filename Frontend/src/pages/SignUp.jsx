import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return setErrorMessage("Please fill out all required fields");
    }
    const formData = {
      username,
      email,
      password,
    };
    console.log(formData);

    try {
      // setting loading true when ever making request to server
      setLoading(true);
      // making post request to server to send user registration data
      const res = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // getting response from server
      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        // return error
      }
      if (res.ok) {
        setLoading(false);
        // naviagte to login
      }
    } catch (error) {
      setLoading(false);
      // return error
    }
  };

  return (
    <div className="flex justify-center items-center  mt-12 ">
      <form
        className="bg-white shadow-lg rounded   w-full sm:w-1/2  md:w-1/2 lg:w-1/3 px-8 pt-6 pb-8 mb-4 border"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 font-bold">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

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
            {loading ? "Loading..." : "SIGN UP"}
          </button>
        </div>
        <div className="flex space-x-1 mt-2">
          <span className="text-sm">Have an account?</span>
          <Link className="text-blue-800 text-sm" to={"/login"}>
            Sign In
          </Link>
        </div>
        {errorMessage ? (
          <div
            className={`p-2 ${
              errorMessage === "Signup successfull"
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
};

export default SignUp;
