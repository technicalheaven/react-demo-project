import { React, useState, useEffect } from 'react';
import '../css/Register.css';
import { FaUserCircle, FaLock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Alert from '../ui-elements/Alert';
const Register = () => {
    const initialValues = {
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
    }
    const [formvalues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [alert, setAlert] = useState(true);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        setIsSubmit(true);
        setAlert(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formvalues);
            setAlert(true);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        if (!values.fullname.trim()) {
            errors.fullname = 'Name is required!';
        }
        if (!values.email.trim()) {
            errors.email = 'Email is required!';
        }
        else if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errors.email = 'Invalid Email format!';
        }

        if (!values.phone.trim()) {
            errors.phone = 'Phone is required!';
        }
        else if (!values.phone.match(/^[0-9]+$/)) {
            errors.phone = 'Only numeric values is allowed!';
        }
        else if (values.phone.length < 10) {
            errors.phone = 'Phone should have minimum length of 10';
        }

        if (!values.password.trim()) {
            errors.password = 'Password is required!';
        }
        if (!values.confirmpassword.trim()) {
            errors.confirmpassword = 'Confirm Password is required!';
        }
        else if (values.password.trim() && values.password != values.confirmpassword) {
            errors.confirmpassword = 'Password & Confirm Password is not match';
        }

        return errors;
    }
    const closeAlert = () => setAlert(false);

    return (
        <div className="register page">
            <div className="box">
                {
                    (Object.keys(formErrors).length === 0 && isSubmit && alert) ?
                        <Alert close={closeAlert} message="Registration Successful" background="#1fa61f" /> :

                        (Object.keys(formErrors).length > 0 && isSubmit && alert) ?
                            <Alert close={closeAlert} message="Warning: Please check errors!" background="#ed4713" />
                            : null
                }
                <h2 className="formtitle">Register</h2>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="field d-flex">
                            <i className="icon"><FaUserCircle size={25} color={"#6a5252"} /></i>
                            <input type="text"
                                className="form-control"
                                placeholder="Name"
                                name="fullname"
                                value={formvalues.fullname}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="error">{formErrors.fullname}</p>
                    </div>
                    <div className="form-group">
                        <div className="field d-flex">
                            <i className="icon"><FaEnvelope size={25} color={"#6a5252"} /></i>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={formvalues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="error">{formErrors.email}</p>
                    </div>
                    <div className="form-group">
                        <div className="field d-flex">
                            <i className="icon"><FaPhoneAlt size={25} color={"#6a5252"} /></i>
                            <input type="text"
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                value={formvalues.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="error">{formErrors.phone}</p>
                    </div>
                    <div className="form-group">
                        <div className="field d-flex">
                            <i className="icon"><FaLock size={25} color={"#6a5252"} /></i>
                            <input type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={formvalues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="error">{formErrors.password}</p>
                    </div>
                    <div className="form-group">
                        <div className="field d-flex">
                            <i className="icon"><FaLock size={25} color={"#6a5252"} /></i>
                            <input type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmpassword"
                                value={formvalues.confirmpassword}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="error">{formErrors.confirmpassword}</p>
                    </div>
                    <div className="actionBtns">
                        <button className="btn btn-register">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register