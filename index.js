let spaced = (str, spacing=1) => str.split('').join(' '.repeat(spacing))
let spacedUp = (str, spacing=1) => spaced(str,spacing).toUpperCase()
let decaps = (str, spacing=1) => str.split('').reverse().join(' '.repeat(spacing))
let spacedPromise = (str, spacing=1) => new Promise(resolve => resolve(spaced(str,spacing)))
let spacedUpPromise = (str, spacing=1) => new Promise(resolve => resolve(spacedUp(str,spacing)))
let decapsPromise = (str, spacing=1) => new Promise(resolve => resolve(decaps(str,spacing)))

// Parse this. This is only for the sake of making it a oneliner, don't write code like this.
// But congratulations for at least taking a peek into the sourcecode.
let spacedCake = str=>str.split('').map((v,i)=>spaced(str[i]+(i==0?str.substr(1,str.length-2):i==str.length-1?decaps(str,0).substr(1,str.length-2):' '.repeat(str.length-2))+decaps(str,0)[i]+'\n')).join('')
let spacedCakePromise = str => new Promise(resolve => resolve(spacedCake(str)))

module.exports = {
    spaced,
    spacedUp,
    spacedCake,
    decaps,
    spacedPromise,
    spacedUpPromise,
    spacedCakePromise,
    decapsPromise
}