// common syntax 
const superHeroes: string[] = ["Batman", "Aquaman", "Superman"] // array of strings
const ranks: number[] = [7, 5, 10]
const hasWeakness: boolean[] = [false, false, true]

//alternative syntax
const superHeroesAlt: Array<string> = superHeroes
const ranksAlt: Array<number> = ranks 
const hasWeaknessAlt: Array<boolean> = hasWeakness


//array of objects
type SuperVillain = {
     name: string,
     superPower?: string,
     rank: number,
     hasWeakness: boolean
}

let superVillains: SuperVillain[] // common
let superVillainsAlt: Array<SuperVillain> //alt

superVillains = [{
     name: 'Every woman',
     rank: 11,
     hasWeakness: false,
     superPower: "numb men"
}]


// array of arrays **2D**
let coordinates: number[][]

coordinates = [
     [1.120, 7.282],
     [1.092, 6.322]
]
export {}