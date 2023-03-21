// seleção dos elementos HTML
const tipoBolo = document.getElementById("tipoBolo");
const numFatias = document.getElementById("fatias");
const massa = document.getElementById("massa");
const recheioGourmet = document.getElementById("recheioGourmet");
const mousseGourmet = document.getElementById("mousseGourmet");
const resultado = document.getElementById("resultado");

// definição dos preços dos ingredientes
const precos = {
  "boloDecorado": 7.5,
  "nakedCake": 6.5,
  "10Fatias": 10,
  "20Fatias": 18,
  "25Fatias": 21,
  "35Fatias": 28,
  "56Fatias": 45,
  baunilha: 2,
  chocolate: 2.5,
  coco: 1.5,
  brigadeiroComum: 2,
  brigadeiroBranco: 2.5,
  doceDeLeite: 2.5,
  ninhoCozido: 2.5,
  maracuja: 2,
  morango: 1.5,
  limao: 1.5,
  ninho: 2,
};

// cálculo do preço do bolo
function calcularPreco() {
    const tipoBoloValue = tipoBolo.value;
    const numFatiasValue = numFatias.value;
    const massaValue = massa.value;
    const recheioGourmetValue = recheioGourmet.value;
    const mousseGourmetValue = mousseGourmet.value;
    
    const precoTipoBolo = precos[tipoBoloValue];
    const precoNumFatias = precos[numFatiasValue];
    const precoMassa = precos[massaValue];
    const precoRecheioGourmet = precos[recheioGourmetValue];
    const precoMousseGourmet = precos[mousseGourmetValue];  

    const precoTotal =
    precoTipoBolo +
    precoNumFatias +
    precoMassa +
    precoRecheioGourmet +
    precoMousseGourmet;

    console.log(precoTipoBolo)
  resultado.textContent = `R$ ${precoTotal.toFixed(2)}`;
}

// adição do listener para o evento 'change'
tipoBolo.addEventListener("change", calcularPreco);
numFatias.addEventListener("change", calcularPreco);
massa.addEventListener("change", calcularPreco);
recheioGourmet.addEventListener("change", calcularPreco);
mousseGourmet.addEventListener("change", calcularPreco);
