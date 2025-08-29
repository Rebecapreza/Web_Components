class CaixaMensagem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Captura o template do HTML
    const template = document.getElementById('template-mensagem');
    const clone = template.content.cloneNode(true);

    // Anexa o conteúdo clonado ao Shadow DOM
    this.shadowRoot.appendChild(clone);
  }
}

customElements.define('caixa-mensagem', CaixaMensagem);
