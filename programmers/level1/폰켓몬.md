[문제 바로가기](https://programmers.co.kr/learn/courses/30/lessons/1845)
<br/><br/>

- set을 이용해서 풀면 좀 더 간단하게 풀 수 있어! set에 대해서 공부하기

<br/>

```javascript

  function solution(nums) {
    var answer = 0;
    let array = [];
    
    nums.map((num) => {
        if(array.includes(num) == false){
            array.push(num);
        }
    })
    
    if(array.length <= nums.length/2){
        answer = array.length;
    }else{
        answer = nums.length/2;
    }
    
    return answer;
  }

```
<br/><br/>
