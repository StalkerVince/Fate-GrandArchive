import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <h3>Here lies the data of the saviors of Humanity.</h3>
      <h3>May they be remembered until the end of time.</h3>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
