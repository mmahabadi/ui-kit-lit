import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TWStyles } from './tw';

@customElement('my-element')
export class SimpleGreeting extends LitElement {
  static styles = [css``, TWStyles];

  @property()
  name = 'Somebody';

  render() {
    return html`<h1
      class="text-4xl bg-blue-500 text-bold flex flex-row text-center"
    >
      Hello, ${this.name}!
    </h1>`;
  }
}
