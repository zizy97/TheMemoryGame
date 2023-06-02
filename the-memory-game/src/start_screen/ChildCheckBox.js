
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';

const ChildCheckBox = ({diffs, setDiff}) => {
    
    console.log(diffs)
    
    const handleChange = (id) => {
        let newLevels = diffs;
        console.log(id)
        // Set id to !selected
        newLevels.map((element)=>{
         
            if (element.id==id){
                console.log("true is called")
                element.selected=true;
            }
            else{
                element.selected = false;
            }
        })
        console.log(newLevels)
        // Set New Levels
        setDiff(newLevels)
    
    }

    return (    
            <div>
            {
                diffs.map((element, index)=>{
                    return (  
                    <FormControlLabel 
                    control={element.selected ? <Checkbox defaultChecked /> : <Checkbox />} 
                    label={element.name}
                    id={element.id} 
                    key={index}
                    onChange={(event)=> {handleChange(element.id)}}/>
                    )
                })
            }
            </div>    
        )
}

export default ChildCheckBox;