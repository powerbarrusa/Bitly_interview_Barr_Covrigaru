
const bitlySDK = new BitlySDK({
    accessToken: 'a89e81300ce9d89d3d48b602be72e03048083f93'
  });

bitlySDK.shorten("http://www.asdfadsfdasfadsfadsfasdfdsdf.com").then(function(shrt){
  console.log(shrt);
})


 