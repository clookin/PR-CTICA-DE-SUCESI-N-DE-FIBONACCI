const numero = document.getElementById('input');
numero.addEventListener('change', (e)=> {
  let pepe = (e.target.value);
  fibonacci(pepe);
})
function fibonacci (limit){
  const arr = [0,1];
  let count = arr[arr.length-1];
  for (let i = 0; i < limit; i++) {
      if(limit <= 2 || arr.length == limit){
          console.log(arr[i]);
        }else {
          arr.push(count + arr[arr.length-2]);
          count = arr[arr.length-1];
          // break;
        }
      }
      alert(arr)
    }
