import * as React from 'react';

const FilterMenuBar=({onSubmit,onPlaceChange,onDateChange,onPriceChange,onPTypeChange,
                      price,type,date,place})=>
{
 return(
	 <div className='filterMenu'>
	    <Location {...{place,onPlaceChange}}/>
	    <When {...{date,onDateChange}}/>
	    <Price {...{price,onPriceChange}}/>
	    <PropertyType {...{onPTypeChange,type}}/>
	    <Search onSubmit={onSubmit}/>
	 </div>
 );
}

const Location=({onPlaceChange,place})=>
{
 return( <div className='filters search'>
	    <div className='filter-title'>Location</div>
	    <input className='filter-input'
	           value={place}
	           onChange={(e)=>onPlaceChange(e.target.value)}/>
	 </div>
 );
}

const When=({onDateChange,date})=>
{
 const [type,setType]=React.useState('type');
 return(
	 <div className='filters'>
	    <div className='filter-title'>When</div>
	    <input type={type}
	           className='filter-input filter-date-input'
	           placeholder="Select Move-in Date"
	           onFocus={()=>setType('date')}
	           onBlur={()=>setType('text')}
	           onChange={(e)=>onDateChange(e.target.value)}/>
	 </div>
 );
}

const Price=({onPriceChange,price})=>
{
 return(
	 <div className='filters'>
	    <div className='filter-title'>Price</div>
	    <select className="filter-input"
	            placeholder="$1500-$2500"
	            onChange={(e)=>onPriceChange(e.target.value)}>
	       <option value={price} selected disabled hidden>{price}</option>
	       <option value="$0-$3000">$0-$3000</option>
	       <option value="$500-$1000">$500-$1000</option>
	       <option value="$1000-$1500">$1000-$1500</option>
	       <option value="$1500-$2000">$1500-$2000</option>
	       <option value="$2000-$2500">$2000-$2500</option>
	       <option value="$2500-$3000">$2500-$3000</option>
	    </select>
	 </div>
 );
}

const PropertyType=({onPTypeChange,type})=>
{
 return(
	 <div className='filters'>
	    <div className='filter-title'>Property Type</div>
	    <select className='filter-input'
	            onChange={(e)=>onPTypeChange(e.target.value)}>
	       <option value={type} selected disabled hidden>{type}</option>
	       <option value="All">All</option>
	       <option value="House">Houses</option>
	       <option value="Villa">Villa</option>
	       <option value="Apartment">Apartment</option>
	   </select>
	 </div>
 );
}

const Search=({onSubmit})=>
{
 return(
	 <div className='filters'>
	    <button 
	            className="search-button bgblueviolet"
	            onClick={()=>onSubmit()}>
	            <div>Search</div>
	    </button>
	 </div>
 );
}

export default FilterMenuBar;
