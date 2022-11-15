import { css, Global, keyframes } from '@emotion/react'



export const globalStyles = (
  <Global
    styles={css`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      } ;
      html,
      body {
        background: white;
        min-height: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
      };
    `}
  />
)