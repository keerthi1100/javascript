const obj = {
    name: 'Keerthi',
}

const printName = {
    name:'Name of my is Keerthi C',
    printName: function(...age){
        console.log(this.name, ...age);
    }
}

// printName.printName.call(obj, 30);

// printName.printName.apply(obj, [44, 45]);

const printnamebind = printName.printName.bind(obj);
printnamebind(55);