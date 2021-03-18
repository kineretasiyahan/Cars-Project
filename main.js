class CarProject {
    numberOfWheels;
    engine;
    colorCar;
    constructor(_numberOfWheels, _engine, _colorCar) {
        this.numberOfWheels = _numberOfWheels;
        this.engine = _engine;
        this.colorCar = _colorCar;
    }
    string() {
        return `This number of weels is ${this.numberOfWheels} , and the engine is ${this.engine} , the color of car is ${this.colorCar} `
    }
    static engine(array) {
        let carsArray = array.sort((engineOne, engineTwo) => {
            return engineOne.engine - engineTwo.engine
        })
        return carsArray[carsArray.length - 1];

    }

}

class NisaanCar extends CarProject {
    constructor(_numberOfWheels, _engine, _colorCar) {
        super(_numberOfWheels, _engine, _colorCar);
    }

    NisaanString() {
        return `${super.string()} , and the name class is ${NisaanCar.name}`
    }
    nameCapsLock() {
        return `${KiaCar.name.toUpperCase()}`
    }
    get Name() {
        return `${this.nameCapsLock()}`;

    }
}
class KiaCar extends CarProject {
    constructor(_numberOfWheels, _engine, _colorCar) {
        super(_numberOfWheels, _engine, _colorCar);
    }
    KiaString() {
        return `${super.string()} and the name class is ${KiaCar.name}`
    }

}
class JeepCar extends CarProject {
    constructor(_numberOfWheels, _engine, _colorCar) {
        super(_numberOfWheels, _engine, _colorCar);
    }
    JeepString() {
        return `${super.string()} and the name class is ${JeepCar.name}`
    }

}

let objectOne = new NisaanCar(4, 1300, 'white')
let objecTwo = new KiaCar(6, 1400, 'black')
let objecThree = new JeepCar(4, 1200, 'red')
console.log(objectOne.NisaanString());
console.log(objecTwo.KiaString());
console.log(objecThree.JeepString());
console.log(objectOne.Name);
let objectArray = [objectOne, objecTwo, objecThree]
console.log(objectArray)
console.log(CarProject.engine(objectArray))



let objectForm = {
    Name: "",
    company: "",
    numberWeels: 0,
    numberEngine: 0
}

function toClick() {
    objectForm.Name = name1.value;
    objectForm.company = company.value
    objectForm.numberWeels = weels.value;
    objectForm.numberEngine = engine.value;
    tableCar.innerHTML += 
    `<tr>
    <td>${objectForm.Name }</td>
    <td>${objectForm.company }</td>
    <td>${objectForm.numberWeels }</td>
    <td>${objectForm.numberEngine }</td>
    </tr>`
}
