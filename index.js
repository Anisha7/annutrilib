// get nutrition info for one ingredient
async function getNutrition(data) {
    await fetch(`https://api.edamam.com/api/nutrition-details?app_id=96d0cce3&app_key=0b92e124b4e2945850af5faec0553fe2`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}

