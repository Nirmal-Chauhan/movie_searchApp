import React from "react"
import axios from "axios"
import Card from "../Card/Card"
import styles from "./CardContainer.module.css"
class CardContainer extends React.Component{

    state={
movies:[],
search:"",
filteredMovies:[]
    }
componentDidMount(){
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res=>this.setState({movies:res.data.Search}))
    .catch(err=>console.log(err))
}
changeHandler=(e)=>{
let data=this.state.movies.filter((movie)=>movie.Title.toLowerCase().includes(e.target.value.toLowerCase()))
this.setState({search:e.target.value,filteredMovies:data} ,()=>console.log(this.state))
}
    
    render(){


        return(
            <div>

<div className={styles.inputDiv}>
    <input type="text" placeholder="Search for Movie Title" onChange={(e)=>this.changeHandler(e)}/>
</div>
<div className={styles.container}>
{
  this.state.filteredMovies.length === 0 && this.state.search === '' ?
        this.state.movies.map((movie) =><Card moviesData={movie}/>)
       : this.state.filteredMovies.length === 0 && this.state.search !== ''? <h1 >No record found !</h1> 
    : this.state.filteredMovies.map((movie, idx)=><Card moviesData = {movie} key={'user' + idx}/>)

}
    </div>
    
            </div>
        )
    }
}
export default CardContainer