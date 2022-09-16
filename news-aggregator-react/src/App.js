import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Tabs from './components/Tabs';
import React, {useState} from 'react';


function App() {
  const [tab, setTab] = useState("Home");

  function currentTab(newTab) {
    setTab(newTab)
  }

  return (
    <React.Fragment >
      <Header></Header>
      <Tabs switchTab={currentTab}></Tabs>
      <Body selectedTab={tab}></Body>
    </React.Fragment>
  );
}

export default App;
