 const botoes= document.querSelector("button");
  botoes.forEach(funcion(botao){
    let curtiu = false;}
   {
    botao.addEvertListener("click",botaoClicado);
  function botaoClicado() {
   console.log("fui clicado");
  let texto = botao.querySelector("span");
    if(curtiu ===false) {
  texto.textContent++;
  }
   });
    const btnTemaEscuro=document.querySelector(".btn-tema-escuro");
    bntTemaEscuro.addEventlistener("click,mudaTema);
function mudaTema() {
 const corpoPagina= document.body;
 if(corpoPagina.classList.contains("tema-escuro")){
  corpoPagina.classlist.remove("tema-escuro");
 } else{
  corpoPagina.classlist.add("tema-escuro");
 }

}
