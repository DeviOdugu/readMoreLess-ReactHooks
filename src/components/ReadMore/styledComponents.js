// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  text-align: center;
  margin: 20px;
  padding: 20px;
  padding-bottom: 30px;
  @media screen and (max-width: 576px) {
    margin: 10px;
    padding: 10px;
    padding-bottom: 20px;
  }
  border: 2px #efefef solid;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 20px;
`
export const Paragraph = styled.p`
  color: #334155;
  font-size: 10px;
  padding-bottom: 10px;
`
export const ReactImage = styled.img`
  height: 200px;
  width: 350px;
`
export const Description = styled.p`
  color: #334155;
  font-size: 9px;
`

export const Button = styled.button`
  color: #ffffff;
  font-size: 8px;
  background-color: #1f81ff;
  padding: 5px;
  border-radius: 4px;
  border: none;
`
