var paises;
var sorteiodepaises;
var mascara;
var erros;
var palavraserradas;

paises = ["alemanha", "coreia do sul", "estados unidos", "japao", "franca"];
sorteiodepaises = paises[Math.floor(Math.random() * paises.length)];
mascara = sorteiodepaises.replace(/[a-z]/g, "#");

//document.getElementById("devmode").innerHTML = `${sorteiodepaises}`;

document.getElementById("resultado").innerHTML = mascara;

erros = 0;
//document.getElementById("erros").innerHTML = erros;

function Forca(params) {
  var jogadas;
  var i;

  jogadas = document.getElementById("jogadas").value;
  palavraserradas = [jogadas];

if (sorteiodepaises.includes(jogadas))
{
    
  for (i = 0; i < sorteiodepaises.length; i++) 
  {
    if (sorteiodepaises[i] === jogadas) 
    {
      mascara = mascara.substr(0, i) + jogadas + mascara.substr(i + 1);
        
      document.getElementById("resultado").innerHTML = `${mascara}`;
    }
  }
}
else if (jogadas != sorteiodepaises && erros == 0)
{
  document.getElementById("gabriel").innerHTML += `O<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `${palavraserradas}`;
}
else if (jogadas != sorteiodepaises && erros == 1) 
{
  document.getElementById("gabriel").innerHTML += ` |<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavraserradas}`;
}
else if (jogadas != sorteiodepaises && erros == 2) 
{
  document.getElementById("gabriel").innerHTML += `/<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavraserradas}`;
}
else if (jogadas != sorteiodepaises && erros == 3) 
{
  document.getElementById("gabriel").innerHTML += `<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavraserradas}`;
}
else if (jogadas != sorteiodepaises && erros == 4)
{
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavraserradas}`;
}
else if (jogadas != sorteiodepaises && erros == 5) 
{
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavraserradas}`;
  document.getElementById("reset").innerHTML += `<button onclick="Reiniciar()">Reiniciar</button>`
}

if (mascara.includes("#") == false) 
  {
    document.write(`Você ganhou!!!! <br> A palavra era ${sorteiodepaises}!!!`);
  }

if (erros == 6) {
  document.write(`Game over!!!<br> A palavra era ${sorteiodepaises}.<br><button onclick="Reiniciar()">Reiniciar</button>`);
}
}

function Reiniciar(params) {
  window.location = "http://127.0.0.1:5500/";
}

