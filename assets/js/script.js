//Coin flip variables
let coin = 1;
let num_heads = 0;
let num_tails = 0;
let num_total = 0;

let percent_heads = 0;
let percent_tails = 0;



//Update the chart variables
setInterval(function(){
    //updates chart with variables in real time
    document.getElementById("heads").innerHTML              = num_heads;
    document.getElementById("heads-percent").innerHTML      = percent_heads + '%';
    document.getElementById("tails").innerHTML              = num_tails;
    document.getElementById("tails-percent").innerHTML      = percent_tails + '%';


    // COIN ANIMATION STATE
if (num_total > 0)    {
    if (coin == 1) {
        document.getElementById("coin-heads").src= "assets/images/penny-heads.jpg"
        document.getElementById('message').textContent = 'You Flipped Heads!'
    };

    if (coin == 2) {
        document.getElementById("coin-heads").src= "assets/images/penny-tails.jpg"
        document.getElementById('message').textContent = 'You Flipped Tails!'
    };
};

},1);



// Flip the coin  element was flip
document.getElementById('flip').addEventListener('click', function () {
    console.log('coin was flipped successfully!')
    coin = Math.ceil(Math.random() * 2);   {
        if (coin == 1) {num_heads ++};
        if (coin == 2) {num_tails ++};
          //calculates the total number of flips
          num_total = (num_heads + num_tails)

         {
        console.log('coin: '+coin)
        console.log('num_heads: '+num_heads)
        console.log('num_total: '+num_total)
        console.log('percent_heads: '+percent_heads)

        // calculates the total % of heads and tails if the total num of flips > 0 
        if (num_total > 0) {percent_heads = Math.round((num_heads / num_total) * 100)}
        if (num_total > 0) {percent_tails = Math.round((num_tails / num_total) * 100)}

            //calculates the total number of flips
        num_total = (num_heads + num_tails)
        }
    }
})


// Flip the coin  element was flip
document.getElementById('clear').addEventListener('click', function () {
    console.log('Cleared Successfully!')
    num_heads = 0
    num_tails = 0 
    num_total = 0;
    percent_heads = 0;
    percent_tails = 0;
})
