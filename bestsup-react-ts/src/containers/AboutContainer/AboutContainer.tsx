import * as React from 'react';
import './AboutContainer.css';
import Plx from 'components/Plx';

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

  componentDidMount() {
    this.setInitValues();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillMount() {
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

  parallaxStyle(scroller: number) {
    if(scroller >= 300) {
      const maxRotateValue = -15;
      const rotateValue = scroller / -30;
      return ({
        transform: `translate(0px, 0px) rotateX(${rotateValue < maxRotateValue ? maxRotateValue : rotateValue}deg)`,
      });
    } else {
      return;
    }
  }

  figureParallax(scroller: number, index: number) {
    if(scroller >= 240 && scroller <= 690) {
      const maxRotateValue = -45;
      const rotateValue = scroller / -10;
      const correctValue = parseInt(rotateValue.toFixed(2), 10);
      console.log(typeof correctValue);
      return ({
        transform: `translate(0px, 0px) rotateY(${correctValue < maxRotateValue ? maxRotateValue : rotateValue}deg)`,
      });
    } else if(scroller > 690 && scroller <= 3600) {
      return ({
        transform: `translate(${(scroller / 30) * index}px, 0px) rotateY(-45deg)`,
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <section className="section">
        <div className="section-content">
          <Plx>
            hi
          </Plx>
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
