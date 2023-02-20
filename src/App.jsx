import { useSelector } from "react-redux";

const App = () => {
  const { users, posts } = useSelector((state) => state);

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default App;
