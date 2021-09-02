import { useTransition, animated } from 'react-spring'
import s from './App.module.scss';
import Navbar from './componets/Navbar';
import {BrowserRouter as Router, Switch, Route, useLocation, BrowserRouter, Redirect} from "react-router-dom"
import About from './componets/pages/About';
import Home from './componets/pages/Home';
import Portfolio from './componets/pages/Portfolio';
import Resume from './componets/pages/Resume';
import Contact from './componets/pages/Contact';



function App() {

  // const location = useLocation();

  // console.log(location)
  
  // const transitions = useTransition (location, (location) => location.pathname, {
  //   from: {},
  //   enter: {},
  //   leave: {},
  // }); 

  return (
    <>
      
      <BrowserRouter>
          <Navbar/>
            {/* {transitions.map(({ item, props, key}) => (

              <animated.div key={key} style={props}> */}
                  <Switch  >

                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/portfolios" component={Portfolio}/>
                    <Route exact path="/resume" component={Resume}/>
                    <Route exact path="/contact" component={Contact}/>


                    <Redirect from='/' to='/home'/>
                  </Switch  >
          {/* </animated.div>
        ))} */}
      </BrowserRouter>
      
        
      
      
      
      
    </>
  );
}

export default App;
