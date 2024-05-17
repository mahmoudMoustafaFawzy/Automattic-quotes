var btn = document.getElementById('btn')
var outPut = document.getElementById('outPut')
var quotes = 
[
    '“Live as if you were to die tomorrow. Learn as if you were to live forever.”' ,
    '“We accept the love we think we deserve.”',
    '“Be yourself; everyone else is already taken.”',
    '“So many books, so little time.”',
];







var privNo

function test() {
    var randomNumber = Math.floor(Math.random() * quotes.length)


    while(privNo === randomNumber) {
        randomNumber = Math.floor(Math.random() * quotes.length)
    }



    var x = quotes[randomNumber]
    outPut.innerHTML= x;
    privNo = randomNumber
}


