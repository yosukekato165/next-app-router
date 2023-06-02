import { Counter } from "@/app/_components/counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Counter />
      <Link href={"/todo"}>Todo page {">"}</Link>
    </main>
  );
}
