import React from "react";

export const handleChange = (e, func) => {
  func(e.target.value);
};
