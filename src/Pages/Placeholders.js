import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Placeholders() {
    const [posts, getPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => getPosts(json.slice(0,10)) );
    })
  
  return (
    <div>
        Placeholders
        { posts && posts.map(post => (
            <div key={post.id} className="post-title">
                <Link to={`${post.id}`} >{post.title}</Link>
            </div>
        ))}
        </div>

  )
}
