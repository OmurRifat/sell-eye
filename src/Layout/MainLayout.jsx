/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname.split('/')[1];
        if (path === '') {
            setActiveLink('all-orders');
        }
        else
            setActiveLink(path);
    }, [location.pathname]);
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    return (
        <div className=" drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full flex flex-col items-center my-4 mx-8">
                {/* Page content here */ }
                <label className="btn btn-circle swap swap-rotate lg:hidden absolute -top-4 left-1" htmlFor="my-drawer-2">

                    {/* this hidden checkbox controls the state */ }
                    <input type="checkbox" />

                    {/* hamburger icon */ }
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* close icon */ }
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-secondary text-base-content text-center">
                    {/* Sidebar content here */ }
                    <Link to="/all-orders" className={ activeLink == "all-orders" || '' ? "active bg-slate-400 rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3 text-blue-800" : 'py-3 bg-tertiary rounded-md mb-2 hover:bg-slate-700 hover:text-white' } onClick={ () => handleLinkClick('all-orders') }>All Orders</Link>
                    <Link to="/regular-delivery" className={ activeLink === "regular-delivery" ? "active bg-slate-400 rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3 text-blue-800" : 'py-3 bg-tertiary rounded-md mb-2 hover:bg-slate-700 hover:text-white' } onClick={ () => handleLinkClick('regular-delivery') }>Regular Delivery</Link>
                    <Link to="/express-delivery" className={ activeLink === "express-delivery" ? "active bg-slate-400 rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3 text-blue-800" : 'py-3 bg-tertiary rounded-md mb-2 hover:bg-slate-700 hover:text-white' } onClick={ () => handleLinkClick('express-delivery') }>Express Delivery</Link>
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;