var a, b=1;
a  = document.querySelector("img#imagem");
function passador (x){
            switch (x){
                case 1:
                    a.setAttribute('src', 'img/carrossel/1.png');
                    break;
                case 2:
                    a.setAttribute('src', 'img/carrossel/2.png');
                    break;
                case 3:
                    a.setAttribute('src', 'img/carrossel/3.png');
                    break;
                case 4:
                    a.setAttribute('src', 'img/carrossel/4.png');
                    break;
                case 5:
                    a.setAttribute('src', 'img/carrossel/5.png');
                    break;
                case 6:
                    a.setAttribute('src', 'img/carrossel/6.png');
                    break;
                case 7:
                    a.setAttribute('src', 'img/carrossel/7.png');
                    break;
                case 8:
                    a.setAttribute('src', 'img/carrossel/8.png');
                    break;
                case 9:
                    a.setAttribute('src', 'img/carrossel/9.png');
                    break;
                case 10:
                    a.setAttribute('src', 'img/carrossel/10.png');
                    break;
                case 11:
                    a.setAttribute('src', 'img/carrossel/11.png');
                    break;
            }
}
function direita(){
            b>10?b=1:b+=1;
            passador(b);
}
        
function esquerda(){
            b<2?b=11:b-=1;
            passador(b);
}