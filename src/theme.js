import { css } from '@emotion/core'

const colors = {
  black: '#202020',
  dark_grey: '#2D2D2D',
  grey: '#454647',
  light_grey: '#515151',
  white_grey: '#909090',
  blue: '#0a84ff',
  dark_white: '#f2f2f2',
  red_error: '#ff453a',
}

const fsize = {
  very_small: '.7rem',
  small: '.8rem',
  medium: '1.1rem',
  large: '1.2rem',
  very_large: '1.4rem',
}

const rowAndAlign = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const justifyAndAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const spaceBetween = css`
  justify-content: space-between;
`

export { colors, rowAndAlign, fsize, spaceBetween, justifyAndAlign }
