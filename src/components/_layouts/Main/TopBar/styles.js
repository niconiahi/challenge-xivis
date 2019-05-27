import { css } from '@emotion/core'
import { colors } from 'theme'

export const styles = css`
  background-color: ${colors.grey};
  display: flex;
  grid-column: 1 / -1;
  grid-row: 1 / 3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button,
  h2 {
    margin: 0 2rem;
    color: ${colors.black};
  }
`

export const top_bar_icon = css`
  color: ${colors.black};
`

export const tooltip = css`
  border: 1px solid ${colors.dark_white};
`
