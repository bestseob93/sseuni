export function fixedEncodeURI(str: string = ''): string {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']').replace(/&nbsp;|\u202F|\u00A0|%20/g, '-');
}
