import Link from "next/link"
import { usePathname } from "next/navigation"
import styled from "styled-components"
import { device } from "../styles/breakpoints"

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 8.813rem;
  font-size: var(--menu-font-size);
  color: var(--pallete-white-color);
  text-align: center;
  @media ${device.sm}{
    grid-template-columns: 1fr;
    grid-tempalte rows: 1fr;
    height: max-content;
  }
`

const Title = styled.h1`
  font-size: var(--title-font-size);
  letter-spacing: var(--title-letter-spacing);
  justify-self: flex-start;
  margin-left: 12.5rem;
  @media ${device.sm}{
    justify-self: center;
    margin-left: 0;
    padding-top: 2.855rem;
    padding-bottom: 2.855rem;
  }
`

const Menu = styled.menu`
  display: inline-flex;
  gap: 8.375rem;
  margin-right: 6.25rem;
  > a {
    width: max-content;
  }
  @media ${device.xl} {
    gap: 4.375rem;
  }
  @media ${device.sm}{
    flex-direction: column;
    gap: 0.2rem;
    width: 1.5rem;
    margin-right: 0;
    font-size: 0;
    justify-self: end;
    align-items: end;
    position: relative;
    right: 1rem;
    > a {
      width: 1.5rem;
      height: 0.2rem;
      border-radius: 2px;
      background-color: var(--pallete-white-color);
      pointer-events: none;
      content-visibility: hidden;
      transition: 0.5s;
    }
    &:hover {
      margin-right: 0;
      gap: 0.5rem;
      font-size: inherit;
      width: 100%;
      height: 100%;
      > a {
        transition: 0.5s;
        border-radius: 0;
        background-color: unset;
        width: fit-content;
        height: fit-content;
        pointer-events: auto;
        content-visibility: visible;
      }
    }
  }
`

export default function Header() {
  const pathname = usePathname()

  function isActive(url: string | null, pathname: string) {
    if(url === pathname) {
      return "active"
    } else {
      return undefined
    }
  }

  return (
    <HeaderContainer>
      <Title>TIMEPIECE</Title>
      <Menu>
        <Link href={'/'} className={isActive(pathname, "/")}>HOME</Link>
        <Link href={'/about'} className={isActive(pathname, "/about")}>ABOUT</Link>
        <Link href={'/new'} className={isActive(pathname, "/new")}>NEW RELEASES</Link>
        <Link href={'/contact'} className={isActive(pathname, "/contact")}>CONTACT</Link>
      </Menu>
    </HeaderContainer>
  )
}