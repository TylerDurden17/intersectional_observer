
window.addEventListener("load", (event) => {
  createObserver();
}, false);

function createObserver() {
  let options = {
      threshold: 1
    };
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector('#target');
  observer.observe(target);
}
function callback(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      var infinite = document.createElement('P');
      col2.appendChild(infinite);
      infinite.innerHTML = "Here's where things get difficult, both for you as a founder and for the YC partners trying to decide whether to fund you. In a market economy, it's hard to make something people want that they don't already have. That's the great thing about market economies. If other people both knew about this need and were able to satisfy it, they already would be, and there would be no room for your startup. What YC looks for, above all, is founders who understand some group of users and can make what they want. This is so important that it's YC's motto";
      if(window.innerHeight > col2.clientHeight){
        var h = window.innerHeight;
        col2.style.minHeight = `${h}px`;
        console.log("picki")
      }
    }
    else col2.style.minHeight = "0px";
     
  });
}
