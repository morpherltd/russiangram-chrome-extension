(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tables.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion-header\" id=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":2,"column":60},"end":{"line":2,"column":70}}}) : helper)))
    + "\">\n        <button class=\"accordion-button\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":55}}}) : helper)))
    + "\"\n                aria-expanded=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"first") || (data && lookupProperty(data,"first"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":41}}}) : helper)))
    + "\" aria-controls=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":73},"end":{"line":5,"column":83}}}) : helper)))
    + "\">\n                <span class=\"lemma\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":11,"column":27}}})) != null ? stack1 : "")
    + "                </span>\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isProper") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":41}}})) != null ? stack1 : "")
    + " "
    + alias4((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":13,"column":42},"end":{"line":13,"column":56}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gender") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":56},"end":{"line":13,"column":95}}})) != null ? stack1 : "")
    + ", "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAnimate") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":13,"column":97},"end":{"line":14,"column":43}}})) != null ? stack1 : "")
    + "\n        </button>\n    </div>\n\n    <div id=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":38}}}) : helper)))
    + "\" class=\"accordion-collapse collapse"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":74},"end":{"line":18,"column":101}}})) != null ? stack1 : "")
    + "\"\n         aria-labelledby=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":19,"column":48},"end":{"line":19,"column":58}}}) : helper)))
    + "\" data-parent=\"#declensionTables\">\n        <div class=\"accordion-body\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"noun-table"),depth0,{"name":"noun-table","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"stressed","first",((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":8,"column":24},"end":{"line":8,"column":74}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"stressed","first",((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":10,"column":72}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "proper";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"gender") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":13,"column":72},"end":{"line":13,"column":88}}}));
},"10":function(container,depth0,helpers,partials,data) {
    return "\n            animate";
},"12":function(container,depth0,helpers,partials,data) {
    return "inanimate";
},"14":function(container,depth0,helpers,partials,data) {
    return " show ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <table>\n        <thead>\n        <tr>\n            <th></th>\n            <th>Singular</th>\n            <th>Plural</th>\n        </tr>\n        </thead>\n        <tbody>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"title":"Nominative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"title":"Genitive"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"title":"Dative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"title":"Accusative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"title":"Instrumental"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"title":"Locative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"locative2") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":59,"column":15}}})) != null ? stack1 : "")
    + "\n        </tbody>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"patronymics") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":8},"end":{"line":75,"column":15}}})) != null ? stack1 : "")
    + "    </table>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th>\n                    Locative<sub>2</sub>\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"stressed","join",(depth0 != null ? lookupProperty(depth0,"locative2") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":55,"column":20},"end":{"line":55,"column":59}}})) != null ? stack1 : "")
    + "\n                </td>\n                <td></td>\n            </tr>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"patronymics") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":12},"end":{"line":74,"column":21}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"masculine") : depth0),{"name":"with","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":16},"end":{"line":68,"column":25}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"feminine") : depth0),{"name":"with","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":16},"end":{"line":72,"column":25}}})) != null ? stack1 : "")
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"patronymic-table"),depth0,{"name":"patronymic-table","hash":{"title":"Masculine Patronymic"},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"patronymic-table"),depth0,{"name":"patronymic-table","hash":{"title":"Feminine Patronymic"},"data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n        <th colspan=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title-colspan") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":81,"column":21},"end":{"line":81,"column":75}}})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":82,"column":12},"end":{"line":82,"column":21}}}) : helper)))
    + "\n        </th>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"singular") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":85,"column":12},"end":{"line":85,"column":50}}})) != null ? stack1 : "")
    + "\n        </td>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"plural") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":88,"column":12},"end":{"line":88,"column":48}}})) != null ? stack1 : "")
    + "\n        </td>\n    </tr>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title-colspan") || (depth0 != null ? lookupProperty(depth0,"title-colspan") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title-colspan","hash":{},"data":data,"loc":{"start":{"line":81,"column":42},"end":{"line":81,"column":59}}}) : helper)));
},"28":function(container,depth0,helpers,partials,data) {
    return "1";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <thead>\n    <tr>\n        <th></th>\n        <th colspan=\"2\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":97,"column":24},"end":{"line":97,"column":33}}}) : helper)))
    + "</th>\n    </tr>\n    </thead>\n    <tbody>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"title":"Nominative"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"title":"Genitive"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"title":"Dative"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"title":"Accusative"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"title":"Instrumental"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"singular":((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"title":"Locative"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </tbody>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion-header\" id=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":118,"column":60},"end":{"line":118,"column":70}}}) : helper)))
    + "\">\n        <button class=\"accordion-button\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":120,"column":45},"end":{"line":120,"column":55}}}) : helper)))
    + "\"\n                aria-expanded=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"first") || (data && lookupProperty(data,"first"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data,"loc":{"start":{"line":121,"column":31},"end":{"line":121,"column":41}}}) : helper)))
    + "\" aria-controls=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":121,"column":73},"end":{"line":121,"column":83}}}) : helper)))
    + "\">\n            <span class=\"lemma\">"
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","first",((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":122,"column":32},"end":{"line":122,"column":83}}})) != null ? stack1 : "")
    + "</span> "
    + alias4((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":122,"column":91},"end":{"line":122,"column":105}}}))
    + "\n        </button>\n    </div>\n\n    <div id=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":126,"column":28},"end":{"line":126,"column":38}}}) : helper)))
    + "\" class=\"accordion-collapse collapse"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":126,"column":74},"end":{"line":126,"column":101}}})) != null ? stack1 : "")
    + "\"\n         aria-labelledby=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":127,"column":48},"end":{"line":127,"column":58}}}) : helper)))
    + "\" data-parent=\"#declensionTables\">\n        <div class=\"accordion-body\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"surname-table"),depth0,{"name":"surname-table","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <table>\n        <thead>\n        <tr>\n            <th></th>\n            <th>Masculine</th>\n            <th>Feminine</th>\n            <th>Plural</th>\n        </tr>\n        </thead>\n        <tbody>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"masculine-feminine-plural-tr"),depth0,{"name":"masculine-feminine-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"title":"Nominative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"masculine-feminine-plural-tr"),depth0,{"name":"masculine-feminine-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"title":"Genitive"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"masculine-feminine-plural-tr"),depth0,{"name":"masculine-feminine-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"title":"Dative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"masculine-feminine-plural-tr"),depth0,{"name":"masculine-feminine-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"title":"Accusative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"masculine-feminine-plural-tr"),depth0,{"name":"masculine-feminine-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"title":"Instrumental"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"masculine-feminine-plural-tr"),depth0,{"name":"masculine-feminine-plural-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"title":"Locative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        </tbody>\n    </table>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n        <th>\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":165,"column":12},"end":{"line":165,"column":21}}}) : helper)))
    + "\n        </th>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"masculine") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":168,"column":12},"end":{"line":168,"column":51}}})) != null ? stack1 : "")
    + "\n        </td>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"feminine") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":171,"column":12},"end":{"line":171,"column":50}}})) != null ? stack1 : "")
    + "\n        </td>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"plural") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":174,"column":12},"end":{"line":174,"column":48}}})) != null ? stack1 : "")
    + "\n        </td>\n    </tr>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion-header\" id=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":180,"column":60},"end":{"line":180,"column":70}}}) : helper)))
    + "\">\n        <button class=\"accordion-button\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":182,"column":45},"end":{"line":182,"column":55}}}) : helper)))
    + "\"\n                aria-expanded=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"first") || (data && lookupProperty(data,"first"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data,"loc":{"start":{"line":183,"column":31},"end":{"line":183,"column":41}}}) : helper)))
    + "\" aria-controls=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":183,"column":73},"end":{"line":183,"column":83}}}) : helper)))
    + "\">\n            <span class=\"lemma\">"
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","first",((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"full") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":184,"column":32},"end":{"line":184,"column":88}}})) != null ? stack1 : "")
    + "</span> "
    + alias4((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":184,"column":96},"end":{"line":184,"column":110}}}))
    + "\n        </button>\n    </div>\n\n    <div id=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":188,"column":28},"end":{"line":188,"column":38}}}) : helper)))
    + "\" class=\"accordion-collapse collapse"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":188,"column":74},"end":{"line":188,"column":101}}})) != null ? stack1 : "")
    + "\"\n         aria-labelledby=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":189,"column":48},"end":{"line":189,"column":58}}}) : helper)))
    + "\" data-parent=\"#declensionTables\">\n        <div class=\"accordion-body\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-table"),depth0,{"name":"adjective-table","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <table>\n        <thead>\n        <tr>\n            <th colspan=\"2\"></th>\n            <th>Masculine</th>\n            <th>Feminine</th>\n            <th>Neuter</th>\n            <th>Plural</th>\n        </tr>\n        </thead>\n        <tbody>\n\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"full") : depth0),{"name":"with","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":209,"column":8},"end":{"line":221,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"short") : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":223,"column":8},"end":{"line":227,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"comparative") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":8},"end":{"line":238,"column":15}}})) != null ? stack1 : "")
    + "\n        </tbody>\n    </table>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"title":"Nominative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"title":"Genitive"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"title":"Dative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"title":"Accusative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"title":"Instrumental"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"title":"Locative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"short") : depth0),{"name":"with","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":224,"column":12},"end":{"line":226,"column":21}}})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"title":"Short"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th colspan=\"2\">\n                    Comparative\n                </th>\n                <td colspan=\"4\" class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"stressed","join",(depth0 != null ? lookupProperty(depth0,"comparative") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":235,"column":20},"end":{"line":235,"column":61}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n        <th colspan=\"2\">\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":247,"column":12},"end":{"line":247,"column":21}}}) : helper)))
    + "\n        </th>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"masculine") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":250,"column":12},"end":{"line":250,"column":51}}})) != null ? stack1 : "")
    + "\n        </td>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"feminine") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":253,"column":12},"end":{"line":253,"column":50}}})) != null ? stack1 : "")
    + "\n        </td>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"neuter") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":256,"column":12},"end":{"line":256,"column":48}}})) != null ? stack1 : "")
    + "\n        </td>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"plural") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":259,"column":12},"end":{"line":259,"column":48}}})) != null ? stack1 : "")
    + "\n        </td>\n    </tr>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion-header\" id=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":265,"column":60},"end":{"line":265,"column":70}}}) : helper)))
    + "\">\n        <button class=\"accordion-button\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":267,"column":45},"end":{"line":267,"column":55}}}) : helper)))
    + "\"\n                aria-expanded=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"first") || (data && lookupProperty(data,"first"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data,"loc":{"start":{"line":268,"column":31},"end":{"line":268,"column":41}}}) : helper)))
    + "\" aria-controls=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":268,"column":73},"end":{"line":268,"column":83}}}) : helper)))
    + "\">\n            <span class=\"lemma\">"
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","first",(depth0 != null ? lookupProperty(depth0,"form") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":269,"column":32},"end":{"line":269,"column":67}}})) != null ? stack1 : "")
    + "</span>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"partsOfSpeech") : depth0),{"name":"each","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":270,"column":12},"end":{"line":272,"column":21}}})) != null ? stack1 : "")
    + "        </button>\n    </div>\n\n    <div id=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":276,"column":28},"end":{"line":276,"column":38}}}) : helper)))
    + "\" class=\"accordion-collapse collapse\"\n         aria-labelledby=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":277,"column":48},"end":{"line":277,"column":58}}}) : helper)))
    + "\" data-parent=\"#declensionTables\">\n        <div class=\"accordion-body\">\n            <p class=\"text-secondary my-1 mx-2\">\n                This word is not inflected.\n            </p>\n        </div>\n    </div>\n";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = (lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||container.hooks.helperMissing).call(alias1,depth0,{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":271,"column":16},"end":{"line":271,"column":32}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":271,"column":32},"end":{"line":271,"column":61}}})) != null ? stack1 : "")
    + "\n";
},"52":function(container,depth0,helpers,partials,data) {
    return ";";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion-header\" id=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":287,"column":60},"end":{"line":287,"column":70}}}) : helper)))
    + "\">\n        <button class=\"accordion-button\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":289,"column":45},"end":{"line":289,"column":55}}}) : helper)))
    + "\"\n                aria-expanded=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"first") || (data && lookupProperty(data,"first"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data,"loc":{"start":{"line":290,"column":31},"end":{"line":290,"column":41}}}) : helper)))
    + "\" aria-controls=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":290,"column":73},"end":{"line":290,"column":83}}}) : helper)))
    + "\">\n            <span class=\"lemma\">"
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","first",((stack1 = (depth0 != null ? lookupProperty(depth0,"cases") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":291,"column":32},"end":{"line":291,"column":79}}})) != null ? stack1 : "")
    + "</span> "
    + alias4((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":291,"column":87},"end":{"line":291,"column":101}}}))
    + "\n        </button>\n    </div>\n\n    <div id=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":295,"column":28},"end":{"line":295,"column":38}}}) : helper)))
    + "\" class=\"accordion-collapse collapse"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":295,"column":74},"end":{"line":295,"column":101}}})) != null ? stack1 : "")
    + "\"\n         aria-labelledby=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":296,"column":48},"end":{"line":296,"column":58}}}) : helper)))
    + "\" data-parent=\"#declensionTables\">\n        <div class=\"accordion-body\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-table"),depth0,{"name":"numeral-table","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <table>\n        <tbody>\n\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"cases") : depth0),{"name":"with","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":307,"column":8},"end":{"line":319,"column":17}}})) != null ? stack1 : "")
    + "\n        </tbody>\n    </table>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-tr"),depth0,{"name":"numeral-tr","hash":{"case":(depth0 != null ? lookupProperty(depth0,"nominative") : depth0),"title":"Nominative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-tr"),depth0,{"name":"numeral-tr","hash":{"case":(depth0 != null ? lookupProperty(depth0,"genitive") : depth0),"title":"Genitive"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-tr"),depth0,{"name":"numeral-tr","hash":{"case":(depth0 != null ? lookupProperty(depth0,"dative") : depth0),"title":"Dative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-tr"),depth0,{"name":"numeral-tr","hash":{"case":(depth0 != null ? lookupProperty(depth0,"accusative") : depth0),"title":"Accusative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-tr"),depth0,{"name":"numeral-tr","hash":{"case":(depth0 != null ? lookupProperty(depth0,"instrumental") : depth0),"title":"Instrumental"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"numeral-tr"),depth0,{"name":"numeral-tr","hash":{"case":(depth0 != null ? lookupProperty(depth0,"locative") : depth0),"title":"Locative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n        <th colspan=\"2\">\n            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":328,"column":12},"end":{"line":328,"column":21}}}) : helper)))
    + "\n        </th>\n        <td class=\"composed\">\n            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"case") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":331,"column":12},"end":{"line":331,"column":46}}})) != null ? stack1 : "")
    + "\n        </td>\n    </tr>\n";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion-header\" id=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":337,"column":60},"end":{"line":337,"column":70}}}) : helper)))
    + "\">\n        <button class=\"accordion-button\" type=\"button\" data-toggle=\"collapse\"\n                data-target=\"#declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":339,"column":45},"end":{"line":339,"column":55}}}) : helper)))
    + "\"\n                aria-expanded=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"first") || (data && lookupProperty(data,"first"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data,"loc":{"start":{"line":340,"column":31},"end":{"line":340,"column":41}}}) : helper)))
    + "\" aria-controls=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":340,"column":73},"end":{"line":340,"column":83}}}) : helper)))
    + "\">\n            <span class=\"lemma\">"
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","first",(depth0 != null ? lookupProperty(depth0,"infinitive") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":341,"column":32},"end":{"line":341,"column":73}}})) != null ? stack1 : "")
    + "</span>\n            "
    + alias4((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":342,"column":12},"end":{"line":342,"column":26}}}))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"aspect") : depth0),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":342,"column":26},"end":{"line":342,"column":65}}})) != null ? stack1 : "")
    + ",\n            "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isTransitive") : depth0),{"name":"if","hash":{},"fn":container.program(64, data, 0),"inverse":container.program(66, data, 0),"data":data,"loc":{"start":{"line":343,"column":12},"end":{"line":343,"column":71}}})) != null ? stack1 : "")
    + "\n        </button>\n    </div>\n\n    <div id=\"declensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":347,"column":28},"end":{"line":347,"column":38}}}) : helper)))
    + "\" class=\"accordion-collapse collapse"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":347,"column":74},"end":{"line":347,"column":101}}})) != null ? stack1 : "")
    + "\"\n         aria-labelledby=\"headingDeclensionTable"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":348,"column":48},"end":{"line":348,"column":58}}}) : helper)))
    + "\" data-parent=\"#declensionTables\">\n        <div class=\"accordion-body\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"verb-table"),depth0,{"name":"verb-table","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"62":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression((lookupProperty(helpers,"lower")||(depth0 && lookupProperty(depth0,"lower"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"aspect") : depth0),{"name":"lower","hash":{},"data":data,"loc":{"start":{"line":342,"column":42},"end":{"line":342,"column":58}}}));
},"64":function(container,depth0,helpers,partials,data) {
    return " transitive";
},"66":function(container,depth0,helpers,partials,data) {
    return " intransitive";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <table>\n        <thead>\n        <tr>\n            <th colspan=\"2\"></th>\n            <th>Singular</th>\n            <th>Plural</th>\n        </tr>\n        </thead>\n        <tbody>\n\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"nonPast") : depth0),{"name":"with","hash":{},"fn":container.program(69, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":366,"column":8},"end":{"line":405,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"past") : depth0),{"name":"with","hash":{},"fn":container.program(71, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":407,"column":8},"end":{"line":440,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"imperative") : depth0),{"name":"with","hash":{},"fn":container.program(73, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":442,"column":8},"end":{"line":444,"column":17}}})) != null ? stack1 : "")
    + "\n        </tbody>\n    </table>\n\n    <table>\n        <thead>\n        <tr>\n            <th colspan=\"2\"></th>\n            <th>Present</th>\n            <th>Past</th>\n        </tr>\n        </thead>\n        <tbody>\n\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(depth0 != null ? lookupProperty(depth0,"gerund") : depth0),{"name":"with","hash":{},"fn":container.program(75, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":459,"column":8},"end":{"line":471,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"participles") : depth0)) != null ? lookupProperty(stack1,"active") : stack1),{"name":"with","hash":{},"fn":container.program(77, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":473,"column":8},"end":{"line":498,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"participles") : depth0)) != null ? lookupProperty(stack1,"passive") : stack1),{"name":"with","hash":{},"fn":container.program(82, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":500,"column":8},"end":{"line":522,"column":17}}})) != null ? stack1 : "")
    + "\n        </tbody>\n    </table>\n\n    <div class=\"participle-tables\" hidden>\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"participles") : depth0)) != null ? lookupProperty(stack1,"active") : stack1)) != null ? lookupProperty(stack1,"nonPast") : stack1),{"name":"with","hash":{},"fn":container.program(87, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":528,"column":8},"end":{"line":530,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"participles") : depth0)) != null ? lookupProperty(stack1,"active") : stack1)) != null ? lookupProperty(stack1,"past") : stack1),{"name":"with","hash":{},"fn":container.program(89, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":532,"column":8},"end":{"line":534,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"participles") : depth0)) != null ? lookupProperty(stack1,"passive") : stack1)) != null ? lookupProperty(stack1,"nonPast") : stack1),{"name":"with","hash":{},"fn":container.program(91, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":536,"column":8},"end":{"line":538,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"participles") : depth0)) != null ? lookupProperty(stack1,"passive") : stack1)) != null ? lookupProperty(stack1,"past") : stack1),{"name":"with","hash":{},"fn":container.program(93, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":540,"column":8},"end":{"line":542,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n\n";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th rowspan=\"3\">\n                    Present\n                </th>\n                <th>\n                    1<sup>st</sup>\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"first") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":375,"column":20},"end":{"line":375,"column":64}}})) != null ? stack1 : "")
    + "\n                </td>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"first") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":378,"column":20},"end":{"line":378,"column":62}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n\n            <tr>\n                <th>\n                    2<sup>nd</sup>\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"second") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":387,"column":20},"end":{"line":387,"column":65}}})) != null ? stack1 : "")
    + "\n                </td>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"second") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":390,"column":20},"end":{"line":390,"column":63}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n\n            <tr>\n                <th>\n                    3<sup>rd</sup>\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = (depth0 != null ? lookupProperty(depth0,"singular") : depth0)) != null ? lookupProperty(stack1,"third") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":399,"column":20},"end":{"line":399,"column":64}}})) != null ? stack1 : "")
    + "\n                </td>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"third") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":402,"column":20},"end":{"line":402,"column":62}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n";
},"71":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th rowspan=\"3\">\n                    Past\n                </th>\n                <th>\n                    masculine\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"masculine") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":416,"column":20},"end":{"line":416,"column":59}}})) != null ? stack1 : "")
    + "\n                </td>\n                <td class=\"composed\" rowspan=\"3\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"plural") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":419,"column":20},"end":{"line":419,"column":56}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n\n            <tr>\n                <th>\n                    feminine\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"feminine") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":428,"column":20},"end":{"line":428,"column":58}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n\n            <tr>\n                <th>\n                    neuter\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"neuter") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":437,"column":20},"end":{"line":437,"column":56}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n";
},"73":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"singular-plural-tr"),depth0,{"name":"singular-plural-tr","hash":{"title-colspan":2,"title":"Imperative"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"75":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th colspan=\"2\">\n                    Gerund\n                </th>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"nonPast") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":465,"column":20},"end":{"line":465,"column":57}}})) != null ? stack1 : "")
    + "\n                </td>\n                <td class=\"composed\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",(depth0 != null ? lookupProperty(depth0,"past") : depth0),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":468,"column":20},"end":{"line":468,"column":54}}})) != null ? stack1 : "")
    + "\n                </td>\n            </tr>\n";
},"77":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th rowspan=\"2\">\n                    Participles\n                </th>\n                <th>\n                    active\n                </th>\n                <td class=\"composed\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"nonPast") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"if","hash":{},"fn":container.program(78, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":482,"column":20},"end":{"line":487,"column":27}}})) != null ? stack1 : "")
    + "                </td>\n                <td class=\"composed\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"past") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"if","hash":{},"fn":container.program(80, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":490,"column":20},"end":{"line":495,"column":27}}})) != null ? stack1 : "")
    + "                </td>\n            </tr>\n";
},"78":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#var-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":483,"column":38},"end":{"line":483,"column":48}}}) : helper)))
    + "-table-participle-active-non-past\" class=\"link\"\n                           data-toggle=\"addition-popup\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"nonPast") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":485,"column":28},"end":{"line":485,"column":86}}})) != null ? stack1 : "")
    + "\n                        </a>\n";
},"80":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#var-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":491,"column":38},"end":{"line":491,"column":48}}}) : helper)))
    + "-table-participle-active-past\" class=\"link\"\n                           data-toggle=\"addition-popup\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"past") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":493,"column":28},"end":{"line":493,"column":83}}})) != null ? stack1 : "")
    + "\n                        </a>\n";
},"82":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\n                <th>\n                    passive\n                </th>\n                <td class=\"composed\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"nonPast") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"if","hash":{},"fn":container.program(83, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":506,"column":20},"end":{"line":511,"column":27}}})) != null ? stack1 : "")
    + "                </td>\n                <td class=\"composed\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"past") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"if","hash":{},"fn":container.program(85, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":514,"column":20},"end":{"line":519,"column":27}}})) != null ? stack1 : "")
    + "                </td>\n            </tr>\n";
},"83":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#var-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":507,"column":38},"end":{"line":507,"column":48}}}) : helper)))
    + "-table-participle-passive-non-past\" class=\"link\"\n                           data-toggle=\"addition-popup\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"nonPast") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":509,"column":28},"end":{"line":509,"column":86}}})) != null ? stack1 : "")
    + "\n                        </a>\n";
},"85":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#var-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":515,"column":38},"end":{"line":515,"column":48}}}) : helper)))
    + "-table-participle-passive-past\" class=\"link\"\n                           data-toggle=\"addition-popup\">\n                            "
    + ((stack1 = (lookupProperty(helpers,"chain")||(depth0 && lookupProperty(depth0,"chain"))||alias2).call(alias1,"stressed","join",((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"past") : depth0)) != null ? lookupProperty(stack1,"masculine") : stack1)) != null ? lookupProperty(stack1,"nominative") : stack1),{"name":"chain","hash":{},"data":data,"loc":{"start":{"line":517,"column":28},"end":{"line":517,"column":83}}})) != null ? stack1 : "")
    + "\n                        </a>\n";
},"87":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"participle-popover"),depth0,{"name":"participle-popover","hash":{"id":"table-participle-active-non-past"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"89":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"participle-popover"),depth0,{"name":"participle-popover","hash":{"id":"table-participle-active-past"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"91":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"participle-popover"),depth0,{"name":"participle-popover","hash":{"id":"table-participle-passive-non-past"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"93":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"participle-popover"),depth0,{"name":"participle-popover","hash":{"id":"table-participle-passive-past"},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"95":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <table id=\"var-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":548,"column":19},"end":{"line":548,"column":29}}}) : helper)))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":548,"column":30},"end":{"line":548,"column":36}}}) : helper)))
    + "\">\n        <thead>\n        <tr>\n            <th colspan=\"2\"></th>\n            <th>Masculine</th>\n            <th>Feminine</th>\n            <th>Neuter</th>\n            <th>Plural</th>\n        </tr>\n        </thead>\n        <tbody>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"nominative") : stack1),"title":"Nominative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"genitive") : stack1),"title":"Genitive"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"dative") : stack1),"title":"Dative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"accusative") : stack1),"title":"Accusative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"instrumental") : stack1),"title":"Instrumental"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"adjective-tr"),depth0,{"name":"adjective-tr","hash":{"plural":((stack1 = (depth0 != null ? lookupProperty(depth0,"plural") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"neuter":((stack1 = (depth0 != null ? lookupProperty(depth0,"neuter") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"feminine":((stack1 = (depth0 != null ? lookupProperty(depth0,"feminine") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"masculine":((stack1 = (depth0 != null ? lookupProperty(depth0,"masculine") : depth0)) != null ? lookupProperty(stack1,"locative") : stack1),"title":"Locative"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        </tbody>\n    </table>\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion\" id=\"declensionTables\">\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"variants") : depth0),{"name":"each","hash":{},"fn":container.program(98, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":579,"column":8},"end":{"line":607,"column":17}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"98":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"accordion-item\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"===","Noun",{"name":"compare","hash":{},"fn":container.program(99, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":582,"column":16},"end":{"line":584,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"===","Surname",{"name":"compare","hash":{},"fn":container.program(101, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":586,"column":16},"end":{"line":588,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"===","Adjective",{"name":"compare","hash":{},"fn":container.program(103, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":590,"column":16},"end":{"line":592,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"===","Uninflected",{"name":"compare","hash":{},"fn":container.program(105, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":594,"column":16},"end":{"line":596,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"===","Numeral",{"name":"compare","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":598,"column":16},"end":{"line":600,"column":28}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),"===","Verb",{"name":"compare","hash":{},"fn":container.program(109, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":602,"column":16},"end":{"line":604,"column":28}}})) != null ? stack1 : "")
    + "\n            </div>\n";
},"99":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"type-noun"),depth0,{"name":"type-noun","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"101":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"type-surname"),depth0,{"name":"type-surname","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"103":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"type-adjective"),depth0,{"name":"type-adjective","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"105":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"type-uninflected"),depth0,{"name":"type-uninflected","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"type-numeral"),depth0,{"name":"type-numeral","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"109":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"type-verb"),depth0,{"name":"type-verb","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"variants") : depth0),{"name":"if","hash":{},"fn":container.program(97, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":576,"column":0},"end":{"line":610,"column":7}}})) != null ? stack1 : "");
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["type-noun"],"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":24,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"args":["noun-table"],"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":77,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"args":["singular-plural-tr"],"data":data,"loc":{"start":{"line":79,"column":0},"end":{"line":91,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"args":["patronymic-table"],"data":data,"loc":{"start":{"line":93,"column":0},"end":{"line":115,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"args":["type-surname"],"data":data,"loc":{"start":{"line":117,"column":0},"end":{"line":132,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(34, data, 0, blockParams, depths),"inverse":container.noop,"args":["surname-table"],"data":data,"loc":{"start":{"line":134,"column":0},"end":{"line":160,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(36, data, 0, blockParams, depths),"inverse":container.noop,"args":["masculine-feminine-plural-tr"],"data":data,"loc":{"start":{"line":162,"column":0},"end":{"line":177,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"args":["type-adjective"],"data":data,"loc":{"start":{"line":179,"column":0},"end":{"line":194,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(40, data, 0, blockParams, depths),"inverse":container.noop,"args":["adjective-table"],"data":data,"loc":{"start":{"line":196,"column":0},"end":{"line":242,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(48, data, 0, blockParams, depths),"inverse":container.noop,"args":["adjective-tr"],"data":data,"loc":{"start":{"line":244,"column":0},"end":{"line":262,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(50, data, 0, blockParams, depths),"inverse":container.noop,"args":["type-uninflected"],"data":data,"loc":{"start":{"line":264,"column":0},"end":{"line":284,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(54, data, 0, blockParams, depths),"inverse":container.noop,"args":["type-numeral"],"data":data,"loc":{"start":{"line":286,"column":0},"end":{"line":301,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(56, data, 0, blockParams, depths),"inverse":container.noop,"args":["numeral-table"],"data":data,"loc":{"start":{"line":303,"column":0},"end":{"line":323,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.noop,"args":["numeral-tr"],"data":data,"loc":{"start":{"line":325,"column":0},"end":{"line":334,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.noop,"args":["type-verb"],"data":data,"loc":{"start":{"line":336,"column":0},"end":{"line":353,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"args":["verb-table"],"data":data,"loc":{"start":{"line":355,"column":0},"end":{"line":545,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.noop,"args":["participle-popover"],"data":data,"loc":{"start":{"line":547,"column":0},"end":{"line":574,"column":11}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
})();