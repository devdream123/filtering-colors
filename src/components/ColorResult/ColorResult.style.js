import styled from 'styled-components'

export const ColorResultStyled = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Color = styled.div`
  width: 250px;
  height: 250px;
  background: ${props => props.hex};
`

export const ColorLabelContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin: 15px;
`

export const ColorLabel = styled.div`
  display: flex;
  justify-content: center;
`