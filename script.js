/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
var w = 1280;
var h = 720;

 var ball_count = 100;
 var ballen = [];
 class ball {
     constructor(){
        this.x = w * Math.random();
        this.y = h * Math.random();
        this.xs = Math.random() * 2 - 1;
        this.ys = Math.random() * 2 - 1;
        this.r = Math.random() * 40 + 40;
        this.rcol = Math.random() * 200 + 55;
        this.gcol = Math.random() * 200 + 55;
        this.bcol = Math.random() * 200 + 55;
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
         fill(this.rcol, this.gcol, this.bcol);
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