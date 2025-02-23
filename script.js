
const quoteGeneratorBtn=document.getElementById("Generate-quote-btn")

const quotes=[
    "Believe you can and you're halfway there.", 
     "The only way to do great work is to love what you do." ,
     "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
     "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take.",
     "You are never too old to set another goal or to dream a new dream.",
 "The best way to predict your future is to create it.",
 "Do something today that your future self will thank you for.",
 "You don't have to be great to start, but you have to start to be great.",
 "Happiness is not something ready-made. It comes from your own actions.",

    
    
]
const usedIndexes= new Set ()
const quoteElement=document.getElementById('quote')

function generateQuote(){
  
    while(true){
        const randomIdx = Math.floor(Math.random()*quotes.length)
        if(usedIndexes .has (randomIdx )) continue
        const quote=quotes[randomIdx]
        quoteElement.innerHTML=quote
          usedIndexes.add(randomIdx)
          
          if(usedIndexes.size===quotes.length){
            usedIndexes.clear()
       }
          
        break
    }
    

 
}

quoteGeneratorBtn.addEventListener("click",generateQuote)





