app.controller('catalogController', ['$scope', function($scope) {
	$scope.womenFashions = [{
			style: 'Cassual style'
		},
		{
			style: 'New Look'
		},
		{
			style: 'Spot Vintage'
		},
		{
			style: 'Classic style'
	}];
	$scope.womenTypes = [{
			type: 'Coats & Jackets'
		},
		{
			type: 'Dresses'
		},
		{
			type: 'T-shirts'
		},
		{
			type: 'Jeans'
		},
		{
			type: 'Shirt'
	}];
	$scope.colors = [{
			color: 'Black',
		},
		{
			color: 'Blue'
		},
		{
			color: 'Green'
		},
		{
			color: 'Yellow'
		},
		{
			color: 'Golden'
		},
		{
			color: 'White'
	}];
	$scope.brands = [{
			name: 'Antipodium'
		},
		{
			name: 'Adidas'
		},
		{
			name: 'New Balance'
	}];
	$scope.sizes = [{
			value: 'UK 18'
		},
		{
			value: 'UK 18L'
		},
		{
			value: 'New Balance'
	}];
	$scope.goods = [{
			image: 'img/leg-jeans.png',
			name: 'Straight Leg Jeans',
			cost: 55.00
		},
		{
			image: 'img/boy-tShirt.png',
			name: 'Straight Leg Jeans',
			cost: 34.25
		},
		{
			image: 'img/knee-jeans.png',
			name: 'Straight Leg Jeans',
			cost: 140.50,
			timing: 'New'
		},
		{
			image: 'img/skinny-jeans.png',
			name: 'Straight Leg Jeans',
			cost: 12.75
		},
		{
			image: 'img/leg-jeans.png',
			name: 'Straight Leg Jeans',
			cost: 55.00
		},
		{
			image: 'img/boy-tShirt.png',
			name: 'Straight Leg Jeans',
			cost: 34.25,
			timing: 'New'
		},
		{
			image: 'img/knee-jeans.png',
			name: 'Straight Leg Jeans',
			cost: 140.50
		},
		{
			image: 'img/skinny-jeans.png',
			name: 'Straight Leg Jeans',
			cost: 12.75
	}];
}]);