import "../blocks/header.css";
import { useState } from "react";

function Header() {
  const style = {
    position: "relative",
    top: `-40px`,
    left: `0px`,
  };
  const [topTransform, setTopTransform] = useState({
    transform: "translateY(50px)",
  });
  const [bottomTransform, setBottomTransform] = useState({
    transform: "translateY(-50px)",
  });

  const spawnWords = () => {
    setTimeout(() => {
      setTopTransform({ transform: "translateY(0px)" });
      setBottomTransform({ transform: "translateY(0px)" });
    }, 2000);
  };

  spawnWords();

  return (
    <div className="header space">
      <h1 className="header__title">
        <div className="header__part1">
          <span className="header__top" style={topTransform}>
            RECIPES THAT
          </span>
          <span className="header_title-span">[ * just might ]</span>
          <span className="header__bottom" style={bottomTransform}>
            WORK.
          </span>
        </div>
        {/* <span className="header_title-span"> [ * just might ]</span> */}
      </h1>
    </div>
  );
}

export default Header;
