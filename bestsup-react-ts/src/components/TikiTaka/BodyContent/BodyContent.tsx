import * as React from 'react';
import './BodyContent.css';
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

export interface IBodyContentProps {
  tagName?: string,
  html?: string,
  onBlur?: () => void,
  onChange?: (evt: React.SyntheticEvent) => void,
  className?: string,
  style?: object,
  toggleToolBar: () => void,
  setToolBarPosition: (newLeft: number, newTop: number) => void,
  toggleInlineMenu: (value: boolean) => void,
  setInlineMenuPosition: (positionY: number) => void,
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

  componentDidMount(): void {
    document.addEventListener('mouseup', this.getSelectedText);
    document.addEventListener('mousedown', this.removeSelectedAndToolBar);
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.removeSelectedAndToolBar);
  }

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
  }

  componentWillUnmount(): void {
    document.removeEventListener('mouseup', this.getSelectedText);
    document.removeEventListener('mousedown', this.removeSelectedAndToolBar);
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.removeSelectedAndToolBar);
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

  removeSelectedAndToolBar = (ev: KeyboardEvent) => {
    if (ev.keyCode !== 8) { // backspace 아닌 경우
      if (window.getSelection) {
        if (window.getSelection().toString().length > 0) {
          this.props.toggleToolBar();
          window.getSelection().removeAllRanges();
          // TODO: selected 된 후에 키보드 입력 시 작동안함
          const el = this.getEl();
          if (!el) {
            return;
          }
          el.focus();
        }
      }
    }
  }

  handleKeyUp = (ev: KeyboardEvent): void => {
    if (ev.keyCode === 16) {
      this.getSelectedText(ev);
    }
  }

  getSelectedText = (ev: MouseEvent | KeyboardEvent) => {
    ev.preventDefault();
    if (typeof window.getSelection !== 'undefined') {
      const selected = window.getSelection(); // 드래그 셀렉트 된 영역
      const selectedString = selected.toString(); // 해당 영역 텍스트 구하기
      if (selected.rangeCount > 0) {
        const parentEle = selected.getRangeAt(0).startContainer.parentElement; // 영역의 부모 엘리먼트
        const parentEleOffsetLeft = parentEle ? parentEle.offsetLeft : 0; // 부모 엘리먼트의 Left 값

        const lengthOfSelectedString = selectedString.length; // 영역 내 텍스트 수
        const position = this.getSelectedPosition(selectedString, lengthOfSelectedString, parentEleOffsetLeft);
        if (lengthOfSelectedString > 0) {
          this.props.toggleToolBar();
          this.props.setToolBarPosition(position.x, position.y);
        }
      }
    }
  }

  getSelectedPosition = (text: string, selectedPosition: number, parentEleOffsetLeft: number) => {
    // selected 된 부분에 가짜 span을 만들어 XY값 구하기
    const fakeSpan = document.createElement('span');
    fakeSpan.textContent = text.substr(0, selectedPosition);
    document.body.appendChild(fakeSpan);
    const spanX = fakeSpan.offsetLeft;
    const spanY = fakeSpan.offsetTop;
    document.body.removeChild(fakeSpan);
    return {
      x: parentEleOffsetLeft + spanX,
      y: spanY,
    };
  }

  onFocus = () => {
    const el = this.getEl();
    if (!el) {
      return;
    }

    if (el.innerHTML === '') {
      el.innerHTML = '<p><br/></p>';
    }
  }

  onEnterKeyPress = (ev: React.KeyboardEvent): void => {
    if (ev.charCode === 13) {
      if (ev.currentTarget.lastElementChild) {
        const lastParagraphEle = ev.currentTarget.lastElementChild; // contentEditable의 마지막 Paragraph
        const positionY: number = lastParagraphEle.getBoundingClientRect().top; // 마지막 paragraph의 top 포지션
        const inlineMenuPositionY: number = positionY - 95;
        const SHOW_INLINE_MENU: boolean = true;

        this.props.toggleInlineMenu(SHOW_INLINE_MENU); // 인라인 메뉴 보이기
        this.props.setInlineMenuPosition(inlineMenuPositionY); // 인라인 메뉴 포지션 Y 값 셋팅
      }
    }
  }

  render() {
    const { tagName, html } = this.props;
    return React.createElement(
      tagName || 'div',
      {
        className: 'post__content',
        ref: this.el,
        onInput: this.onTextChange,
        onBlur: this.props.onBlur || this.onTextChange,
        onFocus: this.onFocus,
        onKeyPress: this.onEnterKeyPress,
        contentEditable: true,
        placeholder: 'Enter text here...',
        dangerouslySetInnerHTML: { __html: html }
      },
      this.props.children);
  }
}

export default BodyContent;
