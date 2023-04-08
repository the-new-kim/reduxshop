import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const [countState, setCountState] = useState(0);
  const count = useSelector(
    (state: RootState) => state.persistedReducer.counter.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCountState(count);
  }, [count]);

  return (
    <div>
      Products!
      <div>{countState}</div>
    </div>
  );
}
