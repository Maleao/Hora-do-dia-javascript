var msg = window.document.getElementById('msg') 
var img = window.document.getElementById('imagem') 
var data = new Date() 
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.` 
if (hora >= 0 && hora < 12) { 
    img.src = 'imagens/dia.png' 
    document.body.style.background = '#6e8be9' 
 
} else if (hora >= 12 && hora <= 18) { 
    img.src = 'imagens/tarde.png' 
    document.body.style.background = '#f9e2b6'
   
} else { 
    img.src = 'imagens/noite.png' 
    document.body.style.background = '#006bab'
}