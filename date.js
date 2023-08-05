//Refactoriing the code into the simplest form


exports.getDate = function (){
let today = new Date();

    let options ={
         weekday :"long",
        day :"numeric",
        month:"long",
        year:"numeric"
    };
    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function getDay(){
    let today = new Date();
    
        let options ={
            weekday :"long"
        };
        return today.toLocaleDateString("en-US", options);
    }