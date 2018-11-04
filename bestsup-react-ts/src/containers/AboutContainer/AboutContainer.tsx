import * as React from 'react';
import './AboutContainer.css';

interface IAboutContainerProps {
  scroller: number;
}

class AboutContainer extends React.Component<IAboutContainerProps, {}> {
  private figureRef = (element: HTMLDivElement): void => {
    if(element) {
      console.log(this.props.scroller);
      console.log(element.getBoundingClientRect());
    }
  }

  public componentDidMount() {
    // const figureEle = this.figureRef.current!;
    // const documentFigure = document.querySelector('div.figure-container')!;
    // if(figureEle) {
    //   console.log(this.figureRef);
    //   console.log(figureEle.clientHeight);
    //   console.log(figureEle.clientTop);
    //   console.log(figureEle.offsetHeight);
    //   console.log(figureEle.offsetTop);
    //   console.log(figureEle.scrollHeight);
    //   console.log(figureEle.scrollTop);
    //   console.log('=================');
    //   console.log(documentFigure.getBoundingClientRect());
    // }
  }

  public parallaxStyle(scroller: number) {
    if(scroller >= 240) {
      const maxRotateValue = -15;
      const rotateValue = scroller / -30;
      return ({
        transform: `translate(0px, 0px) rotateX(${rotateValue < maxRotateValue ? maxRotateValue : rotateValue}deg)`,
      })
    } else {
      return;
    }
  }

  public figureParallax(scroller: number, index: number) {
    if(scroller >= 240 && scroller <= 690) {
      const maxRotateValue = -45;
      const rotateValue = scroller / -10;
      return ({
        transform: `translate(0px, 0px) rotateY(${rotateValue < maxRotateValue ? maxRotateValue : rotateValue}deg)`,
      });
    } else if(scroller > 690 && scroller <= 3600) {
      return ({
        transform: `translate(${(scroller / 30) * index}px, 0px) rotateY(-45deg)`,
      });
    } else {
      return;
    }
  }

  public render() {
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
            <div className="figure-container" ref={this.figureRef} style={this.parallaxStyle(this.props.scroller)}>
              <figure className="image-1" style={this.figureParallax(this.props.scroller, 1)} />
              <figure className="image-2" style={this.figureParallax(this.props.scroller, 2)} />
              <figure className="image-3" style={this.figureParallax(this.props.scroller, 3)} />
              <figure className="image-4" style={this.figureParallax(this.props.scroller, 4)} />
              <figure className="image-5" style={this.figureParallax(this.props.scroller, 5)} />
              <figure className="image-6" style={this.figureParallax(this.props.scroller, 6)} />
              <figure className="image-7" style={this.figureParallax(this.props.scroller, 7)} />
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
