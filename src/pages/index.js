import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Global, css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"

import theme from "../styles/theme"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ScrollTrigger, Trigger } from "../components/ScrollTrigger"
import TypedText from "../components/TypedText"
import Contact from "../components/Contact"
import SocialLink from "../components/SocialLink"
import Logo from "../images/logo.svg"

import MySchoolLunchBoxLogo from "../images/logos/mslb.svg"
import StamperLogo from "../images/logos/stamper.svg"
import AmandaLogo from "../images/logos/amanda.svg"
import ChapmanLogo from "../images/logos/chapman.svg"
import LubaLogo from "../images/logos/lubabosch.svg"
import LeoLogo from "../images/logos/leorobba.svg"

import DesktopLineArt from "../images/desktop.svg"

// import Particles from "react-particles-js"
import { config } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faGithub,
  faBitbucket,
} from "@fortawesome/free-brands-svg-icons"
import CloudGraphic from "../components/CloudGraphic"

config.autoAddCss = false

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const globalStyles = css`
  body {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes drawIn {
    to {
      stroke-dashoffset: 0;
    }
  }

  #n,
  #b {
    opacity: 0;
    animation: fadeIn ease-in 1;
    animation-fill-mode: forwards;
    animation-duration: 400ms;
  }

  #n {
    /* animation-delay: 1.4s; */
    animation-delay: 0.8s;
  }

  #b {
    /* animation-delay: 1.5s; */
    animation-delay: 0.9s;
  }

  #left-brace,
  #right-brace {
    opacity: 0;
    animation: fadeIn ease-in 1;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 0.4s;
  }

  #right-brace {
    animation-delay: 0.5s;
  }

  /* #left-brace-upper,
  #left-brace-lower,
  #right-brace-upper,
  #right-brace-lower {
    animation: drawIn ease-out 1;
    animation-fill-mode: forwards;
    animation-duration: 1s;
    animation-delay: 500ms;
    stroke-dasharray: 150;
  }

  #left-brace-upper {
    stroke-dashoffset: -150;
  }

  #left-brace-lower {
    stroke-dashoffset: 150;
  }

  #right-brace-upper {
    stroke-dashoffset: -150;
  }

  #right-brace-lower {
    stroke-dashoffset: 150;
  } */
`

const FullScreen = styled("div")`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
`

const CenterText = styled("div")`
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 1.1rem;
  ${props => props.theme.layout.breakpoints.tabletPortrait} {
    font-size: 1.32rem;
  }
  p {
    line-height: 1.5;
  }
`

const Clients = styled("div")`
  /* height: 100%; */
  width: 100%;
  max-width: 1200px;
  margin: 0;
  ${props => props.theme.layout.breakpoints.tabletPortrait} {
    margin: 0 auto 5rem auto;
  }
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 1rem;
`

const Client = styled(({ url, children, ...props }) => (
  <div {...props}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </div>
))`
  flex: 0 0 50%;
  height: 120px;
  ${props => props.theme.layout.breakpoints.tabletPortrait} {
    height: 180px;
  }
  ${props => props.theme.layout.breakpoints.tabletLandscape} {
    height: 200px;
  }
  ${props => props.theme.layout.breakpoints.desktop} {
    flex: 0 0 33.33%;
    height: 200px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  box-sizing: border-box;
`

