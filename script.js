// seleção dos elementos HTML
const tipoBolo = document.getElementById("tipoBolo");
const numFatias = document.getElementById("fatias");
const massa = document.getElementById("massa");
const recheioGourmet = document.getElementById("recheioGourmet");
const mousseGourmet = document.getElementById("mousseGourmet");
const resultado = document.getElementById("resultado");

// definição dos preços dos ingredientes
const precos = {
  "bolo-decorado": 7.5,
  "naked-cake": 6.5,
  "10-fatias": 0,
  "20-fatias": 10,
  "25-fatias": 20,
  "35-fatias": 35,
  "56-fatias": 50,
  baunilha: 0,
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

  resultado.textContent = `Preço total: R$${precoTotal.toFixed(2)}`;
}

// adição do listener para o evento 'change'
tipoBolo.addEventListener("change", calcularPreco);
numFatias.addEventListener("change", calcularPreco);
massa.addEventListener("change", calcularPreco);
recheioGourmet.addEventListener("change", calcularPreco);
mousseGourmet.addEventListener("change", calcularPreco);
