import Link from "next/link"
import { usePathname } from "next/navigation"
import styled from "styled-components"

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
`

const Title = styled.h1`
  font-size: var(--title-font-size);
  letter-spacing: var(--title-letter-spacing);
  justify-self: flex-start;
  margin-left: 12.5rem;
`

const Menu = styled.menu`
  display: inline-flex;
  gap: 8.375rem;
  margin-right: 6.25rem;
  > a {
    width: max-content;
  }
  @media(max-width: 1440px) {
    gap: 4.375rem;
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