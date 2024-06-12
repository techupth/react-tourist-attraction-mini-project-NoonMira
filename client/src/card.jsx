import "./App.css";
import { useState } from "react";

function Card(props) {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
        if (isReadMore) {
      window.open(props.url, "_blank");
    }
  };

  return (
    <div className="card">
      <img src={props.img} className="main-img" />
      <span className="topic">
        <h2> {props.topic}</h2>
        <h4>
          {isReadMore
            ? `${props.description.slice(0, 100)}...`
            : props.description}
          <span
            onClick={toggleReadMore}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {isReadMore ? " อ่านต่อ" : " แสดงน้อยลง"}
          </span>
        </h4>
        <h4>หมวดหมู่ {props.tags}</h4>

        <div className="finer-img">
          <img src={props.img1} className="img-one"/>
          <img src={props.img2} className="img-two"/>
          <img src={props.img3} className="img-three"/>
        </div>
      </span>
    </div>
  );
}
export default Card;
