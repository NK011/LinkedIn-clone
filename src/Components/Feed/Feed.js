import { Create, Event, Photo, Subject, VideoLibrary } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import './Feed.css'
import NewFeedOptions from './NewFeedOptions/NewFeedOptions'
import Posts from './Posts/Posts'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import { selectUser } from '../../features/userSlice'
import { useSelector } from 'react-redux'

function Feed() {
    const [input, setInput ] = useState('')
    const [posts , setPosts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {

        db.collection('posts').orderBy("timestamp", "desc").onSnapshot( (snapshot) => 
            setPosts(
                snapshot.docs.map( (doc) => ({
                    id: doc.id,
                    data: doc.data()
                } ))
            )
         )

    }, [posts] )

    const createPost = e => {

        e.preventDefault()

       db.collection("posts").add({
           name: user?.displayName,
           des: "User",
           uid: user.uid,
           message: input,
           imageURL: user?.profileURL || null,
           timestamp: firebase.firestore.FieldValue.serverTimestamp()
       })

       setInput("")
    }

    return (
        <div className="feed">
           <div className="feed__newFeed">
               <div className="feed__inputFeed">
                    <Create className="feed__inputFeed_create" />
                    <form>
                        <input type="text" placeholder="Create Post...." value={input} onChange={ e => setInput(e.target.value)} />
                        <button type="submit" onClick={createPost}> Create Post </button>
                    </form>
               </div>
               <div className="feed__newFeed_options">
                   <NewFeedOptions Icon={Photo} style={ { color: "blue" } } title={"Photos"} />
                   <NewFeedOptions Icon={VideoLibrary} style={ { color: "orange" } } title={"Video"} />
                   <NewFeedOptions Icon={Event} style={ { color: "red" } } title={"Events"} />
                   <NewFeedOptions Icon={Subject} style={ { color: "green" } } title={"Create Article"} />
               </div>
           </div> 
           <div className="feed__body">
                <FlipMove >

                    {
                        posts.map( ( {id, data: {name, des, message, imageURL} }  ) => (
                        <Posts
                            key={id}
                            id={id}
                            name={name}
                            des={des}
                            message={message}
                            imageURL={imageURL}
                        />
                    )) 
                    }

                </FlipMove>
               
           </div>
        </div>
    )
}

export default Feed
