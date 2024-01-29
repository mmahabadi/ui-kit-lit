import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TWStyles } from '../tw';

@customElement('lit-main')
export class Main extends LitElement {
  static styles = [css``, TWStyles];
  render() {
    return html`<div class="min-h-full">
      <slot name="header"></slot>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <slot name="body"></slot>
        </div>
      </main>
    </div>`;
  }
}
