'use client'

import Image from "next/image"
import styled from "styled-components"
import breitlingLogo from "../../../public/svg/breitlingLogo.svg"
import breitlingChronograph from "../../../public/images/breitlingChronomat.png"
import rolexLogo from "../../../public/svg/rolex120.svg"
import rolexDatejust from "../../../public/images/rolexDatejust.png"
import { device } from "../styles/breakpoints"

const Main = styled.main`
  display: grid;
  grid-template-columns: max-content auto max-content;
  padding-top: 3.625rem;
  align-items: center;
  justify-content: center;
  @media ${device.xl} {
    padding-top: 6.625rem;
  }
`

const LeftWatchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "logo watch"
    "name watch"
    "details details"
  ;
  justify-items: center;
  padding: 0 6.625rem 0 6.625rem;
`

const RightWatchBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "watch logo"
    "watch name"
    "details details"
  ;
  justify-items: center;
  padding: 0 6.625rem 0 6.625rem;
`

const LogoWrap = styled.div`
  position: relative;
  width: 11.625rem;
  height: 11.625rem;
  grid-area: logo;
  top: 6.875rem;
`

const WatchName = styled.h3`
  font-size: 1.375rem;
  color: white;
  grid-area: name;
  position: relative;
  top: 5rem;
`

const ImageWrap = styled.div`
  position: relative;
  width: 15.625rem;
  height: 26.063rem;
  grid-area: watch;
  align-self: end;
  > image {
    object-fit:"contain";
  }
`
const DetailsBttn = styled.button`
  position: relative;
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
  grid-area: details;
  top: 2.563rem;
`

const MiddleLine = styled.div`
  height: 37.5rem;
  width: 1px;
  background-color: var(--design-line-color);
  justify-self: center;
`

export default function NewReleases() {
  return (
    <Main>
      <LeftWatchBox>
        <LogoWrap>
          <Image src={breitlingLogo} alt="Breitling Logo" sizes="11.625rem, 11.625rem" fill priority/>
        </LogoWrap>
        <WatchName>
          CHRONOMAT
        </WatchName>
        <ImageWrap>
          <Image src={breitlingChronograph} alt="Breitling Chronomat" sizes="15.625rem, 26.063rem" fill priority/>
        </ImageWrap>
        <DetailsBttn>
          SEE DETAILS
        </DetailsBttn>
      </LeftWatchBox>
      <MiddleLine/>
      <RightWatchBox>
        <LogoWrap>
          <Image src={rolexLogo} alt="Rolex Logo" sizes="11.625rem, 11.625rem" fill priority/>
        </LogoWrap>
        <WatchName>
          DATEJUST
        </WatchName>
        <ImageWrap>
          <Image src={rolexDatejust} alt="Rolex Datejust" sizes="15.625rem, 26.089rem" fill priority/>
        </ImageWrap>
        <DetailsBttn>
          SEE DETAILS
        </DetailsBttn>
      </RightWatchBox>
    </Main>
  )
}