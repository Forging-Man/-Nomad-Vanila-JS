const quotes = [
  {
    quote:
      "Success isn’t overnight. It’s when every day you get a little better than the day before. It all adds up.",
    author: "― Dwayne Johnson, actor and former pro-wrestler",
  },
  {
    quote:
      "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
    author: "― Pelé, Brazillian pro footballer",
  },
  {
    quote:
      "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "― General Colin Powell, former US Secretary of State",
  },
  {
    quote:
      "People always say that I didn’t give up my seat because I was tired, but that isn’t true. I was not tired physically… No, the only tired I was, was tired of giving in.",
    author: "― Rosa Parks",
  },
  {
    quote:
      "Striving for success without hard work is like trying to harvest where you haven’t planted.",
    author: "― David Bly, American politician",
  },
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    author: "―  Robert Collier, self-help author",
  },
  {
    quote: "The secret of success is to do the common things uncommonly well.",
    author:
      "― John D. Rockefeller, widely considered the richest man in modern history",
  },
  {
    quote:
      "Recipe for success: Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.",
    author: "― William A. Ward, motivational writer",
  },
  {
    quote: "Success is the progressive realization of a worthy goal.",
    author: "―  Earl Nightingale, author",
  },
  {
    quote: "Power’s not given to you. You have to take it.",
    author: "― Beyoncé, 100 million record selling artist",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
