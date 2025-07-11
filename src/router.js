const routes = {
    "/": "/scr/views/home.html",
    "/login": "/scr/views/login.html",
    "/register": "/scr/views/register.html",
    "/notFound": "/scr/views/404.html"
};

export async function renderRouter(){
    const user = JSON.parse(localStorage.getItem("user"))
    const path = location.pathname;
    const app = document.getElementById("app")
    const isAuth = localStorage.getItem("isAuth")
    const file =  routes[path]

    if(!file){
        location.href = "/notFound";
        return;
    }

    if(isAuth && path === "/login"){
        location.pathname = "/";
        return;
    }

    if(!isAuth && path !== "/login" && path !== "/register"){
        location.pathname ="/login";
        return;
    }

    try{
        const res = await fetch(file)
        const html = await res.text()
        app.innerHTML = html;

        // Delegación de eventos para el botón de cerrar sesión
        // Adjuntamos el listener al contenedor principal 'app'
        app.removeEventListener("click", handleAppClick); // Remover cualquier listener anterior para evitar duplicados
        app.addEventListener("click", handleAppClick);

        if(path === "/login"){
            document.getElementById("principal-header")?.setAttribute("hidden",true)

            document.getElementById("loginForm").addEventListener("submit", (e) => {
                e.preventDefault()
                const username = document.getElementById("username").value
                const password = document.getElementById("password").value

                const storedUser = JSON.parse(localStorage.getItem("user"))

                if(
                    storedUser &&
                    storedUser.username === username &&
                    storedUser.password === password
                ){
                    localStorage.setItem("isAuth", true)
                    location.href = "/"
                } else {
                    alert("Credenciales incorrectas")
                }

            })
        }
        if (path === "/register") {
            document.getElementById("registerForm").addEventListener("submit", (e) => {
                e.preventDefault();
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const name = document.getElementById("name").value;

                const user = { username, password, name };
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("isAuth", true);
                location.href = "/";
            });
        }

        if (path === "/") {
            document.getElementById("principal-header")?.removeAttribute("hidden");

            app.innerHTML += `
                <div class="text-center mt-4">
                    <h1 class="text-2xl font-bold">¡Hola, ${user?.name || "Usuario"}!</h1>
                </div>
                <button id="logOut" class="mt-4 p-2 bg-red-400 rounded">Cerrar sesión</button>
            `;
            // No necesitamos obtener logOut aquí directamente si usamos delegación
        }


    }catch(err) {
        console.log(err)
        app.innerHTML = "<h2>Error al cargar la vista</h2>"}

};

// Función para manejar los clics delegados
function handleAppClick(e) {
    if (e.target.id === "logOut") {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        location.href = "/login";
    }
}