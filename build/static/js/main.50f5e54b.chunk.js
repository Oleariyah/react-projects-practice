(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22: function(e, a, t) {
      e.exports = t(38);
    },
    27: function(e, a, t) {},
    28: function(e, a, t) {},
    29: function(e, a, t) {},
    35: function(e, a, t) {},
    38: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        c = t.n(n),
        l = t(20),
        r = t.n(l),
        s = (t(27), t(11)),
        m = t(2);
      function i(e) {
        var a = e.sidebar,
          t = e.setSideBar;
        return c.a.createElement(
          "nav",
          { className: " navbar navbar-expand navbar-light bg-light" },
          c.a.createElement(
            "div",
            { className: "nav navbar-nav" },
            c.a.createElement(
              "a",
              { className: "nav-item nav-link active", href: "#" },
              "Home ",
              c.a.createElement("span", { className: "sr-only" }, "(current)")
            ),
            c.a.createElement(
              "div",
              null,
              c.a.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary w-100",
                  onClick: function(e) {
                    console.log("Hello"), e.preventDefault(), t(!a);
                  }
                },
                "Open Sidebar"
              )
            )
          )
        );
      }
      t(28);
      var o = Object(n.forwardRef)(function(e, a) {
          var t = e.isOpen;
          return c.a.createElement(
            "div",
            {
              ref: t ? a : null,
              className:
                void 0 === t ? "d-none" : t ? "wrapper" : "close-wrapper"
            },
            c.a.createElement(
              "div",
              { className: t ? "content p-5" : "content-close p-5" },
              c.a.createElement(
                "div",
                { className: " list-group" },
                c.a.createElement(
                  "a",
                  {
                    className: "list-group-item list-group-item-action link-1"
                  },
                  "Hello world"
                ),
                c.a.createElement(
                  "a",
                  {
                    className: "list-group-item list-group-item-action link-2"
                  },
                  "Hello world"
                ),
                c.a.createElement(
                  "a",
                  {
                    className: "list-group-item list-group-item-action link-3"
                  },
                  "Hello world"
                )
              ),
              c.a.createElement(
                "div",
                {
                  className: t ? "card-section my-5" : "card-section-close my-5"
                },
                c.a.createElement(
                  "div",
                  { className: "card text-left" },
                  c.a.createElement(
                    "div",
                    { className: "card-body" },
                    c.a.createElement(
                      "h4",
                      { className: "card-title" },
                      "Title"
                    ),
                    c.a.createElement(
                      "p",
                      { className: "card-text" },
                      "Test Transition"
                    ),
                    c.a.createElement("hr", { className: "my-4" }),
                    c.a.createElement(
                      "button",
                      { type: "button", className: "btn btn-primary" },
                      "Hi!"
                    )
                  )
                )
              )
            )
          );
        }),
        d = (t(29), t(6)),
        u = t(8),
        E = t(15);
      function v() {
        var e = Object(n.useState)(!1),
          a = Object(s.a)(e, 2),
          t = a[0],
          l = a[1];
        return c.a.createElement(
          "section",
          null,
          c.a.createElement("h1", null, "Buttons"),
          c.a.createElement("hr", null),
          c.a.createElement(
            "div",
            { className: "py-3" },
            c.a.createElement(
              "div",
              { className: "button-1 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon text-center" },
                c.a.createElement(d.a, { icon: u.a, size: "lg" })
              ),
              c.a.createElement("span", null, "Facebook")
            ),
            c.a.createElement(
              "div",
              { className: "button-1 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon text-center" },
                c.a.createElement(d.a, { icon: u.e, size: "lg" })
              ),
              c.a.createElement("span", null, "Youtube")
            ),
            c.a.createElement(
              "div",
              { className: "button-1 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon text-center" },
                c.a.createElement(d.a, { icon: u.d, size: "lg" })
              ),
              c.a.createElement("span", null, "Twitter")
            ),
            c.a.createElement(
              "div",
              { className: "button-1 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon text-center" },
                c.a.createElement(d.a, { icon: u.c, size: "lg" })
              ),
              c.a.createElement("span", null, "Instagram")
            ),
            c.a.createElement(
              "div",
              { className: "button-1 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon text-center" },
                c.a.createElement(d.a, { icon: u.b, size: "lg" })
              ),
              c.a.createElement("span", null, "Github")
            )
          ),
          c.a.createElement(
            "div",
            { className: "my-2 d-flex text-center" },
            c.a.createElement(
              "div",
              { className: "button-2 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon-2" },
                c.a.createElement(d.a, { icon: u.a, size: "lg" })
              )
            ),
            c.a.createElement(
              "div",
              { className: "button-2 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon-2" },
                c.a.createElement(d.a, { icon: u.e, size: "lg" })
              )
            ),
            c.a.createElement(
              "div",
              { className: "button-2 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon-2" },
                c.a.createElement(d.a, { icon: u.d, size: "lg" })
              )
            ),
            c.a.createElement(
              "div",
              { className: "button-2 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon-2" },
                c.a.createElement(d.a, { icon: u.c, size: "lg" })
              )
            ),
            c.a.createElement(
              "div",
              { className: "button-2 mr-4" },
              c.a.createElement(
                "div",
                { className: "icon-2" },
                c.a.createElement(d.a, { icon: u.b, size: "lg" })
              )
            )
          ),
          c.a.createElement(
            "div",
            { className: "py-4 d-flex text-center" },
            c.a.createElement(
              "div",
              {
                className: "button-3 mr-4",
                onClick: function() {
                  return l(!t);
                }
              },
              c.a.createElement(
                "span",
                { className: t ? "add-to-cart clicked-3" : "add-to-cart" },
                "Add to Cart"
              ),
              c.a.createElement(
                "span",
                { className: t ? "added clicked-4" : "added" },
                "Added"
              ),
              c.a.createElement(
                "div",
                { className: "icon-3" },
                c.a.createElement(d.a, {
                  icon: E.b,
                  size: "lg",
                  className: t ? "cart clicked-1" : "cart"
                }),
                c.a.createElement(d.a, {
                  icon: E.a,
                  size: "lg",
                  className: t ? "box clicked-2" : "box"
                })
              )
            )
          )
        );
      }
      function N(e) {
        var a = e.sidebar,
          t = e.setRef;
        e.setSideBar;
        return c.a.createElement(
          c.a.Fragment,
          null,
          a && c.a.createElement(o, { isOpen: a, ref: t }),
          c.a.createElement(
            "div",
            { className: "container py-4" },
            c.a.createElement(
              "div",
              { className: "col-12" },
              c.a.createElement(v, null)
            )
          )
        );
      }
      t(35);
      var b = function() {
          var e,
            a,
            t = Object(n.useRef)(null),
            l = Object(n.useState)(),
            r = Object(s.a)(l, 2),
            o = r[0],
            d = r[1];
          return (
            (e = t),
            (a = function() {
              return d(!1);
            }),
            console.log(e.current),
            Object(n.useEffect)(
              function() {
                var t = function(t) {
                  e.current && !e.current.contains(t.target) && a(t);
                };
                return (
                  document.addEventListener("mousedown", t),
                  document.addEventListener("touchend", t),
                  function() {
                    document.removeEventListener("mousedown", t),
                      document.removeEventListener("touchend", t);
                  }
                );
              },
              [e, a]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(i, { sidebar: o, setSideBar: d }),
              c.a.createElement(
                m.c,
                null,
                c.a.createElement(m.a, {
                  exact: !0,
                  path: "/",
                  render: function(e) {
                    return c.a.createElement(
                      N,
                      Object.assign({}, e, {
                        sidebar: o,
                        setRef: t,
                        setSideBar: d
                      })
                    );
                  }
                })
              )
            )
          );
        },
        p = t(13);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(
        c.a.createElement(p.a, null, c.a.createElement(b, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[22, 1, 2]]
]);
//# sourceMappingURL=main.50f5e54b.chunk.js.map
