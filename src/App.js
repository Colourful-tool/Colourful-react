import './App.css';
import React from 'react';
import ColourBox from './Components/ColourBox';
import ColourSlider from './Components/ColourSlider';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import ColourHex from './Components/ColourHex';

function App() {
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  const [alpha, setAlpha] = React.useState(100);

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" className="title"> Colourful React </Typography>
        <Stack direction='row'>
          <Stack direction='column'>
            <ColourBox red={red} green={green} blue={blue} alpha={alpha} />
            <ColourHex red={[red, setRed]} green={[green, setGreen]} blue={[blue, setBlue]} alpha={[alpha, setAlpha]} />
          </Stack>
          <Stack direction='column'>
            <ColourSlider name="Red" min={0} max={255} state={[red, setRed]} />
            <ColourSlider name="Green" min={0} max={255} state={[green, setGreen]} />
            <ColourSlider name="Blue" min={0} max={255} state={[blue, setBlue]} />
            <ColourSlider name="Alpha" min={0} max={100} state={[alpha, setAlpha]} />
          </Stack>
        </Stack>
      </header>
    </div>
  );
}

export default App;
