
(function () {
  function init() {
    var idx = 0;
    document.body.innerHTML = document.body.innerHTML
    .replace(/\-\-\-/ig, '<div style="height: 1rem; margin-bottom: 4rem;margin-top:3rem;border-bottom: 1px dashed #88888888;">&nbsp;</div>')
    .replace(/\#\#\#\#/ig, '')
    .replace(/\#\#\#/ig, '')
    .replace(/\#\#/ig, '')
    .replace(
      /```(\w*)\n?([\s\S]*?)```/g,
      function (match, lang, html) {
        var id = "cb-" + idx++;
        var d = document.createElement("div");
        d.innerHTML = html.replace(/<br\s*\/?>/gi, "\n");
        var text = d.textContent;
        var esc = text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        return (
          '<div style="position:relative;background:light-dark(var(--light-bg), var(--dark-bg));border:1px solid #99999999;border-radius:6px;padding:16px;margin:16px 0">' +
          '<button class="cb-btn" style="position:absolute;top:8px;right:8px;padding:2px 4px;font:13px sans-serif;background:#6c757d;color:#fff;border:none;border-radius:4px;cursor:pointer">📋</button>' +
          '<pre style="margin:0;overflow-x:auto;white-space:pre-wrap;word-break:break-word;background:transparent;border:none;padding:0"><code>' +
          esc.trim() +
          "</code></pre>" +
          "</div>"
        );
      },
    );
    document.querySelectorAll(".cb-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var code = this.parentElement.querySelector("code").textContent;
        var t = this;
        navigator.clipboard
          .writeText(code)
          .then(function () {
            var orig = t.textContent;
            t.textContent = "✅";
            setTimeout(function () {
              t.textContent = orig;
            }, 2000);
          })
          .catch(function () {
            alert("Hata");
          });
      });
    });

    const styleId = "fira-sans-global-style";
    if (document.getElementById(styleId)) return;
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700;800;900&display=swap";
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
    :root {
      color-scheme: light dark;

      --light-bg: #ffffff;
      --light-color: #112233;

      --dark-bg: #112233;
      --dark-color: #ffffff;
    }
    body {
      max-width: 900px;
      margin: 1rem auto;
      background-color: light-dark(var(--light-bg), var(--dark-bg));
      color: light-dark(var(--light-color), var(--dark-color));
      font-family: "Fira Sans", system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
    }
  `;
    document.head.appendChild(fontLink);
    document.head.appendChild(style);
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
