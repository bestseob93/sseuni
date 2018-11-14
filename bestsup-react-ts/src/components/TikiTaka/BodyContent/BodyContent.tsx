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
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }
  const children = node.childNodes;

  for (let i = children.length - 1; i >= 0; i--) {
    const textNode = findLastTextNode(children[i]);
    return textNode;
  }
  return null;
}

function replaceCaret(el: HTMLElement) {
  // 엘리먼트 제일 뒤에 위치
  const target = findLastTextNode(el);
  // 엘리먼트가 포커스 되지 않았을 때는 이동시키지 않음
  const isTargetFocused = document.activeElement === target;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(target, target.nodeValue.length); // setStartAfter 도 있음.
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
  onChange?: (evt: React.SyntheticEvent) => void,
  className?: string,
  style?: object,
}

// TODO: 엔터 쳐서 공백 만들었을 때 다시 포커싱 하면 빈 <p></p>로 포커싱 되게 하기
class BodyContent extends React.Component<IBodyContentProps, {}> {
  constructor(props: IBodyContentProps) {
    super(props);

    this.lastHtml = props.html || '';

    document.execCommand('defaultParagraphSeparator', false, 'p');
  }

  el = React.createRef<HTMLElement>();
  lastHtml: string;

  getEl = () => this.el.current;

  shouldComponentUpdate(nextProps: IBodyContentProps): boolean {
    const el = this.getEl();
    if (!el) {
      return true;
    }

    if (normalizeHtml(nextProps.html || '') !== normalizeHtml(el.innerHTML)) {
      return true;
    }

    return this.props.tagName !== nextProps.tagName ||
      this.props.className !== nextProps.className ||
      JSON.stringify(this.props.style) !== JSON.stringify(nextProps.style);
  }

  componentDidUpdate() {
    const el = this.getEl();

    if(!el) {
      return;
    }

    // 수동으로 컴포넌트 업데이트
    if (this.props.html !== el.innerHTML) {
      this.lastHtml = this.props.html || '';
      el.innerHTML = this.lastHtml;
      console.log(el);
    }

    replaceCaret(el);
  }

  onTextChange = (ev: React.SyntheticEvent<HTMLInputElement>): void => {
    const el = this.getEl();
    if (!el) {
      return;
    }

    const text = el.innerHTML;

    if (this.props.onChange && text !== this.lastHtml) {
      const newEvt = Object.assign({}, ev, {
        target: {
          value: text
        }
      });
      this.props.onChange(newEvt);
    }

    this.lastHtml = text;
  }

  render() {
    const { tagName, html, ...props } = this.props;
    return React.createElement(
      tagName || 'div',
      {
        ...props,
        ref: this.el,
        onInput: this.onTextChange,
        onBlur: this.props.onBlur || this.onTextChange,
        contentEditable: true,
        dangerouslySetInnerHTML: { __html: html }
      },
      this.props.children);
  }
}

export default BodyContent;
