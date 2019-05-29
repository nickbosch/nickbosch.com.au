import React, { Component, forwardRef } from "react"
import scrollTo from "scroll-to"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import Navigator from "../components/Navigator"

export const Trigger = forwardRef((props, ref) => {
  return (
    <>
      {props.isActive && props.activeStylesGlobal && (
        <Global styles={props.activeStylesGlobal} />
      )}
      <div
        css={theme => css`
          ${props.styles}
          ${props.hasEntered && props.enterStyles}
          ${props.isActive && props.activeStyles}
        `}
        ref={ref}
      >
        {props.children}
      </div>
    </>
  )
})

const links = [
  {
    title: "home",
    refIndex: 0,
    offset: 0,
  },
  {
    title: "about me",
    refIndex: 1,
    offset: 0,
  },
  {
    title: "my clients",
    refIndex: 2,
    offset: 0,
  },
  {
    title: "what I do",
    refIndex: 3,
    offset: 0,
  },
  {
    title: "contact",
    refIndex: 4,
    offset: 0,
  },
]

export class ScrollTrigger extends Component {
  constructor(props) {
    super(props)
    this.childRefs = []
    const visible = React.Children.toArray(this.props.children).map(
      child => child.props.hasEntered || false
    )
    this.state = {
      visible: visible,
      navigatorActive: this.props.navigatorActive,
      showNavigator: this.props.showNavigator,
    }
    this.setupTrigger(this.props.navigatorActive)
  }

  componentDidMount() {
    this.setup()
    window.setTimeout(
      () =>
        this.setState({
          showNavigator: true,
        }),
      this.props.showNavigatorDelay
    )
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener("resize", this.setup)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.setup)
  }

  setup = () => {
    this.refTops = this.childRefs.map(ref => this.getOffset(ref).top)
  }

  onScroll = e => {
    this.childRefs.forEach((ref, index) => {
      // animate children in
      const { y } = ref.getBoundingClientRect()
      const offset =
        (this.props.children.length
          ? this.props.children[index].props.offset
          : this.props.children.props.offset) || 0

      if (y <= window.innerHeight - offset) {
        this.setState(oldState => {
          const newVisible = oldState.visible
          newVisible[index] = true
          return {
            visible: newVisible,
          }
        })
      }
    })

    // update navigator
    const scrollCenter =
      (window.pageYOffset || document.documentElement.scrollTop) +
      window.innerHeight / 2

    let navigatorActive = this.refTops.findIndex(top => top > scrollCenter) - 1

    if (navigatorActive < 0) {
      navigatorActive = links.length - 1
    }

    if (this.state.navigatorActive !== navigatorActive) {
      this.setState({
        navigatorActive: navigatorActive,
      })
      this.setupTrigger(navigatorActive)
    }
  }

  setupTrigger = index => {
    this.theme = ancestorTheme => ({
      ...ancestorTheme,
      ...this.props.children[index].props.activeTheme
    })
    if (this.props.children[index].props.onActive instanceof Function) {
      this.props.children[index].props.onActive.call(this.props.children[index])
    }
  }



  scrollTo = index => {
    scrollTo(0, this.refTops[links[index].refIndex] + links[index].offset, {
      ease: "out-expo",
    })
  }

  getOffset = el => {
    const rect = el.getBoundingClientRect()
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  render() {
    const children = React.Children.toArray(this.props.children)
    children.forEach((child, index) => {
      children[index] = React.cloneElement(child, {
        ref: ref => {
          this.childRefs[index] = ref
        },
        hasEntered: this.state.visible[index],
        isActive: this.state.navigatorActive === index,
      })
    })
    return (
      <ThemeProvider theme={this.theme}>
        {this.state.showNavigator && (
          <Navigator
            links={links.map(link => link.title)}
            active={this.state.navigatorActive}
            onClick={this.scrollTo}
          />
        )}
        <div>{children}</div>
      </ThemeProvider>
    )
  }
}

ScrollTrigger.defaultProps = {
  showNavigator: false,
  showNavigatorDelay: 0,
  navigatorActive: 0,
}
/* <ScrollPrompt
                css={css`
                  opacity: 0;
                  animation: ${fadeIn} 1s cubic-bezier(0.19, 1, 0.22, 1)
                    forwards 5s;
                `}
              /> */
