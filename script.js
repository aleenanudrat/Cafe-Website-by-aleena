const themeButton=document.getElementById("theme-button");
themeButton.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  themeButton.textContent=document.body.classList.contains("dark-mode")?"☀️ Light Mode":"🌙 Dark Mode";
});

const items=document.querySelectorAll(".menu-item");
const total=document.getElementById("total");
function calculateTotal(){
  let sum=0;
  items.forEach(item=>{if(item.checked)sum+=Number(item.dataset.price)});
  total.textContent="$"+sum;
}
items.forEach(item=>item.addEventListener("change",calculateTotal));

const filters=document.querySelectorAll(".filter");
const rows=document.querySelectorAll("#menu-table tbody tr");
filters.forEach(button=>{
  button.addEventListener("click",()=>{
    filters.forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    const category=button.dataset.category;
    rows.forEach(row=>row.style.display=category==="All"||row.dataset.category===category?"":"none");
  });
});

const readMore=document.getElementById("read-more");
const extra=document.getElementById("extra-text");
readMore.addEventListener("click",()=>{
  extra.classList.toggle("hidden");
  readMore.textContent=extra.classList.contains("hidden")?"Read More":"Read Less";
});

const status=document.getElementById("status");
function updateStatus(){
  const hour=new Date().getHours();
  status.textContent=hour>=8&&hour<22?"● We are Open!":"● Closed - Open at 8 AM";
  status.style.color=hour>=8&&hour<22?"#90ee90":"#ff7777";
}
updateStatus();

const birthYear=document.getElementById("birth-year");
const discount=document.getElementById("discount-message");
birthYear.addEventListener("input",()=>{
  const year=Number(birthYear.value), current=new Date().getFullYear();
  if(!year){discount.textContent="";return}
  if(year<1900||year>current){discount.textContent="Please enter a valid birth year.";discount.style.color="red";return}
  const age=current-year;
  if(age>=60){discount.textContent="You qualify for a senior discount!";discount.style.color="green"}
  else if(age>=18&&age<=25){discount.textContent="You qualify for a student discount!";discount.style.color="green"}
  else{discount.textContent="You do not qualify for a special discount.";discount.style.color="orange"}
});

const notes=document.getElementById("special-notes");
const count=document.getElementById("character-count");
notes.addEventListener("input",()=>{
  count.textContent=(100-notes.value.length)+" characters remaining";
});

document.getElementById("contact-form").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("username").value.trim();
  const email=document.getElementById("email").value.trim();
  const msg=document.getElementById("form-message");
  if(!name||!email){msg.textContent="Please enter your name and email.";msg.style.color="red";return}
  msg.textContent=`Thank you for visiting, ${name}! We will contact you at ${email}.`;
  msg.style.color="green";
});
