

const intense=0.15
const noozleExpense=8
const noozleFoamExpense=0.48
const workTime=10
const reservePoint=3

function foamConvert(){
 
    const squareFire=parseFloat(document.getElementById('square').value)

    const neccesaryLiquidAmount=squareFire*intense
    const noozleAmont=Math.ceil(neccesaryLiquidAmount/noozleExpense)
    console.log(noozleAmont)
    const amountFoamLiquid=Math.ceil(noozleAmont*noozleFoamExpense*60*workTime*reservePoint)


    document.querySelector('.noozle__total').innerText=noozleAmont +` штук`
    document.querySelector('.foam__total').innerText=amountFoamLiquid +` літрів`

}

window.onload=function(){
    document.querySelector('button').onclick=foamConvert
}

