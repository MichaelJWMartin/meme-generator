import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Main = styled.div`
  margin: auto;
  padding: 36px;
  max-width: 950px;
`

const Form = styled.div`
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 17px;
`

const Input = styled.input`
  text-indent: 5px;
  font-family: 'Karla', sans-serif;
  border-radius: 5px;
  border: 1px solid #D5D4D8;
`

const Button = styled.button`
  grid-column: 1 / -1;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-radius: 5px;
  color: white;
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
  border: none;
  cursor: pointer;
`

const Image = styled.img`
  margin-top: 20px;
  max-width: 100%;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const Meme = styled.div`
  position: relative;
  align-content: center;
`

const Text = styled.h2`
  position: absolute;
  width: 90%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow:
      2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      0 2px 0 #000,
      2px 0 0 #000,
      0 -2px 0 #000,
      -2px 0 0 #000,
      2px 2px 5px #000;
  ${(props) => props.positionTop === true ? 'top: 10px;' : 'bottom: 0px;'}
`

export const MemeForm = () => {

  const [meme, setMeme] = useState({
    topText: '', 
    bottomText: '', 
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });
  
  const [allMemes, setAllMemes] = useState([])
  
  useEffect(() => {
    console.log('hello there')
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(apiData => setAllMemes(apiData.data.memes))
  }, [])

  function getMemeImage() {
    console.log('click')
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevState => ({...prevState, randomImage: url}));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({...prevMeme, [name]: value}))
  }

  console.log('start')

  return (
    <Main>
      <Form>
        <Input 
          type='text' 
          placeholder='Top text' 
          name='topText' 
          value={meme.topText}
          onChange={handleChange}
        />
        <Input 
          type='text' 
          placeholder='Bottom Text' 
          name='bottomText' 
          value={meme.bottomText}
          onChange={handleChange}
        />
        <Button onClick={getMemeImage}>Get a new meme image 🖼️</Button>
      </Form>
      <Meme>
        <Image src={meme.randomImage} alt='meme'/> 
        <Text positionTop={true}>{meme.topText}</Text> 
        <Text positionTop={false}>{meme.bottomText}</Text> 
      </Meme>
    </Main>
  )
}