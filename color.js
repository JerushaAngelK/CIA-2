import React from 'react';
import './color.css';

function showBlock()
{
    if(document.getElementById('block').style.display=="block"){
        document.getElementById('block').style.display="none";
        document.getElementById('total').style.height="90px";
    }
    else{
        document.getElementById('block').style.display="block";
        document.getElementById('total').style.height="900px";
    }
}
class ColorChanger extends React.Component{
    render(){
        return(
            <div className='see'>
                 <div id="total" onMouseEnter={showBlock} onMouseLeave={showBlock}>
                        <h1>Dropdown</h1>
                        <div id="block">
                            <div id="lime" className="in" >
                                <h3>Lime</h3>
                            </div>
                            <div id="lavender" className="in" >
                                <h3>Lavender</h3>
                            </div>
                            <div id="crimson" className="in">
                                <h3>Crimson</h3>
                            </div>
                            <div id="darkblue" className="in">
                                <h3>Darkblue</h3>
                            </div>
                            <div id="teal" className="in">
                                <h3>Teal</h3>
                            </div>
                            <div id="rebeccapurple" className="in">
                                <h3>Rebecca Purple</h3>
                            </div>
                            <div id="ghostwhite" className="in">
                                <h3>Ghost White</h3>
                            </div>
                            <div id="aquamarine" className="in">
                                <h3>Aqua Marine</h3>
                            </div>
                            <div id="aliceblue" className="in">
                                <h3>Alice Blue</h3>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default ColorChanger;

