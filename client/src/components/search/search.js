import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../search/search.css'
import ResultCard from './resultcard.js';
import StateComponent from './dropdowns/states_component.js';
import CountiesComponent from './dropdowns/counties_component.js';
import AmountComponent from './dropdowns/amount_component.js';
import ElegibilityComponent from "./dropdowns/elegibility_component.js";

const Search = () => {
    //Set required hooks
    const [state, setStates] = useState([]);
    const [elegibility, setElegibility] = useState([]);

    //Use Effect to load initial data for the dropdowns 
    useEffect(() => {
        const fetchAll = async () => {
            //Fetch States
            const stateResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/states',
              );  
              //Fetch Elegibility
              const elegibilityResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/elegibility' 
              );
              
            setStates(stateResult.data);
            setElegibility(elegibilityResult.data);
        }; 
        fetchAll()
    }, []);




    // const counties = async (state) => {
    //     const id = state;
    //     return await axios(`https://startup-grant-database-staging.herokuapp.com/api/counties/${id}`);
    // };

    
    // const getCategories = async () => {
    //     return await axios('https://startup-grant-database-staging.herokuapp.com/api/categories');
    // };

 const resultcard = [
       {id: 1,
        title: "This is my grant title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        due: "05/22/2018",
        amount: "25,000.00",
        elegibility: ["Student" , "Women", "Veterans", "African Americans"],
        categories: ["Example 1" , "Example 2", "Example 3", "Example 4"] },

       {
        id: 2,
        title: "This is my grant title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        due: "05/22/2018",
        amount: "25,000.00",
        elegibility: ["Student" , "Women", "Veterans", "African Americans"],
        categories: ["Example 1" , "Example 2", "Example 3", "Example 4"]}
 ]
        
    return (  
        
        <div className='searchholder'>
            <div className='filters'>
                <h2>Filters</h2>

              <StateComponent states={state}/>
              <br/>
              <br/>
              <CountiesComponent states={'test'}/>
              <br/>
              <br/>
              <AmountComponent states={'test'}/>
              <br/>
              <br/>
              <ElegibilityComponent elegibility={elegibility}/>
              
            </div>
            <div className='results'>
                <h2>Results</h2>          
                    {resultcard.map((items, i) => {
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