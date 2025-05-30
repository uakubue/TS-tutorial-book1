
class Player {
    constructor(firstName, lastName){
            this.firstName = firstName,
            this.lastName = lastName
        }
    play(){
        console.log("HEEEEYYYYY!!!!")
    }
}

const player1 = new Player("Uchenna", "Akubue");
player1.play();

const player2 = new Player();
player2.play();



