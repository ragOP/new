function loadJS() {
  let scriptEle = document.createElement("script");
  scriptEle.setAttribute(
    "src",
    "https://dul5jcc85arql.cloudfront.net/partners/js/main/661d04899f44f839120af2f0.js"
  );
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("defer", !0);
  document.body.appendChild(scriptEle);
}
if (document.readyState != "loading") {
  loadJS();
} else {
  document.addEventListener("DOMContentLoaded", loadJS, !1);
}
