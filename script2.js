class MeuAlerta extends HTMLElement {
  constructor() {
    super();
    // Cria o Shadow DOM em modo 'open'
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Define o conteúdo do Shadow DOM
    this.shadowRoot.innerHTML = `
      <style>
        .alerta {
          padding: 15px;
          background-color: #ffeb3b;
          color: #333;
          border: 1px solid #fbc02d;
          border-radius: 5px;
          font-family: Arial, sans-serif;
        }
      </style>
      <div class="alerta">
        ⚠️ Este é um alerta encapsulado com Shadow DOM.
      </div>
    `;
  }
}

// Registra o elemento personalizado
customElements.define('meu-alerta', MeuAlerta);







