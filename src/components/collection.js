




                        <div>
                        <img src={`http://localhost:8000/uploads/recipes/${recipe.image}`} alt="" width="340" height="240"/>
                        <h5 >{recipe.RecipeName}</h5> 
                        <h5 >{recipe.created_at}</h5>
                        <h5 >{recipe.updated_at}</h5>
                        <h5 >{recipe.details}</h5>
                        <h5 >{recipe.Serving}</h5>
                        <h5 >{recipe.TakenTime}</h5>  
                        <h5 >{recipe.user_info.name}</h5> 
                        <h5 >{recipe.user_info.email}</h5> 
                        <h5 >{recipe.user_info.is_chef}</h5> 
                     
                        </div>