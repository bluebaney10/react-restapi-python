import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        }
    }

    componentDidMount() {
      var xhttp = new XMLHttpRequest();
      var self = this;
      
      xhttp.onreadystatechange = function(e){
        console.log(this);
        if (xhttp.readyState === 4 && xhttp.status === 200){
          console.log("ok, response :", this.response);
          self.setState({
            posts: JSON.parse(this.response)
          });
        }
      }
      xhttp.open("get", "https://jsonplaceholder.typicode.com/users", true);
      xhttp.send();
    }

    render() {
      let postsLoaded = this.state.posts.length > 0;
      return(
        postsLoaded ?
          <ul>
          {
            this.state.posts.map(
              post => {
                return <li>{ post.email }</li>;
              })
          }
          </ul>
          :
          <div>Loading...</div>
      );
    }
}

export default App;
