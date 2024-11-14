//Declaro los valores a tipar con un TYPE // declare a value w/a type

type Result = "Victoria" | "Derrota";
//creo un estado // create a state
export const state = {
  pcChoice: "",
  matchCounter: { pc: 0, me: 0 }, 
  listeners: [],
  results: [] as Result[],

  //obtengo el resultado
  getResults: function () {
    return this.results;
  },

  //funcion donde la pc escoge entre p,p o t // function where the pc chooses between r,p or s
  pcSelectChoice: function () {
    //buscar un numero aleatorio entre 0 y 2 // search a aleatory number between 0 and 2
    const ppot = Math.floor(Math.random() * 3);
    if (ppot === 0) {
      // si mi numero aleatorio es x entonces la eleccion es... // if my aleatory number is x so the election is
      this.pcChoice = "piedra";
    } else if (ppot === 1) {
      this.pcChoice = "papel";
    } else if (ppot === 2) {
      this.pcChoice = "tijera";
    }
    console.log("PC ESCOGE ", this.pcChoice);
  },

  //funcion donde el usuario escoge entre p,p o t // function where the user chooses between r,p or s
  selectChoice: function (option) {
    
    //llamo a la eleccion PC // call to pc election
    this.pcSelectChoice();
    this.processResult(option)
    console.log("usuario elige", option);

    this.listeners.forEach((callback) => callback(option));
    
  },

  subscribe: function (listener:Function) {
    this.listeners.push(listener);
  },

  //manejar victoria/derrota // handle victory or lose
  handleVictory: function(result:Result){
    if (result == "Victoria") {
      this.results = "Victoria";
       this.matchCounter.me++
    }else if(result == "Derrota"){
      this.results = "Derrota";
        this.matchCounter.pc++
    }else{
        console.log("empate");
        
    }
  },

  //procesar resultado // process results
  processResult: function (election) {
    if (election === this.pcChoice) {
      console.log("empate");
    } else if (election == "piedra") {
      if (this.pcChoice == "papel") {
        
        console.log("Derrota");
        this.handleVictory("Derrota");
        console.log(this.matchCounter);
      } else if (this.pcChoice == "tijera") {
        this.handleVictory("Victoria")
        
        console.log(this.matchCounter);
      }
    } else if (election == "papel") {
      if (this.pcChoice == "tijera") {
        this.handleVictory("Derrota");
        console.log(this.matchCounter);
        console.log("Derrota");
      } else if (this.pcChoice == "piedra") {
        this.handleVictory("Victoria");
        console.log(this.matchCounter);
        console.log("Victoria");
      }
    } else if (election == "tijera") {
      if (this.pcChoice == "papel") {
        this.handleVictory("Derrota");
        console.log(this.matchCounter);
        console.log("Derrota");
      } else if (this.pcChoice == "piedra") {
        this.handleVictory("Victoria");
        console.log(this.matchCounter);

        console.log("Victoria");
      }
    }
  },


};


