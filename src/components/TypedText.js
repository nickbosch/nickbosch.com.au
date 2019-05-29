import React, { Component } from "react"
import { css, keyframes } from "@emotion/core"

const cursorBlink = keyframes`
  0% {
    border-right: solid 1px #fff;
  }
  49% {
    border-right: solid 1px #fff;
  }
  50% {
    border-right: solid 1px transparent;
  }
  99% {
    border-right: solid 1px transparent;
  }
  100% {
    border-right: solid 1px #fff;
  }
`

export default class TypedText extends Component {
  state = {
    position: 0,
  }

  constructor(props) {
    super(props)
    this.textArray = Array.from(this.props.children)
  }

  typeLetter = () => {
    if (this.state.position < this.textArray.length) {
      this.setState(oldState => {
        return {
          position: oldState.position + 1,
        }
      })
    }
  }

  componentDidMount() {
    for (let i = 0; i < this.textArray.length; i++) {
      window.setTimeout(() => {
        this.typeLetter()
      }, this.props.delay + (200 + Math.floor(Math.random() * 30)) * (i + 1))
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <div
        css={css`
          border-right: solid 1px #fff;
          animation: 1.3s linear ${cursorBlink} infinite;
        `}
      >
        {this.state.position ? this.textArray.slice(0, this.state.position).join("") : <>&nbsp;</>}
      </div>
    )
  }
}

TypedText.defaultProps = {
  delay: 0,
}
