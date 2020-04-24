import { bj as loadCss } from './calfSystem-1499e8da.js';
import { a as all } from './all-5a1f9691.js';

function loadScript() {
  return new Promise((resolve) => {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.onload = () => { resolve(); };
    scriptTag.src = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';
    scriptTag.crossOrigin = 'anonymous';
    document.body.appendChild(scriptTag);
  });
}

function loadDataTables() {
  return all([loadScript(), loadCss('https://localhost:9966/dist/watch/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-9c4ec21e.js.map