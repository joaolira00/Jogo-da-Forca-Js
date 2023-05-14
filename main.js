var paises;
var sorteioDePaises;
var mascara;
var erros;
var palavrasErradas;

paises = ["alemanha", "coreia do sul", "estados unidos", "japao", "franca"];
sorteioDePaises = paises[Math.floor(Math.random() * paises.length)];
mascara = sorteioDePaises.replace(/[a-z]/g, "#");

//document.getElementById("devmode").innerHTML = `${sorteioDePaises}`;

document.getElementById("resultado").innerHTML = mascara;

erros = 0;
//document.getElementById("erros").innerHTML = erros;

function Forca(params) {
  var jogadas;
  var i;

  jogadas = document.getElementById("jogadas").value;
  palavrasErradas = [jogadas];

if (sorteioDePaises.includes(jogadas))
{
    
  for (i = 0; i < sorteioDePaises.length; i++) 
  {
    if (sorteioDePaises[i] === jogadas) 
    {
      mascara = mascara.substr(0, i) + jogadas + mascara.substr(i + 1);
        
      document.getElementById("resultado").innerHTML = `${mascara}`;
    }
  }
}
else if (jogadas != sorteioDePaises && erros == 0)
{
  document.getElementById("gabriel").innerHTML += `O<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `${palavrasErradas}`;
}
else if (jogadas != sorteioDePaises && erros == 1) 
{
  document.getElementById("gabriel").innerHTML += ` |<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavrasErradas}`;
}
else if (jogadas != sorteioDePaises && erros == 2) 
{
  document.getElementById("gabriel").innerHTML += `/<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavrasErradas}`;
}
else if (jogadas != sorteioDePaises && erros == 3) 
{
  document.getElementById("gabriel").innerHTML += `<br>`
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavrasErradas}`;
}
else if (jogadas != sorteioDePaises && erros == 4)
{
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavrasErradas}`;
}
else if (jogadas != sorteioDePaises && erros == 5) 
{
  erros += 1;
  document.getElementById("letraserradas").innerHTML += `, ${palavrasErradas}`;
  document.getElementById("reset").innerHTML += `<button onclick="Reiniciar()">Reiniciar</button>`
}

if (mascara.includes("#") == false) 
  {
    document.write(`Você ganhou!!!! <br> A palavra era ${sorteioDePaises}!!!`);
  }

if (erros == 6) {
  document.write(`Game over!!!<br> A palavra era ${sorteioDePaises}.<br><button onclick="Reiniciar()">Reiniciar</button>`);
}
}

function Reiniciar(params) {
  window.location = "http://127.0.0.1:5500/";
}

