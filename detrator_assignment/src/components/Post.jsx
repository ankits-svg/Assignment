import React, { useEffect, useState } from 'react'
import { PostCard } from './PostCard';
import { Grid } from '@mui/material';


export const Post = () => {
    
    const [post,setPost]=useState([])
    const getData=async()=>{
        let res=await fetch('https://dummyjson.com/posts');
        let data=await res.json()
        console.log("data:",data.posts)
        setPost(data.posts);

    }

    useEffect(() => {
        getData()
    }, [])
  
    return (
    <Grid style={{'width':'50%','display':"grid","gridTemplateColumns":"repeat(2,1fr)","margin":"auto","gap":"20px"}}>
        {post.length>0 && post.map((el)=>{
            return <PostCard key={el.id} {...el}/>
        })}
    </Grid>
  )
}
