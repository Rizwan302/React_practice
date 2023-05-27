import { useState } from 'react';
import './App.css';
import First from './compontes/First';
import Navbar from './compontes/Navbar'
import Testing from './compontes/Testing';

// import Drakmode from './compontes/Drakmode';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";
// import From from './compontes/From';


function App() {

  const [mcolor, setcolor] = useState('che')
  const [mode, setmode] = useState('light')
  const [btntext, setbtntext] = useState('Dark Mode')
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#39424a';
      document.body.style.color = 'light'
      setbtntext(' Light Mode')
    }
    else{
      setmode('light');
      setbtntext('Dark Mode')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'light'

    }
  }

  const togglecolor1 = () =>{
    if(mcolor === 'che'){
      setcolor({
        backgroundColor: '#ffbf00',
        color: 'white'
    })
    }
    else{
      setcolor('che')
    }
  }

  return (
    <>
      {/* <Navbar navName="My Name" mode={mode}  toggleMode={toggleMode} btntext={btntext} togglecolor1={togglecolor1}/> 
      <First mode={mode}/> */}
      {/* <BrowserRouter> */}
      {/* <Switch> */}
        {/* <Route path="/"> */}
        {/* </Route> */}
        {/* <Route path={`${match.path}/:id`}>
          <UserProfile />
        </Route> */}
      {/* </Switch> */}
      {/* </BrowserRouter> */}

      {/* <h1>React From</h1>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="phone" placeholder='Phone' />
        <input type="password" placeholder='Password' />
        <br></br>
        <button>Submite</button> */}
{/* 
        <From hending="School From"/> */}
        {/* <First/> */}
        <Testing/>
    </>
  );
}

export default App;
