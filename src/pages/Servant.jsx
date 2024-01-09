import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Servant() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <NavLink to={`/list`}>Home</NavLink>
      <h1>{data.name}</h1>
      <img src={data.extraAssets.charaGraph.ascension[1]} alt={data.name} />
      <p>{data.id}</p>
    </div>
  );
}

export default Servant;
