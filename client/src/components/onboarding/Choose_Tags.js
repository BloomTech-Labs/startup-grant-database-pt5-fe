import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../onboarding/onboarding.css';
import Paper from '@material-ui/core/Paper';
import SingleTag from '../onboarding/SingleTag';
// import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { cpus } from 'os';

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

//Hooks
const Choose_Tags = () => {
  const classes = useStyles();
  const [companyTags, setCompanyTags] = useState([]);

  // Use Effect to load initial data for the dropdowns
  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Categories
      const categoryResult = await axios(
        'https://startup-grant-database-staging.herokuapp.com/api/categories'
      );
      setCompanyTags(categoryResult.data);
    };
    fetchAll();
  }, []);

  //Handle selected tags
  const handleSelected = chipToSelect => id => {
    setCompanyTags(founderTags =>
      founderTags.map(chip => {
        // console.log('Selected: ', chipToSelect);
        if (chip.id === chipToSelect) {
          let style = chip.style === 'secondary' ? '' : 'secondary';
          return {
            ...chip,
            selected: !chip,
            style
          };
        }
        return chip;
      })
    );
  };

  const handleSubmit = () => {
    // const result = [...companyTags.filter(chip => chip.selected === true)];
    // console.log(result);
  };

  //TODO: Fix issue with the selected key in the JSON array
  //-Try fixing the missing selected field by selecting base on ID

  return (
    <Paper className="paper">
      <h1>Choose Tags that apply to your founders</h1>
      {companyTags.map(data => {
        console.log('Console log: ', data);
        return (
          <SingleTag
            key={data.id}
            {...data}
            label={data.category_name}
            data={data}
            classes={classes}
            handleSelected={() => handleSelected(data.id)}
          />
        );
      })}
      <Link to="/category-tags">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Link>
    </Paper>
  );
};

export default Choose_Tags;
