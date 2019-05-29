import React from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const pulseLinkTitle = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const IndicatorContainer = styled("ul")`
  display: block;
  list-style: none;
  text-indent: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: -5px;
  height: 100%;
  ${props => props.theme.layout.breakpoints.tabletPortrait} {
    left: 1.5rem;
    /* top: 50vh;
    transform: translate(0, -50%); */
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 9999;
`

export const IndicatorText = styled("span")`
  color: ${props => props.theme.colors.navigatorText};
  opacity: 0;
  margin-left: 0.4rem;
  animation: ${pulseLinkTitle} linear 1.5s ${props => props.index * 80}ms;
  display: none;
  ${props => props.theme.layout.breakpoints.tabletLandscape} {
    display: block;
  }
`

export const IndicatorOuter = styled("li")`
  /* padding: 6px 0 4px 0; */
  /* padding: 0 4px 0 1px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* flex-grow: 1; */
`

export const IndicatorInner = styled("div")`
  height: 2rem;
  display: block;
  width: 2px;
  margin: 0.3rem 0;
  padding: 0 0.3rem;
  &::before {
    background: ${props =>
      props.isActive ? props.theme.colors.navigatorActive : props.theme.colors.navigatorInactive};
    display: block;
    width: 2px;
    height: 2rem;
    content: "";
    transition: all linear 400ms;
    opacity: 0;
    animation: ${fadeIn} linear 300ms ${props => props.index * 80}ms forwards;
    -webkit-tap-highlight-color: transparent;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover + ${IndicatorText} {
    opacity: 1;
  }
`

export default ({ links, active, onClick }) => {
  let indicators = []
  for (let i = 0; i < links.length; i++) {
    indicators.push(
      <IndicatorOuter key={i} onClick={e => onClick(i)}>
        <IndicatorInner index={i} isActive={i === active} />
        <IndicatorText index={i}>{links[i]}</IndicatorText>
      </IndicatorOuter>
    )
  }

  return <IndicatorContainer>{indicators}</IndicatorContainer>
}
