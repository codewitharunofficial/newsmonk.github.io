import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps={
      country: 'in',
      pageSize: 9,
      category : 'General'
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category:  PropTypes.string
    }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount(props) {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fe1a565e0d1466e96a56537d13a1a41&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handleNextClick = async (props) => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fe1a565e0d1466e96a56537d13a1a41&page= ${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading: false})
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePrevClick = async (props) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7fe1a565e0d1466e96a56537d13a1a41&page= ${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
      <>
        <div style={{ marginLeft: "5em" }}>
          <div className="container my-3">
            <h3
              style={{
                textDecoration: "underline 2px gray",
                textAlign: "center",
                color: "white",
              }}
            >
              News-Monk - Top Headlines
            </h3>
            <div className="text-center my-5">
          {this.state.loading && <Loader/>}
            </div>
            <div className="row my-2">
              {!this.state.loading && this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 60)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="container my-3"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-warning mx-3"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)}
            type="button"
            className="btn btn-success mx-3"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
