import React from "react";

const Update = () => {
  return (
    <>
      <div className="container">
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="w-50 border bg-secondary text-white p-5">
            <h3 className="py-2">Edit New Users 🙎‍♂️</h3>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
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
