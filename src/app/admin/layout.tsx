"use client";
import { Header } from "@mantine/core";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        height={80}
        className={"text-black flex justify-center items-center bg-green-300"}
      >
        AdminLayout
      </Header>
      <main className={"w-full flex"}>
        <div className={"h-96 w-72 bg-green-600"}>Chat</div>
        <div className={"w-full flex justify-center pt-36"}>{children}</div>
      </main>
    </>
  );
}
