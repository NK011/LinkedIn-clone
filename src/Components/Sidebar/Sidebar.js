import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (title) => (
        <div className="recentItem">
            <span className="recentItem__hastags">#</span>
            <div>{title}</div>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://th.bing.com/th/id/OIP.R3OWgpFx25ziZSJg59he3wHaCz?w=331&h=132&c=7&o=5&dpr=1.25&pid=1.7" alt=""/>
                <Avatar src={user?.photoUrl}  className="sidebar__top_avatar">
                  { user?.email[0] }
                </Avatar>
                <h2>{user.displayName }</h2>
                <h4> {user.email} </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2564
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2564
                    </p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h3>Recnts</h3>
                {recentItem('reactJS')}
                {recentItem('programing')}
                {recentItem('JS')}
                {recentItem('web dev')}
                {recentItem('NodeJS')}
                {recentItem('SEO')}
            </div>
            
        </div>
    )
}

export default Sidebar
