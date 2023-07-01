import { counterStringAtom, doubleIncCounter } from '@/atoms/counter'
import { useAtom, useSetAtom } from 'jotai'
import React from 'react'

export default function AnotherComp() {
  const [counter] = useAtom(counterStringAtom)
  const doubleInc = useSetAtom(doubleIncCounter)

  return (
    <div className="my-5">
      Counter :<span>{counter}</span> <br />
      <button onClick={() => doubleInc(2)}>INC</button>
    </div>
  )
}
