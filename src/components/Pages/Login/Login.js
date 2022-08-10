import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import Spinier from '../../Shared/Spinier';


const Login = () => {

    let navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let handleLogin = async event => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;

        let user = {
            email: email,
            password: password,
        }
        console.log(user);
        await signInWithEmailAndPassword(email, password);
    }

    let myFunction = () => {
        console.log("click");
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    if (error) {
        console.log(error);
    }

    if (loading) {
        return <Spinier />
    }

    if (user) {
        navigate("/")
        // console.log(user.user.email)
        console.log(user.user.emailVerified)

    }


    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum vel blanditiis ab dignissimos sint adipisci? </p>
                    </div>
                    <form onSubmit={handleLogin} class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email / Phone Number</span>
                                </label>
                                <input type="text" required placeholder="email / Phone number" name='email' class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" id='myInput' required placeholder="password" name='password' class="input input-bordered" />

                                <div  className='flex py-2 pl-1'>
                                    <input type="checkbox" onClick={myFunction} />
                                    <p className='pl-1'> Show Password </p>
                                </div>

                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label class="label">
                                    <Link to='/register' href="#" class="label-text-alt link link-hover">Don't Have account yet?</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;