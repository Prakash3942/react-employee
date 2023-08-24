import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="w-50 border bg-secondary text-white p-5">
            <h3 className="py-2">Add New Users 🙎‍♂️</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-info mt-4 text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
