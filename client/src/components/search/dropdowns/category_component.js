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

const CategoryComponent = (props) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {
          //Fetch Categories
          const categoryResult = await axios(
            'https://startup-grant-database-staging.herokuapp.com/api/categories' 
          );

          setCategory(categoryResult.data);
    }; 
    fetchAll()
}, []);

    return (
      <Autocomplete
      multiple
      id="checkboxes-category"
      options={category}
      disableCloseOnSelect
      getOptionLabel={option => option.category_name}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.category_name}
        </React.Fragment>
      )}
      style={{ width: '85%', alignContent: 'center' }}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Category"
          placeholder="Search Category"
          fullWidth
        />
      )}
    />            
  )   
}

export default CategoryComponent;