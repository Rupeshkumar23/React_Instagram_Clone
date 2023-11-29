import React from "react";
import Sidenav from "../navigation/Sidenav";
import { Button, Stack } from "@mui/material";

const Messages = () => {
  return (
    <>
      <Sidenav />
      <div>
        <Stack
          direction={"column"}
          spacing={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ zIndex:"23", width: "100%", height: "100vh" }}
        >
          <h3> Your messages</h3>
          <p>Send private photos and messages to a friend or group</p>
          <Button
  disabled
  style={{
    backgroundColor: "#1877F2",
    color: "white",
    cursor: "pointer!important"
  }}
>
  Send message
</Button>
        </Stack>
      </div>
    </>
  );
};

export default Messages;
