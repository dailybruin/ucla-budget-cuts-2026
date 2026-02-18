import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Landing from "./components/Landing";
import Credits from "./components/Credits";
import Footer from './components/Footer';

function App() {
  const [ data, setData ] = useState({
    headline:"Headline headline Headline headline Headline headline Headline"
  });
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Header/>
      <Landing data={data}/>
      <Credits data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
