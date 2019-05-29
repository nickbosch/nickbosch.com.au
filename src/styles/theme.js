export default {
  colors: {
    bodyBackground: "hsl(218deg, 15%, 20%)",
    navigatorText: "#fff",
    navigatorActive: "rgba(255, 255, 255, 1)",
    navigatorInactive: "rgba(255, 255, 255, 0.2)"
  },
  layout: {
    breakpoints: {
      mobileOnly: `@media screen and (max-width: 599px)`,
      tabletPortrait: `@media screen and (min-width: 600px)`,
      tabletLandscape: `@media screen and (min-width: 900px)`,
      desktop: `@media screen and (min-width: 1200px)`,
      huge: `@media screen and (min-width: 1800px)`,
      minWidth: width => `@media screen and (min-width: ${width}px)`,
    },
  },
  triggers: {
    showCloud: false
  }
}
