import * as React from 'react';
import './AboutContainer.css';

class AboutContainer extends React.Component {
  public render() {
    return (
      <section className="about-container">
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
      </section>
    );
  }
}

export default AboutContainer;
