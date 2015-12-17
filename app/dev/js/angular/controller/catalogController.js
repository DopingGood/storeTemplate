app.controller('catalogController', ['$scope', function($scope) {
	$scope.womenFashions = [{
			value: 'Cassual style'
		},
		{
			value: 'New Look'
		},
		{
			value: 'Spot Vintage'
		},
		{
			value: 'Classic style'
		},
		{
			value: 'New Look'
		},
		{
			value: 'Spot Vintage'
		},
		{
			value: 'Classic style'
		},
		{
			value: 'New Look'
		},
		{
			value: 'Spot Vintage'
		},
		{
			value: 'Classic style'
		},
		{
			value: 'New Look'
		},
		{
			value: 'Spot Vintage'
		},
		{
			value: 'Classic style'
	}];
	$scope.womenTypes = [{
			value: 'Coats & Jackets'
		},
		{
			value: 'Dresses'
		},
		{
			value: 'T-shirts'
		},
		{
			value: 'Jeans'
		},
		{
			value: 'Shirt'
	}];
	$scope.colors = [{
			value: 'Black',
		},
		{
			value: 'Blue'
		},
		{
			value: 'Green'
		},
		{
			value: 'Yellow'
		},
		{
			value: 'Golden'
		},
		{
			value: 'White'
	}];
	$scope.brands = [{
			value: 'Antipodium'
		},
		{
			value: 'Adidas'
		},
		{
			value: 'New Balance'
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
	$scope.prices = [{
		value: 'To £99'
	},
	{
		value: '£100-£299'
	},
	{
		value: '£300-£399'
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