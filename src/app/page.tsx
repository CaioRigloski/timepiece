'use client'

import styled from "styled-components";
import Image from "next/image";
import BreitlingLogo from "../../public/svg/breitlingLogo.svg"
import BreitlingWatch from "../../public/images/homeBreitling.png"
import Link from "next/link";
import Collection from "./components/Collection";


const Section = styled.main`
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
  }
  > div:nth-child(2) {
    grid-area: watch;
    justify-self: flex-start;
  }
`
const WatchTitle = styled.h1`
  position: relative;
  bottom: 2.813rem;
  font-size: var(--title-font-size);
  color: white;
  letter-spacing: var(--title-letter-spacing);
`

const OrderBttn = styled.button`
  position: relative;
  top: 1rem;
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
`

const WatchShadow = styled.div`
  width: 22.313rem;
  height: 3.563rem;
  background-color: #000;
  border-radius: 50%;
  filter: blur(20px);
`

const CollectionBttnWrapper = styled.div`
  height: 6.688rem;
  grid-area: collection;
  justify-content: flex-end!important;
`

const CollectionBttn = styled.button`
  position: relative;
  bottom: 0.938rem;
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
`

const Line = styled.span`
  width: 87.5rem;
  height: 1px;
  background-color: var(--design-line-color);
  justify-self: center;
  grid-area: line;
`

export default function App() {
  return (
    <>
      <main>
        <Section>
          <div>
            <Image src={BreitlingLogo} alt="Breitling Logo" width="408"/>
            <WatchTitle>BENTLEY MULSANNE NAVITIMER</WatchTitle>
            <Link href="/contact">
              <OrderBttn>
                ORDER NOW
              </OrderBttn>
            </Link>
          </div>
          <div>
            <ImageWrap>
              <Image src={BreitlingWatch} alt="Breitling Mulsanne Navitimer Watch" sizes="31.878rem, 19.043rem" fill/>
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