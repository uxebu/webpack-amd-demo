define(['./secondScript'],function(secondScript){
  console.log('Color from secondScript', secondScript.color);

  return {
    hello: function () {
      console.log('Hello from firstScript');
    }
  }
});
