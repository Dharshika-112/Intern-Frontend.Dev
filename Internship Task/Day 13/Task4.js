 /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   right();
   left();
   right();
   left();
   last();
   
 
}
function right(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   move();
   turnLeft();
   move();
}
function left(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}
function last(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
   
]