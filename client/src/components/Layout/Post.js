import React from 'react'
import './Post.css'

const Post = ({ title, titleDescription, date, innerHtml }) => {

    return <>
        <div class="post_card">
            <h2>{title}</h2>
            <h5>{titleDescription},{date ? new Date(date).toDateString() : ''} </h5>
            <div dangerouslySetInnerHTML={{ __html: innerHtml }} style={{ ' font-size': '30px' }} />
        </div>
    </>
}

export default Post
