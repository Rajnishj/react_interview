import React, { useState } from "react";
import { ToggleLeft } from "lucide-react";

function Theme({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      <ToggleLeft className="bg-slate-300" />
    </button>
  );
}

export default Theme;
