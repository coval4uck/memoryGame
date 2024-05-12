import { useState } from "react";
import "./RulesWindow.css";

const RulesWindow = () => {
    const [visible,setVisible] = useState(true)
    
  return (
    <div className={`rules-window ${visible ? 'visible-rules' : ''}`} >
      <div className="rules">
        <div className="rules-header">
          <h2>Rules</h2>
          <div className="button-close" onClick={() => setVisible(false)}>
            <span></span>
          </div>
        </div>
        <div className="rules-content">
          <p>Take in turns flipping 2 cards at a time (by clicking on them)</p>
          <p>If they’re a match, take another turn, if not, flip them back</p>
          <p>
            Keep score by clicking next to the numbers on the score slider at
            the top
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesWindow;
