import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import ChildCheckBox from './ChildCheckBox';

const StartScreen = () => {

    const [levels, setLevels] = useState(
        [
           {id: "1", name: "Easy", selected: false} ,
           {id: "2", name: "Medium", selected: false},
           {id: "3", name: "Hard", selected: false}  
        ]
    )

    return (
        
        <div>
            {console.log(levels)}
            <FormGroup>
                <ChildCheckBox diffs={levels} setDiff={setLevels}/>
            </FormGroup>
            <Link to="/game"><Button variant="contained">Start Game</Button></Link>
        </div>
    )
}

export default StartScreen;