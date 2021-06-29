export default function cleaner(tel) {
  let cleared = tel.replace(/[-()+ ]/g, '');
  if (!/^86/.test(cleared)) {
    if (/^8/.test(cleared)) {
      cleared = cleared.replace(/8/, '7');
    }
  }
  return `+${cleared}`;
}
