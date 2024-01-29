import { customElement } from 'lit/decorators.js';
import { TWStyles } from '../tw';
import { LitElement, css, html } from 'lit';

@customElement('lit-login-form')
export class LoginForm extends LitElement {
  static styles = [TWStyles, css``];

  private handleClick = (e: Eventt) => {
    console.log('injam');
  };
  render() {
    return html`<lit-form>
      <lit-input
        label="Username"
        id="username"
        placeholder="test@domain.com"
      ></lit-input>
      <lit-input
        label="Password"
        id="password"
        placeholder="******"
      ></lit-input>
      <lit-button
        @click=${this.handleClick}
        id="submit"
        label="Login"
        type="submit"
      ></lit-button>
    </lit-form>`;
  }
}
