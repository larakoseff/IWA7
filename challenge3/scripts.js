const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const leoNewBalance = leoBalance*-1
const sarahNewBalance = sarahBalance*-1
const owed = (parseFloat(leoNewBalance + sarahNewBalance))
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${leoNewBalance.toFixed(2)})`
const sarah =`\n${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahNewBalance.toFixed(2)})\n\n`
const total =  `Total amount owed:`
const result = `${leo} ${sarah} ${divider} \n   ${total}  R ${owed.toLocaleString("en-ZA", {minimumFractionDigits: 2}).replace(',', '.')} \n ${divider}`



console.log(result)
