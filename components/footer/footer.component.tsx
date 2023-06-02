import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import Image from '../image/image.component'
import Link from 'next/link'

const Footer = () => {
  const aboutItems = [
    {
      label: 'Documentation',
      href: 'https://docs.hydradx.io/',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Tokenomics',
      href: 'https://docs.hydradx.io/tokenomics',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Press Kit',
      href: 'https://github.com/galacticcouncil/HydraDX-assets/tree/main/images',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Bug bounties',
      href: 'https://immunefi.com/bounty/hydradx/',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
  ]

  const socialItems = [
    {
      label: 'Github',
      href: 'https://github.com/galacticcouncil',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Discord',
      href: 'https://discord.gg/kkmY35UxAG',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/hydra_dx',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/hydradx',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Substack',
      href: 'https://hydradx.substack.com/',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Reddit',
      href: 'https://www.reddit.com/r/hdx/',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
  ]

  const MOBILE_NAV_ITEMS = [
    {
      label: 'Docs',
      href: 'https://docs.hydradx.io/',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Tokenomics',
      href: 'https://docs.hydradx.io/tokenomics',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Github',
      href: 'https://github.com/galacticcouncil',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
    {
      label: 'Newsletter',
      rel: 'noopener noreferrer',
      target: '_blank',
      href: 'https://hydradx.substack.com/',
    },
    {
      label: 'Bug bounties',
      href: 'https://immunefi.com/bounty/hydradx/',
      rel: 'noopener noreferrer',
      target: '_blank',
    },
  ]

  return (
    <FooterContainer>
      <MobileMenuContainer
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -200,
        }}
        transition={{
          type: 'spring',
          mass: 1,
          stiffness: 100,
          damping: 15,
        }}
      >
        <MobileNav>
          <MobileNavList>
            {MOBILE_NAV_ITEMS.map((item, index) => (
              <MobileNavItem key={index}>
                {item.href && (
                  <Link rel={item.rel} target={item.target} href={item.href}>
                    {item.label}
                  </Link>
                )}
              </MobileNavItem>
            ))}
          </MobileNavList>
        </MobileNav>
      </MobileMenuContainer>

      <Container>
        <LogoContainer>
          <Link href={'/'} scroll>
            <LogoFigure>
              <Image
                src="/assets/logo-v2.svg"
                alt="HydraDX"
                width={'100%'}
                height={'100%'}
                style={{ objectFit: 'contain' }}
              />
            </LogoFigure>
          </Link>
          <PContainer>
            <p>Secured by</p>
            <figure>
              <Image
                src={'/assets/hero-section/polkadot-v2.svg'}
                alt={'polkadot logo'}
                width={'100%'}
                height={'100%'}
              />
            </figure>
          </PContainer>
        </LogoContainer>

        <Nav>
          <Ul>
            <Li>
              <h3>About</h3>
            </Li>
            {aboutItems.map((item, index) => (
              <Li key={index}>
                <Link href={item.href} rel={item.rel} target={item.target}>
                  {item.label}
                </Link>
              </Li>
            ))}
          </Ul>
          <Ul>
            <Li>
              <h3>Find us on</h3>
            </Li>

            {socialItems.map((item, index) => (
              <Li key={index}>
                <Link href={item.href} rel={item.rel} target={item.target}>
                  {item.label}
                </Link>
              </Li>
            ))}
          </Ul>
        </Nav>
      </Container>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  margin: 0 -2rem 5rem;
  padding: 0 2rem;
`

const Container = styled.div`
  max-width: 110rem;
  margin: 8.1rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  /* border: 1px solid red; */
`

const LogoContainer = styled.div`
  margin: 0 auto;

  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 155.6%;
    color: #ffffff;

    opacity: 0.8;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: unset;

      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const LogoFigure = styled.figure`
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  /* border: 1px solid green; */
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 17.9rem;
`

const Nav = styled.div`
  display: none;
  visibility: hidden;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: flex;
      visibility: visible;
      flex-wrap: wrap;

      gap: 9.2rem;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const PContainer = styled.div`
  visibility: visible;
  display: flex;
  gap: 0.83rem;

  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 500;
  font-size: 1.44553rem;
  line-height: 150%;

  color: #fff3f3;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Li = styled.li`
  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2.4rem;

    color: #ffffff;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 130%;

    font-family: 'HubotSans';
    font-weight: 500;
    font-style: normal;

    display: flex;
    align-items: center;

    color: #676c80;
    margin-bottom: 1.5rem;
  }
`

const navLinksStyles = css`
  cursor: pointer;
  font-family: 'Chakra Petch';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.3s ease-in;

  &:hover {
    color: #ff99c2;
  }
`

const MobileMenuContainer = styled(motion.div)`
  width: 100%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
      visibility: hidden;
      @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      }
    }
  }
`

const MobileNav = styled.nav`
  margin-top: 6.4rem;
  padding: 0 0 2rem;

  height: 100%;
  overflow-y: auto;
`

const MobileNavList = styled.ul``

const MobileNavItem = styled.li`
  a {
    ${navLinksStyles};

    display: block;
    padding: 2rem 0;
  }

  &:not(:last-child) {
    border-bottom: 0.461563px solid rgba(76, 243, 168, 0.12);
  }
`
