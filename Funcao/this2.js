function Pessoa(){
    this.idade = 10
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)   
    }, 1000)
}

new Pessoa