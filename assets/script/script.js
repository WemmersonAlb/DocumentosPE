               
var requisito_mes = 0
var requisito_veiculo = 0
var requisito_categoria = 0;
function ipva(){
    
    var mes = Number(document.getElementById('mes').value)        //captação de tratamento de dados
    var veiculo = Number(document.getElementById('veiculo').value)//captação de tratamento de dados
    if(document.getElementById('um').checked == false  &&  document.getElementById('dois').checked == false  &&  document.getElementById('tres').checked == false  &&  document.getElementById('quatro').checked == false  &&  document.getElementById('cinco').checked == false  &&  document.getElementById('seis').checked == false){//verifica se alguma categoria foi selecionada
        alert("Escolha uma categoria para seu Veículo")
    }else{requisito_categoria = 1}//informa que a condição foi satisfeita
    if(mes<1 || mes>13){
        alert('Digite um mês válido')
    }else{requisito_mes = 1}//informa que a condição foi satisfeita
    if(veiculo<1000){
        alert("Digite o valor válido para seu veículo zero")
    }else{requisito_veiculo = 1}//informa que a condição foi satisfeita
    if(requisito_categoria == 1  && requisito_mes == 1 && requisito_veiculo == 1){//se todas as condições foram satisfeitas, dá início ao cálculo
        
        var resultado1 = document.getElementById('resultado1')//localiza onde o resultado deve ser exibido
        
        var Dia_mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//anteriormente este sistema era sensivel ao dia, e não ao mês, por isso a especificação dos dias de cada mês
        var n = 0 //auxilia no somatorio dos meses com o número de dias total
        var seguro = 0//cria a variavel "seguro obrigatorio"
        var i = mes //salva o mes do ano para posterior soma dos meses
        var aliquota = 0.0 //taxa do ipva por categoria 
        if(document.getElementById('um').checked == true){              //serve para determinar o percentual de taxa para cálcular o ipva em cada categoria 
        aliquota = 1.0
        if (i<=4){
            seguro = 15
        }else if(4<i<=8){
            seguro = 10
        }else if(8<i){ 
            seguro = 6
        }
        }else if(document.getElementById('dois').checked == true){
        aliquota = 2.5
        if (i<=4){
            seguro = 15
        }else if(4<i<=8){
            seguro = 10
        }else if(8<i){
            seguro = 6
        }
        }else if(document.getElementById('tres').checked == true){
        aliquota = 3.0
        if (i<=4){
            seguro = 15
        }else if(4<i<=8){
            seguro = 10
        }else if(8<i){
            seguro = 6
        }
        }else if(document.getElementById('quatro').checked == true){
            aliquota = 3.5
        if (i<=4){
            seguro = 15
        }else if(4<i<=8){
            seguro = 10
        }else if(8<i){
            seguro = 6
        }
        }else if(document.getElementById('cinco').checked == true){//
        aliquota = 3.0
        seguro = 5
        }else if(document.getElementById('seis').checked == true){
        aliquota = 4.0
        seguro = 5
        }
        while(i<=11){//somatorio dos meses
        n+=Dia_mes[i]
        i++
        }
        n+=31//ajuste para que em dezembro tenha 1 mês para se calcular (sem isso o dezembro não é contado)
        var desconto = (aliquota/365)*n//calculo propriamente dito do ipva
        
        ipva = (veiculo/100)*desconto
        var valorLicenciamento = ((veiculo/100)*aliquota) + 120+ 40;
        var ipva_localizado = ipva.toLocaleString('pt-br',{style:'currency', currency:'BRL'})//localiza o preço para real
        var emplacamento_l = ipva+210//auxilia na localização do preço para real
        var emplacamento_localizado = emplacamento_l.toLocaleString('pt-br',{style:'currency', currency:'BRL'})//localiza o preço para real
        var valorLicenciamento1 = valorLicenciamento.toLocaleString('pt-br',{style:'currency', currency:'BRL'})//localizar o resultado para o preço em real

        resultado1.innerHTML=`${ipva_localizado}`//exibe o valor do ipva sozinho
        var taxas = document.getElementById('taxas')//localiza onde será exibido o ipva + taxas
        taxas.innerHTML=`${emplacamento_localizado}`//exibe ipva mas outras taxas do primeiro emplacamento
        var licenciamento = document.getElementById('resultado2')//localiza onde será exibido o ipva com as taxas de licenciamento
        licenciamento.innerHTML=`${valorLicenciamento1}`//exibe o valor do licenciamento
        
    }
}
function limpar1(){
    location.reload()//reseta a página possibilitando novo cálculo
}