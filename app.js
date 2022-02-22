const API_URL = "https://api.adviceslip.com/advice";

const quote = document.querySelector('.advice-quote')
const numQuote = document.querySelector('.advice-num')

async function generateAdvice(){
   const res = await fetch(API_URL)
   const data = await res.json() 

   numQuote.innerText = `Advice #${data.slip.id}`
   quote.innerText = `"${data.slip.advice}"`
   return data
}

function getAdvice(){
    generateAdvice()
}

generateAdvice()
