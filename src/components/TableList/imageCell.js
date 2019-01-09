import React, { Component } from 'react';

const PendingPool = {};
const ReadyPool = {};

export default class ImageCell extends Component {
  constructor(props) {
    super(props);
    this.loadImage = this.loadImage.bind(this);
    this.onLoadImage = this.onLoadImage.bind(this);
    this.state = {
      // eslint-disable-next-line
      ready: false,
    };
  }

  componentWillMount() {
    const { src } = this.props;
    this.loadImage(src);
  }

  componentWillReceiveProps(nextProps) {
    const { src } = this.props;
    const { src: nextSrc } = nextProps;
    if (nextSrc !== src) {
      this.setState({ src: null });
      this.loadImage(nextSrc);
    }
  }

  onLoadImage(src) {
    ReadyPool[src] = true;
    const { src: propsSrc } = this.props;
    if (src === propsSrc) {
      this.setState({
        src,
      });
    }
  }

  loadImage(src) {
    if (ReadyPool[src]) {
      this.setState({ src });
      return;
    }

    if (PendingPool[src]) {
      PendingPool[src].push(this.onLoadImage);
      return;
    }
    PendingPool[src] = [this.onLoadImage];

    const img = new Image();
    img.onload = () => {
      PendingPool[src].forEach(callback => {
        callback(src);
      });
      delete PendingPool[src];
      img.onload = null;
      // eslint-disable-next-line
      src = undefined;
    };
    img.src = src;
  }

  render() {
    const { src } = this.state;
    const style = src
      ? {
          backgroundImage: `url(${src})`,
          width: '70px',
          height: '70px',
          backgroundSize: 'cover',
        }
      : undefined;
    return <div className="exampleImage" style={style} />;
  }
}
