import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/users/user-slice";

const App = () => {
  const { users, posts } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      {posts.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
      <button onClick={() => dispatch(addUser({ id: 4, name: "Rushali" }))}>
        Add User
      </button>
    </div>
  );
};

export default App;
