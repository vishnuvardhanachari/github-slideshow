const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="style/salesforce-lightning-design-system.min.css" /> 

<div id="modal-div">
<section role="dialog" id="modal-content-id-1" tabindex="-1" class="slds-modal slds-fade-in-open slds-modal_small" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1">
<div class="slds-modal__container">
<header class="slds-modal__header">
<button id="close-modal" class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close">
<svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
<use xlink:href="./images/svg/symbols.svg#close"></use>
</svg>
<span class="slds-assistive-text">Close</span>
</button>
<h2 id="modal-heading-01" class="slds-modal__title slds-hyphenate">Modal header</h2>
</header>
<div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
<slot name="modal-content" />
</div>
<footer class="slds-modal__footer">
<button class="slds-button slds-button_neutral">Cancel</button>
<button class="slds-button slds-button_brand">Save</button>
</footer>
</div>
</section>
<div class="slds-backdrop slds-backdrop_open"></div>
</div>
`;

class Modal extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  closeModal(){
     const modalSection = this.shadowRoot.querySelector("#modal-div");
    // modalSection.style.display = "none"; //block
     modalSection.className = "slds-hide";
  }

  connectedCallback() {
      let state = this.getAttribute('state');
      alert(state);
      this.shadowRoot.querySelector("#close-modal").
      addEventListener("click", () => this.closeModal());
  }

  disconnectedCallback(){
    this.shadowRoot.querySelector("#close-modal").
    removeEventListener("click", () => this.closeModal());
  }
}

window.customElements.define("my-modal", Modal);
