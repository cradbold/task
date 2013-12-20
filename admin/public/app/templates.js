define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["admin/public/templates/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\"><div class=\"page-header\"><h2>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2></div><div id=\"current-view\"></div></div><div id=\"footer\"></div>";
  return buffer;
  });

this["JST"]["admin/public/templates/task-glabal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\"><button id=\"add\">Add</button><div id=\"container-task\"></div></div>";
  });

this["JST"]["admin/public/templates/task"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"el\"><div class=\"close\">X</div><div class=\"checkbox-cont\"><input name=\"check1\" type=\"checkbox\" class=\"data-in\"/><input name=\"check2\" type=\"checkbox\" class=\"data-in\"/><input name=\"check3\" type=\"checkbox\" class=\"data-in\"/><input name=\"check4\" type=\"checkbox\" class=\"data-in\"/></div><div class=\"body-cont\"><input id=\"text\" type=\"text\" class=\"data-in\"/><br/><input type=\"radio\" name=\"option-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data=\"option1\" class=\"data-in\"/><input type=\"radio\" name=\"option-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data=\"option2\" class=\"data-in\"/><input type=\"radio\" name=\"option-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data=\"option3\" class=\"data-in\"/></div><button class=\"ok\">OK </button></div>";
  return buffer;
  });

return this["JST"];

});