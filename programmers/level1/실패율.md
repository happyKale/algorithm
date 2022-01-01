[문제 바로가기](https://programmers.co.kr/learn/courses/30/lessons/42889)
<br/><br/>

```javascript

  function solution(N, stages) {
    let array = [];
    let failArray = [];
    let sortFailArray = [];
    let answer = [];
    
    for(let i=0; i<N; i++){
        array.push({'fail': 0, 'people': 0});
    }
    
    stages.map((stage) => {
        let num = stage <= N ? stage : N;
        for(let i =0; i<num; i++){
            array[i].people += 1;
        }
        if(stage <= N){
            array[num-1].fail += 1;    
        }
    })
    
    array.map((item,idx) => {
        if(item.fail=== 0 && item.people ===0){
            failArray.push(0);
        }else{
         failArray.push(item.fail/item.people);    
        }
    })
    
    failArray.map((item) => {
        sortFailArray.push(item);
    })
    
    sortFailArray.sort().reverse().map((item) => {
        let num = failArray.indexOf(item);
        failArray[num] = null;
        answer.push(num+1);
    });
    
    
    return answer;
  }

```
<br/><br/>