const logoStyles = css`
  transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
  max-width: 280px;
  width: 100%;
  opacity: 0.8;
  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(quality: 90, width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Global styles={globalStyles} />
      <SEO />
      <ScrollTrigger showNavigatorDelay={4500}>
        <Trigger hasEntered>
          <FullScreen>
            <Logo
              css={theme => css`
                width: 10rem;
                ${theme.layout.breakpoints.tabletPortrait} {
                  width: 13.5rem;
                }
                ${theme.layout.breakpoints.tabletLandscape} {
                  width: 15rem;
                }
                height: 10.5rem;
                margin: 0 auto 4rem auto;
              `}
            />
            <div
              css={theme => css`
                font-family: "Montserrat", sans-serif;
                font-weight: 200;
                letter-spacing: -1px;
                font-size: 2rem;
                ${theme.layout.breakpoints.tabletPortrait} {
                  font-size: 3rem;
                }
                ${theme.layout.breakpoints.tabletLandscape} {
                  font-size: 3.6rem;
                }
                text-align: center;
                letter-spacing: -1px;
                opacity: 0;
                animation: ${fadeIn} 500ms cubic-bezier(0.19, 1, 0.22, 1)
                  forwards 1s;
              `}
            >
              <TypedText delay={2000}>Hi there,</TypedText>
            </div>
          </FullScreen>
        </Trigger>
        <Trigger
          offset={typeof window !== "undefined" && window.innerHeight * 0.9}
          styles={css`
            opacity: 0;
          `}
          enterStyles={css`
            opacity: 1;
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
          `}
          activeStyles={css`
            .coffeeLineArt {
              /* display: block; */
              opacity: 0.07;
            }
          `}
        >
          <FullScreen>
            <DesktopLineArt
              css={theme => css`
                display: block;
                opacity: 0;
                position: absolute;
                /* ${theme.layout.breakpoints.huge} {
                  bottom: 2rem;
                } */
                bottom: 2rem;
                left: 0;
                width: 100vw;
                transition: opacity 600ms cubic-bezier(0.19, 1, 0.22, 1);
              `}
              className="coffeeLineArt"
            />
            <div
              css={theme => css`
                width: 200px;
                ${theme.layout.breakpoints.tabletPortrait} {
                  margin: 2rem auto;
                }
                margin: 0 auto 0 auto;
                position: relative;
              `}
            >
              <Img
                css={css`
                  border-radius: 100px;
                `}
                fixed={data.me.childImageSharp.fixed}
              />
            </div>
            <div
              css={theme =>
                css`
                  padding: 0.2rem 1rem 0.2rem 1rem;
                  box-sizing: border-box;
                `
              }
            >
              <CenterText
                css={theme => css`
                  ${theme.layout.breakpoints.tabletLandscape} {
                    margin-bottom: 10rem;
                  }
                  ${theme.layout.breakpoints.desktop} {
                    margin-bottom: 20rem;
                  }
                  ${theme.layout.breakpoints.huge} {
                    margin-bottom: 25rem;
                  }
                `}
              >
                <p>
                  I’m Nick, a web developer based in Sydney and the Southern
                  Highlands. I have a strong background in website development
                  and data science and have been helping people get online for
                  nearly ten years! I’ve worked with a range of individuals and
                  businesses to successfully develop and implement their online
                  strategy.
                </p>
              </CenterText>
            </div>
          </FullScreen>
        </Trigger>
        <Trigger
          offset={typeof window !== "undefined" && window.innerHeight * 0.9}
          styles={css`
            ${Client} {
              opacity: 0;
            }
          `}
          enterStyles={css`
            /* transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); */
            ${Client} {
              opacity: 1;
              transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
            }
            ${Array.from(Array(6), (_, i) => i + 1).map(
              i => css`
              ${Client}:nth-of-type(${i}) {
                transition-delay: ${i / 30}s;
              }
            `
            )}
          `}
          activeStylesGlobal={css`
            body {
              background: #111;
            }
          `}
        >
          <FullScreen>
            <div
              css={theme => css`
                font-size: 2rem;
                font-family: "Montserrat", sans-serif;
                font-weight: 200;
                letter-spacing: -1px;
                margin: 2rem 0;
                padding: 0 1rem;
                box-sizing: border-box;
                ${theme.layout.breakpoints.tabletPortrait} {
                  margin: 5rem 0;
                  font-size: 2.5rem;
                }
              `}
            >
              These are some of my clients
            </div>
            <Clients>
              <Client url="https://myschoollunchbox.com.au">
                <MySchoolLunchBoxLogo width="280" css={logoStyles} />
              </Client>
              <Client url="https://stampertreeservices.com.au">
                <StamperLogo width="280" css={logoStyles} />
              </Client>
              <Client url="https://amandamcpaul.com.au">
                <AmandaLogo width="280" css={logoStyles} />
              </Client>
              <Client url="https://www.johnchapman.com.au">
                <ChapmanLogo width="280" css={logoStyles} />
              </Client>
              <Client url="https://lubabosch.com">
                <LubaLogo width="280" css={logoStyles} />
              </Client>
              <Client url="https://leorobba.com">
                <LeoLogo width="260" css={logoStyles} />
              </Client>
            </Clients>
          </FullScreen>
        </Trigger>
        <Trigger
          hasEntered
          offset={typeof window !== "undefined" && window.innerHeight * 0.9}
          styles={css`
            transition: all 400ms linear;
            color: ${theme.colors.bodyBackground} !important;
          `}
          activeStyles={css`
            color: #111;
          `}
          activeTheme={{
            colors: {
              navigatorText: "#111",
              navigatorActive: "rgba(20, 20, 20, 1)",
              navigatorInactive: "rgba(20, 20, 20, 0.2)",
            },
            triggers: {
              showCloud: true,
            },
          }}
          activeStylesGlobal={css`
            body {
              background: white;
            }
          `}
        >
          <FullScreen>
            <div
              css={css`
                position: relative;
                max-width: 32rem;
                width: 100%;
                margin: 3rem 0 4rem 0;
                padding: 0 1rem;
                box-sizing: border-box;
              `}
              className="cloudWrapper"
            >
              <CloudGraphic />
            </div>
            <div
              css={css`
                max-width: 47rem;
              `}
            >
              <div
                css={theme => css`
                  font-size: 1.5rem;
                  ${theme.layout.breakpoints.tabletPortrait} {
                    font-size: 2rem;
                  }
                  margin: 0 0 3rem 0;
                  font-family: "Montserrat", sans-serif;
                  font-weight: 200;
                  letter-spacing: -1px;
                  line-height: 1.3;
                  padding: 0 1rem;
                  box-sizing: border-box;
                `}
              >
                I create{" "}
                <span
                  css={css`
                    font-weight: 600;
                  `}
                >
                  fast, modern, mobile-friendly, and search-engine optimised
                </span>{" "}
                websites that clearly convey your most important information.
              </div>
              <CenterText>
                <p>
                  These days it’s almost impossible to avoid having an online
                  presence and often a website alone isn’t enough. You should
                  definitely be considering social media, email marketing and
                  online advertising, just to name a few things. I can help with
                  all of this!
                </p>
                <p>
                  Every successful online presence starts with a clear message
                  and a well-defined brand. I can work with you to create or
                  refine both of these things. We'll define clear and reachable
                  goals that fit into an overall online strategy, and use these
                  as a guide when implementing and measuring the success of your
                  presence. Don't worry, I also manage the technical components
                  too, like setting up domain names, web hosting, email
                  addresses and social media accounts.
                </p>
              </CenterText>
            </div>
          </FullScreen>
        </Trigger>
        <Trigger hasEntered>
          <FullScreen>
            <Contact />
            <div
              css={css`
                margin-top: 5rem;
              `}
            >
              <SocialLink
                href="https://fb.me/nickboschwebdev"
                icon={faFacebook}
                color="rgba(255, 255, 255, 0.8)"
                // color="#3B5998"
              />
              <SocialLink
                href="https://m.me/nickboschwebdev"
                icon={faFacebookMessenger}
                color="rgba(255, 255, 255, 0.8)"
                // color="#0084FF"
              />
              <SocialLink
                href="https://www.linkedin.com/in/nick-bosch/"
                icon={faLinkedin}
                color="rgba(255, 255, 255, 0.8)"
                // color="#0077B5"
              />
              <SocialLink
                href="https://github.com/nickbosch"
                icon={faGithub}
                color="rgba(255, 255, 255, 0.8)"
                // color="#181717"
              />
              <SocialLink
                href="https://bitbucket.org/nickbosch"
                icon={faBitbucket}
                color="rgba(255, 255, 255, 0.8)"
                // color="#0052CC"
              />
            </div>
          </FullScreen>
        </Trigger>
      </ScrollTrigger>
    </Layout>
  )
}
