export function findLastNode(parentNode: any): any {
  const arrayOfParagraphs = Array.from(parentNode.children);
  const lastNode = arrayOfParagraphs[arrayOfParagraphs.length - 1];

  return lastNode;
}

export function appendFirstChild(parentNode: any): any {
  const firstChild = document.createElement('p');
  firstChild.innerHTML = '<br />';

  parentNode.appendChild(firstChild);

  return firstChild;
}
