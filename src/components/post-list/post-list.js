import React from "react";

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return (
            <li className='list-group-item'>
                <PostListItem 
                label={item.label} 
                important={item.important} />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
} 
export default PostList;