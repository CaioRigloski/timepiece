'use client'

import { ReactNode, Suspense } from "react";
import Header from "./Header";
import Loading from "./Loading";

export default function Layout(props: {children?: ReactNode}) {
  return (
    <>
      <Header/>
      <Suspense fallback={<Loading/>}>
        {props.children}
      </Suspense>
    </>
  )
}