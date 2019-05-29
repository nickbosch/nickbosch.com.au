import React, { Component } from "react"
import { withTheme } from "emotion-theming"
import BezierEasing from "bezier-easing"

import CloudSVG from "../images/cloud.min.svg"

export default withTheme(
  class CloudGraphic extends Component {
    elem = React.createRef()
    animating = false
    cloudShown = false

    scaleShape = (shape, ...args) => {
      if (shape.tagName === "use") this.scaleIcon(shape, ...args)
      else if (shape.tagName === "circle") this.scaleCircle(shape, ...args)
    }

    scaleCircle = (shape, scaleX, scaleY) => {
      if (!scaleY) {
        scaleY = scaleX
      }

      const cx = shape.getAttribute("cx")
      const cy = shape.getAttribute("cy")

      const tx = (1 - scaleX) * cx
      const ty = (1 - scaleY) * cy

      shape.setAttribute(
        "transform",
        `translate(${tx}, ${ty}) scale(${scaleX}, ${scaleY})`
      )
    }

    scaleIcon = (shape, scaleX, scaleY) => {
      if (!scaleY) {
        scaleY = scaleX
      }

      const transformAttribute = shape.getAttribute("transform")

      const [sx, , , sy, dx, dy] = transformAttribute
        .substring(7, transformAttribute.length - 1)
        .split(" ")
        .map(x => parseFloat(x))
      const { width, height } = shape.getBBox()

      const tx = dx + (width / 2) * (sx - scaleX)
      const ty = dy + (height / 2) * (sy - scaleY)

      shape.setAttribute(
        "transform",
        `matrix(${scaleX}, 0, 0, ${scaleY}, ${tx}, ${ty})`
      )
    }

    animateIn = () => {
      const duration = 1000
      const delays = Array.from(Array(this.shapes.length), x =>
        Math.ceil(Math.random() * 150)
      )
      const totalDuration = duration + Math.max(...delays)

      const easing = BezierEasing(0.19, 1, 0.22, 1)

      this.animating = true
      let start = null
      let step = timestamp => {
        if (!start) start = timestamp

        let progress = timestamp - start

        this.shapes.forEach((elem, elemIndex) => {
          if (progress < delays[elemIndex]) return

          this.scaleShape(
            elem,
            Math.min(easing((progress - delays[elemIndex]) / duration), 1)
          )
          elem.setAttribute(
            "opacity",
            Math.min(easing((progress - delays[elemIndex]) / duration), 1)
          )
        })

        if (progress < totalDuration) {
          window.requestAnimationFrame(step)
        } else {
          this.animating = false
          this.cloudShown = true
        }
      }

      window.requestAnimationFrame(step)
    }

    animateOut = () => {
      const duration = 100
      const delays = Array.from(Array(this.shapes.length), x =>
        Math.ceil(Math.random() * 50)
      )
      const totalDuration = duration + Math.max(...delays)

      this.animating = true
      let start = null
      let step = timestamp => {
        if (!start) start = timestamp

        let progress = timestamp - start

        this.shapes.forEach((elem, elemIndex) => {
          if (progress < delays[elemIndex]) return

          this.scaleShape(
            elem,
            Math.max(1 - (progress - delays[elemIndex]) / duration, 0)
          )
          elem.setAttribute(
            "opacity",
            Math.max(1 - (progress - delays[elemIndex]) / duration, 0)
          )
        })

        if (progress < totalDuration) {
          window.requestAnimationFrame(step)
        } else {
          this.animating = false
          this.cloudShown = false
        }
      }

      window.requestAnimationFrame(step)
    }

    componentDidMount() {
      this.svg = this.elem.current.children[0]
      this.shapes = this.svg.querySelectorAll("use, circle")
      this.shapes.forEach(shape => {
        this.scaleShape(shape, 0)
      })
    }

    render() {
      if (!this.cloudShown && this.props.theme.triggers.showCloud) {
        this.animating = false
        this.animateIn()
      } else if (this.cloudShown && !this.props.theme.triggers.showCloud) {
        this.animating = false
        this.animateOut()
      }
      return (
        <div ref={this.elem} className={this.props.className}>
          <CloudSVG id="cloud-svg" />
        </div>
      )
    }
  }
)
