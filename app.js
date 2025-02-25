// alert("Hello World!")

drinkOrder = (size, buttonName) => {
    let softDrinkLabel;
    switch(buttonName) {
        case "cola":
            return `You have ordered a ${size} of Cola`
        case "lemon":
            return `You have ordered a ${size} of Lemonade`
        case "orange":
            return `You have ordered a ${size} of Orangeade`
        default:
          // code block
      }

};

console.log(drinkOrder("small", "orange"));