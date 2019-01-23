import * as React from 'react';
import './AboutContainer.css';

interface IAboutContainerState {
  scroller: number;
  ticking: boolean;
}

class AboutContainer extends React.Component<{}, IAboutContainerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      scroller: 0,
      ticking: false,
    };
  }

  scrollTop: number = 0;

  figureRef = (element: HTMLDivElement): void => {
    if(element) {
      console.log(this.state.scroller);
      console.log(element.getBoundingClientRect());
    }
  }

  componentDidMount(): void {
    this.setInitValues();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillMount(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

  setInitValues = (): void => {
    const documentElement: HTMLElement | null = document.documentElement;
    if(!documentElement) {
      return;
    }

    const scrollTop: number = documentElement.scrollTop || window.scrollY;
    this.scrollTop = scrollTop;
    // scrollTop = $window.scrollTop();
    // windowHeight = $window.height();
    // windowWidth = $window.width();
    this.converPropsToPx();
    // buildPage();
  }

  converPropsToPx = () => {
    console.log('2');
  }

  onScroll = (): void => {
    this.requestTick();
  }

  requestTick = (): void => {
    if(!this.state.ticking) {
      this.setState({
        ticking: true,
      });

      requestAnimationFrame(this.update);
    }
  }

  update = (): void => {
    const documentElement: HTMLElement | null = document.documentElement;
    if(!documentElement) {
      return;
    }

    const scrollTop = documentElement.scrollTop;
    this.setState(() => {
      return {scroller: scrollTop, ticking: false};
    });
  }

  computeParallaxValue(scrollPosition: number, startPosition: number, duration: number, startValue: number, endValue: number, index: any): number {
    const invert = startValue > endValue;
    let maxValue = endValue;
    let minValue = startValue;

    if (invert) {
      maxValue = startValue;
      minValue = endValue;
    }

    let percentage: number = ((scrollPosition - startPosition) / duration);

    if (percentage > 1) {
      percentage = 1;
    } else if (percentage < 0) {
      percentage = 0;
    }

    let value: number = percentage * (maxValue - minValue);

    if (invert) {
      value = maxValue - value;
    } else {
      value = value + minValue;
    }

    const rotateValue: number = parseFloat(value.toFixed(3));
    if(typeof index !== 'undefined') {
      return rotateValue * index * 0.5;
    } else {
      return rotateValue;
    }
  }

  parallaxStyle(scroller: number) {
    const computedValue = this.computeParallaxValue(scroller, 240, 90, 0, -15, undefined);
    if(scroller >= 240) {
      return ({
        transform: `translate(0px, 0px) rotateX(${computedValue}deg)`,
      });
    } else {
      return;
    }
  }

  figureParallax(scroller: number, index: number) {
    const computedValue = this.computeParallaxValue(scroller, 240, 260, 0, -45, undefined);
    // const vh = window.innerHeight * 0.01; // vh 값
    const duration = 75 + ((11 - index) / 11) * 100;
    // const duration = (40 * vh) + (3.5 * vh) + (7 - index);
    // console.log(duration);
    const styleEndValue = 73 + (index - 3) + 121.5; // 각 이미지의 최종 translateX 값

    const translateValue = this.computeParallaxValue(scroller, 500, duration, 0, styleEndValue, index);
    // console.log(translateValue);

    if(scroller >= 240 && scroller <= 500) {
      return ({
        transform: `translate(0px, 0px) rotateY(${computedValue}deg)`,
      });
    } else if(scroller > 500 && scroller <= 3600) {
      return ({
        transform: `translate(${translateValue}px, 0px) rotateY(-45deg)`,
        opacity: 1 - index * 0.043,
      });
    } else {
      return;
    }
  }

  render(): React.ReactNode {
    return (
      <section className="section">
        <div className="section-content">
          <div className="intro-block">
            <h2>Lee Hwan Sup</h2>
            <p>
              이환섭 이환섭 이환섭
              이환섭 이환섭 이환섭
              이환섭 이환섭 이환섭
              이환섭 이환섭 이환섭
              이환섭 이환섭 이환섭
              이환섭 이환섭 이환섭
            </p>
          </div>
        </div>
        <div className="about-container">
          <div className="sticky-imgs">
            <div className="figure-container" ref={this.figureRef} style={this.parallaxStyle(this.state.scroller)}>
              <figure className="image-1" style={this.figureParallax(this.state.scroller, 1)} />
              <figure className="image-2" style={this.figureParallax(this.state.scroller, 2)} />
              <figure className="image-3" style={this.figureParallax(this.state.scroller, 3)} />
              <figure className="image-4" style={this.figureParallax(this.state.scroller, 4)} />
              <figure className="image-5" style={this.figureParallax(this.state.scroller, 5)} />
              <figure className="image-6" style={this.figureParallax(this.state.scroller, 6)} />
              <figure className="image-7" style={this.figureParallax(this.state.scroller, 7)} />
              <figure className="image-8" style={this.figureParallax(this.state.scroller, 8)} />
              <figure className="image-9" style={this.figureParallax(this.state.scroller, 9)} />
              <figure className="image-10" style={this.figureParallax(this.state.scroller, 10)} />
              <figure className="image-11" style={this.figureParallax(this.state.scroller, 11)} />
            </div>
          </div>
          <div className="content-container">
            <div className="section-content">
              <div className="gallery">
                <div className="gallery-item-1">
                  <h3>hi</h3>
                </div>
                <div className="gallery-item-1">
                  <h3>hi</h3>
                </div>
                <div className="gallery-item-1">
                  <h3>hi</h3>
                </div>
                <div className="gallery-item-1">
                  <h3>hi</h3>
                </div>
                <div className="gallery-item-1">
                  <h3>hi</h3>
                </div>
                <div className="gallery-item-1">
                  <h3>hi</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContainer;
