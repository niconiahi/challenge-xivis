import { css } from '@emotion/core'
import { colors } from 'theme'

export const styles = css`
  display: grid;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  grid-template: repeat(auto-fill, 400px) / repeat(auto-fill, minmax(270px, 1fr));

  justify-content: center;
`

export const grid_view_styles = css`
  display: grid;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  grid-template: repeat(auto-fill, 340px) / repeat(auto-fill, minmax(450px, 1fr));

  justify-content: center;
`
