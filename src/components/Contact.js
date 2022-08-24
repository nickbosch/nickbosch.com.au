import React, { useState } from "react"
import { css, keyframes } from "@emotion/core"

const contactButton = keyframes`
  to {
    width: 0px;
    height: 2.4rem;
    border: solid 1px rgba(255, 255, 255, 0.3);
  }
`

const contactButtonTabletPortrait = keyframes`
  to {
    width: 0px;
    height: 3.3rem;
    border: solid 1px rgba(255, 255, 255, 0.3);
  }
`

const ContactButton = ({ children, compact, onClick }) => (
  <div
    css={theme => css`
      border: solid 1px rgba(255, 255, 255, 0.3);
      margin: 0.8rem 0;
      border-radius: 7px;
      height: 2.8rem;
      width: 7.3rem;
      &:hover {
        border: solid 1px rgba(255, 255, 255, 0.6);
      }
      ${compact &&
        css`
          animation: ${contactButton} cubic-bezier(0.19, 1, 0.22, 1) 200ms
            forwards;
          ${theme.layout.breakpoints.tabletPortrait} {
            animation: ${contactButtonTabletPortrait} cubic-bezier(0.19, 1, 0.22, 1) 200ms
            forwards;
          }
        `}
    `}
  >
    <button
      css={css`
        display: ${compact ? "none" : "block"};
        background: transparent;
        font-weight: normal;
        outline: none;
        color: #fff;
        border: 0;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        font-size: 1rem;
        text-align: center;
        text-decoration: none;
        width: 100%;
        height: 100%;
        &:hover {
          cursor: pointer;
        }
      `}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
)

const Contact = () => {
  const [showDetails, toggleDetails] = useState(false)
  return (
    <>
      <div
        css={css`
          text-align: center;
          /* font-size: 2rem;
          font-family: "Montserrat", sans-serif;
          font-weight: 200;
          letter-spacing: -1px; */
        `}
      >
        <p>Got questions or ready to get started?</p>
      </div>
      <div
        css={css`
          box-sizing: border-box;
          padding: 0 1rem;
          display: flex;
          /* flex-direction: ${showDetails ? "row" : "column"}; */
          flex-direction: row;
          align-items: center;
          justify-content: center;
          height: 5rem;
        `}
      >
        {showDetails && (
          <div
            css={theme => css`
              text-align: right;
              padding: 0 0.8rem 0 0;
              width: 8rem;
              ${theme.layout.breakpoints.tabletPortrait} {
                padding: 0 1.3rem 0 0;
                width: 12rem;
              }
            `}
          >
            <div
              css={theme => css`
                font-size: 1.33rem;
                ${theme.layout.breakpoints.tabletPortrait} {
                  font-size: 1.95rem;
                }
                margin: 0 0 0.2rem 0;
                font-family: "Montserrat", sans-serif;
                font-weight: 200;
                letter-spacing: -1px;
              `}
            >
              <a
                href="tel:+61435140028"
                css={css`
                  color: #fff;
                  text-decoration: none;
                `}
              >
                0435 140 028
              </a>
            </div>
            <div
              css={theme => css`
                font-size: 0.8rem;
                ${theme.layout.breakpoints.tabletPortrait} {
                  font-size: 1rem;
                }
              `}
            >
              Mon - Fri, 9am - 5pm
            </div>
          </div>
        )}
        <ContactButton
          onClick={e => toggleDetails(!showDetails)}
          compact={showDetails}
        >
          Get in touch
        </ContactButton>
        {showDetails && (
          <div
            css={theme => css`
              text-align: left;
              padding: 0 0 0 0.8rem;
              width: 8rem;
              ${theme.layout.breakpoints.tabletPortrait} {
                padding: 0 0 0 1.3rem;
                width: 12rem;
              }
            `}
          >
            <div
              css={theme => css`
                font-size: 1.33rem;
                ${theme.layout.breakpoints.tabletPortrait} {
                  font-size: 1.95rem;
                }
                margin: 0 0 0.2rem 0;
                font-family: "Montserrat", sans-serif;
                font-weight: 200;
                letter-spacing: -1px;
              `}
            >
              <a
                href="mailto:hello@nickbosch.com.au"
                css={css`
                  color: #fff;
                  text-decoration: none;
                `}
              >
                hello
              </a>
            </div>
            <div
              css={theme => css`
                font-size: 0.8rem;
                ${theme.layout.breakpoints.tabletPortrait} {
                  font-size: 1rem;
                }
              `}
            >
              @nickbosch.com.au
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Contact
