function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // PEGAR A TAG IMG
    const img = document.querySelector("#profile img")

    // SUBSTITUIR A IMAGEM
    if(html.classList.contains('light')) {
    // SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
        img.setAttribute('src', './assets/assets/avatar-light.png')
    
    // SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL
    } else {
        img.setAttribute('src', './assets/assets/avatar.png')
    }
}