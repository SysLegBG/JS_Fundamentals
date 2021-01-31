function cats(cats){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);            
        }
    }

    cats.forEach(catInfo => {
        let [name, age] = catInfo.split(" ");
        let cat = new Cat(name, age);
        cat.meow()
    });
}

cats(['Mellow 2', 'Tom 5'])