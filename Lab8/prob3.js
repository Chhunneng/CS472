(async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    if (res.ok) {
        const data = await res.json();
        console.log(data.recipes.map((recipe) => recipe.name));
    }
})();
