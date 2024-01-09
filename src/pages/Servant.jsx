import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Servant() {
  const { data } = useLoaderData();
  console.log(data);

  console.log(data.traits);
  return (
    <>
      <div>
        <NavLink to={`/list`}>Home</NavLink>
        <h1>{data.name}</h1>
        <p>{data.originalName}</p>
        <img src={data.extraAssets.charaGraph.ascension[0]} />
        <div>
          <img src={data.extraAssets.charaGraph.ascension[1]} />
        </div>
        <h2 className="capitalize">Class: {data.className}</h2>
        <h2>Rarity: {data.rarity}⭐</h2>
        <p>Gender: {data.gender}</p>
        <p>{data.traits[3].name}</p>
        <p>{data.traits[4].name}</p>
      </div>
    </>
  );
}

export default Servant;

//<p>{data.traits.find((e) => e.id === 2795).name}</p>
