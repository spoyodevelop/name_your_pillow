import { useState } from "react";
import "./App.css";
import Pillow from "./components/Pillow";

const DUMMY_PILLOWS = [
  {
    id: "p1",
    imgSrc:
      "https://www.betterlivingaustralia.com.au/cdn/shop/products/Spare_Parts_-_Website_images_-_Untitled_Page_263f5a9b-9ec7-4854-b801-757e6a8b14ad.jpeg?v=1565828557",
    name: "",
  },
  {
    id: "p2",
    imgSrc:
      "https://brand.evezary.co.kr/data/item/1656380832/22SS6rWs66aE67Kg6rCc7I2464Sk7J281.jpg",
    name: "",
  },
  {
    id: "p3",
    imgSrc: "https://sitem.ssgcdn.com/26/36/36/item/1000057363626_i1_750.jpg",
    name: "",
  },

  {
    id: "p4",
    imgSrc: "https://i.insider.com/5cae0a49d2ce787c5445dece?width=700",
    name: "",
  },
  {
    id: "p9",
    imgSrc:
      "https://www.magic-plush.com/wp-content/uploads/2021/12/pokemon-pikachu-plush-pillow.jpg",
    name: "",
  },
  {
    id: "p10",
    imgSrc:
      "https://sasugatoys.com/cdn/shop/products/2_O1CN016q5O2N1jSZftUu6ag__2208072304547.jpg?v=1667635056&width=1445",
    name: "",
  },
];

function App() {
  const [idx, setIdx] = useState(0);
  const [pillows, setPillows] = useState(DUMMY_PILLOWS);

  const currentPillow = pillows[idx];

  function handleInputChange(e) {
    const newValue = e.target.value;
    const updatedPillows = [...pillows];
    updatedPillows[idx].name = newValue;
    setPillows(updatedPillows);
  }

  function handlePrevClick() {
    if (idx === 0) return;
    setIdx(idx - 1);
  }

  function handleNextClick() {
    if (idx === pillows.length - 1) return;
    setIdx(idx + 1);
  }

  return (
    <>
      <div className="main">
        <header>
          <h1>Name Your Pillow!</h1>
        </header>
        <Pillow imgSrc={currentPillow.imgSrc} pillowName={currentPillow.name} />
        <div className="buttons-and-inputs">
          <div className="arrow-buttons">
            <button className="btn" onClick={handlePrevClick}>
              ⬅️ PREV
            </button>
            <div className="pillow-name-input">
              <input
                className="input"
                type="text"
                value={currentPillow.name}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn" onClick={handleNextClick}>
              NEXT ➡️
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
