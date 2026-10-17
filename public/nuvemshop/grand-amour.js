var df = { exports: {} }, io = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0;
function W2() {
  if (f0) return io;
  f0 = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function r(u, c, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      h = {};
      for (var p in c)
        p !== "key" && (h[p] = c[p]);
    } else h = c;
    return c = h.ref, {
      $$typeof: a,
      type: u,
      key: d,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return io.Fragment = l, io.jsx = r, io.jsxs = r, io;
}
var d0;
function $2() {
  return d0 || (d0 = 1, df.exports = W2()), df.exports;
}
var b = $2(), hf = { exports: {} }, ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;
function tS() {
  if (h0) return ot;
  h0 = 1;
  var a = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), g = Symbol.for("react.activity"), T = Symbol.for("react.view_transition"), j = Symbol.iterator;
  function O(E) {
    return E === null || typeof E != "object" ? null : (E = j && E[j] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, V = Object.assign, R = {};
  function k(E, L, tt) {
    this.props = E, this.context = L, this.refs = R, this.updater = tt || _;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(E, L) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, L, "setState");
  }, k.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function H() {
  }
  H.prototype = k.prototype;
  function X(E, L, tt) {
    this.props = E, this.context = L, this.refs = R, this.updater = tt || _;
  }
  var at = X.prototype = new H();
  at.constructor = X, V(at, k.prototype), at.isPureReactComponent = !0;
  var ft = Array.isArray;
  function K() {
  }
  var Y = { H: null, A: null, T: null, S: null }, Dt = Object.prototype.hasOwnProperty;
  function $(E, L, tt) {
    var et = tt.ref;
    return {
      $$typeof: a,
      type: E,
      key: L,
      ref: et !== void 0 ? et : null,
      props: tt
    };
  }
  function vt(E, L) {
    return $(E.type, L, E.props);
  }
  function Nt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function pe(E) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(tt) {
      return L[tt];
    });
  }
  var It = /\/+/g;
  function Ot(E, L) {
    return typeof E == "object" && E !== null && E.key != null ? pe("" + E.key) : L.toString(36);
  }
  function q(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(K, K) : (E.status = "pending", E.then(
          function(L) {
            E.status === "pending" && (E.status = "fulfilled", E.value = L);
          },
          function(L) {
            E.status === "pending" && (E.status = "rejected", E.reason = L);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function it(E, L, tt, et, xt) {
    var bt = typeof E;
    (bt === "undefined" || bt === "boolean") && (E = null);
    var wt = !1;
    if (E === null) wt = !0;
    else
      switch (bt) {
        case "bigint":
        case "string":
        case "number":
          wt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case l:
              wt = !0;
              break;
            case y:
              return wt = E._init, it(
                wt(E._payload),
                L,
                tt,
                et,
                xt
              );
          }
      }
    if (wt)
      return xt = xt(E), wt = et === "" ? "." + Ot(E, 0) : et, ft(xt) ? (tt = "", wt != null && (tt = wt.replace(It, "$&/") + "/"), it(xt, L, tt, "", function(Rn) {
        return Rn;
      })) : xt != null && (Nt(xt) && (xt = vt(
        xt,
        tt + (xt.key == null || E && E.key === xt.key ? "" : ("" + xt.key).replace(
          It,
          "$&/"
        ) + "/") + wt
      )), L.push(xt)), 1;
    wt = 0;
    var I = et === "" ? "." : et + ":";
    if (ft(E))
      for (var lt = 0; lt < E.length; lt++)
        et = E[lt], bt = I + Ot(et, lt), wt += it(
          et,
          L,
          tt,
          bt,
          xt
        );
    else if (lt = O(E), typeof lt == "function")
      for (E = lt.call(E), lt = 0; !(et = E.next()).done; )
        et = et.value, bt = I + Ot(et, lt++), wt += it(
          et,
          L,
          tt,
          bt,
          xt
        );
    else if (bt === "object") {
      if (typeof E.then == "function")
        return it(
          q(E),
          L,
          tt,
          et,
          xt
        );
      throw L = String(E), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return wt;
  }
  function P(E, L, tt) {
    if (E == null) return E;
    var et = [], xt = 0;
    return it(E, et, "", "", function(bt) {
      return L.call(tt, bt, xt++);
    }), et;
  }
  function ut(E) {
    if (E._status === -1) {
      var L = E._result, tt = L();
      tt.then(
        function(et) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = et, tt.status === void 0 && (tt.status = "fulfilled", tt.value = et));
        },
        function(et) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = et, tt.status === void 0 && (tt.status = "rejected", tt.reason = et));
        }
      ), E._status === -1 && (E._status = 0, E._result = tt);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var dt = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function Wt(E) {
    var L = Y.T, tt = {};
    tt.types = L !== null ? L.types : null, Y.T = tt;
    try {
      var et = E(), xt = Y.S;
      xt !== null && xt(tt, et), typeof et == "object" && et !== null && typeof et.then == "function" && et.then(K, dt);
    } catch (bt) {
      dt(bt);
    } finally {
      L !== null && tt.types !== null && (L.types = tt.types), Y.T = L;
    }
  }
  function $e(E) {
    var L = Y.T;
    if (L !== null) {
      var tt = L.types;
      tt === null ? L.types = [E] : tt.indexOf(E) === -1 && tt.push(E);
    } else Wt($e.bind(null, E));
  }
  var Ci = {
    map: P,
    forEach: function(E, L, tt) {
      P(
        E,
        function() {
          L.apply(this, arguments);
        },
        tt
      );
    },
    count: function(E) {
      var L = 0;
      return P(E, function() {
        L++;
      }), L;
    },
    toArray: function(E) {
      return P(E, function(L) {
        return L;
      }) || [];
    },
    only: function(E) {
      if (!Nt(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return ot.Activity = g, ot.Children = Ci, ot.Component = k, ot.Fragment = r, ot.Profiler = c, ot.PureComponent = X, ot.StrictMode = u, ot.Suspense = x, ot.ViewTransition = T, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ot.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return Y.H.useMemoCache(E);
    }
  }, ot.addTransitionType = $e, ot.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ot.cacheSignal = function() {
    return null;
  }, ot.cloneElement = function(E, L, tt) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var et = V({}, E.props), xt = E.key;
    if (L != null)
      for (bt in L.key !== void 0 && (xt = "" + L.key), L)
        !Dt.call(L, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && L.ref === void 0 || (et[bt] = L[bt]);
    var bt = arguments.length - 2;
    if (bt === 1) et.children = tt;
    else if (1 < bt) {
      for (var wt = Array(bt), I = 0; I < bt; I++)
        wt[I] = arguments[I + 2];
      et.children = wt;
    }
    return $(E.type, xt, et);
  }, ot.createContext = function(E) {
    return E = {
      $$typeof: d,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, ot.createElement = function(E, L, tt) {
    var et, xt = {}, bt = null;
    if (L != null)
      for (et in L.key !== void 0 && (bt = "" + L.key), L)
        Dt.call(L, et) && et !== "key" && et !== "__self" && et !== "__source" && (xt[et] = L[et]);
    var wt = arguments.length - 2;
    if (wt === 1) xt.children = tt;
    else if (1 < wt) {
      for (var I = Array(wt), lt = 0; lt < wt; lt++)
        I[lt] = arguments[lt + 2];
      xt.children = I;
    }
    if (E && E.defaultProps)
      for (et in wt = E.defaultProps, wt)
        xt[et] === void 0 && (xt[et] = wt[et]);
    return $(E, bt, xt);
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(E) {
    return { $$typeof: p, render: E };
  }, ot.isValidElement = Nt, ot.lazy = function(E) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: E },
      _init: ut
    };
  }, ot.memo = function(E, L) {
    return {
      $$typeof: v,
      type: E,
      compare: L === void 0 ? null : L
    };
  }, ot.startTransition = Wt, ot.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, ot.use = function(E) {
    return Y.H.use(E);
  }, ot.useActionState = function(E, L, tt) {
    return Y.H.useActionState(E, L, tt);
  }, ot.useCallback = function(E, L) {
    return Y.H.useCallback(E, L);
  }, ot.useContext = function(E) {
    return Y.H.useContext(E);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(E, L) {
    return Y.H.useDeferredValue(E, L);
  }, ot.useEffect = function(E, L) {
    return Y.H.useEffect(E, L);
  }, ot.useEffectEvent = function(E) {
    return Y.H.useEffectEvent(E);
  }, ot.useId = function() {
    return Y.H.useId();
  }, ot.useImperativeHandle = function(E, L, tt) {
    return Y.H.useImperativeHandle(E, L, tt);
  }, ot.useInsertionEffect = function(E, L) {
    return Y.H.useInsertionEffect(E, L);
  }, ot.useLayoutEffect = function(E, L) {
    return Y.H.useLayoutEffect(E, L);
  }, ot.useMemo = function(E, L) {
    return Y.H.useMemo(E, L);
  }, ot.useOptimistic = function(E, L) {
    return Y.H.useOptimistic(E, L);
  }, ot.useReducer = function(E, L, tt) {
    return Y.H.useReducer(E, L, tt);
  }, ot.useRef = function(E) {
    return Y.H.useRef(E);
  }, ot.useState = function(E) {
    return Y.H.useState(E);
  }, ot.useSyncExternalStore = function(E, L, tt) {
    return Y.H.useSyncExternalStore(
      E,
      L,
      tt
    );
  }, ot.useTransition = function() {
    return Y.H.useTransition();
  }, ot.version = "19.3.1", ot;
}
var p0;
function rd() {
  return p0 || (p0 = 1, hf.exports = tS()), hf.exports;
}
var Z = rd(), pf = { exports: {} }, ao = {}, mf = { exports: {} }, gf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m0;
function eS() {
  return m0 || (m0 = 1, (function(a) {
    function l(q, it) {
      var P = q.length;
      q.push(it);
      t: for (; 0 < P; ) {
        var ut = P - 1 >>> 1, dt = q[ut];
        if (0 < c(dt, it))
          q[ut] = it, q[P] = dt, P = ut;
        else break t;
      }
    }
    function r(q) {
      return q.length === 0 ? null : q[0];
    }
    function u(q) {
      if (q.length === 0) return null;
      var it = q[0], P = q.pop();
      if (P !== it) {
        q[0] = P;
        t: for (var ut = 0, dt = q.length, Wt = dt >>> 1; ut < Wt; ) {
          var $e = 2 * (ut + 1) - 1, Ci = q[$e], E = $e + 1, L = q[E];
          if (0 > c(Ci, P))
            E < dt && 0 > c(L, Ci) ? (q[ut] = L, q[E] = P, ut = E) : (q[ut] = Ci, q[$e] = P, ut = $e);
          else if (E < dt && 0 > c(L, P))
            q[ut] = L, q[E] = P, ut = E;
          else break t;
        }
      }
      return it;
    }
    function c(q, it) {
      var P = q.sortIndex - it.sortIndex;
      return P !== 0 ? P : q.id - it.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      a.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, p = d.now();
      a.unstable_now = function() {
        return d.now() - p;
      };
    }
    var x = [], v = [], y = 1, g = null, T = 3, j = !1, O = !1, _ = !1, V = !1, R = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function X(q) {
      for (var it = r(v); it !== null; ) {
        if (it.callback === null) u(v);
        else if (it.startTime <= q)
          u(v), it.sortIndex = it.expirationTime, l(x, it);
        else break;
        it = r(v);
      }
    }
    function at(q) {
      if (_ = !1, X(q), !O)
        if (r(x) !== null)
          O = !0, ft || (ft = !0, Nt());
        else {
          var it = r(v);
          it !== null && Ot(at, it.startTime - q);
        }
    }
    var ft = !1, K = -1, Y = 5, Dt = -1;
    function $() {
      return V ? !0 : !(a.unstable_now() - Dt < Y);
    }
    function vt() {
      if (V = !1, ft) {
        var q = a.unstable_now();
        Dt = q;
        var it = !0;
        try {
          t: {
            O = !1, _ && (_ = !1, k(K), K = -1), j = !0;
            var P = T;
            try {
              e: {
                for (X(q), g = r(x); g !== null && !(g.expirationTime > q && $()); ) {
                  var ut = g.callback;
                  if (typeof ut == "function") {
                    g.callback = null, T = g.priorityLevel;
                    var dt = ut(
                      g.expirationTime <= q
                    );
                    if (q = a.unstable_now(), typeof dt == "function") {
                      g.callback = dt, X(q), it = !0;
                      break e;
                    }
                    g === r(x) && u(x), X(q);
                  } else u(x);
                  g = r(x);
                }
                if (g !== null) it = !0;
                else {
                  var Wt = r(v);
                  Wt !== null && Ot(
                    at,
                    Wt.startTime - q
                  ), it = !1;
                }
              }
              break t;
            } finally {
              g = null, T = P, j = !1;
            }
            it = void 0;
          }
        } finally {
          it ? Nt() : ft = !1;
        }
      }
    }
    var Nt;
    if (typeof H == "function")
      Nt = function() {
        H(vt);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), It = pe.port2;
      pe.port1.onmessage = vt, Nt = function() {
        It.postMessage(null);
      };
    } else
      Nt = function() {
        R(vt, 0);
      };
    function Ot(q, it) {
      K = R(function() {
        q(a.unstable_now());
      }, it);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, a.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < q ? Math.floor(1e3 / q) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return T;
    }, a.unstable_next = function(q) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var it = 3;
          break;
        default:
          it = T;
      }
      var P = T;
      T = it;
      try {
        return q();
      } finally {
        T = P;
      }
    }, a.unstable_requestPaint = function() {
      V = !0;
    }, a.unstable_runWithPriority = function(q, it) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var P = T;
      T = q;
      try {
        return it();
      } finally {
        T = P;
      }
    }, a.unstable_scheduleCallback = function(q, it, P) {
      var ut = a.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ut + P : ut) : P = ut, q) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = P + dt, q = {
        id: y++,
        callback: it,
        priorityLevel: q,
        startTime: P,
        expirationTime: dt,
        sortIndex: -1
      }, P > ut ? (q.sortIndex = P, l(v, q), r(x) === null && q === r(v) && (_ ? (k(K), K = -1) : _ = !0, Ot(at, P - ut))) : (q.sortIndex = dt, l(x, q), O || j || (O = !0, ft || (ft = !0, Nt()))), q;
    }, a.unstable_shouldYield = $, a.unstable_wrapCallback = function(q) {
      var it = T;
      return function() {
        var P = T;
        T = it;
        try {
          return q.apply(this, arguments);
        } finally {
          T = P;
        }
      };
    };
  })(gf)), gf;
}
var g0;
function nS() {
  return g0 || (g0 = 1, mf.exports = eS()), mf.exports;
}
var yf = { exports: {} }, fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y0;
function iS() {
  if (y0) return fe;
  y0 = 1;
  var a = rd();
  function l(y) {
    var g = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        g += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return "Minified React error #" + y + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var u = {
    d: {
      f: r,
      r: function() {
        throw Error(l(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), h = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function p(y, g, T) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: j == null ? null : j === d ? d : "" + j,
      children: y,
      containerInfo: g,
      implementation: T
    };
  }
  var x = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(y, g) {
    if (y === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, fe.browser = function(y) {
    return { $$typeof: h, _reason: y };
  }, fe.createPortal = function(y, g) {
    var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(l(299));
    return p(y, g, null, T);
  }, fe.flushSync = function(y) {
    var g = x.T, T = u.p;
    try {
      if (x.T = null, u.p = 2, y) return y();
    } finally {
      x.T = g, u.p = T, u.d.f();
    }
  }, fe.preconnect = function(y, g) {
    typeof y == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, u.d.C(y, g));
  }, fe.prefetchDNS = function(y) {
    typeof y == "string" && u.d.D(y);
  }, fe.preinit = function(y, g) {
    if (typeof y == "string" && g && typeof g.as == "string") {
      var T = g.as, j = v(T, g.crossOrigin), O = typeof g.integrity == "string" ? g.integrity : void 0, _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      T === "style" ? u.d.S(
        y,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: j,
          integrity: O,
          fetchPriority: _
        }
      ) : T === "script" && u.d.X(y, {
        crossOrigin: j,
        integrity: O,
        fetchPriority: _,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, fe.preinitModule = function(y, g) {
    if (typeof y == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var T = v(
            g.as,
            g.crossOrigin
          );
          u.d.M(y, {
            crossOrigin: T,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && u.d.M(y);
  }, fe.preload = function(y, g) {
    if (typeof y == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var T = g.as, j = v(T, g.crossOrigin);
      u.d.L(y, T, {
        crossOrigin: j,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, fe.preloadModule = function(y, g) {
    if (typeof y == "string")
      if (g) {
        var T = v(g.as, g.crossOrigin);
        u.d.m(y, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: T,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else u.d.m(y);
  }, fe.requestFormReset = function(y) {
    u.d.r(y);
  }, fe.unstable_batchedUpdates = function(y, g) {
    return y(g);
  }, fe.useFormState = function(y, g, T) {
    return x.H.useFormState(y, g, T);
  }, fe.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, fe.version = "19.3.1", fe;
}
var v0;
function aS() {
  if (v0) return yf.exports;
  v0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), yf.exports = iS(), yf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0;
function lS() {
  if (x0) return ao;
  x0 = 1;
  var a = nS(), l = rd(), r = aS();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (h(t) !== t)
      throw Error(u(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var o = n.return;
      if (o === null) break;
      var s = o.alternate;
      if (s === null) {
        if (i = o.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === s.child) {
        for (s = o.child; s; ) {
          if (s === n) return x(o), t;
          if (s === i) return x(o), e;
          s = s.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== i.return) n = o, i = s;
      else {
        for (var f = !1, m = o.child; m; ) {
          if (m === n) {
            f = !0, n = o, i = s;
            break;
          }
          if (m === i) {
            f = !0, i = o, n = s;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = s.child; m; ) {
            if (m === n) {
              f = !0, n = s, i = o;
              break;
            }
            if (m === i) {
              f = !0, i = s, n = o;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== i) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = y(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function g(t, e, n, i, o, s) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, i, o, s) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && g(
        t.child,
        e,
        n,
        i,
        o,
        s
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function T(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function j(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function O(t) {
    var e = [null, null], n = T(t);
    return n === null || _(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function _(t, e, n, i) {
    for (; n !== null; ) {
      if (n === e) i.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (i.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && _(
        t,
        e,
        n.child,
        i
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function V(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(u(559));
    }
  }
  var R = null, k = null;
  function H(t, e, n) {
    return t === n ? !0 : t === e ? (R = t, !0) : !1;
  }
  function X(t, e, n) {
    return t === n ? (k = t, !1) : t === e ? (k !== null && (R = t), !0) : !1;
  }
  function at(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ft(t, e, n) {
    for (var i = 0, o = t; o; o = n(o)) i++;
    o = 0;
    for (var s = e; s; s = n(s)) o++;
    for (; 0 < i - o; ) t = n(t), i--;
    for (; 0 < o - i; ) e = n(e), o--;
    for (; i--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var K = Object.assign, Y = Symbol.for("react.element"), Dt = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), vt = Symbol.for("react.fragment"), Nt = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), It = Symbol.for("react.consumer"), Ot = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), it = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), Wt = Symbol.for("react.activity"), $e = Symbol.for("react.legacy_hidden"), Ci = Symbol.for("react.memo_cache_sentinel"), E = Symbol.for("react.view_transition"), L = Symbol.for("react.recoverable"), tt = Symbol.iterator;
  function et(t) {
    return t === null || typeof t != "object" ? null : (t = tt && t[tt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var xt = Symbol.for("react.client.reference");
  function bt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === xt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case vt:
        return "Fragment";
      case pe:
        return "Profiler";
      case Nt:
        return "StrictMode";
      case it:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Wt:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case $:
          return "Portal";
        case Ot:
          return t.displayName || "Context";
        case It:
          return (t._context.displayName || "Context") + ".Consumer";
        case q:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ut:
          return e = t.displayName || null, e !== null ? e : bt(t.type) || "Memo";
        case dt:
          e = t._payload, t = t._init;
          try {
            return bt(t(e));
          } catch {
          }
      }
    return null;
  }
  var wt = Array.isArray, I = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, lt = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Rn = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Nr = [], la = -1;
  function hn(t) {
    return { current: t };
  }
  function ae(t) {
    0 > la || (t.current = Nr[la], Nr[la] = null, la--);
  }
  function _t(t, e) {
    la++, Nr[la] = t.current, t.current = e;
  }
  var pn = hn(null), ul = hn(null), Jn = hn(null), To = hn(null);
  function wo(t, e) {
    switch (_t(Jn, e), _t(ul, t), _t(pn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? bg(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = bg(e), t = Sg(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    ae(pn), _t(pn, t);
  }
  function oa() {
    ae(pn), ae(ul), ae(Jn);
  }
  function Or(t) {
    var e = t.memoizedState;
    e !== null && (Ka._currentValue = e.memoizedState, _t(To, t)), e = pn.current;
    var n = Sg(e, t.type);
    e !== n && (_t(ul, t), _t(pn, n));
  }
  function Eo(t) {
    ul.current === t && (ae(pn), ae(ul)), To.current === t && (ae(To), Ka._currentValue = Rn);
  }
  var Rr, qd;
  function Fn(t) {
    if (Rr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Rr = e && e[1] || "", qd = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Rr + t + qd;
  }
  var jr = !1;
  function Vr(t, e) {
    if (!t || jr) return "";
    jr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (G) {
                  var A = G;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (G) {
                  A = G;
                }
                B = !1;
                try {
                  var D = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), B = !0, new t();
                } finally {
                  B && (D !== void 0 ? Object.defineProperty(t.prototype, "props", D) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                A = G;
              }
              (B = t()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (G) {
            if (G && A && typeof G.stack == "string")
              return [G.stack, A.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = i.DetermineComponentFrameRoot(), f = s[0], m = s[1];
      if (f && m) {
        var S = f.split(`
`), M = m.split(`
`);
        for (o = i = 0; i < S.length && !S[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < M.length && !M[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === S.length || o === M.length)
          for (i = S.length - 1, o = M.length - 1; 1 <= i && 0 <= o && S[i] !== M[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (S[i] !== M[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || S[i] !== M[o]) {
                  var N = `
` + S[i].replace(" at new ", " at ");
                  return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      jr = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Fn(n) : "";
  }
  function nx(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fn(t.type);
      case 16:
        return Fn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Fn("Suspense Fallback") : Fn("Suspense");
      case 19:
        return Fn("SuspenseList");
      case 0:
      case 15:
        return Vr(t.type, !1);
      case 11:
        return Vr(t.type.render, !1);
      case 1:
        return Vr(t.type, !0);
      case 31:
        return Fn("Activity");
      case 30:
        return Fn("ViewTransition");
      default:
        return "";
    }
  }
  function Gd(t) {
    try {
      var e = "", n = null;
      do
        e += nx(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var _r = Object.prototype.hasOwnProperty, Ur = a.unstable_scheduleCallback, Br = a.unstable_cancelCallback, ix = a.unstable_shouldYield, ax = a.unstable_requestPaint, Ne = a.unstable_now, lx = a.unstable_getCurrentPriorityLevel, Yd = a.unstable_ImmediatePriority, Xd = a.unstable_UserBlockingPriority, Ao = a.unstable_NormalPriority, ox = a.unstable_LowPriority, Zd = a.unstable_IdlePriority, sx = a.log, rx = a.unstable_setDisableYieldValue, cl = null, Oe = null;
  function In(t) {
    if (typeof sx == "function" && rx(t), Oe && typeof Oe.setStrictMode == "function")
      try {
        Oe.setStrictMode(cl, t);
      } catch {
      }
  }
  var Re = Math.clz32 ? Math.clz32 : fx, ux = Math.log, cx = Math.LN2;
  function fx(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (ux(t) / cx | 0) | 0;
  }
  var zo = 256, Mo = 262144, Co = 4194304;
  function Di(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Do(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var o = 0, s = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var m = i & 134217727;
    return m !== 0 ? (i = m & ~s, i !== 0 ? o = Di(i) : (f &= m, f !== 0 ? o = Di(f) : n || (n = m & ~t, n !== 0 && (o = Di(n))))) : (m = i & ~s, m !== 0 ? o = Di(m) : f !== 0 ? o = Di(f) : n || (n = i & ~t, n !== 0 && (o = Di(n)))), o === 0 ? 0 : e !== 0 && e !== o && (e & s) === 0 && (s = o & -o, n = e & -e, s >= n || s === 32 && (n & 4194048) !== 0) ? e : o;
  }
  function fl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Qd(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var i = 31 - Re(n), o = 1 << i;
        e |= t[i], n &= ~o;
      }
    return e;
  }
  function dx(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Kd() {
    var t = Co;
    return Co <<= 1, (Co & 62914560) === 0 && (Co = 4194304), t;
  }
  function kr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function dl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function hx(t, e, n, i, o, s) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var m = t.entanglements, S = t.expirationTimes, M = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var N = 31 - Re(n), B = 1 << N;
      m[N] = 0, S[N] = -1;
      var A = M[N];
      if (A !== null)
        for (M[N] = null, N = 0; N < A.length; N++) {
          var D = A[N];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~B;
    }
    i !== 0 && Pd(t, i, 0), s !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= s & ~(f & ~e));
  }
  function Pd(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var i = 31 - Re(e);
    t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930;
  }
  function Jd(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var i = 31 - Re(n), o = 1 << i;
      o & e | t[i] & e && (t[i] |= e), n &= ~o;
    }
  }
  function Fd(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Lr(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Lr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Hr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Id() {
    var t = lt.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : a0(t.type));
  }
  function Wd(t, e) {
    var n = lt.p;
    try {
      return lt.p = t, e();
    } finally {
      lt.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2), le = "__reactFiber$" + jn, Te = "__reactProps$" + jn, sa = "__reactContainer$" + jn, $d = "__reactEvents$" + jn, px = "__reactListeners$" + jn, mx = "__reactHandles$" + jn, th = "__reactResources$" + jn, hl = "__reactMarker$" + jn, No = "__reactLoad$" + jn;
  function Oo(t) {
    delete t[le], delete t[Te], delete t[px], delete t[mx];
  }
  function Ni(t) {
    var e;
    if (e = t[le]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[sa] || n[le]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = kg(t); t !== null; ) {
            if (n = t[le]) return n;
            t = kg(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ra(t) {
    if (t = t[le] || t[sa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function pl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function ua(t) {
    var e = t[th];
    return e || (e = t[th] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function $t(t) {
    t[hl] = !0;
  }
  function eh(t) {
    t[No] = void 0;
  }
  var nh = /* @__PURE__ */ new Set(), ih = {};
  function Oi(t, e) {
    ca(t, e), ca(t + "Capture", e);
  }
  function ca(t, e) {
    for (ih[t] = e, t = 0; t < e.length; t++)
      nh.add(e[t]);
  }
  var gx = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ah = {}, lh = {};
  function yx(t) {
    return _r.call(lh, t) ? !0 : _r.call(ah, t) ? !1 : gx.test(t) ? lh[t] = !0 : (ah[t] = !0, !1);
  }
  var St = !1;
  function oh() {
    var t = St;
    return St = !1, t;
  }
  function Ro(t, e, n) {
    if (yx(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function jo(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Vn(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, i);
    }
  }
  function je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function sh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function vx(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var o = i.get, s = i.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(f) {
          n = "" + f, s.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function qr(t) {
    if (!t._valueTracker) {
      var e = sh(t) ? "checked" : "value";
      t._valueTracker = vx(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function rh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), i = "";
    return t && (i = sh(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1;
  }
  var xx = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(
      xx,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gr(t, e, n, i, o, s, f, m) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + je(e)) : t.value !== "" + je(e) && (t.value = "" + je(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? Yr(t, je(t.value)) : Yr(t, je(e)) : n != null ? Yr(t, je(n)) : i != null && t.removeAttribute("value"), o == null && s != null && (t.defaultChecked = !!s), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + je(m) : t.removeAttribute("name");
  }
  function uh(t, e, n, i, o, s, f, m) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.type = s), e != null || n != null) {
      if (!(s !== "submit" && s !== "reset" || e != null)) {
        qr(t);
        return;
      }
      n = n != null ? "" + je(n) : "", e = e != null ? "" + je(e) : n, m || e === t.value || (t.value = e), t.defaultValue = e;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = m ? t.checked : !!i, t.defaultChecked = !!i, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), qr(t);
  }
  function Yr(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function fa(t, e, n, i) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < n.length; o++)
        e["$" + n[o]] = !0;
      for (n = 0; n < t.length; n++)
        o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + je(n), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === n) {
          t[o].selected = !0, i && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ch(t, e, n) {
    if (e != null && (e = "" + je(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + je(n) : "";
  }
  function fh(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(u(92));
        if (wt(i)) {
          if (1 < i.length) throw Error(u(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), e = n;
    }
    n = je(e), t.defaultValue = n, i = t.textContent, i === n && i !== "" && i !== null && (t.value = i), qr(t);
  }
  function da(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var bx = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function dh(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || bx.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function hh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(u(62));
    if (t = t.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "", St = !0);
      for (var o in e)
        i = e[o], e.hasOwnProperty(o) && n[o] !== i && (dh(t, o, i), St = !0);
    } else
      for (var s in e)
        e.hasOwnProperty(s) && dh(t, s, e[s]);
  }
  function Xr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Sx = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Tx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vo(t) {
    return Tx.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function mn() {
  }
  var Zr = null;
  function Qr(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ha = null, pa = null;
  function ph(t) {
    var e = ra(t);
    if (e && (t = e.stateNode)) {
      var n = t[Te] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Gr(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ge(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var o = i[Te] || null;
                if (!o) throw Error(u(90));
                Gr(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              i = n[e], i.form === t.form && rh(i);
          }
          break t;
        case "textarea":
          ch(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && fa(t, !!n.multiple, e, !1);
      }
    }
  }
  var Kr = !1;
  function mh(t, e, n) {
    if (Kr) return t(e, n);
    Kr = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (Kr = !1, (ha !== null || pa !== null) && (Vs(), ha && (e = ha, t = pa, pa = ha = null, ph(e), t)))
        for (e = 0; e < t.length; e++) ph(t[e]);
    }
  }
  function ml(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[Te] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        u(231, e, typeof n)
      );
    return n;
  }
  var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pr = !1;
  if (_n)
    try {
      var gl = {};
      Object.defineProperty(gl, "passive", {
        get: function() {
          Pr = !0;
        }
      }), window.addEventListener("test", gl, gl), window.removeEventListener("test", gl, gl);
    } catch {
      Pr = !1;
    }
  var Wn = null, Jr = null, _o = null;
  function gh() {
    if (_o) return _o;
    var t, e = Jr, n = e.length, i, o = "value" in Wn ? Wn.value : Wn.textContent, s = o.length;
    for (t = 0; t < n && e[t] === o[t]; t++) ;
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === o[s - i]; i++) ;
    return _o = o.slice(t, 1 < i ? 1 - i : void 0);
  }
  function Uo(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Bo() {
    return !0;
  }
  function yh() {
    return !1;
  }
  function ge(t) {
    function e(n, i, o, s, f) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
      for (var m in t)
        t.hasOwnProperty(m) && (n = t[m], this[m] = n ? n(s) : s[m]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Bo : yh, this.isPropagationStopped = yh, this;
    }
    return K(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bo);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bo);
      },
      persist: function() {
      },
      isPersistent: Bo
    }), e;
  }
  var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ko = ge($n), yl = K({}, $n, { view: 0, detail: 0 }), wx = ge(yl), Fr, Ir, vl, Lo = K({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $r,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== vl && (vl && t.type === "mousemove" ? (Fr = t.screenX - vl.screenX, Ir = t.screenY - vl.screenY) : Ir = Fr = 0, vl = t), Fr);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ir;
    }
  }), vh = ge(Lo), Ex = K({}, Lo, { dataTransfer: 0 }), Ax = ge(Ex), zx = K({}, yl, { relatedTarget: 0 }), Wr = ge(zx), Mx = K({}, $n, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cx = ge(Mx), Dx = K({}, $n, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), Nx = ge(Dx), Ox = K({}, $n, { data: 0 }), xh = ge(Ox), Rx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, jx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Vx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _x(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Vx[t]) ? !!e[t] : !1;
  }
  function $r() {
    return _x;
  }
  var Ux = K({}, yl, {
    key: function(t) {
      if (t.key) {
        var e = Rx[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Uo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? jx[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $r,
    charCode: function(t) {
      return t.type === "keypress" ? Uo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Uo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Bx = ge(Ux), kx = K({}, Lo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bh = ge(kx), Lx = K({}, $n, { submitter: 0 }), Hx = ge(Lx), qx = K({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $r
  }), Gx = ge(qx), Yx = K({}, $n, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xx = ge(Yx), Zx = K({}, Lo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qx = ge(Zx), Kx = K({}, $n, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Px = ge(Kx), Jx = [9, 13, 27, 32], tu = _n && "CompositionEvent" in window, xl = null;
  _n && "documentMode" in document && (xl = document.documentMode);
  var Fx = _n && "TextEvent" in window && !xl, Sh = _n && (!tu || xl && 8 < xl && 11 >= xl), Th = " ", wh = !1;
  function Eh(t, e) {
    switch (t) {
      case "keyup":
        return Jx.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ah(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ma = !1;
  function Ix(t, e) {
    switch (t) {
      case "compositionend":
        return Ah(e);
      case "keypress":
        return e.which !== 32 ? null : (wh = !0, Th);
      case "textInput":
        return t = e.data, t === Th && wh ? null : t;
      default:
        return null;
    }
  }
  function Wx(t, e) {
    if (ma)
      return t === "compositionend" || !tu && Eh(t, e) ? (t = gh(), _o = Jr = Wn = null, ma = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Sh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var $x = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function zh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$x[t.type] : e === "textarea";
  }
  function Mh(t, e, n, i) {
    ha ? pa ? pa.push(i) : pa = [i] : ha = i, e = Hs(e, "onChange"), 0 < e.length && (n = new ko(
      "onChange",
      "change",
      null,
      n,
      i
    ), t.push({ event: n, listeners: e }));
  }
  var bl = null, Sl = null;
  function tb(t) {
    pg(t, 0);
  }
  function Ho(t) {
    var e = pl(t);
    if (rh(e)) return t;
  }
  function Ch(t, e) {
    if (t === "change") return e;
  }
  var Dh = !1;
  if (_n) {
    var eu;
    if (_n) {
      var nu = "oninput" in document;
      if (!nu) {
        var Nh = document.createElement("div");
        Nh.setAttribute("oninput", "return;"), nu = typeof Nh.oninput == "function";
      }
      eu = nu;
    } else eu = !1;
    Dh = eu && (!document.documentMode || 9 < document.documentMode);
  }
  function Oh() {
    bl && (bl.detachEvent("onpropertychange", Rh), Sl = bl = null);
  }
  function Rh(t) {
    if (t.propertyName === "value" && Ho(Sl)) {
      var e = [];
      Mh(
        e,
        Sl,
        t,
        Qr(t)
      ), mh(tb, e);
    }
  }
  function eb(t, e, n) {
    t === "focusin" ? (Oh(), bl = e, Sl = n, bl.attachEvent("onpropertychange", Rh)) : t === "focusout" && Oh();
  }
  function nb(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ho(Sl);
  }
  function ib(t, e) {
    if (t === "click") return Ho(e);
  }
  function ab(t, e) {
    if (t === "input" || t === "change")
      return Ho(e);
  }
  function lb(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ve = typeof Object.is == "function" ? Object.is : lb;
  function Tl(t, e) {
    if (Ve(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!_r.call(e, o) || !Ve(t[o], e[o]))
        return !1;
    }
    return !0;
  }
  function iu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function jh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Vh(t, e) {
    var n = jh(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = t + n.textContent.length, t <= e && i >= e)
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jh(n);
    }
  }
  function _h(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? _h(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Uh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = iu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = iu(t.document);
    }
    return e;
  }
  function au(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var ob = _n && "documentMode" in document && 11 >= document.documentMode, ga = null, lu = null, wl = null, ou = !1;
  function Bh(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ou || ga == null || ga !== iu(i) || (i = ga, "selectionStart" in i && au(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), wl && Tl(wl, i) || (wl = i, i = Hs(lu, "onSelect"), 0 < i.length && (e = new ko(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: i }), e.target = ga)));
  }
  function Ri(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var ya = {
    animationend: Ri("Animation", "AnimationEnd"),
    animationiteration: Ri("Animation", "AnimationIteration"),
    animationstart: Ri("Animation", "AnimationStart"),
    transitionrun: Ri("Transition", "TransitionRun"),
    transitionstart: Ri("Transition", "TransitionStart"),
    transitioncancel: Ri("Transition", "TransitionCancel"),
    transitionend: Ri("Transition", "TransitionEnd")
  }, su = {}, kh = {};
  _n && (kh = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
  function ji(t) {
    if (su[t]) return su[t];
    if (!ya[t]) return t;
    var e = ya[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in kh)
        return su[t] = e[n];
    return t;
  }
  var Lh = ji("animationend"), Hh = ji("animationiteration"), qh = ji("animationstart"), sb = ji("transitionrun"), rb = ji("transitionstart"), ub = ji("transitioncancel"), Gh = ji("transitionend"), Yh = /* @__PURE__ */ new Map(), ru = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ru.push("scrollEnd");
  function tn(t, e) {
    Yh.set(t, e), Oi(e, [t]);
  }
  var cb = 0;
  function Un(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = ln.identifierPrefix;
    var n = cb++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Xh(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = Ba;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = t[n[i]];
        if (o != null) {
          if (o === "none") return "none";
          e = e == null ? o : e + (" " + o);
        }
      }
    return e ?? t.default;
  }
  function Bn(t, e) {
    return t = Xh(t), e = Xh(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var qo = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, Ye = [], va = 0, uu = 0;
  function Go() {
    for (var t = va, e = uu = va = 0; e < t; ) {
      var n = Ye[e];
      Ye[e++] = null;
      var i = Ye[e];
      Ye[e++] = null;
      var o = Ye[e];
      Ye[e++] = null;
      var s = Ye[e];
      if (Ye[e++] = null, i !== null && o !== null) {
        var f = i.pending;
        f === null ? o.next = o : (o.next = f.next, f.next = o), i.pending = o;
      }
      s !== 0 && Zh(n, o, s);
    }
  }
  function Yo(t, e, n, i) {
    Ye[va++] = t, Ye[va++] = e, Ye[va++] = n, Ye[va++] = i, uu |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
  }
  function cu(t, e, n, i) {
    return Yo(t, e, n, i), Xo(t);
  }
  function Vi(t, e) {
    return Yo(t, null, null, e), Xo(t);
  }
  function Zh(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, s = t.return; s !== null; )
      s.childLanes |= n, i = s.alternate, i !== null && (i.childLanes |= n), s.tag === 22 && (t = s.stateNode, t === null || t._visibility & 1 || (o = !0)), t = s, s = s.return;
    return t.tag === 3 ? (s = t.stateNode, o && e !== null && (o = 31 - Re(n), t = s.hiddenUpdates, i = t[o], i === null ? t[o] = [e] : i.push(e), e.lane = n | 536870912), s) : null;
  }
  function Xo(t) {
    if (50 < Zl)
      throw Zl = 0, js = null, Error(u(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var xa = {};
  function fb(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function we(t, e, n, i) {
    return new fb(t, e, n, i);
  }
  function fu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function kn(t, e) {
    var n = t.alternate;
    return n === null ? (n = we(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Qh(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Zo(t, e, n, i, o, s) {
    var f = 0;
    if (i = t, typeof i == "function") fu(i) && (f = 1);
    else if (typeof i == "string")
      f = L2(
        t,
        n,
        pn.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (i) {
        case Wt:
          return t = we(31, n, e, o), t.elementType = Wt, t.lanes = s, t;
        case vt:
          return _i(n.children, o, s, e);
        case Nt:
          f = 8, o |= 24;
          break;
        case pe:
          return t = we(12, n, e, o | 2), t.elementType = pe, t.lanes = s, t;
        case it:
          return t = we(13, n, e, o), t.elementType = it, t.lanes = s, t;
        case P:
          return t = we(19, n, e, o), t.elementType = P, t.lanes = s, t;
        case $e:
        case E:
          return t = o | 32, t = we(30, n, e, t), t.elementType = E, t.lanes = s, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof i == "object" && i !== null)
            switch (i.$$typeof) {
              case Ot:
                f = 10;
                break t;
              case It:
                f = 9;
                break t;
              case q:
                f = 11;
                break t;
              case ut:
                f = 14;
                break t;
              case dt:
                f = 16, i = null;
                break t;
            }
          f = 29, n = Error(
            u(130, t === null ? "null" : typeof t, "")
          ), i = null;
      }
    return e = we(f, n, e, o), e.elementType = t, e.type = i, e.lanes = s, e;
  }
  function _i(t, e, n, i) {
    return t = we(7, t, i, e), t.lanes = n, t;
  }
  function du(t, e, n) {
    return t = we(6, t, null, e), t.lanes = n, t;
  }
  function Kh(t) {
    var e = we(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function hu(t, e, n) {
    return e = we(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var Ph = /* @__PURE__ */ new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Ph.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Gd(e)
      }, Ph.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Gd(e)
    };
  }
  var ba = [], Sa = 0, Qo = null, El = 0, Ze = [], Qe = 0, ti = null, gn = 1, yn = "";
  function Ln(t, e) {
    ba[Sa++] = El, ba[Sa++] = Qo, Qo = t, El = e;
  }
  function Jh(t, e, n) {
    Ze[Qe++] = gn, Ze[Qe++] = yn, Ze[Qe++] = ti, ti = t;
    var i = gn;
    t = yn;
    var o = 32 - Re(i) - 1;
    i &= ~(1 << o), n += 1;
    var s = 32 - Re(e) + o;
    if (30 < s) {
      var f = o - o % 5;
      s = (i & (1 << f) - 1).toString(32), i >>= f, o -= f, gn = 1 << 32 - Re(e) + o | n << o | i, yn = s + t;
    } else
      gn = 1 << s | n << o | i, yn = t;
  }
  function Ko(t) {
    t.return !== null && (Ln(t, 1), Jh(t, 1, 0));
  }
  function pu(t) {
    for (; t === Qo; )
      Qo = ba[--Sa], ba[Sa] = null, El = ba[--Sa], ba[Sa] = null;
    for (; t === ti; )
      ti = Ze[--Qe], Ze[Qe] = null, yn = Ze[--Qe], Ze[Qe] = null, gn = Ze[--Qe], Ze[Qe] = null;
  }
  function Fh(t, e) {
    Ze[Qe++] = gn, Ze[Qe++] = yn, Ze[Qe++] = ti, gn = e.id, yn = e.overflow, ti = t;
  }
  var te = null, Ut = null, ct = !1, ei = null, Ke = !1, mu = Error(u(519));
  function ni(t) {
    var e = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Al(Xe(e, t)), mu;
  }
  function Ih(t) {
    var e = t.stateNode, n = t.type, i = t.memoizedProps;
    switch (e[le] = t, e[Te] = i, n) {
      case "dialog":
        pt("cancel", e), pt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        pt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Kl.length; n++)
          pt(Kl[n], e);
        break;
      case "source":
        pt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        pt("error", e), pt("load", e);
        break;
      case "details":
        pt("toggle", e);
        break;
      case "input":
        pt("invalid", e), uh(
          e,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        pt("invalid", e);
        break;
      case "textarea":
        pt("invalid", e), fh(e, i.value, i.defaultValue, i.children);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || vg(e.textContent, n) ? (i.popover != null && (pt("beforetoggle", e), pt("toggle", e)), i.onScroll != null && pt("scroll", e), i.onScrollEnd != null && pt("scrollend", e), i.onClick != null && (e.onclick = mn), e = !0) : e = !1, e || ni(t, !0);
  }
  function Po(t) {
    for (te = t.return; te; )
      switch (te.tag) {
        case 5:
        case 31:
        case 13:
          Ke = !1;
          return;
        case 27:
        case 3:
          Ke = !0;
          return;
        default:
          te = te.return;
      }
  }
  function Ta(t) {
    if (t !== te) return !1;
    if (!ct) return Po(t), ct = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Zc(t.type, t.memoizedProps)), n = !n), n && Ut && ni(t), Po(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ut = Bg(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(317));
      Ut = Bg(t);
    } else
      e === 27 ? (e = Ut, vi(t.type) ? (t = tf, tf = null, Ut = t) : Ut = e) : Ut = te ? Je(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ui() {
    Ut = te = null, ct = !1;
  }
  function gu() {
    var t = ei;
    return t !== null && (ze === null ? ze = t : ze.push.apply(
      ze,
      t
    ), ei = null), t;
  }
  function Al(t) {
    ei === null ? ei = [t] : ei.push(t);
  }
  var yu = hn(null), Bi = null, Hn = null;
  function ii(t, e, n) {
    _t(yu, e._currentValue), e._currentValue = n;
  }
  function qn(t) {
    t._currentValue = yu.current, ae(yu);
  }
  function Jo(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function vu(t, e, n, i) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var s = o.dependencies;
      if (s !== null) {
        var f = o.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var m = s;
          s = o;
          for (var S = 0; S < e.length; S++)
            if (m.context === e[S]) {
              s.lanes |= n, m = s.alternate, m !== null && (m.lanes |= n), Jo(
                s.return,
                n,
                t
              ), i || (f = null);
              break t;
            }
          s = m.next;
        }
      } else if (o.tag === 18) {
        if (f = o.return, f === null) throw Error(u(341));
        f.lanes |= n, s = f.alternate, s !== null && (s.lanes |= n), Jo(f, n, t), f = null;
      } else
        o.tag === 13 && o.memoizedState !== null && o.memoizedState.dehydrated === null ? (o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), Jo(
          o.return,
          n,
          t
        ), f = o.child, f = f !== null ? f.sibling : null) : f = o.child;
      if (f !== null) f.return = o;
      else
        for (f = o; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (o = f.sibling, o !== null) {
            o.return = f.return, f = o;
            break;
          }
          f = f.return;
        }
      o = f;
    }
  }
  function ki(t, e, n, i) {
    t = null;
    for (var o = e, s = !1; o !== null; ) {
      if (!s) {
        if ((o.flags & 524288) !== 0) s = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var f = o.alternate;
        if (f === null) throw Error(u(387));
        if (f = f.memoizedProps, f !== null) {
          var m = o.type;
          Ve(o.pendingProps.value, f.value) || (t !== null ? t.push(m) : t = [m]);
        }
      } else if (o === To.current) {
        if (f = o.alternate, f === null) throw Error(u(387));
        f.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(Ka) : t = [Ka]);
      }
      o = o.return;
    }
    return t !== null && vu(
      e,
      t,
      n,
      i
    ), e.flags |= 262144, t !== null;
  }
  function Fo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ve(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Li(t) {
    Bi = t, Hn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function oe(t) {
    return Wh(Bi, t);
  }
  function Io(t, e) {
    return Bi === null && Li(t), Wh(t, e);
  }
  function Wh(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Hn === null) {
      if (t === null) throw Error(u(308));
      Hn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Hn = Hn.next = e;
    return n;
  }
  var db = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        t.push(i);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, hb = a.unstable_scheduleCallback, pb = a.unstable_NormalPriority, Xt = {
    $$typeof: Ot,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xu() {
    return {
      controller: new db(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function zl(t) {
    t.refCount--, t.refCount === 0 && hb(pb, function() {
      t.controller.abort();
    });
  }
  function $h(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var i = e[t];
        n.indexOf(i) === -1 && n.push(i);
      }
    }
  }
  var Ml = null;
  function mb(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var Cl = null, bu = 0, Hi = 0, wa = null;
  function gb(t, e) {
    if (Cl === null) {
      var n = Cl = [];
      bu = 0, Hi = Uc(), wa = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return bu++, e.then(tp, tp), e;
  }
  function tp() {
    if (--bu === 0 && (Ml = null, Cl !== null)) {
      wa !== null && (wa.status = "fulfilled");
      var t = Cl;
      Cl = null, Hi = 0, wa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function yb(t, e) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return t.then(
      function() {
        i.status = "fulfilled", i.value = e;
        for (var o = 0; o < n.length; o++) (0, n[o])(e);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), i;
  }
  var ep = I.S;
  I.S = function(t, e) {
    if (Km = Ne(), typeof e == "object" && e !== null && typeof e.then == "function" && gb(t, e), Ml !== null)
      for (var n = qa; n !== null; )
        $h(n, Ml), n = n.next;
    if (n = t.types, n !== null) {
      for (var i = qa; i !== null; )
        $h(i, n), i = i.next;
      if (Hi !== 0) {
        i = Ml, i === null && (i = Ml = []);
        for (var o = 0; o < n.length; o++) {
          var s = n[o];
          i.indexOf(s) === -1 && i.push(s);
        }
      }
    }
    ep !== null && ep(t, e);
  };
  var qi = hn(null);
  function Su() {
    var t = qi.current;
    return t !== null ? t : jt.pooledCache;
  }
  function Wo(t, e) {
    e === null ? _t(qi, qi.current) : _t(qi, e.pool);
  }
  function np() {
    var t = Su();
    return t === null ? null : { parent: Xt._currentValue, pool: t };
  }
  var Ea = Error(u(460)), Tu = Error(u(474)), $o = Error(u(542)), ts = { then: function() {
  } };
  function ip(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function ap(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(mn, mn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, op(t), t === void 0 && !("reason" in e) ? Error(u(600)) : t;
      default:
        if (typeof e.status == "string") e.then(mn, mn);
        else {
          if (t = jt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(u(482));
          t = e, t.status = "pending", t.then(
            function(i) {
              if (e.status === "pending") {
                var o = e;
                o.status = "fulfilled", o.value = i;
              }
            },
            function(i) {
              if (e.status === "pending") {
                var o = e;
                o.status = "rejected", o.reason = i;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, op(t), t;
        }
        throw Yi = e, Ea;
    }
  }
  function Gi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Yi = n, Ea) : n;
    }
  }
  var Yi = null;
  function lp() {
    if (Yi === null) throw Error(u(459));
    var t = Yi;
    return Yi = null, t;
  }
  function op(t) {
    if (t === Ea || t === $o)
      throw Error(u(483));
  }
  var Aa = null, Dl = 0;
  function es(t) {
    var e = Dl;
    return Dl += 1, Aa === null && (Aa = []), ap(Aa, t, e);
  }
  function ai(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ns(t, e) {
    throw e.$$typeof === Y ? Error(u(525)) : (t = Object.prototype.toString.call(e), Error(
      u(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function sp(t) {
    function e(z, w) {
      if (t) {
        var C = z.deletions;
        C === null ? (z.deletions = [w], z.flags |= 16) : C.push(w);
      }
    }
    function n(z, w) {
      if (!t) return null;
      for (; w !== null; )
        e(z, w), w = w.sibling;
      return null;
    }
    function i(z) {
      for (var w = /* @__PURE__ */ new Map(); z !== null; )
        z.key === null ? w.set(z.index, z) : w.set(z.key, z), z = z.sibling;
      return w;
    }
    function o(z, w) {
      return z = kn(z, w), z.index = 0, z.sibling = null, z;
    }
    function s(z, w, C) {
      return z.index = C, t ? (C = z.alternate, C !== null ? (C = C.index, C < w ? (z.flags |= 2, w) : C) : (z.flags |= 134217730, w)) : (z.flags |= 1048576, w);
    }
    function f(z) {
      return t && z.alternate === null && (z.flags |= 134217730), z;
    }
    function m(z, w, C, U) {
      return w === null || w.tag !== 6 ? (w = du(C, z.mode, U), w.return = z, w) : (w = o(w, C), w.return = z, w);
    }
    function S(z, w, C, U) {
      var Q = C.type;
      return Q === vt ? (z = N(
        z,
        w,
        C.props.children,
        U,
        C.key
      ), ai(z, C), z) : w !== null && (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === dt && Gi(Q) === w.type) ? (w = o(w, C.props), ai(w, C), w.return = z, w) : (w = Zo(
        C.type,
        C.key,
        C.props,
        null,
        z.mode,
        U
      ), ai(w, C), w.return = z, w);
    }
    function M(z, w, C, U) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== C.containerInfo || w.stateNode.implementation !== C.implementation ? (w = hu(C, z.mode, U), w.return = z, w) : (w = o(w, C.children || []), w.return = z, w);
    }
    function N(z, w, C, U, Q) {
      return w === null || w.tag !== 7 ? (w = _i(
        C,
        z.mode,
        U,
        Q
      ), w.return = z, w) : (w = o(w, C), w.return = z, w);
    }
    function B(z, w, C) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = du(
          "" + w,
          z.mode,
          C
        ), w.return = z, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Dt:
            return C = Zo(
              w.type,
              w.key,
              w.props,
              null,
              z.mode,
              C
            ), ai(C, w), C.return = z, C;
          case $:
            return w = hu(
              w,
              z.mode,
              C
            ), w.return = z, w;
          case dt:
            return w = Gi(w), B(z, w, C);
        }
        if (wt(w) || et(w))
          return w = _i(
            w,
            z.mode,
            C,
            null
          ), w.return = z, w;
        if (typeof w.then == "function")
          return B(z, es(w), C);
        if (w.$$typeof === Ot)
          return B(
            z,
            Io(z, w),
            C
          );
        ns(z, w);
      }
      return null;
    }
    function A(z, w, C, U) {
      var Q = w !== null ? w.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return Q !== null ? null : m(z, w, "" + C, U);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Dt:
            return C.key === Q ? S(z, w, C, U) : null;
          case $:
            return C.key === Q ? M(z, w, C, U) : null;
          case dt:
            return C = Gi(C), A(z, w, C, U);
        }
        if (wt(C) || et(C))
          return Q !== null ? null : N(z, w, C, U, null);
        if (typeof C.then == "function")
          return A(
            z,
            w,
            es(C),
            U
          );
        if (C.$$typeof === Ot)
          return A(
            z,
            w,
            Io(z, C),
            U
          );
        ns(z, C);
      }
      return null;
    }
    function D(z, w, C, U, Q) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return z = z.get(C) || null, m(w, z, "" + U, Q);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case Dt:
            return z = z.get(
              U.key === null ? C : U.key
            ) || null, S(w, z, U, Q);
          case $:
            return z = z.get(
              U.key === null ? C : U.key
            ) || null, M(w, z, U, Q);
          case dt:
            return U = Gi(U), D(
              z,
              w,
              C,
              U,
              Q
            );
        }
        if (wt(U) || et(U))
          return z = z.get(C) || null, N(w, z, U, Q, null);
        if (typeof U.then == "function")
          return D(
            z,
            w,
            C,
            es(U),
            Q
          );
        if (U.$$typeof === Ot)
          return D(
            z,
            w,
            C,
            Io(w, U),
            Q
          );
        ns(w, U);
      }
      return null;
    }
    function G(z, w, C, U) {
      for (var Q = null, gt = null, W = w, nt = w = 0, Kt = null; W !== null && nt < C.length; nt++) {
        W.index > nt ? (Kt = W, W = null) : Kt = W.sibling;
        var yt = A(
          z,
          W,
          C[nt],
          U
        );
        if (yt === null) {
          W === null && (W = Kt);
          break;
        }
        t && W && yt.alternate === null && e(z, W), w = s(yt, w, nt), gt === null ? Q = yt : gt.sibling = yt, gt = yt, W = Kt;
      }
      if (nt === C.length)
        return n(z, W), ct && Ln(z, nt), Q;
      if (W === null) {
        for (; nt < C.length; nt++)
          W = B(z, C[nt], U), W !== null && (w = s(
            W,
            w,
            nt
          ), gt === null ? Q = W : gt.sibling = W, gt = W);
        return ct && Ln(z, nt), Q;
      }
      for (W = i(W); nt < C.length; nt++)
        Kt = D(
          W,
          z,
          nt,
          C[nt],
          U
        ), Kt !== null && (t && (yt = Kt.alternate, yt !== null && W.delete(yt.key === null ? nt : yt.key)), w = s(
          Kt,
          w,
          nt
        ), gt === null ? Q = Kt : gt.sibling = Kt, gt = Kt);
      return t && W.forEach(function(wi) {
        return e(z, wi);
      }), ct && Ln(z, nt), Q;
    }
    function J(z, w, C, U) {
      if (C == null) throw Error(u(151));
      for (var Q = null, gt = null, W = w, nt = w = 0, Kt = null, yt = C.next(); W !== null && !yt.done; nt++, yt = C.next()) {
        W.index > nt ? (Kt = W, W = null) : Kt = W.sibling;
        var wi = A(z, W, yt.value, U);
        if (wi === null) {
          W === null && (W = Kt);
          break;
        }
        t && W && wi.alternate === null && e(z, W), w = s(wi, w, nt), gt === null ? Q = wi : gt.sibling = wi, gt = wi, W = Kt;
      }
      if (yt.done)
        return n(z, W), ct && Ln(z, nt), Q;
      if (W === null) {
        for (; !yt.done; nt++, yt = C.next())
          yt = B(z, yt.value, U), yt !== null && (w = s(yt, w, nt), gt === null ? Q = yt : gt.sibling = yt, gt = yt);
        return ct && Ln(z, nt), Q;
      }
      for (W = i(W); !yt.done; nt++, yt = C.next())
        yt = D(W, z, nt, yt.value, U), yt !== null && (t && (Kt = yt.alternate, Kt !== null && W.delete(
          Kt.key === null ? nt : Kt.key
        )), w = s(yt, w, nt), gt === null ? Q = yt : gt.sibling = yt, gt = yt);
      return t && W.forEach(function(I2) {
        return e(z, I2);
      }), ct && Ln(z, nt), Q;
    }
    function rt(z, w, C, U) {
      if (typeof C == "object" && C !== null && C.type === vt && C.key === null && C.props.ref === void 0 && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Dt:
            t: {
              for (var Q = C.key; w !== null; ) {
                if (w.key === Q) {
                  if (Q = C.type, Q === vt) {
                    if (w.tag === 7) {
                      n(
                        z,
                        w.sibling
                      ), U = o(
                        w,
                        C.props.children
                      ), ai(U, C), U.return = z, z = U;
                      break t;
                    }
                  } else if (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === dt && Gi(Q) === w.type) {
                    n(
                      z,
                      w.sibling
                    ), U = o(w, C.props), ai(U, C), U.return = z, z = U;
                    break t;
                  }
                  n(z, w);
                  break;
                } else e(z, w);
                w = w.sibling;
              }
              C.type === vt ? (U = _i(
                C.props.children,
                z.mode,
                U,
                C.key
              ), ai(U, C), U.return = z, z = U) : (U = Zo(
                C.type,
                C.key,
                C.props,
                null,
                z.mode,
                U
              ), ai(U, C), U.return = z, z = U);
            }
            return f(z);
          case $:
            t: {
              for (Q = C.key; w !== null; ) {
                if (w.key === Q)
                  if (w.tag === 4 && w.stateNode.containerInfo === C.containerInfo && w.stateNode.implementation === C.implementation) {
                    n(
                      z,
                      w.sibling
                    ), U = o(w, C.children || []), U.return = z, z = U;
                    break t;
                  } else {
                    n(z, w);
                    break;
                  }
                else e(z, w);
                w = w.sibling;
              }
              U = hu(C, z.mode, U), U.return = z, z = U;
            }
            return f(z);
          case dt:
            return C = Gi(C), rt(
              z,
              w,
              C,
              U
            );
        }
        if (wt(C))
          return G(
            z,
            w,
            C,
            U
          );
        if (et(C)) {
          if (Q = et(C), typeof Q != "function") throw Error(u(150));
          return C = Q.call(C), J(
            z,
            w,
            C,
            U
          );
        }
        if (typeof C.then == "function")
          return rt(
            z,
            w,
            es(C),
            U
          );
        if (C.$$typeof === Ot)
          return rt(
            z,
            w,
            Io(z, C),
            U
          );
        ns(z, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, w !== null && w.tag === 6 ? (n(z, w.sibling), U = o(w, C), U.return = z, z = U) : (n(z, w), U = du(C, z.mode, U), U.return = z, z = U), f(z)) : n(z, w);
    }
    return function(z, w, C, U) {
      try {
        Dl = 0;
        var Q = rt(
          z,
          w,
          C,
          U
        );
        return Aa = null, Q;
      } catch (W) {
        if (W === Ea || W === $o) throw W;
        var gt = we(29, W, null, z.mode);
        return gt.lanes = U, gt.return = z, gt;
      } finally {
      }
    };
  }
  var Xi = sp(!0), rp = sp(!1), li = !1;
  function wu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Eu(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function oi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function si(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Et & 2) !== 0) {
      var o = i.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), i.pending = e, e = Xo(t), Zh(t, null, n), e;
    }
    return Yo(t, i, e, n), Xo(t);
  }
  function Nl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Jd(t, n);
    }
  }
  function Au(t, e) {
    var n = t.updateQueue, i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var o = null, s = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          s === null ? o = s = f : s = s.next = f, n = n.next;
        } while (n !== null);
        s === null ? o = s = e : s = s.next = e;
      } else o = s = e;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: s,
        shared: i.shared,
        callbacks: i.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var zu = !1;
  function Ol() {
    if (zu) {
      var t = wa;
      if (t !== null) throw t;
    }
  }
  function Rl(t, e, n, i) {
    zu = !1;
    var o = t.updateQueue;
    li = !1;
    var s = o.firstBaseUpdate, f = o.lastBaseUpdate, m = o.shared.pending;
    if (m !== null) {
      o.shared.pending = null;
      var S = m, M = S.next;
      S.next = null, f === null ? s = M : f.next = M, f = S;
      var N = t.alternate;
      N !== null && (N = N.updateQueue, m = N.lastBaseUpdate, m !== f && (m === null ? N.firstBaseUpdate = M : m.next = M, N.lastBaseUpdate = S));
    }
    if (s !== null) {
      var B = o.baseState;
      f = 0, N = M = S = null, m = s;
      do {
        var A = m.lane & -536870913, D = A !== m.lane;
        if (D ? (mt & A) === A : (i & A) === A) {
          A !== 0 && A === Hi && (zu = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          t: {
            var G = t, J = m;
            A = e;
            var rt = n;
            switch (J.tag) {
              case 1:
                if (G = J.payload, typeof G == "function") {
                  B = G.call(rt, B, A);
                  break t;
                }
                B = G;
                break t;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = J.payload, A = typeof G == "function" ? G.call(rt, B, A) : G, A == null) break t;
                B = K({}, B, A);
                break t;
              case 2:
                li = !0;
            }
          }
          A = m.callback, A !== null && (t.flags |= 64, D && (t.flags |= 8192), D = o.callbacks, D === null ? o.callbacks = [A] : D.push(A));
        } else
          D = {
            lane: A,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, N === null ? (M = N = D, S = B) : N = N.next = D, f |= A;
        if (m = m.next, m === null) {
          if (m = o.shared.pending, m === null)
            break;
          D = m, m = D.next, D.next = null, o.lastBaseUpdate = D, o.shared.pending = null;
        }
      } while (!0);
      N === null && (S = B), o.baseState = S, o.firstBaseUpdate = M, o.lastBaseUpdate = N, s === null && (o.shared.lanes = 0), pi |= f, t.lanes = f, t.memoizedState = B;
    }
  }
  function up(t, e) {
    if (typeof t != "function")
      throw Error(u(191, t));
    t.call(e);
  }
  function cp(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        up(n[t], e);
  }
  var ri = hn(null), is = hn(0);
  function fp(t, e) {
    t = Qn, _t(is, t), _t(ri, e), Qn = t | e.baseLanes;
  }
  function Mu() {
    _t(is, Qn), _t(ri, ri.current);
  }
  function Cu() {
    Qn = is.current, ae(ri), ae(is);
  }
  var se = hn(null), me = null;
  function ui(t) {
    var e = t.alternate;
    _t(re, re.current & 1), _t(se, t), me === null && (e === null || ri.current !== null || e.memoizedState !== null) && (me = t);
  }
  function Du(t) {
    _t(re, re.current), _t(se, t), me === null && (me = t);
  }
  function dp(t) {
    t.tag === 22 ? (_t(re, re.current), _t(se, t), me === null && (me = t)) : ci();
  }
  function ci() {
    _t(re, re.current), _t(se, se.current);
  }
  function _e(t) {
    ae(se), me === t && (me = null), ae(re);
  }
  var re = hn(0);
  function jl(t, e) {
    _t(se, se.current), _t(re, e);
  }
  function Nu(t) {
    ae(re), ae(se), me === t && (me = null);
  }
  function as(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Wc(n) || $c(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Gn = 0, st = null, Rt = null, Zt = null, ls = !1, za = !1, Zi = !1, os = 0, Vl = 0, Ma = null, vb = 0;
  function qt() {
    throw Error(u(321));
  }
  function Ou(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ve(t[n], e[n])) return !1;
    return !0;
  }
  function Ru(t, e, n, i, o, s) {
    return Gn = s, st = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, I.H = t === null || t.memoizedState === null ? Jp : Fp, Zi = !1, s = n(i, o), Zi = !1, za && (s = pp(
      e,
      n,
      i,
      o
    )), hp(t), s;
  }
  function hp(t) {
    I.H = hs;
    var e = Rt !== null && Rt.next !== null;
    if (Gn = 0, Zt = Rt = st = null, ls = !1, Vl = 0, Ma = null, e) throw Error(u(300));
    t === null || Qt || (t = t.dependencies, t !== null && Fo(t) && (Qt = !0));
  }
  function pp(t, e, n, i) {
    st = t;
    var o = 0;
    do {
      if (za && (Ma = null), Vl = 0, za = !1, 25 <= o) throw Error(u(301));
      if (o += 1, Zt = Rt = null, t.updateQueue != null) {
        var s = t.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      I.H = zb, s = e(n, i);
    } while (za);
    return s;
  }
  function xb() {
    var t = I.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? _l(e) : e, t = t.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== t && (st.flags |= 1024), e;
  }
  function ju() {
    var t = os !== 0;
    return os = 0, t;
  }
  function Vu(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function _u(t) {
    if (ls) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      ls = !1;
    }
    Gn = 0, Zt = Rt = st = null, za = !1, Vl = os = 0, Ma = null;
  }
  function ye() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Zt === null ? st.memoizedState = Zt = t : Zt = Zt.next = t, Zt;
  }
  function Yt() {
    if (Rt === null) {
      var t = st.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Rt.next;
    var e = Zt === null ? st.memoizedState : Zt.next;
    if (e !== null)
      Zt = e, Rt = t;
    else {
      if (t === null)
        throw st.alternate === null ? Error(u(467)) : Error(u(310));
      Rt = t, t = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null
      }, Zt === null ? st.memoizedState = Zt = t : Zt = Zt.next = t;
    }
    return Zt;
  }
  function ss() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _l(t) {
    var e = Vl;
    return Vl += 1, Ma === null && (Ma = []), t = ap(Ma, t, e), e = st, (Zt === null ? e.memoizedState : Zt.next) === null && (e = e.alternate, I.H = e === null || e.memoizedState === null ? Jp : Fp), t;
  }
  function rs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return _l(t);
      if (t.$$typeof === L) return;
      if (t.$$typeof === Ot) return oe(t);
    }
    throw Error(u(438, String(t)));
  }
  function Uu(t) {
    var e = null, n = st.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var i = st.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = ss(), st.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++)
        n[i] = Ci;
    return e.index++, n;
  }
  function Yn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function us(t) {
    var e = Yt();
    return Bu(e, Rt, t);
  }
  function Bu(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(u(311));
    i.lastRenderedReducer = n;
    var o = t.baseQueue, s = i.pending;
    if (s !== null) {
      if (o !== null) {
        var f = o.next;
        o.next = s.next, s.next = f;
      }
      e.baseQueue = o = s, i.pending = null;
    }
    if (s = t.baseState, o === null) t.memoizedState = s;
    else {
      e = o.next;
      var m = f = null, S = null, M = e, N = !1;
      do {
        var B = M.lane & -536870913;
        if (B !== M.lane ? (mt & B) === B : (Gn & B) === B) {
          var A = M.revertLane;
          if (A === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), B === Hi && (N = !0);
          else if ((Gn & A) === A) {
            M = M.next, A === Hi && (N = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, S === null ? (m = S = B, f = s) : S = S.next = B, st.lanes |= A, pi |= A;
          B = M.action, Zi && n(s, B), s = M.hasEagerState ? M.eagerState : n(s, B);
        } else
          A = {
            lane: B,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, S === null ? (m = S = A, f = s) : S = S.next = A, st.lanes |= B, pi |= B;
        M = M.next;
      } while (M !== null && M !== e);
      if (S === null ? f = s : S.next = m, !Ve(s, t.memoizedState) && (Qt = !0, N && (n = wa, n !== null)))
        throw n;
      t.memoizedState = s, t.baseState = f, t.baseQueue = S, i.lastRenderedState = s;
    }
    return o === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function ku(t) {
    var e = Yt(), n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch, o = n.pending, s = e.memoizedState;
    if (o !== null) {
      n.pending = null;
      var f = o = o.next;
      do
        s = t(s, f.action), f = f.next;
      while (f !== o);
      Ve(s, e.memoizedState) || (Qt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s;
    }
    return [s, i];
  }
  function mp(t, e, n) {
    var i = st, o = Yt(), s = ct;
    if (s) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var f = !Ve(
      (Rt || o).memoizedState,
      n
    );
    if (f && (o.memoizedState = n, Qt = !0), o = o.queue, qu(vp.bind(null, i, o, t), [
      t
    ]), t = o.getSnapshot !== e || f || Zt !== null && (Zt.memoizedState.tag & 1) !== 0, Ca(
      t ? 9 : 8,
      { destroy: void 0 },
      yp.bind(null, i, o, n, e),
      null
    ), t) {
      if (i.flags |= 2048, jt === null) throw Error(u(349));
      s || (Gn & 127) !== 0 || gp(i, e, n);
    }
    return n;
  }
  function gp(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = st.updateQueue, e === null ? (e = ss(), st.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function yp(t, e, n, i) {
    e.value = n, e.getSnapshot = i, xp(e) && bp(t);
  }
  function vp(t, e, n) {
    return n(function() {
      xp(e) && bp(t);
    });
  }
  function xp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ve(t, n);
    } catch {
      return !0;
    }
  }
  function bp(t) {
    var e = Vi(t, 2);
    e !== null && Me(e, t, 2);
  }
  function Lu(t) {
    var e = ye();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Zi) {
        In(!0);
        try {
          n();
        } finally {
          In(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yn,
      lastRenderedState: t
    }, e;
  }
  function Sp(t, e, n, i) {
    return t.baseState = n, Bu(
      t,
      Rt,
      typeof i == "function" ? i : Yn
    );
  }
  function bb(t, e, n, i, o) {
    if (ds(t)) throw Error(u(485));
    if (t = e.action, t !== null) {
      var s = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          s.listeners.push(f);
        }
      };
      I.T !== null ? n(!0) : s.isTransition = !1, i(s), n = e.pending, n === null ? (s.next = e.pending = s, Tp(e, s)) : (s.next = n.next, e.pending = n.next = s);
    }
  }
  function Tp(t, e) {
    var n = e.action, i = e.payload, o = t.state;
    if (e.isTransition) {
      var s = I.T, f = {};
      f.types = s !== null ? s.types : null, I.T = f;
      try {
        var m = n(o, i), S = I.S;
        S !== null && S(f, m), wp(t, e, m);
      } catch (M) {
        Hu(t, e, M);
      } finally {
        s !== null && f.types !== null && (s.types = f.types), I.T = s;
      }
    } else
      try {
        s = n(o, i), wp(t, e, s);
      } catch (M) {
        Hu(t, e, M);
      }
  }
  function wp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        Ep(t, e, i);
      },
      function(i) {
        return Hu(t, e, i);
      }
    ) : Ep(t, e, n);
  }
  function Ep(t, e, n) {
    e.status = "fulfilled", e.value = n, Ap(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Tp(t, n)));
  }
  function Hu(t, e, n) {
    var i = t.pending;
    if (t.pending = null, i !== null) {
      i = i.next;
      do
        e.status = "rejected", e.reason = n, Ap(e), e = e.next;
      while (e !== i);
    }
    t.action = null;
  }
  function Ap(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function zp(t, e) {
    return e;
  }
  function Mp(t, e) {
    if (ct) {
      var n = jt.formState;
      if (n !== null) {
        t: {
          var i = st;
          if (ct) {
            if (Ut) {
              e: {
                for (var o = Ut, s = Ke; o.nodeType !== 8; ) {
                  if (!s) {
                    o = null;
                    break e;
                  }
                  if (o = Je(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break e;
                  }
                }
                s = o.data, o = s === "F!" || s === "F" ? o : null;
              }
              if (o) {
                Ut = Je(
                  o.nextSibling
                ), i = o.data === "F!";
                break t;
              }
            }
            ni(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return n = ye(), n.memoizedState = n.baseState = e, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zp,
      lastRenderedState: e
    }, n.queue = i, n = Qp.bind(
      null,
      st,
      i
    ), i.dispatch = n, i = Lu(!1), s = Qu.bind(
      null,
      st,
      !1,
      i.queue
    ), i = ye(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, i.queue = o, n = bb.bind(
      null,
      st,
      o,
      s,
      n
    ), o.dispatch = n, i.memoizedState = t, [e, n, !1];
  }
  function Cp(t) {
    var e = Yt();
    return Dp(e, Rt, t);
  }
  function Dp(t, e, n) {
    if (e = Bu(
      t,
      e,
      zp
    )[0], t = us(Yn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var i = _l(e);
      } catch (f) {
        throw f === Ea ? $o : f;
      }
    else i = e;
    e = Yt();
    var o = e.queue, s = o.dispatch;
    return n !== e.memoizedState && (st.flags |= 2048, Ca(
      9,
      { destroy: void 0 },
      Sb.bind(null, o, n),
      null
    )), [i, s, t];
  }
  function Sb(t, e) {
    t.action = e;
  }
  function Np(t) {
    var e = Yt(), n = Rt;
    if (n !== null)
      return Dp(e, n, t);
    Yt(), e = e.memoizedState, n = Yt();
    var i = n.queue.dispatch;
    return n.memoizedState = t, [e, i, !1];
  }
  function Ca(t, e, n, i) {
    return t = { tag: t, create: n, deps: i, inst: e, next: null }, e = st.updateQueue, e === null && (e = ss(), st.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t), t;
  }
  function Op() {
    return Yt().memoizedState;
  }
  function cs(t, e, n, i) {
    var o = ye();
    st.flags |= t, o.memoizedState = Ca(
      1 | e,
      { destroy: void 0 },
      n,
      i === void 0 ? null : i
    );
  }
  function fs(t, e, n, i) {
    var o = Yt();
    i = i === void 0 ? null : i;
    var s = o.memoizedState.inst;
    Rt !== null && i !== null && Ou(i, Rt.memoizedState.deps) ? o.memoizedState = Ca(e, s, n, i) : (st.flags |= t, o.memoizedState = Ca(
      1 | e,
      s,
      n,
      i
    ));
  }
  function Rp(t, e) {
    cs(8390656, 8, t, e);
  }
  function qu(t, e) {
    fs(2048, 8, t, e);
  }
  function Tb(t) {
    st.flags |= 4;
    var e = st.updateQueue;
    if (e === null)
      e = ss(), st.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function jp(t) {
    var e = Yt().memoizedState;
    return Tb({ ref: e, nextImpl: t }), function() {
      if ((Et & 2) !== 0) throw Error(u(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Vp(t, e) {
    return fs(4, 2, t, e);
  }
  function _p(t, e) {
    return fs(4, 4, t, e);
  }
  function Up(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Bp(t, e, n) {
    n = n != null ? n.concat([t]) : null, fs(4, 4, Up.bind(null, e, t), n);
  }
  function Gu() {
  }
  function kp(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && Ou(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t);
  }
  function Lp(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && Ou(e, i[1]))
      return i[0];
    if (i = t(), Zi) {
      In(!0);
      try {
        t();
      } finally {
        In(!1);
      }
    }
    return n.memoizedState = [i, e], i;
  }
  function Yu(t, e, n) {
    return n === void 0 || (Gn & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Jm(), st.lanes |= t, pi |= t, n);
  }
  function Hp(t, e, n, i) {
    return Ve(n, e) ? n : ri.current !== null ? (t = Yu(t, n, i), Ve(t, e) || (Qt = !0), t) : (Gn & 106) === 0 || (Gn & 1073741824) !== 0 && (mt & 261930) === 0 ? (Qt = !0, t.memoizedState = n) : (t = Jm(), st.lanes |= t, pi |= t, e);
  }
  function qp(t, e, n, i, o) {
    var s = lt.p;
    lt.p = s !== 0 && 8 > s ? s : 8;
    var f = I.T, m = {};
    m.types = f !== null ? f.types : null, I.T = m, Qu(t, !1, e, n);
    try {
      var S = o(), M = I.S;
      if (M !== null && M(m, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var N = yb(
          S,
          i
        );
        Ul(
          t,
          e,
          N,
          Le(t)
        );
      } else
        Ul(
          t,
          e,
          i,
          Le(t)
        );
    } catch (B) {
      Ul(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: B },
        Le()
      );
    } finally {
      lt.p = s, f !== null && m.types !== null && (f.types = m.types), I.T = f;
    }
  }
  function wb() {
  }
  function Xu(t, e, n, i) {
    if (t.tag !== 5) throw Error(u(476));
    var o = Gp(t).queue;
    qp(
      t,
      o,
      e,
      Rn,
      n === null ? wb : function() {
        return Yp(t), n(i);
      }
    );
  }
  function Gp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Rn,
      baseState: Rn,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: Rn
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Yp(t) {
    var e = Gp(t);
    e.next === null && (e = t.alternate.memoizedState), Ul(
      t,
      e.next.queue,
      {},
      Le()
    );
  }
  function Zu() {
    return oe(Ka);
  }
  function Xp() {
    return Yt().memoizedState;
  }
  function Zp() {
    return Yt().memoizedState;
  }
  function Eb(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Le();
          t = oi(n);
          var i = si(e, t, n);
          i !== null && (Me(i, e, n), Nl(i, e, n)), e = { cache: xu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Ab(t, e, n) {
    var i = Le();
    n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ds(t) ? Kp(e, n) : (n = cu(t, e, n, i), n !== null && (Me(n, t, i), Pp(n, e, i)));
  }
  function Qp(t, e, n) {
    var i = Le();
    Ul(t, e, n, i);
  }
  function Ul(t, e, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ds(t)) Kp(e, o);
    else {
      var s = t.alternate;
      if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null))
        try {
          var f = e.lastRenderedState, m = s(f, n);
          if (o.hasEagerState = !0, o.eagerState = m, Ve(m, f))
            return Yo(t, e, o, 0), jt === null && Go(), !1;
        } catch {
        } finally {
        }
      if (n = cu(t, e, o, i), n !== null)
        return Me(n, t, i), Pp(n, e, i), !0;
    }
    return !1;
  }
  function Qu(t, e, n, i) {
    if (i = {
      lane: 2,
      revertLane: Uc(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ds(t)) {
      if (e) throw Error(u(479));
    } else
      e = cu(
        t,
        n,
        i,
        2
      ), e !== null && Me(e, t, 2);
  }
  function ds(t) {
    var e = t.alternate;
    return t === st || e !== null && e === st;
  }
  function Kp(t, e) {
    za = ls = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Pp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      i &= t.pendingLanes, n |= i, e.lanes = n, Jd(t, n);
    }
  }
  var hs = {
    readContext: oe,
    use: rs,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt,
    useEffectEvent: qt
  }, Jp = {
    readContext: oe,
    use: rs,
    useCallback: function(t, e) {
      return ye().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: oe,
    useEffect: Rp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, cs(
        4194308,
        4,
        Up.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return cs(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      cs(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = ye();
      e = e === void 0 ? null : e;
      var i = t();
      if (Zi) {
        In(!0);
        try {
          t();
        } finally {
          In(!1);
        }
      }
      return n.memoizedState = [i, e], i;
    },
    useReducer: function(t, e, n) {
      var i = ye();
      if (n !== void 0) {
        var o = n(e);
        if (Zi) {
          In(!0);
          try {
            n(e);
          } finally {
            In(!1);
          }
        }
      } else o = e;
      return i.memoizedState = i.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, i.queue = t, t = t.dispatch = Ab.bind(
        null,
        st,
        t
      ), [i.memoizedState, t];
    },
    useRef: function(t) {
      var e = ye();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Lu(t);
      var e = t.queue, n = Qp.bind(null, st, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Gu,
    useDeferredValue: function(t, e) {
      var n = ye();
      return Yu(n, t, e);
    },
    useTransition: function() {
      var t = Lu(!1);
      return t = qp.bind(
        null,
        st,
        t.queue,
        !0,
        !1
      ), ye().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var i = st, o = ye();
      if (ct) {
        if (n === void 0)
          throw Error(u(407));
        n = n();
      } else {
        if (n = e(), jt === null)
          throw Error(u(349));
        (mt & 127) !== 0 || gp(i, e, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return o.queue = s, Rp(vp.bind(null, i, s, t), [
        t
      ]), i.flags |= 2048, Ca(
        9,
        { destroy: void 0 },
        yp.bind(
          null,
          i,
          s,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = ye(), e = jt.identifierPrefix;
      if (ct) {
        var n = yn, i = gn;
        n = (i & ~(1 << 32 - Re(i) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = os++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = vb++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Zu,
    useFormState: Mp,
    useActionState: Mp,
    useOptimistic: function(t) {
      var e = ye();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Qu.bind(
        null,
        st,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Uu,
    useCacheRefresh: function() {
      return ye().memoizedState = Eb.bind(
        null,
        st
      );
    },
    useEffectEvent: function(t) {
      var e = ye(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Et & 2) !== 0)
          throw Error(u(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Fp = {
    readContext: oe,
    use: rs,
    useCallback: kp,
    useContext: oe,
    useEffect: qu,
    useImperativeHandle: Bp,
    useInsertionEffect: Vp,
    useLayoutEffect: _p,
    useMemo: Lp,
    useReducer: us,
    useRef: Op,
    useState: function() {
      return us(Yn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(t, e) {
      var n = Yt();
      return Hp(
        n,
        Rt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = us(Yn)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : _l(t),
        e
      ];
    },
    useSyncExternalStore: mp,
    useId: Xp,
    useHostTransitionStatus: Zu,
    useFormState: Cp,
    useActionState: Cp,
    useOptimistic: function(t, e) {
      var n = Yt();
      return Sp(n, Rt, t, e);
    },
    useMemoCache: Uu,
    useCacheRefresh: Zp,
    useEffectEvent: jp
  }, zb = {
    readContext: oe,
    use: rs,
    useCallback: kp,
    useContext: oe,
    useEffect: qu,
    useImperativeHandle: Bp,
    useInsertionEffect: Vp,
    useLayoutEffect: _p,
    useMemo: Lp,
    useReducer: ku,
    useRef: Op,
    useState: function() {
      return ku(Yn);
    },
    useDebugValue: Gu,
    useDeferredValue: function(t, e) {
      var n = Yt();
      return Rt === null ? Yu(n, t, e) : Hp(
        n,
        Rt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ku(Yn)[0], e = Yt().memoizedState;
      return [
        typeof t == "boolean" ? t : _l(t),
        e
      ];
    },
    useSyncExternalStore: mp,
    useId: Xp,
    useHostTransitionStatus: Zu,
    useFormState: Np,
    useActionState: Np,
    useOptimistic: function(t, e) {
      var n = Yt();
      return Rt !== null ? Sp(n, Rt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Uu,
    useCacheRefresh: Zp,
    useEffectEvent: jp
  };
  function Ku(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : K({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Pu = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var i = Le(), o = oi(i);
      o.payload = e, n != null && (o.callback = n), e = si(t, o, i), e !== null && (Me(e, t, i), Nl(e, t, i));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var i = Le(), o = oi(i);
      o.tag = 1, o.payload = e, n != null && (o.callback = n), e = si(t, o, i), e !== null && (Me(e, t, i), Nl(e, t, i));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Le(), i = oi(n);
      i.tag = 2, e != null && (i.callback = e), e = si(t, i, n), e !== null && (Me(e, t, n), Nl(e, t, n));
    }
  };
  function Ip(t, e, n, i, o, s, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, f) : e.prototype && e.prototype.isPureReactComponent ? !Tl(n, i) || !Tl(o, s) : !0;
  }
  function Wp(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Pu.enqueueReplaceState(e, e.state, null);
  }
  function Qi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e)
        i !== "ref" && (n[i] = e[i]);
    }
    if (t = t.defaultProps) {
      n === e && (n = K({}, n));
      for (var o in t)
        n[o] === void 0 && (n[o] = t[o]);
    }
    return n;
  }
  function $p(t) {
    qo(t);
  }
  function tm(t) {
    console.error(t);
  }
  function em(t) {
    qo(t);
  }
  function ps(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function nm(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Ju(t, e, n) {
    return n = oi(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ps(t, e);
    }, n;
  }
  function im(t) {
    return t = oi(t), t.tag = 3, t;
  }
  function am(t, e, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var s = i.value;
      t.payload = function() {
        return o(s);
      }, t.callback = function() {
        nm(e, n, i);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      nm(e, n, i), typeof o != "function" && (mi === null ? mi = /* @__PURE__ */ new Set([this]) : mi.add(this));
      var m = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function Mb(t, e, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (e = n.alternate, e !== null && ki(
        e,
        n,
        o,
        !0
      ), n = se.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return me === null ? _s() : n.alternate === null && Gt === 0 && (Gt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === ts ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), jc(t, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === ts ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), jc(t, i, o)), !1;
        }
        throw Error(u(435, n.tag));
      }
      return jc(t, i, o), _s(), !1;
    }
    if (ct)
      return e = se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, i !== mu && (t = Error(u(422), { cause: i }), Al(Xe(t, n)))) : (i !== mu && (e = Error(u(423), {
        cause: i
      }), Al(
        Xe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, i = Xe(i, n), o = Ju(
        t.stateNode,
        i,
        o
      ), Au(t, o), Gt !== 4 && (Gt = 2)), !1;
    var s = Error(u(520), { cause: i });
    if (s = Xe(s, n), Xl === null ? Xl = [s] : Xl.push(s), Gt !== 4 && (Gt = 2), e === null) return !0;
    i = Xe(i, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = o & -o, n.lanes |= t, t = Ju(n.stateNode, i, t), Au(n, t), !1;
        case 1:
          if (e = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (mi === null || !mi.has(s))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = im(o), am(
              o,
              t,
              n,
              i
            ), Au(n, o), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Fu = Error(u(461)), Qt = !1;
  function Jt(t, e, n, i) {
    e.child = t === null ? rp(e, null, n, i) : Xi(
      e,
      t.child,
      n,
      i
    );
  }
  function lm(t, e, n, i, o) {
    n = n.render;
    var s = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var m in i)
        m !== "ref" && (f[m] = i[m]);
    } else f = i;
    return Li(e), i = Ru(
      t,
      e,
      n,
      f,
      s,
      o
    ), m = ju(), t !== null && !Qt ? (Vu(t, e, o), Xn(t, e, o)) : (ct && m && Ko(e), e.flags |= 1, Jt(t, e, i, o), e.child);
  }
  function om(t, e, n, i, o) {
    if (t === null) {
      var s = n.type;
      return typeof s == "function" && !fu(s) && s.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = s, sm(
        t,
        e,
        s,
        i,
        o
      )) : (t = Zo(
        n.type,
        null,
        i,
        e,
        e.mode,
        o
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (s = t.child, !ac(t, o)) {
      var f = s.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Tl, n(f, i) && t.ref === e.ref)
        return Xn(t, e, o);
    }
    return e.flags |= 1, t = kn(s, i), t.ref = e.ref, t.return = e, e.child = t;
  }
  function sm(t, e, n, i, o) {
    if (t !== null) {
      var s = t.memoizedProps;
      if (Tl(s, i) && t.ref === e.ref)
        if (Qt = !1, e.pendingProps = i = s, ac(t, o))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else
          return e.lanes = t.lanes, Xn(t, e, o);
    }
    return Iu(
      t,
      e,
      n,
      i,
      o
    );
  }
  function rm(t, e, n, i) {
    var o = i.children, s = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | n : n, t !== null) {
          for (i = e.child = t.child, o = 0; i !== null; )
            o = o | i.lanes | i.childLanes, i = i.sibling;
          i = o & ~s;
        } else i = 0, e.child = null;
        return um(
          t,
          e,
          s,
          n,
          i
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Wo(
          e,
          s !== null ? s.cachePool : null
        ), s !== null ? fp(e, s) : Mu(), dp(e);
      else
        return i = e.lanes = 536870912, um(
          t,
          e,
          s !== null ? s.baseLanes | n : n,
          n,
          i
        );
    } else
      s !== null ? (Wo(e, s.cachePool), fp(e, s), ci(), e.memoizedState = null) : (t !== null && Wo(e, null), Mu(), ci());
    return Jt(t, e, o, n), e.child;
  }
  function Bl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function um(t, e, n, i, o) {
    var s = Su();
    return s = s === null ? null : { parent: Xt._currentValue, pool: s }, e.memoizedState = {
      baseLanes: n,
      cachePool: s
    }, t !== null && Wo(e, null), Mu(), dp(e), t !== null && ki(t, e, i, !0), e.childLanes = o, null;
  }
  function ms(t, e) {
    return e = gs(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function cm(t, e, n) {
    return Xi(e, t.child, null, n), t = ms(e, e.pendingProps), t.flags |= 2, _e(e), e.memoizedState = null, t;
  }
  function Cb(t, e, n) {
    var i = e.pendingProps, o = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ct) {
        if (i.mode === "hidden")
          return t = ms(e, i), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Bl(null, t);
        if (Du(e), (t = Ut) ? (t = Ug(
          t,
          Ke
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ti !== null ? { id: gn, overflow: yn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Kh(t), n.return = e, e.child = n, te = e, Ut = null)) : t = null, t === null) throw ni(e);
        return e.lanes = 536870912, null;
      }
      return ms(e, i);
    }
    var s = t.memoizedState;
    if (s !== null) {
      var f = s.dehydrated;
      if (Du(e), o)
        if (e.flags & 256)
          e.flags &= -257, e = cm(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(u(558));
      else if (Qt || ki(t, e, n, !1), o = (n & t.childLanes) !== 0, Qt || o) {
        if (ri.current === null) {
          if (i = jt, i !== null && (f = Fd(i, n), f !== 0 && f !== s.retryLane))
            throw s.retryLane = f, Vi(t, f), Me(i, t, f), Fu;
          _s();
        }
        e = cm(
          t,
          e,
          n
        );
      } else
        t = s.treeContext, Ut = Je(f.nextSibling), te = e, ct = !0, ei = null, Ke = !1, t !== null && Fh(e, t), e = ms(e, i), e.flags |= 134221824;
      return e;
    }
    return t = kn(t.child, {
      mode: i.mode,
      children: i.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Da(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Iu(t, e, n, i, o) {
    return Li(e), n = Ru(
      t,
      e,
      n,
      i,
      void 0,
      o
    ), i = ju(), t !== null && !Qt ? (Vu(t, e, o), Xn(t, e, o)) : (ct && i && Ko(e), e.flags |= 1, Jt(t, e, n, o), e.child);
  }
  function fm(t, e, n, i, o, s) {
    return Li(e), e.updateQueue = null, n = pp(
      e,
      i,
      n,
      o
    ), hp(t), i = ju(), t !== null && !Qt ? (Vu(t, e, s), Xn(t, e, s)) : (ct && i && Ko(e), e.flags |= 1, Jt(t, e, n, s), e.child);
  }
  function dm(t, e, n, i, o) {
    if (Li(e), e.stateNode === null) {
      var s = xa, f = n.contextType;
      typeof f == "object" && f !== null && (s = oe(f)), s = new n(i, s), e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Pu, e.stateNode = s, s._reactInternals = e, s = e.stateNode, s.props = i, s.state = e.memoizedState, s.refs = {}, wu(e), f = n.contextType, s.context = typeof f == "object" && f !== null ? oe(f) : xa, s.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Ku(
        e,
        n,
        f,
        i
      ), s.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (f = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), f !== s.state && Pu.enqueueReplaceState(s, s.state, null), Rl(e, i, s, o), Ol(), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !0;
    } else if (t === null) {
      s = e.stateNode;
      var m = e.memoizedProps, S = Qi(n, m);
      s.props = S;
      var M = s.context, N = n.contextType;
      f = xa, typeof N == "object" && N !== null && (f = oe(N));
      var B = n.getDerivedStateFromProps;
      N = typeof B == "function" || typeof s.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, N || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m || M !== f) && Wp(
        e,
        s,
        i,
        f
      ), li = !1;
      var A = e.memoizedState;
      s.state = A, Rl(e, i, s, o), Ol(), M = e.memoizedState, m || A !== M || li ? (typeof B == "function" && (Ku(
        e,
        n,
        B,
        i
      ), M = e.memoizedState), (S = li || Ip(
        e,
        n,
        S,
        i,
        A,
        M,
        f
      )) ? (N || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = M), s.props = i, s.state = M, s.context = f, i = S) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !1);
    } else {
      s = e.stateNode, Eu(t, e), f = e.memoizedProps, N = Qi(n, f), s.props = N, B = e.pendingProps, A = s.context, M = n.contextType, S = xa, typeof M == "object" && M !== null && (S = oe(M)), m = n.getDerivedStateFromProps, (M = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (f !== B || A !== S) && Wp(
        e,
        s,
        i,
        S
      ), li = !1, A = e.memoizedState, s.state = A, Rl(e, i, s, o), Ol();
      var D = e.memoizedState;
      f !== B || A !== D || li || t !== null && t.dependencies !== null && Fo(t.dependencies) ? (typeof m == "function" && (Ku(
        e,
        n,
        m,
        i
      ), D = e.memoizedState), (N = li || Ip(
        e,
        n,
        N,
        i,
        A,
        D,
        S
      ) || t !== null && t.dependencies !== null && Fo(t.dependencies)) ? (M || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, D, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        i,
        D,
        S
      )), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = D), s.props = i, s.state = D, s.context = S, i = N) : (typeof s.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), i = !1);
    }
    return s = i, Da(t, e), i = (e.flags & 128) !== 0, s || i ? (s = e.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : s.render(), e.flags |= 1, t !== null && i ? (e.child = Xi(
      e,
      t.child,
      null,
      o
    ), e.child = Xi(
      e,
      null,
      n,
      o
    )) : Jt(t, e, n, o), e.memoizedState = s.state, t = e.child) : t = Xn(
      t,
      e,
      o
    ), t;
  }
  function hm(t, e, n, i) {
    return Ui(), e.flags |= 256, Jt(t, e, n, i), e.child;
  }
  var Wu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $u(t) {
    return { baseLanes: t, cachePool: np() };
  }
  function tc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= ke), t;
  }
  function pm(t, e, n) {
    var i = e.pendingProps, o = !1, s = (e.flags & 128) !== 0, f;
    if ((f = s) || (f = t !== null && t.memoizedState === null ? !1 : (re.current & 2) !== 0), f && (o = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ct) {
        if (o ? ui(e) : ci(), (t = Ut) ? (t = Ug(
          t,
          Ke
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: ti !== null ? { id: gn, overflow: yn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Kh(t), n.return = e, e.child = n, te = e, Ut = null)) : t = null, t === null) throw ni(e);
        return $c(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return s = i.children, i = i.fallback, o ? (ci(), o = e.mode, s = gs(
        { mode: "hidden", children: s },
        o
      ), i = _i(
        i,
        o,
        n,
        null
      ), s.return = e, i.return = e, s.sibling = i, e.child = s, i = e.child, i.memoizedState = $u(n), i.childLanes = tc(
        t,
        f,
        n
      ), e.memoizedState = Wu, Bl(null, i)) : (ui(e), ec(e, s));
    }
    var m = t.memoizedState;
    if (m !== null) {
      var S = m.dehydrated;
      if (S !== null)
        return Db(
          t,
          e,
          s,
          f,
          i,
          S,
          m,
          n
        );
    }
    return o ? (ci(), o = i.fallback, s = e.mode, m = t.child, S = m.sibling, i = kn(m, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = m.subtreeFlags & 1206910976, S !== null ? o = kn(S, o) : (o = _i(
      o,
      s,
      n,
      null
    ), o.flags |= 2), o.return = e, i.return = e, i.sibling = o, e.child = i, Bl(null, i), i = e.child, o = t.child.memoizedState, o === null ? o = $u(n) : (s = o.cachePool, s !== null ? (m = Xt._currentValue, s = s.parent !== m ? { parent: m, pool: m } : s) : s = np(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: s
    }), i.memoizedState = o, i.childLanes = tc(
      t,
      f,
      n
    ), e.memoizedState = Wu, Bl(t.child, i)) : (ui(e), n = t.child, t = n.sibling, n = kn(n, {
      mode: "visible",
      children: i.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function ec(t, e) {
    return e = gs(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function gs(t, e) {
    return t = we(22, t, null, e), t.lanes = 0, t;
  }
  function ys(t, e, n) {
    return Xi(e, t.child, null, n), t = ec(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Db(t, e, n, i, o, s, f, m) {
    if (n)
      return e.flags & 256 ? (ui(e), e.flags &= -257, ys(
        t,
        e,
        m
      )) : e.memoizedState !== null ? (ci(), e.child = t.child, e.flags |= 128, null) : (ci(), s = o.fallback, f = e.mode, o = gs(
        { mode: "visible", children: o.children },
        f
      ), s = _i(
        s,
        f,
        m,
        null
      ), s.flags |= 2, o.return = e, s.return = e, o.sibling = s, e.child = o, Xi(e, t.child, null, m), o = e.child, o.memoizedState = $u(m), o.childLanes = tc(
        t,
        i,
        m
      ), e.memoizedState = Wu, Bl(null, o));
    if (ui(e), $c(s)) {
      if (i = s.nextSibling && s.nextSibling.dataset, i) var S = i.dgst;
      return i = S, i !== "" && (o = Error(u(419)), o.stack = "", o.digest = i, Al({ value: o, source: null, stack: null })), ys(
        t,
        e,
        m
      );
    }
    if (Qt || ki(t, e, m, !1), i = (m & t.childLanes) !== 0, Qt || i) {
      if (ri.current !== null)
        return ys(
          t,
          e,
          m
        );
      if (i = jt, i !== null && (o = Fd(
        i,
        m
      ), o !== 0 && o !== f.retryLane))
        throw f.retryLane = o, Vi(t, o), Me(i, t, o), Fu;
      return Wc(s) || _s(), ys(
        t,
        e,
        m
      );
    }
    return Wc(s) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Ut = Je(s.nextSibling), te = e, ct = !0, ei = null, Ke = !1, t !== null && Fh(e, t), e = ec(
      e,
      o.children
    ), e.flags |= 134221824, e);
  }
  function mm(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Jo(t.return, e, n);
  }
  function gm(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && as(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function vs(t, e, n, i, o, s) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: o,
      treeForkCount: s
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = n, f.tailMode = o, f.treeForkCount = s);
  }
  function nc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function ic(t, e, n) {
    var i = e.pendingProps, o = i.revealOrder, s = i.tail;
    i = i.children;
    var f = re.current;
    if (e.flags & 128)
      return jl(e, f), null;
    var m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, jl(e, f), o === "backwards" && t !== null ? (nc(t), Jt(t, e, i, n), nc(t)) : Jt(t, e, i, n), i = ct ? El : 0, !m && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && mm(t, n, e);
        else if (t.tag === 19)
          mm(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (o) {
      case "backwards":
        n = gm(e.child), n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null, nc(e)), vs(
          e,
          !0,
          o,
          null,
          s,
          i
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, o = e.child, e.child = null; o !== null; ) {
          if (t = o.alternate, t !== null && as(t) === null) {
            e.child = o;
            break;
          }
          t = o.sibling, o.sibling = n, n = o, o = t;
        }
        vs(
          e,
          !0,
          n,
          null,
          s,
          i
        );
        break;
      case "together":
        vs(
          e,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = gm(e.child), n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), vs(
          e,
          !1,
          o,
          n,
          s,
          i
        );
    }
    return e.child;
  }
  function ym(t, e, n) {
    var i = e.pendingProps;
    return ii(e, e.type, i.value), Jt(t, e, i.children, n), e.child;
  }
  function Xn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), pi |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (ki(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, n = kn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = kn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Fo(t)));
  }
  function Nb(t, e, n) {
    switch (e.tag) {
      case 3:
        wo(e, e.stateNode.containerInfo), ii(e, Xt, t.memoizedState.cache), Ui();
        break;
      case 27:
      case 5:
        Or(e);
        break;
      case 4:
        wo(e, e.stateNode.containerInfo);
        break;
      case 10:
        ii(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Du(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null) {
          if (i.dehydrated !== null)
            return ui(e), e.flags |= 128, null;
          i = ki(
            t,
            e,
            n,
            !1
          );
          var o = e.child.childLanes;
          return i || (n & o) !== 0 ? pm(t, e, n) : (ui(e), t = Xn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ui(e);
        break;
      case 19:
        if (e.flags & 128)
          return ic(
            t,
            e,
            n
          );
        if (o = (t.flags & 128) !== 0, i = (n & e.childLanes) !== 0, i || (ki(
          t,
          e,
          n,
          !1
        ), i = (n & e.childLanes) !== 0), o) {
          if (i)
            return ic(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), jl(e, re.current), i) break;
        return null;
      case 22:
        return e.lanes = 0, rm(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        ii(e, Xt, t.memoizedState.cache);
    }
    return Xn(t, e, n);
  }
  function vm(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Qt = !0;
      else {
        if (!ac(t, n) && (e.flags & 128) === 0)
          return Qt = !1, Nb(
            t,
            e,
            n
          );
        Qt = (t.flags & 131072) !== 0;
      }
    else
      Qt = !1, ct && (e.flags & 1048576) !== 0 && Jh(e, El, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (t = Gi(e.elementType), e.type = t, typeof t == "function")
            fu(t) ? (i = Qi(t, i), e.tag = 1, e = dm(
              null,
              e,
              t,
              i,
              n
            )) : (e.tag = 0, e = Iu(
              null,
              e,
              t,
              i,
              n
            ));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === q) {
                e.tag = 11, e = lm(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (o === ut) {
                e.tag = 14, e = om(
                  null,
                  e,
                  t,
                  i,
                  n
                );
                break t;
              } else if (o === Ot) {
                e.tag = 10, e.type = t, e = ym(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = bt(t) || t, Error(u(306, e, ""));
          }
        }
        return e;
      case 0:
        return Iu(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return i = e.type, o = Qi(
          i,
          e.pendingProps
        ), dm(
          t,
          e,
          i,
          o,
          n
        );
      case 3:
        t: {
          if (wo(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(u(387));
          i = e.pendingProps;
          var s = e.memoizedState;
          o = s.element, Eu(t, e), Rl(e, i, null, n);
          var f = e.memoizedState;
          if (i = f.cache, ii(e, Xt, i), i !== s.cache && vu(
            e,
            [Xt],
            n,
            !0
          ), Ol(), i = f.element, s.isDehydrated)
            if (s = {
              element: i,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
              e = hm(
                t,
                e,
                i,
                n
              );
              break t;
            } else if (i !== o) {
              o = Xe(
                Error(u(424)),
                e
              ), Al(o), e = hm(
                t,
                e,
                i,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Ut = Je(t.firstChild), te = e, ct = !0, ei = null, Ke = !0, n = rp(
                e,
                null,
                i,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (Ui(), i === o) {
              e = Xn(
                t,
                e,
                n
              );
              break t;
            }
            Jt(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Da(t, e), t === null ? (n = Yg(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : ct || (e.stateNode = Tg(
          e.type,
          e.pendingProps,
          Jn.current,
          e
        )) : e.memoizedState = Yg(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Or(e), t === null && ct && (i = e.stateNode = Lg(
          e.type,
          e.pendingProps,
          Jn.current
        ), te = e, Ke = !0, o = Ut, vi(e.type) ? (tf = o, Ut = Je(i.firstChild)) : Ut = o), Jt(
          t,
          e,
          e.pendingProps.children,
          n
        ), Da(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ct && ((o = i = Ut) && (i = E2(
          i,
          e.type,
          e.pendingProps,
          Ke
        ), i !== null ? (e.stateNode = i, te = e, Ut = Je(i.firstChild), Ke = !1, o = !0) : o = !1), o || ni(e)), Or(e), o = e.type, s = e.pendingProps, f = t !== null ? t.memoizedProps : null, i = s.children, Zc(o, s) ? i = null : f !== null && Zc(o, f) && (e.flags |= 32), e.memoizedState !== null && (o = Ru(
          t,
          e,
          xb,
          null,
          null,
          n
        ), Ka._currentValue = o), Da(t, e), Jt(t, e, i, n), e.child;
      case 6:
        return t === null && ct && ((t = n = Ut) && (n = A2(
          n,
          e.pendingProps,
          Ke
        ), n !== null ? (e.stateNode = n, te = e, Ut = null, t = !0) : t = !1), t || ni(e)), null;
      case 13:
        return pm(t, e, n);
      case 4:
        return wo(
          e,
          e.stateNode.containerInfo
        ), i = e.pendingProps, t === null ? e.child = Xi(
          e,
          null,
          i,
          n
        ) : Jt(t, e, i, n), e.child;
      case 11:
        return lm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return i = e.pendingProps, Da(t, e), Jt(t, e, i, n), e.child;
      case 8:
        return Jt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return Jt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return ym(t, e, n);
      case 9:
        return o = e.type._context, i = e.pendingProps.children, Li(e), o = oe(o), i = i(o), e.flags |= 1, Jt(t, e, i, n), e.child;
      case 14:
        return om(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return sm(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return ic(t, e, n);
      case 31:
        return Cb(t, e, n);
      case 22:
        return rm(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Li(e), i = oe(Xt), t === null ? (o = Su(), o === null && (o = jt, s = xu(), o.pooledCache = s, s.refCount++, s !== null && (o.pooledCacheLanes |= n), o = s), e.memoizedState = { parent: i, cache: o }, wu(e), ii(e, Xt, o)) : ((t.lanes & n) !== 0 && (Eu(t, e), Rl(e, null, null, n), Ol()), o = t.memoizedState, s = e.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), ii(e, Xt, i)) : (i = s.cache, ii(e, Xt, i), i !== o.cache && vu(
          e,
          [Xt],
          n,
          !0
        ))), Jt(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), i = e.pendingProps, i.name != null && i.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : ct && Ko(e), t !== null && t.memoizedProps.name !== i.name ? e.flags |= 4194816 : Da(t, e), Jt(t, e, i.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function Zn(t) {
    t.flags |= 4;
  }
  function lc(t, e, n, i, o) {
    var s;
    if ((s = (t.mode & 32) !== 0) && (s = n === null ? Kg(e, i) : Kg(e, i) && (i.src !== n.src || i.srcSet !== n.srcSet)), s) {
      if (t.flags |= 16777216, (o & 335544128) === o)
        if (t.stateNode.complete) t.flags |= 8192;
        else if ($m()) t.flags |= 8192;
        else
          throw Yi = ts, Tu;
    } else t.flags &= -16777217;
  }
  function xm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Pg(e))
      if ($m()) t.flags |= 8192;
      else
        throw Yi = ts, Tu;
  }
  function xs(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Kd() : 536870912, t.lanes |= e, Va |= e);
  }
  function kl(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, i = 0;
    if (e)
      for (var o = t.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 1206910976, i |= o.flags & 1206910976, o.return = t, o = o.sibling;
    else
      for (o = t.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e;
  }
  function Ob(t, e, n) {
    var i = e.pendingProps;
    switch (pu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Bt(e), null;
      case 1:
        return Bt(e), null;
      case 3:
        return n = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), qn(Xt), oa(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ta(e) ? Zn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, gu())), Bt(e), null;
      case 26:
        var o = e.type, s = e.memoizedState;
        return t === null ? (Zn(e), s !== null ? (Bt(e), xm(e, s)) : (Bt(e), lc(
          e,
          o,
          null,
          i,
          n
        ))) : s ? s !== t.memoizedState ? (Zn(e), Bt(e), xm(e, s)) : (Bt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && Zn(e), Bt(e), lc(
          e,
          o,
          t,
          i,
          n
        )), null;
      case 27:
        if (Eo(e), n = Jn.current, o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Zn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return Bt(e), e.subtreeFlags &= -33554433, null;
          }
          t = pn.current, Ta(e) ? Ih(e) : (t = Lg(o, i, n), e.stateNode = t, Zn(e));
        }
        return Bt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Eo(e), o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== i && Zn(e);
        else {
          if (!i) {
            if (e.stateNode === null)
              throw Error(u(166));
            return Bt(e), e.subtreeFlags &= -33554433, null;
          }
          if (s = pn.current, Ta(e))
            Ih(e);
          else {
            var f = Jl(
              Jn.current
            );
            switch (s) {
              case 1:
                s = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                s = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    s = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    s = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    s = f.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof i.is == "string" ? f.createElement("select", {
                      is: i.is
                    }) : f.createElement("select"), i.multiple ? s.multiple = !0 : i.size && (s.size = i.size);
                    break;
                  default:
                    s = typeof i.is == "string" ? f.createElement(o, { is: i.is }) : f.createElement(o);
                }
            }
            s[le] = e, s[Te] = i;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                s.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = s;
            t: switch (ce(s, o, i), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && Zn(e);
          }
        }
        return Bt(e), e.subtreeFlags &= -33554433, lc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== i && Zn(e);
        else {
          if (typeof i != "string" && e.stateNode === null)
            throw Error(u(166));
          if (t = Jn.current, Ta(e)) {
            if (t = e.stateNode, n = e.memoizedProps, i = null, o = te, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            t[le] = e, t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || vg(t.nodeValue, n)), t || ni(e, !0);
          } else
            t = Jl(t).createTextNode(
              i
            ), t[le] = e, e.stateNode = t;
        }
        return Bt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (i = Ta(e), n !== null) {
            if (t === null) {
              if (!i) throw Error(u(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(u(557));
              t[le] = e;
            } else
              Ui(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Bt(e), t = !1;
          } else
            n = gu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (_e(e), e) : (_e(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Bt(e), null;
      case 13:
        if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = Ta(e), i !== null && i.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(u(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[le] = e;
            } else
              Ui(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Bt(e), o = !1;
          } else
            o = gu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (_e(e), e) : (_e(e), null);
        }
        return _e(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = i !== null, t = t !== null && t.memoizedState !== null, n && (i = e.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), s = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (s = i.memoizedState.cachePool.pool), s !== o && (i.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), xs(e, e.updateQueue), Bt(e), null);
      case 4:
        return oa(), t === null && Hc(e.stateNode.containerInfo), e.flags |= 67108864, Bt(e), null;
      case 10:
        return qn(e.type), Bt(e), null;
      case 19:
        if (Nu(e), i = e.memoizedState, i === null) return Bt(e), null;
        if (o = (e.flags & 128) !== 0, s = i.rendering, s === null)
          if (o) kl(i, !1);
          else {
            if (Gt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (s = as(t), s !== null) {
                  for (e.flags |= 128, kl(i, !1), t = s.updateQueue, e.updateQueue = t, xs(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Qh(n, t), n = n.sibling;
                  return jl(
                    e,
                    re.current & 1 | 2
                  ), ct && Ln(e, i.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            i.tail !== null && Ne() > Os && (e.flags |= 128, o = !0, kl(i, !1), e.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = as(s), t !== null) {
              if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, xs(e, t), kl(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !s.alternate && !ct)
                return Bt(e), null;
            } else
              2 * Ne() - i.renderingStartTime > Os && n !== 536870912 && (e.flags |= 128, o = !0, kl(i, !1), e.lanes = 4194304);
          i.isBackwards ? (s.sibling = e.child, e.child = s) : (t = i.last, t !== null ? t.sibling = s : e.child = s, i.last = s);
        }
        if (i.tail !== null) {
          t = i.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ne(), t.sibling = null, s = re.current, s = o ? s & 1 | 2 : s & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || ct ? jl(e, s) : (n = s, _t(se, e), _t(re, n), me === null && (me = e)), ct && Ln(e, i.treeForkCount), t;
        }
        return Bt(e), null;
      case 22:
      case 23:
        return _e(e), Cu(), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Bt(e), n = e.updateQueue, n !== null && xs(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== n && (e.flags |= 2048), t !== null && ae(qi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), qn(Xt), Bt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Bt(e), null;
    }
    throw Error(u(156, e.tag));
  }
  function Rb(t, e) {
    switch (pu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return qn(Xt), oa(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Eo(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (_e(e), e.alternate === null)
            throw Error(u(340));
          Ui();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (_e(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(u(340));
          Ui();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Nu(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return oa(), null;
      case 10:
        return qn(e.type), null;
      case 22:
      case 23:
        return _e(e), Cu(), t !== null && ae(qi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return qn(Xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bm(t, e) {
    switch (pu(e), e.tag) {
      case 3:
        qn(Xt), oa();
        break;
      case 26:
      case 27:
      case 5:
        Eo(e);
        break;
      case 4:
        oa();
        break;
      case 31:
        e.memoizedState !== null && _e(e);
        break;
      case 13:
        _e(e);
        break;
      case 19:
        Nu(e);
        break;
      case 10:
        qn(e.type);
        break;
      case 22:
      case 23:
        _e(e), Cu(), t !== null && ae(qi);
        break;
      case 24:
        qn(Xt);
    }
  }
  function Ll(t, e) {
    try {
      var n = e.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        n = o;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var s = n.create, f = n.inst;
            i = s(), f.destroy = i;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (m) {
      Mt(e, e.return, m);
    }
  }
  function fi(t, e, n) {
    try {
      var i = e.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        i = s;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, o = e;
              var S = n, M = m;
              try {
                M();
              } catch (N) {
                Mt(
                  o,
                  S,
                  N
                );
              }
            }
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (N) {
      Mt(e, e.return, N);
    }
  }
  function Sm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        cp(e, n);
      } catch (i) {
        Mt(t, t.return, i);
      }
    }
  }
  function Tm(t, e, n) {
    n.props = Qi(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Mt(t, e, i);
    }
  }
  function vn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            var o = t.stateNode, s = Un(t.memoizedProps, o);
            (o.ref === null || o.ref.name !== s) && (o.ref = Dg(s)), i = o.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new He(t);
              g(
                t.child,
                !1,
                T2,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(i) : n.current = i;
      }
    } catch (m) {
      Mt(t, e, m);
    }
  }
  function ue(t, e) {
    var n = t.ref, i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Mt(t, e, o);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Mt(t, e, o);
        }
      else n.current = null;
  }
  function bs(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        _g(
          t.stateNode,
          e[n]
        );
  }
  function wm(t) {
    for (var e = t.return; e !== null && (sc(e) && _g(t.stateNode, e.stateNode), !oc(e)); )
      e = e.return;
  }
  function Hl(t) {
    for (var e = t.return; e !== null && (sc(e) && w2(t.stateNode, e.stateNode), !oc(e)); )
      e = e.return;
  }
  function oc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function sc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function rc(t) {
    var e = t.type, n = t.memoizedProps, i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  function uc(t, e, n) {
    try {
      var i = t.stateNode;
      a2(i, t.type, n, e), i[Te] = e;
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  function Em(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && vi(t.type) || t.tag === 4;
  }
  function cc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Em(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && vi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fc(t, e, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6)
      o = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(o, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(o), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = mn)), bs(t, i), St = !0;
    else if (o !== 4 && (o === 27 && (bs(t, i), i = null, vi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (fc(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        fc(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function Ss(t, e, n, i) {
    var o = t.tag;
    if (o === 5 || o === 6)
      o = t.stateNode, e ? n.insertBefore(o, e) : n.appendChild(o), bs(t, i), St = !0;
    else if (o !== 4 && (o === 27 && (bs(t, i), i = null, vi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Ss(
        t,
        e,
        n,
        i
      ), t = t.sibling; t !== null; )
        Ss(
          t,
          e,
          n,
          i
        ), t = t.sibling;
  }
  function Am(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var i = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      ce(e, i, n), e[le] = t, e[Te] = n;
    } catch (s) {
      Mt(t, t.return, s);
    }
  }
  var Ts = !1, Ue = null;
  function zm(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Ts = !0);
  }
  var xn = null;
  function Mm() {
    var t = xn;
    return xn = null, t;
  }
  var Ee = 0;
  function Na(t, e, n, i, o) {
    return Ee = 0, Cm(
      t.child,
      e,
      n,
      i,
      o
    );
  }
  function Cm(t, e, n, i, o) {
    for (var s = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (i !== null) {
          var m = Pc(f);
          i.push(m), m.view && (s = !0);
        } else
          s || Pc(f).view && (s = !0);
        Ts = !0, Mg(
          f,
          Ee === 0 ? e : e + "_" + Ee,
          n
        ), Ee++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o || Cm(
        t.child,
        e,
        n,
        i,
        o
      ) && (s = !0));
      t = t.sibling;
    }
    return s;
  }
  function bn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Cg(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || bn(
        t.child,
        e
      )), t = t.sibling;
  }
  function ws(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (ws(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(u(544));
          var n = e.name;
          e = Bn(e.default, e.share), e !== "none" && (Na(
            t,
            n,
            e,
            null,
            !1
          ) || bn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function dc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, i = t.memoizedProps, o = Un(i, n), s = Bn(
        i.default,
        n.paired ? i.share : i.enter
      );
      s !== "none" ? Na(t, o, s, null, !1) ? (ws(t), n.paired || e || ka(t, i.onEnter)) : bn(t.child, !1) : ws(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        dc(t, e), t = t.sibling;
    else ws(t);
  }
  function hc(t) {
    if (Ue !== null && Ue.size !== 0) {
      var e = Ue;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, i = n.name;
              if (i != null && i !== "auto") {
                var o = e.get(i);
                if (o !== void 0) {
                  var s = Bn(
                    n.default,
                    n.share
                  );
                  if (s !== "none" && (Na(
                    t,
                    i,
                    s,
                    null,
                    !1
                  ) ? (s = t.stateNode, o.paired = s, s.paired = o, ka(t, n.onShare)) : bn(t.child, !1)), e.delete(i), e.size === 0) break;
                }
              }
            }
            hc(t);
          }
          t = t.sibling;
        }
    }
  }
  function pc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Un(e, t.stateNode), i = Ue !== null ? Ue.get(n) : void 0, o = Bn(
        e.default,
        i !== void 0 ? e.share : e.exit
      );
      o !== "none" && (Na(t, n, o, null, !1) ? i !== void 0 ? (o = t.stateNode, i.paired = o, o.paired = i, Ue.delete(n), ka(t, e.onShare)) : ka(t, e.onExit) : bn(t.child, !1)), Ue !== null && hc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        pc(t), t = t.sibling;
    else
      Ue !== null && hc(t);
  }
  function Dm(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Un(e, t.stateNode);
        e = Bn(e.default, e.update), t.flags &= -5, e !== "none" && Na(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Dm(t);
      t = t.sibling;
    }
  }
  function mc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, bn(t.child, !1));
          }
          mc(t);
        }
        t = t.sibling;
      }
  }
  function Es(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, bn(t.child, !1), mc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Es(t), t = t.sibling;
    else mc(t);
  }
  function Nm(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? bn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Nm(t), t = t.sibling;
  }
  function gc(t, e, n, i, o, s, f) {
    for (var m = !1; e !== null; ) {
      if (e.tag === 5) {
        var S = e.stateNode;
        if (s !== null && Ee < s.length) {
          var M = s[Ee], N = Pc(S);
          (M.view || N.view) && (m = !0);
          var B;
          if (B = (t.flags & 4) === 0)
            if (N.clip) B = !0;
            else {
              B = M.rect;
              var A = N.rect;
              B = B.y !== A.y || B.x !== A.x || B.height !== A.height || B.width !== A.width;
            }
          B && (t.flags |= 4), N.abs ? N = !M.abs : (M = M.rect, N = N.rect, N = M.height !== N.height || M.width !== N.width), N && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Mg(
          S,
          Ee === 0 ? n : n + "_" + Ee,
          o
        ), m && (t.flags & 4) !== 0 || (xn === null && (xn = []), xn.push(
          S,
          Ee === 0 ? i : i + "_" + Ee,
          e.memoizedProps
        )), Ee++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : gc(
        t,
        e.child,
        n,
        i,
        o,
        s,
        f
      ) && (m = !0));
      e = e.sibling;
    }
    return m;
  }
  function Om(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, i = t.stateNode, o = Un(n, i), s = Bn(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, i = t;
        var m = t.child;
        Ee = 0, o = gc(
          i,
          m,
          o,
          o,
          s,
          f,
          !1
        ), (t.flags & 4) !== 0 && o && ka(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Om(t);
      t = t.sibling;
    }
  }
  var ee = !1, At = !1, Sn = !1, yc = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, ne = null, Tn = !1, ql = !1, As = !1, vc = !1;
  function jb(t, e, n) {
    if (t = t.containerInfo, Yc = Pa, t = Uh(t), au(t)) {
      if ("selectionStart" in t)
        var i = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          i = (i = t.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var s = o.anchorOffset, f = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, f.nodeType;
            } catch {
              i = null;
              break t;
            }
            var m = 0, S = -1, M = -1, N = 0, B = 0, A = t, D = null;
            e: for (; ; ) {
              for (var G; A !== i || s !== 0 && A.nodeType !== 3 || (S = m + s), A !== f || o !== 0 && A.nodeType !== 3 || (M = m + o), A.nodeType === 3 && (m += A.nodeValue.length), (G = A.firstChild) !== null; )
                D = A, A = G;
              for (; ; ) {
                if (A === t) break e;
                if (D === i && ++N === s && (S = m), D === f && ++B === o && (M = m), (G = A.nextSibling) !== null) break;
                A = D, D = A.parentNode;
              }
              A = G;
            }
            i = S === -1 || M === -1 ? null : { start: S, end: M };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Xc = { focusedElem: t, selectionRange: i }, Pa = !1, n = (n & 335544064) === n, ne = e, e = n ? 9270 : 1024; ne !== null; ) {
      if (t = ne, n && (i = t.deletions, i !== null))
        for (s = 0; s < i.length; s++)
          n && pc(i[s]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && zm(t), zs(n);
      else {
        if (t.tag === 22) {
          if (i = t.alternate, t.memoizedState !== null) {
            i !== null && i.memoizedState === null && n && pc(i), zs(n);
            continue;
          } else if (i !== null && i.memoizedState !== null) {
            n && zm(t), zs(n);
            continue;
          }
        }
        i = t.child, (t.subtreeFlags & e) !== 0 && i !== null ? (i.return = t, ne = i) : (n && Dm(t), zs(n));
      }
    }
    Ue = null;
  }
  function zs(t) {
    for (; ne !== null; ) {
      var e = ne, n = t, i = e.alternate, o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((o & 1024) !== 0 && i !== null) {
            n = void 0, o = i.memoizedProps, i = i.memoizedState;
            var s = e.stateNode;
            try {
              var f = Qi(
                e.type,
                o
              );
              n = s.getSnapshotBeforeUpdate(
                f,
                i
              ), s.__reactInternalSnapshotBeforeUpdate = n;
            } catch (m) {
              Mt(e, e.return, m);
            }
          }
          break;
        case 3:
          if ((o & 1024) !== 0) {
            if (i = e.stateNode.containerInfo, n = i.nodeType, n === 9)
              Ic(i);
            else if (n === 1)
              switch (i.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Ic(i);
                  break;
                default:
                  i.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && i !== null && (n = Un(
            i.memoizedProps,
            i.stateNode
          ), o = e.memoizedProps, o = Bn(o.default, o.update), o !== "none" && Na(
            i,
            n,
            o,
            i.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((o & 1024) !== 0) throw Error(u(163));
      }
      if (i = e.sibling, i !== null) {
        i.return = e.return, ne = i;
        break;
      }
      ne = e.return;
    }
  }
  function jm(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        wn(t, n), i & 4 && Ll(5, n);
        break;
      case 1:
        if (wn(t, n), i & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Mt(n, n.return, f);
            }
          else {
            var o = Qi(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                o,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Mt(
                n,
                n.return,
                f
              );
            }
          }
        i & 64 && Sm(n), i & 512 && vn(n, n.return);
        break;
      case 3:
        if (wn(t, n), i & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            cp(t, e);
          } catch (f) {
            Mt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Am(n);
      case 26:
      case 5:
        wn(t, n), e === null && i & 4 && rc(n), i & 512 && vn(n, n.return);
        break;
      case 12:
        wn(t, n);
        break;
      case 31:
        wn(t, n), i & 4 && Bm(t, n);
        break;
      case 13:
        wn(t, n), i & 4 && km(t, n), i & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Zb.bind(
          null,
          n
        ), z2(t, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || ee, !i) {
          var s = e !== null && e.memoizedState !== null || At;
          e = ee, o = At, ee = i, (At = s) && !o ? (i = 2, (n.subtreeFlags & 8772) !== 0 && (i |= 1), an(
            t,
            n,
            i
          )) : wn(t, n), ee = e, At = o;
        }
        break;
      case 30:
        wn(t, n), i & 512 && vn(n, n.return);
        break;
      case 7:
        i & 512 && vn(n, n.return);
      default:
        wn(t, n);
    }
  }
  function xc(t, e) {
    for (t = t.child; t !== null; )
      Vm(t, e), t = t.sibling;
  }
  function Vm(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var i = n.style;
            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
          } else {
            var o = t.stateNode, s = t.memoizedProps.style, f = s != null && s.hasOwnProperty("display") ? s.display : null;
            o.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (S) {
          Mt(t, t.return, S);
        }
        bc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, St = !0;
        } catch (S) {
          Mt(t, t.return, S);
        }
        break;
      case 18:
        try {
          var m = t.stateNode;
          e ? zg(m, !0) : zg(t.stateNode, !1);
        } catch (S) {
          Mt(t, t.return, S);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && xc(t, e);
        break;
      default:
        xc(t, e);
    }
  }
  function bc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, i = e;
          switch (n.tag) {
            case 4:
              Vm(n, i);
              break t;
            case 22:
              n.memoizedState === null && bc(n, i);
              break t;
            default:
              bc(n, i);
          }
        }
        t = t.sibling;
      }
  }
  function _m(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, _m(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Oo(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var kt = null, Ae = !1;
  function en(t, e, n) {
    for (n = n.child; n !== null; )
      Um(t, e, n), n = n.sibling;
  }
  function Um(t, e, n) {
    if (Oe && typeof Oe.onCommitFiberUnmount == "function")
      try {
        Oe.onCommitFiberUnmount(cl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        At || ue(n, e), en(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !At && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        At || ue(n, e), Hl(n);
        var i = kt, o = Ae;
        vi(n.type) && (kt = n.stateNode, Ae = !1), en(
          t,
          e,
          n
        ), Hg(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), kt = i, Ae = o;
        break;
      case 5:
        At || ue(n, e), Hl(n);
      case 6:
        if (n.tag === 6 && Hl(n), i = kt, o = Ae, kt = null, en(
          t,
          e,
          n
        ), kt = i, Ae = o, kt !== null)
          if (Ae)
            try {
              (kt.nodeType === 9 ? kt.body : kt.nodeName === "HTML" ? kt.ownerDocument.body : kt).removeChild(n.stateNode), St = !0;
            } catch (s) {
              Mt(
                n,
                e,
                s
              );
            }
          else
            try {
              kt.removeChild(n.stateNode), St = !0;
            } catch (s) {
              Mt(
                n,
                e,
                s
              );
            }
        break;
      case 18:
        kt !== null && (Ae ? (t = kt, Ag(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Ja(t)) : Ag(kt, n.stateNode));
        break;
      case 4:
        i = kt, o = Ae, kt = n.stateNode.containerInfo, Ae = !0, en(
          t,
          e,
          n
        ), kt = i, Ae = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        fi(2, n, e), At || fi(4, n, e), en(
          t,
          e,
          n
        );
        break;
      case 1:
        At || (ue(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function" && Tm(
          n,
          e,
          i
        )), en(
          t,
          e,
          n
        );
        break;
      case 21:
        en(
          t,
          e,
          n
        );
        break;
      case 22:
        At = (i = At) || n.memoizedState !== null, en(
          t,
          e,
          n
        ), At = i;
        break;
      case 30:
        ue(n, e), en(
          t,
          e,
          n
        );
        break;
      case 7:
        At || ue(n, e), en(
          t,
          e,
          n
        );
        break;
      default:
        en(
          t,
          e,
          n
        );
    }
  }
  function Bm(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ja(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function km(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ja(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function Vb(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Rm()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Rm()), e;
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Ms(t, e) {
    var n = Vb(t);
    e.forEach(function(i) {
      if (!n.has(i)) {
        n.add(i);
        var o = Qb.bind(null, t, i);
        i.then(o, o);
      }
    });
  }
  function ve(t, e, n) {
    var i = e.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var s = i[o], f = t, m = e, S = m;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (vi(S.type)) {
                kt = S.stateNode, Ae = !1;
                break t;
              }
              break;
            case 5:
              kt = S.stateNode, Ae = !1;
              break t;
            case 3:
            case 4:
              kt = S.stateNode.containerInfo, Ae = !0;
              break t;
          }
          S = S.return;
        }
        if (kt === null) throw Error(u(160));
        Um(f, m, s), kt = null, Ae = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Lm(e, t, n), e = e.sibling;
  }
  var nn = null;
  function Lm(t, e, n) {
    var i = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (o & 4 && (i = t.updateQueue, i = i !== null ? i.events : null, i !== null))
          for (var s = 0; s < i.length; s++) {
            var f = i[s];
            f.ref.impl = f.nextImpl;
          }
        ve(e, t, n), xe(t), o & 4 && (fi(3, t, t.return), Ll(3, t), fi(5, t, t.return));
        break;
      case 1:
        ve(e, t, n), xe(t), o & 512 && (At || i === null || ue(i, i.return)), o & 64 && ee && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (s = nn, ve(e, t, n), xe(t), o & 512 && (At || i === null || ue(i, i.return)), o & 4)
          if (o = i !== null ? i.memoizedState : null, n = t.memoizedState, i === null)
            if (n === null)
              if (t.stateNode === null)
                if (ee)
                  t.stateNode = Tg(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, o = s.ownerDocument || s;
                    e: switch (e) {
                      case "title":
                        i = o.getElementsByTagName("title")[0], (!i || i[hl] || i[le] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = o.createElement(e), o.head.insertBefore(
                          i,
                          o.querySelector("head > title")
                        )), ce(i, e, n), i[le] = t, $t(i), e = i;
                        break t;
                      case "link":
                        if (s = Qg(
                          "link",
                          "href",
                          o
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < s.length; f++)
                            if (i = s[f], i.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && i.getAttribute("rel") === (n.rel == null ? null : n.rel) && i.getAttribute("title") === (n.title == null ? null : n.title) && i.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              s.splice(f, 1);
                              break e;
                            }
                        }
                        i = o.createElement(e), ce(i, e, n), o.head.appendChild(i);
                        break;
                      case "meta":
                        if (s = Qg(
                          "meta",
                          "content",
                          o
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < s.length; f++)
                            if (i = s[f], i.getAttribute("content") === (n.content == null ? null : "" + n.content) && i.getAttribute("name") === (n.name == null ? null : n.name) && i.getAttribute("property") === (n.property == null ? null : n.property) && i.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && i.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              s.splice(f, 1);
                              break e;
                            }
                        }
                        i = o.createElement(e), ce(i, e, n), o.head.appendChild(i);
                        break;
                      default:
                        throw Error(u(468, e));
                    }
                    i[le] = t, $t(i), e = i;
                  }
                  t.stateNode = e;
                }
              else
                ee || lf(s, t.type, t.stateNode);
            else
              t.stateNode = Zg(
                s,
                n,
                t.memoizedProps
              );
          else
            o !== n ? (o === null ? (e = i.stateNode, e === null || At || e.parentNode.removeChild(e)) : o.count--, n === null ? ee || lf(s, t.type, t.stateNode) : Zg(s, n, t.memoizedProps)) : n === null && t.stateNode !== null && uc(
              t,
              t.memoizedProps,
              i.memoizedProps
            );
        break;
      case 27:
        ve(e, t, n), xe(t), o & 512 && (At || i === null || ue(i, i.return)), i !== null && o & 4 && uc(
          t,
          t.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (s = Sn, Sn = !1, ve(e, t, n), Sn = s, xe(t), o & 512 && (At || i === null || ue(i, i.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            da(e, ""), St = !0;
          } catch (N) {
            Mt(t, t.return, N);
          }
        }
        o & 4 && t.stateNode != null && (e = t.memoizedProps, uc(
          t,
          e,
          i !== null ? i.memoizedProps : e
        )), o & 1024 && (yc = !0);
        break;
      case 6:
        if (ve(e, t, n), xe(t), o & 4) {
          if (t.stateNode === null)
            throw Error(u(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, St = !0;
          } catch (N) {
            Mt(t, t.return, N);
          }
        }
        break;
      case 3:
        if (St = !1, Gs = null, s = nn, nn = Fl(e.containerInfo), ve(e, t, n), nn = s, xe(t), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ja(e.containerInfo);
          } catch (N) {
            Mt(t, t.return, N);
          }
        yc && (yc = !1, Hm(t)), St = !1;
        break;
      case 4:
        o = Sn, Sn = ee, i = oh(), s = nn, nn = Fl(
          t.stateNode.containerInfo
        ), ve(e, t, n), xe(t), nn = s, St && ql && (As = !0), St = i, Sn = o;
        break;
      case 12:
        ve(e, t, n), xe(t);
        break;
      case 31:
        ve(e, t, n), xe(t), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ms(t, e)));
        break;
      case 13:
        ve(e, t, n), xe(t), t.child.flags & 8192 && t.memoizedState !== null != (i !== null && i.memoizedState !== null) && (Ns = Ne()), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ms(t, e)));
        break;
      case 22:
        s = t.memoizedState !== null, f = i !== null && i.memoizedState !== null;
        var m = ee, S = At, M = Sn;
        ee = m || s, Sn = M || s, At = S || f, ve(e, t, n), At = S, Sn = M, ee = m, xe(t), o & 8192 && (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, !s || i === null || f || ee || At || (e = f || At, n = ee, i = At, ee = s || ee, At = e, di(t, 2), ee = n, At = i), !s && Sn || xc(t, s)), o & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Ms(t, n))));
        break;
      case 19:
        ve(e, t, n), xe(t), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Ms(t, e)));
        break;
      case 30:
        o & 512 && (At || i === null || ue(i, i.return)), o = oh(), s = ql, f = (n & 335544064) === n, m = t.memoizedProps, ql = f && Bn(
          m.default,
          m.update
        ) !== "none", ve(e, t, n), xe(t), f && i !== null && St && (t.flags |= 4), ql = s, St = o;
        break;
      case 21:
        break;
      case 7:
        o & 512 && (At || i === null || ue(i, i.return)), i && i.stateNode !== null && (i.stateNode._fragmentFiber = t);
      default:
        ve(e, t, n), xe(t);
    }
  }
  function xe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (Em(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        i = null;
        for (var o = t.return; o !== null; ) {
          if (sc(o)) {
            var s = o.stateNode;
            i === null ? i = [s] : i.push(s);
          }
          if (oc(o)) break;
          o = o.return;
        }
        var f = i;
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var m = n.stateNode, S = cc(t);
            Ss(
              t,
              S,
              m,
              f
            );
            break;
          case 5:
            var M = n.stateNode;
            n.flags & 32 && (da(M, ""), n.flags &= -33);
            var N = cc(t);
            Ss(
              t,
              N,
              M,
              f
            );
            break;
          case 3:
          case 4:
            var B = n.stateNode.containerInfo, A = cc(t);
            fc(
              t,
              A,
              B,
              f
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (D) {
        Mt(t, t.return, D);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Hm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Hm(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Pa = !0, e.reset(), Pa = !1), t = t.sibling;
      }
  }
  function Oa(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        qm(e, t), e = e.sibling;
    else Om(e);
  }
  function qm(t, e) {
    var n = t.alternate;
    if (n === null) dc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (vc = Tn = !1, Mm(), Oa(e, t), !Tn && !As) {
            if (t = xn, t !== null)
              for (var i = 0; i < t.length; i += 3) {
                n = t[i];
                var o = t[i + 1];
                Cg(n, t[i + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + o + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), vc = !0;
          }
          xn = null;
          break;
        case 5:
          Oa(e, t);
          break;
        case 4:
          i = Tn, Tn = !1, Oa(e, t), Tn && (As = !0), Tn = i;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? dc(t, !1) : Oa(e, t));
          break;
        case 30:
          i = Tn, o = Mm(), Tn = !1, Oa(e, t), Tn && (t.flags |= 4);
          var s = t.memoizedProps, f = t.stateNode;
          e = Un(s, f), f = Un(n.memoizedProps, f);
          var m = Bn(s.default, s.update);
          m === "none" ? e = !1 : (s = n.memoizedState, n.memoizedState = null, n = t.child, Ee = 0, e = gc(
            t,
            n,
            e,
            f,
            m,
            s,
            !0
          ), Ee !== (s === null ? 0 : s.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (ka(
            t,
            t.memoizedProps.onUpdate
          ), xn = o) : o !== null && (o.push.apply(o, xn), xn = o), Tn = (t.flags & 32) !== 0 ? !0 : i;
          break;
        default:
          Oa(e, t);
      }
  }
  function wn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        jm(t, e.alternate, e), e = e.sibling;
  }
  function di(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, i = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fi(4, n, n.return), di(
            n,
            i
          );
          break;
        case 1:
          ue(n, n.return);
          var o = n.stateNode;
          typeof o.componentWillUnmount == "function" && Tm(
            n,
            n.return,
            o
          ), di(
            n,
            i
          );
          break;
        case 27:
          (i & 2) !== 0 && Hg(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ue(n, n.return), n.tag !== 5 && n.tag !== 27 || Hl(n), di(
            n,
            i
          );
          break;
        case 6:
          Hl(n);
          break;
        case 26:
          ue(n, n.return), o = n.stateNode, n.memoizedState !== null || o === null || At || o.parentNode.removeChild(o), di(
            n,
            i
          );
          break;
        case 22:
          n.memoizedState === null && di(
            n,
            i
          );
          break;
        case 30:
          ue(n, n.return), di(
            n,
            i
          );
          break;
        case 7:
          ue(n, n.return);
        default:
          di(
            n,
            i
          );
      }
      t = t.sibling;
    }
  }
  function an(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var i = e.alternate, o = t, s = e, f = s.flags, m = (n & 1) !== 0;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          an(
            o,
            s,
            n
          ), Ll(4, s);
          break;
        case 1:
          if (an(
            o,
            s,
            n
          ), i = s, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (N) {
              Mt(i, i.return, N);
            }
          if (i = s, o = i.updateQueue, o !== null) {
            var S = i.stateNode;
            try {
              var M = o.shared.hiddenCallbacks;
              if (M !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < M.length; o++)
                  up(M[o], S);
            } catch (N) {
              Mt(i, i.return, N);
            }
          }
          m && f & 64 && Sm(s), vn(s, s.return);
          break;
        case 27:
          (n & 2) !== 0 && Am(s);
        case 5:
          s.tag !== 5 && s.tag !== 27 || wm(s), an(
            o,
            s,
            n
          ), m && i === null && f & 4 && rc(s), vn(s, s.return);
          break;
        case 6:
          wm(s);
          break;
        case 26:
          S = s.stateNode, s.memoizedState !== null || S === null || ee || lf(
            Fl(S.ownerDocument),
            s.type,
            S
          ), an(
            o,
            s,
            n
          ), m && i === null && f & 4 && rc(s), vn(s, s.return);
          break;
        case 12:
          an(
            o,
            s,
            n
          );
          break;
        case 31:
          an(
            o,
            s,
            n
          ), m && f & 4 && Bm(o, s);
          break;
        case 13:
          an(
            o,
            s,
            n
          ), m && f & 4 && km(o, s);
          break;
        case 22:
          s.memoizedState === null && an(
            o,
            s,
            n
          ), vn(s, s.return);
          break;
        case 30:
          an(
            o,
            s,
            n
          ), vn(s, s.return);
          break;
        case 7:
          vn(s, s.return);
        default:
          an(
            o,
            s,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Sc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && zl(n));
  }
  function Tc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && zl(t));
  }
  function Pe(t, e, n, i) {
    var o = (n & 335544064) === n;
    if (e.subtreeFlags & (o ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Gm(
          t,
          e,
          n,
          i
        ), e = e.sibling;
    else o && Nm(e);
  }
  function Gm(t, e, n, i) {
    var o = (n & 335544064) === n;
    o && e.alternate === null && e.return !== null && e.return.alternate !== null && Es(e);
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pe(
          t,
          e,
          n,
          i
        ), s & 2048 && Ll(9, e);
        break;
      case 1:
        Pe(
          t,
          e,
          n,
          i
        );
        break;
      case 3:
        Pe(
          t,
          e,
          n,
          i
        ), o && vc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), s & 2048 && (s = null, e.alternate !== null && (s = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== s && (e.refCount++, s != null && zl(s)));
        break;
      case 12:
        if (s & 2048) {
          Pe(
            t,
            e,
            n,
            i
          ), s = e.stateNode;
          try {
            var f = e.memoizedProps, m = f.id, S = f.onPostCommit;
            typeof S == "function" && S(
              m,
              e.alternate === null ? "mount" : "update",
              s.passiveEffectDuration,
              -0
            );
          } catch (M) {
            Mt(e, e.return, M);
          }
        } else
          Pe(
            t,
            e,
            n,
            i
          );
        break;
      case 31:
        Pe(
          t,
          e,
          n,
          i
        );
        break;
      case 13:
        Pe(
          t,
          e,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, m = e.alternate, e.memoizedState !== null ? (o && m !== null && m.memoizedState === null && Es(m), f._visibility & 2 ? Pe(
          t,
          e,
          n,
          i
        ) : Gl(
          t,
          e
        )) : (o && m !== null && m.memoizedState !== null && Es(e), f._visibility & 2 ? Pe(
          t,
          e,
          n,
          i
        ) : (f._visibility |= 2, Ra(
          t,
          e,
          n,
          i,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), s & 2048 && Sc(m, e);
        break;
      case 24:
        Pe(
          t,
          e,
          n,
          i
        ), s & 2048 && Tc(e.alternate, e);
        break;
      case 30:
        o && (s = e.alternate, s !== null && (bn(s.child, !0), bn(e.child, !0))), Pe(
          t,
          e,
          n,
          i
        );
        break;
      default:
        Pe(
          t,
          e,
          n,
          i
        );
    }
  }
  function Ra(t, e, n, i, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var s = t, f = e, m = n, S = i, M = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ra(
            s,
            f,
            m,
            S,
            o
          ), Ll(8, f);
          break;
        case 23:
          break;
        case 22:
          var N = f.stateNode;
          f.memoizedState !== null ? N._visibility & 2 ? Ra(
            s,
            f,
            m,
            S,
            o
          ) : Gl(
            s,
            f
          ) : (N._visibility |= 2, Ra(
            s,
            f,
            m,
            S,
            o
          )), o && M & 2048 && Sc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ra(
            s,
            f,
            m,
            S,
            o
          ), o && M & 2048 && Tc(f.alternate, f);
          break;
        default:
          Ra(
            s,
            f,
            m,
            S,
            o
          );
      }
      e = e.sibling;
    }
  }
  function Gl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, i = e, o = i.flags;
        switch (i.tag) {
          case 22:
            Gl(n, i), o & 2048 && Sc(
              i.alternate,
              i
            );
            break;
          case 24:
            Gl(n, i), o & 2048 && Tc(i.alternate, i);
            break;
          default:
            Gl(n, i);
        }
        e = e.sibling;
      }
  }
  var Ki = 8192;
  function Pi(t, e, n) {
    if (t.subtreeFlags & Ki)
      for (t = t.child; t !== null; )
        Ym(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Ym(t, e, n) {
    switch (t.tag) {
      case 26:
        Pi(
          t,
          e,
          n
        ), t.flags & Ki && (t.memoizedState !== null ? H2(
          n,
          nn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Fg(n, t)));
        break;
      case 5:
        Pi(
          t,
          e,
          n
        ), t.flags & Ki && (t = t.stateNode, (e & 335544128) === e && Fg(n, t));
        break;
      case 3:
      case 4:
        var i = nn;
        nn = Fl(t.stateNode.containerInfo), Pi(
          t,
          e,
          n
        ), nn = i;
        break;
      case 22:
        t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Ki, Ki = 16777216, Pi(
          t,
          e,
          n
        ), Ki = i) : Pi(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Ki) !== 0 && (i = t.memoizedProps.name, i != null && i !== "auto")) {
          var o = t.stateNode;
          o.paired = null, Ue === null && (Ue = /* @__PURE__ */ new Map()), Ue.set(i, o);
        }
        Pi(
          t,
          e,
          n
        );
        break;
      default:
        Pi(
          t,
          e,
          n
        );
    }
  }
  function Xm(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Yl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ne = i, Qm(
            i,
            t
          );
        }
      Xm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Zm(t), t = t.sibling;
  }
  function Zm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yl(t), t.flags & 2048 && fi(9, t, t.return);
        break;
      case 3:
        Yl(t);
        break;
      case 12:
        Yl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Cs(t)) : Yl(t);
        break;
      default:
        Yl(t);
    }
  }
  function Cs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ne = i, Qm(
            i,
            t
          );
        }
      Xm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, e, e.return), Cs(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Cs(e));
          break;
        default:
          Cs(e);
      }
      t = t.sibling;
    }
  }
  function Qm(t, e) {
    for (; ne !== null; ) {
      var n = ne;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          zl(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, ne = i;
      else
        t: for (n = t; ne !== null; ) {
          i = ne;
          var o = i.sibling, s = i.return;
          if (_m(i), i === n) {
            ne = null;
            break t;
          }
          if (o !== null) {
            o.return = s, ne = o;
            break t;
          }
          ne = s;
        }
    }
  }
  var _b = {
    getCacheForType: function(t) {
      var e = oe(Xt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return oe(Xt).controller.signal;
    }
  }, Ub = typeof WeakMap == "function" ? WeakMap : Map, Et = 0, jt = null, ht = null, mt = 0, zt = 0, Be = null, hi = !1, ja = !1, wc = !1, Qn = 0, Gt = 0, pi = 0, Ji = 0, Ds = 0, ke = 0, Va = 0, Xl = null, ze = null, Ec = !1, Ns = 0, Km = 0, Os = 1 / 0, Rs = null, mi = null, Lt = 0, ln = null, Fi = null, En = 0, Ac = 0, zc = null, Pm = null, _a = null, Ua = null, Ba = null, Zl = 0, js = null;
  function Le() {
    return (Et & 2) !== 0 && mt !== 0 ? mt & -mt : I.T !== null ? Uc() : Id();
  }
  function Jm() {
    if (ke === 0)
      if ((mt & 536870912) === 0 || ct) {
        var t = Mo;
        Mo <<= 1, (Mo & 3932160) === 0 && (Mo = 262144), ke = t;
      } else ke = 536870912;
    return t = se.current, t !== null && (t.flags |= 32), ke;
  }
  function ka(t, e) {
    if (e != null) {
      var n = t.stateNode, i = n.ref;
      i === null && (i = n.ref = Dg(
        Un(t.memoizedProps, n)
      )), Ua === null && (Ua = []), Ua.push(e.bind(null, i));
    }
  }
  function Me(t, e, n) {
    (t === jt && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (La(t, 0), gi(
      t,
      mt,
      ke,
      !1
    )), dl(t, n), ((Et & 2) === 0 || t !== jt) && (t === jt && ((Et & 2) === 0 && (Ji |= n), Gt === 4 && gi(
      t,
      mt,
      ke,
      !1
    )), An(t));
  }
  function Fm(t, e, n) {
    if ((Et & 6) !== 0) throw Error(u(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || fl(t, e), o = i ? Lb(t, e) : Cc(t, e, !0), s = i;
    do {
      if (o === 0) {
        ja && !i && gi(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, s && !Bb(n)) {
          o = Cc(t, e, !1), s = !1;
          continue;
        }
        if (o === 2) {
          if (s = e, t.errorRecoveryDisabledLanes & s)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var m = t;
              o = Xl;
              var S = m.current.memoizedState.isDehydrated;
              if (S && (La(m, f).flags |= 256), f = Cc(
                m,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (wc && !S) {
                  m.errorRecoveryDisabledLanes |= s, Ji |= s, o = 4;
                  break t;
                }
                s = ze, ze = o, s !== null && (ze === null ? ze = s : ze.push.apply(
                  ze,
                  s
                ));
              }
              o = f;
            }
            if (s = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          La(t, 0), gi(t, e, 0, !0);
          break;
        }
        t: {
          switch (i = t, s = o, s) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              gi(
                i,
                e,
                ke,
                !hi
              );
              break t;
            case 2:
              ze = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && (o = Ns + 300 - Ne(), 10 < o)) {
            if (gi(
              i,
              e,
              ke,
              !hi
            ), Do(i, 0, !0) !== 0) break t;
            En = e, i.timeoutHandle = Kc(
              Im.bind(
                null,
                i,
                n,
                ze,
                Rs,
                Ec,
                e,
                ke,
                Ji,
                Va,
                hi,
                s,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break t;
          }
          Im(
            i,
            n,
            ze,
            Rs,
            Ec,
            e,
            ke,
            Ji,
            Va,
            hi,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    An(t);
  }
  function Im(t, e, n, i, o, s, f, m, S, M, N, B, A, D) {
    t.timeoutHandle = -1;
    var G = e.subtreeFlags, J = (s & 335544064) === s;
    if (B = null, (J || G & 8192 || (G & 16785408) === 16785408) && (B = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: mn
    }, Ue = null, Ym(
      e,
      s,
      B
    ), J && (G = B, J = t.containerInfo, J = (J.nodeType === 9 ? J : J.ownerDocument).__reactViewTransition, J != null && (G.count++, G.waitingForViewTransition = !0, G = $l.bind(G), J.finished.then(G, G))), G = (s & 62914560) === s ? Ns - Ne() : (s & 4194048) === s ? Km - Ne() : 0, G = q2(
      B,
      G
    ), G !== null)) {
      En = s, t.cancelPendingCommit = G(
        lg.bind(
          null,
          t,
          e,
          s,
          n,
          i,
          o,
          f,
          m,
          S,
          M,
          N,
          B,
          null,
          A,
          D
        )
      ), gi(t, s, f, !M);
      return;
    }
    lg(
      t,
      e,
      s,
      n,
      i,
      o,
      f,
      m,
      S,
      M,
      N,
      B
    );
  }
  function Bb(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], s = o.getSnapshot;
          o = o.value;
          try {
            if (!Ve(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function gi(t, e, n, i) {
    e = Qd(t, e), e &= ~Ds, e &= ~Ji, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var s = 31 - Re(o), f = 1 << s;
      i[s] = -1, o &= ~f;
    }
    n !== 0 && Pd(t, n, e);
  }
  function Vs() {
    return (Et & 6) === 0 ? (Ql(0), !1) : !0;
  }
  function Mc() {
    if (ht !== null) {
      if (zt === 0)
        var t = ht.return;
      else
        t = ht, Hn = Bi = null, _u(t), Aa = null, Dl = 0, t = ht;
      for (; t !== null; )
        bm(t.alternate, t), t = t.return;
      ht = null;
    }
  }
  function La(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, s2(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), En = 0, Mc(), jt = t, ht = n = kn(t.current, null), mt = e, zt = 0, Be = null, hi = !1, ja = fl(t, e), wc = !1, Va = ke = Ds = Ji = pi = Gt = 0, ze = Xl = null, Ec = !1, Qn = Qd(t, e), Go(), n;
  }
  function Wm(t, e) {
    st = null, I.H = hs, e === Ea || e === $o ? (e = lp(), zt = 3) : e === Tu ? (e = lp(), zt = 4) : zt = e === Fu ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, ht === null && (Gt = 1, ps(
      t,
      Xe(e, t.current)
    ));
  }
  function $m() {
    var t = se.current;
    return t === null ? !0 : (mt & 4194048) === mt ? me === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === me : !1;
  }
  function tg() {
    var t = I.H;
    return I.H = hs, t === null ? hs : t;
  }
  function eg() {
    var t = I.A;
    return I.A = _b, t;
  }
  function _s() {
    Gt = 4, hi || (mt & 4194048) !== mt && se.current !== null || (ja = !0), (pi & 134217727) === 0 && (Ji & 134217727) === 0 || jt === null || gi(
      jt,
      mt,
      ke,
      !1
    );
  }
  function Cc(t, e, n) {
    var i = Et;
    Et |= 2;
    var o = tg(), s = eg();
    (jt !== t || mt !== e) && (Rs = null, La(t, e)), e = !1;
    var f = Gt;
    t: do
      try {
        if (zt !== 0 && ht !== null) {
          var m = ht, S = Be;
          switch (zt) {
            case 8:
              Mc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var M = zt;
              if (zt = 0, Be = null, Ha(t, m, S, M), n && ja) {
                f = 0;
                break t;
              }
              break;
            default:
              M = zt, zt = 0, Be = null, Ha(t, m, S, M);
          }
        }
        kb(), f = Gt;
        break;
      } catch (N) {
        Wm(t, N);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Hn = Bi = null, Et = i, I.H = o, I.A = s, ht === null && (jt = null, mt = 0, Go()), f;
  }
  function kb() {
    for (; ht !== null; ) ng(ht);
  }
  function Lb(t, e) {
    var n = Et;
    Et |= 2;
    var i = tg(), o = eg();
    jt !== t || mt !== e ? (Rs = null, Os = Ne() + 500, La(t, e)) : ja = fl(
      t,
      e
    );
    t: do
      try {
        if (zt !== 0 && ht !== null) {
          e = ht;
          var s = Be;
          e: switch (zt) {
            case 1:
              zt = 0, Be = null, Ha(t, e, s, 1);
              break;
            case 2:
            case 9:
              if (ip(s)) {
                zt = 0, Be = null, ig(e);
                break;
              }
              e = function() {
                zt !== 2 && zt !== 9 || jt !== t || (zt = 7), An(t);
              }, s.then(e, e);
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              ip(s) ? (zt = 0, Be = null, ig(e)) : (zt = 0, Be = null, Ha(t, e, s, 7));
              break;
            case 5:
              var f = null;
              switch (ht.tag) {
                case 26:
                  f = ht.memoizedState;
                case 5:
                case 27:
                  var m = ht;
                  if (f ? Pg(f) : m.stateNode.complete) {
                    zt = 0, Be = null;
                    var S = m.sibling;
                    if (S !== null) ht = S;
                    else {
                      var M = m.return;
                      M !== null ? (ht = M, Us(M)) : ht = null;
                    }
                    break e;
                  }
              }
              zt = 0, Be = null, Ha(t, e, s, 5);
              break;
            case 6:
              zt = 0, Be = null, Ha(t, e, s, 6);
              break;
            case 8:
              Mc(), Gt = 6;
              break t;
            default:
              throw Error(u(462));
          }
        }
        Hb();
        break;
      } catch (N) {
        Wm(t, N);
      }
    while (!0);
    return Hn = Bi = null, I.H = i, I.A = o, Et = n, ht !== null ? 0 : (jt = null, mt = 0, Go(), Gt);
  }
  function Hb() {
    for (; ht !== null && !ix(); )
      ng(ht);
  }
  function ng(t) {
    var e = vm(t.alternate, t, Qn);
    t.memoizedProps = t.pendingProps, e === null ? Us(t) : ht = e;
  }
  function ig(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = fm(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          mt
        );
        break;
      case 11:
        e = fm(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          mt
        );
        break;
      case 5:
        _u(e);
        var i = e;
        i === te && (ct ? (Po(i), i.tag === 5 && i.stateNode != null && (Ut = i.stateNode)) : (Po(i), ct = !0));
      default:
        bm(n, e), e = ht = Qh(e, Qn), e = vm(n, e, Qn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Us(t) : ht = e;
  }
  function Ha(t, e, n, i) {
    Hn = Bi = null, _u(e), Aa = null, Dl = 0;
    var o = e.return;
    try {
      if (Mb(
        t,
        o,
        e,
        n,
        mt
      )) {
        Gt = 1, ps(
          t,
          Xe(n, t.current)
        ), ht = null;
        return;
      }
    } catch (s) {
      if (o !== null) throw ht = o, s;
      Gt = 1, ps(
        t,
        Xe(n, t.current)
      ), ht = null;
      return;
    }
    e.flags & 32768 ? (ct || i === 1 ? t = !0 : ja || (mt & 536870912) !== 0 ? t = !1 : (hi = t = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = se.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ag(e, t)) : Us(e);
  }
  function Us(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ag(
          e,
          hi
        );
        return;
      }
      t = e.return;
      var n = Ob(
        e.alternate,
        e,
        Qn
      );
      if (n !== null) {
        ht = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        ht = e;
        return;
      }
      ht = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function ag(t, e) {
    do {
      var n = Rb(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, ht = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        ht = t;
        return;
      }
      ht = t = n;
    } while (t !== null);
    Gt = 6, ht = null;
  }
  function lg(t, e, n, i, o, s, f, m, S, M, N, B) {
    t.cancelPendingCommit = null;
    do
      Bs();
    while (Lt !== 0);
    if ((Et & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      t === jt && (ht = jt = null, mt = 0), Fi = e, ln = t, En = n, zc = o, Pm = i, qb(
        t,
        e,
        n,
        f,
        m,
        S,
        B
      );
    }
  }
  function qb(t, e, n, i, o, s, f) {
    var m = e.lanes | e.childLanes;
    if (Ac = m, m |= uu, hx(
      t,
      n,
      m,
      i,
      o,
      s
    ), Ua = null, (n & 335544064) === n ? (Ba = mb(t), i = 10262) : (Ba = null, i = 10256), (e.subtreeFlags & i) !== 0 || (e.flags & i) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Kb(Ao, function() {
      return Rc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Ts = !1, i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
      i = I.T, I.T = null, o = lt.p, lt.p = 2, s = Et, Et |= 4;
      try {
        jb(t, e, n);
      } finally {
        Et = s, lt.p = o, I.T = i;
      }
    }
    Lt = 1, Ts ? _a = h2(
      f,
      t.containerInfo,
      Ba,
      Dc,
      Nc,
      Yb,
      Oc,
      Rc,
      Gb
    ) : (Dc(), Nc(), Oc());
  }
  function Gb(t) {
    if (Lt !== 0) {
      var e = ln.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Yb() {
    Lt === 3 && (Lt = 0, qm(Fi, ln), Lt = 4);
  }
  function Dc() {
    if (Lt === 1) {
      Lt = 0;
      var t = ln, e = Fi, n = En, i = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || i) {
        i = I.T, I.T = null;
        var o = lt.p;
        lt.p = 2;
        var s = Et;
        Et |= 4;
        try {
          ql = As = !1, Lm(e, t, n), n = Xc;
          var f = Uh(t.containerInfo), m = n.focusedElem, S = n.selectionRange;
          if (f !== m && m && m.ownerDocument && _h(
            m.ownerDocument.documentElement,
            m
          )) {
            if (S !== null && au(m)) {
              var M = S.start, N = S.end;
              if (N === void 0 && (N = M), "selectionStart" in m)
                m.selectionStart = M, m.selectionEnd = Math.min(
                  N,
                  m.value.length
                );
              else {
                var B = m.ownerDocument || document, A = B && B.defaultView || window;
                if (A.getSelection) {
                  var D = A.getSelection(), G = m.textContent.length, J = Math.min(S.start, G), rt = S.end === void 0 ? J : Math.min(S.end, G);
                  !D.extend && J > rt && (f = rt, rt = J, J = f);
                  var z = Vh(
                    m,
                    J
                  ), w = Vh(
                    m,
                    rt
                  );
                  if (z && w && (D.rangeCount !== 1 || D.anchorNode !== z.node || D.anchorOffset !== z.offset || D.focusNode !== w.node || D.focusOffset !== w.offset)) {
                    var C = B.createRange();
                    C.setStart(z.node, z.offset), D.removeAllRanges(), J > rt ? (D.addRange(C), D.extend(w.node, w.offset)) : (C.setEnd(w.node, w.offset), D.addRange(C));
                  }
                }
              }
            }
            for (B = [], D = m; D = D.parentNode; )
              D.nodeType === 1 && B.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < B.length; m++) {
              var U = B[m];
              U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
            }
          }
          Pa = !!Yc, Xc = Yc = null;
        } finally {
          Et = s, lt.p = o, I.T = i;
        }
      }
      t.current = e, Lt = 2;
    }
  }
  function Nc() {
    if (Lt === 2) {
      Lt = 0;
      var t = ln, e = Fi, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = I.T, I.T = null;
        var i = lt.p;
        lt.p = 2;
        var o = Et;
        Et |= 4;
        try {
          jm(t, e.alternate, e);
        } finally {
          Et = o, lt.p = i, I.T = n;
        }
      }
      Lt = 3;
    }
  }
  function Oc() {
    if (Lt === 4 || Lt === 3) {
      Lt = 0;
      var t = _a;
      _a = null, ax();
      var e = ln, n = Fi, i = En, o = Pm, s = (i & 335544064) === i ? 10262 : 10256;
      if ((n.subtreeFlags & s) !== 0 || (n.flags & s) !== 0 ? Lt = 5 : (Lt = 0, Fi = ln = null, og(e, e.pendingLanes)), s = e.pendingLanes, s === 0 && (mi = null), Hr(i), n = n.stateNode, Oe && typeof Oe.onCommitFiberRoot == "function")
        try {
          Oe.onCommitFiberRoot(
            cl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = I.T, s = lt.p, lt.p = 2, I.T = null;
        try {
          for (var f = e.onRecoverableError, m = 0; m < o.length; m++) {
            var S = o[m];
            f(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          I.T = n, lt.p = s;
        }
      }
      if (o = Ua, f = Ba, Ba = null, o !== null && (Ua = null, f === null && (f = []), t !== null))
        for (S = 0; S < o.length; S++)
          n = (0, o[S])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (En & 3) !== 0 && Bs(), An(e), s = e.pendingLanes, (i & 261930) !== 0 && (s & 42) !== 0 ? e === js ? Zl++ : (Zl = 0, js = e) : (Zl = 0, js = null), Ql(0);
    }
  }
  function og(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, zl(e)));
  }
  function Bs() {
    return _a !== null && (_a.skipTransition(), _a = null), Dc(), Nc(), Oc(), Rc();
  }
  function Rc() {
    if (Lt !== 5) return !1;
    var t = ln, e = Ac;
    Ac = 0;
    var n = Hr(En), i = I.T, o = lt.p;
    try {
      lt.p = 32 > n ? 32 : n, I.T = null, n = zc, zc = null;
      var s = ln, f = En;
      if (Lt = 0, Fi = ln = null, En = 0, (Et & 6) !== 0) throw Error(u(331));
      var m = Et;
      if (Et |= 4, Zm(s.current), Gm(
        s,
        s.current,
        f,
        n
      ), Et = m, Ql(0, !1), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        try {
          Oe.onPostCommitFiberRoot(cl, s);
        } catch {
        }
      return !0;
    } finally {
      lt.p = o, I.T = i, og(t, e);
    }
  }
  function sg(t, e, n) {
    e = Xe(n, e), e = Ju(t.stateNode, e, 2), t = si(t, e, 2), t !== null && (dl(t, 2), An(t));
  }
  function Mt(t, e, n) {
    if (t.tag === 3)
      sg(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          sg(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (mi === null || !mi.has(i))) {
            t = Xe(n, t), n = im(2), i = si(e, n, 2), i !== null && (am(
              n,
              i,
              e,
              t
            ), dl(i, 2), An(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function jc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new Ub();
      var o = /* @__PURE__ */ new Set();
      i.set(e, o);
    } else
      o = i.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o));
    o.has(n) || (wc = !0, o.add(n), t = Xb.bind(null, t, e, n), e.then(t, t));
  }
  function Xb(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, jt === t && (mt & n) === n && ((Gt === 4 || Gt === 3 && (mt & 62914560) === mt && 300 > Ne() - Ns) && (Et & 2) === 0 ? La(t, 0) : Ds |= n, Va === mt && (Va = 0)), An(t);
  }
  function rg(t, e) {
    e === 0 && (e = Kd()), t = Vi(t, e), t !== null && (dl(t, e), An(t));
  }
  function Zb(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), rg(t, n);
  }
  function Qb(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode, o = t.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    i !== null && i.delete(e), rg(t, n);
  }
  function Kb(t, e) {
    return Ur(t, e);
  }
  var qa = null, Ga = null, Vc = !1, ks = !1, _c = !1, yi = 0;
  function An(t) {
    t !== Ga && t.next === null && (Ga === null ? qa = Ga = t : Ga = Ga.next = t), ks = !0, Vc || (Vc = !0, Jb());
  }
  function Ql(t, e) {
    if (!_c && ks) {
      _c = !0;
      do
        for (var n = !1, i = qa; i !== null; ) {
          if (t !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var s = 0;
            else {
              var f = i.suspendedLanes, m = i.pingedLanes;
              s = (1 << 31 - Re(42 | t) + 1) - 1, s &= o & ~(f & ~m), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (n = !0, dg(i, s));
          } else
            s = mt, s = Do(
              i,
              i === jt ? s : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (s & 3) === 0 || fl(i, s) || (n = !0, dg(i, s));
          i = i.next;
        }
      while (n);
      _c = !1;
    }
  }
  function Pb() {
    ug();
  }
  function ug() {
    ks = Vc = !1;
    var t = 0;
    yi !== 0 && o2() && (t = yi);
    for (var e = Ne(), n = null, i = qa; i !== null; ) {
      var o = i.next, s = cg(i, e);
      s === 0 ? (i.next = null, n === null ? qa = o : n.next = o, o === null && (Ga = n)) : (n = i, (t !== 0 || (s & 3) !== 0) && (ks = !0)), i = o;
    }
    Lt !== 0 && Lt !== 5 || Ql(t), yi !== 0 && (yi = 0);
  }
  function cg(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, s = t.pendingLanes & -62914561; 0 < s; ) {
      var f = 31 - Re(s), m = 1 << f, S = o[f];
      S === -1 ? ((m & n) === 0 || (m & i) !== 0) && (o[f] = dx(m, e)) : S <= e && (t.expiredLanes |= m), s &= ~m;
    }
    if (e = jt, n = mt, n = Do(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i = t.callbackNode, n === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null)
      return i !== null && i !== null && Br(i), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || fl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (i !== null && Br(i), Hr(n)) {
        case 2:
        case 8:
          n = Xd;
          break;
        case 32:
          n = Ao;
          break;
        case 268435456:
          n = Zd;
          break;
        default:
          n = Ao;
      }
      return i = fg.bind(null, t), n = Ur(n, i), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return i !== null && i !== null && Br(i), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function fg(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Bs() && t.callbackNode !== n)
      return null;
    var i = mt;
    return i = Do(
      t,
      t === jt ? i : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), i === 0 ? null : (Fm(t, i, e), cg(t, Ne()), t.callbackNode != null && t.callbackNode === n ? fg.bind(null, t) : null);
  }
  function dg(t, e) {
    if (Bs()) return null;
    Fm(t, e, !0);
  }
  function Jb() {
    r2(function() {
      (Et & 6) !== 0 ? Ur(
        Yd,
        Pb
      ) : ug();
    });
  }
  function Uc() {
    if (yi === 0) {
      var t = Hi;
      t === 0 && (t = zo, zo <<= 1, (zo & 261888) === 0 && (zo = 256)), yi = t;
    }
    return yi;
  }
  function hg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Vo(t);
  }
  function Fb(t, e, n, i, o) {
    if (e === "submit" && n && n.stateNode === o) {
      var s = hg(
        (o[Te] || null).action
      ), f = i.submitter;
      f && (e = (e = f[Te] || null) ? hg(e.formAction) : f.getAttribute("formAction"), e !== null && (s = e, f = null));
      var m = new ko(
        "action",
        "action",
        null,
        i,
        o
      );
      t.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (yi !== 0) {
                  var S = new FormData(o, f);
                  Xu(
                    n,
                    {
                      pending: !0,
                      data: S,
                      method: o.method,
                      action: s
                    },
                    null,
                    S
                  );
                }
              } else
                typeof s == "function" && (m.preventDefault(), S = new FormData(o, f), Xu(
                  n,
                  {
                    pending: !0,
                    data: S,
                    method: o.method,
                    action: s
                  },
                  s,
                  S
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Bc = 0; Bc < ru.length; Bc++) {
    var kc = ru[Bc], Ib = kc.toLowerCase(), Wb = kc[0].toUpperCase() + kc.slice(1);
    tn(
      Ib,
      "on" + Wb
    );
  }
  tn(Lh, "onAnimationEnd"), tn(Hh, "onAnimationIteration"), tn(qh, "onAnimationStart"), tn("dblclick", "onDoubleClick"), tn("focusin", "onFocus"), tn("focusout", "onBlur"), tn(sb, "onTransitionRun"), tn(rb, "onTransitionStart"), tn(ub, "onTransitionCancel"), tn(Gh, "onTransitionEnd"), ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]), Oi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Oi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Oi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Oi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Oi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Oi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Kl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $b = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kl)
  );
  function pg(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n], o = i.event;
      i = i.listeners;
      t: {
        var s = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var m = i[f], S = m.instance, M = m.currentTarget;
            if (m = m.listener, S !== s && o.isPropagationStopped())
              break t;
            s = m, o.currentTarget = M;
            try {
              s(o);
            } catch (N) {
              qo(N);
            }
            o.currentTarget = null, s = S;
          }
        else
          for (f = 0; f < i.length; f++) {
            if (m = i[f], S = m.instance, M = m.currentTarget, m = m.listener, S !== s && o.isPropagationStopped())
              break t;
            s = m, o.currentTarget = M;
            try {
              s(o);
            } catch (N) {
              qo(N);
            }
            o.currentTarget = null, s = S;
          }
      }
    }
  }
  function pt(t, e) {
    var n = e[$d];
    n === void 0 && (n = e[$d] = /* @__PURE__ */ new Set());
    var i = t + "__bubble";
    n.has(i) || (mg(e, t, 2, !1), n.add(i));
  }
  function Lc(t, e, n) {
    var i = 0;
    e && (i |= 4), mg(
      n,
      t,
      i,
      e
    );
  }
  var Ls = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(t) {
    if (!t[Ls]) {
      t[Ls] = !0, nh.forEach(function(n) {
        n !== "selectionchange" && ($b.has(n) || Lc(n, !1, t), Lc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ls] || (e[Ls] = !0, Lc("selectionchange", !1, e));
    }
  }
  function mg(t, e, n, i) {
    switch (a0(e)) {
      case 2:
        var o = Z2;
        break;
      case 8:
        o = Q2;
        break;
      default:
        o = sf;
    }
    n = o.bind(
      null,
      e,
      n,
      t
    ), o = void 0, !Pr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), i ? o !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: o
    }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, {
      passive: o
    }) : t.addEventListener(e, n, !1);
  }
  function qc(t, e, n, i, o) {
    var s = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var m = i.stateNode.containerInfo;
          if (m === o) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === o)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = Ni(m), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              i = s = f;
              continue t;
            }
            m = m.parentNode;
          }
        }
        i = i.return;
      }
    mh(function() {
      var M = s, N = Qr(n), B = [];
      t: {
        var A = Yh.get(t);
        if (A !== void 0) {
          var D = ko, G = t;
          switch (t) {
            case "keypress":
              if (Uo(n) === 0) break t;
            case "keydown":
            case "keyup":
              D = Bx;
              break;
            case "focusin":
              G = "focus", D = Wr;
              break;
            case "focusout":
              G = "blur", D = Wr;
              break;
            case "beforeblur":
            case "afterblur":
              D = Wr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = vh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Ax;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Gx;
              break;
            case Lh:
            case Hh:
            case qh:
              D = Cx;
              break;
            case Gh:
              D = Xx;
              break;
            case "scroll":
            case "scrollend":
              D = wx;
              break;
            case "wheel":
              D = Qx;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Nx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = bh;
              break;
            case "submit":
              D = Hx;
              break;
            case "toggle":
            case "beforetoggle":
              D = Px;
          }
          var J = (e & 4) !== 0, rt = !J && (t === "scroll" || t === "scrollend"), z = J ? A !== null ? A + "Capture" : null : A;
          J = [];
          for (var w = M, C; w !== null; ) {
            var U = w;
            if (C = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || C === null || z === null || (U = ml(w, z), U != null && J.push(
              Pl(w, U, C)
            )), rt) break;
            w = w.return;
          }
          0 < J.length && (A = new D(
            A,
            G,
            null,
            n,
            N
          ), B.push({ event: A, listeners: J }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (D = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", D && n !== Zr && (G = n.relatedTarget || n.fromElement) && (Ni(G) || G[sa]))
            break t;
          (A || D) && (G = N.window === N ? N : (D = N.ownerDocument) ? D.defaultView || D.parentWindow : window, A ? (D = n.relatedTarget || n.toElement, A = M, D = D ? Ni(D) : null, D !== null && (rt = h(D), J = D.tag, D !== rt || J !== 5 && J !== 27 && J !== 6) && (D = null)) : (A = null, D = M), A !== D && (J = vh, U = "onMouseLeave", z = "onMouseEnter", w = "mouse", (t === "pointerout" || t === "pointerover") && (J = bh, U = "onPointerLeave", z = "onPointerEnter", w = "pointer"), rt = A == null ? G : pl(A), C = D == null ? G : pl(D), G = new J(
            U,
            w + "leave",
            A,
            n,
            N
          ), G.target = rt, G.relatedTarget = C, U = null, Ni(N) === M && (J = new J(
            z,
            w + "enter",
            D,
            n,
            N
          ), J.target = C, J.relatedTarget = rt, U = J), rt = U, J = A && D ? ft(
            A,
            D,
            t2
          ) : null, A !== null && gg(
            B,
            G,
            A,
            J,
            !1
          ), D !== null && rt !== null && gg(
            B,
            rt,
            D,
            J,
            !0
          )));
        }
        t: {
          if (A = M ? pl(M) : window, D = A.nodeName && A.nodeName.toLowerCase(), D === "select" || D === "input" && A.type === "file")
            var Q = Ch;
          else if (zh(A))
            if (Dh)
              Q = ab;
            else {
              Q = nb;
              var gt = eb;
            }
          else
            D = A.nodeName, !D || D.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? M && Xr(M.elementType) && (Q = Ch) : Q = ib;
          if (Q && (Q = Q(t, M))) {
            Mh(
              B,
              Q,
              n,
              N
            );
            break t;
          }
          gt && gt(t, A, M);
        }
        switch (gt = M ? pl(M) : window, t) {
          case "focusin":
            (zh(gt) || gt.contentEditable === "true") && (ga = gt, lu = M, wl = null);
            break;
          case "focusout":
            wl = lu = ga = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, Bh(B, n, N);
            break;
          case "selectionchange":
            if (ob) break;
          case "keydown":
          case "keyup":
            Bh(B, n, N);
        }
        var W;
        if (tu)
          t: {
            switch (t) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break t;
              case "compositionend":
                nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break t;
            }
            nt = void 0;
          }
        else
          ma ? Eh(t, n) && (nt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (nt = "onCompositionStart");
        nt && (Sh && n.locale !== "ko" && (ma || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && ma && (W = gh()) : (Wn = N, Jr = "value" in Wn ? Wn.value : Wn.textContent, ma = !0)), gt = Hs(M, nt), 0 < gt.length && (nt = new xh(
          nt,
          t,
          null,
          n,
          N
        ), B.push({ event: nt, listeners: gt }), W ? nt.data = W : (W = Ah(n), W !== null && (nt.data = W)))), (W = Fx ? Ix(t, n) : Wx(t, n)) && (nt = Hs(M, "onBeforeInput"), 0 < nt.length && (gt = new xh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), B.push({
          event: gt,
          listeners: nt
        }), gt.data = W)), Fb(
          B,
          t,
          M,
          n,
          N
        );
      }
      pg(B, e);
    });
  }
  function Pl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Hs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var o = t, s = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = ml(t, n), o != null && i.unshift(
        Pl(t, o, s)
      ), o = ml(t, e), o != null && i.push(
        Pl(t, o, s)
      )), t.tag === 3) return i;
      t = t.return;
    }
    return [];
  }
  function t2(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function gg(t, e, n, i, o) {
    for (var s = e._reactName, f = []; n !== null && n !== i; ) {
      var m = n, S = m.alternate, M = m.stateNode;
      if (m = m.tag, S !== null && S === i) break;
      m !== 5 && m !== 26 && m !== 27 || M === null || (S = M, o ? (M = ml(n, s), M != null && f.unshift(
        Pl(n, M, S)
      )) : o || (M = ml(n, s), M != null && f.push(
        Pl(n, M, S)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var e2 = /\r\n?/g, n2 = /\u0000|\uFFFD/g;
  function yg(t) {
    return (typeof t == "string" ? t : "" + t).replace(e2, `
`).replace(n2, "");
  }
  function vg(t, e) {
    return e = yg(e), yg(t) === e;
  }
  function Ct(t, e, n, i, o, s) {
    switch (n) {
      case "children":
        if (typeof i == "string")
          e === "body" || e === "textarea" && i === "" || da(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          e !== "body" && da(t, "" + i);
        else return;
        break;
      case "className":
        jo(t, "class", i);
        break;
      case "tabIndex":
        jo(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jo(t, n, i);
        break;
      case "style":
        hh(t, i, s);
        return;
      case "data":
        if (e !== "object") {
          jo(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = Vo(i), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (n === "formAction" ? (e !== "input" && Ct(t, e, "name", o.name, o, null), Ct(
            t,
            e,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ct(
            t,
            e,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ct(
            t,
            e,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ct(t, e, "encType", o.encType, o, null), Ct(t, e, "method", o.method, o, null), Ct(t, e, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        i = Vo(i), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = mn);
        return;
      case "onScroll":
        i != null && pt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && pt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(u(60));
            s?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Vo(i), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
      case "popover":
        pt("beforetoggle", t), pt("toggle", t), Ro(t, "popover", i);
        break;
      case "xlinkActuate":
        Vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Vn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Vn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Vn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Vn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Ro(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = Sx.get(n) || n, Ro(t, n, i);
        else return;
    }
    St = !0;
  }
  function Gc(t, e, n, i, o, s) {
    switch (n) {
      case "style":
        hh(t, i, s);
        return;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(u(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(u(60));
            s?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof i == "string") da(t, i);
        else if (typeof i == "number" || typeof i == "bigint")
          da(t, "" + i);
        else return;
        break;
      case "onScroll":
        i != null && pt("scroll", t);
        return;
      case "onScrollEnd":
        i != null && pt("scrollend", t);
        return;
      case "onClick":
        i != null && (t.onclick = mn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ih.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), s = n.slice(2, o ? n.length - 7 : void 0), e = t[Te] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(s, e, o), typeof i == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(s, i, o);
              break t;
            }
            St = !0, n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : Ro(t, n, i);
          }
        return;
    }
    St = !0;
  }
  function ce(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        pt("error", t), pt("load", t);
        var i = !1, o = !1, s;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var f = n[s];
            if (f != null)
              switch (s) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Ct(t, e, s, f, n, null);
              }
          }
        o && Ct(t, e, "srcSet", n.srcSet, n, null), i && Ct(t, e, "src", n.src, n, null);
        return;
      case "input":
        pt("invalid", t);
        var m = s = f = o = null, S = null, M = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var N = n[i];
            if (N != null)
              switch (i) {
                case "name":
                  o = N;
                  break;
                case "type":
                  f = N;
                  break;
                case "checked":
                  S = N;
                  break;
                case "defaultChecked":
                  M = N;
                  break;
                case "value":
                  s = N;
                  break;
                case "defaultValue":
                  m = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(u(137, e));
                  break;
                default:
                  Ct(t, e, i, N, n, null);
              }
          }
        uh(
          t,
          s,
          m,
          S,
          M,
          f,
          o,
          !1
        );
        return;
      case "select":
        pt("invalid", t), i = f = s = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (m = n[o], m != null))
            switch (o) {
              case "value":
                s = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                i = m;
              default:
                Ct(t, e, o, m, n, null);
            }
        e = s, n = f, t.multiple = !!i, e != null ? fa(t, !!i, e, !1) : n != null && fa(t, !!i, n, !0);
        return;
      case "textarea":
        pt("invalid", t), s = o = i = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (m = n[f], m != null))
            switch (f) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                o = m;
                break;
              case "children":
                s = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(u(91));
                break;
              default:
                Ct(t, e, f, m, n, null);
            }
        fh(t, i, o, s);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && (i = n[S], i != null))
            switch (S) {
              case "selected":
                t.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Ct(t, e, S, i, n, null);
            }
        return;
      case "dialog":
        pt("beforetoggle", t), pt("toggle", t), pt("cancel", t), pt("close", t);
        break;
      case "iframe":
      case "object":
        pt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Kl.length; i++)
          pt(Kl[i], t);
        break;
      case "image":
        pt("error", t), pt("load", t);
        break;
      case "details":
        pt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        pt("error", t), pt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in n)
          if (n.hasOwnProperty(M) && (i = n[M], i != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Ct(t, e, M, i, n, null);
            }
        return;
      default:
        if (Xr(e)) {
          for (N in n)
            n.hasOwnProperty(N) && (i = n[N], i !== void 0 && Gc(
              t,
              e,
              N,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && (i = n[m], i != null && Ct(t, e, m, i, n, null));
  }
  var i2 = {};
  function a2(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, s = null, f = null, m = null, S = null, M = null, N = null;
        for (D in n) {
          var B = n[D];
          if (n.hasOwnProperty(D) && B != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = B;
              default:
                i.hasOwnProperty(D) || Ct(t, e, D, null, i, B);
            }
        }
        for (var A in i) {
          var D = i[A];
          if (B = n[A], i.hasOwnProperty(A) && (D != null || B != null))
            switch (A) {
              case "type":
                D !== B && (St = !0), s = D;
                break;
              case "name":
                D !== B && (St = !0), o = D;
                break;
              case "checked":
                D !== B && (St = !0), M = D;
                break;
              case "defaultChecked":
                D !== B && (St = !0), N = D;
                break;
              case "value":
                D !== B && (St = !0), f = D;
                break;
              case "defaultValue":
                D !== B && (St = !0), m = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(u(137, e));
                break;
              default:
                D !== B && Ct(
                  t,
                  e,
                  A,
                  D,
                  i,
                  B
                );
            }
        }
        Gr(
          t,
          f,
          m,
          S,
          M,
          N,
          s,
          o
        );
        return;
      case "select":
        D = f = m = A = null;
        for (s in n)
          if (S = n[s], n.hasOwnProperty(s) && S != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                D = S;
              default:
                i.hasOwnProperty(s) || Ct(
                  t,
                  e,
                  s,
                  null,
                  i,
                  S
                );
            }
        for (o in i)
          if (s = i[o], S = n[o], i.hasOwnProperty(o) && (s != null || S != null))
            switch (o) {
              case "value":
                s !== S && (St = !0), A = s;
                break;
              case "defaultValue":
                s !== S && (St = !0), m = s;
                break;
              case "multiple":
                s !== S && (St = !0), f = s;
              default:
                s !== S && Ct(
                  t,
                  e,
                  o,
                  s,
                  i,
                  S
                );
            }
        e = m, n = f, i = D, A != null ? fa(t, !!n, A, !1) : !!i != !!n && (e != null ? fa(t, !!n, e, !0) : fa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        D = A = null;
        for (m in n)
          if (o = n[m], n.hasOwnProperty(m) && o != null && !i.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, m, null, i, o);
            }
        for (f in i)
          if (o = i[f], s = n[f], i.hasOwnProperty(f) && (o != null || s != null))
            switch (f) {
              case "value":
                o !== s && (St = !0), A = o;
                break;
              case "defaultValue":
                o !== s && (St = !0), D = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(u(91));
                break;
              default:
                o !== s && Ct(t, e, f, o, i, s);
            }
        ch(t, A, D);
        return;
      case "option":
        for (var G in n)
          if (A = n[G], n.hasOwnProperty(G) && A != null && !i.hasOwnProperty(G))
            switch (G) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ct(
                  t,
                  e,
                  G,
                  null,
                  i,
                  A
                );
            }
        for (S in i)
          if (A = i[S], D = n[S], i.hasOwnProperty(S) && A !== D && (A != null || D != null))
            switch (S) {
              case "selected":
                A !== D && (St = !0), t.selected = A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                Ct(
                  t,
                  e,
                  S,
                  A,
                  i,
                  D
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in n)
          A = n[J], n.hasOwnProperty(J) && A != null && !i.hasOwnProperty(J) && Ct(t, e, J, null, i, A);
        for (M in i)
          if (A = i[M], D = n[M], i.hasOwnProperty(M) && A !== D && (A != null || D != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(u(137, e));
                break;
              default:
                Ct(
                  t,
                  e,
                  M,
                  A,
                  i,
                  D
                );
            }
        return;
      default:
        if (Xr(e)) {
          for (var rt in n)
            A = n[rt], n.hasOwnProperty(rt) && A !== void 0 && !i.hasOwnProperty(rt) && Gc(
              t,
              e,
              rt,
              void 0,
              i,
              A
            );
          for (N in i)
            A = i[N], D = n[N], !i.hasOwnProperty(N) || A === D || A === void 0 && D === void 0 || Gc(
              t,
              e,
              N,
              A,
              i,
              D
            );
          return;
        }
    }
    for (var z in n)
      A = n[z], n.hasOwnProperty(z) && A != null && !i.hasOwnProperty(z) && Ct(t, e, z, null, i, A);
    for (B in i)
      A = i[B], D = n[B], !i.hasOwnProperty(B) || A === D || A == null && D == null || Ct(t, e, B, A, i, D);
  }
  function xg(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function l2() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
        var o = n[i], s = o.transferSize, f = o.initiatorType, m = o.duration;
        if (s && m && xg(f)) {
          for (f = 0, m = o.responseEnd, i += 1; i < n.length; i++) {
            var S = n[i], M = S.startTime;
            if (M > m) break;
            var N = S.transferSize, B = S.initiatorType;
            N && xg(B) && (S = S.responseEnd, f += N * (S < m ? 1 : (m - M) / (S - M)));
          }
          if (--i, e += 8 * (s + f) / (o.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Yc = null, Xc = null;
  function Jl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function bg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sg(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Tg(t, e, n, i) {
    return n = Jl(
      n
    ).createElement(t), n[le] = i, n[Te] = e, ce(n, t, e), $t(n), n;
  }
  function Zc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function o2() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Qc ? !1 : (Qc = t, !0) : (Qc = null, !1);
  }
  var Kc = typeof setTimeout == "function" ? setTimeout : void 0, s2 = typeof clearTimeout == "function" ? clearTimeout : void 0, wg = typeof Promise == "function" ? Promise : void 0, Eg = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Kc, r2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof wg < "u" ? function(t) {
    return wg.resolve(null).then(t).catch(u2);
  } : Kc;
  function u2(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function vi(t) {
    return t === "head";
  }
  function Ag(t, e) {
    var n = e, i = 0;
    do {
      var o = n.nextSibling;
      if (t.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (i === 0) {
            t.removeChild(o), Ja(e);
            return;
          }
          i--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          i++;
        else if (n === "html")
          ef(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, ef(n);
          for (var s = n.firstChild; s; ) {
            var f = s.nextSibling, m = s.nodeName;
            s[hl] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = f;
          }
        } else
          n === "body" && ef(t.ownerDocument.body);
      n = o;
    } while (n);
    Ja(e);
  }
  function zg(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = i;
    } while (n);
  }
  function Mg(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var i = 1;
      else
        for (var o = i = 0; o < e.length; o++) {
          var s = e[o];
          0 < s.width && 0 < s.height && i++;
        }
      i === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Cg(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function c2(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Pc(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return c2(e, n, t);
  }
  function f2(t) {
    return t.documentElement.clientHeight;
  }
  function d2(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function h2(t, e, n, i, o, s, f, m, S) {
    var M = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var N = M.startViewTransition({
        update: function() {
          var A = M.defaultView, D = A.navigation && A.navigation.transition, G = M.fonts.status;
          i();
          var J = [];
          if (G === "loaded" && (f2(M), M.fonts.status === "loading" && J.push(M.fonts.ready)), G = J.length, t !== null)
            for (var rt = t.suspenseyImages, z = 0, w = 0; w < rt.length; w++) {
              var C = rt[w];
              if (!C.complete) {
                var U = C.getBoundingClientRect();
                if (0 < U.bottom && 0 < U.right && U.top < A.innerHeight && U.left < A.innerWidth) {
                  if (z += Jg(C), z > Ys) {
                    J.length = G;
                    break;
                  }
                  C = new Promise(
                    d2.bind(C)
                  ), J.push(C);
                }
              }
            }
          if (0 < J.length)
            return A = Promise.race([
              Promise.all(J),
              new Promise(function(Q) {
                return setTimeout(Q, 500);
              })
            ]).then(o, o), (D ? Promise.allSettled([D.finished, A]) : A).then(s, s);
          if (o(), D)
            return D.finished.then(
              s,
              s
            );
          s();
        },
        types: n
      });
      M.__reactViewTransition = N;
      var B = [];
      return N.ready.then(
        function() {
          for (var A = M.documentElement.getAnimations({
            subtree: !0
          }), D = 0; D < A.length; D++) {
            var G = A[D], J = G.effect, rt = J.pseudoElement;
            if (rt != null && rt.startsWith("::view-transition")) {
              B.push(G), G = J.getKeyframes();
              for (var z = rt = void 0, w = !0, C = 0; C < G.length; C++) {
                var U = G[C], Q = U.width;
                if (rt === void 0) rt = Q;
                else if (rt !== Q) {
                  w = !1;
                  break;
                }
                if (Q = U.height, z === void 0) z = Q;
                else if (z !== Q) {
                  w = !1;
                  break;
                }
                delete U.width, delete U.height, U.transform === "none" && delete U.transform;
              }
              w && rt !== void 0 && z !== void 0 && (J.setKeyframes(G), w = getComputedStyle(
                J.target,
                J.pseudoElement
              ), w.width !== rt || w.height !== z) && (w = G[0], w.width = rt, w.height = z, w = G[G.length - 1], w.width = rt, w.height = z, J.setKeyframes(G));
            }
          }
          f();
        },
        function(A) {
          M.__reactViewTransition === N && (M.__reactViewTransition = null);
          try {
            if (typeof A == "object" && A !== null)
              switch (A.name) {
                case "InvalidStateError":
                  (A.message === "View transition was skipped because document visibility state is hidden." || A.message === "Skipping view transition because document visibility state has become hidden." || A.message === "Skipping view transition because viewport size changed." || A.message === "Transition was aborted because of invalid state") && (A = null);
              }
            A !== null && S(A);
          } finally {
            i(), o(), f();
          }
        }
      ), N.finished.finally(function() {
        for (var A = 0; A < B.length; A++)
          B[A].cancel();
        M.__reactViewTransition === N && (M.__reactViewTransition = null), m();
      }), N;
    } catch {
      return i(), o(), f(), null;
    }
  }
  function Ii(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Ii.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : K({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Ii.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), i = [], o = 0; o < n.length; o++) {
      var s = n[o].effect;
      s !== null && s.target === t && s.pseudoElement === e && i.push(n[o]);
    }
    return i;
  }, Ii.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Dg(t) {
    return {
      name: t,
      group: new Ii("group", t),
      imagePair: new Ii("image-pair", t),
      old: new Ii("old", t),
      new: new Ii("new", t)
    };
  }
  function He(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  He.prototype.addEventListener = function(t, e, n) {
    var i = null, o = null;
    if (!(n != null && typeof n != "boolean" && (i = n.signal || null, i !== null && i.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var s = this._eventListeners;
      if (Og(s, t, e, n) === -1) {
        var f = this, m = e;
        n != null && typeof n != "boolean" && n.once === !0 && (m = function(S) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, S) : e.handleEvent(S);
        }), i !== null && (o = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), i.addEventListener("abort", o, { once: !0 }), o = i.removeEventListener.bind(i, "abort", o)), i = Ya(n), s.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: m,
          cleanup: o
        }), g(
          this._fragmentFiber.child,
          !1,
          p2,
          t,
          m,
          i
        );
      }
      this._eventListeners = s;
    }
  };
  function p2(t, e, n, i) {
    return V(t).addEventListener(
      e,
      n,
      i
    ), !1;
  }
  He.prototype.removeEventListener = function(t, e, n) {
    var i = this._eventListeners;
    if (i !== null && (e = Og(
      i,
      t,
      e,
      n
    ), e !== -1)) {
      var o = i[e];
      n = o.attachedListener;
      var s = o.cleanup;
      o = Ya(o.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        m2,
        t,
        n,
        o
      ), i.splice(e, 1), s !== null && s();
    }
  };
  function m2(t, e, n, i) {
    return V(t).removeEventListener(
      e,
      n,
      i
    ), !1;
  }
  function Ya(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Ng(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Og(t, e, n, i) {
    if (t.length === 0) return -1;
    i = Ng(i);
    for (var o = 0; o < t.length; o++) {
      var s = t[o];
      if (s.type === e && s.listener === n && Ng(s.optionsOrUseCapture) === i)
        return o;
    }
    return -1;
  }
  He.prototype.dispatchEvent = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = V(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var i = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var o = 0; o < n.length; o++) {
          var s = n[o];
          i.addEventListener(
            s.type,
            s.attachedListener,
            Ya(s.optionsOrUseCapture)
          );
        }
      if (e.appendChild(i), t = i.dispatchEvent(t), n)
        for (o = 0; o < n.length; o++)
          s = n[o], i.removeEventListener(
            s.type,
            s.attachedListener,
            Ya(s.optionsOrUseCapture)
          );
      return e.removeChild(i), t;
    }
    return e.dispatchEvent(t);
  }, He.prototype.focus = function(t) {
    g(
      this._fragmentFiber.child,
      !0,
      Rg,
      t,
      void 0,
      void 0
    );
  };
  function Rg(t, e) {
    return t.tag === 6 ? !1 : (t = V(t), M2(t, e));
  }
  He.prototype.focusLast = function(t) {
    var e = [];
    g(
      this._fragmentFiber.child,
      !0,
      Jc,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Rg(e[n], t); n--) ;
  };
  function Jc(t, e) {
    return e.push(t), !1;
  }
  He.prototype.blur = function() {
    var t = T(
      this._fragmentFiber
    );
    t !== null && (t = V(t), t = Jl(t).activeElement, t !== null && g(
      this._fragmentFiber.child,
      !1,
      g2,
      t,
      void 0,
      void 0
    ));
  };
  function g2(t, e) {
    return t.tag === 6 ? !1 : (t = V(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  He.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), g(
      this._fragmentFiber.child,
      !1,
      y2,
      t,
      void 0,
      void 0
    );
  };
  function y2(t, e) {
    return t.tag === 6 || (t = V(t), e.observe(t)), !1;
  }
  He.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), g(
        this._fragmentFiber.child,
        !1,
        v2,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < on.length; n++) {
        var i = on[n];
        i.fragmentInstance === this && i.observer === t ? t.unobserve(i.instance) : on[e++] = i;
      }
      on.length = e;
    }
  };
  function v2(t, e) {
    return t.tag === 6 || (t = V(t), e.unobserve(t)), !1;
  }
  var on = [], Fc = !1;
  function x2(t, e, n) {
    on.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Fc || (Fc = !0, C2(function() {
      Fc = !1;
      var i = on;
      on = [];
      for (var o = 0; o < i.length; o++) {
        var s = i[o];
        s.observer.unobserve(s.instance);
      }
    }));
  }
  He.prototype.getClientRects = function() {
    var t = [];
    return g(
      this._fragmentFiber.child,
      !1,
      b2,
      t,
      void 0,
      void 0
    ), t;
  };
  function b2(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = V(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  He.prototype.getRootNode = function(t) {
    var e = T(
      this._fragmentFiber
    );
    return e === null ? this : V(e).getRootNode(t);
  }, He.prototype.compareDocumentPosition = function(t) {
    var e = T(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    g(
      this._fragmentFiber.child,
      !1,
      Jc,
      n,
      void 0,
      void 0
    );
    var i = V(e);
    if (n.length === 0) {
      if (n = i, j(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var o = i = n.compareDocumentPosition(t);
      return n === t ? o = Node.DOCUMENT_POSITION_CONTAINS : i & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = O(e)[1], n === null ? o = Node.DOCUMENT_POSITION_PRECEDING : (t = V(n).compareDocumentPosition(
        t
      ), o = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), o |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = V(n[0]), o = V(n[n.length - 1]);
    var s = j(this._fragmentFiber) ? e.parentElement : i;
    if (s == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    i = s.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, s = s.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), m = o.compareDocumentPosition(t), S = f & Node.DOCUMENT_POSITION_CONTAINED_BY || m & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return m = i && s && f & Node.DOCUMENT_POSITION_FOLLOWING && m & Node.DOCUMENT_POSITION_PRECEDING, e = i && e === t || s && o === t || S || m ? Node.DOCUMENT_POSITION_CONTAINED_BY : !i && e === t || !s && o === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || S2(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function S2(t, e, n, i, o) {
    var s = Ni(o);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!s)
        t: {
          for (; s !== null; ) {
            if (s.tag === 7 && (s === e || s.alternate === e)) {
              n = !0;
              break t;
            }
            s = s.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (s === null)
        return s = o.ownerDocument, o === s || o === s.documentElement || o === s.body;
      t: {
        for (s = e, e = T(e); s !== null; ) {
          if (!(s.tag !== 5 && s.tag !== 3 && s.tag !== 27 || s !== e && s.alternate !== e)) {
            s = !0;
            break t;
          }
          s = s.return;
        }
        s = !1;
      }
      return s;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!s) && !(e = s === n) && (e = ft(
      n,
      s,
      at
    ), e === null ? e = !1 : (g(
      e,
      !0,
      H,
      s,
      n
    ), s = R, R = null, e = s !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!s) && !(e = s === i) && (e = ft(
      i,
      s,
      at
    ), e === null ? e = !1 : (g(
      e,
      !0,
      X,
      s,
      i
    ), s = R, k = R = null, e = s !== null)), e) : !1;
  }
  function jg(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  He.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(u(566));
    var e = [];
    g(
      this._fragmentFiber.child,
      !1,
      Jc,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var i = O(
        this._fragmentFiber
      );
      if (i = n ? i[1] || i[0] || T(this._fragmentFiber) : i[0] || i[1], i === null) return;
      if (i.tag === 6) {
        t = V(i), jg(t, n);
        return;
      }
      if (i = V(i), i.nodeType !== 9) {
        if (i.nodeType === 11) {
          n = "host" in i ? i.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        i.scrollIntoView(t);
      }
    }
    for (i = n ? e.length - 1 : 0; i !== (n ? -1 : e.length); ) {
      var o = e[i];
      o.tag === 6 ? (o = V(o), jg(o, n)) : V(o).scrollIntoView(t), i += n ? -1 : 1;
    }
  };
  function T2(t, e) {
    return t = V(t), Vg(t, e), !1;
  }
  function Vg(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function _g(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        t.addEventListener(
          o.type,
          o.attachedListener,
          Ya(o.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(s) {
      for (var f = 0, m = 0; m < on.length; m++) {
        var S = on[m];
        (S.fragmentInstance !== e || S.observer !== s || S.instance !== t) && (on[f++] = S);
      }
      on.length = f, s.observe(t);
    }), Vg(t, e));
  }
  function w2(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        t.removeEventListener(
          o.type,
          o.attachedListener,
          Ya(o.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(s) {
      typeof s.rootMargin == "string" ? x2(
        e,
        s,
        t
      ) : s.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Ic(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ic(n), Oo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function E2(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var o = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (i) {
        if (!t[hl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (s = t.getAttribute("rel"), s === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (s !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (s = t.getAttribute("src"), (s !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var s = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === s)
          return t;
      } else return t;
      if (t = Je(t.nextSibling), t === null) break;
    }
    return null;
  }
  function A2(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ug(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Je(t.nextSibling), t === null)) return null;
    return t;
  }
  function Wc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function $c(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function z2(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var i = function() {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
    }
  }
  function Je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var tf = null;
  function Bg(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Je(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function kg(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function M2(t, e) {
    function n() {
      i = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var i = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return i;
  }
  function C2(t) {
    Eg(function() {
      Eg(function(e) {
        return t(e);
      });
    });
  }
  function Lg(t, e, n) {
    switch (e = Jl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(u(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(u(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Hg(t, e, n) {
    for (var i in n) {
      var o = n[i];
      n.hasOwnProperty(i) && o != null && Ct(t, e, i, null, i2, o);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === mn && (t.onclick = null), Oo(t);
  }
  function ef(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Oo(t);
  }
  var Fe = /* @__PURE__ */ new Map(), qg = /* @__PURE__ */ new Set();
  function Fl(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Kn = lt.d;
  lt.d = {
    f: D2,
    r: N2,
    D: O2,
    C: R2,
    L: j2,
    m: V2,
    X: U2,
    S: _2,
    M: B2
  };
  function D2() {
    var t = Kn.f(), e = Vs();
    return t || e;
  }
  function N2(t) {
    var e = ra(t);
    e !== null && e.tag === 5 && e.type === "form" ? Yp(e) : Kn.r(t);
  }
  var Xa = typeof document > "u" ? null : document;
  function Gg(t, e, n) {
    var i = Xa;
    if (i && typeof e == "string" && e) {
      var o = Ge(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), qg.has(o) || (qg.add(o), t = { rel: t, crossOrigin: n, href: e }, i.querySelector(o) === null && (e = i.createElement("link"), ce(e, "link", t), $t(e), i.head.appendChild(e)));
    }
  }
  function O2(t) {
    Kn.D(t), Gg("dns-prefetch", t, null);
  }
  function R2(t, e) {
    Kn.C(t, e), Gg("preconnect", t, e);
  }
  function j2(t, e, n) {
    Kn.L(t, e, n);
    var i = Xa;
    if (i && t && e) {
      var o = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Ge(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Ge(
        n.imageSizes
      ) + '"]')) : o += '[href="' + Ge(t) + '"]';
      var s = o;
      switch (e) {
        case "style":
          s = Za(t);
          break;
        case "script":
          s = Qa(t);
      }
      if (!(Fe.has(s) || (t = K(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Fe.set(s, t), i.querySelector(o) !== null || e === "style" && i.querySelector(Il(s)) || e === "script" && i.querySelector(Wl(s))))) {
        var f = i.createElement("link");
        ce(f, "link", t), e === "style" && (f[No] = !0, f.onload = f.onerror = function() {
          eh(f);
        }), $t(f), i.head.appendChild(f);
      }
    }
  }
  function V2(t, e) {
    Kn.m(t, e);
    var n = Xa;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Ge(i) + '"][href="' + Ge(t) + '"]', s = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Qa(t);
      }
      if (!Fe.has(s) && (t = K({ rel: "modulepreload", href: t }, e), Fe.set(s, t), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Wl(s)))
              return;
        }
        i = n.createElement("link"), ce(i, "link", t), $t(i), n.head.appendChild(i);
      }
    }
  }
  function _2(t, e, n) {
    Kn.S(t, e, n);
    var i = Xa;
    if (i && t) {
      var o = ua(i).hoistableStyles, s = Za(t);
      e = e || "default";
      var f = o.get(s);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = i.querySelector(
          Il(s)
        ))
          m.loading = 5;
        else {
          t = K(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Fe.get(s)) && nf(t, n);
          var S = f = i.createElement("link");
          $t(S), ce(S, "link", t), S._p = new Promise(function(M, N) {
            S.onload = M, S.onerror = N;
          }), S.addEventListener("load", function() {
            m.loading |= 1;
          }), S.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, qs(f, e, i);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, o.set(s, f);
      }
    }
  }
  function U2(t, e) {
    Kn.X(t, e);
    var n = Xa;
    if (n && t) {
      var i = ua(n).hoistableScripts, o = Qa(t), s = i.get(o);
      s || (s = n.querySelector(Wl(o)), s || (t = K({ src: t, async: !0 }, e), (e = Fe.get(o)) && af(t, e), s = n.createElement("script"), $t(s), ce(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function B2(t, e) {
    Kn.M(t, e);
    var n = Xa;
    if (n && t) {
      var i = ua(n).hoistableScripts, o = Qa(t), s = i.get(o);
      s || (s = n.querySelector(Wl(o)), s || (t = K({ src: t, async: !0, type: "module" }, e), (e = Fe.get(o)) && af(t, e), s = n.createElement("script"), $t(s), ce(s, "link", t), n.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, i.set(o, s));
    }
  }
  function Yg(t, e, n, i) {
    var o = (o = Jn.current) ? Fl(o) : null;
    if (!o) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Za(n.href), e = ua(
          o
        ).hoistableStyles, i = e.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Za(n.href);
          var s = ua(
            o
          ).hoistableStyles, f = s.get(t);
          if (f || (o = o.ownerDocument || o, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(t, f), (s = o.querySelector(
            Il(t)
          )) ? s._p || (f.instance = s, f.state.loading = 5) : (s = Fe.get(t), s || (s = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Fe.set(t, s)), k2(
            o,
            t,
            s,
            f.state
          ))), e && i === null)
            throw Error(u(528, ""));
          return f;
        }
        if (e && i !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Qa(n), e = ua(
          o
        ).hoistableScripts, i = e.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, t));
    }
  }
  function Za(t) {
    return 'href="' + Ge(t) + '"';
  }
  function Il(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Xg(t) {
    return K({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function k2(t, e, n, i) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[No] !== !0) {
        i.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[No] = !0, e.onload = e.onerror = eh.bind(null, e), ce(e, "link", n), $t(e), t.head.appendChild(e);
    i.preload = e, e.addEventListener("load", function() {
      return i.loading |= 1;
    }), e.addEventListener("error", function() {
      return i.loading |= 2;
    });
  }
  function Qa(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function Wl(t) {
    return "script[async]" + t;
  }
  function Zg(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var i = t.querySelector(
            'style[data-href~="' + Ge(n.href) + '"]'
          );
          if (i)
            return e.instance = i, $t(i), i;
          var o = K({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (t.ownerDocument || t).createElement(
            "style"
          ), $t(i), ce(i, "style", o), qs(i, n.precedence, t), e.instance = i;
        case "stylesheet":
          o = Za(n.href);
          var s = t.querySelector(
            Il(o)
          );
          if (s)
            return e.state.loading |= 4, e.instance = s, $t(s), s;
          i = Xg(n), (o = Fe.get(o)) && nf(i, o), s = (t.ownerDocument || t).createElement("link"), $t(s);
          var f = s;
          return f._p = new Promise(function(m, S) {
            f.onload = m, f.onerror = S;
          }), ce(s, "link", i), e.state.loading |= 4, qs(s, n.precedence, t), e.instance = s;
        case "script":
          return s = Qa(n.src), (o = t.querySelector(
            Wl(s)
          )) ? (e.instance = o, $t(o), o) : (i = n, (o = Fe.get(s)) && (i = K({}, n), af(i, o)), t = t.ownerDocument || t, o = t.createElement("script"), $t(o), ce(o, "link", i), t.head.appendChild(o), e.instance = o);
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance, e.state.loading |= 4, qs(i, n.precedence, t));
    return e.instance;
  }
  function qs(t, e, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, s = o, f = 0; f < i.length; f++) {
      var m = i[f];
      if (m.dataset.precedence === e) s = m;
      else if (s !== o) break;
    }
    s ? s.parentNode.insertBefore(t, s.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function nf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function af(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Gs = null;
  function Qg(t, e, n) {
    if (Gs === null) {
      var i = /* @__PURE__ */ new Map(), o = Gs = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = Gs, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
    if (i.has(t)) return i;
    for (i.set(t, null), n = n.getElementsByTagName(t), o = 0; o < n.length; o++) {
      var s = n[o];
      if (!(s[hl] || s[le] || t === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = s.getAttribute(e) || "";
        f = t + f;
        var m = i.get(f);
        m ? m.push(s) : i.set(f, [s]);
      }
    }
    return i;
  }
  function lf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function L2(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Kg(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Pg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Jg(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Fg(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Jg(e), t.suspenseyImages.push(e)), t = G2.bind(t), e.decode().then(t, t));
  }
  function H2(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = Za(i.href), s = e.querySelector(
          Il(o)
        );
        if (s) {
          e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = $l.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = s, $t(s);
          return;
        }
        s = e.ownerDocument || e, i = Xg(i), (o = Fe.get(o)) && nf(i, o), s = s.createElement("link"), $t(s);
        var f = s;
        f._p = new Promise(function(m, S) {
          f.onload = m, f.onerror = S;
        }), ce(s, "link", i), n.instance = s;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = $l.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Ys = 0;
  function q2(t, e) {
    return t.stylesheets && t.count === 0 && Zs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var i = setTimeout(function() {
        if (t.stylesheets && Zs(t, t.stylesheets), t.unsuspend) {
          var s = t.unsuspend;
          t.unsuspend = null, s();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ys === 0 && (Ys = 62500 * l2());
      var o = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Zs(t, t.stylesheets), t.unsuspend)) {
            var s = t.unsuspend;
            t.unsuspend = null, s();
          }
        },
        (t.imgBytes > Ys ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(i), clearTimeout(o);
      };
    } : null;
  }
  function Ig(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Zs(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function $l() {
    this.count--, Ig(this);
  }
  function G2() {
    this.imgCount--, Ig(this);
  }
  var Xs = null;
  function Zs(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Xs = /* @__PURE__ */ new Map(), e.forEach(Y2, t), Xs = null, $l.call(t));
  }
  function Y2(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Xs.get(t);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Xs.set(t, n);
        for (var o = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < o.length; s++) {
          var f = o[s];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), i = f);
        }
        i && n.set(null, i);
      }
      o = e.instance, f = o.getAttribute("data-precedence"), s = n.get(f) || i, s === i && n.set(null, o), n.set(f, o), this.count++, i = $l.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), s ? s.parentNode.insertBefore(o, s.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ka = {
    $$typeof: Ot,
    Provider: null,
    Consumer: null,
    _currentValue: Rn,
    _currentValue2: Rn,
    _threadCount: 0
  };
  function X2(t, e, n, i, o, s, f, m, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kr(0), this.hiddenUpdates = kr(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wg(t, e, n, i, o, s, f, m, S, M, N, B) {
    return t = new X2(
      t,
      e,
      n,
      f,
      S,
      M,
      N,
      B,
      m
    ), e = 1, s === !0 && (e |= 24), s = we(3, null, null, e), t.current = s, s.stateNode = t, e = xu(), e.refCount++, t.pooledCache = e, e.refCount++, s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: e
    }, wu(s), t;
  }
  function $g(t) {
    return t ? (t = xa, t) : xa;
  }
  function t0(t, e, n, i, o, s) {
    o = $g(o), i.context === null ? i.context = o : i.pendingContext = o, i = oi(e), i.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (i.callback = s), n = si(t, i, e), n !== null && (Me(n, t, e), Nl(n, t, e));
  }
  function e0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function of(t, e) {
    e0(t, e), (t = t.alternate) && e0(t, e);
  }
  function n0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vi(t, 67108864);
      e !== null && Me(e, t, 67108864), of(t, 67108864);
    }
  }
  function i0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Le();
      e = Lr(e);
      var n = Vi(t, e);
      n !== null && Me(n, t, e), of(t, e);
    }
  }
  var Pa = !0;
  function Z2(t, e, n, i) {
    var o = I.T;
    I.T = null;
    var s = lt.p;
    try {
      lt.p = 2, sf(t, e, n, i);
    } finally {
      lt.p = s, I.T = o;
    }
  }
  function Q2(t, e, n, i) {
    var o = I.T;
    I.T = null;
    var s = lt.p;
    try {
      lt.p = 8, sf(t, e, n, i);
    } finally {
      lt.p = s, I.T = o;
    }
  }
  function sf(t, e, n, i) {
    if (Pa) {
      var o = rf(i);
      if (o === null)
        qc(
          t,
          e,
          i,
          Qs,
          n
        ), l0(t, i);
      else if (P2(
        o,
        t,
        e,
        n,
        i
      ))
        i.stopPropagation();
      else if (l0(t, i), e & 4 && -1 < K2.indexOf(t)) {
        for (; o !== null; ) {
          var s = ra(o);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var f = Di(s.pendingLanes);
                  if (f !== 0) {
                    var m = s;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - Re(f);
                      m.entanglements[1] |= S, f &= ~S;
                    }
                    An(s), (Et & 6) === 0 && (Os = Ne() + 500, Ql(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Vi(s, 2), m !== null && Me(m, s, 2), Vs(), of(s, 2);
            }
          if (s = rf(i), s === null && qc(
            t,
            e,
            i,
            Qs,
            n
          ), s === o) break;
          o = s;
        }
        o !== null && i.stopPropagation();
      } else
        qc(
          t,
          e,
          i,
          null,
          n
        );
    }
  }
  function rf(t) {
    return t = Qr(t), uf(t);
  }
  var Qs = null;
  function uf(t) {
    if (Qs = null, t = Ni(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Qs = t, null;
  }
  function a0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (lx()) {
          case Yd:
            return 2;
          case Xd:
            return 8;
          case Ao:
          case ox:
            return 32;
          case Zd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cf = !1, xi = null, bi = null, Si = null, to = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), Ti = [], K2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function l0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        xi = null;
        break;
      case "dragenter":
      case "dragleave":
        bi = null;
        break;
      case "mouseover":
      case "mouseout":
        Si = null;
        break;
      case "pointerover":
      case "pointerout":
        to.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        eo.delete(e.pointerId);
    }
  }
  function no(t, e, n, i, o, s) {
    return t === null || t.nativeEvent !== s ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: s,
      targetContainers: [o]
    }, e !== null && (e = ra(e), e !== null && n0(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function P2(t, e, n, i, o) {
    switch (e) {
      case "focusin":
        return xi = no(
          xi,
          t,
          e,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return bi = no(
          bi,
          t,
          e,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return Si = no(
          Si,
          t,
          e,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var s = o.pointerId;
        return to.set(
          s,
          no(
            to.get(s) || null,
            t,
            e,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return s = o.pointerId, eo.set(
          s,
          no(
            eo.get(s) || null,
            t,
            e,
            n,
            i,
            o
          )
        ), !0;
    }
    return !1;
  }
  function o0(t) {
    var e = Ni(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, Wd(t.priority, function() {
              i0(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(n), e !== null) {
            t.blockedOn = e, Wd(t.priority, function() {
              i0(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Ks(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = rf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        Zr = i, n.target.dispatchEvent(i), Zr = null;
      } else
        return e = ra(n), e !== null && n0(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function s0(t, e, n) {
    Ks(t) && n.delete(e);
  }
  function J2() {
    cf = !1, xi !== null && Ks(xi) && (xi = null), bi !== null && Ks(bi) && (bi = null), Si !== null && Ks(Si) && (Si = null), to.forEach(s0), eo.forEach(s0);
  }
  function Ps(t, e) {
    t.blockedOn === e && (t.blockedOn = null, cf || (cf = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      J2
    )));
  }
  var Js = null;
  function r0(t) {
    Js !== t && (Js = t, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Js === t && (Js = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], i = t[e + 1], o = t[e + 2];
          if (typeof i != "function") {
            if (uf(i || n) === null)
              continue;
            break;
          }
          var s = ra(n);
          s !== null && (t.splice(e, 3), e -= 3, Xu(
            s,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: i
            },
            i,
            o
          ));
        }
      }
    ));
  }
  function Ja(t) {
    function e(S) {
      return Ps(S, t);
    }
    xi !== null && Ps(xi, t), bi !== null && Ps(bi, t), Si !== null && Ps(Si, t), to.forEach(e), eo.forEach(e);
    for (var n = 0; n < Ti.length; n++) {
      var i = Ti[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Ti.length && (n = Ti[0], n.blockedOn === null); )
      o0(n), n.blockedOn === null && Ti.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], s = n[i + 1], f = o[Te] || null;
        if (typeof s == "function")
          f || r0(n);
        else if (f) {
          var m = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, f = s[Te] || null)
              m = f.formAction;
            else if (uf(o) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? n[i + 1] = m : (n.splice(i, 3), i -= 3), r0(n);
        }
      }
  }
  function u0() {
    function t(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(f) {
            return o = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      o !== null && (o(), o = null), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, o = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), o !== null && (o(), o = null);
      };
    }
  }
  function ff(t) {
    this._internalRoot = t;
  }
  Fs.prototype.render = ff.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(u(409));
    var n = e.current, i = Le();
    t0(n, i, t, e, null, null);
  }, Fs.prototype.unmount = ff.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      t0(t.current, 2, null, t, null, null), Vs(), e[sa] = null;
    }
  };
  function Fs(t) {
    this._internalRoot = t;
  }
  Fs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Id();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Ti.length && e !== 0 && e < Ti[n].priority; n++) ;
      Ti.splice(n, 0, t), n === 0 && o0(t);
    }
  };
  var c0 = l.version;
  if (c0 !== "19.3.1")
    throw Error(
      u(
        527,
        c0,
        "19.3.1"
      )
    );
  lt.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(u(188)) : (t = Object.keys(t).join(","), Error(u(268, t)));
    return t = v(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var F2 = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Is.isDisabled && Is.supportsFiber)
      try {
        cl = Is.inject(
          F2
        ), Oe = Is;
      } catch {
      }
  }
  return ao.createRoot = function(t, e) {
    if (!c(t)) throw Error(u(299));
    var n = !1, i = "", o = $p, s = tm, f = em;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (s = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Wg(
      t,
      1,
      !1,
      null,
      null,
      n,
      i,
      null,
      o,
      s,
      f,
      u0
    ), t[sa] = e.current, Hc(t), new ff(e);
  }, ao.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(u(299));
    var i = !1, o = "", s = $p, f = tm, m = em, S = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), e = Wg(
      t,
      1,
      !0,
      e,
      n ?? null,
      i,
      o,
      S,
      s,
      f,
      m,
      u0
    ), e.context = $g(null), n = e.current, i = Le(), i = Lr(i), o = oi(i), o.callback = null, si(n, o, i), n = i, e.current.lanes = n, dl(e, n), An(e), t[sa] = e.current, Hc(t), new Fs(e);
  }, ao.version = "19.3.1", ao;
}
var b0;
function oS() {
  if (b0) return pf.exports;
  b0 = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), pf.exports = lS(), pf.exports;
}
var sS = oS();
const ev = Z.createContext({});
function ud(a) {
  const l = Z.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const rS = typeof window < "u", nv = rS ? Z.useLayoutEffect : Z.useEffect, cd = /* @__PURE__ */ Z.createContext(null);
function fd(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function dr(a, l) {
  const r = a.indexOf(l);
  r > -1 && a.splice(r, 1);
}
const fn = (a, l, r) => r > l ? l : r < a ? a : r;
function S0(a, l) {
  return l ? `${a}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : a;
}
let yo = () => {
}, On = () => {
};
typeof process < "u" && process.env?.NODE_ENV !== "production" && (yo = (a, l, r) => {
  !a && typeof console < "u" && console.warn(S0(l, r));
}, On = (a, l, r) => {
  if (!a)
    throw new Error(S0(l, r));
});
const zi = {}, iv = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a), av = (a) => typeof a == "object" && a !== null, lv = (a) => /^0[^.\s]+$/u.test(a);
// @__NO_SIDE_EFFECTS__
function ov(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Ce = /* @__NO_SIDE_EFFECTS__ */ (a) => a, vo = (...a) => a.reduce((l, r) => (u) => r(l(u))), nl = /* @__NO_SIDE_EFFECTS__ */ (a, l, r) => {
  const u = l - a;
  return u ? (r - a) / u : 1;
};
class dd {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return fd(this.subscriptions, l), () => dr(this.subscriptions, l);
  }
  notify(l, r, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, r, u);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, r, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const De = /* @__NO_SIDE_EFFECTS__ */ (a) => a * 1e3, We = /* @__NO_SIDE_EFFECTS__ */ (a) => a / 1e3, hd = /* @__NO_SIDE_EFFECTS__ */ (a, l) => l ? a * (1e3 / l) : 0, sv = (a, l, r) => (((1 - 3 * r + 3 * l) * a + (3 * r - 6 * l)) * a + 3 * l) * a, uS = 1e-7, cS = 12;
function fS(a, l, r, u, c) {
  let h, d, p = 0;
  do
    d = l + (r - l) / 2, h = sv(d, u, c) - a, h > 0 ? r = d : l = d;
  while (Math.abs(h) > uS && ++p < cS);
  return d;
}
// @__NO_SIDE_EFFECTS__
function xo(a, l, r, u) {
  if (a === l && r === u)
    return Ce;
  const c = (h) => fS(h, 0, 1, a, r);
  return (h) => h === 0 || h === 1 ? h : sv(c(h), l, u);
}
const rv = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2, uv = /* @__NO_SIDE_EFFECTS__ */ (a) => (l) => 1 - a(1 - l), cv = /* @__PURE__ */ xo(0.33, 1.53, 0.69, 0.99), pd = /* @__PURE__ */ uv(cv), fv = /* @__PURE__ */ rv(pd), dv = (a) => a >= 1 ? 1 : (a *= 2) < 1 ? 0.5 * pd(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))), md = (a) => 1 - Math.sin(Math.acos(a)), hv = /* @__PURE__ */ uv(md), pv = /* @__PURE__ */ rv(md), dS = /* @__PURE__ */ xo(0.42, 0, 1, 1), hS = /* @__PURE__ */ xo(0, 0, 0.58, 1), mv = /* @__PURE__ */ xo(0.42, 0, 0.58, 1), pS = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] != "number", gv = /* @__NO_SIDE_EFFECTS__ */ (a) => Array.isArray(a) && typeof a[0] == "number", T0 = {
  linear: Ce,
  easeIn: dS,
  easeInOut: mv,
  easeOut: hS,
  circIn: md,
  circInOut: pv,
  circOut: hv,
  backIn: pd,
  backInOut: fv,
  backOut: cv,
  anticipate: dv
}, mS = (a) => typeof a == "string", w0 = (a) => {
  if (/* @__PURE__ */ gv(a)) {
    On(a.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, r, u, c] = a;
    return /* @__PURE__ */ xo(l, r, u, c);
  } else if (mS(a))
    return On(T0[a] !== void 0, `Invalid easing type '${a}'`, "invalid-easing-type"), T0[a];
  return a;
}, Ws = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function gS(a) {
  let l = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), u = !1, c = !1;
  const h = /* @__PURE__ */ new WeakSet();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(v) {
    h.has(v) && (x.schedule(v), a()), v(d);
  }
  const x = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, y = !1, g = !1) => {
      const j = g && u ? l : r;
      return y && h.add(v), j.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      r.delete(v), h.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (d = v, u) {
        c = !0;
        return;
      }
      u = !0;
      const y = l;
      l = r, r = y, l.forEach(p), l.clear(), u = !1, c && (c = !1, x.process(v));
    }
  };
  return x;
}
const yS = 40;
function yv(a, l) {
  let r = !1, u = !0;
  const c = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, h = () => r = !0, d = Ws.reduce((H, X) => (H[X] = gS(h), H), {}), { setup: p, read: x, resolveKeyframes: v, preUpdate: y, update: g, preRender: T, render: j, postRender: O } = d, _ = () => {
    const H = zi.useManualTiming, X = H ? c.timestamp : performance.now();
    r = !1, H || (c.delta = u ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, yS), 1)), c.timestamp = X, c.isProcessing = !0, p.process(c), x.process(c), v.process(c), y.process(c), g.process(c), T.process(c), j.process(c), O.process(c), c.isProcessing = !1, r && l && (u = !1, a(_));
  }, V = () => {
    r = !0, u = !0, c.isProcessing || a(_);
  };
  return { schedule: Ws.reduce((H, X) => {
    const at = d[X];
    return H[X] = (ft, K = !1, Y = !1) => (r || V(), at.schedule(ft, K, Y)), H;
  }, {}), cancel: (H) => {
    for (let X = 0; X < Ws.length; X++)
      d[Ws[X]].cancel(H);
  }, state: c, steps: d };
}
const { schedule: Tt, cancel: dn, state: ie, steps: vf } = /* @__PURE__ */ yv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ce, !0);
let ar;
function vS() {
  ar = void 0;
}
const be = {
  now: () => (ar === void 0 && be.set(ie.isProcessing || zi.useManualTiming ? ie.timestamp : performance.now()), ar),
  set: (a) => {
    ar = a, queueMicrotask(vS);
  }
}, vv = (a) => (l) => typeof l == "string" && l.startsWith(a), xv = /* @__PURE__ */ vv("--"), xS = /* @__PURE__ */ vv("var(--"), gd = (a) => xS(a) ? bS.test(a.split("/*")[0].trim()) : !1, bS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function E0(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const ol = {
  test: (a) => typeof a == "number",
  parse: parseFloat,
  transform: (a) => a
}, ho = {
  ...ol,
  transform: (a) => fn(0, 1, a)
}, $s = {
  ...ol,
  default: 1
}, ro = (a) => Math.round(a * 1e5) / 1e5, yd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function SS(a) {
  return a == null;
}
const TS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vd = (a, l) => (r) => !!(typeof r == "string" && TS.test(r) && r.startsWith(a) || l && !SS(r) && Object.prototype.hasOwnProperty.call(r, l)), bv = (a, l, r) => (u) => {
  if (typeof u != "string")
    return u;
  const [c, h, d, p] = u.match(yd);
  return {
    [a]: parseFloat(c),
    [l]: parseFloat(h),
    [r]: parseFloat(d),
    alpha: p !== void 0 ? parseFloat(p) : 1
  };
}, wS = (a) => fn(0, 255, a), xf = {
  ...ol,
  transform: (a) => Math.round(wS(a))
}, ea = {
  test: /* @__PURE__ */ vd("rgb", "red"),
  parse: /* @__PURE__ */ bv("red", "green", "blue"),
  transform: ({ red: a, green: l, blue: r, alpha: u = 1 }) => "rgba(" + xf.transform(a) + ", " + xf.transform(l) + ", " + xf.transform(r) + ", " + ro(ho.transform(u)) + ")"
};
function ES(a) {
  let l = "", r = "", u = "", c = "";
  return a.length > 5 ? (l = a.substring(1, 3), r = a.substring(3, 5), u = a.substring(5, 7), c = a.substring(7, 9)) : (l = a.substring(1, 2), r = a.substring(2, 3), u = a.substring(3, 4), c = a.substring(4, 5), l += l, r += r, u += u, c += c), {
    red: parseInt(l, 16),
    green: parseInt(r, 16),
    blue: parseInt(u, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const _f = {
  test: /* @__PURE__ */ vd("#"),
  parse: ES,
  transform: ea.transform
}, bo = /* @__NO_SIDE_EFFECTS__ */ (a) => ({
  test: (l) => typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${a}`
}), Pn = /* @__PURE__ */ bo("deg"), Nn = /* @__PURE__ */ bo("%"), F = /* @__PURE__ */ bo("px"), AS = /* @__PURE__ */ bo("vh"), zS = /* @__PURE__ */ bo("vw"), A0 = {
  ...Nn,
  parse: (a) => Nn.parse(a) / 100,
  transform: (a) => Nn.transform(a * 100)
}, Wa = {
  test: /* @__PURE__ */ vd("hsl", "hue"),
  parse: /* @__PURE__ */ bv("hue", "saturation", "lightness"),
  transform: ({ hue: a, saturation: l, lightness: r, alpha: u = 1 }) => "hsla(" + Math.round(a) + ", " + Nn.transform(ro(l)) + ", " + Nn.transform(ro(r)) + ", " + ro(ho.transform(u)) + ")"
}, Pt = {
  test: (a) => ea.test(a) || _f.test(a) || Wa.test(a),
  parse: (a) => ea.test(a) ? ea.parse(a) : Wa.test(a) ? Wa.parse(a) : _f.parse(a),
  transform: (a) => typeof a == "string" ? a : a.hasOwnProperty("red") ? ea.transform(a) : Wa.transform(a),
  getAnimatableNone: (a) => {
    const l = Pt.parse(a);
    return l.alpha = 0, Pt.transform(l);
  }
}, MS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function CS(a) {
  return isNaN(a) && typeof a == "string" && (a.match(yd)?.length || 0) + (a.match(MS)?.length || 0) > 0;
}
const Sv = "number", Tv = "color", DS = "var", NS = "var(", z0 = "${}", OS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function il(a) {
  const l = a.toString(), r = [], u = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const p = l.replace(OS, (x) => (Pt.test(x) ? (u.color.push(h), c.push(Tv), r.push(Pt.parse(x))) : x.startsWith(NS) ? (u.var.push(h), c.push(DS), r.push(x)) : (u.number.push(h), c.push(Sv), r.push(parseFloat(x))), ++h, z0)).split(z0);
  return { values: r, split: p, indexes: u, types: c };
}
function RS(a) {
  return il(a).values;
}
function wv({ split: a, types: l }) {
  const r = a.length;
  return (u) => {
    let c = "";
    for (let h = 0; h < r; h++)
      if (c += a[h], u[h] !== void 0) {
        const d = l[h];
        d === Sv ? c += ro(u[h]) : d === Tv ? c += Pt.transform(u[h]) : c += u[h];
      }
    return c;
  };
}
function jS(a) {
  return wv(il(a));
}
const VS = (a) => typeof a == "number" ? 0 : Pt.test(a) ? Pt.getAnimatableNone(a) : a, _S = (a, l) => typeof a == "number" ? l?.trim().endsWith("/") ? a : 0 : VS(a);
function US(a) {
  const l = il(a);
  return wv(l)(l.values.map((u, c) => _S(u, l.split[c])));
}
const cn = {
  test: CS,
  parse: RS,
  createTransformer: jS,
  getAnimatableNone: US
};
function bf(a, l, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? a + (l - a) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? a + (l - a) * (2 / 3 - r) * 6 : a;
}
function BS({ hue: a, saturation: l, lightness: r, alpha: u }) {
  a /= 360, l /= 100, r /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = r;
  else {
    const p = r < 0.5 ? r * (1 + l) : r + l - r * l, x = 2 * r - p;
    c = bf(x, p, a + 1 / 3), h = bf(x, p, a), d = bf(x, p, a - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: u
  };
}
function hr(a, l) {
  return (r) => r > 0 ? l : a;
}
const Vt = (a, l, r) => a + (l - a) * r, Sf = (a, l, r) => {
  const u = a * a, c = r * (l * l - u) + u;
  return c < 0 ? 0 : Math.sqrt(c);
}, kS = [_f, ea, Wa], LS = (a) => kS.find((l) => l.test(a));
function M0(a) {
  const l = LS(a);
  if (yo(!!l, `'${a}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l)
    return !1;
  let r = l.parse(a);
  return l === Wa && (r = BS(r)), r;
}
const C0 = (a, l) => {
  const r = M0(a), u = M0(l);
  if (!r || !u)
    return hr(a, l);
  const c = { ...r };
  return (h) => (c.red = Sf(r.red, u.red, h), c.green = Sf(r.green, u.green, h), c.blue = Sf(r.blue, u.blue, h), c.alpha = Vt(r.alpha, u.alpha, h), ea.transform(c));
}, Uf = /* @__PURE__ */ new Set(["none", "hidden"]);
function HS(a, l) {
  return Uf.has(a) ? (r) => r <= 0 ? a : l : (r) => r >= 1 ? l : a;
}
function qS(a, l) {
  return (r) => Vt(a, l, r);
}
function xd(a) {
  return typeof a == "number" ? qS : typeof a == "string" ? gd(a) ? hr : Pt.test(a) ? C0 : XS : Array.isArray(a) ? Ev : typeof a == "object" ? Pt.test(a) ? C0 : GS : hr;
}
function Ev(a, l) {
  const r = [...a], u = r.length, c = a.map((h, d) => xd(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < u; d++)
      r[d] = c[d](h);
    return r;
  };
}
function GS(a, l) {
  const r = { ...a, ...l }, u = {};
  for (const c in r)
    a[c] !== void 0 && l[c] !== void 0 && (u[c] = xd(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in u)
      r[h] = u[h](c);
    return r;
  };
}
function YS(a, l) {
  const r = [], u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = a.indexes[h][u[h]], p = a.values[d] ?? 0;
    r[c] = p, u[h]++;
  }
  return r;
}
const XS = (a, l) => {
  const r = cn.createTransformer(l), u = il(a), c = il(l);
  return u.indexes.var.length === c.indexes.var.length && u.indexes.color.length === c.indexes.color.length && u.indexes.number.length >= c.indexes.number.length ? Uf.has(a) && !c.values.length || Uf.has(l) && !u.values.length ? HS(a, l) : vo(Ev(YS(u, c), c.values), r) : (yo(!0, `Complex values '${a}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), hr(a, l));
};
function Av(a, l, r) {
  return typeof a == "number" && typeof l == "number" && typeof r == "number" ? Vt(a, l, r) : xd(a)(a, l);
}
const ZS = (a) => {
  const l = ({ timestamp: r }) => a(r);
  return {
    start: (r = !0) => Tt.update(l, r),
    stop: () => dn(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ie.isProcessing ? ie.timestamp : be.now()
  };
}, zv = (a, l, r = 10) => {
  let u = "";
  const c = Math.max(Math.round(l / r), 2);
  for (let h = 0; h < c; h++)
    u += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${u.substring(0, u.length - 2)})`;
}, pr = 2e4;
function bd(a) {
  let l = 0;
  const r = 50;
  let u = a.next(l);
  for (; !u.done && l < pr; )
    l += r, u = a.next(l);
  return l >= pr ? 1 / 0 : l;
}
function QS(a, l = 100, r) {
  const u = r({ ...a, keyframes: [0, l] }), c = Math.min(bd(u), pr);
  return {
    type: "keyframes",
    ease: (h) => u.next(c * h).value / l,
    duration: /* @__PURE__ */ We(c)
  };
}
const Ht = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function Bf(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const KS = 12;
function PS(a, l, r) {
  let u = r;
  for (let c = 1; c < KS; c++)
    u = u - a(u) / l(u);
  return u;
}
const Tf = 1e-3;
function JS({ duration: a = Ht.duration, bounce: l = Ht.bounce, velocity: r = Ht.velocity, mass: u = Ht.mass }) {
  let c, h;
  yo(a <= /* @__PURE__ */ De(Ht.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let d = 1 - l;
  d = fn(Ht.minDamping, Ht.maxDamping, d), a = fn(Ht.minDuration, Ht.maxDuration, /* @__PURE__ */ We(a)), d < 1 ? (c = (v) => {
    const y = v * d, g = y * a, T = y - r, j = Bf(v, d), O = Math.exp(-g);
    return Tf - T / j * O;
  }, h = (v) => {
    const g = v * d * a, T = g * r + r, j = Math.pow(d, 2) * Math.pow(v, 2) * a, O = Math.exp(-g), _ = Bf(Math.pow(v, 2), d);
    return (-c(v) + Tf > 0 ? -1 : 1) * ((T - j) * O) / _;
  }) : (c = (v) => {
    const y = Math.exp(-v * a), g = (v - r) * a + 1;
    return -Tf + y * g;
  }, h = (v) => {
    const y = Math.exp(-v * a), g = (r - v) * (a * a);
    return y * g;
  });
  const p = 5 / a, x = PS(c, h, p);
  if (a = /* @__PURE__ */ De(a), isNaN(x))
    return {
      stiffness: Ht.stiffness,
      damping: Ht.damping,
      duration: a
    };
  {
    const v = Math.pow(x, 2) * u;
    return {
      stiffness: v,
      damping: d * 2 * Math.sqrt(u * v),
      duration: a
    };
  }
}
const FS = ["duration", "bounce"], IS = ["stiffness", "damping", "mass"];
function D0(a, l) {
  return l.some((r) => a[r] !== void 0);
}
function WS(a) {
  let l = {
    velocity: Ht.velocity,
    stiffness: Ht.stiffness,
    damping: Ht.damping,
    mass: Ht.mass,
    isResolvedFromDuration: !1,
    ...a
  };
  if (!D0(a, IS) && D0(a, FS))
    if (l.velocity = 0, a.visualDuration) {
      const r = a.visualDuration, u = 2 * Math.PI / (r * 1.2), c = u * u, h = 2 * fn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Ht.mass,
        stiffness: c,
        damping: h
      };
    } else {
      const r = JS({ ...a, velocity: 0 });
      l = {
        ...l,
        ...r,
        mass: Ht.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function mr(a = Ht.visualDuration, l = Ht.bounce) {
  const r = typeof a != "object" ? {
    visualDuration: a,
    keyframes: [0, 1],
    bounce: l
  } : a;
  let { restSpeed: u, restDelta: c } = r;
  const h = r.keyframes[0], d = r.keyframes[r.keyframes.length - 1], p = { done: !1, value: h }, { stiffness: x, damping: v, mass: y, duration: g, velocity: T, isResolvedFromDuration: j } = WS({
    ...r,
    velocity: -/* @__PURE__ */ We(r.velocity || 0)
  }), O = T || 0, _ = v / (2 * Math.sqrt(x * y)), V = d - h, R = /* @__PURE__ */ We(Math.sqrt(x / y)), k = Math.abs(V) < 5;
  u || (u = k ? Ht.restSpeed.granular : Ht.restSpeed.default), c || (c = k ? Ht.restDelta.granular : Ht.restDelta.default);
  let H, X, at, ft, K, Y;
  if (_ < 1)
    at = Bf(R, _), ft = (O + _ * R * V) / at, H = ($) => {
      const vt = Math.exp(-_ * R * $);
      return d - vt * (ft * Math.sin(at * $) + V * Math.cos(at * $));
    }, K = _ * R * ft + V * at, Y = _ * R * V - ft * at, X = ($) => Math.exp(-_ * R * $) * (K * Math.sin(at * $) + Y * Math.cos(at * $));
  else if (_ === 1) {
    H = (vt) => d - Math.exp(-R * vt) * (V + (O + R * V) * vt);
    const $ = O + R * V;
    X = (vt) => Math.exp(-R * vt) * (R * $ * vt - O);
  } else {
    const $ = R * Math.sqrt(_ * _ - 1);
    H = (It) => {
      const Ot = Math.exp(-_ * R * It), q = Math.min($ * It, 300);
      return d - Ot * ((O + _ * R * V) * Math.sinh(q) + $ * V * Math.cosh(q)) / $;
    };
    const vt = (O + _ * R * V) / $, Nt = _ * R * vt - V * $, pe = _ * R * V - vt * $;
    X = (It) => {
      const Ot = Math.exp(-_ * R * It), q = Math.min($ * It, 300);
      return Ot * (Nt * Math.sinh(q) + pe * Math.cosh(q));
    };
  }
  const Dt = {
    calculatedDuration: j && g || null,
    velocity: ($) => /* @__PURE__ */ De(X($)),
    next: ($) => {
      if (!j && _ < 1) {
        const Nt = Math.exp(-_ * R * $), pe = Math.sin(at * $), It = Math.cos(at * $), Ot = d - Nt * (ft * pe + V * It), q = /* @__PURE__ */ De(Nt * (K * pe + Y * It));
        return p.done = Math.abs(q) <= u && Math.abs(d - Ot) <= c, p.value = p.done ? d : Ot, p;
      }
      const vt = H($);
      if (j)
        p.done = $ >= g;
      else {
        const Nt = /* @__PURE__ */ De(X($));
        p.done = Math.abs(Nt) <= u && Math.abs(d - vt) <= c;
      }
      return p.value = p.done ? d : vt, p;
    },
    toString: () => {
      const $ = Math.min(bd(Dt), pr), vt = zv((Nt) => Dt.next($ * Nt).value, $, 30);
      return $ + "ms " + vt;
    },
    toTransition: () => {
    }
  };
  return Dt;
}
mr.applyToOptions = (a) => {
  const l = QS(a, 100, mr);
  return a.ease = l.ease, a.duration = /* @__PURE__ */ De(l.duration), a.type = "keyframes", a;
};
const $S = 5;
function Mv(a, l, r) {
  const u = Math.max(l - $S, 0);
  return /* @__PURE__ */ hd(r - a(u), l - u);
}
function kf({ keyframes: a, velocity: l = 0, power: r = 0.8, timeConstant: u = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: p, max: x, restDelta: v = 0.5, restSpeed: y }) {
  const g = a[0], T = {
    done: !1,
    value: g
  }, j = (Y) => p !== void 0 && Y < p || x !== void 0 && Y > x, O = (Y) => p === void 0 ? x : x === void 0 || Math.abs(p - Y) < Math.abs(x - Y) ? p : x;
  let _ = r * l;
  const V = g + _, R = d === void 0 ? V : d(V);
  R !== V && (_ = R - g);
  const k = (Y) => -_ * Math.exp(-Y / u), H = (Y) => R + k(Y), X = (Y) => {
    const Dt = k(Y), $ = H(Y);
    T.done = Math.abs(Dt) <= v, T.value = T.done ? R : $;
  };
  let at, ft;
  const K = (Y) => {
    j(T.value) && (at = Y, ft = mr({
      keyframes: [T.value, O(T.value)],
      velocity: Mv(H, Y, T.value),
      // TODO: This should be passing * 1000
      damping: c,
      stiffness: h,
      restDelta: v,
      restSpeed: y
    }));
  };
  return K(0), {
    calculatedDuration: null,
    next: (Y) => {
      let Dt = !1;
      return !ft && at === void 0 && (Dt = !0, X(Y), K(Y)), at !== void 0 && Y >= at ? ft.next(Y - at) : (!Dt && X(Y), T);
    }
  };
}
function tT(a, l, r) {
  const u = [], c = r || zi.mix || Av, h = a.length - 1;
  for (let d = 0; d < h; d++) {
    let p = c(a[d], a[d + 1]);
    if (l) {
      const x = Array.isArray(l) ? l[d] || Ce : l;
      p = vo(x, p);
    }
    u.push(p);
  }
  return u;
}
function Cv(a, l, { clamp: r = !0, ease: u, mixer: c } = {}) {
  const h = a.length;
  if (On(h === l.length, "Both input and output ranges must be the same length", "range-length"), h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = a[0] === a[1];
  a[0] > a[h - 1] && (a = [...a].reverse(), l = [...l].reverse());
  const p = tT(l, u, c), x = p.length, v = (y) => {
    if (d && y < a[0])
      return l[0];
    let g = 0;
    if (x > 1)
      for (; g < a.length - 2 && !(y < a[g + 1]); g++)
        ;
    const T = /* @__PURE__ */ nl(a[g], a[g + 1], y);
    return p[g](T);
  };
  return r ? (y) => v(fn(a[0], a[h - 1], y)) : v;
}
function eT(a, l) {
  const r = a[a.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = /* @__PURE__ */ nl(0, l, u);
    a.push(Vt(r, 1, c));
  }
}
function Dv(a) {
  const l = [0];
  return eT(l, a.length - 1), l;
}
function nT(a, l) {
  return a.map((r) => r * l);
}
function iT(a, l) {
  return a.map(() => l || mv).splice(0, a.length - 1);
}
function uo({ duration: a = 300, keyframes: l, times: r, ease: u = "easeInOut" }) {
  const c = /* @__PURE__ */ pS(u) ? u.map(w0) : w0(u), h = {
    done: !1,
    value: l[0]
  }, d = nT(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === l.length ? r : Dv(l),
    a
  ), p = Cv(d, l, {
    ease: Array.isArray(c) ? c : iT(l, c)
  });
  return {
    calculatedDuration: a,
    next: (x) => (h.value = p(x), h.done = x >= a, h)
  };
}
const aT = (a) => a !== null;
function Ar(a, { repeat: l, repeatType: r = "loop" }, u, c = 1) {
  const h = a.filter(aT), p = c < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !p || u === void 0 ? h[p] : u;
}
const lT = {
  decay: kf,
  inertia: kf,
  tween: uo,
  keyframes: uo,
  spring: mr
};
function Nv(a) {
  typeof a.type == "string" && (a.type = lT[a.type]);
}
class Sd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
}
const oT = (a) => a / 100;
class gr extends Sd {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: r } = this.options;
      r && r.updatedAt !== be.now() && this.tick(be.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    Nv(l);
    const { type: r = uo, repeat: u = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: p } = l;
    const x = r || uo;
    x !== uo && typeof p[0] != "number" && (this.mixKeyframes = vo(oT, Av(p[0], p[1])), p = [0, 100]);
    const v = x({ ...l, keyframes: p });
    h === "mirror" && (this.mirroredGenerator = x({
      ...l,
      keyframes: [...p].reverse(),
      velocity: -d
    })), v.calculatedDuration === null && (v.calculatedDuration = bd(v));
    const { calculatedDuration: y } = v;
    this.calculatedDuration = y, this.resolvedDuration = y + c, this.totalDuration = this.resolvedDuration * (u + 1) - c, this.generator = v;
  }
  updateTime(l) {
    const r = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(l, r = !1) {
    const { generator: u, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: p, calculatedDuration: x } = this;
    if (this.startTime === null)
      return u.next(0);
    const { delay: v = 0, keyframes: y, repeat: g, repeatType: T, repeatDelay: j, type: O, onUpdate: _, finalKeyframe: V } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
    const R = this.currentTime - v * (this.playbackSpeed >= 0 ? 1 : -1), k = this.playbackSpeed >= 0 ? R < 0 : R > c;
    this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let H = this.currentTime, X = u;
    if (g) {
      const Y = Math.min(this.currentTime, c) / p;
      let Dt = Math.floor(Y), $ = Y % 1;
      !$ && Y >= 1 && ($ = 1), $ === 1 && Dt--, Dt = Math.min(Dt, g + 1), !!(Dt % 2) && (T === "reverse" ? ($ = 1 - $, j && ($ -= j / p)) : T === "mirror" && (X = d)), H = fn(0, 1, $) * p;
    }
    let at;
    k ? (this.delayState.value = y[0], at = this.delayState) : at = X.next(H), h && !k && (at.value = h(at.value));
    let { done: ft } = at;
    !k && x !== null && (ft = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const K = this.holdTime === null && (this.state === "finished" || this.state === "running" && ft);
    return K && O !== kf && (at.value = Ar(y, this.options, V, this.speed)), _ && _(at.value), K && this.finish(), at;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, r) {
    return this.finished.then(l, r);
  }
  get duration() {
    return /* @__PURE__ */ We(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ We(l);
  }
  get time() {
    return /* @__PURE__ */ We(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ De(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(l);
    const r = this.generator.next(l).value;
    return Mv((u) => this.generator.next(u).value, l, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const r = this.playbackSpeed !== l;
    r && this.driver && this.updateTime(be.now()), this.playbackSpeed = l, r && this.driver && (this.time = /* @__PURE__ */ We(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = ZS, startTime: r } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const u = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = u) : this.holdTime !== null ? this.startTime = u - this.holdTime : this.startTime || (this.startTime = r ?? u), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(be.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
function sT(a) {
  for (let l = 1; l < a.length; l++)
    a[l] ?? (a[l] = a[l - 1]);
}
const na = (a) => a * 180 / Math.PI, Lf = (a) => {
  const l = na(Math.atan2(a[1], a[0]));
  return Hf(l);
}, rT = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
  rotate: Lf,
  rotateZ: Lf,
  skewX: (a) => na(Math.atan(a[1])),
  skewY: (a) => na(Math.atan(a[2])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2
}, Hf = (a) => (a = a % 360, a < 0 && (a += 360), a), N0 = Lf, O0 = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]), R0 = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]), uT = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: O0,
  scaleY: R0,
  scale: (a) => (O0(a) + R0(a)) / 2,
  rotateX: (a) => Hf(na(Math.atan2(a[6], a[5]))),
  rotateY: (a) => Hf(na(Math.atan2(-a[2], a[0]))),
  rotateZ: N0,
  rotate: N0,
  skewX: (a) => na(Math.atan(a[4])),
  skewY: (a) => na(Math.atan(a[1])),
  skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2
};
function qf(a) {
  return a.includes("scale") ? 1 : 0;
}
function Gf(a, l) {
  if (!a || a === "none")
    return qf(l);
  const r = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (r)
    u = uT, c = r;
  else {
    const p = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    u = rT, c = p;
  }
  if (!c)
    return qf(l);
  const h = u[l], d = c[1].split(",").map(fT);
  return typeof h == "function" ? h(d) : d[h];
}
const cT = (a, l) => {
  const { transform: r = "none" } = getComputedStyle(a);
  return Gf(r, l);
};
function fT(a) {
  return parseFloat(a.trim());
}
const sl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], rl = /* @__PURE__ */ new Set([...sl, "pathRotation"]), j0 = (a) => a === ol || a === F, dT = /* @__PURE__ */ new Set(["x", "y", "z"]), hT = sl.filter((a) => !dT.has(a));
function pT(a) {
  const l = [];
  return hT.forEach((r) => {
    const u = a.getValue(r);
    u !== void 0 && (l.push([r, u.get()]), u.set(r.startsWith("scale") ? 1 : 0));
  }), l;
}
const Ai = {
  // Dimensions
  width: ({ x: a }, { paddingLeft: l = "0", paddingRight: r = "0", boxSizing: u }) => {
    const c = a.max - a.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  height: ({ y: a }, { paddingTop: l = "0", paddingBottom: r = "0", boxSizing: u }) => {
    const c = a.max - a.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(r);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  // Transform
  x: (a, { transform: l }) => Gf(l, "x"),
  y: (a, { transform: l }) => Gf(l, "y")
};
Ai.translateX = Ai.x;
Ai.translateY = Ai.y;
const ia = /* @__PURE__ */ new Set();
let Yf = !1, Xf = !1, Zf = !1;
function Ov() {
  if (Xf) {
    const a = Array.from(ia).filter((u) => u.needsMeasurement), l = new Set(a.map((u) => u.element)), r = /* @__PURE__ */ new Map();
    l.forEach((u) => {
      const c = pT(u);
      c.length && (r.set(u, c), u.render());
    }), a.forEach((u) => u.measureInitialState()), l.forEach((u) => {
      u.render();
      const c = r.get(u);
      c && c.forEach(([h, d]) => {
        u.getValue(h)?.set(d);
      });
    }), a.forEach((u) => u.measureEndState()), a.forEach((u) => {
      u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
    });
  }
  Xf = !1, Yf = !1, ia.forEach((a) => a.complete(Zf)), ia.clear();
}
function Rv() {
  ia.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (Xf = !0);
  });
}
function mT() {
  Zf = !0, Rv(), Ov(), Zf = !1;
}
class Td {
  constructor(l, r, u, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = u, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ia.add(this), Yf || (Yf = !0, Tt.read(Rv), Tt.resolveKeyframes(Ov))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: r, element: u, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (u && r) {
        const p = u.readValue(r, d);
        p != null && (l[0] = p);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    sT(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), ia.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ia.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const gT = (a) => a.startsWith("--");
function jv(a, l, r) {
  gT(l) ? a.style.setProperty(l, r) : a.style[l] = r;
}
const yT = {};
function wd(a, l) {
  const r = /* @__PURE__ */ ov(a);
  return () => yT[l] ?? r();
}
const Ed = /* @__PURE__ */ wd(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Vv = /* @__PURE__ */ wd(() => window.ViewTimeline !== void 0, "viewTimeline"), _v = /* @__PURE__ */ wd(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), oo = ([a, l, r, u]) => `cubic-bezier(${a}, ${l}, ${r}, ${u})`, V0 = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ oo([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ oo([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ oo([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ oo([0.33, 1.53, 0.69, 0.99])
};
function Uv(a, l) {
  if (a)
    return typeof a == "function" ? _v() ? zv(a, l) : "ease-out" : /* @__PURE__ */ gv(a) ? oo(a) : Array.isArray(a) ? a.map((r) => Uv(r, l) || V0.easeOut) : V0[a];
}
function vT(a, l, r, { delay: u = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: p = "easeOut", times: x } = {}, v = void 0) {
  const y = {
    [l]: r
  };
  x && (y.offset = x);
  const g = Uv(p, c);
  Array.isArray(g) && (y.easing = g);
  const T = {
    delay: u,
    duration: c,
    easing: Array.isArray(g) ? "linear" : g,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return v && (T.pseudoElement = v), a.animate(y, T);
}
function Bv(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function xT({ type: a, ...l }) {
  return Bv(a) && _v() ? a.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class kv extends Sd {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: r, name: u, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: p, onComplete: x } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, On(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const v = xT(l);
    this.animation = vT(r, u, c, v, h), v.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const y = Ar(c, this.options, p, this.speed);
        this.updateMotionValue && this.updateMotionValue(y), jv(r, u, y), this.animation.cancel();
      }
      x?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ We(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ We(l);
  }
  get time() {
    return /* @__PURE__ */ We(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ De(l), r && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, rangeStart: r, rangeEnd: u, observe: c }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && Ed() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), u && (this.animation.rangeEnd = u), Ce) : c(this);
  }
}
const Lv = {
  anticipate: dv,
  backInOut: fv,
  circInOut: pv
};
function bT(a) {
  return a in Lv;
}
function ST(a) {
  typeof a.ease == "string" && bT(a.ease) && (a.ease = Lv[a.ease]);
}
const wf = 10;
class TT extends kv {
  constructor(l) {
    ST(l), Nv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: r, onUpdate: u, onComplete: c, element: h, ...d } = this.options;
    if (!r)
      return;
    if (l !== void 0) {
      r.set(l);
      return;
    }
    const p = new gr({
      ...d,
      autoplay: !1
    }), x = Math.max(wf, be.now() - this.startTime), v = fn(0, wf, x - wf), y = p.sample(x).value, { name: g } = this.options;
    h && g && jv(h, g, y), r.setWithVelocity(p.sample(Math.max(0, x - v)).value, y, v), p.stop();
  }
}
const _0 = (a, l) => l === "zIndex" ? !1 : !!(typeof a == "number" || Array.isArray(a) || typeof a == "string" && // It's animatable if we have a string
(cn.test(a) || a === "0") && // And it contains numbers and/or colors
!a.startsWith("url("));
function wT(a) {
  const l = a[0];
  if (a.length === 1)
    return !0;
  for (let r = 0; r < a.length; r++)
    if (a[r] !== l)
      return !0;
}
function ET(a, l, r, u) {
  const c = a[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = a[a.length - 1], d = _0(c, l), p = _0(h, l);
  return yo(d === p, `You are trying to animate ${l} from "${c}" to "${h}". "${d ? h : c}" is not an animatable value.`, "value-not-animatable"), !d || !p ? !1 : wT(a) || (r === "spring" || Bv(r)) && u;
}
function Qf(a) {
  a.duration = 0, a.type = "keyframes";
}
const Hv = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), AT = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function zT(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && AT.test(a[l]))
      return !0;
  return !1;
}
const MT = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), CT = /* @__PURE__ */ ov(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function DT(a) {
  const { motionValue: l, name: r, repeatDelay: u, repeatType: c, damping: h, type: d, keyframes: p } = a, x = l?.owner?.current;
  if (!(x instanceof HTMLElement) && !(x instanceof SVGElement))
    return !1;
  const { onUpdate: v, transformTemplate: y } = l.owner.getProps();
  return CT() && r && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Hv.has(r) || MT.has(r) && zT(p)) && (r !== "transform" || !y) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !v && !u && c !== "mirror" && h !== 0 && d !== "inertia";
}
const NT = 40;
class OT extends Sd {
  constructor({ autoplay: l = !0, delay: r = 0, type: u = "keyframes", repeat: c = 0, repeatDelay: h = 0, repeatType: d = "loop", keyframes: p, name: x, motionValue: v, element: y, ...g }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = be.now();
    const T = {
      autoplay: l,
      delay: r,
      type: u,
      repeat: c,
      repeatDelay: h,
      repeatType: d,
      name: x,
      motionValue: v,
      element: y,
      ...g
    }, j = y?.KeyframeResolver || Td;
    this.keyframeResolver = new j(p, (O, _, V) => this.onKeyframesResolved(O, _, T, !V), x, v, y), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, r, u, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: p, delay: x, isHandoff: v, onUpdate: y } = u;
    this.resolvedAt = be.now();
    let g = !0;
    ET(l, h, d, p) || (g = !1, (zi.instantAnimations || !x) && y?.(Ar(l, u, r)), l[0] = l[l.length - 1], Qf(u), u.repeat = 0);
    const j = {
      startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > NT ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: r,
      ...u,
      keyframes: l
    }, O = g && !v && DT(j), _ = j.motionValue?.owner?.current;
    let V;
    if (O)
      try {
        V = new TT({
          ...j,
          element: _
        });
      } catch {
        V = new gr(j);
      }
    else
      V = new gr(j);
    V.finished.then(() => {
      this.notifyFinished();
    }).catch(Ce), this.pendingTimeline && (this.stopTimeline = V.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = V;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, r) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), mT()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function qv(a, l, r, u = 0, c = 1) {
  const h = Array.from(a).sort((v, y) => v.sortNodePosition(y)).indexOf(l), d = a.size, p = (d - 1) * u;
  return typeof r == "function" ? r(h, d) : c === 1 ? h * u : p - h * u;
}
const U0 = 30, RT = (a) => !isNaN(parseFloat(a));
class jT {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (u) => {
      const c = be.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(u), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const h of this.dependents)
          h.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = r.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = be.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = RT(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, r) {
    this.events[l] || (this.events[l] = new dd());
    const u = this.events[l].add(r);
    return l === "change" ? () => {
      u(), Tt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : u;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, r) {
    this.passiveEffect = l, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, r, u) {
    this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - u;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, r = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = be.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > U0)
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, U0);
    return /* @__PURE__ */ hd(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Dn(a, l) {
  return new jT(a, l);
}
function Ad(a, l) {
  if (a?.inherit && l) {
    const { inherit: r, ...u } = a;
    return { ...l, ...u };
  }
  return a;
}
function zd(a, l) {
  const r = a?.[l] ?? a?.default ?? a;
  return r !== a ? Ad(r, a) : r;
}
const VT = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, _T = (a) => ({
  type: "spring",
  stiffness: 550,
  damping: a === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), UT = {
  type: "keyframes",
  duration: 0.8
}, BT = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, kT = (a, { keyframes: l }) => l.length > 2 ? UT : rl.has(a) ? a.startsWith("scale") ? _T(l[1]) : VT : BT, LT = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function HT(a) {
  for (const l in a)
    if (!LT.has(l))
      return !0;
  return !1;
}
const Md = (a, l, r, u = {}, c, h) => (d) => {
  const p = zd(u, a) || {}, x = p.delay || u.delay || 0;
  let { elapsed: v = 0 } = u;
  v = v - /* @__PURE__ */ De(x);
  const y = {
    keyframes: Array.isArray(r) ? r : [null, r],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...p,
    delay: -v,
    onUpdate: (T) => {
      l.set(T), p.onUpdate && p.onUpdate(T);
    },
    onComplete: () => {
      d(), p.onComplete && p.onComplete();
    },
    name: a,
    motionValue: l,
    element: h ? void 0 : c
  };
  HT(p) || Object.assign(y, kT(a, y)), y.duration && (y.duration = /* @__PURE__ */ De(y.duration)), y.repeatDelay && (y.repeatDelay = /* @__PURE__ */ De(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
  let g = !1;
  if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Qf(y), y.delay === 0 && (g = !0)), (zi.instantAnimations || zi.skipAnimations || c?.shouldSkipAnimations || p.skipAnimations) && (g = !0, Qf(y), y.delay = 0), y.allowFlatten = !p.type && !p.ease, g && !h && l.get() !== void 0) {
    const T = Ar(y.keyframes, p);
    if (T !== void 0) {
      Tt.update(() => {
        y.onUpdate(T), y.onComplete();
      });
      return;
    }
  }
  return p.isSync ? new gr(y) : new OT(y);
}, qT = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function GT(a) {
  const l = qT.exec(a);
  if (!l)
    return [,];
  const [, r, u, c] = l;
  return [`--${r ?? u}`, c];
}
const YT = 4;
function Gv(a, l, r = 1) {
  On(r <= YT, `Max CSS variable fallback depth detected in property "${a}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [u, c] = GT(a);
  if (!u)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(u);
  if (h) {
    const d = h.trim();
    return iv(d) ? parseFloat(d) : d;
  }
  return gd(c) ? Gv(c, l, r + 1) : c;
}
function B0(a) {
  const l = [{}, {}];
  return a?.values.forEach((r, u) => {
    l[0][u] = r.get(), l[1][u] = r.getVelocity();
  }), l;
}
function Cd(a, l, r, u) {
  if (typeof l == "function") {
    const [c, h] = B0(u);
    l = l(r !== void 0 ? r : a.custom, c, h);
  }
  if (typeof l == "string" && (l = a.variants && a.variants[l]), typeof l == "function") {
    const [c, h] = B0(u);
    l = l(r !== void 0 ? r : a.custom, c, h);
  }
  return l;
}
function aa(a, l, r) {
  const u = a.getProps();
  return Cd(u, l, r !== void 0 ? r : u.custom, a);
}
const Yv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...sl
]), Kf = (a) => Array.isArray(a);
function XT(a, l, r) {
  a.hasValue(l) ? a.getValue(l).set(r) : a.addValue(l, Dn(r));
}
function ZT(a) {
  return Kf(a) ? a[a.length - 1] || 0 : a;
}
function QT(a, l) {
  const r = aa(a, l);
  let { transitionEnd: u = {}, transition: c = {}, ...h } = r || {};
  h = { ...h, ...u };
  for (const d in h) {
    const p = ZT(h[d]);
    XT(a, d, p);
  }
}
const de = (a) => !!(a && a.getVelocity);
function KT(a) {
  return !!(de(a) && a.add);
}
function Pf(a, l) {
  const r = a.getValue("willChange");
  if (KT(r))
    return r.add(l);
  if (!r && zi.WillChange) {
    const u = new zi.WillChange("auto");
    a.addValue("willChange", u), u.add(l);
  }
}
function Dd(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const PT = "framerAppearId", Xv = "data-" + Dd(PT);
function Zv(a) {
  return a.props[Xv];
}
function JT({ protectedKeys: a, needsAnimating: l }, r) {
  const u = a.hasOwnProperty(r) && l[r] !== !0;
  return l[r] = !1, u;
}
function Qv(a, l, { delay: r = 0, transitionOverride: u, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...p } = l;
  const x = a.getDefaultTransition();
  h = h ? Ad(h, x) : x;
  const v = h?.reduceMotion, y = h?.skipAnimations;
  u && (h = u);
  const g = [], T = c && a.animationState && a.animationState.getState()[c], j = h?.path;
  j && j.animateVisualElement(a, p, h, r, g);
  for (const O in p) {
    const _ = a.getValue(O, a.latestValues[O] ?? null), V = p[O];
    if (V === void 0 || T && JT(T, O))
      continue;
    const R = {
      delay: r,
      ...zd(h || {}, O)
    };
    y && (R.skipAnimations = !0);
    const k = _.get();
    if (k !== void 0 && !_.isAnimating() && !Array.isArray(V) && V === k && !R.velocity) {
      Tt.update(() => _.set(V));
      continue;
    }
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const ft = Zv(a);
      if (ft) {
        const K = window.MotionHandoffAnimation(ft, O, Tt);
        K !== null && (R.startTime = K, H = !0);
      }
    }
    Pf(a, O);
    const X = v ?? a.shouldReduceMotion;
    _.start(Md(O, _, V, X && Yv.has(O) ? { type: !1 } : R, a, H));
    const at = _.animation;
    at && g.push(at);
  }
  if (d) {
    const O = () => Tt.update(() => {
      d && QT(a, d);
    });
    g.length ? Promise.all(g).then(O) : O();
  }
  return g;
}
function Jf(a, l, r = {}) {
  const u = aa(a, l, r.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: c = a.getDefaultTransition() || {} } = u || {};
  r.transitionOverride && (c = r.transitionOverride);
  const h = u ? () => Promise.all(Qv(a, u, r)) : () => Promise.resolve(), d = a.variantChildren && a.variantChildren.size ? (x = 0) => {
    const { delayChildren: v = 0, staggerChildren: y, staggerDirection: g } = c;
    return FT(a, l, x, v, y, g, r);
  } : () => Promise.resolve(), { when: p } = c;
  if (p) {
    const [x, v] = p === "beforeChildren" ? [h, d] : [d, h];
    return x().then(() => v());
  } else
    return Promise.all([h(), d(r.delay)]);
}
function FT(a, l, r = 0, u = 0, c = 0, h = 1, d) {
  const p = [];
  for (const x of a.variantChildren)
    x.notify("AnimationStart", l), p.push(Jf(x, l, {
      ...d,
      delay: r + (typeof u == "function" ? 0 : u) + qv(a.variantChildren, x, u, c, h)
    }).then(() => x.notify("AnimationComplete", l)));
  return Promise.all(p);
}
function IT(a, l, r = {}) {
  a.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((h) => Jf(a, h, r));
    u = Promise.all(c);
  } else if (typeof l == "string")
    u = Jf(a, l, r);
  else {
    const c = typeof l == "function" ? aa(a, l, r.custom) : l;
    u = Promise.all(Qv(a, c, r));
  }
  return u.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const WT = {
  test: (a) => a === "auto",
  parse: (a) => a
}, Kv = (a) => (l) => l.test(a), Pv = [ol, F, Nn, Pn, zS, AS, WT], k0 = (a) => Pv.find(Kv(a));
function $T(a) {
  return typeof a == "number" ? a === 0 : a !== null ? a === "none" || a === "0" || lv(a) : !0;
}
const t3 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function e3(a) {
  const [l, r] = a.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return a;
  const [u] = r.match(yd) || [];
  if (!u)
    return a;
  const c = r.replace(u, "");
  let h = t3.has(l) ? 1 : 0;
  return u !== r && (h *= 100), l + "(" + h + c + ")";
}
const n3 = /\b([a-z-]*)\(.*?\)/gu, Ff = {
  ...cn,
  getAnimatableNone: (a) => {
    const l = a.match(n3);
    return l ? l.map(e3).join(" ") : a;
  }
}, If = {
  ...cn,
  getAnimatableNone: (a) => {
    const l = cn.parse(a);
    return cn.createTransformer(a)(l.map((u) => typeof u == "number" ? 0 : typeof u == "object" ? { ...u, alpha: 1 } : u));
  }
}, L0 = {
  ...ol,
  transform: Math.round
}, i3 = {
  rotate: Pn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Pn,
  rotateX: Pn,
  rotateY: Pn,
  rotateZ: Pn,
  scale: $s,
  scaleX: $s,
  scaleY: $s,
  scaleZ: $s,
  skew: Pn,
  skewX: Pn,
  skewY: Pn,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: ho,
  originX: A0,
  originY: A0,
  originZ: F
}, yr = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  inset: F,
  insetBlock: F,
  insetBlockStart: F,
  insetBlockEnd: F,
  insetInline: F,
  insetInlineStart: F,
  insetInlineEnd: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  paddingBlock: F,
  paddingBlockStart: F,
  paddingBlockEnd: F,
  paddingInline: F,
  paddingInlineStart: F,
  paddingInlineEnd: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  marginBlock: F,
  marginBlockStart: F,
  marginBlockEnd: F,
  marginInline: F,
  marginInlineStart: F,
  marginInlineEnd: F,
  // Typography
  fontSize: F,
  // Misc
  backgroundPositionX: F,
  backgroundPositionY: F,
  ...i3,
  zIndex: L0,
  // SVG
  fillOpacity: ho,
  strokeOpacity: ho,
  numOctaves: L0
}, a3 = {
  ...yr,
  // Color props
  color: Pt,
  backgroundColor: Pt,
  outlineColor: Pt,
  fill: Pt,
  stroke: Pt,
  // Border props
  borderColor: Pt,
  borderTopColor: Pt,
  borderRightColor: Pt,
  borderBottomColor: Pt,
  borderLeftColor: Pt,
  filter: Ff,
  WebkitFilter: Ff,
  mask: If,
  WebkitMask: If
}, Jv = (a) => a3[a], l3 = /* @__PURE__ */ new Set([Ff, If]);
function Fv(a, l) {
  let r = Jv(a);
  return l3.has(r) || (r = cn), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0;
}
const o3 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function s3(a, l, r) {
  let u = 0, c;
  for (; u < a.length && !c; ) {
    const h = a[u];
    typeof h == "string" && !o3.has(h) && il(h).values.length && (c = a[u]), u++;
  }
  if (c && r)
    for (const h of l)
      a[h] = Fv(r, c);
}
class r3 extends Td {
  constructor(l, r, u, c, h) {
    super(l, r, u, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: r, name: u } = this;
    if (!r || !r.current)
      return;
    super.readKeyframes();
    for (let y = 0; y < l.length; y++) {
      let g = l[y];
      if (typeof g == "string" && (g = g.trim(), gd(g))) {
        const T = Gv(g, r.current);
        T !== void 0 && (l[y] = T), y === l.length - 1 && (this.finalKeyframe = g);
      }
    }
    if (this.resolveNoneKeyframes(), !Yv.has(u) || l.length !== 2)
      return;
    const [c, h] = l, d = k0(c), p = k0(h), x = E0(c), v = E0(h);
    if (x !== v && Ai[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== p)
      if (j0(d) && j0(p))
        for (let y = 0; y < l.length; y++) {
          const g = l[y];
          typeof g == "string" && (l[y] = parseFloat(g));
        }
      else Ai[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: r } = this, u = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || $T(l[c])) && u.push(c);
    u.length && s3(l, u, r);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: r, name: u } = this;
    if (!l || !l.current)
      return;
    u === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ai[u](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
    const c = r[r.length - 1];
    c !== void 0 && l.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    const { element: l, name: r, unresolvedKeyframes: u } = this;
    if (!l || !l.current)
      return;
    const c = l.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const h = u.length - 1, d = u[h];
    u[h] = Ai[r](l.measureViewportBox(), window.getComputedStyle(l.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), this.removedTransforms?.length && this.removedTransforms.forEach(([p, x]) => {
      l.getValue(p).set(x);
    }), this.resolveNoneKeyframes();
  }
}
const Nd = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function Iv(a, l, r) {
  if (a == null)
    return [];
  if (a instanceof EventTarget)
    return [a];
  if (typeof a == "string") {
    const c = document.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((u) => u != null);
}
const Wf = (a, l) => l && typeof a == "number" ? l.transform(a) : a;
function Wv(a) {
  return av(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: al, cancel: $v } = /* @__PURE__ */ yv(queueMicrotask, !1), un = {
  x: !1,
  y: !1
};
function t1() {
  return un.x || un.y;
}
function u3(a) {
  return a === "x" || a === "y" ? un[a] ? null : (un[a] = !0, () => {
    un[a] = !1;
  }) : un.x || un.y ? null : (un.x = un.y = !0, () => {
    un.x = un.y = !1;
  });
}
function e1(a, l) {
  const r = Iv(a), u = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: u.signal
  };
  return [r, c, () => u.abort()];
}
function c3(a) {
  return !(a.pointerType === "touch" || t1());
}
function f3(a, l, r = {}) {
  const [u, c, h] = e1(a, r);
  return u.forEach((d) => {
    let p = !1, x = !1, v;
    const y = () => {
      d.removeEventListener("pointerleave", O);
    }, g = (V) => {
      v && (v(V), v = void 0), y();
    }, T = (V) => {
      p = !1, window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), x && (x = !1, g(V));
    }, j = () => {
      p = !0, window.addEventListener("pointerup", T, c), window.addEventListener("pointercancel", T, c);
    }, O = (V) => {
      if (V.pointerType !== "touch") {
        if (p) {
          x = !0;
          return;
        }
        g(V);
      }
    }, _ = (V) => {
      if (!c3(V))
        return;
      x = !1;
      const R = l(d, V);
      typeof R == "function" && (v = R, d.addEventListener("pointerleave", O, c));
    };
    d.addEventListener("pointerenter", _, c), d.addEventListener("pointerdown", j, c);
  }), h;
}
const n1 = (a, l) => l ? a === l ? !0 : n1(a, l.parentElement) : !1, Od = (a) => a.pointerType === "mouse" ? typeof a.button != "number" || a.button <= 0 : a.isPrimary !== !1, d3 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function h3(a) {
  return d3.has(a.tagName) || a.isContentEditable === !0;
}
const p3 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function m3(a) {
  return p3.has(a.tagName) || a.isContentEditable === !0;
}
const lr = /* @__PURE__ */ new WeakSet();
function H0(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Ef(a, l) {
  a.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const g3 = (a, l) => {
  const r = a.currentTarget;
  if (!r)
    return;
  const u = H0(() => {
    if (lr.has(r))
      return;
    Ef(r, "down");
    const c = H0(() => {
      Ef(r, "up");
    }), h = () => Ef(r, "cancel");
    r.addEventListener("keyup", c, l), r.addEventListener("blur", h, l);
  });
  r.addEventListener("keydown", u, l), r.addEventListener("blur", () => r.removeEventListener("keydown", u), l);
};
function q0(a) {
  return Od(a) && !t1();
}
const G0 = /* @__PURE__ */ new WeakSet();
function y3(a, l, r = {}) {
  const [u, c, h] = e1(a, r), d = (p) => {
    const x = p.currentTarget;
    if (!q0(p) || G0.has(p))
      return;
    lr.add(x), r.stopPropagation && G0.add(p);
    const v = l(x, p), y = { ...c, capture: !0 }, g = (O, _) => {
      window.removeEventListener("pointerup", T, y), window.removeEventListener("pointercancel", j, y), lr.has(x) && lr.delete(x), q0(O) && typeof v == "function" && v(O, { success: _ });
    }, T = (O) => {
      g(O, x === window || x === document || r.useGlobalTarget || n1(x, O.target));
    }, j = (O) => {
      g(O, !1);
    };
    window.addEventListener("pointerup", T, y), window.addEventListener("pointercancel", j, y);
  };
  return u.forEach((p) => {
    (r.useGlobalTarget ? window : p).addEventListener("pointerdown", d, c), Wv(p) && (p.addEventListener("focus", (v) => g3(v, c)), !h3(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
  }), h;
}
function Rd(a) {
  return av(a) && "ownerSVGElement" in a;
}
const or = /* @__PURE__ */ new WeakMap();
let sr;
const i1 = (a, l, r) => (u, c) => c && c[0] ? c[0][a + "Size"] : Rd(u) && "getBBox" in u ? u.getBBox()[l] : u[r], v3 = /* @__PURE__ */ i1("inline", "width", "offsetWidth"), x3 = /* @__PURE__ */ i1("block", "height", "offsetHeight");
function b3({ target: a, borderBoxSize: l }) {
  or.get(a)?.forEach((r) => {
    r(a, {
      get width() {
        return v3(a, l);
      },
      get height() {
        return x3(a, l);
      }
    });
  });
}
function S3(a) {
  a.forEach(b3);
}
function T3() {
  typeof ResizeObserver > "u" || (sr = new ResizeObserver(S3));
}
function w3(a, l) {
  sr || T3();
  const r = Iv(a);
  return r.forEach((u) => {
    let c = or.get(u);
    c || (c = /* @__PURE__ */ new Set(), or.set(u, c)), c.add(l), sr?.observe(u);
  }), () => {
    r.forEach((u) => {
      const c = or.get(u);
      c?.delete(l), c?.size || sr?.unobserve(u);
    });
  };
}
const rr = /* @__PURE__ */ new Set();
let $a;
function E3() {
  $a = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    rr.forEach((l) => l(a));
  }, window.addEventListener("resize", $a);
}
function A3(a) {
  return rr.add(a), $a || E3(), () => {
    rr.delete(a), !rr.size && typeof $a == "function" && (window.removeEventListener("resize", $a), $a = void 0);
  };
}
function $f(a, l) {
  return typeof a == "function" ? A3(a) : w3(a, l);
}
function a1(a, l) {
  let r;
  const u = () => {
    const { currentTime: c } = l, d = (c === null ? 0 : c.value) / 100;
    r !== d && a(d), r = d;
  };
  return Tt.preUpdate(u, !0), () => dn(u);
}
function z3(a) {
  return Rd(a) && a.tagName === "svg";
}
const M3 = [...Pv, Pt, cn], C3 = (a) => M3.find(Kv(a)), Y0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), tl = () => ({
  x: Y0(),
  y: Y0()
}), X0 = () => ({ min: 0, max: 0 }), Ft = () => ({
  x: X0(),
  y: X0()
}), D3 = /* @__PURE__ */ new WeakMap();
function zr(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function po(a) {
  return typeof a == "string" || Array.isArray(a);
}
const jd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Vd = ["initial", ...jd];
function Mr(a) {
  return zr(a.animate) || Vd.some((l) => po(a[l]));
}
function l1(a) {
  return !!(Mr(a) || a.variants);
}
function N3(a, l, r) {
  for (const u in l) {
    const c = l[u], h = r[u];
    if (de(c))
      a.addValue(u, c);
    else if (de(h))
      a.addValue(u, Dn(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(u)) {
        const d = a.getValue(u);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = a.getStaticValue(u);
        a.addValue(u, Dn(d !== void 0 ? d : c, { owner: a }));
      }
  }
  for (const u in r)
    l[u] === void 0 && a.removeValue(u);
  return l;
}
const td = { current: null }, o1 = { current: !1 }, O3 = typeof window < "u";
function R3() {
  if (o1.current = !0, !!O3)
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"), l = () => td.current = a.matches;
      a.addEventListener("change", l), l();
    } else
      td.current = !1;
}
const Z0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let vr = {};
function s1(a) {
  vr = a;
}
function j3() {
  return vr;
}
class V3 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, r, u) {
    return {};
  }
  constructor({ parent: l, props: r, presenceContext: u, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: p }, x = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Td, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const j = be.now();
      this.renderScheduledAt < j && (this.renderScheduledAt = j, Tt.render(this.render, !1, !0));
    };
    const { latestValues: v, renderState: y } = p;
    this.latestValues = v, this.baseTarget = { ...v }, this.initialValues = r.initial ? { ...v } : {}, this.renderState = y, this.parent = l, this.props = r, this.presenceContext = u, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = x, this.blockInitialAnimation = !!d, this.isControllingVariants = Mr(r), this.isVariantNode = l1(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: g, ...T } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const j in T) {
      const O = T[j];
      v[j] !== void 0 && de(O) && O.set(v[j]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const r in this.initialValues)
        this.values.get(r)?.jump(this.initialValues[r]), this.latestValues[r] = this.initialValues[r];
    this.current = l, D3.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, u) => this.bindToMotionValue(u, r)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (o1.current || R3(), this.shouldReduceMotion = td.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), dn(this.notifyUpdate), dn(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const r = this.features[l];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, r) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && Hv.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: p, times: x, ease: v, duration: y } = r.accelerate, g = new kv({
        element: this.current,
        name: l,
        keyframes: p,
        times: x,
        ease: v,
        duration: /* @__PURE__ */ De(y)
      }), T = d(g);
      this.valueSubscriptions.set(l, () => {
        T(), g.cancel();
      });
      return;
    }
    const u = rl.has(l);
    u && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && Tt.preRender(this.notifyUpdate), u && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let h;
    typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
      c(), h && h();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in vr) {
      const r = vr[l];
      if (!r)
        continue;
      const { isEnabled: u, Feature: c } = r;
      if (!this.features[l] && c && u(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), h.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ft();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, r) {
    this.latestValues[l] = r;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, r) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let u = 0; u < Z0.length; u++) {
      const c = Z0[u];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const h = "on" + c, d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    this.prevMotionValues = N3(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, r) {
    const u = this.values.get(l);
    r !== u && (u && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const r = this.valueSubscriptions.get(l);
    r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, r) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let u = this.values.get(l);
    return u === void 0 && r !== void 0 && (u = Dn(r === null ? void 0 : r, { owner: this }), this.addValue(l, u)), u;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, r) {
    let u = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return u != null && (typeof u == "string" && (iv(u) || lv(u)) ? u = parseFloat(u) : !C3(u) && cn.test(r) && (u = Fv(l, r)), this.setBaseTarget(l, de(u) ? u.get() : u)), de(u) ? u.get() : u;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, r) {
    this.baseTarget[l] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    const { initial: r } = this.props;
    let u;
    if (typeof r == "string" || typeof r == "object") {
      const h = Cd(this.props, r, this.presenceContext?.custom);
      h && (u = h[l]);
    }
    if (r && u !== void 0)
      return u;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !de(c) ? c : this.initialValues[l] !== void 0 && u === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, r) {
    return this.events[l] || (this.events[l] = new dd()), this.events[l].add(r);
  }
  notify(l, ...r) {
    this.events[l] && this.events[l].notify(...r);
  }
  scheduleRenderMicrotask() {
    al.render(this.render);
  }
}
class r1 extends V3 {
  constructor() {
    super(...arguments), this.KeyframeResolver = r3;
  }
  sortInstanceNodePosition(l, r) {
    return l.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, r) {
    const u = l.style;
    return u ? u[r] : void 0;
  }
  removeValueFromRenderState(l, { vars: r, style: u }) {
    delete r[l], delete u[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    de(l) && (this.childSubscription = l.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class Mi {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function u1({ top: a, left: l, right: r, bottom: u }) {
  return {
    x: { min: l, max: r },
    y: { min: a, max: u }
  };
}
function _3({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function U3(a, l) {
  if (!l)
    return a;
  const r = l({ x: a.left, y: a.top }), u = l({ x: a.right, y: a.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: u.y,
    right: u.x
  };
}
function Af(a) {
  return a === void 0 || a === 1;
}
function ed({ scale: a, scaleX: l, scaleY: r }) {
  return !Af(a) || !Af(l) || !Af(r);
}
function $i(a) {
  return ed(a) || c1(a) || a.z || a.rotate || a.rotateX || a.rotateY || a.skewX || a.skewY;
}
function c1(a) {
  return Q0(a.x) || Q0(a.y);
}
function Q0(a) {
  return a && a !== "0%";
}
function xr(a, l, r) {
  const u = a - r, c = l * u;
  return r + c;
}
function K0(a, l, r, u, c) {
  return c !== void 0 && (a = xr(a, c, u)), xr(a, r, u) + l;
}
function nd(a, l = 0, r = 1, u, c) {
  a.min = K0(a.min, l, r, u, c), a.max = K0(a.max, l, r, u, c);
}
function f1(a, { x: l, y: r }) {
  nd(a.x, l.translate, l.scale, l.originPoint), nd(a.y, r.translate, r.scale, r.originPoint);
}
const P0 = 0.999999999999, J0 = 1.0000000000001;
function B3(a, l, r, u = !1) {
  const c = r.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let p = 0; p < c; p++) {
    h = r[p], d = h.projectionDelta;
    const { visualElement: x } = h.options;
    x && x.props.style && x.props.style.display === "contents" || (u && h.options.layoutScroll && h.scroll && h !== h.root && (Cn(a.x, -h.scroll.offset.x), Cn(a.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, f1(a, d)), u && $i(h.latestValues) && ur(a, h.latestValues, h.layout?.layoutBox));
  }
  l.x < J0 && l.x > P0 && (l.x = 1), l.y < J0 && l.y > P0 && (l.y = 1);
}
function Cn(a, l) {
  a.min += l, a.max += l;
}
function F0(a, l, r, u, c = 0.5) {
  const h = Vt(a.min, a.max, c);
  nd(a, l, r, h, u);
}
function I0(a, l) {
  return typeof a == "string" ? parseFloat(a) / 100 * (l.max - l.min) : a;
}
function ur(a, l, r) {
  const u = r ?? a;
  F0(a.x, I0(l.x, u.x), l.scaleX, l.scale, l.originX), F0(a.y, I0(l.y, u.y), l.scaleY, l.scale, l.originY);
}
function d1(a, l) {
  return u1(U3(a.getBoundingClientRect(), l));
}
function k3(a, l, r) {
  const u = d1(a, r), { scroll: c } = l;
  return c && (Cn(u.x, c.offset.x), Cn(u.y, c.offset.y)), u;
}
const L3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, H3 = sl.length;
function q3(a, l, r) {
  let u = "", c = !0;
  for (let d = 0; d < H3; d++) {
    const p = sl[d], x = a[p];
    if (x === void 0)
      continue;
    let v = !0;
    if (typeof x == "number")
      v = x === (p.startsWith("scale") ? 1 : 0);
    else {
      const y = parseFloat(x);
      v = p.startsWith("scale") ? y === 1 : y === 0;
    }
    if (!v || r) {
      const y = Wf(x, yr[p]);
      if (!v) {
        c = !1;
        const g = L3[p] || p;
        u += `${g}(${y}) `;
      }
      r && (l[p] = y);
    }
  }
  const h = a.pathRotation;
  return h && (c = !1, u += `rotate(${Wf(h, yr.pathRotation)}) `), u = u.trim(), r ? u = r(l, c ? "" : u) : c && (u = "none"), u;
}
function _d(a, l, r) {
  const { style: u, vars: c, transformOrigin: h } = a;
  let d = !1, p = !1;
  for (const x in l) {
    const v = l[x];
    if (rl.has(x)) {
      d = !0;
      continue;
    } else if (xv(x)) {
      c[x] = v;
      continue;
    } else {
      const y = Wf(v, yr[x]);
      x.startsWith("origin") ? (p = !0, h[x] = y) : u[x] = y;
    }
  }
  if (l.transform || (d || r ? u.transform = q3(l, a.transform, r) : u.transform && (u.transform = "none")), p) {
    const { originX: x = "50%", originY: v = "50%", originZ: y = 0 } = h;
    u.transformOrigin = `${x} ${v} ${y}`;
  }
}
function h1(a, { style: l, vars: r }, u, c) {
  const h = a.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, u);
  for (d in r)
    h.setProperty(d, r[d]);
}
function W0(a, l) {
  return l.max === l.min ? 0 : a / (l.max - l.min) * 100;
}
const lo = {
  correct: (a, l) => {
    if (!l.target)
      return a;
    if (typeof a == "string")
      if (F.test(a))
        a = parseFloat(a);
      else
        return a;
    const r = W0(a, l.target.x), u = W0(a, l.target.y);
    return `${r}% ${u}%`;
  }
}, G3 = {
  correct: (a, { treeScale: l, projectionDelta: r }) => {
    const u = a, c = cn.parse(a);
    if (c.length > 5)
      return u;
    const h = cn.createTransformer(a), d = typeof c[0] != "number" ? 1 : 0, p = r.x.scale * l.x, x = r.y.scale * l.y;
    c[0 + d] /= p, c[1 + d] /= x;
    const v = Vt(p, x, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= v), typeof c[3 + d] == "number" && (c[3 + d] /= v), h(c);
  }
}, id = {
  borderRadius: {
    ...lo,
    applyTo: [...Nd]
  },
  borderTopLeftRadius: lo,
  borderTopRightRadius: lo,
  borderBottomLeftRadius: lo,
  borderBottomRightRadius: lo,
  boxShadow: G3
};
function p1(a, { layout: l, layoutId: r }) {
  return rl.has(a) || a.startsWith("origin") || (l || r !== void 0) && (!!id[a] || a === "opacity");
}
function Ud(a, l, r) {
  const u = a.style, c = l?.style, h = {};
  if (!u)
    return h;
  for (const d in u)
    (de(u[d]) || c && de(c[d]) || p1(d, a) || r?.getValue(d)?.liveStyle !== void 0) && (h[d] = u[d]);
  return h;
}
function Y3(a) {
  return window.getComputedStyle(a);
}
class X3 extends r1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = h1;
  }
  mount(l) {
    On(!!l.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"), super.mount(l);
  }
  readValueFromInstance(l, r) {
    if (rl.has(r))
      return this.projection?.isProjecting ? qf(r) : cT(l, r);
    {
      const u = Y3(l), c = (xv(r) ? u.getPropertyValue(r) : u[r]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: r }) {
    return d1(l, r);
  }
  build(l, r, u) {
    _d(l, r, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, r, u) {
    return Ud(l, r, u);
  }
}
const Z3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Q3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function K3(a, l, r = 1, u = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? Z3 : Q3;
  a[h.offset] = `${-u}`, a[h.array] = `${l} ${r}`;
}
const P3 = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function m1(a, {
  attrX: l,
  attrY: r,
  attrScale: u,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...p
}, x, v, y) {
  if (_d(a, p, v), x) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  a.attrs = a.style, a.style = {};
  const { attrs: g, style: T } = a;
  g.transform && (T.transform = g.transform, delete g.transform), (T.transform || g.transformOrigin) && (T.transformOrigin = g.transformOrigin ?? "50% 50%", delete g.transformOrigin), T.transform && (T.transformBox = y?.transformBox ?? "fill-box", delete g.transformBox);
  for (const j of P3)
    g[j] !== void 0 && (T[j] = g[j], delete g[j]);
  l !== void 0 && (g.x = l), r !== void 0 && (g.y = r), u !== void 0 && (g.scale = u), c !== void 0 && K3(g, c, h, d, !1);
}
const g1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), y1 = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function J3(a, l, r, u) {
  h1(a, l, void 0, u);
  for (const c in l.attrs)
    a.setAttribute(g1.has(c) ? c : Dd(c), l.attrs[c]);
}
function v1(a, l, r) {
  const u = Ud(a, l, r);
  for (const c in a)
    if (de(a[c]) || de(l[c])) {
      const h = sl.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      u[h] = a[c];
    }
  return u;
}
class F3 extends r1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ft;
  }
  getBaseTargetFromProps(l, r) {
    return l[r];
  }
  readValueFromInstance(l, r) {
    if (rl.has(r)) {
      const u = Jv(r);
      return u && u.default || 0;
    }
    return r = g1.has(r) ? r : Dd(r), l.getAttribute(r);
  }
  scrapeMotionValuesFromProps(l, r, u) {
    return v1(l, r, u);
  }
  build(l, r, u) {
    m1(l, r, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(l, r, u, c) {
    J3(l, r, u, c);
  }
  mount(l) {
    this.isSVGTag = y1(l.tagName), super.mount(l);
  }
}
const I3 = Vd.length;
function x1(a) {
  if (!a)
    return;
  if (!a.isControllingVariants) {
    const r = a.parent ? x1(a.parent) || {} : {};
    return a.props.initial !== void 0 && (r.initial = a.props.initial), r;
  }
  const l = {};
  for (let r = 0; r < I3; r++) {
    const u = Vd[r], c = a.props[u];
    (po(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function b1(a, l) {
  if (!Array.isArray(l))
    return !1;
  const r = l.length;
  if (r !== a.length)
    return !1;
  for (let u = 0; u < r; u++)
    if (l[u] !== a[u])
      return !1;
  return !0;
}
const W3 = [...jd].reverse(), $3 = jd.length;
function tw(a) {
  return (l) => Promise.all(l.map(({ animation: r, options: u }) => IT(a, r, u)));
}
function ew(a) {
  let l = tw(a), r = $0(), u = !0, c = !1;
  const h = (v) => (y, g) => {
    const T = aa(a, g, v === "exit" ? a.presenceContext?.custom : void 0);
    if (T) {
      const { transition: j, transitionEnd: O, ..._ } = T;
      y = { ...y, ..._, ...O };
    }
    return y;
  };
  function d(v) {
    l = v(a);
  }
  function p(v) {
    const { props: y } = a, g = x1(a.parent) || {}, T = [], j = /* @__PURE__ */ new Set();
    let O = {}, _ = 1 / 0;
    for (let R = 0; R < $3; R++) {
      const k = W3[R], H = r[k], X = y[k] !== void 0 ? y[k] : g[k], at = po(X), ft = k === v ? H.isActive : null;
      ft === !1 && (_ = R);
      let K = X === g[k] && X !== y[k] && at;
      if (K && (u || c) && a.manuallyAnimateOnMount && (K = !1), H.protectedKeys = { ...O }, // If it isn't active and hasn't *just* been set as inactive
      !H.isActive && ft === null || // If we didn't and don't have any defined prop for this animation type
      !X && !H.prevProp || // Or if the prop doesn't define an animation
      zr(X) || typeof X == "boolean")
        continue;
      if (k === "exit" && H.isActive && ft !== !0) {
        H.prevResolvedValues && (O = {
          ...O,
          ...H.prevResolvedValues
        });
        continue;
      }
      const Y = nw(H.prevProp, X);
      let Dt = Y || // If we're making this variant active, we want to always make it active
      k === v && H.isActive && !K && at || // If we removed a higher-priority variant (i is in reverse order)
      R > _ && at, $ = !1;
      const vt = Array.isArray(X) ? X : [X];
      let Nt = vt.reduce(h(k), {});
      ft === !1 && (Nt = {});
      const { prevResolvedValues: pe = {} } = H, It = {
        ...pe,
        ...Nt
      }, Ot = (P) => {
        Dt = !0, j.has(P) && ($ = !0, j.delete(P)), H.needsAnimating[P] = !0;
        const ut = a.getValue(P);
        ut && (ut.liveStyle = !1);
      };
      for (const P in It) {
        const ut = Nt[P], dt = pe[P];
        if (O.hasOwnProperty(P))
          continue;
        let Wt = !1;
        Kf(ut) && Kf(dt) ? Wt = !b1(ut, dt) || Y : Wt = ut !== dt, Wt ? ut != null ? Ot(P) : j.add(P) : ut !== void 0 && j.has(P) ? Ot(P) : H.protectedKeys[P] = !0;
      }
      H.prevProp = X, H.prevResolvedValues = Nt, H.isActive && (O = { ...O, ...Nt }), (u || c) && a.blockInitialAnimation && (Dt = !1);
      const q = K && Y;
      Dt && (!q || $) && T.push(...vt.map((P) => {
        const ut = { type: k };
        if (typeof P == "string" && (u || c) && !q && a.manuallyAnimateOnMount && a.parent) {
          const { parent: dt } = a, Wt = aa(dt, P);
          if (dt.enteringChildren && Wt) {
            const { delayChildren: $e } = Wt.transition || {};
            ut.delay = qv(dt.enteringChildren, a, $e);
          }
        }
        return {
          animation: P,
          options: ut
        };
      }));
    }
    if (j.size) {
      const R = {};
      if (typeof y.initial != "boolean") {
        const k = aa(a, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        k && k.transition && (R.transition = k.transition);
      }
      j.forEach((k) => {
        const H = a.getBaseTarget(k), X = a.getValue(k);
        X && (X.liveStyle = !0), R[k] = H ?? null;
      }), T.push({ animation: R });
    }
    let V = !!T.length;
    return u && (y.initial === !1 || y.initial === y.animate) && !a.manuallyAnimateOnMount && (V = !1), u = !1, c = !1, V ? l(T) : Promise.resolve();
  }
  function x(v, y) {
    if (r[v].isActive === y)
      return Promise.resolve();
    a.variantChildren?.forEach((T) => T.animationState?.setActive(v, y)), r[v].isActive = y;
    const g = p(v);
    for (const T in r)
      r[T].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: p,
    setActive: x,
    setAnimateFunction: d,
    getState: () => r,
    reset: () => {
      r = $0(), c = !0;
    }
  };
}
function nw(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !b1(l, a) : !1;
}
function Wi(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function $0() {
  return {
    animate: Wi(!0),
    whileInView: Wi(),
    whileHover: Wi(),
    whileTap: Wi(),
    whileDrag: Wi(),
    whileFocus: Wi(),
    exit: Wi()
  };
}
function ad(a, l) {
  a.min = l.min, a.max = l.max;
}
function sn(a, l) {
  ad(a.x, l.x), ad(a.y, l.y);
}
function ty(a, l) {
  a.translate = l.translate, a.scale = l.scale, a.originPoint = l.originPoint, a.origin = l.origin;
}
const S1 = 1e-4, iw = 1 - S1, aw = 1 + S1, T1 = 0.01, lw = 0 - T1, ow = 0 + T1;
function Se(a) {
  return a.max - a.min;
}
function sw(a, l, r) {
  return Math.abs(a - l) <= r;
}
function ey(a, l, r, u = 0.5) {
  a.origin = u, a.originPoint = Vt(l.min, l.max, a.origin), a.scale = Se(r) / Se(l), a.translate = Vt(r.min, r.max, a.origin) - a.originPoint, (a.scale >= iw && a.scale <= aw || isNaN(a.scale)) && (a.scale = 1), (a.translate >= lw && a.translate <= ow || isNaN(a.translate)) && (a.translate = 0);
}
function co(a, l, r, u) {
  ey(a.x, l.x, r.x, u ? u.originX : void 0), ey(a.y, l.y, r.y, u ? u.originY : void 0);
}
function ny(a, l, r, u = 0) {
  const c = u ? Vt(r.min, r.max, u) : r.min;
  a.min = c + l.min, a.max = a.min + Se(l);
}
function rw(a, l, r, u) {
  ny(a.x, l.x, r.x, u?.x), ny(a.y, l.y, r.y, u?.y);
}
function iy(a, l, r, u = 0) {
  const c = u ? Vt(r.min, r.max, u) : r.min;
  a.min = l.min - c, a.max = a.min + Se(l);
}
function br(a, l, r, u) {
  iy(a.x, l.x, r.x, u?.x), iy(a.y, l.y, r.y, u?.y);
}
function ay(a, l, r, u, c) {
  return a -= l, a = xr(a, 1 / r, u), c !== void 0 && (a = xr(a, 1 / c, u)), a;
}
function uw(a, l = 0, r = 1, u = 0.5, c, h = a, d = a) {
  if (Nn.test(l) && (l = parseFloat(l), l = Vt(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let p = Vt(h.min, h.max, u);
  a === h && (p -= l), a.min = ay(a.min, l, r, p, c), a.max = ay(a.max, l, r, p, c);
}
function ly(a, l, [r, u, c], h, d) {
  uw(a, l[r], l[u], l[c], l.scale, h, d);
}
const cw = ["x", "scaleX", "originX"], fw = ["y", "scaleY", "originY"];
function oy(a, l, r, u) {
  ly(a.x, l, cw, r ? r.x : void 0, u ? u.x : void 0), ly(a.y, l, fw, r ? r.y : void 0, u ? u.y : void 0);
}
function sy(a) {
  return a.translate === 0 && a.scale === 1;
}
function w1(a) {
  return sy(a.x) && sy(a.y);
}
function ry(a, l) {
  return a.min === l.min && a.max === l.max;
}
function dw(a, l) {
  return ry(a.x, l.x) && ry(a.y, l.y);
}
function uy(a, l) {
  return Math.round(a.min) === Math.round(l.min) && Math.round(a.max) === Math.round(l.max);
}
function E1(a, l) {
  return uy(a.x, l.x) && uy(a.y, l.y);
}
function cy(a) {
  return Se(a.x) / Se(a.y);
}
function fy(a, l) {
  return a.translate === l.translate && a.scale === l.scale && a.originPoint === l.originPoint;
}
function zn(a) {
  return [a("x"), a("y")];
}
function hw(a, l, r) {
  let u = "";
  const c = a.x.translate / l.x, h = a.y.translate / l.y, d = r?.z || 0;
  if ((c || h || d) && (u = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (u += `scale(${1 / l.x}, ${1 / l.y}) `), r) {
    const { transformPerspective: v, rotate: y, pathRotation: g, rotateX: T, rotateY: j, skewX: O, skewY: _ } = r;
    v && (u = `perspective(${v}px) ${u}`), y && (u += `rotate(${y}deg) `), g && (u += `rotate(${g}deg) `), T && (u += `rotateX(${T}deg) `), j && (u += `rotateY(${j}deg) `), O && (u += `skewX(${O}deg) `), _ && (u += `skewY(${_}deg) `);
  }
  const p = a.x.scale * l.x, x = a.y.scale * l.y;
  return (p !== 1 || x !== 1) && (u += `scale(${p}, ${x})`), u || "none";
}
const pw = Nd.length, dy = (a) => typeof a == "string" ? parseFloat(a) : a, hy = (a) => typeof a == "number" || F.test(a);
function mw(a, l, r, u, c, h) {
  c ? (a.opacity = Vt(0, r.opacity ?? 1, gw(u)), a.opacityExit = Vt(l.opacity ?? 1, 0, yw(u))) : h && (a.opacity = Vt(l.opacity ?? 1, r.opacity ?? 1, u));
  for (let d = 0; d < pw; d++) {
    const p = Nd[d];
    let x = py(l, p), v = py(r, p);
    if (x === void 0 && v === void 0)
      continue;
    x || (x = 0), v || (v = 0), x === 0 || v === 0 || hy(x) === hy(v) ? (a[p] = Math.max(Vt(dy(x), dy(v), u), 0), (Nn.test(v) || Nn.test(x)) && (a[p] += "%")) : a[p] = v;
  }
  (l.rotate || r.rotate) && (a.rotate = Vt(l.rotate || 0, r.rotate || 0, u));
}
function py(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const gw = /* @__PURE__ */ A1(0, 0.5, hv), yw = /* @__PURE__ */ A1(0.5, 0.95, Ce);
function A1(a, l, r) {
  return (u) => u < a ? 0 : u > l ? 1 : r(/* @__PURE__ */ nl(a, l, u));
}
function vw(a, l, r) {
  const u = de(a) ? a : Dn(a);
  return u.start(Md("", u, l, r)), u.animation;
}
function mo(a, l, r, u = { passive: !0 }) {
  return a.addEventListener(l, r, u), () => a.removeEventListener(l, r, u);
}
const xw = (a, l) => a.depth - l.depth;
class bw {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    fd(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    dr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(xw), this.isDirty = !1, this.children.forEach(l);
  }
}
function Sw(a, l) {
  const r = be.now(), u = ({ timestamp: c }) => {
    const h = c - r;
    h >= l && (dn(u), a(h - l));
  };
  return Tt.setup(u, !0), () => dn(u);
}
function cr(a) {
  return de(a) ? a.get() : a;
}
class Tw {
  constructor() {
    this.members = [];
  }
  add(l) {
    fd(this.members, l);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const u = this.members[r];
      if (u === l || u === this.lead || u === this.prevLead)
        continue;
      const c = u.instance;
      (!c || c.isConnected === !1) && !u.snapshot && (dr(this.members, u), u.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (dr(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(l) {
    for (let r = this.members.indexOf(l) - 1; r >= 0; r--) {
      const u = this.members[r];
      if (u.isPresent !== !1 && u.instance?.isConnected !== !1)
        return this.promote(u), !0;
    }
    return !1;
  }
  promote(l, r) {
    const u = this.lead;
    if (l !== u && (this.prevLead = u, this.lead = l, l.show(), u)) {
      u.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = u.options, { layoutDependency: h } = l.options;
      (c === void 0 || c !== h) && (l.resumeFrom = u, r && (u.preserveOpacity = !0), u.snapshot && (l.snapshot = u.snapshot, l.snapshot.latestValues = u.animationValues || u.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && u.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const fr = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, zf = ["", "X", "Y", "Z"], ww = 1e3;
let Ew = 0;
function Mf(a, l, r, u) {
  const { latestValues: c } = l;
  c[a] && (r[a] = c[a], l.setStaticValue(a, 0), u && (u[a] = 0));
}
function z1(a) {
  if (a.hasCheckedOptimisedAppear = !0, a.root === a)
    return;
  const { visualElement: l } = a.options;
  if (!l)
    return;
  const r = Zv(l);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(r, "transform", Tt, !(c || h));
  }
  const { parent: u } = a;
  u && !u.hasCheckedOptimisedAppear && z1(u);
}
function M1({ attachResizeListener: a, defaultParent: l, measureScroll: r, checkIsScrollRoot: u, resetTransform: c }) {
  return class {
    constructor(d = {}, p = l?.()) {
      this.id = Ew++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Mw), this.nodes.forEach(jw), this.nodes.forEach(Vw), this.nodes.forEach(Cw);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
      for (let x = 0; x < this.path.length; x++)
        this.path[x].shouldResetTransform = !0;
      this.root === this && (this.nodes = new bw());
    }
    addEventListener(d, p) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new dd()), this.eventHandlers.get(d).add(p);
    }
    notifyListeners(d, ...p) {
      const x = this.eventHandlers.get(d);
      x && x.notify(...p);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = Rd(d) && !z3(d), this.instance = d;
      const { layoutId: p, layout: x, visualElement: v } = this.options;
      if (v && !v.current && v.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (x || p) && (this.isLayoutDirty = !0), a) {
        let y, g = 0;
        const T = () => this.root.updateBlockedByResize = !1;
        Tt.read(() => {
          g = window.innerWidth;
        }), a(d, () => {
          const j = window.innerWidth;
          j !== g && (g = j, this.root.updateBlockedByResize = !0, y && y(), y = Sw(T, 250), fr.hasAnimatedSinceResize && (fr.hasAnimatedSinceResize = !1, this.nodes.forEach(yy)));
        });
      }
      p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && v && (p || x) && this.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: g, hasRelativeLayoutChanged: T, layout: j }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const O = this.options.transition || v.getDefaultTransition() || Lw, { onLayoutAnimationStart: _, onLayoutAnimationComplete: V } = v.getProps(), R = !this.targetLayout || !E1(this.targetLayout, j), k = !g && T;
        if (this.options.layoutRoot || this.resumeFrom || k || g && (R || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const H = {
            ...zd(O, "layout"),
            onPlay: _,
            onComplete: V
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(y, k, H.path);
        } else
          g || yy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = j;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), dn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(_w), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && z1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        g.shouldResetTransform = !0, (typeof g.latestValues.x == "string" || typeof g.latestValues.y == "string") && (g.isLayoutDirty = !0), g.updateScroll("snapshot"), g.options.layoutRoot && g.willUpdate(!1);
      }
      const { layoutId: p, layout: x } = this.options;
      if (p === void 0 && !x)
        return;
      const v = this.getTransformTemplate();
      this.prevTransformTemplateValue = v ? v(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const x = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), x && this.nodes.forEach(Nw), this.nodes.forEach(my);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(gy);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Ow), this.nodes.forEach(Rw), this.nodes.forEach(Aw), this.nodes.forEach(zw)) : this.nodes.forEach(gy), this.clearAllSnapshots();
      const p = be.now();
      ie.delta = fn(0, 1e3 / 60, p - ie.timestamp), ie.timestamp = p, ie.isProcessing = !0, vf.update.process(ie), vf.preRender.process(ie), vf.render.process(ie), ie.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, al.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Dw), this.sharedNodes.forEach(Uw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Tt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Tt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Se(this.snapshot.measuredBox.x) && !Se(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let x = 0; x < this.path.length; x++)
          this.path[x].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Ft()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: p } = this.options;
      p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1), p && this.instance) {
        const x = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: x,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : x
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, p = this.projectionDelta && !w1(this.projectionDelta), x = this.getTransformTemplate(), v = x ? x(this.latestValues, "") : void 0, y = v !== this.prevTransformTemplateValue;
      d && this.instance && (p || $i(this.latestValues) || y) && (c(this.instance, v), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const p = this.measurePageBox();
      let x = this.removeElementScroll(p);
      return d && (x = this.removeTransform(x)), Hw(x), {
        animationId: this.root.animationId,
        measuredBox: p,
        layoutBox: x,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return Ft();
      const p = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(qw))) {
        const { scroll: v } = this.root;
        v && (Cn(p.x, v.offset.x), Cn(p.y, v.offset.y));
      }
      return p;
    }
    removeElementScroll(d) {
      const p = Ft();
      if (sn(p, d), this.scroll?.wasRoot)
        return p;
      for (let x = 0; x < this.path.length; x++) {
        const v = this.path[x], { scroll: y, options: g } = v;
        v !== this.root && y && g.layoutScroll && (y.wasRoot && sn(p, d), Cn(p.x, y.offset.x), Cn(p.y, y.offset.y));
      }
      return p;
    }
    applyTransform(d, p = !1, x) {
      const v = x || Ft();
      sn(v, d);
      for (let y = 0; y < this.path.length; y++) {
        const g = this.path[y];
        !p && g.options.layoutScroll && g.scroll && g !== g.root && (Cn(v.x, -g.scroll.offset.x), Cn(v.y, -g.scroll.offset.y)), $i(g.latestValues) && ur(v, g.latestValues, g.layout?.layoutBox);
      }
      return $i(this.latestValues) && ur(v, this.latestValues, this.layout?.layoutBox), v;
    }
    removeTransform(d) {
      const p = Ft();
      sn(p, d);
      for (let x = 0; x < this.path.length; x++) {
        const v = this.path[x];
        if (!$i(v.latestValues))
          continue;
        let y;
        v.instance && (ed(v.latestValues) && v.updateSnapshot(), y = Ft(), sn(y, v.measurePageBox())), oy(p, v.latestValues, v.snapshot?.layoutBox, y);
      }
      return $i(this.latestValues) && oy(p, this.latestValues), p;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const p = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
      const x = !!this.resumingFrom || this !== p;
      if (!(d || x && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: y, layoutId: g } = this.options;
      if (!this.layout || !(y || g))
        return;
      this.resolvedRelativeTargetAt = ie.timestamp;
      const T = this.getClosestProjectingParent();
      T && this.linkedParentVersion !== T.layoutVersion && !T.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && T && T.layout ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ft(), this.targetWithTransforms = Ft()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rw(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : sn(this.target, this.layout.layoutBox), f1(this.target, this.targetDelta)) : sn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? this.createRelativeTarget(T, this.target, T.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ed(this.parent.latestValues) || c1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, p, x) {
      this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ft(), this.relativeTargetOrigin = Ft(), br(this.relativeTargetOrigin, p, x, this.options.layoutAnchor || void 0), sn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), p = !!this.resumingFrom || this !== d;
      let x = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (x = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (x = !1), this.resolvedRelativeTargetAt === ie.timestamp && (x = !1), x)
        return;
      const { layout: v, layoutId: y } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || y))
        return;
      sn(this.layoutCorrected, this.layout.layoutBox);
      const g = this.treeScale.x, T = this.treeScale.y;
      B3(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Ft());
      const { target: j } = d;
      if (!j) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ty(this.prevProjectionDelta.x, this.projectionDelta.x), ty(this.prevProjectionDelta.y, this.projectionDelta.y)), co(this.projectionDelta, this.layoutCorrected, j, this.latestValues), (this.treeScale.x !== g || this.treeScale.y !== T || !fy(this.projectionDelta.x, this.prevProjectionDelta.x) || !fy(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", j));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement?.scheduleRender(), d) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = tl(), this.projectionDelta = tl(), this.projectionDeltaWithTransform = tl();
    }
    setAnimationOrigin(d, p = !1, x) {
      const v = this.snapshot, y = v ? v.latestValues : {}, g = { ...this.latestValues }, T = tl();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
      const j = Ft(), O = v ? v.source : void 0, _ = this.layout ? this.layout.source : void 0, V = O !== _, R = this.getStack(), k = !R || R.members.length <= 1, H = !!(V && !k && this.options.crossfade === !0 && !this.path.some(kw));
      this.animationProgress = 0;
      let X;
      const at = x?.interpolateProjection(d);
      this.mixTargetDelta = (ft) => {
        const K = ft / 1e3, Y = at?.(K);
        Y ? (T.x.translate = Y.x, T.x.scale = Vt(d.x.scale, 1, K), T.x.origin = d.x.origin, T.x.originPoint = d.x.originPoint, T.y.translate = Y.y, T.y.scale = Vt(d.y.scale, 1, K), T.y.origin = d.y.origin, T.y.originPoint = d.y.originPoint) : (vy(T.x, d.x, K), vy(T.y, d.y, K)), this.setTargetDelta(T), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (br(j, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Bw(this.relativeTarget, this.relativeTargetOrigin, j, K), X && dw(this.relativeTarget, X) && (this.isProjectionDirty = !1), X || (X = Ft()), sn(X, this.relativeTarget)), V && (this.animationValues = g, mw(g, y, this.latestValues, K, H, k)), Y && Y.rotate !== void 0 && (this.animationValues || (this.animationValues = g), this.animationValues.pathRotation = Y.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = K;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (dn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Tt.update(() => {
        fr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Dn(0)), this.motionValue.jump(0, !1), this.currentAnimation = vw(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (p) => {
            this.mixTargetDelta(p), d.onUpdate && d.onUpdate(p);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ww), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: p, target: x, layout: v, latestValues: y } = d;
      if (!(!p || !x || !v)) {
        if (this !== d && this.layout && v && C1(this.options.animationType, this.layout.layoutBox, v.layoutBox)) {
          x = this.target || Ft();
          const g = Se(this.layout.layoutBox.x);
          x.x.min = d.target.x.min, x.x.max = x.x.min + g;
          const T = Se(this.layout.layoutBox.y);
          x.y.min = d.target.y.min, x.y.max = x.y.min + T;
        }
        sn(p, x), ur(p, y), co(this.projectionDeltaWithTransform, this.layoutCorrected, p, y);
      }
    }
    registerSharedNode(d, p) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new Tw()), this.sharedNodes.get(d).add(p);
      const v = p.options.initialPromotionConfig;
      p.promote({
        transition: v ? v.transition : void 0,
        preserveFollowOpacity: v && v.shouldPreserveFollowOpacity ? v.shouldPreserveFollowOpacity(p) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: p, preserveFollowOpacity: x } = {}) {
      const v = this.getStack();
      v && v.promote(this, x), d && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({ transition: p });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let p = !1;
      const { latestValues: x } = d;
      if ((x.z || x.rotate || x.rotateX || x.rotateY || x.rotateZ || x.skewX || x.skewY) && (p = !0), !p)
        return;
      const v = {};
      x.z && Mf("z", d, v, this.animationValues);
      for (let y = 0; y < zf.length; y++)
        Mf(`rotate${zf[y]}`, d, v, this.animationValues), Mf(`skew${zf[y]}`, d, v, this.animationValues);
      d.render();
      for (const y in v)
        d.setStaticValue(y, v[y]), this.animationValues && (this.animationValues[y] = v[y]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, p) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const x = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = cr(p?.pointerEvents) || "", d.transform = x ? x(this.latestValues, "") : "none";
        return;
      }
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = cr(p?.pointerEvents) || ""), this.hasProjected && !$i(this.latestValues) && (d.transform = x ? x({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const y = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let g = hw(this.projectionDeltaWithTransform, this.treeScale, y);
      x && (g = x(y, g)), d.transform = g;
      const { x: T, y: j } = this.projectionDelta;
      d.transformOrigin = `${T.origin * 100}% ${j.origin * 100}% 0`, v.animationValues ? d.opacity = v === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : d.opacity = v === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
      for (const O in id) {
        if (y[O] === void 0)
          continue;
        const { correct: _, applyTo: V, isCSSVariable: R } = id[O], k = g === "none" ? y[O] : _(y[O], v);
        if (V) {
          const H = V.length;
          for (let X = 0; X < H; X++)
            d[V[X]] = k;
        } else
          R ? this.options.visualElement.renderState.vars[O] = k : d[O] = k;
      }
      this.options.layoutId && (d.pointerEvents = v === this ? cr(p?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(my), this.root.sharedNodes.clear();
    }
  };
}
function Aw(a) {
  a.updateLayout();
}
function zw(a) {
  const l = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: u } = a.layout, { animationType: c } = a.options, h = l.source !== a.layout.source;
    if (c === "size")
      zn((y) => {
        const g = h ? l.measuredBox[y] : l.layoutBox[y], T = Se(g);
        g.min = r[y].min, g.max = g.min + T;
      });
    else if (c === "x" || c === "y") {
      const y = c === "x" ? "y" : "x";
      ad(h ? l.measuredBox[y] : l.layoutBox[y], r[y]);
    } else C1(c, l.layoutBox, r) && zn((y) => {
      const g = h ? l.measuredBox[y] : l.layoutBox[y], T = Se(r[y]);
      g.max = g.min + T, a.relativeTarget && !a.currentAnimation && (a.isProjectionDirty = !0, a.relativeTarget[y].max = a.relativeTarget[y].min + T);
    });
    const d = tl();
    co(d, r, l.layoutBox);
    const p = tl();
    h ? co(p, a.applyTransform(u, !0), l.measuredBox) : co(p, r, l.layoutBox);
    const x = !w1(d);
    let v = !1;
    if (!a.resumeFrom) {
      const y = a.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: g, layout: T } = y;
        if (g && T) {
          const j = a.options.layoutAnchor || void 0, O = Ft();
          br(O, l.layoutBox, g.layoutBox, j);
          const _ = Ft();
          br(_, r, T.layoutBox, j), E1(O, _) || (v = !0), y.options.layoutRoot && (a.relativeTarget = _, a.relativeTargetOrigin = O, a.relativeParent = y);
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: p,
      layoutDelta: d,
      hasLayoutChanged: x,
      hasRelativeLayoutChanged: v
    });
  } else if (a.isLead()) {
    const { onExitComplete: r } = a.options;
    r && r();
  }
  a.options.transition = void 0;
}
function Mw(a) {
  a.parent && (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty), a.isSharedProjectionDirty || (a.isSharedProjectionDirty = !!(a.isProjectionDirty || a.parent.isProjectionDirty || a.parent.isSharedProjectionDirty)), a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function Cw(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function Dw(a) {
  a.clearSnapshot();
}
function my(a) {
  a.clearMeasurements();
}
function Nw(a) {
  a.isLayoutDirty = !0, a.updateLayout();
}
function gy(a) {
  a.isLayoutDirty = !1;
}
function Ow(a) {
  a.isAnimationBlocked && a.layout && !a.isLayoutDirty && (a.snapshot = a.layout, a.isLayoutDirty = !0);
}
function Rw(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), a.resetTransform();
}
function yy(a) {
  a.finishAnimation(), a.targetDelta = a.relativeTarget = a.target = void 0, a.isProjectionDirty = !0;
}
function jw(a) {
  a.resolveTargetDelta();
}
function Vw(a) {
  a.calcProjection();
}
function _w(a) {
  a.resetSkewAndRotation();
}
function Uw(a) {
  a.removeLeadSnapshot();
}
function vy(a, l, r) {
  a.translate = Vt(l.translate, 0, r), a.scale = Vt(l.scale, 1, r), a.origin = l.origin, a.originPoint = l.originPoint;
}
function xy(a, l, r, u) {
  a.min = Vt(l.min, r.min, u), a.max = Vt(l.max, r.max, u);
}
function Bw(a, l, r, u) {
  xy(a.x, l.x, r.x, u), xy(a.y, l.y, r.y, u);
}
function kw(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const Lw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, by = (a) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(a), Sy = by("applewebkit/") && !by("chrome/") ? Math.round : Ce;
function Ty(a) {
  a.min = Sy(a.min), a.max = Sy(a.max);
}
function Hw(a) {
  Ty(a.x), Ty(a.y);
}
function C1(a, l, r) {
  return a === "position" || a === "preserve-aspect" && !sw(cy(l), cy(r), 0.2);
}
function qw(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const Gw = M1({
  attachResizeListener: (a, l) => mo(a, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Cf = {
  current: void 0
}, D1 = M1({
  measureScroll: (a) => ({
    x: a.scrollLeft,
    y: a.scrollTop
  }),
  defaultParent: () => {
    if (!Cf.current) {
      const a = new Gw({});
      a.mount(window), a.setOptions({ layoutScroll: !0 }), Cf.current = a;
    }
    return Cf.current;
  },
  resetTransform: (a, l) => {
    a.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed"
}), Sr = Z.createContext({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function Yw(a = !0) {
  const l = Z.useContext(cd);
  if (l === null)
    return [!0, null];
  const { isPresent: r, onExitComplete: u, register: c } = l, h = Z.useId();
  Z.useEffect(() => {
    if (a)
      return c(h);
  }, [a]);
  const d = Z.useCallback(() => a && u && u(h), [h, u, a]);
  return !r && u ? [!1, d] : [!0];
}
const N1 = Z.createContext({ strict: !1 }), wy = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let Ey = !1;
function Xw() {
  if (Ey)
    return;
  const a = {};
  for (const l in wy)
    a[l] = {
      isEnabled: (r) => wy[l].some((u) => !!r[u])
    };
  s1(a), Ey = !0;
}
function O1() {
  return Xw(), j3();
}
function Zw(a) {
  const l = O1();
  for (const r in a)
    l[r] = {
      ...l[r],
      ...a[r]
    };
  s1(l);
}
const Qw = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Tr(a) {
  return a.startsWith("while") || a.startsWith("drag") && a !== "draggable" || a.startsWith("layout") || a.startsWith("onTap") || a.startsWith("onPan") || a.startsWith("onLayout") || Qw.has(a);
}
let R1 = (a) => !Tr(a);
function j1(a) {
  typeof a == "function" && (R1 = (l) => l.startsWith("on") ? !Tr(l) : a(l));
}
try {
  j1(require("@emotion/is-prop-valid").default);
} catch {
}
function Kw(a, l, r) {
  const u = {};
  for (const c in a)
    c === "values" && typeof a.values == "object" || de(a[c]) || (R1(c) || r === !0 && Tr(c) || !l && !Tr(c) || // If trying to use native HTML drag events, forward drag listeners
    a.draggable && c.startsWith("onDrag")) && (u[c] = a[c]);
  return u;
}
function Pw({ children: a, isValidProp: l, ...r }) {
  l && j1(l);
  const u = Z.useContext(Sr);
  r = { ...u, ...r }, r.transition = Ad(r.transition, u.transition), r.isStatic = ud(() => r.isStatic);
  const c = Z.useMemo(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion,
    r.skipAnimations
  ]);
  return b.jsx(Sr.Provider, { value: c, children: a });
}
const Cr = /* @__PURE__ */ Z.createContext({});
function Jw(a, l) {
  if (Mr(a)) {
    const { initial: r, animate: u } = a;
    return {
      initial: r === !1 || po(r) ? r : void 0,
      animate: po(u) ? u : void 0
    };
  }
  return a.inherit !== !1 ? l : {};
}
function Fw(a) {
  const { initial: l, animate: r } = Jw(a, Z.useContext(Cr));
  return Z.useMemo(() => ({ initial: l, animate: r }), [Ay(l), Ay(r)]);
}
function Ay(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Bd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function V1(a, l, r) {
  for (const u in l)
    !de(l[u]) && !p1(u, r) && (a[u] = l[u]);
}
function Iw({ transformTemplate: a }, l) {
  return Z.useMemo(() => {
    const r = Bd();
    return _d(r, l, a), Object.assign({}, r.vars, r.style);
  }, [l]);
}
function Ww(a, l) {
  const r = a.style || {}, u = {};
  return V1(u, r, a), Object.assign(u, Iw(a, l)), u;
}
function $w(a, l) {
  const r = {}, u = Ww(a, l);
  return a.drag && a.dragListener !== !1 && (r.draggable = !1, u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none", u.touchAction = a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`), a.tabIndex === void 0 && (a.onTap || a.onTapStart || a.whileTap) && (r.tabIndex = 0), r.style = u, r;
}
const _1 = () => ({
  ...Bd(),
  attrs: {}
});
function tE(a, l, r, u) {
  const c = Z.useMemo(() => {
    const h = _1();
    return m1(h, l, y1(u), a.transformTemplate, a.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (a.style) {
    const h = {};
    V1(h, a.style, a), c.style = { ...h, ...c.style };
  }
  return c;
}
const eE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function kd(a) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof a != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    a.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(eE.indexOf(a) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(a))
    )
  );
}
function nE(a, l, r, { latestValues: u }, c, h = !1, d) {
  const x = (d ?? kd(a) ? tE : $w)(l, u, c, a), v = Kw(l, typeof a == "string", h), y = a !== Z.Fragment ? { ...v, ...x, ref: r } : {}, { children: g } = l, T = Z.useMemo(() => de(g) ? g.get() : g, [g]);
  return Z.createElement(a, {
    ...y,
    children: T
  });
}
function iE({ scrapeMotionValuesFromProps: a, createRenderState: l }, r, u, c) {
  return {
    latestValues: aE(r, u, c, a),
    renderState: l()
  };
}
function aE(a, l, r, u) {
  const c = {}, h = u(a, {});
  for (const T in h)
    c[T] = cr(h[T]);
  let { initial: d, animate: p } = a;
  const x = Mr(a), v = l1(a);
  l && v && !x && a.inherit !== !1 && (d === void 0 && (d = l.initial), p === void 0 && (p = l.animate));
  let y = r ? r.initial === !1 : !1;
  y = y || d === !1;
  const g = y ? p : d;
  if (g && typeof g != "boolean" && !zr(g)) {
    const T = Array.isArray(g) ? g : [g];
    for (let j = 0; j < T.length; j++) {
      const O = Cd(a, T[j]);
      if (O) {
        const { transitionEnd: _, transition: V, ...R } = O;
        for (const k in R) {
          let H = R[k];
          if (Array.isArray(H)) {
            const X = y ? H.length - 1 : 0;
            H = H[X];
          }
          H !== null && (c[k] = H);
        }
        for (const k in _)
          c[k] = _[k];
      }
    }
  }
  return c;
}
const U1 = (a) => (l, r) => {
  const u = Z.useContext(Cr), c = Z.useContext(cd), h = () => iE(a, l, u, c);
  return r ? h() : ud(h);
}, lE = /* @__PURE__ */ U1({
  scrapeMotionValuesFromProps: Ud,
  createRenderState: Bd
}), oE = /* @__PURE__ */ U1({
  scrapeMotionValuesFromProps: v1,
  createRenderState: _1
}), sE = Symbol.for("motionComponentSymbol");
function rE(a, l, r) {
  const u = Z.useRef(r);
  Z.useInsertionEffect(() => {
    u.current = r;
  });
  const c = Z.useRef(null);
  return Z.useCallback((h) => {
    h && a.onMount?.(h), l && (h ? l.mount(h) : l.unmount());
    const d = u.current;
    if (typeof d == "function")
      if (h) {
        const p = d(h);
        typeof p == "function" && (c.current = p);
      } else c.current ? (c.current(), c.current = null) : d(h);
    else d && (d.current = h);
  }, [l]);
}
const B1 = Z.createContext({});
function Ia(a) {
  return a && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "current");
}
function uE(a, l, r, u, c, h) {
  const { visualElement: d } = Z.useContext(Cr), p = Z.useContext(N1), x = Z.useContext(cd), v = Z.useContext(Sr), y = v.reducedMotion, g = v.skipAnimations, T = Z.useRef(null), j = Z.useRef(!1);
  u = u || p.renderer, !T.current && u && (T.current = u(a, {
    visualState: l,
    parent: d,
    props: r,
    presenceContext: x,
    blockInitialAnimation: x ? x.initial === !1 : !1,
    reducedMotionConfig: y,
    skipAnimations: g,
    isSVG: h
  }), j.current && T.current && (T.current.manuallyAnimateOnMount = !0));
  const O = T.current, _ = Z.useContext(B1);
  O && !O.projection && c && (O.type === "html" || O.type === "svg") && cE(T.current, r, c, _);
  const V = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    O && V.current && O.update(r, x);
  });
  const R = r[Xv], k = Z.useRef(!!R && typeof window < "u" && !window.MotionHandoffIsComplete?.(R) && window.MotionHasOptimisedAnimation?.(R));
  return nv(() => {
    j.current = !0, O && (V.current = !0, window.MotionIsMounted = !0, O.updateFeatures(), O.scheduleRenderMicrotask(), k.current && O.animationState && O.animationState.animateChanges());
  }), Z.useEffect(() => {
    O && (!k.current && O.animationState && O.animationState.animateChanges(), k.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(R);
    }), k.current = !1), O.enteringChildren = void 0);
  }), O;
}
function cE(a, l, r, u) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: p, layoutScroll: x, layoutRoot: v, layoutAnchor: y, layoutCrossfade: g } = l;
  a.projection = new r(a.latestValues, l["data-framer-portal-id"] ? void 0 : k1(a.parent)), a.projection.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || p && Ia(p),
    visualElement: a,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof h == "string" ? h : "both",
    initialPromotionConfig: u,
    crossfade: g,
    layoutScroll: x,
    layoutRoot: v,
    layoutAnchor: y
  });
}
function k1(a) {
  if (a)
    return a.options.allowProjection !== !1 ? a.projection : k1(a.parent);
}
function Df(a, { forwardMotionProps: l = !1, type: r } = {}, u, c) {
  u && Zw(u);
  const h = r ? r === "svg" : kd(a), d = h ? oE : lE;
  function p(v, y) {
    let g;
    const T = {
      ...Z.useContext(Sr),
      ...v,
      layoutId: fE(v)
    }, { isStatic: j } = T, O = Fw(v), _ = d(v, j);
    if (!j && typeof window < "u") {
      dE();
      const V = hE(T);
      g = V.MeasureLayout, O.visualElement = uE(a, _, T, c, V.ProjectionNode, h);
    }
    return b.jsxs(Cr.Provider, { value: O, children: [g && O.visualElement ? b.jsx(g, { visualElement: O.visualElement, ...T }) : null, nE(a, v, rE(_, O.visualElement, y), _, j, l, h)] });
  }
  p.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const x = Z.forwardRef(p);
  return x[sE] = a, x;
}
function fE({ layoutId: a }) {
  const l = Z.useContext(ev).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function dE(a, l) {
  Z.useContext(N1).strict;
}
function hE(a) {
  const l = O1(), { drag: r, layout: u } = l;
  if (!r && !u)
    return {};
  const c = { ...r, ...u };
  return {
    MeasureLayout: r?.isEnabled(a) || u?.isEnabled(a) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function pE(a, l) {
  if (typeof Proxy > "u")
    return Df;
  const r = /* @__PURE__ */ new Map(), u = (h, d) => Df(h, d, a, l), c = (h, d) => u(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? u : (r.has(d) || r.set(d, Df(d, void 0, a, l)), r.get(d))
  });
}
const mE = (a, l) => l.isSVG ?? kd(a) ? new F3(l) : new X3(l, {
  allowProjection: a !== Z.Fragment
});
class gE extends Mi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = ew(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    zr(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    l !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let yE = 0;
class vE extends Mi {
  constructor() {
    super(...arguments), this.id = yE++, this.isExitComplete = !1;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: r } = this.node.presenceContext, { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === u)
      return;
    if (l && u === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: d } = this.node.getProps();
        if (typeof h == "string" || typeof h == "object" && h !== null && !Array.isArray(h)) {
          const p = aa(this.node, h, d);
          if (p) {
            const { transition: x, transitionEnd: v, ...y } = p;
            for (const g in y)
              this.node.getValue(g)?.jump(y[g]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    r && !l && c.then(() => {
      this.isExitComplete = !0, r(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const xE = {
  animation: {
    Feature: gE
  },
  exit: {
    Feature: vE
  }
};
function So(a) {
  return {
    point: {
      x: a.pageX,
      y: a.pageY
    }
  };
}
const bE = (a) => (l) => Od(l) && a(l, So(l));
function fo(a, l, r, u) {
  return mo(a, l, bE(r), u);
}
const L1 = ({ current: a }) => a ? a.ownerDocument.defaultView : null, zy = (a, l) => Math.abs(a - l);
function SE(a, l) {
  const r = zy(a.x, l.x), u = zy(a.y, l.y);
  return Math.sqrt(r ** 2 + u ** 2);
}
const My = /* @__PURE__ */ new Set(["auto", "scroll"]);
class H1 {
  constructor(l, r, { transformPagePoint: u, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: p } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (O) => {
      this.handleScroll(O.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = tr(this.lastRawMoveEventInfo, this.transformPagePoint));
      const O = Nf(this.lastMoveEventInfo, this.history), _ = this.startEvent !== null, V = SE(O.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!_ && !V)
        return;
      const { point: R } = O, { timestamp: k } = ie;
      this.history.push({ ...R, timestamp: k });
      const { onStart: H, onMove: X } = this.handlers;
      _ || (H && H(this.lastMoveEvent, O), this.startEvent = this.lastMoveEvent), X && X(this.lastMoveEvent, O);
    }, this.handlePointerMove = (O, _) => {
      this.lastMoveEvent = O, this.lastRawMoveEventInfo = _, this.lastMoveEventInfo = tr(_, this.transformPagePoint), Tt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (O, _) => {
      this.end();
      const { onEnd: V, onSessionEnd: R, resumeAnimation: k } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const H = Nf(O.type === "pointercancel" ? this.lastMoveEventInfo : tr(_, this.transformPagePoint), this.history);
      this.startEvent && V && V(O, H), R && R(O, H);
    }, !Od(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = r, this.transformPagePoint = u, this.distanceThreshold = d, this.contextWindow = c || window;
    const x = So(l), v = tr(x, this.transformPagePoint), { point: y } = v, { timestamp: g } = ie;
    this.history = [{ ...y, timestamp: g }];
    const { onSessionStart: T } = r;
    T && T(l, Nf(v, this.history));
    const j = { passive: !0, capture: !0 };
    this.removeListeners = vo(fo(this.contextWindow, "pointermove", this.handlePointerMove, j), fo(this.contextWindow, "pointerup", this.handlePointerUp, j), fo(this.contextWindow, "pointercancel", this.handlePointerUp, j)), p && this.startScrollTracking(p);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let r = l.parentElement;
    for (; r; ) {
      const u = getComputedStyle(r);
      (My.has(u.overflowX) || My.has(u.overflowY)) && this.scrollPositions.set(r, {
        x: r.scrollLeft,
        y: r.scrollTop
      }), r = r.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const r = this.scrollPositions.get(l);
    if (!r)
      return;
    const u = l === window, c = u ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, h = { x: c.x - r.x, y: c.y - r.y };
    h.x === 0 && h.y === 0 || (u ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), Tt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), dn(this.updatePoint);
  }
}
function tr(a, l) {
  return l ? { point: l(a.point) } : a;
}
function Cy(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function Nf({ point: a }, l) {
  return {
    point: a,
    delta: Cy(a, q1(l)),
    offset: Cy(a, TE(l)),
    velocity: wE(l, 0.1)
  };
}
function TE(a) {
  return a[0];
}
function q1(a) {
  return a[a.length - 1];
}
function wE(a, l) {
  if (a.length < 2)
    return { x: 0, y: 0 };
  let r = a.length - 1, u = null;
  const c = q1(a);
  for (; r >= 0 && (u = a[r], !(c.timestamp - u.timestamp > /* @__PURE__ */ De(l))); )
    r--;
  if (!u)
    return { x: 0, y: 0 };
  u === a[0] && a.length > 2 && c.timestamp - u.timestamp > /* @__PURE__ */ De(l) * 2 && (u = a[1]);
  const h = /* @__PURE__ */ We(c.timestamp - u.timestamp);
  if (h === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - u.x) / h,
    y: (c.y - u.y) / h
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function EE(a, { min: l, max: r }, u) {
  return l !== void 0 && a < l ? a = u ? Vt(l, a, u.min) : Math.max(a, l) : r !== void 0 && a > r && (a = u ? Vt(r, a, u.max) : Math.min(a, r)), a;
}
function Dy(a, l, r) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: r !== void 0 ? a.max + r - (a.max - a.min) : void 0
  };
}
function AE(a, { top: l, left: r, bottom: u, right: c }) {
  return {
    x: Dy(a.x, r, c),
    y: Dy(a.y, l, u)
  };
}
function Ny(a, l) {
  let r = l.min - a.min, u = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([r, u] = [u, r]), { min: r, max: u };
}
function zE(a, l) {
  return {
    x: Ny(a.x, l.x),
    y: Ny(a.y, l.y)
  };
}
function ME(a, l) {
  let r = 0.5;
  const u = Se(a), c = Se(l);
  return c > u ? r = /* @__PURE__ */ nl(l.min, l.max - u, a.min) : u > c && (r = /* @__PURE__ */ nl(a.min, a.max - c, l.min)), fn(0, 1, r);
}
function CE(a, l) {
  const r = {};
  return l.min !== void 0 && (r.min = l.min - a.min), l.max !== void 0 && (r.max = l.max - a.min), r;
}
const ld = 0.35;
function DE(a = ld) {
  return a === !1 ? a = 0 : a === !0 && (a = ld), {
    x: Oy(a, "left", "right"),
    y: Oy(a, "top", "bottom")
  };
}
function Oy(a, l, r) {
  return {
    min: Ry(a, l),
    max: Ry(a, r)
  };
}
function Ry(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const NE = /* @__PURE__ */ new WeakMap();
class OE {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ft(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: r = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const h = (g) => {
      r && this.snapToCursor(So(g).point), this.stopAnimation();
    }, d = (g, T) => {
      const { drag: j, dragPropagation: O, onDragStart: _ } = this.getProps();
      if (j && !O && (this.openDragLock && this.openDragLock(), this.openDragLock = u3(j), !this.openDragLock))
        return;
      this.latestPointerEvent = g, this.latestPanInfo = T, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), zn((R) => {
        let k = this.getAxisMotionValue(R).get() || 0;
        if (Nn.test(k)) {
          const { projection: H } = this.visualElement;
          if (H && H.layout) {
            const X = H.layout.layoutBox[R];
            X && (k = Se(X) * (parseFloat(k) / 100));
          }
        }
        this.originPoint[R] = k;
      }), _ && Tt.update(() => _(g, T), !1, !0), Pf(this.visualElement, "transform");
      const { animationState: V } = this.visualElement;
      V && V.setActive("whileDrag", !0);
    }, p = (g, T) => {
      this.latestPointerEvent = g, this.latestPanInfo = T;
      const { dragPropagation: j, dragDirectionLock: O, onDirectionLock: _, onDrag: V } = this.getProps();
      if (!j && !this.openDragLock)
        return;
      const { offset: R } = T;
      if (O && this.currentDirection === null) {
        this.currentDirection = jE(R), this.currentDirection !== null && _ && _(this.currentDirection);
        return;
      }
      this.updateAxis("x", T.point, R), this.updateAxis("y", T.point, R), this.visualElement.render(), V && Tt.update(() => V(g, T), !1, !0);
    }, x = (g, T) => {
      this.latestPointerEvent = g, this.latestPanInfo = T, this.stop(g, T), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, v = () => {
      const { dragSnapToOrigin: g } = this.getProps();
      (g || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new H1(l, {
      onSessionStart: h,
      onStart: d,
      onMove: p,
      onSessionEnd: x,
      resumeAnimation: v
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: y,
      distanceThreshold: u,
      contextWindow: L1(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, r) {
    const u = l || this.latestPointerEvent, c = r || this.latestPanInfo, h = this.isDragging;
    if (this.cancel(), !h || !c || !u)
      return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: p } = this.getProps();
    p && Tt.postRender(() => p(u, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: r } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: u } = this.getProps();
    !u && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, r, u) {
    const { drag: c } = this.getProps();
    if (!u || !er(l, c, this.currentDirection))
      return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + u[l];
    this.constraints && this.constraints[l] && (d = EE(d, this.constraints[l], this.elastic[l])), h.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: r } = this.getProps(), u = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && Ia(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && u ? this.constraints = AE(u.layoutBox, l) : this.constraints = !1, this.elastic = DE(r), c !== this.constraints && !Ia(l) && u && this.constraints && !this.hasMutatedConstraints && zn((h) => {
      this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = CE(u.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: r } = this.getProps();
    if (!l || !Ia(l))
      return !1;
    const u = l.current;
    On(u !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const h = k3(u, c.root, this.visualElement.getTransformPagePoint());
    let d = zE(c.layout.layoutBox, h);
    if (r) {
      const p = r(_3(d));
      this.hasMutatedConstraints = !!p, p && (d = u1(p));
    }
    return d;
  }
  startAnimation(l) {
    const { drag: r, dragMomentum: u, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: p } = this.getProps(), x = this.constraints || {}, v = zn((y) => {
      if (!er(y, r, this.currentDirection))
        return;
      let g = x && x[y] || {};
      (d === !0 || d === y) && (g = { min: 0, max: 0 });
      const T = c ? 200 : 1e6, j = c ? 40 : 1e7, O = {
        type: "inertia",
        velocity: u ? l[y] : 0,
        bounceStiffness: T,
        bounceDamping: j,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...h,
        ...g
      };
      return this.startAxisValueAnimation(y, O);
    });
    return Promise.all(v).then(p);
  }
  startAxisValueAnimation(l, r) {
    const u = this.getAxisMotionValue(l);
    return Pf(this.visualElement, l), u.start(Md(l, u, 0, r, this.visualElement, !1));
  }
  stopAnimation() {
    zn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const r = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[r];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    zn((r) => {
      const { drag: u } = this.getProps();
      if (!er(r, u, this.currentDirection))
        return;
      const { projection: c } = this.visualElement, h = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: d, max: p } = c.layout.layoutBox[r], x = h.get() || 0;
        h.set(l[r] - Vt(d, p, 0.5) + x);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: r } = this.getProps(), { projection: u } = this.visualElement;
    if (!Ia(r) || !u || !this.constraints)
      return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    zn((d) => {
      const p = this.getAxisMotionValue(d);
      if (p && this.constraints !== !1) {
        const x = p.get();
        c[d] = ME({ min: x, max: x }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    this.visualElement.current.style.transform = h ? h({}, "") : "none", u.root && u.root.updateScroll(), u.updateLayout(), this.constraints = !1, this.resolveConstraints(), zn((d) => {
      if (!er(d, l, null))
        return;
      const p = this.getAxisMotionValue(d), { min: x, max: v } = this.constraints[d];
      p.set(Vt(x, v, c[d]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    NE.set(this.visualElement, this);
    const l = this.visualElement.current, r = fo(l, "pointerdown", (v) => {
      const { drag: y, dragListener: g = !0 } = this.getProps(), T = v.target, j = T !== l && m3(T);
      y && g && !j && this.start(v);
    });
    let u;
    const c = () => {
      const { dragConstraints: v } = this.getProps();
      Ia(v) && v.current && (this.constraints = this.resolveRefConstraints(), u || (u = RE(l, v.current, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), Tt.read(c);
    const p = mo(window, "resize", () => this.scalePositionWithinConstraints()), x = h.addEventListener("didUpdate", (({ delta: v, hasLayoutChanged: y }) => {
      this.isDragging && y && (zn((g) => {
        const T = this.getAxisMotionValue(g);
        T && (this.originPoint[g] += v[g].translate, T.set(T.get() + v[g].translate));
      }), this.visualElement.render());
    }));
    return () => {
      p(), r(), d(), x && x(), u && u();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: u = !1, dragPropagation: c = !1, dragConstraints: h = !1, dragElastic: d = ld, dragMomentum: p = !0 } = l;
    return {
      ...l,
      drag: r,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: p
    };
  }
}
function jy(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function RE(a, l, r) {
  const u = $f(a, jy(r)), c = $f(l, jy(r));
  return () => {
    u(), c();
  };
}
function er(a, l, r) {
  return (l === !0 || l === a) && (r === null || r === a);
}
function jE(a, l = 10) {
  let r = null;
  return Math.abs(a.y) > l ? r = "y" : Math.abs(a.x) > l && (r = "x"), r;
}
class VE extends Mi {
  constructor(l) {
    super(l), this.removeGroupControls = Ce, this.removeListeners = Ce, this.controls = new OE(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ce;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Of = (a) => (l, r) => {
  a && Tt.update(() => a(l, r), !1, !0);
};
class _E extends Mi {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ce;
  }
  onPointerDown(l) {
    this.session = new H1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: L1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: r, onPan: u, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Of(l),
      onStart: Of(r),
      onMove: Of(u),
      onEnd: (h, d) => {
        delete this.session, c && Tt.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = fo(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Rf = !1;
class UE extends Z.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: u, layoutId: c } = this.props, { projection: h } = l;
    h && (r.group && r.group.add(h), u && u.register && c && u.register(h), Rf && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), h.setOptions({
      ...h.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), fr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: r, visualElement: u, drag: c, isPresent: h } = this.props, { projection: d } = u;
    return d && (d.isPresent = h, l.layoutDependency !== r && d.setOptions({
      ...d.options,
      layoutDependency: r
    }), Rf = !0, c || l.layoutDependency !== r || r === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || Tt.postRender(() => {
      const p = d.getStack();
      (!p || !p.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: r } = this.props, { projection: u } = l;
    u && (u.options.layoutAnchor = r, u.root.didUpdate(), al.postRender(() => {
      !u.currentAnimation && u.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: u } = this.props, { projection: c } = l;
    Rf = !0, c && (c.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(c), u && u.deregister && u.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function G1(a) {
  const [l, r] = Yw(), u = Z.useContext(ev);
  return b.jsx(UE, { ...a, layoutGroup: u, switchLayoutGroup: Z.useContext(B1), isPresent: l, safeToRemove: r });
}
const BE = {
  pan: {
    Feature: _E
  },
  drag: {
    Feature: VE,
    ProjectionNode: D1,
    MeasureLayout: G1
  }
};
function Vy(a, l, r) {
  const { props: u } = a;
  a.animationState && u.whileHover && a.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r, h = u[c];
  h && Tt.postRender(() => h(l, So(l)));
}
class kE extends Mi {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = f3(l, (r, u) => (Vy(this.node, u, "Start"), (c) => Vy(this.node, c, "End"))));
  }
  unmount() {
  }
}
class LE extends Mi {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = vo(mo(this.node.current, "focus", () => this.onFocus()), mo(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function _y(a, l, r) {
  const { props: u } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled)
    return;
  a.animationState && u.whileTap && a.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r), h = u[c];
  h && Tt.postRender(() => h(l, So(l)));
}
class HE extends Mi {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: r, propagate: u } = this.node.props;
    this.unmount = y3(l, (c, h) => (_y(this.node, h, "Start"), (d, { success: p }) => _y(this.node, d, p ? "End" : "Cancel")), {
      useGlobalTarget: r,
      stopPropagation: u?.tap === !1
    });
  }
  unmount() {
  }
}
const od = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap(), qE = (a) => {
  const l = od.get(a.target);
  l && l(a);
}, GE = (a) => {
  a.forEach(qE);
};
function YE({ root: a, ...l }) {
  const r = a || document;
  jf.has(r) || jf.set(r, {});
  const u = jf.get(r), c = JSON.stringify(l);
  return u[c] || (u[c] = new IntersectionObserver(GE, { root: a, ...l })), u[c];
}
function XE(a, l, r) {
  const u = YE(l);
  return od.set(a, r), u.observe(a), () => {
    od.delete(a), u.unobserve(a);
  };
}
const ZE = {
  some: 0,
  all: 1
};
class QE extends Mi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: r, margin: u, amount: c = "some", once: h } = l, d = {
      root: r ? r.current : void 0,
      rootMargin: u,
      threshold: typeof c == "number" ? c : ZE[c]
    }, p = (x) => {
      const { isIntersecting: v } = x;
      if (this.isInView === v || (this.isInView = v, h && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: y, onViewportLeave: g } = this.node.getProps(), T = v ? y : g;
      T && T(x);
    };
    this.stopObserver = XE(this.node.current, d, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(KE(l, r)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function KE({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (r) => a[r] !== l[r];
}
const PE = {
  inView: {
    Feature: QE
  },
  tap: {
    Feature: HE
  },
  focus: {
    Feature: LE
  },
  hover: {
    Feature: kE
  }
}, JE = {
  layout: {
    ProjectionNode: D1,
    MeasureLayout: G1
  }
}, FE = {
  ...xE,
  ...PE,
  ...BE,
  ...JE
}, IE = /* @__PURE__ */ pE(FE, mE);
function wr(a) {
  return typeof window > "u" ? !1 : a ? Vv() : Ed();
}
const WE = 50, Uy = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
}), $E = () => ({
  time: 0,
  x: Uy(),
  y: Uy()
}), t5 = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function By(a, l, r, u) {
  const c = r[l], { length: h, position: d } = t5[l], p = c.current, x = r.time;
  c.current = Math.abs(a[`scroll${d}`]), c.scrollLength = a[`scroll${h}`] - a[`client${h}`], c.offset.length = 0, c.offset[0] = 0, c.offset[1] = c.scrollLength, c.progress = /* @__PURE__ */ nl(0, c.scrollLength, c.current);
  const v = u - x;
  c.velocity = v > WE ? 0 : /* @__PURE__ */ hd(c.current - p, v);
}
function e5(a, l, r) {
  By(a, "x", l, r), By(a, "y", l, r), l.time = r;
}
function n5(a, l) {
  const r = { x: 0, y: 0 };
  let u = a;
  for (; u && u !== l; )
    if (Wv(u))
      r.x += u.offsetLeft, r.y += u.offsetTop, u = u.offsetParent;
    else if (u.tagName === "svg") {
      const c = u.getBoundingClientRect();
      u = u.parentElement;
      const h = u.getBoundingClientRect();
      r.x += c.left - h.left, r.y += c.top - h.top;
    } else if (u instanceof SVGGraphicsElement) {
      const { x: c, y: h } = u.getBBox();
      r.x += c, r.y += h;
      let d = null, p = u.parentNode;
      for (; !d; )
        p.tagName === "svg" && (d = p), p = u.parentNode;
      u = d;
    } else
      break;
  return r;
}
const sd = {
  start: 0,
  center: 0.5,
  end: 1
};
function ky(a, l, r = 0) {
  let u = 0;
  if (a in sd && (a = sd[a]), typeof a == "string") {
    const c = parseFloat(a);
    a.endsWith("px") ? u = c : a.endsWith("%") ? a = c / 100 : a.endsWith("vw") ? u = c / 100 * document.documentElement.clientWidth : a.endsWith("vh") ? u = c / 100 * document.documentElement.clientHeight : a = c;
  }
  return typeof a == "number" && (u = l * a), r + u;
}
const i5 = [0, 0];
function a5(a, l, r, u) {
  let c = Array.isArray(a) ? a : i5, h = 0, d = 0;
  return typeof a == "number" ? c = [a, a] : typeof a == "string" && (a = a.trim(), a.includes(" ") ? c = a.split(" ") : c = [a, sd[a] ? a : "0"]), h = ky(c[0], r, u), d = ky(c[1], l), h - d;
}
const so = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
}, l5 = { x: 0, y: 0 };
function o5(a) {
  return "getBBox" in a && a.tagName !== "svg" ? a.getBBox() : { width: a.clientWidth, height: a.clientHeight };
}
function s5(a, l, r) {
  const { offset: u = so.All } = r, { target: c = a, axis: h = "y" } = r, d = h === "y" ? "height" : "width", p = c !== a ? n5(c, a) : l5, x = c === a ? { width: a.scrollWidth, height: a.scrollHeight } : o5(c), v = {
    width: a.clientWidth,
    height: a.clientHeight
  };
  l[h].offset.length = 0;
  let y = !l[h].interpolate;
  const g = u.length;
  for (let T = 0; T < g; T++) {
    const j = a5(u[T], v[d], x[d], p[h]);
    !y && j !== l[h].interpolatorOffsets[T] && (y = !0), l[h].offset[T] = j;
  }
  y && (l[h].interpolate = Cv(l[h].offset, Dv(u), { clamp: !1 }), l[h].interpolatorOffsets = [...l[h].offset]), l[h].progress = fn(0, 1, l[h].interpolate(l[h].current));
}
function r5(a, l = a, r) {
  if (r.x.targetOffset = 0, r.y.targetOffset = 0, l !== a) {
    let u = l;
    for (; u && u !== a; )
      r.x.targetOffset += u.offsetLeft, r.y.targetOffset += u.offsetTop, u = u.offsetParent;
  }
  r.x.targetLength = l === a ? l.scrollWidth : l.clientWidth, r.y.targetLength = l === a ? l.scrollHeight : l.clientHeight, r.x.containerLength = a.clientWidth, r.y.containerLength = a.clientHeight;
}
function u5(a, l, r, u = {}) {
  return {
    measure: (c) => {
      r5(a, u.target, r), e5(a, r, c), (u.offset || u.target) && s5(a, r, u);
    },
    notify: () => l(r)
  };
}
const Fa = /* @__PURE__ */ new WeakMap(), Ly = /* @__PURE__ */ new WeakMap(), Vf = /* @__PURE__ */ new WeakMap(), Hy = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), qy = (a) => a === document.scrollingElement ? window : a;
function Y1(a, { container: l = document.scrollingElement, trackContentSize: r = !1, ...u } = {}) {
  if (!l)
    return Ce;
  let c = Vf.get(l);
  c || (c = /* @__PURE__ */ new Set(), Vf.set(l, c));
  const h = $E(), d = u5(l, a, h, u);
  if (c.add(d), !Fa.has(l)) {
    const x = () => {
      for (const T of c)
        T.measure(ie.timestamp);
      Tt.preUpdate(v);
    }, v = () => {
      for (const T of c)
        T.notify();
    }, y = () => Tt.read(x);
    Fa.set(l, y);
    const g = qy(l);
    window.addEventListener("resize", y), l !== document.documentElement && Ly.set(l, $f(l, y)), g.addEventListener("scroll", y), y();
  }
  if (r && !nr.has(l)) {
    const x = Fa.get(l), v = {
      width: l.scrollWidth,
      height: l.scrollHeight
    };
    Hy.set(l, v);
    const y = () => {
      const T = l.scrollWidth, j = l.scrollHeight;
      (v.width !== T || v.height !== j) && (x(), v.width = T, v.height = j);
    }, g = Tt.read(y, !0);
    nr.set(l, g);
  }
  const p = Fa.get(l);
  return Tt.read(p, !1, !0), () => {
    dn(p);
    const x = Vf.get(l);
    if (!x || (x.delete(d), x.size))
      return;
    const v = Fa.get(l);
    Fa.delete(l), v && (qy(l).removeEventListener("scroll", v), Ly.get(l)?.(), window.removeEventListener("resize", v));
    const y = nr.get(l);
    y && (dn(y), nr.delete(l)), Hy.delete(l);
  };
}
const c5 = [
  [so.Enter, "entry"],
  [so.Exit, "exit"],
  [so.Any, "cover"],
  [so.All, "contain"]
], Gy = {
  start: 0,
  end: 1
};
function f5(a) {
  const l = a.trim().split(/\s+/);
  if (l.length !== 2)
    return;
  const r = Gy[l[0]], u = Gy[l[1]];
  if (!(r === void 0 || u === void 0))
    return [r, u];
}
function d5(a) {
  if (a.length !== 2)
    return;
  const l = [];
  for (const r of a)
    if (Array.isArray(r))
      l.push(r);
    else if (typeof r == "string") {
      const u = f5(r);
      if (!u)
        return;
      l.push(u);
    } else
      return;
  return l;
}
function h5(a, l) {
  const r = d5(a);
  if (!r)
    return !1;
  for (let u = 0; u < 2; u++) {
    const c = r[u], h = l[u];
    if (c[0] !== h[0] || c[1] !== h[1])
      return !1;
  }
  return !0;
}
function Ld(a) {
  if (!a)
    return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [l, r] of c5)
    if (h5(a, l))
      return { rangeStart: `${r} 0%`, rangeEnd: `${r} 100%` };
}
const Yy = /* @__PURE__ */ new Map();
function Xy(a) {
  const l = { value: 0 }, r = Y1((u) => {
    l.value = u[a.axis].progress * 100;
  }, a);
  return { currentTime: l, cancel: r };
}
function X1({ source: a, container: l, ...r }) {
  const { axis: u } = r;
  a && (l = a);
  let c = Yy.get(l);
  c || (c = /* @__PURE__ */ new Map(), Yy.set(l, c));
  const h = r.target ?? "self";
  let d = c.get(h);
  d || (d = {}, c.set(h, d));
  const p = u + (r.offset ?? []).join(",");
  return d[p] || (r.target && wr(r.target) ? Ld(r.offset) ? d[p] = new ViewTimeline({
    subject: r.target,
    axis: u
  }) : d[p] = Xy({
    container: l,
    ...r
  }) : wr() ? d[p] = new ScrollTimeline({
    source: l,
    axis: u
  }) : d[p] = Xy({
    container: l,
    ...r
  })), d[p];
}
function p5(a, l) {
  const r = X1(l), u = l.target ? Ld(l.offset) : void 0, c = l.target ? wr(l.target) && !!u : wr();
  return a.attachTimeline({
    timeline: c ? r : void 0,
    ...u && c && {
      rangeStart: u.rangeStart,
      rangeEnd: u.rangeEnd
    },
    observe: (h) => (h.pause(), a1((d) => {
      h.time = h.iterationDuration * d;
    }, r))
  });
}
function m5(a) {
  return a && (a.target || a.offset);
}
function g5(a) {
  return a.length === 2;
}
function y5(a, l) {
  return g5(a) || m5(l) ? Y1((r) => {
    a(r[l.axis].progress, r);
  }, l) : a1(a, X1(l));
}
function Z1(a, { axis: l = "y", container: r = document.scrollingElement, ...u } = {}) {
  if (!r)
    return Ce;
  const c = { axis: l, container: r, ...u };
  return typeof a == "function" ? y5(a, c) : p5(a, c);
}
const v5 = () => ({
  scrollX: Dn(0),
  scrollY: Dn(0),
  scrollXProgress: Dn(0),
  scrollYProgress: Dn(0)
}), el = (a) => a ? !a.current : !1;
function Zy(a, l, r, u) {
  return {
    // Refs attach child-first; defer so target.current is populated
    // before scroll() reads it.
    factory: (c) => {
      let h;
      const d = () => {
        if (el(r) || el(u)) {
          al.read(d);
          return;
        }
        h = Z1(c, {
          ...l,
          axis: a,
          container: r?.current || void 0,
          target: u?.current || void 0
        });
      };
      return al.read(d), () => {
        $v(d), h?.();
      };
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (c) => c,
    duration: 1
  };
}
function x5(a, l) {
  return typeof window > "u" ? !1 : a ? Vv() && !!Ld(l) : Ed();
}
function b5({ container: a, target: l, ...r } = {}) {
  const u = ud(v5);
  x5(l, r.offset) && (u.scrollXProgress.accelerate = Zy("x", r, a, l), u.scrollYProgress.accelerate = Zy("y", r, a, l));
  const c = Z.useRef(null), h = Z.useRef(!1), d = Z.useCallback(() => (c.current = Z1((p, { x, y: v }) => {
    u.scrollX.set(x.current), u.scrollXProgress.set(x.progress), u.scrollY.set(v.current), u.scrollYProgress.set(v.progress);
  }, {
    ...r,
    container: a?.current || void 0,
    target: l?.current || void 0
  }), () => {
    c.current?.();
  }), [a, l, JSON.stringify(r.offset)]);
  return nv(() => {
    if (h.current = !1, el(a) || el(l)) {
      h.current = !0;
      return;
    } else
      return d();
  }, [d]), Z.useEffect(() => {
    if (!h.current)
      return;
    let p;
    const x = () => {
      const v = el(a), y = el(l);
      On(!v, "Container ref is defined but not hydrated", "use-scroll-ref"), On(!y, "Target ref is defined but not hydrated", "use-scroll-ref"), !v && !y && (p = d());
    };
    return al.read(x), () => {
      $v(x), p?.();
    };
  }, [d]), u;
}
const ta = IE;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S5 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Q1 = (...a) => a.filter((l, r, u) => !!l && l.trim() !== "" && u.indexOf(l) === r).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = Z.forwardRef(
  ({
    color: a = "currentColor",
    size: l = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: u,
    className: c = "",
    children: h,
    iconNode: d,
    ...p
  }, x) => Z.createElement(
    "svg",
    {
      ref: x,
      ...T5,
      width: l,
      height: l,
      stroke: a,
      strokeWidth: u ? Number(r) * 24 / Number(l) : r,
      className: Q1("lucide", c),
      ...p
    },
    [
      ...d.map(([v, y]) => Z.createElement(v, y)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = (a, l) => {
  const r = Z.forwardRef(
    ({ className: u, ...c }, h) => Z.createElement(w5, {
      ref: h,
      iconNode: l,
      className: Q1(`lucide-${S5(a)}`, u),
      ...c
    })
  );
  return r.displayName = `${a}`, r;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E5 = he("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = he("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = he("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A5 = he("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z5 = he("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M5 = he("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C5 = he("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = he("Flower2", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D5 = he("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K1 = he("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N5 = he("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O5 = he("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R5 = he("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j5 = he("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V5 = he("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = he("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = he("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), J1 = "(prefers-reduced-motion: reduce)";
function _5(a) {
  const l = window.matchMedia(J1);
  return l.addEventListener("change", a), () => l.removeEventListener("change", a);
}
const U5 = () => window.matchMedia(J1).matches, B5 = () => !0;
function F1() {
  return Z.useSyncExternalStore(_5, U5, B5);
}
const Py = "Grand Amour", qe = {
  name: Py,
  descriptor: "BELEZA & COSMÉTICOS",
  fullName: `${Py} — Beleza & Cosméticos`,
  signature: "amour.",
  whatsapp: "",
  // Somente dígitos, com código do país e DDD.
  email: "",
  instagram: ""
  // URL HTTPS real; vazio mantém o link oculto.
}, k5 = {
  // {kit} é substituído pelo kit escolhido; {brand} é opcional.
  whatsappMessage: "Olá! Tenho interesse em {kit} e gostaria de saber mais sobre ele."
}, Ie = {
  hero: {
    image: "/images/grand-amour/serum-editorial.webp",
    imageAlt: "Sérum C+E Grand Amour: frasco âmbar, conta-gotas e embalagem original",
    imageMode: "photo",
    imageFit: "contain"
  },
  editorial: {
    image: "/images/grand-amour/nutri-skin.webp",
    imageAlt: "Nutri Skin Grand Amour: creme facial e embalagem original de 60 g",
    imageMode: "photo",
    imageFit: "contain"
  }
}, I1 = [
  {
    id: "serum-ce",
    kind: "product",
    name: "Sérum C+E",
    mood: "Um toque de luminosidade",
    description: "Sérum facial com vitaminas C e E para o seu ritual de cuidado.",
    image: "/images/grand-amour/serum-ce.webp",
    imageAlt: "Sérum C+E Grand Amour, produto e embalagem original, 30 ml",
    imageMode: "photo",
    imageFit: "contain",
    imagePosition: "center",
    price: 59.99,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [
      "30 ml",
      "Vitamina C + Vitamina E"
    ],
    availability: "on-request",
    order: 10,
    published: !0,
    label: "VITAMINAS C + E",
    color: "rose",
    detail: "Sérum facial com vitaminas C e E para o seu ritual de cuidado."
  },
  {
    id: "serum-niacin",
    kind: "product",
    name: "Sérum Niacin",
    mood: "Equilíbrio no seu ritual",
    description: "Sérum facial com niacinamida, vitamina E e extrato de salix alba.",
    image: "/images/grand-amour/serum-niacin.webp",
    imageAlt: "Sérum Niacin Grand Amour, produto e embalagem original, 30 ml",
    imageMode: "photo",
    imageFit: "contain",
    imagePosition: "center",
    price: 59.99,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [
      "30 ml",
      "Niacinamida",
      "Vitamina E",
      "Extrato de salix alba"
    ],
    availability: "on-request",
    order: 20,
    published: !0,
    label: "NIACINAMIDA",
    color: "lilac",
    detail: "Sérum facial com niacinamida, vitamina E e extrato de salix alba."
  },
  {
    id: "nutri-skin",
    kind: "product",
    name: "Nutri Skin",
    mood: "Uma pausa para hidratar",
    description: "Creme facial de hidratação para um momento de cuidado com a pele.",
    image: "/images/grand-amour/nutri-skin.webp",
    imageAlt: "Nutri Skin Grand Amour, produto e embalagem original, 60 g",
    imageMode: "photo",
    imageFit: "contain",
    imagePosition: "center",
    price: 74.99,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [
      "60 g"
    ],
    availability: "on-request",
    order: 30,
    published: !0,
    label: "HIDRATAÇÃO",
    color: "plum",
    detail: "Creme facial de hidratação para um momento de cuidado com a pele."
  },
  {
    id: "puri-derma",
    kind: "product",
    name: "Puri Derma",
    mood: "O começo do cuidado",
    description: "Sabonete de limpeza facial para a primeira etapa do seu ritual.",
    image: "/images/grand-amour/puri-derma.webp",
    imageAlt: "Puri Derma Grand Amour, produto e embalagem original, 120 ml",
    imageMode: "photo",
    imageFit: "contain",
    imagePosition: "center",
    price: 72.99,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [
      "120 ml",
      "Pantenol",
      "Algas e chá verde"
    ],
    availability: "on-request",
    order: 40,
    published: !0,
    label: "LIMPEZA FACIAL",
    color: "rose",
    detail: "Sabonete de limpeza facial para a primeira etapa do seu ritual."
  },
  {
    id: "hidra-derm",
    kind: "product",
    name: "Hidra Derm",
    mood: "Frescor em cada pausa",
    description: "Bruma facial hidratante para refrescar e complementar seu cuidado.",
    image: "/images/grand-amour/hidra-derm.webp",
    imageAlt: "Hidra Derm Grand Amour, produto e embalagem original, 100 ml",
    imageMode: "photo",
    imageFit: "contain",
    imagePosition: "center",
    price: 59.99,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [
      "100 ml"
    ],
    availability: "on-request",
    order: 50,
    published: !0,
    label: "BRUMA HIDRATANTE",
    color: "lilac",
    detail: "Bruma facial hidratante para refrescar e complementar seu cuidado."
  }
], W1 = [
  {
    question: "Como encontro o produto ideal para mim?",
    answer: "Conheça a função de cada produto e consulte a marca sobre a escolha mais adequada à sua rotina. Para necessidades específicas da pele, procure orientação de um dermatologista."
  },
  {
    question: "Quais produtos fazem parte da linha?",
    answer: "A linha apresentada reúne Sérum C+E, Sérum Niacin, Nutri Skin, Puri Derma e Hidra Derm. Abra cada produto para consultar sua apresentação e registrar seu interesse."
  },
  {
    question: "As fotos são dos produtos Grand Amour?",
    answer: "Sim. As imagens foram extraídas do material de apresentação da marca e preservam as embalagens originais. Consulte a marca para confirmar a apresentação disponível no momento da compra."
  },
  {
    question: "Como faço para comprar ou saber mais?",
    answer: "Clique em “Quero este produto” para selecionar seu favorito. Enquanto o WhatsApp não estiver cadastrado, você pode copiar ou baixar seu interesse. Nenhum pedido ou pagamento é realizado nesta página."
  },
  {
    question: "Onde consulto entrega e formas de pagamento?",
    answer: "Confirme diretamente com a Grand Amour os valores vigentes, a disponibilidade, o pagamento e a entrega. Os preços exibidos são as referências fornecidas pela marca; condições de Pix e parcelamento não estão aplicadas nesta página."
  }
];
function Ei({ className: a = "" }) {
  return /* @__PURE__ */ b.jsx("span", { className: `brand-symbol ${a}`, "aria-hidden": "true" });
}
function Jy() {
  return /* @__PURE__ */ b.jsxs("span", { className: "brand", children: [
    /* @__PURE__ */ b.jsx(Ei, {}),
    /* @__PURE__ */ b.jsxs("span", { className: "brand-wordmark", "aria-hidden": "true", children: [
      /* @__PURE__ */ b.jsx("span", { className: "brand-lettering" }),
      /* @__PURE__ */ b.jsx("span", { className: "brand-descriptor", children: qe.descriptor })
    ] }),
    /* @__PURE__ */ b.jsx("span", { className: "sr-only", children: qe.fullName })
  ] });
}
function rn({
  children: a,
  className: l = "",
  delay: r = 0
}) {
  const u = F1();
  return /* @__PURE__ */ b.jsx(
    ta.div,
    {
      className: l,
      initial: u ? !1 : { opacity: 0, y: 22 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, amount: 0.12 },
      transition: {
        duration: u ? 0 : 0.65,
        delay: u ? 0 : r,
        ease: [0.22, 1, 0.36, 1]
      },
      children: a
    }
  );
}
const L5 = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
function Fy(a) {
  return typeof a == "number" && Number.isFinite(a) && a >= 0 ? L5.format(a) : null;
}
function H5(a, l) {
  if (!/^\+?[\d\s().-]+$/.test(a.trim())) return null;
  const r = a.replace(/\D/g, "");
  return /^[1-9]\d{9,14}$/.test(r) ? `https://wa.me/${r}?text=${encodeURIComponent(l)}` : null;
}
function Er(a) {
  return a.imageMode === "photo" ? {
    objectFit: a.imageFit ?? "contain",
    objectPosition: a.imagePosition ?? "center"
  } : void 0;
}
function q5(a) {
  const l = Fy(a.price), r = Fy(a.promotionalPrice), u = l !== null && r !== null && a.promotionalPrice < a.price;
  return {
    current: u ? r : l,
    previous: u ? l : null
  };
}
function G5(a) {
  const r = a.whatsappMessage?.trim() || (a.availability === "unavailable" ? "Olá! Gostaria de consultar a disponibilidade do {kit}." : k5.whatsappMessage), u = r.replaceAll("{kit}", a.name).replaceAll("{brand}", qe.fullName);
  return r.includes("{kit}") ? u : `${u}
${a.kind === "product" ? "Produto" : "Kit"} selecionado: ${a.name}.`;
}
function Iy(a) {
  return a.availability === "unavailable" ? "Consultar disponibilidade" : a.kind === "product" ? "Quero este produto" : "Quero este Kit";
}
function $1(a) {
  return tx(a.purchaseUrl) ? a.priceSource === "store" ? a.availability === "unavailable" ? "Indisponível na loja. Consulte a reposição." : "Preço consultado na loja. Confirme as condições ao comprar." : "Preço de referência. Consulte preço e estoque na loja." : {
    available: "Disponível",
    "on-request": "Disponibilidade a confirmar",
    unavailable: "Indisponível no momento"
  }[a.availability];
}
function Y5(a) {
  return a.filter((l) => l.published).slice().sort((l, r) => l.order - r.order);
}
function tx(a) {
  if (!a) return null;
  try {
    const l = new URL(a);
    return l.protocol === "https:" && ["mkcmagazine.com", "www.mkcmagazine.com"].includes(l.hostname) && l.pathname.startsWith("/produtos/") && !l.username && !l.password && !l.port ? l.href : null;
  } catch {
    return null;
  }
}
function ex({ kit: a }) {
  const { current: l, previous: r } = q5(a);
  return l === null ? null : /* @__PURE__ */ b.jsxs("div", { className: "kit-price", children: [
    r && /* @__PURE__ */ b.jsxs("del", { children: [
      /* @__PURE__ */ b.jsx("span", { className: "sr-only", children: "Preço anterior: " }),
      r
    ] }),
    /* @__PURE__ */ b.jsxs("span", { children: [
      /* @__PURE__ */ b.jsx("span", { className: "sr-only", children: r ? "Preço promocional: " : "Preço: " }),
      l
    ] })
  ] });
}
function X5({
  kits: a,
  onSelect: l
}) {
  if (!a.length)
    return /* @__PURE__ */ b.jsx("p", { className: "catalog-empty", role: "status", children: "Nossos kits estão sendo preparados. Volte em breve para conhecer a coleção." });
  const r = Array.from(
    { length: Math.ceil(a.length / 3) },
    (u, c) => a.slice(c * 3, c * 3 + 3)
  );
  return /* @__PURE__ */ b.jsx("div", { className: "kit-collection", children: r.map((u, c) => /* @__PURE__ */ b.jsx("div", { className: `kit-grid kit-grid--${u.length}`, children: u.map((h, d) => {
    const p = String(c * 3 + d + 1).padStart(2, "0"), x = d === 2 ? "kit-featured" : d === 1 ? "kit-secondary" : "kit-primary";
    return /* @__PURE__ */ b.jsxs(
      rn,
      {
        delay: d * 0.1,
        className: `kit-card ${h.color} ${x}`,
        children: [
          /* @__PURE__ */ b.jsxs("div", { className: "kit-image-wrap", children: [
            h.label && /* @__PURE__ */ b.jsx("span", { className: "kit-tag", children: h.label }),
            /* @__PURE__ */ b.jsx("span", { className: "kit-index", "aria-hidden": "true", children: p }),
            /* @__PURE__ */ b.jsx(
              "img",
              {
                src: h.image,
                alt: h.imageAlt,
                className: h.imageMode === "photo" ? "product-photo" : void 0,
                style: Er(h),
                decoding: "async",
                width: "900",
                height: "900",
                loading: "lazy"
              }
            )
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "kit-info", "data-ga-product": h.id, children: [
            /* @__PURE__ */ b.jsx("span", { className: "kit-mood", children: h.mood }),
            /* @__PURE__ */ b.jsxs("h3", { children: [
              h.name,
              /* @__PURE__ */ b.jsx("span", { children: p })
            ] }),
            /* @__PURE__ */ b.jsx("p", { children: h.description }),
            /* @__PURE__ */ b.jsx(ex, { kit: h }),
            /* @__PURE__ */ b.jsx("span", { className: `kit-availability ${h.availability}`, children: $1(h) }),
            /* @__PURE__ */ b.jsxs(
              "button",
              {
                className: "kit-button",
                onClick: () => l(h),
                "aria-label": `${Iy(h)}: ${h.name}`,
                children: [
                  Iy(h),
                  " ",
                  /* @__PURE__ */ b.jsx(Mn, { size: 19 })
                ]
              }
            )
          ] })
        ]
      },
      h.id
    );
  }) }, u[0].id)) });
}
function Z5({
  kit: a,
  onClose: l
}) {
  const r = Z.useRef(null), [u, c] = Z.useState(!1), [h, d] = Z.useState(!1), [p, x] = Z.useState(0), v = a ? [a, ...a.additionalImages] : [], y = v[p] ?? a, g = a ? G5(a) : "", T = H5(qe.whatsapp, g), j = tx(a?.purchaseUrl);
  Z.useEffect(() => {
    c(!1), d(!1), x(0), a && !r.current?.open && r.current?.showModal(), !a && r.current?.open && r.current.close();
  }, [a]);
  async function O() {
    try {
      await navigator.clipboard.writeText(g), c(!0);
    } catch {
      d(!0);
    }
  }
  function _() {
    const V = URL.createObjectURL(
      new Blob([g], { type: "text/plain;charset=utf-8" })
    ), R = document.createElement("a");
    R.href = V;
    const k = qe.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    R.download = `meu-${a?.id}-${k}.txt`, document.body.append(R), R.click(), R.remove(), window.setTimeout(() => URL.revokeObjectURL(V), 1e3);
  }
  return /* @__PURE__ */ b.jsx(
    "dialog",
    {
      ref: r,
      className: "kit-dialog",
      "aria-labelledby": "selection-title",
      onCancel: l,
      onClose: l,
      onClick: (V) => {
        if (V.target === V.currentTarget) {
          const R = V.currentTarget.getBoundingClientRect();
          (V.clientX < R.left || V.clientX > R.right || V.clientY < R.top || V.clientY > R.bottom) && l();
        }
      },
      children: a && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
        /* @__PURE__ */ b.jsx("div", { className: "dialog-toolbar", children: /* @__PURE__ */ b.jsx(
          "button",
          {
            className: "icon-button dialog-close",
            onClick: l,
            "aria-label": "Fechar seleção",
            children: /* @__PURE__ */ b.jsx(P1, { size: 22 })
          }
        ) }),
        /* @__PURE__ */ b.jsxs("div", { className: `dialog-art ${a.color}`, children: [
          /* @__PURE__ */ b.jsx(
            "img",
            {
              src: y.image,
              alt: y.imageAlt,
              className: y.imageMode === "photo" ? "product-photo" : void 0,
              style: Er(y),
              width: "900",
              height: "900"
            }
          ),
          v.length > 1 && /* @__PURE__ */ b.jsx(
            "div",
            {
              className: "dialog-thumbnails",
              role: "group",
              "aria-label": `Imagens do ${a.name}`,
              children: v.map((V, R) => /* @__PURE__ */ b.jsx(
                "button",
                {
                  className: "gallery-thumbnail",
                  "aria-label": `Ver imagem ${R + 1} do ${a.name}`,
                  "aria-pressed": R === p,
                  onClick: () => x(R),
                  children: /* @__PURE__ */ b.jsx(
                    "img",
                    {
                      src: V.image,
                      alt: "",
                      width: "52",
                      height: "52",
                      loading: "lazy",
                      decoding: "async"
                    }
                  )
                },
                `${V.image}-${R}`
              ))
            }
          )
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "dialog-content", children: [
          /* @__PURE__ */ b.jsxs("span", { className: "eyebrow", children: [
            /* @__PURE__ */ b.jsx(K1, { size: 14 }),
            " SEU FAVORITO"
          ] }),
          /* @__PURE__ */ b.jsxs("h2", { id: "selection-title", children: [
            "Seu cuidado com ",
            /* @__PURE__ */ b.jsxs("em", { children: [
              a.name,
              "."
            ] })
          ] }),
          /* @__PURE__ */ b.jsx("p", { children: a.detail }),
          /* @__PURE__ */ b.jsx(ex, { kit: a }),
          /* @__PURE__ */ b.jsx("span", { className: `kit-availability ${a.availability}`, children: $1(a) }),
          v.length > 1 && /* @__PURE__ */ b.jsxs("span", { className: "sr-only", role: "status", children: [
            "Imagem ",
            p + 1,
            " de ",
            v.length,
            ": ",
            y.imageAlt
          ] }),
          a.includedProducts.length > 0 && /* @__PURE__ */ b.jsxs("div", { className: "kit-details", children: [
            /* @__PURE__ */ b.jsx("h3", { children: "Itens incluídos" }),
            /* @__PURE__ */ b.jsx("ul", { children: a.includedProducts.map((V, R) => /* @__PURE__ */ b.jsxs("li", { children: [
              /* @__PURE__ */ b.jsxs("strong", { children: [
                V.quantity ? `${V.quantity} × ` : "",
                V.name
              ] }),
              V.details && /* @__PURE__ */ b.jsx("span", { children: V.details })
            ] }, R)) })
          ] }),
          a.highlights.length > 0 && /* @__PURE__ */ b.jsxs("div", { className: "kit-details", children: [
            /* @__PURE__ */ b.jsx("h3", { children: "Destaques" }),
            /* @__PURE__ */ b.jsx("ul", { children: a.highlights.map((V, R) => /* @__PURE__ */ b.jsx("li", { children: V }, R)) })
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "selection-note", children: [
            /* @__PURE__ */ b.jsx("strong", { children: "Sua escolha começa aqui." }),
            /* @__PURE__ */ b.jsx("p", { children: j ? "Continue na MKC Magazine para conferir o preço atual, escolher as opções disponíveis e comprar com o checkout da loja." : a.availability === "unavailable" ? "Este item está indisponível no momento. Você pode registrar seu interesse e consultar a marca sobre uma possível disponibilidade, sem efetuar um pedido." : T ? "Converse com a marca para confirmar todos os detalhes da sua escolha." : "O canal de atendimento será disponibilizado em breve. Guarde este resumo para consultar a marca quando estiver disponível." })
          ] }),
          j ? /* @__PURE__ */ b.jsxs("a", { className: "button button-primary", href: j, children: [
            a.availability === "unavailable" ? "Ver disponibilidade na MKC" : "Comprar na MKC Magazine",
            " ",
            /* @__PURE__ */ b.jsx(Mn, { size: 18 })
          ] }) : T ? /* @__PURE__ */ b.jsxs(
            "a",
            {
              className: "button button-primary",
              href: T,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                a.availability === "unavailable" ? "Consultar disponibilidade" : "Consultar no WhatsApp",
                " ",
                /* @__PURE__ */ b.jsx(Mn, { size: 18 })
              ]
            }
          ) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
            /* @__PURE__ */ b.jsx("button", { className: "button button-primary", onClick: O, children: u ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
              /* @__PURE__ */ b.jsx(A5, { size: 18 }),
              " Resumo copiado"
            ] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
              /* @__PURE__ */ b.jsx(M5, { size: 18 }),
              " Copiar meu interesse"
            ] }) }),
            /* @__PURE__ */ b.jsxs(
              "button",
              {
                className: "text-button download-button",
                onClick: _,
                children: [
                  /* @__PURE__ */ b.jsx(C5, { size: 16 }),
                  " Baixar resumo da escolha"
                ]
              }
            )
          ] }),
          h && /* @__PURE__ */ b.jsxs("label", { className: "manual-copy", children: [
            "Selecione e copie seu resumo",
            /* @__PURE__ */ b.jsx(
              "textarea",
              {
                readOnly: !0,
                value: g,
                onFocus: (V) => V.target.select(),
                rows: 5
              }
            )
          ] }),
          /* @__PURE__ */ b.jsx("p", { role: "status", className: "copy-status", children: u ? "Pronto! Seu resumo foi copiado para a área de transferência." : "" }),
          /* @__PURE__ */ b.jsxs("p", { className: "fine-print", children: [
            "",
            "Selecionar um item não efetua uma compra. Disponibilidade e condições a confirmar."
          ] })
        ] })
      ] })
    }
  );
}
const Wy = [
  ["#inicio", "Início"],
  ["#kits", "Nossa Linha"],
  ["#beneficios", "Benefícios"],
  ["#sobre", "Sobre"]
];
function Q5({ scope: a = document, products: l = I1, questions: r = W1, storeHomeUrl: u } = {}) {
  const c = Y5(l), h = a === document ? "main" : "div", [d, p] = Z.useState(!1), [x, v] = Z.useState(!1), [y, g] = Z.useState(null), [T, j] = Z.useState("inicio"), O = Z.useRef(null), _ = F1(), { scrollYProgress: V } = b5();
  return Z.useEffect(() => {
    const R = new IntersectionObserver(
      (k) => {
        k.forEach((H) => {
          H.isIntersecting && j(H.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" }
    );
    return ["inicio", "kits", "beneficios", "sobre"].forEach((k) => {
      const H = a.getElementById(k);
      H && R.observe(H);
    }), () => R.disconnect();
  }, [a]), Z.useEffect(() => {
    const R = window.matchMedia("(min-width: 641px)"), k = () => {
      R.matches && p(!1);
    };
    return R.addEventListener("change", k), () => R.removeEventListener("change", k);
  }, []), Z.useEffect(() => {
    if (!d) return;
    const R = (k) => {
      k.key === "Escape" && (p(!1), O.current?.focus());
    };
    return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R);
  }, [d]), /* @__PURE__ */ b.jsxs(Pw, { reducedMotion: _ ? "always" : "never", children: [
    /* @__PURE__ */ b.jsx("a", { href: "#conteudo", className: "skip-link", children: "Pular para o conteúdo" }),
    /* @__PURE__ */ b.jsxs("div", { className: "announcement", children: [
      /* @__PURE__ */ b.jsx("span", { children: "Beleza real." }),
      " Conheça seu novo ritual de beleza ",
      /* @__PURE__ */ b.jsx(ir, { size: 12 })
    ] }),
    /* @__PURE__ */ b.jsxs("header", { className: "header", children: [
      /* @__PURE__ */ b.jsx(
        ta.div,
        {
          className: "reading-progress",
          style: { scaleX: V },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ b.jsxs("div", { className: "container header-inner", children: [
        /* @__PURE__ */ b.jsx(
          "a",
          {
            href: "#inicio",
            "aria-label": `${qe.fullName} — início`,
            onClick: () => p(!1),
            children: /* @__PURE__ */ b.jsx(Jy, {})
          }
        ),
        /* @__PURE__ */ b.jsx("nav", { className: "desktop-nav", "aria-label": "Navegação principal", children: Wy.map(([R, k]) => /* @__PURE__ */ b.jsx(
          "a",
          {
            href: R,
            "aria-current": T === R.slice(1) ? "location" : void 0,
            children: k
          },
          R
        )) }),
        /* @__PURE__ */ b.jsxs("a", { href: "#kits", className: "button button-header", children: [
          "Conhecer a Linha ",
          /* @__PURE__ */ b.jsx(Mn, { size: 16 })
        ] }),
        /* @__PURE__ */ b.jsx(
          "button",
          {
            ref: O,
            className: "icon-button menu-toggle",
            "aria-label": d ? "Fechar menu" : "Abrir menu",
            "aria-expanded": d,
            "aria-controls": "mobile-nav",
            onClick: () => p(!d),
            children: d ? /* @__PURE__ */ b.jsx(P1, {}) : /* @__PURE__ */ b.jsx(R5, {})
          }
        )
      ] }),
      d && /* @__PURE__ */ b.jsx(
        "nav",
        {
          id: "mobile-nav",
          className: "mobile-nav",
          "aria-label": "Navegação mobile",
          children: Wy.map(([R, k]) => /* @__PURE__ */ b.jsxs("a", { href: R, onClick: () => p(!1), children: [
            k,
            /* @__PURE__ */ b.jsx(Mn, { size: 18 })
          ] }, R))
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs(h, { id: "conteudo", children: [
      /* @__PURE__ */ b.jsxs("section", { id: "inicio", className: "hero", children: [
        /* @__PURE__ */ b.jsx("div", { className: "hero-glow", "aria-hidden": "true" }),
        /* @__PURE__ */ b.jsxs("div", { className: "container hero-layout", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "hero-copy", children: [
            /* @__PURE__ */ b.jsxs(
              ta.div,
              {
                initial: _ ? !1 : { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: _ ? 0 : 0.7 },
                className: "eyebrow",
                children: [
                  /* @__PURE__ */ b.jsx("span", { className: "little-line" }),
                  " BELEZA REAL. CUIDADO CONSCIENTE."
                ]
              }
            ),
            /* @__PURE__ */ b.jsxs("h1", { children: [
              /* @__PURE__ */ b.jsx(
                ta.span,
                {
                  initial: _ ? !1 : { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: _ ? 0 : 0.7 },
                  children: "Beleza real."
                }
              ),
              /* @__PURE__ */ b.jsx(
                ta.span,
                {
                  initial: _ ? !1 : { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: _ ? 0 : 0.7,
                    delay: _ ? 0 : 0.12
                  },
                  children: "Liberdade"
                }
              ),
              /* @__PURE__ */ b.jsx(
                ta.em,
                {
                  initial: _ ? !1 : { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                    duration: _ ? 0 : 0.7,
                    delay: _ ? 0 : 0.24
                  },
                  children: "de ser."
                }
              )
            ] }),
            /* @__PURE__ */ b.jsx("p", { className: "hero-description", children: "Cosméticos que respeitam sua pele e sua verdade. Conheça a linha Grand Amour e encontre o seu ritual de autocuidado." }),
            /* @__PURE__ */ b.jsxs("div", { className: "hero-actions", children: [
              /* @__PURE__ */ b.jsxs("a", { href: "#kits", className: "button button-primary", children: [
                "Explorar Nossa Linha ",
                /* @__PURE__ */ b.jsx(Mn, { size: 18 })
              ] }),
              /* @__PURE__ */ b.jsxs("a", { href: "#sobre", className: "text-button", children: [
                "Descubra a Marca ",
                /* @__PURE__ */ b.jsx(Qy, { size: 17 })
              ] })
            ] }),
            /* @__PURE__ */ b.jsxs("div", { className: "hero-footnote", children: [
              /* @__PURE__ */ b.jsx("span", { className: "footnote-icon", children: /* @__PURE__ */ b.jsx(Ky, { size: 24, strokeWidth: 1 }) }),
              /* @__PURE__ */ b.jsxs("span", { children: [
                "Um cuidado com você.",
                /* @__PURE__ */ b.jsx("br", {}),
                /* @__PURE__ */ b.jsx("strong", { children: "Um carinho na sua rotina." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "hero-art", children: [
            /* @__PURE__ */ b.jsx("div", { className: "hero-arch", "aria-hidden": "true" }),
            /* @__PURE__ */ b.jsxs(
              "svg",
              {
                className: "hero-ribbon",
                viewBox: "0 0 700 700",
                fill: "none",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ b.jsx("path", { d: "M-40 550C170 770 730 510 607 199C522-13 265 24 245 177C225 330 487 379 714 185" }),
                  /* @__PURE__ */ b.jsx("path", { d: "M-40 565C170 785 745 510 622 199C537-28 250 9 230 177C210 345 487 394 714 200" })
                ]
              }
            ),
            /* @__PURE__ */ b.jsx("span", { className: "hero-backdrop-word", "aria-hidden": "true", children: qe.signature }),
            /* @__PURE__ */ b.jsx(
              ta.img,
              {
                className: `hero-products${Ie.hero.imageMode === "photo" ? " hero-photo" : ""}`,
                src: Ie.hero.image,
                alt: Ie.hero.imageAlt,
                style: Er(Ie.hero),
                width: "900",
                height: "900",
                fetchPriority: "high",
                animate: _ || x ? { y: 0 } : { y: [0, -9, 0] },
                transition: _ || x ? { duration: _ ? 0 : 0.3 } : { duration: 7, repeat: 1 / 0, ease: "easeInOut" }
              }
            ),
            /* @__PURE__ */ b.jsxs("div", { className: "round-seal", "aria-hidden": "true", children: [
              /* @__PURE__ */ b.jsx("span", { children: "FEITO PARA" }),
              /* @__PURE__ */ b.jsx(Ei, {}),
              /* @__PURE__ */ b.jsx("span", { children: "SEU MOMENTO" })
            ] }),
            /* @__PURE__ */ b.jsxs("div", { className: "floating-note", children: [
              /* @__PURE__ */ b.jsx(ir, { size: 20, strokeWidth: 1.2 }),
              /* @__PURE__ */ b.jsxs("span", { children: [
                "Pequenos rituais.",
                /* @__PURE__ */ b.jsx("br", {}),
                /* @__PURE__ */ b.jsx("em", { children: "Grandes momentos." })
              ] })
            ] }),
            /* @__PURE__ */ b.jsx("span", { className: "art-caption", children: "UMA NOVA FORMA DE FLORESCER" }),
            /* @__PURE__ */ b.jsx("span", { className: "hero-spark spark-one", "aria-hidden": "true", children: "✧" }),
            /* @__PURE__ */ b.jsx("span", { className: "hero-spark spark-two", "aria-hidden": "true", children: "✧" })
          ] }),
          /* @__PURE__ */ b.jsxs("a", { href: "#kits", className: "scroll-cue", children: [
            /* @__PURE__ */ b.jsx(E5, { size: 15 }),
            " UM UNIVERSO DE CUIDADO ESPERA POR VOCÊ"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ b.jsxs(
        "div",
        {
          className: "marquee",
          "data-paused": x,
          role: "region",
          "aria-label": "Seu momento de autocuidado. Beleza em cada detalhe. Cuidado consciente. Um carinho para sua rotina.",
          children: [
            /* @__PURE__ */ b.jsx("div", { className: "marquee-track", "aria-hidden": "true", children: [0, 1].map((R) => /* @__PURE__ */ b.jsx("div", { className: "marquee-group", children: [
              "Seu momento de autocuidado",
              "Beleza em cada detalhe",
              "Cuidado consciente",
              "Um carinho para sua rotina"
            ].map((k) => /* @__PURE__ */ b.jsxs("span", { children: [
              k,
              /* @__PURE__ */ b.jsx(Ei, {})
            ] }, k)) }, R)) }),
            !_ && /* @__PURE__ */ b.jsx(
              "button",
              {
                className: "motion-toggle icon-button",
                onClick: () => v((R) => !R),
                "aria-pressed": x,
                "aria-label": x ? "Retomar animações" : "Pausar animações",
                title: x ? "Retomar animações" : "Pausar animações",
                children: x ? /* @__PURE__ */ b.jsx(V5, { size: 16 }) : /* @__PURE__ */ b.jsx(j5, { size: 16 })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ b.jsx("section", { id: "kits", className: "section kits-section", children: /* @__PURE__ */ b.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ b.jsxs(rn, { className: "section-heading", children: [
          /* @__PURE__ */ b.jsxs("div", { children: [
            /* @__PURE__ */ b.jsx("span", { className: "eyebrow", children: "ENCONTRE O SEU RITUAL" }),
            /* @__PURE__ */ b.jsxs("h2", { children: [
              "Escolhidos com carinho.",
              /* @__PURE__ */ b.jsx("br", {}),
              /* @__PURE__ */ b.jsx("em", { children: "Feitos para encantar." })
            ] })
          ] }),
          /* @__PURE__ */ b.jsxs("p", { children: [
            "Cada momento pede um cuidado.",
            /* @__PURE__ */ b.jsx("br", {}),
            "Conheça os produtos da nossa linha."
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "collection-rule", "aria-hidden": "true", children: [
          /* @__PURE__ */ b.jsx("span", { children: "A COLEÇÃO" }),
          /* @__PURE__ */ b.jsx("span", { children: c.length === 3 ? "TRÊS FORMAS DE FLORESCER" : "BELEZA REAL. CUIDADO CONSCIENTE." }),
          /* @__PURE__ */ b.jsx("span", { children: c.length ? `01 — ${String(c.length).padStart(2, "0")}` : "EM BREVE" })
        ] }),
        /* @__PURE__ */ b.jsx(X5, { kits: c, onSelect: g }),
        /* @__PURE__ */ b.jsxs("p", { className: "collection-note", children: [
          /* @__PURE__ */ b.jsx(ir, { size: 13 }),
          " ",
          "Fotos originais Grand Amour. Consulte disponibilidade, valores vigentes e condições com a marca."
        ] })
      ] }) }),
      /* @__PURE__ */ b.jsx("section", { id: "beneficios", className: "section benefits-section", children: /* @__PURE__ */ b.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ b.jsxs(rn, { className: "center-heading", children: [
          /* @__PURE__ */ b.jsx("span", { className: "eyebrow", children: "O CUIDADO MORA NOS DETALHES" }),
          /* @__PURE__ */ b.jsxs("h2", { children: [
            "Mais leveza para a rotina.",
            /* @__PURE__ */ b.jsx("br", {}),
            /* @__PURE__ */ b.jsx("em", { children: "Mais espaço para você." })
          ] })
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "benefits-grid", children: [
          {
            Icon: Ky,
            title: "Seu momento de pausa",
            text: "Um convite para desacelerar e transformar o cuidado em uma parte especial do dia."
          },
          {
            Icon: ir,
            title: "Para cada versão sua",
            text: "Diferentes inspirações para acompanhar seus momentos, seu ritmo e sua essência."
          },
          {
            Icon: O5,
            title: "Cuidado que se encontra",
            text: "Produtos para diferentes etapas do seu ritual, da limpeza à hidratação."
          },
          {
            Icon: D5,
            title: "Um gesto de amor próprio",
            text: "Uma ideia delicada para celebrar alguém especial. Inclusive você."
          }
        ].map(({ Icon: R, title: k, text: H }, X) => /* @__PURE__ */ b.jsxs(rn, { delay: X * 0.08, className: "benefit", children: [
          /* @__PURE__ */ b.jsxs("span", { className: "benefit-icon", children: [
            /* @__PURE__ */ b.jsx(R, { size: 28, strokeWidth: 1.15 }),
            /* @__PURE__ */ b.jsxs("span", { className: "benefit-number", "aria-hidden": "true", children: [
              "0",
              X + 1
            ] })
          ] }),
          /* @__PURE__ */ b.jsx("h3", { children: k }),
          /* @__PURE__ */ b.jsx("p", { children: H })
        ] }, k)) })
      ] }) }),
      /* @__PURE__ */ b.jsx("section", { id: "sobre", className: "editorial", children: /* @__PURE__ */ b.jsxs("div", { className: "container editorial-layout", children: [
        /* @__PURE__ */ b.jsxs(rn, { className: "editorial-art", children: [
          /* @__PURE__ */ b.jsx("div", { className: "editorial-orbit", "aria-hidden": "true" }),
          /* @__PURE__ */ b.jsx("span", { className: "editorial-topline", children: "A ARTE DE CUIDAR DE SI" }),
          /* @__PURE__ */ b.jsx("div", { className: "editorial-image-frame", children: /* @__PURE__ */ b.jsx(
            "img",
            {
              src: Ie.editorial.image,
              alt: Ie.editorial.imageAlt,
              className: Ie.editorial.imageMode === "photo" ? "editorial-photo" : void 0,
              style: Er(Ie.editorial),
              decoding: "async",
              width: "900",
              height: "900",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ b.jsxs("div", { className: "editorial-label", children: [
            /* @__PURE__ */ b.jsx(Ei, {}),
            /* @__PURE__ */ b.jsxs("span", { children: [
              "Floresça no",
              /* @__PURE__ */ b.jsx("br", {}),
              /* @__PURE__ */ b.jsx("em", { children: "seu tempo." })
            ] })
          ] }),
          /* @__PURE__ */ b.jsx("span", { className: "editorial-number", children: "01 — UM ENCONTRO COM VOCÊ" })
        ] }),
        /* @__PURE__ */ b.jsxs(rn, { className: "editorial-copy", children: [
          /* @__PURE__ */ b.jsxs("span", { className: "eyebrow", children: [
            "O UNIVERSO ",
            qe.name.toUpperCase()
          ] }),
          /* @__PURE__ */ b.jsxs("h2", { children: [
            "Mais do que",
            /* @__PURE__ */ b.jsx("br", {}),
            "cosméticos.",
            /* @__PURE__ */ b.jsx("br", {}),
            /* @__PURE__ */ b.jsxs("em", { children: [
              "Um momento",
              /* @__PURE__ */ b.jsx("br", {}),
              "só seu."
            ] })
          ] }),
          /* @__PURE__ */ b.jsx("p", { children: "A Grand Amour nasceu do encontro entre amor e liberdade. Amor pela beleza real e liberdade para cada mulher cuidar de si, do seu jeito." }),
          /* @__PURE__ */ b.jsx("p", { children: "Acreditamos que o autocuidado é um gesto de respeito com quem você é. Nosso cuidado valoriza a verdade da sua pele, com qualidade e transparência." }),
          /* @__PURE__ */ b.jsxs("a", { href: "#como-escolher", className: "text-button", children: [
            "Encontre seu momento ",
            /* @__PURE__ */ b.jsx(Mn, { size: 17 })
          ] }),
          /* @__PURE__ */ b.jsxs("span", { className: "editorial-signature", children: [
            "Com carinho, ",
            qe.name,
            "."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ b.jsx("section", { id: "como-escolher", className: "section steps-section", children: /* @__PURE__ */ b.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ b.jsxs(rn, { className: "center-heading", children: [
          /* @__PURE__ */ b.jsx("span", { className: "eyebrow", children: "UM RITUAL COMEÇA COM UMA ESCOLHA" }),
          /* @__PURE__ */ b.jsxs("h2", { children: [
            "O seu próximo momento,",
            /* @__PURE__ */ b.jsx("br", {}),
            /* @__PURE__ */ b.jsx("em", { children: "em três pequenos passos." })
          ] })
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "steps-grid", children: [
          {
            title: "Explore a linha",
            text: "Passeie pela nossa coleção e descubra diferentes formas de se cuidar."
          },
          {
            title: "Encontre seu favorito",
            text: "Escolha a inspiração que faz sentido para você ou para quem deseja presentear."
          },
          {
            title: "Prepare sua conversa",
            text: "Guarde sua escolha e consulte a marca sobre os detalhes antes de comprar."
          }
        ].map((R, k) => /* @__PURE__ */ b.jsxs(rn, { delay: k * 0.12, className: "step", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "step-top", children: [
            /* @__PURE__ */ b.jsxs("span", { children: [
              "0",
              k + 1
            ] }),
            k < 2 ? /* @__PURE__ */ b.jsx(Qy, { size: 20, strokeWidth: 1 }) : /* @__PURE__ */ b.jsx(K1, { size: 20, strokeWidth: 1 })
          ] }),
          /* @__PURE__ */ b.jsx("h3", { children: R.title }),
          /* @__PURE__ */ b.jsx("p", { children: R.text })
        ] }, R.title)) })
      ] }) }),
      /* @__PURE__ */ b.jsx("section", { id: "perguntas", className: "section faq-section", children: /* @__PURE__ */ b.jsxs("div", { className: "container faq-layout", children: [
        /* @__PURE__ */ b.jsxs(rn, { className: "faq-intro", children: [
          /* @__PURE__ */ b.jsx("span", { className: "eyebrow", children: "PODEMOS AJUDAR?" }),
          /* @__PURE__ */ b.jsxs("h2", { children: [
            "Um pouquinho",
            /* @__PURE__ */ b.jsx("br", {}),
            "mais de ",
            /* @__PURE__ */ b.jsx("em", { children: "clareza." })
          ] }),
          /* @__PURE__ */ b.jsxs("p", { children: [
            "Para você escolher com calma",
            /* @__PURE__ */ b.jsx("br", {}),
            "e aproveitar cada detalhe."
          ] }),
          /* @__PURE__ */ b.jsx(Ei, { className: "faq-flower" })
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "faq-list", children: r.map((R, k) => /* @__PURE__ */ b.jsx(rn, { delay: k * 0.04, children: /* @__PURE__ */ b.jsxs("details", { className: "faq-item", children: [
          /* @__PURE__ */ b.jsxs("summary", { children: [
            /* @__PURE__ */ b.jsxs("span", { children: [
              /* @__PURE__ */ b.jsxs("small", { children: [
                "0",
                k + 1
              ] }),
              R.question
            ] }),
            /* @__PURE__ */ b.jsx(z5, { size: 19 })
          ] }),
          /* @__PURE__ */ b.jsx("div", { className: "faq-answer", children: /* @__PURE__ */ b.jsx("p", { children: R.answer }) })
        ] }) }, R.question)) })
      ] }) }),
      /* @__PURE__ */ b.jsx("section", { className: "final-section", children: /* @__PURE__ */ b.jsxs(rn, { className: "container final-banner", children: [
        /* @__PURE__ */ b.jsx(Ei, { className: "final-flower flower-left" }),
        /* @__PURE__ */ b.jsx(Ei, { className: "final-flower flower-right" }),
        /* @__PURE__ */ b.jsx("span", { className: "eyebrow", children: "SE PERMITA ESSE CARINHO" }),
        /* @__PURE__ */ b.jsxs("h2", { children: [
          "Seu próximo ritual de beleza",
          /* @__PURE__ */ b.jsx("br", {}),
          /* @__PURE__ */ b.jsx("em", { children: "começa aqui." })
        ] }),
        /* @__PURE__ */ b.jsx("p", { children: "Uma pausa. Uma escolha. Um momento inteiramente seu." }),
        /* @__PURE__ */ b.jsxs("a", { href: "#kits", className: "button button-light", children: [
          "Encontrar Meu Produto ",
          /* @__PURE__ */ b.jsx(Mn, { size: 18 })
        ] }),
        /* @__PURE__ */ b.jsx("span", { className: "final-small", children: "FLORESÇA NA SUA PRÓPRIA ESSÊNCIA" })
      ] }) })
    ] }),
    /* @__PURE__ */ b.jsx("footer", { className: "footer", children: /* @__PURE__ */ b.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "footer-top", children: [
        /* @__PURE__ */ b.jsxs("div", { children: [
          /* @__PURE__ */ b.jsx("a", { href: "#inicio", "aria-label": "Voltar ao início", children: /* @__PURE__ */ b.jsx(Jy, {}) }),
          /* @__PURE__ */ b.jsxs("p", { children: [
            "Pequenos rituais.",
            /* @__PURE__ */ b.jsx("br", {}),
            "Uma beleza que vem de você."
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "footer-nav", children: [
          /* @__PURE__ */ b.jsx("span", { children: "EXPLORE" }),
          /* @__PURE__ */ b.jsx("a", { href: "#kits", children: "Nossa Linha" }),
          /* @__PURE__ */ b.jsx("a", { href: "#beneficios", children: "Benefícios" }),
          /* @__PURE__ */ b.jsx("a", { href: "#sobre", children: "Sobre a marca" }),
          /* @__PURE__ */ b.jsx("a", { href: "#perguntas", children: "Perguntas frequentes" })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "footer-contact", children: [
          /* @__PURE__ */ b.jsx("span", { children: "VAMOS FLORESCER JUNTAS" }),
          /* @__PURE__ */ b.jsxs("p", { children: [
            "Um universo de cuidado,",
            /* @__PURE__ */ b.jsx("br", {}),
            "feito para o seu momento."
          ] }),
          u && /* @__PURE__ */ b.jsxs("a", { href: u, children: [
            "Voltar à MKC Magazine ",
            /* @__PURE__ */ b.jsx(Mn, { size: 16 })
          ] }),
          qe.email,
          /^https:\/\//.test(qe.instagram) && /* @__PURE__ */ b.jsxs(
            "a",
            {
              href: qe.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ b.jsx(N5, { size: 16 }),
                " Instagram"
              ]
            }
          ),
          !u && !0 && !0 && /* @__PURE__ */ b.jsx("span", { className: "contact-soon", children: "Canais de contato em breve." })
        ] }),
        /* @__PURE__ */ b.jsx("a", { className: "back-top", href: "#inicio", "aria-label": "Voltar ao topo", children: /* @__PURE__ */ b.jsx(Mn, { size: 22 }) })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "footer-bottom", children: [
        /* @__PURE__ */ b.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          qe.fullName,
          ". Todos os direitos reservados."
        ] }),
        /* @__PURE__ */ b.jsxs("span", { children: [
          "Feito para florescer ",
          /* @__PURE__ */ b.jsx(Ei, {})
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ b.jsx(Z5, { kit: y, onClose: () => g(null) })
  ] });
}
const K5 = `/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:"Manrope", sans-serif;--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--ease-in:cubic-bezier(.4, 0, 1, 1);--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.block{display:block}.contents{display:contents}.flex{display:flex}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.table{display:table}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.resize{resize:both}.lowercase{text-transform:lowercase}.italic{font-style:italic}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}}:root{color:#612e39;font-synthesis:none;text-rendering:optimizelegibility;-webkit-font-smoothing:antialiased;--ink:#612e39;--muted:#7a686c;--pink:#fef9fa;--serif:"Cormorant Garamond", Georgia, serif;--ease-out:cubic-bezier(.22, 1, .36, 1);background:#fffcfd;font-family:Manrope,sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:104px}body{min-width:320px;margin:0}body:has(dialog[open]){overflow:hidden}button,input,textarea{font:inherit}button,a,summary{-webkit-tap-highlight-color:transparent}button{cursor:pointer;color:inherit}a{color:inherit;text-decoration:none}img{max-width:100%;height:auto;display:block}button,a,summary,textarea{outline-offset:5px}:focus-visible{outline:2px solid #b55a6d}::selection{color:#612e39;background:#f4dbe0}h1,h2,h3,p{margin:0}h1,h2,h3,em{font-family:var(--serif);font-weight:400}.container{width:min(1280px,100% - 112px);margin-inline:auto}.section{padding-block:112px}.eyebrow{letter-spacing:2.2px;align-items:center;gap:10px;font-size:10px;font-weight:600;line-height:1.7;display:inline-flex}.button{min-height:54px;transition:background .25s,box-shadow .3s,transform .35s var(--ease-out);border:1px solid #0000;border-radius:4px;justify-content:center;align-items:center;gap:25px;padding:16px 25px;font-size:12px;font-weight:600;display:inline-flex}.button svg,.text-button svg,.kit-button svg{transition:transform .35s var(--ease-out);flex-shrink:0}.text-button{background:0 0;border:0;justify-content:center;align-items:center;gap:13px;padding:13px 0;font-size:12px;font-weight:500;display:inline-flex;position:relative}.text-button:after{content:"";transform-origin:0;width:calc(100% - 30px);height:1px;transition:transform .35s var(--ease-out);background:currentColor;position:absolute;bottom:7px;left:0;transform:scaleX(0)}.button-primary{color:#fef9fa;background:#76404b;box-shadow:0 8px 24px #74444e17}.icon-button{background:0 0;border:0;border-radius:50%;justify-content:center;align-items:center;width:44px;height:44px;transition:background .2s;display:inline-flex}.icon-button:hover{background:#ebdfe1}.skip-link{z-index:100;background:#fff;padding:15px;position:fixed;top:10px;left:10px;transform:translateY(-150%)}.skip-link:focus{transform:none}.announcement{letter-spacing:.3px;background:#f0e9ea;justify-content:center;align-items:center;gap:7px;min-height:32px;padding:8px 16px;font-size:10px;display:flex}.announcement span{font-weight:600}.header{z-index:30;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);background:#fffdfde8;border-bottom:1px solid #612e390d;position:sticky;top:0}.reading-progress{transform-origin:0;background:linear-gradient(90deg,#dfc2c8,#b55a6d);width:100%;height:2px;position:absolute;bottom:-1px;left:0}.header-inner{justify-content:space-between;align-items:center;gap:30px;min-height:88px;display:flex}.brand{align-items:center;gap:10px;display:inline-flex}.brand>.brand-symbol{width:40px;height:40px}.brand-type{font-family:var(--serif);letter-spacing:-.9px;white-space:nowrap;font-size:30px;line-height:.85}.brand-type>span{text-align:center;letter-spacing:5px;margin-top:10px;margin-left:5px;font-family:Manrope,sans-serif;font-size:7px;line-height:1;display:block}.desktop-nav{gap:34px;display:flex}.desktop-nav a{color:var(--muted);padding:13px 0;font-size:12px;transition:color .2s;position:relative}.desktop-nav a:after{content:"";background:#b55a6d;border-radius:50%;width:3px;height:3px;transition:transform .2s;position:absolute;bottom:2px;left:calc(50% - 1px);transform:scale(0)}.desktop-nav a:hover,.desktop-nav a[aria-current]{color:var(--ink)}.desktop-nav a[aria-current]:after{transform:scale(1)}.button-header{border-color:#d3bbc0;min-height:42px;padding:10px 18px;font-size:11px}.mobile-nav,.menu-toggle{display:none}.hero{background:linear-gradient(115deg,#fffaf9 8%,#fef9fa 45%,#efe2e5);position:relative;overflow:clip}.hero:before{content:"";opacity:.45;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Cpath fill='%236b416f' opacity='.035' filter='url(%23n)' d='M0 0h150v150H0z'/%3E%3C/svg%3E");position:absolute;inset:0}.hero-glow{background:radial-gradient(#e5d2d6aa,#0000 65%);width:70%;height:120%;position:absolute;top:-20%;right:-15%}.hero-layout{grid-template-columns:1.04fr 1fr;align-items:center;min-height:755px;display:grid;position:relative}.hero-copy{z-index:2;padding:24px 0 83px;position:relative}.little-line{background:#a47f87;width:25px;height:1px}h1{letter-spacing:-3.6px;margin-top:28px;font-size:clamp(64px,6.35vw,94px);line-height:.99}h1>span,h1>em{display:block}h1>span:first-child{white-space:nowrap}h1 em{color:#0000;background:linear-gradient(105deg,#a05968,#985865 85%);-webkit-background-clip:text;background-clip:text;padding:0 8px 12px 0}.hero-description{max-width:385px;color:var(--muted);text-wrap:pretty;margin-top:19px;font-size:14px;line-height:1.9}.hero-actions{align-items:center;gap:27px;margin-top:30px;display:flex}.hero-footnote{color:var(--muted);align-items:center;gap:12px;margin-top:36px;font-size:10px;line-height:1.8;display:flex}.hero-footnote strong{font-weight:500}.footnote-icon{border:1px solid #d9c7cb;border-radius:50%;place-items:center;width:41px;height:41px;display:grid}.hero-art{align-self:stretch;min-width:0;position:relative}.hero-arch{background:radial-gradient(at 35% 30%,#fcf0f0,#decace 65%,#d6bac0);border-radius:50%;width:104%;height:70%;position:absolute;bottom:111px;right:-12%;transform:rotate(-24deg);box-shadow:inset 1px 2px #fff9,18px 25px 70px #b1858e23}.hero-arch:before{content:"";border-radius:inherit;border:1px solid #ffffff68;position:absolute;inset:17px}.hero-ribbon{stroke:#b0899155;stroke-width:.8px;width:128%;height:100%;position:absolute;top:-20px;right:-17%;transform:rotate(-8deg)}.hero-backdrop-word{font-family:var(--serif);color:#83535d10;letter-spacing:-14px;-webkit-user-select:none;user-select:none;font-size:clamp(150px,16vw,235px);font-style:italic;position:absolute;top:5px;right:-4%}.hero-products{will-change:transform;width:133%;max-width:none;position:absolute;top:-10px;right:-14%}.round-seal{z-index:2;color:#7e5a62;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:#fefafb91;border:1px solid #9971797a;border-radius:50%;outline:5px solid #fff5;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:96px;height:96px;display:flex;position:absolute;top:81px;right:-2px;transform:rotate(13deg)}.round-seal span{letter-spacing:1.7px;font-size:7px}.round-seal .brand-symbol{width:32px;height:32px}.floating-note{-webkit-backdrop-filter:blur(9px);backdrop-filter:blur(9px);background:#fffdfbde;border:1px solid #fff;border-radius:3px;align-items:center;gap:13px;padding:16px 21px;display:flex;position:absolute;bottom:112px;left:-13px;transform:rotate(-6deg);box-shadow:0 12px 28px #7352590d}.floating-note span{font-size:11px;line-height:1.7}.floating-note em{font-size:22px}.art-caption{letter-spacing:2.5px;color:#7d5b62;writing-mode:vertical-rl;font-size:8px;position:absolute;top:42%;right:-23px}.hero-spark{color:#926c74;font-family:Georgia,serif;font-size:40px;position:absolute}.spark-one{top:145px;left:16px}.spark-two{font-size:28px;bottom:160px;right:-15px}.scroll-cue{letter-spacing:1.6px;color:#7b6469;align-items:center;gap:12px;font-size:9px;display:flex;position:absolute;bottom:27px;left:0}.marquee{background:#f3ebed;border-block:1px solid #e8dadd;position:relative;overflow:hidden}.marquee-track{width:max-content;animation:55s linear infinite marquee;display:flex}.marquee-group{flex-shrink:0;align-items:center;display:flex}.marquee-group>span{font-family:var(--serif);align-items:center;gap:45px;padding:21px 24px;font-size:25px;display:flex}.marquee-group svg{color:#ac8d94;width:23px;height:23px}.marquee:hover .marquee-track,.marquee[data-paused=true] .marquee-track{animation-play-state:paused}.motion-toggle{z-index:2;background:#fef9fa;border:1px solid #d9c6ca;position:absolute;top:50%;right:14px;transform:translateY(-50%);box-shadow:0 0 0 9px #f3ebeddd}@keyframes marquee{to{transform:translate(-50%)}}h2{letter-spacing:-1.6px;text-wrap:balance;font-size:clamp(42px,4vw,58px);line-height:1.06}h2 em{color:#8f5f69}.section-heading{justify-content:space-between;align-items:flex-end;gap:36px;margin-bottom:42px;display:flex}.section-heading h2,.center-heading h2{margin-top:17px}.section-heading>p{color:var(--muted);padding-bottom:6px;font-size:13px;line-height:1.9}.collection-rule{letter-spacing:1.8px;color:#7e6369;border-top:1px solid #dccbcf;justify-content:space-between;gap:20px;padding-block:15px 25px;font-size:8px;display:flex}.kit-grid{grid-template-columns:1.06fr 1fr;gap:24px;display:grid}.kit-card{background:#fffaf9;border:1px solid #e8dee0;border-radius:6px;grid-template-columns:1.08fr 1fr;align-items:center;min-width:0;transition:box-shadow .4s;display:grid;position:relative;overflow:clip}.kit-image-wrap{isolation:isolate;background:radial-gradient(at 50% 35%,#fff5f1,#efdfe2);min-width:0;height:300px;position:relative;overflow:hidden}.kit-image-wrap:before{content:"";z-index:-1;border:1px solid #cfaeb77a;border-radius:50%;position:absolute;inset:28px 17px;transform:rotate(-20deg)}.kit-tag{text-align:center;letter-spacing:1.8px;z-index:1;color:#7b5960;width:100%;font-size:7px;position:absolute;top:22px;left:0}.kit-index{font-family:var(--serif);color:#7a5a6150;z-index:1;font-size:48px;font-style:italic;line-height:1;position:absolute;bottom:14px;left:17px}.kit-image-wrap img{width:365px;max-width:none;transition:transform .8s var(--ease-out);position:absolute;top:-25px;left:50%;translate:-50%}.kit-info{min-width:0;padding:23px}.kit-mood{font-family:var(--serif);color:#83636a;margin-bottom:9px;font-size:19px;font-style:italic;line-height:1.2;display:block}.kit-info h3{letter-spacing:-.8px;font-size:36px;line-height:1.05}.kit-info h3 span{display:none}.kit-info p{color:var(--muted);text-wrap:pretty;margin-top:15px;font-size:12px;line-height:1.85}.kit-button{background:0 0;border:0;border-bottom:1px solid #cfb7bc;justify-content:space-between;align-items:center;gap:10px;width:100%;min-height:48px;margin-top:11px;padding:17px 0 13px;font-size:11px;font-weight:600;transition:color .2s,border-color .2s;display:flex}.kit-card.kit-secondary{background:#fcf8f9;grid-area:2/1}.kit-secondary .kit-image-wrap{background:radial-gradient(at 50% 30%,#f7eff0,#e5d3d7)}.kit-secondary .kit-image-wrap img{transform:rotate(-5deg)}.kit-card.kit-featured{color:#fef9fa;background:#5c3b42;border-color:#5c3b42;flex-direction:column;grid-area:1/2/span 2;display:flex}.kit-featured .kit-image-wrap{background:radial-gradient(at 45% 60%,#bda1a7,#93777d 60%,#79575e);flex:1;width:100%;min-height:390px}.kit-featured .kit-image-wrap:before{border-color:#f7e6ea55;inset:35px 60px}.kit-featured .kit-tag{color:#fdf6f7;font-size:8px;top:25px}.kit-featured .kit-index{color:#fff3;font-size:65px;bottom:15px;left:25px}.kit-featured .kit-image-wrap img{width:min(100%,490px);top:-45px}.kit-featured .kit-info{width:100%;padding:28px 35px 27px}.kit-featured .kit-mood{color:#dcc3c8;font-size:22px}.kit-featured .kit-info h3{font-size:45px}.kit-featured .kit-info p{color:#e6d5d9;max-width:340px;margin-top:12px;font-size:13px}.kit-featured .kit-button{color:#fef9fa;border-color:#c8a8af;font-size:12px}.collection-note{color:#7e676c;text-align:center;justify-content:center;align-items:center;gap:8px;margin-top:27px;font-size:10px;line-height:1.7;display:flex}.collection-note svg{flex-shrink:0}.benefits-section{background:#faf6f7;border-block:1px solid #efe8e9;padding-block:87px 96px}.center-heading{text-align:center}.benefits-grid{grid-template-columns:repeat(4,1fr);gap:34px;margin-top:53px;display:grid}.benefit{text-align:left;border-top:1px solid #d9c6ca;padding-top:24px;position:relative}.benefit-icon{color:#865a63;justify-content:space-between;align-items:center;margin-bottom:23px;display:flex}.benefit-number{font-family:var(--serif);color:#997a81;font-size:30px;font-style:italic}.benefit h3{letter-spacing:-.5px;max-width:210px;font-size:28px;line-height:1.1}.benefit p{color:var(--muted);text-wrap:pretty;margin-top:14px;font-size:12px;line-height:1.9}.editorial{background:#eee7e8;padding-block:110px;overflow:clip}.editorial-layout{grid-template-columns:1.08fr 1fr;align-items:center;gap:105px;display:grid}.editorial-art{isolation:isolate;background:linear-gradient(145deg,#e4cfd3,#cdabb2);border-radius:260px 260px 8px 8px;align-self:stretch;min-height:610px;position:relative}.editorial-image-frame{border-radius:inherit;position:absolute;inset:0;overflow:clip}.editorial-orbit{border-radius:inherit;z-index:1;pointer-events:none;border:1px solid #fff8;position:absolute;inset:20px}.editorial-topline{text-align:center;letter-spacing:2.8px;color:#744f57;z-index:1;width:100%;font-size:9px;position:absolute;top:38px;left:0}.editorial-image-frame>img{object-fit:contain;border-radius:inherit;width:100%;height:91%;position:absolute;bottom:0;left:0;transform:rotate(-7deg)}.editorial-label{z-index:2;color:#7c5860;background:#fff9f7f2;border-radius:50%;flex-direction:column;justify-content:center;align-items:center;gap:8px;width:170px;height:170px;display:flex;position:absolute;bottom:60px;right:-38px;transform:rotate(9deg);box-shadow:0 10px 30px #6a484f14}.editorial-label .brand-symbol{width:35px;height:35px}.editorial-label span{font-family:var(--serif);text-align:center;font-size:28px;line-height:1.05}.editorial-number{letter-spacing:1.5px;color:#6e4d54;z-index:1;font-size:8px;position:absolute;bottom:26px;left:30px}.editorial-copy{padding-block:15px}.editorial-copy h2{margin:24px 0 28px;font-size:clamp(53px,5vw,72px)}.editorial-copy p{color:#755f64;text-wrap:pretty;max-width:360px;margin-top:17px;font-size:13px;line-height:1.95}.editorial-copy .text-button{margin-top:24px}.editorial-signature{font-family:var(--serif);color:#825b63;margin-top:27px;font-size:25px;font-style:italic;display:block}.steps-section{padding-block:105px}.steps-grid{grid-template-columns:repeat(3,1fr);gap:68px;margin-top:55px;display:grid}.step-top{color:#947078;align-items:center;gap:28px;margin-bottom:22px;display:flex}.step-top:after{content:"";background:#e3d5d8;flex:1;order:1;height:1px}.step-top svg{order:2}.step-top>span{font-family:var(--serif);font-size:64px;font-style:italic;line-height:1}.step h3{font-size:32px;line-height:1.1}.step p{color:var(--muted);text-wrap:pretty;max-width:300px;margin-top:13px;font-size:13px;line-height:1.9}.faq-section{padding-top:35px}.faq-layout{grid-template-columns:1fr 1.5fr;gap:70px;display:grid}.faq-intro h2{margin-top:20px}.faq-intro>p{color:var(--muted);margin-top:23px;font-size:13px;line-height:1.9}.faq-flower{color:#c7adb2;width:95px;height:95px;margin-top:35px}.faq-list{border-top:1px solid #ddcbcf}.faq-item{border-bottom:1px solid #e2d3d6}.faq-item summary{cursor:pointer;justify-content:space-between;align-items:center;gap:20px;padding:27px 4px;font-size:13px;font-weight:500;line-height:1.7;list-style:none;transition:color .2s;display:flex}.faq-item summary::-webkit-details-marker{display:none}.faq-item summary>span{align-items:baseline;gap:20px;display:flex}.faq-item summary small{color:#87666d;font-size:9px}.faq-item summary svg{transition:transform .35s var(--ease-out);flex-shrink:0}.faq-item[open] summary svg{transform:rotate(180deg)}.faq-item[open] summary{color:#7c4f58}.faq-answer{color:var(--muted);padding:0 35px 27px;font-size:12px;line-height:1.95}@supports (interpolate-size:allow-keywords){.faq-item{interpolate-size:allow-keywords}.faq-item::details-content{opacity:0;block-size:0;transition:block-size .35s var(--ease-out),opacity .25s,content-visibility .35s allow-discrete;overflow:clip}.faq-item[open]::details-content{opacity:1;block-size:auto}}.final-section{padding:0 0 95px}.final-banner{text-align:center;color:#fef9fa;background:radial-gradient(at 85% 10%,#a8818966,#0000 55%),linear-gradient(115deg,#59333b,#855a63 75%,#977179);border-radius:8px;padding:82px 35px 35px;position:relative;overflow:clip}.final-banner:before,.final-banner:after{content:"";pointer-events:none;border:1px solid #ffffff28;border-radius:50%;width:80%;height:200%;position:absolute;top:-140%;left:10%;transform:rotate(-20deg)}.final-banner:after{top:-138%;left:12%}.final-banner .eyebrow{color:#e5cdd2;font-size:9px}.final-banner h2{margin-top:25px;font-size:clamp(44px,4.5vw,65px);position:relative}.final-banner h2 em{color:#eaced4}.final-banner p{color:#e8d9dc;margin-top:24px;font-size:13px;line-height:1.8;position:relative}.button-light{color:#76404b;background:#fef9fa;margin-top:29px;position:relative}.final-small{letter-spacing:2px;color:#e6d4d8;margin-top:52px;font-size:8px;display:block;position:relative}.final-flower{color:#e2bcc4;opacity:.16;width:320px;height:320px;position:absolute}.flower-left{bottom:-75px;left:-105px;transform:rotate(20deg)}.flower-right{width:360px;height:360px;top:-75px;right:-85px}.footer{background:#fbf8f8;border-top:1px solid #ede6e7;padding-top:60px}.footer-top{grid-template-columns:1.5fr 1fr 1fr auto;gap:45px;padding-bottom:47px;display:grid}.footer-top p{color:var(--muted);margin-top:20px;font-size:12px;line-height:1.9}.footer-nav,.footer-contact{flex-direction:column;align-items:flex-start;display:flex}.footer-nav>span,.footer-contact>span:first-child{letter-spacing:1.6px;margin:9px 0 18px;font-size:9px;font-weight:600}.footer-nav a{color:var(--muted);padding-block:7px;font-size:12px}.footer-contact p{margin-top:0}.footer-contact a{align-items:center;gap:8px;margin-top:13px;font-size:11px;display:flex}.contact-soon{color:#7f6369;margin-top:16px;font-size:10px}.back-top{border:1px solid #dbc3c8;border-radius:50%;place-items:center;width:44px;height:44px;transition:background .2s;display:grid}.footer-bottom{color:var(--muted);border-top:1px solid #ebe1e3;justify-content:space-between;align-items:center;gap:20px;padding-block:22px;font-size:10px;display:flex}.footer-bottom>span:last-child{align-items:center;gap:8px;display:flex}.footer-bottom .brand-symbol{width:20px;height:20px}.kit-dialog{color:var(--ink);overscroll-behavior:contain;background:#fffdfd;border:1px solid #fef9fa;border-radius:12px;width:min(820px,100% - 32px);max-height:calc(100dvh - 40px);margin:auto;padding:0;box-shadow:0 30px 120px #3e1d2455}.kit-dialog[open]{animation:dialog-in .3s var(--ease-out);grid-template-columns:.85fr 1fr;display:grid}.kit-dialog::backdrop{-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);background:#35191f77}@keyframes dialog-in{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}.dialog-toolbar{z-index:3;pointer-events:none;grid-column:1/-1;height:0;position:sticky;top:0}.dialog-close{pointer-events:auto;z-index:2;position:absolute;top:10px;right:10px}.dialog-art{isolation:isolate;background:radial-gradient(at 50% 40%,#f6e6e9,#e3cfd3);align-items:center;display:flex;position:relative;overflow:hidden}.dialog-art:before{content:"";z-index:-1;border:1px solid #fff9;border-radius:50%;position:absolute;inset:40px 20px}.dialog-art.lilac{background:#f1e3e6}.dialog-art.plum{background:radial-gradient(#bda1a7,#8a676e)}.dialog-art>img{width:145%;max-width:none;margin-left:-23%}.dialog-content{padding:52px 32px 30px}.dialog-content h2{margin:16px 0 18px;font-size:42px}.dialog-content h2 em{display:block}.dialog-content>p{color:var(--muted);font-size:12px;line-height:1.85}.dialog-content .eyebrow{font-size:9px}.selection-note{background:#f7f0f2;border-radius:5px;margin:21px 0;padding:17px;font-size:12px;line-height:1.8}.selection-note strong{font-weight:600}.selection-note p{color:var(--muted);margin-top:6px;font-size:11px}.dialog-content .button{gap:10px;width:100%;min-height:49px;padding-inline:10px}.download-button{width:100%;padding-top:16px;font-size:11px}.dialog-content .fine-print{border-top:1px solid #e9dfe1;padding-top:15px;font-size:10px}.dialog-content .copy-status{color:#42603e;margin-block:12px;font-size:11px}.manual-copy{margin-block:12px;font-size:11px;display:block}.manual-copy textarea{resize:vertical;background:#fef9fa;border:1px solid #ceb2b8;border-radius:5px;width:100%;margin-top:8px;padding:12px;font-size:12px}@media(hover:hover)and (pointer:fine){.button:hover{transform:translateY(-3px)}.button-primary:hover{background:#612e39;box-shadow:0 12px 30px #74444e2a}.button-light:hover{background:#f3dde2}.button-header:hover,.back-top:hover{background:#f3ebec}.button:hover svg,.text-button:hover svg,.kit-button:hover svg{transform:translate(3px,-3px)}.text-button:hover:after{transform:scaleX(1)}.kit-card:hover{box-shadow:0 15px 40px #6a484f10}.kit-card:hover .kit-image-wrap img{transform:scale(1.045)rotate(-2deg)}.kit-button:hover{color:#8b4f5c;border-color:#8b4f5c}.kit-featured .kit-button:hover{color:#fff;border-color:#fff}.benefit:hover .benefit-icon>svg{transform:rotate(-10deg)}.benefit-icon>svg{transition:transform .4s}.faq-item summary:hover,.footer-nav a:hover,.footer-contact a:hover{color:#7c4f58}}@media(min-width:1500px){.hero-layout{min-height:800px}.hero-products{top:0}.hero-backdrop-word{top:20px}}@media(max-width:1150px){.container{width:calc(100% - 72px)}.desktop-nav{gap:24px}.hero-layout{min-height:715px}h1{font-size:clamp(62px,6.7vw,77px)}.hero-products{width:143%;top:70px;right:-22%}.hero-backdrop-word{top:55px}.hero-arch{height:65%;right:-12%}.hero-actions{gap:20px}.hero-actions .button{gap:15px;padding-inline:18px}.hero-actions .text-button{gap:7px;font-size:11px}.round-seal{width:86px;height:86px;top:90px}.floating-note{padding:13px 16px;bottom:110px}.floating-note em{font-size:20px}.kit-grid{grid-template-columns:1.1fr 1fr;gap:18px}.kit-card{grid-template-columns:1fr 1fr}.kit-info{padding:18px}.kit-info h3{font-size:32px}.kit-mood{font-size:17px}.kit-image-wrap{height:300px}.kit-image-wrap img{width:355px;top:-20px}.kit-featured .kit-image-wrap img{width:min(110%,490px);top:-35px}.kit-featured .kit-info{padding:25px}.benefits-grid{gap:25px}.benefit h3{font-size:26px}.editorial-layout{gap:70px}.editorial-art{min-height:585px}.editorial-label{width:145px;height:145px;right:-25px}.editorial-label span{font-size:25px}.steps-grid{gap:38px}.footer-top{gap:30px}}@media(max-width:900px){.container{width:calc(100% - 56px)}.header-inner{gap:18px;min-height:80px}.brand-type{font-size:27px}.brand>.brand-symbol{width:35px;height:35px}.desktop-nav{gap:19px}.desktop-nav a{font-size:11px}.button-header{gap:12px;padding-inline:12px;font-size:10px}.hero-layout{grid-template-columns:1fr .9fr;min-height:690px}h1{letter-spacing:-2.7px;font-size:clamp(54px,7.2vw,65px)}.hero-copy .eyebrow{letter-spacing:1.5px;font-size:8px}.hero-description{max-width:330px;font-size:13px}.hero-actions{flex-direction:column;align-items:flex-start;gap:9px;margin-top:23px}.hero-footnote{margin-top:23px}.hero-products{width:158%;top:155px;right:-28%}.hero-arch{width:115%;height:55%;bottom:125px;right:-15%}.hero-ribbon{width:145%;top:50px;right:-25%}.hero-backdrop-word{font-size:160px;top:95px;right:-15px}.round-seal{width:78px;height:78px;top:125px;right:-2px}.round-seal span{font-size:6px}.round-seal .brand-symbol{width:26px;height:26px}.floating-note{padding:12px 15px;bottom:85px;left:0}.floating-note span{font-size:10px}.art-caption{font-size:7px;right:-15px}.hero-spark{display:none}.section{padding-block:83px}h2{font-size:43px}.section-heading>p{font-size:12px}.kit-grid{grid-template-columns:1fr 1fr;gap:24px}.kit-card{display:block}.kit-card.kit-secondary{grid-area:1/2}.kit-image-wrap{height:300px}.kit-image-wrap img{width:365px;top:-25px}.kit-info{padding:25px}.kit-mood{font-size:20px}.kit-info h3{font-size:37px}.kit-info p{min-height:66px;font-size:13px}.kit-button{margin-top:8px;font-size:12px}.kit-card.kit-featured{grid-area:2/1/auto/-1;grid-template-columns:1fr 1fr;display:grid}.kit-featured .kit-image-wrap{height:100%;min-height:370px}.kit-featured .kit-image-wrap img{width:min(135%,470px);top:-40px}.kit-featured .kit-info{padding:30px}.kit-featured .kit-info h3{font-size:44px}.kit-featured .kit-mood{font-size:21px}.kit-featured .kit-info p{min-height:0}.benefits-grid{grid-template-columns:repeat(2,1fr);gap:38px}.benefit p{max-width:280px}.benefit h3{max-width:none;font-size:29px}.editorial{padding-block:85px}.editorial-layout{gap:48px}.editorial-art{min-height:590px}.editorial-topline{letter-spacing:2px;font-size:7px}.editorial-image-frame>img{width:115%;max-width:none;height:85%;left:-8%}.editorial-label{width:125px;height:125px;bottom:70px}.editorial-label .brand-symbol{width:25px;height:25px}.editorial-label span{font-size:23px}.editorial-number{font-size:6px;left:20px}.editorial-copy h2{font-size:55px}.editorial-copy p{font-size:12px}.steps-grid{gap:30px}.step h3{font-size:29px}.step p{font-size:12px}.faq-layout{grid-template-columns:1fr 1.4fr;gap:35px}.faq-intro h2{font-size:40px}.faq-item summary{font-size:12px}.faq-item summary>span{gap:12px}.faq-answer{padding-inline:25px 8px}.footer-top{grid-template-columns:1.2fr 1fr 1fr}.back-top{display:none}.footer-contact>span:first-child{letter-spacing:1px;font-size:8px}}@media(max-width:640px){html{scroll-padding-top:88px}.container{width:calc(100% - 40px)}.announcement{gap:6px;min-height:30px;font-size:9px}.announcement span{display:none}.header-inner{min-height:74px}.brand-type{font-size:27px}.brand>.brand-symbol{width:35px;height:35px}.brand-type>span{letter-spacing:4px;margin-top:8px;font-size:6px}.desktop-nav,.header-inner>.button-header{display:none}.menu-toggle{display:inline-flex}.mobile-nav{-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);width:100%;animation:menu-in .3s var(--ease-out);background:#fefbfbf7;border-bottom:1px solid #ecdcdf;padding:8px 24px 23px;display:block;position:absolute;top:100%;box-shadow:0 16px 24px #612e390c}@keyframes menu-in{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}.mobile-nav a{border-bottom:1px solid #eee3e5;justify-content:space-between;align-items:center;padding:18px 3px;font-size:14px;display:flex}.hero-layout{flex-direction:column;min-height:0;display:flex}.hero-copy{align-self:stretch;padding:42px 0 0}.hero-copy .eyebrow{letter-spacing:1.4px;font-size:8px}h1{letter-spacing:-2px;margin-top:23px;font-size:clamp(44px,12vw,72px);line-height:1.01}h1>span:first-child{white-space:normal}h1 em{padding-bottom:9px}.hero-description{max-width:380px;margin-top:17px;font-size:13px;line-height:1.85}.hero-actions{flex-direction:row;align-items:center;gap:19px;margin-top:24px}.hero-actions .button{gap:13px;min-height:49px;padding:13px 16px;font-size:10px}.hero-actions .text-button{gap:8px;font-size:10px}.hero-footnote{display:none}.hero-art{width:100%;min-height:385px;margin-top:8px}.hero-arch{width:97%;height:78%;bottom:39px;right:-2%}.hero-products{width:122%;top:-39px;right:-11%}.hero-ribbon{width:130%;height:110%;top:-22px;right:-15%}.hero-backdrop-word{letter-spacing:-8px;font-size:136px;top:-20px;right:-6%}.round-seal{gap:4px;width:72px;height:72px;top:26px;right:0}.round-seal .brand-symbol{width:24px;height:24px}.floating-note{padding:11px 15px;bottom:29px;left:-3px}.floating-note span{font-size:9px}.floating-note em{font-size:19px}.floating-note>svg{width:17px}.art-caption{display:none}.scroll-cue{letter-spacing:1px;margin:18px 0 23px;font-size:7px;position:relative;bottom:auto;left:auto}.marquee-group>span{gap:32px;padding:17px;font-size:22px}.marquee-group svg{width:20px;height:20px}.section{padding-block:70px}h2{letter-spacing:-1.2px;font-size:42px}.eyebrow{letter-spacing:1.7px;font-size:9px}.section-heading{margin-bottom:27px;display:block}.section-heading>p{margin-top:21px;font-size:13px}.collection-rule{letter-spacing:1.1px;padding-block:15px 21px;font-size:7px}.collection-rule>span:nth-child(2){display:none}.kit-grid{grid-template-columns:1fr;gap:25px;max-width:440px;margin-inline:auto}.kit-card,.kit-card.kit-secondary{grid-area:auto;display:block}.kit-image-wrap{aspect-ratio:1/.91;height:auto}.kit-image-wrap:before{inset:22px 28px}.kit-image-wrap img{width:120%;top:-15%}.kit-tag{letter-spacing:1.5px;font-size:8px;top:23px}.kit-index{font-size:44px;bottom:20px;left:20px}.kit-info{padding:25px}.kit-mood{margin-bottom:8px;font-size:21px}.kit-info h3{font-size:40px}.kit-info p{max-width:330px;min-height:0;margin-top:13px;font-size:13px}.kit-button{margin-top:9px;padding-block:19px 15px;font-size:12px}.kit-card.kit-featured{grid-area:auto;display:block}.kit-featured .kit-image-wrap{aspect-ratio:1/1.06;height:auto;min-height:0}.kit-featured .kit-image-wrap img{width:123%;top:-11%}.kit-featured .kit-image-wrap:before{inset:35px 28px}.kit-featured .kit-index{font-size:52px;bottom:17px}.kit-featured .kit-info{padding:27px 25px}.kit-featured .kit-info h3{font-size:44px}.kit-featured .kit-mood{font-size:22px}.collection-note{align-items:flex-start;gap:7px;max-width:340px;margin-inline:auto;font-size:10px}.collection-note svg{margin-top:4px}.benefits-grid{gap:30px 22px;margin-top:36px}.benefit{padding-top:18px}.benefit-icon{margin-bottom:18px}.benefit-number{font-size:25px}.benefit h3{font-size:25px;line-height:1.1}.benefit p{font-size:12px;line-height:1.8}.editorial{padding-block:60px}.editorial-layout{flex-direction:column;gap:46px;display:flex}.editorial-art{align-self:center;width:calc(100% - 16px);max-width:440px;min-height:430px}.editorial-image-frame>img{width:100%;height:88%;left:0}.editorial-topline{letter-spacing:1.7px;font-size:8px;top:40px}.editorial-label{width:127px;height:127px;bottom:46px;right:-15px}.editorial-label span{font-size:24px}.editorial-number{letter-spacing:1px;font-size:7px;bottom:23px;left:22px}.editorial-copy{width:100%;padding-block:0}.editorial-copy h2{margin:21px 0 25px;font-size:57px}.editorial-copy p{max-width:100%;font-size:13px}.editorial-copy .text-button{margin-top:20px;font-size:12px}.editorial-signature{margin-top:24px;font-size:26px}.steps-grid{grid-template-columns:1fr;gap:33px;margin-top:38px}.step{grid-template-columns:70px 1fr;column-gap:20px;display:grid}.step-top{border-right:1px solid #e6d8db;grid-row:1/3;margin:0;display:block}.step-top:after,.step-top svg{display:none}.step-top>span{font-size:54px}.step h3{font-size:31px}.step p{max-width:100%;margin-top:10px;font-size:13px}.faq-section{padding-top:15px}.faq-layout{grid-template-columns:1fr;gap:32px}.faq-flower{display:none}.faq-intro h2{font-size:44px}.faq-intro p{margin-top:16px}.faq-item summary{padding-block:23px;font-size:13px}.faq-answer{padding-left:27px;font-size:12px}.final-section{padding-bottom:60px}.final-banner{width:calc(100% - 28px);padding:57px 21px 30px}.final-banner h2{font-size:44px}.final-banner h2>br{display:none}.final-banner p{max-width:280px;margin-inline:auto;font-size:12px}.final-small{letter-spacing:1.3px;margin-top:37px;font-size:7px}.flower-left{width:200px;height:200px;left:-105px}.flower-right{width:240px;height:240px;right:-120px}.footer{padding-top:45px}.footer-top{grid-template-columns:1fr 1fr;gap:35px 20px;padding-bottom:32px}.footer-top>div:first-child{grid-column:1/-1}.footer-top>div:first-child p{margin-top:17px}.footer-nav>span,.footer-contact>span:first-child{letter-spacing:1px;font-size:8px;line-height:1.8}.footer-nav a{font-size:12px}.footer-top p{font-size:11px}.footer-bottom{flex-direction:column;align-items:flex-start;gap:16px;font-size:9px}.kit-dialog[open]{display:block}.dialog-art{height:170px;display:block}.dialog-art:before{inset:10px 40px}.dialog-art>img{width:300px;margin:-70px auto 0}.dialog-content{padding:25px}.dialog-content h2{margin-bottom:15px;font-size:38px}.dialog-close{background:#fefafbdf}}@media(max-width:360px){.container{width:calc(100% - 32px)}h1{font-size:43px}.hero-actions{gap:13px}.hero-actions .button{gap:8px;padding-inline:12px;font-size:9px}.hero-actions .text-button{gap:6px;font-size:9px}.hero-art{min-height:330px}.hero-products{top:-28px}.hero-arch{height:77%}.hero-backdrop-word{font-size:120px}h2{font-size:36px}.editorial-art{min-height:385px}.editorial-copy h2{font-size:50px}.benefits-grid{gap:27px 17px}.benefit h3{font-size:24px}.benefit p{font-size:11px}.kit-info,.kit-featured .kit-info{padding:23px}.step{grid-template-columns:58px 1fr;gap:0 17px}.step-top>span{font-size:48px}.final-banner h2{font-size:39px}.dialog-content{padding:23px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,:before,:after{transition:none!important;animation:none!important}::details-content{transition:none!important;animation:none!important}.marquee-track{transform:none}.reading-progress{display:none}}.kit-price{font-variant-numeric:tabular-nums;margin-top:15px;font-size:16px;font-weight:600;display:block}.kit-image-wrap img.product-photo,.dialog-art img.product-photo{width:100%;max-width:100%;height:100%;margin:0;position:absolute;inset:0;transform:none}.hero-products.hero-photo{border-radius:46% 46% 8px 8px;width:100%;height:70%;inset:16% 0 auto}.editorial-image-frame img.editorial-photo{width:100%;max-width:100%;height:100%;inset:0;transform:none}@media(prefers-reduced-motion:reduce){.motion-toggle{display:none}.hero-products{will-change:auto}}.kit-collection{gap:24px;display:grid}.kit-grid--1{grid-template-columns:1fr}.kit-grid--2 .kit-card.kit-secondary{grid-area:auto}.kit-price{flex-wrap:wrap;align-items:baseline;gap:8px 12px;display:flex}.kit-price del{color:var(--muted);font-size:12px;font-weight:400}.kit-featured .kit-price del{color:#e6d5d9}.kit-availability{color:var(--muted);margin-top:12px;font-size:11px;line-height:1.8;display:block}.kit-availability.unavailable{font-weight:600}.kit-featured .kit-availability{color:#e6d5d9}.catalog-empty{color:var(--muted);border:1px solid #e8dee0;border-radius:6px;padding:35px;line-height:1.9}.kit-info h3{overflow-wrap:anywhere}.kit-details{margin-top:22px}.kit-details h3{font-family:var(--font-sans);letter-spacing:1.2px;margin-bottom:10px;font-size:10px;font-weight:600}.kit-details ul{color:var(--muted);margin:0;padding-left:17px;font-size:12px;line-height:1.85;list-style:outside}.kit-details li+li{margin-top:7px}.kit-details strong{font-weight:500}.kit-details li>span{font-size:11px;display:block}.dialog-thumbnails{scrollbar-width:thin;background:#fef9fadb;border-radius:6px;gap:8px;padding:8px;display:flex;position:absolute;bottom:15px;left:14px;right:14px;overflow-x:auto}.gallery-thumbnail{background:#f8f0f2;border:1px solid #bca0a6;border-radius:4px;flex:0 0 52px;width:52px;height:52px;padding:0;overflow:hidden}.gallery-thumbnail[aria-pressed=true]{border:2px solid #76404b}.gallery-thumbnail img{object-fit:cover;width:100%;height:100%}.dialog-thumbnails:focus-within{outline-offset:-3px}@media(max-width:640px){.dialog-art:has(.dialog-thumbnails){height:220px}.dialog-art:has(.dialog-thumbnails)>img:not(.product-photo){margin-top:-55px}.dialog-thumbnails{padding:5px;bottom:9px}.gallery-thumbnail{flex-basis:44px;width:44px;height:44px}}.dialog-art:has(.dialog-thumbnails)>img.product-photo{height:calc(100% - 82px)}@media(max-width:640px){.dialog-art:has(.dialog-thumbnails)>img.product-photo{height:calc(100% - 66px)}}@media(min-width:641px){.dialog-art:has(.dialog-thumbnails){align-self:start;height:min(680px,100dvh - 42px);position:sticky;top:0}}:root{--brand-coral:#f27186;--brand-blush:#feeeed;--brand-rose:#f7adad;--brand-sage:#91b8a4;--brand-olive:#939f87;--brand-lilac:#93809d;--brand-peach:#f49d62;--ink:#492c37;--muted:#75616a;--pink:#fff8f7;color:var(--ink)}.brand-symbol{background:currentColor;flex-shrink:0;width:40px;height:40px;display:inline-block;-webkit-mask:url(/images/grand-amour/logo-symbol.svg) 50%/contain no-repeat;mask:url(/images/grand-amour/logo-symbol.svg) 50%/contain no-repeat}.brand-type>span{letter-spacing:2px}.brand{color:#a43150}.footer .brand{color:inherit}.hero-glow{background:radial-gradient(at 78% 40%,#f7adad55,#0000 64%)}h1 em{background-image:linear-gradient(105deg,#ac3653,#865473 85%)}.button-primary{color:#fff;background:#9b334d;border-color:#9b334d}.reading-progress{background:var(--brand-coral)}.kit-card.rose .kit-image-wrap{background:linear-gradient(135deg,#fff6ef,#feeeed)}.kit-card.lilac .kit-image-wrap{background:linear-gradient(135deg,#faf7fc,#e9e2ee)}.kit-card.plum .kit-image-wrap{background:linear-gradient(135deg,#f7faf5,#e3ece5)}.kit-image-wrap img.product-photo{padding:35px 28px 18px}.kit-featured .kit-image-wrap img.product-photo{padding:30px}.dialog-art img.product-photo{padding:25px}.hero-products.hero-photo{border-radius:0;height:80%;inset:10% 0 auto}.editorial-image-frame img.editorial-photo{padding:30px}.hero-backdrop-word{opacity:.18}.kit-info h3{font-size:clamp(30px,3vw,44px)}@media(max-width:640px){.brand-type>span{letter-spacing:1.3px;font-size:6px}.kit-image-wrap img.product-photo{padding:30px 18px 15px}.hero-products.hero-photo{height:88%;inset:6% 0 auto}}.kit-image-wrap img.product-photo,.dialog-art img.product-photo{translate:0}.kit-featured .kit-tag{color:#53654e}.kit-featured .kit-index{color:#53654e66}.brand-wordmark{background:currentColor;width:168px;height:40px;display:inline-block;-webkit-mask:url(/images/grand-amour/wordmark.svg) 50%/contain no-repeat;mask:url(/images/grand-amour/wordmark.svg) 50%/contain no-repeat}@media(max-width:640px){.brand-wordmark{width:155px;height:38px}}.brand-wordmark{background:0 0;-webkit-mask:none;mask:none}.brand-lettering{background:currentColor;width:100%;height:29px;display:block;-webkit-mask:url(/images/grand-amour/wordmark.svg) 50%/contain no-repeat;mask:url(/images/grand-amour/wordmark.svg) 50%/contain no-repeat}.brand-descriptor{font-family:var(--font-sans);letter-spacing:1.1px;text-align:center;font-size:6px;line-height:1.6;display:block}@media(max-width:640px){.hero-actions{flex-wrap:wrap;gap:10px 14px}.hero-actions .button{gap:10px;min-height:49px;padding-inline:14px;font-size:12px}.hero-actions .text-button{min-height:44px;font-size:11px}.header-inner>a:first-child,.footer-top>div:first-child>a{align-items:center;min-height:44px;display:inline-flex}.scroll-cue{min-height:44px}.footer-nav a,.footer-contact a{align-items:center;min-height:44px;display:inline-flex}.manual-copy textarea{font-size:16px}}@media(max-width:360px){.hero-actions .button{width:100%}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}`, P5 = new URL("../", import.meta.url), ll = (a) => new URL(a.replace(/^\//, ""), P5).href, $y = {
  "serum-ce": "serum-facial-vitamina-c-e-grand-amour-19jg5",
  "serum-niacin": "serum-facial-de-niacinamida-grand-amour-11qq3",
  "nutri-skin": "creme-facial-de-hidratacao-nutri-skin-grand-amour-1or54",
  "puri-derma": "puri-derma-sabonete-de-limpeza-facial-grand-amour-db2u5",
  "hidra-derm": "bruma-facial-hidra-derm-hidratante-grand-amour-1qgn0"
}, Hd = I1.map((a) => ({
  ...a,
  priceSource: "reference",
  image: ll(a.image),
  additionalImages: a.additionalImages.map((l) => ({ ...l, image: ll(l.image) })),
  purchaseUrl: $y[a.id] ? `https://mkcmagazine.com/produtos/${$y[a.id]}/` : void 0
}));
Ie.hero.image = ll(Ie.hero.image);
Ie.editorial.image = ll(Ie.editorial.image);
const J5 = W1.map((a, l) => l === 3 ? {
  question: "Como faço para comprar?",
  answer: "Selecione seu produto e clique em “Comprar na MKC Magazine”. Na página da loja, confira preço, opções e disponibilidade antes de adicionar ao carrinho. Frete, pagamento e finalização são feitos pela Nuvemshop."
} : l === 4 ? {
  question: "Onde consulto preço, entrega e formas de pagamento?",
  answer: "O preço vigente, o estoque, o frete e as condições de pagamento são apresentados pela MKC Magazine na página do produto e no checkout. Ao explorar a linha, esta página tenta consultar os valores públicos da loja. Se a consulta não estiver disponível, os valores permanecem identificados como referências."
} : a), F5 = K5.replace(/:root/g, ":host").replace(/\bhtml\b/g, ":host").replace(/\bbody\b/g, ".ga-surface").replaceAll("Cormorant Garamond", "GA Cormorant Garamond").replaceAll("Manrope", "GA Manrope").replace(/url\((["']?)(\/images\/[^)"']+)\1\)/g, (a, l, r) => `url("${ll(r)}")`);
for (const [a, l, r, u] of [
  ["GA Manrope", "manrope-latin-400-normal.woff2", "400", "normal"],
  ["GA Manrope", "manrope-latin-500-normal.woff2", "500", "normal"],
  ["GA Manrope", "manrope-latin-600-normal.woff2", "600", "normal"],
  ["GA Cormorant Garamond", "cormorant-garamond-latin-400-normal.woff2", "400", "normal"],
  ["GA Cormorant Garamond", "cormorant-garamond-latin-400-italic.woff2", "400", "italic"],
  ["GA Cormorant Garamond", "cormorant-garamond-latin-500-normal.woff2", "500", "normal"]
]) {
  const c = new FontFace(a, `url("${ll(`nuvemshop/fonts/${l}`)}")`, {
    weight: r,
    style: u,
    display: "swap"
  });
  document.fonts.add(c), c.load().catch(() => {
  });
}
class I5 extends Z.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? /* @__PURE__ */ b.jsxs("section", { style: { padding: "32px", font: "16px sans-serif" }, children: [
      /* @__PURE__ */ b.jsx("h1", { children: "Grand Amour" }),
      /* @__PURE__ */ b.jsx("p", { children: "Conheça os produtos na MKC Magazine." }),
      /* @__PURE__ */ b.jsx("ul", { children: Hd.map((l) => /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("a", { href: l.purchaseUrl, children: l.name }) }, l.id)) })
    ] }) : this.props.children;
  }
}
const go = /* @__PURE__ */ new Map(), tv = /* @__PURE__ */ new Set();
async function W5(a) {
  const l = Hd.find((r) => r.id === a);
  if (!(!l?.purchaseUrl || tv.has(a))) {
    tv.add(a);
    try {
      const r = new URL(l.purchaseUrl).pathname, u = await fetch(r, { credentials: "omit", signal: AbortSignal.timeout(6e3), headers: { Accept: "text/html" } });
      if (!u.ok) return;
      const c = new DOMParser().parseFromString(await u.text(), "text/html");
      for (const h of c.querySelectorAll('script[type="application/ld+json"]')) {
        let d;
        try {
          d = JSON.parse(h.textContent || "");
        } catch {
          continue;
        }
        const p = d?.["@type"] === "WebPage" ? d.mainEntity : d;
        if (p?.["@type"] !== "Product") continue;
        const x = p["@id"] || p.mainEntityOfPage?.["@id"] || p.offers?.url;
        if (typeof x != "string" || new URL(x, location.origin).pathname !== r) continue;
        const v = p.offers;
        if (v?.priceCurrency !== "BRL" || typeof v.price != "string" && typeof v.price != "number") continue;
        const y = Number(v.price);
        if (!Number.isFinite(y) || y < 0 || String(v.price).trim() === "") continue;
        l.price = y, l.promotionalPrice = null, l.priceSource = "store";
        const g = String(v.availability || "").split("/").pop();
        l.availability = g === "InStock" ? "available" : g === "OutOfStock" ? "unavailable" : "on-request";
        for (const T of go.values()) T.render();
        return;
      }
    } catch {
    }
  }
}
function $5(a) {
  if (go.has(a)) return;
  const l = a.attachShadow({ mode: "open" }), r = document.createElement("style");
  r.textContent = `${F5}
:host{display:block;min-width:0;font-size:16px;line-height:1.5;font-weight:400;font-style:normal;text-align:left;letter-spacing:normal;direction:ltr} .ga-surface{overflow:clip;overflow-clip-margin:0px} .ga-surface .header{z-index:30}`;
  const u = document.createElement("div");
  u.className = "ga-surface";
  const c = document.createElement("div");
  u.append(c), l.append(r, u);
  const h = (T) => {
    const O = T.composedPath().find((V) => V instanceof HTMLAnchorElement)?.getAttribute("href");
    if (!O?.startsWith("#")) return;
    const _ = l.getElementById(O.slice(1));
    _ && (T.preventDefault(), _.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }), O === "#conteudo" && (_.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })));
  };
  l.addEventListener("click", h);
  const d = new MutationObserver(() => {
    a.toggleAttribute("data-ga-dialog-open", !!l.querySelector("dialog[open]"));
  });
  d.observe(l, { subtree: !0, attributes: !0, attributeFilter: ["open"] });
  const p = sS.createRoot(c), x = /* @__PURE__ */ new WeakSet(), v = new IntersectionObserver((T) => {
    for (const j of T) if (j.isIntersecting) {
      const O = j.target.getAttribute("data-ga-product");
      O && W5(O), v.unobserve(j.target);
    }
  }, { rootMargin: "150px" }), y = new MutationObserver(() => {
    for (const T of l.querySelectorAll("[data-ga-product]"))
      x.has(T) || (x.add(T), v.observe(T));
  });
  y.observe(l, { childList: !0, subtree: !0 });
  const g = () => p.render(/* @__PURE__ */ b.jsx(I5, { onError: () => a.removeAttribute("data-ga-ready"), children: /* @__PURE__ */ b.jsx(Q5, { scope: l, products: Hd, questions: J5, storeHomeUrl: "https://mkcmagazine.com/" }) }));
  go.set(a, { root: p, render: g, cleanup: () => {
    d.disconnect(), l.removeEventListener("click", h), v.disconnect(), y.disconnect(), a.removeAttribute("data-ga-ready"), a.removeAttribute("data-ga-dialog-open");
  } }), g(), a.setAttribute("data-ga-ready", ""), a.dispatchEvent(new CustomEvent("ga:ready", { bubbles: !0 }));
}
function Dr() {
  for (const [l, r] of go)
    l.isConnected || (r.root.unmount(), r.cleanup(), go.delete(l));
  const a = document.getElementById("ga-nuvemshop-page");
  if (a)
    try {
      $5(a);
    } catch {
      a.dispatchEvent(new CustomEvent("ga:error", { bubbles: !0 }));
    }
}
Dr();
document.addEventListener("DOMContentLoaded", Dr, { once: !0 });
window.addEventListener("ga:mount", Dr);
new MutationObserver(Dr).observe(document.body, { childList: !0, subtree: !0 });
