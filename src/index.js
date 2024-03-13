import { Router } from "./router.js";

const router = new Router();

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')

window.onpopstate = () => router.route()
window.route = () => router.route();

router.handle()