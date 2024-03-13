export class Router {
    routes = {}
    add(pathName, page) {
        this.routes[pathName] = page
    }

    route (event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, '', event.target.href)

        this.handle()

        document.documentElement.classList.remove('home')
        document.documentElement.classList.remove('exploration')
        document.documentElement.classList.remove('universe')
        document.documentElement.classList.add(event.target.classList)
    }

    handle () {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => data.text())
            .then(html => document.querySelector("#app").innerHTML = html)
    }

    

}