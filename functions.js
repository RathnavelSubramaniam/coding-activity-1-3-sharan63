function add (x,y)
{
return x+y; // machna inga naan return la mela irruka add function ah yeduthu irruken 
}

console.log('results :' , add(3,2));// naan inga console tharapa result printa aaguma da appuram add poi return ah kondu varum 

if (typeof module !== 'undefrined'){
    module.exports= add;
}

// ippo naan name pass panna poren 
function greet(name1,name2)
{
return name1 + name2 ;
}

console.log('results :' , greet(("rolex"),("antony")));

if (typeof module !== 'undefrined'){
    module.exports= greet;
}


// ippo  rendu name varanum da 
function greet(name1 , name2)
{
return "Name 1: " + name1 +"\nName 2: " + name2;
}

console.log('results :\n' , greet("rolex","antonyraj"));

if (typeof module !== 'undefrined'){
    module.exports= greet;
}
// ipoo rendu name um pakathula vara mari panna poren da