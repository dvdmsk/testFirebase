import { Suspense } from "react";
import Explore from "./Explore";


export default function Component() {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  );
}