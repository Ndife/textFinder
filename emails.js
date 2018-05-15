var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`;

name = [];
email = [];
phone = [];
for(i of text.split("\n")){
nStart = 0;
nLast = i.indexOf("<");
eStart = i.indexOf("<");
eLast = i.indexOf(">");
pStart = i.indexOf("+");
pLast = text.length;

name.push(i.substring(nStart, nLast));
email.push(i.substring(eStart,eLast));
phone.push(i.substring(pStart, pLast));
}
finalEmail = [];
email.forEach(function(element) {
    element = element.replace(/<|>/g, "");
    finalEmail.push(element);
}, this);
console.log(name,finalEmail,phone);
