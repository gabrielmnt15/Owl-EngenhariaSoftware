// Cria toda a seção do que já foi escrito na tela
function enviar() {
   let imagem = window.document.getElementById('user_foto');
   let nome = window.document.getElementById('username_index');
   let tweet = window.document.getElementById('mensagem');
   let postados = window.document.getElementById('postados');
   let caixa = document.createElement('div');
   let caixa_foto = document.createElement('div');
   let foto = document.createElement('img');
   let usuario = document.createElement('p');
   let paragrafo = document.createElement('p');
   let curtir = document.createElement('input');
   let comentar = document.createElement('input');
 
   // Coloca todos os valores dentro de cada elemento
   foto.setAttribute('src', imagem.getAttribute('src'));
   usuario.innerHTML = nome.innerHTML;
   paragrafo.innerHTML = tweet.value;
   curtir.setAttribute('type', 'button');
   curtir.setAttribute('value', '🤍');
   curtir.setAttribute('id', 'curtir');
   curtir.setAttribute('onclick', 'curtir()');
   comentar.setAttribute('type', 'button');
   comentar.setAttribute('value', 'Comentar');
   comentar.setAttribute('onclick', 'comentar()');
   
   caixa.setAttribute('id', 'caixa');
   caixa_foto.setAttribute('class', 'postados_user');
   usuario.setAttribute('id', 'user_nick');
   
   // Adiciona todos os elementos criados dentro do HTML
   caixa_foto.appendChild(foto);
   caixa_foto.appendChild(usuario);
   postados.appendChild(caixa);
   caixa.appendChild(caixa_foto);
   caixa.appendChild(paragrafo);
   caixa.appendChild(curtir);
   caixa.appendChild(comentar);
   tweet.value = "";
}

// Cria a área de texto para um comentário
function comentar() {
   let caixa = window.document.getElementById('caixa');
   let comentario = document.createElement('div');
   comentario.setAttribute('id', 'comentario');
   let paragrafo = document.createElement('p');
   let texto = window.prompt("Digite seu comentário!");
   
   paragrafo.innerHTML = texto;
   

   comentario.appendChild(paragrafo);
   caixa.appendChild(comentario);
}

// Muda o ícone do botão curtir
function curtir() {
   let botao = window.document.getElementById('curtir');
   
   botao.value = "❤️";
} 
