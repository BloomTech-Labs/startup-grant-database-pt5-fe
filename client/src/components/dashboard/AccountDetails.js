import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  card: {
    width: "50%",
    margin: "0 2%"
  }
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "Claire",
    lastName: "Sinozich",
    email: "claire@claire.com",
    phone: "",
    state: "Colorado",
    country: "USA"
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: "alabama",
      label: "Alabama"
    },
    {
      value: "alaska",
      label: "Alaska"
    },
    {
      value: "Arizona",
      label: "Arizona"
    },
    {
      value: "Arkansas",
      label: "Arkansas"
    },
    {
      value: "California",
      label: "California"
    },
    {
      value: "Colorado",
      label: "Colorado"
    },
    {
      value: "Connecticut",
      label: "Connecticut"
    },
    {
      value: "Delaware",
      label: "Delaware"
    },
    {
      value: "Florida",
      label: "Florida"
    },
    {
      value: "Georgia",
      label: "Georgia"
    },
    {
      value: "Hawai'i",
      label: "Hawai'i"
    },
    {
      value: "Idaho",
      label: "Idaho"
    },
    {
      value: "Illinois",
      label: "Illinois"
    },
    {
      value: "Indiana",
      label: "Indiana"
    },
    {
      value: "Iowa",
      label: "Iowa"
    },
    {
      value: "Kansas",
      label: "Kansas"
    },
    {
      value: "Kentucky",
      label: "Kentucky"
    },
    {
      value: "Louisiana",
      label: "Louisiana"
    },
    {
      value: "Maine",
      label: "Maine"
    },
    {
      value: "Maryland",
      label: "Maryland"
    },
    {
      value: "Massachusetts",
      label: "Massachusetts"
    },
    {
      value: "Michigan",
      label: "Michigan"
    },
    {
      value: "Minnesota",
      label: "Minnesota"
    },
    {
      value: "Mississippi",
      label: "Mississippi"
    },
    {
      value: "Missouri",
      label: "Missouri"
    },
    {
      value: "Montana",
      label: "Montana"
    },
    {
      value: "Nebraska",
      label: "Nebraska"
    },
    {
      value: "Nevada",
      label: "Nevada"
    },
    {
      value: "New Hampshire",
      label: "New Hampshire"
    },
    {
      value: "New Jersey",
      label: "New Jersey"
    },
    {
      value: "New Mexico",
      label: "New Mexico"
    },
    {
      value: "New York",
      label: "New York"
    },
    {
      value: "North Carolina",
      label: "North Carolina"
    },
    {
      value: "North Dakota",
      label: "North Dakota"
    },
    {
      value: "Ohio",
      label: "Ohio"
    },
    {
      value: "Oklahoma",
      label: "Oklahoma"
    },
    {
      value: "Oregon",
      label: "Oregon"
    },
    {
      value: "Pennsylvania",
      label: "Pennsylvania"
    },
    {
      value: "Rhode Island",
      label: "Rhode Island"
    },
    {
      value: "South Carolina",
      label: "South Carolina"
    },
    {
      value: "South Dakota",
      label: "South Dakota"
    },
    {
      value: "Tennessee",
      label: "Tennessee"
    },
    {
      value: "Texas",
      label: "Texas"
    },
    {
      value: "Utah",
      label: "Utah"
    },
    {
      value: "Vermont",
      label: "Vermont"
    },
    {
      value: "Virginia",
      label: "Virginia"
    },
    {
      value: "Washington",
      label: "Washington"
    },
    {
      value: "West Virginia",
      label: "West Virginia"
    },
    {
      value: "Wisconsin",
      label: "Wisconsin"
    },
    {
      value: "Wyoming",
      label: "Wyoming"
    },
    {
      value: "District of Columbia",
      label: "District of Columbia"
    },
    {
      value: "American Samoa",
      label: "American Samoa"
    },
    {
      value: "Guam",
      label: "Guam"
    },
    {
      value: "Northern Mariana Islands",
      label: "Northern Mariana Islands"
    },
    {
      value: "Puerto Rico",
      label: "Puerto Rico"
    },
    {
      value: "US Virgin Islands",
      label: "US Virgin Islands"
    }
  ];

  return (
    <Card {...rest} className={(classes.root, classes.card)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                margin="dense"
                name="state"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AccountDetails;
