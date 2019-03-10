import React from "react"
import { Global, css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLink from "../components/SocialLink"
import Logo from "../images/logo.svg"

import Particles from "react-particles-js"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faGithub,
  faBitbucket,
} from "@fortawesome/free-brands-svg-icons"

config.autoAddCss = false

const IndexPage = () => (
  <Layout>
    <SEO />
    <div
      css={css`
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      `}
    >
      <Particles
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
        `}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#fff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 100,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div
        css={css`
          z-index: 2;
          padding: 1rem;
        `}
      >
        <Global
          styles={css`
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
              animation-delay: 1s;
            }

            #b {
              animation-delay: 1.1s;
            }

            #left-brace-upper,
            #left-brace-lower,
            #right-brace-upper,
            #right-brace-lower {
              animation: drawIn ease-out 1;
              animation-fill-mode: forwards;
              animation-duration: 500ms;
              animation-delay: 500ms;
              stroke-dasharray: 109;
            }

            #left-brace-upper {
              stroke-dashoffset: -109;
            }

            #left-brace-lower {
              stroke-dashoffset: 109;
            }

            #right-brace-upper {
              stroke-dashoffset: -109;
            }

            #right-brace-lower {
              stroke-dashoffset: 109;
            }
          `}
        />
        <div
          css={css`
            max-width: 15rem;
            margin: 0 auto;
          `}
        >
          <Logo />
        </div>
        <div
          css={css`
            text-align: center;
            z-index: 2;
            margin: 2rem 0 0 0;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          `}
        >
          {/* <h1
            css={css`
              text-transform: uppercase;
              font-weight: 800;
              margin: 1rem 0 0.1rem 0;
              font-size: 1.9rem;
            `}
          >
            Nick Bosch
          </h1>
          <div
            css={css`
              font-size: 1.7rem;
            `}
          >
            Web Developer
          </div> */}
        </div>
        <h2
          css={css`
            font-weight: lighter;
          `}
        >
          My new website is coming soon, stay tuned!
        </h2>
        <div
          css={css`
            text-align: center;
            vertical-align: middle;
            margin: 2rem auto 0 auto;
            padding: 1rem 0;
            width: 14rem;
            /* background: rgba(255, 255, 255, 0.5);
            border: solid 1px rgba(255, 255, 255, 0.1);
            border-radius: 10px; */
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
      </div>
    </div>
  </Layout>
)

export default IndexPage
