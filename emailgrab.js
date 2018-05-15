var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`;

  console.log(text.match(/\+.*\d/g));
  console.log(text.match(/\w+\.\w+@\w+\.\w{2,6}/g));
 


   holdName=(text.match(/(\w.*\<)/g));
   names = [];
   holdName.forEach(function(element) {
       element=element.replace(/<|>/, "").trim();
       names.push(element);
   }, this);

   console.log(names);
