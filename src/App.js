import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook , faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  Axios.defaults.headers['X-Api-Key'] = 'E+5FjbdBewMMRcYv47G6uA==ZSiuPVzynA8AVZoo';

  return (
    <div className='container'>
      <Header /> 
      <Main />
    </div>
  );
}

const Header = ()=>{
  return(
    <header className='header'>
      <h1 className='title'><FontAwesomeIcon icon={faBook} /> Read Quotes</h1>
      <p className='developer'>Omid Tahmasebi Boldaji</p>
    </header>
  )
}

const Main = ()=>{
  const [quote , setQuote] = useState('')
  const [author , setAuthor] = useState('')

  useEffect(()=>{

    nextQuote()
  
  } , [])

  const nextQuote = ()=>{
    Axios.get('https://api.api-ninjas.com/v1/quotes').then((res)=>{
      setQuote(res.data[0].quote)
      setAuthor(res.data[0].author)
    })
  }

  return(
    <main className='main'>
      <p className='quote'> {quote} </p>
      <h4 className='author'> {author} </h4>
      <button className='nextButton' onClick={nextQuote}><FontAwesomeIcon icon={faArrowRight} /></button>
    </main>
  )
}

export default App;
