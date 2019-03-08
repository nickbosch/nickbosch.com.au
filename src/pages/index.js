import React from "react"
import { Global, css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLink from "../components/SocialLink"
import Logo from "../components/Logo"

import Particles from "react-particles-js"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  faFacebook,
  faFacebookMessenger,
  faTwitter,
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

            #nb {
              opacity: 0;
              animation: fadeIn ease-in 1;
              animation-fill-mode: forwards;
              animation-duration: 500ms;
              animation-delay: 750ms;
            }

            #left-brace,
            #right-brace {
              opacity: 0;
              animation: fadeIn ease-in 1;
              animation-fill-mode: forwards;
              animation-duration: 500ms;
              animation-delay: 500ms;
            }

          `}
        />
        <Logo />
        <div
          css={css`
            text-align: center;
            z-index: 2;
            margin: 2rem 0 0 0;
          `}
        >
          <h1
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
          </div>
        </div>
        <div
          css={css`
            text-align: center;
            vertical-align: middle;
            margin-top: 2rem;
          `}
        >
          <SocialLink
            href="https://fb.me/nickboschwebdev"
            icon={faFacebook}
            color="#3B5998"
          />
          <SocialLink
            href="https://m.me/nickboschwebdev"
            icon={faFacebookMessenger}
            color="#0084FF"
          />
          <SocialLink
            href="https://twitter.com/nicholasbosch"
            icon={faTwitter}
            color="#1DA1F2"
          />
          <SocialLink
            href="https://github.com/nickbosch"
            icon={faGithub}
            color="#181717"
          />
          <SocialLink
            href="https://bitbucket.org/nickbosch"
            icon={faBitbucket}
            color="#0052CC"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
