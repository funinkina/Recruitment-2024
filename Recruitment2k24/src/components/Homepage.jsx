import Navbar from "./Navbar/Navbar.jsx";
import Recruitments from "../../src/assets/recruitments-text.svg";
import Timeline from "../../src/assets/timeline-home.svg";
export default function Homepage() {
  return (
    <>
      <div className="h-screen">
        <Navbar></Navbar>
        <img
          className="mt-[15vh] w-[55%] mx-auto"
          src={`${Recruitments}`}></img>
        <img className="mt-[10vh] w-[70vw] mx-auto" src={`${Timeline}`} />
      </div>
    </>
  );
}