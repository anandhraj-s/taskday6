class UberPrice {
    constructor(traveledDistence) {
        this.traveledDistence = traveledDistence
    }
    price() {
        if (this.traveledDistence < 5) {
                return this.traveledDistence*50
        }
        else if (this.traveledDistence < 10) {
            return this.traveledDistence*30
        } else {
            if (this.traveledDistence < 20) {
                return this.traveledDistence*20
            } else if (this.traveledDistence > 20) {
                return this.traveledDistence*15
            }
        }
    }
}
let arun = new UberPrice(60)
console.log(`Uber price:Rs`,arun.price())




