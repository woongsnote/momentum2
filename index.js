$(document).ready(function () {
  renderCurrentTime();
  renderQuote();
});

function renderCurrentTime() {
  let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let dateTime = data["datetime"].substr(11, 5);
      $("#time").text(dateTime);
    });
}

function renderQuote() {
  let url = `https://api.quotable.io/random`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let author = `- ${data["author"]} -`;
      let content = `" ${data["content"]} "`;
      $("#author").text(author);
      $("#content").text(content);
    });
}
