import styled, { css, keyframes } from "styled-components"
import { ReactNode, useEffect, useState } from "react"
import { CustomAttrs } from "../types/customAttrs.type"
import { device } from "../styles/breakpoints"


const scrollLeft = (length: number) => keyframes<CustomAttrs>`
  0% {
    transform: translateX(0);
  }  
  100% {
    transform: translateX(calc(-27.438rem * ${length}));
  }
`
const scrollRight = (length: number) => keyframes<CustomAttrs>`
  0% {
    transform: translateX(calc(-27.438rem * ${length}));
  }  
  100% {
    transform: translateX(0);
  }
`

const lightenSlider = keyframes`
  50% {
    box-shadow: 0px 0px 40px 0px #FFD700;
  }
`

const SliderTrack = styled.div<CustomAttrs>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: calc(27.438rem * ${props => props.$length} * 2);
  height: 13.125rem;
  gap: 5.438rem;
  @media ${device.xl} {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      animation:
      ${props => props.$selected ?
        css`${lightenSlider} 3s linear alternate;`
        :
        css`none`
      }
    }
  }

  @media ${device.sm} {
    width: calc(100vw * ${props => props.$length});
  }
  `

const Gradient = styled.div<CustomAttrs>`
  position: relative;
  margin: auto;
  width: 100%;
  &:after, &:before {
    content: '';
    position: absolute;
    width: 20%;
    height: 13.125rem;
    background: linear-gradient(90deg, #060d0dd9, #fff0);
    z-index: 999;
    @media ${device.sm} {
      display: none;
    }
  }
  &:before {
    top: 0;
    left: 0;
  }
  &:after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
    z-index: 999;
  }
  &:nth-child(even) > div {
    background-color: #BBBCB6;
    animation: ${props => scrollLeft(props.$length)} 20s linear infinite;
  }
  &:nth-child(odd) > div {
    background-color: var(--pallete-white-color);
    animation: ${props => scrollRight(props.$length)} 20s linear infinite;
  }
  & > div:hover {
    animation-play-state: paused;
  }
  @media ${device.sm} {
    overflow-x: scroll;
    & > div {
      animation: none!important;
      justify-content: flex-start;
      padding-left: 4rem;
      padding-right: 1rem;
      background-color: unset!important;
    }
    animation:
      ${props => props.$selected ?
        css`${lightenSlider} 3s linear alternate;`
        :
        css`none`
      }
  }
`

export default function Slider(props: {children: ReactNode, length: number, id: string, isSelected: boolean}) {
  const [ animationIsRunning, setAnimationIsRunning ] = useState<boolean>(false)

  // Prevents animation cutting
  useEffect(() => {
    if(props.isSelected) {
      setAnimationIsRunning(true)
      setTimeout(() => {
        setAnimationIsRunning(false)
      }, 3000)
    }
  }, [props.isSelected])

  return (
    <Gradient $length={props.length} $selected={animationIsRunning}>
      <SliderTrack $length={props.length} id={props.id} $selected={animationIsRunning}>
        {props.children}
      </SliderTrack>
    </Gradient>
  )
}