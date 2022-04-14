import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import './HeaderOption.css'

function HeaderOption( { avatar, Icon, title, onClick} ) {

    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className="headeroption">
           {Icon && <Icon />}
           {avatar && <Avatar className="headerOption__avatar" src={user?.photoUrl} > {user?.email[0]} </Avatar>
            }
            <div className="headeroption__title">
               {title}
            </div> 
           
        </div>
    )
}

export default HeaderOption
