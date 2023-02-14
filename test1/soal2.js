let AscendingNew = []
let DescendingNew = []

const BubleSortAsc = (...newArray) => {
  for (let i = 0; i < newArray.length ; i++) {
    // looping per index
    for (let j = 0; j < newArray.length -i ; j++) {
      // per index cek
      if (newArray[j] > newArray[j+1]) {
        let temp = newArray[j]
        newArray[j] = newArray[j + 1]
        newArray[j + 1] = temp
      }
    }
  }
  console.log(newArray)
}

BubleSortAsc(9,2,1,4,3,6,5,8,7)

const BubleSortDesc = (...newArray) => {
  for (let i = 0; i < newArray.length ; i++) {
    // looping per index
    for (let j = 0; j < newArray.length -i ; j++) {
      // per index cek
      if (newArray[j] < newArray[j+1]) {
        let temp = newArray[j]
        newArray[j] = newArray[j + 1]
        newArray[j + 1] = temp
      }
    }
  }
  console.log(newArray)
}

BubleSortDesc(9,2,1,4,3,6,5,8,7)