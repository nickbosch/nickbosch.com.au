import React from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const styleSocialIcon = css`
  color: black;
  text-decoration: none;
  margin: 0 0.3rem;
`

const SocialLink = ({ href, icon, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      css={styleSocialIcon}
    >
      <FontAwesomeIcon icon={icon} size="2x" color={color} />
    </a>
  )
}

export default SocialLink
