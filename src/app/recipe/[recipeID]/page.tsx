import React from "react"
import RecipeLayout from "@/components/RecipeLayout/RecipeLayout";

 const RecipeName: React.FC<{params:{recipeID:string}}>= async ({params}:{params:{recipeID:string}})=>{
    let name = params.recipeID
    let url = `https://api.unsplash.com/search/photos?page=1&query=${name}&client_id=M5iC4zz7rxyf67Sis2WVPA0UzfvBa1O5S-dtwTGVzL8`
    let res = await fetch(url)
    let data = await res.json()
    
    let finalImgUrl = data.results[0].urls.full
    
    return <>
     <RecipeLayout title={`${params.recipeID}`} imgUrl={finalImgUrl}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic minima suscipit, unde alias repudiandae, enim odio blanditiis eaque atque ipsam maxime voluptate! Sapiente laborum a quae, illo dolores libero.
    Voluptates doloribus aperiam quo fugit vel nemo facilis modi, obcaecati ex rerum libero unde minima tempore harum incidunt vitae voluptatibus aspernatur cumque delectus iste placeat dicta! At similique id numquam!
    Consequatur, quos culpa natus aliquid repudiandae aspernatur. Provident amet libero eligendi optio perspiciatis? Dicta, minima explicabo, a dolorum excepturi enim cupiditate, distinctio provident sit modi vel nostrum doloribus aliquid quisquam!
    Quia, repudiandae rerum labore accusamus nemo assumenda asperiores ad necessitatibus error doloremque minima inventore. Perspiciatis nulla dolor consequatur provident quas cum minus suscipit corrupti necessitatibus tempora, harum, voluptates officia incidunt.
    Sapiente velit, fugit, aspernatur, quos praesentium rerum non incidunt facilis nam ipsam amet! Ipsam possimus at voluptatibus quas, rem sequi totam nemo, corrupti commodi similique saepe quia laboriosam omnis dolores.
     </RecipeLayout>
    </>
}

export default RecipeName