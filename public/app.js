let submitEntry = () => {

    let name = document.getElementById("name").value;
    let distilleryName = document.getElementById("distillery-name").value;
    let countryOfOrigin = document.getElementById("country-of-origin").value;
    let yearOfProd = document.getElementById("year-of-prod").value;

    console.log("you added", name, "made by", distilleryName, "from", countryOfOrigin, "and was made in", yearOfProd, "\n", "Enjoy");
}