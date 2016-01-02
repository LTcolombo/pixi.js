var mapType = require('./mapType');
var defaultValue = require('./defaultValue');


var extractUniforms = function(gl, program)
{
	var uniforms = {};
	
    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)

    for (var i = 0; i < totalUniforms; i++) 
    {
    	var uniformData = gl.getActiveUniform(program, i);
    	var name = uniformData.name.replace(/\[.*?\]/, "");
        var type = mapType(gl, uniformData.type );

    	uniforms[name] = {
    		type:type,
    		size:uniformData.size,
    		location:gl.getUniformLocation(program, name),
    		value:defaultValue(type, uniformData.size)
    	}
    };
	
	return uniforms;	
}

module.exports = extractUniforms;

