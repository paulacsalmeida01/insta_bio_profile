function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem e o alt
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light e 
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta, barba e fundo degradê azul.")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos de grau e camisa preta, barba e fundo amarelo.")
    }
}