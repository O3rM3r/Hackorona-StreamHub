import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 600,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 2,
    label: '6:00AM',
  },
  {
    value: 26,
    label: '12:00',
  },
  {
    value: 50,
    label: '6:00PM',
  },
  {
    value: 76,
    label: '12:00',
  },
  {
    value: 98,
    label: '6:00AM',
  },
];

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </div>
  );
}