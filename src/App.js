import axios from "axios";
import React from "react";
import Movie from "./Movie"


class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const  {
      data:{
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    
    this.setState({isLoading:false, movies: movies})
  }

  componentDidMount(){
      this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (<div> 
        <h4>{isLoading ? "Loading" : movies.map(item=>{
          return <Movie key={item.id} id={item.id} year={item.year} title={item.title} summary={item.summary} poster={item.medium_cover_image}/>
        })}</h4>
       </div>)
  }
}

export default App;
