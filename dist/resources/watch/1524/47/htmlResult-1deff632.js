import { w as infoBoxFrom } from './calfSystem-7a121553.js';

function htmlResult(data) {
  const info = infoBoxFrom(data);
  if (info.includes('successfully')) {
    return { s: true };
  }
  return { e: { message: info }, s: false };
}

export { htmlResult as h };
//# sourceMappingURL=htmlResult-1deff632.js.map
