import { JSDOM } from "jsdom";
const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: "http://localhost/", // Important for react-router
});
global.window = dom.window;
global.document = dom.window.document;
// mock resize observer
global.window.scrollTo = () => {};
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

try {
  const result = require('./test-render.cjs');
  console.log("SUCCESS");
} catch(e) {
  console.log("ERROR IN TEST:", e);
}
