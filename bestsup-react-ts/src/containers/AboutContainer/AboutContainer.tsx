import * as React from 'react';
import './AboutContainer.css';

interface IAboutContainerProps {
  scroller: number;
}

class AboutContainer extends React.Component<IAboutContainerProps, {}> {
  public render() {
    console.log(this.props);
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
            <div className="figure-container">
              <figure className="image-1" />
              <figure className="image-2" />
              <figure className="image-3" />
              <figure className="image-4" />
              <figure className="image-5" />
              <figure className="image-6" />
              <figure className="image-7" />
            </div>
          </div>
          <div className="content-container">
            <div className="section-content">
              <div className="gallery">
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
