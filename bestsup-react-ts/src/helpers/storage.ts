export function setLocalStorage (data: any) {
  localStorage.setItem('auth', JSON.stringify(data))
}

export function getLocalStorage (): any {
  const data = localStorage.getItem('auth');
  if (data) {
    return JSON.parse(data);
  } else {
    return;
  }
}