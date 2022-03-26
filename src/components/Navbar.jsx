import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <nav className="px-4 sm:px-8 py-4 md:px-12 lg:px-20 flex justify-between items-center">
            <div className="flex items-center">
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.246 10.5L11.828 0H3.6L0.162 9C0.0559999 9.32 0 9.652 0 10C0 12.208 2.3 14 5.142 14C7.762 14 9.928 12.472 10.246 10.5ZM18 14C20.84 14 23.142 12.208 23.142 10C23.142 9.918 23.136 9.836 23.132 9.758L22.114 0H13.886L12.866 9.75C12.862 9.832 12.858 9.914 12.858 10C12.858 12.208 15.16 14 18 14ZM28 16.092V24H8V16.104C7.124 16.42
                    6.16 16.6 5.142 16.6C4.752 16.6 4.374 16.554 4 16.502V29.2C4 30.74 5.258 32 6.796 32H29.2C30.74 32 32 30.738 32 29.2V16.504C31.6219 16.562 31.2404 16.5948 30.858 16.602C29.8828 16.601 28.9154 16.4284 28 16.092ZM35.84 9L32.398 0H24.172L25.752 10.484C26.06 12.464 28.226 14 30.858 14C33.698 14 36 12.208 36 10C36 9.652 35.944 9.32 35.84 9Z" fill="#79BCCF"/>
                </svg>
                <h2 className="pl-3">STORE</h2>
            </div>
            <div className="md:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="flex space-x-4">
                <div className="flex space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="about">Contact</Link>
                </div>
                <svg className="md:block hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </nav>
    )
}
export default Navbar