const campo = document.getElementById("campoTarefa");
const botaoAdd = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");
const botaoResetar = document.getElementById("btnResetar");

botaoAdd.addEventListener("click", () => {
  const valor = campo.value.trim();
  if (!valor) {
    alert("Digite sua tarefa");
    return;
  }

  const li = document.createElement("li");
  li.textContent = valor;
  lista.appendChild(li);

  const grupoBotao = document.createElement("div");
  grupoBotao.className = "grupoBotao";

  const btnRemover = document.createElement("button");
  btnRemover.innerHTML = '<i class="fa fa-trash"></i>';
  grupoBotao.appendChild(btnRemover);

  btnRemover.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const btnEditar = document.createElement("button");
  btnEditar.innerHTML = '<i class="fa fa-edit"></i>';

  btnEditar.addEventListener("click", (e) => {
    e.stopPropagation();
    const novoTexto = prompt("Editar tarefa:", li.firstChild.textContent);
    if (novoTexto) li.firstChild.textContent = novoTexto;
  });

  grupoBotao.appendChild(btnEditar);
  li.appendChild(grupoBotao);

  campo.value = "";
});

botaoResetar.addEventListener("click", () => {
  lista.innerHTML = "";
});
