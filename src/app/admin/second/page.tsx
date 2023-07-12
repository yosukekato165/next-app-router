"use client";
import Link from "next/link";

export default function Second() {
  return <Link href={"/admin/first"}>First page {">"}</Link>;
}
