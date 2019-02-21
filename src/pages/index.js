import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Particles from "react-particles-js";

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
                value_area: 800
              }
            },
            color: {
              value: "#000000"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000000",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
      <div
        css={css`
          z-index: 2;
        `}
      >
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.41421"
          viewBox="0 0 141 141"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
        >
          <circle cx="70.485" cy="70.485" fill="#43464B" r="70.485" />
          <g fill="#fff" fillRule="nonzero">
            <path d="m45.625 89.701h-1.531c-2.661 0-4.64-.624-5.937-1.872-1.296-1.248-1.944-3.141-1.944-5.678v-7.115c0-.676-.076-1.279-.227-1.81-.152-.531-.417-.979-.797-1.345-.379-.365-.882-.644-1.51-.837-.627-.193-1.417-.29-2.368-.29h-.889v-2.875h.889c1.007 0 1.827-.083 2.461-.248.635-.166 1.131-.417 1.49-.755.358-.338.606-.769.744-1.293s.207-1.145.207-1.862v-4.902c0-1.158.138-2.203.414-3.134.276-.93.727-1.723 1.355-2.378.627-.655 1.441-1.159 2.44-1.51 1-.352 2.224-.528 3.672-.528h1.531v2.896h-1.221c-3.199 0-4.799 1.551-4.799 4.654v4.82c0 3.364-1.454 5.26-4.364 5.688 2.937.289 4.406 2.179 4.406 5.667v7.074c0 3.158 1.586 4.737 4.757 4.737h1.221z" />
            <path d="m51.553 60.453h3.206l.145 3.351c.606-.717 1.192-1.313 1.758-1.789.565-.476 1.12-.859 1.665-1.148.545-.29 1.1-.493 1.665-.61.565-.118 1.151-.176 1.758-.176 2.137 0 3.754.631 4.851 1.892 1.096 1.262 1.644 3.162 1.644 5.699v13.548h-3.599v-13.258c0-1.628-.303-2.831-.91-3.61s-1.51-1.168-2.71-1.168c-.441 0-.872.065-1.293.196-.42.131-.858.359-1.313.683s-.948.761-1.479 1.313-1.127 1.241-1.789 2.068v13.776h-3.599z" />
            <path d="m90.472 70.464c0 1.724-.237 3.265-.713 4.623-.476 1.359-1.152 2.51-2.027 3.455-.876.944-1.941 1.668-3.196 2.172-1.255.503-2.668.754-4.24.754-1.228 0-2.482-.117-3.765-.351-1.282-.235-2.551-.607-3.806-1.117v-28.007h3.599v8.046l-.165 3.848c1.034-1.393 2.141-2.375 3.32-2.948 1.179-.572 2.444-.858 3.795-.858 1.186 0 2.227.248 3.124.744.896.497 1.647 1.197 2.254 2.1s1.062 1.993 1.365 3.268c.304 1.276.455 2.699.455 4.271zm-3.681.166c0-1.089-.08-2.089-.238-2.999-.159-.91-.411-1.69-.755-2.338-.345-.648-.786-1.155-1.324-1.52s-1.179-.548-1.924-.548c-.455 0-.917.072-1.386.217-.468.145-.954.386-1.458.724-.503.338-1.034.786-1.593 1.345-.558.558-1.154 1.251-1.789 2.078v10.074c.704.275 1.421.493 2.151.651.731.159 1.428.238 2.09.238.827 0 1.616-.131 2.368-.393.751-.262 1.413-.7 1.986-1.313.572-.614 1.027-1.428 1.365-2.441.338-1.014.507-2.272.507-3.775z" />
            <path d="m95.325 51.269h1.531c2.661 0 4.64.624 5.936 1.872s1.944 3.141 1.944 5.678v4.778c0 .676.076 1.279.228 1.81s.417.979.796 1.345c.379.365.886.644 1.521.837.634.193 1.427.29 2.378.29h.89v2.875h-.89c-1.006 0-1.83.083-2.472.248-.641.166-1.141.417-1.499.755-.359.338-.607.769-.745 1.293s-.207 1.144-.207 1.862v7.239c0 1.158-.138 2.203-.413 3.134-.276.931-.724 1.723-1.345 2.378-.62.655-1.434 1.159-2.441 1.51-1.006.352-2.233.528-3.681.528h-1.531v-2.896h1.241c3.185 0 4.778-1.551 4.778-4.654v-7.157c0-3.364 1.455-5.254 4.365-5.667-2.938-.317-4.406-2.213-4.406-5.688v-4.737c0-3.158-1.579-4.737-4.737-4.737h-1.241z" />
          </g>
        </svg>
      </div>
      <div
        css={css`
          text-align: center;
          z-index: 2;
          margin: 1rem 0 0 0;
        `}
      >
        <h1
          css={css`
            text-transform: uppercase;
            font-weight: 800;
            margin: 1rem 0 0.1rem 0;
          `}
        >
          Nick Bosch
        </h1>
        <div
          css={css`
            letter-spacing: 3px;
            font-size: 1.1rem;
            /* text-transform: uppercase; */
          `}
        >
          Web Developer
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
