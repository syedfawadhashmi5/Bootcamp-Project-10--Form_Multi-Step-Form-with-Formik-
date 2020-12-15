import React from "react";
import "./App.css";
import Stepper from "./Stepper/index";
import { Container, Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box mt={5} mb={5}>
          <Stepper />
        </Box>
      </Container>
    </div>
  );
}

export default App;
