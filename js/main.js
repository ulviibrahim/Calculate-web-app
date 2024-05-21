
let calculator=document.querySelector(".calculator")
let view=document.querySelector("#view")
let btnNumbers=document.querySelectorAll('.numbers ul li button')
let btnOperators=document.querySelectorAll('.operators ul li button')
let result=0;
result=''
const nums=[]
let count=0
for(let i=0;i<btnNumbers.length;i++){
    
    btnNumbers[i].addEventListener('click',function(){
        if(this.innerHTML=='<i class="fa-solid fa-delete-left"></i>'){
         let t=result.split('')
         t.pop()
         console.log();
         view.value=t.join('')
         result=view.value
         return
        }
view.value=+this.innerText
        result+=this.innerText
view.value=result


        })
}
let operator=[]
for(let i=0; i<btnOperators.length;i++){
    btnOperators[i].addEventListener('click',function(){

        count=result
      result=''
          if(!count==''){
            nums.push(count)

          }
         console.log(nums);
      if(this.innerText=='='){
        view.value=''

        console.log(operator[0]);
let sum=calc(nums[nums.length-2],nums[nums.length-1],operator[0])
        view.value=sum
        nums.push(sum)
      }
      operator=this.innerText


    })
}
function calc(num1,num2,opr){

    Number(num1)
    Number(num2)

switch (opr){
    case "+":
      return Number(num1)+Number(num2);
      

       console.log(opr)

       break;
       case "-":
       return num1-num2;
        break;
        case '*':
          return  num1*num2;
            break;
            case '/':
                if(num1==0||num2==0){
                   return 'O -a bolmek olmaz olmaz'

                }else{
                    return num1/num2
                }
                break;
   
}

}
