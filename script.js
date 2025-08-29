class ContadorClick extends HTMLElement {
  constructor() {
    super(); // chama o construtor da classe pai (HTMLElement)
    this.contador = 0; // contador inicial
    this.attachShadow({ mode: 'open' }); // cria o Shadow DOM 
  }

  connectedCallback() {
    this.render(); // renderiza o conteúdo inicial
    // adiciona um ouvinte de evento ao botão
    this.shadowRoot.querySelector('button')
      .addEventListener('click', () => this.incrementar());
  }

  incrementar() {
    this.contador++; // incrementa o contador
    this.render();   // atualiza o conteúdo exibido
  }

  render() {
    // conteúdo HTML e CSS encapsulado dentro do Shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #ff86cdff;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #ed1493ff;
          color: white;
        }

        p {
          font-family: Arial;
          margin-top: 10px;
        }
      </style>

      <button>Clique aqui</button>
      <p>Cliques: ${this.contador}</p>
    `;
  }
}

// Define e registra o novo elemento como <contador-click>
customElements.define('contador-click', ContadorClick);
