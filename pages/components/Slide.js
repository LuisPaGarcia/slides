import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  height: 50px;

  width: 25%;

  background-color: red;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

const ProgressDyn = styled.div.attrs({
  style: props => ({
    width: props.progress
  })
})`
  position: fixed;
  height: 10px;
  background-color: red;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actual: 0,
      progress: props.initial
    };

    this.setActualProgress = this.setActualProgress.bind(this);
  }

  setActualProgress(slideActual) {
    let totalSlides = this.props.titles.length;
    let percentage = slideActual / totalSlides * 100;
    console.log(slideActual, totalSlides, percentage);
    this.setState({ progress: percentage });
  }
  componentDidMount() {
    document.addEventListener("keydown", event => {
      const keyName = event.key;

      if (keyName == "ArrowLeft" && this.state.actual !== 0) {
        this.setState({ actual: this.state.actual - 1 }); //window.location = `/${this.props.prev}`;
        let actualSlide = this.state.actual + 1;
        this.setActualProgress(actualSlide);
      }
    });

    document.addEventListener("keydown", event => {
      const keyName = event.key;
      if (
        keyName == "ArrowRight" &&
        this.state.actual !== this.props.titles.length - 1
      ) {
        this.setState({ actual: this.state.actual + 1 }); //window.location = `/${this.props.post}`;
        let actualSlide = this.state.actual + 1;
        this.setActualProgress(actualSlide);
      }
    });
  }

  render() {
    const DynamicPara = this.props.content[this.state.actual].map(
      (element, index) => {
        return (
          <p className="para" key={index}>
            {element}
          </p>
        );
      }
    );

    return (
      <div>
        <Head>
          <title>Grupo 4 UMG {this.props.titles[this.state.actual]}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>
          {`
          *{
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
          }

          h1{
            font-size:3em;
            color:white;
          }

            .para{
              font-size:2em;
              color:white;
            }
            body{
              font-famiy:Roboto;
              background-color: black;
              margin-bottom:50px;
            }
            .content {
              width: 80%;
              height: 675px;
              background-color: black;

              color: white
              text-align: center;
              vertical-align: middle;
              line-height: 35px

              position: absolute; /*it can be fixed too*/
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;

              /*this to solve "the content will not be cut when the window is smaller than the content": */
              max-width: 100%;
              max-height: 100%;
              overflow: auto;
            }
          `}
        </style>
        <div className="content">
          <h1> {this.props.titles[this.state.actual]}</h1>
          {DynamicPara}

          <ProgressDyn progress={this.state.progress + "%"}>DIV</ProgressDyn>
        </div>
      </div>
    );
  }
}

export default Index;
