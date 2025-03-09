if (localStorage.getItem("token") == null) {
    alert("You need to be logged in to access this page");
    window.location.href = "./assets/html/signin.html";
  }

  function quizlist() {
    window.location.href = "assets/html/quizlist.html"
}

function makequiz() {
    window.location.href = "assets/html/quiz.html"
}

function profile() {
    window.location.href = "assets/html/profile.html"
}

function logout() {
    window.location.href = "assets/html/signin.html"
    localStorage.clear();
}
