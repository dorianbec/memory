# caramel-memory-game

This game has been built as part of an internship for childrens' book publishing company Caramel Publishing. The game can be played standalone, but has been made part of a bigger project including a few games for children


## Build Setup

``` bash
# install dependencies (necessary)
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

```

## In Progress - To be done:

* new images can be added to ```src > assets > card-images-front``` and be numbered from 1 to 20. The imagedata will be loaded from ```src > api > imagedate.js```
* finishing the high score listing with LocalStorage. Check the component ```HighScores.vue``` for more. The idea is to grab the timer and tryCount data and log it with the current date to the highscore listing.



## Graphic Chart
light blue (for backgrounds):     rgb(0, 195, 255)     #00C3FF

flashy green background:          rgb(214, 255, 0)     #D6FF00

purple title, text and borders:   rgb(169, 15, 241)    #A90FF1


## Credits
* coach [Bertrand Marlair](https://github.com/bertrandBecode) at BeCode.org for his invaluable help to understand some basic game logic
* [Leftstick Vue Memory Game](https://github.com/leftstick/vue-memory-game) for inspiration on how to use state
* Lorem Picsum for the games' images.