import React, { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./search.css";
=======
import axios from "axios";
>>>>>>> f504726bace69c81e5e3712c2ce9b50ea5937f59

import ResultCard from "./resultcard.js";

const Search = () => {
<<<<<<< HEAD
  const resultcard = [
    {
      id: 1,
      title: "This is my grant title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      due: "05/22/2018",
      amount: "25,000.00",
      elegibility: ["Student", "Women", "Veterans", "African Americans"],
      categories: ["Example 1", "Example 2", "Example 3", "Example 4"]
    },

    {
      id: 2,
      title: "This is my grant title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      due: "05/22/2018",
      amount: "25,000.00",
      elegibility: ["Student", "Women", "Veterans", "African Americans"],
      categories: ["Example 1", "Example 2", "Example 3", "Example 4"]
    }
  ];

  return (
    <div className="searchholder">
      <div className="filters">
        <h2>Filters</h2>
        Something here
      </div>
      <div className="results">
        <h2>Results</h2>
        {resultcard.map(items => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#000000" }}
              to={`/search/${items.id}`}
            >
              <ResultCard key={items.id} resultcard={items} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

=======
  const getCategories = async () => {
    return await axios("");
  };

  const getElegibility = async () => {
    return await axios("");
  };

  const resultcard = [
    {
      id: 1,
      title: "This is my grant title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      due: "05/22/2018",
      amount: "25,000.00",
      elegibility: ["Student", "Women", "Veterans", "African Americans"],
      categories: ["Example 1", "Example 2", "Example 3", "Example 4"]
    },

    {
      id: 2,
      title: "This is my grant title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      due: "05/22/2018",
      amount: "25,000.00",
      elegibility: ["Student", "Women", "Veterans", "African Americans"],
      categories: ["Example 1", "Example 2", "Example 3", "Example 4"]
    }
  ];

  return (
    <div className="searchholder">
      <div className="filters">
        <h2>Filters</h2>
        Something here
      </div>
      <div className="results">
        <h2>Results</h2>
        {resultcard.map(items => {
          return (
            <Link
              style={{ textDecoration: "none", color: "#000000" }}
              to={`/search/${items.id}`}
            >
              <ResultCard key={items.id} resultcard={items} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

>>>>>>> f504726bace69c81e5e3712c2ce9b50ea5937f59
export default Search;
