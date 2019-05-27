/** @jsx jsx */
import React, { useEffect } from 'react'
import { jsx } from '@emotion/core'
import { styles } from './styles'
import { isDescendingSelector, isGridViewSelector } from 'store/cart/_.selectors'
import {
  _setSortedBy,
  _setSearchCriteria,
  _setIsDescending,
  _setIsGridView,
} from 'store/cart'

// Store
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const OptionsBar = ({
  isDescending,
  isGridView,
  _setSearchCriteria,
  _setSortedBy,
  _setIsDescending,
  _setIsGridView,
}) => {
  useEffect(() => {
    return () => {
      _setIsDescending(true)
      _setSortedBy('name')
      _setSearchCriteria('')
    }
  }, [])

  return (
    <div css={[styles]}>
      <div>
        <input type='text' onChange={(e) => _setSearchCriteria(e.target.value)} />
        <label>Ordenar por: </label>
        <select onChange={(e) => _setSortedBy(e.target.value)}>
          <option value='name'>Nombre</option>
          <option value='price'>Costo</option>
        </select>
        <button
          onClick={
            !isDescending ? () => _setIsDescending(true) : () => _setIsDescending(false)
          }>
          {!isDescending ? 'Ascending' : 'Descending'}
        </button>
        <button
          onClick={
            !isGridView ? () => _setIsGridView(true) : () => _setIsGridView(false)
          }>
          {!isGridView ? 'List' : 'Grid'}
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isDescending: isDescendingSelector(state),
  isGridView: isGridViewSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  _setSearchCriteria: bindActionCreators(_setSearchCriteria, dispatch),
  _setSortedBy: bindActionCreators(_setSortedBy, dispatch),
  _setIsDescending: bindActionCreators(_setIsDescending, dispatch),
  _setIsGridView: bindActionCreators(_setIsGridView, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsBar)
