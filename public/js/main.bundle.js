!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i
        });
    }),
    (n.r = function(e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 2));
})([
  function(e, t, n) {
    var i;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !(function(t, n) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function(n, o) {
      "use strict";
      var r = [],
        a = n.document,
        s = Object.getPrototypeOf,
        l = r.slice,
        c = r.concat,
        u = r.push,
        d = r.indexOf,
        f = {},
        p = f.toString,
        h = f.hasOwnProperty,
        m = h.toString,
        g = m.call(Object),
        v = {},
        b = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function(e) {
          return null != e && e === e.window;
        },
        x = { type: !0, src: !0, noModule: !0 };
      function w(e, t, n) {
        var i,
          o = (t = t || a).createElement("script");
        if (((o.text = e), n)) for (i in x) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
      }
      function C(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
            ? f[p.call(e)] || "object"
            : typeof e;
      }
      var k = function(e, t) {
          return new k.fn.init(e, t);
        },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function T(e) {
        var t = !!e && "length" in e && e.length,
          n = C(e);
        return (
          !b(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (k.fn = k.prototype = {
        jquery: "3.3.1",
        constructor: k,
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        get: function(e) {
          return null == e
            ? l.call(this)
            : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
          var t = k.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function(e) {
          return k.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            k.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: u,
        sort: r.sort,
        splice: r.splice
      }),
        (k.extend = k.fn.extend = function() {
          var e,
            t,
            n,
            i,
            o,
            r,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || b(a) || (a = {}),
              s === l && ((a = this), s--);
            s < l;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (n = a[t]),
                  a !== (i = e[t]) &&
                    (c && i && (k.isPlainObject(i) || (o = Array.isArray(i)))
                      ? (o
                          ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                          : (r = n && k.isPlainObject(n) ? n : {}),
                        (a[t] = k.extend(c, r, i)))
                      : void 0 !== i && (a[t] = i));
          return a;
        }),
        k.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isPlainObject: function(e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = h.call(t, "constructor") && t.constructor) &&
                  m.call(n) === g))
            );
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function(e) {
            w(e);
          },
          each: function(e, t) {
            var n,
              i = 0;
            if (T(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function(e) {
            return null == e ? "" : (e + "").replace(S, "");
          },
          makeArray: function(e, t) {
            var n = t || [];
            return (
              null != e &&
                (T(Object(e))
                  ? k.merge(n, "string" == typeof e ? [e] : e)
                  : u.call(n, e)),
              n
            );
          },
          inArray: function(e, t, n) {
            return null == t ? -1 : d.call(t, e, n);
          },
          merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
              e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
              !t(e[o], o) !== a && i.push(e[o]);
            return i;
          },
          map: function(e, t, n) {
            var i,
              o,
              r = 0,
              a = [];
            if (T(e))
              for (i = e.length; r < i; r++)
                null != (o = t(e[r], r, n)) && a.push(o);
            else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
            return c.apply([], a);
          },
          guid: 1,
          support: v
        }),
        "function" == typeof Symbol &&
          (k.fn[Symbol.iterator] = r[Symbol.iterator]),
        k.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var A =
        /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        (function(e) {
          var t,
            n,
            i,
            o,
            r,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            b,
            y,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            k = 0,
            S = ae(),
            T = ae(),
            A = ae(),
            E = function(e, t) {
              return e === t && (d = !0), 0;
            },
            R = {}.hasOwnProperty,
            D = [],
            P = D.pop,
            O = D.push,
            j = D.push,
            F = D.slice,
            q = function(e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            N =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I =
              "\\[" +
              L +
              "*(" +
              M +
              ")(?:" +
              L +
              "*([*^$|!~]?=)" +
              L +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              L +
              "*\\]",
            z =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              I +
              ")*)|.*)\\)|)",
            H = new RegExp(L + "+", "g"),
            V = new RegExp(
              "^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$",
              "g"
            ),
            U = new RegExp("^" + L + "*," + L + "*"),
            W = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            B = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            _ = new RegExp(z),
            $ = new RegExp("^" + M + "$"),
            X = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + I),
              PSEUDO: new RegExp("^" + z),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  L +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  L +
                  "*(?:([+-]|)" +
                  L +
                  "*(\\d+)|))" +
                  L +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + N + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  L +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  L +
                  "*((?:-\\d)?\\d*)" +
                  L +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            Q = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ee = function(e, t, n) {
              var i = "0x" + t - 65536;
              return i != i || n
                ? t
                : i < 0
                  ? String.fromCharCode(i + 65536)
                  : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ie = function() {
              f();
            },
            oe = be(
              function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            j.apply((D = F.call(w.childNodes)), w.childNodes),
              D[w.childNodes.length].nodeType;
          } catch (e) {
            j = {
              apply: D.length
                ? function(e, t) {
                    O.apply(e, F.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  }
            };
          }
          function re(e, t, i, o) {
            var r,
              s,
              c,
              u,
              d,
              h,
              v,
              b = t && t.ownerDocument,
              C = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))
            )
              return i;
            if (
              !o &&
              ((t ? t.ownerDocument || t : w) !== p && f(t), (t = t || p), m)
            ) {
              if (11 !== C && (d = K.exec(e)))
                if ((r = d[1])) {
                  if (9 === C) {
                    if (!(c = t.getElementById(r))) return i;
                    if (c.id === r) return i.push(c), i;
                  } else if (
                    b &&
                    (c = b.getElementById(r)) &&
                    y(t, c) &&
                    c.id === r
                  )
                    return i.push(c), i;
                } else {
                  if (d[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (r = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return j.apply(i, t.getElementsByClassName(r)), i;
                }
              if (n.qsa && !A[e + " "] && (!g || !g.test(e))) {
                if (1 !== C) (b = t), (v = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for (
                    (u = t.getAttribute("id"))
                      ? (u = u.replace(te, ne))
                      : t.setAttribute("id", (u = x)),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = "#" + u + " " + ve(h[s]);
                  (v = h.join(",")), (b = (J.test(e) && me(t.parentNode)) || t);
                }
                if (v)
                  try {
                    return j.apply(i, b.querySelectorAll(v)), i;
                  } catch (e) {
                  } finally {
                    u === x && t.removeAttribute("id");
                  }
              }
            }
            return l(e.replace(V, "$1"), t, i, o);
          }
          function ae() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function se(e) {
            return (e[x] = !0), e;
          }
          function le(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ce(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              i.attrHandle[n[o]] = t;
          }
          function ue(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function fe(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function pe(e) {
            return function(t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function he(e) {
            return se(function(t) {
              return (
                (t = +t),
                se(function(n, i) {
                  for (var o, r = e([], n.length, t), a = r.length; a--; )
                    n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = re.support = {}),
          (r = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (f = re.setDocument = function(e) {
            var t,
              o,
              a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (m = !r(p)),
                w !== p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", ie, !1)
                    : o.attachEvent && o.attachEvent("onunload", ie)),
                (n.attributes = le(function(e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = le(function(e) {
                  return (
                    e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = G.test(p.getElementsByClassName)),
                (n.getById = le(function(e) {
                  return (
                    (h.appendChild(e).id = x),
                    !p.getElementsByName || !p.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function(e) {
                      var t = e.replace(Z, ee);
                      return function(e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (i.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((i.filter.ID = function(e) {
                      var t = e.replace(Z, ee);
                      return function(e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (i.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && m) {
                        var n,
                          i,
                          o,
                          r = t.getElementById(e);
                        if (r) {
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                          for (
                            o = t.getElementsByName(e), i = 0;
                            (r = o[i++]);

                          )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                              return [r];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa ? t.querySelectorAll(e) : void 0;
                    }
                  : function(e, t) {
                      var n,
                        i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && m)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (g = []),
                (n.qsa = G.test(p.querySelectorAll)) &&
                  (le(function(e) {
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + L + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + L + "*(?:value|" + N + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        g.push("~="),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  le(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + L + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = G.test(
                  (b =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  le(function(e) {
                    (n.disconnectedMatch = b.call(e, "*")),
                      b.call(e, "[s!='']:x"),
                      v.push("!=", z);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (t = G.test(h.compareDocumentPosition)),
                (y =
                  t || G.test(h.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (E = t
                  ? function(e, t) {
                      if (e === t) return (d = !0), 0;
                      var i =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e === p || (e.ownerDocument === w && y(w, e))
                            ? -1
                            : t === p || (t.ownerDocument === w && y(w, t))
                              ? 1
                              : u ? q(u, e) - q(u, t) : 0
                          : 4 & i ? -1 : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!o || !r)
                        return e === p
                          ? -1
                          : t === p
                            ? 1
                            : o ? -1 : r ? 1 : u ? q(u, e) - q(u, t) : 0;
                      if (o === r) return ue(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[i] === s[i]; ) i++;
                      return i
                        ? ue(a[i], s[i])
                        : a[i] === w ? -1 : s[i] === w ? 1 : 0;
                    }),
                p)
              : p;
          }),
          (re.matches = function(e, t) {
            return re(e, null, null, t);
          }),
          (re.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== p && f(e),
              (t = t.replace(B, "='$1']")),
              n.matchesSelector &&
                m &&
                !A[t + " "] &&
                (!v || !v.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var i = b.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {}
            return re(t, p, null, [e]).length > 0;
          }),
          (re.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && f(e), y(e, t);
          }),
          (re.attr = function(e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var o = i.attrHandle[t.toLowerCase()],
              r =
                o && R.call(i.attrHandle, t.toLowerCase())
                  ? o(e, t, !m)
                  : void 0;
            return void 0 !== r
              ? r
              : n.attributes || !m
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
          }),
          (re.escape = function(e) {
            return (e + "").replace(te, ne);
          }),
          (re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (re.uniqueSort = function(e) {
            var t,
              i = [],
              o = 0,
              r = 0;
            if (
              ((d = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(E),
              d)
            ) {
              for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
              for (; o--; ) e.splice(i[o], 1);
            }
            return (u = null), e;
          }),
          (o = re.getText = function(e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += o(t);
            return n;
          }),
          ((i = re.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(Z, ee)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || re.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && re.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return X.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        _.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Z, ee).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = S[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) &&
                    S(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(i) {
                  var o = re.attr(i, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                            ? o !== n
                            : "^=" === t
                              ? n && 0 === o.indexOf(n)
                              : "*=" === t
                                ? n && o.indexOf(n) > -1
                                : "$=" === t
                                  ? n && o.slice(-n.length) === n
                                  : "~=" === t
                                    ? (" " + o.replace(H, " ") + " ").indexOf(
                                        n
                                      ) > -1
                                    : "|=" === t &&
                                      (o === n ||
                                        o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === i && 0 === o
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, l) {
                      var c,
                        u,
                        d,
                        f,
                        p,
                        h,
                        m = r !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        b = !l && !s,
                        y = !1;
                      if (g) {
                        if (r) {
                          for (; m; ) {
                            for (f = t; (f = f[m]); )
                              if (
                                s
                                  ? f.nodeName.toLowerCase() === v
                                  : 1 === f.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && b)) {
                          for (
                            y =
                              (p =
                                (c =
                                  (u =
                                    (d = (f = g)[x] || (f[x] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  C && c[1]) && c[2],
                              f = p && g.childNodes[p];
                            (f = (++p && f && f[m]) || (y = p = 0) || h.pop());

                          )
                            if (1 === f.nodeType && ++y && f === t) {
                              u[e] = [C, p, y];
                              break;
                            }
                        } else if (
                          (b &&
                            (y = p =
                              (c =
                                (u =
                                  (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] || [])[0] === C &&
                              c[1]),
                          !1 === y)
                        )
                          for (
                            ;
                            (f =
                              (++p && f && f[m]) || (y = p = 0) || h.pop()) &&
                            ((s
                              ? f.nodeName.toLowerCase() !== v
                              : 1 !== f.nodeType) ||
                              !++y ||
                              (b &&
                                ((u =
                                  (d = f[x] || (f[x] = {}))[f.uniqueID] ||
                                  (d[f.uniqueID] = {}))[e] = [C, y]),
                              f !== t));

                          );
                        return (y -= o) === i || (y % i == 0 && y / i >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  o =
                    i.pseudos[e] ||
                    i.setFilters[e.toLowerCase()] ||
                    re.error("unsupported pseudo: " + e);
                return o[x]
                  ? o(t)
                  : o.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? se(function(e, n) {
                            for (var i, r = o(e, t), a = r.length; a--; )
                              e[(i = q(e, r[a]))] = !(n[i] = r[a]);
                          })
                        : function(e) {
                            return o(e, 0, n);
                          })
                    : o;
              }
            },
            pseudos: {
              not: se(function(e) {
                var t = [],
                  n = [],
                  i = s(e.replace(V, "$1"));
                return i[x]
                  ? se(function(e, t, n, o) {
                      for (var r, a = i(e, null, o, []), s = e.length; s--; )
                        (r = a[s]) && (e[s] = !(t[s] = r));
                    })
                  : function(e, o, r) {
                      return (
                        (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: se(function(e) {
                return function(t) {
                  return re(e, t).length > 0;
                };
              }),
              contains: se(function(e) {
                return (
                  (e = e.replace(Z, ee)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: se(function(e) {
                return (
                  $.test(e || "") || re.error("unsupported lang: " + e),
                  (e = e.replace(Z, ee).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = m
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function(e) {
                return e === h;
              },
              focus: function(e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: pe(!1),
              disabled: pe(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !i.pseudos.empty(e);
              },
              header: function(e) {
                return Y.test(e.nodeName);
              },
              input: function(e) {
                return Q.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: he(function() {
                return [0];
              }),
              last: he(function(e, t) {
                return [t - 1];
              }),
              eq: he(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: he(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: he(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: he(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: he(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              })
            }
          }).pseudos.nth =
            i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
          function ge() {}
          function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function be(e, t, n) {
            var i = t.dir,
              o = t.next,
              r = o || i,
              a = n && "parentNode" === r,
              s = k++;
            return t.first
              ? function(t, n, o) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || a) return e(t, n, o);
                  return !1;
                }
              : function(t, n, l) {
                  var c,
                    u,
                    d,
                    f = [C, s];
                  if (l) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((u =
                            (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((c = u[r]) && c[0] === C && c[1] === s)
                            return (f[2] = c[2]);
                          if (((u[r] = f), (f[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function ye(e) {
            return e.length > 1
              ? function(t, n, i) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function xe(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), c && t.push(s)));
            return a;
          }
          function we(e, t, n, i, o, r) {
            return (
              i && !i[x] && (i = we(i)),
              o && !o[x] && (o = we(o, r)),
              se(function(r, a, s, l) {
                var c,
                  u,
                  d,
                  f = [],
                  p = [],
                  h = a.length,
                  m =
                    r ||
                    (function(e, t, n) {
                      for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  g = !e || (!r && t) ? m : xe(m, f, e, s, l),
                  v = n ? (o || (r ? e : h || i) ? [] : a) : g;
                if ((n && n(g, v, s, l), i))
                  for (c = xe(v, p), i(c, [], s, l), u = c.length; u--; )
                    (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                if (r) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = v.length; u--; )
                        (d = v[u]) && c.push((g[u] = d));
                      o(null, (v = []), c, l);
                    }
                    for (u = v.length; u--; )
                      (d = v[u]) &&
                        (c = o ? q(r, d) : f[u]) > -1 &&
                        (r[c] = !(a[c] = d));
                  }
                } else (v = xe(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, l) : j.apply(a, v);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                o,
                r = e.length,
                a = i.relative[e[0].type],
                s = a || i.relative[" "],
                l = a ? 1 : 0,
                u = be(
                  function(e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                d = be(
                  function(e) {
                    return q(t, e) > -1;
                  },
                  s,
                  !0
                ),
                f = [
                  function(e, n, i) {
                    var o =
                      (!a && (i || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return (t = null), o;
                  }
                ];
              l < r;
              l++
            )
              if ((n = i.relative[e[l].type])) f = [be(ye(f), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                  for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                  return we(
                    l > 1 && ye(f),
                    l > 1 &&
                      ve(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(V, "$1"),
                    n,
                    l < o && Ce(e.slice(l, o)),
                    o < r && Ce((e = e.slice(o))),
                    o < r && ve(e)
                  );
                }
                f.push(n);
              }
            return ye(f);
          }
          return (
            (ge.prototype = i.filters = i.pseudos),
            (i.setFilters = new ge()),
            (a = re.tokenize = function(e, t) {
              var n,
                o,
                r,
                a,
                s,
                l,
                c,
                u = T[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (s = e, l = [], c = i.preFilter; s; ) {
                for (a in ((n && !(o = U.exec(s))) ||
                  (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
                (n = !1),
                (o = W.exec(s)) &&
                  ((n = o.shift()),
                  r.push({ value: n, type: o[0].replace(V, " ") }),
                  (s = s.slice(n.length))),
                i.filter))
                  !(o = X[a].exec(s)) ||
                    (c[a] && !(o = c[a](o))) ||
                    ((n = o.shift()),
                    r.push({ value: n, type: a, matches: o }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? re.error(e) : T(e, l).slice(0);
            }),
            (s = re.compile = function(e, t) {
              var n,
                o = [],
                r = [],
                s = A[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = Ce(t[n]))[x] ? o.push(s) : r.push(s);
                (s = A(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      r = function(r, a, s, l, u) {
                        var d,
                          h,
                          g,
                          v = 0,
                          b = "0",
                          y = r && [],
                          x = [],
                          w = c,
                          k = r || (o && i.find.TAG("*", u)),
                          S = (C += null == w ? 1 : Math.random() || 0.1),
                          T = k.length;
                        for (
                          u && (c = a === p || a || u);
                          b !== T && null != (d = k[b]);
                          b++
                        ) {
                          if (o && d) {
                            for (
                              h = 0,
                                a || d.ownerDocument === p || (f(d), (s = !m));
                              (g = e[h++]);

                            )
                              if (g(d, a || p, s)) {
                                l.push(d);
                                break;
                              }
                            u && (C = S);
                          }
                          n && ((d = !g && d) && v--, r && y.push(d));
                        }
                        if (((v += b), n && b !== v)) {
                          for (h = 0; (g = t[h++]); ) g(y, x, a, s);
                          if (r) {
                            if (v > 0)
                              for (; b--; ) y[b] || x[b] || (x[b] = P.call(l));
                            x = xe(x);
                          }
                          j.apply(l, x),
                            u &&
                              !r &&
                              x.length > 0 &&
                              v + t.length > 1 &&
                              re.uniqueSort(l);
                        }
                        return u && ((C = S), (c = w)), y;
                      };
                    return n ? se(r) : r;
                  })(r, o)
                )).selector = e;
              }
              return s;
            }),
            (l = re.select = function(e, t, n, o) {
              var r,
                l,
                c,
                u,
                d,
                f = "function" == typeof e && e,
                p = !o && a((e = f.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (l = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (c = l[0]).type &&
                  9 === t.nodeType &&
                  m &&
                  i.relative[l[1].type]
                ) {
                  if (
                    !(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])
                  )
                    return n;
                  f && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  r = X.needsContext.test(e) ? 0 : l.length;
                  r-- && ((c = l[r]), !i.relative[(u = c.type)]);

                )
                  if (
                    (d = i.find[u]) &&
                    (o = d(
                      c.matches[0].replace(Z, ee),
                      (J.test(l[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(r, 1), !(e = o.length && ve(l))))
                      return j.apply(n, o), n;
                    break;
                  }
              }
              return (
                (f || s(e, p))(
                  o,
                  t,
                  !m,
                  n,
                  !t || (J.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable =
              x
                .split("")
                .sort(E)
                .join("") === x),
            (n.detectDuplicates = !!d),
            f(),
            (n.sortDetached = le(function(e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            le(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ce("type|href|height|width", function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              le(function(e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ce("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            le(function(e) {
              return null == e.getAttribute("disabled");
            }) ||
              ce(N, function(e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
              }),
            re
          );
        })(n);
      (k.find = A),
        (k.expr = A.selectors),
        (k.expr[":"] = k.expr.pseudos),
        (k.uniqueSort = k.unique = A.uniqueSort),
        (k.text = A.getText),
        (k.isXMLDoc = A.isXML),
        (k.contains = A.contains),
        (k.escapeSelector = A.escape);
      var E = function(e, t, n) {
          for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && k(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        R = function(e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        D = k.expr.match.needsContext;
      function P(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function j(e, t, n) {
        return b(t)
          ? k.grep(e, function(e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
            ? k.grep(e, function(e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
              ? k.grep(e, function(e) {
                  return d.call(t, e) > -1 !== n;
                })
              : k.filter(t, e, n);
      }
      (k.filter = function(e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? k.find.matchesSelector(i, e) ? [i] : []
            : k.find.matches(
                e,
                k.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        k.fn.extend({
          find: function(e) {
            var t,
              n,
              i = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                k(e).filter(function() {
                  for (t = 0; t < i; t++) if (k.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) k.find(e, o[t], n);
            return i > 1 ? k.uniqueSort(n) : n;
          },
          filter: function(e) {
            return this.pushStack(j(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(j(this, e || [], !0));
          },
          is: function(e) {
            return !!j(
              this,
              "string" == typeof e && D.test(e) ? k(e) : e || [],
              !1
            ).length;
          }
        });
      var F,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((k.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || F), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : q.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof k ? t[0] : t),
              k.merge(
                this,
                k.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : a,
                  !0
                )
              ),
              O.test(i[1]) && k.isPlainObject(t))
            )
              for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (o = a.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : b(e)
            ? void 0 !== n.ready ? n.ready(e) : e(k)
            : k.makeArray(e, this);
      }).prototype =
        k.fn),
        (F = k(a));
      var N = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      k.fn.extend({
        has: function(e) {
          var t = k(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        },
        closest: function(e, t) {
          var n,
            i = 0,
            o = this.length,
            r = [],
            a = "string" != typeof e && k(e);
          if (!D.test(e))
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && k.find.matchesSelector(n, e))
                ) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? k.uniqueSort(r) : r);
        },
        index: function(e) {
          return e
            ? "string" == typeof e
              ? d.call(k(e), this[0])
              : d.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
        },
        add: function(e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        k.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return E(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
              return E(e, "parentNode", n);
            },
            next: function(e) {
              return M(e, "nextSibling");
            },
            prev: function(e) {
              return M(e, "previousSibling");
            },
            nextAll: function(e) {
              return E(e, "nextSibling");
            },
            prevAll: function(e) {
              return E(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
              return E(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
              return E(e, "previousSibling", n);
            },
            siblings: function(e) {
              return R((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return R(e.firstChild);
            },
            contents: function(e) {
              return P(e, "iframe")
                ? e.contentDocument
                : (P(e, "template") && (e = e.content || e),
                  k.merge([], e.childNodes));
            }
          },
          function(e, t) {
            k.fn[e] = function(n, i) {
              var o = k.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = k.filter(i, o)),
                this.length > 1 &&
                  (L[e] || k.uniqueSort(o), N.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function z(e) {
        return e;
      }
      function H(e) {
        throw e;
      }
      function V(e, t, n, i) {
        var o;
        try {
          e && b((o = e.promise))
            ? o
                .call(e)
                .done(t)
                .fail(n)
            : e && b((o = e.then))
              ? o.call(e, t, n)
              : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (k.Callbacks = function(e) {
        e =
          "string" == typeof e
            ? (function(e) {
                var t = {};
                return (
                  k.each(e.match(I) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : k.extend({}, e);
        var t,
          n,
          i,
          o,
          r = [],
          a = [],
          s = -1,
          l = function() {
            for (o = o || e.once, i = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < r.length; )
                !1 === r[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = r.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (r = n ? [] : "");
          },
          c = {
            add: function() {
              return (
                r &&
                  (n && !t && ((s = r.length - 1), a.push(n)),
                  (function t(n) {
                    k.each(n, function(n, i) {
                      b(i)
                        ? (e.unique && c.has(i)) || r.push(i)
                        : i && i.length && "string" !== C(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function() {
              return (
                k.each(arguments, function(e, t) {
                  for (var n; (n = k.inArray(t, r, n)) > -1; )
                    r.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? k.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function() {
              return r && (r = []), this;
            },
            disable: function() {
              return (o = a = []), (r = n = ""), this;
            },
            disabled: function() {
              return !r;
            },
            lock: function() {
              return (o = a = []), n || t || (r = n = ""), this;
            },
            locked: function() {
              return !!o;
            },
            fireWith: function(e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || l()),
                this
              );
            },
            fire: function() {
              return c.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!i;
            }
          };
        return c;
      }),
        k.extend({
          Deferred: function(e) {
            var t = [
                [
                  "notify",
                  "progress",
                  k.Callbacks("memory"),
                  k.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ],
              i = "pending",
              o = {
                state: function() {
                  return i;
                },
                always: function() {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                  return o.then(null, e);
                },
                pipe: function() {
                  var e = arguments;
                  return k
                    .Deferred(function(n) {
                      k.each(t, function(t, i) {
                        var o = b(e[i[4]]) && e[i[4]];
                        r[i[1]](function() {
                          var e = o && o.apply(this, arguments);
                          e && b(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, o ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function(e, i, o) {
                  var r = 0;
                  function a(e, t, i, o) {
                    return function() {
                      var s = this,
                        l = arguments,
                        c = function() {
                          var n, c;
                          if (!(e < r)) {
                            if ((n = i.apply(s, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              b(c)
                                ? o
                                  ? c.call(n, a(r, t, z, o), a(r, t, H, o))
                                  : (r++,
                                    c.call(
                                      n,
                                      a(r, t, z, o),
                                      a(r, t, H, o),
                                      a(r, t, z, t.notifyWith)
                                    ))
                                : (i !== z && ((s = void 0), (l = [n])),
                                  (o || t.resolveWith)(s, l));
                          }
                        },
                        u = o
                          ? c
                          : function() {
                              try {
                                c();
                              } catch (n) {
                                k.Deferred.exceptionHook &&
                                  k.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= r &&
                                    (i !== H && ((s = void 0), (l = [n])),
                                    t.rejectWith(s, l));
                              }
                            };
                      e
                        ? u()
                        : (k.Deferred.getStackHook &&
                            (u.stackTrace = k.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return k
                    .Deferred(function(n) {
                      t[0][3].add(a(0, n, b(o) ? o : z, n.notifyWith)),
                        t[1][3].add(a(0, n, b(e) ? e : z)),
                        t[2][3].add(a(0, n, b(i) ? i : H));
                    })
                    .promise();
                },
                promise: function(e) {
                  return null != e ? k.extend(e, o) : o;
                }
              },
              r = {};
            return (
              k.each(t, function(e, n) {
                var a = n[2],
                  s = n[5];
                (o[n[1]] = a.add),
                  s &&
                    a.add(
                      function() {
                        i = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (r[n[0]] = function() {
                    return (
                      r[n[0] + "With"](this === r ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (r[n[0] + "With"] = a.fireWith);
              }),
              o.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function(e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              o = l.call(arguments),
              r = k.Deferred(),
              a = function(e) {
                return function(n) {
                  (i[e] = this),
                    (o[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || r.resolveWith(i, o);
                };
              };
            if (
              t <= 1 &&
              (V(e, r.done(a(n)).resolve, r.reject, !t),
              "pending" === r.state() || b(o[n] && o[n].then))
            )
              return r.then();
            for (; n--; ) V(o[n], a(n), r.reject);
            return r.promise();
          }
        });
      var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (k.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          U.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (k.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      var W = k.Deferred();
      function B() {
        a.removeEventListener("DOMContentLoaded", B),
          n.removeEventListener("load", B),
          k.ready();
      }
      (k.fn.ready = function(e) {
        return (
          W.then(e).catch(function(e) {
            k.readyException(e);
          }),
          this
        );
      }),
        k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) ||
              ((k.isReady = !0),
              (!0 !== e && --k.readyWait > 0) || W.resolveWith(a, [k]));
          }
        }),
        (k.ready.then = W.then),
        "complete" === a.readyState ||
        ("loading" !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(k.ready)
          : (a.addEventListener("DOMContentLoaded", B),
            n.addEventListener("load", B));
      var _ = function(e, t, n, i, o, r, a) {
          var s = 0,
            l = e.length,
            c = null == n;
          if ("object" === C(n))
            for (s in ((o = !0), n)) _(e, t, s, n[s], !0, r, a);
          else if (
            void 0 !== i &&
            ((o = !0),
            b(i) || (a = !0),
            c &&
              (a
                ? (t.call(e, i), (t = null))
                : ((c = t),
                  (t = function(e, t, n) {
                    return c.call(k(e), n);
                  }))),
            t)
          )
            for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
          return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        $ = /^-ms-/,
        X = /-([a-z])/g;
      function Q(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace($, "ms-").replace(X, Q);
      }
      var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function K() {
        this.expando = k.expando + K.uid++;
      }
      (K.uid = 1),
        (K.prototype = {
          cache: function(e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            );
          },
          set: function(e, t, n) {
            var i,
              o = this.cache(e);
            if ("string" == typeof t) o[Y(t)] = n;
            else for (i in t) o[Y(i)] = t[i];
            return o;
          },
          get: function(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function(e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in i ? [t] : t.match(I) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || k.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
          }
        });
      var J = new K(),
        Z = new K(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function(e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      k.extend({
        hasData: function(e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function(e, t) {
          Z.remove(e, t);
        },
        _data: function(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function(e, t) {
          J.remove(e, t);
        }
      }),
        k.fn.extend({
          data: function(e, t) {
            var n,
              i,
              o,
              r = this[0],
              a = r && r.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = Z.get(r)), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (i = a[n].name).indexOf("data-") &&
                    ((i = Y(i.slice(5))), ne(r, i, o[i]));
                J.set(r, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function() {
                  Z.set(this, e);
                })
              : _(
                  this,
                  function(t) {
                    var n;
                    if (r && void 0 === t)
                      return void 0 !== (n = Z.get(r, e))
                        ? n
                        : void 0 !== (n = ne(r, e)) ? n : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          }
        }),
        k.extend({
          queue: function(e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = J.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = J.access(e, t, k.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
              i = n.length,
              o = n.shift(),
              r = k._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), i--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                o.call(
                  e,
                  function() {
                    k.dequeue(e, t);
                  },
                  r
                )),
              !i && r && r.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                  J.remove(e, [t + "queue", n]);
                })
              })
            );
          }
        }),
        k.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? k.queue(this[0], e)
                : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = k.queue(this, e, t);
                      k._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          k.dequeue(this, e);
                    })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              k.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || "fx", []);
          },
          promise: function(e, t) {
            var n,
              i = 1,
              o = k.Deferred(),
              r = this,
              a = this.length,
              s = function() {
                --i || o.resolveWith(r, [r]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = J.get(r[a], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(s));
            return s(), o.promise(t);
          }
        });
      var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ae = function(e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display &&
              k.contains(e.ownerDocument, e) &&
              "none" === k.css(e, "display"))
          );
        },
        se = function(e, t, n, i) {
          var o,
            r,
            a = {};
          for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
          return o;
        };
      function le(e, t, n, i) {
        var o,
          r,
          a = 20,
          s = i
            ? function() {
                return i.cur();
              }
            : function() {
                return k.css(e, t, "");
              },
          l = s(),
          c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
          u = (k.cssNumber[t] || ("px" !== c && +l)) && oe.exec(k.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; a--; )
            k.style(e, t, u + c),
              (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
              (u /= r);
          (u *= 2), k.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = o))),
          o
        );
      }
      var ce = {};
      function ue(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = ce[i];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(i))),
          (o = k.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ce[i] = o),
          o)
        );
      }
      function de(e, t) {
        for (var n, i, o = [], r = 0, a = e.length; r < a; r++)
          (i = e[r]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((o[r] = J.get(i, "display") || null),
                  o[r] || (i.style.display = "")),
                "" === i.style.display && ae(i) && (o[r] = ue(i)))
              : "none" !== n && ((o[r] = "none"), J.set(i, "display", n)));
        for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
      }
      k.fn.extend({
        show: function() {
          return de(this, !0);
        },
        hide: function() {
          return de(this);
        },
        toggle: function(e) {
          return "boolean" == typeof e
            ? e ? this.show() : this.hide()
            : this.each(function() {
                ae(this) ? k(this).show() : k(this).hide();
              });
        }
      });
      var fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        me = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      function ge(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
          void 0 === t || (t && P(e, t)) ? k.merge([e], n) : n
        );
      }
      function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (me.optgroup = me.option),
        (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead),
        (me.th = me.td);
      var be,
        ye,
        xe = /<|&#?\w+;/;
      function we(e, t, n, i, o) {
        for (
          var r,
            a,
            s,
            l,
            c,
            u,
            d = t.createDocumentFragment(),
            f = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((r = e[p]) || 0 === r)
            if ("object" === C(r)) k.merge(f, r.nodeType ? [r] : r);
            else if (xe.test(r)) {
              for (
                a = a || d.appendChild(t.createElement("div")),
                  s = (pe.exec(r) || ["", ""])[1].toLowerCase(),
                  l = me[s] || me._default,
                  a.innerHTML = l[1] + k.htmlPrefilter(r) + l[2],
                  u = l[0];
                u--;

              )
                a = a.lastChild;
              k.merge(f, a.childNodes), ((a = d.firstChild).textContent = "");
            } else f.push(t.createTextNode(r));
        for (d.textContent = "", p = 0; (r = f[p++]); )
          if (i && k.inArray(r, i) > -1) o && o.push(r);
          else if (
            ((c = k.contains(r.ownerDocument, r)),
            (a = ge(d.appendChild(r), "script")),
            c && ve(a),
            n)
          )
            for (u = 0; (r = a[u++]); ) he.test(r.type || "") && n.push(r);
        return d;
      }
      (be = a.createDocumentFragment().appendChild(a.createElement("div"))),
        (ye = a.createElement("input")).setAttribute("type", "radio"),
        ye.setAttribute("checked", "checked"),
        ye.setAttribute("name", "t"),
        be.appendChild(ye),
        (v.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (be.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue);
      var Ce = a.documentElement,
        ke = /^key/,
        Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function Ee() {
        return !1;
      }
      function Re() {
        try {
          return a.activeElement;
        } catch (e) {}
      }
      function De(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            De(e, s, n, i, t[s], r);
          return e;
        }
        if (
          (null == i && null == o
            ? ((o = n), (i = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          !1 === o)
        )
          o = Ee;
        else if (!o) return e;
        return (
          1 === r &&
            ((a = o),
            ((o = function(e) {
              return k().off(e), a.apply(this, arguments);
            }).guid =
              a.guid || (a.guid = k.guid++))),
          e.each(function() {
            k.event.add(this, t, o, i, n);
          })
        );
      }
      (k.event = {
        global: {},
        add: function(e, t, n, i, o) {
          var r,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g = J.get(e);
          if (g)
            for (
              n.handler && ((n = (r = n).handler), (o = r.selector)),
                o && k.find.matchesSelector(Ce, o),
                n.guid || (n.guid = k.guid++),
                (l = g.events) || (l = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle = function(t) {
                    return void 0 !== k && k.event.triggered !== t.type
                      ? k.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                c = (t = (t || "").match(I) || [""]).length;
              c--;

            )
              (p = m = (s = Te.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p &&
                  ((d = k.event.special[p] || {}),
                  (p = (o ? d.delegateType : d.bindType) || p),
                  (d = k.event.special[p] || {}),
                  (u = k.extend(
                    {
                      type: p,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && k.expr.match.needsContext.test(o),
                      namespace: h.join(".")
                    },
                    r
                  )),
                  (f = l[p]) ||
                    (((f = l[p] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, i, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  d.add &&
                    (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                  (k.event.global[p] = !0));
        },
        remove: function(e, t, n, i, o) {
          var r,
            a,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            h,
            m,
            g = J.hasData(e) && J.get(e);
          if (g && (l = g.events)) {
            for (c = (t = (t || "").match(I) || [""]).length; c--; )
              if (
                ((p = m = (s = Te.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  d = k.event.special[p] || {},
                    f = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = r = f.length;
                  r--;

                )
                  (u = f[r]),
                    (!o && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (s && !s.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (f.splice(r, 1),
                      u.selector && f.delegateCount--,
                      d.remove && d.remove.call(e, u));
                a &&
                  !f.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                    k.removeEvent(e, p, g.handle),
                  delete l[p]);
              } else for (p in l) k.event.remove(e, p + t[c], n, i, !0);
            k.isEmptyObject(l) && J.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t,
            n,
            i,
            o,
            r,
            a,
            s = k.event.fix(e),
            l = new Array(arguments.length),
            c = (J.get(this, "events") || {})[s.type] || [],
            u = k.event.special[s.type] || {};
          for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((s.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, s))
          ) {
            for (
              a = k.event.handlers.call(this, s, c), t = 0;
              (o = a[t++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace && !s.rnamespace.test(r.namespace)) ||
                  ((s.handleObj = r),
                  (s.data = r.data),
                  void 0 !==
                    (i = (
                      (k.event.special[r.origType] || {}).handle || r.handler
                    ).apply(o.elem, l)) &&
                    !1 === (s.result = i) &&
                    (s.preventDefault(), s.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function(e, t) {
          var n,
            i,
            o,
            r,
            a,
            s = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (r = [], a = {}, n = 0; n < l; n++)
                  void 0 === a[(o = (i = t[n]).selector + " ")] &&
                    (a[o] = i.needsContext
                      ? k(o, this).index(c) > -1
                      : k.find(o, this, null, [c]).length),
                    a[o] && r.push(i);
                r.length && s.push({ elem: c, handlers: r });
              }
          return (
            (c = this),
            l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
            s
          );
        },
        addProp: function(e, t) {
          Object.defineProperty(k.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: b(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function(e) {
          return e[k.expando] ? e : new k.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== Re() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === Re() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              if ("checkbox" === this.type && this.click && P(this, "input"))
                return this.click(), !1;
            },
            _default: function(e) {
              return P(e.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (k.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function(e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : Ee),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && k.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
          constructor: k.Event,
          isDefaultPrevented: Ee,
          isPropagationStopped: Ee,
          isImmediatePropagationStopped: Ee,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        k.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
              var t = e.button;
              return null == e.which && ke.test(e.type)
                ? null != e.charCode ? e.charCode : e.keyCode
                : !e.which && void 0 !== t && Se.test(e.type)
                  ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0
                  : e.which;
            }
          },
          k.event.addProp
        ),
        k.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(e, t) {
            k.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === this || k.contains(this, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        k.fn.extend({
          on: function(e, t, n, i) {
            return De(this, e, t, n, i);
          },
          one: function(e, t, n, i) {
            return De(this, e, t, n, i, 1);
          },
          off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                k(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ee),
              this.each(function() {
                k.event.remove(this, e, n, t);
              })
            );
          }
        });
      var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function qe(e, t) {
        return (
          (P(e, "table") &&
            P(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            k(e).children("tbody")[0]) ||
          e
        );
      }
      function Ne(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Le(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Me(e, t) {
        var n, i, o, r, a, s, l, c;
        if (1 === t.nodeType) {
          if (
            J.hasData(e) &&
            ((r = J.access(e)), (a = J.set(t, r)), (c = r.events))
          )
            for (o in (delete a.handle, (a.events = {}), c))
              for (n = 0, i = c[o].length; n < i; n++)
                k.event.add(t, o, c[o][n]);
          Z.hasData(e) &&
            ((s = Z.access(e)), (l = k.extend({}, s)), Z.set(t, l));
        }
      }
      function Ie(e, t, n, i) {
        t = c.apply([], t);
        var o,
          r,
          a,
          s,
          l,
          u,
          d = 0,
          f = e.length,
          p = f - 1,
          h = t[0],
          m = b(h);
        if (m || (f > 1 && "string" == typeof h && !v.checkClone && je.test(h)))
          return e.each(function(o) {
            var r = e.eq(o);
            m && (t[0] = h.call(this, o, r.html())), Ie(r, t, n, i);
          });
        if (
          f &&
          ((r = (o = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === o.childNodes.length && (o = r),
          r || i)
        ) {
          for (s = (a = k.map(ge(o, "script"), Ne)).length; d < f; d++)
            (l = o),
              d !== p &&
                ((l = k.clone(l, !0, !0)), s && k.merge(a, ge(l, "script"))),
              n.call(e[d], l, d);
          if (s)
            for (
              u = a[a.length - 1].ownerDocument, k.map(a, Le), d = 0;
              d < s;
              d++
            )
              (l = a[d]),
                he.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  k.contains(u, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? k._evalUrl && k._evalUrl(l.src)
                    : w(l.textContent.replace(Fe, ""), u, l));
        }
        return e;
      }
      function ze(e, t, n) {
        for (var i, o = t ? k.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
          n || 1 !== i.nodeType || k.cleanData(ge(i)),
            i.parentNode &&
              (n && k.contains(i.ownerDocument, i) && ve(ge(i, "script")),
              i.parentNode.removeChild(i));
        return e;
      }
      k.extend({
        htmlPrefilter: function(e) {
          return e.replace(Pe, "<$1></$2>");
        },
        clone: function(e, t, n) {
          var i,
            o,
            r,
            a,
            s,
            l,
            c,
            u = e.cloneNode(!0),
            d = k.contains(e.ownerDocument, e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              k.isXMLDoc(e)
            )
          )
            for (a = ge(u), i = 0, o = (r = ge(e)).length; i < o; i++)
              (s = r[i]),
                (l = a[i]),
                void 0,
                "input" === (c = l.nodeName.toLowerCase()) && fe.test(s.type)
                  ? (l.checked = s.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (l.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (
                r = r || ge(e), a = a || ge(u), i = 0, o = r.length;
                i < o;
                i++
              )
                Me(r[i], a[i]);
            else Me(e, u);
          return (
            (a = ge(u, "script")).length > 0 && ve(a, !d && ge(e, "script")), u
          );
        },
        cleanData: function(e) {
          for (
            var t, n, i, o = k.event.special, r = 0;
            void 0 !== (n = e[r]);
            r++
          )
            if (G(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (i in t.events)
                    o[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        k.fn.extend({
          detach: function(e) {
            return ze(this, e, !0);
          },
          remove: function(e) {
            return ze(this, e);
          },
          text: function(e) {
            return _(
              this,
              function(e) {
                return void 0 === e
                  ? k.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return Ie(this, arguments, function(e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                qe(this, e).appendChild(e);
            });
          },
          prepend: function() {
            return Ie(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = qe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return Ie(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return Ie(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (k.cleanData(ge(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return k.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return _(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Oe.test(e) &&
                  !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = k.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (k.cleanData(ge(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return Ie(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                k.inArray(this, e) < 0 &&
                  (k.cleanData(ge(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        k.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(e, t) {
            k.fn[e] = function(e) {
              for (
                var n, i = [], o = k(e), r = o.length - 1, a = 0;
                a <= r;
                a++
              )
                (n = a === r ? this : this.clone(!0)),
                  k(o[a])[t](n),
                  u.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
        Ve = function(e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Ue = new RegExp(re.join("|"), "i");
      function We(e, t, n) {
        var i,
          o,
          r,
          a,
          s = e.style;
        return (
          (n = n || Ve(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              k.contains(e.ownerDocument, e) ||
              (a = k.style(e, t)),
            !v.pixelBoxStyles() &&
              He.test(a) &&
              Ue.test(t) &&
              ((i = s.width),
              (o = s.minWidth),
              (r = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = i),
              (s.minWidth = o),
              (s.maxWidth = r))),
          void 0 !== a ? a + "" : a
        );
      }
      function Be(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Ce.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (r = 36 === u.offsetWidth || "absolute"),
              Ce.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          o,
          r,
          s,
          l,
          c = a.createElement("div"),
          u = a.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
          k.extend(v, {
            boxSizingReliable: function() {
              return e(), o;
            },
            pixelBoxStyles: function() {
              return e(), s;
            },
            pixelPosition: function() {
              return e(), i;
            },
            reliableMarginLeft: function() {
              return e(), l;
            },
            scrollboxSize: function() {
              return e(), r;
            }
          }));
      })();
      var _e = /^(none|table(?!-c[ea]).+)/,
        $e = /^--/,
        Xe = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" },
        Ye = ["Webkit", "Moz", "ms"],
        Ge = a.createElement("div").style;
      function Ke(e) {
        var t = k.cssProps[e];
        return (
          t ||
            (t = k.cssProps[e] =
              (function(e) {
                if (e in Ge) return e;
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                  n--;

                )
                  if ((e = Ye[n] + t) in Ge) return e;
              })(e) || e),
          t
        );
      }
      function Je(e, t, n) {
        var i = oe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function Ze(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (l += k.css(e, n + re[a], !0, o)),
            i
              ? ("content" === n && (l -= k.css(e, "padding" + re[a], !0, o)),
                "margin" !== n &&
                  (l -= k.css(e, "border" + re[a] + "Width", !0, o)))
              : ((l += k.css(e, "padding" + re[a], !0, o)),
                "padding" !== n
                  ? (l += k.css(e, "border" + re[a] + "Width", !0, o))
                  : (s += k.css(e, "border" + re[a] + "Width", !0, o)));
        return (
          !i &&
            r >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5
              )
            )),
          l
        );
      }
      function et(e, t, n) {
        var i = Ve(e),
          o = We(e, t, i),
          r = "border-box" === k.css(e, "boxSizing", !1, i),
          a = r;
        if (He.test(o)) {
          if (!n) return o;
          o = "auto";
        }
        return (
          (a = a && (v.boxSizingReliable() || o === e.style[t])),
          ("auto" === o ||
            (!parseFloat(o) && "inline" === k.css(e, "display", !1, i))) &&
            ((o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (o = parseFloat(o) || 0) +
            Ze(e, t, n || (r ? "border" : "content"), a, i, o) +
            "px"
        );
      }
      function tt(e, t, n, i, o) {
        return new tt.prototype.init(e, t, n, i, o);
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = We(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              r,
              a,
              s = Y(t),
              l = $e.test(t),
              c = e.style;
            if (
              (l || (t = Ke(s)),
              (a = k.cssHooks[t] || k.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (o = a.get(e, !1, i))
                ? o
                : c[t];
            "string" === (r = typeof n) &&
              (o = oe.exec(n)) &&
              o[1] &&
              ((n = le(e, t, o)), (r = "number")),
              null != n &&
                n == n &&
                ("number" === r &&
                  (n += (o && o[3]) || (k.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function(e, t, n, i) {
          var o,
            r,
            a,
            s = Y(t);
          return (
            $e.test(t) || (t = Ke(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) &&
              "get" in a &&
              (o = a.get(e, !0, n)),
            void 0 === o && (o = We(e, t, i)),
            "normal" === o && t in Qe && (o = Qe[t]),
            "" === n || n
              ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
              : o
          );
        }
      }),
        k.each(["height", "width"], function(e, t) {
          k.cssHooks[t] = {
            get: function(e, n, i) {
              if (n)
                return !_e.test(k.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? et(e, t, i)
                  : se(e, Xe, function() {
                      return et(e, t, i);
                    });
            },
            set: function(e, n, i) {
              var o,
                r = Ve(e),
                a = "border-box" === k.css(e, "boxSizing", !1, r),
                s = i && Ze(e, t, i, a, r);
              return (
                a &&
                  v.scrollboxSize() === r.position &&
                  (s -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(r[t]) -
                      Ze(e, t, "border", !1, r) -
                      0.5
                  )),
                s &&
                  (o = oe.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = k.css(e, t))),
                Je(0, n, s)
              );
            }
          };
        }),
        (k.cssHooks.marginLeft = Be(v.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(We(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  se(e, { marginLeft: 0 }, function() {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
          (k.cssHooks[e + t] = {
            expand: function(n) {
              for (
                var i = 0,
                  o = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[e + re[i] + t] = r[i] || r[i - 2] || r[0];
              return o;
            }
          }),
            "margin" !== e && (k.cssHooks[e + t].set = Je);
        }),
        k.fn.extend({
          css: function(e, t) {
            return _(
              this,
              function(e, t, n) {
                var i,
                  o,
                  r = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (i = Ve(e), o = t.length; a < o; a++)
                    r[t[a]] = k.css(e, t[a], !1, i);
                  return r;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (k.Tween = tt),
        (tt.prototype = {
          constructor: tt,
          init: function(e, t, n, i, o, r) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || k.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = r || (k.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = tt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = k.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : tt.propHooks._default.set(this),
              this
            );
          }
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
              k.fx.step[e.prop]
                ? k.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[k.cssProps[e.prop]] &&
                    !k.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : k.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (k.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (k.fx = tt.prototype.init),
        (k.fx.step = {});
      var nt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        rt = /queueHooks$/;
      function at() {
        it &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(at)
            : n.setTimeout(at, k.fx.interval),
          k.fx.tick());
      }
      function st() {
        return (
          n.setTimeout(function() {
            nt = void 0;
          }),
          (nt = Date.now())
        );
      }
      function lt(e, t) {
        var n,
          i = 0,
          o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          o["margin" + (n = re[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function ct(e, t, n) {
        for (
          var i,
            o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]),
            r = 0,
            a = o.length;
          r < a;
          r++
        )
          if ((i = o[r].call(n, t, e))) return i;
      }
      function ut(e, t, n) {
        var i,
          o,
          r = 0,
          a = ut.prefilters.length,
          s = k.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (o) return !1;
            for (
              var t = nt || st(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = 1 - (n / c.duration || 0),
                r = 0,
                a = c.tweens.length;
              r < a;
              r++
            )
              c.tweens[r].run(i);
            return (
              s.notifyWith(e, [c, i, n]),
              i < 1 && a
                ? n
                : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: k.extend({}, t),
            opts: k.extend(
              !0,
              { specialEasing: {}, easing: k.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var i = k.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function(t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            }
          }),
          u = c.props;
        for (
          !(function(e, t) {
            var n, i, o, r, a;
            for (n in e)
              if (
                ((o = t[(i = Y(n))]),
                (r = e[n]),
                Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
                n !== i && ((e[i] = r), delete e[n]),
                (a = k.cssHooks[i]) && ("expand" in a))
              )
                for (n in ((r = a.expand(r)), delete e[i], r))
                  (n in e) || ((e[n] = r[n]), (t[n] = o));
              else t[i] = o;
          })(u, c.opts.specialEasing);
          r < a;
          r++
        )
          if ((i = ut.prefilters[r].call(c, e, u, c.opts)))
            return (
              b(i.stop) &&
                (k._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          k.map(u, ct, c),
          b(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          k.fx.timer(k.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (k.Animation = k.extend(ut, {
        tweeners: {
          "*": [
            function(e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, oe.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          b(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
          for (var n, i = 0, o = e.length; i < o; i++)
            (n = e[i]),
              (ut.tweeners[n] = ut.tweeners[n] || []),
              ut.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            var i,
              o,
              r,
              a,
              s,
              l,
              c,
              u,
              d = "width" in t || "height" in t,
              f = this,
              p = {},
              h = e.style,
              m = e.nodeType && ae(e),
              g = J.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (a = k._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function() {
                  a.unqueued || s();
                })),
              a.unqueued++,
              f.always(function() {
                f.always(function() {
                  a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((o = t[i]), ot.test(o))) {
                if (
                  (delete t[i],
                  (r = r || "toggle" === o),
                  o === (m ? "hide" : "show"))
                ) {
                  if ("show" !== o || !g || void 0 === g[i]) continue;
                  m = !0;
                }
                p[i] = (g && g[i]) || k.style(e, i);
              }
            if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
              for (i in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = g && g.display) && (c = J.get(e, "display")),
                "none" === (u = k.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (de([e], !0),
                      (c = e.style.display || c),
                      (u = k.css(e, "display")),
                      de([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === k.css(e, "float") &&
                  (l ||
                    (f.done(function() {
                      h.display = c;
                    }),
                    null == c &&
                      ((u = h.display), (c = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                f.always(function() {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              p))
                l ||
                  (g
                    ? "hidden" in g && (m = g.hidden)
                    : (g = J.access(e, "fxshow", { display: c })),
                  r && (g.hidden = !m),
                  m && de([e], !0),
                  f.done(function() {
                    for (i in (m || de([e]), J.remove(e, "fxshow"), p))
                      k.style(e, i, p[i]);
                  })),
                  (l = ct(m ? g[i] : 0, i, f)),
                  i in g ||
                    ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
          }
        ],
        prefilter: function(e, t) {
          t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
        }
      })),
        (k.speed = function(e, t, n) {
          var i =
            e && "object" == typeof e
              ? k.extend({}, e)
              : {
                  complete: n || (!n && t) || (b(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !b(t) && t)
                };
          return (
            k.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in k.fx.speeds
                  ? (i.duration = k.fx.speeds[i.duration])
                  : (i.duration = k.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function() {
              b(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
            }),
            i
          );
        }),
        k.fn.extend({
          fadeTo: function(e, t, n, i) {
            return this.filter(ae)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function(e, t, n, i) {
            var o = k.isEmptyObject(e),
              r = k.speed(t, n, i),
              a = function() {
                var t = ut(this, k.extend({}, e), r);
                (o || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            );
          },
          stop: function(e, t, n) {
            var i = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function() {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  r = k.timers,
                  a = J.get(this);
                if (o) a[o] && a[o].stop && i(a[o]);
                else for (o in a) a[o] && a[o].stop && rt.test(o) && i(a[o]);
                for (o = r.length; o--; )
                  r[o].elem !== this ||
                    (null != e && r[o].queue !== e) ||
                    (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
                (!t && n) || k.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function() {
                var t,
                  n = J.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  r = k.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    k.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = r.length;
                  t--;

                )
                  r[t].elem === this &&
                    r[t].queue === e &&
                    (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < a; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        k.each(["toggle", "show", "hide"], function(e, t) {
          var n = k.fn[t];
          k.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(lt(t, !0), e, i, o);
          };
        }),
        k.each(
          {
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(e, t) {
            k.fn[e] = function(e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (k.timers = []),
        (k.fx.tick = function() {
          var e,
            t = 0,
            n = k.timers;
          for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || k.fx.stop(), (nt = void 0);
        }),
        (k.fx.timer = function(e) {
          k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function() {
          it || ((it = !0), at());
        }),
        (k.fx.stop = function() {
          it = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function(e, t) {
          return (
            (e = (k.fx && k.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function(t, i) {
              var o = n.setTimeout(t, e);
              i.stop = function() {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function() {
          var e = a.createElement("input"),
            t = a
              .createElement("select")
              .appendChild(a.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = a.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var dt,
        ft = k.expr.attrHandle;
      k.fn.extend({
        attr: function(e, t) {
          return _(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            k.removeAttr(this, e);
          });
        }
      }),
        k.extend({
          attr: function(e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute
                ? k.prop(e, t, n)
                : ((1 === r && k.isXMLDoc(e)) ||
                    (o =
                      k.attrHooks[t.toLowerCase()] ||
                      (k.expr.match.bool.test(t) ? dt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void k.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (i = o.get(e, t))
                      ? i
                      : null == (i = k.find.attr(e, t)) ? void 0 : i);
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (!v.radioValue && "radio" === t && P(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              i = 0,
              o = t && t.match(I);
            if (o && 1 === e.nodeType)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          }
        }),
        (dt = {
          set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = ft[t] || k.find.attr;
          ft[t] = function(e, t, i) {
            var o,
              r,
              a = t.toLowerCase();
            return (
              i ||
                ((r = ft[a]),
                (ft[a] = o),
                (o = null != n(e, t, i) ? a : null),
                (ft[a] = r)),
              o
            );
          };
        });
      var pt = /^(?:input|select|textarea|button)$/i,
        ht = /^(?:a|area)$/i;
      function mt(e) {
        return (e.match(I) || []).join(" ");
      }
      function gt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function vt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      k.fn.extend({
        prop: function(e, t) {
          return _(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[k.propFix[e] || e];
          });
        }
      }),
        k.extend({
          prop: function(e, t, n) {
            var i,
              o,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && k.isXMLDoc(e)) ||
                  ((t = k.propFix[t] || t), (o = k.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = k.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : pt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        v.optSelected ||
          (k.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        k.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function() {
            k.propFix[this.toLowerCase()] = this;
          }
        ),
        k.fn.extend({
          addClass: function(e) {
            var t,
              n,
              i,
              o,
              r,
              a,
              s,
              l = 0;
            if (b(e))
              return this.each(function(t) {
                k(this).addClass(e.call(this, t, gt(this)));
              });
            if ((t = vt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = gt(n)), (i = 1 === n.nodeType && " " + mt(o) + " "))
                ) {
                  for (a = 0; (r = t[a++]); )
                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  o !== (s = mt(i)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              i,
              o,
              r,
              a,
              s,
              l = 0;
            if (b(e))
              return this.each(function(t) {
                k(this).removeClass(e.call(this, t, gt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = vt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = gt(n)), (i = 1 === n.nodeType && " " + mt(o) + " "))
                ) {
                  for (a = 0; (r = t[a++]); )
                    for (; i.indexOf(" " + r + " ") > -1; )
                      i = i.replace(" " + r + " ", " ");
                  o !== (s = mt(i)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t ? this.addClass(e) : this.removeClass(e)
              : b(e)
                ? this.each(function(n) {
                    k(this).toggleClass(e.call(this, n, gt(this), t), t);
                  })
                : this.each(function() {
                    var t, o, r, a;
                    if (i)
                      for (o = 0, r = k(this), a = vt(e); (t = a[o++]); )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = gt(this)) && J.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : J.get(this, "__className__") || ""
                          ));
                  });
          },
          hasClass: function(e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + mt(gt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
      var bt = /\r/g;
      k.fn.extend({
        val: function(e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = b(e)),
              this.each(function(n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = i ? e.call(this, n, k(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                      ? (o += "")
                      : Array.isArray(o) &&
                        (o = k.map(o, function(e) {
                          return null == e ? "" : e + "";
                        })),
                  ((t =
                    k.valHooks[this.type] ||
                    k.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
              ? (t =
                  k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(o, "value"))
                ? n
                : "string" == typeof (n = o.value)
                  ? n.replace(bt, "")
                  : null == n ? "" : n
              : void 0;
        }
      }),
        k.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = k.find.attr(e, "value");
                return null != t ? t : mt(k.text(e));
              }
            },
            select: {
              get: function(e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  r = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  l = a ? r + 1 : o.length;
                for (i = r < 0 ? l : a ? r : 0; i < l; i++)
                  if (
                    ((n = o[i]).selected || i === r) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))
                  ) {
                    if (((t = k(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function(e, t) {
                for (
                  var n, i, o = e.options, r = k.makeArray(t), a = o.length;
                  a--;

                )
                  ((i = o[a]).selected =
                    k.inArray(k.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r;
              }
            }
          }
        }),
        k.each(["radio", "checkbox"], function() {
          (k.valHooks[this] = {
            set: function(e, t) {
              if (Array.isArray(t))
                return (e.checked = k.inArray(k(e).val(), t) > -1);
            }
          }),
            v.checkOn ||
              (k.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var yt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
          e.stopPropagation();
        };
      k.extend(k.event, {
        trigger: function(e, t, i, o) {
          var r,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            m = [i || a],
            g = h.call(e, "type") ? e.type : e,
            v = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = p = l = i = i || a),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !yt.test(g + k.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((g = (v = g.split(".")).shift()), v.sort()),
              (u = g.indexOf(":") < 0 && "on" + g),
              ((e = e[k.expando]
                ? e
                : new k.Event(g, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : k.makeArray(t, [e])),
              (f = k.event.special[g] || {}),
              o || !f.trigger || !1 !== f.trigger.apply(i, t)))
          ) {
            if (!o && !f.noBubble && !y(i)) {
              for (
                c = f.delegateType || g, yt.test(c + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                m.push(s), (l = s);
              l === (i.ownerDocument || a) &&
                m.push(l.defaultView || l.parentWindow || n);
            }
            for (r = 0; (s = m[r++]) && !e.isPropagationStopped(); )
              (p = s),
                (e.type = r > 1 ? c : f.bindType || g),
                (d =
                  (J.get(s, "events") || {})[e.type] && J.get(s, "handle")) &&
                  d.apply(s, t),
                (d = u && s[u]) &&
                  d.apply &&
                  G(s) &&
                  ((e.result = d.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(m.pop(), t)) ||
                !G(i) ||
                (u &&
                  b(i[g]) &&
                  !y(i) &&
                  ((l = i[u]) && (i[u] = null),
                  (k.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, xt),
                  i[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, xt),
                  (k.event.triggered = void 0),
                  l && (i[u] = l))),
              e.result
            );
          }
        },
        simulate: function(e, t, n) {
          var i = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
          k.event.trigger(i, null, t);
        }
      }),
        k.fn.extend({
          trigger: function(e, t) {
            return this.each(function() {
              k.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
          }
        }),
        v.focusin ||
          k.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) {
              k.event.simulate(t, e.target, k.event.fix(e));
            };
            k.event.special[t] = {
              setup: function() {
                var i = this.ownerDocument || this,
                  o = J.access(i, t);
                o || i.addEventListener(e, n, !0), J.access(i, t, (o || 0) + 1);
              },
              teardown: function() {
                var i = this.ownerDocument || this,
                  o = J.access(i, t) - 1;
                o
                  ? J.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), J.remove(i, t));
              }
            };
          });
      var wt = n.location,
        Ct = Date.now(),
        kt = /\?/;
      k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            k.error("Invalid XML: " + e),
          t
        );
      };
      var St = /\[\]$/,
        Tt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
      function Rt(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          k.each(t, function(t, o) {
            n || St.test(e)
              ? i(e, o)
              : Rt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  i
                );
          });
        else if (n || "object" !== C(t)) i(e, t);
        else for (o in t) Rt(e + "[" + o + "]", t[o], n, i);
      }
      (k.param = function(e, t) {
        var n,
          i = [],
          o = function(e, t) {
            var n = b(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
          k.each(e, function() {
            o(this.name, this.value);
          });
        else for (n in e) Rt(n, e[n], t, o);
        return i.join("&");
      }),
        k.fn.extend({
          serialize: function() {
            return k.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !k(this).is(":disabled") &&
                  Et.test(this.nodeName) &&
                  !At.test(e) &&
                  (this.checked || !fe.test(e))
                );
              })
              .map(function(e, t) {
                var n = k(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                    ? k.map(n, function(e) {
                        return { name: t.name, value: e.replace(Tt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Tt, "\r\n") };
              })
              .get();
          }
        });
      var Dt = /%20/g,
        Pt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Nt = {},
        Lt = {},
        Mt = "*/".concat("*"),
        It = a.createElement("a");
      function zt(e) {
        return function(t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            o = 0,
            r = t.toLowerCase().match(I) || [];
          if (b(n))
            for (; (i = r[o++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Ht(e, t, n, i) {
        var o = {},
          r = e === Lt;
        function a(s) {
          var l;
          return (
            (o[s] = !0),
            k.each(e[s] || [], function(e, s) {
              var c = s(t, n, i);
              return "string" != typeof c || r || o[c]
                ? r ? !(l = c) : void 0
                : (t.dataTypes.unshift(c), a(c), !1);
            }),
            l
          );
        }
        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function Vt(e, t) {
        var n,
          i,
          o = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && k.extend(!0, e, i), e;
      }
      (It.href = wt.href),
        k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              wt.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Mt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": k.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, k.ajaxSettings), t) : Vt(k.ajaxSettings, e);
          },
          ajaxPrefilter: zt(Nt),
          ajaxTransport: zt(Lt),
          ajax: function(e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              o,
              r,
              s,
              l,
              c,
              u,
              d,
              f,
              p,
              h = k.ajaxSetup({}, t),
              m = h.context || h,
              g = h.context && (m.nodeType || m.jquery) ? k(m) : k.event,
              v = k.Deferred(),
              b = k.Callbacks("once memory"),
              y = h.statusCode || {},
              x = {},
              w = {},
              C = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (u) {
                    if (!s)
                      for (s = {}; (t = jt.exec(r)); )
                        s[t[1].toLowerCase()] = t[2];
                    t = s[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                  return u ? r : null;
                },
                setRequestHeader: function(e, t) {
                  return (
                    null == u &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function(e) {
                  return null == u && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (u) S.always(e[S.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function(e) {
                  var t = e || C;
                  return i && i.abort(t), T(0, t), this;
                }
              };
            if (
              (v.promise(S),
              (h.url = ((e || h.url || wt.href) + "").replace(
                qt,
                wt.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [
                ""
              ]),
              null == h.crossDomain)
            ) {
              c = a.createElement("a");
              try {
                (c.href = h.url),
                  (c.href = c.href),
                  (h.crossDomain =
                    It.protocol + "//" + It.host != c.protocol + "//" + c.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = k.param(h.data, h.traditional)),
              Ht(Nt, h, t, S),
              u)
            )
              return S;
            for (f in ((d = k.event && h.global) &&
              0 == k.active++ &&
              k.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Ft.test(h.type)),
            (o = h.url.replace(Pt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Dt, "+"))
              : ((p = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Ot, "$1")),
                  (p = (kt.test(o) ? "&" : "?") + "_=" + Ct++ + p)),
                (h.url = o + p)),
            h.ifModified &&
              (k.lastModified[o] &&
                S.setRequestHeader("If-Modified-Since", k.lastModified[o]),
              k.etag[o] && S.setRequestHeader("If-None-Match", k.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              S.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, S, h) || u))
              return S.abort();
            if (
              ((C = "abort"),
              b.add(h.complete),
              S.done(h.success),
              S.fail(h.error),
              (i = Ht(Lt, h, t, S)))
            ) {
              if (((S.readyState = 1), d && g.trigger("ajaxSend", [S, h]), u))
                return S;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function() {
                  S.abort("timeout");
                }, h.timeout));
              try {
                (u = !1), i.send(x, T);
              } catch (e) {
                if (u) throw e;
                T(-1, e);
              }
            } else T(-1, "No Transport");
            function T(e, t, a, s) {
              var c,
                f,
                p,
                x,
                w,
                C = t;
              u ||
                ((u = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (r = s || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (c = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function(e, t, n) {
                    for (
                      var i, o, r, a, s = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (o in s)
                        if (s[o] && s[o].test(i)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) r = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || e.converters[o + " " + l[0]]) {
                          r = o;
                          break;
                        }
                        a || (a = o);
                      }
                      r = r || a;
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r];
                  })(h, S, a)),
                (x = (function(e, t, n, i) {
                  var o,
                    r,
                    a,
                    s,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (a in e.converters)
                      c[a.toLowerCase()] = e.converters[a];
                  for (r = u.shift(); r; )
                    if (
                      (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = r),
                      (r = u.shift()))
                    )
                      if ("*" === r) r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r]))
                          for (o in c)
                            if (
                              (s = o.split(" "))[1] === r &&
                              (a = c[l + " " + s[0]] || c["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = c[o])
                                : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + l + " to " + r
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, x, S, c)),
                c
                  ? (h.ifModified &&
                      ((w = S.getResponseHeader("Last-Modified")) &&
                        (k.lastModified[o] = w),
                      (w = S.getResponseHeader("etag")) && (k.etag[o] = w)),
                    204 === e || "HEAD" === h.type
                      ? (C = "nocontent")
                      : 304 === e
                        ? (C = "notmodified")
                        : ((C = x.state), (f = x.data), (c = !(p = x.error))))
                  : ((p = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || C) + ""),
                c ? v.resolveWith(m, [f, C, S]) : v.rejectWith(m, [S, C, p]),
                S.statusCode(y),
                (y = void 0),
                d &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [S, h, c ? f : p]),
                b.fireWith(m, [S, C]),
                d &&
                  (g.trigger("ajaxComplete", [S, h]),
                  --k.active || k.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function(e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function(e, t) {
            return k.get(e, void 0, t, "script");
          }
        }),
        k.each(["get", "post"], function(e, t) {
          k[t] = function(e, n, i, o) {
            return (
              b(n) && ((o = o || i), (i = n), (n = void 0)),
              k.ajax(
                k.extend(
                  { url: e, type: t, dataType: o, data: n, success: i },
                  k.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (k._evalUrl = function(e) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          });
        }),
        k.fn.extend({
          wrapAll: function(e) {
            var t;
            return (
              this[0] &&
                (b(e) && (e = e.call(this[0])),
                (t = k(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(e) {
            return b(e)
              ? this.each(function(t) {
                  k(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = k(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = b(e);
            return this.each(function(n) {
              k(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function(e) {
            return (
              this.parent(e)
                .not("body")
                .each(function() {
                  k(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (k.expr.pseudos.hidden = function(e) {
          return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (k.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Ut = { 0: 200, 1223: 204 },
        Wt = k.ajaxSettings.xhr();
      (v.cors = !!Wt && "withCredentials" in Wt),
        (v.ajax = Wt = !!Wt),
        k.ajaxTransport(function(e) {
          var t, i;
          if (v.cors || (Wt && !e.crossDomain))
            return {
              send: function(o, r) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  s.setRequestHeader(a, o[a]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                          ? "number" != typeof s.status
                            ? r(0, "error")
                            : r(s.status, s.statusText)
                          : r(
                              Ut[s.status] || s.status,
                              s.statusText,
                              "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                                ? { binary: s.response }
                                : { text: s.responseText },
                              s.getAllResponseHeaders()
                            ));
                  };
                }),
                  (s.onload = t()),
                  (i = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = i)
                    : (s.onreadystatechange = function() {
                        4 === s.readyState &&
                          n.setTimeout(function() {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function() {
                t && t();
              }
            };
        }),
        k.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(e) {
              return k.globalEval(e), e;
            }
          }
        }),
        k.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        k.ajaxTransport("script", function(e) {
          var t, n;
          if (e.crossDomain)
            return {
              send: function(i, o) {
                (t = k("<script>")
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function(e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  a.head.appendChild(t[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var Bt,
        _t = [],
        $t = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = _t.pop() || k.expando + "_" + Ct++;
          return (this[e] = !0), e;
        }
      }),
        k.ajaxPrefilter("json jsonp", function(e, t, i) {
          var o,
            r,
            a,
            s =
              !1 !== e.jsonp &&
              ($t.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  $t.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = b(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace($t, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function() {
                return a || k.error(o + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = n[o]),
              (n[o] = function() {
                a = arguments;
              }),
              i.always(function() {
                void 0 === r ? k(n).removeProp(o) : (n[o] = r),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), _t.push(o)),
                  a && b(r) && r(a[0]),
                  (a = r = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument = (((Bt = a.implementation.createHTMLDocument("")
          .body).innerHTML =
          "<form></form><form></form>"),
        2 === Bt.childNodes.length)),
        (k.parseHTML = function(e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((i = (t = a.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href =
                      a.location.href),
                    t.head.appendChild(i))
                  : (t = a)),
              (o = O.exec(e)),
              (r = !n && []),
              o
                ? [t.createElement(o[1])]
                : ((o = we([e], t, r)),
                  r && r.length && k(r).remove(),
                  k.merge([], o.childNodes)));
          var i, o, r;
        }),
        (k.fn.load = function(e, t, n) {
          var i,
            o,
            r,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((i = mt(e.slice(s))), (e = e.slice(0, s))),
            b(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
              k
                .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function(e) {
                  (r = arguments),
                    a.html(
                      i
                        ? k("<div>")
                            .append(k.parseHTML(e))
                            .find(i)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      a.each(function() {
                        n.apply(this, r || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        k.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(e, t) {
            k.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (k.expr.pseudos.animated = function(e) {
          return k.grep(k.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (k.offset = {
          setOffset: function(e, t, n) {
            var i,
              o,
              r,
              a,
              s,
              l,
              c = k.css(e, "position"),
              u = k(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (s = u.offset()),
              (r = k.css(e, "top")),
              (l = k.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (r + l).indexOf("auto") > -1
                ? ((a = (i = u.position()).top), (o = i.left))
                : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
              b(t) && (t = t.call(e, n, k.extend({}, s))),
              null != t.top && (d.top = t.top - s.top + a),
              null != t.left && (d.left = t.left - s.left + o),
              "using" in t ? t.using.call(e, d) : u.css(d);
          }
        }),
        k.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    k.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === k.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === k.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                  (o.left += k.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - k.css(i, "marginTop", !0),
                left: t.left - o.left - k.css(i, "marginLeft", !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && "static" === k.css(e, "position");

              )
                e = e.offsetParent;
              return e || Ce;
            });
          }
        }),
        k.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function(i) {
              return _(
                this,
                function(e, i, o) {
                  var r;
                  if (
                    (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === o)
                  )
                    return r ? r[t] : e[i];
                  r
                    ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                    : (e[i] = o);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        k.each(["top", "left"], function(e, t) {
          k.cssHooks[t] = Be(v.pixelPosition, function(e, n) {
            if (n)
              return (n = We(e, t)), He.test(n) ? k(e).position()[t] + "px" : n;
          });
        }),
        k.each({ Height: "height", Width: "width" }, function(e, t) {
          k.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function(n, i) {
              k.fn[i] = function(o, r) {
                var a = arguments.length && (n || "boolean" != typeof o),
                  s = n || (!0 === o || !0 === r ? "margin" : "border");
                return _(
                  this,
                  function(t, n, o) {
                    var r;
                    return y(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                        ? ((r = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            r["scroll" + e],
                            t.body["offset" + e],
                            r["offset" + e],
                            r["client" + e]
                          ))
                        : void 0 === o ? k.css(t, n, s) : k.style(t, n, o, s);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        k.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function(e, t) {
            k.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        k.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        k.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          }
        }),
        (k.proxy = function(e, t) {
          var n, i, o;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
            return (
              (i = l.call(arguments, 2)),
              ((o = function() {
                return e.apply(t || this, i.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || k.guid++),
              o
            );
        }),
        (k.holdReady = function(e) {
          e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = P),
        (k.isFunction = b),
        (k.isWindow = y),
        (k.camelCase = Y),
        (k.type = C),
        (k.now = Date.now),
        (k.isNumeric = function(e) {
          var t = k.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (i = function() {
            return k;
          }.apply(t, [])) || (e.exports = i);
      var Xt = n.jQuery,
        Qt = n.$;
      return (
        (k.noConflict = function(e) {
          return (
            n.$ === k && (n.$ = Qt), e && n.jQuery === k && (n.jQuery = Xt), k
          );
        }),
        o || (n.jQuery = n.$ = k),
        k
      );
    });
  },
  function(e, t, n) {
    var i, o, r;
    /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ (o = [
      n(0),
      n(4)
    ]),
      void 0 ===
        (r =
          "function" ==
          typeof (i = function(e) {
            var t,
              n = 0,
              i = Array.prototype.slice;
            return (
              (e.cleanData = ((t = e.cleanData),
              function(n) {
                var i, o, r;
                for (r = 0; null != (o = n[r]); r++)
                  try {
                    (i = e._data(o, "events")) &&
                      i.remove &&
                      e(o).triggerHandler("remove");
                  } catch (e) {}
                t(n);
              })),
              (e.widget = function(t, n, i) {
                var o,
                  r,
                  a,
                  s = {},
                  l = t.split(".")[0],
                  c = l + "-" + (t = t.split(".")[1]);
                return (
                  i || ((i = n), (n = e.Widget)),
                  e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))),
                  (e.expr[":"][c.toLowerCase()] = function(t) {
                    return !!e.data(t, c);
                  }),
                  (e[l] = e[l] || {}),
                  (o = e[l][t]),
                  (r = e[l][t] = function(e, t) {
                    if (!this._createWidget) return new r(e, t);
                    arguments.length && this._createWidget(e, t);
                  }),
                  e.extend(r, o, {
                    version: i.version,
                    _proto: e.extend({}, i),
                    _childConstructors: []
                  }),
                  ((a = new n()).options = e.widget.extend({}, a.options)),
                  e.each(i, function(t, i) {
                    e.isFunction(i)
                      ? (s[t] = (function() {
                          function e() {
                            return n.prototype[t].apply(this, arguments);
                          }
                          function o(e) {
                            return n.prototype[t].apply(this, e);
                          }
                          return function() {
                            var t,
                              n = this._super,
                              r = this._superApply;
                            return (
                              (this._super = e),
                              (this._superApply = o),
                              (t = i.apply(this, arguments)),
                              (this._super = n),
                              (this._superApply = r),
                              t
                            );
                          };
                        })())
                      : (s[t] = i);
                  }),
                  (r.prototype = e.widget.extend(
                    a,
                    { widgetEventPrefix: (o && a.widgetEventPrefix) || t },
                    s,
                    {
                      constructor: r,
                      namespace: l,
                      widgetName: t,
                      widgetFullName: c
                    }
                  )),
                  o
                    ? (e.each(o._childConstructors, function(t, n) {
                        var i = n.prototype;
                        e.widget(i.namespace + "." + i.widgetName, r, n._proto);
                      }),
                      delete o._childConstructors)
                    : n._childConstructors.push(r),
                  e.widget.bridge(t, r),
                  r
                );
              }),
              (e.widget.extend = function(t) {
                for (
                  var n, o, r = i.call(arguments, 1), a = 0, s = r.length;
                  a < s;
                  a++
                )
                  for (n in r[a])
                    (o = r[a][n]),
                      r[a].hasOwnProperty(n) &&
                        void 0 !== o &&
                        (e.isPlainObject(o)
                          ? (t[n] = e.isPlainObject(t[n])
                              ? e.widget.extend({}, t[n], o)
                              : e.widget.extend({}, o))
                          : (t[n] = o));
                return t;
              }),
              (e.widget.bridge = function(t, n) {
                var o = n.prototype.widgetFullName || t;
                e.fn[t] = function(r) {
                  var a = "string" == typeof r,
                    s = i.call(arguments, 1),
                    l = this;
                  return (
                    a
                      ? this.length || "instance" !== r
                        ? this.each(function() {
                            var n,
                              i = e.data(this, o);
                            return "instance" === r
                              ? ((l = i), !1)
                              : i
                                ? e.isFunction(i[r]) && "_" !== r.charAt(0)
                                  ? (n = i[r].apply(i, s)) !== i && void 0 !== n
                                    ? ((l =
                                        n && n.jquery
                                          ? l.pushStack(n.get())
                                          : n),
                                      !1)
                                    : void 0
                                  : e.error(
                                      "no such method '" +
                                        r +
                                        "' for " +
                                        t +
                                        " widget instance"
                                    )
                                : e.error(
                                    "cannot call methods on " +
                                      t +
                                      " prior to initialization; attempted to call method '" +
                                      r +
                                      "'"
                                  );
                          })
                        : (l = void 0)
                      : (s.length &&
                          (r = e.widget.extend.apply(null, [r].concat(s))),
                        this.each(function() {
                          var t = e.data(this, o);
                          t
                            ? (t.option(r || {}), t._init && t._init())
                            : e.data(this, o, new n(r, this));
                        })),
                    l
                  );
                };
              }),
              (e.Widget = function() {}),
              (e.Widget._childConstructors = []),
              (e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { classes: {}, disabled: !1, create: null },
                _createWidget: function(t, i) {
                  (i = e(i || this.defaultElement || this)[0]),
                    (this.element = e(i)),
                    (this.uuid = n++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = e()),
                    (this.hoverable = e()),
                    (this.focusable = e()),
                    (this.classesElementLookup = {}),
                    i !== this &&
                      (e.data(i, this.widgetFullName, this),
                      this._on(!0, this.element, {
                        remove: function(e) {
                          e.target === i && this.destroy();
                        }
                      }),
                      (this.document = e(
                        i.style ? i.ownerDocument : i.document || i
                      )),
                      (this.window = e(
                        this.document[0].defaultView ||
                          this.document[0].parentWindow
                      ))),
                    (this.options = e.widget.extend(
                      {},
                      this.options,
                      this._getCreateOptions(),
                      t
                    )),
                    this._create(),
                    this.options.disabled &&
                      this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
                },
                _getCreateOptions: function() {
                  return {};
                },
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                  var t = this;
                  this._destroy(),
                    e.each(this.classesElementLookup, function(e, n) {
                      t._removeClass(n, e);
                    }),
                    this.element
                      .off(this.eventNamespace)
                      .removeData(this.widgetFullName),
                    this.widget()
                      .off(this.eventNamespace)
                      .removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace);
                },
                _destroy: e.noop,
                widget: function() {
                  return this.element;
                },
                option: function(t, n) {
                  var i,
                    o,
                    r,
                    a = t;
                  if (0 === arguments.length)
                    return e.widget.extend({}, this.options);
                  if ("string" == typeof t)
                    if (
                      ((a = {}), (t = (i = t.split(".")).shift()), i.length)
                    ) {
                      for (
                        o = a[t] = e.widget.extend({}, this.options[t]), r = 0;
                        r < i.length - 1;
                        r++
                      )
                        (o[i[r]] = o[i[r]] || {}), (o = o[i[r]]);
                      if (((t = i.pop()), 1 === arguments.length))
                        return void 0 === o[t] ? null : o[t];
                      o[t] = n;
                    } else {
                      if (1 === arguments.length)
                        return void 0 === this.options[t]
                          ? null
                          : this.options[t];
                      a[t] = n;
                    }
                  return this._setOptions(a), this;
                },
                _setOptions: function(e) {
                  var t;
                  for (t in e) this._setOption(t, e[t]);
                  return this;
                },
                _setOption: function(e, t) {
                  return (
                    "classes" === e && this._setOptionClasses(t),
                    (this.options[e] = t),
                    "disabled" === e && this._setOptionDisabled(t),
                    this
                  );
                },
                _setOptionClasses: function(t) {
                  var n, i, o;
                  for (n in t)
                    (o = this.classesElementLookup[n]),
                      t[n] !== this.options.classes[n] &&
                        o &&
                        o.length &&
                        ((i = e(o.get())),
                        this._removeClass(o, n),
                        i.addClass(
                          this._classes({
                            element: i,
                            keys: n,
                            classes: t,
                            add: !0
                          })
                        ));
                },
                _setOptionDisabled: function(e) {
                  this._toggleClass(
                    this.widget(),
                    this.widgetFullName + "-disabled",
                    null,
                    !!e
                  ),
                    e &&
                      (this._removeClass(
                        this.hoverable,
                        null,
                        "ui-state-hover"
                      ),
                      this._removeClass(
                        this.focusable,
                        null,
                        "ui-state-focus"
                      ));
                },
                enable: function() {
                  return this._setOptions({ disabled: !1 });
                },
                disable: function() {
                  return this._setOptions({ disabled: !0 });
                },
                _classes: function(t) {
                  var n = [],
                    i = this;
                  function o(o, r) {
                    var a, s;
                    for (s = 0; s < o.length; s++)
                      (a = i.classesElementLookup[o[s]] || e()),
                        (a = t.add
                          ? e(e.unique(a.get().concat(t.element.get())))
                          : e(a.not(t.element).get())),
                        (i.classesElementLookup[o[s]] = a),
                        n.push(o[s]),
                        r && t.classes[o[s]] && n.push(t.classes[o[s]]);
                  }
                  return (
                    (t = e.extend(
                      {
                        element: this.element,
                        classes: this.options.classes || {}
                      },
                      t
                    )),
                    this._on(t.element, { remove: "_untrackClassesElement" }),
                    t.keys && o(t.keys.match(/\S+/g) || [], !0),
                    t.extra && o(t.extra.match(/\S+/g) || []),
                    n.join(" ")
                  );
                },
                _untrackClassesElement: function(t) {
                  var n = this;
                  e.each(n.classesElementLookup, function(i, o) {
                    -1 !== e.inArray(t.target, o) &&
                      (n.classesElementLookup[i] = e(o.not(t.target).get()));
                  });
                },
                _removeClass: function(e, t, n) {
                  return this._toggleClass(e, t, n, !1);
                },
                _addClass: function(e, t, n) {
                  return this._toggleClass(e, t, n, !0);
                },
                _toggleClass: function(e, t, n, i) {
                  i = "boolean" == typeof i ? i : n;
                  var o = "string" == typeof e || null === e,
                    r = {
                      extra: o ? t : n,
                      keys: o ? e : t,
                      element: o ? this.element : e,
                      add: i
                    };
                  return r.element.toggleClass(this._classes(r), i), this;
                },
                _on: function(t, n, i) {
                  var o,
                    r = this;
                  "boolean" != typeof t && ((i = n), (n = t), (t = !1)),
                    i
                      ? ((n = o = e(n)), (this.bindings = this.bindings.add(n)))
                      : ((i = n), (n = this.element), (o = this.widget())),
                    e.each(i, function(i, a) {
                      function s() {
                        if (
                          t ||
                          (!0 !== r.options.disabled &&
                            !e(this).hasClass("ui-state-disabled"))
                        )
                          return ("string" == typeof a ? r[a] : a).apply(
                            r,
                            arguments
                          );
                      }
                      "string" != typeof a &&
                        (s.guid = a.guid = a.guid || s.guid || e.guid++);
                      var l = i.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + r.eventNamespace,
                        u = l[2];
                      u ? o.on(c, u, s) : n.on(c, s);
                    });
                },
                _off: function(t, n) {
                  (n =
                    (n || "").split(" ").join(this.eventNamespace + " ") +
                    this.eventNamespace),
                    t.off(n).off(n),
                    (this.bindings = e(this.bindings.not(t).get())),
                    (this.focusable = e(this.focusable.not(t).get())),
                    (this.hoverable = e(this.hoverable.not(t).get()));
                },
                _delay: function(e, t) {
                  var n = this;
                  return setTimeout(function() {
                    return ("string" == typeof e ? n[e] : e).apply(
                      n,
                      arguments
                    );
                  }, t || 0);
                },
                _hoverable: function(t) {
                  (this.hoverable = this.hoverable.add(t)),
                    this._on(t, {
                      mouseenter: function(t) {
                        this._addClass(
                          e(t.currentTarget),
                          null,
                          "ui-state-hover"
                        );
                      },
                      mouseleave: function(t) {
                        this._removeClass(
                          e(t.currentTarget),
                          null,
                          "ui-state-hover"
                        );
                      }
                    });
                },
                _focusable: function(t) {
                  (this.focusable = this.focusable.add(t)),
                    this._on(t, {
                      focusin: function(t) {
                        this._addClass(
                          e(t.currentTarget),
                          null,
                          "ui-state-focus"
                        );
                      },
                      focusout: function(t) {
                        this._removeClass(
                          e(t.currentTarget),
                          null,
                          "ui-state-focus"
                        );
                      }
                    });
                },
                _trigger: function(t, n, i) {
                  var o,
                    r,
                    a = this.options[t];
                  if (
                    ((i = i || {}),
                    ((n = e.Event(n)).type = (t === this.widgetEventPrefix
                      ? t
                      : this.widgetEventPrefix + t
                    ).toLowerCase()),
                    (n.target = this.element[0]),
                    (r = n.originalEvent))
                  )
                    for (o in r) o in n || (n[o] = r[o]);
                  return (
                    this.element.trigger(n, i),
                    !(
                      (e.isFunction(a) &&
                        !1 === a.apply(this.element[0], [n].concat(i))) ||
                      n.isDefaultPrevented()
                    )
                  );
                }
              }),
              e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, n) {
                e.Widget.prototype["_" + t] = function(i, o, r) {
                  var a;
                  "string" == typeof o && (o = { effect: o });
                  var s = o
                    ? !0 === o || "number" == typeof o ? n : o.effect || n
                    : t;
                  "number" == typeof (o = o || {}) && (o = { duration: o }),
                    (a = !e.isEmptyObject(o)),
                    (o.complete = r),
                    o.delay && i.delay(o.delay),
                    a && e.effects && e.effects.effect[s]
                      ? i[t](o)
                      : s !== t && i[s]
                        ? i[s](o.duration, o.easing, r)
                        : i.queue(function(n) {
                            e(this)[t](), r && r.call(i[0]), n();
                          });
                };
              }),
              e.widget
            );
          })
            ? i.apply(t, o)
            : i) || (e.exports = r);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    n(1), n(0);
    n(1);
    n(0);
    n(1);
    var i = n(0);
    (window.jQuery = i),
      n(3),
      i(document).ready(function() {
        console.log("eskeddit");
        var e = new class {
          constructor() {
            (this.colorCounter = 0),
              (this.colorArray = [
                "#e91e63",
                "#9c27b0",
                "#3f51b5",
                "#00bcd4",
                "#4caf50",
                "#ff9800"
              ]);
          }
          main() {
            function e() {
              i(window).width() > 767
                ? i("#menu").addClass("fixed")
                : i("#menu").removeClass("fixed");
            }
            i(window).resize(function() {
              e();
            }),
              e();
            var t = i(
                '\n\t\t\t<div id= "nothingSelected">\n\t\t\t\n\t  </div>\n\t    <div style="text-align:center; top: 24%; ">\n\t       <h1 class="header inverted thin " style="text-align:center; font-size: 60px; margin:0px;"> Oops you have nothing selected. </h1>\n\n\t    </div></div'
              ),
              n = this;
            (this.calendarHandly = new (void 0)(i("#results"))),
              (this.searchy = new (void 0)(i("#search"))),
              (this.filters = new (void 0)(i("#filters")));
            var o = new (void 0)(i("#filtersExample"));
            o.openAccordion(),
              this.searchy.attachColorGetter(function() {
                return n.getColor();
              }),
              this.searchy.newSearchBox(this.searchy.getUnderTheFold(), !1),
              this.searchy.newSearchBox(this.searchy.getUnderTheFold(), !0),
              this.searchy.attachDataSend(function(e) {
                n.calendarHandly.handleInputUpdate(e);
              }),
              this.filters.attachOnFilterClick(function() {
                n.calendarHandly.handleInputUpdate({ updateFilters: !0 });
              }),
              (this.settings = new (void 0)(i("#settings"), function() {
                n.calendarHandly.attachGetSettings(function() {
                  return n.settings.getValues();
                }),
                  n.settings.attachOnSettingsClick(function(e) {
                    n.calendarHandly.handleInputUpdate({ updateSettings: !0 });
                  });
              })),
              this.calendarHandly.attachGetFilters(function() {
                return n.filters.getValues();
              }),
              this.calendarHandly.attachRunOnEmpty(function() {
                i("#results").append(t);
              }),
              i("#tryItOutBtn").on("click", function() {
                n.searchy.addArtificialText(["cop3502", "cop4600", "iuf1000"]);
              });
          }
          getColor() {
            var e = this.colorArray[this.colorCounter];
            return (
              (this.colorCounter =
                (this.colorCounter + 1) % this.colorArray.length),
              e
            );
          }
        }();
        i("body").css("background-color", "#2196f3"), e.main();
      });
  },
  function(e, t) {
    !(function(e, t, n, i) {
      (e.site = e.fn.site = function(i) {
        var o,
          r,
          a = new Date().getTime(),
          s = [],
          l = arguments[0],
          c = "string" == typeof l,
          u = [].slice.call(arguments, 1),
          d = e.isPlainObject(i)
            ? e.extend(!0, {}, e.site.settings, i)
            : e.extend({}, e.site.settings),
          f = d.namespace,
          p = d.error,
          h = "module-" + f,
          m = e(n),
          g = this,
          v = m.data(h);
        return (
          (o = {
            initialize: function() {
              o.instantiate();
            },
            instantiate: function() {
              o.verbose("Storing instance of site", o), (v = o), m.data(h, o);
            },
            normalize: function() {
              o.fix.console(), o.fix.requestAnimationFrame();
            },
            fix: {
              console: function() {
                o.debug("Normalizing window.console"),
                  (void 0 !== console && void 0 !== console.log) ||
                    (o.verbose("Console not available, normalizing events"),
                    o.disable.console()),
                  (void 0 !== console.group &&
                    void 0 !== console.groupEnd &&
                    void 0 !== console.groupCollapsed) ||
                    (o.verbose(
                      "Console group not available, normalizing events"
                    ),
                    (t.console.group = function() {}),
                    (t.console.groupEnd = function() {}),
                    (t.console.groupCollapsed = function() {})),
                  void 0 === console.markTimeline &&
                    (o.verbose(
                      "Mark timeline not available, normalizing events"
                    ),
                    (t.console.markTimeline = function() {}));
              },
              consoleClear: function() {
                o.debug("Disabling programmatic console clearing"),
                  (t.console.clear = function() {});
              },
              requestAnimationFrame: function() {
                o.debug("Normalizing requestAnimationFrame"),
                  void 0 === t.requestAnimationFrame &&
                    (o.debug(
                      "RequestAnimationFrame not available, normalizing event"
                    ),
                    (t.requestAnimationFrame =
                      t.requestAnimationFrame ||
                      t.mozRequestAnimationFrame ||
                      t.webkitRequestAnimationFrame ||
                      t.msRequestAnimationFrame ||
                      function(e) {
                        setTimeout(e, 0);
                      }));
              }
            },
            moduleExists: function(t) {
              return void 0 !== e.fn[t] && void 0 !== e.fn[t].settings;
            },
            enabled: {
              modules: function(t) {
                var n = [];
                return (
                  (t = t || d.modules),
                  e.each(t, function(e, t) {
                    o.moduleExists(t) && n.push(t);
                  }),
                  n
                );
              }
            },
            disabled: {
              modules: function(t) {
                var n = [];
                return (
                  (t = t || d.modules),
                  e.each(t, function(e, t) {
                    o.moduleExists(t) || n.push(t);
                  }),
                  n
                );
              }
            },
            change: {
              setting: function(t, n, i, r) {
                (i =
                  "string" == typeof i
                    ? "all" === i ? d.modules : [i]
                    : i || d.modules),
                  (r = void 0 === r || r),
                  e.each(i, function(i, a) {
                    var s,
                      l =
                        !o.moduleExists(a) ||
                        (e.fn[a].settings.namespace || !1);
                    o.moduleExists(a) &&
                      (o.verbose("Changing default setting", t, n, a),
                      (e.fn[a].settings[t] = n),
                      r &&
                        l &&
                        (s = e(":data(module-" + l + ")")).length > 0 &&
                        (o.verbose("Modifying existing settings", s),
                        s[a]("setting", t, n)));
                  });
              },
              settings: function(t, n, i) {
                (n = "string" == typeof n ? [n] : n || d.modules),
                  (i = void 0 === i || i),
                  e.each(n, function(n, r) {
                    var a;
                    o.moduleExists(r) &&
                      (o.verbose("Changing default setting", t, r),
                      e.extend(!0, e.fn[r].settings, t),
                      i &&
                        f &&
                        (a = e(":data(module-" + f + ")")).length > 0 &&
                        (o.verbose("Modifying existing settings", a),
                        a[r]("setting", t)));
                  });
              }
            },
            enable: {
              console: function() {
                o.console(!0);
              },
              debug: function(e, t) {
                (e = e || d.modules),
                  o.debug("Enabling debug for modules", e),
                  o.change.setting("debug", !0, e, t);
              },
              verbose: function(e, t) {
                (e = e || d.modules),
                  o.debug("Enabling verbose debug for modules", e),
                  o.change.setting("verbose", !0, e, t);
              }
            },
            disable: {
              console: function() {
                o.console(!1);
              },
              debug: function(e, t) {
                (e = e || d.modules),
                  o.debug("Disabling debug for modules", e),
                  o.change.setting("debug", !1, e, t);
              },
              verbose: function(e, t) {
                (e = e || d.modules),
                  o.debug("Disabling verbose debug for modules", e),
                  o.change.setting("verbose", !1, e, t);
              }
            },
            console: function(e) {
              if (e) {
                if (void 0 === v.cache.console) return void o.error(p.console);
                o.debug("Restoring console function"),
                  (t.console = v.cache.console);
              } else
                o.debug("Disabling console function"),
                  (v.cache.console = t.console),
                  (t.console = {
                    clear: function() {},
                    error: function() {},
                    group: function() {},
                    groupCollapsed: function() {},
                    groupEnd: function() {},
                    info: function() {},
                    log: function() {},
                    markTimeline: function() {},
                    warn: function() {}
                  });
            },
            destroy: function() {
              o.verbose("Destroying previous site for", m), m.removeData(h);
            },
            cache: {},
            setting: function(t, n) {
              if (e.isPlainObject(t)) e.extend(!0, d, t);
              else {
                if (void 0 === n) return d[t];
                d[t] = n;
              }
            },
            internal: function(t, n) {
              if (e.isPlainObject(t)) e.extend(!0, o, t);
              else {
                if (void 0 === n) return o[t];
                o[t] = n;
              }
            },
            debug: function() {
              d.debug &&
                (d.performance
                  ? o.performance.log(arguments)
                  : ((o.debug = Function.prototype.bind.call(
                      console.info,
                      console,
                      d.name + ":"
                    )),
                    o.debug.apply(console, arguments)));
            },
            verbose: function() {
              d.verbose &&
                d.debug &&
                (d.performance
                  ? o.performance.log(arguments)
                  : ((o.verbose = Function.prototype.bind.call(
                      console.info,
                      console,
                      d.name + ":"
                    )),
                    o.verbose.apply(console, arguments)));
            },
            error: function() {
              (o.error = Function.prototype.bind.call(
                console.error,
                console,
                d.name + ":"
              )),
                o.error.apply(console, arguments);
            },
            performance: {
              log: function(e) {
                var t, n;
                d.performance &&
                  ((n = (t = new Date().getTime()) - (a || t)),
                  (a = t),
                  s.push({
                    Element: g,
                    Name: e[0],
                    Arguments: [].slice.call(e, 1) || "",
                    "Execution Time": n
                  })),
                  clearTimeout(o.performance.timer),
                  (o.performance.timer = setTimeout(
                    o.performance.display,
                    500
                  ));
              },
              display: function() {
                var t = d.name + ":",
                  n = 0;
                (a = !1),
                  clearTimeout(o.performance.timer),
                  e.each(s, function(e, t) {
                    n += t["Execution Time"];
                  }),
                  (t += " " + n + "ms"),
                  (void 0 !== console.group || void 0 !== console.table) &&
                    s.length > 0 &&
                    (console.groupCollapsed(t),
                    console.table
                      ? console.table(s)
                      : e.each(s, function(e, t) {
                          console.log(
                            t.Name + ": " + t["Execution Time"] + "ms"
                          );
                        }),
                    console.groupEnd()),
                  (s = []);
              }
            },
            invoke: function(t, n, i) {
              var a,
                s,
                l,
                c = v;
              return (
                (n = n || u),
                (i = g || i),
                "string" == typeof t &&
                  void 0 !== c &&
                  ((t = t.split(/[\. ]/)),
                  (a = t.length - 1),
                  e.each(t, function(n, i) {
                    var r =
                      n != a
                        ? i +
                          t[n + 1].charAt(0).toUpperCase() +
                          t[n + 1].slice(1)
                        : t;
                    if (e.isPlainObject(c[r]) && n != a) c = c[r];
                    else {
                      if (void 0 !== c[r]) return (s = c[r]), !1;
                      if (!e.isPlainObject(c[i]) || n == a)
                        return void 0 !== c[i]
                          ? ((s = c[i]), !1)
                          : (o.error(p.method, t), !1);
                      c = c[i];
                    }
                  })),
                e.isFunction(s) ? (l = s.apply(i, n)) : void 0 !== s && (l = s),
                e.isArray(r)
                  ? r.push(l)
                  : void 0 !== r ? (r = [r, l]) : void 0 !== l && (r = l),
                s
              );
            }
          }),
          c
            ? (void 0 === v && o.initialize(), o.invoke(l))
            : (void 0 !== v && o.destroy(), o.initialize()),
          void 0 !== r ? r : this
        );
      }),
        (e.site.settings = {
          name: "Site",
          namespace: "site",
          error: {
            console:
              "Console cannot be restored, most likely it was overwritten outside of module",
            method: "The method you called is not defined."
          },
          debug: !1,
          verbose: !1,
          performance: !0,
          modules: [
            "accordion",
            "api",
            "checkbox",
            "dimmer",
            "dropdown",
            "embed",
            "form",
            "modal",
            "nag",
            "popup",
            "rating",
            "shape",
            "sidebar",
            "state",
            "sticky",
            "tab",
            "transition",
            "visit",
            "visibility"
          ],
          siteNamespace: "site",
          namespaceStub: {
            cache: {},
            config: {},
            sections: {},
            section: {},
            utilities: {}
          }
        }),
        e.extend(e.expr[":"], {
          data: e.expr.createPseudo
            ? e.expr.createPseudo(function(t) {
                return function(n) {
                  return !!e.data(n, t);
                };
              })
            : function(t, n, i) {
                return !!e.data(t, i[3]);
              }
        });
    })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.form = function(t) {
            var i,
              o = e(this),
              r = o.selector || "",
              a = new Date().getTime(),
              s = [],
              l = arguments[0],
              c = arguments[1],
              u = "string" == typeof l,
              d = [].slice.call(arguments, 1);
            return (
              o.each(function() {
                var f,
                  p,
                  h,
                  m,
                  g,
                  v,
                  b,
                  y,
                  x,
                  w,
                  C,
                  k,
                  S,
                  T,
                  A,
                  E,
                  R = e(this),
                  D = this,
                  P = [],
                  O = !1;
                (E = {
                  initialize: function() {
                    E.get.settings(),
                      u
                        ? (void 0 === A && E.instantiate(), E.invoke(l))
                        : (void 0 !== A && A.invoke("destroy"),
                          E.verbose("Initializing form validation", R, g),
                          E.bindEvents(),
                          E.set.defaults(),
                          E.instantiate());
                  },
                  instantiate: function() {
                    E.verbose("Storing instance of module", E),
                      (A = E),
                      R.data(S, E);
                  },
                  destroy: function() {
                    E.verbose("Destroying previous module", A),
                      E.removeEvents(),
                      R.removeData(S);
                  },
                  refresh: function() {
                    E.verbose("Refreshing selector cache"),
                      (f = R.find(y.field)),
                      (p = R.find(y.group)),
                      (h = R.find(y.message)),
                      R.find(y.prompt),
                      (m = R.find(y.submit)),
                      R.find(y.clear),
                      R.find(y.reset);
                  },
                  submit: function() {
                    E.verbose("Submitting form", R), R.submit();
                  },
                  attachEvents: function(t, n) {
                    (n = n || "submit"),
                      e(t).on("click" + T, function(e) {
                        E[n](), e.preventDefault();
                      });
                  },
                  bindEvents: function() {
                    E.verbose("Attaching form events"),
                      R.on("submit" + T, E.validate.form)
                        .on("blur" + T, y.field, E.event.field.blur)
                        .on("click" + T, y.submit, E.submit)
                        .on("click" + T, y.reset, E.reset)
                        .on("click" + T, y.clear, E.clear),
                      g.keyboardShortcuts &&
                        R.on("keydown" + T, y.field, E.event.field.keydown),
                      f.each(function() {
                        var t = e(this),
                          n = t.prop("type"),
                          i = E.get.changeEvent(n, t);
                        e(this).on(i + T, E.event.field.change);
                      });
                  },
                  clear: function() {
                    f.each(function() {
                      var t = e(this),
                        n = t.parent(),
                        i = t.closest(p),
                        o = i.find(y.prompt),
                        r = t.data(b.defaultValue) || "",
                        a = n.is(y.uiCheckbox),
                        s = n.is(y.uiDropdown);
                      i.hasClass(x.error) &&
                        (E.verbose("Resetting error on field", i),
                        i.removeClass(x.error),
                        o.remove()),
                        s
                          ? (E.verbose("Resetting dropdown value", n, r),
                            n.dropdown("clear"))
                          : a
                            ? t.prop("checked", !1)
                            : (E.verbose("Resetting field value", t, r),
                              t.val(""));
                    });
                  },
                  reset: function() {
                    f.each(function() {
                      var t = e(this),
                        n = t.parent(),
                        i = t.closest(p),
                        o = i.find(y.prompt),
                        r = t.data(b.defaultValue),
                        a = n.is(y.uiCheckbox),
                        s = n.is(y.uiDropdown),
                        l = i.hasClass(x.error);
                      void 0 !== r &&
                        (l &&
                          (E.verbose("Resetting error on field", i),
                          i.removeClass(x.error),
                          o.remove()),
                        s
                          ? (E.verbose("Resetting dropdown value", n, r),
                            n.dropdown("restore defaults"))
                          : a
                            ? (E.verbose("Resetting checkbox value", n, r),
                              t.prop("checked", r))
                            : (E.verbose("Resetting field value", t, r),
                              t.val(r)));
                    });
                  },
                  determine: {
                    isValid: function() {
                      var t = !0;
                      return (
                        e.each(v, function(e, n) {
                          E.validate.field(n, e, !0) || (t = !1);
                        }),
                        t
                      );
                    }
                  },
                  is: {
                    bracketedRule: function(e) {
                      return e.type && e.type.match(g.regExp.bracket);
                    },
                    shorthandFields: function(e) {
                      var t = e[Object.keys(e)[0]];
                      return E.is.shorthandRules(t);
                    },
                    shorthandRules: function(t) {
                      return "string" == typeof t || e.isArray(t);
                    },
                    empty: function(e) {
                      return (
                        !e ||
                        0 === e.length ||
                        (e.is('input[type="checkbox"]')
                          ? !e.is(":checked")
                          : E.is.blank(e))
                      );
                    },
                    blank: function(t) {
                      return "" === e.trim(t.val());
                    },
                    valid: function(t) {
                      var n = !0;
                      return t
                        ? (E.verbose("Checking if field is valid", t),
                          E.validate.field(v[t], t, !1))
                        : (E.verbose("Checking if form is valid"),
                          e.each(v, function(e, t) {
                            E.is.valid(e) || (n = !1);
                          }),
                          n);
                    }
                  },
                  removeEvents: function() {
                    R.off(T), f.off(T), m.off(T), f.off(T);
                  },
                  event: {
                    field: {
                      keydown: function(t) {
                        var n = e(this),
                          i = t.which,
                          o = n.is(y.input),
                          r = n.is(y.checkbox),
                          a = n.closest(y.uiDropdown).length > 0,
                          s = 13;
                        i == 27 &&
                          (E.verbose("Escape key pressed blurring field"),
                          n.blur()),
                          t.ctrlKey ||
                            i != s ||
                            !o ||
                            a ||
                            r ||
                            (O ||
                              (n.one("keyup" + T, E.event.field.keyup),
                              E.submit(),
                              E.debug(
                                "Enter pressed on input submitting form"
                              )),
                            (O = !0));
                      },
                      keyup: function() {
                        O = !1;
                      },
                      blur: function(t) {
                        var n = e(this),
                          i = n.closest(p),
                          o = E.get.validation(n);
                        i.hasClass(x.error)
                          ? (E.debug("Revalidating field", n, o),
                            o && E.validate.field(o))
                          : "blur" == g.on && o && E.validate.field(o);
                      },
                      change: function(t) {
                        var n = e(this),
                          i = n.closest(p),
                          o = E.get.validation(n);
                        o &&
                          ("change" == g.on ||
                            (i.hasClass(x.error) && g.revalidate)) &&
                          (clearTimeout(E.timer),
                          (E.timer = setTimeout(function() {
                            E.debug(
                              "Revalidating field",
                              n,
                              E.get.validation(n)
                            ),
                              E.validate.field(o);
                          }, g.delay)));
                      }
                    }
                  },
                  get: {
                    ancillaryValue: function(e) {
                      return (
                        !(!e.type || (!e.value && !E.is.bracketedRule(e))) &&
                        (void 0 !== e.value
                          ? e.value
                          : e.type.match(g.regExp.bracket)[1] + "")
                      );
                    },
                    ruleName: function(e) {
                      return E.is.bracketedRule(e)
                        ? e.type.replace(e.type.match(g.regExp.bracket)[0], "")
                        : e.type;
                    },
                    changeEvent: function(e, t) {
                      return "checkbox" == e ||
                        "radio" == e ||
                        "hidden" == e ||
                        t.is("select")
                        ? "change"
                        : E.get.inputEvent();
                    },
                    inputEvent: function() {
                      return void 0 !== n.createElement("input").oninput
                        ? "input"
                        : void 0 !== n.createElement("input").onpropertychange
                          ? "propertychange"
                          : "keyup";
                    },
                    fieldsFromShorthand: function(t) {
                      var n = {};
                      return (
                        e.each(t, function(t, i) {
                          "string" == typeof i && (i = [i]),
                            (n[t] = { rules: [] }),
                            e.each(i, function(e, i) {
                              n[t].rules.push({ type: i });
                            });
                        }),
                        n
                      );
                    },
                    prompt: function(t, n) {
                      var i,
                        o,
                        r = E.get.ruleName(t),
                        a = E.get.ancillaryValue(t),
                        s = E.get.field(n.identifier),
                        l = s.val(),
                        c = e.isFunction(t.prompt)
                          ? t.prompt(l)
                          : t.prompt || g.prompt[r] || g.text.unspecifiedRule,
                        u = -1 !== c.search("{value}"),
                        d = -1 !== c.search("{name}");
                      return (
                        u && (c = c.replace("{value}", s.val())),
                        d &&
                          ((o =
                            1 ==
                            (i = s
                              .closest(y.group)
                              .find("label")
                              .eq(0)).length
                              ? i.text()
                              : s.prop("placeholder") ||
                                g.text.unspecifiedField),
                          (c = c.replace("{name}", o))),
                        (c = (c = c.replace(
                          "{identifier}",
                          n.identifier
                        )).replace("{ruleValue}", a)),
                        t.prompt ||
                          E.verbose(
                            "Using default validation prompt for type",
                            c,
                            r
                          ),
                        c
                      );
                    },
                    settings: function() {
                      if (e.isPlainObject(t)) {
                        var n = Object.keys(t);
                        n.length > 0 &&
                        (void 0 !== t[n[0]].identifier &&
                          void 0 !== t[n[0]].rules)
                          ? ((g = e.extend(!0, {}, e.fn.form.settings, c)),
                            (v = e.extend({}, e.fn.form.settings.defaults, t)),
                            E.error(g.error.oldSyntax, D),
                            E.verbose(
                              "Extending settings from legacy parameters",
                              v,
                              g
                            ))
                          : (t.fields &&
                              E.is.shorthandFields(t.fields) &&
                              (t.fields = E.get.fieldsFromShorthand(t.fields)),
                            (g = e.extend(!0, {}, e.fn.form.settings, t)),
                            (v = e.extend(
                              {},
                              e.fn.form.settings.defaults,
                              g.fields
                            )),
                            E.verbose("Extending settings", v, g));
                      } else
                        (g = e.fn.form.settings),
                          (v = e.fn.form.settings.defaults),
                          E.verbose("Using default form validation", v, g);
                      (k = g.namespace),
                        (b = g.metadata),
                        (y = g.selector),
                        (x = g.className),
                        (w = g.regExp),
                        (C = g.error),
                        (S = "module-" + k),
                        (T = "." + k),
                        (A = R.data(S)),
                        E.refresh();
                    },
                    field: function(t) {
                      return (
                        E.verbose("Finding field with identifier", t),
                        (t = E.escape.string(t)),
                        f.filter("#" + t).length > 0
                          ? f.filter("#" + t)
                          : f.filter('[name="' + t + '"]').length > 0
                            ? f.filter('[name="' + t + '"]')
                            : f.filter('[name="' + t + '[]"]').length > 0
                              ? f.filter('[name="' + t + '[]"]')
                              : f.filter(
                                  "[data-" + b.validate + '="' + t + '"]'
                                ).length > 0
                                ? f.filter(
                                    "[data-" + b.validate + '="' + t + '"]'
                                  )
                                : e("<input/>")
                      );
                    },
                    fields: function(t) {
                      var n = e();
                      return (
                        e.each(t, function(e, t) {
                          n = n.add(E.get.field(t));
                        }),
                        n
                      );
                    },
                    validation: function(t) {
                      var n, i;
                      return (
                        !!v &&
                        (e.each(v, function(e, o) {
                          (i = o.identifier || e),
                            E.get.field(i)[0] == t[0] &&
                              ((o.identifier = i), (n = o));
                        }),
                        n || !1)
                      );
                    },
                    value: function(e) {
                      var t = [];
                      return t.push(e), E.get.values.call(D, t)[e];
                    },
                    values: function(t) {
                      var n = {};
                      return (
                        (e.isArray(t) ? E.get.fields(t) : f).each(function(
                          t,
                          i
                        ) {
                          var o = e(i),
                            r = (o.prop("type"), o.prop("name")),
                            a = o.val(),
                            s = o.is(y.checkbox),
                            l = o.is(y.radio),
                            c = -1 !== r.indexOf("[]"),
                            u = !!s && o.is(":checked");
                          r &&
                            (c
                              ? ((r = r.replace("[]", "")),
                                n[r] || (n[r] = []),
                                s
                                  ? u ? n[r].push(a || !0) : n[r].push(!1)
                                  : n[r].push(a))
                              : l
                                ? (void 0 !== n[r] && 0 != n[r]) ||
                                  (n[r] = !!u && (a || !0))
                                : (n[r] = s ? !!u && (a || !0) : a));
                        }),
                        n
                      );
                    }
                  },
                  has: {
                    field: function(e) {
                      return (
                        E.verbose(
                          "Checking for existence of a field with identifier",
                          e
                        ),
                        "string" != typeof (e = E.escape.string(e)) &&
                          E.error(C.identifier, e),
                        f.filter("#" + e).length > 0 ||
                          (f.filter('[name="' + e + '"]').length > 0 ||
                            f.filter("[data-" + b.validate + '="' + e + '"]')
                              .length > 0)
                      );
                    }
                  },
                  escape: {
                    string: function(e) {
                      return (e = String(e)).replace(w.escape, "\\$&");
                    }
                  },
                  add: {
                    rule: function(e, t) {
                      E.add.field(e, t);
                    },
                    field: function(t, n) {
                      var i = {};
                      E.is.shorthandRules(n)
                        ? ((n = e.isArray(n) ? n : [n]),
                          (i[t] = { rules: [] }),
                          e.each(n, function(e, n) {
                            i[t].rules.push({ type: n });
                          }))
                        : (i[t] = n),
                        (v = e.extend({}, v, i)),
                        E.debug("Adding rules", i, v);
                    },
                    fields: function(t) {
                      var n;
                      (n =
                        t && E.is.shorthandFields(t)
                          ? E.get.fieldsFromShorthand(t)
                          : t),
                        (v = e.extend({}, v, n));
                    },
                    prompt: function(t, n) {
                      var i = E.get.field(t).closest(p),
                        o = i.children(y.prompt),
                        r = 0 !== o.length;
                      (n = "string" == typeof n ? [n] : n),
                        E.verbose("Adding field error state", t),
                        i.addClass(x.error),
                        g.inline &&
                          (r || (o = g.templates.prompt(n)).appendTo(i),
                          o.html(n[0]),
                          r
                            ? E.verbose(
                                "Inline errors are disabled, no inline error added",
                                t
                              )
                            : g.transition &&
                              void 0 !== e.fn.transition &&
                              R.transition("is supported")
                              ? (E.verbose(
                                  "Displaying error with css transition",
                                  g.transition
                                ),
                                o.transition(g.transition + " in", g.duration))
                              : (E.verbose(
                                  "Displaying error with fallback javascript animation"
                                ),
                                o.fadeIn(g.duration)));
                    },
                    errors: function(e) {
                      E.debug("Adding form error messages", e),
                        E.set.error(),
                        h.html(g.templates.error(e));
                    }
                  },
                  remove: {
                    rule: function(t, n) {
                      var i = e.isArray(n) ? n : [n];
                      if (void 0 == n)
                        return (
                          E.debug("Removed all rules"), void (v[t].rules = [])
                        );
                      void 0 != v[t] &&
                        e.isArray(v[t].rules) &&
                        e.each(v[t].rules, function(e, n) {
                          -1 !== i.indexOf(n.type) &&
                            (E.debug("Removed rule", n.type),
                            v[t].rules.splice(e, 1));
                        });
                    },
                    field: function(t) {
                      var n = e.isArray(t) ? t : [t];
                      e.each(n, function(e, t) {
                        E.remove.rule(t);
                      });
                    },
                    rules: function(t, n) {
                      e.isArray(t)
                        ? e.each(fields, function(e, t) {
                            E.remove.rule(t, n);
                          })
                        : E.remove.rule(t, n);
                    },
                    fields: function(e) {
                      E.remove.field(e);
                    },
                    prompt: function(t) {
                      var n = E.get.field(t).closest(p),
                        i = n.children(y.prompt);
                      n.removeClass(x.error),
                        g.inline &&
                          i.is(":visible") &&
                          (E.verbose("Removing prompt for field", t),
                          g.transition &&
                          void 0 !== e.fn.transition &&
                          R.transition("is supported")
                            ? i.transition(
                                g.transition + " out",
                                g.duration,
                                function() {
                                  i.remove();
                                }
                              )
                            : i.fadeOut(g.duration, function() {
                                i.remove();
                              }));
                    }
                  },
                  set: {
                    success: function() {
                      R.removeClass(x.error).addClass(x.success);
                    },
                    defaults: function() {
                      f.each(function() {
                        var t = e(this),
                          n =
                            t.filter(y.checkbox).length > 0
                              ? t.is(":checked")
                              : t.val();
                        t.data(b.defaultValue, n);
                      });
                    },
                    error: function() {
                      R.removeClass(x.success).addClass(x.error);
                    },
                    value: function(e, t) {
                      var n = {};
                      return (n[e] = t), E.set.values.call(D, n);
                    },
                    values: function(t) {
                      e.isEmptyObject(t) ||
                        e.each(t, function(t, n) {
                          var i,
                            o = E.get.field(t),
                            r = o.parent(),
                            a = e.isArray(n),
                            s = r.is(y.uiCheckbox),
                            l = r.is(y.uiDropdown),
                            c = o.is(y.radio) && s;
                          o.length > 0 &&
                            (a && s
                              ? (E.verbose("Selecting multiple", n, o),
                                r.checkbox("uncheck"),
                                e.each(n, function(e, t) {
                                  (i = o.filter('[value="' + t + '"]')),
                                    (r = i.parent()),
                                    i.length > 0 && r.checkbox("check");
                                }))
                              : c
                                ? (E.verbose("Selecting radio value", n, o),
                                  o
                                    .filter('[value="' + n + '"]')
                                    .parent(y.uiCheckbox)
                                    .checkbox("check"))
                                : s
                                  ? (E.verbose("Setting checkbox value", n, r),
                                    !0 === n
                                      ? r.checkbox("check")
                                      : r.checkbox("uncheck"))
                                  : l
                                    ? (E.verbose(
                                        "Setting dropdown value",
                                        n,
                                        r
                                      ),
                                      r.dropdown("set selected", n))
                                    : (E.verbose("Setting field value", n, o),
                                      o.val(n)));
                        });
                    }
                  },
                  validate: {
                    form: function(e, t) {
                      var n = E.get.values();
                      if (O) return !1;
                      if (((P = []), E.determine.isValid())) {
                        if (
                          (E.debug("Form has no validation errors, submitting"),
                          E.set.success(),
                          !0 !== t)
                        )
                          return g.onSuccess.call(D, e, n);
                      } else if (
                        (E.debug("Form has errors"),
                        E.set.error(),
                        g.inline || E.add.errors(P),
                        void 0 !== R.data("moduleApi") &&
                          e.stopImmediatePropagation(),
                        !0 !== t)
                      )
                        return g.onFailure.call(D, P, n);
                    },
                    field: function(t, n, i) {
                      (i = void 0 === i || i),
                        "string" == typeof t &&
                          (E.verbose("Validating field", t),
                          (n = t),
                          (t = v[t]));
                      var o = t.identifier || n,
                        r = E.get.field(o),
                        a = !!t.depends && E.get.field(t.depends),
                        s = !0,
                        l = [];
                      return (
                        t.identifier ||
                          (E.debug("Using field name as identifier", o),
                          (t.identifier = o)),
                        r.prop("disabled")
                          ? (E.debug("Field is disabled. Skipping", o),
                            (s = !0))
                          : t.optional && E.is.blank(r)
                            ? (E.debug(
                                "Field is optional and blank. Skipping",
                                o
                              ),
                              (s = !0))
                            : t.depends && E.is.empty(a)
                              ? (E.debug(
                                  "Field depends on another value that is not present or empty. Skipping",
                                  a
                                ),
                                (s = !0))
                              : void 0 !== t.rules &&
                                e.each(t.rules, function(e, n) {
                                  E.has.field(o) &&
                                    !E.validate.rule(t, n) &&
                                    (E.debug("Field is invalid", o, n.type),
                                    l.push(E.get.prompt(n, t)),
                                    (s = !1));
                                }),
                        s
                          ? (i && (E.remove.prompt(o, l), g.onValid.call(r)),
                            !0)
                          : (i &&
                              ((P = P.concat(l)),
                              E.add.prompt(o, l),
                              g.onInvalid.call(r, l)),
                            !1)
                      );
                    },
                    rule: function(t, n) {
                      var i = E.get.field(t.identifier),
                        o = (n.type, i.val()),
                        r = E.get.ancillaryValue(n),
                        a = E.get.ruleName(n),
                        s = g.rules[a];
                      if (e.isFunction(s))
                        return (
                          (o =
                            void 0 === o || "" === o || null === o
                              ? ""
                              : e.trim(o + "")),
                          s.call(i, o, r)
                        );
                      E.error(C.noRule, a);
                    }
                  },
                  setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t);
                    else {
                      if (void 0 === n) return g[t];
                      g[t] = n;
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, E, t);
                    else {
                      if (void 0 === n) return E[t];
                      E[t] = n;
                    }
                  },
                  debug: function() {
                    !g.silent &&
                      g.debug &&
                      (g.performance
                        ? E.performance.log(arguments)
                        : ((E.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            g.name + ":"
                          )),
                          E.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !g.silent &&
                      g.verbose &&
                      g.debug &&
                      (g.performance
                        ? E.performance.log(arguments)
                        : ((E.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            g.name + ":"
                          )),
                          E.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    g.silent ||
                      ((E.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        g.name + ":"
                      )),
                      E.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      g.performance &&
                        ((n = (t = new Date().getTime()) - (a || t)),
                        (a = t),
                        s.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: D,
                          "Execution Time": n
                        })),
                        clearTimeout(E.performance.timer),
                        (E.performance.timer = setTimeout(
                          E.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = g.name + ":",
                        n = 0;
                      (a = !1),
                        clearTimeout(E.performance.timer),
                        e.each(s, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        r && (t += " '" + r + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          s.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(s)
                            : e.each(s, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (s = []);
                    }
                  },
                  invoke: function(t, n, o) {
                    var r,
                      a,
                      s,
                      l = A;
                    return (
                      (n = n || d),
                      (o = D || o),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(o, n))
                        : void 0 !== a && (s = a),
                      e.isArray(i)
                        ? i.push(s)
                        : void 0 !== i ? (i = [i, s]) : void 0 !== s && (i = s),
                      a
                    );
                  }
                }).initialize();
              }),
              void 0 !== i ? i : this
            );
          }),
          (e.fn.form.settings = {
            name: "Form",
            namespace: "form",
            debug: !1,
            verbose: !1,
            performance: !0,
            fields: !1,
            keyboardShortcuts: !0,
            on: "submit",
            inline: !1,
            delay: 200,
            revalidate: !0,
            transition: "scale",
            duration: 200,
            onValid: function() {},
            onInvalid: function() {},
            onSuccess: function() {
              return !0;
            },
            onFailure: function() {
              return !1;
            },
            metadata: { defaultValue: "default", validate: "validate" },
            regExp: {
              htmlID: /^[a-zA-Z][\w:.-]*$/g,
              bracket: /\[(.*)\]/i,
              decimal: /^\d+\.?\d*$/,
              email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
              escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
              flags: /^\/(.*)\/(.*)?/,
              integer: /^\-?\d+$/,
              number: /^\-?\d*(\.\d+)?$/,
              url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
            },
            text: {
              unspecifiedRule: "Please enter a valid value",
              unspecifiedField: "This field"
            },
            prompt: {
              empty: "{name} must have a value",
              checked: "{name} must be checked",
              email: "{name} must be a valid e-mail",
              url: "{name} must be a valid url",
              regExp: "{name} is not formatted correctly",
              integer: "{name} must be an integer",
              decimal: "{name} must be a decimal number",
              number: "{name} must be set to a number",
              is: '{name} must be "{ruleValue}"',
              isExactly: '{name} must be exactly "{ruleValue}"',
              not: '{name} cannot be set to "{ruleValue}"',
              notExactly: '{name} cannot be set to exactly "{ruleValue}"',
              contain: '{name} must contain "{ruleValue}"',
              containExactly: '{name} must contain exactly "{ruleValue}"',
              doesntContain: '{name} cannot contain  "{ruleValue}"',
              doesntContainExactly:
                '{name} cannot contain exactly "{ruleValue}"',
              minLength: "{name} must be at least {ruleValue} characters",
              length: "{name} must be at least {ruleValue} characters",
              exactLength: "{name} must be exactly {ruleValue} characters",
              maxLength: "{name} cannot be longer than {ruleValue} characters",
              match: "{name} must match {ruleValue} field",
              different:
                "{name} must have a different value than {ruleValue} field",
              creditCard: "{name} must be a valid credit card number",
              minCount: "{name} must have at least {ruleValue} choices",
              exactCount: "{name} must have exactly {ruleValue} choices",
              maxCount: "{name} must have {ruleValue} or less choices"
            },
            selector: {
              checkbox: 'input[type="checkbox"], input[type="radio"]',
              clear: ".clear",
              field: "input, textarea, select",
              group: ".field",
              input: "input",
              message: ".error.message",
              prompt: ".prompt.label",
              radio: 'input[type="radio"]',
              reset: '.reset:not([type="reset"])',
              submit: '.submit:not([type="submit"])',
              uiCheckbox: ".ui.checkbox",
              uiDropdown: ".ui.dropdown"
            },
            className: {
              error: "error",
              label: "ui prompt label",
              pressed: "down",
              success: "success"
            },
            error: {
              identifier: "You must specify a string identifier for each field",
              method: "The method you called is not defined.",
              noRule: "There is no rule matching the one you specified",
              oldSyntax:
                "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
            },
            templates: {
              error: function(t) {
                var n = '<ul class="list">';
                return (
                  e.each(t, function(e, t) {
                    n += "<li>" + t + "</li>";
                  }),
                  e((n += "</ul>"))
                );
              },
              prompt: function(t) {
                return e("<div/>")
                  .addClass("ui basic red pointing prompt label")
                  .html(t[0]);
              }
            },
            rules: {
              empty: function(t) {
                return !(
                  void 0 === t ||
                  "" === t ||
                  (e.isArray(t) && 0 === t.length)
                );
              },
              checked: function() {
                return e(this).filter(":checked").length > 0;
              },
              email: function(t) {
                return e.fn.form.settings.regExp.email.test(t);
              },
              url: function(t) {
                return e.fn.form.settings.regExp.url.test(t);
              },
              regExp: function(t, n) {
                if (n instanceof RegExp) return t.match(n);
                var i,
                  o = n.match(e.fn.form.settings.regExp.flags);
                return (
                  o &&
                    ((n = o.length >= 2 ? o[1] : n),
                    (i = o.length >= 3 ? o[2] : "")),
                  t.match(new RegExp(n, i))
                );
              },
              integer: function(t, n) {
                var i,
                  o,
                  r,
                  a = e.fn.form.settings.regExp.integer;
                return (
                  n &&
                    -1 === ["", ".."].indexOf(n) &&
                    (-1 == n.indexOf("..")
                      ? a.test(n) && (i = o = n - 0)
                      : ((r = n.split("..", 2)),
                        a.test(r[0]) && (i = r[0] - 0),
                        a.test(r[1]) && (o = r[1] - 0))),
                  a.test(t) &&
                    (void 0 === i || t >= i) &&
                    (void 0 === o || t <= o)
                );
              },
              decimal: function(t) {
                return e.fn.form.settings.regExp.decimal.test(t);
              },
              number: function(t) {
                return e.fn.form.settings.regExp.number.test(t);
              },
              is: function(e, t) {
                return (
                  (t = "string" == typeof t ? t.toLowerCase() : t),
                  (e = "string" == typeof e ? e.toLowerCase() : e) == t
                );
              },
              isExactly: function(e, t) {
                return e == t;
              },
              not: function(e, t) {
                return (
                  (e = "string" == typeof e ? e.toLowerCase() : e) !=
                  (t = "string" == typeof t ? t.toLowerCase() : t)
                );
              },
              notExactly: function(e, t) {
                return e != t;
              },
              contains: function(t, n) {
                return (
                  (n = n.replace(e.fn.form.settings.regExp.escape, "\\$&")),
                  -1 !== t.search(new RegExp(n, "i"))
                );
              },
              containsExactly: function(t, n) {
                return (
                  (n = n.replace(e.fn.form.settings.regExp.escape, "\\$&")),
                  -1 !== t.search(new RegExp(n))
                );
              },
              doesntContain: function(t, n) {
                return (
                  (n = n.replace(e.fn.form.settings.regExp.escape, "\\$&")),
                  -1 === t.search(new RegExp(n, "i"))
                );
              },
              doesntContainExactly: function(t, n) {
                return (
                  (n = n.replace(e.fn.form.settings.regExp.escape, "\\$&")),
                  -1 === t.search(new RegExp(n))
                );
              },
              minLength: function(e, t) {
                return void 0 !== e && e.length >= t;
              },
              length: function(e, t) {
                return void 0 !== e && e.length >= t;
              },
              exactLength: function(e, t) {
                return void 0 !== e && e.length == t;
              },
              maxLength: function(e, t) {
                return void 0 !== e && e.length <= t;
              },
              match: function(t, n) {
                var i;
                e(this);
                return (
                  e('[data-validate="' + n + '"]').length > 0
                    ? (i = e('[data-validate="' + n + '"]').val())
                    : e("#" + n).length > 0
                      ? (i = e("#" + n).val())
                      : e('[name="' + n + '"]').length > 0
                        ? (i = e('[name="' + n + '"]').val())
                        : e('[name="' + n + '[]"]').length > 0 &&
                          (i = e('[name="' + n + '[]"]')),
                  void 0 !== i && t.toString() == i.toString()
                );
              },
              different: function(t, n) {
                var i;
                e(this);
                return (
                  e('[data-validate="' + n + '"]').length > 0
                    ? (i = e('[data-validate="' + n + '"]').val())
                    : e("#" + n).length > 0
                      ? (i = e("#" + n).val())
                      : e('[name="' + n + '"]').length > 0
                        ? (i = e('[name="' + n + '"]').val())
                        : e('[name="' + n + '[]"]').length > 0 &&
                          (i = e('[name="' + n + '[]"]')),
                  void 0 !== i && t.toString() !== i.toString()
                );
              },
              creditCard: function(t, n) {
                var i,
                  o,
                  r = {
                    visa: { pattern: /^4/, length: [16] },
                    amex: { pattern: /^3[47]/, length: [15] },
                    mastercard: { pattern: /^5[1-5]/, length: [16] },
                    discover: {
                      pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                      length: [16]
                    },
                    unionPay: { pattern: /^(62|88)/, length: [16, 17, 18, 19] },
                    jcb: { pattern: /^35(2[89]|[3-8][0-9])/, length: [16] },
                    maestro: {
                      pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                      length: [12, 13, 14, 15, 16, 17, 18, 19]
                    },
                    dinersClub: { pattern: /^(30[0-5]|^36)/, length: [14] },
                    laser: {
                      pattern: /^(6304|670[69]|6771)/,
                      length: [16, 17, 18, 19]
                    },
                    visaElectron: {
                      pattern: /^(4026|417500|4508|4844|491(3|7))/,
                      length: [16]
                    }
                  },
                  a = {},
                  s = !1,
                  l = "string" == typeof n && n.split(",");
                if ("string" == typeof t && 0 !== t.length) {
                  if (
                    ((t = t.replace(/[\-]/g, "")),
                    l &&
                      (e.each(l, function(n, i) {
                        (o = r[i]) &&
                          (a = {
                            length: -1 !== e.inArray(t.length, o.length),
                            pattern: -1 !== t.search(o.pattern)
                          }).length &&
                          a.pattern &&
                          (s = !0);
                      }),
                      !s))
                  )
                    return !1;
                  if (
                    (i = {
                      number: -1 !== e.inArray(t.length, r.unionPay.length),
                      pattern: -1 !== t.search(r.unionPay.pattern)
                    }).number &&
                    i.pattern
                  )
                    return !0;
                  for (
                    var c = t.length,
                      u = 0,
                      d = [
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                      ],
                      f = 0;
                    c--;

                  )
                    (f += d[u][parseInt(t.charAt(c), 10)]), (u ^= 1);
                  return f % 10 == 0 && f > 0;
                }
              },
              minCount: function(e, t) {
                return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t);
              },
              exactCount: function(e, t) {
                return 0 == t
                  ? "" === e
                  : 1 == t
                    ? "" !== e && -1 === e.search(",")
                    : e.split(",").length == t;
              },
              maxCount: function(e, t) {
                return (
                  0 != t &&
                  (1 == t ? -1 === e.search(",") : e.split(",").length <= t)
                );
              }
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.accordion = function(n) {
            var i,
              o = e(this),
              r = new Date().getTime(),
              a = [],
              s = arguments[0],
              l = "string" == typeof s,
              c = [].slice.call(arguments, 1);
            t.requestAnimationFrame ||
              t.mozRequestAnimationFrame ||
              t.webkitRequestAnimationFrame ||
              t.msRequestAnimationFrame;
            return (
              o.each(function() {
                var u,
                  d,
                  f = e.isPlainObject(n)
                    ? e.extend(!0, {}, e.fn.accordion.settings, n)
                    : e.extend({}, e.fn.accordion.settings),
                  p = f.className,
                  h = f.namespace,
                  m = f.selector,
                  g = f.error,
                  v = "." + h,
                  b = "module-" + h,
                  y = o.selector || "",
                  x = e(this),
                  w = x.find(m.title),
                  C = x.find(m.content),
                  k = this,
                  S = x.data(b);
                (d = {
                  initialize: function() {
                    d.debug("Initializing", x),
                      d.bind.events(),
                      f.observeChanges && d.observeChanges(),
                      d.instantiate();
                  },
                  instantiate: function() {
                    (S = d), x.data(b, d);
                  },
                  destroy: function() {
                    d.debug("Destroying previous instance", x),
                      x.off(v).removeData(b);
                  },
                  refresh: function() {
                    (w = x.find(m.title)), (C = x.find(m.content));
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((u = new MutationObserver(function(e) {
                        d.debug("DOM tree modified, updating selector cache"),
                          d.refresh();
                      })).observe(k, { childList: !0, subtree: !0 }),
                      d.debug("Setting up mutation observer", u));
                  },
                  bind: {
                    events: function() {
                      d.debug("Binding delegated events"),
                        x.on(f.on + v, m.trigger, d.event.click);
                    }
                  },
                  event: {
                    click: function() {
                      d.toggle.call(this);
                    }
                  },
                  toggle: function(t) {
                    var n =
                        void 0 !== t
                          ? "number" == typeof t
                            ? w.eq(t)
                            : e(t).closest(m.title)
                          : e(this).closest(m.title),
                      i = n.next(C),
                      o = i.hasClass(p.animating),
                      r = i.hasClass(p.active),
                      a = r && !o,
                      s = !r && o;
                    d.debug("Toggling visibility of content", n),
                      a || s
                        ? f.collapsible
                          ? d.close.call(n)
                          : d.debug(
                              "Cannot close accordion content collapsing is disabled"
                            )
                        : d.open.call(n);
                  },
                  open: function(t) {
                    var n =
                        void 0 !== t
                          ? "number" == typeof t
                            ? w.eq(t)
                            : e(t).closest(m.title)
                          : e(this).closest(m.title),
                      i = n.next(C),
                      o = i.hasClass(p.animating);
                    i.hasClass(p.active) || o
                      ? d.debug("Accordion already open, skipping", i)
                      : (d.debug("Opening accordion content", n),
                        f.onOpening.call(i),
                        f.onChanging.call(i),
                        f.exclusive && d.closeOthers.call(n),
                        n.addClass(p.active),
                        i.stop(!0, !0).addClass(p.animating),
                        f.animateChildren &&
                          (void 0 !== e.fn.transition &&
                          x.transition("is supported")
                            ? i.children().transition({
                                animation: "fade in",
                                queue: !1,
                                useFailSafe: !0,
                                debug: f.debug,
                                verbose: f.verbose,
                                duration: f.duration
                              })
                            : i
                                .children()
                                .stop(!0, !0)
                                .animate(
                                  { opacity: 1 },
                                  f.duration,
                                  d.resetOpacity
                                )),
                        i.slideDown(f.duration, f.easing, function() {
                          i.removeClass(p.animating).addClass(p.active),
                            d.reset.display.call(this),
                            f.onOpen.call(this),
                            f.onChange.call(this);
                        }));
                  },
                  close: function(t) {
                    var n =
                        void 0 !== t
                          ? "number" == typeof t
                            ? w.eq(t)
                            : e(t).closest(m.title)
                          : e(this).closest(m.title),
                      i = n.next(C),
                      o = i.hasClass(p.animating),
                      r = i.hasClass(p.active);
                    (!r && !(!r && o)) ||
                      (r && o) ||
                      (d.debug("Closing accordion content", i),
                      f.onClosing.call(i),
                      f.onChanging.call(i),
                      n.removeClass(p.active),
                      i.stop(!0, !0).addClass(p.animating),
                      f.animateChildren &&
                        (void 0 !== e.fn.transition &&
                        x.transition("is supported")
                          ? i.children().transition({
                              animation: "fade out",
                              queue: !1,
                              useFailSafe: !0,
                              debug: f.debug,
                              verbose: f.verbose,
                              duration: f.duration
                            })
                          : i
                              .children()
                              .stop(!0, !0)
                              .animate(
                                { opacity: 0 },
                                f.duration,
                                d.resetOpacity
                              )),
                      i.slideUp(f.duration, f.easing, function() {
                        i.removeClass(p.animating).removeClass(p.active),
                          d.reset.display.call(this),
                          f.onClose.call(this),
                          f.onChange.call(this);
                      }));
                  },
                  closeOthers: function(t) {
                    var n,
                      i,
                      o,
                      r = void 0 !== t ? w.eq(t) : e(this).closest(m.title),
                      a = r.parents(m.content).prev(m.title),
                      s = r.closest(m.accordion),
                      l = m.title + "." + p.active + ":visible",
                      c = m.content + "." + p.active + ":visible";
                    f.closeNested
                      ? (o = (n = s.find(l).not(a)).next(C))
                      : ((n = s.find(l).not(a)),
                        (i = s
                          .find(c)
                          .find(l)
                          .not(a)),
                        (o = (n = n.not(i)).next(C))),
                      n.length > 0 &&
                        (d.debug("Exclusive enabled, closing other content", n),
                        n.removeClass(p.active),
                        o.removeClass(p.animating).stop(!0, !0),
                        f.animateChildren &&
                          (void 0 !== e.fn.transition &&
                          x.transition("is supported")
                            ? o.children().transition({
                                animation: "fade out",
                                useFailSafe: !0,
                                debug: f.debug,
                                verbose: f.verbose,
                                duration: f.duration
                              })
                            : o
                                .children()
                                .stop(!0, !0)
                                .animate(
                                  { opacity: 0 },
                                  f.duration,
                                  d.resetOpacity
                                )),
                        o.slideUp(f.duration, f.easing, function() {
                          e(this).removeClass(p.active),
                            d.reset.display.call(this);
                        }));
                  },
                  reset: {
                    display: function() {
                      d.verbose("Removing inline display from element", this),
                        e(this).css("display", ""),
                        "" === e(this).attr("style") &&
                          e(this)
                            .attr("style", "")
                            .removeAttr("style");
                    },
                    opacity: function() {
                      d.verbose("Removing inline opacity from element", this),
                        e(this).css("opacity", ""),
                        "" === e(this).attr("style") &&
                          e(this)
                            .attr("style", "")
                            .removeAttr("style");
                    }
                  },
                  setting: function(t, n) {
                    if ((d.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      e.isPlainObject(f[t])
                        ? e.extend(!0, f[t], n)
                        : (f[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if ((d.debug("Changing internal", t, n), void 0 === n))
                      return d[t];
                    e.isPlainObject(t) ? e.extend(!0, d, t) : (d[t] = n);
                  },
                  debug: function() {
                    !f.silent &&
                      f.debug &&
                      (f.performance
                        ? d.performance.log(arguments)
                        : ((d.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          d.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !f.silent &&
                      f.verbose &&
                      f.debug &&
                      (f.performance
                        ? d.performance.log(arguments)
                        : ((d.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          d.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    f.silent ||
                      ((d.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        f.name + ":"
                      )),
                      d.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      f.performance &&
                        ((n = (t = new Date().getTime()) - (r || t)),
                        (r = t),
                        a.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: k,
                          "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        (d.performance.timer = setTimeout(
                          d.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = f.name + ":",
                        n = 0;
                      (r = !1),
                        clearTimeout(d.performance.timer),
                        e.each(a, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        y && (t += " '" + y + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          a.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(a)
                            : e.each(a, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (a = []);
                    }
                  },
                  invoke: function(t, n, o) {
                    var r,
                      a,
                      s,
                      l = S;
                    return (
                      (n = n || c),
                      (o = k || o),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (d.error(g.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(o, n))
                        : void 0 !== a && (s = a),
                      e.isArray(i)
                        ? i.push(s)
                        : void 0 !== i ? (i = [i, s]) : void 0 !== s && (i = s),
                      a
                    );
                  }
                }),
                  l
                    ? (void 0 === S && d.initialize(), d.invoke(s))
                    : (void 0 !== S && S.invoke("destroy"), d.initialize());
              }),
              void 0 !== i ? i : this
            );
          }),
          (e.fn.accordion.settings = {
            name: "Accordion",
            namespace: "accordion",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            on: "click",
            observeChanges: !0,
            exclusive: !0,
            collapsible: !0,
            closeNested: !1,
            animateChildren: !0,
            duration: 350,
            easing: "easeOutQuad",
            onOpening: function() {},
            onClosing: function() {},
            onChanging: function() {},
            onOpen: function() {},
            onClose: function() {},
            onChange: function() {},
            error: { method: "The method you called is not defined" },
            className: { active: "active", animating: "animating" },
            selector: {
              accordion: ".accordion",
              title: ".title",
              trigger: ".title",
              content: ".content"
            }
          }),
          e.extend(e.easing, {
            easeOutQuad: function(e, t, n, i, o) {
              return -i * (t /= o) * (t - 2) + n;
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.checkbox = function(i) {
            var o,
              r = e(this),
              a = r.selector || "",
              s = new Date().getTime(),
              l = [],
              c = arguments[0],
              u = "string" == typeof c,
              d = [].slice.call(arguments, 1);
            return (
              r.each(function() {
                var r,
                  f,
                  p = e.extend(!0, {}, e.fn.checkbox.settings, i),
                  h = p.className,
                  m = p.namespace,
                  g = p.selector,
                  v = p.error,
                  b = "." + m,
                  y = "module-" + m,
                  x = e(this),
                  w = e(this).children(g.label),
                  C = e(this).children(g.input),
                  k = C[0],
                  S = !1,
                  T = !1,
                  A = x.data(y),
                  E = this;
                (f = {
                  initialize: function() {
                    f.verbose("Initializing checkbox", p),
                      f.create.label(),
                      f.bind.events(),
                      f.set.tabbable(),
                      f.hide.input(),
                      f.observeChanges(),
                      f.instantiate(),
                      f.setup();
                  },
                  instantiate: function() {
                    f.verbose("Storing instance of module", f),
                      (A = f),
                      x.data(y, f);
                  },
                  destroy: function() {
                    f.verbose("Destroying module"),
                      f.unbind.events(),
                      f.show.input(),
                      x.removeData(y);
                  },
                  fix: {
                    reference: function() {
                      x.is(g.input) &&
                        (f.debug(
                          "Behavior called on <input> adjusting invoked element"
                        ),
                        (x = x.closest(g.checkbox)),
                        f.refresh());
                    }
                  },
                  setup: function() {
                    f.set.initialLoad(),
                      f.is.indeterminate()
                        ? (f.debug("Initial value is indeterminate"),
                          f.indeterminate())
                        : f.is.checked()
                          ? (f.debug("Initial value is checked"), f.check())
                          : (f.debug("Initial value is unchecked"),
                            f.uncheck()),
                      f.remove.initialLoad();
                  },
                  refresh: function() {
                    (w = x.children(g.label)),
                      (C = x.children(g.input)),
                      (k = C[0]);
                  },
                  hide: {
                    input: function() {
                      f.verbose("Modifying <input> z-index to be unselectable"),
                        C.addClass(h.hidden);
                    }
                  },
                  show: {
                    input: function() {
                      f.verbose("Modifying <input> z-index to be selectable"),
                        C.removeClass(h.hidden);
                    }
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((r = new MutationObserver(function(e) {
                        f.debug("DOM tree modified, updating selector cache"),
                          f.refresh();
                      })).observe(E, { childList: !0, subtree: !0 }),
                      f.debug("Setting up mutation observer", r));
                  },
                  attachEvents: function(t, n) {
                    var i = e(t);
                    (n = e.isFunction(f[n]) ? f[n] : f.toggle),
                      i.length > 0
                        ? (f.debug(
                            "Attaching checkbox events to element",
                            t,
                            n
                          ),
                          i.on("click" + b, n))
                        : f.error(v.notFound);
                  },
                  event: {
                    click: function(t) {
                      var n = e(t.target);
                      n.is(g.input)
                        ? f.verbose(
                            "Using default check action on initialized checkbox"
                          )
                        : n.is(g.link)
                          ? f.debug(
                              "Clicking link inside checkbox, skipping toggle"
                            )
                          : (f.toggle(), C.focus(), t.preventDefault());
                    },
                    keydown: function(e) {
                      var t = e.which,
                        n = 13,
                        i = 32;
                      t == 27
                        ? (f.verbose("Escape key pressed blurring field"),
                          C.blur(),
                          (T = !0))
                        : e.ctrlKey || (t != i && t != n)
                          ? (T = !1)
                          : (f.verbose(
                              "Enter/space key pressed, toggling checkbox"
                            ),
                            f.toggle(),
                            (T = !0));
                    },
                    keyup: function(e) {
                      T && e.preventDefault();
                    }
                  },
                  check: function() {
                    f.should.allowCheck() &&
                      (f.debug("Checking checkbox", C),
                      f.set.checked(),
                      f.should.ignoreCallbacks() ||
                        (p.onChecked.call(k), p.onChange.call(k)));
                  },
                  uncheck: function() {
                    f.should.allowUncheck() &&
                      (f.debug("Unchecking checkbox"),
                      f.set.unchecked(),
                      f.should.ignoreCallbacks() ||
                        (p.onUnchecked.call(k), p.onChange.call(k)));
                  },
                  indeterminate: function() {
                    f.should.allowIndeterminate()
                      ? f.debug("Checkbox is already indeterminate")
                      : (f.debug("Making checkbox indeterminate"),
                        f.set.indeterminate(),
                        f.should.ignoreCallbacks() ||
                          (p.onIndeterminate.call(k), p.onChange.call(k)));
                  },
                  determinate: function() {
                    f.should.allowDeterminate()
                      ? f.debug("Checkbox is already determinate")
                      : (f.debug("Making checkbox determinate"),
                        f.set.determinate(),
                        f.should.ignoreCallbacks() ||
                          (p.onDeterminate.call(k), p.onChange.call(k)));
                  },
                  enable: function() {
                    f.is.enabled()
                      ? f.debug("Checkbox is already enabled")
                      : (f.debug("Enabling checkbox"),
                        f.set.enabled(),
                        p.onEnable.call(k),
                        p.onEnabled.call(k));
                  },
                  disable: function() {
                    f.is.disabled()
                      ? f.debug("Checkbox is already disabled")
                      : (f.debug("Disabling checkbox"),
                        f.set.disabled(),
                        p.onDisable.call(k),
                        p.onDisabled.call(k));
                  },
                  get: {
                    radios: function() {
                      var t = f.get.name();
                      return e('input[name="' + t + '"]').closest(g.checkbox);
                    },
                    otherRadios: function() {
                      return f.get.radios().not(x);
                    },
                    name: function() {
                      return C.attr("name");
                    }
                  },
                  is: {
                    initialLoad: function() {
                      return S;
                    },
                    radio: function() {
                      return C.hasClass(h.radio) || "radio" == C.attr("type");
                    },
                    indeterminate: function() {
                      return (
                        void 0 !== C.prop("indeterminate") &&
                        C.prop("indeterminate")
                      );
                    },
                    checked: function() {
                      return void 0 !== C.prop("checked") && C.prop("checked");
                    },
                    disabled: function() {
                      return (
                        void 0 !== C.prop("disabled") && C.prop("disabled")
                      );
                    },
                    enabled: function() {
                      return !f.is.disabled();
                    },
                    determinate: function() {
                      return !f.is.indeterminate();
                    },
                    unchecked: function() {
                      return !f.is.checked();
                    }
                  },
                  should: {
                    allowCheck: function() {
                      return f.is.determinate() &&
                        f.is.checked() &&
                        !f.should.forceCallbacks()
                        ? (f.debug(
                            "Should not allow check, checkbox is already checked"
                          ),
                          !1)
                        : !1 !== p.beforeChecked.apply(k) ||
                            (f.debug(
                              "Should not allow check, beforeChecked cancelled"
                            ),
                            !1);
                    },
                    allowUncheck: function() {
                      return f.is.determinate() &&
                        f.is.unchecked() &&
                        !f.should.forceCallbacks()
                        ? (f.debug(
                            "Should not allow uncheck, checkbox is already unchecked"
                          ),
                          !1)
                        : !1 !== p.beforeUnchecked.apply(k) ||
                            (f.debug(
                              "Should not allow uncheck, beforeUnchecked cancelled"
                            ),
                            !1);
                    },
                    allowIndeterminate: function() {
                      return f.is.indeterminate() && !f.should.forceCallbacks()
                        ? (f.debug(
                            "Should not allow indeterminate, checkbox is already indeterminate"
                          ),
                          !1)
                        : !1 !== p.beforeIndeterminate.apply(k) ||
                            (f.debug(
                              "Should not allow indeterminate, beforeIndeterminate cancelled"
                            ),
                            !1);
                    },
                    allowDeterminate: function() {
                      return f.is.determinate() && !f.should.forceCallbacks()
                        ? (f.debug(
                            "Should not allow determinate, checkbox is already determinate"
                          ),
                          !1)
                        : !1 !== p.beforeDeterminate.apply(k) ||
                            (f.debug(
                              "Should not allow determinate, beforeDeterminate cancelled"
                            ),
                            !1);
                    },
                    forceCallbacks: function() {
                      return f.is.initialLoad() && p.fireOnInit;
                    },
                    ignoreCallbacks: function() {
                      return S && !p.fireOnInit;
                    }
                  },
                  can: {
                    change: function() {
                      return !(
                        x.hasClass(h.disabled) ||
                        x.hasClass(h.readOnly) ||
                        C.prop("disabled") ||
                        C.prop("readonly")
                      );
                    },
                    uncheck: function() {
                      return "boolean" == typeof p.uncheckable
                        ? p.uncheckable
                        : !f.is.radio();
                    }
                  },
                  set: {
                    initialLoad: function() {
                      S = !0;
                    },
                    checked: function() {
                      f.verbose("Setting class to checked"),
                        x.removeClass(h.indeterminate).addClass(h.checked),
                        f.is.radio() && f.uncheckOthers(),
                        f.is.indeterminate() || !f.is.checked()
                          ? (f.verbose("Setting state to checked", k),
                            C.prop("indeterminate", !1).prop("checked", !0),
                            f.trigger.change())
                          : f.debug(
                              "Input is already checked, skipping input property change"
                            );
                    },
                    unchecked: function() {
                      f.verbose("Removing checked class"),
                        x.removeClass(h.indeterminate).removeClass(h.checked),
                        f.is.indeterminate() || !f.is.unchecked()
                          ? (f.debug("Setting state to unchecked"),
                            C.prop("indeterminate", !1).prop("checked", !1),
                            f.trigger.change())
                          : f.debug("Input is already unchecked");
                    },
                    indeterminate: function() {
                      f.verbose("Setting class to indeterminate"),
                        x.addClass(h.indeterminate),
                        f.is.indeterminate()
                          ? f.debug(
                              "Input is already indeterminate, skipping input property change"
                            )
                          : (f.debug("Setting state to indeterminate"),
                            C.prop("indeterminate", !0),
                            f.trigger.change());
                    },
                    determinate: function() {
                      f.verbose("Removing indeterminate class"),
                        x.removeClass(h.indeterminate),
                        f.is.determinate()
                          ? f.debug(
                              "Input is already determinate, skipping input property change"
                            )
                          : (f.debug("Setting state to determinate"),
                            C.prop("indeterminate", !1));
                    },
                    disabled: function() {
                      f.verbose("Setting class to disabled"),
                        x.addClass(h.disabled),
                        f.is.disabled()
                          ? f.debug(
                              "Input is already disabled, skipping input property change"
                            )
                          : (f.debug("Setting state to disabled"),
                            C.prop("disabled", "disabled"),
                            f.trigger.change());
                    },
                    enabled: function() {
                      f.verbose("Removing disabled class"),
                        x.removeClass(h.disabled),
                        f.is.enabled()
                          ? f.debug(
                              "Input is already enabled, skipping input property change"
                            )
                          : (f.debug("Setting state to enabled"),
                            C.prop("disabled", !1),
                            f.trigger.change());
                    },
                    tabbable: function() {
                      f.verbose("Adding tabindex to checkbox"),
                        void 0 === C.attr("tabindex") && C.attr("tabindex", 0);
                    }
                  },
                  remove: {
                    initialLoad: function() {
                      S = !1;
                    }
                  },
                  trigger: {
                    change: function() {
                      var e = n.createEvent("HTMLEvents"),
                        t = C[0];
                      t &&
                        (f.verbose("Triggering native change event"),
                        e.initEvent("change", !0, !1),
                        t.dispatchEvent(e));
                    }
                  },
                  create: {
                    label: function() {
                      C.prevAll(g.label).length > 0
                        ? (C.prev(g.label)
                            .detach()
                            .insertAfter(C),
                          f.debug("Moving existing label", w))
                        : f.has.label() ||
                          ((w = e("<label>").insertAfter(C)),
                          f.debug("Creating label", w));
                    }
                  },
                  has: {
                    label: function() {
                      return w.length > 0;
                    }
                  },
                  bind: {
                    events: function() {
                      f.verbose("Attaching checkbox events"),
                        x
                          .on("click" + b, f.event.click)
                          .on("keydown" + b, g.input, f.event.keydown)
                          .on("keyup" + b, g.input, f.event.keyup);
                    }
                  },
                  unbind: {
                    events: function() {
                      f.debug("Removing events"), x.off(b);
                    }
                  },
                  uncheckOthers: function() {
                    var e = f.get.otherRadios();
                    f.debug("Unchecking other radios", e),
                      e.removeClass(h.checked);
                  },
                  toggle: function() {
                    f.can.change()
                      ? f.is.indeterminate() || f.is.unchecked()
                        ? (f.debug("Currently unchecked"), f.check())
                        : f.is.checked() &&
                          f.can.uncheck() &&
                          (f.debug("Currently checked"), f.uncheck())
                      : f.is.radio() ||
                        f.debug(
                          "Checkbox is read-only or disabled, ignoring toggle"
                        );
                  },
                  setting: function(t, n) {
                    if ((f.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, p, t);
                    else {
                      if (void 0 === n) return p[t];
                      e.isPlainObject(p[t])
                        ? e.extend(!0, p[t], n)
                        : (p[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      f[t] = n;
                    }
                  },
                  debug: function() {
                    !p.silent &&
                      p.debug &&
                      (p.performance
                        ? f.performance.log(arguments)
                        : ((f.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            p.name + ":"
                          )),
                          f.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !p.silent &&
                      p.verbose &&
                      p.debug &&
                      (p.performance
                        ? f.performance.log(arguments)
                        : ((f.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            p.name + ":"
                          )),
                          f.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    p.silent ||
                      ((f.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        p.name + ":"
                      )),
                      f.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      p.performance &&
                        ((n = (t = new Date().getTime()) - (s || t)),
                        (s = t),
                        l.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: E,
                          "Execution Time": n
                        })),
                        clearTimeout(f.performance.timer),
                        (f.performance.timer = setTimeout(
                          f.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = p.name + ":",
                        n = 0;
                      (s = !1),
                        clearTimeout(f.performance.timer),
                        e.each(l, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        a && (t += " '" + a + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          l.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(l)
                            : e.each(l, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (l = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = A;
                    return (
                      (n = n || d),
                      (i = E || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (f.error(v.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  u
                    ? (void 0 === A && f.initialize(), f.invoke(c))
                    : (void 0 !== A && A.invoke("destroy"), f.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.checkbox.settings = {
            name: "Checkbox",
            namespace: "checkbox",
            silent: !1,
            debug: !1,
            verbose: !0,
            performance: !0,
            uncheckable: "auto",
            fireOnInit: !1,
            onChange: function() {},
            beforeChecked: function() {},
            beforeUnchecked: function() {},
            beforeDeterminate: function() {},
            beforeIndeterminate: function() {},
            onChecked: function() {},
            onUnchecked: function() {},
            onDeterminate: function() {},
            onIndeterminate: function() {},
            onEnable: function() {},
            onDisable: function() {},
            onEnabled: function() {},
            onDisabled: function() {},
            className: {
              checked: "checked",
              indeterminate: "indeterminate",
              disabled: "disabled",
              hidden: "hidden",
              radio: "radio",
              readOnly: "read-only"
            },
            error: { method: "The method you called is not defined" },
            selector: {
              checkbox: ".ui.checkbox",
              label: "label, .box",
              input: 'input[type="checkbox"], input[type="radio"]',
              link: "a[href]"
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.dimmer = function(t) {
            var i,
              o = e(this),
              r = new Date().getTime(),
              a = [],
              s = arguments[0],
              l = "string" == typeof s,
              c = [].slice.call(arguments, 1);
            return (
              o.each(function() {
                var u,
                  d,
                  f,
                  p = e.isPlainObject(t)
                    ? e.extend(!0, {}, e.fn.dimmer.settings, t)
                    : e.extend({}, e.fn.dimmer.settings),
                  h = p.selector,
                  m = p.namespace,
                  g = p.className,
                  v = p.error,
                  b = "." + m,
                  y = "module-" + m,
                  x = o.selector || "",
                  w =
                    "ontouchstart" in n.documentElement
                      ? "touchstart"
                      : "click",
                  C = e(this),
                  k = this,
                  S = C.data(y);
                (f = {
                  preinitialize: function() {
                    f.is.dimmer()
                      ? ((d = C.parent()), (u = C))
                      : ((d = C),
                        (u = f.has.dimmer()
                          ? p.dimmerName
                            ? d.find(h.dimmer).filter("." + p.dimmerName)
                            : d.find(h.dimmer)
                          : f.create()),
                        f.set.variation());
                  },
                  initialize: function() {
                    f.debug("Initializing dimmer", p),
                      f.bind.events(),
                      f.set.dimmable(),
                      f.instantiate();
                  },
                  instantiate: function() {
                    f.verbose("Storing instance of module", f),
                      (S = f),
                      C.data(y, S);
                  },
                  destroy: function() {
                    f.verbose("Destroying previous module", u),
                      f.unbind.events(),
                      f.remove.variation(),
                      d.off(b);
                  },
                  bind: {
                    events: function() {
                      "hover" == p.on
                        ? d
                            .on("mouseenter" + b, f.show)
                            .on("mouseleave" + b, f.hide)
                        : "click" == p.on && d.on(w + b, f.toggle),
                        f.is.page() &&
                          (f.debug("Setting as a page dimmer", d),
                          f.set.pageDimmer()),
                        f.is.closable() &&
                          (f.verbose("Adding dimmer close event", u),
                          d.on(w + b, h.dimmer, f.event.click));
                    }
                  },
                  unbind: {
                    events: function() {
                      C.removeData(y), d.off(b);
                    }
                  },
                  event: {
                    click: function(t) {
                      f.verbose("Determining if event occured on dimmer", t),
                        (0 === u.find(t.target).length ||
                          e(t.target).is(h.content)) &&
                          (f.hide(), t.stopImmediatePropagation());
                    }
                  },
                  addContent: function(t) {
                    var n = e(t);
                    f.debug("Add content to dimmer", n),
                      n.parent()[0] !== u[0] && n.detach().appendTo(u);
                  },
                  create: function() {
                    var t = e(p.template.dimmer());
                    return (
                      p.dimmerName &&
                        (f.debug("Creating named dimmer", p.dimmerName),
                        t.addClass(p.dimmerName)),
                      t.appendTo(d),
                      t
                    );
                  },
                  show: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      f.debug("Showing dimmer", u, p),
                      (f.is.dimmed() && !f.is.animating()) || !f.is.enabled()
                        ? f.debug("Dimmer is already shown or disabled")
                        : (f.animate.show(t),
                          p.onShow.call(k),
                          p.onChange.call(k));
                  },
                  hide: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      f.is.dimmed() || f.is.animating()
                        ? (f.debug("Hiding dimmer", u),
                          f.animate.hide(t),
                          p.onHide.call(k),
                          p.onChange.call(k))
                        : f.debug("Dimmer is not visible");
                  },
                  toggle: function() {
                    f.verbose("Toggling dimmer visibility", u),
                      f.is.dimmed() ? f.hide() : f.show();
                  },
                  animate: {
                    show: function(t) {
                      (t = e.isFunction(t) ? t : function() {}),
                        p.useCSS &&
                        void 0 !== e.fn.transition &&
                        u.transition("is supported")
                          ? ("auto" !== p.opacity && f.set.opacity(),
                            u.transition({
                              displayType: "flex",
                              animation: p.transition + " in",
                              queue: !1,
                              duration: f.get.duration(),
                              useFailSafe: !0,
                              onStart: function() {
                                f.set.dimmed();
                              },
                              onComplete: function() {
                                f.set.active(), t();
                              }
                            }))
                          : (f.verbose(
                              "Showing dimmer animation with javascript"
                            ),
                            f.set.dimmed(),
                            "auto" == p.opacity && (p.opacity = 0.8),
                            u
                              .stop()
                              .css({
                                opacity: 0,
                                width: "100%",
                                height: "100%"
                              })
                              .fadeTo(f.get.duration(), p.opacity, function() {
                                u.removeAttr("style"), f.set.active(), t();
                              }));
                    },
                    hide: function(t) {
                      (t = e.isFunction(t) ? t : function() {}),
                        p.useCSS &&
                        void 0 !== e.fn.transition &&
                        u.transition("is supported")
                          ? (f.verbose("Hiding dimmer with css"),
                            u.transition({
                              displayType: "flex",
                              animation: p.transition + " out",
                              queue: !1,
                              duration: f.get.duration(),
                              useFailSafe: !0,
                              onStart: function() {
                                f.remove.dimmed();
                              },
                              onComplete: function() {
                                f.remove.active(), t();
                              }
                            }))
                          : (f.verbose("Hiding dimmer with javascript"),
                            f.remove.dimmed(),
                            u.stop().fadeOut(f.get.duration(), function() {
                              f.remove.active(), u.removeAttr("style"), t();
                            }));
                    }
                  },
                  get: {
                    dimmer: function() {
                      return u;
                    },
                    duration: function() {
                      return "object" == typeof p.duration
                        ? f.is.active() ? p.duration.hide : p.duration.show
                        : p.duration;
                    }
                  },
                  has: {
                    dimmer: function() {
                      return p.dimmerName
                        ? C.find(h.dimmer).filter("." + p.dimmerName).length > 0
                        : C.find(h.dimmer).length > 0;
                    }
                  },
                  is: {
                    active: function() {
                      return u.hasClass(g.active);
                    },
                    animating: function() {
                      return u.is(":animated") || u.hasClass(g.animating);
                    },
                    closable: function() {
                      return "auto" == p.closable
                        ? "hover" != p.on
                        : p.closable;
                    },
                    dimmer: function() {
                      return C.hasClass(g.dimmer);
                    },
                    dimmable: function() {
                      return C.hasClass(g.dimmable);
                    },
                    dimmed: function() {
                      return d.hasClass(g.dimmed);
                    },
                    disabled: function() {
                      return d.hasClass(g.disabled);
                    },
                    enabled: function() {
                      return !f.is.disabled();
                    },
                    page: function() {
                      return d.is("body");
                    },
                    pageDimmer: function() {
                      return u.hasClass(g.pageDimmer);
                    }
                  },
                  can: {
                    show: function() {
                      return !u.hasClass(g.disabled);
                    }
                  },
                  set: {
                    opacity: function(e) {
                      var t = u.css("background-color"),
                        n = t.split(","),
                        i = n && 3 == n.length,
                        o = n && 4 == n.length;
                      (e = 0 === p.opacity ? 0 : p.opacity || e),
                        i || o
                          ? ((n[3] = e + ")"), (t = n.join(",")))
                          : (t = "rgba(0, 0, 0, " + e + ")"),
                        f.debug("Setting opacity to", e),
                        u.css("background-color", t);
                    },
                    active: function() {
                      u.addClass(g.active);
                    },
                    dimmable: function() {
                      d.addClass(g.dimmable);
                    },
                    dimmed: function() {
                      d.addClass(g.dimmed);
                    },
                    pageDimmer: function() {
                      u.addClass(g.pageDimmer);
                    },
                    disabled: function() {
                      u.addClass(g.disabled);
                    },
                    variation: function(e) {
                      (e = e || p.variation) && u.addClass(e);
                    }
                  },
                  remove: {
                    active: function() {
                      u.removeClass(g.active);
                    },
                    dimmed: function() {
                      d.removeClass(g.dimmed);
                    },
                    disabled: function() {
                      u.removeClass(g.disabled);
                    },
                    variation: function(e) {
                      (e = e || p.variation) && u.removeClass(e);
                    }
                  },
                  setting: function(t, n) {
                    if ((f.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, p, t);
                    else {
                      if (void 0 === n) return p[t];
                      e.isPlainObject(p[t])
                        ? e.extend(!0, p[t], n)
                        : (p[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      f[t] = n;
                    }
                  },
                  debug: function() {
                    !p.silent &&
                      p.debug &&
                      (p.performance
                        ? f.performance.log(arguments)
                        : ((f.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            p.name + ":"
                          )),
                          f.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !p.silent &&
                      p.verbose &&
                      p.debug &&
                      (p.performance
                        ? f.performance.log(arguments)
                        : ((f.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            p.name + ":"
                          )),
                          f.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    p.silent ||
                      ((f.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        p.name + ":"
                      )),
                      f.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      p.performance &&
                        ((n = (t = new Date().getTime()) - (r || t)),
                        (r = t),
                        a.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: k,
                          "Execution Time": n
                        })),
                        clearTimeout(f.performance.timer),
                        (f.performance.timer = setTimeout(
                          f.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = p.name + ":",
                        n = 0;
                      (r = !1),
                        clearTimeout(f.performance.timer),
                        e.each(a, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        x && (t += " '" + x + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          a.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(a)
                            : e.each(a, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (a = []);
                    }
                  },
                  invoke: function(t, n, o) {
                    var r,
                      a,
                      s,
                      l = S;
                    return (
                      (n = n || c),
                      (o = k || o),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (f.error(v.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(o, n))
                        : void 0 !== a && (s = a),
                      e.isArray(i)
                        ? i.push(s)
                        : void 0 !== i ? (i = [i, s]) : void 0 !== s && (i = s),
                      a
                    );
                  }
                }).preinitialize(),
                  l
                    ? (void 0 === S && f.initialize(), f.invoke(s))
                    : (void 0 !== S && S.invoke("destroy"), f.initialize());
              }),
              void 0 !== i ? i : this
            );
          }),
          (e.fn.dimmer.settings = {
            name: "Dimmer",
            namespace: "dimmer",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            dimmerName: !1,
            variation: !1,
            closable: "auto",
            useCSS: !0,
            transition: "fade",
            on: !1,
            opacity: "auto",
            duration: { show: 500, hide: 500 },
            onChange: function() {},
            onShow: function() {},
            onHide: function() {},
            error: { method: "The method you called is not defined." },
            className: {
              active: "active",
              animating: "animating",
              dimmable: "dimmable",
              dimmed: "dimmed",
              dimmer: "dimmer",
              disabled: "disabled",
              hide: "hide",
              pageDimmer: "page",
              show: "show"
            },
            selector: {
              dimmer: "> .ui.dimmer",
              content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
            },
            template: {
              dimmer: function() {
                return e("<div />").attr("class", "ui dimmer");
              }
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.dropdown = function(i) {
            var o,
              r = e(this),
              a = e(n),
              s = r.selector || "",
              l = "ontouchstart" in n.documentElement,
              c = new Date().getTime(),
              u = [],
              d = arguments[0],
              f = "string" == typeof d,
              p = [].slice.call(arguments, 1);
            return (
              r.each(function(h) {
                var m,
                  g,
                  v,
                  b,
                  y,
                  x,
                  w,
                  C,
                  k = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.dropdown.settings, i)
                    : e.extend({}, e.fn.dropdown.settings),
                  S = k.className,
                  T = k.message,
                  A = k.fields,
                  E = k.keys,
                  R = k.metadata,
                  D = k.namespace,
                  P = k.regExp,
                  O = k.selector,
                  j = k.error,
                  F = k.templates,
                  q = "." + D,
                  N = "module-" + D,
                  L = e(this),
                  M = e(k.context),
                  I = L.find(O.text),
                  z = L.find(O.search),
                  H = L.find(O.sizer),
                  V = L.find(O.input),
                  U = L.find(O.icon),
                  W =
                    L.prev().find(O.text).length > 0
                      ? L.prev().find(O.text)
                      : L.prev(),
                  B = L.children(O.menu),
                  _ = B.find(O.item),
                  $ = !1,
                  X = !1,
                  Q = !1,
                  Y = this,
                  G = L.data(N);
                (C = {
                  initialize: function() {
                    C.debug("Initializing dropdown", k),
                      C.is.alreadySetup()
                        ? C.setup.reference()
                        : (C.setup.layout(),
                          k.values && C.change.values(k.values),
                          C.refreshData(),
                          C.save.defaults(),
                          C.restore.selected(),
                          C.create.id(),
                          C.bind.events(),
                          C.observeChanges(),
                          C.instantiate());
                  },
                  instantiate: function() {
                    C.verbose("Storing instance of dropdown", C),
                      (G = C),
                      L.data(N, C);
                  },
                  destroy: function() {
                    C.verbose("Destroying previous dropdown", L),
                      C.remove.tabbable(),
                      L.off(q).removeData(N),
                      B.off(q),
                      a.off(b),
                      C.disconnect.menuObserver(),
                      C.disconnect.selectObserver();
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((x = new MutationObserver(C.event.select.mutation)),
                      (w = new MutationObserver(C.event.menu.mutation)),
                      C.debug("Setting up mutation observer", x, w),
                      C.observe.select(),
                      C.observe.menu());
                  },
                  disconnect: {
                    menuObserver: function() {
                      w && w.disconnect();
                    },
                    selectObserver: function() {
                      x && x.disconnect();
                    }
                  },
                  observe: {
                    select: function() {
                      C.has.input() &&
                        x.observe(L[0], { childList: !0, subtree: !0 });
                    },
                    menu: function() {
                      C.has.menu() &&
                        w.observe(B[0], { childList: !0, subtree: !0 });
                    }
                  },
                  create: {
                    id: function() {
                      (y = (Math.random().toString(16) + "000000000").substr(
                        2,
                        8
                      )),
                        (b = "." + y),
                        C.verbose("Creating unique id for element", y);
                    },
                    userChoice: function(t) {
                      var n, i, o;
                      return (
                        !!(t = t || C.get.userValues()) &&
                        ((t = e.isArray(t) ? t : [t]),
                        e.each(t, function(t, r) {
                          !1 === C.get.item(r) &&
                            ((o = k.templates.addition(
                              C.add.variables(T.addResult, r)
                            )),
                            (i = e("<div />")
                              .html(o)
                              .attr("data-" + R.value, r)
                              .attr("data-" + R.text, r)
                              .addClass(S.addition)
                              .addClass(S.item)),
                            k.hideAdditions && i.addClass(S.hidden),
                            (n = void 0 === n ? i : n.add(i)),
                            C.verbose("Creating user choices for value", r, i));
                        }),
                        n)
                      );
                    },
                    userLabels: function(t) {
                      var n = C.get.userValues();
                      n &&
                        (C.debug("Adding user labels", n),
                        e.each(n, function(e, t) {
                          C.verbose("Adding custom user value"),
                            C.add.label(t, t);
                        }));
                    },
                    menu: function() {
                      B = e("<div />")
                        .addClass(S.menu)
                        .appendTo(L);
                    },
                    sizer: function() {
                      H = e("<span />")
                        .addClass(S.sizer)
                        .insertAfter(z);
                    }
                  },
                  search: function(e) {
                    (e = void 0 !== e ? e : C.get.query()),
                      C.verbose("Searching for query", e),
                      C.has.minCharacters(e) ? C.filter(e) : C.hide();
                  },
                  select: {
                    firstUnfiltered: function() {
                      C.verbose("Selecting first non-filtered element"),
                        C.remove.selectedItem(),
                        _.not(O.unselectable)
                          .not(O.addition + O.hidden)
                          .eq(0)
                          .addClass(S.selected);
                    },
                    nextAvailable: function(e) {
                      var t = (e = e.eq(0))
                          .nextAll(O.item)
                          .not(O.unselectable)
                          .eq(0),
                        n = e
                          .prevAll(O.item)
                          .not(O.unselectable)
                          .eq(0);
                      t.length > 0
                        ? (C.verbose("Moving selection to", t),
                          t.addClass(S.selected))
                        : (C.verbose("Moving selection to", n),
                          n.addClass(S.selected));
                    }
                  },
                  setup: {
                    api: function() {
                      var e = {
                        debug: k.debug,
                        urlData: { value: C.get.value(), query: C.get.query() },
                        on: !1
                      };
                      C.verbose("First request, initializing API"), L.api(e);
                    },
                    layout: function() {
                      L.is("select") &&
                        (C.setup.select(), C.setup.returnedObject()),
                        C.has.menu() || C.create.menu(),
                        C.is.search() &&
                          !C.has.search() &&
                          (C.verbose("Adding search input"),
                          (z = e("<input />")
                            .addClass(S.search)
                            .prop("autocomplete", "off")
                            .insertBefore(I))),
                        C.is.multiple() &&
                          C.is.searchSelection() &&
                          !C.has.sizer() &&
                          C.create.sizer(),
                        k.allowTab && C.set.tabbable();
                    },
                    select: function() {
                      var t = C.get.selectValues();
                      C.debug("Dropdown initialized on a select", t),
                        L.is("select") && (V = L),
                        V.parent(O.dropdown).length > 0
                          ? (C.debug(
                              "UI dropdown already exists. Creating dropdown menu only"
                            ),
                            (L = V.closest(O.dropdown)),
                            C.has.menu() || C.create.menu(),
                            (B = L.children(O.menu)),
                            C.setup.menu(t))
                          : (C.debug("Creating entire dropdown from select"),
                            (L = e("<div />")
                              .attr("class", V.attr("class"))
                              .addClass(S.selection)
                              .addClass(S.dropdown)
                              .html(F.dropdown(t))
                              .insertBefore(V)),
                            V.hasClass(S.multiple) &&
                              !1 === V.prop("multiple") &&
                              (C.error(j.missingMultiple),
                              V.prop("multiple", !0)),
                            V.is("[multiple]") && C.set.multiple(),
                            V.prop("disabled") &&
                              (C.debug("Disabling dropdown"),
                              L.addClass(S.disabled)),
                            V.removeAttr("class")
                              .detach()
                              .prependTo(L)),
                        C.refresh();
                    },
                    menu: function(e) {
                      B.html(F.menu(e, A)), (_ = B.find(O.item));
                    },
                    reference: function() {
                      C.debug(
                        "Dropdown behavior was called on select, replacing with closest dropdown"
                      ),
                        (L = L.parent(O.dropdown)),
                        (G = L.data(N)),
                        (Y = L.get(0)),
                        C.refresh(),
                        C.setup.returnedObject();
                    },
                    returnedObject: function() {
                      var e = r.slice(0, h),
                        t = r.slice(h + 1);
                      r = e.add(L).add(t);
                    }
                  },
                  refresh: function() {
                    C.refreshSelectors(), C.refreshData();
                  },
                  refreshItems: function() {
                    _ = B.find(O.item);
                  },
                  refreshSelectors: function() {
                    C.verbose("Refreshing selector cache"),
                      (I = L.find(O.text)),
                      (z = L.find(O.search)),
                      (V = L.find(O.input)),
                      (U = L.find(O.icon)),
                      (W =
                        L.prev().find(O.text).length > 0
                          ? L.prev().find(O.text)
                          : L.prev()),
                      (B = L.children(O.menu)),
                      (_ = B.find(O.item));
                  },
                  refreshData: function() {
                    C.verbose("Refreshing cached metadata"),
                      _.removeData(R.text).removeData(R.value);
                  },
                  clearData: function() {
                    C.verbose("Clearing metadata"),
                      _.removeData(R.text).removeData(R.value),
                      L.removeData(R.defaultText)
                        .removeData(R.defaultValue)
                        .removeData(R.placeholderText);
                  },
                  toggle: function() {
                    C.verbose("Toggling menu visibility"),
                      C.is.active() ? C.hide() : C.show();
                  },
                  show: function(t) {
                    if (
                      ((t = e.isFunction(t) ? t : function() {}),
                      !C.can.show() &&
                        C.is.remote() &&
                        (C.debug(
                          "No API results retrieved, searching before show"
                        ),
                        C.queryRemote(C.get.query(), C.show)),
                      C.can.show() && !C.is.active())
                    ) {
                      if (
                        (C.debug("Showing dropdown"),
                        !C.has.message() ||
                          C.has.maxSelections() ||
                          C.has.allResultsFiltered() ||
                          C.remove.message(),
                        C.is.allFiltered())
                      )
                        return !0;
                      !1 !== k.onShow.call(Y) &&
                        C.animate.show(function() {
                          C.can.click() && C.bind.intent(),
                            C.has.menuSearch() && C.focusSearch(),
                            C.set.visible(),
                            t.call(Y);
                        });
                    }
                  },
                  hide: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      C.is.active() &&
                        !C.is.animatingOutward() &&
                        (C.debug("Hiding dropdown"),
                        !1 !== k.onHide.call(Y) &&
                          C.animate.hide(function() {
                            C.remove.visible(), t.call(Y);
                          }));
                  },
                  hideOthers: function() {
                    C.verbose("Finding other dropdowns to hide"),
                      r
                        .not(L)
                        .has(O.menu + "." + S.visible)
                        .dropdown("hide");
                  },
                  hideMenu: function() {
                    C.verbose("Hiding menu  instantaneously"),
                      C.remove.active(),
                      C.remove.visible(),
                      B.transition("hide");
                  },
                  hideSubMenus: function() {
                    var e = B.children(O.item).find(O.menu);
                    C.verbose("Hiding sub menus", e), e.transition("hide");
                  },
                  bind: {
                    events: function() {
                      l && C.bind.touchEvents(),
                        C.bind.keyboardEvents(),
                        C.bind.inputEvents(),
                        C.bind.mouseEvents();
                    },
                    touchEvents: function() {
                      C.debug(
                        "Touch device detected binding additional touch events"
                      ),
                        C.is.searchSelection() ||
                          (C.is.single() &&
                            L.on("touchstart" + q, C.event.test.toggle)),
                        B.on("touchstart" + q, O.item, C.event.item.mouseenter);
                    },
                    keyboardEvents: function() {
                      C.verbose("Binding keyboard events"),
                        L.on("keydown" + q, C.event.keydown),
                        C.has.search() &&
                          L.on(C.get.inputEvent() + q, O.search, C.event.input),
                        C.is.multiple() &&
                          a.on("keydown" + b, C.event.document.keydown);
                    },
                    inputEvents: function() {
                      C.verbose("Binding input change events"),
                        L.on("change" + q, O.input, C.event.change);
                    },
                    mouseEvents: function() {
                      C.verbose("Binding mouse events"),
                        C.is.multiple() &&
                          L.on("click" + q, O.label, C.event.label.click).on(
                            "click" + q,
                            O.remove,
                            C.event.remove.click
                          ),
                        C.is.searchSelection()
                          ? (L.on("mousedown" + q, C.event.mousedown)
                              .on("mouseup" + q, C.event.mouseup)
                              .on(
                                "mousedown" + q,
                                O.menu,
                                C.event.menu.mousedown
                              )
                              .on("mouseup" + q, O.menu, C.event.menu.mouseup)
                              .on("click" + q, O.icon, C.event.icon.click)
                              .on("focus" + q, O.search, C.event.search.focus)
                              .on("click" + q, O.search, C.event.search.focus)
                              .on("blur" + q, O.search, C.event.search.blur)
                              .on("click" + q, O.text, C.event.text.focus),
                            C.is.multiple() && L.on("click" + q, C.event.click))
                          : ("click" == k.on
                              ? L.on(
                                  "click" + q,
                                  O.icon,
                                  C.event.icon.click
                                ).on("click" + q, C.event.test.toggle)
                              : "hover" == k.on
                                ? L.on("mouseenter" + q, C.delay.show).on(
                                    "mouseleave" + q,
                                    C.delay.hide
                                  )
                                : L.on(k.on + q, C.toggle),
                            L.on("mousedown" + q, C.event.mousedown)
                              .on("mouseup" + q, C.event.mouseup)
                              .on("focus" + q, C.event.focus),
                            C.has.menuSearch()
                              ? L.on("blur" + q, O.search, C.event.search.blur)
                              : L.on("blur" + q, C.event.blur)),
                        B.on("mouseenter" + q, O.item, C.event.item.mouseenter)
                          .on("mouseleave" + q, O.item, C.event.item.mouseleave)
                          .on("click" + q, O.item, C.event.item.click);
                    },
                    intent: function() {
                      C.verbose("Binding hide intent event to document"),
                        l &&
                          a
                            .on("touchstart" + b, C.event.test.touch)
                            .on("touchmove" + b, C.event.test.touch),
                        a.on("click" + b, C.event.test.hide);
                    }
                  },
                  unbind: {
                    intent: function() {
                      C.verbose("Removing hide intent event from document"),
                        l && a.off("touchstart" + b).off("touchmove" + b),
                        a.off("click" + b);
                    }
                  },
                  filter: function(e) {
                    var t = void 0 !== e ? e : C.get.query(),
                      n = function() {
                        C.is.multiple() && C.filterActive(),
                          (e || (!e && 0 == C.get.activeItem().length)) &&
                            C.select.firstUnfiltered(),
                          C.has.allResultsFiltered()
                            ? k.onNoResults.call(Y, t)
                              ? k.allowAdditions
                                ? k.hideAdditions &&
                                  (C.verbose(
                                    "User addition with no menu, setting empty style"
                                  ),
                                  C.set.empty(),
                                  C.hideMenu())
                                : (C.verbose(
                                    "All items filtered, showing message",
                                    t
                                  ),
                                  C.add.message(T.noResults))
                              : (C.verbose(
                                  "All items filtered, hiding dropdown",
                                  t
                                ),
                                C.hideMenu())
                            : (C.remove.empty(), C.remove.message()),
                          k.allowAdditions && C.add.userSuggestion(e),
                          C.is.searchSelection() &&
                            C.can.show() &&
                            C.is.focusedOnSearch() &&
                            C.show();
                      };
                    (k.useLabels && C.has.maxSelections()) ||
                      (k.apiSettings
                        ? C.can.useAPI()
                          ? C.queryRemote(t, function() {
                              k.filterRemoteData && C.filterItems(t), n();
                            })
                          : C.error(j.noAPI)
                        : (C.filterItems(t), n()));
                  },
                  queryRemote: function(t, n) {
                    var i = {
                      errorDuration: !1,
                      cache: "local",
                      throttle: k.throttle,
                      urlData: { query: t },
                      onError: function() {
                        C.add.message(T.serverError), n();
                      },
                      onFailure: function() {
                        C.add.message(T.serverError), n();
                      },
                      onSuccess: function(e) {
                        C.remove.message(),
                          C.setup.menu({ values: e[A.remoteValues] }),
                          n();
                      }
                    };
                    L.api("get request") || C.setup.api(),
                      (i = e.extend(!0, {}, i, k.apiSettings)),
                      L.api("setting", i).api("query");
                  },
                  filterItems: function(t) {
                    var n = void 0 !== t ? t : C.get.query(),
                      i = null,
                      o = C.escape.string(n),
                      r = new RegExp("^" + o, "igm");
                    C.has.query() &&
                      ((i = []),
                      C.verbose("Searching for matching values", n),
                      _.each(function() {
                        var t,
                          o,
                          a = e(this);
                        if ("both" == k.match || "text" == k.match) {
                          if (
                            -1 !==
                            (t = String(C.get.choiceText(a, !1))).search(r)
                          )
                            return i.push(this), !0;
                          if (
                            "exact" === k.fullTextSearch &&
                            C.exactSearch(n, t)
                          )
                            return i.push(this), !0;
                          if (!0 === k.fullTextSearch && C.fuzzySearch(n, t))
                            return i.push(this), !0;
                        }
                        if ("both" == k.match || "value" == k.match) {
                          if (
                            -1 !==
                            (o = String(C.get.choiceValue(a, t))).search(r)
                          )
                            return i.push(this), !0;
                          if (
                            "exact" === k.fullTextSearch &&
                            C.exactSearch(n, o)
                          )
                            return i.push(this), !0;
                          if (!0 === k.fullTextSearch && C.fuzzySearch(n, o))
                            return i.push(this), !0;
                        }
                      })),
                      C.debug("Showing only matched items", n),
                      C.remove.filteredItem(),
                      i && _.not(i).addClass(S.filtered);
                  },
                  fuzzySearch: function(e, t) {
                    var n = t.length,
                      i = e.length;
                    if (((e = e.toLowerCase()), (t = t.toLowerCase()), i > n))
                      return !1;
                    if (i === n) return e === t;
                    e: for (var o = 0, r = 0; o < i; o++) {
                      for (var a = e.charCodeAt(o); r < n; )
                        if (t.charCodeAt(r++) === a) continue e;
                      return !1;
                    }
                    return !0;
                  },
                  exactSearch: function(e, t) {
                    return (
                      (e = e.toLowerCase()),
                      (t = t.toLowerCase()).indexOf(e) > -1
                    );
                  },
                  filterActive: function() {
                    k.useLabels &&
                      _.filter("." + S.active).addClass(S.filtered);
                  },
                  focusSearch: function(e) {
                    C.has.search() &&
                      !C.is.focusedOnSearch() &&
                      (e
                        ? (L.off("focus" + q, O.search),
                          z.focus(),
                          L.on("focus" + q, O.search, C.event.search.focus))
                        : z.focus());
                  },
                  forceSelection: function() {
                    var e = _.not(S.filtered)
                        .filter("." + S.selected)
                        .eq(0),
                      t = _.not(S.filtered)
                        .filter("." + S.active)
                        .eq(0),
                      n = e.length > 0 ? e : t;
                    if (n.length > 0 && !C.is.multiple())
                      return (
                        C.debug(
                          "Forcing partial selection to selected item",
                          n
                        ),
                        void C.event.item.click.call(n, {}, !0)
                      );
                    k.allowAdditions
                      ? (C.set.selected(C.get.query()), C.remove.searchTerm())
                      : C.remove.searchTerm();
                  },
                  change: {
                    values: function(t) {
                      k.allowAdditions || C.clear(),
                        C.debug("Creating dropdown with specified values", t),
                        C.setup.menu({ values: t }),
                        e.each(t, function(e, t) {
                          if (1 == t.selected)
                            return (
                              C.debug("Setting initial selection to", t.value),
                              C.set.selected(t.value),
                              !0
                            );
                        });
                    }
                  },
                  event: {
                    change: function() {
                      Q ||
                        (C.debug("Input changed, updating selection"),
                        C.set.selected());
                    },
                    focus: function() {
                      k.showOnFocus && !$ && C.is.hidden() && !g && C.show();
                    },
                    blur: function(e) {
                      (g = n.activeElement === this),
                        $ || g || (C.remove.activeLabel(), C.hide());
                    },
                    mousedown: function() {
                      C.is.searchSelection() ? (v = !0) : ($ = !0);
                    },
                    mouseup: function() {
                      C.is.searchSelection() ? (v = !1) : ($ = !1);
                    },
                    click: function(t) {
                      e(t.target).is(L) &&
                        (C.is.focusedOnSearch() ? C.show() : C.focusSearch());
                    },
                    search: {
                      focus: function() {
                        ($ = !0),
                          C.is.multiple() && C.remove.activeLabel(),
                          k.showOnFocus && C.search();
                      },
                      blur: function(e) {
                        (g = n.activeElement === this),
                          C.is.searchSelection() &&
                            !v &&
                            (X ||
                              g ||
                              (k.forceSelection && C.forceSelection(),
                              C.hide())),
                          (v = !1);
                      }
                    },
                    icon: {
                      click: function(e) {
                        C.toggle();
                      }
                    },
                    text: {
                      focus: function(e) {
                        ($ = !0), C.focusSearch();
                      }
                    },
                    input: function(e) {
                      (C.is.multiple() || C.is.searchSelection()) &&
                        C.set.filtered(),
                        clearTimeout(C.timer),
                        (C.timer = setTimeout(C.search, k.delay.search));
                    },
                    label: {
                      click: function(t) {
                        var n = e(this),
                          i = L.find(O.label),
                          o = i.filter("." + S.active),
                          r = n.nextAll("." + S.active),
                          a = n.prevAll("." + S.active),
                          s =
                            r.length > 0
                              ? n
                                  .nextUntil(r)
                                  .add(o)
                                  .add(n)
                              : n
                                  .prevUntil(a)
                                  .add(o)
                                  .add(n);
                        t.shiftKey
                          ? (o.removeClass(S.active), s.addClass(S.active))
                          : t.ctrlKey
                            ? n.toggleClass(S.active)
                            : (o.removeClass(S.active), n.addClass(S.active)),
                          k.onLabelSelect.apply(this, i.filter("." + S.active));
                      }
                    },
                    remove: {
                      click: function() {
                        var t = e(this).parent();
                        t.hasClass(S.active)
                          ? C.remove.activeLabels()
                          : C.remove.activeLabels(t);
                      }
                    },
                    test: {
                      toggle: function(e) {
                        var t = C.is.multiple() ? C.show : C.toggle;
                        C.is.bubbledLabelClick(e) ||
                          C.is.bubbledIconClick(e) ||
                          (C.determine.eventOnElement(e, t) &&
                            e.preventDefault());
                      },
                      touch: function(e) {
                        C.determine.eventOnElement(e, function() {
                          "touchstart" == e.type
                            ? (C.timer = setTimeout(function() {
                                C.hide();
                              }, k.delay.touch))
                            : "touchmove" == e.type && clearTimeout(C.timer);
                        }),
                          e.stopPropagation();
                      },
                      hide: function(e) {
                        C.determine.eventInModule(e, C.hide);
                      }
                    },
                    select: {
                      mutation: function(t) {
                        C.debug("<select> modified, recreating menu");
                        var n = !1;
                        e.each(t, function(t, i) {
                          if (
                            e(i.target).is("select") ||
                            e(i.addedNodes).is("select")
                          )
                            return (n = !0), !0;
                        }),
                          n &&
                            (C.disconnect.selectObserver(),
                            C.refresh(),
                            C.setup.select(),
                            C.set.selected(),
                            C.observe.select());
                      }
                    },
                    menu: {
                      mutation: function(t) {
                        var n = t[0],
                          i = n.addedNodes ? e(n.addedNodes[0]) : e(!1),
                          o = n.removedNodes ? e(n.removedNodes[0]) : e(!1),
                          r = i.add(o),
                          a =
                            r.is(O.addition) ||
                            r.closest(O.addition).length > 0,
                          s =
                            r.is(O.message) || r.closest(O.message).length > 0;
                        a || s
                          ? (C.debug("Updating item selector cache"),
                            C.refreshItems())
                          : (C.debug("Menu modified, updating selector cache"),
                            C.refresh());
                      },
                      mousedown: function() {
                        X = !0;
                      },
                      mouseup: function() {
                        X = !1;
                      }
                    },
                    item: {
                      mouseenter: function(t) {
                        var n = e(t.target),
                          i = e(this),
                          o = i.children(O.menu),
                          r = i.siblings(O.item).children(O.menu),
                          a = o.length > 0;
                        !(o.find(n).length > 0) &&
                          a &&
                          (clearTimeout(C.itemTimer),
                          (C.itemTimer = setTimeout(function() {
                            C.verbose("Showing sub-menu", o),
                              e.each(r, function() {
                                C.animate.hide(!1, e(this));
                              }),
                              C.animate.show(!1, o);
                          }, k.delay.show)),
                          t.preventDefault());
                      },
                      mouseleave: function(t) {
                        var n = e(this).children(O.menu);
                        n.length > 0 &&
                          (clearTimeout(C.itemTimer),
                          (C.itemTimer = setTimeout(function() {
                            C.verbose("Hiding sub-menu", n),
                              C.animate.hide(!1, n);
                          }, k.delay.hide)));
                      },
                      click: function(t, i) {
                        var o = e(this),
                          r = e(t ? t.target : ""),
                          a = o.find(O.menu),
                          s = C.get.choiceText(o),
                          l = C.get.choiceValue(o, s),
                          c = a.length > 0,
                          u = a.find(r).length > 0;
                        C.has.menuSearch() && e(n.activeElement).blur(),
                          u ||
                            (c && !k.allowCategorySelection) ||
                            (C.is.searchSelection() &&
                              (k.allowAdditions && C.remove.userAddition(),
                              C.remove.searchTerm(),
                              C.is.focusedOnSearch() ||
                                1 == i ||
                                C.focusSearch(!0)),
                            k.useLabels ||
                              (C.remove.filteredItem(),
                              C.set.scrollPosition(o)),
                            C.determine.selectAction.call(this, s, l));
                      }
                    },
                    document: {
                      keydown: function(e) {
                        var t = e.which;
                        if (C.is.inObject(t, E)) {
                          var n = L.find(O.label),
                            i = n.filter("." + S.active),
                            o = (i.data(R.value), n.index(i)),
                            r = n.length,
                            a = i.length > 0,
                            s = i.length > 1,
                            l = 0 === o,
                            c = o + 1 == r,
                            u = C.is.searchSelection(),
                            d = C.is.focusedOnSearch(),
                            f = C.is.focused(),
                            p = d && 0 === C.get.caretPosition();
                          if (u && !a && !d) return;
                          t == E.leftArrow
                            ? (!f && !p) || a
                              ? a &&
                                (e.shiftKey
                                  ? C.verbose(
                                      "Adding previous label to selection"
                                    )
                                  : (C.verbose("Selecting previous label"),
                                    n.removeClass(S.active)),
                                l && !s
                                  ? i.addClass(S.active)
                                  : i
                                      .prev(O.siblingLabel)
                                      .addClass(S.active)
                                      .end(),
                                e.preventDefault())
                              : (C.verbose("Selecting previous label"),
                                n.last().addClass(S.active))
                            : t == E.rightArrow
                              ? (f && !a && n.first().addClass(S.active),
                                a &&
                                  (e.shiftKey
                                    ? C.verbose(
                                        "Adding next label to selection"
                                      )
                                    : (C.verbose("Selecting next label"),
                                      n.removeClass(S.active)),
                                  c
                                    ? u
                                      ? d
                                        ? n.removeClass(S.active)
                                        : C.focusSearch()
                                      : s
                                        ? i
                                            .next(O.siblingLabel)
                                            .addClass(S.active)
                                        : i.addClass(S.active)
                                    : i.next(O.siblingLabel).addClass(S.active),
                                  e.preventDefault()))
                              : t == E.deleteKey || t == E.backspace
                                ? a
                                  ? (C.verbose("Removing active labels"),
                                    c && u && !d && C.focusSearch(),
                                    i
                                      .last()
                                      .next(O.siblingLabel)
                                      .addClass(S.active),
                                    C.remove.activeLabels(i),
                                    e.preventDefault())
                                  : p &&
                                    !a &&
                                    t == E.backspace &&
                                    (C.verbose(
                                      "Removing last label on input backspace"
                                    ),
                                    (i = n.last().addClass(S.active)),
                                    C.remove.activeLabels(i))
                                : i.removeClass(S.active);
                        }
                      }
                    },
                    keydown: function(e) {
                      var t = e.which;
                      if (C.is.inObject(t, E)) {
                        var n,
                          i = _.not(O.unselectable)
                            .filter("." + S.selected)
                            .eq(0),
                          o = B.children("." + S.active).eq(0),
                          r = i.length > 0 ? i : o,
                          a =
                            r.length > 0
                              ? r
                                  .siblings(":not(." + S.filtered + ")")
                                  .addBack()
                              : B.children(":not(." + S.filtered + ")"),
                          s = r.children(O.menu),
                          l = r.closest(O.menu),
                          c =
                            l.hasClass(S.visible) ||
                            l.hasClass(S.animating) ||
                            l.parent(O.menu).length > 0,
                          u = s.length > 0,
                          d = r.length > 0,
                          f = r.not(O.unselectable).length > 0,
                          p =
                            t == E.delimiter &&
                            k.allowAdditions &&
                            C.is.multiple();
                        if (
                          (k.allowAdditions &&
                            k.hideAdditions &&
                            (t == E.enter || p) &&
                            f &&
                            (C.verbose(
                              "Selecting item from keyboard shortcut",
                              r
                            ),
                            C.event.item.click.call(r, e),
                            C.is.searchSelection() && C.remove.searchTerm()),
                          C.is.visible())
                        ) {
                          if (
                            ((t == E.enter || p) &&
                              (t == E.enter &&
                              d &&
                              u &&
                              !k.allowCategorySelection
                                ? (C.verbose(
                                    "Pressed enter on unselectable category, opening sub menu"
                                  ),
                                  (t = E.rightArrow))
                                : f &&
                                  (C.verbose(
                                    "Selecting item from keyboard shortcut",
                                    r
                                  ),
                                  C.event.item.click.call(r, e),
                                  C.is.searchSelection() &&
                                    C.remove.searchTerm()),
                              e.preventDefault()),
                            d &&
                              (t == E.leftArrow &&
                                l[0] !== B[0] &&
                                (C.verbose(
                                  "Left key pressed, closing sub-menu"
                                ),
                                C.animate.hide(!1, l),
                                r.removeClass(S.selected),
                                l.closest(O.item).addClass(S.selected),
                                e.preventDefault()),
                              t == E.rightArrow &&
                                u &&
                                (C.verbose(
                                  "Right key pressed, opening sub-menu"
                                ),
                                C.animate.show(!1, s),
                                r.removeClass(S.selected),
                                s
                                  .find(O.item)
                                  .eq(0)
                                  .addClass(S.selected),
                                e.preventDefault())),
                            t == E.upArrow)
                          ) {
                            if (
                              ((n =
                                d && c
                                  ? r
                                      .prevAll(
                                        O.item + ":not(" + O.unselectable + ")"
                                      )
                                      .eq(0)
                                  : _.eq(0)),
                              a.index(n) < 0)
                            )
                              return (
                                C.verbose(
                                  "Up key pressed but reached top of current menu"
                                ),
                                void e.preventDefault()
                              );
                            C.verbose("Up key pressed, changing active item"),
                              r.removeClass(S.selected),
                              n.addClass(S.selected),
                              C.set.scrollPosition(n),
                              k.selectOnKeydown &&
                                C.is.single() &&
                                C.set.selectedItem(n),
                              e.preventDefault();
                          }
                          if (t == E.downArrow) {
                            if (
                              0 ===
                              (n =
                                d && c
                                  ? (n = r
                                      .nextAll(
                                        O.item + ":not(" + O.unselectable + ")"
                                      )
                                      .eq(0))
                                  : _.eq(0)).length
                            )
                              return (
                                C.verbose(
                                  "Down key pressed but reached bottom of current menu"
                                ),
                                void e.preventDefault()
                              );
                            C.verbose("Down key pressed, changing active item"),
                              _.removeClass(S.selected),
                              n.addClass(S.selected),
                              C.set.scrollPosition(n),
                              k.selectOnKeydown &&
                                C.is.single() &&
                                C.set.selectedItem(n),
                              e.preventDefault();
                          }
                          t == E.pageUp &&
                            (C.scrollPage("up"), e.preventDefault()),
                            t == E.pageDown &&
                              (C.scrollPage("down"), e.preventDefault()),
                            t == E.escape &&
                              (C.verbose(
                                "Escape key pressed, closing dropdown"
                              ),
                              C.hide());
                        } else
                          p && e.preventDefault(),
                            t != E.downArrow ||
                              C.is.visible() ||
                              (C.verbose("Down key pressed, showing dropdown"),
                              C.show(),
                              e.preventDefault());
                      } else
                        C.has.search() ||
                          C.set.selectedLetter(String.fromCharCode(t));
                    }
                  },
                  trigger: {
                    change: function() {
                      var e = n.createEvent("HTMLEvents"),
                        t = V[0];
                      t &&
                        (C.verbose("Triggering native change event"),
                        e.initEvent("change", !0, !1),
                        t.dispatchEvent(e));
                    }
                  },
                  determine: {
                    selectAction: function(t, n) {
                      C.verbose("Determining action", k.action),
                        e.isFunction(C.action[k.action])
                          ? (C.verbose(
                              "Triggering preset action",
                              k.action,
                              t,
                              n
                            ),
                            C.action[k.action].call(Y, t, n, this))
                          : e.isFunction(k.action)
                            ? (C.verbose(
                                "Triggering user action",
                                k.action,
                                t,
                                n
                              ),
                              k.action.call(Y, t, n, this))
                            : C.error(j.action, k.action);
                    },
                    eventInModule: function(t, i) {
                      var o = e(t.target),
                        r = o.closest(n.documentElement).length > 0,
                        a = o.closest(L).length > 0;
                      return (
                        (i = e.isFunction(i) ? i : function() {}),
                        r && !a
                          ? (C.verbose("Triggering event", i), i(), !0)
                          : (C.verbose(
                              "Event occurred in dropdown, canceling callback"
                            ),
                            !1)
                      );
                    },
                    eventOnElement: function(t, i) {
                      var o = e(t.target),
                        r = o.closest(O.siblingLabel),
                        a = n.body.contains(t.target),
                        s = 0 === L.find(r).length,
                        l = 0 === o.closest(B).length;
                      return (
                        (i = e.isFunction(i) ? i : function() {}),
                        a && s && l
                          ? (C.verbose("Triggering event", i), i(), !0)
                          : (C.verbose(
                              "Event occurred in dropdown menu, canceling callback"
                            ),
                            !1)
                      );
                    }
                  },
                  action: {
                    nothing: function() {},
                    activate: function(t, n, i) {
                      if (((n = void 0 !== n ? n : t), C.can.activate(e(i)))) {
                        if (
                          (C.set.selected(n, e(i)),
                          C.is.multiple() && !C.is.allFiltered())
                        )
                          return;
                        C.hideAndClear();
                      }
                    },
                    select: function(t, n, i) {
                      if (((n = void 0 !== n ? n : t), C.can.activate(e(i)))) {
                        if (
                          (C.set.value(n, t, e(i)),
                          C.is.multiple() && !C.is.allFiltered())
                        )
                          return;
                        C.hideAndClear();
                      }
                    },
                    combo: function(t, n, i) {
                      (n = void 0 !== n ? n : t),
                        C.set.selected(n, e(i)),
                        C.hideAndClear();
                    },
                    hide: function(e, t, n) {
                      C.set.value(t, e), C.hideAndClear();
                    }
                  },
                  get: {
                    id: function() {
                      return y;
                    },
                    defaultText: function() {
                      return L.data(R.defaultText);
                    },
                    defaultValue: function() {
                      return L.data(R.defaultValue);
                    },
                    placeholderText: function() {
                      return "auto" != k.placeholder &&
                        "string" == typeof k.placeholder
                        ? k.placeholder
                        : L.data(R.placeholderText) || "";
                    },
                    text: function() {
                      return I.text();
                    },
                    query: function() {
                      return e.trim(z.val());
                    },
                    searchWidth: function(e) {
                      return (
                        (e = void 0 !== e ? e : z.val()),
                        H.text(e),
                        Math.ceil(H.width() + 1)
                      );
                    },
                    selectionCount: function() {
                      var t = C.get.values();
                      return C.is.multiple()
                        ? e.isArray(t) ? t.length : 0
                        : "" !== C.get.value() ? 1 : 0;
                    },
                    transition: function(e) {
                      return "auto" == k.transition
                        ? C.is.upward(e) ? "slide up" : "slide down"
                        : k.transition;
                    },
                    userValues: function() {
                      var t = C.get.values();
                      return (
                        !!t &&
                        ((t = e.isArray(t) ? t : [t]),
                        e.grep(t, function(e) {
                          return !1 === C.get.item(e);
                        }))
                      );
                    },
                    uniqueArray: function(t) {
                      return e.grep(t, function(n, i) {
                        return e.inArray(n, t) === i;
                      });
                    },
                    caretPosition: function() {
                      var e,
                        t,
                        i = z.get(0);
                      return "selectionStart" in i
                        ? i.selectionStart
                        : n.selection
                          ? (i.focus(),
                            (t = (e = n.selection.createRange()).text.length),
                            e.moveStart("character", -i.value.length),
                            e.text.length - t)
                          : void 0;
                    },
                    value: function() {
                      var t = V.length > 0 ? V.val() : L.data(R.value),
                        n = e.isArray(t) && 1 === t.length && "" === t[0];
                      return void 0 === t || n ? "" : t;
                    },
                    values: function() {
                      var e = C.get.value();
                      return "" === e
                        ? ""
                        : !C.has.selectInput() && C.is.multiple()
                          ? "string" == typeof e ? e.split(k.delimiter) : ""
                          : e;
                    },
                    remoteValues: function() {
                      var t = C.get.values(),
                        n = !1;
                      return (
                        t &&
                          ("string" == typeof t && (t = [t]),
                          e.each(t, function(e, t) {
                            var i = C.read.remoteData(t);
                            C.verbose(
                              "Restoring value from session data",
                              i,
                              t
                            ),
                              i && (n || (n = {}), (n[t] = i));
                          })),
                        n
                      );
                    },
                    choiceText: function(t, n) {
                      if (((n = void 0 !== n ? n : k.preserveHTML), t))
                        return (
                          t.find(O.menu).length > 0 &&
                            (C.verbose(
                              "Retrieving text of element with sub-menu"
                            ),
                            (t = t.clone()).find(O.menu).remove(),
                            t.find(O.menuIcon).remove()),
                          void 0 !== t.data(R.text)
                            ? t.data(R.text)
                            : n ? e.trim(t.html()) : e.trim(t.text())
                        );
                    },
                    choiceValue: function(t, n) {
                      return (
                        (n = n || C.get.choiceText(t)),
                        !!t &&
                          (void 0 !== t.data(R.value)
                            ? String(t.data(R.value))
                            : "string" == typeof n
                              ? e.trim(n.toLowerCase())
                              : String(n))
                      );
                    },
                    inputEvent: function() {
                      var e = z[0];
                      return (
                        !!e &&
                        (void 0 !== e.oninput
                          ? "input"
                          : void 0 !== e.onpropertychange
                            ? "propertychange"
                            : "keyup")
                      );
                    },
                    selectValues: function() {
                      var t = { values: [] };
                      return (
                        L.find("option").each(function() {
                          var n = e(this),
                            i = n.html(),
                            o = n.attr("disabled"),
                            r =
                              void 0 !== n.attr("value") ? n.attr("value") : i;
                          "auto" === k.placeholder && "" === r
                            ? (t.placeholder = i)
                            : t.values.push({ name: i, value: r, disabled: o });
                        }),
                        k.placeholder &&
                          "auto" !== k.placeholder &&
                          (C.debug(
                            "Setting placeholder value to",
                            k.placeholder
                          ),
                          (t.placeholder = k.placeholder)),
                        k.sortSelect
                          ? (t.values.sort(function(e, t) {
                              return e.name > t.name ? 1 : -1;
                            }),
                            C.debug(
                              "Retrieved and sorted values from select",
                              t
                            ))
                          : C.debug("Retrieved values from select", t),
                        t
                      );
                    },
                    activeItem: function() {
                      return _.filter("." + S.active);
                    },
                    selectedItem: function() {
                      var e = _.not(O.unselectable).filter("." + S.selected);
                      return e.length > 0 ? e : _.eq(0);
                    },
                    itemWithAdditions: function(e) {
                      var t = C.get.item(e),
                        n = C.create.userChoice(e);
                      return (
                        n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n),
                        t
                      );
                    },
                    item: function(t, n) {
                      var i,
                        o,
                        r = !1;
                      return (
                        (t =
                          void 0 !== t
                            ? t
                            : void 0 !== C.get.values()
                              ? C.get.values()
                              : C.get.text()),
                        (i = o ? t.length > 0 : void 0 !== t && null !== t),
                        (o = C.is.multiple() && e.isArray(t)),
                        (n = "" === t || 0 === t || (n || !1)),
                        i &&
                          _.each(function() {
                            var i = e(this),
                              a = C.get.choiceText(i),
                              s = C.get.choiceValue(i, a);
                            if (null !== s && void 0 !== s)
                              if (o)
                                (-1 === e.inArray(String(s), t) &&
                                  -1 === e.inArray(a, t)) ||
                                  (r = r ? r.add(i) : i);
                              else if (n) {
                                if (
                                  (C.verbose(
                                    "Ambiguous dropdown value using strict type check",
                                    i,
                                    t
                                  ),
                                  s === t || a === t)
                                )
                                  return (r = i), !0;
                              } else if (String(s) == String(t) || a == t)
                                return (
                                  C.verbose("Found select item by value", s, t),
                                  (r = i),
                                  !0
                                );
                          }),
                        r
                      );
                    }
                  },
                  check: {
                    maxSelections: function(e) {
                      return (
                        !k.maxSelections ||
                        ((e = void 0 !== e ? e : C.get.selectionCount()) >=
                        k.maxSelections
                          ? (C.debug("Maximum selection count reached"),
                            k.useLabels &&
                              (_.addClass(S.filtered),
                              C.add.message(T.maxSelections)),
                            !0)
                          : (C.verbose("No longer at maximum selection count"),
                            C.remove.message(),
                            C.remove.filteredItem(),
                            C.is.searchSelection() && C.filterItems(),
                            !1))
                      );
                    }
                  },
                  restore: {
                    defaults: function() {
                      C.clear(),
                        C.restore.defaultText(),
                        C.restore.defaultValue();
                    },
                    defaultText: function() {
                      var e = C.get.defaultText();
                      e === C.get.placeholderText
                        ? (C.debug("Restoring default placeholder text", e),
                          C.set.placeholderText(e))
                        : (C.debug("Restoring default text", e), C.set.text(e));
                    },
                    placeholderText: function() {
                      C.set.placeholderText();
                    },
                    defaultValue: function() {
                      var e = C.get.defaultValue();
                      void 0 !== e &&
                        (C.debug("Restoring default value", e),
                        "" !== e
                          ? (C.set.value(e), C.set.selected())
                          : (C.remove.activeItem(), C.remove.selectedItem()));
                    },
                    labels: function() {
                      k.allowAdditions &&
                        (k.useLabels || (C.error(j.labels), (k.useLabels = !0)),
                        C.debug("Restoring selected values"),
                        C.create.userLabels()),
                        C.check.maxSelections();
                    },
                    selected: function() {
                      C.restore.values(),
                        C.is.multiple()
                          ? (C.debug(
                              "Restoring previously selected values and labels"
                            ),
                            C.restore.labels())
                          : C.debug("Restoring previously selected values");
                    },
                    values: function() {
                      C.set.initialLoad(),
                        k.apiSettings &&
                        k.saveRemoteData &&
                        C.get.remoteValues()
                          ? C.restore.remoteValues()
                          : C.set.selected(),
                        C.remove.initialLoad();
                    },
                    remoteValues: function() {
                      var t = C.get.remoteValues();
                      C.debug("Recreating selected from session data", t),
                        t &&
                          (C.is.single()
                            ? e.each(t, function(e, t) {
                                C.set.text(t);
                              })
                            : e.each(t, function(e, t) {
                                C.add.label(e, t);
                              }));
                    }
                  },
                  read: {
                    remoteData: function(e) {
                      var n;
                      if (void 0 !== t.Storage)
                        return void 0 !== (n = sessionStorage.getItem(e)) && n;
                      C.error(j.noStorage);
                    }
                  },
                  save: {
                    defaults: function() {
                      C.save.defaultText(),
                        C.save.placeholderText(),
                        C.save.defaultValue();
                    },
                    defaultValue: function() {
                      var e = C.get.value();
                      C.verbose("Saving default value as", e),
                        L.data(R.defaultValue, e);
                    },
                    defaultText: function() {
                      var e = C.get.text();
                      C.verbose("Saving default text as", e),
                        L.data(R.defaultText, e);
                    },
                    placeholderText: function() {
                      var e;
                      !1 !== k.placeholder &&
                        I.hasClass(S.placeholder) &&
                        ((e = C.get.text()),
                        C.verbose("Saving placeholder text as", e),
                        L.data(R.placeholderText, e));
                    },
                    remoteData: function(e, n) {
                      void 0 !== t.Storage
                        ? (C.verbose(
                            "Saving remote data to session storage",
                            n,
                            e
                          ),
                          sessionStorage.setItem(n, e))
                        : C.error(j.noStorage);
                    }
                  },
                  clear: function() {
                    C.is.multiple() && k.useLabels
                      ? C.remove.labels()
                      : (C.remove.activeItem(), C.remove.selectedItem()),
                      C.set.placeholderText(),
                      C.clearValue();
                  },
                  clearValue: function() {
                    C.set.value("");
                  },
                  scrollPage: function(e, t) {
                    var n,
                      i,
                      o = t || C.get.selectedItem(),
                      r = o.closest(O.menu),
                      a = r.outerHeight(),
                      s = r.scrollTop(),
                      l = _.eq(0).outerHeight(),
                      c = Math.floor(a / l),
                      u = (r.prop("scrollHeight"),
                      "up" == e ? s - l * c : s + l * c),
                      d = _.not(O.unselectable);
                    (i = "up" == e ? d.index(o) - c : d.index(o) + c),
                      (n = ("up" == e ? i >= 0 : i < d.length)
                        ? d.eq(i)
                        : "up" == e ? d.first() : d.last()).length > 0 &&
                        (C.debug("Scrolling page", e, n),
                        o.removeClass(S.selected),
                        n.addClass(S.selected),
                        k.selectOnKeydown &&
                          C.is.single() &&
                          C.set.selectedItem(n),
                        r.scrollTop(u));
                  },
                  set: {
                    filtered: function() {
                      var e = C.is.multiple(),
                        t = C.is.searchSelection(),
                        n = e && t,
                        i = t ? C.get.query() : "",
                        o = "string" == typeof i && i.length > 0,
                        r = C.get.searchWidth(),
                        a = "" !== i;
                      e &&
                        o &&
                        (C.verbose("Adjusting input width", r, k.glyphWidth),
                        z.css("width", r)),
                        o || (n && a)
                          ? (C.verbose("Hiding placeholder text"),
                            I.addClass(S.filtered))
                          : (!e || (n && !a)) &&
                            (C.verbose("Showing placeholder text"),
                            I.removeClass(S.filtered));
                    },
                    empty: function() {
                      L.addClass(S.empty);
                    },
                    loading: function() {
                      L.addClass(S.loading);
                    },
                    placeholderText: function(e) {
                      (e = e || C.get.placeholderText()),
                        C.debug("Setting placeholder text", e),
                        C.set.text(e),
                        I.addClass(S.placeholder);
                    },
                    tabbable: function() {
                      C.is.searchSelection()
                        ? (C.debug("Added tabindex to searchable dropdown"),
                          z.val("").attr("tabindex", 0),
                          B.attr("tabindex", -1))
                        : (C.debug("Added tabindex to dropdown"),
                          void 0 === L.attr("tabindex") &&
                            (L.attr("tabindex", 0), B.attr("tabindex", -1)));
                    },
                    initialLoad: function() {
                      C.verbose("Setting initial load"), (m = !0);
                    },
                    activeItem: function(e) {
                      k.allowAdditions && e.filter(O.addition).length > 0
                        ? e.addClass(S.filtered)
                        : e.addClass(S.active);
                    },
                    partialSearch: function(e) {
                      var t = C.get.query().length;
                      z.val(e.substr(0, t));
                    },
                    scrollPosition: function(e, t) {
                      var n, i, o, r, a, s;
                      (n = (e = e || C.get.selectedItem()).closest(O.menu)),
                        (i = e && e.length > 0),
                        (t = void 0 !== t && t),
                        e &&
                          n.length > 0 &&
                          i &&
                          (e.position().top,
                          n.addClass(S.loading),
                          (o =
                            (r = n.scrollTop()) -
                            n.offset().top +
                            e.offset().top),
                          t || ((s = r + n.height() < o + 5), (a = o - 5 < r)),
                          C.debug("Scrolling to active item", o),
                          (t || a || s) && n.scrollTop(o),
                          n.removeClass(S.loading));
                    },
                    text: function(e) {
                      "select" !== k.action &&
                        ("combo" == k.action
                          ? (C.debug("Changing combo button text", e, W),
                            k.preserveHTML ? W.html(e) : W.text(e))
                          : (e !== C.get.placeholderText() &&
                              I.removeClass(S.placeholder),
                            C.debug("Changing text", e, I),
                            I.removeClass(S.filtered),
                            k.preserveHTML ? I.html(e) : I.text(e)));
                    },
                    selectedItem: function(e) {
                      var t = C.get.choiceValue(e),
                        n = C.get.choiceText(e, !1),
                        i = C.get.choiceText(e, !0);
                      C.debug("Setting user selection to item", e),
                        C.remove.activeItem(),
                        C.set.partialSearch(n),
                        C.set.activeItem(e),
                        C.set.selected(t, e),
                        C.set.text(i);
                    },
                    selectedLetter: function(t) {
                      var n,
                        i = _.filter("." + S.selected),
                        o = !1;
                      i.length > 0 &&
                        C.has.firstLetter(i, t) &&
                        ((n = i.nextAll(_).eq(0)),
                        C.has.firstLetter(n, t) && (o = n)),
                        o ||
                          _.each(function() {
                            if (C.has.firstLetter(e(this), t))
                              return (o = e(this)), !1;
                          }),
                        o &&
                          (C.verbose("Scrolling to next value with letter", t),
                          C.set.scrollPosition(o),
                          i.removeClass(S.selected),
                          o.addClass(S.selected),
                          k.selectOnKeydown &&
                            C.is.single() &&
                            C.set.selectedItem(o));
                    },
                    direction: function(e) {
                      "auto" == k.direction
                        ? (C.remove.upward(),
                          C.can.openDownward(e)
                            ? C.remove.upward(e)
                            : C.set.upward(e),
                          C.is.leftward(e) ||
                            C.can.openRightward(e) ||
                            C.set.leftward(e))
                        : "upward" == k.direction && C.set.upward(e);
                    },
                    upward: function(e) {
                      (e || L).addClass(S.upward);
                    },
                    leftward: function(e) {
                      (e || B).addClass(S.leftward);
                    },
                    value: function(e, t, n) {
                      var i = C.escape.value(e),
                        o = V.length > 0,
                        r = C.get.values(),
                        a = void 0 !== e ? String(e) : e;
                      if (o) {
                        if (
                          !k.allowReselection &&
                          a == r &&
                          (C.verbose(
                            "Skipping value update already same value",
                            e,
                            r
                          ),
                          !C.is.initialLoad())
                        )
                          return;
                        C.is.single() &&
                          C.has.selectInput() &&
                          C.can.extendSelect() &&
                          (C.debug("Adding user option", e),
                          C.add.optionValue(e)),
                          C.debug("Updating input value", i, r),
                          (Q = !0),
                          V.val(i),
                          !1 === k.fireOnInit && C.is.initialLoad()
                            ? C.debug(
                                "Input native change event ignored on initial load"
                              )
                            : C.trigger.change(),
                          (Q = !1);
                      } else
                        C.verbose("Storing value in metadata", i, V),
                          i !== r && L.data(R.value, a);
                      !1 === k.fireOnInit && C.is.initialLoad()
                        ? C.verbose("No callback on initial load", k.onChange)
                        : k.onChange.call(Y, e, t, n);
                    },
                    active: function() {
                      L.addClass(S.active);
                    },
                    multiple: function() {
                      L.addClass(S.multiple);
                    },
                    visible: function() {
                      L.addClass(S.visible);
                    },
                    exactly: function(e, t) {
                      C.debug("Setting selected to exact values"),
                        C.clear(),
                        C.set.selected(e, t);
                    },
                    selected: function(t, n) {
                      var i = C.is.multiple();
                      (n = k.allowAdditions
                        ? n || C.get.itemWithAdditions(t)
                        : n || C.get.item(t)) &&
                        (C.debug("Setting selected menu item to", n),
                        C.is.multiple() && C.remove.searchWidth(),
                        C.is.single()
                          ? (C.remove.activeItem(), C.remove.selectedItem())
                          : k.useLabels && C.remove.selectedItem(),
                        n.each(function() {
                          var t = e(this),
                            o = C.get.choiceText(t),
                            r = C.get.choiceValue(t, o),
                            a = t.hasClass(S.filtered),
                            s = t.hasClass(S.active),
                            l = t.hasClass(S.addition),
                            c = i && 1 == n.length;
                          i
                            ? !s || l
                              ? (k.apiSettings &&
                                  k.saveRemoteData &&
                                  C.save.remoteData(o, r),
                                k.useLabels
                                  ? (C.add.label(r, o, c),
                                    C.add.value(r, o, t),
                                    C.set.activeItem(t),
                                    C.filterActive(),
                                    C.select.nextAvailable(n))
                                  : (C.add.value(r, o, t),
                                    C.set.text(C.add.variables(T.count)),
                                    C.set.activeItem(t)))
                              : a ||
                                (C.debug(
                                  "Selected active value, removing label"
                                ),
                                C.remove.selected(r))
                            : (k.apiSettings &&
                                k.saveRemoteData &&
                                C.save.remoteData(o, r),
                              C.set.text(o),
                              C.set.value(r, o, t),
                              t.addClass(S.active).addClass(S.selected));
                        }));
                    }
                  },
                  add: {
                    label: function(t, n, i) {
                      var o,
                        r = C.is.searchSelection() ? z : I,
                        a = C.escape.value(t);
                      k.ignoreCase && (a = a.toLowerCase()),
                        (o = e("<a />")
                          .addClass(S.label)
                          .attr("data-" + R.value, a)
                          .html(F.label(a, n))),
                        (o = k.onLabelCreate.call(o, a, n)),
                        C.has.label(t)
                          ? C.debug(
                              "User selection already exists, skipping",
                              a
                            )
                          : (k.label.variation && o.addClass(k.label.variation),
                            !0 === i
                              ? (C.debug("Animating in label", o),
                                o
                                  .addClass(S.hidden)
                                  .insertBefore(r)
                                  .transition(
                                    k.label.transition,
                                    k.label.duration
                                  ))
                              : (C.debug("Adding selection label", o),
                                o.insertBefore(r)));
                    },
                    message: function(t) {
                      var n = B.children(O.message),
                        i = k.templates.message(C.add.variables(t));
                      n.length > 0
                        ? n.html(i)
                        : (n = e("<div/>")
                            .html(i)
                            .addClass(S.message)
                            .appendTo(B));
                    },
                    optionValue: function(t) {
                      var n = C.escape.value(t);
                      V.find('option[value="' + C.escape.string(n) + '"]')
                        .length > 0 ||
                        (C.disconnect.selectObserver(),
                        C.is.single() &&
                          (C.verbose("Removing previous user addition"),
                          V.find("option." + S.addition).remove()),
                        e("<option/>")
                          .prop("value", n)
                          .addClass(S.addition)
                          .html(t)
                          .appendTo(V),
                        C.verbose("Adding user addition as an <option>", t),
                        C.observe.select());
                    },
                    userSuggestion: function(e) {
                      var t,
                        n = B.children(O.addition),
                        i = C.get.item(e),
                        o = i && i.not(O.addition).length,
                        r = n.length > 0;
                      (k.useLabels && C.has.maxSelections()) ||
                        ("" === e || o
                          ? n.remove()
                          : (r
                              ? (n
                                  .data(R.value, e)
                                  .data(R.text, e)
                                  .attr("data-" + R.value, e)
                                  .attr("data-" + R.text, e)
                                  .removeClass(S.filtered),
                                k.hideAdditions ||
                                  ((t = k.templates.addition(
                                    C.add.variables(T.addResult, e)
                                  )),
                                  n.html(t)),
                                C.verbose(
                                  "Replacing user suggestion with new value",
                                  n
                                ))
                              : ((n = C.create.userChoice(e)).prependTo(B),
                                C.verbose(
                                  "Adding item choice to menu corresponding with user choice addition",
                                  n
                                )),
                            (k.hideAdditions && !C.is.allFiltered()) ||
                              n
                                .addClass(S.selected)
                                .siblings()
                                .removeClass(S.selected),
                            C.refreshItems()));
                    },
                    variables: function(e, t) {
                      var n,
                        i,
                        o = -1 !== e.search("{count}"),
                        r = -1 !== e.search("{maxCount}"),
                        a = -1 !== e.search("{term}");
                      return (
                        C.verbose("Adding templated variables to message", e),
                        o &&
                          ((n = C.get.selectionCount()),
                          (e = e.replace("{count}", n))),
                        r &&
                          ((n = C.get.selectionCount()),
                          (e = e.replace("{maxCount}", k.maxSelections))),
                        a &&
                          ((i = t || C.get.query()),
                          (e = e.replace("{term}", i))),
                        e
                      );
                    },
                    value: function(t, n, i) {
                      var o,
                        r = C.get.values();
                      C.has.value(t)
                        ? C.debug("Value already selected")
                        : "" !== t
                          ? (e.isArray(r)
                              ? ((o = r.concat([t])),
                                (o = C.get.uniqueArray(o)))
                              : (o = [t]),
                            C.has.selectInput()
                              ? C.can.extendSelect() &&
                                (C.debug("Adding value to select", t, o, V),
                                C.add.optionValue(t))
                              : ((o = o.join(k.delimiter)),
                                C.debug(
                                  "Setting hidden input to delimited value",
                                  o,
                                  V
                                )),
                            !1 === k.fireOnInit && C.is.initialLoad()
                              ? C.verbose(
                                  "Skipping onadd callback on initial load",
                                  k.onAdd
                                )
                              : k.onAdd.call(Y, t, n, i),
                            C.set.value(o, t, n, i),
                            C.check.maxSelections())
                          : C.debug(
                              "Cannot select blank values from multiselect"
                            );
                    }
                  },
                  remove: {
                    active: function() {
                      L.removeClass(S.active);
                    },
                    activeLabel: function() {
                      L.find(O.label).removeClass(S.active);
                    },
                    empty: function() {
                      L.removeClass(S.empty);
                    },
                    loading: function() {
                      L.removeClass(S.loading);
                    },
                    initialLoad: function() {
                      m = !1;
                    },
                    upward: function(e) {
                      (e || L).removeClass(S.upward);
                    },
                    leftward: function(e) {
                      (e || B).removeClass(S.leftward);
                    },
                    visible: function() {
                      L.removeClass(S.visible);
                    },
                    activeItem: function() {
                      _.removeClass(S.active);
                    },
                    filteredItem: function() {
                      (k.useLabels && C.has.maxSelections()) ||
                        (k.useLabels && C.is.multiple()
                          ? _.not("." + S.active).removeClass(S.filtered)
                          : _.removeClass(S.filtered),
                        C.remove.empty());
                    },
                    optionValue: function(e) {
                      var t = C.escape.value(e),
                        n = V.find(
                          'option[value="' + C.escape.string(t) + '"]'
                        );
                      n.length > 0 &&
                        n.hasClass(S.addition) &&
                        (x &&
                          (x.disconnect(),
                          C.verbose(
                            "Temporarily disconnecting mutation observer"
                          )),
                        n.remove(),
                        C.verbose("Removing user addition as an <option>", t),
                        x && x.observe(V[0], { childList: !0, subtree: !0 }));
                    },
                    message: function() {
                      B.children(O.message).remove();
                    },
                    searchWidth: function() {
                      z.css("width", "");
                    },
                    searchTerm: function() {
                      C.verbose("Cleared search term"),
                        z.val(""),
                        C.set.filtered();
                    },
                    userAddition: function() {
                      _.filter(O.addition).remove();
                    },
                    selected: function(t, n) {
                      if (
                        !(n = k.allowAdditions
                          ? n || C.get.itemWithAdditions(t)
                          : n || C.get.item(t))
                      )
                        return !1;
                      n.each(function() {
                        var t = e(this),
                          n = C.get.choiceText(t),
                          i = C.get.choiceValue(t, n);
                        C.is.multiple()
                          ? k.useLabels
                            ? (C.remove.value(i, n, t), C.remove.label(i))
                            : (C.remove.value(i, n, t),
                              0 === C.get.selectionCount()
                                ? C.set.placeholderText()
                                : C.set.text(C.add.variables(T.count)))
                          : C.remove.value(i, n, t),
                          t.removeClass(S.filtered).removeClass(S.active),
                          k.useLabels && t.removeClass(S.selected);
                      });
                    },
                    selectedItem: function() {
                      _.removeClass(S.selected);
                    },
                    value: function(e, t, n) {
                      var i,
                        o = C.get.values();
                      C.has.selectInput()
                        ? (C.verbose(
                            "Input is <select> removing selected option",
                            e
                          ),
                          (i = C.remove.arrayValue(e, o)),
                          C.remove.optionValue(e))
                        : (C.verbose("Removing from delimited values", e),
                          (i = (i = C.remove.arrayValue(e, o)).join(
                            k.delimiter
                          ))),
                        !1 === k.fireOnInit && C.is.initialLoad()
                          ? C.verbose("No callback on initial load", k.onRemove)
                          : k.onRemove.call(Y, e, t, n),
                        C.set.value(i, t, n),
                        C.check.maxSelections();
                    },
                    arrayValue: function(t, n) {
                      return (
                        e.isArray(n) || (n = [n]),
                        (n = e.grep(n, function(e) {
                          return t != e;
                        })),
                        C.verbose("Removed value from delimited string", t, n),
                        n
                      );
                    },
                    label: function(e, t) {
                      var n = L.find(O.label).filter(
                        "[data-" + R.value + '="' + C.escape.string(e) + '"]'
                      );
                      C.verbose("Removing label", n), n.remove();
                    },
                    activeLabels: function(e) {
                      (e = e || L.find(O.label).filter("." + S.active)),
                        C.verbose("Removing active label selections", e),
                        C.remove.labels(e);
                    },
                    labels: function(t) {
                      (t = t || L.find(O.label)),
                        C.verbose("Removing labels", t),
                        t.each(function() {
                          var t = e(this),
                            n = t.data(R.value),
                            i = void 0 !== n ? String(n) : n,
                            o = C.is.userValue(i);
                          !1 !== k.onLabelRemove.call(t, n)
                            ? (C.remove.message(),
                              o
                                ? (C.remove.value(i), C.remove.label(i))
                                : C.remove.selected(i))
                            : C.debug(
                                "Label remove callback cancelled removal"
                              );
                        });
                    },
                    tabbable: function() {
                      C.is.searchSelection()
                        ? (C.debug("Searchable dropdown initialized"),
                          z.removeAttr("tabindex"),
                          B.removeAttr("tabindex"))
                        : (C.debug("Simple selection dropdown initialized"),
                          L.removeAttr("tabindex"),
                          B.removeAttr("tabindex"));
                    }
                  },
                  has: {
                    menuSearch: function() {
                      return C.has.search() && z.closest(B).length > 0;
                    },
                    search: function() {
                      return z.length > 0;
                    },
                    sizer: function() {
                      return H.length > 0;
                    },
                    selectInput: function() {
                      return V.is("select");
                    },
                    minCharacters: function(e) {
                      return (
                        !k.minCharacters ||
                        (e = void 0 !== e ? String(e) : String(C.get.query()))
                          .length >= k.minCharacters
                      );
                    },
                    firstLetter: function(e, t) {
                      var n;
                      return (
                        !(!e || 0 === e.length || "string" != typeof t) &&
                        ((n = C.get.choiceText(e, !1)),
                        (t = t.toLowerCase()) ==
                          String(n)
                            .charAt(0)
                            .toLowerCase())
                      );
                    },
                    input: function() {
                      return V.length > 0;
                    },
                    items: function() {
                      return _.length > 0;
                    },
                    menu: function() {
                      return B.length > 0;
                    },
                    message: function() {
                      return 0 !== B.children(O.message).length;
                    },
                    label: function(e) {
                      var t = C.escape.value(e),
                        n = L.find(O.label);
                      return (
                        k.ignoreCase && (t = t.toLowerCase()),
                        n.filter(
                          "[data-" + R.value + '="' + C.escape.string(t) + '"]'
                        ).length > 0
                      );
                    },
                    maxSelections: function() {
                      return (
                        k.maxSelections &&
                        C.get.selectionCount() >= k.maxSelections
                      );
                    },
                    allResultsFiltered: function() {
                      var e = _.not(O.addition);
                      return e.filter(O.unselectable).length === e.length;
                    },
                    userSuggestion: function() {
                      return B.children(O.addition).length > 0;
                    },
                    query: function() {
                      return "" !== C.get.query();
                    },
                    value: function(e) {
                      return k.ignoreCase
                        ? C.has.valueIgnoringCase(e)
                        : C.has.valueMatchingCase(e);
                    },
                    valueMatchingCase: function(t) {
                      var n = C.get.values();
                      return !!(e.isArray(n)
                        ? n && -1 !== e.inArray(t, n)
                        : n == t);
                    },
                    valueIgnoringCase: function(t) {
                      var n = C.get.values(),
                        i = !1;
                      return (
                        e.isArray(n) || (n = [n]),
                        e.each(n, function(e, n) {
                          if (
                            String(t).toLowerCase() == String(n).toLowerCase()
                          )
                            return (i = !0), !1;
                        }),
                        i
                      );
                    }
                  },
                  is: {
                    active: function() {
                      return L.hasClass(S.active);
                    },
                    animatingInward: function() {
                      return B.transition("is inward");
                    },
                    animatingOutward: function() {
                      return B.transition("is outward");
                    },
                    bubbledLabelClick: function(t) {
                      return (
                        e(t.target).is("select, input") &&
                        L.closest("label").length > 0
                      );
                    },
                    bubbledIconClick: function(t) {
                      return e(t.target).closest(U).length > 0;
                    },
                    alreadySetup: function() {
                      return (
                        L.is("select") &&
                        void 0 !== L.parent(O.dropdown).data(N) &&
                        0 === L.prev().length
                      );
                    },
                    animating: function(e) {
                      return e
                        ? e.transition && e.transition("is animating")
                        : B.transition && B.transition("is animating");
                    },
                    leftward: function(e) {
                      return (e || B).hasClass(S.leftward);
                    },
                    disabled: function() {
                      return L.hasClass(S.disabled);
                    },
                    focused: function() {
                      return n.activeElement === L[0];
                    },
                    focusedOnSearch: function() {
                      return n.activeElement === z[0];
                    },
                    allFiltered: function() {
                      return (
                        (C.is.multiple() || C.has.search()) &&
                        !(0 == k.hideAdditions && C.has.userSuggestion()) &&
                        !C.has.message() &&
                        C.has.allResultsFiltered()
                      );
                    },
                    hidden: function(e) {
                      return !C.is.visible(e);
                    },
                    initialLoad: function() {
                      return m;
                    },
                    inObject: function(t, n) {
                      var i = !1;
                      return (
                        e.each(n, function(e, n) {
                          if (n == t) return (i = !0), !0;
                        }),
                        i
                      );
                    },
                    multiple: function() {
                      return L.hasClass(S.multiple);
                    },
                    remote: function() {
                      return k.apiSettings && C.can.useAPI();
                    },
                    single: function() {
                      return !C.is.multiple();
                    },
                    selectMutation: function(t) {
                      var n = !1;
                      return (
                        e.each(t, function(t, i) {
                          if (i.target && e(i.target).is("select"))
                            return (n = !0), !0;
                        }),
                        n
                      );
                    },
                    search: function() {
                      return L.hasClass(S.search);
                    },
                    searchSelection: function() {
                      return (
                        C.has.search() && 1 === z.parent(O.dropdown).length
                      );
                    },
                    selection: function() {
                      return L.hasClass(S.selection);
                    },
                    userValue: function(t) {
                      return -1 !== e.inArray(t, C.get.userValues());
                    },
                    upward: function(e) {
                      return (e || L).hasClass(S.upward);
                    },
                    visible: function(e) {
                      return e ? e.hasClass(S.visible) : B.hasClass(S.visible);
                    },
                    verticallyScrollableContext: function() {
                      var e = M.get(0) !== t && M.css("overflow-y");
                      return "auto" == e || "scroll" == e;
                    },
                    horizontallyScrollableContext: function() {
                      var e = M.get(0) !== t && M.css("overflow-X");
                      return "auto" == e || "scroll" == e;
                    }
                  },
                  can: {
                    activate: function(e) {
                      return (
                        !!k.useLabels ||
                        (!C.has.maxSelections() ||
                          !(!C.has.maxSelections() || !e.hasClass(S.active)))
                      );
                    },
                    openDownward: function(e) {
                      var n,
                        i,
                        o = e || B,
                        r = !0;
                      return (
                        o.addClass(S.loading),
                        (i = {
                          context: {
                            offset:
                              M.get(0) === t ? { top: 0, left: 0 } : M.offset(),
                            scrollTop: M.scrollTop(),
                            height: M.outerHeight()
                          },
                          menu: { offset: o.offset(), height: o.outerHeight() }
                        }),
                        C.is.verticallyScrollableContext() &&
                          (i.menu.offset.top += i.context.scrollTop),
                        (n = {
                          above:
                            i.context.scrollTop <=
                            i.menu.offset.top -
                              i.context.offset.top -
                              i.menu.height,
                          below:
                            i.context.scrollTop + i.context.height >=
                            i.menu.offset.top -
                              i.context.offset.top +
                              i.menu.height
                        }).below
                          ? (C.verbose(
                              "Dropdown can fit in context downward",
                              n
                            ),
                            (r = !0))
                          : n.below || n.above
                            ? (C.verbose(
                                "Dropdown cannot fit below, opening upward",
                                n
                              ),
                              (r = !1))
                            : (C.verbose(
                                "Dropdown cannot fit in either direction, favoring downward",
                                n
                              ),
                              (r = !0)),
                        o.removeClass(S.loading),
                        r
                      );
                    },
                    openRightward: function(e) {
                      var n,
                        i,
                        o = e || B,
                        r = !0;
                      return (
                        o.addClass(S.loading),
                        (i = {
                          context: {
                            offset:
                              M.get(0) === t ? { top: 0, left: 0 } : M.offset(),
                            scrollLeft: M.scrollLeft(),
                            width: M.outerWidth()
                          },
                          menu: { offset: o.offset(), width: o.outerWidth() }
                        }),
                        C.is.horizontallyScrollableContext() &&
                          (i.menu.offset.left += i.context.scrollLeft),
                        (n =
                          i.menu.offset.left -
                            i.context.offset.left +
                            i.menu.width >=
                          i.context.scrollLeft + i.context.width) &&
                          (C.verbose(
                            "Dropdown cannot fit in context rightward",
                            n
                          ),
                          (r = !1)),
                        o.removeClass(S.loading),
                        r
                      );
                    },
                    click: function() {
                      return l || "click" == k.on;
                    },
                    extendSelect: function() {
                      return k.allowAdditions || k.apiSettings;
                    },
                    show: function() {
                      return (
                        !C.is.disabled() && (C.has.items() || C.has.message())
                      );
                    },
                    useAPI: function() {
                      return void 0 !== e.fn.api;
                    }
                  },
                  animate: {
                    show: function(t, n) {
                      var i,
                        o = n || B,
                        r = n
                          ? function() {}
                          : function() {
                              C.hideSubMenus(), C.hideOthers(), C.set.active();
                            };
                      (t = e.isFunction(t) ? t : function() {}),
                        C.verbose("Doing menu show animation", o),
                        C.set.direction(n),
                        (i = C.get.transition(n)),
                        C.is.selection() &&
                          C.set.scrollPosition(C.get.selectedItem(), !0),
                        (C.is.hidden(o) || C.is.animating(o)) &&
                          ("none" == i
                            ? (r(), o.transition("show"), t.call(Y))
                            : void 0 !== e.fn.transition &&
                              L.transition("is supported")
                              ? o.transition({
                                  animation: i + " in",
                                  debug: k.debug,
                                  verbose: k.verbose,
                                  duration: k.duration,
                                  queue: !0,
                                  onStart: r,
                                  onComplete: function() {
                                    t.call(Y);
                                  }
                                })
                              : C.error(j.noTransition, i));
                    },
                    hide: function(t, n) {
                      var i = n || B,
                        o = (n ? k.duration : k.duration,
                        n
                          ? function() {}
                          : function() {
                              C.can.click() && C.unbind.intent(),
                                C.remove.active();
                            }),
                        r = C.get.transition(n);
                      (t = e.isFunction(t) ? t : function() {}),
                        (C.is.visible(i) || C.is.animating(i)) &&
                          (C.verbose("Doing menu hide animation", i),
                          "none" == r
                            ? (o(), i.transition("hide"), t.call(Y))
                            : void 0 !== e.fn.transition &&
                              L.transition("is supported")
                              ? i.transition({
                                  animation: r + " out",
                                  duration: k.duration,
                                  debug: k.debug,
                                  verbose: k.verbose,
                                  queue: !1,
                                  onStart: o,
                                  onComplete: function() {
                                    t.call(Y);
                                  }
                                })
                              : C.error(j.transition));
                    }
                  },
                  hideAndClear: function() {
                    C.remove.searchTerm(),
                      C.has.maxSelections() ||
                        (C.has.search()
                          ? C.hide(function() {
                              C.remove.filteredItem();
                            })
                          : C.hide());
                  },
                  delay: {
                    show: function() {
                      C.verbose("Delaying show event to ensure user intent"),
                        clearTimeout(C.timer),
                        (C.timer = setTimeout(C.show, k.delay.show));
                    },
                    hide: function() {
                      C.verbose("Delaying hide event to ensure user intent"),
                        clearTimeout(C.timer),
                        (C.timer = setTimeout(C.hide, k.delay.hide));
                    }
                  },
                  escape: {
                    value: function(t) {
                      var n = e.isArray(t),
                        i = "string" == typeof t,
                        o = !i && !n,
                        r = i && -1 !== t.search(P.quote),
                        a = [];
                      return o || !r
                        ? t
                        : (C.debug(
                            "Encoding quote values for use in select",
                            t
                          ),
                          n
                            ? (e.each(t, function(e, t) {
                                a.push(t.replace(P.quote, "&quot;"));
                              }),
                              a)
                            : t.replace(P.quote, "&quot;"));
                    },
                    string: function(e) {
                      return (e = String(e)).replace(P.escape, "\\$&");
                    }
                  },
                  setting: function(t, n) {
                    if ((C.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, k, t);
                    else {
                      if (void 0 === n) return k[t];
                      e.isPlainObject(k[t])
                        ? e.extend(!0, k[t], n)
                        : (k[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, C, t);
                    else {
                      if (void 0 === n) return C[t];
                      C[t] = n;
                    }
                  },
                  debug: function() {
                    !k.silent &&
                      k.debug &&
                      (k.performance
                        ? C.performance.log(arguments)
                        : ((C.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            k.name + ":"
                          )),
                          C.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !k.silent &&
                      k.verbose &&
                      k.debug &&
                      (k.performance
                        ? C.performance.log(arguments)
                        : ((C.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            k.name + ":"
                          )),
                          C.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    k.silent ||
                      ((C.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        k.name + ":"
                      )),
                      C.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      k.performance &&
                        ((n = (t = new Date().getTime()) - (c || t)),
                        (c = t),
                        u.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: Y,
                          "Execution Time": n
                        })),
                        clearTimeout(C.performance.timer),
                        (C.performance.timer = setTimeout(
                          C.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = k.name + ":",
                        n = 0;
                      (c = !1),
                        clearTimeout(C.performance.timer),
                        e.each(u, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        s && (t += " '" + s + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          u.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(u)
                            : e.each(u, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (u = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = G;
                    return (
                      (n = n || p),
                      (i = Y || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (C.error(j.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  f
                    ? (void 0 === G && C.initialize(), C.invoke(d))
                    : (void 0 !== G && G.invoke("destroy"), C.initialize());
              }),
              void 0 !== o ? o : r
            );
          }),
          (e.fn.dropdown.settings = {
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            on: "click",
            action: "activate",
            values: !1,
            apiSettings: !1,
            selectOnKeydown: !0,
            minCharacters: 0,
            filterRemoteData: !1,
            saveRemoteData: !0,
            throttle: 200,
            context: t,
            direction: "auto",
            keepOnScreen: !0,
            match: "both",
            fullTextSearch: !1,
            placeholder: "auto",
            preserveHTML: !0,
            sortSelect: !1,
            forceSelection: !0,
            allowAdditions: !1,
            ignoreCase: !1,
            hideAdditions: !0,
            maxSelections: !1,
            useLabels: !0,
            delimiter: ",",
            showOnFocus: !0,
            allowReselection: !1,
            allowTab: !0,
            allowCategorySelection: !1,
            fireOnInit: !1,
            transition: "auto",
            duration: 200,
            glyphWidth: 1.037,
            label: { transition: "scale", duration: 200, variation: !1 },
            delay: { hide: 300, show: 200, search: 20, touch: 50 },
            onChange: function(e, t, n) {},
            onAdd: function(e, t, n) {},
            onRemove: function(e, t, n) {},
            onLabelSelect: function(e) {},
            onLabelCreate: function(t, n) {
              return e(this);
            },
            onLabelRemove: function(e) {
              return !0;
            },
            onNoResults: function(e) {
              return !0;
            },
            onShow: function() {},
            onHide: function() {},
            name: "Dropdown",
            namespace: "dropdown",
            message: {
              addResult: "Add <b>{term}</b>",
              count: "{count} selected",
              maxSelections: "Max {maxCount} selections",
              noResults: "No results found.",
              serverError: "There was an error contacting the server"
            },
            error: {
              action: "You called a dropdown action that was not defined",
              alreadySetup:
                "Once a select has been initialized behaviors must be called on the created ui dropdown",
              labels:
                "Allowing user additions currently requires the use of labels.",
              missingMultiple:
                "<select> requires multiple property to be set to correctly preserve multiple values",
              method: "The method you called is not defined.",
              noAPI: "The API module is required to load resources remotely",
              noStorage: "Saving remote data requires session storage",
              noTransition:
                "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
            },
            regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g, quote: /"/g },
            metadata: {
              defaultText: "defaultText",
              defaultValue: "defaultValue",
              placeholderText: "placeholder",
              text: "text",
              value: "value"
            },
            fields: {
              remoteValues: "results",
              values: "values",
              disabled: "disabled",
              name: "name",
              value: "value",
              text: "text"
            },
            keys: {
              backspace: 8,
              delimiter: 188,
              deleteKey: 46,
              enter: 13,
              escape: 27,
              pageUp: 33,
              pageDown: 34,
              leftArrow: 37,
              upArrow: 38,
              rightArrow: 39,
              downArrow: 40
            },
            selector: {
              addition: ".addition",
              dropdown: ".ui.dropdown",
              hidden: ".hidden",
              icon: "> .dropdown.icon",
              input: '> input[type="hidden"], > select',
              item: ".item",
              label: "> .label",
              remove: "> .label > .delete.icon",
              siblingLabel: ".label",
              menu: ".menu",
              message: ".message",
              menuIcon: ".dropdown.icon",
              search:
                "input.search, .menu > .search > input, .menu input.search",
              sizer: "> input.sizer",
              text: "> .text:not(.icon)",
              unselectable: ".disabled, .filtered"
            },
            className: {
              active: "active",
              addition: "addition",
              animating: "animating",
              disabled: "disabled",
              empty: "empty",
              dropdown: "ui dropdown",
              filtered: "filtered",
              hidden: "hidden transition",
              item: "item",
              label: "ui label",
              loading: "loading",
              menu: "menu",
              message: "message",
              multiple: "multiple",
              placeholder: "default",
              sizer: "sizer",
              search: "search",
              selected: "selected",
              selection: "selection",
              upward: "upward",
              leftward: "left",
              visible: "visible"
            }
          }),
          (e.fn.dropdown.settings.templates = {
            dropdown: function(t) {
              var n = t.placeholder || !1,
                i = (t.values, "");
              return (
                (i += '<i class="dropdown icon"></i>'),
                t.placeholder
                  ? (i += '<div class="default text">' + n + "</div>")
                  : (i += '<div class="text"></div>'),
                (i += '<div class="menu">'),
                e.each(t.values, function(e, t) {
                  i += t.disabled
                    ? '<div class="disabled item" data-value="' +
                      t.value +
                      '">' +
                      t.name +
                      "</div>"
                    : '<div class="item" data-value="' +
                      t.value +
                      '">' +
                      t.name +
                      "</div>";
                }),
                (i += "</div>")
              );
            },
            menu: function(t, n) {
              var i = t[n.values] || {},
                o = "";
              return (
                e.each(i, function(e, t) {
                  var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "",
                    r = t[n.disabled] ? "disabled " : "";
                  (o +=
                    '<div class="' +
                    r +
                    'item" data-value="' +
                    t[n.value] +
                    '"' +
                    i +
                    ">"),
                    (o += t[n.name]),
                    (o += "</div>");
                }),
                o
              );
            },
            label: function(e, t) {
              return t + '<i class="delete icon"></i>';
            },
            message: function(e) {
              return e;
            },
            addition: function(e) {
              return e;
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.embed = function(n) {
            var i,
              o = e(this),
              r = o.selector || "",
              a = new Date().getTime(),
              s = [],
              l = arguments[0],
              c = "string" == typeof l,
              u = [].slice.call(arguments, 1);
            return (
              o.each(function() {
                var d,
                  f = e.isPlainObject(n)
                    ? e.extend(!0, {}, e.fn.embed.settings, n)
                    : e.extend({}, e.fn.embed.settings),
                  p = f.selector,
                  h = f.className,
                  m = f.sources,
                  g = f.error,
                  v = f.metadata,
                  b = f.namespace,
                  y = f.templates,
                  x = "." + b,
                  w = "module-" + b,
                  C = (e(t), e(this)),
                  k = (C.find(p.placeholder), C.find(p.icon), C.find(p.embed)),
                  S = this,
                  T = C.data(w);
                (d = {
                  initialize: function() {
                    d.debug("Initializing embed"),
                      d.determine.autoplay(),
                      d.create(),
                      d.bind.events(),
                      d.instantiate();
                  },
                  instantiate: function() {
                    d.verbose("Storing instance of module", d),
                      (T = d),
                      C.data(w, d);
                  },
                  destroy: function() {
                    d.verbose("Destroying previous instance of embed"),
                      d.reset(),
                      C.removeData(w).off(x);
                  },
                  refresh: function() {
                    d.verbose("Refreshing selector cache"),
                      C.find(p.placeholder),
                      C.find(p.icon),
                      (k = C.find(p.embed));
                  },
                  bind: {
                    events: function() {
                      d.has.placeholder() &&
                        (d.debug("Adding placeholder events"),
                        C.on("click" + x, p.placeholder, d.createAndShow).on(
                          "click" + x,
                          p.icon,
                          d.createAndShow
                        ));
                    }
                  },
                  create: function() {
                    d.get.placeholder()
                      ? d.createPlaceholder()
                      : d.createAndShow();
                  },
                  createPlaceholder: function(e) {
                    var t = d.get.icon(),
                      n = d.get.url();
                    d.generate.embed(n);
                    (e = e || d.get.placeholder()),
                      C.html(y.placeholder(e, t)),
                      d.debug("Creating placeholder for embed", e, t);
                  },
                  createEmbed: function(t) {
                    d.refresh(),
                      (t = t || d.get.url()),
                      (k = e("<div/>")
                        .addClass(h.embed)
                        .html(d.generate.embed(t))
                        .appendTo(C)),
                      f.onCreate.call(S, t),
                      d.debug("Creating embed object", k);
                  },
                  changeEmbed: function(e) {
                    k.html(d.generate.embed(e));
                  },
                  createAndShow: function() {
                    d.createEmbed(), d.show();
                  },
                  change: function(e, t, n) {
                    d.debug("Changing video to ", e, t, n),
                      C.data(v.source, e).data(v.id, t),
                      n ? C.data(v.url, n) : C.removeData(v.url),
                      d.has.embed() ? d.changeEmbed() : d.create();
                  },
                  reset: function() {
                    d.debug("Clearing embed and showing placeholder"),
                      d.remove.active(),
                      d.remove.embed(),
                      d.showPlaceholder(),
                      f.onReset.call(S);
                  },
                  show: function() {
                    d.debug("Showing embed"),
                      d.set.active(),
                      f.onDisplay.call(S);
                  },
                  hide: function() {
                    d.debug("Hiding embed"), d.showPlaceholder();
                  },
                  showPlaceholder: function() {
                    d.debug("Showing placeholder image"),
                      d.remove.active(),
                      f.onPlaceholderDisplay.call(S);
                  },
                  get: {
                    id: function() {
                      return f.id || C.data(v.id);
                    },
                    placeholder: function() {
                      return f.placeholder || C.data(v.placeholder);
                    },
                    icon: function() {
                      return f.icon
                        ? f.icon
                        : void 0 !== C.data(v.icon)
                          ? C.data(v.icon)
                          : d.determine.icon();
                    },
                    source: function(e) {
                      return f.source
                        ? f.source
                        : void 0 !== C.data(v.source)
                          ? C.data(v.source)
                          : d.determine.source();
                    },
                    type: function() {
                      var e = d.get.source();
                      return void 0 !== m[e] && m[e].type;
                    },
                    url: function() {
                      return f.url
                        ? f.url
                        : void 0 !== C.data(v.url)
                          ? C.data(v.url)
                          : d.determine.url();
                    }
                  },
                  determine: {
                    autoplay: function() {
                      d.should.autoplay() && (f.autoplay = !0);
                    },
                    source: function(t) {
                      var n = !1;
                      return (
                        (t = t || d.get.url()) &&
                          e.each(m, function(e, i) {
                            if (-1 !== t.search(i.domain)) return (n = e), !1;
                          }),
                        n
                      );
                    },
                    icon: function() {
                      var e = d.get.source();
                      return void 0 !== m[e] && m[e].icon;
                    },
                    url: function() {
                      var e,
                        t = f.id || C.data(v.id),
                        n = f.source || C.data(v.source);
                      return (
                        (e = void 0 !== m[n] && m[n].url.replace("{id}", t)) &&
                          C.data(v.url, e),
                        e
                      );
                    }
                  },
                  set: {
                    active: function() {
                      C.addClass(h.active);
                    }
                  },
                  remove: {
                    active: function() {
                      C.removeClass(h.active);
                    },
                    embed: function() {
                      k.empty();
                    }
                  },
                  encode: {
                    parameters: function(e) {
                      var t,
                        n = [];
                      for (t in e)
                        n.push(
                          encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                        );
                      return n.join("&amp;");
                    }
                  },
                  generate: {
                    embed: function(e) {
                      d.debug("Generating embed html");
                      var t,
                        n,
                        i = d.get.source();
                      return (
                        (e = d.get.url(e))
                          ? ((n = d.generate.parameters(i)),
                            (t = y.iframe(e, n)))
                          : d.error(g.noURL, C),
                        t
                      );
                    },
                    parameters: function(t, n) {
                      var i =
                        m[t] && void 0 !== m[t].parameters
                          ? m[t].parameters(f)
                          : {};
                      return (
                        (n = n || f.parameters) && (i = e.extend({}, i, n)),
                        (i = f.onEmbed(i)),
                        d.encode.parameters(i)
                      );
                    }
                  },
                  has: {
                    embed: function() {
                      return k.length > 0;
                    },
                    placeholder: function() {
                      return f.placeholder || C.data(v.placeholder);
                    }
                  },
                  should: {
                    autoplay: function() {
                      return "auto" === f.autoplay
                        ? f.placeholder || void 0 !== C.data(v.placeholder)
                        : f.autoplay;
                    }
                  },
                  is: {
                    video: function() {
                      return "video" == d.get.type();
                    }
                  },
                  setting: function(t, n) {
                    if ((d.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      e.isPlainObject(f[t])
                        ? e.extend(!0, f[t], n)
                        : (f[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                      if (void 0 === n) return d[t];
                      d[t] = n;
                    }
                  },
                  debug: function() {
                    !f.silent &&
                      f.debug &&
                      (f.performance
                        ? d.performance.log(arguments)
                        : ((d.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          d.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !f.silent &&
                      f.verbose &&
                      f.debug &&
                      (f.performance
                        ? d.performance.log(arguments)
                        : ((d.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          d.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    f.silent ||
                      ((d.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        f.name + ":"
                      )),
                      d.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      f.performance &&
                        ((n = (t = new Date().getTime()) - (a || t)),
                        (a = t),
                        s.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: S,
                          "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        (d.performance.timer = setTimeout(
                          d.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = f.name + ":",
                        n = 0;
                      (a = !1),
                        clearTimeout(d.performance.timer),
                        e.each(s, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        r && (t += " '" + r + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          s.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(s)
                            : e.each(s, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (s = []);
                    }
                  },
                  invoke: function(t, n, o) {
                    var r,
                      a,
                      s,
                      l = T;
                    return (
                      (n = n || u),
                      (o = S || o),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (d.error(g.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(o, n))
                        : void 0 !== a && (s = a),
                      e.isArray(i)
                        ? i.push(s)
                        : void 0 !== i ? (i = [i, s]) : void 0 !== s && (i = s),
                      a
                    );
                  }
                }),
                  c
                    ? (void 0 === T && d.initialize(), d.invoke(l))
                    : (void 0 !== T && T.invoke("destroy"), d.initialize());
              }),
              void 0 !== i ? i : this
            );
          }),
          (e.fn.embed.settings = {
            name: "Embed",
            namespace: "embed",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            icon: !1,
            source: !1,
            url: !1,
            id: !1,
            autoplay: "auto",
            color: "#444444",
            hd: !0,
            brandedUI: !1,
            parameters: !1,
            onDisplay: function() {},
            onPlaceholderDisplay: function() {},
            onReset: function() {},
            onCreate: function(e) {},
            onEmbed: function(e) {
              return e;
            },
            metadata: {
              id: "id",
              icon: "icon",
              placeholder: "placeholder",
              source: "source",
              url: "url"
            },
            error: {
              noURL: "No URL specified",
              method: "The method you called is not defined"
            },
            className: { active: "active", embed: "embed" },
            selector: {
              embed: ".embed",
              placeholder: ".placeholder",
              icon: ".icon"
            },
            sources: {
              youtube: {
                name: "youtube",
                type: "video",
                icon: "video play",
                domain: "youtube.com",
                url: "//www.youtube.com/embed/{id}",
                parameters: function(e) {
                  return {
                    autohide: !e.brandedUI,
                    autoplay: e.autoplay,
                    color: e.color || void 0,
                    hq: e.hd,
                    jsapi: e.api,
                    modestbranding: !e.brandedUI
                  };
                }
              },
              vimeo: {
                name: "vimeo",
                type: "video",
                icon: "video play",
                domain: "vimeo.com",
                url: "//player.vimeo.com/video/{id}",
                parameters: function(e) {
                  return {
                    api: e.api,
                    autoplay: e.autoplay,
                    byline: e.brandedUI,
                    color: e.color || void 0,
                    portrait: e.brandedUI,
                    title: e.brandedUI
                  };
                }
              }
            },
            templates: {
              iframe: function(e, t) {
                var n = e;
                return (
                  t && (n += "?" + t),
                  '<iframe src="' +
                    n +
                    '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                );
              },
              placeholder: function(e, t) {
                var n = "";
                return (
                  t && (n += '<i class="' + t + ' icon"></i>'),
                  e && (n += '<img class="placeholder" src="' + e + '">'),
                  n
                );
              }
            },
            api: !1,
            onPause: function() {},
            onPlay: function() {},
            onStop: function() {}
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.modal = function(i) {
            var o,
              r = e(this),
              a = e(t),
              s = e(n),
              l = e("body"),
              c = r.selector || "",
              u = new Date().getTime(),
              d = [],
              f = arguments[0],
              p = "string" == typeof f,
              h = [].slice.call(arguments, 1),
              m =
                t.requestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                t.webkitRequestAnimationFrame ||
                t.msRequestAnimationFrame ||
                function(e) {
                  setTimeout(e, 0);
                };
            return (
              r.each(function() {
                var r,
                  g,
                  v,
                  b,
                  y,
                  x,
                  w,
                  C,
                  k,
                  S = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.modal.settings, i)
                    : e.extend({}, e.fn.modal.settings),
                  T = S.selector,
                  A = S.className,
                  E = S.namespace,
                  R = S.error,
                  D = "." + E,
                  P = "module-" + E,
                  O = e(this),
                  j = e(S.context),
                  F = O.find(T.close),
                  q = this,
                  N = O.data(P),
                  L = !1;
                (k = {
                  initialize: function() {
                    k.verbose("Initializing dimmer", j),
                      k.create.id(),
                      k.create.dimmer(),
                      k.refreshModals(),
                      k.bind.events(),
                      S.observeChanges && k.observeChanges(),
                      k.instantiate();
                  },
                  instantiate: function() {
                    k.verbose("Storing instance of modal"),
                      (N = k),
                      O.data(P, N);
                  },
                  create: {
                    dimmer: function() {
                      var t = {
                          debug: S.debug,
                          variation: !S.centered && "top aligned",
                          dimmerName: "modals"
                        },
                        n = e.extend(!0, t, S.dimmerSettings);
                      void 0 !== e.fn.dimmer
                        ? (k.debug("Creating dimmer"),
                          (b = j.dimmer(n)),
                          S.detachable
                            ? (k.verbose(
                                "Modal is detachable, moving content into dimmer"
                              ),
                              b.dimmer("add content", O))
                            : k.set.undetached(),
                          (y = b.dimmer("get dimmer")))
                        : k.error(R.dimmer);
                    },
                    id: function() {
                      (w = (Math.random().toString(16) + "000000000").substr(
                        2,
                        8
                      )),
                        (x = "." + w),
                        k.verbose("Creating unique id for element", w);
                    }
                  },
                  destroy: function() {
                    k.verbose("Destroying previous modal"),
                      O.removeData(P).off(D),
                      a.off(x),
                      y.off(x),
                      F.off(D),
                      j.dimmer("destroy");
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((C = new MutationObserver(function(e) {
                        k.debug("DOM tree modified, refreshing"), k.refresh();
                      })).observe(q, { childList: !0, subtree: !0 }),
                      k.debug("Setting up mutation observer", C));
                  },
                  refresh: function() {
                    k.remove.scrolling(),
                      k.cacheSizes(),
                      k.set.screenHeight(),
                      k.set.type();
                  },
                  refreshModals: function() {
                    (g = O.siblings(T.modal)), (r = g.add(O));
                  },
                  attachEvents: function(t, n) {
                    var i = e(t);
                    (n = e.isFunction(k[n]) ? k[n] : k.toggle),
                      i.length > 0
                        ? (k.debug("Attaching modal events to element", t, n),
                          i.off(D).on("click" + D, n))
                        : k.error(R.notFound, t);
                  },
                  bind: {
                    events: function() {
                      k.verbose("Attaching events"),
                        O.on("click" + D, T.close, k.event.close)
                          .on("click" + D, T.approve, k.event.approve)
                          .on("click" + D, T.deny, k.event.deny),
                        a.on("resize" + x, k.event.resize);
                    }
                  },
                  get: {
                    id: function() {
                      return (Math.random().toString(16) + "000000000").substr(
                        2,
                        8
                      );
                    }
                  },
                  event: {
                    approve: function() {
                      L || !1 === S.onApprove.call(q, e(this))
                        ? k.verbose(
                            "Approve callback returned false cancelling hide"
                          )
                        : ((L = !0),
                          k.hide(function() {
                            L = !1;
                          }));
                    },
                    deny: function() {
                      L || !1 === S.onDeny.call(q, e(this))
                        ? k.verbose(
                            "Deny callback returned false cancelling hide"
                          )
                        : ((L = !0),
                          k.hide(function() {
                            L = !1;
                          }));
                    },
                    close: function() {
                      k.hide();
                    },
                    click: function(t) {
                      if (S.closable) {
                        var i = e(t.target).closest(T.modal).length > 0,
                          o = e.contains(n.documentElement, t.target);
                        !i &&
                          o &&
                          k.is.active() &&
                          (k.debug("Dimmer clicked, hiding all modals"),
                          k.remove.clickaway(),
                          S.allowMultiple ? k.hide() : k.hideAll());
                      } else
                        k.verbose(
                          "Dimmer clicked but closable setting is disabled"
                        );
                    },
                    debounce: function(e, t) {
                      clearTimeout(k.timer), (k.timer = setTimeout(e, t));
                    },
                    keyboard: function(e) {
                      27 == e.which &&
                        (S.closable
                          ? (k.debug("Escape key pressed hiding modal"),
                            k.hide())
                          : k.debug(
                              "Escape key pressed, but closable is set to false"
                            ),
                        e.preventDefault());
                    },
                    resize: function() {
                      b.dimmer("is active") &&
                        (k.is.animating() || k.is.active()) &&
                        m(k.refresh);
                    }
                  },
                  toggle: function() {
                    k.is.active() || k.is.animating() ? k.hide() : k.show();
                  },
                  show: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      k.refreshModals(),
                      k.set.dimmerSettings(),
                      k.showModal(t);
                  },
                  hide: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      k.refreshModals(),
                      k.hideModal(t);
                  },
                  showModal: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      k.is.animating() || !k.is.active()
                        ? (k.showDimmer(),
                          k.cacheSizes(),
                          k.set.screenHeight(),
                          k.set.type(),
                          k.set.clickaway(),
                          !S.allowMultiple && k.others.active()
                            ? k.hideOthers(k.showModal)
                            : (S.allowMultiple &&
                                S.detachable &&
                                O.detach().appendTo(y),
                              S.onShow.call(q),
                              S.transition &&
                              void 0 !== e.fn.transition &&
                              O.transition("is supported")
                                ? (k.debug("Showing modal with css animations"),
                                  O.transition({
                                    debug: S.debug,
                                    animation: S.transition + " in",
                                    queue: S.queue,
                                    duration: S.duration,
                                    useFailSafe: !0,
                                    onComplete: function() {
                                      S.onVisible.apply(q),
                                        S.keyboardShortcuts &&
                                          k.add.keyboardShortcuts(),
                                        k.save.focus(),
                                        k.set.active(),
                                        S.autofocus && k.set.autofocus(),
                                        t();
                                    }
                                  }))
                                : k.error(R.noTransition)))
                        : k.debug("Modal is already visible");
                  },
                  hideModal: function(t, n) {
                    (t = e.isFunction(t) ? t : function() {}),
                      k.debug("Hiding modal"),
                      !1 !== S.onHide.call(q, e(this))
                        ? (k.is.animating() || k.is.active()) &&
                          (S.transition &&
                          void 0 !== e.fn.transition &&
                          O.transition("is supported")
                            ? (k.remove.active(),
                              O.transition({
                                debug: S.debug,
                                animation: S.transition + " out",
                                queue: S.queue,
                                duration: S.duration,
                                useFailSafe: !0,
                                onStart: function() {
                                  k.others.active() || n || k.hideDimmer(),
                                    S.keyboardShortcuts &&
                                      k.remove.keyboardShortcuts();
                                },
                                onComplete: function() {
                                  S.onHidden.call(q), k.restore.focus(), t();
                                }
                              }))
                            : k.error(R.noTransition))
                        : k.verbose(
                            "Hide callback returned false cancelling hide"
                          );
                  },
                  showDimmer: function() {
                    b.dimmer("is animating") || !b.dimmer("is active")
                      ? (k.debug("Showing dimmer"), b.dimmer("show"))
                      : k.debug("Dimmer already visible");
                  },
                  hideDimmer: function() {
                    b.dimmer("is animating") || b.dimmer("is active")
                      ? b.dimmer("hide", function() {
                          k.remove.clickaway(), k.remove.screenHeight();
                        })
                      : k.debug("Dimmer is not visible cannot hide");
                  },
                  hideAll: function(t) {
                    var n = r.filter("." + A.active + ", ." + A.animating);
                    (t = e.isFunction(t) ? t : function() {}),
                      n.length > 0 &&
                        (k.debug("Hiding all visible modals"),
                        k.hideDimmer(),
                        n.modal("hide modal", t));
                  },
                  hideOthers: function(t) {
                    var n = g.filter("." + A.active + ", ." + A.animating);
                    (t = e.isFunction(t) ? t : function() {}),
                      n.length > 0 &&
                        (k.debug("Hiding other modals", g),
                        n.modal("hide modal", t, !0));
                  },
                  others: {
                    active: function() {
                      return g.filter("." + A.active).length > 0;
                    },
                    animating: function() {
                      return g.filter("." + A.animating).length > 0;
                    }
                  },
                  add: {
                    keyboardShortcuts: function() {
                      k.verbose("Adding keyboard shortcuts"),
                        s.on("keyup" + D, k.event.keyboard);
                    }
                  },
                  save: {
                    focus: function() {
                      e(n.activeElement).closest(O).length > 0 ||
                        (v = e(n.activeElement).blur());
                    }
                  },
                  restore: {
                    focus: function() {
                      v && v.length > 0 && v.focus();
                    }
                  },
                  remove: {
                    active: function() {
                      O.removeClass(A.active);
                    },
                    clickaway: function() {
                      y.off("click" + x);
                    },
                    bodyStyle: function() {
                      "" === l.attr("style") &&
                        (k.verbose("Removing style attribute"),
                        l.removeAttr("style"));
                    },
                    screenHeight: function() {
                      k.debug("Removing page height"), l.css("height", "");
                    },
                    keyboardShortcuts: function() {
                      k.verbose("Removing keyboard shortcuts"),
                        s.off("keyup" + D);
                    },
                    scrolling: function() {
                      b.removeClass(A.scrolling), O.removeClass(A.scrolling);
                    }
                  },
                  cacheSizes: function() {
                    O.addClass(A.loading);
                    var i = O.prop("scrollHeight"),
                      o = O.outerHeight();
                    (void 0 !== k.cache && 0 === o) ||
                      ((k.cache = {
                        pageHeight: e(n).outerHeight(),
                        height: o + S.offset,
                        scrollHeight: i + S.offset,
                        contextHeight:
                          "body" == S.context ? e(t).height() : b.height()
                      }),
                      (k.cache.topOffset = -k.cache.height / 2)),
                      O.removeClass(A.loading),
                      k.debug("Caching modal and container sizes", k.cache);
                  },
                  can: {
                    fit: function() {
                      var e = k.cache.contextHeight,
                        t = k.cache.contextHeight / 2,
                        n = k.cache.topOffset,
                        i = k.cache.scrollHeight,
                        o = k.cache.height,
                        r = S.padding;
                      return i > o ? t + n + i + r < e : o + 2 * r < e;
                    }
                  },
                  is: {
                    active: function() {
                      return O.hasClass(A.active);
                    },
                    animating: function() {
                      return O.transition("is supported")
                        ? O.transition("is animating")
                        : O.is(":visible");
                    },
                    scrolling: function() {
                      return b.hasClass(A.scrolling);
                    },
                    modernBrowser: function() {
                      return !(t.ActiveXObject || "ActiveXObject" in t);
                    }
                  },
                  set: {
                    autofocus: function() {
                      var e = O.find("[tabindex], :input").filter(":visible"),
                        t = e.filter("[autofocus]"),
                        n = t.length > 0 ? t.first() : e.first();
                      n.length > 0 && n.focus();
                    },
                    clickaway: function() {
                      y.on("click" + x, k.event.click);
                    },
                    dimmerSettings: function() {
                      if (void 0 !== e.fn.dimmer) {
                        var t = {
                            debug: S.debug,
                            dimmerName: "modals",
                            closable: "auto",
                            variation: !S.centered && "top aligned",
                            duration: { show: S.duration, hide: S.duration }
                          },
                          n = e.extend(!0, t, S.dimmerSettings);
                        S.inverted
                          ? ((n.variation =
                              void 0 !== n.variation
                                ? n.variation + " inverted"
                                : "inverted"),
                            y.addClass(A.inverted))
                          : y.removeClass(A.inverted),
                          S.blurring
                            ? b.addClass(A.blurring)
                            : b.removeClass(A.blurring),
                          j.dimmer("setting", n);
                      } else k.error(R.dimmer);
                    },
                    screenHeight: function() {
                      k.can.fit()
                        ? l.css("height", "")
                        : (k.debug(
                            "Modal is taller than page content, resizing page height"
                          ),
                          l.css("height", k.cache.height + 2 * S.padding));
                    },
                    active: function() {
                      O.addClass(A.active);
                    },
                    scrolling: function() {
                      b.addClass(A.scrolling), O.addClass(A.scrolling);
                    },
                    type: function() {
                      k.can.fit()
                        ? (k.verbose("Modal fits on screen"),
                          k.others.active() ||
                            k.others.animating() ||
                            k.remove.scrolling())
                        : (k.verbose(
                            "Modal cannot fit on screen setting to scrolling"
                          ),
                          k.set.scrolling());
                    },
                    undetached: function() {
                      b.addClass(A.undetached);
                    }
                  },
                  setting: function(t, n) {
                    if ((k.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, S, t);
                    else {
                      if (void 0 === n) return S[t];
                      e.isPlainObject(S[t])
                        ? e.extend(!0, S[t], n)
                        : (S[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, k, t);
                    else {
                      if (void 0 === n) return k[t];
                      k[t] = n;
                    }
                  },
                  debug: function() {
                    !S.silent &&
                      S.debug &&
                      (S.performance
                        ? k.performance.log(arguments)
                        : ((k.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            S.name + ":"
                          )),
                          k.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !S.silent &&
                      S.verbose &&
                      S.debug &&
                      (S.performance
                        ? k.performance.log(arguments)
                        : ((k.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            S.name + ":"
                          )),
                          k.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    S.silent ||
                      ((k.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        S.name + ":"
                      )),
                      k.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      S.performance &&
                        ((n = (t = new Date().getTime()) - (u || t)),
                        (u = t),
                        d.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: q,
                          "Execution Time": n
                        })),
                        clearTimeout(k.performance.timer),
                        (k.performance.timer = setTimeout(
                          k.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = S.name + ":",
                        n = 0;
                      (u = !1),
                        clearTimeout(k.performance.timer),
                        e.each(d, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        c && (t += " '" + c + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          d.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(d)
                            : e.each(d, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (d = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = N;
                    return (
                      (n = n || h),
                      (i = q || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  p
                    ? (void 0 === N && k.initialize(), k.invoke(f))
                    : (void 0 !== N && N.invoke("destroy"), k.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.modal.settings = {
            name: "Modal",
            namespace: "modal",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            observeChanges: !1,
            allowMultiple: !1,
            detachable: !0,
            closable: !0,
            autofocus: !0,
            inverted: !1,
            blurring: !1,
            centered: !0,
            dimmerSettings: { closable: !1, useCSS: !0 },
            keyboardShortcuts: !0,
            context: "body",
            queue: !1,
            duration: 500,
            offset: 0,
            transition: "scale",
            padding: 50,
            onShow: function() {},
            onVisible: function() {},
            onHide: function() {
              return !0;
            },
            onHidden: function() {},
            onApprove: function() {
              return !0;
            },
            onDeny: function() {
              return !0;
            },
            selector: {
              close: "> .close",
              approve: ".actions .positive, .actions .approve, .actions .ok",
              deny: ".actions .negative, .actions .deny, .actions .cancel",
              modal: ".ui.modal"
            },
            error: {
              dimmer:
                "UI Dimmer, a required component is not included in this page",
              method: "The method you called is not defined.",
              notFound: "The element you specified could not be found"
            },
            className: {
              active: "active",
              animating: "animating",
              blurring: "blurring",
              inverted: "inverted",
              loading: "loading",
              scrolling: "scrolling",
              undetached: "undetached"
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.nag = function(n) {
            var i,
              o = e(this),
              r = o.selector || "",
              a = new Date().getTime(),
              s = [],
              l = arguments[0],
              c = "string" == typeof l,
              u = [].slice.call(arguments, 1);
            return (
              o.each(function() {
                var o,
                  d = e.isPlainObject(n)
                    ? e.extend(!0, {}, e.fn.nag.settings, n)
                    : e.extend({}, e.fn.nag.settings),
                  f = (d.className, d.selector),
                  p = d.error,
                  h = d.namespace,
                  m = "." + h,
                  g = h + "-module",
                  v = e(this),
                  b = (v.find(f.close), d.context ? e(d.context) : e("body")),
                  y = this,
                  x = v.data(g);
                t.requestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  t.webkitRequestAnimationFrame ||
                  t.msRequestAnimationFrame;
                (o = {
                  initialize: function() {
                    o.verbose("Initializing element"),
                      v.on("click" + m, f.close, o.dismiss).data(g, o),
                      d.detachable &&
                        v.parent()[0] !== b[0] &&
                        v.detach().prependTo(b),
                      d.displayTime > 0 && setTimeout(o.hide, d.displayTime),
                      o.show();
                  },
                  destroy: function() {
                    o.verbose("Destroying instance"), v.removeData(g).off(m);
                  },
                  show: function() {
                    o.should.show() &&
                      !v.is(":visible") &&
                      (o.debug("Showing nag", d.animation.show),
                      "fade" == d.animation.show
                        ? v.fadeIn(d.duration, d.easing)
                        : v.slideDown(d.duration, d.easing));
                  },
                  hide: function() {
                    o.debug("Showing nag", d.animation.hide),
                      "fade" == d.animation.show
                        ? v.fadeIn(d.duration, d.easing)
                        : v.slideUp(d.duration, d.easing);
                  },
                  onHide: function() {
                    o.debug("Removing nag", d.animation.hide),
                      v.remove(),
                      d.onHide && d.onHide();
                  },
                  dismiss: function(e) {
                    d.storageMethod && o.storage.set(d.key, d.value),
                      o.hide(),
                      e.stopImmediatePropagation(),
                      e.preventDefault();
                  },
                  should: {
                    show: function() {
                      return d.persist
                        ? (o.debug("Persistent nag is set, can show nag"), !0)
                        : o.storage.get(d.key) != d.value.toString()
                          ? (o.debug(
                              "Stored value is not set, can show nag",
                              o.storage.get(d.key)
                            ),
                            !0)
                          : (o.debug(
                              "Stored value is set, cannot show nag",
                              o.storage.get(d.key)
                            ),
                            !1);
                    }
                  },
                  get: {
                    storageOptions: function() {
                      var e = {};
                      return (
                        d.expires && (e.expires = d.expires),
                        d.domain && (e.domain = d.domain),
                        d.path && (e.path = d.path),
                        e
                      );
                    }
                  },
                  clear: function() {
                    o.storage.remove(d.key);
                  },
                  storage: {
                    set: function(n, i) {
                      var r = o.get.storageOptions();
                      if (
                        "localstorage" == d.storageMethod &&
                        void 0 !== t.localStorage
                      )
                        t.localStorage.setItem(n, i),
                          o.debug("Value stored using local storage", n, i);
                      else if (
                        "sessionstorage" == d.storageMethod &&
                        void 0 !== t.sessionStorage
                      )
                        t.sessionStorage.setItem(n, i),
                          o.debug("Value stored using session storage", n, i);
                      else {
                        if (void 0 === e.cookie)
                          return void o.error(p.noCookieStorage);
                        e.cookie(n, i, r),
                          o.debug("Value stored using cookie", n, i, r);
                      }
                    },
                    get: function(n, i) {
                      var r;
                      return (
                        "localstorage" == d.storageMethod &&
                        void 0 !== t.localStorage
                          ? (r = t.localStorage.getItem(n))
                          : "sessionstorage" == d.storageMethod &&
                            void 0 !== t.sessionStorage
                            ? (r = t.sessionStorage.getItem(n))
                            : void 0 !== e.cookie
                              ? (r = e.cookie(n))
                              : o.error(p.noCookieStorage),
                        ("undefined" != r &&
                          "null" != r &&
                          void 0 !== r &&
                          null !== r) ||
                          (r = void 0),
                        r
                      );
                    },
                    remove: function(n) {
                      var i = o.get.storageOptions();
                      "localstorage" == d.storageMethod &&
                      void 0 !== t.localStorage
                        ? t.localStorage.removeItem(n)
                        : "sessionstorage" == d.storageMethod &&
                          void 0 !== t.sessionStorage
                          ? t.sessionStorage.removeItem(n)
                          : void 0 !== e.cookie
                            ? e.removeCookie(n, i)
                            : o.error(p.noStorage);
                    }
                  },
                  setting: function(t, n) {
                    if ((o.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, d, t);
                    else {
                      if (void 0 === n) return d[t];
                      e.isPlainObject(d[t])
                        ? e.extend(!0, d[t], n)
                        : (d[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, o, t);
                    else {
                      if (void 0 === n) return o[t];
                      o[t] = n;
                    }
                  },
                  debug: function() {
                    !d.silent &&
                      d.debug &&
                      (d.performance
                        ? o.performance.log(arguments)
                        : ((o.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            d.name + ":"
                          )),
                          o.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !d.silent &&
                      d.verbose &&
                      d.debug &&
                      (d.performance
                        ? o.performance.log(arguments)
                        : ((o.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            d.name + ":"
                          )),
                          o.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    d.silent ||
                      ((o.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        d.name + ":"
                      )),
                      o.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      d.performance &&
                        ((n = (t = new Date().getTime()) - (a || t)),
                        (a = t),
                        s.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: y,
                          "Execution Time": n
                        })),
                        clearTimeout(o.performance.timer),
                        (o.performance.timer = setTimeout(
                          o.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = d.name + ":",
                        n = 0;
                      (a = !1),
                        clearTimeout(o.performance.timer),
                        e.each(s, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          s.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(s)
                            : e.each(s, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (s = []);
                    }
                  },
                  invoke: function(t, n, r) {
                    var a,
                      s,
                      l,
                      c = x;
                    return (
                      (n = n || u),
                      (r = y || r),
                      "string" == typeof t &&
                        void 0 !== c &&
                        ((t = t.split(/[\. ]/)),
                        (a = t.length - 1),
                        e.each(t, function(n, i) {
                          var r =
                            n != a
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(c[r]) && n != a) c = c[r];
                          else {
                            if (void 0 !== c[r]) return (s = c[r]), !1;
                            if (!e.isPlainObject(c[i]) || n == a)
                              return void 0 !== c[i]
                                ? ((s = c[i]), !1)
                                : (o.error(p.method, t), !1);
                            c = c[i];
                          }
                        })),
                      e.isFunction(s)
                        ? (l = s.apply(r, n))
                        : void 0 !== s && (l = s),
                      e.isArray(i)
                        ? i.push(l)
                        : void 0 !== i ? (i = [i, l]) : void 0 !== l && (i = l),
                      s
                    );
                  }
                }),
                  c
                    ? (void 0 === x && o.initialize(), o.invoke(l))
                    : (void 0 !== x && x.invoke("destroy"), o.initialize());
              }),
              void 0 !== i ? i : this
            );
          }),
          (e.fn.nag.settings = {
            name: "Nag",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            namespace: "Nag",
            persist: !1,
            displayTime: 0,
            animation: { show: "slide", hide: "slide" },
            context: !1,
            detachable: !1,
            expires: 30,
            domain: !1,
            path: "/",
            storageMethod: "cookie",
            key: "nag",
            value: "dismiss",
            error: {
              noCookieStorage:
                "$.cookie is not included. A storage solution is required.",
              noStorage:
                "Neither $.cookie or store is defined. A storage solution is required for storing state",
              method: "The method you called is not defined."
            },
            className: { bottom: "bottom", fixed: "fixed" },
            selector: { close: ".close.icon" },
            speed: 500,
            easing: "easeOutQuad",
            onHide: function() {}
          }),
          e.extend(e.easing, {
            easeOutQuad: function(e, t, n, i, o) {
              return -i * (t /= o) * (t - 2) + n;
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.popup = function(i) {
            var o,
              r = e(this),
              a = e(n),
              s = e(t),
              l = e("body"),
              c = r.selector || "",
              u = new Date().getTime(),
              d = [],
              f = arguments[0],
              p = "string" == typeof f,
              h = [].slice.call(arguments, 1);
            return (
              r.each(function() {
                var r,
                  m,
                  g,
                  v,
                  b,
                  y,
                  x = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.popup.settings, i)
                    : e.extend({}, e.fn.popup.settings),
                  w = x.selector,
                  C = x.className,
                  k = x.error,
                  S = x.metadata,
                  T = x.namespace,
                  A = "." + x.namespace,
                  E = "module-" + T,
                  R = e(this),
                  D = e(x.context),
                  P = e(x.scrollContext),
                  O = e(x.boundary),
                  j = x.target ? e(x.target) : R,
                  F = 0,
                  q = !1,
                  N = !1,
                  L = this,
                  M = R.data(E);
                (y = {
                  initialize: function() {
                    y.debug("Initializing", R),
                      y.createID(),
                      y.bind.events(),
                      !y.exists() && x.preserve && y.create(),
                      x.observeChanges && y.observeChanges(),
                      y.instantiate();
                  },
                  instantiate: function() {
                    y.verbose("Storing instance", y), (M = y), R.data(E, M);
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((g = new MutationObserver(
                        y.event.documentChanged
                      )).observe(n, { childList: !0, subtree: !0 }),
                      y.debug("Setting up mutation observer", g));
                  },
                  refresh: function() {
                    x.popup
                      ? (r = e(x.popup).eq(0))
                      : x.inline &&
                        ((r = j.nextAll(w.popup).eq(0)), (x.popup = r)),
                      x.popup
                        ? (r.addClass(C.loading),
                          (m = y.get.offsetParent()),
                          r.removeClass(C.loading),
                          x.movePopup &&
                            y.has.popup() &&
                            y.get.offsetParent(r)[0] !== m[0] &&
                            (y.debug(
                              "Moving popup to the same offset parent as target"
                            ),
                            r.detach().appendTo(m)))
                        : (m = x.inline
                            ? y.get.offsetParent(j)
                            : y.has.popup() ? y.get.offsetParent(r) : l),
                      m.is("html") &&
                        m[0] !== l[0] &&
                        (y.debug("Setting page as offset parent"), (m = l)),
                      y.get.variation() && y.set.variation();
                  },
                  reposition: function() {
                    y.refresh(), y.set.position();
                  },
                  destroy: function() {
                    y.debug("Destroying previous module"),
                      g && g.disconnect(),
                      r && !x.preserve && y.removePopup(),
                      clearTimeout(y.hideTimer),
                      clearTimeout(y.showTimer),
                      y.unbind.close(),
                      y.unbind.events(),
                      R.removeData(E);
                  },
                  event: {
                    start: function(t) {
                      var n = e.isPlainObject(x.delay) ? x.delay.show : x.delay;
                      clearTimeout(y.hideTimer),
                        N || (y.showTimer = setTimeout(y.show, n));
                    },
                    end: function() {
                      var t = e.isPlainObject(x.delay) ? x.delay.hide : x.delay;
                      clearTimeout(y.showTimer),
                        (y.hideTimer = setTimeout(y.hide, t));
                    },
                    touchstart: function(e) {
                      (N = !0), y.show();
                    },
                    resize: function() {
                      y.is.visible() && y.set.position();
                    },
                    documentChanged: function(t) {
                      [].forEach.call(t, function(t) {
                        t.removedNodes &&
                          [].forEach.call(t.removedNodes, function(t) {
                            (t == L || e(t).find(L).length > 0) &&
                              (y.debug(
                                "Element removed from DOM, tearing down events"
                              ),
                              y.destroy());
                          });
                      });
                    },
                    hideGracefully: function(t) {
                      var i = e(t.target),
                        o = e.contains(n.documentElement, t.target),
                        r = i.closest(w.popup).length > 0;
                      t && !r && o
                        ? (y.debug("Click occurred outside popup hiding popup"),
                          y.hide())
                        : y.debug("Click was inside popup, keeping popup open");
                    }
                  },
                  create: function() {
                    var t = y.get.html(),
                      n = y.get.title(),
                      i = y.get.content();
                    t || i || n
                      ? (y.debug("Creating pop-up html"),
                        t || (t = x.templates.popup({ title: n, content: i })),
                        (r = e("<div/>")
                          .addClass(C.popup)
                          .data(S.activator, R)
                          .html(t)),
                        x.inline
                          ? (y.verbose("Inserting popup element inline", r),
                            r.insertAfter(R))
                          : (y.verbose("Appending popup element to body", r),
                            r.appendTo(D)),
                        y.refresh(),
                        y.set.variation(),
                        x.hoverable && y.bind.popup(),
                        x.onCreate.call(r, L))
                      : 0 !== j.next(w.popup).length
                        ? (y.verbose("Pre-existing popup found"),
                          (x.inline = !0),
                          (x.popup = j.next(w.popup).data(S.activator, R)),
                          y.refresh(),
                          x.hoverable && y.bind.popup())
                        : x.popup
                          ? (e(x.popup).data(S.activator, R),
                            y.verbose("Used popup specified in settings"),
                            y.refresh(),
                            x.hoverable && y.bind.popup())
                          : y.debug("No content specified skipping display", L);
                  },
                  createID: function() {
                    (b = (Math.random().toString(16) + "000000000").substr(
                      2,
                      8
                    )),
                      (v = "." + b),
                      y.verbose("Creating unique id for element", b);
                  },
                  toggle: function() {
                    y.debug("Toggling pop-up"),
                      y.is.hidden()
                        ? (y.debug("Popup is hidden, showing pop-up"),
                          y.unbind.close(),
                          y.show())
                        : (y.debug("Popup is visible, hiding pop-up"),
                          y.hide());
                  },
                  show: function(e) {
                    if (
                      ((e = e || function() {}),
                      y.debug("Showing pop-up", x.transition),
                      y.is.hidden() && (!y.is.active() || !y.is.dropdown()))
                    ) {
                      if (
                        (y.exists() || y.create(), !1 === x.onShow.call(r, L))
                      )
                        return void y.debug(
                          "onShow callback returned false, cancelling popup animation"
                        );
                      x.preserve || x.popup || y.refresh(),
                        r &&
                          y.set.position() &&
                          (y.save.conditions(),
                          x.exclusive && y.hideAll(),
                          y.animate.show(e));
                    }
                  },
                  hide: function(e) {
                    if (
                      ((e = e || function() {}),
                      y.is.visible() || y.is.animating())
                    ) {
                      if (!1 === x.onHide.call(r, L))
                        return void y.debug(
                          "onHide callback returned false, cancelling popup animation"
                        );
                      y.remove.visible(),
                        y.unbind.close(),
                        y.restore.conditions(),
                        y.animate.hide(e);
                    }
                  },
                  hideAll: function() {
                    e(w.popup)
                      .filter("." + C.popupVisible)
                      .each(function() {
                        e(this)
                          .data(S.activator)
                          .popup("hide");
                      });
                  },
                  exists: function() {
                    return (
                      !!r &&
                      (x.inline || x.popup
                        ? y.has.popup()
                        : r.closest(D).length >= 1)
                    );
                  },
                  removePopup: function() {
                    y.has.popup() &&
                      !x.popup &&
                      (y.debug("Removing popup", r),
                      r.remove(),
                      (r = void 0),
                      x.onRemove.call(r, L));
                  },
                  save: {
                    conditions: function() {
                      (y.cache = { title: R.attr("title") }),
                        y.cache.title && R.removeAttr("title"),
                        y.verbose("Saving original attributes", y.cache.title);
                    }
                  },
                  restore: {
                    conditions: function() {
                      return (
                        y.cache &&
                          y.cache.title &&
                          (R.attr("title", y.cache.title),
                          y.verbose(
                            "Restoring original attributes",
                            y.cache.title
                          )),
                        !0
                      );
                    }
                  },
                  supports: {
                    svg: function() {
                      return "undefined" == typeof SVGGraphicsElement;
                    }
                  },
                  animate: {
                    show: function(t) {
                      (t = e.isFunction(t) ? t : function() {}),
                        x.transition &&
                        void 0 !== e.fn.transition &&
                        R.transition("is supported")
                          ? (y.set.visible(),
                            r.transition({
                              animation: x.transition + " in",
                              queue: !1,
                              debug: x.debug,
                              verbose: x.verbose,
                              duration: x.duration,
                              onComplete: function() {
                                y.bind.close(),
                                  t.call(r, L),
                                  x.onVisible.call(r, L);
                              }
                            }))
                          : y.error(k.noTransition);
                    },
                    hide: function(t) {
                      (t = e.isFunction(t) ? t : function() {}),
                        y.debug("Hiding pop-up"),
                        !1 !== x.onHide.call(r, L)
                          ? x.transition &&
                            void 0 !== e.fn.transition &&
                            R.transition("is supported")
                            ? r.transition({
                                animation: x.transition + " out",
                                queue: !1,
                                duration: x.duration,
                                debug: x.debug,
                                verbose: x.verbose,
                                onComplete: function() {
                                  y.reset(),
                                    t.call(r, L),
                                    x.onHidden.call(r, L);
                                }
                              })
                            : y.error(k.noTransition)
                          : y.debug(
                              "onHide callback returned false, cancelling popup animation"
                            );
                    }
                  },
                  change: {
                    content: function(e) {
                      r.html(e);
                    }
                  },
                  get: {
                    html: function() {
                      return R.removeData(S.html), R.data(S.html) || x.html;
                    },
                    title: function() {
                      return R.removeData(S.title), R.data(S.title) || x.title;
                    },
                    content: function() {
                      return (
                        R.removeData(S.content),
                        R.data(S.content) || x.content || R.attr("title")
                      );
                    },
                    variation: function() {
                      return (
                        R.removeData(S.variation),
                        R.data(S.variation) || x.variation
                      );
                    },
                    popup: function() {
                      return r;
                    },
                    popupOffset: function() {
                      return r.offset();
                    },
                    calculations: function() {
                      var e,
                        n = y.get.offsetParent(r),
                        i = j[0],
                        o = O[0] == t,
                        a =
                          x.inline || (x.popup && x.movePopup)
                            ? j.position()
                            : j.offset(),
                        l = o ? { top: 0, left: 0 } : O.offset(),
                        c = {},
                        u = o
                          ? { top: s.scrollTop(), left: s.scrollLeft() }
                          : { top: 0, left: 0 };
                      if (
                        ((c = {
                          target: {
                            element: j[0],
                            width: j.outerWidth(),
                            height: j.outerHeight(),
                            top: a.top,
                            left: a.left,
                            margin: {}
                          },
                          popup: {
                            width: r.outerWidth(),
                            height: r.outerHeight()
                          },
                          parent: {
                            width: m.outerWidth(),
                            height: m.outerHeight()
                          },
                          screen: {
                            top: l.top,
                            left: l.left,
                            scroll: { top: u.top, left: u.left },
                            width: O.width(),
                            height: O.height()
                          }
                        }),
                        n.get(0) !== m.get(0))
                      ) {
                        var d = n.offset();
                        (c.target.top -= d.top),
                          (c.target.left -= d.left),
                          (c.parent.width = n.outerWidth()),
                          (c.parent.height = n.outerHeight());
                      }
                      return (
                        x.setFluidWidth &&
                          y.is.fluid() &&
                          ((c.container = { width: r.parent().outerWidth() }),
                          (c.popup.width = c.container.width)),
                        (c.target.margin.top = x.inline
                          ? parseInt(
                              t
                                .getComputedStyle(i)
                                .getPropertyValue("margin-top"),
                              10
                            )
                          : 0),
                        (c.target.margin.left = x.inline
                          ? y.is.rtl()
                            ? parseInt(
                                t
                                  .getComputedStyle(i)
                                  .getPropertyValue("margin-right"),
                                10
                              )
                            : parseInt(
                                t
                                  .getComputedStyle(i)
                                  .getPropertyValue("margin-left"),
                                10
                              )
                          : 0),
                        (e = c.screen),
                        (c.boundary = {
                          top: e.top + e.scroll.top,
                          bottom: e.top + e.scroll.top + e.height,
                          left: e.left + e.scroll.left,
                          right: e.left + e.scroll.left + e.width
                        }),
                        c
                      );
                    },
                    id: function() {
                      return b;
                    },
                    startEvent: function() {
                      return "hover" == x.on
                        ? "mouseenter"
                        : "focus" == x.on && "focus";
                    },
                    scrollEvent: function() {
                      return "scroll";
                    },
                    endEvent: function() {
                      return "hover" == x.on
                        ? "mouseleave"
                        : "focus" == x.on && "blur";
                    },
                    distanceFromBoundary: function(e, t) {
                      var n,
                        i,
                        o = {};
                      return (
                        (n = (t = t || y.get.calculations()).popup),
                        (i = t.boundary),
                        e &&
                          ((o = {
                            top: e.top - i.top,
                            left: e.left - i.left,
                            right: i.right - (e.left + n.width),
                            bottom: i.bottom - (e.top + n.height)
                          }),
                          y.verbose(
                            "Distance from boundaries determined",
                            e,
                            o
                          )),
                        o
                      );
                    },
                    offsetParent: function(t) {
                      var n = (void 0 !== t ? t[0] : j[0]).parentNode,
                        i = e(n);
                      if (n)
                        for (
                          var o = "none" === i.css("transform"),
                            r = "static" === i.css("position"),
                            a = i.is("body");
                          n && !a && r && o;

                        )
                          (n = n.parentNode),
                            (o = "none" === (i = e(n)).css("transform")),
                            (r = "static" === i.css("position")),
                            (a = i.is("body"));
                      return i && i.length > 0 ? i : e();
                    },
                    positions: function() {
                      return {
                        "top left": !1,
                        "top center": !1,
                        "top right": !1,
                        "bottom left": !1,
                        "bottom center": !1,
                        "bottom right": !1,
                        "left center": !1,
                        "right center": !1
                      };
                    },
                    nextPosition: function(e) {
                      var t = e.split(" "),
                        n = t[0],
                        i = t[1],
                        o = "top" == n || "bottom" == n,
                        r = !1,
                        a = !1,
                        s = !1;
                      return (
                        q ||
                          (y.verbose("All available positions available"),
                          (q = y.get.positions())),
                        y.debug("Recording last position tried", e),
                        (q[e] = !0),
                        "opposite" === x.prefer &&
                          ((s = (s = [
                            {
                              top: "bottom",
                              bottom: "top",
                              left: "right",
                              right: "left"
                            }[n],
                            i
                          ]).join(" ")),
                          (r = !0 === q[s]),
                          y.debug("Trying opposite strategy", s)),
                        "adjacent" === x.prefer &&
                          o &&
                          ((s = (s = [
                            n,
                            { left: "center", center: "right", right: "left" }[
                              i
                            ]
                          ]).join(" ")),
                          (a = !0 === q[s]),
                          y.debug("Trying adjacent strategy", s)),
                        (a || r) &&
                          (y.debug("Using backup position", s),
                          (s = {
                            "top left": "top center",
                            "top center": "top right",
                            "top right": "right center",
                            "right center": "bottom right",
                            "bottom right": "bottom center",
                            "bottom center": "bottom left",
                            "bottom left": "left center",
                            "left center": "top left"
                          }[e])),
                        s
                      );
                    }
                  },
                  set: {
                    position: function(e, t) {
                      if (0 !== j.length && 0 !== r.length) {
                        var n, i, o, a, s, l, c, u;
                        if (
                          ((t = t || y.get.calculations()),
                          (e = e || R.data(S.position) || x.position),
                          (n = R.data(S.offset) || x.offset),
                          (i = x.distanceAway),
                          (o = t.target),
                          (a = t.popup),
                          (s = t.parent),
                          y.should.centerArrow(t) &&
                            (y.verbose(
                              "Adjusting offset to center arrow on small target element"
                            ),
                            ("top left" != e && "bottom left" != e) ||
                              ((n += o.width / 2),
                              (n -= x.arrowPixelsFromEdge)),
                            ("top right" != e && "bottom right" != e) ||
                              ((n -= o.width / 2),
                              (n += x.arrowPixelsFromEdge))),
                          0 === o.width &&
                            0 === o.height &&
                            !y.is.svg(o.element))
                        )
                          return (
                            y.debug("Popup target is hidden, no action taken"),
                            !1
                          );
                        switch ((x.inline &&
                          (y.debug("Adding margin to calculation", o.margin),
                          "left center" == e || "right center" == e
                            ? ((n += o.margin.top), (i += -o.margin.left))
                            : "top left" == e ||
                              "top center" == e ||
                              "top right" == e
                              ? ((n += o.margin.left), (i -= o.margin.top))
                              : ((n += o.margin.left), (i += o.margin.top))),
                        y.debug(
                          "Determining popup position from calculations",
                          e,
                          t
                        ),
                        y.is.rtl() &&
                          ((e = e.replace(/left|right/g, function(e) {
                            return "left" == e ? "right" : "left";
                          })),
                          y.debug("RTL: Popup position updated", e)),
                        F == x.maxSearchDepth &&
                          "string" == typeof x.lastResort &&
                          (e = x.lastResort),
                        e)) {
                          case "top left":
                            l = {
                              top: "auto",
                              bottom: s.height - o.top + i,
                              left: o.left + n,
                              right: "auto"
                            };
                            break;
                          case "top center":
                            l = {
                              bottom: s.height - o.top + i,
                              left: o.left + o.width / 2 - a.width / 2 + n,
                              top: "auto",
                              right: "auto"
                            };
                            break;
                          case "top right":
                            l = {
                              bottom: s.height - o.top + i,
                              right: s.width - o.left - o.width - n,
                              top: "auto",
                              left: "auto"
                            };
                            break;
                          case "left center":
                            l = {
                              top: o.top + o.height / 2 - a.height / 2 + n,
                              right: s.width - o.left + i,
                              left: "auto",
                              bottom: "auto"
                            };
                            break;
                          case "right center":
                            l = {
                              top: o.top + o.height / 2 - a.height / 2 + n,
                              left: o.left + o.width + i,
                              bottom: "auto",
                              right: "auto"
                            };
                            break;
                          case "bottom left":
                            l = {
                              top: o.top + o.height + i,
                              left: o.left + n,
                              bottom: "auto",
                              right: "auto"
                            };
                            break;
                          case "bottom center":
                            l = {
                              top: o.top + o.height + i,
                              left: o.left + o.width / 2 - a.width / 2 + n,
                              bottom: "auto",
                              right: "auto"
                            };
                            break;
                          case "bottom right":
                            l = {
                              top: o.top + o.height + i,
                              right: s.width - o.left - o.width - n,
                              left: "auto",
                              bottom: "auto"
                            };
                        }
                        if (
                          (void 0 === l && y.error(k.invalidPosition, e),
                          y.debug("Calculated popup positioning values", l),
                          r
                            .css(l)
                            .removeClass(C.position)
                            .addClass(e)
                            .addClass(C.loading),
                          (c = y.get.popupOffset()),
                          (u = y.get.distanceFromBoundary(c, t)),
                          y.is.offstage(u, e))
                        ) {
                          if (
                            (y.debug("Position is outside viewport", e),
                            F < x.maxSearchDepth)
                          )
                            return (
                              F++,
                              (e = y.get.nextPosition(e)),
                              y.debug("Trying new position", e),
                              !!r && y.set.position(e, t)
                            );
                          if (!x.lastResort)
                            return (
                              y.debug(
                                "Popup could not find a position to display",
                                r
                              ),
                              y.error(k.cannotPlace, L),
                              y.remove.attempts(),
                              y.remove.loading(),
                              y.reset(),
                              x.onUnplaceable.call(r, L),
                              !1
                            );
                          y.debug(
                            "No position found, showing with last position"
                          );
                        }
                        return (
                          y.debug("Position is on stage", e),
                          y.remove.attempts(),
                          y.remove.loading(),
                          x.setFluidWidth &&
                            y.is.fluid() &&
                            y.set.fluidWidth(t),
                          !0
                        );
                      }
                      y.error(k.notFound);
                    },
                    fluidWidth: function(e) {
                      (e = e || y.get.calculations()),
                        y.debug(
                          "Automatically setting element width to parent width",
                          e.parent.width
                        ),
                        r.css("width", e.container.width);
                    },
                    variation: function(e) {
                      (e = e || y.get.variation()) &&
                        y.has.popup() &&
                        (y.verbose("Adding variation to popup", e),
                        r.addClass(e));
                    },
                    visible: function() {
                      R.addClass(C.visible);
                    }
                  },
                  remove: {
                    loading: function() {
                      r.removeClass(C.loading);
                    },
                    variation: function(e) {
                      (e = e || y.get.variation()) &&
                        (y.verbose("Removing variation", e), r.removeClass(e));
                    },
                    visible: function() {
                      R.removeClass(C.visible);
                    },
                    attempts: function() {
                      y.verbose("Resetting all searched positions"),
                        (F = 0),
                        (q = !1);
                    }
                  },
                  bind: {
                    events: function() {
                      y.debug("Binding popup events to module"),
                        "click" == x.on && R.on("click" + A, y.toggle),
                        "hover" == x.on &&
                          R.on("touchstart" + A, y.event.touchstart),
                        y.get.startEvent() &&
                          R.on(y.get.startEvent() + A, y.event.start).on(
                            y.get.endEvent() + A,
                            y.event.end
                          ),
                        x.target && y.debug("Target set to element", j),
                        s.on("resize" + v, y.event.resize);
                    },
                    popup: function() {
                      y.verbose(
                        "Allowing hover events on popup to prevent closing"
                      ),
                        r &&
                          y.has.popup() &&
                          r
                            .on("mouseenter" + A, y.event.start)
                            .on("mouseleave" + A, y.event.end);
                    },
                    close: function() {
                      (!0 === x.hideOnScroll ||
                        ("auto" == x.hideOnScroll && "click" != x.on)) &&
                        y.bind.closeOnScroll(),
                        "hover" == x.on && N && y.bind.touchClose(),
                        "click" == x.on && x.closable && y.bind.clickaway();
                    },
                    closeOnScroll: function() {
                      y.verbose("Binding scroll close event to document"),
                        P.one(y.get.scrollEvent() + v, y.event.hideGracefully);
                    },
                    touchClose: function() {
                      y.verbose("Binding popup touchclose event to document"),
                        a.on("touchstart" + v, function(e) {
                          y.verbose("Touched away from popup"),
                            y.event.hideGracefully.call(L, e);
                        });
                    },
                    clickaway: function() {
                      y.verbose("Binding popup close event to document"),
                        a.on("click" + v, function(e) {
                          y.verbose("Clicked away from popup"),
                            y.event.hideGracefully.call(L, e);
                        });
                    }
                  },
                  unbind: {
                    events: function() {
                      s.off(v), R.off(A);
                    },
                    close: function() {
                      a.off(v), P.off(v);
                    }
                  },
                  has: {
                    popup: function() {
                      return r && r.length > 0;
                    }
                  },
                  should: {
                    centerArrow: function(e) {
                      return (
                        !y.is.basic() &&
                        e.target.width <= 2 * x.arrowPixelsFromEdge
                      );
                    }
                  },
                  is: {
                    offstage: function(t, n) {
                      var i = [];
                      return (
                        e.each(t, function(e, t) {
                          t < -x.jitter &&
                            (y.debug(
                              "Position exceeds allowable distance from edge",
                              e,
                              t,
                              n
                            ),
                            i.push(e));
                        }),
                        i.length > 0
                      );
                    },
                    svg: function(e) {
                      return (
                        y.supports.svg() && e instanceof SVGGraphicsElement
                      );
                    },
                    basic: function() {
                      return R.hasClass(C.basic);
                    },
                    active: function() {
                      return R.hasClass(C.active);
                    },
                    animating: function() {
                      return void 0 !== r && r.hasClass(C.animating);
                    },
                    fluid: function() {
                      return void 0 !== r && r.hasClass(C.fluid);
                    },
                    visible: function() {
                      return void 0 !== r && r.hasClass(C.popupVisible);
                    },
                    dropdown: function() {
                      return R.hasClass(C.dropdown);
                    },
                    hidden: function() {
                      return !y.is.visible();
                    },
                    rtl: function() {
                      return "rtl" == R.css("direction");
                    }
                  },
                  reset: function() {
                    y.remove.visible(),
                      x.preserve
                        ? void 0 !== e.fn.transition &&
                          r.transition("remove transition")
                        : y.removePopup();
                  },
                  setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t);
                    else {
                      if (void 0 === n) return x[t];
                      x[t] = n;
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, y, t);
                    else {
                      if (void 0 === n) return y[t];
                      y[t] = n;
                    }
                  },
                  debug: function() {
                    !x.silent &&
                      x.debug &&
                      (x.performance
                        ? y.performance.log(arguments)
                        : ((y.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            x.name + ":"
                          )),
                          y.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !x.silent &&
                      x.verbose &&
                      x.debug &&
                      (x.performance
                        ? y.performance.log(arguments)
                        : ((y.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            x.name + ":"
                          )),
                          y.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    x.silent ||
                      ((y.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        x.name + ":"
                      )),
                      y.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      x.performance &&
                        ((n = (t = new Date().getTime()) - (u || t)),
                        (u = t),
                        d.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: L,
                          "Execution Time": n
                        })),
                        clearTimeout(y.performance.timer),
                        (y.performance.timer = setTimeout(
                          y.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = x.name + ":",
                        n = 0;
                      (u = !1),
                        clearTimeout(y.performance.timer),
                        e.each(d, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        c && (t += " '" + c + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          d.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(d)
                            : e.each(d, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (d = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = M;
                    return (
                      (n = n || h),
                      (i = L || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  p
                    ? (void 0 === M && y.initialize(), y.invoke(f))
                    : (void 0 !== M && M.invoke("destroy"), y.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.popup.settings = {
            name: "Popup",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            namespace: "popup",
            observeChanges: !0,
            onCreate: function() {},
            onRemove: function() {},
            onShow: function() {},
            onVisible: function() {},
            onHide: function() {},
            onUnplaceable: function() {},
            onHidden: function() {},
            on: "hover",
            boundary: t,
            addTouchEvents: !0,
            position: "top left",
            variation: "",
            movePopup: !0,
            target: !1,
            popup: !1,
            inline: !1,
            preserve: !1,
            hoverable: !1,
            content: !1,
            html: !1,
            title: !1,
            closable: !0,
            hideOnScroll: "auto",
            exclusive: !1,
            context: "body",
            scrollContext: t,
            prefer: "opposite",
            lastResort: !1,
            arrowPixelsFromEdge: 20,
            delay: { show: 50, hide: 70 },
            setFluidWidth: !0,
            duration: 200,
            transition: "scale",
            distanceAway: 0,
            jitter: 2,
            offset: 0,
            maxSearchDepth: 15,
            error: {
              invalidPosition:
                "The position you specified is not a valid position",
              cannotPlace:
                "Popup does not fit within the boundaries of the viewport",
              method: "The method you called is not defined.",
              noTransition:
                "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
              notFound:
                "The target or popup you specified does not exist on the page"
            },
            metadata: {
              activator: "activator",
              content: "content",
              html: "html",
              offset: "offset",
              position: "position",
              title: "title",
              variation: "variation"
            },
            className: {
              active: "active",
              basic: "basic",
              animating: "animating",
              dropdown: "dropdown",
              fluid: "fluid",
              loading: "loading",
              popup: "ui popup",
              position: "top left center bottom right",
              visible: "visible",
              popupVisible: "visible"
            },
            selector: { popup: ".ui.popup" },
            templates: {
              escape: function(e) {
                var t = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                  "`": "&#x60;"
                };
                return /[&<>"'`]/.test(e)
                  ? e.replace(/[&<>"'`]/g, function(e) {
                      return t[e];
                    })
                  : e;
              },
              popup: function(t) {
                var n = "",
                  i = e.fn.popup.settings.templates.escape;
                return (
                  void 0 !== typeof t &&
                    (void 0 !== typeof t.title &&
                      t.title &&
                      ((t.title = i(t.title)),
                      (n += '<div class="header">' + t.title + "</div>")),
                    void 0 !== typeof t.content &&
                      t.content &&
                      ((t.content = i(t.content)),
                      (n += '<div class="content">' + t.content + "</div>"))),
                  n
                );
              }
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (void 0 !==
          (t =
            void 0 !== t && t.Math == Math
              ? t
              : "undefined" != typeof self && self.Math == Math
                ? self
                : Function("return this")()) &&
          t.Math == Math) ||
          ("undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        (e.fn.progress = function(t) {
          var i,
            o = e(this),
            r = o.selector || "",
            a = new Date().getTime(),
            s = [],
            l = arguments[0],
            c = "string" == typeof l,
            u = [].slice.call(arguments, 1);
          return (
            o.each(function() {
              var o,
                d = e.isPlainObject(t)
                  ? e.extend(!0, {}, e.fn.progress.settings, t)
                  : e.extend({}, e.fn.progress.settings),
                f = d.className,
                p = d.metadata,
                h = d.namespace,
                m = d.selector,
                g = d.error,
                v = "." + h,
                b = "module-" + h,
                y = e(this),
                x = e(this).find(m.bar),
                w = e(this).find(m.progress),
                C = e(this).find(m.label),
                k = this,
                S = y.data(b),
                T = !1;
              (o = {
                initialize: function() {
                  o.debug("Initializing progress bar", d),
                    o.set.duration(),
                    o.set.transitionEvent(),
                    o.read.metadata(),
                    o.read.settings(),
                    o.instantiate();
                },
                instantiate: function() {
                  o.verbose("Storing instance of progress", o),
                    (S = o),
                    y.data(b, o);
                },
                destroy: function() {
                  o.verbose("Destroying previous progress for", y),
                    clearInterval(S.interval),
                    o.remove.state(),
                    y.removeData(b),
                    (S = void 0);
                },
                reset: function() {
                  o.remove.nextValue(), o.update.progress(0);
                },
                complete: function() {
                  (void 0 === o.percent || o.percent < 100) &&
                    (o.remove.progressPoll(), o.set.percent(100));
                },
                read: {
                  metadata: function() {
                    var e = {
                      percent: y.data(p.percent),
                      total: y.data(p.total),
                      value: y.data(p.value)
                    };
                    e.percent &&
                      (o.debug(
                        "Current percent value set from metadata",
                        e.percent
                      ),
                      o.set.percent(e.percent)),
                      e.total &&
                        (o.debug("Total value set from metadata", e.total),
                        o.set.total(e.total)),
                      e.value &&
                        (o.debug("Current value set from metadata", e.value),
                        o.set.value(e.value),
                        o.set.progress(e.value));
                  },
                  settings: function() {
                    !1 !== d.total &&
                      (o.debug("Current total set in settings", d.total),
                      o.set.total(d.total)),
                      !1 !== d.value &&
                        (o.debug("Current value set in settings", d.value),
                        o.set.value(d.value),
                        o.set.progress(o.value)),
                      !1 !== d.percent &&
                        (o.debug("Current percent set in settings", d.percent),
                        o.set.percent(d.percent));
                  }
                },
                bind: {
                  transitionEnd: function(e) {
                    var t = o.get.transitionEnd();
                    x.one(t + v, function(t) {
                      clearTimeout(o.failSafeTimer), e.call(this, t);
                    }),
                      (o.failSafeTimer = setTimeout(function() {
                        x.triggerHandler(t);
                      }, d.duration + d.failSafeDelay)),
                      o.verbose("Adding fail safe timer", o.timer);
                  }
                },
                increment: function(e) {
                  var t, n;
                  o.has.total()
                    ? (n = (t = o.get.value()) + (e = e || 1))
                    : ((n =
                        (t = o.get.percent()) + (e = e || o.get.randomValue())),
                      100,
                      o.debug("Incrementing percentage by", t, n)),
                    (n = o.get.normalizedValue(n)),
                    o.set.progress(n);
                },
                decrement: function(e) {
                  var t, n;
                  o.get.total()
                    ? ((n = (t = o.get.value()) - (e = e || 1)),
                      o.debug("Decrementing value by", e, t))
                    : ((n =
                        (t = o.get.percent()) - (e = e || o.get.randomValue())),
                      o.debug("Decrementing percentage by", e, t)),
                    (n = o.get.normalizedValue(n)),
                    o.set.progress(n);
                },
                has: {
                  progressPoll: function() {
                    return o.progressPoll;
                  },
                  total: function() {
                    return !1 !== o.get.total();
                  }
                },
                get: {
                  text: function(e) {
                    var t = o.value || 0,
                      n = o.total || 0,
                      i = T ? o.get.displayPercent() : o.percent || 0,
                      r = o.total > 0 ? n - t : 100 - i;
                    return (
                      (e = (e = e || "")
                        .replace("{value}", t)
                        .replace("{total}", n)
                        .replace("{left}", r)
                        .replace("{percent}", i)),
                      o.verbose("Adding variables to progress bar text", e),
                      e
                    );
                  },
                  normalizedValue: function(e) {
                    if (e < 0)
                      return o.debug("Value cannot decrement below 0"), 0;
                    if (o.has.total()) {
                      if (e > o.total)
                        return (
                          o.debug(
                            "Value cannot increment above total",
                            o.total
                          ),
                          o.total
                        );
                    } else if (e > 100)
                      return (
                        o.debug("Value cannot increment above 100 percent"), 100
                      );
                    return e;
                  },
                  updateInterval: function() {
                    return "auto" == d.updateInterval
                      ? d.duration
                      : d.updateInterval;
                  },
                  randomValue: function() {
                    return (
                      o.debug("Generating random increment percentage"),
                      Math.floor(Math.random() * d.random.max + d.random.min)
                    );
                  },
                  numericValue: function(e) {
                    return "string" == typeof e
                      ? "" !== e.replace(/[^\d.]/g, "") &&
                          +e.replace(/[^\d.]/g, "")
                      : e;
                  },
                  transitionEnd: function() {
                    var e,
                      t = n.createElement("element"),
                      i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                      };
                    for (e in i) if (void 0 !== t.style[e]) return i[e];
                  },
                  displayPercent: function() {
                    var e = x.width(),
                      t = y.width(),
                      n =
                        e > parseInt(x.css("min-width"), 10)
                          ? e / t * 100
                          : o.percent;
                    return d.precision > 0
                      ? Math.round(n * (10 * d.precision)) / (10 * d.precision)
                      : Math.round(n);
                  },
                  percent: function() {
                    return o.percent || 0;
                  },
                  value: function() {
                    return o.nextValue || o.value || 0;
                  },
                  total: function() {
                    return o.total || !1;
                  }
                },
                create: {
                  progressPoll: function() {
                    o.progressPoll = setTimeout(function() {
                      o.update.toNextValue(), o.remove.progressPoll();
                    }, o.get.updateInterval());
                  }
                },
                is: {
                  complete: function() {
                    return o.is.success() || o.is.warning() || o.is.error();
                  },
                  success: function() {
                    return y.hasClass(f.success);
                  },
                  warning: function() {
                    return y.hasClass(f.warning);
                  },
                  error: function() {
                    return y.hasClass(f.error);
                  },
                  active: function() {
                    return y.hasClass(f.active);
                  },
                  visible: function() {
                    return y.is(":visible");
                  }
                },
                remove: {
                  progressPoll: function() {
                    o.verbose("Removing progress poll timer"),
                      o.progressPoll &&
                        (clearTimeout(o.progressPoll), delete o.progressPoll);
                  },
                  nextValue: function() {
                    o.verbose("Removing progress value stored for next update"),
                      delete o.nextValue;
                  },
                  state: function() {
                    o.verbose("Removing stored state"),
                      delete o.total,
                      delete o.percent,
                      delete o.value;
                  },
                  active: function() {
                    o.verbose("Removing active state"), y.removeClass(f.active);
                  },
                  success: function() {
                    o.verbose("Removing success state"),
                      y.removeClass(f.success);
                  },
                  warning: function() {
                    o.verbose("Removing warning state"),
                      y.removeClass(f.warning);
                  },
                  error: function() {
                    o.verbose("Removing error state"), y.removeClass(f.error);
                  }
                },
                set: {
                  barWidth: function(e) {
                    e > 100
                      ? o.error(g.tooHigh, e)
                      : e < 0
                        ? o.error(g.tooLow, e)
                        : (x.css("width", e + "%"),
                          y.attr("data-percent", parseInt(e, 10)));
                  },
                  duration: function(e) {
                    (e =
                      "number" == typeof (e = e || d.duration) ? e + "ms" : e),
                      o.verbose("Setting progress bar transition duration", e),
                      x.css({ "transition-duration": e });
                  },
                  percent: function(e) {
                    (e = "string" == typeof e ? +e.replace("%", "") : e),
                      (e =
                        d.precision > 0
                          ? Math.round(e * (10 * d.precision)) /
                            (10 * d.precision)
                          : Math.round(e)),
                      (o.percent = e),
                      o.has.total() ||
                        ((o.value =
                          d.precision > 0
                            ? Math.round(
                                e / 100 * o.total * (10 * d.precision)
                              ) /
                              (10 * d.precision)
                            : Math.round(e / 100 * o.total * 10) / 10),
                        d.limitValues &&
                          (o.value =
                            o.value > 100 ? 100 : o.value < 0 ? 0 : o.value)),
                      o.set.barWidth(e),
                      o.set.labelInterval(),
                      o.set.labels(),
                      d.onChange.call(k, e, o.value, o.total);
                  },
                  labelInterval: function() {
                    clearInterval(o.interval),
                      o.bind.transitionEnd(function() {
                        o.verbose(
                          "Bar finished animating, removing continuous label updates"
                        ),
                          clearInterval(o.interval),
                          (T = !1),
                          o.set.labels();
                      }),
                      (T = !0),
                      (o.interval = setInterval(function() {
                        e.contains(n.documentElement, k) ||
                          (clearInterval(o.interval), (T = !1)),
                          o.set.labels();
                      }, d.framerate));
                  },
                  labels: function() {
                    o.verbose("Setting both bar progress and outer label text"),
                      o.set.barLabel(),
                      o.set.state();
                  },
                  label: function(e) {
                    (e = e || "") &&
                      ((e = o.get.text(e)),
                      o.verbose("Setting label to text", e),
                      C.text(e));
                  },
                  state: function(e) {
                    100 === (e = void 0 !== e ? e : o.percent)
                      ? d.autoSuccess &&
                        !(o.is.warning() || o.is.error() || o.is.success())
                        ? (o.set.success(),
                          o.debug("Automatically triggering success at 100%"))
                        : (o.verbose("Reached 100% removing active state"),
                          o.remove.active(),
                          o.remove.progressPoll())
                      : e > 0
                        ? (o.verbose("Adjusting active progress bar label", e),
                          o.set.active())
                        : (o.remove.active(), o.set.label(d.text.active));
                  },
                  barLabel: function(e) {
                    void 0 !== e
                      ? w.text(o.get.text(e))
                      : "ratio" == d.label && o.total
                        ? (o.verbose("Adding ratio to bar label"),
                          w.text(o.get.text(d.text.ratio)))
                        : "percent" == d.label &&
                          (o.verbose("Adding percentage to bar label"),
                          w.text(o.get.text(d.text.percent)));
                  },
                  active: function(e) {
                    (e = e || d.text.active),
                      o.debug("Setting active state"),
                      d.showActivity && !o.is.active() && y.addClass(f.active),
                      o.remove.warning(),
                      o.remove.error(),
                      o.remove.success(),
                      (e = d.onLabelUpdate("active", e, o.value, o.total)) &&
                        o.set.label(e),
                      o.bind.transitionEnd(function() {
                        d.onActive.call(k, o.value, o.total);
                      });
                  },
                  success: function(e) {
                    (e = e || d.text.success || d.text.active),
                      o.debug("Setting success state"),
                      y.addClass(f.success),
                      o.remove.active(),
                      o.remove.warning(),
                      o.remove.error(),
                      o.complete(),
                      d.text.success
                        ? ((e = d.onLabelUpdate(
                            "success",
                            e,
                            o.value,
                            o.total
                          )),
                          o.set.label(e))
                        : ((e = d.onLabelUpdate("active", e, o.value, o.total)),
                          o.set.label(e)),
                      o.bind.transitionEnd(function() {
                        d.onSuccess.call(k, o.total);
                      });
                  },
                  warning: function(e) {
                    (e = e || d.text.warning),
                      o.debug("Setting warning state"),
                      y.addClass(f.warning),
                      o.remove.active(),
                      o.remove.success(),
                      o.remove.error(),
                      o.complete(),
                      (e = d.onLabelUpdate("warning", e, o.value, o.total)) &&
                        o.set.label(e),
                      o.bind.transitionEnd(function() {
                        d.onWarning.call(k, o.value, o.total);
                      });
                  },
                  error: function(e) {
                    (e = e || d.text.error),
                      o.debug("Setting error state"),
                      y.addClass(f.error),
                      o.remove.active(),
                      o.remove.success(),
                      o.remove.warning(),
                      o.complete(),
                      (e = d.onLabelUpdate("error", e, o.value, o.total)) &&
                        o.set.label(e),
                      o.bind.transitionEnd(function() {
                        d.onError.call(k, o.value, o.total);
                      });
                  },
                  transitionEvent: function() {
                    o.get.transitionEnd();
                  },
                  total: function(e) {
                    o.total = e;
                  },
                  value: function(e) {
                    o.value = e;
                  },
                  progress: function(e) {
                    o.has.progressPoll()
                      ? (o.debug(
                          "Updated within interval, setting next update to use new value",
                          e
                        ),
                        o.set.nextValue(e))
                      : (o.debug(
                          "First update in progress update interval, immediately updating",
                          e
                        ),
                        o.update.progress(e),
                        o.create.progressPoll());
                  },
                  nextValue: function(e) {
                    o.nextValue = e;
                  }
                },
                update: {
                  toNextValue: function() {
                    var e = o.nextValue;
                    e &&
                      (o.debug(
                        "Update interval complete using last updated value",
                        e
                      ),
                      o.update.progress(e),
                      o.remove.nextValue());
                  },
                  progress: function(e) {
                    var t;
                    !1 === (e = o.get.numericValue(e)) &&
                      o.error(g.nonNumeric, e),
                      (e = o.get.normalizedValue(e)),
                      o.has.total()
                        ? (o.set.value(e),
                          (t = e / o.total * 100),
                          o.debug("Calculating percent complete from total", t),
                          o.set.percent(t))
                        : ((t = e),
                          o.debug("Setting value to exact percentage value", t),
                          o.set.percent(t));
                  }
                },
                setting: function(t, n) {
                  if ((o.debug("Changing setting", t, n), e.isPlainObject(t)))
                    e.extend(!0, d, t);
                  else {
                    if (void 0 === n) return d[t];
                    e.isPlainObject(d[t]) ? e.extend(!0, d[t], n) : (d[t] = n);
                  }
                },
                internal: function(t, n) {
                  if (e.isPlainObject(t)) e.extend(!0, o, t);
                  else {
                    if (void 0 === n) return o[t];
                    o[t] = n;
                  }
                },
                debug: function() {
                  !d.silent &&
                    d.debug &&
                    (d.performance
                      ? o.performance.log(arguments)
                      : ((o.debug = Function.prototype.bind.call(
                          console.info,
                          console,
                          d.name + ":"
                        )),
                        o.debug.apply(console, arguments)));
                },
                verbose: function() {
                  !d.silent &&
                    d.verbose &&
                    d.debug &&
                    (d.performance
                      ? o.performance.log(arguments)
                      : ((o.verbose = Function.prototype.bind.call(
                          console.info,
                          console,
                          d.name + ":"
                        )),
                        o.verbose.apply(console, arguments)));
                },
                error: function() {
                  d.silent ||
                    ((o.error = Function.prototype.bind.call(
                      console.error,
                      console,
                      d.name + ":"
                    )),
                    o.error.apply(console, arguments));
                },
                performance: {
                  log: function(e) {
                    var t, n;
                    d.performance &&
                      ((n = (t = new Date().getTime()) - (a || t)),
                      (a = t),
                      s.push({
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        Element: k,
                        "Execution Time": n
                      })),
                      clearTimeout(o.performance.timer),
                      (o.performance.timer = setTimeout(
                        o.performance.display,
                        500
                      ));
                  },
                  display: function() {
                    var t = d.name + ":",
                      n = 0;
                    (a = !1),
                      clearTimeout(o.performance.timer),
                      e.each(s, function(e, t) {
                        n += t["Execution Time"];
                      }),
                      (t += " " + n + "ms"),
                      r && (t += " '" + r + "'"),
                      (void 0 !== console.group || void 0 !== console.table) &&
                        s.length > 0 &&
                        (console.groupCollapsed(t),
                        console.table
                          ? console.table(s)
                          : e.each(s, function(e, t) {
                              console.log(
                                t.Name + ": " + t["Execution Time"] + "ms"
                              );
                            }),
                        console.groupEnd()),
                      (s = []);
                  }
                },
                invoke: function(t, n, r) {
                  var a,
                    s,
                    l,
                    c = S;
                  return (
                    (n = n || u),
                    (r = k || r),
                    "string" == typeof t &&
                      void 0 !== c &&
                      ((t = t.split(/[\. ]/)),
                      (a = t.length - 1),
                      e.each(t, function(n, i) {
                        var r =
                          n != a
                            ? i +
                              t[n + 1].charAt(0).toUpperCase() +
                              t[n + 1].slice(1)
                            : t;
                        if (e.isPlainObject(c[r]) && n != a) c = c[r];
                        else {
                          if (void 0 !== c[r]) return (s = c[r]), !1;
                          if (!e.isPlainObject(c[i]) || n == a)
                            return void 0 !== c[i]
                              ? ((s = c[i]), !1)
                              : (o.error(g.method, t), !1);
                          c = c[i];
                        }
                      })),
                    e.isFunction(s)
                      ? (l = s.apply(r, n))
                      : void 0 !== s && (l = s),
                    e.isArray(i)
                      ? i.push(l)
                      : void 0 !== i ? (i = [i, l]) : void 0 !== l && (i = l),
                    s
                  );
                }
              }),
                c
                  ? (void 0 === S && o.initialize(), o.invoke(l))
                  : (void 0 !== S && S.invoke("destroy"), o.initialize());
            }),
            void 0 !== i ? i : this
          );
        }),
          (e.fn.progress.settings = {
            name: "Progress",
            namespace: "progress",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            random: { min: 2, max: 5 },
            duration: 300,
            updateInterval: "auto",
            autoSuccess: !0,
            showActivity: !0,
            limitValues: !0,
            label: "percent",
            precision: 0,
            framerate: 1e3 / 30,
            percent: !1,
            total: !1,
            value: !1,
            failSafeDelay: 100,
            onLabelUpdate: function(e, t, n, i) {
              return t;
            },
            onChange: function(e, t, n) {},
            onSuccess: function(e) {},
            onActive: function(e, t) {},
            onError: function(e, t) {},
            onWarning: function(e, t) {},
            error: {
              method: "The method you called is not defined.",
              nonNumeric: "Progress value is non numeric",
              tooHigh: "Value specified is above 100%",
              tooLow: "Value specified is below 0%"
            },
            regExp: { variable: /\{\$*[A-z0-9]+\}/g },
            metadata: { percent: "percent", total: "total", value: "value" },
            selector: {
              bar: "> .bar",
              label: "> .label",
              progress: ".bar > .progress"
            },
            text: {
              active: !1,
              error: !1,
              success: !1,
              warning: !1,
              percent: "{percent}%",
              ratio: "{value} of {total}"
            },
            className: {
              active: "active",
              error: "error",
              success: "success",
              warning: "warning"
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.rating = function(t) {
            var n,
              i = e(this),
              o = i.selector || "",
              r = new Date().getTime(),
              a = [],
              s = arguments[0],
              l = "string" == typeof s,
              c = [].slice.call(arguments, 1);
            return (
              i.each(function() {
                var u,
                  d,
                  f = e.isPlainObject(t)
                    ? e.extend(!0, {}, e.fn.rating.settings, t)
                    : e.extend({}, e.fn.rating.settings),
                  p = f.namespace,
                  h = f.className,
                  m = f.metadata,
                  g = f.selector,
                  v = (f.error, "." + p),
                  b = "module-" + p,
                  y = this,
                  x = e(this).data(b),
                  w = e(this),
                  C = w.find(g.icon);
                (d = {
                  initialize: function() {
                    d.verbose("Initializing rating module", f),
                      0 === C.length && d.setup.layout(),
                      f.interactive ? d.enable() : d.disable(),
                      d.set.initialLoad(),
                      d.set.rating(d.get.initialRating()),
                      d.remove.initialLoad(),
                      d.instantiate();
                  },
                  instantiate: function() {
                    d.verbose("Instantiating module", f), (x = d), w.data(b, d);
                  },
                  destroy: function() {
                    d.verbose("Destroying previous instance", x),
                      d.remove.events(),
                      w.removeData(b);
                  },
                  refresh: function() {
                    C = w.find(g.icon);
                  },
                  setup: {
                    layout: function() {
                      var t = d.get.maxRating(),
                        n = e.fn.rating.settings.templates.icon(t);
                      d.debug("Generating icon html dynamically"),
                        w.html(n),
                        d.refresh();
                    }
                  },
                  event: {
                    mouseenter: function() {
                      var t = e(this);
                      t.nextAll().removeClass(h.selected),
                        w.addClass(h.selected),
                        t
                          .addClass(h.selected)
                          .prevAll()
                          .addClass(h.selected);
                    },
                    mouseleave: function() {
                      w.removeClass(h.selected), C.removeClass(h.selected);
                    },
                    click: function() {
                      var t = e(this),
                        n = d.get.rating(),
                        i = C.index(t) + 1;
                      ("auto" == f.clearable ? 1 === C.length : f.clearable) &&
                      n == i
                        ? d.clearRating()
                        : d.set.rating(i);
                    }
                  },
                  clearRating: function() {
                    d.debug("Clearing current rating"), d.set.rating(0);
                  },
                  bind: {
                    events: function() {
                      d.verbose("Binding events"),
                        w
                          .on("mouseenter" + v, g.icon, d.event.mouseenter)
                          .on("mouseleave" + v, g.icon, d.event.mouseleave)
                          .on("click" + v, g.icon, d.event.click);
                    }
                  },
                  remove: {
                    events: function() {
                      d.verbose("Removing events"), w.off(v);
                    },
                    initialLoad: function() {
                      u = !1;
                    }
                  },
                  enable: function() {
                    d.debug("Setting rating to interactive mode"),
                      d.bind.events(),
                      w.removeClass(h.disabled);
                  },
                  disable: function() {
                    d.debug("Setting rating to read-only mode"),
                      d.remove.events(),
                      w.addClass(h.disabled);
                  },
                  is: {
                    initialLoad: function() {
                      return u;
                    }
                  },
                  get: {
                    initialRating: function() {
                      return void 0 !== w.data(m.rating)
                        ? (w.removeData(m.rating), w.data(m.rating))
                        : f.initialRating;
                    },
                    maxRating: function() {
                      return void 0 !== w.data(m.maxRating)
                        ? (w.removeData(m.maxRating), w.data(m.maxRating))
                        : f.maxRating;
                    },
                    rating: function() {
                      var e = C.filter("." + h.active).length;
                      return d.verbose("Current rating retrieved", e), e;
                    }
                  },
                  set: {
                    rating: function(e) {
                      var t = e - 1 >= 0 ? e - 1 : 0,
                        n = C.eq(t);
                      w.removeClass(h.selected),
                        C.removeClass(h.selected).removeClass(h.active),
                        e > 0 &&
                          (d.verbose("Setting current rating to", e),
                          n
                            .prevAll()
                            .addBack()
                            .addClass(h.active)),
                        d.is.initialLoad() || f.onRate.call(y, e);
                    },
                    initialLoad: function() {
                      u = !0;
                    }
                  },
                  setting: function(t, n) {
                    if ((d.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      e.isPlainObject(f[t])
                        ? e.extend(!0, f[t], n)
                        : (f[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                      if (void 0 === n) return d[t];
                      d[t] = n;
                    }
                  },
                  debug: function() {
                    !f.silent &&
                      f.debug &&
                      (f.performance
                        ? d.performance.log(arguments)
                        : ((d.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          d.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !f.silent &&
                      f.verbose &&
                      f.debug &&
                      (f.performance
                        ? d.performance.log(arguments)
                        : ((d.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          d.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    f.silent ||
                      ((d.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        f.name + ":"
                      )),
                      d.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      f.performance &&
                        ((n = (t = new Date().getTime()) - (r || t)),
                        (r = t),
                        a.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: y,
                          "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        (d.performance.timer = setTimeout(
                          d.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = f.name + ":",
                        n = 0;
                      (r = !1),
                        clearTimeout(d.performance.timer),
                        e.each(a, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        o && (t += " '" + o + "'"),
                        i.length > 1 && (t += " (" + i.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          a.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(a)
                            : e.each(a, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (a = []);
                    }
                  },
                  invoke: function(t, i, o) {
                    var r,
                      a,
                      s,
                      l = x;
                    return (
                      (i = i || c),
                      (o = y || o),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(o, i))
                        : void 0 !== a && (s = a),
                      e.isArray(n)
                        ? n.push(s)
                        : void 0 !== n ? (n = [n, s]) : void 0 !== s && (n = s),
                      a
                    );
                  }
                }),
                  l
                    ? (void 0 === x && d.initialize(), d.invoke(s))
                    : (void 0 !== x && x.invoke("destroy"), d.initialize());
              }),
              void 0 !== n ? n : this
            );
          }),
          (e.fn.rating.settings = {
            name: "Rating",
            namespace: "rating",
            slent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            initialRating: 0,
            interactive: !0,
            maxRating: 4,
            clearable: "auto",
            fireOnInit: !1,
            onRate: function(e) {},
            error: {
              method: "The method you called is not defined",
              noMaximum:
                "No maximum rating specified. Cannot generate HTML automatically"
            },
            metadata: { rating: "rating", maxRating: "maxRating" },
            className: {
              active: "active",
              disabled: "disabled",
              selected: "selected",
              loading: "loading"
            },
            selector: { icon: ".icon" },
            templates: {
              icon: function(e) {
                for (var t = 1, n = ""; t <= e; )
                  (n += '<i class="icon"></i>'), t++;
                return n;
              }
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.search = function(i) {
            var o,
              r = e(this),
              a = r.selector || "",
              s = new Date().getTime(),
              l = [],
              c = arguments[0],
              u = "string" == typeof c,
              d = [].slice.call(arguments, 1);
            return (
              e(this).each(function() {
                var f,
                  p = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.search.settings, i)
                    : e.extend({}, e.fn.search.settings),
                  h = p.className,
                  m = p.metadata,
                  g = p.regExp,
                  v = p.fields,
                  b = p.selector,
                  y = p.error,
                  x = p.namespace,
                  w = "." + x,
                  C = x + "-module",
                  k = e(this),
                  S = k.find(b.prompt),
                  T = k.find(b.searchButton),
                  A = k.find(b.results),
                  E = k.find(b.result),
                  R = (k.find(b.category), this),
                  D = k.data(C),
                  P = !1,
                  O = !1;
                (f = {
                  initialize: function() {
                    f.verbose("Initializing module"),
                      f.get.settings(),
                      f.determine.searchFields(),
                      f.bind.events(),
                      f.set.type(),
                      f.create.results(),
                      f.instantiate();
                  },
                  instantiate: function() {
                    f.verbose("Storing instance of module", f),
                      (D = f),
                      k.data(C, f);
                  },
                  destroy: function() {
                    f.verbose("Destroying instance"), k.off(w).removeData(C);
                  },
                  refresh: function() {
                    f.debug("Refreshing selector cache"),
                      (S = k.find(b.prompt)),
                      (T = k.find(b.searchButton)),
                      k.find(b.category),
                      (A = k.find(b.results)),
                      (E = k.find(b.result));
                  },
                  refreshResults: function() {
                    (A = k.find(b.results)), (E = k.find(b.result));
                  },
                  bind: {
                    events: function() {
                      f.verbose("Binding events to search"),
                        p.automatic &&
                          (k.on(
                            f.get.inputEvent() + w,
                            b.prompt,
                            f.event.input
                          ),
                          S.attr("autocomplete", "off")),
                        k
                          .on("focus" + w, b.prompt, f.event.focus)
                          .on("blur" + w, b.prompt, f.event.blur)
                          .on("keydown" + w, b.prompt, f.handleKeyboard)
                          .on("click" + w, b.searchButton, f.query)
                          .on(
                            "mousedown" + w,
                            b.results,
                            f.event.result.mousedown
                          )
                          .on("mouseup" + w, b.results, f.event.result.mouseup)
                          .on("click" + w, b.result, f.event.result.click);
                    }
                  },
                  determine: {
                    searchFields: function() {
                      i &&
                        void 0 !== i.searchFields &&
                        (p.searchFields = i.searchFields);
                    }
                  },
                  event: {
                    input: function() {
                      p.searchDelay
                        ? (clearTimeout(f.timer),
                          (f.timer = setTimeout(function() {
                            f.is.focused() && f.query();
                          }, p.searchDelay)))
                        : f.query();
                    },
                    focus: function() {
                      f.set.focus(),
                        p.searchOnFocus &&
                          f.has.minimumCharacters() &&
                          f.query(function() {
                            f.can.show() && f.showResults();
                          });
                    },
                    blur: function(e) {
                      var t = function() {
                        f.cancel.query(),
                          f.remove.focus(),
                          (f.timer = setTimeout(f.hideResults, p.hideDelay));
                      };
                      n.activeElement === this ||
                        ((O = !1),
                        f.resultsClicked
                          ? (f.debug(
                              "Determining if user action caused search to close"
                            ),
                            k.one("click.close" + w, b.results, function(e) {
                              f.is.inMessage(e) || P
                                ? S.focus()
                                : ((P = !1),
                                  f.is.animating() || f.is.hidden() || t());
                            }))
                          : (f.debug(
                              "Input blurred without user action, closing results"
                            ),
                            t()));
                    },
                    result: {
                      mousedown: function() {
                        f.resultsClicked = !0;
                      },
                      mouseup: function() {
                        f.resultsClicked = !1;
                      },
                      click: function(n) {
                        f.debug("Search result selected");
                        var i = e(this),
                          o = i.find(b.title).eq(0),
                          r = i.is("a[href]") ? i : i.find("a[href]").eq(0),
                          a = r.attr("href") || !1,
                          s = r.attr("target") || !1,
                          l = (o.html(), o.length > 0 && o.text()),
                          c = f.get.results(),
                          u = i.data(m.result) || f.get.result(l, c);
                        if (
                          e.isFunction(p.onSelect) &&
                          !1 === p.onSelect.call(R, u, c)
                        )
                          return (
                            f.debug(
                              "Custom onSelect callback cancelled default select action"
                            ),
                            void (P = !0)
                          );
                        f.hideResults(),
                          l && f.set.value(l),
                          a &&
                            (f.verbose(
                              "Opening search link found in result",
                              r
                            ),
                            "_blank" == s || n.ctrlKey
                              ? t.open(a)
                              : (t.location.href = a));
                      }
                    }
                  },
                  handleKeyboard: function(e) {
                    var t,
                      n = k.find(b.result),
                      i = k.find(b.category),
                      o = n.filter("." + h.active),
                      r = n.index(o),
                      a = n.length,
                      s = o.length > 0,
                      l = e.which,
                      c = 13,
                      u = 38,
                      d = 40;
                    if (
                      (l == 27 &&
                        (f.verbose("Escape key pressed, blurring search field"),
                        f.hideResults(),
                        (O = !0)),
                      f.is.visible())
                    )
                      if (l == c) {
                        if (
                          (f.verbose(
                            "Enter key pressed, selecting active result"
                          ),
                          n.filter("." + h.active).length > 0)
                        )
                          return (
                            f.event.result.click.call(
                              n.filter("." + h.active),
                              e
                            ),
                            e.preventDefault(),
                            !1
                          );
                      } else
                        l == u && s
                          ? (f.verbose(
                              "Up key pressed, changing active result"
                            ),
                            (t = r - 1 < 0 ? r : r - 1),
                            i.removeClass(h.active),
                            n
                              .removeClass(h.active)
                              .eq(t)
                              .addClass(h.active)
                              .closest(i)
                              .addClass(h.active),
                            e.preventDefault())
                          : l == d &&
                            (f.verbose(
                              "Down key pressed, changing active result"
                            ),
                            (t = r + 1 >= a ? r : r + 1),
                            i.removeClass(h.active),
                            n
                              .removeClass(h.active)
                              .eq(t)
                              .addClass(h.active)
                              .closest(i)
                              .addClass(h.active),
                            e.preventDefault());
                    else
                      l == c &&
                        (f.verbose("Enter key pressed, executing query"),
                        f.query(),
                        f.set.buttonPressed(),
                        S.one("keyup", f.remove.buttonFocus));
                  },
                  setup: {
                    api: function(t, n) {
                      var i = {
                        debug: p.debug,
                        on: !1,
                        cache: !0,
                        action: "search",
                        urlData: { query: t },
                        onSuccess: function(e) {
                          f.parse.response.call(R, e, t), n();
                        },
                        onFailure: function() {
                          f.displayMessage(y.serverError), n();
                        },
                        onAbort: function(e) {},
                        onError: f.error
                      };
                      e.extend(!0, i, p.apiSettings),
                        f.verbose("Setting up API request", i),
                        k.api(i);
                    }
                  },
                  can: {
                    useAPI: function() {
                      return void 0 !== e.fn.api;
                    },
                    show: function() {
                      return f.is.focused() && !f.is.visible() && !f.is.empty();
                    },
                    transition: function() {
                      return (
                        p.transition &&
                        void 0 !== e.fn.transition &&
                        k.transition("is supported")
                      );
                    }
                  },
                  is: {
                    animating: function() {
                      return A.hasClass(h.animating);
                    },
                    hidden: function() {
                      return A.hasClass(h.hidden);
                    },
                    inMessage: function(t) {
                      if (t.target) {
                        var i = e(t.target);
                        return (
                          e.contains(n.documentElement, t.target) &&
                          i.closest(b.message).length > 0
                        );
                      }
                    },
                    empty: function() {
                      return "" === A.html();
                    },
                    visible: function() {
                      return A.filter(":visible").length > 0;
                    },
                    focused: function() {
                      return S.filter(":focus").length > 0;
                    }
                  },
                  get: {
                    settings: function() {
                      e.isPlainObject(i) &&
                        i.searchFullText &&
                        ((p.fullTextSearch = i.searchFullText),
                        f.error(p.error.oldSearchSyntax, R));
                    },
                    inputEvent: function() {
                      var e = S[0];
                      return void 0 !== e && void 0 !== e.oninput
                        ? "input"
                        : void 0 !== e && void 0 !== e.onpropertychange
                          ? "propertychange"
                          : "keyup";
                    },
                    value: function() {
                      return S.val();
                    },
                    results: function() {
                      return k.data(m.results);
                    },
                    result: function(t, n) {
                      var i = ["title", "id"],
                        o = !1;
                      return (
                        (t = void 0 !== t ? t : f.get.value()),
                        (n = void 0 !== n ? n : f.get.results()),
                        "category" === p.type
                          ? (f.debug("Finding result that matches", t),
                            e.each(n, function(n, r) {
                              if (
                                e.isArray(r.results) &&
                                (o = f.search.object(t, r.results, i)[0])
                              )
                                return !1;
                            }))
                          : (f.debug("Finding result in results object", t),
                            (o = f.search.object(t, n, i)[0])),
                        o || !1
                      );
                    }
                  },
                  select: {
                    firstResult: function() {
                      f.verbose("Selecting first result"),
                        E.first().addClass(h.active);
                    }
                  },
                  set: {
                    focus: function() {
                      k.addClass(h.focus);
                    },
                    loading: function() {
                      k.addClass(h.loading);
                    },
                    value: function(e) {
                      f.verbose("Setting search input value", e), S.val(e);
                    },
                    type: function(e) {
                      (e = e || p.type),
                        "category" == p.type && k.addClass(p.type);
                    },
                    buttonPressed: function() {
                      T.addClass(h.pressed);
                    }
                  },
                  remove: {
                    loading: function() {
                      k.removeClass(h.loading);
                    },
                    focus: function() {
                      k.removeClass(h.focus);
                    },
                    buttonPressed: function() {
                      T.removeClass(h.pressed);
                    }
                  },
                  query: function(t) {
                    t = e.isFunction(t) ? t : function() {};
                    var n = f.get.value(),
                      i = f.read.cache(n);
                    (t = t || function() {}),
                      f.has.minimumCharacters()
                        ? (i
                            ? (f.debug("Reading result from cache", n),
                              f.save.results(i.results),
                              f.addResults(i.html),
                              f.inject.id(i.results),
                              t())
                            : (f.debug("Querying for", n),
                              e.isPlainObject(p.source) || e.isArray(p.source)
                                ? (f.search.local(n), t())
                                : f.can.useAPI()
                                  ? f.search.remote(n, t)
                                  : (f.error(y.source), t())),
                          p.onSearchQuery.call(R, n))
                        : f.hideResults();
                  },
                  search: {
                    local: function(e) {
                      var t,
                        n = f.search.object(e, p.content);
                      f.set.loading(),
                        f.save.results(n),
                        f.debug("Returned full local search results", n),
                        p.maxResults > 0 &&
                          (f.debug("Using specified max results", n),
                          (n = n.slice(0, p.maxResults))),
                        "category" == p.type &&
                          (n = f.create.categoryResults(n)),
                        (t = f.generateResults({ results: n })),
                        f.remove.loading(),
                        f.addResults(t),
                        f.inject.id(n),
                        f.write.cache(e, { html: t, results: n });
                    },
                    remote: function(t, n) {
                      (n = e.isFunction(n) ? n : function() {}),
                        k.api("is loading") && k.api("abort"),
                        f.setup.api(t, n),
                        k.api("query");
                    },
                    object: function(t, n, i) {
                      var o = [],
                        r = [],
                        a = [],
                        s = t.toString().replace(g.escape, "\\$&"),
                        l = new RegExp(g.beginsWith + s, "i"),
                        c = function(t, n) {
                          var i = -1 == e.inArray(n, o),
                            s = -1 == e.inArray(n, a),
                            l = -1 == e.inArray(n, r);
                          i && s && l && t.push(n);
                        };
                      return (
                        (n = n || p.source),
                        (i = void 0 !== i ? i : p.searchFields),
                        e.isArray(i) || (i = [i]),
                        void 0 === n || !1 === n
                          ? (f.error(y.source), [])
                          : (e.each(i, function(i, s) {
                              e.each(n, function(e, n) {
                                "string" == typeof n[s] &&
                                  (-1 !== n[s].search(l)
                                    ? c(o, n)
                                    : "exact" === p.fullTextSearch &&
                                      f.exactSearch(t, n[s])
                                      ? c(r, n)
                                      : 1 == p.fullTextSearch &&
                                        f.fuzzySearch(t, n[s]) &&
                                        c(a, n));
                              });
                            }),
                            e.merge(r, a),
                            e.merge(o, r),
                            o)
                      );
                    }
                  },
                  exactSearch: function(e, t) {
                    return (
                      (e = e.toLowerCase()),
                      (t = t.toLowerCase()).indexOf(e) > -1
                    );
                  },
                  fuzzySearch: function(e, t) {
                    var n = t.length,
                      i = e.length;
                    if ("string" != typeof e) return !1;
                    if (((e = e.toLowerCase()), (t = t.toLowerCase()), i > n))
                      return !1;
                    if (i === n) return e === t;
                    e: for (var o = 0, r = 0; o < i; o++) {
                      for (var a = e.charCodeAt(o); r < n; )
                        if (t.charCodeAt(r++) === a) continue e;
                      return !1;
                    }
                    return !0;
                  },
                  parse: {
                    response: function(e, t) {
                      var n = f.generateResults(e);
                      f.verbose("Parsing server response", e),
                        void 0 !== e &&
                          void 0 !== t &&
                          void 0 !== e[v.results] &&
                          (f.addResults(n),
                          f.inject.id(e[v.results]),
                          f.write.cache(t, { html: n, results: e[v.results] }),
                          f.save.results(e[v.results]));
                    }
                  },
                  cancel: {
                    query: function() {
                      f.can.useAPI() && k.api("abort");
                    }
                  },
                  has: {
                    minimumCharacters: function() {
                      return f.get.value().length >= p.minCharacters;
                    },
                    results: function() {
                      return 0 !== A.length && "" != A.html();
                    }
                  },
                  clear: {
                    cache: function(e) {
                      var t = k.data(m.cache);
                      e
                        ? e &&
                          t &&
                          t[e] &&
                          (f.debug("Removing value from cache", e),
                          delete t[e],
                          k.data(m.cache, t))
                        : (f.debug("Clearing cache", e), k.removeData(m.cache));
                    }
                  },
                  read: {
                    cache: function(e) {
                      var t = k.data(m.cache);
                      return (
                        !!p.cache &&
                        (f.verbose(
                          "Checking cache for generated html for query",
                          e
                        ),
                        "object" == typeof t && void 0 !== t[e] && t[e])
                      );
                    }
                  },
                  create: {
                    categoryResults: function(t) {
                      var n = {};
                      return (
                        e.each(t, function(e, t) {
                          t.category &&
                            (void 0 === n[t.category]
                              ? (f.verbose(
                                  "Creating new category of results",
                                  t.category
                                ),
                                (n[t.category] = {
                                  name: t.category,
                                  results: [t]
                                }))
                              : n[t.category].results.push(t));
                        }),
                        n
                      );
                    },
                    id: function(e, t) {
                      var n,
                        i = e + 1;
                      return (
                        void 0 !== t
                          ? ((n = String.fromCharCode(97 + t) + i),
                            f.verbose("Creating category result id", n))
                          : ((n = i), f.verbose("Creating result id", n)),
                        n
                      );
                    },
                    results: function() {
                      0 === A.length &&
                        (A = e("<div />")
                          .addClass(h.results)
                          .appendTo(k));
                    }
                  },
                  inject: {
                    result: function(e, t, n) {
                      f.verbose("Injecting result into results");
                      var i =
                        void 0 !== n
                          ? A.children()
                              .eq(n)
                              .children(b.results)
                              .first()
                              .children(b.result)
                              .eq(t)
                          : A.children(b.result).eq(t);
                      f.verbose("Injecting results metadata", i),
                        i.data(m.result, e);
                    },
                    id: function(t) {
                      f.debug("Injecting unique ids into results");
                      var n = 0,
                        i = 0;
                      return (
                        "category" === p.type
                          ? e.each(t, function(t, o) {
                              (i = 0),
                                e.each(o.results, function(e, t) {
                                  var r = o.results[e];
                                  void 0 === r.id && (r.id = f.create.id(i, n)),
                                    f.inject.result(r, i, n),
                                    i++;
                                }),
                                n++;
                            })
                          : e.each(t, function(e, n) {
                              var o = t[e];
                              void 0 === o.id && (o.id = f.create.id(i)),
                                f.inject.result(o, i),
                                i++;
                            }),
                        t
                      );
                    }
                  },
                  save: {
                    results: function(e) {
                      f.verbose("Saving current search results to metadata", e),
                        k.data(m.results, e);
                    }
                  },
                  write: {
                    cache: function(e, t) {
                      var n = void 0 !== k.data(m.cache) ? k.data(m.cache) : {};
                      p.cache &&
                        (f.verbose("Writing generated html to cache", e, t),
                        (n[e] = t),
                        k.data(m.cache, n));
                    }
                  },
                  addResults: function(t) {
                    if (
                      e.isFunction(p.onResultsAdd) &&
                      !1 === p.onResultsAdd.call(A, t)
                    )
                      return (
                        f.debug(
                          "onResultsAdd callback cancelled default action"
                        ),
                        !1
                      );
                    t
                      ? (A.html(t),
                        f.refreshResults(),
                        p.selectFirstResult && f.select.firstResult(),
                        f.showResults())
                      : f.hideResults(function() {
                          A.empty();
                        });
                  },
                  showResults: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      O ||
                        (!f.is.visible() &&
                          f.has.results() &&
                          (f.can.transition()
                            ? (f.debug("Showing results with css animations"),
                              A.transition({
                                animation: p.transition + " in",
                                debug: p.debug,
                                verbose: p.verbose,
                                duration: p.duration,
                                onComplete: function() {
                                  t();
                                },
                                queue: !0
                              }))
                            : (f.debug("Showing results with javascript"),
                              A.stop().fadeIn(p.duration, p.easing)),
                          p.onResultsOpen.call(A)));
                  },
                  hideResults: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      f.is.visible() &&
                        (f.can.transition()
                          ? (f.debug("Hiding results with css animations"),
                            A.transition({
                              animation: p.transition + " out",
                              debug: p.debug,
                              verbose: p.verbose,
                              duration: p.duration,
                              onComplete: function() {
                                t();
                              },
                              queue: !0
                            }))
                          : (f.debug("Hiding results with javascript"),
                            A.stop().fadeOut(p.duration, p.easing)),
                        p.onResultsClose.call(A));
                  },
                  generateResults: function(t) {
                    f.debug("Generating html from response", t);
                    var n = p.templates[p.type],
                      i =
                        e.isPlainObject(t[v.results]) &&
                        !e.isEmptyObject(t[v.results]),
                      o = e.isArray(t[v.results]) && t[v.results].length > 0,
                      r = "";
                    return (
                      i || o
                        ? (p.maxResults > 0 &&
                            (i
                              ? "standard" == p.type && f.error(y.maxResults)
                              : (t[v.results] = t[v.results].slice(
                                  0,
                                  p.maxResults
                                ))),
                          e.isFunction(n)
                            ? (r = n(t, v))
                            : f.error(y.noTemplate, !1))
                        : p.showNoResults &&
                          (r = f.displayMessage(y.noResults, "empty")),
                      p.onResults.call(R, t),
                      r
                    );
                  },
                  displayMessage: function(e, t) {
                    return (
                      (t = t || "standard"),
                      f.debug("Displaying message", e, t),
                      f.addResults(p.templates.message(e, t)),
                      p.templates.message(e, t)
                    );
                  },
                  setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                      if (void 0 === n) return p[t];
                      p[t] = n;
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      f[t] = n;
                    }
                  },
                  debug: function() {
                    !p.silent &&
                      p.debug &&
                      (p.performance
                        ? f.performance.log(arguments)
                        : ((f.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            p.name + ":"
                          )),
                          f.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !p.silent &&
                      p.verbose &&
                      p.debug &&
                      (p.performance
                        ? f.performance.log(arguments)
                        : ((f.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            p.name + ":"
                          )),
                          f.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    p.silent ||
                      ((f.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        p.name + ":"
                      )),
                      f.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      p.performance &&
                        ((n = (t = new Date().getTime()) - (s || t)),
                        (s = t),
                        l.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: R,
                          "Execution Time": n
                        })),
                        clearTimeout(f.performance.timer),
                        (f.performance.timer = setTimeout(
                          f.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = p.name + ":",
                        n = 0;
                      (s = !1),
                        clearTimeout(f.performance.timer),
                        e.each(l, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        a && (t += " '" + a + "'"),
                        r.length > 1 && (t += " (" + r.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          l.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(l)
                            : e.each(l, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (l = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = D;
                    return (
                      (n = n || d),
                      (i = R || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  u
                    ? (void 0 === D && f.initialize(), f.invoke(c))
                    : (void 0 !== D && D.invoke("destroy"), f.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.search.settings = {
            name: "Search",
            namespace: "search",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            type: "standard",
            minCharacters: 1,
            selectFirstResult: !1,
            apiSettings: !1,
            source: !1,
            searchOnFocus: !0,
            searchFields: ["title", "description"],
            displayField: "",
            fullTextSearch: "exact",
            automatic: !0,
            hideDelay: 0,
            searchDelay: 200,
            maxResults: 7,
            cache: !0,
            showNoResults: !0,
            transition: "scale",
            duration: 200,
            easing: "easeOutExpo",
            onSelect: !1,
            onResultsAdd: !1,
            onSearchQuery: function(e) {},
            onResults: function(e) {},
            onResultsOpen: function() {},
            onResultsClose: function() {},
            className: {
              animating: "animating",
              active: "active",
              empty: "empty",
              focus: "focus",
              hidden: "hidden",
              loading: "loading",
              results: "results",
              pressed: "down"
            },
            error: {
              source:
                "Cannot search. No source used, and Semantic API module was not included",
              noResults: "Your search returned no results",
              logging: "Error in debug logging, exiting.",
              noEndpoint: "No search endpoint was specified",
              noTemplate: "A valid template name was not specified.",
              oldSearchSyntax:
                "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",
              serverError: "There was an issue querying the server.",
              maxResults: "Results must be an array to use maxResults setting",
              method: "The method you called is not defined."
            },
            metadata: { cache: "cache", results: "results", result: "result" },
            regExp: {
              escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
              beginsWith: "(?:s|^)"
            },
            fields: {
              categories: "results",
              categoryName: "name",
              categoryResults: "results",
              description: "description",
              image: "image",
              price: "price",
              results: "results",
              title: "title",
              url: "url",
              action: "action",
              actionText: "text",
              actionURL: "url"
            },
            selector: {
              prompt: ".prompt",
              searchButton: ".search.button",
              results: ".results",
              message: ".results > .message",
              category: ".category",
              result: ".result",
              title: ".title, .name"
            },
            templates: {
              escape: function(e) {
                var t = {
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                  "`": "&#x60;"
                };
                return /[&<>"'`]/.test(e)
                  ? e.replace(/[&<>"'`]/g, function(e) {
                      return t[e];
                    })
                  : e;
              },
              message: function(e, t) {
                var n = "";
                return (
                  void 0 !== e &&
                    void 0 !== t &&
                    ((n += '<div class="message ' + t + '">'),
                    (n +=
                      "empty" == t
                        ? '<div class="header">No Results</div class="header"><div class="description">' +
                          e +
                          '</div class="description">'
                        : ' <div class="description">' + e + "</div>"),
                    (n += "</div>")),
                  n
                );
              },
              category: function(t, n) {
                var i = "";
                e.fn.search.settings.templates.escape;
                return (
                  void 0 !== t[n.categoryResults] &&
                  (e.each(t[n.categoryResults], function(t, o) {
                    void 0 !== o[n.results] &&
                      o.results.length > 0 &&
                      ((i += '<div class="category">'),
                      void 0 !== o[n.categoryName] &&
                        (i +=
                          '<div class="name">' + o[n.categoryName] + "</div>"),
                      (i += '<div class="results">'),
                      e.each(o.results, function(e, t) {
                        t[n.url]
                          ? (i += '<a class="result" href="' + t[n.url] + '">')
                          : (i += '<a class="result">'),
                          void 0 !== t[n.image] &&
                            (i +=
                              '<div class="image"> <img src="' +
                              t[n.image] +
                              '"></div>'),
                          (i += '<div class="content">'),
                          void 0 !== t[n.price] &&
                            (i +=
                              '<div class="price">' + t[n.price] + "</div>"),
                          void 0 !== t[n.title] &&
                            (i +=
                              '<div class="title">' + t[n.title] + "</div>"),
                          void 0 !== t[n.description] &&
                            (i +=
                              '<div class="description">' +
                              t[n.description] +
                              "</div>"),
                          (i += "</div>"),
                          (i += "</a>");
                      }),
                      (i += "</div>"),
                      (i += "</div>"));
                  }),
                  t[n.action] &&
                    (i +=
                      '<a href="' +
                      t[n.action][n.actionURL] +
                      '" class="action">' +
                      t[n.action][n.actionText] +
                      "</a>"),
                  i)
                );
              },
              standard: function(t, n) {
                var i = "";
                return (
                  void 0 !== t[n.results] &&
                  (e.each(t[n.results], function(e, t) {
                    t[n.url]
                      ? (i += '<a class="result" href="' + t[n.url] + '">')
                      : (i += '<a class="result">'),
                      void 0 !== t[n.image] &&
                        (i +=
                          '<div class="image"> <img src="' +
                          t[n.image] +
                          '"></div>'),
                      (i += '<div class="content">'),
                      void 0 !== t[n.price] &&
                        (i += '<div class="price">' + t[n.price] + "</div>"),
                      void 0 !== t[n.title] &&
                        (i += '<div class="title">' + t[n.title] + "</div>"),
                      void 0 !== t[n.description] &&
                        (i +=
                          '<div class="description">' +
                          t[n.description] +
                          "</div>"),
                      (i += "</div>"),
                      (i += "</a>");
                  }),
                  t[n.action] &&
                    (i +=
                      '<a href="' +
                      t[n.action][n.actionURL] +
                      '" class="action">' +
                      t[n.action][n.actionText] +
                      "</a>"),
                  i)
                );
              }
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.shape = function(i) {
            var o,
              r = e(this),
              a = (e("body"), new Date().getTime()),
              s = [],
              l = arguments[0],
              c = "string" == typeof l,
              u = [].slice.call(arguments, 1),
              d =
                t.requestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                t.webkitRequestAnimationFrame ||
                t.msRequestAnimationFrame ||
                function(e) {
                  setTimeout(e, 0);
                };
            return (
              r.each(function() {
                var t,
                  f,
                  p,
                  h = r.selector || "",
                  m = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.shape.settings, i)
                    : e.extend({}, e.fn.shape.settings),
                  g = m.namespace,
                  v = m.selector,
                  b = m.error,
                  y = m.className,
                  x = "." + g,
                  w = "module-" + g,
                  C = e(this),
                  k = C.find(v.sides),
                  S = C.find(v.side),
                  T = !1,
                  A = this,
                  E = C.data(w);
                (p = {
                  initialize: function() {
                    p.verbose("Initializing module for", A),
                      p.set.defaultSide(),
                      p.instantiate();
                  },
                  instantiate: function() {
                    p.verbose("Storing instance of module", p),
                      (E = p),
                      C.data(w, E);
                  },
                  destroy: function() {
                    p.verbose("Destroying previous module for", A),
                      C.removeData(w).off(x);
                  },
                  refresh: function() {
                    p.verbose("Refreshing selector cache for", A),
                      (C = e(A)),
                      (k = e(this).find(v.shape)),
                      (S = e(this).find(v.side));
                  },
                  repaint: function() {
                    p.verbose("Forcing repaint event");
                    (k[0] || n.createElement("div")).offsetWidth;
                  },
                  animate: function(e, n) {
                    p.verbose("Animating box with properties", e),
                      (n =
                        n ||
                        function(e) {
                          p.verbose("Executing animation callback"),
                            void 0 !== e && e.stopPropagation(),
                            p.reset(),
                            p.set.active();
                        }),
                      m.beforeChange.call(f[0]),
                      p.get.transitionEvent()
                        ? (p.verbose("Starting CSS animation"),
                          C.addClass(y.animating),
                          k.css(e).one(p.get.transitionEvent(), n),
                          p.set.duration(m.duration),
                          d(function() {
                            C.addClass(y.animating), t.addClass(y.hidden);
                          }))
                        : n();
                  },
                  queue: function(e) {
                    p.debug("Queueing animation of", e),
                      k.one(p.get.transitionEvent(), function() {
                        p.debug("Executing queued animation"),
                          setTimeout(function() {
                            C.shape(e);
                          }, 0);
                      });
                  },
                  reset: function() {
                    p.verbose("Animating states reset"),
                      C.removeClass(y.animating)
                        .attr("style", "")
                        .removeAttr("style"),
                      k.attr("style", "").removeAttr("style"),
                      S.attr("style", "")
                        .removeAttr("style")
                        .removeClass(y.hidden),
                      f
                        .removeClass(y.animating)
                        .attr("style", "")
                        .removeAttr("style");
                  },
                  is: {
                    complete: function() {
                      return S.filter("." + y.active)[0] == f[0];
                    },
                    animating: function() {
                      return C.hasClass(y.animating);
                    }
                  },
                  set: {
                    defaultSide: function() {
                      (t = C.find("." + m.className.active)),
                        (f =
                          t.next(v.side).length > 0
                            ? t.next(v.side)
                            : C.find(v.side).first()),
                        (T = !1),
                        p.verbose("Active side set to", t),
                        p.verbose("Next side set to", f);
                    },
                    duration: function(e) {
                      (e =
                        "number" == typeof (e = e || m.duration)
                          ? e + "ms"
                          : e),
                        p.verbose("Setting animation duration", e),
                        (m.duration || 0 === m.duration) &&
                          k.add(S).css({
                            "-webkit-transition-duration": e,
                            "-moz-transition-duration": e,
                            "-ms-transition-duration": e,
                            "-o-transition-duration": e,
                            "transition-duration": e
                          });
                    },
                    currentStageSize: function() {
                      var e = C.find("." + m.className.active),
                        t = e.outerWidth(!0),
                        n = e.outerHeight(!0);
                      C.css({ width: t, height: n });
                    },
                    stageSize: function() {
                      var e = C.clone().addClass(y.loading),
                        t = e.find("." + m.className.active),
                        n = T
                          ? e.find(v.side).eq(T)
                          : t.next(v.side).length > 0
                            ? t.next(v.side)
                            : e.find(v.side).first(),
                        i =
                          "next" == m.width
                            ? n.outerWidth(!0)
                            : "initial" == m.width ? C.width() : m.width,
                        o =
                          "next" == m.height
                            ? n.outerHeight(!0)
                            : "initial" == m.height ? C.height() : m.height;
                      t.removeClass(y.active),
                        n.addClass(y.active),
                        e.insertAfter(C),
                        e.remove(),
                        "auto" != m.width &&
                          (C.css("width", i + m.jitter),
                          p.verbose("Specifying width during animation", i)),
                        "auto" != m.height &&
                          (C.css("height", o + m.jitter),
                          p.verbose("Specifying height during animation", o));
                    },
                    nextSide: function(e) {
                      (T = e),
                        (f = S.filter(e)),
                        (T = S.index(f)),
                        0 === f.length &&
                          (p.set.defaultSide(), p.error(b.side)),
                        p.verbose("Next side manually set to", f);
                    },
                    active: function() {
                      p.verbose("Setting new side to active", f),
                        S.removeClass(y.active),
                        f.addClass(y.active),
                        m.onChange.call(f[0]),
                        p.set.defaultSide();
                    }
                  },
                  flip: {
                    up: function() {
                      if (
                        !p.is.complete() ||
                        p.is.animating() ||
                        m.allowRepeats
                      )
                        if (p.is.animating()) p.queue("flip up");
                        else {
                          p.debug("Flipping up", f);
                          var e = p.get.transform.up();
                          p.set.stageSize(), p.stage.above(), p.animate(e);
                        }
                      else p.debug("Side already visible", f);
                    },
                    down: function() {
                      if (
                        !p.is.complete() ||
                        p.is.animating() ||
                        m.allowRepeats
                      )
                        if (p.is.animating()) p.queue("flip down");
                        else {
                          p.debug("Flipping down", f);
                          var e = p.get.transform.down();
                          p.set.stageSize(), p.stage.below(), p.animate(e);
                        }
                      else p.debug("Side already visible", f);
                    },
                    left: function() {
                      if (
                        !p.is.complete() ||
                        p.is.animating() ||
                        m.allowRepeats
                      )
                        if (p.is.animating()) p.queue("flip left");
                        else {
                          p.debug("Flipping left", f);
                          var e = p.get.transform.left();
                          p.set.stageSize(), p.stage.left(), p.animate(e);
                        }
                      else p.debug("Side already visible", f);
                    },
                    right: function() {
                      if (
                        !p.is.complete() ||
                        p.is.animating() ||
                        m.allowRepeats
                      )
                        if (p.is.animating()) p.queue("flip right");
                        else {
                          p.debug("Flipping right", f);
                          var e = p.get.transform.right();
                          p.set.stageSize(), p.stage.right(), p.animate(e);
                        }
                      else p.debug("Side already visible", f);
                    },
                    over: function() {
                      !p.is.complete() || p.is.animating() || m.allowRepeats
                        ? p.is.animating()
                          ? p.queue("flip over")
                          : (p.debug("Flipping over", f),
                            p.set.stageSize(),
                            p.stage.behind(),
                            p.animate(p.get.transform.over()))
                        : p.debug("Side already visible", f);
                    },
                    back: function() {
                      !p.is.complete() || p.is.animating() || m.allowRepeats
                        ? p.is.animating()
                          ? p.queue("flip back")
                          : (p.debug("Flipping back", f),
                            p.set.stageSize(),
                            p.stage.behind(),
                            p.animate(p.get.transform.back()))
                        : p.debug("Side already visible", f);
                    }
                  },
                  get: {
                    transform: {
                      up: function() {
                        return {
                          transform:
                            "translateY(" +
                            -(t.outerHeight(!0) - f.outerHeight(!0)) / 2 +
                            "px) translateZ(" +
                            -t.outerHeight(!0) / 2 +
                            "px) rotateX(-90deg)"
                        };
                      },
                      down: function() {
                        return {
                          transform:
                            "translateY(" +
                            -(t.outerHeight(!0) - f.outerHeight(!0)) / 2 +
                            "px) translateZ(" +
                            -t.outerHeight(!0) / 2 +
                            "px) rotateX(90deg)"
                        };
                      },
                      left: function() {
                        return {
                          transform:
                            "translateX(" +
                            -(t.outerWidth(!0) - f.outerWidth(!0)) / 2 +
                            "px) translateZ(" +
                            -t.outerWidth(!0) / 2 +
                            "px) rotateY(90deg)"
                        };
                      },
                      right: function() {
                        return {
                          transform:
                            "translateX(" +
                            -(t.outerWidth(!0) - f.outerWidth(!0)) / 2 +
                            "px) translateZ(" +
                            -t.outerWidth(!0) / 2 +
                            "px) rotateY(-90deg)"
                        };
                      },
                      over: function() {
                        return {
                          transform:
                            "translateX(" +
                            -(t.outerWidth(!0) - f.outerWidth(!0)) / 2 +
                            "px) rotateY(180deg)"
                        };
                      },
                      back: function() {
                        return {
                          transform:
                            "translateX(" +
                            -(t.outerWidth(!0) - f.outerWidth(!0)) / 2 +
                            "px) rotateY(-180deg)"
                        };
                      }
                    },
                    transitionEvent: function() {
                      var e,
                        t = n.createElement("element"),
                        i = {
                          transition: "transitionend",
                          OTransition: "oTransitionEnd",
                          MozTransition: "transitionend",
                          WebkitTransition: "webkitTransitionEnd"
                        };
                      for (e in i) if (void 0 !== t.style[e]) return i[e];
                    },
                    nextSide: function() {
                      return t.next(v.side).length > 0
                        ? t.next(v.side)
                        : C.find(v.side).first();
                    }
                  },
                  stage: {
                    above: function() {
                      var e = {
                        origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2,
                        depth: {
                          active: f.outerHeight(!0) / 2,
                          next: t.outerHeight(!0) / 2
                        }
                      };
                      p.verbose(
                        "Setting the initial animation position as above",
                        f,
                        e
                      ),
                        k.css({
                          transform: "translateZ(-" + e.depth.active + "px)"
                        }),
                        t.css({
                          transform:
                            "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                          top: e.origin + "px",
                          transform:
                            "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                        });
                    },
                    below: function() {
                      var e = {
                        origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2,
                        depth: {
                          active: f.outerHeight(!0) / 2,
                          next: t.outerHeight(!0) / 2
                        }
                      };
                      p.verbose(
                        "Setting the initial animation position as below",
                        f,
                        e
                      ),
                        k.css({
                          transform: "translateZ(-" + e.depth.active + "px)"
                        }),
                        t.css({
                          transform:
                            "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                          top: e.origin + "px",
                          transform:
                            "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                        });
                    },
                    left: function() {
                      var e = t.outerWidth(!0),
                        n = f.outerWidth(!0),
                        i = {
                          origin: (e - n) / 2,
                          depth: { active: n / 2, next: e / 2 }
                        };
                      p.verbose(
                        "Setting the initial animation position as left",
                        f,
                        i
                      ),
                        k.css({
                          transform: "translateZ(-" + i.depth.active + "px)"
                        }),
                        t.css({
                          transform:
                            "rotateY(0deg) translateZ(" + i.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                          left: i.origin + "px",
                          transform:
                            "rotateY(-90deg) translateZ(" + i.depth.next + "px)"
                        });
                    },
                    right: function() {
                      var e = t.outerWidth(!0),
                        n = f.outerWidth(!0),
                        i = {
                          origin: (e - n) / 2,
                          depth: { active: n / 2, next: e / 2 }
                        };
                      p.verbose(
                        "Setting the initial animation position as left",
                        f,
                        i
                      ),
                        k.css({
                          transform: "translateZ(-" + i.depth.active + "px)"
                        }),
                        t.css({
                          transform:
                            "rotateY(0deg) translateZ(" + i.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                          left: i.origin + "px",
                          transform:
                            "rotateY(90deg) translateZ(" + i.depth.next + "px)"
                        });
                    },
                    behind: function() {
                      var e = t.outerWidth(!0),
                        n = f.outerWidth(!0),
                        i = {
                          origin: (e - n) / 2,
                          depth: { active: n / 2, next: e / 2 }
                        };
                      p.verbose(
                        "Setting the initial animation position as behind",
                        f,
                        i
                      ),
                        t.css({ transform: "rotateY(0deg)" }),
                        f.addClass(y.animating).css({
                          left: i.origin + "px",
                          transform: "rotateY(-180deg)"
                        });
                    }
                  },
                  setting: function(t, n) {
                    if ((p.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, m, t);
                    else {
                      if (void 0 === n) return m[t];
                      e.isPlainObject(m[t])
                        ? e.extend(!0, m[t], n)
                        : (m[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                      if (void 0 === n) return p[t];
                      p[t] = n;
                    }
                  },
                  debug: function() {
                    !m.silent &&
                      m.debug &&
                      (m.performance
                        ? p.performance.log(arguments)
                        : ((p.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            m.name + ":"
                          )),
                          p.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !m.silent &&
                      m.verbose &&
                      m.debug &&
                      (m.performance
                        ? p.performance.log(arguments)
                        : ((p.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            m.name + ":"
                          )),
                          p.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    m.silent ||
                      ((p.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        m.name + ":"
                      )),
                      p.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      m.performance &&
                        ((n = (t = new Date().getTime()) - (a || t)),
                        (a = t),
                        s.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: A,
                          "Execution Time": n
                        })),
                        clearTimeout(p.performance.timer),
                        (p.performance.timer = setTimeout(
                          p.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = m.name + ":",
                        n = 0;
                      (a = !1),
                        clearTimeout(p.performance.timer),
                        e.each(s, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        h && (t += " '" + h + "'"),
                        r.length > 1 && (t += " (" + r.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          s.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(s)
                            : e.each(s, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (s = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = E;
                    return (
                      (n = n || u),
                      (i = A || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  c
                    ? (void 0 === E && p.initialize(), p.invoke(l))
                    : (void 0 !== E && E.invoke("destroy"), p.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.shape.settings = {
            name: "Shape",
            silent: !1,
            debug: !1,
            verbose: !1,
            jitter: 0,
            performance: !0,
            namespace: "shape",
            width: "initial",
            height: "initial",
            beforeChange: function() {},
            onChange: function() {},
            allowRepeats: !1,
            duration: !1,
            error: {
              side: "You tried to switch to a side that does not exist.",
              method: "The method you called is not defined"
            },
            className: {
              animating: "animating",
              hidden: "hidden",
              loading: "loading",
              active: "active"
            },
            selector: { sides: ".sides", side: ".side" }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.sidebar = function(i) {
            var o,
              r = e(this),
              a = e(t),
              s = e(n),
              l = e("html"),
              c = e("head"),
              u = r.selector || "",
              d = new Date().getTime(),
              f = [],
              p = arguments[0],
              h = "string" == typeof p,
              m = [].slice.call(arguments, 1),
              g =
                t.requestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                t.webkitRequestAnimationFrame ||
                t.msRequestAnimationFrame ||
                function(e) {
                  setTimeout(e, 0);
                };
            return (
              r.each(function() {
                var r,
                  v,
                  b,
                  y,
                  x,
                  w,
                  C = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.sidebar.settings, i)
                    : e.extend({}, e.fn.sidebar.settings),
                  k = C.selector,
                  S = C.className,
                  T = C.namespace,
                  A = C.regExp,
                  E = C.error,
                  R = "." + T,
                  D = "module-" + T,
                  P = e(this),
                  O = e(C.context),
                  j = P.children(k.sidebar),
                  F = (O.children(k.fixed), O.children(k.pusher)),
                  q = this,
                  N = P.data(D);
                (w = {
                  initialize: function() {
                    w.debug("Initializing sidebar", i),
                      w.create.id(),
                      (x = w.get.transitionEvent()),
                      C.delaySetup ? g(w.setup.layout) : w.setup.layout(),
                      g(function() {
                        w.setup.cache();
                      }),
                      w.instantiate();
                  },
                  instantiate: function() {
                    w.verbose("Storing instance of module", w),
                      (N = w),
                      P.data(D, w);
                  },
                  create: {
                    id: function() {
                      (b = (Math.random().toString(16) + "000000000").substr(
                        2,
                        8
                      )),
                        (v = "." + b),
                        w.verbose("Creating unique id for element", b);
                    }
                  },
                  destroy: function() {
                    w.verbose("Destroying previous module for", P),
                      P.off(R).removeData(D),
                      w.is.ios() && w.remove.ios(),
                      O.off(v),
                      a.off(v),
                      s.off(v);
                  },
                  event: {
                    clickaway: function(e) {
                      var t = F.find(e.target).length > 0 || F.is(e.target),
                        n = O.is(e.target);
                      t && (w.verbose("User clicked on dimmed page"), w.hide()),
                        n &&
                          (w.verbose(
                            "User clicked on dimmable context (scaled out page)"
                          ),
                          w.hide());
                    },
                    touch: function(e) {},
                    containScroll: function(e) {
                      q.scrollTop <= 0 && (q.scrollTop = 1),
                        q.scrollTop + q.offsetHeight >= q.scrollHeight &&
                          (q.scrollTop = q.scrollHeight - q.offsetHeight - 1);
                    },
                    scroll: function(t) {
                      0 === e(t.target).closest(k.sidebar).length &&
                        t.preventDefault();
                    }
                  },
                  bind: {
                    clickaway: function() {
                      w.verbose("Adding clickaway events to context", O),
                        C.closable &&
                          O.on("click" + v, w.event.clickaway).on(
                            "touchend" + v,
                            w.event.clickaway
                          );
                    },
                    scrollLock: function() {
                      C.scrollLock &&
                        (w.debug("Disabling page scroll"),
                        a.on("DOMMouseScroll" + v, w.event.scroll)),
                        w.verbose("Adding events to contain sidebar scroll"),
                        s.on("touchmove" + v, w.event.touch),
                        P.on("scroll" + R, w.event.containScroll);
                    }
                  },
                  unbind: {
                    clickaway: function() {
                      w.verbose("Removing clickaway events from context", O),
                        O.off(v);
                    },
                    scrollLock: function() {
                      w.verbose("Removing scroll lock from page"),
                        s.off(v),
                        a.off(v),
                        P.off("scroll" + R);
                    }
                  },
                  add: {
                    inlineCSS: function() {
                      var t,
                        n = w.cache.width || P.outerWidth(),
                        i = w.cache.height || P.outerHeight(),
                        o = w.is.rtl(),
                        a = w.get.direction(),
                        s = { left: n, right: -n, top: i, bottom: -i };
                      o &&
                        (w.verbose("RTL detected, flipping widths"),
                        (s.left = -n),
                        (s.right = n)),
                        (t = "<style>"),
                        "left" === a || "right" === a
                          ? (w.debug(
                              "Adding CSS rules for animation distance",
                              n
                            ),
                            (t +=
                              " .ui.visible." +
                              a +
                              ".sidebar ~ .fixed, .ui.visible." +
                              a +
                              ".sidebar ~ .pusher {   -webkit-transform: translate3d(" +
                              s[a] +
                              "px, 0, 0);           transform: translate3d(" +
                              s[a] +
                              "px, 0, 0); }"))
                          : ("top" !== a && "bottom" != a) ||
                            (t +=
                              " .ui.visible." +
                              a +
                              ".sidebar ~ .fixed, .ui.visible." +
                              a +
                              ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " +
                              s[a] +
                              "px, 0);           transform: translate3d(0, " +
                              s[a] +
                              "px, 0); }"),
                        w.is.ie() &&
                          ("left" === a || "right" === a
                            ? (w.debug(
                                "Adding CSS rules for animation distance",
                                n
                              ),
                              (t +=
                                " body.pushable > .ui.visible." +
                                a +
                                ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" +
                                s[a] +
                                "px, 0, 0);           transform: translate3d(" +
                                s[a] +
                                "px, 0, 0); }"))
                            : ("top" !== a && "bottom" != a) ||
                              (t +=
                                " body.pushable > .ui.visible." +
                                a +
                                ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " +
                                s[a] +
                                "px, 0);           transform: translate3d(0, " +
                                s[a] +
                                "px, 0); }"),
                          (t +=
                            " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }")),
                        (r = e((t += "</style>")).appendTo(c)),
                        w.debug("Adding sizing css to head", r);
                    }
                  },
                  refresh: function() {
                    w.verbose("Refreshing selector cache"),
                      (O = e(C.context)),
                      (j = O.children(k.sidebar)),
                      (F = O.children(k.pusher)),
                      O.children(k.fixed),
                      w.clear.cache();
                  },
                  refreshSidebars: function() {
                    w.verbose("Refreshing other sidebars"),
                      (j = O.children(k.sidebar));
                  },
                  repaint: function() {
                    w.verbose("Forcing repaint event"),
                      (q.style.display = "none");
                    q.offsetHeight;
                    (q.scrollTop = q.scrollTop), (q.style.display = "");
                  },
                  setup: {
                    cache: function() {
                      w.cache = {
                        width: P.outerWidth(),
                        height: P.outerHeight(),
                        rtl: "rtl" == P.css("direction")
                      };
                    },
                    layout: function() {
                      0 === O.children(k.pusher).length &&
                        (w.debug("Adding wrapper element for sidebar"),
                        w.error(E.pusher),
                        (F = e('<div class="pusher" />')),
                        O.children()
                          .not(k.omitted)
                          .not(j)
                          .wrapAll(F),
                        w.refresh()),
                        (0 !== P.nextAll(k.pusher).length &&
                          P.nextAll(k.pusher)[0] === F[0]) ||
                          (w.debug("Moved sidebar to correct parent element"),
                          w.error(E.movedSidebar, q),
                          P.detach().prependTo(O),
                          w.refresh()),
                        w.clear.cache(),
                        w.set.pushable(),
                        w.set.direction();
                    }
                  },
                  attachEvents: function(t, n) {
                    var i = e(t);
                    (n = e.isFunction(w[n]) ? w[n] : w.toggle),
                      i.length > 0
                        ? (w.debug("Attaching sidebar events to element", t, n),
                          i.on("click" + R, n))
                        : w.error(E.notFound, t);
                  },
                  show: function(t) {
                    if (
                      ((t = e.isFunction(t) ? t : function() {}), w.is.hidden())
                    ) {
                      if (
                        (w.refreshSidebars(),
                        C.overlay &&
                          (w.error(E.overlay), (C.transition = "overlay")),
                        w.refresh(),
                        w.othersActive())
                      )
                        if (
                          (w.debug("Other sidebars currently visible"),
                          C.exclusive)
                        ) {
                          if ("overlay" != C.transition)
                            return void w.hideOthers(w.show);
                          w.hideOthers();
                        } else C.transition = "overlay";
                      w.pushPage(function() {
                        t.call(q), C.onShow.call(q);
                      }),
                        C.onChange.call(q),
                        C.onVisible.call(q);
                    } else w.debug("Sidebar is already visible");
                  },
                  hide: function(t) {
                    (t = e.isFunction(t) ? t : function() {}),
                      (w.is.visible() || w.is.animating()) &&
                        (w.debug("Hiding sidebar", t),
                        w.refreshSidebars(),
                        w.pullPage(function() {
                          t.call(q), C.onHidden.call(q);
                        }),
                        C.onChange.call(q),
                        C.onHide.call(q));
                  },
                  othersAnimating: function() {
                    return j.not(P).filter("." + S.animating).length > 0;
                  },
                  othersVisible: function() {
                    return j.not(P).filter("." + S.visible).length > 0;
                  },
                  othersActive: function() {
                    return w.othersVisible() || w.othersAnimating();
                  },
                  hideOthers: function(e) {
                    var t = j.not(P).filter("." + S.visible),
                      n = t.length,
                      i = 0;
                    (e = e || function() {}),
                      t.sidebar("hide", function() {
                        ++i == n && e();
                      });
                  },
                  toggle: function() {
                    w.verbose("Determining toggled direction"),
                      w.is.hidden() ? w.show() : w.hide();
                  },
                  pushPage: function(t) {
                    var n,
                      i,
                      o,
                      r = w.get.transition(),
                      a = "overlay" === r || w.othersActive() ? P : F;
                    (t = e.isFunction(t) ? t : function() {}),
                      "scale down" == C.transition && w.scrollToTop(),
                      w.set.transition(r),
                      w.repaint(),
                      (n = function() {
                        w.bind.clickaway(),
                          w.add.inlineCSS(),
                          w.set.animating(),
                          w.set.visible();
                      }),
                      (i = function() {
                        w.set.dimmed();
                      }),
                      (o = function(e) {
                        e.target == a[0] &&
                          (a.off(x + v, o),
                          w.remove.animating(),
                          w.bind.scrollLock(),
                          t.call(q));
                      }),
                      a.off(x + v),
                      a.on(x + v, o),
                      g(n),
                      C.dimPage && !w.othersVisible() && g(i);
                  },
                  pullPage: function(t) {
                    var n,
                      i,
                      o = w.get.transition(),
                      r = "overlay" == o || w.othersActive() ? P : F;
                    (t = e.isFunction(t) ? t : function() {}),
                      w.verbose(
                        "Removing context push state",
                        w.get.direction()
                      ),
                      w.unbind.clickaway(),
                      w.unbind.scrollLock(),
                      (n = function() {
                        w.set.transition(o),
                          w.set.animating(),
                          w.remove.visible(),
                          C.dimPage &&
                            !w.othersVisible() &&
                            F.removeClass(S.dimmed);
                      }),
                      (i = function(e) {
                        e.target == r[0] &&
                          (r.off(x + v, i),
                          w.remove.animating(),
                          w.remove.transition(),
                          w.remove.inlineCSS(),
                          ("scale down" == o ||
                            (C.returnScroll && w.is.mobile())) &&
                            w.scrollBack(),
                          t.call(q));
                      }),
                      r.off(x + v),
                      r.on(x + v, i),
                      g(n);
                  },
                  scrollToTop: function() {
                    w.verbose(
                      "Scrolling to top of page to avoid animation issues"
                    ),
                      (y = e(t).scrollTop()),
                      P.scrollTop(0),
                      t.scrollTo(0, 0);
                  },
                  scrollBack: function() {
                    w.verbose("Scrolling back to original page position"),
                      t.scrollTo(0, y);
                  },
                  clear: {
                    cache: function() {
                      w.verbose("Clearing cached dimensions"), (w.cache = {});
                    }
                  },
                  set: {
                    ios: function() {
                      l.addClass(S.ios);
                    },
                    pushed: function() {
                      O.addClass(S.pushed);
                    },
                    pushable: function() {
                      O.addClass(S.pushable);
                    },
                    dimmed: function() {
                      F.addClass(S.dimmed);
                    },
                    active: function() {
                      P.addClass(S.active);
                    },
                    animating: function() {
                      P.addClass(S.animating);
                    },
                    transition: function(e) {
                      (e = e || w.get.transition()), P.addClass(e);
                    },
                    direction: function(e) {
                      (e = e || w.get.direction()), P.addClass(S[e]);
                    },
                    visible: function() {
                      P.addClass(S.visible);
                    },
                    overlay: function() {
                      P.addClass(S.overlay);
                    }
                  },
                  remove: {
                    inlineCSS: function() {
                      w.debug("Removing inline css styles", r),
                        r && r.length > 0 && r.remove();
                    },
                    ios: function() {
                      l.removeClass(S.ios);
                    },
                    pushed: function() {
                      O.removeClass(S.pushed);
                    },
                    pushable: function() {
                      O.removeClass(S.pushable);
                    },
                    active: function() {
                      P.removeClass(S.active);
                    },
                    animating: function() {
                      P.removeClass(S.animating);
                    },
                    transition: function(e) {
                      (e = e || w.get.transition()), P.removeClass(e);
                    },
                    direction: function(e) {
                      (e = e || w.get.direction()), P.removeClass(S[e]);
                    },
                    visible: function() {
                      P.removeClass(S.visible);
                    },
                    overlay: function() {
                      P.removeClass(S.overlay);
                    }
                  },
                  get: {
                    direction: function() {
                      return P.hasClass(S.top)
                        ? S.top
                        : P.hasClass(S.right)
                          ? S.right
                          : P.hasClass(S.bottom) ? S.bottom : S.left;
                    },
                    transition: function() {
                      var e,
                        t = w.get.direction();
                      return (
                        (e = w.is.mobile()
                          ? "auto" == C.mobileTransition
                            ? C.defaultTransition.mobile[t]
                            : C.mobileTransition
                          : "auto" == C.transition
                            ? C.defaultTransition.computer[t]
                            : C.transition),
                        w.verbose("Determined transition", e),
                        e
                      );
                    },
                    transitionEvent: function() {
                      var e,
                        t = n.createElement("element"),
                        i = {
                          transition: "transitionend",
                          OTransition: "oTransitionEnd",
                          MozTransition: "transitionend",
                          WebkitTransition: "webkitTransitionEnd"
                        };
                      for (e in i) if (void 0 !== t.style[e]) return i[e];
                    }
                  },
                  is: {
                    ie: function() {
                      return (
                        (!t.ActiveXObject && "ActiveXObject" in t) ||
                        "ActiveXObject" in t
                      );
                    },
                    ios: function() {
                      var e = navigator.userAgent,
                        t = e.match(A.ios),
                        n = e.match(A.mobileChrome);
                      return (
                        !(!t || n) &&
                        (w.verbose("Browser was found to be iOS", e), !0)
                      );
                    },
                    mobile: function() {
                      var e = navigator.userAgent;
                      return e.match(A.mobile)
                        ? (w.verbose("Browser was found to be mobile", e), !0)
                        : (w.verbose(
                            "Browser is not mobile, using regular transition",
                            e
                          ),
                          !1);
                    },
                    hidden: function() {
                      return !w.is.visible();
                    },
                    visible: function() {
                      return P.hasClass(S.visible);
                    },
                    open: function() {
                      return w.is.visible();
                    },
                    closed: function() {
                      return w.is.hidden();
                    },
                    vertical: function() {
                      return P.hasClass(S.top);
                    },
                    animating: function() {
                      return O.hasClass(S.animating);
                    },
                    rtl: function() {
                      return (
                        void 0 === w.cache.rtl &&
                          (w.cache.rtl = "rtl" == P.css("direction")),
                        w.cache.rtl
                      );
                    }
                  },
                  setting: function(t, n) {
                    if ((w.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, C, t);
                    else {
                      if (void 0 === n) return C[t];
                      e.isPlainObject(C[t])
                        ? e.extend(!0, C[t], n)
                        : (C[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, w, t);
                    else {
                      if (void 0 === n) return w[t];
                      w[t] = n;
                    }
                  },
                  debug: function() {
                    !C.silent &&
                      C.debug &&
                      (C.performance
                        ? w.performance.log(arguments)
                        : ((w.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            C.name + ":"
                          )),
                          w.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !C.silent &&
                      C.verbose &&
                      C.debug &&
                      (C.performance
                        ? w.performance.log(arguments)
                        : ((w.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            C.name + ":"
                          )),
                          w.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    C.silent ||
                      ((w.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        C.name + ":"
                      )),
                      w.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      C.performance &&
                        ((n = (t = new Date().getTime()) - (d || t)),
                        (d = t),
                        f.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: q,
                          "Execution Time": n
                        })),
                        clearTimeout(w.performance.timer),
                        (w.performance.timer = setTimeout(
                          w.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = C.name + ":",
                        n = 0;
                      (d = !1),
                        clearTimeout(w.performance.timer),
                        e.each(f, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        u && (t += " '" + u + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          f.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(f)
                            : e.each(f, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (f = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = N;
                    return (
                      (n = n || m),
                      (i = q || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (w.error(E.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  h
                    ? (void 0 === N && w.initialize(), w.invoke(p))
                    : (void 0 !== N && w.invoke("destroy"), w.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.sidebar.settings = {
            name: "Sidebar",
            namespace: "sidebar",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            transition: "auto",
            mobileTransition: "auto",
            defaultTransition: {
              computer: {
                left: "uncover",
                right: "uncover",
                top: "overlay",
                bottom: "overlay"
              },
              mobile: {
                left: "uncover",
                right: "uncover",
                top: "overlay",
                bottom: "overlay"
              }
            },
            context: "body",
            exclusive: !1,
            closable: !0,
            dimPage: !0,
            scrollLock: !1,
            returnScroll: !1,
            delaySetup: !1,
            duration: 500,
            onChange: function() {},
            onShow: function() {},
            onHide: function() {},
            onHidden: function() {},
            onVisible: function() {},
            className: {
              active: "active",
              animating: "animating",
              dimmed: "dimmed",
              ios: "ios",
              pushable: "pushable",
              pushed: "pushed",
              right: "right",
              top: "top",
              left: "left",
              bottom: "bottom",
              visible: "visible"
            },
            selector: {
              fixed: ".fixed",
              omitted:
                "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
              pusher: ".pusher",
              sidebar: ".ui.sidebar"
            },
            regExp: {
              ios: /(iPad|iPhone|iPod)/g,
              mobileChrome: /(CriOS)/g,
              mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
            },
            error: {
              method: "The method you called is not defined.",
              pusher:
                "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
              movedSidebar:
                "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
              overlay:
                "The overlay setting is no longer supported, use animation: overlay",
              notFound:
                "There were no elements that matched the specified selector"
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.sticky = function(i) {
            var o,
              r = e(this),
              a = r.selector || "",
              s = new Date().getTime(),
              l = [],
              c = arguments[0],
              u = "string" == typeof c,
              d = [].slice.call(arguments, 1);
            return (
              r.each(function() {
                var r,
                  f,
                  p,
                  h,
                  m,
                  g = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.sticky.settings, i)
                    : e.extend({}, e.fn.sticky.settings),
                  v = g.className,
                  b = g.namespace,
                  y = g.error,
                  x = "." + b,
                  w = "module-" + b,
                  C = e(this),
                  k = e(t),
                  S = e(g.scrollContext),
                  T = (C.selector, C.data(w)),
                  A =
                    t.requestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.msRequestAnimationFrame ||
                    function(e) {
                      setTimeout(e, 0);
                    },
                  E = this;
                (m = {
                  initialize: function() {
                    m.determineContainer(),
                      m.determineContext(),
                      m.verbose("Initializing sticky", g, r),
                      m.save.positions(),
                      m.checkErrors(),
                      m.bind.events(),
                      g.observeChanges && m.observeChanges(),
                      m.instantiate();
                  },
                  instantiate: function() {
                    m.verbose("Storing instance of module", m),
                      (T = m),
                      C.data(w, m);
                  },
                  destroy: function() {
                    m.verbose("Destroying previous instance"),
                      m.reset(),
                      p && p.disconnect(),
                      h && h.disconnect(),
                      k
                        .off("load" + x, m.event.load)
                        .off("resize" + x, m.event.resize),
                      S.off("scrollchange" + x, m.event.scrollchange),
                      C.removeData(w);
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((p = new MutationObserver(m.event.documentChanged)),
                      (h = new MutationObserver(m.event.changed)),
                      p.observe(n, { childList: !0, subtree: !0 }),
                      h.observe(E, { childList: !0, subtree: !0 }),
                      h.observe(f[0], { childList: !0, subtree: !0 }),
                      m.debug("Setting up mutation observer", h));
                  },
                  determineContainer: function() {
                    r = g.container ? e(g.container) : C.offsetParent();
                  },
                  determineContext: function() {
                    0 !== (f = g.context ? e(g.context) : r).length ||
                      m.error(y.invalidContext, g.context, C);
                  },
                  checkErrors: function() {
                    if (
                      (m.is.hidden() && m.error(y.visible, C),
                      m.cache.element.height > m.cache.context.height)
                    )
                      return m.reset(), void m.error(y.elementSize, C);
                  },
                  bind: {
                    events: function() {
                      k
                        .on("load" + x, m.event.load)
                        .on("resize" + x, m.event.resize),
                        S.off("scroll" + x)
                          .on("scroll" + x, m.event.scroll)
                          .on("scrollchange" + x, m.event.scrollchange);
                    }
                  },
                  event: {
                    changed: function(e) {
                      clearTimeout(m.timer),
                        (m.timer = setTimeout(function() {
                          m.verbose(
                            "DOM tree modified, updating sticky menu",
                            e
                          ),
                            m.refresh();
                        }, 100));
                    },
                    documentChanged: function(t) {
                      [].forEach.call(t, function(t) {
                        t.removedNodes &&
                          [].forEach.call(t.removedNodes, function(t) {
                            (t == E || e(t).find(E).length > 0) &&
                              (m.debug(
                                "Element removed from DOM, tearing down events"
                              ),
                              m.destroy());
                          });
                      });
                    },
                    load: function() {
                      m.verbose("Page contents finished loading"), A(m.refresh);
                    },
                    resize: function() {
                      m.verbose("Window resized"), A(m.refresh);
                    },
                    scroll: function() {
                      A(function() {
                        S.triggerHandler("scrollchange" + x, S.scrollTop());
                      });
                    },
                    scrollchange: function(e, t) {
                      m.stick(t), g.onScroll.call(E);
                    }
                  },
                  refresh: function(e) {
                    m.reset(),
                      g.context || m.determineContext(),
                      e && m.determineContainer(),
                      m.save.positions(),
                      m.stick(),
                      g.onReposition.call(E);
                  },
                  supports: {
                    sticky: function() {
                      var t = e("<div/>");
                      t[0];
                      return (
                        t.addClass(v.supported),
                        t.css("position").match("sticky")
                      );
                    }
                  },
                  save: {
                    lastScroll: function(e) {
                      m.lastScroll = e;
                    },
                    elementScroll: function(e) {
                      m.elementScroll = e;
                    },
                    positions: function() {
                      var e = { height: S.height() },
                        t = {
                          margin: {
                            top: parseInt(C.css("margin-top"), 10),
                            bottom: parseInt(C.css("margin-bottom"), 10)
                          },
                          offset: C.offset(),
                          width: C.outerWidth(),
                          height: C.outerHeight()
                        },
                        n = { offset: f.offset(), height: f.outerHeight() };
                      r.outerHeight();
                      m.is.standardScroll() ||
                        (m.debug(
                          "Non-standard scroll. Removing scroll offset from element offset"
                        ),
                        (e.top = S.scrollTop()),
                        (e.left = S.scrollLeft()),
                        (t.offset.top += e.top),
                        (n.offset.top += e.top),
                        (t.offset.left += e.left),
                        (n.offset.left += e.left)),
                        (m.cache = {
                          fits: t.height + g.offset <= e.height,
                          sameHeight: t.height == n.height,
                          scrollContext: { height: e.height },
                          element: {
                            margin: t.margin,
                            top: t.offset.top - t.margin.top,
                            left: t.offset.left,
                            width: t.width,
                            height: t.height,
                            bottom: t.offset.top + t.height
                          },
                          context: {
                            top: n.offset.top,
                            height: n.height,
                            bottom: n.offset.top + n.height
                          }
                        }),
                        m.set.containerSize(),
                        m.stick(),
                        m.debug("Caching element positions", m.cache);
                    }
                  },
                  get: {
                    direction: function(e) {
                      var t = "down";
                      return (
                        (e = e || S.scrollTop()),
                        void 0 !== m.lastScroll &&
                          (m.lastScroll < e
                            ? (t = "down")
                            : m.lastScroll > e && (t = "up")),
                        t
                      );
                    },
                    scrollChange: function(e) {
                      return (
                        (e = e || S.scrollTop()),
                        m.lastScroll ? e - m.lastScroll : 0
                      );
                    },
                    currentElementScroll: function() {
                      return m.elementScroll
                        ? m.elementScroll
                        : m.is.top()
                          ? Math.abs(parseInt(C.css("top"), 10)) || 0
                          : Math.abs(parseInt(C.css("bottom"), 10)) || 0;
                    },
                    elementScroll: function(e) {
                      e = e || S.scrollTop();
                      var t = m.cache.element,
                        n = m.cache.scrollContext,
                        i = m.get.scrollChange(e),
                        o = t.height - n.height + g.offset,
                        r = m.get.currentElementScroll(),
                        a = r + i;
                      return (r = m.cache.fits || a < 0 ? 0 : a > o ? o : a);
                    }
                  },
                  remove: {
                    lastScroll: function() {
                      delete m.lastScroll;
                    },
                    elementScroll: function(e) {
                      delete m.elementScroll;
                    },
                    minimumSize: function() {
                      r.css("min-height", "");
                    },
                    offset: function() {
                      C.css("margin-top", "");
                    }
                  },
                  set: {
                    offset: function() {
                      m.verbose("Setting offset on element", g.offset),
                        C.css("margin-top", g.offset);
                    },
                    containerSize: function() {
                      var e = r.get(0).tagName;
                      "HTML" === e || "body" == e
                        ? m.determineContainer()
                        : Math.abs(r.outerHeight() - m.cache.context.height) >
                            g.jitter &&
                          (m.debug(
                            "Context has padding, specifying exact height for container",
                            m.cache.context.height
                          ),
                          r.css({ height: m.cache.context.height }));
                    },
                    minimumSize: function() {
                      var e = m.cache.element;
                      r.css("min-height", e.height);
                    },
                    scroll: function(e) {
                      m.debug("Setting scroll on element", e),
                        m.elementScroll != e &&
                          (m.is.top() && C.css("bottom", "").css("top", -e),
                          m.is.bottom() && C.css("top", "").css("bottom", e));
                    },
                    size: function() {
                      0 !== m.cache.element.height &&
                        0 !== m.cache.element.width &&
                        (E.style.setProperty(
                          "width",
                          m.cache.element.width + "px",
                          "important"
                        ),
                        E.style.setProperty(
                          "height",
                          m.cache.element.height + "px",
                          "important"
                        ));
                    }
                  },
                  is: {
                    standardScroll: function() {
                      return S[0] == t;
                    },
                    top: function() {
                      return C.hasClass(v.top);
                    },
                    bottom: function() {
                      return C.hasClass(v.bottom);
                    },
                    initialPosition: function() {
                      return !m.is.fixed() && !m.is.bound();
                    },
                    hidden: function() {
                      return !C.is(":visible");
                    },
                    bound: function() {
                      return C.hasClass(v.bound);
                    },
                    fixed: function() {
                      return C.hasClass(v.fixed);
                    }
                  },
                  stick: function(e) {
                    var t = e || S.scrollTop(),
                      n = m.cache,
                      i = n.fits,
                      o = n.sameHeight,
                      r = n.element,
                      a = n.scrollContext,
                      s = n.context,
                      l =
                        m.is.bottom() && g.pushing ? g.bottomOffset : g.offset,
                      c = ((e = { top: t + l, bottom: t + l + a.height }),
                      m.get.direction(e.top),
                      i ? 0 : m.get.elementScroll(e.top)),
                      u = !i;
                    0 !== r.height &&
                      !o &&
                      (m.is.initialPosition()
                        ? e.top >= s.bottom
                          ? (m.debug(
                              "Initial element position is bottom of container"
                            ),
                            m.bindBottom())
                          : e.top > r.top &&
                            (r.height + e.top - c >= s.bottom
                              ? (m.debug(
                                  "Initial element position is bottom of container"
                                ),
                                m.bindBottom())
                              : (m.debug("Initial element position is fixed"),
                                m.fixTop()))
                        : m.is.fixed()
                          ? m.is.top()
                            ? e.top <= r.top
                              ? (m.debug(
                                  "Fixed element reached top of container"
                                ),
                                m.setInitialPosition())
                              : r.height + e.top - c >= s.bottom
                                ? (m.debug(
                                    "Fixed element reached bottom of container"
                                  ),
                                  m.bindBottom())
                                : u &&
                                  (m.set.scroll(c),
                                  m.save.lastScroll(e.top),
                                  m.save.elementScroll(c))
                            : m.is.bottom() &&
                              (e.bottom - r.height <= r.top
                                ? (m.debug(
                                    "Bottom fixed rail has reached top of container"
                                  ),
                                  m.setInitialPosition())
                                : e.bottom >= s.bottom
                                  ? (m.debug(
                                      "Bottom fixed rail has reached bottom of container"
                                    ),
                                    m.bindBottom())
                                  : u &&
                                    (m.set.scroll(c),
                                    m.save.lastScroll(e.top),
                                    m.save.elementScroll(c)))
                          : m.is.bottom() &&
                            (e.top <= r.top
                              ? (m.debug(
                                  "Jumped from bottom fixed to top fixed, most likely used home/end button"
                                ),
                                m.setInitialPosition())
                              : g.pushing
                                ? m.is.bound() &&
                                  e.bottom <= s.bottom &&
                                  (m.debug(
                                    "Fixing bottom attached element to bottom of browser."
                                  ),
                                  m.fixBottom())
                                : m.is.bound() &&
                                  e.top <= s.bottom - r.height &&
                                  (m.debug(
                                    "Fixing bottom attached element to top of browser."
                                  ),
                                  m.fixTop())));
                  },
                  bindTop: function() {
                    m.debug("Binding element to top of parent container"),
                      m.remove.offset(),
                      C.css({ left: "", top: "", marginBottom: "" })
                        .removeClass(v.fixed)
                        .removeClass(v.bottom)
                        .addClass(v.bound)
                        .addClass(v.top),
                      g.onTop.call(E),
                      g.onUnstick.call(E);
                  },
                  bindBottom: function() {
                    m.debug("Binding element to bottom of parent container"),
                      m.remove.offset(),
                      C.css({ left: "", top: "" })
                        .removeClass(v.fixed)
                        .removeClass(v.top)
                        .addClass(v.bound)
                        .addClass(v.bottom),
                      g.onBottom.call(E),
                      g.onUnstick.call(E);
                  },
                  setInitialPosition: function() {
                    m.debug("Returning to initial position"),
                      m.unfix(),
                      m.unbind();
                  },
                  fixTop: function() {
                    m.debug("Fixing element to top of page"),
                      g.setSize && m.set.size(),
                      m.set.minimumSize(),
                      m.set.offset(),
                      C.css({
                        left: m.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                      })
                        .removeClass(v.bound)
                        .removeClass(v.bottom)
                        .addClass(v.fixed)
                        .addClass(v.top),
                      g.onStick.call(E);
                  },
                  fixBottom: function() {
                    m.debug("Sticking element to bottom of page"),
                      g.setSize && m.set.size(),
                      m.set.minimumSize(),
                      m.set.offset(),
                      C.css({
                        left: m.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                      })
                        .removeClass(v.bound)
                        .removeClass(v.top)
                        .addClass(v.fixed)
                        .addClass(v.bottom),
                      g.onStick.call(E);
                  },
                  unbind: function() {
                    m.is.bound() &&
                      (m.debug("Removing container bound position on element"),
                      m.remove.offset(),
                      C.removeClass(v.bound)
                        .removeClass(v.top)
                        .removeClass(v.bottom));
                  },
                  unfix: function() {
                    m.is.fixed() &&
                      (m.debug("Removing fixed position on element"),
                      m.remove.minimumSize(),
                      m.remove.offset(),
                      C.removeClass(v.fixed)
                        .removeClass(v.top)
                        .removeClass(v.bottom),
                      g.onUnstick.call(E));
                  },
                  reset: function() {
                    m.debug("Resetting elements position"),
                      m.unbind(),
                      m.unfix(),
                      m.resetCSS(),
                      m.remove.offset(),
                      m.remove.lastScroll();
                  },
                  resetCSS: function() {
                    C.css({ width: "", height: "" }), r.css({ height: "" });
                  },
                  setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t);
                    else {
                      if (void 0 === n) return g[t];
                      g[t] = n;
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, m, t);
                    else {
                      if (void 0 === n) return m[t];
                      m[t] = n;
                    }
                  },
                  debug: function() {
                    !g.silent &&
                      g.debug &&
                      (g.performance
                        ? m.performance.log(arguments)
                        : ((m.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            g.name + ":"
                          )),
                          m.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !g.silent &&
                      g.verbose &&
                      g.debug &&
                      (g.performance
                        ? m.performance.log(arguments)
                        : ((m.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            g.name + ":"
                          )),
                          m.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    g.silent ||
                      ((m.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        g.name + ":"
                      )),
                      m.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      g.performance &&
                        ((n = (t = new Date().getTime()) - (s || t)),
                        (s = t),
                        l.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: E,
                          "Execution Time": n
                        })),
                        clearTimeout(m.performance.timer),
                        (m.performance.timer = setTimeout(
                          m.performance.display,
                          0
                        ));
                    },
                    display: function() {
                      var t = g.name + ":",
                        n = 0;
                      (s = !1),
                        clearTimeout(m.performance.timer),
                        e.each(l, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        a && (t += " '" + a + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          l.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(l)
                            : e.each(l, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (l = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = T;
                    return (
                      (n = n || d),
                      (i = E || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  u
                    ? (void 0 === T && m.initialize(), m.invoke(c))
                    : (void 0 !== T && T.invoke("destroy"), m.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.sticky.settings = {
            name: "Sticky",
            namespace: "sticky",
            silent: !1,
            debug: !1,
            verbose: !0,
            performance: !0,
            pushing: !1,
            context: !1,
            container: !1,
            scrollContext: t,
            offset: 0,
            bottomOffset: 0,
            jitter: 5,
            setSize: !0,
            observeChanges: !1,
            onReposition: function() {},
            onScroll: function() {},
            onStick: function() {},
            onUnstick: function() {},
            onTop: function() {},
            onBottom: function() {},
            error: {
              container: "Sticky element must be inside a relative container",
              visible:
                "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",
              method: "The method you called is not defined.",
              invalidContext: "Context specified does not exist",
              elementSize:
                "Sticky element is larger than its container, cannot create sticky."
            },
            className: {
              bound: "bound",
              fixed: "fixed",
              supported: "native",
              top: "top",
              bottom: "bottom"
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.tab = function(i) {
            var o,
              r = e.isFunction(this) ? e(t) : e(this),
              a = r.selector || "",
              s = new Date().getTime(),
              l = [],
              c = arguments[0],
              u = "string" == typeof c,
              d = [].slice.call(arguments, 1),
              f = !1;
            return (
              r.each(function() {
                var p,
                  h,
                  m,
                  g,
                  v,
                  b,
                  y = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.tab.settings, i)
                    : e.extend({}, e.fn.tab.settings),
                  x = y.className,
                  w = y.metadata,
                  C = y.selector,
                  k = y.error,
                  S = "." + y.namespace,
                  T = "module-" + y.namespace,
                  A = e(this),
                  E = {},
                  R = !0,
                  D = 0,
                  P = this,
                  O = A.data(T);
                (v = {
                  initialize: function() {
                    v.debug("Initializing tab menu item", A),
                      v.fix.callbacks(),
                      v.determineTabs(),
                      v.debug("Determining tabs", y.context, h),
                      y.auto && v.set.auto(),
                      v.bind.events(),
                      y.history && !f && (v.initializeHistory(), (f = !0)),
                      v.instantiate();
                  },
                  instantiate: function() {
                    v.verbose("Storing instance of module", v),
                      (O = v),
                      A.data(T, v);
                  },
                  destroy: function() {
                    v.debug("Destroying tabs", A), A.removeData(T).off(S);
                  },
                  bind: {
                    events: function() {
                      e.isWindow(P) ||
                        (v.debug(
                          "Attaching tab activation events to element",
                          A
                        ),
                        A.on("click" + S, v.event.click));
                    }
                  },
                  determineTabs: function() {
                    var t;
                    "parent" === y.context
                      ? (A.closest(C.ui).length > 0
                          ? ((t = A.closest(C.ui)),
                            v.verbose("Using closest UI element as parent", t))
                          : (t = A),
                        (p = t.parent()),
                        v.verbose(
                          "Determined parent element for creating context",
                          p
                        ))
                      : y.context
                        ? ((p = e(y.context)),
                          v.verbose(
                            "Using selector for tab context",
                            y.context,
                            p
                          ))
                        : (p = e("body")),
                      y.childrenOnly
                        ? ((h = p.children(C.tabs)),
                          v.debug(
                            "Searching tab context children for tabs",
                            p,
                            h
                          ))
                        : ((h = p.find(C.tabs)),
                          v.debug("Searching tab context for tabs", p, h));
                  },
                  fix: {
                    callbacks: function() {
                      e.isPlainObject(i) &&
                        (i.onTabLoad || i.onTabInit) &&
                        (i.onTabLoad &&
                          ((i.onLoad = i.onTabLoad),
                          delete i.onTabLoad,
                          v.error(k.legacyLoad, i.onLoad)),
                        i.onTabInit &&
                          ((i.onFirstLoad = i.onTabInit),
                          delete i.onTabInit,
                          v.error(k.legacyInit, i.onFirstLoad)),
                        (y = e.extend(!0, {}, e.fn.tab.settings, i)));
                    }
                  },
                  initializeHistory: function() {
                    if (
                      (v.debug("Initializing page state"), void 0 === e.address)
                    )
                      return v.error(k.state), !1;
                    if ("state" == y.historyType) {
                      if (
                        (v.debug("Using HTML5 to manage state"), !1 === y.path)
                      )
                        return v.error(k.path), !1;
                      e.address.history(!0).state(y.path);
                    }
                    e.address.bind("change", v.event.history.change);
                  },
                  event: {
                    click: function(t) {
                      var n = e(this).data(w.tab);
                      void 0 !== n
                        ? (y.history
                            ? (v.verbose("Updating page state", t),
                              e.address.value(n))
                            : (v.verbose("Changing tab", t), v.changeTab(n)),
                          t.preventDefault())
                        : v.debug("No tab specified");
                    },
                    history: {
                      change: function(t) {
                        var n = t.pathNames.join("/") || v.get.initialPath(),
                          i = y.templates.determineTitle(n) || !1;
                        v.performance.display(),
                          v.debug("History change event", n, t),
                          (b = t),
                          void 0 !== n && v.changeTab(n),
                          i && e.address.title(i);
                      }
                    }
                  },
                  refresh: function() {
                    m && (v.debug("Refreshing tab", m), v.changeTab(m));
                  },
                  cache: {
                    read: function(e) {
                      return void 0 !== e && E[e];
                    },
                    add: function(e, t) {
                      (e = e || m),
                        v.debug("Adding cached content for", e),
                        (E[e] = t);
                    },
                    remove: function(e) {
                      (e = e || m),
                        v.debug("Removing cached content for", e),
                        delete E[e];
                    }
                  },
                  set: {
                    auto: function() {
                      var t =
                        "string" == typeof y.path
                          ? y.path.replace(/\/$/, "") + "/{$tab}"
                          : "/{$tab}";
                      v.verbose(
                        "Setting up automatic tab retrieval from server",
                        t
                      ),
                        e.isPlainObject(y.apiSettings)
                          ? (y.apiSettings.url = t)
                          : (y.apiSettings = { url: t });
                    },
                    loading: function(e) {
                      var t = v.get.tabElement(e);
                      t.hasClass(x.loading) ||
                        (v.verbose("Setting loading state for", t),
                        t
                          .addClass(x.loading)
                          .siblings(h)
                          .removeClass(x.active + " " + x.loading),
                        t.length > 0 && y.onRequest.call(t[0], e));
                    },
                    state: function(t) {
                      e.address.value(t);
                    }
                  },
                  changeTab: function(n) {
                    var i =
                        t.history &&
                        t.history.pushState &&
                        y.ignoreFirstLoad &&
                        R,
                      o = y.auto || e.isPlainObject(y.apiSettings),
                      r =
                        o && !i
                          ? v.utilities.pathToArray(n)
                          : v.get.defaultPathArray(n);
                    (n = v.utilities.arrayToPath(r)),
                      e.each(r, function(t, a) {
                        var s,
                          l,
                          c,
                          u,
                          d = r.slice(0, t + 1),
                          f = v.utilities.arrayToPath(d),
                          h = v.is.tab(f),
                          C = t + 1 == r.length,
                          S = v.get.tabElement(f);
                        if ((v.verbose("Looking for tab", a), h)) {
                          if (
                            (v.verbose("Tab was found", a),
                            (m = f),
                            (g = v.utilities.filterArray(r, d)),
                            C
                              ? (u = !0)
                              : ((l = r.slice(0, t + 2)),
                                (c = v.utilities.arrayToPath(l)),
                                (u = !v.is.tab(c)) &&
                                  v.verbose("Tab parameters found", l)),
                            u && o)
                          )
                            return (
                              i
                                ? (v.debug(
                                    "Ignoring remote content on first tab load",
                                    f
                                  ),
                                  (R = !1),
                                  v.cache.add(n, S.html()),
                                  v.activate.all(f),
                                  y.onFirstLoad.call(S[0], f, g, b),
                                  y.onLoad.call(S[0], f, g, b))
                                : (v.activate.navigation(f),
                                  v.fetch.content(f, n)),
                              !1
                            );
                          v.debug("Opened local tab", f),
                            v.activate.all(f),
                            v.cache.read(f) ||
                              (v.cache.add(f, !0),
                              v.debug("First time tab loaded calling tab init"),
                              y.onFirstLoad.call(S[0], f, g, b)),
                            y.onLoad.call(S[0], f, g, b);
                        } else {
                          if (-1 != n.search("/") || "" === n)
                            return v.error(k.missingTab, A, p, f), !1;
                          if (
                            ((f = (s = e("#" + n + ', a[name="' + n + '"]'))
                              .closest("[data-tab]")
                              .data(w.tab)),
                            (S = v.get.tabElement(f)),
                            s && s.length > 0 && f)
                          )
                            return (
                              v.debug(
                                "Anchor link used, opening parent tab",
                                S,
                                s
                              ),
                              S.hasClass(x.active) ||
                                setTimeout(function() {
                                  v.scrollTo(s);
                                }, 0),
                              v.activate.all(f),
                              v.cache.read(f) ||
                                (v.cache.add(f, !0),
                                v.debug(
                                  "First time tab loaded calling tab init"
                                ),
                                y.onFirstLoad.call(S[0], f, g, b)),
                              y.onLoad.call(S[0], f, g, b),
                              !1
                            );
                        }
                      });
                  },
                  scrollTo: function(t) {
                    var i = !!(t && t.length > 0) && t.offset().top;
                    !1 !== i &&
                      (v.debug(
                        "Forcing scroll to an in-page link in a hidden tab",
                        i,
                        t
                      ),
                      e(n).scrollTop(i));
                  },
                  update: {
                    content: function(t, n, i) {
                      var o = v.get.tabElement(t),
                        r = o[0];
                      (i = void 0 !== i ? i : y.evaluateScripts),
                        "string" == typeof y.cacheType &&
                        "dom" == y.cacheType.toLowerCase() &&
                        "string" != typeof n
                          ? o.empty().append(e(n).clone(!0))
                          : i
                            ? (v.debug(
                                "Updating HTML and evaluating inline scripts",
                                t,
                                n
                              ),
                              o.html(n))
                            : (v.debug("Updating HTML", t, n),
                              (r.innerHTML = n));
                    }
                  },
                  fetch: {
                    content: function(t, n) {
                      var i,
                        o,
                        r = v.get.tabElement(t),
                        a = {
                          dataType: "html",
                          encodeParameters: !1,
                          on: "now",
                          cache: y.alwaysRefresh,
                          headers: { "X-Remote": !0 },
                          onSuccess: function(e) {
                            "response" == y.cacheType && v.cache.add(n, e),
                              v.update.content(t, e),
                              t == m
                                ? (v.debug("Content loaded", t),
                                  v.activate.tab(t))
                                : v.debug("Content loaded in background", t),
                              y.onFirstLoad.call(r[0], t, g, b),
                              y.onLoad.call(r[0], t, g, b),
                              y.loadOnce
                                ? v.cache.add(n, !0)
                                : "string" == typeof y.cacheType &&
                                  "dom" == y.cacheType.toLowerCase() &&
                                  r.children().length > 0
                                  ? setTimeout(function() {
                                      var e = r.children().clone(!0);
                                      (e = e.not("script")), v.cache.add(n, e);
                                    }, 0)
                                  : v.cache.add(n, r.html());
                          },
                          urlData: { tab: n }
                        },
                        s = r.api("get request") || !1,
                        l = s && "pending" === s.state();
                      (n = n || t),
                        (o = v.cache.read(n)),
                        y.cache && o
                          ? (v.activate.tab(t),
                            v.debug("Adding cached content", n),
                            y.loadOnce ||
                              ("once" == y.evaluateScripts
                                ? v.update.content(t, o, !1)
                                : v.update.content(t, o)),
                            y.onLoad.call(r[0], t, g, b))
                          : l
                            ? (v.set.loading(t),
                              v.debug("Content is already loading", n))
                            : void 0 !== e.api
                              ? ((i = e.extend(!0, {}, y.apiSettings, a)),
                                v.debug("Retrieving remote content", n, i),
                                v.set.loading(t),
                                r.api(i))
                              : v.error(k.api);
                    }
                  },
                  activate: {
                    all: function(e) {
                      v.activate.tab(e), v.activate.navigation(e);
                    },
                    tab: function(e) {
                      var t = v.get.tabElement(e),
                        n =
                          "siblings" == y.deactivate ? t.siblings(h) : h.not(t),
                        i = t.hasClass(x.active);
                      v.verbose("Showing tab content for", t),
                        i ||
                          (t.addClass(x.active),
                          n.removeClass(x.active + " " + x.loading),
                          t.length > 0 && y.onVisible.call(t[0], e));
                    },
                    navigation: function(e) {
                      var t = v.get.navElement(e),
                        n =
                          "siblings" == y.deactivate ? t.siblings(r) : r.not(t),
                        i = t.hasClass(x.active);
                      v.verbose("Activating tab navigation for", t, e),
                        i ||
                          (t.addClass(x.active),
                          n.removeClass(x.active + " " + x.loading));
                    }
                  },
                  deactivate: {
                    all: function() {
                      v.deactivate.navigation(), v.deactivate.tabs();
                    },
                    navigation: function() {
                      r.removeClass(x.active);
                    },
                    tabs: function() {
                      h.removeClass(x.active + " " + x.loading);
                    }
                  },
                  is: {
                    tab: function(e) {
                      return void 0 !== e && v.get.tabElement(e).length > 0;
                    }
                  },
                  get: {
                    initialPath: function() {
                      return r.eq(0).data(w.tab) || h.eq(0).data(w.tab);
                    },
                    path: function() {
                      return e.address.value();
                    },
                    defaultPathArray: function(e) {
                      return v.utilities.pathToArray(v.get.defaultPath(e));
                    },
                    defaultPath: function(e) {
                      var t =
                        r
                          .filter("[data-" + w.tab + '^="' + e + '/"]')
                          .eq(0)
                          .data(w.tab) || !1;
                      if (t) {
                        if ((v.debug("Found default tab", t), D < y.maxDepth))
                          return D++, v.get.defaultPath(t);
                        v.error(k.recursion);
                      } else v.debug("No default tabs found for", e, h);
                      return (D = 0), e;
                    },
                    navElement: function(e) {
                      return (
                        (e = e || m),
                        r.filter("[data-" + w.tab + '="' + e + '"]')
                      );
                    },
                    tabElement: function(e) {
                      var t, n, i, o;
                      return (
                        (e = e || m),
                        (i = v.utilities.pathToArray(e)),
                        (o = v.utilities.last(i)),
                        (t = h.filter("[data-" + w.tab + '="' + e + '"]')),
                        (n = h.filter("[data-" + w.tab + '="' + o + '"]')),
                        t.length > 0 ? t : n
                      );
                    },
                    tab: function() {
                      return m;
                    }
                  },
                  utilities: {
                    filterArray: function(t, n) {
                      return e.grep(t, function(t) {
                        return -1 == e.inArray(t, n);
                      });
                    },
                    last: function(t) {
                      return !!e.isArray(t) && t[t.length - 1];
                    },
                    pathToArray: function(e) {
                      return (
                        void 0 === e && (e = m),
                        "string" == typeof e ? e.split("/") : [e]
                      );
                    },
                    arrayToPath: function(t) {
                      return !!e.isArray(t) && t.join("/");
                    }
                  },
                  setting: function(t, n) {
                    if ((v.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, y, t);
                    else {
                      if (void 0 === n) return y[t];
                      e.isPlainObject(y[t])
                        ? e.extend(!0, y[t], n)
                        : (y[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, v, t);
                    else {
                      if (void 0 === n) return v[t];
                      v[t] = n;
                    }
                  },
                  debug: function() {
                    !y.silent &&
                      y.debug &&
                      (y.performance
                        ? v.performance.log(arguments)
                        : ((v.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            y.name + ":"
                          )),
                          v.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !y.silent &&
                      y.verbose &&
                      y.debug &&
                      (y.performance
                        ? v.performance.log(arguments)
                        : ((v.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            y.name + ":"
                          )),
                          v.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    y.silent ||
                      ((v.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        y.name + ":"
                      )),
                      v.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      y.performance &&
                        ((n = (t = new Date().getTime()) - (s || t)),
                        (s = t),
                        l.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: P,
                          "Execution Time": n
                        })),
                        clearTimeout(v.performance.timer),
                        (v.performance.timer = setTimeout(
                          v.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = y.name + ":",
                        n = 0;
                      (s = !1),
                        clearTimeout(v.performance.timer),
                        e.each(l, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        a && (t += " '" + a + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          l.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(l)
                            : e.each(l, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (l = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = O;
                    return (
                      (n = n || d),
                      (i = P || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (v.error(k.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  u
                    ? (void 0 === O && v.initialize(), v.invoke(c))
                    : (void 0 !== O && O.invoke("destroy"), v.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.tab = function() {
            e(t).tab.apply(this, arguments);
          }),
          (e.fn.tab.settings = {
            name: "Tab",
            namespace: "tab",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            auto: !1,
            history: !1,
            historyType: "hash",
            path: !1,
            context: !1,
            childrenOnly: !1,
            maxDepth: 25,
            deactivate: "siblings",
            alwaysRefresh: !1,
            cache: !0,
            loadOnce: !1,
            cacheType: "response",
            ignoreFirstLoad: !1,
            apiSettings: !1,
            evaluateScripts: "once",
            onFirstLoad: function(e, t, n) {},
            onLoad: function(e, t, n) {},
            onVisible: function(e, t, n) {},
            onRequest: function(e, t, n) {},
            templates: { determineTitle: function(e) {} },
            error: {
              api: "You attempted to load content without API module",
              method: "The method you called is not defined",
              missingTab:
                "Activated tab cannot be found. Tabs are case-sensitive.",
              noContent: "The tab you specified is missing a content url.",
              path: "History enabled, but no path was specified",
              recursion: "Max recursive depth reached",
              legacyInit:
                "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
              legacyLoad:
                "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
              state:
                "History requires Asual's Address library <https://github.com/asual/jquery-address>"
            },
            metadata: { tab: "tab", loaded: "loaded", promise: "promise" },
            className: { loading: "loading", active: "active" },
            selector: { tabs: ".ui.tab", ui: ".ui" }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.transition = function() {
            var i,
              o = e(this),
              r = o.selector || "",
              a = new Date().getTime(),
              s = [],
              l = arguments,
              c = l[0],
              u = [].slice.call(arguments, 1),
              d = "string" == typeof c;
            t.requestAnimationFrame ||
              t.mozRequestAnimationFrame ||
              t.webkitRequestAnimationFrame ||
              t.msRequestAnimationFrame;
            return (
              o.each(function(t) {
                var f,
                  p,
                  h,
                  m,
                  g,
                  v,
                  b,
                  y,
                  x,
                  w = e(this),
                  C = this;
                (x = {
                  initialize: function() {
                    (f = x.get.settings.apply(C, l)),
                      (m = f.className),
                      (h = f.error),
                      (g = f.metadata),
                      (y = "." + f.namespace),
                      (b = "module-" + f.namespace),
                      (p = w.data(b) || x),
                      (v = x.get.animationEndEvent()),
                      d && (d = x.invoke(c)),
                      !1 === d &&
                        (x.verbose(
                          "Converted arguments into settings object",
                          f
                        ),
                        f.interval ? x.delay(f.animate) : x.animate(),
                        x.instantiate());
                  },
                  instantiate: function() {
                    x.verbose("Storing instance of module", x),
                      (p = x),
                      w.data(b, p);
                  },
                  destroy: function() {
                    x.verbose("Destroying previous module for", C),
                      w.removeData(b);
                  },
                  refresh: function() {
                    x.verbose("Refreshing display type on next animation"),
                      delete x.displayType;
                  },
                  forceRepaint: function() {
                    x.verbose("Forcing element repaint");
                    var e = w.parent(),
                      t = w.next();
                    0 === t.length
                      ? w.detach().appendTo(e)
                      : w.detach().insertBefore(t);
                  },
                  repaint: function() {
                    x.verbose("Repainting element");
                    C.offsetWidth;
                  },
                  delay: function(e) {
                    var n,
                      i = x.get.animationDirection();
                    i ||
                      (i = x.can.transition() ? x.get.direction() : "static"),
                      (e = void 0 !== e ? e : f.interval),
                      (n =
                        ("auto" == f.reverse && i == m.outward) ||
                        1 == f.reverse
                          ? (o.length - t) * f.interval
                          : t * f.interval),
                      x.debug("Delaying animation by", n),
                      setTimeout(x.animate, n);
                  },
                  animate: function(e) {
                    if (((f = e || f), !x.is.supported()))
                      return x.error(h.support), !1;
                    if (
                      (x.debug("Preparing animation", f.animation),
                      x.is.animating())
                    ) {
                      if (f.queue)
                        return (
                          !f.allowRepeats &&
                          x.has.direction() &&
                          x.is.occurring() &&
                          !0 !== x.queuing
                            ? x.debug(
                                "Animation is currently occurring, preventing queueing same animation",
                                f.animation
                              )
                            : x.queue(f.animation),
                          !1
                        );
                      if (!f.allowRepeats && x.is.occurring())
                        return (
                          x.debug(
                            "Animation is already occurring, will not execute repeated animation",
                            f.animation
                          ),
                          !1
                        );
                      x.debug(
                        "New animation started, completing previous early",
                        f.animation
                      ),
                        p.complete();
                    }
                    x.can.animate()
                      ? x.set.animating(f.animation)
                      : x.error(h.noAnimation, f.animation, C);
                  },
                  reset: function() {
                    x.debug("Resetting animation to beginning conditions"),
                      x.remove.animationCallbacks(),
                      x.restore.conditions(),
                      x.remove.animating();
                  },
                  queue: function(e) {
                    x.debug("Queueing animation of", e),
                      (x.queuing = !0),
                      w.one(v + ".queue" + y, function() {
                        (x.queuing = !1), x.repaint(), x.animate.apply(this, f);
                      });
                  },
                  complete: function(e) {
                    x.debug("Animation complete", f.animation),
                      x.remove.completeCallback(),
                      x.remove.failSafe(),
                      x.is.looping() ||
                        (x.is.outward()
                          ? (x.verbose("Animation is outward, hiding element"),
                            x.restore.conditions(),
                            x.hide())
                          : x.is.inward()
                            ? (x.verbose(
                                "Animation is outward, showing element"
                              ),
                              x.restore.conditions(),
                              x.show())
                            : (x.verbose("Static animation completed"),
                              x.restore.conditions(),
                              f.onComplete.call(C)));
                  },
                  force: {
                    visible: function() {
                      var e = w.attr("style"),
                        t = x.get.userStyle(),
                        n = x.get.displayType(),
                        i = t + "display: " + n + " !important;",
                        o = w.css("display"),
                        r = void 0 === e || "" === e;
                      o !== n
                        ? (x.verbose(
                            "Overriding default display to show element",
                            n
                          ),
                          w.attr("style", i))
                        : r && w.removeAttr("style");
                    },
                    hidden: function() {
                      var e = w.attr("style"),
                        t = w.css("display"),
                        n = void 0 === e || "" === e;
                      "none" === t || x.is.hidden()
                        ? n && w.removeAttr("style")
                        : (x.verbose(
                            "Overriding default display to hide element"
                          ),
                          w.css("display", "none"));
                    }
                  },
                  has: {
                    direction: function(t) {
                      var n = !1;
                      return (
                        "string" == typeof (t = t || f.animation) &&
                          ((t = t.split(" ")),
                          e.each(t, function(e, t) {
                            (t !== m.inward && t !== m.outward) || (n = !0);
                          })),
                        n
                      );
                    },
                    inlineDisplay: function() {
                      var t = w.attr("style") || "";
                      return e.isArray(t.match(/display.*?;/, ""));
                    }
                  },
                  set: {
                    animating: function(e) {
                      var t;
                      x.remove.completeCallback(),
                        (e = e || f.animation),
                        (t = x.get.animationClass(e)),
                        x.save.animation(t),
                        x.force.visible(),
                        x.remove.hidden(),
                        x.remove.direction(),
                        x.start.animation(t);
                    },
                    duration: function(e, t) {
                      ((t =
                        "number" == typeof (t = t || f.duration)
                          ? t + "ms"
                          : t) ||
                        0 === t) &&
                        (x.verbose("Setting animation duration", t),
                        w.css({ "animation-duration": t }));
                    },
                    direction: function(e) {
                      (e = e || x.get.direction()) == m.inward
                        ? x.set.inward()
                        : x.set.outward();
                    },
                    looping: function() {
                      x.debug("Transition set to loop"), w.addClass(m.looping);
                    },
                    hidden: function() {
                      w.addClass(m.transition).addClass(m.hidden);
                    },
                    inward: function() {
                      x.debug("Setting direction to inward"),
                        w.removeClass(m.outward).addClass(m.inward);
                    },
                    outward: function() {
                      x.debug("Setting direction to outward"),
                        w.removeClass(m.inward).addClass(m.outward);
                    },
                    visible: function() {
                      w.addClass(m.transition).addClass(m.visible);
                    }
                  },
                  start: {
                    animation: function(e) {
                      (e = e || x.get.animationClass()),
                        x.debug("Starting tween", e),
                        w.addClass(e).one(v + ".complete" + y, x.complete),
                        f.useFailSafe && x.add.failSafe(),
                        x.set.duration(f.duration),
                        f.onStart.call(C);
                    }
                  },
                  save: {
                    animation: function(e) {
                      x.cache || (x.cache = {}), (x.cache.animation = e);
                    },
                    displayType: function(e) {
                      "none" !== e && w.data(g.displayType, e);
                    },
                    transitionExists: function(t, n) {
                      (e.fn.transition.exists[t] = n),
                        x.verbose("Saving existence of transition", t, n);
                    }
                  },
                  restore: {
                    conditions: function() {
                      var e = x.get.currentAnimation();
                      e &&
                        (w.removeClass(e),
                        x.verbose("Removing animation class", x.cache)),
                        x.remove.duration();
                    }
                  },
                  add: {
                    failSafe: function() {
                      var e = x.get.duration();
                      (x.timer = setTimeout(function() {
                        w.triggerHandler(v);
                      }, e + f.failSafeDelay)),
                        x.verbose("Adding fail safe timer", x.timer);
                    }
                  },
                  remove: {
                    animating: function() {
                      w.removeClass(m.animating);
                    },
                    animationCallbacks: function() {
                      x.remove.queueCallback(), x.remove.completeCallback();
                    },
                    queueCallback: function() {
                      w.off(".queue" + y);
                    },
                    completeCallback: function() {
                      w.off(".complete" + y);
                    },
                    display: function() {
                      w.css("display", "");
                    },
                    direction: function() {
                      w.removeClass(m.inward).removeClass(m.outward);
                    },
                    duration: function() {
                      w.css("animation-duration", "");
                    },
                    failSafe: function() {
                      x.verbose("Removing fail safe timer", x.timer),
                        x.timer && clearTimeout(x.timer);
                    },
                    hidden: function() {
                      w.removeClass(m.hidden);
                    },
                    visible: function() {
                      w.removeClass(m.visible);
                    },
                    looping: function() {
                      x.debug("Transitions are no longer looping"),
                        x.is.looping() && (x.reset(), w.removeClass(m.looping));
                    },
                    transition: function() {
                      w.removeClass(m.visible).removeClass(m.hidden);
                    }
                  },
                  get: {
                    settings: function(t, n, i) {
                      return "object" == typeof t
                        ? e.extend(!0, {}, e.fn.transition.settings, t)
                        : "function" == typeof i
                          ? e.extend({}, e.fn.transition.settings, {
                              animation: t,
                              onComplete: i,
                              duration: n
                            })
                          : "string" == typeof n || "number" == typeof n
                            ? e.extend({}, e.fn.transition.settings, {
                                animation: t,
                                duration: n
                              })
                            : "object" == typeof n
                              ? e.extend({}, e.fn.transition.settings, n, {
                                  animation: t
                                })
                              : "function" == typeof n
                                ? e.extend({}, e.fn.transition.settings, {
                                    animation: t,
                                    onComplete: n
                                  })
                                : e.extend({}, e.fn.transition.settings, {
                                    animation: t
                                  });
                    },
                    animationClass: function(e) {
                      var t = e || f.animation,
                        n =
                          x.can.transition() && !x.has.direction()
                            ? x.get.direction() + " "
                            : "";
                      return m.animating + " " + m.transition + " " + n + t;
                    },
                    currentAnimation: function() {
                      return (
                        !(!x.cache || void 0 === x.cache.animation) &&
                        x.cache.animation
                      );
                    },
                    currentDirection: function() {
                      return x.is.inward() ? m.inward : m.outward;
                    },
                    direction: function() {
                      return x.is.hidden() || !x.is.visible()
                        ? m.inward
                        : m.outward;
                    },
                    animationDirection: function(t) {
                      var n;
                      return (
                        "string" == typeof (t = t || f.animation) &&
                          ((t = t.split(" ")),
                          e.each(t, function(e, t) {
                            t === m.inward
                              ? (n = m.inward)
                              : t === m.outward && (n = m.outward);
                          })),
                        n || !1
                      );
                    },
                    duration: function(e) {
                      return (
                        !1 === (e = e || f.duration) &&
                          (e = w.css("animation-duration") || 0),
                        "string" == typeof e
                          ? e.indexOf("ms") > -1
                            ? parseFloat(e)
                            : 1e3 * parseFloat(e)
                          : e
                      );
                    },
                    displayType: function(e) {
                      return (
                        (e = void 0 === e || e),
                        f.displayType
                          ? f.displayType
                          : (e &&
                              void 0 === w.data(g.displayType) &&
                              x.can.transition(!0),
                            w.data(g.displayType))
                      );
                    },
                    userStyle: function(e) {
                      return (e = e || w.attr("style") || "").replace(
                        /display.*?;/,
                        ""
                      );
                    },
                    transitionExists: function(t) {
                      return e.fn.transition.exists[t];
                    },
                    animationStartEvent: function() {
                      var e,
                        t = n.createElement("div"),
                        i = {
                          animation: "animationstart",
                          OAnimation: "oAnimationStart",
                          MozAnimation: "mozAnimationStart",
                          WebkitAnimation: "webkitAnimationStart"
                        };
                      for (e in i) if (void 0 !== t.style[e]) return i[e];
                      return !1;
                    },
                    animationEndEvent: function() {
                      var e,
                        t = n.createElement("div"),
                        i = {
                          animation: "animationend",
                          OAnimation: "oAnimationEnd",
                          MozAnimation: "mozAnimationEnd",
                          WebkitAnimation: "webkitAnimationEnd"
                        };
                      for (e in i) if (void 0 !== t.style[e]) return i[e];
                      return !1;
                    }
                  },
                  can: {
                    transition: function(t) {
                      var n,
                        i,
                        o,
                        r,
                        a,
                        s,
                        l = f.animation,
                        c = x.get.transitionExists(l),
                        u = x.get.displayType(!1);
                      if (void 0 === c || t) {
                        if (
                          (x.verbose("Determining whether animation exists"),
                          (n = w.attr("class")),
                          (i = w.prop("tagName")),
                          (r = (o = e("<" + i + " />")
                            .addClass(n)
                            .insertAfter(w))
                            .addClass(l)
                            .removeClass(m.inward)
                            .removeClass(m.outward)
                            .addClass(m.animating)
                            .addClass(m.transition)
                            .css("animationName")),
                          (a = o.addClass(m.inward).css("animationName")),
                          u ||
                            ((u = o
                              .attr("class", n)
                              .removeAttr("style")
                              .removeClass(m.hidden)
                              .removeClass(m.visible)
                              .show()
                              .css("display")),
                            x.verbose("Determining final display state", u),
                            x.save.displayType(u)),
                          o.remove(),
                          r != a)
                        )
                          x.debug("Direction exists for animation", l),
                            (s = !0);
                        else {
                          if ("none" == r || !r)
                            return void x.debug(
                              "No animation defined in css",
                              l
                            );
                          x.debug("Static animation found", l, u), (s = !1);
                        }
                        x.save.transitionExists(l, s);
                      }
                      return void 0 !== c ? c : s;
                    },
                    animate: function() {
                      return void 0 !== x.can.transition();
                    }
                  },
                  is: {
                    animating: function() {
                      return w.hasClass(m.animating);
                    },
                    inward: function() {
                      return w.hasClass(m.inward);
                    },
                    outward: function() {
                      return w.hasClass(m.outward);
                    },
                    looping: function() {
                      return w.hasClass(m.looping);
                    },
                    occurring: function(e) {
                      return (
                        (e = "." + (e = e || f.animation).replace(" ", ".")),
                        w.filter(e).length > 0
                      );
                    },
                    visible: function() {
                      return w.is(":visible");
                    },
                    hidden: function() {
                      return "hidden" === w.css("visibility");
                    },
                    supported: function() {
                      return !1 !== v;
                    }
                  },
                  hide: function() {
                    x.verbose("Hiding element"),
                      x.is.animating() && x.reset(),
                      C.blur(),
                      x.remove.display(),
                      x.remove.visible(),
                      x.set.hidden(),
                      x.force.hidden(),
                      f.onHide.call(C),
                      f.onComplete.call(C);
                  },
                  show: function(e) {
                    x.verbose("Showing element", e),
                      x.remove.hidden(),
                      x.set.visible(),
                      x.force.visible(),
                      f.onShow.call(C),
                      f.onComplete.call(C);
                  },
                  toggle: function() {
                    x.is.visible() ? x.hide() : x.show();
                  },
                  stop: function() {
                    x.debug("Stopping current animation"), w.triggerHandler(v);
                  },
                  stopAll: function() {
                    x.debug("Stopping all animation"),
                      x.remove.queueCallback(),
                      w.triggerHandler(v);
                  },
                  clear: {
                    queue: function() {
                      x.debug("Clearing animation queue"),
                        x.remove.queueCallback();
                    }
                  },
                  enable: function() {
                    x.verbose("Starting animation"), w.removeClass(m.disabled);
                  },
                  disable: function() {
                    x.debug("Stopping animation"), w.addClass(m.disabled);
                  },
                  setting: function(t, n) {
                    if ((x.debug("Changing setting", t, n), e.isPlainObject(t)))
                      e.extend(!0, f, t);
                    else {
                      if (void 0 === n) return f[t];
                      e.isPlainObject(f[t])
                        ? e.extend(!0, f[t], n)
                        : (f[t] = n);
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t);
                    else {
                      if (void 0 === n) return x[t];
                      x[t] = n;
                    }
                  },
                  debug: function() {
                    !f.silent &&
                      f.debug &&
                      (f.performance
                        ? x.performance.log(arguments)
                        : ((x.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          x.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !f.silent &&
                      f.verbose &&
                      f.debug &&
                      (f.performance
                        ? x.performance.log(arguments)
                        : ((x.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            f.name + ":"
                          )),
                          x.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    f.silent ||
                      ((x.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        f.name + ":"
                      )),
                      x.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      f.performance &&
                        ((n = (t = new Date().getTime()) - (a || t)),
                        (a = t),
                        s.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: C,
                          "Execution Time": n
                        })),
                        clearTimeout(x.performance.timer),
                        (x.performance.timer = setTimeout(
                          x.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = f.name + ":",
                        n = 0;
                      (a = !1),
                        clearTimeout(x.performance.timer),
                        e.each(s, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        r && (t += " '" + r + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          s.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(s)
                            : e.each(s, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (s = []);
                    }
                  },
                  invoke: function(t, n, o) {
                    var r,
                      a,
                      s,
                      l = p;
                    return (
                      (n = n || u),
                      (o = C || o),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i] && ((a = l[i]), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(o, n))
                        : void 0 !== a && (s = a),
                      e.isArray(i)
                        ? i.push(s)
                        : void 0 !== i ? (i = [i, s]) : void 0 !== s && (i = s),
                      void 0 !== a && a
                    );
                  }
                }).initialize();
              }),
              void 0 !== i ? i : this
            );
          }),
          (e.fn.transition.exists = {}),
          (e.fn.transition.settings = {
            name: "Transition",
            silent: !1,
            debug: !1,
            verbose: !1,
            performance: !0,
            namespace: "transition",
            interval: 0,
            reverse: "auto",
            onStart: function() {},
            onComplete: function() {},
            onShow: function() {},
            onHide: function() {},
            useFailSafe: !0,
            failSafeDelay: 100,
            allowRepeats: !1,
            displayType: !1,
            animation: "fade",
            duration: !1,
            queue: !0,
            metadata: { displayType: "display" },
            className: {
              animating: "animating",
              disabled: "disabled",
              hidden: "hidden",
              inward: "in",
              loading: "loading",
              looping: "looping",
              outward: "out",
              transition: "transition",
              visible: "visible"
            },
            error: {
              noAnimation:
                "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",
              repeated:
                "That animation is already occurring, cancelling repeated animation",
              method: "The method you called is not defined",
              support: "This browser does not support CSS animations"
            }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")();
        (e.api = e.fn.api = function(n) {
          var i,
            o = e.isFunction(this) ? e(t) : e(this),
            r = o.selector || "",
            a = new Date().getTime(),
            s = [],
            l = arguments[0],
            c = "string" == typeof l,
            u = [].slice.call(arguments, 1);
          return (
            o.each(function() {
              var o,
                d,
                f,
                p,
                h,
                m = e.isPlainObject(n)
                  ? e.extend(!0, {}, e.fn.api.settings, n)
                  : e.extend({}, e.fn.api.settings),
                g = m.namespace,
                v = m.metadata,
                b = m.selector,
                y = m.error,
                x = m.className,
                w = "." + g,
                C = "module-" + g,
                k = e(this),
                S = k.closest(b.form),
                T = m.stateContext ? e(m.stateContext) : k,
                A = this,
                E = T[0],
                R = k.data(C);
              (h = {
                initialize: function() {
                  c || h.bind.events(), h.instantiate();
                },
                instantiate: function() {
                  h.verbose("Storing instance of module", h),
                    (R = h),
                    k.data(C, R);
                },
                destroy: function() {
                  h.verbose("Destroying previous module for", A),
                    k.removeData(C).off(w);
                },
                bind: {
                  events: function() {
                    var e = h.get.event();
                    e
                      ? (h.verbose("Attaching API events to element", e),
                        k.on(e + w, h.event.trigger))
                      : "now" == m.on &&
                        (h.debug("Querying API endpoint immediately"),
                        h.query());
                  }
                },
                decode: {
                  json: function(e) {
                    if (void 0 !== e && "string" == typeof e)
                      try {
                        e = JSON.parse(e);
                      } catch (e) {}
                    return e;
                  }
                },
                read: {
                  cachedResponse: function(e) {
                    var n;
                    if (void 0 !== t.Storage)
                      return (
                        (n = sessionStorage.getItem(e)),
                        h.debug("Using cached response", e, n),
                        (n = h.decode.json(n))
                      );
                    h.error(y.noStorage);
                  }
                },
                write: {
                  cachedResponse: function(n, i) {
                    i && "" === i
                      ? h.debug("Response empty, not caching", i)
                      : void 0 !== t.Storage
                        ? (e.isPlainObject(i) && (i = JSON.stringify(i)),
                          sessionStorage.setItem(n, i),
                          h.verbose("Storing cached response for url", n, i))
                        : h.error(y.noStorage);
                  }
                },
                query: function() {
                  if (h.is.disabled())
                    h.debug("Element is disabled API request aborted");
                  else {
                    if (h.is.loading()) {
                      if (!m.interruptRequests)
                        return void h.debug(
                          "Cancelling request, previous request is still pending"
                        );
                      h.debug("Interrupting previous request"), h.abort();
                    }
                    if (
                      (m.defaultData &&
                        e.extend(!0, m.urlData, h.get.defaultData()),
                      m.serializeForm && (m.data = h.add.formData(m.data)),
                      !1 === (d = h.get.settings()))
                    )
                      return (h.cancelled = !0), void h.error(y.beforeSend);
                    if (
                      ((h.cancelled = !1),
                      (f = h.get.templatedURL()) || h.is.mocked())
                    ) {
                      if ((f = h.add.urlData(f)) || h.is.mocked()) {
                        if (
                          ((d.url = m.base + f),
                          (o = e.extend(!0, {}, m, {
                            type: m.method || m.type,
                            data: void 0,
                            url: m.base + f,
                            beforeSend: m.beforeXHR,
                            success: function() {},
                            failure: function() {},
                            complete: function() {}
                          })),
                          h.debug("Querying URL", o.url),
                          h.verbose("Using AJAX settings", o),
                          "local" === m.cache && h.read.cachedResponse(f))
                        )
                          return (
                            h.debug("Response returned from local cache"),
                            (h.request = h.create.request()),
                            void h.request.resolveWith(E, [
                              h.read.cachedResponse(f)
                            ])
                          );
                        m.throttle
                          ? m.throttleFirstRequest || h.timer
                            ? (h.debug("Throttling request", m.throttle),
                              clearTimeout(h.timer),
                              (h.timer = setTimeout(function() {
                                h.timer && delete h.timer,
                                  h.debug(
                                    "Sending throttled request",
                                    void 0,
                                    o.method
                                  ),
                                  h.send.request();
                              }, m.throttle)))
                            : (h.debug("Sending request", void 0, o.method),
                              h.send.request(),
                              (h.timer = setTimeout(function() {}, m.throttle)))
                          : (h.debug("Sending request", void 0, o.method),
                            h.send.request());
                      }
                    } else h.error(y.missingURL);
                  }
                },
                should: {
                  removeError: function() {
                    return (
                      !0 === m.hideError ||
                      ("auto" === m.hideError && !h.is.form())
                    );
                  }
                },
                is: {
                  disabled: function() {
                    return k.filter(b.disabled).length > 0;
                  },
                  expectingJSON: function() {
                    return "json" === m.dataType || "jsonp" === m.dataType;
                  },
                  form: function() {
                    return k.is("form") || T.is("form");
                  },
                  mocked: function() {
                    return (
                      m.mockResponse ||
                      m.mockResponseAsync ||
                      m.response ||
                      m.responseAsync
                    );
                  },
                  input: function() {
                    return k.is("input");
                  },
                  loading: function() {
                    return !!h.request && "pending" == h.request.state();
                  },
                  abortedRequest: function(e) {
                    return e && void 0 !== e.readyState && 0 === e.readyState
                      ? (h.verbose("XHR request determined to be aborted"), !0)
                      : (h.verbose("XHR request was not aborted"), !1);
                  },
                  validResponse: function(t) {
                    return h.is.expectingJSON() && e.isFunction(m.successTest)
                      ? (h.debug(
                          "Checking JSON returned success",
                          m.successTest,
                          t
                        ),
                        m.successTest(t)
                          ? (h.debug("Response passed success test", t), !0)
                          : (h.debug("Response failed success test", t), !1))
                      : (h.verbose(
                          "Response is not JSON, skipping validation",
                          m.successTest,
                          t
                        ),
                        !0);
                  }
                },
                was: {
                  cancelled: function() {
                    return h.cancelled || !1;
                  },
                  succesful: function() {
                    return h.request && "resolved" == h.request.state();
                  },
                  failure: function() {
                    return h.request && "rejected" == h.request.state();
                  },
                  complete: function() {
                    return (
                      h.request &&
                      ("resolved" == h.request.state() ||
                        "rejected" == h.request.state())
                    );
                  }
                },
                add: {
                  urlData: function(t, n) {
                    var i, o;
                    return (
                      t &&
                        ((i = t.match(m.regExp.required)),
                        (o = t.match(m.regExp.optional)),
                        (n = n || m.urlData),
                        i &&
                          (h.debug("Looking for required URL variables", i),
                          e.each(i, function(i, o) {
                            var r =
                                -1 !== o.indexOf("$")
                                  ? o.substr(2, o.length - 3)
                                  : o.substr(1, o.length - 2),
                              a =
                                e.isPlainObject(n) && void 0 !== n[r]
                                  ? n[r]
                                  : void 0 !== k.data(r)
                                    ? k.data(r)
                                    : void 0 !== T.data(r) ? T.data(r) : n[r];
                            if (void 0 === a)
                              return (
                                h.error(y.requiredParameter, r, t), (t = !1), !1
                              );
                            h.verbose("Found required variable", r, a),
                              (a = m.encodeParameters
                                ? h.get.urlEncodedValue(a)
                                : a),
                              (t = t.replace(o, a));
                          })),
                        o &&
                          (h.debug("Looking for optional URL variables", i),
                          e.each(o, function(i, o) {
                            var r =
                                -1 !== o.indexOf("$")
                                  ? o.substr(3, o.length - 4)
                                  : o.substr(2, o.length - 3),
                              a =
                                e.isPlainObject(n) && void 0 !== n[r]
                                  ? n[r]
                                  : void 0 !== k.data(r)
                                    ? k.data(r)
                                    : void 0 !== T.data(r) ? T.data(r) : n[r];
                            void 0 !== a
                              ? (h.verbose("Optional variable Found", r, a),
                                (t = t.replace(o, a)))
                              : (h.verbose("Optional variable not found", r),
                                (t =
                                  -1 !== t.indexOf("/" + o)
                                    ? t.replace("/" + o, "")
                                    : t.replace(o, "")));
                          }))),
                      t
                    );
                  },
                  formData: function(t) {
                    var n = void 0 !== e.fn.serializeObject,
                      i = n ? S.serializeObject() : S.serialize();
                    return (
                      (t = t || m.data),
                      e.isPlainObject(t)
                        ? n
                          ? (h.debug(
                              "Extending existing data with form data",
                              t,
                              i
                            ),
                            (t = e.extend(!0, {}, t, i)))
                          : (h.error(y.missingSerialize),
                            h.debug(
                              "Cant extend data. Replacing data with form data",
                              t,
                              i
                            ),
                            (t = i))
                        : (h.debug("Adding form data", i), (t = i)),
                      t
                    );
                  }
                },
                send: {
                  request: function() {
                    h.set.loading(),
                      (h.request = h.create.request()),
                      h.is.mocked()
                        ? (h.mockedXHR = h.create.mockedXHR())
                        : (h.xhr = h.create.xhr()),
                      m.onRequest.call(E, h.request, h.xhr);
                  }
                },
                event: {
                  trigger: function(e) {
                    h.query(),
                      ("submit" != e.type && "click" != e.type) ||
                        e.preventDefault();
                  },
                  xhr: {
                    always: function() {},
                    done: function(t, n, i) {
                      var o = this,
                        r = new Date().getTime() - p,
                        a = m.loadingDuration - r,
                        s =
                          !!e.isFunction(m.onResponse) &&
                          (h.is.expectingJSON()
                            ? m.onResponse.call(o, e.extend(!0, {}, t))
                            : m.onResponse.call(o, t));
                      (a = a > 0 ? a : 0),
                        s &&
                          (h.debug(
                            "Modified API response in onResponse callback",
                            m.onResponse,
                            s,
                            t
                          ),
                          (t = s)),
                        a > 0 &&
                          h.debug(
                            "Response completed early delaying state change by",
                            a
                          ),
                        setTimeout(function() {
                          h.is.validResponse(t)
                            ? h.request.resolveWith(o, [t, i])
                            : h.request.rejectWith(o, [i, "invalid"]);
                        }, a);
                    },
                    fail: function(e, t, n) {
                      var i = this,
                        o = new Date().getTime() - p,
                        r = m.loadingDuration - o;
                      (r = r > 0 ? r : 0) > 0 &&
                        h.debug(
                          "Response completed early delaying state change by",
                          r
                        ),
                        setTimeout(function() {
                          h.is.abortedRequest(e)
                            ? h.request.rejectWith(i, [e, "aborted", n])
                            : h.request.rejectWith(i, [e, "error", t, n]);
                        }, r);
                    }
                  },
                  request: {
                    done: function(e, t) {
                      h.debug("Successful API Response", e),
                        "local" === m.cache &&
                          f &&
                          (h.write.cachedResponse(f, e),
                          h.debug("Saving server response locally", h.cache)),
                        m.onSuccess.call(E, e, k, t);
                    },
                    complete: function(e, t) {
                      var n, i;
                      h.was.succesful()
                        ? ((i = e), (n = t))
                        : ((n = e), (i = h.get.responseFromXHR(n))),
                        h.remove.loading(),
                        m.onComplete.call(E, i, k, n);
                    },
                    fail: function(e, t, n) {
                      var i = h.get.responseFromXHR(e),
                        r = h.get.errorFromRequest(i, t, n);
                      if ("aborted" == t)
                        return (
                          h.debug(
                            "XHR Aborted (Most likely caused by page navigation or CORS Policy)",
                            t,
                            n
                          ),
                          m.onAbort.call(E, t, k, e),
                          !0
                        );
                      "invalid" == t
                        ? h.debug(
                            "JSON did not pass success test. A server-side error has most likely occurred",
                            i
                          )
                        : "error" == t &&
                          void 0 !== e &&
                          (h.debug("XHR produced a server error", t, n),
                          200 != e.status &&
                            void 0 !== n &&
                            "" !== n &&
                            h.error(y.statusMessage + n, o.url),
                          m.onError.call(E, r, k, e)),
                        m.errorDuration &&
                          "aborted" !== t &&
                          (h.debug("Adding error state"),
                          h.set.error(),
                          h.should.removeError() &&
                            setTimeout(h.remove.error, m.errorDuration)),
                        h.debug("API Request failed", r, e),
                        m.onFailure.call(E, i, k, e);
                    }
                  }
                },
                create: {
                  request: function() {
                    return e
                      .Deferred()
                      .always(h.event.request.complete)
                      .done(h.event.request.done)
                      .fail(h.event.request.fail);
                  },
                  mockedXHR: function() {
                    var t,
                      n,
                      i,
                      o = m.mockResponse || m.response,
                      r = m.mockResponseAsync || m.responseAsync;
                    return (
                      (i = e
                        .Deferred()
                        .always(h.event.xhr.complete)
                        .done(h.event.xhr.done)
                        .fail(h.event.xhr.fail)),
                      o
                        ? (e.isFunction(o)
                            ? (h.debug(
                                "Using specified synchronous callback",
                                o
                              ),
                              (n = o.call(E, d)))
                            : (h.debug("Using settings specified response", o),
                              (n = o)),
                          i.resolveWith(E, [n, !1, { responseText: n }]))
                        : e.isFunction(r) &&
                          ((t = function(e) {
                            h.debug("Async callback returned response", e),
                              e
                                ? i.resolveWith(E, [e, !1, { responseText: e }])
                                : i.rejectWith(E, [
                                    { responseText: e },
                                    !1,
                                    !1
                                  ]);
                          }),
                          h.debug("Using specified async response callback", r),
                          r.call(E, d, t)),
                      i
                    );
                  },
                  xhr: function() {
                    var t;
                    return (
                      (t = e
                        .ajax(o)
                        .always(h.event.xhr.always)
                        .done(h.event.xhr.done)
                        .fail(h.event.xhr.fail)),
                      h.verbose("Created server request", t, o),
                      t
                    );
                  }
                },
                set: {
                  error: function() {
                    h.verbose("Adding error state to element", T),
                      T.addClass(x.error);
                  },
                  loading: function() {
                    h.verbose("Adding loading state to element", T),
                      T.addClass(x.loading),
                      (p = new Date().getTime());
                  }
                },
                remove: {
                  error: function() {
                    h.verbose("Removing error state from element", T),
                      T.removeClass(x.error);
                  },
                  loading: function() {
                    h.verbose("Removing loading state from element", T),
                      T.removeClass(x.loading);
                  }
                },
                get: {
                  responseFromXHR: function(t) {
                    return (
                      !!e.isPlainObject(t) &&
                      (h.is.expectingJSON()
                        ? h.decode.json(t.responseText)
                        : t.responseText)
                    );
                  },
                  errorFromRequest: function(t, n, i) {
                    return e.isPlainObject(t) && void 0 !== t.error
                      ? t.error
                      : void 0 !== m.error[n] ? m.error[n] : i;
                  },
                  request: function() {
                    return h.request || !1;
                  },
                  xhr: function() {
                    return h.xhr || !1;
                  },
                  settings: function() {
                    var t;
                    return (
                      (t = m.beforeSend.call(E, m)) &&
                        (void 0 !== t.success &&
                          (h.debug("Legacy success callback detected", t),
                          h.error(y.legacyParameters, t.success),
                          (t.onSuccess = t.success)),
                        void 0 !== t.failure &&
                          (h.debug("Legacy failure callback detected", t),
                          h.error(y.legacyParameters, t.failure),
                          (t.onFailure = t.failure)),
                        void 0 !== t.complete &&
                          (h.debug("Legacy complete callback detected", t),
                          h.error(y.legacyParameters, t.complete),
                          (t.onComplete = t.complete))),
                      void 0 === t && h.error(y.noReturnedValue),
                      !1 === t
                        ? t
                        : void 0 !== t
                          ? e.extend(!0, {}, t)
                          : e.extend(!0, {}, m)
                    );
                  },
                  urlEncodedValue: function(e) {
                    var n = t.decodeURIComponent(e),
                      i = t.encodeURIComponent(e);
                    return n !== e
                      ? (h.debug(
                          "URL value is already encoded, avoiding double encoding",
                          e
                        ),
                        e)
                      : (h.verbose(
                          "Encoding value using encodeURIComponent",
                          e,
                          i
                        ),
                        i);
                  },
                  defaultData: function() {
                    var t = {};
                    return (
                      e.isWindow(A) ||
                        (h.is.input()
                          ? (t.value = k.val())
                          : h.is.form() || (t.text = k.text())),
                      t
                    );
                  },
                  event: function() {
                    return e.isWindow(A) || "now" == m.on
                      ? (h.debug(
                          "API called without element, no events attached"
                        ),
                        !1)
                      : "auto" == m.on
                        ? k.is("input")
                          ? void 0 !== A.oninput
                            ? "input"
                            : void 0 !== A.onpropertychange
                              ? "propertychange"
                              : "keyup"
                          : k.is("form") ? "submit" : "click"
                        : m.on;
                  },
                  templatedURL: function(e) {
                    if (
                      ((e = e || k.data(v.action) || m.action || !1),
                      (f = k.data(v.url) || m.url || !1))
                    )
                      return h.debug("Using specified url", f), f;
                    if (e) {
                      if (
                        (h.debug("Looking up url for action", e, m.api),
                        void 0 === m.api[e] && !h.is.mocked())
                      )
                        return void h.error(y.missingAction, m.action, m.api);
                      f = m.api[e];
                    } else
                      h.is.form() &&
                        ((f = k.attr("action") || T.attr("action") || !1),
                        h.debug(
                          "No url or action specified, defaulting to form action",
                          f
                        ));
                    return f;
                  }
                },
                abort: function() {
                  var e = h.get.xhr();
                  e &&
                    "resolved" !== e.state() &&
                    (h.debug("Cancelling API request"), e.abort());
                },
                reset: function() {
                  h.remove.error(), h.remove.loading();
                },
                setting: function(t, n) {
                  if ((h.debug("Changing setting", t, n), e.isPlainObject(t)))
                    e.extend(!0, m, t);
                  else {
                    if (void 0 === n) return m[t];
                    e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : (m[t] = n);
                  }
                },
                internal: function(t, n) {
                  if (e.isPlainObject(t)) e.extend(!0, h, t);
                  else {
                    if (void 0 === n) return h[t];
                    h[t] = n;
                  }
                },
                debug: function() {
                  !m.silent &&
                    m.debug &&
                    (m.performance
                      ? h.performance.log(arguments)
                      : ((h.debug = Function.prototype.bind.call(
                          console.info,
                          console,
                          m.name + ":"
                        )),
                        h.debug.apply(console, arguments)));
                },
                verbose: function() {
                  !m.silent &&
                    m.verbose &&
                    m.debug &&
                    (m.performance
                      ? h.performance.log(arguments)
                      : ((h.verbose = Function.prototype.bind.call(
                          console.info,
                          console,
                          m.name + ":"
                        )),
                        h.verbose.apply(console, arguments)));
                },
                error: function() {
                  m.silent ||
                    ((h.error = Function.prototype.bind.call(
                      console.error,
                      console,
                      m.name + ":"
                    )),
                    h.error.apply(console, arguments));
                },
                performance: {
                  log: function(e) {
                    var t, n;
                    m.performance &&
                      ((n = (t = new Date().getTime()) - (a || t)),
                      (a = t),
                      s.push({
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        "Execution Time": n
                      })),
                      clearTimeout(h.performance.timer),
                      (h.performance.timer = setTimeout(
                        h.performance.display,
                        500
                      ));
                  },
                  display: function() {
                    var t = m.name + ":",
                      n = 0;
                    (a = !1),
                      clearTimeout(h.performance.timer),
                      e.each(s, function(e, t) {
                        n += t["Execution Time"];
                      }),
                      (t += " " + n + "ms"),
                      r && (t += " '" + r + "'"),
                      (void 0 !== console.group || void 0 !== console.table) &&
                        s.length > 0 &&
                        (console.groupCollapsed(t),
                        console.table
                          ? console.table(s)
                          : e.each(s, function(e, t) {
                              console.log(
                                t.Name + ": " + t["Execution Time"] + "ms"
                              );
                            }),
                        console.groupEnd()),
                      (s = []);
                  }
                },
                invoke: function(t, n, o) {
                  var r,
                    a,
                    s,
                    l = R;
                  return (
                    (n = n || u),
                    (o = A || o),
                    "string" == typeof t &&
                      void 0 !== l &&
                      ((t = t.split(/[\. ]/)),
                      (r = t.length - 1),
                      e.each(t, function(n, i) {
                        var o =
                          n != r
                            ? i +
                              t[n + 1].charAt(0).toUpperCase() +
                              t[n + 1].slice(1)
                            : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                          if (void 0 !== l[o]) return (a = l[o]), !1;
                          if (!e.isPlainObject(l[i]) || n == r)
                            return void 0 !== l[i]
                              ? ((a = l[i]), !1)
                              : (h.error(y.method, t), !1);
                          l = l[i];
                        }
                      })),
                    e.isFunction(a)
                      ? (s = a.apply(o, n))
                      : void 0 !== a && (s = a),
                    e.isArray(i)
                      ? i.push(s)
                      : void 0 !== i ? (i = [i, s]) : void 0 !== s && (i = s),
                    a
                  );
                }
              }),
                c
                  ? (void 0 === R && h.initialize(), h.invoke(l))
                  : (void 0 !== R && R.invoke("destroy"), h.initialize());
            }),
            void 0 !== i ? i : this
          );
        }),
          (e.api.settings = {
            name: "API",
            namespace: "api",
            debug: !1,
            verbose: !1,
            performance: !0,
            api: {},
            cache: !0,
            interruptRequests: !0,
            on: "auto",
            stateContext: !1,
            loadingDuration: 0,
            hideError: "auto",
            errorDuration: 2e3,
            encodeParameters: !0,
            action: !1,
            url: !1,
            base: "",
            urlData: {},
            defaultData: !0,
            serializeForm: !1,
            throttle: 0,
            throttleFirstRequest: !0,
            method: "get",
            data: {},
            dataType: "json",
            mockResponse: !1,
            mockResponseAsync: !1,
            response: !1,
            responseAsync: !1,
            beforeSend: function(e) {
              return e;
            },
            beforeXHR: function(e) {},
            onRequest: function(e, t) {},
            onResponse: !1,
            onSuccess: function(e, t) {},
            onComplete: function(e, t) {},
            onFailure: function(e, t) {},
            onError: function(e, t) {},
            onAbort: function(e, t) {},
            successTest: !1,
            error: {
              beforeSend: "The before send function has aborted the request",
              error: "There was an error with your request",
              exitConditions: "API Request Aborted. Exit conditions met",
              JSONParse: "JSON could not be parsed during error handling",
              legacyParameters:
                "You are using legacy API success callback names",
              method: "The method you called is not defined",
              missingAction: "API action used but no url was defined",
              missingSerialize:
                "jquery-serialize-object is required to add form data to an existing data object",
              missingURL: "No URL specified for api event",
              noReturnedValue:
                "The beforeSend callback must return a settings object, beforeSend ignored.",
              noStorage: "Caching responses locally requires session storage",
              parseError: "There was an error parsing your request",
              requiredParameter: "Missing a required URL parameter: ",
              statusMessage: "Server gave an error: ",
              timeout: "Your request timed out"
            },
            regExp: {
              required: /\{\$*[A-z0-9]+\}/g,
              optional: /\{\/\$*[A-z0-9]+\}/g
            },
            className: { loading: "loading", error: "error" },
            selector: { disabled: ".disabled", form: "form" },
            metadata: { action: "action", url: "url" }
          });
      })(jQuery, window, document),
      (function(e, t, n, i) {
        "use strict";
        (t =
          void 0 !== t && t.Math == Math
            ? t
            : "undefined" != typeof self && self.Math == Math
              ? self
              : Function("return this")()),
          (e.fn.visibility = function(i) {
            var o,
              r = e(this),
              a = r.selector || "",
              s = new Date().getTime(),
              l = [],
              c = arguments[0],
              u = "string" == typeof c,
              d = [].slice.call(arguments, 1),
              f = r.length,
              p = 0;
            return (
              r.each(function() {
                var r,
                  h,
                  m,
                  g,
                  v = e.isPlainObject(i)
                    ? e.extend(!0, {}, e.fn.visibility.settings, i)
                    : e.extend({}, e.fn.visibility.settings),
                  b = v.className,
                  y = v.namespace,
                  x = v.error,
                  w = v.metadata,
                  C = "." + y,
                  k = "module-" + y,
                  S = e(t),
                  T = e(this),
                  A = e(v.context),
                  E = (T.selector, T.data(k)),
                  R =
                    t.requestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.msRequestAnimationFrame ||
                    function(e) {
                      setTimeout(e, 0);
                    },
                  D = this,
                  P = !1;
                (g = {
                  initialize: function() {
                    g.debug("Initializing", v),
                      g.setup.cache(),
                      g.should.trackChanges() &&
                        ("image" == v.type && g.setup.image(),
                        "fixed" == v.type && g.setup.fixed(),
                        v.observeChanges && g.observeChanges(),
                        g.bind.events()),
                      g.save.position(),
                      g.is.visible() || g.error(x.visible, T),
                      v.initialCheck && g.checkVisibility(),
                      g.instantiate();
                  },
                  instantiate: function() {
                    g.debug("Storing instance", g), T.data(k, g), (E = g);
                  },
                  destroy: function() {
                    g.verbose("Destroying previous module"),
                      m && m.disconnect(),
                      h && h.disconnect(),
                      S.off("load" + C, g.event.load).off(
                        "resize" + C,
                        g.event.resize
                      ),
                      A.off("scroll" + C, g.event.scroll).off(
                        "scrollchange" + C,
                        g.event.scrollchange
                      ),
                      "fixed" == v.type &&
                        (g.resetFixed(), g.remove.placeholder()),
                      T.off(C).removeData(k);
                  },
                  observeChanges: function() {
                    "MutationObserver" in t &&
                      ((h = new MutationObserver(g.event.contextChanged)),
                      (m = new MutationObserver(g.event.changed)),
                      h.observe(n, { childList: !0, subtree: !0 }),
                      m.observe(D, { childList: !0, subtree: !0 }),
                      g.debug("Setting up mutation observer", m));
                  },
                  bind: {
                    events: function() {
                      g.verbose(
                        "Binding visibility events to scroll and resize"
                      ),
                        v.refreshOnLoad && S.on("load" + C, g.event.load),
                        S.on("resize" + C, g.event.resize),
                        A.off("scroll" + C)
                          .on("scroll" + C, g.event.scroll)
                          .on("scrollchange" + C, g.event.scrollchange);
                    }
                  },
                  event: {
                    changed: function(e) {
                      g.verbose(
                        "DOM tree modified, updating visibility calculations"
                      ),
                        (g.timer = setTimeout(function() {
                          g.verbose("DOM tree modified, updating sticky menu"),
                            g.refresh();
                        }, 100));
                    },
                    contextChanged: function(t) {
                      [].forEach.call(t, function(t) {
                        t.removedNodes &&
                          [].forEach.call(t.removedNodes, function(t) {
                            (t == D || e(t).find(D).length > 0) &&
                              (g.debug(
                                "Element removed from DOM, tearing down events"
                              ),
                              g.destroy());
                          });
                      });
                    },
                    resize: function() {
                      g.debug("Window resized"),
                        v.refreshOnResize && R(g.refresh);
                    },
                    load: function() {
                      g.debug("Page finished loading"), R(g.refresh);
                    },
                    scroll: function() {
                      v.throttle
                        ? (clearTimeout(g.timer),
                          (g.timer = setTimeout(function() {
                            A.triggerHandler("scrollchange" + C, [
                              A.scrollTop()
                            ]);
                          }, v.throttle)))
                        : R(function() {
                            A.triggerHandler("scrollchange" + C, [
                              A.scrollTop()
                            ]);
                          });
                    },
                    scrollchange: function(e, t) {
                      g.checkVisibility(t);
                    }
                  },
                  precache: function(t, i) {
                    t instanceof Array || (t = [t]);
                    for (
                      var o = t.length,
                        r = 0,
                        a = [],
                        s = n.createElement("img"),
                        l = function() {
                          ++r >= t.length && e.isFunction(i) && i();
                        };
                      o--;

                    )
                      ((s = n.createElement("img")).onload = l),
                        (s.onerror = l),
                        (s.src = t[o]),
                        a.push(s);
                  },
                  enableCallbacks: function() {
                    g.debug("Allowing callbacks to occur"), (P = !1);
                  },
                  disableCallbacks: function() {
                    g.debug("Disabling all callbacks temporarily"), (P = !0);
                  },
                  should: {
                    trackChanges: function() {
                      return u
                        ? (g.debug("One time query, no need to bind events"),
                          !1)
                        : (g.debug("Callbacks being attached"), !0);
                    }
                  },
                  setup: {
                    cache: function() {
                      g.cache = { occurred: {}, screen: {}, element: {} };
                    },
                    image: function() {
                      var e = T.data(w.src);
                      e &&
                        (g.verbose("Lazy loading image", e),
                        (v.once = !0),
                        (v.observeChanges = !1),
                        (v.onOnScreen = function() {
                          g.debug("Image on screen", D),
                            g.precache(e, function() {
                              g.set.image(e, function() {
                                ++p == f && v.onAllLoaded.call(this),
                                  v.onLoad.call(this);
                              });
                            });
                        }));
                    },
                    fixed: function() {
                      g.debug("Setting up fixed"),
                        (v.once = !1),
                        (v.observeChanges = !1),
                        (v.initialCheck = !0),
                        (v.refreshOnLoad = !0),
                        i.transition || (v.transition = !1),
                        g.create.placeholder(),
                        g.debug("Added placeholder", r),
                        (v.onTopPassed = function() {
                          g.debug("Element passed, adding fixed position", T),
                            g.show.placeholder(),
                            g.set.fixed(),
                            v.transition &&
                              void 0 !== e.fn.transition &&
                              T.transition(v.transition, v.duration);
                        }),
                        (v.onTopPassedReverse = function() {
                          g.debug(
                            "Element returned to position, removing fixed",
                            T
                          ),
                            g.hide.placeholder(),
                            g.remove.fixed();
                        });
                    }
                  },
                  create: {
                    placeholder: function() {
                      g.verbose("Creating fixed position placeholder"),
                        (r = T.clone(!1)
                          .css("display", "none")
                          .addClass(b.placeholder)
                          .insertAfter(T));
                    }
                  },
                  show: {
                    placeholder: function() {
                      g.verbose("Showing placeholder"),
                        r.css("display", "block").css("visibility", "hidden");
                    }
                  },
                  hide: {
                    placeholder: function() {
                      g.verbose("Hiding placeholder"),
                        r.css("display", "none").css("visibility", "");
                    }
                  },
                  set: {
                    fixed: function() {
                      g.verbose("Setting element to fixed position"),
                        T.addClass(b.fixed).css({
                          position: "fixed",
                          top: v.offset + "px",
                          left: "auto",
                          zIndex: v.zIndex
                        }),
                        v.onFixed.call(D);
                    },
                    image: function(t, n) {
                      if ((T.attr("src", t), v.transition))
                        if (void 0 !== e.fn.transition) {
                          if (T.hasClass(b.visible))
                            return void g.debug(
                              "Transition already occurred on this image, skipping animation"
                            );
                          T.transition(v.transition, v.duration, n);
                        } else T.fadeIn(v.duration, n);
                      else T.show();
                    }
                  },
                  is: {
                    onScreen: function() {
                      return g.get.elementCalculations().onScreen;
                    },
                    offScreen: function() {
                      return g.get.elementCalculations().offScreen;
                    },
                    visible: function() {
                      return (
                        !(!g.cache || !g.cache.element) &&
                        !(
                          0 === g.cache.element.width &&
                          0 === g.cache.element.offset.top
                        )
                      );
                    },
                    verticallyScrollableContext: function() {
                      var e = A.get(0) !== t && A.css("overflow-y");
                      return "auto" == e || "scroll" == e;
                    },
                    horizontallyScrollableContext: function() {
                      var e = A.get(0) !== t && A.css("overflow-x");
                      return "auto" == e || "scroll" == e;
                    }
                  },
                  refresh: function() {
                    g.debug("Refreshing constants (width/height)"),
                      "fixed" == v.type && g.resetFixed(),
                      g.reset(),
                      g.save.position(),
                      v.checkOnRefresh && g.checkVisibility(),
                      v.onRefresh.call(D);
                  },
                  resetFixed: function() {
                    g.remove.fixed(), g.remove.occurred();
                  },
                  reset: function() {
                    g.verbose("Resetting all cached values"),
                      e.isPlainObject(g.cache) &&
                        ((g.cache.screen = {}), (g.cache.element = {}));
                  },
                  checkVisibility: function(e) {
                    g.verbose(
                      "Checking visibility of element",
                      g.cache.element
                    ),
                      !P &&
                        g.is.visible() &&
                        (g.save.scroll(e),
                        g.save.calculations(),
                        g.passed(),
                        g.passingReverse(),
                        g.topVisibleReverse(),
                        g.bottomVisibleReverse(),
                        g.topPassedReverse(),
                        g.bottomPassedReverse(),
                        g.onScreen(),
                        g.offScreen(),
                        g.passing(),
                        g.topVisible(),
                        g.bottomVisible(),
                        g.topPassed(),
                        g.bottomPassed(),
                        v.onUpdate &&
                          v.onUpdate.call(D, g.get.elementCalculations()));
                  },
                  passed: function(t, n) {
                    var i = g.get.elementCalculations();
                    if (t && n) v.onPassed[t] = n;
                    else {
                      if (void 0 !== t)
                        return g.get.pixelsPassed(t) > i.pixelsPassed;
                      i.passing &&
                        e.each(v.onPassed, function(e, t) {
                          i.bottomVisible ||
                          i.pixelsPassed > g.get.pixelsPassed(e)
                            ? g.execute(t, e)
                            : v.once || g.remove.occurred(t);
                        });
                    }
                  },
                  onScreen: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onOnScreen;
                    if (
                      (e &&
                        (g.debug("Adding callback for onScreen", e),
                        (v.onOnScreen = e)),
                      t.onScreen
                        ? g.execute(n, "onScreen")
                        : v.once || g.remove.occurred("onScreen"),
                      void 0 !== e)
                    )
                      return t.onOnScreen;
                  },
                  offScreen: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onOffScreen;
                    if (
                      (e &&
                        (g.debug("Adding callback for offScreen", e),
                        (v.onOffScreen = e)),
                      t.offScreen
                        ? g.execute(n, "offScreen")
                        : v.once || g.remove.occurred("offScreen"),
                      void 0 !== e)
                    )
                      return t.onOffScreen;
                  },
                  passing: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onPassing;
                    if (
                      (e &&
                        (g.debug("Adding callback for passing", e),
                        (v.onPassing = e)),
                      t.passing
                        ? g.execute(n, "passing")
                        : v.once || g.remove.occurred("passing"),
                      void 0 !== e)
                    )
                      return t.passing;
                  },
                  topVisible: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onTopVisible;
                    if (
                      (e &&
                        (g.debug("Adding callback for top visible", e),
                        (v.onTopVisible = e)),
                      t.topVisible
                        ? g.execute(n, "topVisible")
                        : v.once || g.remove.occurred("topVisible"),
                      void 0 === e)
                    )
                      return t.topVisible;
                  },
                  bottomVisible: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onBottomVisible;
                    if (
                      (e &&
                        (g.debug("Adding callback for bottom visible", e),
                        (v.onBottomVisible = e)),
                      t.bottomVisible
                        ? g.execute(n, "bottomVisible")
                        : v.once || g.remove.occurred("bottomVisible"),
                      void 0 === e)
                    )
                      return t.bottomVisible;
                  },
                  topPassed: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onTopPassed;
                    if (
                      (e &&
                        (g.debug("Adding callback for top passed", e),
                        (v.onTopPassed = e)),
                      t.topPassed
                        ? g.execute(n, "topPassed")
                        : v.once || g.remove.occurred("topPassed"),
                      void 0 === e)
                    )
                      return t.topPassed;
                  },
                  bottomPassed: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onBottomPassed;
                    if (
                      (e &&
                        (g.debug("Adding callback for bottom passed", e),
                        (v.onBottomPassed = e)),
                      t.bottomPassed
                        ? g.execute(n, "bottomPassed")
                        : v.once || g.remove.occurred("bottomPassed"),
                      void 0 === e)
                    )
                      return t.bottomPassed;
                  },
                  passingReverse: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onPassingReverse;
                    if (
                      (e &&
                        (g.debug("Adding callback for passing reverse", e),
                        (v.onPassingReverse = e)),
                      t.passing
                        ? v.once || g.remove.occurred("passingReverse")
                        : g.get.occurred("passing") &&
                          g.execute(n, "passingReverse"),
                      void 0 !== e)
                    )
                      return !t.passing;
                  },
                  topVisibleReverse: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onTopVisibleReverse;
                    if (
                      (e &&
                        (g.debug("Adding callback for top visible reverse", e),
                        (v.onTopVisibleReverse = e)),
                      t.topVisible
                        ? v.once || g.remove.occurred("topVisibleReverse")
                        : g.get.occurred("topVisible") &&
                          g.execute(n, "topVisibleReverse"),
                      void 0 === e)
                    )
                      return !t.topVisible;
                  },
                  bottomVisibleReverse: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onBottomVisibleReverse;
                    if (
                      (e &&
                        (g.debug(
                          "Adding callback for bottom visible reverse",
                          e
                        ),
                        (v.onBottomVisibleReverse = e)),
                      t.bottomVisible
                        ? v.once || g.remove.occurred("bottomVisibleReverse")
                        : g.get.occurred("bottomVisible") &&
                          g.execute(n, "bottomVisibleReverse"),
                      void 0 === e)
                    )
                      return !t.bottomVisible;
                  },
                  topPassedReverse: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onTopPassedReverse;
                    if (
                      (e &&
                        (g.debug("Adding callback for top passed reverse", e),
                        (v.onTopPassedReverse = e)),
                      t.topPassed
                        ? v.once || g.remove.occurred("topPassedReverse")
                        : g.get.occurred("topPassed") &&
                          g.execute(n, "topPassedReverse"),
                      void 0 === e)
                    )
                      return !t.onTopPassed;
                  },
                  bottomPassedReverse: function(e) {
                    var t = g.get.elementCalculations(),
                      n = e || v.onBottomPassedReverse;
                    if (
                      (e &&
                        (g.debug(
                          "Adding callback for bottom passed reverse",
                          e
                        ),
                        (v.onBottomPassedReverse = e)),
                      t.bottomPassed
                        ? v.once || g.remove.occurred("bottomPassedReverse")
                        : g.get.occurred("bottomPassed") &&
                          g.execute(n, "bottomPassedReverse"),
                      void 0 === e)
                    )
                      return !t.bottomPassed;
                  },
                  execute: function(e, t) {
                    var n = g.get.elementCalculations(),
                      i = g.get.screenCalculations();
                    (e = e || !1) &&
                      (v.continuous
                        ? (g.debug("Callback being called continuously", t, n),
                          e.call(D, n, i))
                        : g.get.occurred(t) ||
                          (g.debug("Conditions met", t, n), e.call(D, n, i))),
                      g.save.occurred(t);
                  },
                  remove: {
                    fixed: function() {
                      g.debug("Removing fixed position"),
                        T.removeClass(b.fixed).css({
                          position: "",
                          top: "",
                          left: "",
                          zIndex: ""
                        }),
                        v.onUnfixed.call(D);
                    },
                    placeholder: function() {
                      g.debug("Removing placeholder content"), r && r.remove();
                    },
                    occurred: function(e) {
                      if (e) {
                        var t = g.cache.occurred;
                        void 0 !== t[e] &&
                          !0 === t[e] &&
                          (g.debug("Callback can now be called again", e),
                          (g.cache.occurred[e] = !1));
                      } else g.cache.occurred = {};
                    }
                  },
                  save: {
                    calculations: function() {
                      g.verbose(
                        "Saving all calculations necessary to determine positioning"
                      ),
                        g.save.direction(),
                        g.save.screenCalculations(),
                        g.save.elementCalculations();
                    },
                    occurred: function(e) {
                      e &&
                        ((void 0 !== g.cache.occurred[e] &&
                          !0 === g.cache.occurred[e]) ||
                          (g.verbose("Saving callback occurred", e),
                          (g.cache.occurred[e] = !0)));
                    },
                    scroll: function(e) {
                      (e = e + v.offset || A.scrollTop() + v.offset),
                        (g.cache.scroll = e);
                    },
                    direction: function() {
                      var e,
                        t = g.get.scroll(),
                        n = g.get.lastScroll();
                      return (
                        (e =
                          t > n && n ? "down" : t < n && n ? "up" : "static"),
                        (g.cache.direction = e),
                        g.cache.direction
                      );
                    },
                    elementPosition: function() {
                      var e = g.cache.element,
                        t = g.get.screenSize();
                      return (
                        g.verbose("Saving element position"),
                        (e.fits = e.height < t.height),
                        (e.offset = T.offset()),
                        (e.width = T.outerWidth()),
                        (e.height = T.outerHeight()),
                        g.is.verticallyScrollableContext() &&
                          (e.offset.top += A.scrollTop() - A.offset().top),
                        g.is.horizontallyScrollableContext() &&
                          (e.offset.left += A.scrollLeft - A.offset().left),
                        (g.cache.element = e),
                        e
                      );
                    },
                    elementCalculations: function() {
                      var e = g.get.screenCalculations(),
                        t = g.get.elementPosition();
                      return (
                        v.includeMargin
                          ? ((t.margin = {}),
                            (t.margin.top = parseInt(T.css("margin-top"), 10)),
                            (t.margin.bottom = parseInt(
                              T.css("margin-bottom"),
                              10
                            )),
                            (t.top = t.offset.top - t.margin.top),
                            (t.bottom =
                              t.offset.top + t.height + t.margin.bottom))
                          : ((t.top = t.offset.top),
                            (t.bottom = t.offset.top + t.height)),
                        (t.topPassed = e.top >= t.top),
                        (t.bottomPassed = e.top >= t.bottom),
                        (t.topVisible = e.bottom >= t.top && !t.topPassed),
                        (t.bottomVisible =
                          e.bottom >= t.bottom && !t.bottomPassed),
                        (t.pixelsPassed = 0),
                        (t.percentagePassed = 0),
                        (t.onScreen =
                          (t.topVisible || t.passing) && !t.bottomPassed),
                        (t.passing = t.topPassed && !t.bottomPassed),
                        (t.offScreen = !t.onScreen),
                        t.passing &&
                          ((t.pixelsPassed = e.top - t.top),
                          (t.percentagePassed = (e.top - t.top) / t.height)),
                        (g.cache.element = t),
                        g.verbose("Updated element calculations", t),
                        t
                      );
                    },
                    screenCalculations: function() {
                      var e = g.get.scroll();
                      return (
                        g.save.direction(),
                        (g.cache.screen.top = e),
                        (g.cache.screen.bottom = e + g.cache.screen.height),
                        g.cache.screen
                      );
                    },
                    screenSize: function() {
                      g.verbose("Saving window position"),
                        (g.cache.screen = { height: A.height() });
                    },
                    position: function() {
                      g.save.screenSize(), g.save.elementPosition();
                    }
                  },
                  get: {
                    pixelsPassed: function(e) {
                      var t = g.get.elementCalculations();
                      return e.search("%") > -1
                        ? t.height * (parseInt(e, 10) / 100)
                        : parseInt(e, 10);
                    },
                    occurred: function(e) {
                      return (
                        (void 0 !== g.cache.occurred && g.cache.occurred[e]) ||
                        !1
                      );
                    },
                    direction: function() {
                      return (
                        void 0 === g.cache.direction && g.save.direction(),
                        g.cache.direction
                      );
                    },
                    elementPosition: function() {
                      return (
                        void 0 === g.cache.element && g.save.elementPosition(),
                        g.cache.element
                      );
                    },
                    elementCalculations: function() {
                      return (
                        void 0 === g.cache.element &&
                          g.save.elementCalculations(),
                        g.cache.element
                      );
                    },
                    screenCalculations: function() {
                      return (
                        void 0 === g.cache.screen &&
                          g.save.screenCalculations(),
                        g.cache.screen
                      );
                    },
                    screenSize: function() {
                      return (
                        void 0 === g.cache.screen && g.save.screenSize(),
                        g.cache.screen
                      );
                    },
                    scroll: function() {
                      return (
                        void 0 === g.cache.scroll && g.save.scroll(),
                        g.cache.scroll
                      );
                    },
                    lastScroll: function() {
                      return void 0 === g.cache.screen
                        ? (g.debug(
                            "First scroll event, no last scroll could be found"
                          ),
                          !1)
                        : g.cache.screen.top;
                    }
                  },
                  setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, v, t);
                    else {
                      if (void 0 === n) return v[t];
                      v[t] = n;
                    }
                  },
                  internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, g, t);
                    else {
                      if (void 0 === n) return g[t];
                      g[t] = n;
                    }
                  },
                  debug: function() {
                    !v.silent &&
                      v.debug &&
                      (v.performance
                        ? g.performance.log(arguments)
                        : ((g.debug = Function.prototype.bind.call(
                            console.info,
                            console,
                            v.name + ":"
                          )),
                          g.debug.apply(console, arguments)));
                  },
                  verbose: function() {
                    !v.silent &&
                      v.verbose &&
                      v.debug &&
                      (v.performance
                        ? g.performance.log(arguments)
                        : ((g.verbose = Function.prototype.bind.call(
                            console.info,
                            console,
                            v.name + ":"
                          )),
                          g.verbose.apply(console, arguments)));
                  },
                  error: function() {
                    v.silent ||
                      ((g.error = Function.prototype.bind.call(
                        console.error,
                        console,
                        v.name + ":"
                      )),
                      g.error.apply(console, arguments));
                  },
                  performance: {
                    log: function(e) {
                      var t, n;
                      v.performance &&
                        ((n = (t = new Date().getTime()) - (s || t)),
                        (s = t),
                        l.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: D,
                          "Execution Time": n
                        })),
                        clearTimeout(g.performance.timer),
                        (g.performance.timer = setTimeout(
                          g.performance.display,
                          500
                        ));
                    },
                    display: function() {
                      var t = v.name + ":",
                        n = 0;
                      (s = !1),
                        clearTimeout(g.performance.timer),
                        e.each(l, function(e, t) {
                          n += t["Execution Time"];
                        }),
                        (t += " " + n + "ms"),
                        a && (t += " '" + a + "'"),
                        (void 0 !== console.group ||
                          void 0 !== console.table) &&
                          l.length > 0 &&
                          (console.groupCollapsed(t),
                          console.table
                            ? console.table(l)
                            : e.each(l, function(e, t) {
                                console.log(
                                  t.Name + ": " + t["Execution Time"] + "ms"
                                );
                              }),
                          console.groupEnd()),
                        (l = []);
                    }
                  },
                  invoke: function(t, n, i) {
                    var r,
                      a,
                      s,
                      l = E;
                    return (
                      (n = n || d),
                      (i = D || i),
                      "string" == typeof t &&
                        void 0 !== l &&
                        ((t = t.split(/[\. ]/)),
                        (r = t.length - 1),
                        e.each(t, function(n, i) {
                          var o =
                            n != r
                              ? i +
                                t[n + 1].charAt(0).toUpperCase() +
                                t[n + 1].slice(1)
                              : t;
                          if (e.isPlainObject(l[o]) && n != r) l = l[o];
                          else {
                            if (void 0 !== l[o]) return (a = l[o]), !1;
                            if (!e.isPlainObject(l[i]) || n == r)
                              return void 0 !== l[i]
                                ? ((a = l[i]), !1)
                                : (g.error(x.method, t), !1);
                            l = l[i];
                          }
                        })),
                      e.isFunction(a)
                        ? (s = a.apply(i, n))
                        : void 0 !== a && (s = a),
                      e.isArray(o)
                        ? o.push(s)
                        : void 0 !== o ? (o = [o, s]) : void 0 !== s && (o = s),
                      a
                    );
                  }
                }),
                  u
                    ? (void 0 === E && g.initialize(),
                      E.save.scroll(),
                      E.save.calculations(),
                      g.invoke(c))
                    : (void 0 !== E && E.invoke("destroy"), g.initialize());
              }),
              void 0 !== o ? o : this
            );
          }),
          (e.fn.visibility.settings = {
            name: "Visibility",
            namespace: "visibility",
            debug: !1,
            verbose: !1,
            performance: !0,
            observeChanges: !0,
            initialCheck: !0,
            refreshOnLoad: !0,
            refreshOnResize: !0,
            checkOnRefresh: !0,
            once: !0,
            continuous: !1,
            offset: 0,
            includeMargin: !1,
            context: t,
            throttle: !1,
            type: !1,
            zIndex: "10",
            transition: "fade in",
            duration: 1e3,
            onPassed: {},
            onOnScreen: !1,
            onOffScreen: !1,
            onPassing: !1,
            onTopVisible: !1,
            onBottomVisible: !1,
            onTopPassed: !1,
            onBottomPassed: !1,
            onPassingReverse: !1,
            onTopVisibleReverse: !1,
            onBottomVisibleReverse: !1,
            onTopPassedReverse: !1,
            onBottomPassedReverse: !1,
            onLoad: function() {},
            onAllLoaded: function() {},
            onFixed: function() {},
            onUnfixed: function() {},
            onUpdate: !1,
            onRefresh: function() {},
            metadata: { src: "src" },
            className: {
              fixed: "fixed",
              placeholder: "placeholder",
              visible: "visible"
            },
            error: {
              method: "The method you called is not defined.",
              visible:
                "Element is hidden, you must call refresh after element becomes visible"
            }
          });
      })(jQuery, window, document);
  },
  function(e, t, n) {
    var i, o, r;
    (o = [n(0)]),
      void 0 ===
        (r =
          "function" ==
          typeof (i = function(e) {
            return (e.ui = e.ui || {}), (e.ui.version = "1.12.1");
          })
            ? i.apply(t, o)
            : i) || (e.exports = r);
  }
]);
