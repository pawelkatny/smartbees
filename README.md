# SmartBees
> Simple implementation of genetic algorithm in JavaScript using p5.js library.

## General info
Application simulates learning of bees to avoid obstacles and reaching specific target. After each lifespan, bees pass their geenes and new population is created.

## Live demo
Demo is available at GitHub Pages - [demo](https://pawelkatny.github.io/smartbees/).

## Technologies
* JavaScript
* p5.js

## Further info

**Bee**

Movement - bee moves by adding vectors: vector from DNA array to accelaration, accelaration to velocity, and velocity to position

DNA - each bee has it`s own unique DNA set - it is an array of vectors. When similation is initialized for the first time, DNA is randomized. Later, each DNA is a crossover
of two different DNA arrays from two random bees from previous population.  

Fitness - a score each bee receives after end of lifespan. It is calculated on few factors: the distance between last position of bee and closest target, 
if bee reached the target (each target has 
different multiplier), if bee crashed into obstacle or if bee flew away. The higher score, the higher chance to pass genes to the next population. 

Crossover - two bees combine their DNA to create new bee with new DNA set for the next population. Mutation of DNA is involved.

**Population**

Holds an array of specified number of bees. First population is created with randomized DNA arrays.

Mutation rate - mutation of DNA ensures genetic diversity. Without mutation all bees will move the same way eventually. Default value is set to 0.5%.

**Flowers**

Reaching the flower increases fitness score.

**Obstacles**

Crusing into block or flying away reduces fitness score.

**Controls**

Start/Pause simulation

Reset simulation

Population size - range 200 to 1000

Mutation rate - range 0.5% to 5%


## Status
Project is: _finished_

## Inspiration
Smart Rockets by CodingTrain


