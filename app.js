(function(){

	var app = angular
		.module('resume',[])
		.controller('siteCtrl',function($scope){

			$scope.$on('postMenuDirective', function(scope, element, attrs){

				for (var menuItem=0, len=$scope.menuItems.length; menuItem<len; menuItem++) {

					var id = $scope.menuItems[menuItem].id,
						src = $scope.menuItems[menuItem].src,
						background = $scope.menuItems[menuItem].background;

					$('.img-menu-' + id).load(src);
					$('.img-menu-bg-' + id).load(background);
				}

			});

			$scope.$on('postBadgesDirective', function(scope, element, attrs){

				var c = 0;
				$('.img-zoom').each(function(){
					$(this).load($scope.badges[c].zoom);
					console.log($scope.badges[c].zoom);
					c++;
				});

			});

			$scope.menuItems = [

				{
					src : '/graphics/svg/menu-pin.svg',
					background : '/graphics/svg/menu-ring-a.svg',
					popup : 'SF Bay Area',
					location : '',
					id : 'menu00'
				},{
					src : '/graphics/svg/menu-envelope.svg',
					background : '/graphics/svg/menu-ring-b.svg',
					popup : 'dleonard77@me.com',
					location : 'mailto: dleonard77@me.com',
					id : 'menu01'
				},{
					src : '/graphics/svg/menu-cell.svg',
					background : '/graphics/svg/menu-ring-c.svg',
					popup : '818-370-8773',
					location : '',
					id : 'menu02'
				}

			];

			// Chart mouseovers
				$('.chart-link-design').mouseover(function(){
					$('.img-chart-pie-b').css({ 'opacity' : '0.25' });
					$('.img-chart-pie-c').css({ 'opacity' : '0.25' });
				}).mouseout(function(){
					$('.img-chart-pie-b').css({ 'opacity' : '1' });
					$('.img-chart-pie-c').css({ 'opacity' : '1' });
				});

				$('.chart-link-code').mouseover(function(){
					$('.img-chart-pie-a').css({ 'opacity' : '0.25' });
					$('.img-chart-pie-c').css({ 'opacity' : '0.25' });
				}).mouseout(function(){
					$('.img-chart-pie-a').css({ 'opacity' : '1' });
					$('.img-chart-pie-c').css({ 'opacity' : '1' });
				});

				$('.chart-link-html').mouseover(function(){
					$('.img-chart-pie-a').css({ 'opacity' : '0.25' });
					$('.img-chart-pie-b').css({ 'opacity' : '0.25' });
				}).mouseout(function(){
					$('.img-chart-pie-a').css({ 'opacity' : '1' });
					$('.img-chart-pie-b').css({ 'opacity' : '1' });
				});

			// Load images
				$('.img-responsive').load('/graphics/svg/responsive.svg');
				$('.img-chart-pie-a').load('/graphics/svg/chart-pie-a.svg');
				$('.img-chart-pie-b').load('/graphics/svg/chart-pie-b.svg');
				$('.img-chart-pie-c').load('/graphics/svg/chart-pie-c.svg');
				$('.img-chart-pie-center').load('/graphics/svg/chart-pie-center.svg');

			// Cover load animations
				$('#cover').css({ 'opacity' : '1' });

				setTimeout(function(){
					$('.img-title-cover').css({ 'opacity' : '1' });
				},1000);

				setTimeout(function(){
					$('.img-title-cover-sub').css({ 'opacity' : '1' });
				},1500);

				setTimeout(function(){
					$('.social').css({ 'opacity' : '1' });
				},2000);

			// Scroll point animations
				$(window).scroll(function(event){

					var scroll = $(this).scrollTop();

					if (scroll > 300) $('.menu-container').css({ 'opacity' : '1', 'margin-top' : '0' });
					else $('.menu-container').css({ 'opacity' : '0', 'margin-top' : '-20px' });

					if (scroll < 350) $('#cover').css({ 'opacity' : '1' });
					else $('#cover').css({ 'opacity' : '0' });

					if (scroll < 450 || scroll > 1150) {
						$('badges').css({ 'opacity' : '0' });
						$('#responsive').css({ 'opacity' : '0' });
					} else {
						$('badges').css({ 'opacity' : '1' });
						$('#responsive').css({ 'opacity' : '1' });
					}

					if (scroll < 550 || scroll > 1600) {
						$('.img-chart-pie-center').css({ 'opacity' : '0' });
						$('.img-chart-pie-a').css({ 'opacity' : '0' }).removeClass('rotate0').addClass('rotate90');
						$('.img-chart-pie-b').css({ 'opacity' : '0' }).removeClass('rotate0').addClass('rotate90');
						$('.img-chart-pie-c').css({ 'opacity' : '0' }).removeClass('rotate0').addClass('rotate90');
					} else {
						setTimeout(function(){ $('.img-chart-pie-a').css({ 'opacity' : '1' }).removeClass('rotate90').addClass('rotate0');
							setTimeout(function(){ $('.img-chart-pie-b').css({ 'opacity' : '1' }).removeClass('rotate90').addClass('rotate0');
								setTimeout(function(){ $('.img-chart-pie-c').css({ 'opacity' : '1' }).removeClass('rotate90').addClass('rotate0');
									setTimeout(function(){ $('.img-chart-pie-center').css({ 'opacity' : '1' });
									},700);
								},700);
							},700);
						},700);
					};

					if (scroll < 600 || scroll > 1750) $('.chart-overlay-container').css({ 'opacity' : '0' });
					else $('.chart-overlay-container').css({ 'opacity' : '1' });

					if (scroll < 1200) $('timeline').css({ 'opacity' : '0' });
					else $('timeline').css({ 'opacity' : '1' });

					if (scroll > 1450) $('#me').css({ 'opacity' : '1' });
					else $('#me').css({ 'opacity' : '0' });

				});

			$scope.go = function (href) {

				if (href != '') document.location = href;
			};

			$scope.getMargin = function (id) {

				$scope.popupMargin = parseInt($('#popup-' + id).width()/2)-10;
			};
		})
		.directive('badges',function(){
			return {
				restrict: 'E',
				templateUrl: 'index.php/default/badges.html',
				controller: function($scope){

					$scope.badges = [

						{
							src : '/graphics/svg/badge-photoshop.svg',
							zoom : '/graphics/svg/zoom-photoshop.svg',
							notes : 'Adobe Photoshop',
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-illustrator.svg',
							zoom : '/graphics/svg/zoom-illustrator.svg',
							notes : 'Adobe Illustrator',
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-html5.svg',
							zoom : '/graphics/svg/zoom-html5.svg',
							notes : 'HTML5',
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-css3.svg',
							zoom : '/graphics/svg/zoom-css3.svg',
							notes : 'CSS3',
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-responsive.svg',
							zoom : '/graphics/svg/zoom-responsive.svg',
							notes : 'Mobile-First Responsive Design',
							style : 'zoom-show'
						},{
							src : '/graphics/svg/badge-javascript.svg',
							zoom : '/graphics/svg/zoom-javascript.svg',
							notes : 'Javascript',
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-angular.svg',
							zoom : '/graphics/svg/zoom-angular.svg',
							notes : 'Angular.js',
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-ee.svg',
							zoom : '/graphics/svg/zoom-ee.svg',
							notes : 'Expression Engine',
							style : 'zoom-hide'
						}

					];

					$scope.hideDefaultBadge = function(item){
						if (item != '/graphics/svg/zoom-responsive.svg') $scope.badges[4].style = 'zoom-hide';
					}
					$scope.showDefaultBadge = function(){
						$scope.badges[4].style = 'zoom-show';
					};

				},
				controllerAs: 'badgesCtrl'
			}
		})
		.directive('timeline',function(){
			return {
				restrict: 'E',
				templateUrl: 'index.php/default/timeline.html',
				controller: function($scope){

					$scope.timeline = [

						{
							title : 'Gallto',
							dates : '2012-2013',
							info : ['UI design and development'],
							url : 'http://64.207.154.226'
						},{
							title : 'Lakeside Photoworks',
							dates : '2012-2015',
							info : ['UI design and development'],
							url : 'http://www.lakesidephotoworks.com'
						},{
							title : 'HL Photography',
							dates : '2009-2015',
							info : ['UI design and development'],
							url : 'http://www.hermanleonard.com'
						},{
							title : 'Couchster',
							dates : '2014-2015',
							info : ['jquery/angular.js development'],
							url : 'http://www.couchster.com'
						}

					];

				},
				controllerAs: 'timelineCtrl'
			}
		})
		.directive('postMenuDirective',function(){
			return function(scope, element, attrs) {
				if (scope.$last) setTimeout(function(){ scope.$emit('postMenuDirective', element, attrs) }, 1);
			};
		})
		.directive('postBadgesDirective',function(){
			return function(scope, element, attrs) {
				if (scope.$last) setTimeout(function(){ scope.$emit('postBadgesDirective', element, attrs) }, 1);
			};
		});

})();