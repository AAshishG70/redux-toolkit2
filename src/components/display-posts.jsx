import { PostAuthor } from "./display-components/post-author";
import { TimeAgo } from "./display-components/time-ago";

const DisplayPosts = ({ posts }) => {
  const orderedLists = posts.slice().sort((a, b) => b.localCompare(a));
  const renderedLists = orderedLists.map((post) => {
    <section>
      <h2>{post.title}</h2>
      <p>{post.content.subString(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </section>;
  });
  return <option>{renderedLists}</option>;
};

export default DisplayPosts;
