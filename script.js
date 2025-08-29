    // Criando o elemento customizado
    class MeuComponente extends HTMLElement {
      connectedCallback() {
        this.innerHTML = "<p>Olá! Eu sou um elemento customizado.</p>";
      }
    }

    // Registrando o elemento com o nome "meu-componente"
    customElements.define('meu-componente', MeuComponente);




    