import React,{Component} from 'react';
import "./cards.css";
import data from './details.json';

class Cards extends React.Component{
    render(){
        // data.map((movie,index)=>{
        //     return <div key={index}>
        //         <p>{movie.name}</p>
        //         <p>{movie.Description}</p>
        //     </div>
        // })
        return(
            <div>
               { data.map((childs,index)=>{
                   return  <div className="card cardcss col-sm-6" style={{width:" 20rem"}} key={index}>
                   <img className="card-img-top image" src={childs.image} alt="Card image cap" />
                   <div className="card-block">
                     <h4 className="card-title text">{childs.name}</h4>
                     <p className="card-text content">{childs.Description}</p>
                     <a href="#" className="btn btn-danger btn3">Missing child</a>
                   </div>
                 </div>
                })
               }
            </div>
        )
    }
}
export default Cards;