//EXERCICI_1_ROBOT;
//NOM: Huiyu_Ye;
//6 figures primitives 2d:ellipse,arc,rect,square,triangle,point
//5 colors:blanc,rosa,groc,gris fosc,blau saturared sky, blau bright greek
//4 variables:
let salutacio = "Hello, friend!"; //variable text
let salutacio2 = "I'm LazyDog's robot ·_·"; //variable text
let mida = 20; //variable tamany 20 (ús en text)
let c = (255, 255, 255); //variable color blanc (ús en formes i text)
let i = 1; //variable per moure (ús en corbata)

let x = 0; //variable x per vibrar (ús en antena, ulls i corbata)
let y = 1; //variable y per vibrar (ús en antena, ulls i corbata)

function setup() {
  angleMode(DEGREES); //canviar de radiants a graus
  let canva=createCanvas(600,600); //crear canvas
  canva.parent("robot");
}
function draw() {
  // canvir el color de fons i text
  if (mouseY > 400) {//si la posició del ratolí está en una posició superior a 400,
    background(236, 204, 104); //el fons es converteix en groc,
    fill(c); //color del text segons la variable c
    textSize(mida); //mida del text segons variable mida
    text(salutacio, 40, 110); //aplicar text amb variable salutacio
  } else {//sinó
    background(255, 107, 129); //el fons queda en color rosa.
    fill(c); //color del text segons la variable c
    textSize(mida); //tamny del text segons la variable mida
    text(salutacio2, 30, 110); //text de la variable salutacio2
  }

  body_and_head(); //mostrar el contingut de la funció "body_and_head"
  face(); //mostrar el contingut de la funció "face"
  extremitats(); //mostrar el contingut de la funció "extremitats"

  //dibuixar boca
  if (1 == mouseY > 400) {
    //si ratolí está posició més gran que 400
    noStroke(); //sense contorn
    fill(c); //color superfície blanca
    arc(295, 185, 40, 30, 0, 180); //dibuixar figura arc
  } else {
    //sinó dibuixa
    noStroke(); //sense contorn
    fill(c); //color superfície blanca
    ellipse(295, 185, 30, 30); //dibuixar elipse
  }
  //vibració als ulls, part donada a clase
  x = x + y; //juntar la variable x i y
  if (x > 20 || x < 2) {
    //definir la velocitat i posició de la vibració
    y = y * -1;
  } //fer vibrar els ulls

  corbata(250, 200, 47, 53, 66, 2); //representació dibuix amb la funció corbata
}

function corbata(s, h, kr, kg, kb, grossor) {
  //s per posicióx, h per posicióy, kr-kg-kb per definir color rgb i grossor per strokeWeight.

  //funció que agrupa els elemnets per dibuixar una corbata
  fill(kr, kg, kb); // per difinir color
  strokeWeight(grossor); //aplicar paràmetre grossor al strokeWeight
  //dibuixar triangle amb x i y per vibrar i s i h per posició.
  triangle(20 + x + s,20 + y + h,60 + x + s,20 + y + h,40 + x + s,50 + y + h);         
  beginShape(); //ús de beginShape per dibuixar la corbata
  vertex(30 + x + s, 50 + y + h); //punts amb x i y per vibrar i s i h per posició
  vertex(50 + x + s, 50 + y + h); //punts amb x i y per vibrar i s i h per posició
  vertex(60 + x + s, 160 + y + h); //punts amb x i y per vibrar i s i h per posició
  vertex(60 + x + s, 160 + y + h); //punts amb x i y per vibrar i s i h per posició
  vertex(40 + x + s, 170 + y + h); //punts amb x i y per vibrar i s i h per posició
  endShape(CLOSE); //tancament del dibuix corbata
}

