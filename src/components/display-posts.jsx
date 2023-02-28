import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/post-slice";
import PostAuthor from "./display-components/post-author";
import ReactionButtons from "./display-components/reaction-buttons";
import TimeAgo from "./display-components/time-ago";

const DisplayPosts = () => {
  const posts = useSelector(selectAllPosts);

  const orderedLists = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedLists.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default DisplayPosts;
