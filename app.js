let buttons=document.querySelectorAll('button')
let screen=document.querySelector('.screen')
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let intOrOp=button.getAttribute('data-value')
        let addedText=document.createTextNode(intOrOp)
        screen.appendChild(addedText)
    })
    return screen
})

/*the conditions*/ 

let equalButton=document.querySelector('.equal')
equalButton.addEventListener('click',()=>{
    let screenValue=screen.textContent
    let array=screenValue.split(/([+\-*/])/)

    let result=0
    let product=1
    if (array.includes('+')){
        arrayOfNums=array.filter((chunk)=>{
            return chunk !== '+'
        })
        arrayOfNums.forEach((chunk)=>{
            result += parseInt(chunk)
        })
        screen.textContent=result
    }
    else if (array.includes('-')){

        while(array.includes('-')){
            let index=array.indexOf('-')
            let numbersubtracted=array[index-1]
            let numbersubtractor=array[index+1]
            let subtractResult=parseInt(numbersubtracted)-parseInt(numbersubtractor)
            array.splice(index-1,3,subtractResult)

        }
        console.log(array)
        screen.textContent=array[0]
    }


    else if (array.includes('/')){
        let result=0
        for (i=0;i<array.length;i++){
            let numberSplited=array[array.indexOf('/')-1]
            let numberSliter=array[array.indexOf('/')+1]
            array=array.splice(array.indexOf('/'),1)
            splitingResult=parseInt(numberSplited)/parseInt(numberSliter)
            result += splitingResult
        }
        screen.textContent=result
    }


    else {
        arrayOfNums=array.filter((chunk)=>{
            return chunk !== '*'
        })
        arrayOfNums.forEach((chunk)=>{

            product = product*parseInt(chunk)
        })
        screen.textContent=product
    }

})

/*delete button*/

let deleteButton=document.querySelector('.delete')
deleteButton.addEventListener('click',()=>{
    screen.textContent=''
})













function Add(array){
    let somme =array.reduce((result,currentValue)=>{
        return result+currentValue
    },0)
    return somme
}


/*function Add(array){
    let somme =array.reduce((result,currentValue)=>{
        return result-currentValue
    },)
}

function Add(array){
    let somme =array.reduce((result,currentValue)=>{
        return result+currentValue
    })
}

function Add(array){
    let somme =array.reduce((result,currentValue)=>{
        return result+currentValue
    })
}

*/


    






