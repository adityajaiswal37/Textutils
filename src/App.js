// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <div > 
      <Navbar className="nav-bar" title="TextUtils" aboutText="About"/> 
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </div>
  );
}

export default App;
  