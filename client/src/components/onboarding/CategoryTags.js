import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../onboarding/onboarding.css';
import Paper from '@material-ui/core/Paper';
import SingleTag from '../onboarding/SingleTag';

import axios from 'axios';

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

//Hook to get tags from API call
const CategoryTags = () => {
  const classes = useStyles();
  const [elegibilityTags, setElegibilityTags] = useState([]);

  // Use Effect to load initial data for the dropdowns
  useEffect(() => {
    const fetchAll = async () => {
      //Fetch Elegibility
      const elegibilityResult = await axios(
        'https://startup-grant-database-staging.herokuapp.com/api/elegibility'
      );
      setElegibilityTags(elegibilityResult.data);
    };
    fetchAll();
  }, []);

  const handleCompanySelectedtag = chipToSelect => () => {
    setElegibilityTags(companyTags =>
      elegibilityTags.map(chip => {
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
    // const result = [...elegibilityTags.filter(chip => chip.selected === true)];
    // console.log(result);
  };

  //TODO: Fix issue with the selected key in the JSON array
  //1-Try fixing the missing selected field by selecting base on ID

  return (
    <Paper className="paper">
      <h1>Choose Tags that apply to your founders</h1>
      {elegibilityTags.map(data => {
        return (
          <SingleTag
            key={data.id}
            {...data}
            label={data.elegibility_name}
            data={data}
            classes={classes}
            handleSelected={handleCompanySelectedtag}
          />
        );
      })}
      <Button
        type="button"
        onClick={handleSubmit}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </Paper>
  );
};

export default CategoryTags;
