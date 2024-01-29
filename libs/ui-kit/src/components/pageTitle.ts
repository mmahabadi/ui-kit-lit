import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TWStyles } from '../tw';

@customElement('lit-page-title')
export class PageTitle extends LitElement {
  static styles = [css``, TWStyles];

  @property({ type: String }) title!: string;

  updated(changedProperties: Map<string, any>) {
    console.log(changedProperties);
  }

  render() {
    return html`<header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          ${this.title}
        </h1>
      </div>
    </header>`;
  }
}
