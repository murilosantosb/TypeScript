
import { useRef } from 'react'
import './App.css'
import Button from './components/Button'

// Components
import FirstComponent from './components/FirstComponent'
import FormSubmit from './components/FormSubmit'
import InputState from './components/InputState'
import TipsProps from './components/TipsProps'
import { Category } from './types/Category'
import Posts from './components/Posts'
import Login from './components/Login'
import Profile from './components/Profile'
import { useUser } from './context/UserContext'

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const {user} = useUser()

  const handleRef = () => {
    buttonRef.current?.classList.add("button-select")
  }

  return (
    <div className='App'>
     
     <FirstComponent category={Category.TS} color='#FFFFFF' background_color='#0000FF'/>
     <FirstComponent category={Category.JS} color='#000000' background_color='#FFD700'/>
     <FirstComponent category={Category.PY} color='#FFD43B' background_color='#306998'/>
     <TipsProps name='Murilo' age={18} nickname='Murilão'/>
     <TipsProps name='Maria' age={20}/>

     <InputState />

     <FormSubmit />

     <Button ref={buttonRef} children='Enviar'/>
     <button onClick={handleRef}>Focus</button>

     <Posts />

     <Login />

     {user && user.name && user.email && user.password? (
      <Profile />
     ) : (
      <h1>Usuário desconectado!</h1>
     )
      
     }
    </div>
  )
}

export default App
