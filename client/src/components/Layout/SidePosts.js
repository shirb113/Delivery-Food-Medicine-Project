
import './Post.css'
import React from 'react'

const SidePosts = ({innerHtml}) => {
    return <>
        <div class="post_card">
        <div dangerouslySetInnerHTML={{ __html: innerHtml }} />
        </div>

    </>
}

export default SidePosts