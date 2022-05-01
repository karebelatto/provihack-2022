import React from "react";
// import { useState, useRef } from "react";

import "./style.css";
import image1 from "./../../img/path.jpg";


function Info() {
  
    return (
        <>
            <div className="info">
                <p>AQUI VAI UM TEXTO SOBRE O PROJETO</p>
            </div>
            <div className="info-about">
                <div className="info-bar" >  
                <img src={image1} alt="path"></img>  
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque quasi tempore, dolorum consectetur quae excepturi labore 
                        culpa facere eos, et reiciendis officiis architectodebitis 
                        magni dolore atque totam aliquam odio? 
                    </p>
                   
                    {/* <button>
                        <span>
                            
                        </span>
                    </button> */}
                </div>
            </div>
        </>
    );
  }
export default Info;