function PostAuthor({ userId }) {
  const users = [
    { id: 0, name: "Ash Berry" },
    { id: 1, name: "Dave Batista" },
    { id: 2, name: "John Cena" },
  ];

  const author = users.find((user) => user.id === userId);
  return <span>by {author ? author.name : "Unknown author"}</span>;
}

export default PostAuthor;
