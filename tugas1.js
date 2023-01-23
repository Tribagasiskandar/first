let deret = []

for(let i = 1; i <= 500; i++){
    const result = i + (i-1)
    deret.push(result)
}

class Deret {
    constructor(deret){
        this.hasilDeret = deret
    }
    deretIndex(array){
        return array.map(item => this.hasilDeret.indexOf(item))

    }
    sortDec(){
        return this.hasilDeret.sort((a,b)=> b-a)
    }
}

const deretUtama = new Deret(deret)
document.write(deretUtama.deretIndex([52, 55, 57, 68, 77]) + "<br>")
document.write(deretUtama.sortDec() + "<br>")