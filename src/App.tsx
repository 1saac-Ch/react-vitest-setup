import { useAtom, useSetAtom } from 'jotai'
import './App.css'
import { counterAtom, counterStringAtom, peopleAtom } from './atoms/counter'
import AnotherComp from './components/AnotherComp'
import React from 'react'
import { darkModeAtom } from './atoms/counter'
import { RESET } from 'jotai/utils'

function OtherComp() {
  const [people, setPeople] = useAtom(peopleAtom)

  return (
    <div className="my-5">
      All people :
      {people.map((p) => (
        <p>{p.name}</p>
      ))}
    </div>
  )
}

function Modal({
  children,
}: {
  children: (
    args: boolean,
    args2: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode
}) {
  const [show, setShow] = React.useState(false)

  return <div>{children(show, setShow)}</div>
}

function App() {
  const setCounter = useSetAtom(counterAtom)
  const [stringCounter] = useAtom(counterStringAtom)
  const [people, setPeople] = useAtom(peopleAtom)
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  return (
    <div className="flex flex-col">
      <p>Counter : </p>
      <p>{stringCounter}</p>
      <div className="space-x-2">
        <button onClick={() => setCounter((prev) => prev + 1)}>Inc</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>Dec</button>
      </div>{' '}
      <br />
      <div className="my-5">
        All people :
        {people.map((p) => (
          <p>{p.name}</p>
        ))}
      </div>
      <OtherComp />
      <p>Another comp:</p>
      <AnotherComp />
      <p>Theme : {darkMode ? 'dark' : 'light'}</p>
      <button onClick={() => setDarkMode((prev) => !prev)}>Toggle theme</button>
      <button onClick={() => setDarkMode(RESET)}>RESET</button>
      <button
        onClick={() => {
          setPeople((prev) => [...prev, { name: 'las', online: false }])
        }}
      >
        Add people
      </button>
    </div>
  )
}

export default App
