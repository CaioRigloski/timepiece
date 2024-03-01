import Image from "next/image"
import styled from "styled-components"
import breitlingLogo from "../../../public/svg/BreitlingPartial.svg"
import patekLogo from "../../../public/svg/PatekPhilippePartial.svg"
import rolexLogo from "../../../public/svg/RolexPartial.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

const Box = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  position: relative;
  width: 22rem;
  height: 12.438rem;
  justify-items: center;
  align-items: center;
  background-color: var(--background-color);
  color: white;
  border-radius: 0.625rem;
  cursor: pointer;
  &:hover {
    transform: scale(98%);
  }
  transition: 0.5s;
`

const Name = styled.div`
  display: grid;
  width: 100%;
  height: 2.375rem;
  background-color: var(--pallete-white-color);
  align-items: center;
  text-align: center;
  color: black;
`

const WatchImage = styled.div`
  position: absolute;
  width: 8.75rem;
  height: 12.438rem;
  left: -3.8rem;
  top: 0;
`

export default function WatchItem(props: {logo: string, imageSrc: string | StaticImport, name: string, price: number}) {
  let src: string
  let altText: string

  if(props.logo === 'breitling') {
    src = breitlingLogo
    altText = "Breitling Logo"
  } else if (props.logo === 'patek') {
    src = patekLogo
    altText = "Patek Philippe Logo"
  } else {
    src = rolexLogo
    altText = "Rolex Logo"
  }

  return (
    <Box>
      <WatchImage>
        <Image src={props.imageSrc} style={{objectFit:"contain"}} sizes="8.75rem, 12.438rem" fill alt="Avenger II Watch"/>
      </WatchImage>
      <Image src={src} sizes="5.188rem" alt={altText}/>
      <Name>{props.name}</Name>
      <div>{props.price}</div>
    </Box>
  )
}