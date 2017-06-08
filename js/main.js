(function() {

	function init() {
		carousel();
		getProducts();
	}

	function getProducts() {
		$.getJSON('http://www.raphaelfabeni.com.br/rv/data.json', function (data) {
	        $.each(data['best-sellers'], function (i, product) {
	        	var image = product.image,
	        		name = product.title;
	        		category = product.category;
	        		price = parseFloat(product.price.toFixed(2)),
	        		customPrice = product.price.toFixed(2).split('.'),
	        		installmentsNumber = product.installments.number,
	        		installmentsValue = parseFloat(product.installments.value.toFixed(2)),
	        		customInstallmentsValue = product.installments.value.toFixed(2).split('.'),
	        		productItem = ('<div class="item"><div class="card-product">'+'<a href="#" class="card-product__link">'+'<div class="card-product__image">'+'<img class="image" src="' + image + '" alt="">'+'</div>'+'<div class="card-product__custom">'+'<i class="icon icon--custom"></i>'+'<span class="text">Personalize</span>'+'</div>'+'<div class="card-product__name">'+'<h3 class="name">'+ name + '</h3>'+'</div>'+'<div class="card-product__category">'+'<h4 class="category">' + category + '</h4>'+'</div>'+'<div class="card-product__price">'+'<div class="price">'+'<span class="value">R$ ' + customPrice + '</span>'+'<div class="installment">ou '+ installmentsNumber + 'X ' + customInstallmentsValue + ' sem juros</div>'+'</div>'+'</div>'+'<div class="card-product__button">'+'<button class="button button--orange">Comprar</button>'+'</div>'+'</a>'+'</div></div>');

        		$('.best-sellers .owl-carousel').append(productItem);
            });

            $.each(data.releases, function (i, product) {
	        	var image = product.image,
	        		name = product.title;
	        		category = product.category;
	        		price = parseFloat(product.price.toFixed(2)),
	        		customPrice = product.price.toFixed(2).split('.'),
	        		installmentsNumber = product.installments.number,
	        		installmentsValue = parseFloat(product.installments.value.toFixed(2)),
	        		customInstallmentsValue = product.installments.value.toFixed(2).split('.'),
	        		productItem = ('<div class="item"><div class="card-product">'+'<a href="#" class="card-product__link">'+'<div class="card-product__image">'+'<img class="image" src="' + image + '" alt="">'+'</div>'+'<div class="card-product__custom">'+'<i class="icon icon--custom"></i>'+'<span class="text">Personalize</span>'+'</div>'+'<div class="card-product__name">'+'<h3 class="name">'+ name + '</h3>'+'</div>'+'<div class="card-product__category">'+'<h4 class="category">' + category + '</h4>'+'</div>'+'<div class="card-product__price">'+'<div class="price">'+'<span class="value">R$ ' + customPrice + '</span>'+'<div class="installment">ou '+ installmentsNumber + 'X ' + customInstallmentsValue + ' sem juros</div>'+'</div>'+'</div>'+'<div class="card-product__button">'+'<button class="button button--orange">Comprar</button>'+'</div>'+'</a>'+'</div></div>');

        		$('.releases .owl-carousel').append(productItem);
            });
	    });
	}

	function carousel() {
		$(".best-sellers .owl-carousel, .releases .owl-carousel").each(function() {
    		$(this).owlCarousel({
    			loop: true,
			    nav: false,
			    responsive:{
			        0:{
			            items: 1
			        },
			        600:{
			            items: 3
			        },
			        1000:{
			            items: 4
			        }
			    }
    		});
    	});
	}

	init();

}());