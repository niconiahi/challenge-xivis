import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    margin-right: 0.8rem;
  }

  span {
    text-shadow: -1px 1px 0 ${colors.black};
  }

  input,
  button {
    font-weight: bold;
    border: none;
    height: 30px;
    padding: 0 0.5em;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }

  input {
    background-color: ${colors.red_error};
    color: ${colors.blue};
    width: 55px;
    text-shadow: -1px 1px 0 ${colors.black};

    ::placeholder {
      color: ${colors.black};
    }
  }

  button {
    background-color: ${colors.blue};
    color: ${colors.red_error};
    padding: 2px 0.75rem 2px 1.5rem;
  }
`
