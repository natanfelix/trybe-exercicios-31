
let condicao = 'aprovada';


switch (condicao) {
    case 'aprovada':
        console.log ('Parabéns, você está no grupo de pessoas aprovadas.');
   break;
   case 'lista':
    console.log ('Você está na nossa lista de espera.');
    break;
    case 'reprovada':
        console.log ('Infelizemente você reprovou.');
    break;
    default:
        console.log ('Informação incorreta.')
}
