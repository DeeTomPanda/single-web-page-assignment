import * as React from 'react';
import {ReactComponent as Like} from './like.svg';
import property1 from './images/property1.jpg';
import bed from './images/bed.jpg';
import bathroom from './images/bathroom.png';
import area from './images/area.png';

const Results=({gridArray})=>
{
 return(
	 <div className="grid">
	    {
	     gridArray.map((v)=>
		 <GridItems item={v}/>)
	    }
	 </div>
 );
}

const GridItems=({item})=>
{
 return(
	 <div className="grid-item">
	    <img alt="Img here "src={property1}/>
	    <div className="grid-data-item">
	       <div className="price-and-like">
	            <span><h2>{item.price}</h2>{"/month"}</span>
	            <div className="like-button">
	               <Like height="60%"
	                     width="60%"/>
	            </div>
	       </div>
	       <h2>{item.place}</h2>
	       <div className='item-address'>{item.address}</div>
	
	    </div>
	    <div className="basic-amenities">
	       <div><img src={bed}/>{item.beds+" Beds"}</div>
	       <div><img src={bathroom}/>{item.bathroom+" Bathroom"}</div>
	       <div><img src={area}/>{item.area}m<sup>2</sup></div>
	    </div>
	 </div>
 )
}

export default Results;
