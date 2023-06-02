import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import ChildCheckBox from "./ChildCheckBox";

const StartScreen = () => {
  return (
    <div>
      <FormGroup>
        <ChildCheckBox />
      </FormGroup>
      <Link to="/game">
        <Button variant="contained">Start Game</Button>
      </Link>
    </div>
  );
};

export default StartScreen;
