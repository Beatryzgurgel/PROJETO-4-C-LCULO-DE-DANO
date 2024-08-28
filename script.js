let name = prompt('Digite o nome do seu personagem')
let power = parselnt(prompt('Digite o nivel do poder do seu personagem'))
let name2 = ('Digite o nome do outro personagem')
let helthpoints2 = (prompt('digite a vida do outro personagem'))
let defense = parselnt(prompt('Digite o nivel da defesa do outro personagem'))
let shield = parselnt(prompt('o outro personagem possui escudo?'))
if (power>defense && shield=='não'){
    alert('${name} atacou. ${name2} sofreu ${power-defense} de dano e não possui escudo. sua vida agora é ${healthpoint- (power-defense)')
}else if (shield=='sim'){
    alert('${name1} + atacou.+${name2}+ sofreu ${pawer-defense}+ de dano e não possui escudo. sua vida agora e ${defense-(power-defense')
}
else{
    alert('${name1} atacou mas não defendeu o ${name2} nenhum dano causado, sua vida agora e ${defense}')
}