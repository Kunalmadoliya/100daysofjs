const btn = document.querySelector('#btn')
const  quote = document.querySelector('.text')
const person = document.querySelector('.name')

const quotes = [
    {
        quote: "“Easy reading is damn hard writing.”", 
        person: "― Nathaniel Hawthorne (about)"
    },
    {
        quote: "“The secret of being a bore is to tell everything.”",
        person: "― Voltaire (about)"
    },
    {
        quote: "“It’s not wise to violate the rules until you know how to observe them.”",
        person: "― T.S. Eliot (about)"
    },
    {
        quote: "“If you don’t have time to read, you don’t have the time (or the tools) to write. Simple as that.”",
        person: "― Stephen King (about)"
    },
    {
        quote: "“Write what will stop your breath if you don’t write.”",
        person: "― Grace Paley (about)"
    },
    {
        quote: "“What is the essence of the art of writing? Part One: Have something to say. Part Two: Say it well.”",
        person: "― Edward Abbey (about)"
    }
];


function make(){

    const random = Math.floor(Math.random() *quotes.length)

    quote.innerHTML = quotes[random].quote
    person.innerHTML = quotes[random].person

    

  
    
}

btn.addEventListener('click' , make)