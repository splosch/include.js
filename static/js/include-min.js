!function(n,s){n[s]=function(c,h){var d=document,i="body",l=function(){},o={},m=0,j=1,k=d.createElement('div');!c.pop&&(c=[c]);h=h||l;k.id=Date();function t(e,f,p,g){g=d.createElement("script");m++;g.onload=g.onreadystatechange=function(a,b){b=0,a=this.readyState||a.type;if(!a.search("load|complete")){p?(e=function(){n[p]?q(f):setTimeout(e,j);++b>j&&(e=l)})():q(f)}};g.async=!0;g.src=e;d[i].appendChild(g)}function q(a){a();!--m&&h()}function u(a,b,e,f){b=d.getElementsByTagName("script");f=l;for(a in b)b[a].src&&(o[b[a].src]=a);for(a=c.length;a--;)c[a].pop?(b=c[a][0],f=c[a][1],e=c[a][2]):(b=c[a]),o[b]?f():t(b,f,e);!m&&h()}!function r(){if(!d[i])return setTimeout(r,j);d[i].appendChild(k);if(!d.getElementById(k.id))return setTimeout(r,j);d[i].removeChild(k);u()}()}}(this,'include')