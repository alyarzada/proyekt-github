import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductContext } from '../contextAPI';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Navbar() {
  const [login, setLogin] = useState({
    email: 'tunar@mail.ru',
    password: '12345678',
  });
  const [data, setData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    confirmpassword: '',
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const signUpForm = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const signInForm = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(login);
    if (login.email === data.email && login.password === data.password) {
      alert('Giris ugurlu oldu');
    } else {
      alert('giris melumatlari sehvdir');
    }
  };

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newData = data;
    newData[name] = value;
    setData(newData);
  };

  const { card } = useContext(ProductContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3">
      <div className="container-fluid">
        {/* toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* button container */}
        <div className="button-container float-right d-lg-none">
          <div className="card-icon">
            <Link to="/Card">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={card.length} color="secondary">
                  <ShoppingCartIcon sx={{ fontSize: 30, color: '#fff' }} />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn btn-light ml-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropSignUp"
          >
            Sign Up
          </button>
        </div>
        {/* collapse */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Store" className="nav-link text-white">
                {' '}
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Faq" className="nav-link text-white">
                {' '}
                Faq
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link text-white">
                {' '}
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link text-white">
                {' '}
                Contact
              </Link>
            </li>
          </ul>
          <div className="button-container d-none d-lg-flex gap-2">
            <div className="card-icon">
              <Link to="/Card">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={card.length} color="secondary">
                    <ShoppingCartIcon sx={{ fontSize: 30, color: '#fff' }} />
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
            <button
              type="button"
              className="btn btn btn-outline-light px-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Sign In
            </button>

            <button
              type="button"
              className="btn btn-light px-4 ml-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropSignUp"
            >
              Sign Up
            </button>
          </div>
        </div>
        {/* Modals */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Log In</h2>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => signInForm(e)} className="row g-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => inputHandler(e)}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I accept the Terms of Use & Privacy Policy
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="staticBackdropSignUp"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="mb-3">Create a new Account</h2>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => signUpForm(e)} className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      name="firstname"
                      required
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      name="lastname"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      onChange={(e) => inputHandler(e)}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I accept the Terms of Use & Privacy Policy
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
