import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  //   const existingUser = users.filter((f) => f.id == id);
  const existingUser = users.filter((f) => f.id == id);
  //   console.log(existingUser);
  const { name, email } = existingUser[0];

  const [uname, setUpdateName] = useState(name);
  const [uemail, setUpdateEmail] = useState(email);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="w-50 border bg-secondary text-white p-5">
            <h3 className="py-2">Edit New Users 🙎‍♂️</h3>
            <form onSubmit={handleUpdate}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="form-control"
                  value={uname}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                  value={uemail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-info mt-4 text-white">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
