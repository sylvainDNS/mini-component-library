/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: { '--height': '8px', '--border-radius': '4px' },
  medium: { '--height': '12px', '--border-radius': '4px' },
  large: { '--height': '24px', '--border-radius': '8px', '--padding': '4px' },
}

const ProgressBar = ({ value = 0, size = 'medium' }) => {
  const arias = {
    'aria-valuenow': value,
    'aria-valuemin': 0,
    'aria-valuemax': 100,
  }
  const styles = SIZES[size]

  return (
    <Wrapper role="progressbar" style={styles} {...arias}>
      <Bar style={{ '--value': value + '%' }} />
      <VisuallyHidden>{value} %</VisuallyHidden>
    </Wrapper>
  )
}

const Wrapper = styled.span`
  --padding: 0;

  display: inline-block;

  padding: var(--padding);
  width: 100%;
  height: var(--height);

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);

  overflow-x: hidden;
`

const Bar = styled.div`
  height: 100%;

  border-radius: 4px;
  background: linear-gradient(
    to right,
    ${COLORS.primary} var(--value),
    transparent var(--value)
  );
`

export default ProgressBar
