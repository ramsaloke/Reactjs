import { useState } from "react";
import './ToggleDark.css';

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const outerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt asperiores porro expedita aut modi ipsum in harum. Animi sequi quia, hic dolorem quod incidunt illum voluptates voluptatibus, labore reiciendis eum.";

  const innerText = "Inner div with some lines... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore velit ea nostrum incidunt qui earum? Nobis earum laudantium, placeat officiis commodi recusandae rerum vitae repellat eius nisi nulla, vel ipsa?";

  return (
    <div className="outer">
      <p>{outerText}</p>

      <div className={`div-white ${isDarkMode ? "Dark-Mode" : "div-white"}`}>
        <p>{innerText}</p>

        <button className="btn" onClick={toggleMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default ToggleDark;