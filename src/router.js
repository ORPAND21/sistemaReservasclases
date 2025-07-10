const routes = {
    "/": "/scr/views/home.html",
    "/login": "/scr/views/login.html",
    "/register": "/scr/views/register.html", 
};

export async function renderRouter() {
    const user = JSON.parse(localStorage.getItem(user))
    const path = localStorage.pathname;
    const app = document.getElementById("app")
    const isAuth = localStorage.getItem(isAuth)
    const file =  routes[path]
}