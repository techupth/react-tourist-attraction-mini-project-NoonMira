import "./App.css";
import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Card(props) {
  const [isReadMore, setIsReadMore] = useState(true);  
  const [copyStatus, setCopyStatus] = useState(false);

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); 
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
        if (isReadMore) {
      window.open(props.url, "_blank");
    }
  };

  const goToNewPage = () =>{
    window.location.href = `${props.url}`
  }
  return (
    <div className="card">
      <img src={props.img} className="main-img" />
      <span className="topic">
        <h2 onClick={goToNewPage}> {props.topic}</h2>
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
      <CopyToClipboard text={props.url} onCopy={onCopyText}>
      <button className="link" >Link</button>
      </CopyToClipboard>
      {copyStatus && alert("Link copied to clipboard!")}
    </div>
  );
}
export default Card;
