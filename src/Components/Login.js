import React from "react";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logedIn, setLogedIn] = React.useState(null);

  const callAPI = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: userName, password: password }),
    };

    fetch("http://localhost:5000/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLogedIn(true);
        } else {
          setLogedIn(false);
        }
        console.log(data);
      });

    console.log(userName, password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card m-3 p-3 text-dark text-left col-md-5 mx-auto">
          {logedIn === null && (
            <form onSubmit={callAPI}>
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  className="form-control"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
          {logedIn === true && (
            <div>
              <h3>Login Successful</h3>
              <p>Welcome {userName}</p>
            </div>
          )}
          {logedIn === false && (
            <div>
              <h3>Login Failed</h3>
              <p>Please try again</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
