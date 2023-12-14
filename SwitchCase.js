// switch: testa a variavél
// case: variavél que significa caso seja algo realize isso...
// break: faz com que o case para de ser executado
// default: um case padrão / semelhante ao else / não é obrigatório
// switch case: também pode ser utilizado com números, exemplo: case 1:
// possibilidade de case: podem ter mais de um case, console entre outras coisas, que realiza a mesma ação no mesmo bloco

let fruta = "banana"

switch(fruta){
	case "laranja":
	console.log("suco de laranja")
	break

	case "banana":
	case "morango":
	console.log("vitamina de " + fruta)
	break

	case "maça":
	console.log("suco de maça")
	break

	default:
	console.log("suco genérico")
}
