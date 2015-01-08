var champion = function(params) {
	//valeurs par défaut
	params.name ;
	params.level = {};
	params.level.adc = params.troll || 36;

	return {
		getTroll: function() {
			return params.troll;
		}
	};
};


classe.fille = function(params) {
	params = params || {};

	var classe_fille = classe(params);

	
	faire des trucs spécifiques à fille
	

	return classe_fille;
};