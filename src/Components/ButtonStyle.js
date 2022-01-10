import styled from "styled-components";
import { variant, space, layout } from "styled-system";

const Button = styled.button(
  {
    outline: 0,
    border: "none",

    // height: "100%",
    padding : '0.5rem',
    borderRadius: "16px",
    // margin: '0.25rem',
    // textAlign: 'center',
  },
  variant({
    variants: {
      button1: {
        backgroundColor: "buttonBlue",
        color: 'white',
        width: "5rem",
        height: "2.5rem",
        fontSize : '16px',
        "&::placeholder": {

          color: "#A4A4A4",
        },
      },
      button2: {
        backgroundColor: "inputBlue",
        color: "black",
        "&::placeholder": {
            color: "inputBlack",
          },
      },
    },
  }),
  space,
  layout
);

export default Button;

// `
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   outline: 0;
//   border: none;
//   padding: 1.5rem 2rem;
// `;
