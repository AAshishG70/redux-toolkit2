const AddPost = () => {
  return (
    <section>
      <h2>Add a Post</h2>
      <label htmlFor="postTitle">Title: </label>
      <input type="text" id="postTitle" value="postTitle" placeholder="Title" />
      <br />
      <label htmlFor="postAutor">Author:</label>
      <select htmlFor="postAuthor"> </select>
      <option value=""></option>
      <label htmlFor="postContent">Content: </label>
      <textarea id="postContent" value="postContent" />
      <button type="button">Save a Post</button>
    </section>
  );
};

export default AddPost;
