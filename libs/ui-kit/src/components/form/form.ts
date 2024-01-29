import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TWStyles } from '../../tw';

@customElement('lit-form')
export class Form extends LitElement {
  static styles = [css``, TWStyles];

  onsubmitHandler(e: Event) {
    console.log('onsubmitHandler', e);
  }

  render() {
    return html`<form @onsubmit=${this.onsubmitHandler} class="w-full max-w-sm">
      <slot></slot>
    </form>`;
  }
}
