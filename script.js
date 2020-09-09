/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
var w = 1280;
var h = 720;

 var ball_count = 4;
 var ballen = [];
 class ball {
     ball(){
        this.s = 0.5;
        this.x = 100;
        this.y = 100;
        this.xs = 0.5;
        this.ys = 0.1;
        this.r = 30;
        this.rc = 255;
        this.gc = 0;
        this.bc = 100;
     }

     update(){
        this.x += this.xs;
        this.y += this.ys;
        if(this.x < 0 || this.x + this.r >= w){
            this.xs *= -1;
        }
        if(this.y < 0 || this.y + this.r >= h){
            this.ys *= -1;
        }
     }

     teken(){
         fill(this.rc, this.gc, this.bc);
        ellipse(this.x, this.y ,this.r, this.r);
     
     }
 }


function setup() {
    
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(w,h)

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  for(var i = 0; i < ball_count; i++){ ballen.push(new ball()); }
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */

function draw() {
    clear();
    background(50);
    

   for(var i = 0; i < ballen.length; i++){ 
       ballen[i].update(); 
       ballen[i].teken(); 
    }
}