function body_and_head() {
  //aquí he creat una funció que agrupa el coll, rectangles blancs,cos,orelles,cap i antena.

  //coll
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(280, 200, 30, 30); //dibuixar rectangle

  //rectangle blanc esquerre
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(240, 400, 40, 40); //dibuixar rectangle

  //rectangle blanc dret
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(310, 400, 40, 40); //dibuixar rectangle

  //cos
  noStroke(); //sense contron
  fill(83, 82, 237);
  rect(220, 220, 150, 200, 70, 70, 0, 0); //dibuixar rectangle

  //orella esquerra
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  square(220, 160, 20, 20);
  fill(83, 82, 237); //color superfície blau satured sky
  square(230, 150, 40, 10);

  //orella dreta
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  square(350, 160, 20, 20);
  fill(83, 82, 237); //color superfície blau satured sky
  square(320, 150, 40, 10);

  //cap
  noStroke(); //sense contron
  fill(83, 82, 237); //color superfície blau satured sky
  rect(240, 120, 110, 90, 70, 70, 70, 70); //dibuixar rectangle

  //antena
  noFill(); //sense emplenament de color
  strokeWeight(10); //gruix tamany 10
  stroke(255, 255, 255); //contorn color blanc
  square(290, 110, 10, 20); //dibuixar un quadrat
  point(300 + x, 70 + y); //dibuixar un punt aplicant-hi les variables xi y per fer vibrar.
  strokeWeight(2); //gruix tamany 2
  arc(300, 90, 30, 40, 100, -100); //dibuixar arc
}

function face() {
  //funció face que agrupa els dos ulls

  //ull esquerre: rodona_blanca+rodona_blava+rodona_negra+rodona_blanca
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  ellipse(270 + x, 160, 30, 30); //dibuixar elipse

  noStroke(); //sense contron
  fill(55, 66, 250); //color superfície blau bright greek
  ellipse(270 + x, 160, 20, 20); //dibuixar una elipse

  noStroke(); //sense contron
  fill(47, 53, 66); //color superfície gris fosc
  ellipse(270 + x, 160, 10, 10); //dibuixar ellipse

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  ellipse(265 + x, 160, 5, 5); //dibuixar ellipse

  //ull dret: pasos = ull esquerre, but varia la posició x dels ellipses
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  ellipse(320 + x, 160, 30, 30); //dibuixar ellipse

  noStroke(); //sense contron
  fill(55, 66, 250); //color superfície blau bright greek
  ellipse(320 + x, 160, 20, 20); //dibuixar ellipse

  noStroke(); //sense contron
  fill(47, 53, 66); //color superfície gris fosc
  ellipse(320 + x, 160, 10, 10); //dibuixar ellipse

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  ellipse(315 + x, 160, 5, 5); //dibuixar ellipse
}

function extremitats() {
  //peu esquerre
  noStroke(); //sense contron
  fill(83, 82, 237); //color superfície blau satured sky
  rect(250, 440, 20, 60); //dibuixar rectangle

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  arc(260, 490, 50, 50, 180, 0); //dibuixar arc

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(240, 500, 40, 10); //dibuixar rectangle

  //peu dret
  noStroke(); //sense contron
  fill(83, 82, 237); //color superfície blau satured sky
  rect(320, 440, 20, 60); //dibuixar rectangle

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  arc(330, 490, 50, 50, 180, 0); //dibuixar arc

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(310, 500, 40, 10); //dibuixar rectangle

  //braç esquerre
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(200, 300, 20, 40); //dibuixar rectangle

  noStroke(); //sense contron
  fill(83, 82, 237); //color superfície blau satured sky
  rect(180, 220, 20, 120); //dibuixar rectangle

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  ellipse(190, 210, 30); //dibuixar elipse

  //braç dret
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  rect(370, 300, 20, 40); //dibuixar rectangle

  noStroke(); //sense contron
  fill(83, 82, 237); //color superfície blau satured sky
  rect(390, 220, 20, 120); //dibuixar rectangle

  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  ellipse(400, 210, 30); //dibuixar elipse

  //triangle blanc
  noStroke(); //sense contron
  fill(c); //superfície color seguit de variable c
  triangle(220, 220, 370, 220, 290, 350); //dibuixar triangle
}
