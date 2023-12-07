function quickSort(array, low, high) {
    if (low < high) {
        let pivotIndex = partition(array, low, high);
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1;
}

const array = [64, 25, 12, 22, 11];
const n = array.length;

quickSort(array, 0, n - 1);

console.log("Array ordenado:");
console.log(array);
