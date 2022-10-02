(() => {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        r = t.dataset.da.trim().split(","),
        n = {};
      (n.element = t),
        (n.parent = t.parentNode),
        (n.destination = document.querySelector(r[0].trim())),
        (n.breakpoint = r[1] ? r[1].trim() : "767"),
        (n.place = r[2] ? r[2].trim() : "last"),
        (n.index = this.indexInParent(n.parent, n.element)),
        this.оbjects.push(n);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, r) {
          return Array.prototype.indexOf.call(r, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const r = this.mediaQueries[t],
        n = String.prototype.split.call(r, ","),
        o = window.matchMedia(n[0]),
        s = n[1],
        i = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === s;
        });
      o.addListener(function () {
        e.mediaHandler(o, i);
      }),
        this.mediaHandler(o, i);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          (r.index = this.indexInParent(r.parent, r.element)),
            this.moveTo(r.place, r.element, r.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const r = t[e];
          r.element.classList.contains(this.daClassname) &&
            this.moveBack(r.parent, r.element, r.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, r) {
      t.classList.add(this.daClassname),
        "last" === e || e >= r.children.length
          ? r.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? r.children[e].insertAdjacentElement("beforebegin", t)
          : r.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, r) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[r]
          ? e.children[r].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const r = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(r, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
      );
    },
  };
  let r = (e, t = 500, r = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = r ? `${r}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !r),
            !r && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !r && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    n = (e, t = 500, r = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          r && e.style.removeProperty("height");
        let n = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = r ? `${r}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = n + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    o = !0,
    s = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    },
    i = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    };
  function a(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function l(e, t) {
    const r = Array.from(e).filter(function (e, r, n) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (r.length) {
      const e = [];
      r.forEach((r) => {
        const n = {},
          o = r.dataset[t].split(",");
        (n.value = o[0]),
          (n.type = o[1] ? o[1].trim() : "max"),
          (n.item = r),
          e.push(n);
      });
      let n = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      n = (function (e) {
        return e.filter(function (e, t, r) {
          return r.indexOf(e) === t;
        });
      })(n);
      const o = [];
      if (n.length)
        return (
          n.forEach((t) => {
            const r = t.split(","),
              n = r[1],
              s = r[2],
              i = window.matchMedia(r[0]),
              a = e.filter(function (e) {
                if (e.value === n && e.type === s) return !0;
              });
            o.push({ itemsArray: a, matchMedia: i });
          }),
          o
        );
    }
  }
  let c = (e, t = !1, r = 500, n = 0) => {
    const o = document.querySelector(e);
    if (o) {
      let i = "",
        l = 0;
      t &&
        ((i = "header.header"), (l = document.querySelector(i).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: r,
        header: i,
        offset: n,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (s(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(o, "", c);
      else {
        let e = o.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
      }
      a(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  const d = { inputMaskModule: null, selectModule: null };
  let u = {
    getErrors(e) {
      let t = 0,
        r = e.querySelectorAll("*[data-required]");
      return (
        r.length &&
          r.forEach((e) => {
            (null === e.offsetParent && "SELECT" !== e.tagName) ||
              e.disabled ||
              (t += this.validateInput(e));
          }),
        t
      );
    },
    validateInput(e) {
      let t = 0;
      return (
        "email" === e.dataset.required
          ? ((e.value = e.value.replace(" ", "")),
            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
          : ("checkbox" !== e.type || e.checked) && e.value
          ? this.removeError(e)
          : (this.addError(e), t++),
        t
      );
    },
    addError(e) {
      e.classList.add("_form-error"),
        e.parentElement.classList.add("_form-error");
      let t = e.parentElement.querySelector(".form__error");
      t && e.parentElement.removeChild(t),
        e.dataset.error &&
          e.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">${e.dataset.error}</div>`
          );
    },
    removeError(e) {
      e.classList.remove("_form-error"),
        e.parentElement.classList.remove("_form-error"),
        e.parentElement.querySelector(".form__error") &&
          e.parentElement.removeChild(
            e.parentElement.querySelector(".form__error")
          );
    },
    formClean(e) {
      e.reset(),
        setTimeout(() => {
          let t = e.querySelectorAll("input,textarea");
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            r.parentElement.classList.remove("_form-focus"),
              r.classList.remove("_form-focus"),
              u.removeError(r),
              (r.value = r.dataset.placeholder);
          }
          let r = e.querySelectorAll(".checkbox__input");
          if (r.length > 0)
            for (let e = 0; e < r.length; e++) {
              r[e].checked = !1;
            }
          if (d.selectModule) {
            let t = e.querySelectorAll(".select");
            if (t.length)
              for (let e = 0; e < t.length; e++) {
                const r = t[e].querySelector("select");
                d.selectModule.selectBuild(r);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  let m = !1;
  setTimeout(() => {
    if (m) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.onload = function () {
      document.addEventListener("click", function (e) {
        const r = e.target;
        window.innerWidth > 767.98 &&
          t.any() &&
          (r.classList.contains("menu-header__arrow") &&
            r.closest(".menu-header__item").classList.toggle("_hover"),
          !r.closest(".menu-header__item") &&
            document.querySelectorAll(".menu-header__item._hover") &&
            (function (e, t) {
              for (var r = 0; r < e.length; r++) e[r].classList.remove(t);
            })(
              document.querySelectorAll(".menu-header__item._hover"),
              "_hover"
            ));
        r.closest(".header__search_btn")
          ? document.querySelector(".search-header").classList.toggle("_active")
          : !r.closest(".search-header") &&
            document.querySelector(".search-header._active") &&
            document
              .querySelector(".search-header")
              .classList.remove("_active");
      });
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          o &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? s(e) : i(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const t = Array.from(e).filter(function (e, t, r) {
          return !e.dataset.spollers.split(",")[0];
        });
        t.length && s(t);
        let o = l(e, "spollers");
        function s(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  i(e),
                  e.addEventListener("click", a))
                : (e.classList.remove("_spoller-init"),
                  i(e, !1),
                  e.removeEventListener("click", a));
          });
        }
        function i(e, t = !0) {
          const r = e.querySelectorAll("[data-spoller]");
          r.length > 0 &&
            r.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            });
        }
        function a(e) {
          const t = e.target;
          if (t.closest("[data-spoller]")) {
            const o = t.closest("[data-spoller]"),
              s = o.closest("[data-spollers]"),
              i = !!s.hasAttribute("data-one-spoller");
            s.querySelectorAll("._slide").length ||
              (i && !o.classList.contains("_spoller-active") && c(s),
              o.classList.toggle("_spoller-active"),
              ((e, t = 500) => {
                e.hidden ? n(e, t) : r(e, t);
              })(o.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function c(e) {
          const t = e.querySelector("[data-spoller]._spoller-active");
          t &&
            (t.classList.remove("_spoller-active"),
            r(t.nextElementSibling, 500));
        }
        o &&
          o.length &&
          o.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              s(e.itemsArray, e.matchMedia);
            }),
              s(e.itemsArray, e.matchMedia);
          });
      }
    })(),
    (function () {
      const e = document.querySelectorAll(
        "input[placeholder],textarea[placeholder]"
      );
      e.length &&
        e.forEach((e) => {
          e.dataset.placeholder = e.placeholder;
        }),
        document.body.addEventListener("focusin", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = ""),
            t.classList.add("_form-focus"),
            t.parentElement.classList.add("_form-focus"),
            u.removeError(t));
        }),
        document.body.addEventListener("focusout", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
            t.classList.remove("_form-focus"),
            t.parentElement.classList.remove("_form-focus"),
            t.hasAttribute("data-validate") && u.validateInput(t));
        });
    })(),
    (function (e) {
      const t = document.forms;
      if (t.length)
        for (const e of t)
          e.addEventListener("submit", function (e) {
            r(e.target, e);
          }),
            e.addEventListener("reset", function (e) {
              const t = e.target;
              u.formClean(t);
            });
      async function r(t, r) {
        if (0 === (e ? u.getErrors(t) : 0)) {
          if (t.hasAttribute("data-ajax")) {
            r.preventDefault();
            const e = t.getAttribute("action")
                ? t.getAttribute("action").trim()
                : "#",
              o = t.getAttribute("method")
                ? t.getAttribute("method").trim()
                : "GET",
              s = new FormData(t);
            t.classList.add("_sending");
            const i = await fetch(e, { method: o, body: s });
            if (i.ok) {
              await i.json();
              t.classList.remove("_sending"), n(t);
            } else alert("Ошибка"), t.classList.remove("_sending");
          } else t.hasAttribute("data-dev") && (r.preventDefault(), n(t));
        } else {
          r.preventDefault();
          const e = t.querySelector("._form-error");
          e && t.hasAttribute("data-goto-error") && c(e, !0, 1e3);
        }
      }
      function n(e) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: e } })
        ),
          u.formClean(e),
          a(`[Формы]: ${"Форма отправлена!"}`);
      }
    })(!0),
    (function () {
      const e = document.querySelectorAll(".rating");
      e.length > 0 &&
        (function () {
          let t, r;
          for (let t = 0; t < e.length; t++) {
            n(e[t]);
          }
          function n(e) {
            o(e), s(), e.classList.contains("rating_set") && i(e);
          }
          function o(e) {
            (t = e.querySelector(".rating__active")),
              (r = e.querySelector(".rating__value"));
          }
          function s(e = r.innerHTML) {
            const n = e / 0.05;
            t.style.width = `${n}%`;
          }
          function i(e) {
            const t = e.querySelectorAll(".rating__item");
            for (let n = 0; n < t.length; n++) {
              const i = t[n];
              i.addEventListener("mouseenter", function (t) {
                o(e), s(i.value);
              }),
                i.addEventListener("mouseleave", function (e) {
                  s();
                }),
                i.addEventListener("click", function (t) {
                  o(e),
                    e.dataset.ajax
                      ? a(i.value, e)
                      : ((r.innerHTML = n + 1), s());
                });
            }
          }
          async function a(e, t) {
            if (!t.classList.contains("rating_sending")) {
              t.classList.add("rating_sending");
              let e = await fetch("rating.json", { method: "GET" });
              if (e.ok) {
                const n = (await e.json()).newRating;
                (r.innerHTML = n), s(), t.classList.remove("rating_sending");
              } else alert("Ошибка"), t.classList.remove("rating_sending");
            }
          }
        })();
    })(),
    (function () {
      m = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        r = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        n = e.dataset.scroll ? e.dataset.scroll : 1;
      let o,
        s = 0;
      document.addEventListener("windowScroll", function (i) {
        const a = window.scrollY;
        clearTimeout(o),
          a >= n
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (a > s
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (o = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, r))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (s = a <= 0 ? 0 : a);
      });
    })();
})();
