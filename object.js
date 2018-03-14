// creates the superhero and the super power.
function SuperHuman (name, superPower) {
    this.name = name;
    this.superPower = superPower;
}


SuperHuman.prototype.usePower = function () {
    return (this.name + " has " + this.superPower + "!");
};


// Creates as many super heroes as needed.

var banshee = new SuperHuman("Silver Banshee", "Sonic wail");
var batman = new SuperHuman("Batman", "Money$$$$");

// Outputs: Superhero and Super power
document.getElementById('output').innerHTML = banshee.usePower() + "<br/> " + batman.usePower() ;


