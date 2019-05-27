import { css } from '@emotion/core'
import { colors } from 'theme'

export const styles = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 35px 35px 50px repeat(18, 1fr);
  min-height: 100vh;
`

export const cart_page_sizing = css`
  grid-column: 3 / 11;
  grid-row: 4 / -1;
`

export const detail_page_sizing = css`
  grid-column: 2 / 12;
  grid-row: 5 / -3;
`
