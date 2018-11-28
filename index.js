const sleep = require('await-sleep')

let spaced = (str, spacing=1) => str.split('').join(' '.repeat(spacing))
let spacedUp = (str, spacing=1) => spaced(str,spacing).toUpperCase()
let decaps = (str, spacing=1) => str.split('').reverse().join(' '.repeat(spacing))

// Do you get it? Ah, now you got it.
let spacedPromise = async (str, spacing=1) => (await sleep(10)) || spaced(str, spacing)
let spacedUpPromise = async (str, spacing=1) => (await sleep(10)) || spacedUp(str, spacing)
let decapsPromise = async (str, spacing=1) => (await sleep(10)) || decaps(str, spacing)

// Parse this. This is only for the sake of making it a oneliner, don't write code like this.
// But congratulations for at least taking a peek into the sourcecode.
let spacedCake = str=>str.split('').map((v,i)=>spaced(str[i]+(i==0?str.substr(1,str.length-2):i==str.length-1?decaps(str,0).substr(1,str.length-2):' '.repeat(str.length-2))+decaps(str,0)[i]+'\n')).join('')
let spacedCakePromise = async str => (await sleep(10)) || spacedCube(str)

let spacedCube = str => [...str.split('').map((v,i)=>!i?str:i<str.length-1?str[i]+' '.repeat(str.length-2)+decaps(str,0)[i]+' '.repeat(i-1)+decaps(str,0)[i]:decaps(str,0)+' '.repeat(i-1)+decaps(str,0)[i]),...(str.split('').map((v,i)=>!i?'':i<str.length-1?' '.repeat(i)+decaps(str,0)[i]+' '.repeat(str.length-2)+str[i]+' '.repeat(str.length-i-2)+str[i]:' '.repeat(i)+str)).slice(1)].map(s=>spaced(s)).join('\n')
let spacedCubePromise = async str => (await sleep(10)) || spacedCake(str)

module.exports = {
    spaced,
    spacedUp,
    spacedCake,
    spacedCube,
    decaps,
    spacedPromise,
    spacedUpPromise,
    spacedCakePromise,
    spacedCubePromise,
    decapsPromise
}