import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${colors.blue};
  }

  h4 {
    color: ${colors.red_error};
  }
`
