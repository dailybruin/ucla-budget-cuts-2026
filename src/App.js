import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import TimelineContainer from './components/TimelineContainer';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return  (
    <div className="App">
      <Header/>
      <TimelineContainer data={data} />
      Hello Daily Bruin!
      <Footer/>
    </div>
  );
}

export default App;
