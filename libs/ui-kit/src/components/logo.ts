import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TWStyles } from '../tw';

@customElement('lit-logo')
export class Logo extends LitElement {
  static styles = [TWStyles, css``];

  @property({ type: String }) title = 'Your Company';
  @property({ type: String }) image = '#';

  render() {
    return html`<div class="flex-shrink-0 h-8 w-8">
      <img
        class="h-8 w-8"
        src="${this.image}"
        alt="${this.title}"
        width="100%"
        height="100%"
      />
    </div>`;
  }
}
