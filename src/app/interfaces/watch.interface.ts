import { StaticImageData } from "next/image";

export default interface Watch {
  name: string;
  price: number;
  src: StaticImageData;
}