import { NavLink, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import "./list.css";
import { useState } from "react";

function List() {
  const [search, setSearch] = useState("");
  const [classes, setClasses] = useState("");

  // <option value="0">🔥</option> can't be Interger, line 12 fix this //

  const data = useLoaderData();

  console.log(data);
  console.log(classes);

  return (
    <>
      <Navbar />
      <div className="list">
        <div className="search">
          {/* Sort by name (case sensitive) */}
          <input
            type="text"
            placeholder="Type a Name..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          {/* Sort by classes (select) */}
          <label htmlFor="classes">Filter by Classes:</label>
          <select
            name="classes"
            id="classes"
            onChange={(e) => {
              setClasses(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="saber">Saber</option>
            <option value="archer">Archer</option>
            <option value="lancer">Lancer</option>
            <option value="rider">Rider</option>
            <option value="caster">Caster</option>
            <option value="assassin">Assassin</option>
            <option value="berserker">Berserker</option>
            <option value="ruler">Ruler</option>
            <option value="avenger">Avenger</option>
            <option value="moonCancer">Moon Cancer</option>
            <option value="alterEgo">Alter Ego</option>
            <option value="foreigner">Foreigner</option>
            <option value="pretender">Pretender</option>
            <option value="shielder">Shielder</option>
            <option value="beast">Beast</option>
          </select>
        </div>

        {data
          .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
          .filter((g) =>
            g.className.toLowerCase().includes(classes.toLowerCase())
          )
          .sort((a, b) => a.collectionNo - b.collectionNo)
          .map((e) => (
            <div key={e.id}>
              <NavLink to={`/servant/${e.collectionNo}`}>{e.name}</NavLink>
            </div>
          ))}
      </div>
    </>
  );
}

export default List;
