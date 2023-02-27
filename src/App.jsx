// import DisplayPosts from "./components/display-posts";

import AddPost from "./components/add-post";
import DisplayPosts from "./components/display-posts";

const App = () => {
  // const { users, posts } = useSelector((state) => state);
  // const dispatch = useDispatch();
  return (
    <div>
      <AddPost />
      <DisplayPosts />
    </div>
  );
};

export default App;
