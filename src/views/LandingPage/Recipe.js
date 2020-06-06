import React , {Component} from 'react';
import Button from "@material-ui/core/Button";




class Recipe extends Component {
 

  constructor(props){
    super(props);
    this.state={
      recipes:[],
      isLoaded:false,
    }
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/recipes')
    .then(res=> res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        recipes:json,
      })

    });
  }
  render(){
           var {isLoaded,recipes}=this.state;
           if(!isLoaded){
             return <div>Loading ......</div>
           }
           else{

  

    return (
        <div className="Recipe">
{/*           
            <Button variant="contained" color="primary">
            Hello World</Button>
            <ul>
            {recipes.map(recipe=>(
              <li key={recipe.id}>
            {recipe.RecipeName}
            {recipe.image}
            </li>
            ))};


</ul> */}

o

        </div>

);
}
  }
}


export default Recipe;