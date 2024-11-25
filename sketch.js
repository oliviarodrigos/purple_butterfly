function setup() {
  createCanvas(400, 400);
}

function draw() {
  background ("pink")(220, ); 
  
}
// parasyte, 16, thriller
// black swan, 16, horror, drama
// fight club, 18, action, thriller 
// dead poet society, 12, drama
// oppenheimer, 16, historical drama, thriller 
let n = 1;
function draw() {
  background(220);
  if (n >=9){
    print(n);
  } else{
    print(n);
    n = n+2;
  }
}
let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = 16; // exemplo de idade
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 16) {
    if (idade >= 16) {
      return "parasyte";
    } else {
      return "dead poet society";
    }
  } else {
    return "black swan";
  }
}
function geraRecomendacao(idade, gostaDeHorror) {
    if(idade >= 16) {
        if(idade >= 16) {
            return "black swan";
        } else {
            if(gostaDeThriller){
                return "fight club";
            } else {
                return "oppenheimer";
            }
        }
    } else {
        if(gostaDeDrama) {
            return "dead poet society";
        } else {
            return "black swan";
        }
    }
}
function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoDrama = createCheckbox(" Gosta de drama?");
}

function draw() {
    background("purple");
    let idade = campoIdade.value();
    let gostaDeDrama = campoDrama.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeDrama);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeDrama) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "fight club";
        } else {
            if (gostaDeDrama) {
                return "oppenheimer";
            } else {
                return "dead poet society";
            }
        }
    } else {
        if (gostaDeDrama) {
            return "black swan";
        } else {
            return "parasyte";
        }
    }
}

