import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/user-slice";

const AddPost = () => {
  const users = useSelector(selectAllUsers);
  // const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [userId, setUserId] = useState();
  const [content, setContent] = useState();

  const submitHandler = () => {
    if (title && content && userId) {
      setTitle("");
      setUserId("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a Post</h2>
      <form>
        <label htmlFor="postTitle">Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          placeholder=" Title "
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" onChange={(e) => setUserId(e.target.value)}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          placeholder=" Content "
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="button" onSubmit={submitHandler}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
