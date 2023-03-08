function bubbleSort(array) {
    let sortedArray = []
    let unsorted = array.slice()
    while (unsorted.length) {
        let currMin = Math.min(...unsorted)
        sortedArray.push(currMin)
        unsorted.splice(unsorted.indexOf(currMin), 1)
    }
    return sortedArray
}