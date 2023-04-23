import ComponentB from "./ComponetnB";
import { useState } from "react";
import './ComponentA.scss';

const ComponentA  = (props) => {
    const [state, setState] = useState(true);
    const updateState = () => {
        setState(!state);
      };
      console.log(state)
   return (
        <>
       
         <nav>
        <div className="container">
          <div className="navbar">
            <h2 className="logo">WWW</h2> 
            <div onClick={updateState} className={state?'hamburger':'hamburger active'}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={state?'navbar__menu active1':' active2'}>
              <li className="navbar__menu-item"><a className="navbar__menu-link" href="#">Home</a></li>
              <li className="navbar__menu-item"><a className="navbar__menu-link" href="#">About</a></li>
              <li className="navbar__menu-item"><a className="navbar__menu-link" href="#">Contact</a></li>
            </ul>
          </div>       
        </div>
    </nav>
        </>
    )
        
       
}

export default ComponentA;