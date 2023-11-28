import React from "react";

export const handleChange = (func) => (e) => {
  func(e.target.value);
};
