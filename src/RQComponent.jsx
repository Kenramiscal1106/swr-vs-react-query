import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Link } from "react-router-dom";
const queryClient = new QueryClient();

const RQComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryChildren />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
async function fetchJSONPlaceholder() {
  const rand = Math.floor(Math.random() * 100);
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + rand.toString()
  );
  return res.json();
}
export default RQComponent;

const QueryChildren = () => {
  const queryClient = useQueryClient();

  const { data, status, isRefetching, isFetching } = useQuery(
    ["posts"],
    fetchJSONPlaceholder
  );
  return (
    <div>
      <button onClick={() => queryClient.invalidateQueries(["posts"])}>
        Refetch random post
      </button>
      <Link to="/">
        <button>Back to index</button>
      </Link>
      {status === "loading" || isFetching || isRefetching ? (
        <div>Loading</div>
      ) : (
        ""
      )}
      {status === "error" ? <div>An Error Occured</div> : ""}
      {data && !isFetching && !isRefetching ? (
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
