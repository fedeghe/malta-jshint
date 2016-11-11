require('malta').checkDeps('jshint');

// see http://jshint.com/docs/options/
// for jshint options

var jshint = require("jshint").JSHINT,
	path = require('path'),
	fs = require('fs');

function malta_hint(o, options) {

	var self = this,
		start = new Date(),
		msg;
	options = options || {};

	
	options.bitwise = 'bitwise' in options ? !!options.bitwise : true;
	options.curly = 'curly' in options ? !!options.curly : true;
	options.eqeqeq = 'eqeqeq' in options ? !!options.eqeqeq : true;
	options.forin = 'forin' in options ? !!options.forin : true;
	options.futurehostile = 'futurehostile' in options ? !!options.futurehostile : true;
	options.latedef = 'latedef' in options ? !!options.latedef : true;
	options.noarg = 'noarg' in options ? !!options.noarg : true;
	options.strict = 'strict' in options ? !!options.strict : true;
	options.browser = 'broswser' in options ? !!options.browser : true;
	options.node = 'node' in options ? !!options.node : true;
	options.evil = 'evil' in options ? !!options.evil : true;
	options.maxcomplexity = 'maxcomplexity' in options ? ~~options.maxcomplexity : 10;
	options.maxerr = 'maxerr' in options ? ~~options.maxerr : 50;

	return function (solve, reject){

		jshint(o.content, options);

		if (jshint.errors.length){
			self.log_info('Jshint says'.invert());

			var errs = jshint.errors,
				i = 0,
				l = errs.length,
				out ;

			for (null; i < l; i++) {
				// console.dir(errs[i])
				if (errs[i] && 'raw' in errs[i]){
					out = self.utils.replaceAll(
						errs[i].raw,
						errs[i],
						{delim : ['{', '}']}
					).red() + ' @line ' + (errs[i].line+'').yellow();
					self.log_info(out)
				}
			}
			self.log_info('end of Jshint sentences'.invert());
		} else {
			self.log_info('Jshint shuts up!'.underline());
		}

		solve(o);
		self.notifyAndUnlock(start, msg);

	};
}
malta_hint.ext = ['js', 'coffee', 'ts'];
module.exports = malta_hint;