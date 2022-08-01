import * as React from 'react';
import MainHead from './extras/MainHead.js';
import HeaderWithSearchBar from './extras/HeaderWithSearchBar.js';
import FilterMenuBar from './extras/FilterMenuBar.js'; 
import Results from'./extras/Results.js';
import './App.css';

 const dataArray=[{
                   price:"$1,200",
                   place:"Chennai",
                   address:"9/11,Vishnu Nagar",
                   beds:4,
                   bathroom:2,
                   area:1110.5,
	           date:"2-08-2022",
	           type:"Villa,House"
                  },
                  {
		   price:"$2,300",
		   place:"Tirunelveli",
		   address:"D.no:10,Plot.No:6,Valiampatti",
		   beds:3,
		   bathroom:3,
		   area:989,
		   date:"9-08-2022",
		   type:"Apartment"
		  },
	          {
	           price:"$2,950",
		   place:"Bangalore",
		   address:"Whitefield Layout,Bommasandra",
                   beds:2,
                   bathroom:2,
                   area:700,
		   date:"31-12-2022",
		   type:"House"
		  },
	          {
		   price:"$800",
		   place:"Noida",
		   address:"Sector 47,Ghaziabad",
		   beds:1,
		   bathroom:1,
		   area:400,
		   date:"6-08-2022",
		   type:"House"
		  },
                  {
                   price:"$1430",
                   place:"Jaipur",
                   address:"No.11,Sand Desert Apartments,Ghats Road",
                   beds:2,
                   bathroom:3,
                   area:965,
                   date:"23-08-2022",
                   type:"Apartment"
                   },
                  {
                   price:"$2310",
                   place:"Jamshedpur",
                   address:"Iron Factory Apartments,Jamshedpur",
                   beds:2,
                   bathroom:3,
                   area:1083,
                   date:"23-08-2022",
                   type:"Apartment"
                   },
                  {
                   price:"$985",
                   place:"Cochin",
                   address:"Sea Water Villas,K.V Raman Road,Cochin",
                   beds:3,
                   bathroom:2,
                   area:1200,
                   date:"20-09-2022",
                   type:"Houses/Villas"
                   },
                  {
                   price:"$2110",
                   place:"Hyderabad",
                   address:"No.12,Bismillah Mosque road,Hyderabad City",
                   beds:3,
                   bathroom:3,
                   area:1400,
                   date:"21-11-2022",
                   type:"House"
                   }];

const doNothing=()=> alert("This is a dummy menu");
const getLocal=(param)=> localStorage.getItem(param);
const reducerFunction=(state,action)=>
{
 let filter=action.payload;
 let {place,date,price,type}=filter;

 switch(action.type)
 {
  case('APPLY-FILTER'):
  {
   let place_=place.toLowerCase();
   let date_=new Date(date);
   let price_=(price.replace(/\$/g,' ')).split('-');
   let type_=type.toLowerCase();

   return(dataArray
	  .filter((property)=>property.place.toLowerCase().includes(place_))

	  .filter((property)=>
		  Number(property.price.replace(/\W/g,''))<Number(price_[1]) 
		  &&
		  Number(property.price.replace(/\W/g,''))>=Number(price_[0]))

	   .filter((property)=>
		   {
		    let date=property.date.split('-');
		    return (new Date(date[2],date[1]-1,date[0])>date_);
		   })
	   .filter((property)=>
		   type=="All"?1:property.type.toLowerCase().includes(type_))
   );
  }
  default:throw new Error();
}
}

function App() 
{
 const mainHeadL=["Rent","Buy","Sell","Manage Property ˅","Resources ˅"];
 const mainHeadRight=[{
	               key:"SignUp",
                       value:"SignUp",
                       className:"main-item border bgblueviolet",
                       onClik:doNothing
                       },
                       {
			key:"Login",
                        value:"Login",
                        className:"main-item border",
                        onClik:doNothing
                       }];
 const mainHeadLeft=mainHeadL.map((value,i)=>({
	                                       key:i.toString(),
			                       value,
			                       onClik:doNothing
			                      }))

 const [place,setPlace]=React.useState(getLocal("place"));
 const [date,setDate]=React.useState(new Date().toISOString().slice(0,10));
 const [price,setPrice]=React.useState(getLocal("price"));
 const [type,setPType]=React.useState(getLocal("type"));
 const [gridArray,setGridArray]=React.useReducer(reducerFunction,dataArray); 
 
 const onPlaceChange=(value)=>setPlace(value);
 const onDateChange=(value)=>setDate(value);
 const onPTypeChange=(value)=>setPType(value);
 const onPriceChange=(value)=>setPrice(value);
 const onSubmit=()=>
 {
  setGridArray({
	        type:'APPLY-FILTER',
	        payload:{
			 place,
			 date,
			 type,
			 price}
               })
 }

 React.useEffect(()=>
	        {
		 localStorage.setItem('place',place);
                 localStorage.setItem('type',type);
		 localStorage.setItem('price',price);
		 localStorage.setItem('date',date);
		},[price,type,date,place]);
 
console.log("Refreshed");
console.log(typeof(price));

 return (
	  <div className='container'>
	     <MainHead 
	               mainHeadLeft={mainHeadLeft}
	               mainHeadRight={mainHeadRight}
	               doNothing={doNothing}/>
	    <HeaderWithSearchBar/>
	    <FilterMenuBar onSubmit={onSubmit}
	                   onPlaceChange={onPlaceChange}
	                   onDateChange={onDateChange}
	                   onPriceChange={onPriceChange}
	                   onPTypeChange={onPTypeChange}
	                   place={place}
	                   type={type}
	                   date={date}
	                   price={price}/>
	    <Results gridArray={gridArray}/>
	  </div>
  );
}
	

export default App;
