var e, o;
"function" == typeof (e = globalThis.define) && ((o = e), (e = null)),
  (function (o, n, r, t, l) {
    var i =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      c = "function" == typeof i[t] && i[t],
      u = c.cache || {},
      a =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function f(e, n) {
      if (!u[e]) {
        if (!o[e]) {
          var r = "function" == typeof i[t] && i[t];
          if (!n && r) return r(e, !0);
          if (c) return c(e, !0);
          if (a && "string" == typeof e) return a(e);
          var l = Error("Cannot find module '" + e + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        (s.resolve = function (n) {
          var r = o[e][1][n];
          return null != r ? r : n;
        }),
          (s.cache = {});
        var d = (u[e] = new f.Module(e));
        o[e][0].call(d.exports, s, d, d.exports, this);
      }
      return u[e].exports;
      function s(e) {
        var o = s.resolve(e);
        return !1 === o ? {} : f(o);
      }
    }
    (f.isParcelRequire = !0),
      (f.Module = function (e) {
        (this.id = e), (this.bundle = f), (this.exports = {});
      }),
      (f.modules = o),
      (f.cache = u),
      (f.parent = c),
      (f.register = function (e, n) {
        o[e] = [
          function (e, o) {
            o.exports = n;
          },
          {},
        ];
      }),
      Object.defineProperty(f, "root", {
        get: function () {
          return i[t];
        },
      }),
      (i[t] = f);
    for (var d = 0; d < n.length; d++) f(n[d]);
    if (r) {
      var s = f(r);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = s)
        : "function" == typeof e && e.amd
          ? e(function () {
              return s;
            })
          : l && (this[l] = s);
    }
  })(
    {
      c1CBZ: [
        function (e, o, n) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            n,
          ),
            window.addEventListener("load", function () {
              if (
                "https://hiring.amazon.ca/app#/jobSearch" ==
                  window.location.href ||
                "https://hiring.amazon.com/app#/jobSearch" ==
                  window.location.href
              ) {
                let e = window.location.href;
                chrome.storage.local.set({ savedUrl: e }, function () {}),
                  setTimeout(async () => {
                    let e = document.querySelector("div[id='pageRouter']");
                    e ||
                      console.error(
                        'Error: "div#pageRouter" element not found.',
                      );
                    let o = e?.querySelector(
                      "div[class*='jobResultContainer']",
                    );
                    o ||
                      console.error(
                        'Error: "div.jobResultContainer" element not found.',
                      );
                    let n = setInterval(() => {
                      let e = o?.children[0];
                      if (
                        (e ||
                          console.error(
                            'Error: "div.jobSearchResultContainer" element not found.',
                          ),
                        e)
                      ) {
                        clearInterval(n);
                        let o = e?.querySelector("div.colContainerTop");
                        o ||
                          console.error(
                            'Error: "div.colContainerTop" element not found.',
                          );
                        let r = o?.querySelector('div[role="link"]');
                        if (
                          (r ||
                            console.error(
                              "Error: 'div[role=\"link\"]' element not found.",
                            ),
                          r instanceof HTMLElement)
                        ) {
                          let e = new MouseEvent("click", {
                            view: window,
                            bubbles: !0,
                            cancelable: !0,
                          });
                          r.dispatchEvent(e),
                            chrome.storage.local.get(
                              ["savedUrl"],
                              function (e) {
                                e.savedUrl &&
                                  setTimeout(() => {
                                    (window.location.href = e.savedUrl),
                                      location.reload();
                                  }, 3e3);
                              },
                            );
                        } else location.reload();
                      }
                    }, 10);
                  }, 1);
              }
            });
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "cHUbl" },
      ],
      cHUbl: [
        function (e, o, n) {
          (n.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e };
          }),
            (n.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.exportAll = function (e, o) {
              return (
                Object.keys(e).forEach(function (n) {
                  "default" === n ||
                    "__esModule" === n ||
                    o.hasOwnProperty(n) ||
                    Object.defineProperty(o, n, {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    });
                }),
                o
              );
            }),
            (n.export = function (e, o, n) {
              Object.defineProperty(e, o, { enumerable: !0, get: n });
            });
        },
        {},
      ],
    },
    ["c1CBZ"],
    "c1CBZ",
    "parcelRequire8cc8",
  ),
  (globalThis.define = o);
