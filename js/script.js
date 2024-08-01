function scrollToElement(elementSelector, instance = 0) {
  // Seleziona tutti gli elementi che corrispondono al selettore specificato
  const elements = document.querySelectorAll(elementSelector);
  // Verifica se ci sono elementi che corrispondono al selettore e se esiste l'istanza richiesta
  if (elements.length > instance) {
    // Scorri fino all'istanza specificata dell'elemento
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

// Seleziona il link con l'ID "link1"
const link1 = document.getElementById("link1");
// Seleziona il link con l'ID "link2"
const link2 = document.getElementById("link2");
// Seleziona il link con l'ID "link3"
const link3 = document.getElementById("link3");

// Aggiungi un listener di eventi per il click sul link1
link1.addEventListener('click', () => {
  // Chiama la funzione scrollToElement per scorrere fino al primo elemento con la classe "header"
  scrollToElement('.header');
});

// Aggiungi un listener di eventi per il click sul link2
link2.addEventListener('click', () => {
  // Scorri fino al secondo elemento con la classe "header"
  scrollToElement('.header', 1);
});

// Aggiungi un listener di eventi per il click sul link3
link3.addEventListener('click', () => {
  // Chiama la funzione scrollToElement per scorrere fino al primo elemento con la classe "column"
  scrollToElement('.column');
});
