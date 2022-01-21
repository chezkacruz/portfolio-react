
import './App.css';
import Navbar  from "./components/Navbar/Navbar"
import Home  from "./components/Home"
import About  from "./components/About"
import Experience  from "./components/Experience"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;
