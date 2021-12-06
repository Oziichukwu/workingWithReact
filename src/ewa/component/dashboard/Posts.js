import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from "./Post"

const Posts = ()=> {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getPosts = () =>{
        return axios.get("https://jsonplaceholder.typicode.com/photos")
    }
    useEffect(() =>{
        
        setLoading(true)
        getPosts()
        .then((res) =>
        {
            console.log(res)
            setPosts(res.data.slice(0,10))
        })
        .catch((err) =>{
            console.log(err)
        })
        .finally(() =>{
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <Post/>
        </div>
    )
}

export default Posts
