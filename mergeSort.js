//Funcija za spojuvanje na dvete nizi
function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];

    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;  
        }else {
            results.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results
}

//Funkcija za sortiranje
export function mergeSort(arr){
    //Ako nizata e pomala ili ednakva na 1 nizata e sortirana avtomatski
    if (arr.length <= 1) return arr;
 

    let mid = Math.floor(arr.length/2);
    
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    //Vrakja nazad sortiranite nizi spoeni zaedno
    return merge(left, right);
}