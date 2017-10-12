import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components'
const LandPage = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
;`
const Posts = styled.div`
border: 1px solid black;

`
class Post extends Component{

  render(){
    const { post } = this.props;
    return(
     <LandPage>
     <Posts>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        
          <img src={post.image.url} />
          <p>{post.caption}</p>
          </Posts> 
          <FaHeartO />
          <FaCommentO />
        
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      
     </LandPage>
    )
  }
}

export default Post;