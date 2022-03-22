# **Snake**
[Game at Appstore](https://apps.apple.com/us/app/doodle-jump/id307727765)
### **Summary**
Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself. The concept originated in the 1976 two-player arcade game Blockade from Gremlin Industries, and the ease of implementation has led to hundreds of versions (some of which have the word snake or worm in the title) for many platforms. 1982's Tron arcade game, based on the film, includes snake gameplay for the single-player Light Cycles segment. After a variant was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in snake games as it found a larger audience. There are several hundred snake games for iOS alone.

### **History**
The Snake design dates back to the arcade game Blockade, developed and published by Gremlin in 1976. It was cloned as Bigfoot Bonkers the same year. In 1977, Atari, Inc. released two Blockade-inspired titles: the arcade game Dominos and Atari VCS game Surround. Surround was one of the nine Atari VCS launch titles in the US and was sold by Sears under the name Chase. That same year, a similar game was launched for the Bally Astrocade as Checkmate.

The first known home computer version, titled Worm, was programmed in 1978 by Peter Trefonas for the TRS-80, and published by CLOAD magazine in the same year. This was followed shortly afterwards with versions from the same author for the Commodore PET and Apple II. A clone of the Hustle arcade game, itself a clone of Blockade, was written by Peter Trefonas in 1979 and published by CLOAD.[7] An authorized version of Hustle was published by Milton Bradley for the TI-99/4A in 1980. The single-player Snake Byte was published in 1982 for Atari 8-bit computers, Apple II, and VIC-20; a snake eats apples to complete a level, growing longer in the process. In Snake for the BBC Micro (1982), by Dave Bresnen, the snake is controlled using the left and right arrow keys relative to the direction it is heading in. The snake increases in speed as it gets longer, and there's only one life.

Nibbler (1982) is a single-player arcade game where the snake fits tightly into a maze, and the gameplay is faster than most snake designs. Another single-player version is part of the 1982 Tron arcade game, themed with light cycles. It reinvigorated the snake concept, and many subsequent games borrowed the light cycle theme.

Starting in 1991, Nibbles was included with MS-DOS for a period of time as a QBasic sample program. In 1992, Rattler Race was released as part of the second Microsoft Entertainment Pack. It adds enemy snakes to the familiar apple-eating gameplay.
# **This project is an attempt to recreate an original game in studying purpose only!!!**

## **Game Entities**

### *Snake*
Main character of the game, which player takes control. It's always crawling, and can eat carrots.

### *Carrot*
Food for snake

## **Game rules**
The player controls a dot, square, or object on a bordered plane. As it moves forward, it leaves a trail behind, resembling a moving snake. In some games, the end of the trail is in a fixed position, so the snake continually gets longer as it moves. In another common scheme, the snake has a specific length, so there is a moving tail a fixed number of units away from the head. The player loses when the snake runs into the screen border, other obstacle, or itself.

## **Victory criteria**
Assuming that fact, that the game doesn't have a finish, the game goes on endlessly, while players snake will not fill the entire field with itself and will not die.

## **Game controls**
The game control is processing by keyboard arrows to move and mouse left button to shoot
* **_Move up_**  ↑ 
* **_Move down_**  ↓
* **_Move left_**  ←
* **_Move right_**  →

 
## **Used technologies**
* **[Webpack 5 Boilerplate Template by WeAreAthlon](https://github.com/WeAreAthlon/frontend-webpack-boilerplate#webpack-5-boilerplate-template)**
* *webpack 5.68.0*
* *ECMAScript ES6 / ECMAScript 2016(ES7)*
* *SASS/PostCSS*
* *Babel 7*
* *Jest*

## **Project structure**
* *ASS/PostCSS files are located under src/scss/*
* *JavaScript files with support of latest ECMAScript ES6 / ECMAScript 2016(ES7)/ etc files are located under src/js/*
* *Image files are located under src/images/*
* *Font files are located under src/fonts/*
* *HTML files are located under src/*

## **Run and assembly**
To run at the developer mode local server go to "../frontend-webpack-boilerplate" and type into console "npm run dev".