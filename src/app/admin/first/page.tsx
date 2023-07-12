"use client";
import Link from "next/link";

export default function First() {
  return <Link href={"/admin/second"}>Second page {">"}</Link>;
}
