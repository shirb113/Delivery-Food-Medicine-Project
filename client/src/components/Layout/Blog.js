import React from 'react';
import './Blog.css'
import Post from './Post';
import SidePosts from './SidePosts';
const Blog = ({ listOfPosts }) => {
    return <>

        {/* <div class="blog_header">
            <h2>עדכונים- יד לחבר</h2>
        </div> */}

        <div class="row" style={{ "flex-direction": "row-reverse" }}>
            <div class="leftcolumn" style={{
                'display': 'flex',
                flexDirection: 'column-reverse'
            }}>
                {listOfPosts.rightPosts.map((post) => {
                    // return <Post title={post.title} titleDescription={post.titleDescription} date={post.date} text={post.text} images={post.images} />
                    return <Post title={post.title} titleDescription={post.titleDescription} date={post.date} innerHtml={post.innerHtml} />
                })}
            </div>
            <div class="rightcolumn">
                {listOfPosts.leftPosts.map((post) => {
                    return <SidePosts innerHtml={post.innerHtml} />
                })}
            </div>
        </div>
    </>
}

export default Blog