import useSWR from "swr";
import { Link } from "react-router-dom";
const fetchPosts = async () => {
  const rand = Math.floor(Math.random() * 100);
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + rand.toString()
  );
  return res.json();
};
const SWRComponent = () => {
  const { data, error, isValidating, mutate } = useSWR("posts", fetchPosts);
  return (
    <div>
      <button onClick={() => mutate()}>Refetch random post</button>
      <Link to="/">
        <button>Back to index</button>
      </Link>
      {isValidating ? <div>Rechecking...</div> : ""}
      {data && !isValidating ? (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SWRComponent;
