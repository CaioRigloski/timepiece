'use client'

import Image from "next/image"
import styled from "styled-components"
import aboutWatch from "../../../public/svg/aboutWatch.svg"
import { device } from "../styles/breakpoints"

const Main = styled.main`
  display: grid;
  grid-template-columns: auto max-content auto;
  padding: 3.625rem 15.125rem 3.625rem 15.125rem;
  align-items: center;
  @media ${device.xl} {
    padding: 4.438rem 15.125rem 4.438rem 15.125rem;
  }
`
const ImageWrap = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  width: 25.813rem;
  height: 25.813rem;
  justify-self: flex-end;
  right: 4.5rem;
  > img {
    position: relative!important;
    object-fit: contain;
  }
`

const WatchShadow = styled.div`
  width: 15.125rem;
  height: 2.438rem;
  background: radial-gradient(#ffffff75, var(--background-color));
  border-radius: 50%;
  filter: blur(12px);
  position: relative;
  bottom: 2rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  justify-self: flex-start;
  position: relative;
  padding-left: 4.5rem;
  top: 1.438rem;
`


const Title = styled.div`
  color: var(--pallete-gold-color);
  font-size: 1rem;
`

const Description = styled.div`
  width: 22.188rem;
  height: 20rem;
  font-size: 0.75rem;
  color: white;
`

const InfoLine = styled.div`
  width: 18.5rem;
  height: 1px;
  background-color: #BBBCB6;
  position: absolute;
  right: 23.875rem;
  top: 0.5rem;
`

const MainLine = styled.div`
  width: 1px;
  height: 37.5rem;
  background-color: var(--design-line-color);
  margin-left: 1.313rem;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media ${device.xl} {
    height: 5.688rem;
  }
`

const FooterLine = styled.div`
  width: 87.5rem;
  height: 1px;
  background-color: var(--design-line-color);
  align-self: center;
`

export default function About() {
  return (
    <>
    <Main>
      <ImageWrap>
        <Image src={aboutWatch} fill={true} alt="Watch illustration" priority/>
        <WatchShadow/>
      </ImageWrap>
      <Info>
        <InfoLine/>
        <Title>OUR STORY</Title>
        <Description>
          <p>
            &nbsp;ESTABLISHED 25 YEARS AGO BY CAIO RIGLOSKI, TIMEPIECE WAS BORN OUT OF A PASSION FOR HOROLOGY AND A DESIRE TO PROVIDE DISCERNING CLIENTELE WITH ACCESS TO THE WORLD`S FINEST TIMEPIECES. WHAT BEGAN AS A HUMBLE BOUTIQUE HAS EVOLVED INTO A PREMIER DESTINATION FOR AFICIONADOS SEEKING EXCEPTIONAL WATCHES THAT TRANSCEND MERE TIMEKEEPING.
          </p>
          <p>
            &nbsp;OUR STORY IS ONE OF PASSION, DEDICATION, AND A RELENTLESS PURSUIT OF PERFECTION. AS WE CONTINUE TO EXPAND OUR HORIZONS, WE REMAIN STEADFAST IN OUR MISSION TO PROVIDE AN UNPARALLELED EXPERIENCE FOR EVERY PATRON WHO WALKS THROUGH OUR DOORS. JOIN US ON THIS EXTRAORDINARY JOURNEY AS WE CELEBRATE THE TIMELESS ALLURE OF LUXURY WATCHES.
          </p>
        </Description>
      </Info>
      <MainLine/>
    </Main>
    <Footer>
      <FooterLine/>
    </Footer>
    </>
  )
}