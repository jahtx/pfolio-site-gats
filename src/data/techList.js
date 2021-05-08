import { nanoid } from 'nanoid'

export const rbfcuPortData = {
  portItems: [
    { id: nanoid(), compHeader: 'Home Page', comp: 'main' },
    { id: nanoid(), compHeader: 'Mortgages', comp: 'mortgage' },
    { id: nanoid(), compHeader: 'Checking', comp: 'checking' },
    { id: nanoid(), compHeader: 'Auto Loans', comp: 'autoLoans' },
  ],
}
