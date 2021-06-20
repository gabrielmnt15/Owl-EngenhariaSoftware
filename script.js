function enviar() {
   let tweet = window.document.getElementById('mensagem');
   let postados = window.document.getElementById('textos_postados');
   let texto = document.createElement('p');
   
   texto.innerHTML = tweet.value;
   postados.appendChild(texto);
}