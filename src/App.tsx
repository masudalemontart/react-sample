import { useState } from "react";
import styles from "./App.css";

type Post = {
  imageUrl: string;
  description: string;
  createdAt: string;
};

const Post = (props: Post) => {
  return (
    <div>
      <img src={props.imageUrl} />
      <p className={"timestyle"}>{props.description}</p>
      <span>{props.createdAt}</span>
    </div>
  );
};

function formatDate(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}月${day}日`;
}

function App() {
  const [count, setCount] = useState(0);

  const now = new Date();
  const formattedDate = formatDate(now);

  const POSTS: Array<Post> = [
    {
      imageUrl: "https://placehold.jp/400x500.png",
      description: "This is a post A",
      createdAt: formattedDate,
    },
    {
      imageUrl: "https://placehold.jp/400x500.png",
      description: "This is a post B",
      createdAt: formattedDate,
    },
    {
      imageUrl: "https://placehold.jp/400x500.png",
      description: "This is a post C",
      createdAt: formattedDate,
    },
  ];

  return (
    <>
      {POSTS.map((post) => {
        return (
          <Post
            imageUrl={post.imageUrl}
            description={post.description}
            createdAt={post.createdAt}
          />
        );
      })}
    </>
  );
}

export default App;
