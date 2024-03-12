import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
