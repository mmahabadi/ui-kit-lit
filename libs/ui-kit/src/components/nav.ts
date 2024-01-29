import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TWStyles } from '../tw';
import { NavItem } from '@ui-kit-lit/models';
@customElement('lit-nav')
export class Nav extends LitElement {
  static sytles = [TWStyles, css``];

  @property({ type: Array<NavItem> }) items = [
    { label: 'Dashboard', link: '#' },
    { label: 'Team', link: '#' },
    { label: 'Projects', link: '#' },
    { label: 'Calendar', link: '#' },
    { label: 'Reports', link: '#' },
  ];

  @property({ type: String }) value = 'Dashboard';

  handleClick(item: NavItem) {
    this.value = item.label;
    const event = new Event('click', {
      label: item.label,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`<div class="hidden md:block">
      <div class="ml-10 flex items-baseline space-x-4">
        ${this.items.map(
          (item: NavItem) => html`<a
            href="${item?.link}"
            @click=${() => this.handleClick(item)}
            class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
            >${item?.label}
          </a>`
        )}
      </div>
    </div>`;
  }
}
