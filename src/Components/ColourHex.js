import { Stack, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { updateHex, convertHexToRGB, copyHex } from "../Logic/ColourChanges.js";

export default function ColourHex (props) {
    const [hex, setHex] = useState('#fff');
    const [red, setRed] = props.red;
    const [green, setGreen] = props.green;
    const [blue, setBlue] = props.blue;
    const [alpha, setAlpha] = props.alpha;


    useEffect(() => {
        let hex = updateHex(red, green, blue, alpha);
        setHex(hex);
    }, [red, green, blue, alpha]);

    const handleChange = (event) => {
        let input = event.target.value;
        let rgb = convertHexToRGB(input);
        if (rgb.r >= 0 && rgb.r <= 255 && rgb.g >= 0 && rgb.g <= 255 && rgb.b >= 0 && rgb.b <= 255 ) {
            setRed(rgb.r);
            setGreen(rgb.g);
            setBlue(rgb.b);
            setAlpha(rgb.a * 100);
        }
    }

    const handleClick = () => {
        console.log('clicked', hex);
        copyHex(hex);
    }

    return (
        <Stack direction='row'>
            <TextField 
            value={hex}
            onChange={handleChange}
            sx={{ input: { color: 'white' }, width: '210px' }}
            />
            <Button onClick={handleClick} variant='contained' sx={{color:'white', width:'90px', height:'55px'}}>Copy to clipboard</Button>
        </Stack>
    );
}