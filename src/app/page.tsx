'use client'

import styled from "styled-components";
import Image from "next/image";
import BreitlingLogo from "../../public/svg/breitlingLogo.svg"
import BreitlingWatch from "../../public/images/homeBreitling.png"
import Link from "next/link";
import Collection from "./components/Collection";
import { device } from "./styles/breakpoints";


const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto auto;
  grid-template-areas:
    "details watch"
    "line line"
    "collection collection";
  height: 47.938rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  > div:nth-child(1) {
    grid-area: details;
    justify-self: flex-end;
    @media ${device.sm} {
      justify-self: center;
      align-self: start;
    }
    > a {
      padding-top: 0.938rem;
    }
  }
  > div:nth-child(2) {
    grid-area: watch;
    justify-self: flex-start;
    @media ${device.sm} {
      justify-self: center;
      align-self: end;
    }
  }
  @media ${device.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 15rem 15rem 1rem 5rem;
    grid-template-areas:
      "watch"
      "details"
      "line"
      "collection"
    ;
    align-items: center;
    height: fit-content;
  }
`
const WatchTitle = styled.h1`
  position: relative;
  bottom: 2.813rem;
  font-size: var(--title-font-size);
  color: white;
  letter-spacing: var(--title-letter-spacing);
  @media ${device.sm} {
    font-size: 0.8rem;
    bottom: 0;
  }
`

const OrderBttn = styled.button`
  width: 9.313rem;
  height: 1.793rem;
  background-color: #FAFAFA0d;
  color: white;
  border: 1px solid var(--pallete-brown-color);
  cursor: pointer;
  &:hover {
    transform: scale(98%);
  }
  transition: 0.5s;
`

const ImageWrap = styled.div`
  position: relative;
  width: 31.878rem;
  height: 19.043rem;
  transform: rotate(52deg);
  @media ${device.sm} {
    width: 20rem;
    height: 10rem;
  }
`

const WatchShadow = styled.div`
  width: 22.313rem;
  height: 3.563rem;
  background-color: #000;
  border-radius: 50%;
  filter: blur(20px);
  @media ${device.sm} {
    display: none;
  }
`

const CollectionBttnWrapper = styled.div`
  height: 6.688rem;
  grid-area: collection;
  justify-content: center
  @media ${device.sm} {
    justify-content: start
    height: fit-content;
  }
  
`

const CollectionBttn = styled.button`
  width: 16.563rem;
  height: 3.188rem;
  border: 1px solid #A57D02;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: var(--background-color);
  &:hover {
    transform: scale(98%);
  }
  transition: 0.5s;
  @media ${device.sm} {
    bottom: 0;
  }
`

const Line = styled.span`
  width: 87.5rem;
  height: 1px;
  background-color: var(--design-line-color);
  justify-self: center;
  grid-area: line;
  @media ${device.sm} {
    width: 20.5rem;
  }
`

const LogoWrap = styled.div`
  position: relative;
  width: 25.5rem;
  height: 18rem;
  @media ${device.sm} {
    width: 10rem;
    height: 7.0588rem;
  }
`

export default function App() {
  return (
    <>
      <main>
        <Section>
          <div>
            <LogoWrap>
              <Image src={BreitlingLogo} alt="Breitling Logo" style={{objectFit:"contain"}} sizes="25.5rem, 18rem" fill priority/>
            </LogoWrap>
            <WatchTitle>BENTLEY MULSANNE NAVITIMER</WatchTitle>
            <Link href="/contact">
              <OrderBttn>
                ORDER NOW
              </OrderBttn>
            </Link>
          </div>
          <div>
            <ImageWrap>
              <Image src={BreitlingWatch} alt="Breitling Mulsanne Navitimer Watch" style={{objectFit:"contain"}} sizes="31.878rem, 19.043rem" fill priority/>
            </ImageWrap>
            <WatchShadow/>
          </div>
          <Line/>
          <CollectionBttnWrapper>
            <Link href={"#collection"}>
              <CollectionBttn>VIEW COLLECTION</CollectionBttn>
            </Link>
          </CollectionBttnWrapper>
        </Section>
      </main>
      <Collection/>
    </>
  )
}