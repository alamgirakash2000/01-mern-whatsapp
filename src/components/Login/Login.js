import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField } from "@material-ui/core";
import axios from "../../axios";

import { useStateValue } from "../../ContextApi/StateProvider";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",

    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loginMode, setLogin] = useState(true);

  useEffect(() => {
    if (user) {
      setOpen(false);
    }
  }, [user]);

  const login = async (e) => {
    e.preventDefault();

    document.getElementById("err").innerText = "";

    if (!email.trim()) {
      document.getElementById("err").innerText = "Enter email";
      return;
    }
    if (!password.trim()) {
      document.getElementById("err").innerText = "Enter password";
      return;
    }

    await axios
      .post("/login", {
        email: email.trim(),
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "SET_USER",
            user: res.data.user,
          });
        }
      })
      .catch((err) => {
        document.getElementById("err").innerText =
          "No account or wrong password, please try again";
      });
  };
  const signup = async (e) => {
    e.preventDefault();

    document.getElementById("err").innerText = "";

    if (!name.trim()) {
      document.getElementById("err").innerText = "Enter You name";
      return;
    }

    if (!email.trim()) {
      document.getElementById("err").innerText = "Enter email";
      return;
    }
    if (!password.trim()) {
      document.getElementById("err").innerText = "Enter password";
      return;
    }

    await axios
      .post("/users/new", {
        name: name,
        email: email.trim(),
        password: password,
      })
      .then((res) => {
        if (res.status === 201) {
          dispatch({
            type: "SET_USER",
            user: res.data.user,
          });
        }
      })
      .catch((err) => {
        document.getElementById("err").innerText =
          "Sign up fail, please try again";
      });
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {loginMode && (
            <div>
              <h2 id="simple-modal-title">
                Login with your Email and Password
              </h2>
              <form
                onSubmit={login}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Enter email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  className="form-control mt-2"
                />
                <TextField
                  id="outlined-basic"
                  label="Enter password (at least 6 character)"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  className="form-control my-5"
                />
                <p id="err" className="text-danger"></p>
                <button type="submit" className="btn btn-success">
                  LOG IN
                </button>
              </form>

              <p>
                No account?{" "}
                <button
                  className="btn text-danger"
                  onClick={() => setLogin(false)}
                >
                  Sign Up
                </button>{" "}
                here
              </p>
            </div>
          )}

          {!loginMode && (
            <div>
              <h2 id="simple-modal-title">
                Sign Up with your Email,Password and name
              </h2>
              <form
                onSubmit={signup}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Enter your name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  className="form-control my-5"
                />
                <TextField
                  id="outlined-basic"
                  label="Enter email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  className="form-control mt-2"
                />
                <TextField
                  id="outlined-basic"
                  label="Enter password (at least 6 character)"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  className="form-control my-5"
                />
                <p id="err" className="text-danger"></p>
                <button type="submit" className="btn btn-primary">
                  SIGN UP
                </button>
              </form>

              <p>
                Already have a account?
                <button
                  className="btn text-danger"
                  onClick={() => setLogin(true)}
                >
                  Login
                </button>
                here
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
