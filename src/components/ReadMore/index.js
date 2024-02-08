// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Paragraph,
  ReactImage,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)

  const [isClicked, setButton] = useState(false)
  const onClickButton = () => {
    setButton(prevState => !prevState)
  }

  const text = isClicked ? reactHooksDescription : slicedText
  const buttonText = isClicked ? 'Read Less' : 'Read More'
  return (
    <MainContainer>
      <Heading> React Hooks </Heading>
      <Paragraph> Hooks are a new addition to React </Paragraph>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description> {text} </Description>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
