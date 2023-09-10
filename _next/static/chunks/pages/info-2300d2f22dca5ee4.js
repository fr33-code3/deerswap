(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9776],
  {
    7335: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/info",
        function () {
          return t(71204);
        },
      ]);
    },
    71204: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return _;
          },
        });
      var r = t(85893),
        o = t(71930),
        s = t(67294),
        i = t(186),
        l = t(80613),
        c = t(69348),
        a = t(5926),
        d = t(7867),
        u = t(64690),
        x = t(47489),
        f = t(68231),
        h = t(20239),
        p = t(4329),
        m = t(48579),
        j = t(5747),
        g = t(14795),
        y = t(57875),
        Z = t(12080),
        v = t(42227),
        b = t(17134),
        C = function (n) {
          var e = n.chartData,
            t = n.protocolData,
            o = n.currentDate,
            i = n.valueProperty,
            l = n.title,
            c = n.ChartComponent,
            a = (0, s.useState)(),
            d = a[0],
            u = a[1],
            x = (0, s.useState)(),
            f = x[0],
            h = x[1];
          (0, s.useEffect)(
            function () {
              null == d && t && u(t[i]);
            },
            [t, d, i]
          );
          var p = (0, s.useMemo)(
            function () {
              return e
                ? e.map(function (n) {
                    return { time: (0, v.Z)(n.date), value: n[i] };
                  })
                : [];
            },
            [e, i]
          );
          return (0, r.jsxs)(g.Z, {
            p: ["16px", "16px", "24px"],
            style: { position: "relative" },
            children: [
              (0, r.jsx)(y.Z, {
                style: { position: "absolute", right: 28, top: 38 },
                children: l,
              }),
              d > 0
                ? (0, r.jsxs)(y.Z, {
                    bold: !0,
                    fontSize: "24px",
                    children: ["$", (0, b.d)(d)],
                  })
                : (0, r.jsx)(Z.Z, { width: "128px", height: "36px" }),
              (0, r.jsx)(y.Z, {
                style: { fontSize: 10 },
                children: null !== f && void 0 !== f ? f : o,
              }),
              (0, r.jsx)(g.Z, {
                height: "250px",
                style: { marginTop: 20 },
                children: (0, r.jsx)(c, {
                  data: p,
                  setHoverValue: u,
                  setHoverDate: h,
                }),
              }),
            ],
          });
        },
        S = (0, s.memo)(C);
      function T(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function D(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" !== typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                s = [],
                i = !0,
                l = !1;
              try {
                for (
                  t = t.call(n);
                  !(i = (r = t.next()).done) &&
                  (s.push(r.value), !e || s.length !== e);
                  i = !0
                );
              } catch (c) {
                (l = !0), (o = c);
              } finally {
                try {
                  i || null == t.return || t.return();
                } finally {
                  if (l) throw o;
                }
              }
              return s;
            }
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ("string" === typeof n) return T(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return T(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function w() {
        var n,
          e,
          t =
            ((n = [
              "\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  gap: 1em;\n\n  & > * {\n    width: 100%;\n  }\n\n  ",
              " {\n    flex-direction: row;\n  } ;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (w = function () {
            return t;
          }),
          t
        );
      }
      var k = (0, i.ZP)(l.Z).withConfig({ componentId: "sc-23d889a1-0" })(
          w(),
          function (n) {
            return n.theme.mediaQueries.md;
          }
        ),
        P = function () {
          var n = (0, d.$G)(),
            e = n.t,
            t = n.currentLanguage.locale,
            o = D((0, m.rf)(), 1)[0],
            i = D((0, m.B5)(), 1)[0],
            l = D((0, m.Wz)(), 1)[0],
            g = (0, s.useMemo)(
              function () {
                return new Date().toLocaleString(t, {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                });
              },
              [t]
            ),
            y = (0, m.jv)(),
            Z = (0, s.useMemo)(
              function () {
                return Object.values(y)
                  .map(function (n) {
                    return n.data;
                  })
                  .filter(function (n) {
                    return n;
                  });
              },
              [y]
            ),
            v = (0, m.JX)(),
            b = (0, s.useMemo)(
              function () {
                return Object.values(v)
                  .map(function (n) {
                    return n.data;
                  })
                  .filter(function (n) {
                    return n;
                  });
              },
              [v]
            ),
            C = (0, s.useMemo)(
              function () {
                return Object.values(v).some(function (n) {
                  return !n.data;
                });
              },
              [v]
            );
          return (0, r.jsxs)(u.Z, {
            children: [
              (0, r.jsx)(c.Z, {
                scale: "lg",
                mb: "16px",
                id: "info-overview-title",
                children: e("Deer Info & Analytics"),
              }),
              (0, r.jsxs)(k, {
                children: [
                  (0, r.jsx)(a.Z, {
                    children: (0, r.jsx)(S, {
                      chartData: i,
                      protocolData: o,
                      currentDate: g,
                      valueProperty: "liquidityUSD",
                      title: e("Liquidity"),
                      ChartComponent: x.Z,
                    }),
                  }),
                  (0, r.jsx)(a.Z, {
                    children: (0, r.jsx)(S, {
                      chartData: i,
                      protocolData: o,
                      currentDate: g,
                      valueProperty: "volumeUSD",
                      title: e("Volume 24H"),
                      ChartComponent: p.Z,
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(c.Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: e("Top Tokens"),
              }),
              (0, r.jsx)(f.Z, { tokenDatas: Z }),
              (0, r.jsx)(c.Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: e("Top Pools"),
              }),
              (0, r.jsx)(h.Z, { poolDatas: b, loading: C }),
              (0, r.jsx)(c.Z, {
                scale: "lg",
                mt: "40px",
                mb: "16px",
                children: e("Transactions"),
              }),
            //  (0, r.jsx)(j.Z, { transactions: l }),
            ],
          });
        },
        z = function () {
          return (0, r.jsx)(P, {});
        };
      z.Layout = o.O;
      var _ = z;
    },
    20239: function (n, e, t) {
      "use strict";
      var r = t(85893),
        o = t(67294),
        s = t(186),
        i = t(45017),
        l = t(12080),
        c = t(57875),
        a = t(80613),
        d = t(14795),
        u = t(21302),
        x = t(57121),
        f = t(17134),
        h = t(80685),
        p = t(99822),
        m = t(7867),
        j = t(50591);
      function g(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function y() {
        var n = g([
          "\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        var n = g([
          "\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      var v = s.ZP.div.withConfig({ componentId: "sc-902b847a-0" })(y()),
        b = (0, s.ZP)(i.a).withConfig({ componentId: "sc-902b847a-1" })(Z()),
        C = "volumeUSD",
        S = "liquidityUSD",
        T = "volumeUSDWeek",
        D = "lpFees24h",
        w = "lpApr7d",
        k = function () {
          return (0, r.jsxs)(v, {
            children: [
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(l.Z, {}),
              (0, r.jsx)(l.Z, {}),
            ],
          });
        },
        P = function () {
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(k, {}), (0, r.jsx)(k, {}), (0, r.jsx)(k, {})],
          });
        },
        z = function (n) {
          var e = n.poolData,
            t = n.index,
            o = (0, s.Fg)();
          return (0, r.jsx)(b, {
            to: "/info/pool/".concat(e.address),
            children: (0, r.jsxs)(v, {
              children: [
                (0, r.jsx)(c.Z, {
                  style: { color: o.colors.softTextColor },
                  children: t + 1,
                }),
                (0, r.jsxs)(a.Z, {
                  children: [
                    (0, r.jsx)(p.g, {
                      address0: e.token0.address,
                      address1: e.token1.address,
                    }),
                    (0, r.jsxs)(c.Z, {
                      ml: "8px",
                      style: { color: o.colors.hardTextColor },
                      children: [e.token0.symbol, "/", e.token1.symbol],
                    }),
                  ],
                }),
                (0, r.jsxs)(c.Z, {
                  style: { color: o.colors.softTextColor },
                  children: ["$", (0, f.d)(e.volumeUSD)],
                }),
                (0, r.jsxs)(c.Z, {
                  style: { color: o.colors.softTextColor },
                  children: ["$", (0, f.d)(e.volumeUSDWeek)],
                }),
                (0, r.jsxs)(c.Z, {
                  style: { color: o.colors.softTextColor },
                  children: ["$", (0, f.d)(e.lpFees24h)],
                }),
                (0, r.jsxs)(c.Z, {
                  style: { color: o.colors.softTextColor },
                  children: [(0, f.d)(e.lpApr7d), "%"],
                }),
                (0, r.jsxs)(c.Z, {
                  style: { color: o.colors.softTextColor },
                  children: ["$", (0, f.d)(e.liquidityUSD)],
                }),
              ],
            }),
          });
        };
      e.Z = function (n) {
        var e = n.poolDatas,
          t = n.loading,
          i = (0, o.useState)(C),
          l = i[0],
          a = i[1],
          f = (0, o.useState)(!0),
          p = f[0],
          g = f[1],
          y = (0, m.$G)().t,
          Z = (0, s.Fg)(),
          b = (0, o.useState)(1),
          _ = b[0],
          O = b[1],
          F = (0, o.useState)(1),
          U = F[0],
          E = F[1];
        (0, o.useEffect)(
          function () {
            var n = 1;
            e.length % h.si === 0 && (n = 0),
              E(Math.floor(e.length / h.si) + n);
          },
          [e]
        );
        var I = (0, o.useMemo)(
            function () {
              return e
                ? e
                    .sort(function (n, e) {
                      return n && e
                        ? n[l] > e[l]
                          ? 1 * (p ? -1 : 1)
                          : -1 * (p ? -1 : 1)
                        : -1;
                    })
                    .slice(h.si * (_ - 1), _ * h.si)
                : [];
            },
            [_, e, p, l]
          ),
          $ = (0, o.useCallback)(
            function (n) {
              a(n), g(l !== n || !p);
            },
            [p, l]
          ),
          J = (0, o.useCallback)(
            function (n) {
              return l === n ? (p ? "\u2193" : "\u2191") : "";
            },
            [p, l]
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(j.y6, {
              children: [
                (0, r.jsxs)(v, {
                  style: { marginTop: 10 },
                  children: [
                    (0, r.jsx)(c.Z, {
                      fontSize: "12px",
                      bold: !0,
                      style: { color: Z.colors.hardTextColor },
                      children: "#",
                    }),
                    (0, r.jsx)(c.Z, {
                      fontSize: "12px",
                      bold: !0,
                      textTransform: "uppercase",
                      style: { color: Z.colors.hardTextColor },
                      children: y("Pool"),
                    }),
                    (0, r.jsxs)(j._J, {
                      fontSize: "12px",
                      bold: !0,
                      onClick: function () {
                        return $(C);
                      },
                      textTransform: "uppercase",
                      style: { color: Z.colors.hardTextColor },
                      children: [y("Volume 24H"), " ", J(C)],
                    }),
                    (0, r.jsxs)(j._J, {
                      fontSize: "12px",
                      bold: !0,
                      onClick: function () {
                        return $(T);
                      },
                      textTransform: "uppercase",
                      children: [y("Volume 7D"), " ", J(T)],
                    }),
                    (0, r.jsxs)(j._J, {
                      fontSize: "12px",
                      bold: !0,
                      onClick: function () {
                        return $(D);
                      },
                      textTransform: "uppercase",
                      style: { whiteSpace: "nowrap" },
                      children: [y("LP reward fees 24H"), " ", J(D)],
                    }),
                    (0, r.jsxs)(j._J, {
                      fontSize: "12px",
                      bold: !0,
                      onClick: function () {
                        return $(w);
                      },
                      textTransform: "uppercase",
                      children: [y("LP reward APR"), " ", J(w)],
                    }),
                    (0, r.jsxs)(j._J, {
                      fontSize: "12px",
                      bold: !0,
                      onClick: function () {
                        return $(S);
                      },
                      textTransform: "uppercase",
                      children: [y("Liquidity"), " ", J(S)],
                    }),
                  ],
                }),
                (0, r.jsx)(j.SS, {}),
                I.length > 0
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        I.map(function (n, e) {
                          return n
                            ? (0, r.jsxs)(
                                o.Fragment,
                                {
                                  children: [
                                    (0, r.jsx)(z, {
                                      index: (_ - 1) * h.si + e,
                                      poolData: n,
                                    }),
                                    (0, r.jsx)(j.SS, {}),
                                  ],
                                },
                                n.address
                              )
                            : null;
                        }),
                        t && (0, r.jsx)(k, {}),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(P, {}), (0, r.jsx)(d.Z, {})],
                    }),
              ],
            }),
            (0, r.jsx)(j.y6, {
              style: { marginTop: 16 },
              children:
                I.length > 0
                  ? (0, r.jsxs)(j.Ob, {
                      children: [
                        (0, r.jsx)(j.Eh, {
                          onClick: function () {
                            O(1 === _ ? _ : _ - 1);
                          },
                          children: (0, r.jsx)(u.Z, {
                            color:
                              1 === _
                                ? Z.colors.textDisabled
                                : Z.colors.softTextColor,
                          }),
                        }),
                        (0, r.jsx)(c.Z, {
                          style: { color: Z.colors.softTextColor },
                          children: y("Page %page% of %maxPage%", {
                            page: _,
                            maxPage: U,
                          }),
                        }),
                        (0, r.jsx)(j.Eh, {
                          onClick: function () {
                            O(_ === U ? _ : _ + 1);
                          },
                          children: (0, r.jsx)(x.Z, {
                            color:
                              _ === U
                                ? Z.colors.textDisabled
                                : Z.colors.softTextColor,
                          }),
                        }),
                      ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(P, {}), (0, r.jsx)(d.Z, {})],
                    }),
            }),
          ],
        });
      };
    },
    68231: function (n, e, t) {
      "use strict";
      var r = t(85893),
        o = t(67294),
        s = t(186),
        i = t(12080),
        l = t(27030),
        c = t(80613),
        a = t(57875),
        d = t(14795),
        u = t(21302),
        x = t(57121),
        f = t(45017),
        h = t(99822),
        p = t(17134),
        m = t(59686),
        j = t(7867),
        g = t(75472),
        y = t.n(g),
        Z = t(50591);
      function v(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function b() {
        var n = v([
          "\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = v([
          "\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = v([
          "\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      var T = s.ZP.div.withConfig({ componentId: "sc-a39d9d15-0" })(b()),
        D = (0, s.ZP)(f.a).withConfig({ componentId: "sc-a39d9d15-1" })(C()),
        w = (0, s.ZP)(h.X).withConfig({ componentId: "sc-a39d9d15-2" })(S()),
        k = function () {
          var n = (0, r.jsxs)(T, {
            children: [
              (0, r.jsx)(i.Z, {}),
              (0, r.jsx)(i.Z, {}),
              (0, r.jsx)(i.Z, {}),
              (0, r.jsx)(i.Z, {}),
              (0, r.jsx)(i.Z, {}),
              (0, r.jsx)(i.Z, {}),
            ],
          });
          return (0, r.jsxs)(r.Fragment, { children: [n, n, n] });
        },
        P = function (n) {
          var e = n.tokenData,
            t = n.index,
            o = (0, l.Z)(),
            i = o.isXs,
            d = o.isSm,
            u = (0, s.Fg)();
          return (0, r.jsx)(D, {
            to: "/info/token/".concat(e.address),
            children: (0, r.jsxs)(T, {
              children: [
                (0, r.jsx)(c.Z, {
                  children: (0, r.jsx)(a.Z, { children: t + 1 }),
                }),
                (0, r.jsxs)(c.Z, {
                  alignItems: "center",
                  children: [
                    (0, r.jsx)(w, { address: e.address }),
                    (i || d) &&
                      (0, r.jsx)(a.Z, { ml: "8px", children: e.symbol }),
                    !i &&
                      !d &&
                      (0, r.jsxs)(c.Z, {
                        marginLeft: "10px",
                        children: [
                          (0, r.jsx)(a.Z, {
                            style: { color: u.colors.hardTextColor },
                            children: e.name,
                          }),
                          (0, r.jsxs)(a.Z, {
                            ml: "8px",
                            style: { color: u.colors.hardTextColor },
                            children: ["(", e.symbol, ")"],
                          }),
                        ],
                      }),
                  ],
                }),
                (0, r.jsxs)(a.Z, {
                  fontWeight: 400,
                  style: { color: u.colors.softTextColor },
                  children: [
                    "$",
                    (0, p.d)(e.priceUSD, { notation: "standard" }),
                  ],
                }),
                (0, r.jsx)(a.Z, {
                  fontWeight: 400,
                  children: (0, r.jsx)(m.Z, {
                    value: e.priceUSDChange,
                    fontWeight: 400,
                  }),
                }),
                (0, r.jsxs)(a.Z, {
                  fontWeight: 400,
                  style: { color: u.colors.softTextColor },
                  children: ["$", (0, p.d)(e.volumeUSD)],
                }),
                (0, r.jsxs)(a.Z, {
                  fontWeight: 400,
                  style: { color: u.colors.softTextColor },
                  children: ["$", (0, p.d)(e.liquidityUSD)],
                }),
              ],
            }),
          });
        },
        z = "name",
        _ = "volumeUSD",
        O = "liquidityUSD",
        F = "priceUSD",
        U = "priceUSDChange";
      e.Z = function (n) {
        var e = n.tokenDatas,
          t = n.maxItems,
          l = void 0 === t ? 10 : t,
          c = (0, o.useState)(_),
          f = c[0],
          h = c[1],
          p = (0, o.useState)(!0),
          m = p[0],
          g = p[1],
          v = (0, j.$G)().t,
          b = (0, s.Fg)(),
          C = (0, o.useState)(1),
          S = C[0],
          D = C[1],
          w = (0, o.useState)(1),
          E = w[0],
          I = w[1];
        (0, o.useEffect)(
          function () {
            var n = 1;
            e &&
              (e.length % l === 0 && (n = 0), I(Math.floor(e.length / l) + n));
          },
          [l, e]
        );
        var $ = (0, o.useMemo)(
            function () {
              return e
                ? y()(
                    e,
                    function (n) {
                      return n[f];
                    },
                    m ? "desc" : "asc"
                  ).slice(l * (S - 1), S * l)
                : [];
            },
            [e, l, S, m, f]
          ),
          J = (0, o.useCallback)(
            function (n) {
              h(n), g(f !== n || !m);
            },
            [m, f]
          ),
          A = (0, o.useCallback)(
            function (n) {
              return f === n ? (m ? "\u2193" : "\u2191") : "";
            },
            [m, f]
          );
        return e
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(Z.y6, {
                  children: [
                    (0, r.jsxs)(T, {
                      style: { marginTop: 10 },
                      children: [
                        (0, r.jsx)(a.Z, {
                          fontSize: "12px",
                          bold: !0,
                          style: { color: b.colors.hardTextColor },
                          children: "#",
                        }),
                        (0, r.jsxs)(Z._J, {
                          fontSize: "12px",
                          bold: !0,
                          onClick: function () {
                            return J(z);
                          },
                          textTransform: "uppercase",
                          children: [v("Name"), " ", A(z)],
                        }),
                        (0, r.jsxs)(Z._J, {
                          fontSize: "12px",
                          bold: !0,
                          onClick: function () {
                            return J(F);
                          },
                          textTransform: "uppercase",
                          children: [v("Price"), " ", A(F)],
                        }),
                        (0, r.jsxs)(Z._J, {
                          fontSize: "12px",
                          bold: !0,
                          onClick: function () {
                            return J(U);
                          },
                          textTransform: "uppercase",
                          children: [v("Price Change"), " ", A(U)],
                        }),
                        (0, r.jsxs)(Z._J, {
                          fontSize: "12px",
                          bold: !0,
                          onClick: function () {
                            return J(_);
                          },
                          textTransform: "uppercase",
                          children: [v("Volume 24H"), " ", A(_)],
                        }),
                        (0, r.jsxs)(Z._J, {
                          fontSize: "12px",
                          bold: !0,
                          onClick: function () {
                            return J(O);
                          },
                          textTransform: "uppercase",
                          children: [v("Liquidity"), " ", A(O)],
                        }),
                      ],
                    }),
                    (0, r.jsx)(Z.SS, {}),
                    $.length > 0
                      ? (0, r.jsx)(r.Fragment, {
                          children: $.map(function (n, e) {
                            return n
                              ? (0, r.jsxs)(
                                  o.Fragment,
                                  {
                                    children: [
                                      (0, r.jsx)(P, {
                                        index: 10 * (S - 1) + e,
                                        tokenData: n,
                                      }),
                                      (0, r.jsx)(Z.SS, {}),
                                    ],
                                  },
                                  n.address
                                )
                              : null;
                          }),
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(k, {}), (0, r.jsx)(d.Z, {})],
                        }),
                  ],
                }),
                (0, r.jsx)(Z.y6, {
                  style: { marginTop: 16 },
                  children:
                    $.length > 0
                      ? (0, r.jsxs)(Z.Ob, {
                          children: [
                            (0, r.jsx)(Z.Eh, {
                              onClick: function () {
                                D(1 === S ? S : S - 1);
                              },
                              children: (0, r.jsx)(u.Z, {
                                color:
                                  1 === S
                                    ? b.colors.textDisabled
                                    : b.colors.softTextColor,
                              }),
                            }),
                            (0, r.jsx)(a.Z, {
                              style: { color: b.colors.softTextColor },
                              children: v("Page %page% of %maxPage%", {
                                page: S,
                                maxPage: E,
                              }),
                            }),
                            (0, r.jsx)(Z.Eh, {
                              onClick: function () {
                                D(S === E ? S : S + 1);
                              },
                              children: (0, r.jsx)(x.Z, {
                                color:
                                  S === E
                                    ? b.colors.textDisabled
                                    : b.colors.softTextColor,
                              }),
                            }),
                          ],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(k, {}), (0, r.jsx)(d.Z, {})],
                        }),
                }),
              ],
            })
          : (0, r.jsx)(i.Z, {});
      };
    },
  },
  function (n) {
    n.O(
      0,
      [2077, 7711, 1713, 9297, 3028, 4461, 5840, 2828, 9774, 2888, 179],
      function () {
        return (e = 7335), n((n.s = e));
        var e;
      }
    );
    var e = n.O();
    _N_E = e;
  },
]);
//# sourceMappingURL=info-2300d2f22dca5ee4.js.map
