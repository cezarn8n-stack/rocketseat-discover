/* =========================================================
   CATARINA GUERRA — LINKS OFICIAIS

   O JAVASCRIPT NÃO ALTERA:
   - foto
   - tamanho
   - coração
   - ícones
   - estrutura
   - posição

   Ele altera SOMENTE o tema.
   ========================================================= */


const html =
    document.documentElement

const themeSwitch =
    document.querySelector("#theme-switch")

const themeColor =
    document.querySelector(
        'meta[name="theme-color"]'
    )

const STORAGE_KEY =
    "catarina-theme"


/* =========================================================
   CORES DA BARRA DO NAVEGADOR
   ========================================================= */

const THEME_COLORS = {
    light: "#ef4a9a",
    dark: "#03132d"
}


/* =========================================================
   APLICA O TEMA
   ========================================================= */

function applyTheme(theme) {

    const isLight =
        theme === "light"


    /*
       ÚNICA CLASSE DE TEMA
    */

    html.classList.toggle(
        "light",
        isLight
    )


    /*
       ELEMENTOS NATIVOS
    */

    html.style.colorScheme =
        isLight
            ? "light"
            : "dark"


    /*
       ACESSIBILIDADE
    */

    themeSwitch.setAttribute(
        "aria-pressed",
        String(!isLight)
    )


    /*
       COR DO NAVEGADOR MOBILE
    */

    if (themeColor) {

        themeColor.setAttribute(
            "content",
            THEME_COLORS[theme]
        )

    }


    /*
       SALVA PREFERÊNCIA
    */

    localStorage.setItem(
        STORAGE_KEY,
        theme
    )
}


/* =========================================================
   ALTERNAR TEMA
   ========================================================= */

function toggleTheme() {

    const currentlyLight =
        html.classList.contains("light")


    const nextTheme =
        currentlyLight
            ? "dark"
            : "light"


    applyTheme(nextTheme)
}


/* =========================================================
   CARREGAR TEMA SALVO
   ========================================================= */

function loadSavedTheme() {

    const savedTheme =
        localStorage.getItem(
            STORAGE_KEY
        )


    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {

        applyTheme(savedTheme)

        return
    }


    /*
       PRIMEIRO ACESSO:
       MODO CLARO / ROSA
    */

    applyTheme("light")
}


/* =========================================================
   LINKS EXTERNOS
   ========================================================= */

const mobileViewport =
    window.matchMedia(
        "(max-width: 699px)"
    )


function configureExternalLinks() {

    const links =
        document.querySelectorAll(
            ".link-card, .social-link"
        )


    links.forEach((link) => {

        /*
           MOBILE:
           abre no mesmo contexto.

           Isso reduz a demora para entregar
           Instagram/Threads ao aplicativo.
        */

        if (mobileViewport.matches) {

            link.removeAttribute(
                "target"
            )

            return
        }


        /*
           DESKTOP:
           abre em nova aba.
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
    typeof mobileViewport.addEventListener
    === "function"
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