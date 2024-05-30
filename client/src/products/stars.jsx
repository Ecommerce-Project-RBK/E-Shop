import React from "react";
import Rating from "@mui/material/Rating";

const StarRating=() =>{
  const [value, setValue] =React.useState();

  return (
  
      <Rating
        name="simple-controlled"
        value={value}
        onChange={( newValue) => {
          setValue(newValue);
        }}
      />
   
  );
}
export default StarRating