import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, sendPosts } from "../features/posts/post-slice";
import {
  fetchUser,
  selectAllUsers,
  selectStatus,
} from "../features/users/user-slice";

const AddPost = () => {
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = () => {
    if (title && content && userId) {
      dispatch(addPost(title, content, userId));
      dispatch(sendPosts({ title, body: content, userId }));
      // console.log(`Title: ${title} Content: ${content} User Id: ${userId}`);
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
    <>
      {status === "successful" ? (
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
            <button type="button" onClick={submitHandler}>
              Save Post
            </button>
          </form>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AddPost;
