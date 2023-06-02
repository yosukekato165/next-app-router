"use client";
import { useCounter } from "./logics";
import { Button } from "@/app/_components/button";

export const Counter = () => {
  const { count, setCount } = useCounter();
  return (
    <>
      <div className={"h-96"}>
        <h1 className={"text-4xl text-center mb-5"}>{count}</h1>
        <div className={"flex justify-between gap-3"}>
          <Button onClick={() => setCount((e) => e + 1)}>+</Button>
          <Button onClick={() => setCount((e) => e - 1)} disabled={count === 0}>
            -
          </Button>
        </div>
      </div>
    </>
  );
};
