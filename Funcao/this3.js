function Pessoa(){
    this.idade = 10

    setInterval(function(){
        this.idade++
        console.log(this.idade)   
    }.bind(this), 1000)
}

new Pessoa