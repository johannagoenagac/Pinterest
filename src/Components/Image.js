import React from 'react';
import './Image.css';

function Image(props) {

    return (
            <img onClick={()=>props.doClick(props.url)} id="imgCard" src={props.url} alt="imgApi"></img>
    )


}

export default Image;



/* //  <div className="col l3">
//  <img id="imgCard" src={props.url} alt="Img"></img>
//         <div className="container">
//      <h4><b>John Doe</b></h4>
//      <p>Architect & Engineer</p>
//      </div>
//     </div> */

