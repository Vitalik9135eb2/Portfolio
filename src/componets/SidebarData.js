import ReactDOM from 'react-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiUser from "react-icons/bi";
import * as VscPriview from "react-icons/vsc";
import * as RiCalendarEvent from "react-icons/ri";
import * as RiMailSendLine from "react-icons/ri";


export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome/>,
        cName:"q"
    },
    {
        title: "About",
        path: "/about",
        icon: <BiUser.BiUserCircle/>,
        cName:"navText",
        
    },
    {
        title: "Resume",
        path: "/resume",
        icon: <VscPriview.VscPreview/>,
        cName:"nav-text"
    },
    {
        title: "Portfolios",
        path: "/portfolios",
        icon: <RiCalendarEvent.RiCalendarEventLine/>,
        cName:"nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <RiMailSendLine.RiMailSendLine/>,
        cName:"nav-text"
    },
]
