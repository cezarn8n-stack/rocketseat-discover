/* =========================================================
   CATARINA GUERRA — LINKS OFICIAIS
   CONTROLE DO TEMA CLARO / ESCURO
   ========================================================= */

const html = document.documentElement
const themeSwitch = document.querySelector("#theme-switch")

const STORAGE_KEY = "catarina-theme"


/* =========================================================
   APLICA O TEMA
   ========================================================= */

function applyTheme(theme) {
    const isLight = theme === "light"

    /*
      A classe "light" é a única coisa que precisamos
      adicionar/remover.

      Todo o restante é controlado pelo CSS.
    */

    html.classList.toggle("light", isLight)


    /*
      Informa ao navegador qual esquema está ativo.
      Isso ajuda elementos nativos do navegador
      a acompanharem corretamente o tema.
    */

    html.style.colorScheme = isLight
        ? "light"
        : "dark"


    /*
      Acessibilidade:
      false = modo claro
      true  = modo escuro
    */

    themeSwitch.setAttribute(
        "aria-pressed",
        String(!isLight)
    )


    /*
      Guarda a escolha do visitante.

      Assim, se ele selecionar o modo escuro
      e atualizar a página, ela continuará escura.
    */

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
   CARREGA A PREFERÊNCIA SALVA
   ========================================================= */

function loadSavedTheme() {
    const savedTheme =
        localStorage.getItem(STORAGE_KEY)

    /*
      Se o visitante já escolheu um tema antes,
      usamos essa escolha.
    */

    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {
        applyTheme(savedTheme)
        return
    }


    /*
      Se nunca escolheu nada,
      mantemos o modo claro como padrão.

      Isso acompanha:
      <html class="light">
      presente no index.html.
    */

    applyTheme("light")
}


/* =========================================================
   EVENTOS
   ========================================================= */

themeSwitch.addEventListener(
    "click",
    toggleTheme
)


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

loadSavedTheme()