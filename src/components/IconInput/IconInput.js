import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--height': '24px',
    '--font-size': `${14 / 16}rem`,
    '--border-width': '1px',
    '--offset': '2px',
    '--icon-spacer': '24px',
  },
  large: {
    '--height': '36px',
    '--font-size': `${18 / 16}rem`,
    '--border-width': '2px',
    '--offset': '4px',
    '--icon-spacer': '36px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size = 'small',
  placeholder,
  ...delegated
}) => {
  const loweredSize = size.toLowerCase()
  const styles = SIZES[loweredSize]
  const iconSize = loweredSize === 'large' ? 24 : 16
  const iconStrokeWidth = loweredSize === 'large' ? 2 : 1

  return (
    <Wrapper style={{ '--width': `${width}px`, ...styles }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {icon ? (
        <IconWrapper>
          <Icon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
        </IconWrapper>
      ) : null}
      <Input type="text" placeholder={placeholder} {...delegated} />
    </Wrapper>
  )
}

const IconWrapper = styled.span`
  bottom: 0;
  left: 0;
  height: min-content;
  margin: auto;
  padding-bottom: 2px;
  position: absolute;
  top: 0;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 2px;
  color: inherit;
  font-size: inherit;
  font-weight: 700;
  height: 100%;
  outline-offset: var(--offset);
  width: 100%;

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${IconWrapper} + & {
    padding-left: var(--icon-spacer);
  }
`

const Wrapper = styled.label`
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: ${COLORS.gray700};
  display: inline-block;
  font-size: var(--font-size);
  position: relative;
  height: var(--height);
  width: var(--width);
`

export default IconInput
