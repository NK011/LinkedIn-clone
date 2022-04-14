import { Avatar } from '@material-ui/core'
import { CommentOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import PostOptions from './PostOptions'
import './Posts.css'

const Posts = forwardRef( ( { name, des, message, imageURL}, ref ) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={imageURL} />
                <div className="post__info">
                    <h4> {name} </h4>
                    <p> {des} </p>
                </div>
            </div>
            <div className="post__message">
                {message}
            </div>
            <div className="post__options">
                <PostOptions Icon={ThumbUpOutlined} title={"Like"} />
                <PostOptions Icon={CommentOutlined} title={"Comment"} />
                <PostOptions Icon={ShareOutlined} title={"Share"} />
                <PostOptions Icon={SendOutlined} title={"Send"} />
            </div>
        </div>
    )
})

export default Posts
