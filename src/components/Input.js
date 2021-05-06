import { Input } from "@chakra-ui/input";
import React from "react";

import { useSetState, useTrackedState } from "../store";

const InputBar = () => {
  const setFilter = useSetState();
  const filter = useTrackedState();

  return (
    <>
      <Input
        variant="filled"
        placeholder="Search for Pokemon"
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
    </>
  );
};

export default InputBar;
