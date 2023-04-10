const description= document.getElementById('film-info')
const title =document.getElementById('title')   
const runTime=document.getElementById('runtime') 
const timeOfShow=document.getElementById('showtime')
const movieList= document.querySelector('film item') 
const movieImage=document.getElementById ('poster')

const movieCapacity=document.getElementById('ticket-num') 
const ticketBtn= document.getElementById('buy-ticket')

fetch('http://localhost:3000/films/1')
    .then((response) => response.json())
    .then((data)=> {
        //console.log(data)
        
        title.innerText=data.title
        runTime.innerText=data.runtime
        description.innerText=data.description
        timeOfShow.innerText=data.showtime
        movieImage.src=data.poster
        movieCapacity.innerText=data.capacity
 

       })

 function buyTickets() {
    ticketBtn.addEventListener('click', (e)=> {
        const remainingTickets = parseInt(movieCapacity.textContent);

        if(remainingTickets > 0){
            movieCapacity.textContent = remainingTickets - 1;
        }
        else{
            alert('Tickets are unavailable')
        }

    })


 } 
 buyTickets()    
        
     
        
      