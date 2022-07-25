import React, { useEffect, useState } from "react";
import { TextField, FormControl, Button, Box, InputAdornment } from "@mui/material";

import AppBar from "./components/AppBar";
import DropDown from "./components/DropDown";

// let welcome = "Please enter the process name or ID to continue"
function App() {
  const [data, setData] = useState({
    input: "",
    length: 0,
  });
  useEffect(() => {
    document.title = "Strace UI";
  }, []);

  async function fetching_strace_output() {
    let exec = `${command.cmd} ${command.processName}`
    await fetch("http://13.235.49.253:80/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command: "strace -f -p 769" }),
    })
      .then((response) => response.json())
      .then((response) =>
        setData({ ...data, input: response.input, length: response.length })
      );
  }

  const [command, setCommand] = useState({
    cmd: "strace",
    pid: 0,
    processName: "python --version",
    arguments: [],
  });
  const style = {
    box: {
      display: "flex",
      maxHeight: "90vh",
      // backgroundColor: "red"
    },
    input: {
      margin: 2,
      width: "40%",
    },
    output: {
      width: "60%",
      borderWidth: "1px",
      borderColor: "black",
      overflow: "scroll",
      backgroundColor: ""
    },
  };

  return (
    <React.Fragment>
      <AppBar />
      <Box sx={style.box}>
        <FormControl sx={style.input}>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="strace"
              label="command"
              defaultValue="strace"
              InputProps={{
                readOnly: true,
              }}
              sx={{ marginBottom: "10px" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between",marginBottom:2 }}>
              <TextField
                id="processName"
                label="Process Name"
                variant="outlined"
                type="text"
                value={command.processName}
                onChange={(event) =>
                  setCommand({ ...command, processName: event.target.value })
                }
              />
              <TextField
                type="text"
                id="conditional"
                variant="outlined"
                defaultValue="OR"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "60px", textAlign: "center" }}
              />
              <TextField
                type="number"
                id="pid"
                label="Process ID"
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start">-p</InputAdornment>,
                }}
                value={command.pid}
                onChange={(event) =>
                  setCommand({ ...command, pid: event.target.value })
                }
              />
            </Box>
            <TextField
              id="strace"
              label="Specify System call"
              placeholder="execve, write, openat, read, fstat"
              sx={{ marginBottom: "10px" }}
            />
            <Box>
              <Button
                variant="contained"
                onClick={() => fetching_strace_output()}
                sx={{backgroundColor: "#6d28d9"}}
              >
                Execute
              </Button>
            </Box>
          </form>
          {/* <h2>{command.processName}</h2> */}
        </FormControl>
        <Box sx={style.output}>
          {data.length && data.input.map((item) => <h6>{item}</h6>)}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
