async function fetchData() {
  try {
    const response = await fetch("portfolio.json");
    const data = await response.json();

    document.getElementById("profile").innerHTML = `
      <img id= "mob-img" src="${data.profile.image}" alt="Profile Picture" />
        <h1>${data.profile.name}</h1>
        <p>${data.profile.title}</p>
    
    `;

    const eduContainer = document.getElementById("edu");
    data.education.forEach((element) => {
      eduContainer.innerHTML += `
      <div class= "card">        
        <h3>${element.degree}</h3>
        <p><strong>${element.institute}</strong></p>
        <p>${element.duration}</p>
        <p>
          ${element.details}
        </p>
      </div>
      `;
    });

    const expContainer = document.getElementById("exp");

    data.experience.forEach((element) => {
      expContainer.innerHTML += `
      <div id="exp">
        <h3>${element.role}</h3>
        <p><strong>${element.company}</strong> | ${element.duration}</p>
        <p>
         ${element.description}
        </p>
      </div>
      `;
    });

    const proContainer = document.getElementById("pro");

    data.projects.forEach((element) => {
      proContainer.innerHTML += `
      <div class= "project-card">
        <img src="${element.image}" alt="${element.name}" />
        <div class="project-info">
          <h3>${element.name}
            <a href="${element.github}" target="_blank">
              <i class="devicon-github-original"></i>
            </a>
          </h3>
          <p>
            ${element.description}
          </p>
        <div/>
      </div>
      `;
    });

    document.getElementById("fot").innerHTML = `
     
      <p>Email: <a href="${data.contact.email}">${data.contact.email}</a></p>
      <p>Phone: ${data.contact.phone}</p>
      <p>
        GitHub: <a href="${data.contact.github}">${data.contact.github}</a>
      </p>
    `;
  } catch (error) {
    console.log(error);
  }
}

fetchData();

document.getElementById("change").addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
})

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


