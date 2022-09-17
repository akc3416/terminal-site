
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome ");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
  createCode("home", "For GUI Homepage");
  createCode("all", "See all commands.");
  createCode("about me", "Who am i and what do i do.");
  createCode("contact", "Want to contact me?");
  createCode("clr", "Clear the terminal");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# ashok";
  span1.textContent = " in";
  span2.textContent = " ~/guest";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    createCode("home", "For GUI homepage ;)");
    createCode("projects", "My projects ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("contact", "Want to contact me?.");
    createCode("clr", "Clean the terminal.");
    
    
  }
  else if(value=== "home"){
    trueValue(value);
    createText("Click here For GUI <a href='https://kcashok.com.np/' target='_blank'>https://kcashok.com.np/</a>")
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://kcashok.com.np/projects.php' target='_blank'><i class='fab fa-wrench '></i> Click the link to view projects and tool www.kcashok.com.np/projects.php</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("I am Ashok KC)")
    createText("For more details visit this link <a href='https://kcashok.com.np/about.php' target='_blank'>https://kcashok.com.np/about.php</a>")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("Click to call  <a href='callto:9864450116' target='_blank'>9864450116</a>")
    createText("For more details visit this link <a href='https://kcashok.com.np/contact.php' target='_blank'>https://kcashok.com.np/contact.php</a>") }
  else if(value === "skills"){
    trueValue(value);
    createText("Didn't you mean: skill ?")
    createText("Click  here <a href='https://kcashok.com.np/skills.php' target='_blank'>https://kcashok.com.np/skills.php</a>")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
