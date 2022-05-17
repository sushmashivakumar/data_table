import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Roles, Users } from './Roles';
import { Notification } from '../shared/Notification'
import { Toast } from 'primereact/toast';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/loggedIn'
import { userData } from '../features/userInfo';
import { Dropdown } from 'primereact/dropdown';

const Login = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(false)
    const [selectedMilestone1, setSelectedMilestone1] = useState(null);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (data) => {
            let errors = {};
            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }
            return errors;
        },
        onSubmit: (data) => {
            console.log(data)
            let userExist = Users.filter(user => user.email === data.email)
            if(!userExist.length){
                setShowMessage(true)
            }
console.log(userExist)
            if(userExist.length){
                dispatch(signIn());
                dispatch(userData({'useremail' : data.email}))
                navigate('/dashboard')
            }
            console.log(userExist)
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const milestone1 = [
        { name: 'Project 1' },
        { name: 'Project 2' },
        { name: 'Project 3' },
        { name: 'Project 4'},
        { name: 'Project 5' },
        
    ];

    const onMilestoneChange = (e) => {
        setSelectedMilestone1(e.target.value);
    }
      return (
        <div className="ui-grid-col-8">
            {
                showMessage && <Notification type='error' message='User not found' />
            }
           
            <div className="form-demo">


                <div className="flex justify-content-center">
                    <div className="card">
                        <h5 className="text-center">Login</h5>
                        <form onSubmit={formik.handleSubmit} className="p-fluid">
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange}
                                         feedback={false}/> 
                                    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                                </span>
                                {getFormErrorMessage('password')}
                            </div>

                           

                    <Dropdown className="test" value={selectedMilestone1} options={milestone1} onChange={onMilestoneChange} variant="outlined info"optionLabel="name" placeholder="Select Project" />

                    <Button type="submit" label="Submit" className="mt-2" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;