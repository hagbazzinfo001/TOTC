import React from 'react';
import acting from '../assets/images/acting.svg';
import business from '../assets/images/business.svg';
import computer from '../assets/images/computer.svg';
 import marketing from '../assets/images/marketing.svg';
import development from '../assets/images/development.svg';
import photograph from '../assets/images/photograph.svg';
import design from '../assets/images/design.svg';
import '../assets/css/catalog.css';
function Catalog(props) {
    const Catalog = [
        {
            imgSrc: design,
            title: "Design",
             alt: "Design",   
             paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
             fill: "rgba(73, 187, 189, 0.30)"

        },
        {
            imgSrc: computer,
            title: "Development",
            alt: "computer",   
             paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
             fill:" rgba(91, 114, 238, 0.30)"
        },
        {
            imgSrc: development,
            title: "Development",
            alt: "Development",   
             paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
             fill: "rgba(157, 204, 255, 0.30)"

        },
        {
            imgSrc: business,
            title: "Business",
            alt: "Business",   
             paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
             fill: "rgba(0, 203, 184, 0.30)"
        },
        {     imgSrc: marketing,
            title: "Marketing",
            alt: "marketing",   
             paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",            
             fill: "rgba(244, 140, 6, 0.30)"
            },
             {     imgSrc: photograph,
                title: "Photograph",
                alt: "photograph",   
                 paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
                 fill: "rgba(238, 100, 91, 0.30)"
                },
                 {     imgSrc: acting,
                    title: "Acting",
                    alt: "acting",   
                     paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
                     fill: "rgba(37, 38, 65, 0.30)"
                    },
                    
                     {     imgSrc: business,
                        title: "Business",
                        alt: "Business",   
                         paraGraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
                         fill: "rgba(0, 203, 184, 0.30)"
                    },
                        
            
            ]
    return (
        <>
                <h1>Choice favourite course from top category</h1>  

         <div className="catalog-container">

          {Catalog.map((item, index) => (
              <div className="catalog" key={index}>
                  <img src={item.imgSrc} alt={item.alt}  style={{ backgroundColor: item.fill }} />
                  <h2>{item.title}</h2>
                  <p>{item.paraGraph}</p>
              </div>
          ))}
        </div>
      </>
    );
}

export default Catalog;