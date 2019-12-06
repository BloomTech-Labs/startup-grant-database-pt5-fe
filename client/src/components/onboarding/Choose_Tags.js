import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../onboarding/onboarding.css';
import Paper from '@material-ui/core/Paper';
import SingleTag from '../onboarding/SingleTag';

import { Link } from 'react-router-dom';
import axios from 'axios';

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

// const initialFounderTags = [
//   { key: 0, label: 'Black', selected: false },
//   { key: 1, label: 'LBGTQ', selected: false },
//   { key: 2, label: 'Asian', selected: false },
//   { key: 3, label: 'Women', selected: false },
//   { key: 4, label: 'Veteran', selected: false },
//   { key: 5, label: 'Student', selected: false },
//   { key: 6, label: 'Native American', selected: false }
// ];

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
  const handleSelected = chipToSelect => () => {
    setCompanyTags(founderTags =>
      founderTags.map(chip => {
        if (chip.key === chipToSelect.key) {
          let style = chipToSelect.style == 'secondary' ? '' : 'secondary';
          return {
            ...chipToSelect,
            selected: !chipToSelect.selected,
            style
          };
        }
        return chip;
      })
    );
  };

  const handleSubmit = () => {
    const result = [...companyTags.filter(chip => chip.selected === true)];
    console.log(result);
  };

  //TODO: Fix issue with the selected key in the JSON array

  return (
    <Paper className="paper">
      <h1>Choose Tags that apply to your founders</h1>
      {companyTags.map(data => {
        return (
          <SingleTag
            key={data.id}
            {...data.category_name}
            data={data.category_name}
            classes={classes}
            handleSelected={handleSelected}
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
