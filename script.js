let card = document.querySelector(".card");
let count = 0;

const getApi = () => {
  fetch("https://randomuser.me/api?random=" + count)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let results = data.results.map(({ name, email, ...info }) => {
        // ({ name, cell, email, image, DOB, gender, location, login }) => {
        /* console.log(name, cell, email);
          console.log(name.first); */
        console.log({ name, email, info });
        card.innerHTML += ` <ul>
        <div class="image">
        <img src = ${info.picture.large} />
        </div>
        <div class="p-5 bg-white details flex flex-col gap-3">
        <li class="name">
        Name: ${name.title} ${name.first} ${name.last}
           </li>
           <li>
           Age: ${info.registered.age} 
           </li>
   
           <li class="phone">
          Phone: ${info.cell}
           </li>
            <li class="email">
           Email: <a href = mailto:${email} class = "underline" > ${email} </a> 
            </li>
            <li class =   "location">
           Country: ${info.location.country}
           </li>
           <li>
   
           City: ${info.location.city}
           </li>
         
            <li class="username">
             Username: ${info.login.username}
            </li>
        </div>
     
       
        </ul>
        `;

        // `My name is ${name}.`
        // old method
        // "My name is " + name + ". "
      });
      count += 1;
    })
    .catch((error) => {
      console.log(error);
    });
};

var btn = document.querySelector(".btn");

btn.addEventListener("click", getApi);
