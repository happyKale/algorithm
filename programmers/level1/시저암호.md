[문제 바로가기](https://programmers.co.kr/learn/courses/30/lessons/12926)
<br/><br/>

```javascript

  function solution(s, n) {
    let answer = s.split('');
    
    answer = answer.map((item)=>{
        let asciiCode = item.charCodeAt();
        if(65 <= asciiCode && asciiCode <= 90){
            asciiCode += n;
            if(asciiCode > 90){
                 asciiCode -= 26;
            }
        }else if(97 <= asciiCode && asciiCode <= 122){
            asciiCode += n;
            if(asciiCode > 122){
                 asciiCode -= 26;
            }
        }
           
        return String.fromCharCode(asciiCode);
    })
    
    answer = answer.join('');
    
    return answer;
  }

```
