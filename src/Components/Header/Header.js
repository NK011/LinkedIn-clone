import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import WorkIcon from '@material-ui/icons/Work';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

function Header() {

    const dispatch = useDispatch()

    const logoutOfAcc = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://static-exp1.licdn.com/sc/h/95o6rrc5ws6mlw6wqzy0xgj7y" alt="" />
                <div className="header__search">
                    <SearchIcon className="searchIcon"/>
                    <input type="text" placeholder="Search...."/>
                </div>
            </div>
            <div className="header__right">
                
                <HeaderOption Icon={HomeIcon} title={"Home"} />
                <HeaderOption Icon={PeopleIcon} title={"My Network"} />
                <HeaderOption Icon={ForumIcon} title={"Messaging"} />
                <HeaderOption Icon={WorkIcon} title={"Jobs"} />
                <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
                <HeaderOption avatar={true} title={"You"} onClick={logoutOfAcc} />

            </div>
        </div>
    )
}

export default Header
