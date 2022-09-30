const initialPrice = document.querySelector('#initial-price');
const stockQuantity = document.querySelector('#stock-quantity');
const currentPrice = document.querySelector('#current-price');
const Output = document.querySelector('#output');
const submitbtn = document.querySelector('#submit');


function submitHandler(e)
{
    var ip = initialPrice.value;
    var qty = stockQuantity.value;
    var curr = currentPrice.value;

  calculateProfitandLoss(ip , qty , curr);

}


function calculateProfitandLoss(initialPrice , stockQuantity , currentPrice)
{
    if(initialPrice > currentPrice)
    {
        var loss = (initialPrice - currentPrice) * stockQuantity;
        var lossPercentage = (loss / initialPrice) * 100;
        showMessage(`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}%`);

    }

    else if(currentPrice > initialPrice)
        {
            var profit = (currentPrice - initialPrice) * stockQuantity;
            var profitPercentage = (profit / initialPrice) * 100;
            showMessage(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}%`);
 
    }

    else

     {
           showMessage(`No pain no gain and No gain no pain!`);
     }
    

}

function showMessage(message)
{
   Output.innerText = message;
}

submitbtn.addEventListener('click',submitHandler);