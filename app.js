// alert("Hello World!")

drinkOrder = (size, buttonName) => {
    let softDrinkLabel;
    switch(buttonName) {
        case "cola":
            return `You have ordered a ${size} of Cola`
            break;
        case "lemon":
            return `You have ordered a ${size} of Lemonade`
            break;
        case "orange":
            return `You have ordered a ${size} of Orangeade`
            break;
        default:
          // code block
      }

};

console.log(drinkOrder("small", "orange"));