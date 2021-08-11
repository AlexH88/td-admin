import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import MainTable from "./components/Table/Table";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a greeting", () => {
  act(() => {
    render(<MainTable />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"sc-bdnxRM kSNiSm\\">
      <table role=\\"table\\">
        <thead>
          <tr role=\\"row\\">
            <th colspan=\\"1\\" role=\\"columnheader\\">Дата</th>
            <th colspan=\\"1\\" role=\\"columnheader\\">Тип процесса</th>
            <th colspan=\\"1\\" role=\\"columnheader\\">Событие</th>
            <th colspan=\\"1\\" role=\\"columnheader\\">Все данные</th>
          </tr>
        </thead>
        <tbody role=\\"rowgroup\\">
          <tr role=\\"row\\">
            <td role=\\"cell\\">frame-sdwu5</td>
            <td role=\\"cell\\">picture-yndwb</td>
            <td role=\\"cell\\">tub-pjn3x</td>
            <td role=\\"cell\\">passion-fq5zn</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">crayon-tts8w</td>
            <td role=\\"cell\\">father-c0481</td>
            <td role=\\"cell\\">setting-wov2g</td>
            <td role=\\"cell\\">ladder-bns9l</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">wish-v67tp</td>
            <td role=\\"cell\\">foot-9hqbz</td>
            <td role=\\"cell\\">cow-5q53c</td>
            <td role=\\"cell\\">prose-1gr9v</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">clouds-lz7h4</td>
            <td role=\\"cell\\">sidewalk-pkkup</td>
            <td role=\\"cell\\">possibility-v6fmz</td>
            <td role=\\"cell\\">position-vypsa</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">hour-ym3qe</td>
            <td role=\\"cell\\">crime-d70mg</td>
            <td role=\\"cell\\">hammer-t4d9x</td>
            <td role=\\"cell\\">things-kkhyz</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">computer-fa0tc</td>
            <td role=\\"cell\\">crown-e7byj</td>
            <td role=\\"cell\\">combination-9gypo</td>
            <td role=\\"cell\\">tub-ue2ct</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">atmosphere-3hq42</td>
            <td role=\\"cell\\">instance-31bt6</td>
            <td role=\\"cell\\">instruction-slnv9</td>
            <td role=\\"cell\\">cabinet-c21li</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">presence-5q1ps</td>
            <td role=\\"cell\\">giraffe-engu0</td>
            <td role=\\"cell\\">circle-o6d8s</td>
            <td role=\\"cell\\">moment-bg5p1</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">dust-dlimi</td>
            <td role=\\"cell\\">science-x07hv</td>
            <td role=\\"cell\\">difference-b4gk5</td>
            <td role=\\"cell\\">quince-5a5jm</td>
          </tr>
          <tr role=\\"row\\">
            <td role=\\"cell\\">border-3gpwc</td>
            <td role=\\"cell\\">obligation-60bd0</td>
            <td role=\\"cell\\">customer-un6h5</td>
            <td role=\\"cell\\">shopping-fab56</td>
          </tr>
        </tbody>
      </table>
      <div class=\\"pagination\\"><button>&lt;&lt;</button> <button>&lt;</button> <button>&gt;</button> <button>&gt;&gt;</button> <span>Page <strong>3 of 10</strong> </span><span>| Go to page: <input type=\\"number\\" style=\\"width: 100px;\\" value=\\"3\\"></span> <select>
          <option value=\\"10\\">Show 10</option>
          <option value=\\"20\\">Show 20</option>
          <option value=\\"30\\">Show 30</option>
          <option value=\\"40\\">Show 40</option>
          <option value=\\"50\\">Show 50</option>
        </select></div>
    </div>"
  `);
});
