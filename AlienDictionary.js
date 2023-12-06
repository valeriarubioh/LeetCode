/*En una lengua alienígena también utilizan las letras del español, pero posiblemente en un orden diferente.
Es una permutación de nuestro alfabeto.Tu desafío es, dada una secuencia de palabras escritas en
el idioma extranjero y el orden del alfabeto alienígena, devolver verdadero si y solo si las palabras dadas
están ordenadas lexicográficamente según el orden de letras del alfabeto alienígena dado.

Ejemplo 1:
Input
const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSorted(words1, order1);

Output:true

Ejemplo 2:
Input 1
const words2 = ["habito", "hacer", "sonreir", "lectura"];
const order2 = "hlabcdfgijkmnopqrstuvwxyz";
isAlienSorted(words2, order2);

Output:false

Ejemplo 3:
Input
const words3 = ["conocer", "cono"];
const order3 = "abcdefghijkmnopqrstuvwxyz";
isAlienSorted(words3, order3);

Output:false
*/
var isAlienSorted = function(palabras, orden) {
    //crear mapa del alfabeto
    alphabet = new Map();
    for (let i = 0; i < orden.length; i++) {
        alphabet[orden[i]]=i;
    }
    //revisar orden de las palabras
    for (let j = 1; j < palabras.length; j++) {
        if(isWordSorted(palabras[j-1],palabras[j]) === false){
            return false;
        }
    }
    return true;
}

var isWordSorted = function(word1, word2){
    const maxLength = Math.min(word1.length,word2.length);
    for (let i = 0; i < maxLength; i++) {
        if(alphabet[word1[i]]<alphabet[word2[i]]) {
            return true;
        }
        if(alphabet[word1[i]]>alphabet[word2[i]]) {
            return false;
        }
    }
    return word1.length <= word2.length;
}

const words1 = ["habito", "hacer", "lectura", "sonreir"];
const order1 = "hlabcdfgijkmnopqrstuvwxyz";
console.log("Input1",isAlienSorted(words1, order1))

const words2 = ["habito", "hacer", "sonreir", "lectura"];
const order2 = "hlabcdfgijkmnopqrstuvwxyz";
console.log("Input2",isAlienSorted(words2, order2))

const words3 = ["conocer", "cono"];
const order3 = "abcdefghijkmnopqrstuvwxyz";
console.log("Input3",isAlienSorted(words3, order3))