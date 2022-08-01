import * as React from 'react';

const MainHead=({mainHeadLeft,mainHeadRight,doNothing})=>
{
 return(
	 <div className="MainHead">
	    <div id="Estatery">Estatery</div>
	    <div className="left-flex">
	       {
	          mainHeadLeft.map((v)=> <div onClick={v.onClik}
			                      className="main-item">
			                      {v.value}
			                 </div>)
	       }
	    </div>
	    <div className="right-flex">
	        {
	           mainHeadRight.map((v)=> <div className={v.className}
	                                        onClick={v.onClik}>
	                                      {v.value}
	                                   </div>)
	        }  
	    </div>
	 </div>
 );
}

export default MainHead;


