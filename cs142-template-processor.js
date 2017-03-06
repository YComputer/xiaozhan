Cs142TemplateProcessor = function(template){
    this.fillIn = function(dictionary){
        return template.replace(/{{([^}}]+)?}}/g, function(match, p1, offset, string){
            console.log('match',match);
            console.log('p1',p1);
            console.log('offset',offset);
            console.log('string',string);    
            return dictionary[p1];
        });
    }
}


