import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Second = () => {
  const { state } = useContext(ThemeContext);

  return (
    <div>
      <p>Using the current theme: {state.theme}</p>
    </div>
  );
};

export default Second;
