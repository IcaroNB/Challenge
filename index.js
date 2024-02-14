const code = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

//Capturando os elementos do HTML
const entradaTxt = document.getElementById('entradaTxt'); //textArea
const encriptarBtn = document.getElementById('encriptar'); //encriptarButton
const desencriptarBtn = document.getElementById('desencriptar'); //desencriptarButton
const saidaDiv = document.getElementById('saidaDiv') // Div saída da resposta
const saidaTxt = document.getElementById('saidaTxt') // texto de saída da resposta
const imgSaida = document.getElementById('imgSaida') // Div para imagem de saída
const copiar = document.getElementById('copiar') // CopiarButton

// Função para codificar uma frase
function codificar(frase) {
  let fraseCodificada = '';

  // Percorre cada letra da frase e a substitui, caso exista uma substituição para ela
  for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase();

    if (code[letra]) {
      fraseCodificada += code[letra];
    } else {
      fraseCodificada += letra;
    }
  }

  return fraseCodificada;
}

// Função para decodificar uma frase
function decodificar(frase) {
  // Substitui cada string de substituição pela letra correspondente
  let textoDecodificado = frase
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  return textoDecodificado;
}

function codifica() {
  if (entradaTxt.value != "") {
    // Esconde a imagem e exibe a div do texto
    imgSaida.style.display = 'none';
    saidaDiv.style.display = 'flex';

    return escrever();
  } else {
    // Se não há texto digitado, esconde a div do texto e exibe a imagem
    imgSaida.style.display = 'flex';
    saidaDiv.style.display = 'none';
  }
}

// Função que decodifica o texto digitado e exibe o resultado na tela
function decodifica() {
  if (entradaTxt.value != '') {
    // Esconde a imagem e exibe a div do texto
    imgSaida.style.display = 'none';
    saidaDiv.style.display = 'flex';

    return escreverDecodificado();
  } else {
    // Se não há texto digitado, esconde a div do texto e exibe a imagem
    imgSaida.style.display = 'flex';
    saidaDiv.style.display = 'none';
  }
}

// Função que escreve o texto codificado na tela
function escrever() {
  let textoCodificado = codificar(entradaTxt.value);
  saidaTxt.innerHTML = textoCodificado;
}

// Função que escreve o texto decodificado na tela
function escreverDecodificado() {
  let textoDecodificado = decodificar(entradaTxt.value);
  saidaTxt.innerHTML = textoDecodificado;
}

function copia() {
  let textoCopiado = txtSaida.innerHTML
  navigator.clipboard.writeText(textoCopiado);

  alert(`O texto '${textoCopiado}' foi copiado para a sua Área de Transferência!`);
}
//Botao que codifica a frase
encriptarBtn.onclick = codifica;

//Botao que decodifica a frase
desencriptarBtn.onclick = decodifica;

//Botao que copia a frase
copiar.onclick = copia;