// Variável que contém o nome da classe que controla se o elemento está fechado.
const collapsedClass = 'collapsed'

// Troca o ione para seta para cima
function iconOpen (element) {
  const icon = element.getElementsByTagName('i') [0] // Busca todas as tags (i) e pega o primero elemento.
  icon.classList.remove('bi-caret-up-fill') // Remove a seta para cima
  icon.classList.add('bi-caret-down-fill') // Adiciona a seta para baixo
}

// Troca o ione para seta para baixo
function iconClose (element) {
  const icon = element.getElementsByTagName('i') [0] // Busca todas as tags (i) e pega o primero elemento.
  icon.classList.remove('bi-caret-down-fill') // Remove a seta para baixo
  icon.classList.add('bi-caret-up-fill') // Adiciona a seta para cima
}

// Função que fecha um elemento.
function close (element) {
  const classList = element.classList //Lista de classes do elemento.
  classList.add(collapsedClass) // Adiciona a classe que abre o elemento
  iconClose(element) // Troca o icone para seta para baixo
}

// Função do Reset, fecha todos os elementos.
function collapseReset () {
  let collapsables = document.getElementsByClassName('appeals')[0] // Encontra todos os elementos que tem a classe (Appeals) e pega o primeiro item.
  collapsables = collapsables.getElementsByClassName('collapsable') // Pega todos os elementos que tem a classe (Collapsable) do Appeals.
  for (collapsable of collapsables) { // Para cada elemento Collapsables
    close(collapsable) // Fecha a caixa
  }
}

// Função que abre um elemento.
function open (element){
  collapseReset () // Fecha todos os elementos
 const classList = element.classList //Lista de classes do elemento.
 classList.remove(collapsedClass) // Remove a classe que fecha o elemento.
 iconOpen(element) // Troca o icone para seta para cima
}

// Orquestra o fechamento ou abertura dos elementos.
function collapse(element){
  const isCollapsed = element.classList.contains(collapsedClass) // Verifica se o elemento que foi clicado está fechado.
  if (isCollapsed) { // Se estiver fechada
    open(element) // Abre o elemento que foi clicado.
  }
  else { // Se estiver aberta
    close(element) // Fecha o elemento que foi clicado.
  }
}

