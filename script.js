function preloadThemeImages() {
    const images = [
        "./assets/assets/catarina-modo-escuro.jpeg",
        "./assets/assets/catarina-modo-claro-cut.jpeg",
        "./assets/assets/bg-mobile.jpg",
        "./assets/assets/bg-mobile-light.jpg",
        "./assets/assets/bg-desktop.jpg",
        "./assets/assets/bg-desktop-light.jpg",
        "./assets/assets/moon-stars.svg",
        "./assets/assets/sun.svg"
    ]

    images.forEach((imagePath) => {
        const image = new Image()
        image.src = imagePath
    })
}

function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector("#profile img")

    html.classList.toggle("light")

    if (html.classList.contains("light")) {
        img.setAttribute(
            "src",
            "./assets/assets/catarina-modo-claro-cut.jpeg"
        )

        img.setAttribute(
            "alt",
            "Foto de perfil da Catarina no modo claro"
        )
    } else {
        img.setAttribute(
            "src",
            "./assets/assets/catarina-modo-escuro.jpeg"
        )

        img.setAttribute(
            "alt",
            "Foto de perfil da Catarina no modo escuro"
        )
    }
}

window.addEventListener("load", preloadThemeImages)