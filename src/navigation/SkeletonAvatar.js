import React from "react";
import { Skeleton } from "@mui/material";

function SkeletonAvatar() {
  return (
    <>
    <Skeleton
      variant="circular"
      width={25}
      height={25}
      style={{ backgroundColor: "#424242",  marginLeft: "16px" }}
    />
    
    </>
    
  );
}

export default SkeletonAvatar;
