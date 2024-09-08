import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkToggle from '../DarkToggle';

export function Nav() {
    const links = [
        { path: "/about", label: "Who ?" },
        { path: "/blogs", label: "How ?" },
        { path: "/contact", label: "Where ?" },
        { path: "/cv", label: "Cv ?" },
    ];
    return (
        <>
            <nav className="header">

                <ul className="header-socials">
                    {/* <li>
                        <a href='#' className=''>
                            <i className="fas fa-lightbulb fa-1x outline green-white" ></i>
                        </a>
                    </li> */}
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link className="outline green-white" to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <DarkToggle />

        </>
    )
}
