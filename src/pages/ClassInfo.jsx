import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

function Classinfo() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <Navbar />
      <h1>{data.name}</h1>
      <p>{data.desc}</p>
    </div>
  );
}

export default Classinfo;
