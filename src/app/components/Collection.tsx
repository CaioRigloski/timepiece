import styled from "styled-components"
import breitlingLogo from "../../../public/svg/breitlingLogo.svg"
import patekLogo from "../../../public/svg/patek-philippe120.svg"
import rolexLogo from "../../../public/svg/rolex120.svg"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import avenger from "../../../public/images/breitlingAvengerII.png"
import luminox from "../../../public/images/breitlingLuminox.png"
import avengerBlackbird from "../../../public/images/breitlingAvengerBlackbird.png"
import nautilus from "../../../public/images/patekNautilus.png"
import aquanautChronograph from "../../../public/images/patekAquanautChronograph.png"
import aquanaut from "../../../public/images/patekAquanaut.png"
import submariner from "../../../public/images/rolexSubmariner.png"
import daytona from "../../../public/images/rolexDaytona.png"
import datejust from "../../../public/images/rolexDatejust.png"

import WatchItem from "./WatchItem"
import Slider from "./Slider"
import WatchList from "../interfaces/watchList.interface"
import { device } from "../styles/breakpoints"


const CollectionSection = styled.section`
  height: 100vh;
`

const LogoWrapper = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  @media ${device.sm} {
    width: 5rem;
    height: 5rem;
  }
`

const Logos = styled.div`
  display: inline-flex;
  width: 100%;
  height: 7.25rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  @media ${device.sm} {
    gap: 2rem;
  }
`

const Display = styled.div`
  display: grid;
  padding: 0 1.25rem 0 1.25rem;
  justify-items: center;
  @media ${device.sm} {
    position: relative;
    padding: 1.25rem 0 1.25rem 0;
  }
`
  
const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.5rem;
  overflow-x: clip;
  gap: 4rem;
  @media ${device.sm} {
    width: 100vw;
    gap: 1rem;
  }
`

export default function Collection() {
  const[ windowSize, setWindowSize] = useState<number>(0);
  const [ sliderSelected, setSliderSelected ] = useState<number | undefined>(undefined)
  const [ watchList ] = useState<WatchList>({
    breitling: [
      {
        name: 'Avenger II',
        price: 6900,
        src: avenger
      },
      {
        name: 'Luminox',
        price: 6900,
        src: luminox
      },
      {
        name: 'Avenger Blackbird',
        price: 6900,
        src: avengerBlackbird
      }
    ],
    patek: [
      {
        name: 'Nautilus',
        price: 6900,
        src: nautilus
      },
      {
        name: 'Aquanaut Chronograph',
        price: 6900,
        src: aquanautChronograph
      },
      {
        name: 'Aquanaut',
        price: 6900,
        src: aquanaut
      }
    ],
    rolex: [
      {
        name: 'Submariner',
        price: 6900,
        src: submariner
      },
      {
        name: 'Daytona',
        price: 6900,
        src: daytona
      },
      {
        name: 'Datejust',
        price: 6900,
        src: datejust
      }
    ],
  })

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
  }, [])

  // Need two arrays with same items to make the infinite slider work.
  const breitlingCopy = windowSize > 1440 ? [...watchList.breitling, ...watchList.breitling] : watchList.breitling
  const patekCopy = windowSize > 1440 ? [...watchList.patek, ...watchList.patek] : watchList.patek
  const rolexCopy = windowSize > 1440 ? [...watchList.rolex, ...watchList.rolex]: watchList.rolex
  
  // Animation took 3s to be completed.
  function resetSelected() {
    setTimeout(() => {
      setSliderSelected(undefined)
    }, 3000)
  }

  function setSelected(slider: number) {
    setSliderSelected(slider)
    resetSelected()
  }

  return (
    <CollectionSection id="collection">
      <Logos>
        <Link href="#breitling-slider" onClick={(e) => setSelected(1)}>
          <LogoWrapper>
            <Image src={breitlingLogo} alt="Breitling Logo" sizes="7.5rem, 7.5rem" fill/>
          </LogoWrapper>
        </Link>
        <Link href="#patek-slider" onClick={(e) => setSelected(2)}>
          <LogoWrapper>
            <Image src={patekLogo} alt="Patek Philippe Logo" sizes="7.5rem, 7.5rem" fill/>
          </LogoWrapper>
        </Link>
        <Link href="#rolex-slider" onClick={(e) => setSelected(3)}>
          <LogoWrapper>
            <Image src={rolexLogo} alt="Rolex Logo" sizes="7.5rem, 7.5rem" fill/>
          </LogoWrapper>
        </Link>
      </Logos>
      <Display>
        <Carousel>
          <Slider length={watchList.breitling.length} id="breitling-slider" isSelected={sliderSelected === 1}>
            {
              breitlingCopy.map((watch, i) => {
                return (
                  <WatchItem key={i} logo="breitling" imageSrc={watch.src} name={watch.name} price={watch.price} />
                )
              })
            }
          </Slider>
          <Slider length={watchList.patek.length} id="patek-slider" isSelected={sliderSelected === 2}>
            {
              patekCopy.map((watch, i) => {
                return (
                  <WatchItem key={i} logo="patek" imageSrc={watch.src} name={watch.name} price={watch.price}/>
                )
              })
            }
          </Slider>
          <Slider length={watchList.rolex.length} id="rolex-slider" isSelected={sliderSelected === 3}>
            {
              rolexCopy.map((watch, i) => {
                return (
                  <WatchItem key={i} logo="rolex" imageSrc={watch.src} name={watch.name} price={watch.price}/>
                )
              })
            }
          </Slider>
        </Carousel>
      </Display>
    </CollectionSection>
  )
}