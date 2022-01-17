import styled from "styled-components";
import { variant, space, layout } from "styled-system";

const Input = styled.input(
  {
    outline: 0,
    border: "none",
    width: "100%",
    height: "2.5rem",
    borderRadius: "16px",
    margin: '0.25rem',
    textAlign: 'center',
    WebkitAppearance: 'none',
      margin: 0,
  },
  variant({
    variants: {
      blackInput: {
        backgroundColor: "inputBlack",
        color: 'white',

        // padding: "1.2rem 2rem",
        "&::placeholder": {

          color: "#A4A4A4",
        },
      },
      blueInput: {
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

export default Input;

// `
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   outline: 0;
//   border: none;
//   padding: 1.5rem 2rem;
// `;
