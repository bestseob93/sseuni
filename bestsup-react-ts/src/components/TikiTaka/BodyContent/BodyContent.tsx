import * as React from 'react';

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
  console.log(node);
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }
  const children = node.childNodes;
  console.log(children);
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
  console.log(el);
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

export interface IBodyContentProps {
  tagName?: string,
  html?: string,
  onBlur?: () => void,
  onChange?: (evt: React.ChangeEvent) => void,
  className?: string,
  style?: object,
}

class BodyContent extends React.Component<IBodyContentProps, {}> {
  private el = React.createRef<HTMLElement>();
  private lastHtml: string;

  constructor(props: IBodyContentProps) {
    super(props);
    
    this.lastHtml = props.html || '';
  }
  
  public shouldComponentUpdate(nextProps: IBodyContentProps): boolean {
    // We need not rerender if the change of props simply reflects the user's edits.
    // Rerendering in this case would make the cursor/caret jump

    // Rerender if there is no element yet... (somehow?)
    if (!this.el) {
      return true;
    }

    // ...or if html really changed... (programmatically, not by user edit)
    if(this.el.current !== null && typeof nextProps.html !== 'undefined') {
      if (normalizeHtml(nextProps.html) !== normalizeHtml(this.el.current.innerHTML)) {
        return true;
      }
    }

    // Handle additional properties
    return this.props.tagName !== nextProps.tagName ||
      this.props.className !== nextProps.className ||
      JSON.stringify(this.props.style) !== JSON.stringify(nextProps.style);
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

  private onTextChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    if (!this.el) {
      return;
    }
    let text = '';
    if(this.el.current !== null) {
      text = this.el.current.innerHTML;
    }

    if (this.props.onChange && text !== this.lastHtml) {
      const evt = Object.assign({}, ev, {
        target: {
          value: text
        }
      });
      this.props.onChange(evt);
    }

    this.lastHtml = text;
  }

  public render() {
    return React.createElement(
      this.props.tagName || 'div',
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
