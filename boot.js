var vm = require('vm'),
	fs = require('fs');

module.exports = function(app, config, fs)
{
	var dir = __dirname + '/routes';

	fs.readdirSync(dir).forEach(function(file)
	{
		var str = fs.readFileSync(dir + '/' + file, 'utf8');

		var context = { app: app, config: config, fs: fs };

		for (var key in global) context[key] = global[key];

		vm.runInNewContext(str, context, file);
	});
};