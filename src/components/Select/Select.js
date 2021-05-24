import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <SelectIcon id="chevron-down" size="24" strokeWidth="2" />
      </PresentationalBit>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const NativeSelect = styled.select`
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: ${16 / 16} rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`

const SelectIcon = styled(Icon)`
  bottom: 0;
  display: inline-block;
  margin: auto;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 0;
`

export default Select
