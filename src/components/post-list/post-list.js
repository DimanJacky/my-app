import React from 'react'

import './post-list.css'

import PostListItem from '../post-list-item'
import { ListGroup, ListGroupItem } from 'reactstrap'

const PostList = ({posts}) => {

    const elements = posts.map((item, i) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                     {...itemProps}
                />
            </li>            
        ) 
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>   
    )
}

export default PostList