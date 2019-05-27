import { css } from '@emotion/core'
import { colors } from 'theme'

export const styles = css`
  display: flex;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  * {
    margin-right: 1rem;
  }

  label {
    color: ${colors.blue};
  }

  select,
  input,
  button {
    padding: 0.3rem;
    background-color: transparent;
  }

  button,
  select,
  input {
    color: ${colors.blue};
    border: 2px solid ${colors.red_error};
  }
`
