import Navbar from "../components/Navbar";
import "./classes.css";
import { NavLink, useLoaderData } from "react-router-dom";

function Classes() {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <Navbar />
      <div>
        <p>Standard Classes:</p>
        {data
          .filter((e) => e.id <= 7)
          .sort((a, b) => a.id - b.id)
          .map((e) => (
            <div key={e.id}>
              <NavLink to={`/classes/${e.id}`}>{e.name}</NavLink>
            </div>
          ))}
        <p>Unusual Classes:</p>
        {data
          .filter((e) => e.id > 7)
          .sort((a, b) => a.id - b.id)
          .map((e) => (
            <div key={e.id}>
              <NavLink to={`/classes/${e.id}`}>{e.name}</NavLink>
            </div>
          ))}
      </div>
    </>
  );
}

export default Classes;
