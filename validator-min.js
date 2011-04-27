/*!
 * Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function(a){function l(a){out="",a.replace(/\\s*[a-z\-]+\\s*=\\s*(?:\042|\047)(?:[^\\1]*?)\\1/gi,function(a){$out+=a.replace(/\/\*.*?\*\//g,"")});return out}function k(a){return a.replace(">","&gt;").replace("<","&lt;").replace("\\","\\\\")}function j(){return"!*$^#(@*#&"}function i(a){for(var b in g)a=a.replace(g[b],"");return a}var b={'&nbsp;':'\u00a0','&iexcl;':'\u00a1','&cent;':'\u00a2','&pound;':'\u00a3','&curren;':'\u20ac','&yen;':'\u00a5','&brvbar;':'\u0160','&sect;':'\u00a7','&uml;':'\u0161','&copy;':'\u00a9','&ordf;':'\u00aa','&laquo;':'\u00ab','&not;':'\u00ac','&shy;':'\u00ad','&reg;':'\u00ae','&macr;':'\u00af','&deg;':'\u00b0','&plusmn;':'\u00b1','&sup2;':'\u00b2','&sup3;':'\u00b3','&acute;':'\u017d','&micro;':'\u00b5','&para;':'\u00b6','&middot;':'\u00b7','&cedil;':'\u017e','&sup1;':'\u00b9','&ordm;':'\u00ba','&raquo;':'\u00bb','&frac14;':'\u0152','&frac12;':'\u0153','&frac34;':'\u0178','&iquest;':'\u00bf','&Agrave;':'\u00c0','&Aacute;':'\u00c1','&Acirc;':'\u00c2','&Atilde;':'\u00c3','&Auml;':'\u00c4','&Aring;':'\u00c5','&AElig;':'\u00c6','&Ccedil;':'\u00c7','&Egrave;':'\u00c8','&Eacute;':'\u00c9','&Ecirc;':'\u00ca','&Euml;':'\u00cb','&Igrave;':'\u00cc','&Iacute;':'\u00cd','&Icirc;':'\u00ce','&Iuml;':'\u00cf','&ETH;':'\u00d0','&Ntilde;':'\u00d1','&Ograve;':'\u00d2','&Oacute;':'\u00d3','&Ocirc;':'\u00d4','&Otilde;':'\u00d5','&Ouml;':'\u00d6','&times;':'\u00d7','&Oslash;':'\u00d8','&Ugrave;':'\u00d9','&Uacute;':'\u00da','&Ucirc;':'\u00db','&Uuml;':'\u00dc','&Yacute;':'\u00dd','&THORN;':'\u00de','&szlig;':'\u00df','&agrave;':'\u00e0','&aacute;':'\u00e1','&acirc;':'\u00e2','&atilde;':'\u00e3','&auml;':'\u00e4','&aring;':'\u00e5','&aelig;':'\u00e6','&ccedil;':'\u00e7','&egrave;':'\u00e8','&eacute;':'\u00e9','&ecirc;':'\u00ea','&euml;':'\u00eb','&igrave;':'\u00ec','&iacute;':'\u00ed','&icirc;':'\u00ee','&iuml;':'\u00ef','&eth;':'\u00f0','&ntilde;':'\u00f1','&ograve;':'\u00f2','&oacute;':'\u00f3','&ocirc;':'\u00f4','&otilde;':'\u00f5','&ouml;':'\u00f6','&divide;':'\u00f7','&oslash;':'\u00f8','&ugrave;':'\u00f9','&uacute;':'\u00fa','&ucirc;':'\u00fb','&uuml;':'\u00fc','&yacute;':'\u00fd','&thorn;':'\u00fe','&yuml;':'\u00ff','&quot;':'\u0022','&lt;':'\u003c','&gt;':'\u003e','&apos;':'\u0027','&minus;':'\u2212','&circ;':'\u02c6','&tilde;':'\u02dc','&Scaron;':'\u0160','&lsaquo;':'\u2039','&OElig;':'\u0152','&lsquo;':'\u2018','&rsquo;':'\u2019','&ldquo;':'\u201c','&rdquo;':'\u201d','&bull;':'\u2022','&ndash;':'\u2013','&mdash;':'\u2014','&trade;':'\u2122','&scaron;':'\u0161','&rsaquo;':'\u203a','&oelig;':'\u0153','&Yuml;':'\u0178','&fnof;':'\u0192','&Alpha;':'\u0391','&Beta;':'\u0392','&Gamma;':'\u0393','&Delta;':'\u0394','&Epsilon;':'\u0395','&Zeta;':'\u0396','&Eta;':'\u0397','&Theta;':'\u0398','&Iota;':'\u0399','&Kappa;':'\u039a','&Lambda;':'\u039b','&Mu;':'\u039c','&Nu;':'\u039d','&Xi;':'\u039e','&Omicron;':'\u039f','&Pi;':'\u03a0','&Rho;':'\u03a1','&Sigma;':'\u03a3','&Tau;':'\u03a4','&Upsilon;':'\u03a5','&Phi;':'\u03a6','&Chi;':'\u03a7','&Psi;':'\u03a8','&Omega;':'\u03a9','&alpha;':'\u03b1','&beta;':'\u03b2','&gamma;':'\u03b3','&delta;':'\u03b4','&epsilon;':'\u03b5','&zeta;':'\u03b6','&eta;':'\u03b7','&theta;':'\u03b8','&iota;':'\u03b9','&kappa;':'\u03ba','&lambda;':'\u03bb','&mu;':'\u03bc','&nu;':'\u03bd','&xi;':'\u03be','&omicron;':'\u03bf','&pi;':'\u03c0','&rho;':'\u03c1','&sigmaf;':'\u03c2','&sigma;':'\u03c3','&tau;':'\u03c4','&upsilon;':'\u03c5','&phi;':'\u03c6','&chi;':'\u03c7','&psi;':'\u03c8','&omega;':'\u03c9','&thetasym;':'\u03d1','&upsih;':'\u03d2','&piv;':'\u03d6','&ensp;':'\u2002','&emsp;':'\u2003','&thinsp;':'\u2009','&zwnj;':'\u200c','&zwj;':'\u200d','&lrm;':'\u200e','&rlm;':'\u200f','&sbquo;':'\u201a','&bdquo;':'\u201e','&dagger;':'\u2020','&Dagger;':'\u2021','&hellip;':'\u2026','&permil;':'\u2030','&prime;':'\u2032','&Prime;':'\u2033','&oline;':'\u203e','&frasl;':'\u2044','&euro;':'\u20ac','&image;':'\u2111','&weierp;':'\u2118','&real;':'\u211c','&alefsym;':'\u2135','&larr;':'\u2190','&uarr;':'\u2191','&rarr;':'\u2192','&darr;':'\u2193','&harr;':'\u2194','&crarr;':'\u21b5','&lArr;':'\u21d0','&uArr;':'\u21d1','&rArr;':'\u21d2','&dArr;':'\u21d3','&hArr;':'\u21d4','&forall;':'\u2200','&part;':'\u2202','&exist;':'\u2203','&empty;':'\u2205','&nabla;':'\u2207','&isin;':'\u2208','&notin;':'\u2209','&ni;':'\u220b','&prod;':'\u220f','&sum;':'\u2211','&lowast;':'\u2217','&radic;':'\u221a','&prop;':'\u221d','&infin;':'\u221e','&ang;':'\u2220','&and;':'\u2227','&or;':'\u2228','&cap;':'\u2229','&cup;':'\u222a','&int;':'\u222b','&there4;':'\u2234','&sim;':'\u223c','&cong;':'\u2245','&asymp;':'\u2248','&ne;':'\u2260','&equiv;':'\u2261','&le;':'\u2264','&ge;':'\u2265','&sub;':'\u2282','&sup;':'\u2283','&nsub;':'\u2284','&sube;':'\u2286','&supe;':'\u2287','&oplus;':'\u2295','&otimes;':'\u2297','&perp;':'\u22a5','&sdot;':'\u22c5','&lceil;':'\u2308','&rceil;':'\u2309','&lfloor;':'\u230a','&rfloor;':'\u230b','&lang;':'\u2329','&rang;':'\u232a','&loz;':'\u25ca','&spades;':'\u2660','&clubs;':'\u2663','&hearts;':'\u2665','&diams;':'\u2666'},c=function(a){if(!~a.indexOf("&"))return a;for(var c in b)a=a.replace(new RegExp(c,"g"),b[c]);a=a.replace(/&#x(0*[0-9a-f]{2,5});?/gi,function(a,b){return String.fromCharCode(parseInt(+b,16))}),a=a.replace(/&#([0-9]{2,4});?/gi,function(a,b){return String.fromCharCode(+b)}),a=a.replace(/&amp;/g,"&");return a},d=function(a){a=a.replace(/&/g,"&amp;").replace(/'/g, "&#39;");for(var c in b)a=a.replace(new RegExp(b[c],"g"),c);return a};a.entities={encode:d,decode:c};var e={"document.cookie":"[removed]","document.write":"[removed]",".parentNode":"[removed]",".innerHTML":"[removed]","window.location":"[removed]","-moz-binding":"[removed]","<!--":"&lt;!--","-->":"--&gt;","<![CDATA[":"&lt;![CDATA["},f={"javascript\\s*:":"[removed]","expression\\s*(\\(|&\\#40;)":"[removed]","vbscript\\s*:":"[removed]","Redirect\\s+302":"[removed]"},g=[/%0[0-8bcef]/g,/%1[0-9a-f]/g,/[\x00-\x08]/g,/\x0b/g,/\x0c/g,/[\x0e-\x1f]/g],h=["javascript","expression","vbscript","script","applet","alert","document","write","cookie","window"];a.xssClean=function(a,b){if(typeof a==="array"||typeof a==="object"){for(var c in a)a[c]=a.xssClean(a[c]);return a}a=i(a),a=a.replace(/\&([a-z\_0-9]+)\=([a-z\_0-9]+)/i,j()+"$1=$2"),a=a.replace(/(&\#?[0-9a-z]{2,})([\x00-\x20])*;?/i,"$1;$2"),a=a.replace(/(&\#x?)([0-9A-F]+);?/i,"$1;$2"),a=a.replace(j(),"&"),a=decodeURIComponent(a),a=a.replace(/[a-z]+=([\'\"]).*?\\1/gi,function(a,b){return a.replace(b,k(b))}),a=a.replace(/<\w+.*?(?=>|<|$)/gi,function(a,b){}),a=i(a),a=a.replace("\t"," ");var d=a;for(var c in e)a=a.replace(c,e[c]);for(var c in f)a=a.replace(new RegExp(c,"i"),f[c]);for(var c in h){var g=h[c].split("").join("\\s*")+"\\s*";a=a.replace(new RegExp("("+g+")(\\W)","ig"),function(a,b,c){return b.replace(/\s+/g,"")+c})}do{var m=a;a.match(/<a/i)&&(a=a.replace(/<a\\s+([^>]*?)(>|$)/gi,function(a,b,c){b=l(b.replace("<","").replace(">",""));return a.replace(b,b.replace(/href=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\\s*,)/gi,""))})),a.match(/<img/i)&&(a=a.replace(/<img\\s+([^>]*?)(\\s?\/?>|$)/gi,function(a,b,c){b=l(b.replace("<","").replace(">",""));return a.replace(b,b.replace(/src=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\\s*,)/gi,""))}));if(a.match(/script/i)||a.match(/xss/i))a=a.replace(/<(\/*)(script|xss)(.*?)\>/gi,"[removed]")}while(m!=a);event_handlers=["[^a-z_-]onw*"],b||event_handlers.push("xmlns"),a=a.replace(new RegExp("<([^><]+?)("+event_handlers.join("|")+")(\\s*=\\s*[^><]*)([><]*)","i"),"<$1$4"),naughty="alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss",a=a.replace(new RegExp("<(/*\\s*)("+naughty+")([^><]*)([><]*)","gi"),function(a,b,c,d,e){return"&lt;"+b+c+d+e.replace(">","&gt;").replace("<","&lt;")}),a=a.replace(/(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\\s*)\((.*?)\)/gi,"$1$2&#40;$3&#41;");for(var c in e)a=a.replace(c,e[c]);for(var c in f)a=a.replace(new RegExp(c,"i"),f[c]);if(b&&a!==d)throw"Image may contain XSS";return a};var m=a.Validator=function(){};m.prototype.check=function(a,b){this.str=str==null?'':str+'';this.msg=b;return this},m.prototype.validate=m.prototype.check,m.prototype.assert=m.prototype.check,m.prototype.error=function(a){throw a},m.prototype.isEmail=function(){this.str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)||this.error(this.msg||"Invalid email");return this},m.prototype.isUrl=function(){this.str.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/)||this.error(this.msg||"Invalid URL");return this},m.prototype.isIP=function(){this.str.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)||this.error(this.msg||"Invalid IP");return this},m.prototype.isAlpha=function(){this.str.match(/^[a-zA-Z]+$/)||this.error(this.msg||"Invalid characters");return this},m.prototype.isAlphanumeric=function(){this.str.match(/^[a-zA-Z0-9]+$/)||this.error(this.msg||"Invalid characters");return this},m.prototype.isNumeric=function(){this.str.match(/^-?[0-9]+$/)||this.error(this.msg||"Invalid number");return this},m.prototype.isLowercase=function(){this.str.match(/^[a-z0-9]+$/)||this.error(this.msg||"Invalid characters");return this},m.prototype.isUppercase=function(){this.str.match(/^[A-Z0-9]+$/)||this.error(this.msg||"Invalid characters");return this},m.prototype.isInt=function(){this.str.match(/^(?:-?(?:0|[1-9][0-9]*))$/)||this.error(this.msg||"Invalid integer");return this},m.prototype.isDecimal=function(){this.str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)||this.error(this.msg||"Invalid decimal");return this},m.prototype.isFloat=function(){return this.isDecimal()},m.prototype.notNull=function(){this.str===""&&this.error(this.msg||"Invalid characters");return this},m.prototype.isNull=function(){this.str!==""&&this.error(this.msg||"Invalid characters");return this},m.prototype.notEmpty=function(){this.str.match(/^[\s\t\r\n]*$/)&&this.error(this.msg||"String is whitespace");return this},m.prototype.equals=function(a){this.str!=a&&this.error(this.msg||"Not equal");return this},m.prototype.contains=function(a){this.str.indexOf(a)===-1&&this.error(this.msg||"Invalid characters");return this},m.prototype.notContains=function(a){this.str.indexOf(a)>=0&&this.error(this.msg||"Invalid characters");return this},m.prototype.regex=m.prototype.is=function(a,b){typeof a!=="function"&&(a=new RegExp(a,b)),this.str.match(a)||this.error(this.msg||"Invalid characters");return this},m.prototype.notRegex=m.prototype.not=function(a,b){typeof a!=="function"&&(a=new RegExp(a,b)),this.str.match(a)&&this.error(this.msg||"Invalid characters");return this},m.prototype.len=function(a,b){this.str.length<a&&this.error(this.msg||"String is too small"),typeof b!==undefined&&this.str.length>b&&this.error(this.msg||"String is too large");return this},m.prototype.isUUID=function(a){a==3||a=="v3"?pattern=/[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i:a==4||a=="v4"?pattern=/[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i:pattern=/[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,this.str.match(pattern)||this.error(this.msg||"Not a UUID");return this};var n=a.Filter=function(){},o="\\r\\n\\t\\s";n.prototype.modify=function(a){this.str=a},n.prototype.convert=n.prototype.sanitize=function(a){this.str=a;return this},n.prototype.xss=function(a){this.modify(xssClean(this.str,a));return this.str},n.prototype.entityDecode=function(){this.modify(c(this.str));return this.str},n.prototype.entityEncode=function(){this.modify(d(this.str));return this.str},n.prototype.ltrim=function(a){a=a||o,this.modify(this.str.replace(new RegExp("^["+a+"]+","g"),""));return this.str},n.prototype.rtrim=function(a){a=a||o,this.modify(this.str.replace(new RegExp("["+a+"]+$","g"),""));return this.str},n.prototype.trim=function(a){a=a||o,this.modify(this.str.replace(new RegExp("^["+a+"]+|["+a+"]+$","g"),""));return this.str},n.prototype.ifNull=function(a){(!this.str||this.str==="")&&this.modify(a);return this.str},n.prototype.toFloat=function(){this.modify(parseFloat(this.str));return this.str},n.prototype.toInt=function(){this.modify(parseInt(this.str));return this.str},n.prototype.toBoolean=function(){!this.str||this.str=="0"||this.str=="false"||this.str==""?this.modify(!1):this.modify(!0);return this.str},n.prototype.toBooleanStrict=function(){this.str=="1"||this.str=="true"?this.modify(!0):this.modify(!1);return this.str},a.sanitize=a.convert=function(b){var c=new a.Filter;return c.sanitize(b)},a.check=a.validate=a.assert=function(b,c){var d=new a.Validator;return d.check(b,c)}})(this)

