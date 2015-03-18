(function(){

	var app = angular
		.module('resume',[])
		.controller('siteCtrl',function($scope){

			$scope.$on('postBadgesDirective', function(scope, element, attrs){

				var c = 0;
				$('.img-zoom').each(function(){
					$(this).load($scope.badges[c].zoom);
					c++;
				});

			});

			$scope.$on('postClientsDirective', function(scope, element, attrs){

				$scope.clientResize();

			});

			$scope.menuItems = [

				{
					popup : 'SF Bay Area',
					location : '',
					id : 'pin'
				},{
					popup : 'dleonard77@me.com',
					location : 'mailto: dleonard77@me.com',
					id : 'envelope'
				},{
					popup : '818-370-8773',
					location : '',
					id : 'cell'
				}

			];

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

					if (scroll > 100) $('.menu-container').css({ 'opacity' : '1', 'margin-top' : '0' });
					else $('.menu-container').css({ 'opacity' : '0', 'margin-top' : '-20px' });

					if (scroll < 350) $('#cover').css({ 'opacity' : '1' });
					else $('#cover').css({ 'opacity' : '0' });

					if (scroll < 150 || scroll > 750) $('#me').css({ 'opacity' : '0' });
					else $('#me').css({ 'opacity' : '1' });

					if (scroll < 200 || scroll > 1400) $('#badges').css({ 'opacity' : '0' });
					else $('#badges').css({ 'opacity' : '1' });

					if (scroll > 500) $('#fun').css({ 'opacity' : '1' });
					else $('#fun').css({ 'opacity' : '0' });

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
							src : '/graphics/svg/badge-ui.svg',
							zoom : '/graphics/svg/zoom-ui.svg',
							notes : 'UI Design',
							scale : 6,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-adobe.svg',
							zoom : '/graphics/svg/zoom-adobe.svg',
							notes : 'Adobe: Ps, Ai, Fw, Id',
							scale : 7,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-html5.svg',
							zoom : '/graphics/svg/zoom-html5.svg',
							notes : 'HTML5',
							scale : 6,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-css3.svg',
							zoom : '/graphics/svg/zoom-css3.svg',
							notes : 'CSS3',
							scale : 6,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-responsive.svg',
							zoom : '/graphics/svg/zoom-responsive.svg',
							notes : 'Mobile-First Responsive Design',
							scale : 6,
							style : 'zoom-show'
						},{
							src : '/graphics/svg/badge-javascript.svg',
							zoom : '/graphics/svg/zoom-javascript.svg',
							notes : 'Javascript / jQuery',
							scale : 5,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-angular.svg',
							zoom : '/graphics/svg/zoom-angular.svg',
							notes : 'Angular.js',
							scale : 5,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-ee.svg',
							zoom : '/graphics/svg/zoom-ee.svg',
							notes : 'Expression Engine',
							scale : 6,
							style : 'zoom-hide'
						},{
							src : '/graphics/svg/badge-restful.svg',
							zoom : '/graphics/svg/zoom-restful.svg',
							notes : 'RESTful Api / JSON',
							scale : 6,
							style : 'zoom-hide'
						}

					];

					var timeline = function(){
						var e = '.img-timeline';
						if ($(window).width() < 561) $(e).load('/graphics/svg/timeline-small.svg');
						else if ($(window).width() < 800) $(e).load('/graphics/svg/timeline-medium.svg');
						else if ($(window).width() < 1200) $(e).load('/graphics/svg/timeline.svg');
						else $(e).load('/graphics/svg/timeline-large.svg');
					}
					timeline();

					$(window).resize(function(){
						timeline();
					});

					$scope.hideAllBadges = function(item){
						for (var c=0, l=$scope.badges.length; c<l; c++) {
							$scope.badges[c].style = 'zoom-hide';
						}
					}
					$scope.showDefaultBadge = function(){
						$scope.badges[4].style = 'zoom-show';
					};

				},
				controllerAs: 'badgesCtrl'
			}
		})
		.directive('clients',function(){
			return {
				restrict: 'E',
				templateUrl: 'index.php/default/clients.html',
				controller: function($scope){

					$scope.clients = [

						{
							src : '/graphics/bmp/preview-giving.jpg',
							name : 'GivingImages',
							url : 'http://www.givingimages.com'
						},{
							src : '/graphics/bmp/preview-gallto.jpg',
							name : 'Gallto',
							url : 'http://64.207.154.226'
						},{
							src : '/graphics/bmp/preview-hl.jpg',
							name : 'HL Photography',
							url : 'http://www.hermanleonard.com'
						},{
							src : '/graphics/bmp/preview-couchster.jpg',
							name : 'Couchster',
							url : 'http://www.couchster.com'
						}

					];

					$scope.clientResize = function () {
	
						var w = $(window).width();
						if (w > 561 && w < 1200) w/=2;
						if (w > 1200) w/=4;

						$('.client, .client > div, .client-name').each(function(){ $(this).css({ 'width' : w, 'height' : w }) });

					};

					$(window).resize(function(){ $scope.clientResize() });

				},
				controllerAs: 'clientsCtrl'
			}
		})
		.directive('postBadgesDirective',function(){
			return function(scope, element, attrs) {
				if (scope.$last) setTimeout(function(){ scope.$emit('postBadgesDirective', element, attrs) }, 1);
			};
		})
		.directive('postClientsDirective',function(){
			return function(scope, element, attrs) {
				if (scope.$last) setTimeout(function(){ scope.$emit('postClientsDirective', element, attrs) }, 1);
			};
		});

})();