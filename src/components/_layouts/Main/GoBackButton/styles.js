import { css } from '@emotion/core'
import { colors } from 'theme'

export const styles = css`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;

  button {
    font-weight: bold;
    background-color: transparent;
    color: ${colors.red_error};
    padding: 0.5rem 0;
    border: none;
    border-bottom: 1px solid ${colors.blue};
  }
`
