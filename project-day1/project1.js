
    let cont = 1;
    
    let inserir = document.querySelector("#inserir");
    let remover = document.querySelector("#remover");
    let lista = document.querySelector("#lista");
    let resolucao = document.querySelector("#resolucao");
    
    inserir.addEventListener("click", insereResolucao);
    remover.addEventListener("click", removeResolucao);
    
    function insereResolucao() {
      let li = document.createElement("li");
    
      li.innerHTML = `(${cont}) - ${resolucao.value}`;
      li.setAttribute("id", `id-${cont}`);
    
      cont++;
    
      lista.appendChild(li);
    }
    
    function removeResolucao() {
      let li = document.querySelector(`#id-${resolucao.value}`);
    
      let resposta = confirm("Quer mesmo remover?");
    
      if (resposta) {
        lista.removeChild(li);
      }
    }
    

