// alert("Hello World!")

drinkOrder = (size, buttonName) => {
    let softDrinkLabel;
    switch(buttonName) {
        case "cola":
            softDrinkLabel = "Cola"
            break;
        case "lemon":
            softDrinkLabel = "Lemonade"
            break;
        case "orange":
            softDrinkLabel = "Orangeade"
            break;
        default:
          // code block
      }
      return `You have ordered a ${size} of ${softDrinkLabel}`

};

console.log(drinkOrder("large", "cola"));