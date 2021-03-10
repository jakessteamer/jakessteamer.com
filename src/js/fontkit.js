/*eslint-disable*/
window.FontAwesomeKitConfig = {
  asyncLoading: { enabled: false },
  autoA11y: { enabled: true },
  baseUrl: 'https://ka-f.fontawesome.com',
  baseUrlKit: 'https://kit.fontawesome.com',
  detectConflictsUntil: null,
  iconUploads: {},
  id: 72286780,
  license: 'free',
  method: 'css',
  minify: { enabled: true },
  token: 'c871b43c6c',
  v4FontFaceShim: { enabled: true },
  v4shim: { enabled: true },
  version: '5.15.2'
};
!(function (t) {
  typeof define === 'function' && define.amd ? define('kit-loader', t) : t();
})(function () {
  function t(e) {
    return (t =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol === 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          })(e);
  }
  function e(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (t[e] = n),
      t
    );
  }
  function n(t, e) {
    const n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      let r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function r(t) {
    for (let r = 1; r < arguments.length; r++) {
      var o = arguments[r] != null ? arguments[r] : {};
      r % 2
        ? n(Object(o), !0).forEach(function (n) {
            e(t, n, o[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
        : n(Object(o)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return t;
  }
  function o(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(t)))
          return;
        const n = [];
        let r = !0;
        let o = !1;
        let i = void 0;
        try {
          for (
            var c, a = t[Symbol.iterator]();
            !(r = (c = a.next()).done) &&
            (n.push(c.value), !e || n.length !== e);
            r = !0
          );
        } catch (t) {
          (o = !0), (i = t);
        } finally {
          try {
            r || a.return == null || a.return();
          } finally {
            if (o) throw i;
          }
        }
        return n;
      })(t, e) ||
      (function (t, e) {
        if (!t) return;
        if (typeof t === 'string') return i(t, e);
        let n = Object.prototype.toString.call(t).slice(8, -1);
        n === 'Object' && t.constructor && (n = t.constructor.name);
        if (n === 'Map' || n === 'Set') return Array.from(t);
        if (
          n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return i(t, e);
      })(t, e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function i(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function c(t, e) {
    const n = (e && e.addOn) || '';
    const r = (e && e.baseFilename) || t.license + n;
    const o = e && e.minify ? '.min' : '';
    const i = (e && e.fileSuffix) || t.method;
    const c = (e && e.subdir) || t.method;
    return `${
      t.baseUrl
    }/releases/${t.version === 'latest' ? 'latest' : 'v'.concat(t.version)}/${c}/${r}${o}.${i}`;
  }
  function a(t) {
    return `${t.baseUrlKit}/${t.token}/${t.id}/kit-upload.css`;
  }
  function u(t, e) {
    const n = e || ['fa'];
    const r = `.${Array.prototype.join.call(n, ',.')}`;
    const o = t.querySelectorAll(r);
    Array.prototype.forEach.call(o, function (e) {
      const n = e.getAttribute('title');
      e.setAttribute('aria-hidden', 'true');
      const r =
        !e.nextElementSibling ||
        !e.nextElementSibling.classList.contains('sr-only');
      if (n && r) {
        const o = t.createElement('span');
        (o.innerHTML = n),
          o.classList.add('sr-only'),
          e.parentNode.insertBefore(o, e.nextSibling);
      }
    });
  }
  let f;
  const s = function () {};
  const d =
    typeof global !== 'undefined' &&
    void 0 !== global.process &&
    typeof global.process.emit === 'function';
  const l = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  let h = [];
  function m() {
    for (let t = 0; t < h.length; t++) h[t][0](h[t][1]);
    (h = []), (f = !1);
  }
  function p(t, e) {
    h.push([t, e]), f || ((f = !0), l(m, 0));
  }
  function y(t) {
    const e = t.owner;
    let n = e._state;
    let r = e._data;
    const o = t[n];
    const i = t.then;
    if (typeof o === 'function') {
      n = 'fulfilled';
      try {
        r = o(r);
      } catch (t) {
        w(i, t);
      }
    }
    b(i, r) || (n === 'fulfilled' && v(i, r), n === 'rejected' && w(i, r));
  }
  function b(e, n) {
    let r;
    try {
      if (e === n)
        throw new TypeError(
          'A promises callback cannot return that same promise.'
        );
      if (n && (typeof n === 'function' || t(n) === 'object')) {
        const o = n.then;
        if (typeof o === 'function')
          return (
            o.call(
              n,
              function (t) {
                r || ((r = !0), n === t ? g(e, t) : v(e, t));
              },
              function (t) {
                r || ((r = !0), w(e, t));
              }
            ),
            !0
          );
      }
    } catch (t) {
      return r || w(e, t), !0;
    }
    return !1;
  }
  function v(t, e) {
    (t !== e && b(t, e)) || g(t, e);
  }
  function g(t, e) {
    t._state === 'pending' && ((t._state = 'settled'), (t._data = e), p(S, t));
  }
  function w(t, e) {
    t._state === 'pending' && ((t._state = 'settled'), (t._data = e), p(O, t));
  }
  function A(t) {
    t._then = t._then.forEach(y);
  }
  function S(t) {
    (t._state = 'fulfilled'), A(t);
  }
  function O(t) {
    (t._state = 'rejected'),
      A(t),
      !t._handled && d && global.process.emit('unhandledRejection', t._data, t);
  }
  function j(t) {
    global.process.emit('rejectionHandled', t);
  }
  function E(t) {
    if (typeof t !== 'function')
      throw new TypeError(`Promise resolver ${t} is not a function`);
    if (this instanceof E == !1)
      throw new TypeError(
        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
      );
    (this._then = []),
      (function (t, e) {
        function n(t) {
          w(e, t);
        }
        try {
          t(function (t) {
            v(e, t);
          }, n);
        } catch (t) {
          n(t);
        }
      })(t, this);
  }
  (E.prototype = {
    constructor: E,
    _state: 'pending',
    _then: null,
    _data: void 0,
    _handled: !1,
    then(t, e) {
      const n = {
        owner: this,
        then: new this.constructor(s),
        fulfilled: t,
        rejected: e
      };
      return (
        (!e && !t) ||
          this._handled ||
          ((this._handled = !0), this._state === 'rejected' && d && p(j, this)),
        this._state === 'fulfilled' || this._state === 'rejected'
          ? p(y, n)
          : this._then.push(n),
        n.then
      );
    },
    catch(t) {
      return this.then(null, t);
    }
  }),
    (E.all = function (t) {
      if (!Array.isArray(t))
        throw new TypeError('You must pass an array to Promise.all().');
      return new E(function (e, n) {
        const r = [];
        let o = 0;
        function i(t) {
          return (
            o++,
            function (n) {
              (r[t] = n), --o || e(r);
            }
          );
        }
        for (var c, a = 0; a < t.length; a++)
          (c = t[a]) && typeof c.then === 'function'
            ? c.then(i(a), n)
            : (r[a] = c);
        o || e(r);
      });
    }),
    (E.race = function (t) {
      if (!Array.isArray(t))
        throw new TypeError('You must pass an array to Promise.race().');
      return new E(function (e, n) {
        for (var r, o = 0; o < t.length; o++)
          (r = t[o]) && typeof r.then === 'function' ? r.then(e, n) : e(r);
      });
    }),
    (E.resolve = function (e) {
      return e && t(e) === 'object' && e.constructor === E
        ? e
        : new E(function (t) {
            t(e);
          });
    }),
    (E.reject = function (t) {
      return new E(function (e, n) {
        n(t);
      });
    });
  const _ = typeof Promise === 'function' ? Promise : E;
  function P(t, e) {
    const n = e.fetch;
    const r = e.XMLHttpRequest;
    const o = e.token;
    let i = t;
    return (
      'URLSearchParams' in window
        ? (i = new URL(t)).searchParams.set('token', o)
        : (i = `${i}?token=${encodeURIComponent(o)}`),
      (i = i.toString()),
      new _(function (t, e) {
        if (typeof n === 'function')
          n(i, { mode: 'cors', cache: 'default' })
            .then(function (t) {
              if (t.ok) return t.text();
              throw new Error('');
            })
            .then(function (e) {
              t(e);
            })
            .catch(e);
        else if (typeof r === 'function') {
          const o = new r();
          o.addEventListener('loadend', function () {
            this.responseText ? t(this.responseText) : e(new Error(''));
          });
          ['abort', 'error', 'timeout'].map(function (t) {
            o.addEventListener(t, function () {
              e(new Error(''));
            });
          }),
            o.open('GET', i),
            o.send();
        } else {
          e(new Error(''));
        }
      })
    );
  }
  function C(t, e, n) {
    let r = t;
    return (
      [
        [
          /(url\("?)\.\.\/\.\.\/\.\./g,
          function (t, n) {
            return ''.concat(n).concat(e);
          }
        ],
        [
          /(url\("?)\.\.\/webfonts/g,
          function (t, r) {
            return ''.concat(r).concat(e, '/releases/v').concat(n, '/webfonts');
          }
        ],
        [
          /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
          function (t, n) {
            return ''.concat(n).concat(e);
          }
        ]
      ].forEach(function (t) {
        const e = o(t, 2);
        const n = e[0];
        const i = e[1];
        r = r.replace(n, i);
      }),
      r
    );
  }
  function F(t, e) {
    const n =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : function () {};
    var o = e.document || o;
    const i = u.bind(u, o, ['fa', 'fab', 'fas', 'far', 'fal', 'fad', 'fak']);
    const f = Object.keys(t.iconUploads || {}).length > 0;
    t.autoA11y.enabled && n(i);
    const s = [{ id: 'fa-main', addOn: void 0 }];
    t.v4shim.enabled && s.push({ id: 'fa-v4-shims', addOn: '-v4-shims' }),
      t.v4FontFaceShim.enabled &&
        s.push({ id: 'fa-v4-font-face', addOn: '-v4-font-face' }),
      f && s.push({ id: 'fa-kit-upload', customCss: !0 });
    const d = s.map(function (n) {
      return new _(function (o, i) {
        P(
          n.customCss
            ? a(t)
            : c(t, { addOn: n.addOn, minify: t.minify.enabled }),
          e
        )
          .then(function (i) {
            o(
              U(
                i,
                r(
                  r({}, e),
                  {},
                  {
                    baseUrl: t.baseUrl,
                    version: t.version,
                    id: n.id,
                    contentFilter(t, e) {
                      return C(t, e.baseUrl, e.version);
                    }
                  }
                )
              )
            );
          })
          .catch(i);
      });
    });
    return _.all(d);
  }
  function U(t, e) {
    const n =
      e.contentFilter ||
      function (t, e) {
        return t;
      };
    const r = document.createElement('style');
    const o = document.createTextNode(n(t, e));
    return (
      r.appendChild(o),
      (r.media = 'all'),
      e.id && r.setAttribute('id', e.id),
      e &&
        e.detectingConflicts &&
        e.detectionIgnoreAttr &&
        r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
      r
    );
  }
  function k(t, e) {
    (e.autoA11y = t.autoA11y.enabled),
      t.license === 'pro' &&
        ((e.autoFetchSvg = !0),
        (e.fetchSvgFrom = `${t.baseUrl}/releases/${
          t.version === 'latest' ? 'latest' : 'v'.concat(t.version)
        }/svgs`),
        (e.fetchUploadedSvgFrom = t.uploadsUrl));
    const n = [];
    return (
      t.v4shim.enabled &&
        n.push(
          new _(function (n, o) {
            P(c(t, { addOn: '-v4-shims', minify: t.minify.enabled }), e)
              .then(function (t) {
                n(I(t, r(r({}, e), {}, { id: 'fa-v4-shims' })));
              })
              .catch(o);
          })
        ),
      n.push(
        new _(function (n, o) {
          P(c(t, { minify: t.minify.enabled }), e)
            .then(function (t) {
              const o = I(t, r(r({}, e), {}, { id: 'fa-main' }));
              n(
                (function (t, e) {
                  const n =
                    e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0;
                  const r = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
                  void 0 !== r &&
                    t.setAttribute('data-auto-a11y', r ? 'true' : 'false');
                  n &&
                    (t.setAttributeNode(
                      document.createAttribute('data-auto-fetch-svg')
                    ),
                    t.setAttribute('data-fetch-svg-from', e.fetchSvgFrom),
                    t.setAttribute(
                      'data-fetch-uploaded-svg-from',
                      e.fetchUploadedSvgFrom
                    ));
                  return t;
                })(o, e)
              );
            })
            .catch(o);
        })
      ),
      _.all(n)
    );
  }
  function I(t, e) {
    const n = document.createElement('SCRIPT');
    const r = document.createTextNode(t);
    return (
      n.appendChild(r),
      (n.referrerPolicy = 'strict-origin'),
      e.id && n.setAttribute('id', e.id),
      e &&
        e.detectingConflicts &&
        e.detectionIgnoreAttr &&
        n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
      n
    );
  }
  function L(t) {
    let e;
    const n = [];
    const r = document;
    const o = r.documentElement.doScroll;
    let i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
    i ||
      r.addEventListener(
        'DOMContentLoaded',
        (e = function () {
          for (
            r.removeEventListener('DOMContentLoaded', e), i = 1;
            (e = n.shift());

          )
            e();
        })
      ),
      i ? setTimeout(t, 0) : n.push(t);
  }
  function T(t) {
    typeof MutationObserver !== 'undefined' &&
      new MutationObserver(t).observe(document, { childList: !0, subtree: !0 });
  }
  try {
    if (window.FontAwesomeKitConfig) {
      const x = window.FontAwesomeKitConfig;
      const M = {
        detectingConflicts:
          x.detectConflictsUntil &&
          new Date() <= new Date(x.detectConflictsUntil),
        detectionIgnoreAttr: 'data-fa-detection-ignore',
        fetch: window.fetch,
        token: x.token,
        XMLHttpRequest: window.XMLHttpRequest,
        document
      };
      const D = document.currentScript;
      const N = D ? D.parentElement : document.head;
      (function () {
        const t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t.method === 'js'
          ? k(t, e)
          : t.method === 'css'
          ? F(t, e, function (t) {
              L(t), T(t);
            })
          : void 0;
      })(x, M)
        .then(function (t) {
          t.map(function (t) {
            try {
              N.insertBefore(t, D ? D.nextSibling : null);
            } catch (e) {
              N.appendChild(t);
            }
          }),
            M.detectingConflicts &&
              D &&
              L(function () {
                D.setAttributeNode(
                  document.createAttribute(M.detectionIgnoreAttr)
                );
                const t = (function (t, e) {
                  const n = document.createElement('script');
                  return (
                    e &&
                      e.detectionIgnoreAttr &&
                      n.setAttributeNode(
                        document.createAttribute(e.detectionIgnoreAttr)
                      ),
                    (n.src = c(t, {
                      baseFilename: 'conflict-detection',
                      fileSuffix: 'js',
                      subdir: 'js',
                      minify: t.minify.enabled
                    })),
                    n
                  );
                })(x, M);
                document.body.appendChild(t);
              });
        })
        .catch(function (t) {
          console.error(''.concat('Font Awesome Kit:', ' ').concat(t));
        });
    }
  } catch (t) {
    console.error(''.concat('Font Awesome Kit:', ' ').concat(t));
  }
});
