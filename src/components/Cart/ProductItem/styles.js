import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.red_error};

  display: flex;
  flex-direction: column;
`

export const image_container = css`
  height: 200px;
`

export const product_image = css`
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`
export const bottom_container = css`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  p {
    font-size: 1.6rem;
    color: ${colors.red_error};
    font-weight: bold;
    margin-right: 0.8rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  button,
  input {
    margin-bottom: 1rem;
  }
`

export const price_container = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
