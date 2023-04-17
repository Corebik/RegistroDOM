class User{
    constructor(nameUser, lastNameUser, ageUser){
        this.name = nameUser;
        this.lastName = lastNameUser;
        this.age = ageUser;
    }
}

let data = [];
let card = document.getElementById("add");
let submit = document.getElementById("send");
let look = document.getElementById("look");
let hs = document.getElementById("registros");



submit.addEventListener("click", (e) => {
    let nameUser = document.getElementById("name").value;
    let lastNameUser = document.getElementById("lastName").value;
    let ageUser = document.getElementById("age").value;

    data.push(new User(nameUser, lastNameUser, ageUser));

    console.log("¡Usuario Registrado!");
    console.log(`Usuarios Actuales: ${data}`);
    
    let template = "";

    data.forEach(info => {
        console.log(`Nombre: ${info.name} Apellido:${info.lastName} Edad:${info.age}`);
        
         template += `
            <div class="bg-white rounded shadow border p-4 w-64 mt-10 shadow-inner drop-shadow flex gap-3">
                <img src="avatar.jpeg" alt="" class="w-[40%] left-[1]">
                <div class="flex flex-col justify-center">
                    <h5 class="text-3x1 font-bold">${info.name} ${info.lastName}</h5>
                    <p class="text-gray-700 text-sm">${info.age} años</p>
                </div>
            </div>
            `;
    });


    card.innerHTML = template;

    document.getElementById("form").reset();

    e.preventDefault();
});


look.addEventListener("click", (e) => {
    if(hs.classList.contains("hidden")){
        hs.classList.remove("hidden");
    }else if(!hs.classList.contains("hidden")){
        hs.classList.add("hidden");
    }

    e.preventDefault();
});
