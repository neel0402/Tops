import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {decrementByTen, incrementByFive, incrementByOne} from '../../Feature/Amount/Amount'


export default function Amount2() {
  const amountData = useSelector((state) => {
    return state?.amountReducer?.amount;
  });
  console.log("🚀 ~ amountData ~ amountData:", amountData);
  let dispatch = useDispatch();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 className="mb-4 mt-4">Amount is {amountData}</h3>
      <Button
        color="danger"
        className="mb-2"
        onClick={() => dispatch(incrementByOne(amountData))}
      >
        Increment_1
      </Button>
      <Button
        color="danger"
        className="mb-2"
        onClick={() => dispatch(incrementByFive())}
      >
        Increment_5
      </Button>
      <Button color="danger" onClick={() => dispatch(decrementByTen())}>
        Decrement_10
      </Button>
    </div>
  );
}