import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './BaseLayout.module.css'

const BaseLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"movies"}>Movies</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {BaseLayout};