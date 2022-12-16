import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  return (
    <>

      <Navbar title ="Time Management" aboutText="About Us"/>
      {/* <Navbar/> */}
      <TextForm/>
    </>
  );
}
export default App;
