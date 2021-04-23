import { useState, useEffect } from 'react';
import './App.css';
import AllOpportunities from './components/AllOpportunities';
import Navbar from './components/Navbar';
import SubmissionForm from './components/Submission';
import { IData } from './components/OpportunityCard';


function App() {
  const [getAllOpportunities, setGetAllOpportunities] = useState<IData[]>([])
  


    async function fetchAllOpportunities() {
        const res = await fetch("https://overflow-app.herokuapp.com/");
        const jsonData = await res.json();
        setGetAllOpportunities(jsonData)
    }
    useEffect(() => { fetchAllOpportunities() }, [])
  return (
    <div>
      <Navbar />
      <div className="App">
      <SubmissionForm fetchAllOpportunities={fetchAllOpportunities} />
      <AllOpportunities allOpportunities={getAllOpportunities} setGetAllOpportunities={setGetAllOpportunities}/>
      </div>

    </div>
  );
}

export default App;
