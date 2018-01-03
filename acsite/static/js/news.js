var pageList = new Array();
var currentPage = 1;
var numberPerPage = 4;
var events = Array.prototype.slice.call(document.querySelectorAll(".news-article"));

function getNumberOfPages() {
  return Math.ceil(events.length / numberPerPage);
}

function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function firstPage() {
  currentPage = 1;
  loadList();
}

function lastPage() {
  currentPage = numberOfPages;
  loadList();
}

function loadList() {
  var begin = ((currentPage - 1) * numberPerPage);
  var end = begin + numberPerPage;
  for (i = 0; i < pageList.length; i++) {
    pageList[i].classList.add("not-visible");
  }
  pageList = events.slice(begin, end);
  drawList();
  check();
}

function drawList() {
  for (i = 0; i < pageList.length; i++) {
    pageList[i].classList.remove("not-visible");
  }
}

function check() {
  document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
  loadList();
}

var numberOfPages = getNumberOfPages();
window.onload = load;

$(document).ready(function() {
  $('.news-detail').click(function() {
      $('div.news-detail.active').removeClass('active');
      $(this).addClass('active');
  })
});
