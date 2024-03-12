# Workshop-Task-2
Link to first attempt: https://abai311.github.io/Workshop-Task-2/

# Notes
## SetTimeout
- function takes another function as an argument

- function setup () {
  createCanvas(400,400);
  background(220);

  setTimeout(function, 2000);

  EG. function mousePressed() {
  setTimeout(function, milliseconds, dimensions);

  ## SetInterval
  - same syntax as the setTimeout function.

    EG. function setup(){
    createCanvas(400,400);
    background(220);

    setInterval(makeredsquare, 500);
    }

    EG.
    let counter = 0
    let counterInterval = setInterval(makeredsqare, 1000);

    function makeredsquare() {
    noStroke();
    fill(255,0,0);
    rect(random (0,300), random (0,300), 60, 60);

    counter++ ;

    if(counter>5) {
    clear Interval (counterInterval)

# My take on this workshop task:
- I did not understand the functions we were taught properly, tried to recreate the example from the workshop and it took me multiple tries till I got something like it. I still don't fully understand how to go about these functions.
- I followed along 'The Coding Train' as well, an example of that is the second link provided. I think I need a lot more practice with these concepts as I am getting lost while writing a code.
- I was unable to create my own code so I stuck to trying to shift things around in the codes already provided but I made quite a few mistakes there as well. 
  



    
