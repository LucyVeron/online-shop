import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="products">
        <div class="card">
          <img src="../images/products/socks.jpg" width="300" height="300"/>
          <h1>Striped Socks</h1>
          <p>Toasty socks to stay warm</p>
        </div>
        <div class="card">
          <img src="../images/products/sweater.jfif" width="300" height="300"/>
          <h1>Sweater</h1>
          <p>Knitted and cozy</p>
        </div>
      </div>
    `;
  }
  _message(fav) {
    if (fav) {
      return 'You really like me!';
    }
    else {
      return 'Do you like me?';
    }
  }
}

window.customElements.define('my-view1', MyView1);
