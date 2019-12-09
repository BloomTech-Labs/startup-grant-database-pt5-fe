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
      //Creating hook to store County state  
      const [counties, setCounty] = useState([]);

      //Use Effect to reload data for the county dropdowns based on different selected states 
      useEffect(() => {
        const fetchCounties = async () => {
              //Fetch Counties
              console.log('my state props', props.stateFilter)
              const json = JSON.stringify(props.stateFilter);
              const params = {states: json};
              const countyResult = await axios(
                'https://startup-grant-database-staging.herokuapp.com/api/counties', {
                 params: {
                    states: props.stateFilter
                  },
                //  paramsSerializer: params => {
                //   // return Qs.stringify(params);
                //  } 
                }  
              );                
            setCounty(countyResult.data);
        }; 
        fetchCounties()
    }, [props.stateFilter]);

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