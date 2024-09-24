class CoffeMachine {
    // #temperature = 90;

    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        // this.#temperature = this.#defaultTemperature();
        this._temperature = 90

        // penambahan _ di variabel untuk menandakan bahwa
        // nilai temperature tidak dapat diubah
    }

    set temperature(temperature) {
        console.log('Temperature tidak dapat diubah');
    }

    get temperature() {
        // return this.#temperature;
        return this._temperature;
    }

    // nonaktifkan jika menggunakan _
    // #defaultTemperature(){
    //     return 90;
    // }
}

const coffe = new CoffeMachine(10);
console.log('Sebelum diubah', coffe.temperature);

// data tidak dapat digunakan karena bersifat private
// coffe.#temperature = 100 
coffe.temperature = 100;
console.log('Sesudah diubah:', coffe.temperature);