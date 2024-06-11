import { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/option";

const TipPercentageFor = ({
  setTip,
  tip,
}: {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
}) => {
  return (
    <div>
      <h3 className="font-black text-2xl"> Propina:</h3>
      <form action="">
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              value={tipOption.value}
              name="tip"
              checked={tipOption.value === tip}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentageFor;
