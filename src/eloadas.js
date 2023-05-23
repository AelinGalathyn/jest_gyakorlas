class Eloadas {
    #foglalasok;
    constructor(sorokSzama, helyekSzama) {
        if (sorokSzama <= 0 || helyekSzama <= 0){
            throw new Error("Érvénytelen bemenet!");
        }
        else{
            this.#foglalasok = [];
            for (var i = 0; i < sorokSzama; i++) {
                var row = [];
                
                for (var j = 0; j < helyekSzama; j++) {
                  row.push(false); 
                }
                this.#foglalasok.push(row);
            }
        }
    }

    lefoglal(){
        for (let i = 0; i < this.#foglalasok.length; i++) {
            for (let j = 0; j < this.#foglalasok[i].length; j++) {
                if (!this.#foglalasok[i][j]){
                    this.#foglalasok[i][j] = true;
                    return true;
                }
            }
        }
        return false;
    }

    getSzabadhelyek() {
        let szabad = 0;
        for (let i = 0; i < this.#foglalasok.length; i++) {
            for (let j = 0; j < this.#foglalasok[i].length; j++) {
                if(!this.#foglalasok[i][j]){
                    szabad += 1;
                }
            }
        }
        return szabad;
    }

    getTeli() {
        for (let i = 0; i < this.#foglalasok.length; i++) {
            for (let j = 0; j < this.#foglalasok[i].length; j++) {
                if(!this.#foglalasok[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    foglalt(sorSzam, helySzam){
        if(sorSzam<=0 || helySzam<=0 || sorSzam>this.#foglalasok.length || helySzam>this.#foglalasok[0].length){
            throw new Error("Érvénytelen bemenet!");
        }
        else{
            return this.#foglalasok[sorSzam-1][helySzam-1];
        }
    }
}


module.exports = Eloadas;