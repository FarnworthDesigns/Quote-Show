/* Data to Show*/
const data = [
  {
   quote: `“We all make choices in life, <br>but in the end our choices make us.” <br><b>-Andrew Ryan</b>`, 
   emoji: '👾', 
   image: `url(background/pixel-art-01_V01.jpg)`,
   iframe: `"Play On/Off"`
  }, 
  {
   quote: `“What is better? To be born good <br>or to overcome your evil nature through great effort?” <br><b>-Paarthurnax</b>`, 
   emoji: '🌠', 
   image: `url(background/pixel-art-02_V01.jpg)`,
   iframe: `https://js13kgames.com/games/everyones-sky/index.html`
  },  
  {
   quote: `“The right man in the wrong place can <br>make all the difference in the world.” <br><b>-G-Man</b>`, 
   emoji: '👨‍🚀' , 
   image: `url(background/pixel-art-03_V01.jpg)`,
   iframe: `Play Underrun`
  },
  {
    quote: `“HYAH HEH HYAAHH” <br><b>Link</b>`, 
    emoji: '💎', 
    image: `url(background/pixel-art-04_V01.jpg)`,
    iframe: `Play Konnekt`
  },
  {
    quote: `“Nothing is true, everything is permitted.”<br><b> -Ezio Auditore</b>`, 
    emoji: '🐱‍👤', 
    image: `url(/background/pixel-art-05_V01.jpg)`,
    iframe: `Play Offline Paradise`
  },
  {
    quote: `“You can’t undo what you’ve already done,<br> but you can face up to it.”<br> <b>-Frank Coleridge</b>`, 
    emoji: '🤖', 
    image: `url(/background/pixel-art-06_V01.jpg)`,
    iframe:`Play Off the Line`
  },
  {
    quote: `“Thank you Mario! <br>But our Princess is in another castle!” <br><b>-Toad</br>`, 
    emoji: '🏰', 
    image: `url(/background/pixel-art-07_V01.jpg)`,
    iframe: `Play SPCM`
  },
  {
    quote: `“Grass grows, birds fly, sun shines, <br>and brother, I hurt people.” <br><b>-The Scout</b>`, 
    emoji: '🕹️', 
    image: `url(/background/pixel-art-08_V01.jpg)`,
    iframe: `Play Raven`
  },
  {
    quote: `“I used to be an adventurer like you, <br>until I took an arrow to the knee.” <br><b>-Town Guard</b>`, 
    emoji: '🏹', 
    image: `url(/background/pixel-art-11_V01.jpg)`,
    iframe: ``
  },  
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// button
const iframe = document.querySelector('iframe');
// background
const bgImage = document.querySelector('body');
// Check-Check: change text
quote.innerHTML = "What a time to be alive.";
// Check-Check: change emoji text
emoji.innerHTML = "🎮";
// Check-Check: game load
iframe.innerHTML = "https://js13kgames.com/games/1024-moves/index.html"
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/background/pixel-art-20_V01.jpg)';
// 
/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  //generate audio on click and reset to 0.00sec
  document.getElementById('next').play();
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  iframe.innerHTML = data[itemNumber].iframe;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  //generate audio on click
  document.getElementById('prev').play();
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  iframe.innerHTML = data[itemNumber].iframe;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function() {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  //generate audio on click
  document.getElementById('random').play();
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  iframe.innerHTML = data[randomNumber].iframe;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  // Next Right Arrow  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  iframe.innerHTML = data[itemNumber].iframe;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  // Prev Left Arrow
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  iframe.innerHTML = data[itemNumber].iframe;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  // Random Spacebar
  if ( event.keyCode === 32) {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    iframe.innerHTML = data[randomNumber].iframe;
    bgImage.style.backgroundImage = data[randomNumber].image;
  
  }
  
});
const audio = document.getElementById("myAudio");
audio.volume = 0.2;