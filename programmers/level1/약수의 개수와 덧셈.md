[문제 바로가기](https://programmers.co.kr/learn/courses/30/lessons/77884)
<br/><br/>

- 제곱근이 정수이면 약수의 개수가 홀수이다! 

<br/>

```javscript

  function solution(left, right) {
    var answer = 0;
    
    for(let i=left; i<right+1; i++){
        let divisonNum = 0;
        
        for(let j=1; j<=i; j++){
            if(i%j === 0){
                divisonNum++;
            }
        }    
        
        if(divisonNum % 2 === 0){
            answer+=i;
        }else{
            answer-=i;
        }
    }
    
    return answer;
  }

```
