function smoothScroll(event) { 
    if (event.target.hash !== '') { //Check if tag is an anchor 
     event.preventDefault() 
     const hash = event.target.hash.replace("#", "") 
     const link = document.getElementsByName(hash) 
     //Find the where you want to scroll 
     const position = link[0].getBoundingClientRect().y 
     let top = 0 

     let smooth = setInterval(() => { 
      let leftover = position - top 
      if (top === position) { 
       clearInterval(smooth) 
      } 

      else if(position > top && leftover < 10) { 
       top += leftover 
       window.scrollTo(0, top) 
      } 

      else if(position > (top - 10)) { 
       top += 10 
       window.scrollTo(0, top) 
      } 

     }, 6)//6 milliseconds is the faster chrome runs setInterval 
    } 
} 