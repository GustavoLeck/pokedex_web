const pesquisa = document.getElementById("pesquisa")
const botao = document.getElementById("botao")
const campoRespostaNome = document.getElementById("respostaNome")
const campoRespostaTipo = document.getElementById("respostaTipo")

const selecaoHome = document.getElementById("selecaoHome")
const selecaoSobre = document.getElementById("selecaoSobre")
const selecaoLogo = document.getElementById("selecaoLogo")

pesquisa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      buscar();
    }
  });
botao.addEventListener('click', () =>{
    buscar();
})

botao.onmouseover = () => {
  botao.style.backgroundColor = "red";
}

botao.onmouseleave = () => {
  botao.style.backgroundColor = "#018001";
}

selecaoHome.onmouseover = () => {
  selecaoHome.style.backgroundColor = "red";
}
selecaoSobre.onmouseover = () => {
  selecaoSobre.style.backgroundColor = "red";
}

selecaoHome.onmouseleave = () => {
  selecaoHome.style.backgroundColor = "#0c4d86";
}

selecaoSobre.onmouseleave = () => {
  selecaoSobre.style.backgroundColor = "#0c4d86";
}


function buscar(){

    console.log()

    fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa.value}`)
    .then((response) =>{
      return response.json();
    })
    .then((json)=> {

        campoRespostaNome.innerHTML = "";
        campoRespostaTipo.innerHTML = "";

        campoRespostaNome.textContent = "Nomes: "

        let conteudoResposta = document.createElement("div");

        conteudoResposta.textContent= `${json.name}` 
        campoRespostaNome.appendChild(conteudoResposta)

        campoRespostaTipo.textContent = "Tipos: "

        json.types.forEach(element => {
        
        let conteudoResposta = document.createElement("div");    
        conteudoResposta.textContent= `${element.type.name}` 
        campoRespostaTipo.appendChild(conteudoResposta)
        
        });

        pesquisa.value = ""
        pesquisa.focus();
        

    }).catch(()=>{
      campoRespostaNome.innerHTML = "";
      campoRespostaTipo.innerHTML = "";

      campoRespostaNome.textContent = "Insira um valor valido de algum pokemon !"

      console.log("erro na pesquisa")
    });
}

selecaoLogo.addEventListener('click', () =>{
  window.location.href = "./index.html";
 })

selecaoHome.addEventListener('click', () =>{
 window.location.href = "./index.html";
})

selecaoSobre.addEventListener('click', () =>{
 window.location.href = "./sobre.html";
})

window.addEventListener("load", () =>{


});