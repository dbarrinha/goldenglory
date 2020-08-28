import React, { useState, useEffect } from 'react';
import { Container, PostForm, PostList, PostFormFooter, TextArea, ButtonForm } from './styles';
import Post from './Post'
import Loader from '../../components/Loader'
import { useSelector } from 'react-redux';
import { newPost, getPosts } from '../../services/posts';

function FeedArea() {
  const [text, setText] = useState("")
  const [posts, setPosts] = useState(null)
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    buscaPosts()
  }, [])

  const buscaPosts = () => {
    getPosts().then(res => {
      setPosts(res)
    })
  }

  const enviarForm = () => {
    let post = {
      userId: user.uid,
      userName: user.displayName,
      userFoto: user.photoURL,
      useremail: user.email,
      text
    }

    newPost(post).then(res => {
      setText("")
      buscaPosts()
    })
  }

  return (
    <Container>
      <PostForm>
        <TextArea value={text} onChange={e => setText(e.target.value)} placeholder="O que está acontecendo?"></TextArea>
        <PostFormFooter>
          <ButtonForm onClick={() => enviarForm()}>Tweetar</ButtonForm>
        </PostFormFooter>
      </PostForm>
      
      {posts ? (
        <PostList>
          {posts.map((post,index)=>{
            return <Post post={post} index={index} />
          })}
        </PostList>
      )
        : <Loader label="Buscando Posts" />}
    </Container>
  );
}

export default FeedArea;