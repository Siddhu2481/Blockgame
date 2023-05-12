import React, { useState } from "react";

function BlockMover() {
  const [blockX, setBlockX] = useState(80);
  const [blockY, setBlockY] = useState(70);

  const handleButtonClick = (direction) => {
    switch (direction) {
      case "up":
        setBlockY(blockY - 10);
        break;
      case "down":
        setBlockY(blockY + 10);
        break;
      case "left":
        setBlockX(blockX - 10);
        break;
      case "right":
        setBlockX(blockX + 10);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          backgroundColor: "white"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${blockY}px`,
            left: `${blockX}px`,
            width: "20px",
            height: "20px",
            backgroundColor: "yellow"
          }}
        />
        <button
          style={{
            position: "absolute",
            top: "10%",
            left: "40%",

            backgroundColor: "#7ce8ff",
            height: "50px",
            width: "125%"
          }}
          onClick={() => handleButtonClick("up")}
        >
          Up
        </button>
        <button
          style={{
            position: "absolute",
            top: "159%",
            left: "40%",
            backgroundColor: "#7ce8ff",
            height: "50px",
            width: "125%"
          }}
          onClick={() => handleButtonClick("down")}
        >
          Down
        </button>
        <button
          style={{
            position: "absolute",
            top: "35%",
            left: "15%",
            backgroundColor: "#7ce8ff",
            height: "125%",
            width: "50px"
          }}
          onClick={() => handleButtonClick("left")}
        >
          Left
        </button>
        <button
          style={{
            position: "absolute",
            top: "35%",
            left: "165%",
            backgroundColor: "#7ce8ff",
            height: "125%",
            width: "50px"
          }}
          onClick={() => handleButtonClick("right")}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default BlockMover;
