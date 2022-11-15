const apiurl = "https://x-math.herokuapp.com/api/random";
var data;
async function apiData() {
  const response = await fetch(apiurl);
  const data = await response.json();
  console.log(data);
  function createDisplaypage() {
    //creating container
    const container = document.createElement("div");
    container.id = "maindiv";
    container.className = "container-md container-sm";
    document.body.append(container);
    // creating H1 ele
    const h1Ele = document.createElement("h1");
    h1Ele.innerText = "!!!!!FIND SOLUTION FOR THIS EQUATION!!!!!";

    //creating p
    const pEle = document.createElement("p");
    pEle.innerText =
      "This is an WebPage which gives you a standard Mathematical expression and its solution";
    // displaying expression
    const expDiv = document.createElement("div");
    
    expDiv.className = "container-sm container-md";
    const h2ele = document.createElement("h3");
    h2ele.innerText = `Click the below button to find answer for this Expression  (${data.expression})`;
    expDiv.append(h2ele);
    //btn
    const btnEle = document.createElement("button");
    btnEle.className = "btn btn-dark m-3 p-3";
    btnEle.innerText = "CLICK ME for Answer";

    const resetEle = document.createElement("button");
    resetEle.className = "btn btn-dark m-3 p-3";
    resetEle.innerText = "Next Expression";
    resetEle.id = "reset";
    resetEle.style.display = "none";

    //addevent lis for answer

    btnEle.addEventListener("click", () => {
      btnEle.style.display = "none";
      h2ele.innerText = `Solution for this Expression (${data.expression})= ${data.answer}`;

      const resetEle = document.createElement("button");
      resetEle.className = "btn btn-success m-3 p-3";
      resetEle.innerText = "Next Expression";
      resetEle.id = "reset";
      resetEle.style.display = "inline-block";

      expDiv.append(resetEle);

      //addevent lis for next
      resetEle.addEventListener("click", () => {
        document.body.innerHTML = "";
        apiData();
      });
    });

    container.append(h1Ele, pEle, expDiv);
    expDiv.append(btnEle, resetEle);
  }
  createDisplaypage();
}

apiData();
