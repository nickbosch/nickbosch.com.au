import React from "react"
import styled from "@emotion/styled"

// import Particles from "react-particles-js"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false

export default styled(props => (
  <FontAwesomeIcon icon={faChevronDown} {...props} />
))`
  position: absolute;
  bottom: 2rem;
  font-size: 1.5rem;
  left: 50%;
  transform: translate(-50%, 0);
  color: rgba(255, 255, 255, 0.7);
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
  }
`
