//Could use API, but I wanted to use my favorite quotes!
var quotes = [
  "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. -Michael Jordan",
  "I have failed many times, but I have never gone into a game expecting myself to fail.-Michael Jordan",
  "I hated every minute of training, but I said, Don't quote. Suffer now and live the rest of your life a champion. -Muhammad Ali",
  "Everything negative- pressure, challenges- is all an opportunity for me to rise. -Kobe Bryant",
  "I have self-doubt. I have insecurity. I have fear or failure...-Kobe Bryant",
  "Light Weight! -Ronnie Coleman",
  "The worst thing I can be is the same as everybody else. I hate that. -Arnold Schwarznegger",
  "Start wide, expand further, and never look back. -Arnold Schwarzneggar",
  "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. – Bruce Lee",
  "Without self-discipline, success is impossible, period.– Lou Holtz"
]

function newQuote(){
  var randNum = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[randNum];
}
