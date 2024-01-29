import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TWStyles } from '../../tw';

type inputType = 'text' | 'number' | 'password' | 'email' | 'tel';
@customElement('lit-input')
export class Input extends LitElement {
  static styles = [TWStyles, css``];

  @property({ type: String }) id: string = '';
  @property({ type: String }) label: string = '';
  @property({ type: String }) type: inputType = 'text';
  @property({ type: String }) placeholder: string = '';

  render() {
    return html` <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="${this.id}"
        >
          ${this.label}
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="${this.id}"
          type="${this.type}"
          placeholder="${this.placeholder}"
        />
      </div>
    </div>`;
  }
}
