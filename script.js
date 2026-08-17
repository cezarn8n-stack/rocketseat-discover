/* =========================================================
   CATARINA GUERRA — LINKS OFICIAIS
   TEMA + OTIMIZAÇÕES MOBILE
   ========================================================= */

const html = document.documentElement
const themeSwitch = document.querySelector("#theme-switch")

const STORAGE_KEY = "catarina-theme"


/* =========================================================
   APLICA O TEMA
   ========================================================= */

function applyTheme(theme) {
    const isLight = theme === "light"

    html.classList.toggle("light", isLight)

    html.style.colorScheme = isLight
        ? "light"
        : "dark"

    themeSwitch.setAttribute(
        "aria-pressed",
        String(!isLight)
    )

    localStorage.setItem(
        STORAGE_KEY,
        theme
    )
}


/* =========================================================
   ALTERNA O TEMA
   ========================================================= */

function toggleTheme() {
    const isCurrentlyLight =
        html.classList.contains("light")

    const nextTheme =
        isCurrentlyLight
            ? "dark"
            : "light"

    applyTheme(nextTheme)
}


/* =========================================================
   CARREGA O TEMA SALVO
   ========================================================= */

function loadSavedTheme() {
    const savedTheme =
        localStorage.getItem(STORAGE_KEY)

    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {
        applyTheme(savedTheme)
        return
    }

    applyTheme("light")
}


/* =========================================================
   LINKS — OTIMIZAÇÃO MOBILE
   ========================================================= */

const mobileViewport =
    window.matchMedia("(max-width: 699px)")


function configureExternalLinks() {
    const links =
        document.querySelectorAll(
            ".link-card, .social-link"
        )

    links.forEach((link) => {

        /*
           No celular:
           navegação no mesmo contexto.
        */

        if (mobileViewport.matches) {
            link.removeAttribute("target")
            return
        }

        /*
           No computador:
           continua abrindo em nova aba.
        */

        link.setAttribute(
            "target",
            "_blank"
        )
    })
}


/* =========================================================
   EVENTOS
   ========================================================= */

themeSwitch.addEventListener(
    "click",
    toggleTheme
)


if (
    typeof mobileViewport.addEventListener === "function"
) {
    mobileViewport.addEventListener(
        "change",
        configureExternalLinks
    )
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

loadSavedTheme()

configureExternalLinks()