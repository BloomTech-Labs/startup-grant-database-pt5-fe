import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import './../search/search.css'
import ResultCard from './resultcard.js';
import "./search.css";


//Dropdown with checkboxes built in components.
import StateComponent from './dropdowns/states_component.js';
import CountiesComponent from './dropdowns/counties_component.js';
import AmountComponent from './dropdowns/amount_component.js';
import ElegibilityComponent from "./dropdowns/elegibility_component.js";
import CategoryComponent from "./dropdowns/category_component.js";

//Hooks to store checked values from filters
function useProcessStates(e) {
    const [checkedStates, setCheckedStates] = useState([]);
    const stateObject =[];
    let isChecked = e.target.value
    
    setCheckedStates([...stateObject, isChecked]);
    console.log(checkedStates)
    return checkedStates;
};



// const [checkedStates, setCheckedStates] = setCheckedStates([]);
function useProcessQuery (state='' , counties='', ammount='', elegibility='', category='') {
    
    alert('Hello');
    console.log('my states', state)
    console.log('my states', counties)
    console.log('my states', ammount)
    console.log('my states', elegibility)
    console.log('my states', category)
}

const Search = () => {
    // Hooks to render the filters.
    const [state, setStates] = useState([]);
    const [elegibility, setElegibility] = useState([]);
    const [category, setCategory] = useState([]);
    const [grants, setGrants] = useState([]);

    const [filters, setFilters] = useState({
        states:[],
        counties:[],
        amount:[],
        elegibility:[],
        category:[]
    });

    //Use Effect to load initial data for the dropdowns 
    useEffect(() => {
        const fetchAll = async () => {
            //Fetch States
            const stateResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/states',
              );  
              //Fetch Counties
              const countyResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/counties',
              );                
              //Fetch Elegibility
              const elegibilityResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/elegibility' 
              );
              //Fetch Categories
              const categoryResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/categories' 
              );

              //Fetch Grants
                const params = {
                    filters
                }

            //   var grantResults = await axios(
            //     'https://startup-grant-database-staging.herokuapp.com/api/grants/search', {params}
            //   )
              
            setStates(stateResult.data);
            setElegibility(elegibilityResult.data);
            setCategory(categoryResult.data);
            //setGrants(grantResults.data);
        }; 
        fetchAll()
    }, []);
   
      
    return (  
        <div className='searchholder'>
            
            <div className='filters'>
                <h2>Filters</h2>
                    <StateComponent states={state} processState={useProcessStates} />
                    <br/>
                    <br/>
                    <CountiesComponent filters={filters} setFilters={setFilters}/>
                    <br/>
                    <br/>
                    <AmountComponent/>
                    <br/>
                    <br/>
                    <ElegibilityComponent elegibility={elegibility} />
                    <br/>
                    <br/>
                    <CategoryComponent category={category} />
            </div>
            <div className='results'>
                <h2>Results</h2>          
                    {grants.map((items, i) => {
                           return (
                            // <Link style={{ textDecoration: 'none', color: '#000000'}}to={`/search/${items.id}`}>
                                <ResultCard key={i} resultcard={items}/> 
                            // </Link>
                           )   
                    })}
              
            </div>
        </div>
    )

}

export default Search

