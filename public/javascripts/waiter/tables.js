(function() {
	var scope = this;
	
	scope.tables = [];
	
	scope.getIdFromDiv = function(div) {
		var id = div.id.replace('table-', '');
		return id;
	};
	
	scope.getTableDetailsByNumber = function (id){
		var tableDetails = document.getElementById('tableDetails-' + id);
		return tableDetails;
	};
	
	scope.hideTables = function() {
		for (var i = 0; i < scope.tables.length; i++) {
			scope.tables[i].style.display = 'none';
		}
	};
	
	scope.showTableById = function(id) {
		scope.hideTables();
		
		var tableDetails = scope.getTableDetailsByNumber(id);
		tableDetails.style.display = 'block';
	};
	
	(function initialize() {
		var elements = document.getElementsByTagName('div');
		
		for(var i = 0; i < elements.length; i++){
			var div = elements[i];
			
			if (!!div.id && div.id.startsWith('table-')) {
				var number = scope.getIdFromDiv(div);
				
				var tableDetails = scope.getTableDetailsByNumber(number);
				scope.tables.push(tableDetails);
				
				div.addEventListener('click', function() {
					var div = this;
					var number = scope.getIdFromDiv(div);
					scope.showTableById(number);
				});
			}
		}
	})();
})();