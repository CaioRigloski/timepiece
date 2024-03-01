import styled from "styled-components"
import breitlingLogo from "../../../public/svg/BreitlingLogo.svg"
import patekLogo from "../../../public/svg/patek-philippe120.svg"
import rolexLogo from "../../../public/svg/rolex120.svg"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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


const CollectionSection = styled.section`
  height: 100vh;
`

const Logos = styled.div`
  display: inline-flex;
  width: 100%;
  height: 7.25rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

const Display = styled.div`
  display: grid;
  padding: 0 1.25rem 0 1.25rem;
  justify-items: center;
  @media (max-width: 1440px) {
    position: relative;
    top: 4rem;
  }
`
  
const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  width: 87.5rem;
  overflow-x: clip;
  gap: 4rem;
`

export default function Collection() {
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

  // Need two arrays with same items to make the infinite slider work.
  const breitlingCopy = [...watchList.breitling, ...watchList.breitling]
  const patekCopy = [...watchList.patek, ...watchList.patek]
  const rolexCopy = [...watchList.rolex, ...watchList.rolex]
  
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
          <Image src={breitlingLogo} alt="Breitling Logo" width={120}/>
        </Link>
        <Link href="#patek-slider" onClick={(e) => setSelected(2)}>
          <Image src={patekLogo} alt="Patek Philippe Logo" width={120}/>
        </Link>
        <Link href="#rolex-slider" onClick={(e) => setSelected(3)}>
          <Image src={rolexLogo} alt="Rolex Logo" width={120}/>
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