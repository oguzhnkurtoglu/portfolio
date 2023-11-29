import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Toggle() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <DarkModeSwitch
      moonColor={"white"}
      sunColor={"white"}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={"48px"}
    />
  );
}
