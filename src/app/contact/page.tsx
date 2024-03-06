'use client'

import styled from "styled-components"
import { device } from "../styles/breakpoints"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 5.625rem;
  color: white;
  gap: 2.438rem;
  align-items: center;
  @media ${device.xl} {
    padding-top: 10.813rem;
  }
`
const WeContact = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 1rem;
  > p {
    font-size: 0.688rem;
    text-align: center;
  }
`

const SendInfo = styled.div`
  width: max-content;
  height: 1.813rem;
  > input {
    background-color: var(--pallete-white-color);
    border: 1px solid var(--pallete-brown-color);
    height: 100%;
  }
  > input:first-child {
    width: 9.813rem;
  }
  > input:nth-child(2) {
    width: 18.069rem;
  }
  > input::-webkit-input-placeholder {
    color: #BBBCB6;
    padding-left: 0.625rem;
  }
  @media ${device.sm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 2.5rem;
    justify-items: center;
    width: 18.5rem;
    gap: 0.3rem;
    > input {
      width: 100%!important;
    }
  }
`

const Line = styled.div`
  width: 37.5rem;
  height: 1px;
  background-color: var(--design-line-color);
  justify-self: center;
  @media ${device.sm} {
    margin-top: 1rem;
    width: 18.5rem;
  }
`

const SendBttn = styled.button`
  width: 6.063rem;
  height: 100%;
  background-color: #FAFAFA0d;
  color: white;
  border: 1px solid var(--pallete-brown-color);
  cursor: pointer;
  &:hover {
    transform: scale(98%);
  }
  transition: 0.5s;
  @media ${device.sm} {
    height: 1.5rem;
    place-self: center;
  }
`


const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.938rem;
  > div {
    display: grid;
    gap: 1rem;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`

const Title = styled.h3`
  color: white;
  font-size: 1rem;
`

export default function Contact() {
  return (
    <Main>
      <WeContact>
        <p>WE CONTACT YOU</p>
        <SendInfo>
          <input type="tel" placeholder="PHONE"/>
          <input type="email" placeholder="E-MAIL"/>
          <SendBttn>SEND</SendBttn>
        </SendInfo>
      </WeContact>
      <Line/>
      <Contacts>
        <div>
          <Title>E-MAIL</Title>
          <p>contact@timepiece.com</p>
        </div>
        <div>
          <Title>PHONE</Title>
          <p>(212)456-7890</p>
        </div>
        <div>
          <Title>ADDRESS</Title>
          <p>458 5th Avenue<br/>New York, USA</p>
          <p>Monday to Saturday<br/>8am - 6pm</p>
        </div>
      </Contacts>
    </Main>
  )
}