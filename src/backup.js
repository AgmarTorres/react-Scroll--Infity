import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {connect} from 'react-redux'

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {
  state = {
    repositories:[],
    items: [],
    page: 1,
    hasMore: true
  };

  componentDidMount(){
    fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${this.state.page}`)
    .then(response => response.json())
    .then(
      items => this.setState({repositories : items, items : items.items  },console.log(this.state.items.items))    
      )
  }

  fetchMoreData = () => {
   /* this.setState({page: this.state.page + 1})
    console.log(this.state.page)
    setTimeout(() => {  
      fetch(`https://api.github.com/search/repositories?q=language:Javascript&sort=stars&page=${this.state.page}`)
      .then(response => response.json())
      .then(
        items => this.setState({items: this.state.items.concat(items.items) })
      )
    }, 500);*/
  };

  render() {
    console.log(this.state.repositories)
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        {
          this.state.items.length ?
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            >
            {this.state.items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
          :
          null
        }
      </div>
    );
  }
}


export default App
