import React, {useState , useEffect} from 'react';
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
var stateResult = [];

const StateComponent = (props) => {
    //Hook to control the States Autocomplete text filed
    const [autoCompleteText, setAutoCompleteText] = useState('')
    
    //Hooks to store the States drop down results
    const [state, setStates] = useState([]);

    useEffect(() => {
      const fetchAll = async () => {
          //Fetch States
           stateResult = await axios(
              'https://startup-grant-database-staging.herokuapp.com/api/states',
            );  
          const allStates = [{id:0 , state_name: "All States"}];  
          setStates(allStates.concat(stateResult.data));
      }; 
      fetchAll()
  }, []);

    //Function to handle States dropdown selection 
    const handleStates = (event, value) => {

     const checkedStateValues = value.map(({state_name})=> state_name); //event.target.getAttribute('value');
    
      if (checkedStateValues.find(item => item === 'All States')  && checkedStateValues.length > 1) {
        return props.handleOpen();
      }
      //Updating State Filter when calling updater function
      const stateResultsData = stateResult.data;
      console.log('States Returned',stateResultsData);
    //   const matchingStates =[];
    //   const stateIDs = stateResultsData.map(id => {
    //     if (stateid.find(id =)
        
        
    //     return 
    //     stateid.state_name === [...checkedStateValues]

    //   console.log('My state id',stateIDs)

    //   props.updateStateFilter(checkedStateValues);
     };

    return (
      <Autocomplete
      multiple
      id="checkboxes-state"
      options={state}
      disableCloseOnSelect
      getOptionLabel={option => option.state_name}
      onChange={(event, value) => handleStates(event, value)}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            value={option}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.state_name}
        </React.Fragment>
      )}
      style={{ width: '85%', alignContent: 'center' }}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="States"
          placeholder="Search States"
          fullWidth
        />
      )}
    />            
  )   
}

export default StateComponent;