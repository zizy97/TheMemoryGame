
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, {useState} from 'react';

/*
ISSUE: 
The 3 Checkboxes dont render whenever i click on one.

when i click an option the rest should be disselected.

*/

const ChildCheckBox = () => {
    
    const [diffs, setDiff] = useState(
        [
           {id: "1", name: "Easy", selected: false} ,
           {id: "2", name: "Medium", selected: false},
           {id: "3", name: "Hard", selected: false}  
        ]
    )
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
                    console.log("PLS RENDER")
                    return ( 

                    <FormControlLabel 
                    control={<Checkbox value={element.selected}/>} 
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