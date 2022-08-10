import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    let logout = () => {
        let yes = window.confirm(" Are You Sure You Want To Log Out ?");
        if (yes) {
            localStorage.removeItem('accessToken');
            signOut(auth);
        }
    }

    return (
        <div>
            <div class="navbar  bg-[#896EFF] text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><i> <Link to='/'> Home </Link> </i></li>
                            <li tabindex="0">
                                <i class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </i>
                                <ul class="p-2">
                                    <li><i> Point </i></li>
                                    <li><i> Point </i></li>
                                </ul>
                            </li>
                            <li><i> Point </i></li>
                        </ul>
                    </div>
                    <i class="btn btn-ghost normal-case text-xl"><img src="green-life-logo-removebg.png" width={50} height={20} alt="" />
                        <Link to='/'> Green Life </Link> </i>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><i> <Link to='/'> Home </Link> </i></li>
                        <li tabindex="0">
                            <i>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </i>
                            <ul class="p-2">
                                <li><i> Point </i></li>
                                <li><i> Point </i></li>
                            </ul>
                        </li>
                        <li><i> Point </i></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    {
                        user
                            ?
                            <i onClick={logout} class=" bg-purple-800 rounded-xl hover:rounded-r-full px-4 py-2 text-xl text-yellow-300 font-bold "> <Link to='/register'> Log Out </Link>  </i>
                            :
                            <i class=" bg-purple-800 rounded-xl hover:rounded-r-full hover:rounded-l-2xl px-4 py-2 text-xl text-yellow-300 font-bold "> <Link to='/login'> Login </Link> </i>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;