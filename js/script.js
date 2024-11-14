const mudar=document.querySelector('#mudar')
const btpreto=document.querySelector('#btpreto')
const btbranco=document.querySelector('#btbranco')
const btazul=document.querySelector('#btazul')

btpreto.addEventListener('click',preto)
btbranco.addEventListener('click',branco)
btazul.addEventListener('click',azul)

function preto(){
mudar.src='imagem/97360931.avif'


}

function branco(){
mudar.src='imagem/98140351.avif'

    
}


function azul(){
mudar.src='imagem/Tenis-Adidas-VL-Court-30--Azul-Masculino.png'

    
}