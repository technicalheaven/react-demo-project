import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import Alert from '../ui-elements/Alert';
const Login = () => {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [alert, setAlert] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setAlert(true);
      console.log(formValues);
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    if (!values.username.trim()) {
      errors.username = "Username is required!";
    }
    if (!values.password.trim()) {
      errors.password = "Password is required!";
    }
    if (Object.keys(errors).length) {
      setAlert(true);
    }
    return errors;
  }

  const closeAlert = () => setAlert(false);
  
  return (
    <div className="login page">
      <div className="box">
        {
        (Object.keys(formErrors).length === 0 && isSubmit && alert) ?
         <Alert close={closeAlert} message="Sign Successfully!" background="#1fa61f" /> :
        
         (Object.keys(formErrors).length > 0 && isSubmit && alert) ?
        <Alert close={closeAlert} message="Warning: Please check errors!" background="#ed4713"/> 
        : null
        }
        <h2 className="formtitle">Login</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="field d-flex">
              <i className="icon"><FaUserCircle size={25} color={"#6a5252"} /></i>
              <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formErrors.username}</p>
          </div>
          <div className="form-group">
            <div className="field d-flex">
              <i className="icon"><FaLock size={25} color={"#6a5252"} /></i>
              <input type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formErrors.password}</p>
          </div>
          <div className="actionBtns">
            <button className="btn btn-login">Login</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login