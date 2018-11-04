import * as React from 'react';

export interface IBodyContentProps {
  tagName?: string,
  html?: string,
  onBlur?: () => void,
  onChange?: () => void,
  className?: string,
  style?: object,
}
// Disable contentEditAble Warning
console.error = (function() {
  const error = console.error

  return function (exception: any) {
      if ((exception + '').indexOf('Warning: A component is `contentEditable`') !== 0) {
          error.apply(console, arguments)
      }
  }
})();
function normalizeHtml(str: string): string {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' '); // space 했을 때 유니코드나 nbsp 값 ' '로 치환
}

function findLastTextNode(node: Node) : Node | null {
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }
  const children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i--) {
    const textNode = findLastTextNode(children[i]);
    if (textNode !== null) {
      return textNode;
    }
  }
  return null;
}

function replaceCaret(el: any) {
  // Place the caret at the end of the element
  const target = findLastTextNode(el);
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === target;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(target, target.nodeValue.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    if (el instanceof HTMLElement) {
      el.focus();
    }
  }
}

class BodyContent extends React.Component<IBodyContentProps, {}> {
  private el = React.createRef<HTMLElement>();
  private lastHtml: string;

  constructor(props: IBodyContentProps) {
    super(props);
    
    this.lastHtml = props.html || '';
  }
  

  public componentDidUpdate() {
    if (this.el.current !== null) {
      console.log(this.el);
      // Perhaps React (whose VDOM gets outdated because we often prevent
      // rerendering) did not update the DOM. So we update it manually now.
      if (this.props.html !== this.el.current.innerHTML) {
        this.lastHtml = this.props.html || '';
        this.el.current.innerHTML = this.lastHtml;
      }
      replaceCaret(this.el);
    }
  }

  private getText(el: HTMLElement): string {
    return normalizeHtml(el.innerHTML);
  }

  private onTextChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    if (!this.el) {
      return;
    }

    const text = this.getText(ev.target);

    if (this.props.onChange && text !== this.lastHtml) {
      this.props.onChange();
    }

    this.lastHtml = text;
  }

  public render() {
    return React.createElement(
      this.props.tagName || 'p',
      {
        ...this.props,
        ref: this.el,
        onInput: this.onTextChange,
        onBlur: this.props.onBlur || this.onTextChange,
        contentEditable: true,
        dangerouslySetInnerHTML: { __html: this.props.html }
      },
      this.props.children);
  }
}

export default BodyContent;
