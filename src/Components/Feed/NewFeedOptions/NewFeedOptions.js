import React from 'react'
import './NewFeedOptions.css'

function NewFeedOptions({ Icon, title, style }) {
    return (
        <div className="newFeed__options">
            {Icon && <Icon style={style} /> }
            <div className="title">
                {title}
            </div>
        </div>
    )
}

export default NewFeedOptions
