import React from "react"
import styles from "./Card.module.css"
class Card extends React.Component{
    render(){

        const {moviesData}=this.props
        return(
            <div className={styles.container}>
<div className="imgDiv">
    <img src={moviesData.Poster} alt={`${moviesData.imdbID}`}/>
</div>

<div className={styles.content}>
<div>
    <p>Movie: {moviesData.Title}</p>
</div>
<div>
    <p>Released: {moviesData.Year}</p>
</div>
</div>


<div>
    <p></p>
</div>


            </div>
        )
    }
}

export default Card