import React from "react";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg"
import { MdWeb } from 'react-icons/md';

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><Link to='/frecuentes'><MdWeb/> Mis Paginas</Link></li>
                    <li><Link to='/apuntes'><CgNotes/> Mis Apuntes</Link></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;