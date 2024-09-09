import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkToggle from '../DarkToggle';

export function Nav() {
    const links = [
        { path: "/about", label: "Who I'am ?" },
        { path: "/blogs", label: "How To ?" },
        // { path: "/contact", label: "Where ?" },
        // { path: "/cv", label: "Cv ?" },
    ];
    return (
        <>
            <nav className="header">

                <ul className="header-socials">
                    <DarkToggle />

                    {links.map((link, index) => (
                        <li key={index}>
                            <Link className="outline green-white" to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
