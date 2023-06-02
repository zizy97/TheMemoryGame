import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const StartScreen = () => {
    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Easy" />
                <FormControlLabel control={<Checkbox defaultUnchecked />} label="Medium" />
                <FormControlLabel control={<Checkbox defaultUnchecked />} label="Hard" />
            </FormGroup>
            <Link to="/game"><Button variant="contained">Start Game</Button></Link>
        </div>
    )
}

export default StartScreen;