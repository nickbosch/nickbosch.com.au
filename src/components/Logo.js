import React, { Component } from "react"
import { css } from "@emotion/core"

class Logo extends Component {
  constructor() {
    super()

    this.state = {
      hovering: false,
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter(e) {
    this.setState({
      hovering: true,
    })
  }

  handleMouseLeave(e) {
    this.setState({
      hovering: false,
    })
  }

  render() {
    // let logo

    // if (this.state.hovering) {
    //   logo = (
    //     <svg
    //       clipRule="evenodd"
    //       fillRule="evenodd"
    //       strokeLinejoin="round"
    //       strokeMiterlimit="1.41421"
    //       viewBox="0 0 141 141"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="255"
    //       height="255"
    //     >
    //       <circle cx="70.485" cy="70.485" fill="#43464B" r="70.485" />
    //       <g fill="#fff" fillRule="nonzero">
    //         <text color="#fff" x="28" y="77">
    //           Get started!
    //         </text>
    //       </g>
    //     </svg>
    //   )
    // } else {
    //   logo = (
    //     <svg
    //       clipRule="evenodd"
    //       fillRule="evenodd"
    //       strokeLinejoin="round"
    //       strokeMiterlimit="1.41421"
    //       viewBox="0 0 141 141"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="255"
    //       height="255"
    //     >
    //       <circle cx="70.485" cy="70.485" fill="#43464B" r="70.485" />
    //       <g fill="#fff" fillRule="nonzero">
    //         <path d="m45.625 89.701h-1.531c-2.661 0-4.64-.624-5.937-1.872-1.296-1.248-1.944-3.141-1.944-5.678v-7.115c0-.676-.076-1.279-.227-1.81-.152-.531-.417-.979-.797-1.345-.379-.365-.882-.644-1.51-.837-.627-.193-1.417-.29-2.368-.29h-.889v-2.875h.889c1.007 0 1.827-.083 2.461-.248.635-.166 1.131-.417 1.49-.755.358-.338.606-.769.744-1.293s.207-1.145.207-1.862v-4.902c0-1.158.138-2.203.414-3.134.276-.93.727-1.723 1.355-2.378.627-.655 1.441-1.159 2.44-1.51 1-.352 2.224-.528 3.672-.528h1.531v2.896h-1.221c-3.199 0-4.799 1.551-4.799 4.654v4.82c0 3.364-1.454 5.26-4.364 5.688 2.937.289 4.406 2.179 4.406 5.667v7.074c0 3.158 1.586 4.737 4.757 4.737h1.221z" />
    //         <path d="m51.553 60.453h3.206l.145 3.351c.606-.717 1.192-1.313 1.758-1.789.565-.476 1.12-.859 1.665-1.148.545-.29 1.1-.493 1.665-.61.565-.118 1.151-.176 1.758-.176 2.137 0 3.754.631 4.851 1.892 1.096 1.262 1.644 3.162 1.644 5.699v13.548h-3.599v-13.258c0-1.628-.303-2.831-.91-3.61s-1.51-1.168-2.71-1.168c-.441 0-.872.065-1.293.196-.42.131-.858.359-1.313.683s-.948.761-1.479 1.313-1.127 1.241-1.789 2.068v13.776h-3.599z" />
    //         <path d="m90.472 70.464c0 1.724-.237 3.265-.713 4.623-.476 1.359-1.152 2.51-2.027 3.455-.876.944-1.941 1.668-3.196 2.172-1.255.503-2.668.754-4.24.754-1.228 0-2.482-.117-3.765-.351-1.282-.235-2.551-.607-3.806-1.117v-28.007h3.599v8.046l-.165 3.848c1.034-1.393 2.141-2.375 3.32-2.948 1.179-.572 2.444-.858 3.795-.858 1.186 0 2.227.248 3.124.744.896.497 1.647 1.197 2.254 2.1s1.062 1.993 1.365 3.268c.304 1.276.455 2.699.455 4.271zm-3.681.166c0-1.089-.08-2.089-.238-2.999-.159-.91-.411-1.69-.755-2.338-.345-.648-.786-1.155-1.324-1.52s-1.179-.548-1.924-.548c-.455 0-.917.072-1.386.217-.468.145-.954.386-1.458.724-.503.338-1.034.786-1.593 1.345-.558.558-1.154 1.251-1.789 2.078v10.074c.704.275 1.421.493 2.151.651.731.159 1.428.238 2.09.238.827 0 1.616-.131 2.368-.393.751-.262 1.413-.7 1.986-1.313.572-.614 1.027-1.428 1.365-2.441.338-1.014.507-2.272.507-3.775z" />
    //         <path d="m95.325 51.269h1.531c2.661 0 4.64.624 5.936 1.872s1.944 3.141 1.944 5.678v4.778c0 .676.076 1.279.228 1.81s.417.979.796 1.345c.379.365.886.644 1.521.837.634.193 1.427.29 2.378.29h.89v2.875h-.89c-1.006 0-1.83.083-2.472.248-.641.166-1.141.417-1.499.755-.359.338-.607.769-.745 1.293s-.207 1.144-.207 1.862v7.239c0 1.158-.138 2.203-.413 3.134-.276.931-.724 1.723-1.345 2.378-.62.655-1.434 1.159-2.441 1.51-1.006.352-2.233.528-3.681.528h-1.531v-2.896h1.241c3.185 0 4.778-1.551 4.778-4.654v-7.157c0-3.364 1.455-5.254 4.365-5.667-2.938-.317-4.406-2.213-4.406-5.688v-4.737c0-3.158-1.579-4.737-4.737-4.737h-1.241z" />
    //       </g>
    //     </svg>
    //   )
    // }

    // return (
    //   <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
    //     {logo}
    //   </div>
    // )

    return (
      <svg viewBox="0 0 186 102" css={css`fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;`}>
        <path id="nb" d="M100.275,0.247l7.89,0l0,28.763c1.597,-1.365 3.77,-2.588 6.516,-3.67c2.746,-1.082 5.967,-1.623 9.662,-1.623c6.891,0 12.176,2.397 15.855,7.191c3.677,4.794 5.518,11.385 5.518,19.774c0,8.822 -2.148,15.797 -6.443,20.922c-4.293,5.127 -11.517,7.691 -21.671,7.691c-2.364,0 -5.211,-0.126 -8.538,-0.375c-3.33,-0.25 -6.26,-0.524 -8.789,-0.824l0,-77.849Zm-49.985,78.248l-7.89,0l0,-46.988c0,-2.164 -0.149,-4.477 -0.449,-6.941l7.64,0c0.3,1.466 0.499,3.064 0.599,4.794c2.297,-1.498 5.101,-2.814 8.414,-3.945c3.313,-1.132 6.617,-1.698 9.912,-1.698c5.094,0 9.13,1.482 12.11,4.444c2.978,2.964 4.469,7.175 4.469,12.634l0,37.7l-7.89,0l0,-37.051c0,-3.228 -0.849,-5.917 -2.546,-8.065c-1.698,-2.147 -4.096,-3.22 -7.191,-3.22c-3.096,0 -6.159,0.466 -9.188,1.398c-3.03,0.932 -5.693,2.13 -7.99,3.595l0,43.343Zm57.875,-7.19c2.663,1.365 6.341,2.047 11.035,2.047c6.358,0 10.977,-2.172 13.857,-6.516c2.879,-4.345 4.319,-9.429 4.319,-15.256c0,-6.857 -1.331,-12.091 -3.995,-15.704c-2.664,-3.612 -6.325,-5.418 -10.985,-5.418c-2.797,0 -5.468,0.417 -8.015,1.249c-2.546,0.832 -4.619,1.847 -6.216,3.046l0,36.552Z" css={css`fill:#fff;fill-rule:nonzero;`}/>
        <path id="left-brace" d="M22.345,3.989c-2.012,1.227 -3.494,2.745 -4.449,4.551c-0.955,1.807 -1.517,3.768 -1.687,5.88c-0.171,2.114 -0.255,4.159 -0.255,6.136l0,7.977c0,2.863 -0.036,5.284 -0.103,7.261c-0.069,1.977 -0.222,3.648 -0.46,5.01c-0.239,1.365 -0.597,2.524 -1.074,3.478c-0.478,0.956 -1.091,1.807 -1.841,2.556c-0.818,0.819 -1.687,1.467 -2.607,1.943c-0.92,0.479 -1.825,0.854 -2.711,1.126c-0.886,0.273 -1.704,0.46 -2.454,0.562c-0.751,0.102 -1.364,0.188 -1.841,0.256c0.477,0.069 1.09,0.153 1.841,0.255c0.75,0.103 1.568,0.291 2.454,0.563c0.886,0.273 1.791,0.649 2.711,1.124c0.92,0.478 1.789,1.125 2.607,1.944c0.75,0.751 1.363,1.585 1.841,2.506c0.477,0.92 0.835,2.079 1.074,3.476c0.238,1.398 0.391,3.068 0.46,5.011c0.067,1.944 0.103,4.346 0.103,7.21l0,7.977c0,1.977 0.084,4.022 0.255,6.136c0.17,2.112 0.732,4.073 1.687,5.88c0.955,1.805 2.437,3.324 4.449,4.55c2.01,1.228 4.891,1.944 8.642,2.149l0,1.84c-0.614,-0.068 -1.365,-0.137 -2.25,-0.204c-0.887,-0.069 -1.825,-0.205 -2.812,-0.41c-0.99,-0.203 -2.012,-0.528 -3.069,-0.97c-1.057,-0.445 -2.029,-1.041 -2.915,-1.791c-1.5,-1.16 -2.658,-2.42 -3.476,-3.783c-0.819,-1.365 -1.416,-2.864 -1.79,-4.5c-0.376,-1.637 -0.598,-3.426 -0.665,-5.369c-0.068,-1.943 -0.102,-4.108 -0.102,-6.494l0,-10.84c0,-2.455 -0.171,-4.551 -0.511,-6.29c-0.342,-1.738 -1.007,-3.221 -1.994,-4.449c-0.989,-1.226 -2.387,-2.249 -4.193,-3.067c-1.808,-0.818 -4.211,-1.534 -7.21,-2.148l0,-0.613c2.999,-0.614 5.402,-1.33 7.21,-2.148c1.806,-0.818 3.204,-1.841 4.193,-3.068c0.987,-1.228 1.652,-2.71 1.994,-4.448c0.34,-1.739 0.511,-3.835 0.511,-6.29l0,-10.942c0,-2.386 0.034,-4.551 0.102,-6.494c0.067,-1.944 0.289,-3.733 0.665,-5.369c0.374,-1.637 0.971,-3.135 1.79,-4.5c0.818,-1.363 1.976,-2.624 3.476,-3.784c0.886,-0.749 1.858,-1.346 2.915,-1.789c1.057,-0.443 2.079,-0.767 3.069,-0.972c0.987,-0.205 1.925,-0.34 2.812,-0.41c0.885,-0.067 1.636,-0.135 2.25,-0.204l0,1.842c-3.751,0.203 -6.632,0.919 -8.642,2.147" css={css`fill:#fff;fill-rule:nonzero;`}/>
        <path id="right-brace" d="M163.028,97.358c2.01,-1.228 3.492,-2.745 4.448,-4.551c0.954,-1.807 1.516,-3.767 1.688,-5.88c0.169,-2.114 0.255,-4.159 0.255,-6.136l0,-7.977c0,-2.863 0.033,-5.266 0.102,-7.21c0.068,-1.943 0.22,-3.612 0.461,-5.011c0.237,-1.397 0.595,-2.556 1.073,-3.477c0.476,-0.92 1.09,-1.754 1.841,-2.505c0.818,-0.819 1.687,-1.466 2.607,-1.943c0.921,-0.476 1.824,-0.852 2.711,-1.125c0.885,-0.272 1.703,-0.46 2.454,-0.563c0.749,-0.102 1.363,-0.186 1.841,-0.255c-0.478,-0.067 -1.092,-0.154 -1.841,-0.256c-0.751,-0.102 -1.569,-0.289 -2.454,-0.563c-0.887,-0.271 -1.79,-0.646 -2.711,-1.125c-0.92,-0.476 -1.789,-1.124 -2.607,-1.943c-0.751,-0.749 -1.365,-1.6 -1.841,-2.556c-0.478,-0.954 -0.836,-2.112 -1.073,-3.478c-0.241,-1.362 -0.393,-3.032 -0.461,-5.01c-0.069,-1.977 -0.102,-4.398 -0.102,-7.261l0,-7.977c0,-1.976 -0.086,-4.022 -0.255,-6.136c-0.172,-2.112 -0.734,-4.073 -1.688,-5.88c-0.956,-1.806 -2.438,-3.324 -4.448,-4.551c-2.013,-1.227 -4.894,-1.944 -8.642,-2.147l0,-1.842c0.613,0.069 1.363,0.154 2.25,0.256c0.885,0.102 1.823,0.256 2.812,0.461c0.987,0.204 1.994,0.51 3.017,0.92c1.022,0.408 2.01,0.989 2.965,1.738c1.499,1.16 2.659,2.421 3.477,3.784c0.818,1.365 1.414,2.863 1.791,4.499c0.373,1.637 0.595,3.427 0.664,5.37c0.067,1.943 0.102,4.108 0.102,6.494l0,10.942c0,2.455 0.17,4.551 0.512,6.29c0.34,1.738 1.005,3.221 1.993,4.448c0.988,1.227 2.404,2.25 4.245,3.069c1.84,0.817 4.226,1.533 7.158,2.146l0,0.615c-2.932,0.613 -5.318,1.329 -7.158,2.147c-1.841,0.818 -3.257,1.841 -4.245,3.067c-0.988,1.228 -1.653,2.711 -1.993,4.449c-0.342,1.739 -0.512,3.835 -0.512,6.29l0,10.84c0,2.385 -0.035,4.551 -0.102,6.494c-0.069,1.943 -0.291,3.733 -0.664,5.369c-0.377,1.637 -0.973,3.135 -1.791,4.5c-0.818,1.363 -1.978,2.624 -3.477,3.783c-0.955,0.75 -1.943,1.33 -2.965,1.739c-1.023,0.41 -2.03,0.716 -3.017,0.921c-0.989,0.204 -1.927,0.357 -2.812,0.46c-0.887,0.102 -1.637,0.186 -2.25,0.255l0,-1.841c3.748,-0.204 6.629,-0.92 8.642,-2.147" css={css`fill:#fff;fill-rule:nonzero;`}/>
      </svg>
    )
  }
}

export default Logo