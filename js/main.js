import { navLinks } from "./elements.js";
import { Router } from "./routes.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/oUniverso", "/pages/universe.html");
router.add("/exploracao", "/pages/explorer.html");

navLinks.forEach((event) => {
  event.addEventListener("click", () => {

    navLinks.forEach((ev) => {
      ev.classList.remove("bold");
    });

    event.classList.add("bold");

    router.route();
  });
});

router.handle();