import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Typography, TextField } from '@mui/material';

// An MUI react slider component for adjusting colour values
export default function ColourSlider(props) {
  const [value, setValue] = props.state;
  const [error, setError] = React.useState(false);
  const min = props.min;
  const max = props.max;

  const handleChange = (event) => {
    const num = event.target.value;
    if (num > max) {
      setValue(max); 
      setError(true);
    }
    else if (num < min) {
      setValue(min); 
      setError(true);
    }
    else if (num >= min && num <= max) {
      setValue(num);
      setError(false);
    } else {
      setValue(0);
    }
    console.log(event.target.value);
  };

  return (
    <Box sx={{ width: 600 }}>
      <Stack spacing={2} direction="row" className="sliderGroup" alignItems="center">
      <Typography variant="h5" width={250}> {props.name} </Typography>
        <Slider aria-label="Volume" value={value} min={min} max={max} onChange={handleChange} />
        <TextField
          InputProps={{
            inputProps: { 
                max: max, min: min 
            }
          }}
          size='small'
          id={props.name}
          type="number"
          value={value}
          error={error}
          sx={{ minWidth: 40, input: { color: 'white' } }}
          onChange={(e) => {handleChange(e) }}
        />
        <Typography variant="body2" minWidth={100} minHeight={80}> {error ? `Must be between ${min} and ${max}` : ' '} </Typography>
      </Stack>
    </Box>
  );
}