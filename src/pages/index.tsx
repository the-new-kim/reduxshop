import { IProduct } from "@/libs/types";
import { getBaseUrl } from "@/libs/utils";
import { increment } from "@/redux/slices/counterSlice";
import { RootState } from "@/redux/store";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IHomeProps {
  products: IProduct[];
}

export default function Home({ products }: IHomeProps) {
  const [countState, setCountState] = useState(0);
  const count = useSelector(
    (state: RootState) => state.persistedReducer.counter.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCountState(count);
  }, [count]);

  return (
    <main>
      <h1>The value of count is {countState}</h1>
      <button onClick={() => dispatch(increment())}>Increse</button>
    </main>
  );
}

export async function getStaticProps() {
  const BASE_URL = getBaseUrl();

  const { data: products, ok } = await (
    await fetch(`${BASE_URL}/api/products`)
  ).json();

  return { props: { products: products || [] } };
}
