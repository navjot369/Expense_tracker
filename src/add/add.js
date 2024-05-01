import {useState} from 'react';
import "./add.css";
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import {clsx} from 'clsx';


export default function Add() {
    return(<div className="add-main-cont">
        <div id="add-main-inner">
            <div id="select-type-cont">
                <div id="inner-bar" className={clsx("", {
                    "inner-bar-left": /debit/.test(useLocation().pathname),
                    "inner-bar-right": /credit/.test(useLocation().pathname)
                })}></div>
                <div id="options-links">
                    <NavLink to="/add/debit">Debit</NavLink>
                    <NavLink to="/add/credit">Credit</NavLink>
                </div>
            </div>
            <div className="form-outer-cont">
                <Outlet />
            </div>
        </div>
    </div>);

}