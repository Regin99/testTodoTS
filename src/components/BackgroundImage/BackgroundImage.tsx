import image from "./background.png";
import "./style.scss";

export const BackgroundImage = () => {
  return (
    <div>
      <img src={image} alt="background" className={"background-image"} />
      <div className={"background-image-overlay"} />
    </div>
  );
};
