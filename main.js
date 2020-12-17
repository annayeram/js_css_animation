function pageLoad () {

  let root = document.getElementById("root");

  let myObjects = [
    {
      tag: "h1",
      content: "Anna M"
    },
    {
      tag: "p",
      content: "Front end Developer"
    }
  ];
  /*
  for(let i = 0; i < myObjects.length; i++) {

  }
  */
  for(o of myObjects) {
    root.insertAdjacentHTML("beforeend", `
      <${o.tag}>${o.content}</${o.tag}>
    ` );
  }

  root.addEventListener("click", function () {
    root.classList.toggle("clicked");
  });
  
}

window.addEventListener("load", pageLoad);