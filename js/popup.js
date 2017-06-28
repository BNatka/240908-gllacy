  var link = document.querySelector(".js-link");
  var popup = document.querySelector(".modal-feedback");
  var overlay = document.querySelector(".js-show");
  var close = document.querySelector(".modal-content-close");
  var login = popup.querySelector("[name=login]");
  var form = popup.querySelector("form");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("клик по ссылке формы");
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-content-show");
    login.focus();
    });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("клик на ссылку закрыть");
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  });
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Отправить форму");
  });
  window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
      if(popup.classList.contains("modal-content-show")
          || overlay.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-content-show");
    }
  }
  console.log("Закрыть модальные окна")
  });
