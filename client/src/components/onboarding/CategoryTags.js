import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../onboarding/onboarding.css';
import Paper from '@material-ui/core/Paper';
import SingleTag from '../onboarding/SingleTag';

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

const initialCompanyTags = [
  { key: 7, label: 'Social Mission', selected: false },
  { key: 8, label: 'Agriculture and Biotech', selected: false },
  { key: 9, label: 'AI and Machine Learning=', selected: false },
  { key: 10, label: 'Entertainment', selected: false },
  { key: 11, label: 'Clean and Renewable Energy', selected: false },
  { key: 12, label: 'Health and mental wellness', selected: false },
  { key: 13, label: 'Food and Drink', selected: false },
  { key: 14, label: 'Financial Serices', selected: false },
  { key: 15, label: 'Ecommerce', selected: false },
  { key: 16, label: 'Internet of things', selected: false },
  { key: 17, label: 'Social and Lifestyle', selected: false }
];

const CategoryTags = () => {
  const classes = useStyles();
  const [companyTags, setCompanyTags] = useState(initialCompanyTags);

  const handleCompanySelectedtag = chipToSelect => () => {
    setCompanyTags(companyTags =>
      companyTags.map(chip => {
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

  return (
    <Paper className="paper">
      <h1>Choose Tags that apply to your founders</h1>
      {companyTags.map(data => {
        return (
          <SingleTag
            key={data.key}
            {...data}
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
