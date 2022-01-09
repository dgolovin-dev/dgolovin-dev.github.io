document.write(`
 <script src="https://utteranc.es/client.js"
   repo="dgolovin-dev/dgolovin-dev.github.io"
   issue-term="pathname"
   theme="github-light"
   crossorigin="anonymous"
   async>
 </script>
`);

// hotfixes for broken template
(function(){
 var lastHeight = 0;
 var div = null;
 setInterval(function() {
  if(!div) {
   div = document.querySelector(".utterances");
  }
  if(!div) {
   return;
  }
  if(lastHeight == div.clientHeight) {
   return;
  }
  lastHeight = div.clientHeight;
  window.dispatchEvent(new Event('resize'));
 }, 250);
 
 setTimeout(function() {
   var section = document.querySelector("section");
   section.setAttribute("style", "padding: 20px");
 }, 0); 
})();
