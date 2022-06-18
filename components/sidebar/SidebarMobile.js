// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import classes from './Sidebar.module.css';


function SidebarMobile(props) {
    
    const [isHome, setIsHome] = useState(true);
    const [isFavs, setIsFavs] = useState(false);
    const [isCats, setIsCats] = useState(false);
    const [isTags, setIsTags] = useState(false);
    const [isAll, setIsAll] = useState(false);
    const [isManage, SetIsManage] = useState(false);

    const turnOn = props.turn_on;
    useEffect(() => {
        if (turnOn !== 'Home') {
            setIsHome(false);
            if (turnOn === 'Favs') {
                setIsFavs(true);
            } else if (turnOn === 'Cats') {
                setIsCats(true);
            } else if (turnOn === 'Tags') {
                setIsTags(true);
            } else if (turnOn === 'All') {
                setIsAll(true);
            } else {
                SetIsManage(true);
            }
        };
     }, [turnOn]);

    // function isActive(state) {
    //     if (state) {
    //         return (
    //             <i 
    //                 className="fa-solid fa-caret-right fa-xl" 
    //                 style={{'position': 'sticky', 'paddingLeft': '0.5rem', 'opacity': '0.5'}} 
    //             />
    //         )
    //     } else {
    //         return null
    //     }
    // };


    return (
        <div className={classes.top}>
            <Link href='/'>
                <ul className={isHome ? classes.container_on : classes.container}>
                    <i className="fa-solid fa-house fa-lg"></i>
                    <span><b>17&#39;s Home</b></span>
                    {/* {isActive(isHome)} */}
                </ul>
            </Link>
            <Link href='/favorites'>
                <ul className={isFavs ? classes.container_on : classes.container}>
                    <i className="fa-solid fa-heart fa-lg"></i>
                    <span><b>Favorites</b></span>
                    {/* {isActive(isFavs)} */}
                </ul>
            </Link>
            <Link href='/category'>
                <ul className={isCats ? classes.container_on : classes.container}>
                    <i className="fa-solid fa-table-cells fa-lg"></i>
                    <span><b>Category</b></span>
                    {/* {isActive(isCats)} */}
                </ul>
            </Link>
            <Link href='/hashtag'>
                <ul className={isTags ? classes.container_on : classes.container}>
                    <i className="fa-solid fa-hashtag fa-lg"></i>
                    <span><b>Hashtags</b></span>
                    {/* {isActive(isTags)} */}
                </ul>
            </Link>
            <Link href='/view-all'>
                <ul className={isAll ? classes.container_on : classes.container}>
                    <i className="fa-solid fa-plus fa-lg"></i>
                    <span><b>View All</b></span>
                    {/* {isActive(isAll)} */}
                </ul>
            </Link>
            <Link href='/backstage'>
                <ul className={isManage ? classes.container_on : classes.container}>
                    <i className="fa-solid fa-wrench"></i>
                    <span style={{letterSpacing: '-2px'}}>Management</span>
                    {/* {isActive(isManage)} */}
                </ul>
            </Link>
        </div>
    );
}

export default SidebarMobile;
