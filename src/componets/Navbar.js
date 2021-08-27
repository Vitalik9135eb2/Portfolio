import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import s from './_navbar.module.scss';
import {Link} from 'react-router-dom';
import {SidebarData} from "./SidebarData";
import logo from './../assets/logo.svg';
import photo from './../assets/1.jpg';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>

        <div className={s.navbar}>
            <img className={s.logo} src={logo} />
            <Link to="#" className={s.menuBar}  >
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>

            <nav className={sidebar ? s.navMenuActive : s.navMenu}>
                <div className={s.photo}>
                    <div className={s.photoWrap}>
                        {/* <img className={s.photoMy} src={photo}/> */}
                    </div>

                </div>
                <ul className={s.items} onClick={showSidebar}>
                    <li className={s.navbarToggle}>
                        <Link to="#" className={s.close}>
                            <AiIcons.AiOutlineClose/>
                        </Link>

                    </li>
                    {SidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={s.navText}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className={s.span}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
            
        </div>

        
        </>
    )
}

export default Navbar
