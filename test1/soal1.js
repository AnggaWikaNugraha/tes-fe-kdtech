let newArray = []

const fishBash = ( number ) => {
  createArrayFromNumber(number)
  for (let i = 0; i < newArray.length; i++) {
    // switch (newArray[i]) {
    //   case newArray[i] % 3 === 0:
    //     console.log('fish')
    //     break;
    
    //   default:
    //     console.log(newArray[i])
    //     break;
    // }
    if (newArray[i] % 15 === 0) {
      console.log('fish bash')
    } else if (newArray[i] % 5 === 0) {
      console.log('bash')
    } else if (newArray[i] % 3 === 0) {
      console.log('fish')
    } else {
      console.log(newArray[i])
    }
  }
}

const createArrayFromNumber = (number) => {

  // create array from number
  for (let i = 0; i < number; i++) {
    newArray.push(i + 1)
  }
}

// masukan angka disini
fishBash(30);