class SelectionSort {
    #array = [];

    constructor(array) {
        this.#array = array;
    }

    sort() {
        let n = this.#array.length;

        for(let i=0; i<n; i++) {
            let min = i;

            for(let j=i+1; j<n; j++) {
                if(this.#array[j] < this.#array[i]) {
                    min = j
                }
            }

            if(min != i) {
                let temp = this.#array[min];
                this.#array[min] = this.#array[i];
                this.#array[i] = temp;
            }
        }
    }

    print() {
        console.log(this.#array);
    }
}

let a = new SelectionSort([9,6,71,24,9,-1,-50]);
a.sort();
a.print();