

const Score = JSON.parse(localStorage.getItem('score')) || {won:0,Lose:0,Tie:0};

function OurMove(_mymove)
{
    const ComputerMove = Math.floor(Math.random() * 3);
    let ComputerMoveString;
    let result;
    if(ComputerMove === 0)
        {
            ComputerMoveString = 'rock';
        }
        else if(ComputerMove === 1)
        {
            ComputerMoveString = 'paper';
        }
        else
        {
            ComputerMoveString = 'scissors';
        }
    if(_mymove === 'rock')
    {
        if(ComputerMoveString === 'rock')
        {
            result = 'Draw';
        }
        else if(ComputerMoveString === 'paper')
        {
            result = 'You Lose';
        }
        else
        {
            result = 'You Won';
        }
    }
    else if(_mymove === 'paper')
    {
        if(ComputerMoveString === 'rock')
        {
            result = 'You Won';
        }
        else if(ComputerMoveString === 'paper')
        {
            result = 'Draw';
        }
        else
        {
            result = 'You Lose';
        }
    }
    else
    {
        if(ComputerMoveString === 'rock')
        {
            result = 'You Lose';
        }
        else if(ComputerMoveString === 'paper')
        {
            result = 'You Won';
        }
        else{
            result = 'Draw';
        }
    }
    

    

    if(result === 'You Won')
    {
        Score.won = Score.won + 1;
    }
    else if(result === 'You Lose')
    {
        Score.Lose = Score.Lose + 1;
    }
    else
    {
        Score.Tie = Score.Tie + 1;
    }
    localStorage.setItem('score',JSON.stringify(Score));
    let myemoji='';
    switch(_mymove)
    {
        case 'rock':
            myemoji = '✊';
            break;
        case 'paper':
            myemoji = '✋';
            break;
        case 'scissors':
            myemoji = '✌️';
        break;
        default:
            myemoji = '';
            break;
          
    }
    let compemoji = '';
    switch(ComputerMoveString)
    {
        case 'rock':
            compemoji = '✊';
            break;
        case 'paper':
            compemoji = '✋';
            break;
        case 'scissors':
            compemoji = '✌️';
        break;
        default:
            compemoji = '';
            break;


    }

    
   /* alert(`${result} You Chose ${_mymove} Computer chose ${ComputerMoveString}
Wins: ${Score.won} Lose: ${Score.Lose} Tie: ${Score.Tie}`);*/
document.querySelector('.Js-score')
 .innerHTML = `Wins: ${Score.won} Lose: ${Score.Lose} Tie: ${Score.Tie}`;
document.querySelector('.Js-result')
 .innerHTML = `${result}`;
document.querySelector('.Js-Chose')
 .innerHTML = `You Chose <span class="resultemoji">${myemoji}</span>--  Computer chose <span class="compemoji">${compemoji}</span>`;
}

