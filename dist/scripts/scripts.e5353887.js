function config($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/index/main"),$stateProvider.state("index",{"abstract":!0,url:"/index",templateUrl:"views/common/content.html"}).state("index.main",{url:"/main",templateUrl:"views/main.html",data:{pageTitle:"Example view"}}).state("index.minor",{url:"/minor",templateUrl:"views/minor.html",data:{pageTitle:"Example view"}})}function pageTitle($rootScope,$timeout){return{link:function(scope,element){var listener=function(event,toState,toParams,fromState,fromParams){var title="INSPINIA | Responsive Admin Theme";toState.data&&toState.data.pageTitle&&(title="INSPINIA | "+toState.data.pageTitle),$timeout(function(){element.text(title)})};$rootScope.$on("$stateChangeStart",listener)}}}function sideNavigation($timeout){return{restrict:"A",link:function(scope,element){$timeout(function(){element.metisMenu()})}}}function iboxTools($timeout){return{restrict:"A",scope:!0,templateUrl:"views/common/ibox_tools.html",controller:function($scope,$element){$scope.showhide=function(){var ibox=$element.closest("div.ibox"),icon=$element.find("i:first"),content=ibox.find("div.ibox-content");content.slideToggle(200),icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),ibox.toggleClass("").toggleClass("border-bottom"),$timeout(function(){ibox.resize(),ibox.find("[id^=map-]").resize()},50)},$scope.closebox=function(){var ibox=$element.closest("div.ibox");ibox.remove()}}}}function minimalizaSidebar($timeout){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:function($scope,$element){$scope.minimalize=function(){$("body").toggleClass("mini-navbar"),!$("body").hasClass("mini-navbar")||$("body").hasClass("body-small")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(500)},100)):$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(500)},300)):$("#side-menu").removeAttr("style")}}}}function MainCtrl(){this.userName="Example user",this.helloText="Welcome in SeedProject",this.descriptionText="It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects."}$(document).ready(function(){function fix_height(){var heightWithoutNavbar=$("body > #wrapper").height()-61;$(".sidebard-panel").css("min-height",heightWithoutNavbar+"px");var navbarHeigh=$("nav.navbar-default").height(),wrapperHeigh=$("#page-wrapper").height();navbarHeigh>wrapperHeigh&&$("#page-wrapper").css("min-height",navbarHeigh+"px"),wrapperHeigh>navbarHeigh&&$("#page-wrapper").css("min-height",$(window).height()+"px"),$("body").hasClass("fixed-nav")&&$("#page-wrapper").css("min-height",$(window).height()-60+"px")}$(window).bind("load resize scroll",function(){$("body").hasClass("body-small")||fix_height()}),setTimeout(function(){fix_height()})}),$(function(){$(window).bind("load resize",function(){$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small")})}),function(){angular.module("inspinia",["ui.router","ui.bootstrap"])}(),angular.module("inspinia").config(config).run(function($rootScope,$state){$rootScope.$state=$state}),angular.module("inspinia").directive("pageTitle",pageTitle).directive("sideNavigation",sideNavigation).directive("iboxTools",iboxTools).directive("minimalizaSidebar",minimalizaSidebar),angular.module("inspinia").controller("MainCtrl",MainCtrl);