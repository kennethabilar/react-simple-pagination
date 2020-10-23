import React from 'react';

const Posts = ({ posts, loading}) => {
    if(loading) {
        return (
            <strong>Loading...</strong>
        );
    }

    return (
        <ul className="list-group">
            { posts.map(post => ((
                <li className="list-group-item" key={post.id}>
                    {post.id}
                    {' '}
                    {post.title}
                </li>
            ))) }
        </ul>
    );
}

export default Posts;
