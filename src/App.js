import {  Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import  {Home}  from './components/Home';
import  {Navbar}  from './components/Navbar';

import  {About}  from './components/About';

function App() {
  return (
    <>

    
        <Router>

        
          <Navbar />
          <div className="container">
            <Switch>
              

              
              <Route exact path="/">
                <Home />                
              </Route>
              
              <Route exact path="/about" >
                <About />
              </Route>

            </Switch>
            </div>
        </Router>
    </>
  );
}

export default App;
