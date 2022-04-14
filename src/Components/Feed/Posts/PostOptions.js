import React from 'react'
import './PostOptions.css'

function PostOptions( {Icon, title} ) {
    return (
        <div className="postOptions"> 
            {Icon && <Icon /> }
            <div>
                {title}
            </div>
        </div>
    )
}

export default PostOptions
