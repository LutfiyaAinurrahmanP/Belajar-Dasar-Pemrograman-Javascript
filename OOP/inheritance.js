class SmartPhone {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class iOS extends SmartPhone {
    airDrop() {
        console.log(`iOS have a behavior AirDrop`);
    }
}

class Android extends SmartPhone {
    splitscreen() {
        console.log(`Android have a split screen`);
    }
}

const ios = new iOS('Black', 'A', '12 Pro Max');
const android = new Android('White', 'B', 'Galaxy S21');

ios.charging();
ios.airDrop();

android.charging();
android.splitscreen();

