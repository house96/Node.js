function Car(carNeme) {
    this.carNeme = carNeme || 'unknown name';
}

Car.prototype.logNeme = function() {
    console.log('Car name is: ', this.carNeme);
};

var bmw = new Car('BMW');
bmw.logNeme();