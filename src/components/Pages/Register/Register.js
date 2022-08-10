import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { getAuth } from 'firebase/auth';
import auth from "../../../firebase.init"
import { useState } from 'react';
import Spinier from '../../Shared/Spinier';
// import { async } from '@firebase/util';

const Register = () => {

    let navigate = useNavigate();
    let [passError, setPassError] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    let handleRegister = async event => {
        event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let conPassword = event.target.conPassword.value;
        if (password === conPassword) {
            let verifyPassword = conPassword
            let user = {
                name: name,
                email: email,
                verifyPassword: verifyPassword,
            }

            await createUserWithEmailAndPassword(email, verifyPassword);

            console.log(user);
        }
        else {
            console.log("Password Don't match")
            setPassError(true);
        }
    }

    if (error) {
        console.log(error);
    }

    if (loading) {
        return <Spinier />
    }

    if (user) {
        navigate('/')
        console.log(user)
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Create an account!</h1>
                        <p class="py-6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum vel blanditiis ab dignissimos sint adipisci? </p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text">Email / Phone Number</span>
                                </label>
                                <input type="email" placeholder="email / Phone number" name='email' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="conPassword" name='conPassword' class="input input-bordered" />


                                <label class="label">
                                    <Link to='/login' class="label-text-alt link link-hover"> Already Have Account ?</Link>
                                </label>
                                {/* <p> {passError === true  'Pass error'} </p> */}
                                {
                                    passError === true
                                    ?
                                    <i className='flex justify-center text-red-600 font-bold'> Password Doesn't' Match  </i>
                                    :
                                    <p> </p>
                                    // setPassError(false)
                                }
                                {/* <label class="label">
                                    <Link to='/register' class="label-text-alt link link-hover">Don't Have account yet?</Link>
                                </label> */}
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;