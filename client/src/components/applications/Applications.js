import React, { useState, useEffect } from "react";
import ApplicationCard from "./Application-Card";
import axios from "axios";
import "./applications.css";

const Applications = props => {
  const stringUser_id = localStorage.getItem("id");
  const user_id = parseInt(stringUser_id);
  //console.log(user_id, "hello!");
  // Hooks declaration ------------------------------------------------------------------------
  let applicationResults = {};
  // Hook to render the results.
  const [applications, setApplications] = useState([]);

  // const getGrants = () => {
  //   let data = [];
  //   let grantNum = null;
  //   axios.get(`${process.env.REACT_APP_API}/api/grants`).then(resp => {
  //     data = resp.data;
  //     console.log(data);
  //     const grant = data.find(i => i.user_id === 25);
  //     if (grant) {
  //       grantNum = grant.id;
  //       return grantNum;
  //     }
  //   });
  // };

  const getGrants = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API}/api/grants`);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err.message);
    }
  };

  let finalGrantId = getGrants();
  console.log(finalGrantId);

  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Grants

      // eslint-disable-next-line react-hooks/exhaustive-deps
      applicationResults = await axios.get(
        `${process.env.REACT_APP_API}/api/applications/`
      );

      setApplications(applicationResults.data);
      //console.log(applicationResults.data);
    };
    fetchAll();
  }, []);

  return (
    <div className="searchholder">
      <div className="results">
        <h2>Applications Received</h2>
        {applications.map(item => {
          return <ApplicationCard resultData={item} />;
        })}
      </div>
    </div>
  );
};

export default Applications;
