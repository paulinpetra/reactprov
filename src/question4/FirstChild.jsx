import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const First = () => {
  const { state } = useContext(ThemeContext);

  return (
    <div>
      <p>Using the current theme: {state.theme}</p>
    </div>
  );
};

export default First;
