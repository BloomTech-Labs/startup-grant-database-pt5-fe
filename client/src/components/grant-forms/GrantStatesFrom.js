import React,{useState, useEffect} from 'react'
import axios from 'axios'

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const GrantStatesForm = props => {
    const grantId = localStorage.getItem('grant_id')
    const [states, setStates] = useState([]);
    const [form, setForm] = useState({
        grant_id: grantId,
        state_id: null

       
      });
    
    useEffect(() => {
        const fetchAll = async () => {
          const fetchStates = await axios(
            `${process.env.REACT_APP_API}/api/states`
          );
    
            setStates(fetchStates.data);
          }
        fetchAll();
      }, []);

      const handleChange = name => event => {
        setForm({ ...form, [name]: event.target.value });
      };

      onsubmit = e => {
        e.preventDefault();
        axios
          .post(`${process.env.REACT_APP_API}/api/grants/regions`, form)
          .then(res => {
            console.log(res);
            props.history.push('grant-cats')
          })
          .catch(err => {
            console.log(err);
          });
      };

      

      console.log('states',states)
      if(states.length<1){
          return <p>... loading</p>
      }else{

      
return(
    <div>
        <Select
    value={form.state_id}
    onChange={handleChange('state_id')}
    name="category"
    inputProps={{
      id: 'categories-required'
    }}
  >
    {states &&
      states.map(({id, state_name}) => {
        return (
          <MenuItem key={id} value={id}>
            {state_name}
          </MenuItem>
        );
      })}
  </Select>
  <button onClick = {onsubmit}></button>
    
    </div>
)
    }
   
    }

export default GrantStatesForm