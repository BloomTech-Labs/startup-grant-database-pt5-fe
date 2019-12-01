import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Material UI components
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//---------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CountiesComponent = (props) => {
  console.log('counties props',props)
      const [counties, setCounty] = useState([]);
      const {statesFilter} = props.filters.states;
      //Use Effect to load initial data for the dropdowns 
    //   useEffect(() => {
    //     const fetchCounties = async () => {
    //           //Fetch Counties
    //           const json = JSON.stringify(statesFilter);
    //           const params = {states: json};
    //           console.log('my params', params)
    //           const countyResult = await axios(
    //             'https://startup-grant-database-staging.herokuapp.com/api/counties', params 
    //           );                
    //         setCounty(countyResult.data);
    //     }; 
    //     fetchCounties()
    // }, []);

    return (
        <Autocomplete
        multiple
        id="checkboxes-county"
        options={counties}
        disableCloseOnSelect
        getOptionLabel={option => option.county_name}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.county_name}
          </React.Fragment>
        )}
        style={{ width: '85%', alignContent: 'center' }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Counties"
            placeholder="Search Counties"
            fullWidth
          />
        )}
      />            
    )
}

export default CountiesComponent;