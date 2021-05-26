import { useState } from "react";

const Moto = (props) => {
  let [counter, setCounter] = useState(7);
  let [buttonshow, setButtonshow] = useState(`Take ${props.moto}`);

  let changeButton = () => {
    if (counter === 1) {
      setButtonshow("Not available");
      setCounter(counter - 1);
    } else if (counter > 1) {
      setCounter(counter - 1);
      setButtonshow(`Take ${props.moto}`);
    }
  };

  return (
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">{props.moto}</h5>
        <h6 className="card-title">{counter} remain</h6>
        <button className="btn btn-primary"
          onClick={() => {
            changeButton();
          }}>
            {buttonshow}
        </button>
      </div>
    </div>
  );
};

export default Moto;
