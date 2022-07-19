// 1 - Hello World

// const getStringResult = () => {
//     return new Promise ((resolve, reject) =>{

//         setTimeout(() => {
//             const helloWorld = "Hello World"

//             resolve(helloWorld)
//         }, 2000)

//     })
// }

// const waitForStringResult =  async () => {
//     const result= await getStringResult()
//     console.log(result)
// }

// waitForStringResult()

// 2 - Il fait froid

// const getTemperatureResult = () => {
//     return new Promise ((resolve,reject) => {

//         setTimeout(() => {
//             const temperature = 15

//             if(temperature <= 10){
//                 resolve("il fait froid")
//             }else{
//                 reject("il fait chaud")
//             }
//         }, 4000)
//     })
// }

// const waitForTemperatureResult = async () => {
//     try{
//         const result = await getTemperatureResult()
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
  
// }

// waitForTemperatureResult()

// 3 - Ménage

const getLaundryDone = () => {
    return new Promise ((resolve, reject) => {

        setTimeout (() => {
            const laundryDone = "j'ai fini la lessive"

            resolve(laundryDone)
        }, 3000)
    })
}

const getDishesDone = () => {
    return new Promise ((resolve, reject) => {

        setTimeout (() => {
            const DishesDone = "J'ai fini la vaisselle"

            resolve(DishesDone)
        }, 1500)
    })
}

const waitForLaundryDone = async () => {
    try{
        console.log("je commence la lessive")
        const result = await getLaundryDone()
        console.log(result)
        console.log("je commence à faire la vaisselle")
        const resultDishes = await getDishesDone()
        console.log(resultDishes)
        console.log("J’ai fini de faire le ménage")
    }catch (e) {
        console.log("je n'ai pas fait la lessive")
        console.log("je n'ai pas fait la vaisselle")
    }
}

waitForLaundryDone()