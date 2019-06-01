let myModule = angular.module("session1",["barraModulo", "carouselMod"]);

let config = function (navBarProvider, slidesProvider){
    navBarProvider.setNavbarItems([{ name: "Session 1", href: "./index.html"}, {name: "Session 2", href: "./carousel.html"}, {name: "CRUD", href: "./crud.html"}]);
    slidesProvider.setSlideItems([{image: "/img/img1.jpg", id: 0, text: "Imagen 1"}, {image: "/img/img2.jpg", id: 1, text: "Imagen 2"}, {image: "/img/img3.jpg", id: 2, text: "Imagen 3"}]);
}

config.$inject = ["navBarProvider", "slidesProvider"];

myModule.config(config);

myModule.controller("navbarCtrl", function ($scope, navBar){
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
    $scope.navbarItems = navBar.items.get();
  });

  myModule.controller("carouselCtrl", function($scope, slides){
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = slides.slides.get();
});