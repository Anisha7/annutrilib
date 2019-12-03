// get nutrition info for one ingredient
async function getRecipeNutrition(app_id, app_key, data) {
    // await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

    try {
        const res = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()
        return json
    } catch(err) {
        return err
    } 
}

// returns a json promise or error
async function getIngredientNutrition(app_id, app_key, ingr) {
    ingr = ingr.replace(/ /g, "%20")
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${ingr}`
    try {
        const res = await fetch(url)
        const json = await res.json()
        return json
    } catch(err) {
        return err
    } 
}

