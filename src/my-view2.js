/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
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
          <img src="../images/products/towels.jpg" width="300" height="200"/>
          <h1>Towels</h1>
          <p>Bright colorful bath towels</p>
        </div>

        <div class="card">
          <img src="../images/products/pillow.jpg" width="300" height="200"/>
          <h1>Flower pillow</h1>
          <p>Comfortable and pretty</p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
