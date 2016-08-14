'use strict';


class InputParser {
  
 saidTime(text) {
  	const pattern = /time/i
  	return text.match(pattern)
  }

  saidWrike(text){
  	const pattern = /wrike/i
  	return text.match(pattern)
  }

}

module.exports = InputParser
