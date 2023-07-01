import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const counterAtom = atom(0)

export const counterStringAtom = atom((get) => String(get(counterAtom)))

export const doubleIncCounter = atom(null, (get, set, newVal: number) => {
  set(counterAtom, get(counterAtom) + 2 * newVal)
})

export const darkModeAtom = atomWithStorage('dark-mode', false)

export const peopleAtom = atom([
  {
    name: 'foo',
    online: true,
  },
  {
    name: 'sas',
    online: false,
  },
])

export const onlineAtom = atom((get) =>
  get(peopleAtom).filter((val) => val.online)
)

export const offlineAtom = atom((get) =>
  get(peopleAtom).filter((val) => !val.online)
)
