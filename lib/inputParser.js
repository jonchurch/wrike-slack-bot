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

  saidContacts(text){
  	const pattern = /contacts/i
  	return text.match(pattern)
  }
  saidActive(text){
  	const pattern = /active/i
  	return text.match(pattern)
  }

}

module.exports = InputParser
