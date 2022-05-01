import React from "react";
// import { useState, useRef } from "react";

import "./style.css";
import image1 from "./../../img/path.jpg";


function Info() {
  
    return (
        <>
            <div className="info">
                <p>Você já pensou que a cada pedalada que você dá na sua Bike, milhões de gramas de carbono deixam de ser emitidos na atmosfera?
                        É focado nisso que a  ECycle chegou para revolucionar o uso das bikes e ajudar o nosso planeta. 
                        Aqui você vai poder alugar uma Bike, acessar e salvar suas rotas favoritas, se conectar com pessoas e ter acesso aos resumos do seu desempenho. Além de tudo isso, você poderá descobrir o quanto a sua pedalada ajudou o meio ambiente e ter a chance de participar de premiações incríveis em nossas empresas parceiras.
                        Venha pedalar com a gente, os seus pedais ajudam a salvar o mundo!</p>
            </div>
            <div className="info-about">
                <div className="info-bar" >  
                <img src={image1} alt="path"></img>  
                    <p> A ECycle resume nossa missão: somos uma equipe comprometida e unificada com a missão de contribuir
                         na forma que os ciclistas enxergam o mundo em que vivem. Todos os dias buscamos maneiras de inspirar e 
                         informar nossos ciclistas sobre o bem que eles fazem ao meio ambiente através dos pedais. 
                         Mas não se trata apenas de informar, 
                         trata-se da união e do equilíbrio dos ciclistas e aspirantes em transformar o meio ambiente 
                         no melhor lugar para se estar.

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