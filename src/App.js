import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Landing from "./components/Landing";
import Subheader from "./components/Subheader";
import Credits from "./components/Credits";
import Footer from './components/Footer';

function App() {
  const [ data, setData ] = useState({
    headline:"\"A Perfect Storm\": How Budget Cuts Have Impacted UCLA",
    subheading: `UCLA is generating an annual structural budget deficit approaching $425 million, Stephen Agostini, UCLA's Chief Financial Officer, told the Daily Bruin on Feb. 6. The university has not posted its annual <u>financial reports</u> – which Agostini said contain erroneous numbers – for the last two fiscal years as of early February. Chancellor Julio Frenk described several factors – some of which are laid out in the timeline below – as combining to create "a perfect storm" culminating in UCLA's current budget crisis. Programs across campus have also had their funding slashed, from student-run retention projects to tour guide organizations.\n\nThe Daily Bruin News team's special project – "A Perfect Storm": How Budget Cuts Have Impacted UCLA – outlines the history behind UCLA's budget shortfalls and tracks the parts of campus that have faced cuts.`
  });
  
  useEffect(() => {
    // TODO: replace this link
		fetch("https://oink.dailybruin.com/api/packages/flatpages/test")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Header/>
      <Landing data={data}/>
      <Subheader data={data}/>
      <Credits data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
