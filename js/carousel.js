let carouselModule = angular.module("carouselMod", ["ui.bootstrap"]);

carouselModule.provider("slides", [function(){
    var $slideItems = [];

    this.setSlideItems = (slides)=>{
        $slideItems = slides;
    }

    this.$get = [()=>{

        var slide = {}

        slide.slides = {
            get: ()=> {return $slideItems;}
        }
        return slide;
    }];

}]);