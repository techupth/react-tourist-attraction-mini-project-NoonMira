import "./App.css";
import Card from "./card";
import axios from "axios";
import { useState, useEffect } from "react";

function CreatePage() {
  const [location, setLocation] = useState([]);
  const [find ,setFind] = useState("");

  const getLocation = async () => {
    const result = await axios.get(`http://localhost:4001/trips?keywords=${find}`);
    setLocation(result.data.data);
  };

  useEffect(() => {
    getLocation();
  }, [find]);

  return (
    <div className="container">
      <h1 className="head-title">เที่ยวไหนดี</h1>
      <div>
        <input
         className="input-text"
          type="text"
          value={find}
          placeholder="หาที่เที่ยวแล้วไปกัน"
          onChange={(e) => {
            setFind(e.target.value);
          }}
        />
        <hr className="hr" />
      </div>

      <div>
        {location.map((items, index) => {
          return (
            <Card
              img={items.photos[0]}
              topic={items.title}
              description={items.description}
              url={items.url}
              tag1={items.tags[0]}
              img1={items.photos[1]}
              img2={items.photos[2]}
              img3={items.photos[3]}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CreatePage;
