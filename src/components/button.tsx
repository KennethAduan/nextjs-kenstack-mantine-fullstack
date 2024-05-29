import React from "react";
import { Button } from "@mantine/core";
const ButtonComponent = () => {
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default ButtonComponent;
