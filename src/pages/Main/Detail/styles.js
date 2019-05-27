import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`

export const img_container = css`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  img {
    max-height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const information_container = css`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1.5rem;

  h2,
  h4,
  h5 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  h4,
  h5 {
    color: ${colors.red_error};
    margin-right: 1rem;
  }

  h2 {
    color: ${colors.blue};
  }

  p {
    color: ${colors.blue};
  }
`

export const price_container = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
