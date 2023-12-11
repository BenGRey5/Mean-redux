# Currency Exchange Project
## Overview:
This project is a calculator that takes a user's desired currencies and the amount they wish to exchange and returns the amount in the desired currency.
## Code contributors/Authors
B.G Reynolds

## Technologies Used:

Javascript
CSS
HTML
API integration
npm (Node Package Manager)
ESLint
Git (version Control)

## Description:

This project uses an API to extract real time currency rates combined with user input to create real exchange rates between currencies and an exchanged amount based on said rate.

## Install Instructions:

- Clone this repository
- Using terminal, enter the command `cd currency-project` and then the command 'code .'
- Go to https://www.exchangerate-api.com/ and get an API key
- Make a file named .env in the root of the project folder, and enter the line "API_KEY=(your-API-key-here)"
- in the folder currency.js, go to https://v6.exchangerate-api.com/v6/API_KEY/pair/${cash1}/${cash2}/${amount} and put your API key in section of url that says API_KEY
- Next run the command `npm install`
  Then run the command `npm run build`
- Finally run the command `npm run start`and click "Go Live"

## Known Bugs:
- unknown

## License
- Copyright (c) 2023 Ben Reynolds

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
