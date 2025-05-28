function toggleMode() {
    const html = document.documentElement
    /* toggle faz mesma coisa que if */
    html.classList.toggle('light')

 // if(html.classList.contains('light')){
 //   html.classList.remove('light')
 //   } else {
//     html.classList.add('light')
//  }

    // pegar a tag img 
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
     //se tiver light mode, adiconar a img light
     img.setAttribute('src','assets/avatar-light.png')
    } else {
    //se tiver sem  light mode, adiconar a img normal 
    img.setAttribute('src','assets/Subtract.png')
    }

  }



