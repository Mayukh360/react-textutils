import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {

  return (
    <div >
      <Navbar title="TextUtil" />
      <div className="container my-3">
      <TextForm headings="Enter a Text to Analyze Below"/>
      </div>
     
      
    </div>
    
  );
}

export default App;
