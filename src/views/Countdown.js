import React from "react";

class CountDown extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   alert("me");
    // }, 2000);chỉ chạy 1 lần => dùng setInterval

    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.count !== this.state.count && this.state.count === 0) {
  //     if (this.timer) {
  //       clearInterval(this.timer);
  //     }
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === this.state.count && prevState === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        this.props.onTimeSup();
      }
    }
  }
  render() {
    return <h3>{this.state.count}</h3>;
  }
}

export default CountDown;
