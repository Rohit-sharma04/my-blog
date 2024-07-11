import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const url=import.meta.env.VITE_BACKEND_URL;

  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch(url+'/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
}