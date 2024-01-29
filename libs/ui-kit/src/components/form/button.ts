import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TWStyles } from '../../tw';

@customElement('lit-button')
export class Button extends LitElement {
  static styles = [TWStyles, css``];

  @property({ type: String }) label: string = '';
  @property({ type: String }) type: 'submit' | 'button' = 'submit';
  handleClick(e: Event) {
    e.stopPropagation();
    const event = new Event('click', {
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  render() {
    return html`<div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button
          @click=${this.handleClick}
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="${this.type}"
        >
          ${this.label}
        </button>
      </div>
    </div>`;
  }
}
