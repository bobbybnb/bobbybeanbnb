var btdotjsProfile = angular.module('btdotjsProfile', []);
btdotjsProfile.controller('btdotjsCtl', function($scope, $http) {
  $scope.localization = {};
  $scope.localization.mynameis = "Barry Teoh";
  $scope.localization.lastseen = "Last seen:";
  if (navigator.language.indexOf("ja") >= 0) {
    $scope.localization.mynameis = "張バリー";
    $scope.localization.lastseen = "最後の場所:";
  } else if (navigator.language.indexOf("zh") >= 0) {
    $scope.localization.mynameis = "張振榮";
    $scope.localization.lastseen = "在:";
  } else if (navigator.language.indexOf("ko") >= 0) {
    $scope.localization.mynameis = "장진영";
    $scope.localization.lastseen = "행방:";
  } else if (navigator.language.indexOf("ru") >= 0) {
    $scope.localization.mynameis = "Барри Чжан";
    $scope.localization.lastseen = "Последний видеться:";
  }
  var numZ = "0";
  var num1 = "1";
  var num2 = "2";
  var num3 = "3";
  var num4 = "4";
  var num5 = "5";
  var num6 = "6";
  var num7 = "7";
  var num8 = "8";
  var num9 = "9";

  $scope.contact = {
    "e1": "hel",
    "e2": "lo@",
    "h1": "barr",
    "h2": "yteo",
    "h3": "h.c",
    "h4": "om"
  }
  $scope.where = {
    "name": "Loading...",
    "code": "XX",
    "friendlyname": "Loading...",
    "phnum": "Loading...",
    "lastseen": "",
    "profilephotourl": "http://www.nolim1t.co/bobbybeanbnb/img/bobbybnb.png"
  }
});
