/*! retrominder 09-09-2016 */

function stringCompare(a, b, c)
{
	var d = 9999,
		e = !1;
	a = a.replace(/ /g, ""), a = a.toLowerCase();
	for (var f = 0; f < b.length; f++)
		if (b[f] = b[f].replace(/ /g, ""), b[f] = b[f].toLowerCase(), 0 != d)
		{
			var g = new Levenshtein(a, b[f])
				.distance;
			d = Math.min(d, g)
		}
	if (d > Math.ceil(.3 * a.length) && c)
	{
		e = !0;
		for (var f = 0; f < c.length; f++)
			if (c[f] = c[f].replace(/ /g, ""), c[f] = c[f].toLowerCase(), 0 != d)
			{
				var g = new Levenshtein(a, c[f])
					.distance;
				d = Math.min(d, g)
			}
	}
	var h = ["wrong", "noway", "toobad"],
		i = ["perfect", "amazing"];
	return 0 == d ? e ? "great" : i[Math.round(Math.random() * (i.length - 1))] : d < Math.ceil(.3 * a.length) ? "great" : h[Math.round(Math.random() * (h.length - 1))]
}

function addZero(a, b)
{
	for (; a.toString()
		.length < b;) a = "0" + a;
	return a
}

function getRandomColor()
{
	for (var a = "0123456789ABCDEF".split(""), b = "#", c = 0; 6 > c; c++) b += a[Math.floor(16 * Math.random())];
	return b
}

function rgbToHex(a)
{
	return "0x" + ((1 << 24) + (a[0] << 16) + (a[1] << 8) + a[2])
		.toString(16)
		.slice(1)
}

function shuffle(a)
{
	for (var b, c, d = a.length; 0 !== d;) c = Math.floor(Math.random() * d), d -= 1, b = a[d], a[d] = a[c], a[c] = b;
	return a
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = []))
.push(function ()
{
	"use strict";
	var a, b, c = /(\d|\.)+/g,
		d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
		e = {
			aqua: [0, 255, 255],
			lime: [0, 255, 0],
			silver: [192, 192, 192],
			black: [0, 0, 0],
			maroon: [128, 0, 0],
			teal: [0, 128, 128],
			blue: [0, 0, 255],
			navy: [0, 0, 128],
			white: [255, 255, 255],
			fuchsia: [255, 0, 255],
			olive: [128, 128, 0],
			yellow: [255, 255, 0],
			orange: [255, 165, 0],
			gray: [128, 128, 128],
			purple: [128, 0, 128],
			green: [0, 128, 0],
			red: [255, 0, 0],
			pink: [255, 192, 203],
			cyan: [0, 255, 255],
			transparent: [255, 255, 255, 0]
		},
		f = function (a, b, c)
		{
			return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
		},
		g = function (a, b)
		{
			var g, h, i, j, k, l, m, n, o, p, q;
			if (a)
				if ("number" == typeof a) g = [a >> 16, a >> 8 & 255, 255 & a];
				else
				{
					if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), e[a]) g = e[a];
					else if ("#" === a.charAt(0)) 4 === a.length && (h = a.charAt(1), i = a.charAt(2), j = a.charAt(3), a = "#" + h + h + i + i + j + j), a = parseInt(a.substr(1), 16), g = [a >> 16, a >> 8 & 255, 255 & a];
					else if ("hsl" === a.substr(0, 3))
						if (g = q = a.match(c), b)
						{
							if (-1 !== a.indexOf("=")) return a.match(d)
						}
						else k = Number(g[0]) % 360 / 360, l = Number(g[1]) / 100, m = Number(g[2]) / 100, i = .5 >= m ? m * (l + 1) : m + l - m * l, h = 2 * m - i, g.length > 3 && (g[3] = Number(a[3])), g[0] = f(k + 1 / 3, h, i), g[1] = f(k, h, i), g[2] = f(k - 1 / 3, h, i);
					else g = a.match(c) || e.transparent;
					g[0] = Number(g[0]), g[1] = Number(g[1]), g[2] = Number(g[2]), g.length > 3 && (g[3] = Number(g[3]))
				}
			else g = e.black;
			return b && !q && (h = g[0] / 255, i = g[1] / 255, j = g[2] / 255, n = Math.max(h, i, j), o = Math.min(h, i, j), m = (n + o) / 2, n === o ? k = l = 0 : (p = n - o, l = m > .5 ? p / (2 - n - o) : p / (n + o), k = n === h ? (i - j) / p + (j > i ? 6 : 0) : n === i ? (j - h) / p + 2 : (h - i) / p + 4, k *= 60), g[0] = k + .5 | 0, g[1] = 100 * l + .5 | 0, g[2] = 100 * m + .5 | 0), g
		},
		h = function (a, b)
		{
			var c, d, e, f = (a + "")
				.match(j) || [],
				h = 0,
				i = f.length ? "" : a;
			for (c = 0; c < f.length; c++) d = f[c], e = a.substr(h, a.indexOf(d, h) - h), h += e.length + d.length, d = g(d, b), 3 === d.length && d.push(1), i += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
			return i
		},
		i = _gsScope.TweenLite,
		j = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
		k = _gsScope._gsDefine.plugin(
		{
			propName: "colorProps",
			version: "1.4.1",
			priority: -1,
			API: 2,
			global: !0,
			init: function (a, c, d)
			{
				var e, f, h, i;
				this._target = a, this._proxy = f = "NUMBER" === (c.format + "")
					.toUpperCase() ?
					{} : 0;
				for (e in c) "format" !== e && (f ? (this._firstNumPT = h = {
						_next: this._firstNumPT,
						t: a,
						p: e,
						f: "function" == typeof a[e]
					}, f[e] = "rgb(" + g(h.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : a[e])
					.join(",") + ")", i = c[e], this._addTween(f, e, "get", "number" == typeof i ? "rgb(" + g(i, !1)
						.join(",") + ")" : i, e, null, null, b)) : this._addTween(a, e, "get", c[e], e, null, null, b));
				return !0
			},
			set: function (a)
			{
				var b, c = this._firstNumPT;
				for (this._super.setRatio.call(this, a); c;) b = g(this._proxy[c.p], !1), b = b[0] << 16 | b[1] << 8 | b[2], c.f ? this._target[c.p](b) : this._target[c.p] = b, c = c._next
			}
		});
	for (a in e) j += "|" + a + "\\b";
	j = new RegExp(j + ")", "gi"), k.colorStringFilter = b = function (a)
	{
		var b, c = a[0] + a[1];
		j.lastIndex = 0, j.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = h(a[0], b), a[1] = h(a[1], b))
	}, i.defaultStringFilter || (i.defaultStringFilter = k.colorStringFilter), k.parseColor = g, a = k.prototype, a._firstNumPT = null, a._kill = function (b)
	{
		for (var c, d = this._firstNumPT; d;) d.p in b ? (d === a._firstNumPT && (this._firstNumPT = d._next), c && (c._next = d._next)) : c = d, d = d._next;
		return this._super._kill(b)
	}
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), ! function (a, b)
{
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a)
	{
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b)
{
	function c(a)
	{
		var b = a.length,
			c = _.type(a);
		return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	function d(a, b, c)
	{
		if (_.isFunction(b)) return _.grep(a, function (a, d)
		{
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return _.grep(a, function (a)
		{
			return a === b !== c
		});
		if ("string" == typeof b)
		{
			if (ha.test(b)) return _.filter(b, a, c);
			b = _.filter(b, a)
		}
		return _.grep(a, function (a)
		{
			return U.call(b, a) >= 0 !== c
		})
	}

	function e(a, b)
	{
		for (;
			(a = a[b]) && 1 !== a.nodeType;);
		return a
	}

	function f(a)
	{
		var b = oa[a] = {};
		return _.each(a.match(na) || [], function (a, c)
		{
			b[c] = !0
		}), b
	}

	function g()
	{
		Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
	}

	function h()
	{
		Object.defineProperty(this.cache = {}, 0,
		{
			get: function ()
			{
				return {}
			}
		}), this.expando = _.expando + h.uid++
	}

	function i(a, b, c)
	{
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(ua, "-$1")
				.toLowerCase(), c = a.getAttribute(d), "string" == typeof c)
			{
				try
				{
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
				}
				catch (e)
				{}
				sa.set(a, b, c)
			}
			else c = void 0;
		return c
	}

	function j()
	{
		return !0
	}

	function k()
	{
		return !1
	}

	function l()
	{
		try
		{
			return Z.activeElement
		}
		catch (a)
		{}
	}

	function m(a, b)
	{
		return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function n(a)
	{
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function o(a)
	{
		var b = Ka.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function p(a, b)
	{
		for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
	}

	function q(a, b)
	{
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType)
		{
			if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events))
			{
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
			}
			sa.hasData(a) && (h = sa.access(a), i = _.extend(
			{}, h), sa.set(b, i))
		}
	}

	function r(a, b)
	{
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
	}

	function s(a, b)
	{
		var c = b.nodeName.toLowerCase();
		"input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}

	function t(b, c)
	{
		var d, e = _(c.createElement(b))
			.appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
		return e.detach(), f
	}

	function u(a)
	{
		var b = Z,
			c = Oa[a];
		return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>"))
			.appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
	}

	function v(a, b, c)
	{
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function w(a, b)
	{
		return {
			get: function ()
			{
				return a() ? void delete this.get : (this.get = b)
					.apply(this, arguments)
			}
		}
	}

	function x(a, b)
	{
		if (b in a) return b;
		for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
			if (b = Xa[e] + c, b in a) return b;
		return d
	}

	function y(a, b, c)
	{
		var d = Ta.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function z(a, b, c, d, e)
	{
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
		return g
	}

	function A(a, b, c)
	{
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ra(a),
			g = "border-box" === _.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e)
		{
			if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
			d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function B(a, b)
	{
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function C(a, b, c, d, e)
	{
		return new C.prototype.init(a, b, c, d, e)
	}

	function D()
	{
		return setTimeout(function ()
		{
			Ya = void 0
		}), Ya = _.now()
	}

	function E(a, b)
	{
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function F(a, b, c)
	{
		for (var d, e = (cb[b] || [])
				.concat(cb["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function G(a, b, c)
	{
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			n = a.style,
			o = a.nodeType && xa(a),
			p = ra.get(a, "fxshow");
		c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function ()
		{
			h.unqueued || i()
		}), h.unqueued++, l.always(function ()
		{
			l.always(function ()
			{
				h.unqueued--, _.queue(a, "fx")
					.length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function ()
		{
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], $a.exec(e))
			{
				if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show"))
				{
					if ("show" !== e || !p || void 0 === p[d]) continue;
					o = !0
				}
				m[d] = p && p[d] || _.style(a, d)
			}
			else j = void 0;
		if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
		else
		{
			p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow",
				{}), f && (p.hidden = !o), o ? _(a)
				.show() : l.done(function ()
				{
					_(a)
						.hide()
				}), l.done(function ()
				{
					var b;
					ra.remove(a, "fxshow");
					for (b in m) _.style(a, b, m[b])
				});
			for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function H(a, b)
	{
		var c, d, e, f, g;
		for (c in a)
			if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g)
			{
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			}
			else b[d] = e
	}

	function I(a, b, c)
	{
		var d, e, f = 0,
			g = bb.length,
			h = _.Deferred()
			.always(function ()
			{
				delete i.elem
			}),
			i = function ()
			{
				if (e) return !1;
				for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise(
			{
				elem: a,
				props: _.extend(
				{}, b),
				opts: _.extend(!0,
				{
					specialEasing:
					{}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Ya || D(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c)
				{
					var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b)
				{
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (H(k, j.opts.specialEasing); g > f; f++)
			if (d = bb[f].call(j, a, k, j.opts)) return d;
		return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i,
			{
				elem: a,
				anim: j,
				queue: j.opts.queue
			})), j.progress(j.opts.progress)
			.done(j.opts.done, j.opts.complete)
			.fail(j.opts.fail)
			.always(j.opts.always)
	}

	function J(a)
	{
		return function (b, c)
		{
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase()
				.match(na) || [];
			if (_.isFunction(c))
				for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || [])
						.unshift(c)) : (a[d] = a[d] || [])
					.push(c)
		}
	}

	function K(a, b, c, d)
	{
		function e(h)
		{
			var i;
			return f[h] = !0, _.each(a[h] || [], function (a, h)
			{
				var j = h(b, c, d);
				return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
			}), i
		}
		var f = {},
			g = a === tb;
		return e(b.dataTypes[0]) || !f["*"] && e("*")
	}

	function L(a, b)
	{
		var c, d, e = _.ajaxSettings.flatOptions ||
		{};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && _.extend(!0, a, d), a
	}

	function M(a, b, c)
	{
		for (var d, e, f, g, h = a.contents, i = a.dataTypes;
			"*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d))
				{
					i.unshift(e);
					break
				}
		if (i[0] in c) f = i[0];
		else
		{
			for (e in c)
			{
				if (!i[0] || a.converters[e + " " + i[0]])
				{
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function N(a, b, c, d)
	{
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		for (f = k.shift(); f;)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f)
		{
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
					{
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try
				{
					b = g(b)
				}
				catch (l)
				{
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}

	function O(a, b, c, d)
	{
		var e;
		if (_.isArray(b)) _.each(b, function (b, e)
		{
			c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== _.type(b)) d(a, b);
		else
			for (e in b) O(a + "[" + e + "]", b[e], c, d)
	}

	function P(a)
	{
		return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	var Q = [],
		R = Q.slice,
		S = Q.concat,
		T = Q.push,
		U = Q.indexOf,
		V = {},
		W = V.toString,
		X = V.hasOwnProperty,
		Y = {},
		Z = a.document,
		$ = "2.1.3",
		_ = function (a, b)
		{
			return new _.fn.init(a, b)
		},
		aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ba = /^-ms-/,
		ca = /-([\da-z])/gi,
		da = function (a, b)
		{
			return b.toUpperCase()
		};
	_.fn = _.prototype = {
		jquery: $,
		constructor: _,
		selector: "",
		length: 0,
		toArray: function ()
		{
			return R.call(this)
		},
		get: function (a)
		{
			return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
		},
		pushStack: function (a)
		{
			var b = _.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a, b)
		{
			return _.each(this, a, b)
		},
		map: function (a)
		{
			return this.pushStack(_.map(this, function (b, c)
			{
				return a.call(b, c, b)
			}))
		},
		slice: function ()
		{
			return this.pushStack(R.apply(this, arguments))
		},
		first: function ()
		{
			return this.eq(0)
		},
		last: function ()
		{
			return this.eq(-1)
		},
		eq: function (a)
		{
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function ()
		{
			return this.prevObject || this.constructor(null)
		},
		push: T,
		sort: Q.sort,
		splice: Q.splice
	}, _.extend = _.fn.extend = function ()
	{
		var a, b, c, d, e, f, g = arguments[0] ||
			{},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] ||
			{}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c :
				{}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, _.extend(
	{
		expando: "jQuery" + ($ + Math.random())
			.replace(/\D/g, ""),
		isReady: !0,
		error: function (a)
		{
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a)
		{
			return "function" === _.type(a)
		},
		isArray: Array.isArray,
		isWindow: function (a)
		{
			return null != a && a === a.window
		},
		isNumeric: function (a)
		{
			return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject: function (a)
		{
			return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : !a.constructor || X.call(a.constructor.prototype, "isPrototypeOf")
		},
		isEmptyObject: function (a)
		{
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function (a)
		{
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
		},
		globalEval: function (a)
		{
			var b, c = eval;
			a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b)
				.parentNode.removeChild(b)) : c(a))
		},
		camelCase: function (a)
		{
			return a.replace(ba, "ms-")
				.replace(ca, da)
		},
		nodeName: function (a, b)
		{
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b, d)
		{
			var e, f = 0,
				g = a.length,
				h = c(a);
			if (d)
			{
				if (h)
					for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
				else
					for (f in a)
						if (e = b.apply(a[f], d), e === !1) break
			}
			else if (h)
				for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
			else
				for (f in a)
					if (e = b.call(a[f], f, a[f]), e === !1) break; return a
		},
		trim: function (a)
		{
			return null == a ? "" : (a + "")
				.replace(aa, "")
		},
		makeArray: function (a, b)
		{
			var d = b || [];
			return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
		},
		inArray: function (a, b, c)
		{
			return null == b ? -1 : U.call(b, a, c)
		},
		merge: function (a, b)
		{
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function (a, b, c)
		{
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, d)
		{
			var e, f = 0,
				g = a.length,
				h = c(a),
				i = [];
			if (h)
				for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
			else
				for (f in a) e = b(a[f], f, d), null != e && i.push(e);
			return S.apply([], i)
		},
		guid: 1,
		proxy: function (a, b)
		{
			var c, d, e;
			return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function ()
			{
				return a.apply(b || this, d.concat(R.call(arguments)))
			}, e.guid = a.guid = a.guid || _.guid++, e) : void 0
		},
		now: Date.now,
		support: Y
	}), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b)
	{
		V["[object " + b + "]"] = b.toLowerCase()
	});
	var ea = function (a)
	{
		function b(a, b, c, d)
		{
			var e, f, g, h, i, j, l, n, o, p;
			if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
			if (!d && I)
			{
				if (11 !== h && (e = sa.exec(a)))
					if (g = e[1])
					{
						if (9 === h)
						{
							if (f = b.getElementById(g), !f || !f.parentNode) return c;
							if (f.id === g) return c.push(f), c
						}
						else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
					}
					else
					{
						if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
						if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
					}
				if (v.qsa && (!J || !J.test(a)))
				{
					if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase())
					{
						for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
						o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
					}
					if (p) try
					{
						return $.apply(c, o.querySelectorAll(p)), c
					}
					catch (q)
					{}
					finally
					{
						l || b.removeAttribute("id")
					}
				}
			}
			return B(a.replace(ia, "$1"), b, c, d)
		}

		function c()
		{
			function a(c, d)
			{
				return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
			}
			var b = [];
			return a
		}

		function d(a)
		{
			return a[N] = !0, a
		}

		function e(a)
		{
			var b = G.createElement("div");
			try
			{
				return !!a(b)
			}
			catch (c)
			{
				return !1
			}
			finally
			{
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function f(a, b)
		{
			for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
		}

		function g(a, b)
		{
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
			if (d) return d;
			if (c)
				for (; c = c.nextSibling;)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function h(a)
		{
			return function (b)
			{
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function i(a)
		{
			return function (b)
			{
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function j(a)
		{
			return d(function (b)
			{
				return b = +b, d(function (c, d)
				{
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function k(a)
		{
			return a && "undefined" != typeof a.getElementsByTagName && a
		}

		function l()
		{}

		function m(a)
		{
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function n(a, b, c)
		{
			var d = b.dir,
				e = c && "parentNode" === d,
				f = Q++;
			return b.first ? function (b, c, f)
			{
				for (; b = b[d];)
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g)
			{
				var h, i, j = [P, f];
				if (g)
				{
					for (; b = b[d];)
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				}
				else
					for (; b = b[d];)
						if (1 === b.nodeType || e)
						{
							if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function o(a)
		{
			return a.length > 1 ? function (b, c, d)
			{
				for (var e = a.length; e--;)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function p(a, c, d)
		{
			for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
			return d
		}

		function q(a, b, c, d, e)
		{
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function r(a, b, c, e, f, g)
		{
			return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i)
			{
				var j, k, l, m = [],
					n = [],
					o = g.length,
					r = d || p(b || "*", h.nodeType ? [h] : h, []),
					s = !a || !d && b ? r : q(r, m, a, h, i),
					t = c ? f || (d ? a : o || e) ? [] : g : s;
				if (c && c(s, t, h, i), e)
					for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
				if (d)
				{
					if (f || a)
					{
						if (f)
						{
							for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
							f(null, t = [], j, i)
						}
						for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
					}
				}
				else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
			})
		}

		function s(a)
		{
			for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a)
				{
					return a === b
				}, g, !0), j = n(function (a)
				{
					return aa(b, a) > -1
				}, g, !0), k = [function (a, c, d)
				{
					var e = !f && (d || c !== C) || ((b = c)
						.nodeType ? i(a, c, d) : j(a, c, d));
					return b = null, e
				}]; e > h; h++)
				if (c = w.relative[a[h].type]) k = [n(o(k), c)];
				else
				{
					if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N])
					{
						for (d = ++h; e > d && !w.relative[a[d].type]; d++);
						return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)
								.concat(
								{
									value: " " === a[h - 2].type ? "*" : ""
								}))
							.replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
					}
					k.push(c)
				}
			return o(k)
		}

		function t(a, c)
		{
			var e = c.length > 0,
				f = a.length > 0,
				g = function (d, g, h, i, j)
				{
					var k, l, m, n = 0,
						o = "0",
						p = d && [],
						r = [],
						s = C,
						t = d || f && w.find.TAG("*", j),
						u = P += null == s ? 1 : Math.random() || .1,
						v = t.length;
					for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++)
					{
						if (f && k)
						{
							for (l = 0; m = a[l++];)
								if (m(k, g, h))
								{
									i.push(k);
									break
								}
							j && (P = u)
						}
						e && ((k = !m && k) && n--, d && p.push(k))
					}
					if (n += o, e && o !== n)
					{
						for (l = 0; m = c[l++];) m(p, r, g, h);
						if (d)
						{
							if (n > 0)
								for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
							r = q(r)
						}
						$.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
					}
					return j && (P = u, C = s), p
				};
			return e ? d(g) : g
		}
		var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
			O = a.document,
			P = 0,
			Q = 0,
			R = c(),
			S = c(),
			T = c(),
			U = function (a, b)
			{
				return a === b && (E = !0), 0
			},
			V = 1 << 31,
			W = {}.hasOwnProperty,
			X = [],
			Y = X.pop,
			Z = X.push,
			$ = X.push,
			_ = X.slice,
			aa = function (a, b)
			{
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ca = "[\\x20\\t\\r\\n\\f]",
			da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ea = da.replace("w", "w#"),
			fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
			ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
			ha = new RegExp(ca + "+", "g"),
			ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
			ja = new RegExp("^" + ca + "*," + ca + "*"),
			ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
			la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
			ma = new RegExp(ga),
			na = new RegExp("^" + ea + "$"),
			oa = {
				ID: new RegExp("^#(" + da + ")"),
				CLASS: new RegExp("^\\.(" + da + ")"),
				TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + fa),
				PSEUDO: new RegExp("^" + ga),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ba + ")$", "i"),
				needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
			},
			pa = /^(?:input|select|textarea|button)$/i,
			qa = /^h\d$/i,
			ra = /^[^{]+\{\s*\[native \w/,
			sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ta = /[+~]/,
			ua = /'|\\/g,
			va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
			wa = function (a, b, c)
			{
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			xa = function ()
			{
				F()
			};
		try
		{
			$.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
		}
		catch (ya)
		{
			$ = {
				apply: X.length ? function (a, b)
				{
					Z.apply(a, _.call(b))
				} : function (a, b)
				{
					for (var c = a.length, d = 0; a[c++] = b[d++];);
					a.length = c - 1
				}
			}
		}
		v = b.support = {}, y = b.isXML = function (a)
		{
			var b = a && (a.ownerDocument || a)
				.documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, F = b.setDocument = function (a)
		{
			var b, c, d = a ? a.ownerDocument || a : O;
			return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a)
			{
				return a.className = "i", !a.getAttribute("className")
			}), v.getElementsByTagName = e(function (a)
			{
				return a.appendChild(d.createComment("")), !a.getElementsByTagName("*")
					.length
			}), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a)
			{
				return H.appendChild(a)
					.id = N, !d.getElementsByName || !d.getElementsByName(N)
					.length
			}), v.getById ? (w.find.ID = function (a, b)
			{
				if ("undefined" != typeof b.getElementById && I)
				{
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, w.filter.ID = function (a)
			{
				var b = a.replace(va, wa);
				return function (a)
				{
					return a.getAttribute("id") === b
				}
			}) : (delete w.find.ID, w.filter.ID = function (a)
			{
				var b = a.replace(va, wa);
				return function (a)
				{
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), w.find.TAG = v.getElementsByTagName ? function (a, b)
			{
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b)
			{
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a)
				{
					for (; c = f[e++];) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, w.find.CLASS = v.getElementsByClassName && function (a, b)
			{
				return I ? b.getElementsByClassName(a) : void 0
			}, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a)
			{
				H.appendChild(a)
					.innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']")
					.length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]")
					.length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]")
					.length || J.push("~="), a.querySelectorAll(":checked")
					.length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*")
					.length || J.push(".#.+[+~]")
			}), e(function (a)
			{
				var b = d.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b)
					.setAttribute("name", "D"), a.querySelectorAll("[name=d]")
					.length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled")
					.length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
			})), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a)
			{
				v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
			}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b)
			{
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b)
			{
				if (b)
					for (; b = b.parentNode;)
						if (b === a) return !0;
				return !1
			}, U = b ? function (a, b)
			{
				if (a === b) return E = !0, 0;
				var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
			} : function (a, b)
			{
				if (a === b) return E = !0, 0;
				var c, e = 0,
					f = a.parentNode,
					h = b.parentNode,
					i = [a],
					j = [b];
				if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
				if (f === h) return g(a, b);
				for (c = a; c = c.parentNode;) i.unshift(c);
				for (c = b; c = c.parentNode;) j.unshift(c);
				for (; i[e] === j[e];) e++;
				return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			}, d) : G
		}, b.matches = function (a, c)
		{
			return b(a, null, null, c)
		}, b.matchesSelector = function (a, c)
		{
			if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try
			{
				var d = L.call(a, c);
				if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			}
			catch (e)
			{}
			return b(c, G, null, [a])
				.length > 0
		}, b.contains = function (a, b)
		{
			return (a.ownerDocument || a) !== G && F(a), M(a, b)
		}, b.attr = function (a, b)
		{
			(a.ownerDocument || a) !== G && F(a);
			var c = w.attrHandle[b.toLowerCase()],
				d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
			return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}, b.error = function (a)
		{
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, b.uniqueSort = function (a)
		{
			var b, c = [],
				d = 0,
				e = 0;
			if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E)
			{
				for (; b = a[e++];) b === a[e] && (d = c.push(e));
				for (; d--;) a.splice(c[d], 1)
			}
			return D = null, a
		}, x = b.getText = function (a)
		{
			var b, c = "",
				d = 0,
				e = a.nodeType;
			if (e)
			{
				if (1 === e || 9 === e || 11 === e)
				{
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
				}
				else if (3 === e || 4 === e) return a.nodeValue
			}
			else
				for (; b = a[d++];) c += x(b);
			return c
		}, w = b.selectors = {
			cacheLength: 50,
			createPseudo: d,
			match: oa,
			attrHandle:
			{},
			find:
			{},
			relative:
			{
				">":
				{
					dir: "parentNode",
					first: !0
				},
				" ":
				{
					dir: "parentNode"
				},
				"+":
				{
					dir: "previousSibling",
					first: !0
				},
				"~":
				{
					dir: "previousSibling"
				}
			},
			preFilter:
			{
				ATTR: function (a)
				{
					return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "")
						.replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a)
				{
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
				},
				PSEUDO: function (a)
				{
					var b, c = !a[6] && a[2];
					return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter:
			{
				TAG: function (a)
				{
					var b = a.replace(va, wa)
						.toLowerCase();
					return "*" === a ? function ()
					{
						return !0
					} : function (a)
					{
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a)
				{
					var b = R[a + " "];
					return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a)
					{
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, c, d)
				{
					return function (e)
					{
						var f = b.attr(e, a);
						return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ")
							.indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e)
				{
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a)
					{
						return !!a.parentNode
					} : function (b, c, i)
					{
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q)
						{
							if (f)
							{
								for (; p;)
								{
									for (l = b; l = l[p];)
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s)
							{
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
									if (1 === l.nodeType && ++m && l === b)
									{
										k[a] = [P, n, m];
										break
									}
							}
							else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
							else
								for (;
									(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function (a, c)
				{
					var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
					return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b)
					{
						for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
					}) : function (a)
					{
						return f(a, 0, e)
					}) : f
				}
			},
			pseudos:
			{
				not: d(function (a)
				{
					var b = [],
						c = [],
						e = A(a.replace(ia, "$1"));
					return e[N] ? d(function (a, b, c, d)
					{
						for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, d, f)
					{
						return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: d(function (a)
				{
					return function (c)
					{
						return b(a, c)
							.length > 0
					}
				}),
				contains: d(function (a)
				{
					return a = a.replace(va, wa),
						function (b)
						{
							return (b.textContent || b.innerText || x(b))
								.indexOf(a) > -1
						}
				}),
				lang: d(function (a)
				{
					return na.test(a || "") || b.error("unsupported lang: " + a),
						a = a.replace(va, wa)
						.toLowerCase(),
						function (b)
						{
							var c;
							do
								if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
							while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b)
				{
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a)
				{
					return a === H
				},
				focus: function (a)
				{
					return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a)
				{
					return a.disabled === !1
				},
				disabled: function (a)
				{
					return a.disabled === !0
				},
				checked: function (a)
				{
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a)
				{
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a)
				{
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a)
				{
					return !w.pseudos.empty(a)
				},
				header: function (a)
				{
					return qa.test(a.nodeName)
				},
				input: function (a)
				{
					return pa.test(a.nodeName)
				},
				button: function (a)
				{
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a)
				{
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: j(function ()
				{
					return [0]
				}),
				last: j(function (a, b)
				{
					return [b - 1]
				}),
				eq: j(function (a, b, c)
				{
					return [0 > c ? c + b : c]
				}),
				even: j(function (a, b)
				{
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: j(function (a, b)
				{
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: j(function (a, b, c)
				{
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: j(function (a, b, c)
				{
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (u in
			{
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[u] = h(u);
		for (u in
			{
				submit: !0,
				reset: !0
			}) w.pseudos[u] = i(u);
		return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c)
			{
				var d, e, f, g, h, i, j, k = S[a + " "];
				if (k) return c ? 0 : k.slice(0);
				for (h = a, i = [], j = w.preFilter; h;)
				{
					(!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push(
					{
						value: d,
						type: e[0].replace(ia, " ")
					}), h = h.slice(d.length));
					for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push(
					{
						value: d,
						type: g,
						matches: e
					}), h = h.slice(d.length));
					if (!d) break
				}
				return c ? h.length : h ? b.error(a) : S(a, i)
					.slice(0)
			}, A = b.compile = function (a, b)
			{
				var c, d = [],
					e = [],
					f = T[a + " "];
				if (!f)
				{
					for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
					f = T(a, t(e, d)), f.selector = a
				}
				return f
			}, B = b.select = function (a, b, c, d)
			{
				var e, f, g, h, i, j = "function" == typeof a && a,
					l = !d && z(a = j.selector || a);
				if (c = c || [], 1 === l.length)
				{
					if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0])
						.type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type])
					{
						if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
						j && (b = b.parentNode), a = a.slice(f.shift()
							.value.length)
					}
					for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
						if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b)))
						{
							if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
							break
						}
				}
				return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
			}, v.sortStable = N.split("")
			.sort(U)
			.join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a)
			{
				return 1 & a.compareDocumentPosition(G.createElement("div"))
			}), e(function (a)
			{
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || f("type|href|height|width", function (a, b, c)
			{
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), v.attributes && e(function (a)
			{
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || f("value", function (a, b, c)
			{
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), e(function (a)
			{
				return null == a.getAttribute("disabled")
			}) || f(ba, function (a, b, c)
			{
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}), b
	}(a);
	_.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
	var fa = _.expr.match.needsContext,
		ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ha = /^.[^:#\[\.,]*$/;
	_.filter = function (a, b, c)
	{
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a)
		{
			return 1 === a.nodeType
		}))
	}, _.fn.extend(
	{
		find: function (a)
		{
			var b, c = this.length,
				d = [],
				e = this;
			if ("string" != typeof a) return this.pushStack(_(a)
				.filter(function ()
				{
					for (b = 0; c > b; b++)
						if (_.contains(e[b], this)) return !0
				}));
			for (b = 0; c > b; b++) _.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function (a)
		{
			return this.pushStack(d(this, a || [], !1))
		},
		not: function (a)
		{
			return this.pushStack(d(this, a || [], !0))
		},
		is: function (a)
		{
			return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1)
				.length
		}
	});
	var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ka = _.fn.init = function (a, b)
		{
			var c, d;
			if (!a) return this;
			if ("string" == typeof a)
			{
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia)
					.find(a) : this.constructor(b)
					.find(a);
				if (c[1])
				{
					if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
						for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
		};
	ka.prototype = _.fn, ia = _(Z);
	var la = /^(?:parents|prev(?:Until|All))/,
		ma = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	_.extend(
	{
		dir: function (a, b, c)
		{
			for (var d = [], e = void 0 !== c;
				(a = a[b]) && 9 !== a.nodeType;)
				if (1 === a.nodeType)
				{
					if (e && _(a)
						.is(c)) break;
					d.push(a)
				}
			return d
		},
		sibling: function (a, b)
		{
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), _.fn.extend(
	{
		has: function (a)
		{
			var b = _(a, this),
				c = b.length;
			return this.filter(function ()
			{
				for (var a = 0; c > a; a++)
					if (_.contains(this, b[a])) return !0
			})
		},
		closest: function (a, b)
		{
			for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a)))
					{
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? _.unique(f) : f)
		},
		index: function (a)
		{
			return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first()
				.prevAll()
				.length : -1
		},
		add: function (a, b)
		{
			return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
		},
		addBack: function (a)
		{
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	}), _.each(
	{
		parent: function (a)
		{
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a)
		{
			return _.dir(a, "parentNode")
		},
		parentsUntil: function (a, b, c)
		{
			return _.dir(a, "parentNode", c)
		},
		next: function (a)
		{
			return e(a, "nextSibling")
		},
		prev: function (a)
		{
			return e(a, "previousSibling")
		},
		nextAll: function (a)
		{
			return _.dir(a, "nextSibling")
		},
		prevAll: function (a)
		{
			return _.dir(a, "previousSibling")
		},
		nextUntil: function (a, b, c)
		{
			return _.dir(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c)
		{
			return _.dir(a, "previousSibling", c)
		},
		siblings: function (a)
		{
			return _.sibling((a.parentNode ||
				{})
				.firstChild, a)
		},
		children: function (a)
		{
			return _.sibling(a.firstChild)
		},
		contents: function (a)
		{
			return a.contentDocument || _.merge([], a.childNodes)
		}
	}, function (a, b)
	{
		_.fn[a] = function (c, d)
		{
			var e = _.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var na = /\S+/g,
		oa = {};
	_.Callbacks = function (a)
	{
		a = "string" == typeof a ? oa[a] || f(a) : _.extend(
		{}, a);
		var b, c, d, e, g, h, i = [],
			j = !a.once && [],
			k = function (f)
			{
				for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
					if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse)
					{
						b = !1;
						break
					}
				d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
			},
			l = {
				add: function ()
				{
					if (i)
					{
						var c = i.length;
						! function f(b)
						{
							_.each(b, function (b, c)
							{
								var d = _.type(c);
								"function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
							})
						}(arguments), d ? g = i.length : b && (e = c, k(b))
					}
					return this
				},
				remove: function ()
				{
					return i && _.each(arguments, function (a, b)
					{
						for (var c;
							(c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
					}), this
				},
				has: function (a)
				{
					return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
				},
				empty: function ()
				{
					return i = [], g = 0, this
				},
				disable: function ()
				{
					return i = j = b = void 0, this
				},
				disabled: function ()
				{
					return !i
				},
				lock: function ()
				{
					return j = void 0, b || l.disable(), this
				},
				locked: function ()
				{
					return !j
				},
				fireWith: function (a, b)
				{
					return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
				},
				fire: function ()
				{
					return l.fireWith(this, arguments), this
				},
				fired: function ()
				{
					return !!c
				}
			};
		return l
	}, _.extend(
	{
		Deferred: function (a)
		{
			var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
				c = "pending",
				d = {
					state: function ()
					{
						return c
					},
					always: function ()
					{
						return e.done(arguments)
							.fail(arguments), this
					},
					then: function ()
					{
						var a = arguments;
						return _.Deferred(function (c)
							{
								_.each(b, function (b, f)
								{
									var g = _.isFunction(a[b]) && a[b];
									e[f[1]](function ()
									{
										var a = g && g.apply(this, arguments);
										a && _.isFunction(a.promise) ? a.promise()
											.done(c.resolve)
											.fail(c.reject)
											.progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
									})
								}), a = null
							})
							.promise()
					},
					promise: function (a)
					{
						return null != a ? _.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, _.each(b, function (a, f)
			{
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function ()
				{
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function ()
				{
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a)
		{
			var b, c, d, e = 0,
				f = R.call(arguments),
				g = f.length,
				h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
				i = 1 === h ? a : _.Deferred(),
				j = function (a, c, d)
				{
					return function (e)
					{
						c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
					}
				};
			if (g > 1)
				for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise()
					.done(j(e, d, f))
					.fail(i.reject)
					.progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f), i.promise()
		}
	});
	var pa;
	_.fn.ready = function (a)
	{
		return _.ready.promise()
			.done(a), this
	}, _.extend(
	{
		isReady: !1,
		readyWait: 1,
		holdReady: function (a)
		{
			a ? _.readyWait++ : _.ready(!0)
		},
		ready: function (a)
		{
			(a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z)
				.triggerHandler("ready"), _(Z)
				.off("ready"))))
		}
	}), _.ready.promise = function (b)
	{
		return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
	}, _.ready.promise();
	var qa = _.access = function (a, b, c, d, e, f, g)
	{
		var h = 0,
			i = a.length,
			j = null == c;
		if ("object" === _.type(c))
		{
			e = !0;
			for (h in c) _.access(a, b, h, c[h], !0, f, g)
		}
		else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c)
			{
				return j.call(_(a), c)
			})), b))
			for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	_.acceptData = function (a)
	{
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	}, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
		key: function (a)
		{
			if (!h.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c)
			{
				c = h.uid++;
				try
				{
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				}
				catch (d)
				{
					b[this.expando] = c, _.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function (a, b, c)
		{
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
			else
				for (d in b) f[d] = b[d];
			return f
		},
		get: function (a, b)
		{
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function (a, b, c)
		{
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function (a, b)
		{
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else
			{
				_.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
				for (; c--;) delete g[d[c]]
			}
		},
		hasData: function (a)
		{
			return !_.isEmptyObject(this.cache[a[this.expando]] ||
			{})
		},
		discard: function (a)
		{
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var ra = new h,
		sa = new h,
		ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		ua = /([A-Z])/g;
	_.extend(
	{
		hasData: function (a)
		{
			return sa.hasData(a) || ra.hasData(a)
		},
		data: function (a, b, c)
		{
			return sa.access(a, b, c)
		},
		removeData: function (a, b)
		{
			sa.remove(a, b)
		},
		_data: function (a, b, c)
		{
			return ra.access(a, b, c)
		},
		_removeData: function (a, b)
		{
			ra.remove(a, b)
		}
	}), _.fn.extend(
	{
		data: function (a, b)
		{
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a)
			{
				if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs")))
				{
					for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
					ra.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function ()
			{
				sa.set(this, a)
			}) : qa(this, function (b)
			{
				var c, d = _.camelCase(a);
				if (f && void 0 === b)
				{
					if (c = sa.get(f, a), void 0 !== c) return c;
					if (c = sa.get(f, d), void 0 !== c) return c;
					if (c = i(f, d, void 0), void 0 !== c) return c
				}
				else this.each(function ()
				{
					var c = sa.get(this, d);
					sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function (a)
		{
			return this.each(function ()
			{
				sa.remove(this, a)
			})
		}
	}), _.extend(
	{
		queue: function (a, b, c)
		{
			var d;
			return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b)
		{
			b = b || "fx";
			var c = _.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = _._queueHooks(a, b),
				g = function ()
				{
					_.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b)
		{
			var c = b + "queueHooks";
			return ra.get(a, c) || ra.access(a, c,
			{
				empty: _.Callbacks("once memory")
					.add(function ()
					{
						ra.remove(a, [b + "queue", c])
					})
			})
		}
	}), _.fn.extend(
	{
		queue: function (a, b)
		{
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function ()
			{
				var c = _.queue(this, a, b);
				_._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
			})
		},
		dequeue: function (a)
		{
			return this.each(function ()
			{
				_.dequeue(this, a)
			})
		},
		clearQueue: function (a)
		{
			return this.queue(a || "fx", [])
		},
		promise: function (a, b)
		{
			var c, d = 1,
				e = _.Deferred(),
				f = this,
				g = this.length,
				h = function ()
				{
					--d || e.resolveWith(f, [f])
				};
			for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		wa = ["Top", "Right", "Bottom", "Left"],
		xa = function (a, b)
		{
			return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
		},
		ya = /^(?:checkbox|radio)$/i;
	! function ()
	{
		var a = Z.createDocumentFragment(),
			b = a.appendChild(Z.createElement("div")),
			c = Z.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0)
			.cloneNode(!0)
			.lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0)
			.lastChild.defaultValue
	}();
	var za = "undefined";
	Y.focusinBubbles = "onfocusin" in a;
	var Aa = /^key/,
		Ba = /^(?:mouse|pointer|contextmenu)|click/,
		Ca = /^(?:focusinfocus|focusoutblur)$/,
		Da = /^([^.]*)(?:\.(.+)|)$/;
	_.event = {
		global:
		{},
		add: function (a, b, c, d, e)
		{
			var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
			if (q)
				for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b)
					{
						return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
					}), b = (b || "")
					.match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "")
					.split(".")
					.sort(), n && (l = _.event.special[n] ||
					{}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] ||
					{}, k = _.extend(
					{
						type: n,
						origType: p,
						data: d,
						handler: c,
						guid: c.guid,
						selector: e,
						needsContext: e && _.expr.match.needsContext.test(e),
						namespace: o.join(".")
					}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
		},
		remove: function (a, b, c, d, e)
		{
			var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
			if (q && (i = q.events))
			{
				for (b = (b || "")
					.match(na) || [""], j = b.length; j--;)
					if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "")
						.split(".")
						.sort(), n)
					{
						for (l = _.event.special[n] ||
							{}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
					}
					else
						for (n in i) _.event.remove(a, n + b[j], c, d, !0);
				_.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
			}
		},
		trigger: function (b, c, d, e)
		{
			var f, g, h, i, j, k, l, m = [d || Z],
				n = X.call(b, "type") ? b.type : b,
				o = X.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] ||
				{}, e || !l.trigger || l.trigger.apply(d, c) !== !1))
			{
				if (!e && !l.noBubble && !_.isWindow(d))
				{
					for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
					h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
				}
				for (f = 0;
					(g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") ||
				{})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
			}
		},
		dispatch: function (a)
		{
			a = _.event.fix(a);
			var b, c, d, e, f, g = [],
				h = R.call(arguments),
				i = (ra.get(this, "events") ||
				{})[a.type] || [],
				j = _.event.special[a.type] ||
				{};
			if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1)
			{
				for (g = _.event.handlers.call(this, a, i), b = 0;
					(e = g[b++]) && !a.isPropagationStopped();)
					for (a.currentTarget = e.elem, c = 0;
						(f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] ||
							{})
							.handle || f.handler)
						.apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
				return j.postDispatch && j.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b)
		{
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (i.disabled !== !0 || "click" !== a.type)
					{
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this)
							.index(i) >= 0 : _.find(e, this, null, [i])
							.length), d[e] && d.push(f);
						d.length && g.push(
						{
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push(
			{
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks:
		{},
		keyHooks:
		{
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b)
			{
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks:
		{
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b)
			{
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function (a)
		{
			if (a[_.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks :
				{}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
			return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special:
		{
			load:
			{
				noBubble: !0
			},
			focus:
			{
				trigger: function ()
				{
					return this !== l() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur:
			{
				trigger: function ()
				{
					return this === l() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click:
			{
				trigger: function ()
				{
					return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (a)
				{
					return _.nodeName(a.target, "a")
				}
			},
			beforeunload:
			{
				postDispatch: function (a)
				{
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d)
		{
			var e = _.extend(new _.Event, c,
			{
				type: a,
				isSimulated: !0,
				originalEvent:
				{}
			});
			d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, _.removeEvent = function (a, b, c)
	{
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, _.Event = function (a, b)
	{
		return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
	}, _.Event.prototype = {
		isDefaultPrevented: k,
		isPropagationStopped: k,
		isImmediatePropagationStopped: k,
		preventDefault: function ()
		{
			var a = this.originalEvent;
			this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function ()
		{
			var a = this.originalEvent;
			this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function ()
		{
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, _.each(
	{
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b)
	{
		_.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a)
			{
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), Y.focusinBubbles || _.each(
	{
		focus: "focusin",
		blur: "focusout"
	}, function (a, b)
	{
		var c = function (a)
		{
			_.event.simulate(b, a.target, _.event.fix(a), !0)
		};
		_.event.special[b] = {
			setup: function ()
			{
				var d = this.ownerDocument || this,
					e = ra.access(d, b);
				e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
			},
			teardown: function ()
			{
				var d = this.ownerDocument || this,
					e = ra.access(d, b) - 1;
				e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
			}
		}
	}), _.fn.extend(
	{
		on: function (a, b, c, d, e)
		{
			var f, g;
			if ("object" == typeof a)
			{
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
			else if (!d) return this;
			return 1 === e && (f = d, d = function (a)
			{
				return _()
					.off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = _.guid++)), this.each(function ()
			{
				_.event.add(this, a, d, c, b)
			})
		},
		one: function (a, b, c, d)
		{
			return this.on(a, b, c, d, 1)
		},
		off: function (a, b, c)
		{
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget)
				.off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a)
			{
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function ()
			{
				_.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b)
		{
			return this.each(function ()
			{
				_.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b)
		{
			var c = this[0];
			return c ? _.event.trigger(a, b, c, !0) : void 0
		}
	});
	var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Fa = /<([\w:]+)/,
		Ga = /<|&#?\w+;/,
		Ha = /<(?:script|style|link)/i,
		Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ja = /^$|\/(?:java|ecma)script/i,
		Ka = /^true\/(.*)/,
		La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ma = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend(
	{
		clone: function (a, b, c)
		{
			var d, e, f, g, h = a.cloneNode(!0),
				i = _.contains(a.ownerDocument, a);
			if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
				for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
				else q(a, h);
			return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
		},
		buildFragment: function (a, b, c, d)
		{
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
				if (e = a[m], e || 0 === e)
					if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
					else if (Ga.test(e))
			{
				for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
				_.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			}
			else l.push(b.createTextNode(e));
			for (k.textContent = "", m = 0; e = l[m++];)
				if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
					for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
			return k
		},
		cleanData: function (a)
		{
			for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++)
			{
				if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e])))
				{
					if (b.events)
						for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
					ra.cache[e] && delete ra.cache[e]
				}
				delete sa.cache[c[sa.expando]]
			}
		}
	}), _.fn.extend(
	{
		text: function (a)
		{
			return qa(this, function (a)
			{
				return void 0 === a ? _.text(this) : this.empty()
					.each(function ()
					{
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
					})
			}, null, a, arguments.length)
		},
		append: function ()
		{
			return this.domManip(arguments, function (a)
			{
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
				{
					var b = m(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function ()
		{
			return this.domManip(arguments, function (a)
			{
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
				{
					var b = m(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function ()
		{
			return this.domManip(arguments, function (a)
			{
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function ()
		{
			return this.domManip(arguments, function (a)
			{
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function (a, b)
		{
			for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function ()
		{
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
			return this
		},
		clone: function (a, b)
		{
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function ()
			{
				return _.clone(this, a, b)
			})
		},
		html: function (a)
		{
			return qa(this, function (a)
			{
				var b = this[0] ||
					{},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()])
				{
					a = a.replace(Ea, "<$1></$2>");
					try
					{
						for (; d > c; c++) b = this[c] ||
						{}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
						b = 0
					}
					catch (e)
					{}
				}
				b && this.empty()
					.append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function ()
		{
			var a = arguments[0];
			return this.domManip(arguments, function (b)
			{
				a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function (a)
		{
			return this.remove(a, !0)
		},
		domManip: function (a, b)
		{
			a = S.apply([], a);
			var c, d, e, f, g, h, i = 0,
				j = this.length,
				k = this,
				l = j - 1,
				m = a[0],
				p = _.isFunction(m);
			if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function (c)
			{
				var d = k.eq(c);
				p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
			});
			if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d))
			{
				for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
				if (f)
					for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
			}
			return this
		}
	}), _.each(
	{
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b)
	{
		_.fn[a] = function (a)
		{
			for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var Na, Oa = {},
		Pa = /^margin/,
		Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
		Ra = function (b)
		{
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		};
	! function ()
	{
		function b()
		{
			g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
			var b = a.getComputedStyle(g, null);
			c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
		}
		var c, d, e = Z.documentElement,
			f = Z.createElement("div"),
			g = Z.createElement("div");
		g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0)
			.style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y,
			{
				pixelPosition: function ()
				{
					return b(), c
				},
				boxSizingReliable: function ()
				{
					return null == d && b(), d
				},
				reliableMarginRight: function ()
				{
					var b, c = g.appendChild(Z.createElement("div"));
					return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null)
						.marginRight), e.removeChild(f), g.removeChild(c), b
				}
			}))
	}(), _.swap = function (a, b, c, d)
	{
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var Sa = /^(none|table(?!-c[ea]).+)/,
		Ta = new RegExp("^(" + va + ")(.*)$", "i"),
		Ua = new RegExp("^([+-])=(" + va + ")", "i"),
		Va = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Wa = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Xa = ["Webkit", "O", "Moz", "ms"];
	_.extend(
	{
		cssHooks:
		{
			opacity:
			{
				get: function (a, b)
				{
					if (b)
					{
						var c = v(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber:
		{
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
		cssProps:
		{
			"float": "cssFloat"
		},
		style: function (a, b, c, d)
		{
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style)
			{
				var e, f, g, h = _.camelCase(b),
					i = a.style;
				return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
			}
		},
		css: function (a, b, c, d)
		{
			var e, f, g, h = _.camelCase(b);
			return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
		}
	}), _.each(["height", "width"], function (a, b)
	{
		_.cssHooks[b] = {
			get: function (a, c, d)
			{
				return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function ()
				{
					return A(a, b, d)
				}) : A(a, b, d) : void 0
			},
			set: function (a, c, d)
			{
				var e = d && Ra(a);
				return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b)
	{
		return b ? _.swap(a,
		{
			display: "inline-block"
		}, v, [a, "marginRight"]) : void 0
	}), _.each(
	{
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b)
	{
		_.cssHooks[a + b] = {
			expand: function (c)
			{
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Pa.test(a) || (_.cssHooks[a + b].set = y)
	}), _.fn.extend(
	{
		css: function (a, b)
		{
			return qa(this, function (a, b, c)
			{
				var d, e, f = {},
					g = 0;
				if (_.isArray(b))
				{
					for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function ()
		{
			return B(this, !0)
		},
		hide: function ()
		{
			return B(this)
		},
		toggle: function (a)
		{
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function ()
			{
				xa(this) ? _(this)
					.show() : _(this)
					.hide()
			})
		}
	}), _.Tween = C, C.prototype = {
		constructor: C,
		init: function (a, b, c, d, e, f)
		{
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
		},
		cur: function ()
		{
			var a = C.propHooks[this.prop];
			return a && a.get ? a.get(this) : C.propHooks._default.get(this)
		},
		run: function (a)
		{
			var b, c = C.propHooks[this.prop];
			return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
		}
	}, C.prototype.init.prototype = C.prototype, C.propHooks = {
		_default:
		{
			get: function (a)
			{
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function (a)
			{
				_.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
		set: function (a)
		{
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, _.easing = {
		linear: function (a)
		{
			return a
		},
		swing: function (a)
		{
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, _.fx = C.prototype.init, _.fx.step = {};
	var Ya, Za, $a = /^(?:toggle|show|hide)$/,
		_a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
		ab = /queueHooks$/,
		bb = [G],
		cb = {
			"*": [function (a, b)
			{
				var c = this.createTween(a, b),
					d = c.cur(),
					e = _a.exec(b),
					f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
					g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f)
				{
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};
	_.Animation = _.extend(I,
		{
			tweener: function (a, b)
			{
				_.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
			},
			prefilter: function (a, b)
			{
				b ? bb.unshift(a) : bb.push(a)
			}
		}), _.speed = function (a, b, c)
		{
			var d = a && "object" == typeof a ? _.extend(
			{}, a) :
			{
				complete: c || !c && b || _.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !_.isFunction(b) && b
			};
			return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function ()
			{
				_.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
			}, d
		}, _.fn.extend(
		{
			fadeTo: function (a, b, c, d)
			{
				return this.filter(xa)
					.css("opacity", 0)
					.show()
					.end()
					.animate(
					{
						opacity: b
					}, a, c, d)
			},
			animate: function (a, b, c, d)
			{
				var e = _.isEmptyObject(a),
					f = _.speed(b, c, d),
					g = function ()
					{
						var b = I(this, _.extend(
						{}, a), f);
						(e || ra.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function (a, b, c)
			{
				var d = function (a)
				{
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function ()
				{
					var b = !0,
						e = null != a && a + "queueHooks",
						f = _.timers,
						g = ra.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && _.dequeue(this, a)
				})
			},
			finish: function (a)
			{
				return a !== !1 && (a = a || "fx"), this.each(function ()
				{
					var b, c = ra.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = _.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), _.each(["toggle", "show", "hide"], function (a, b)
		{
			var c = _.fn[b];
			_.fn[b] = function (a, d, e)
			{
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
			}
		}), _.each(
		{
			slideDown: E("show"),
			slideUp: E("hide"),
			slideToggle: E("toggle"),
			fadeIn:
			{
				opacity: "show"
			},
			fadeOut:
			{
				opacity: "hide"
			},
			fadeToggle:
			{
				opacity: "toggle"
			}
		}, function (a, b)
		{
			_.fn[a] = function (a, c, d)
			{
				return this.animate(b, a, c, d)
			}
		}), _.timers = [], _.fx.tick = function ()
		{
			var a, b = 0,
				c = _.timers;
			for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || _.fx.stop(), Ya = void 0
		}, _.fx.timer = function (a)
		{
			_.timers.push(a), a() ? _.fx.start() : _.timers.pop()
		}, _.fx.interval = 13, _.fx.start = function ()
		{
			Za || (Za = setInterval(_.fx.tick, _.fx.interval))
		}, _.fx.stop = function ()
		{
			clearInterval(Za), Za = null
		}, _.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, _.fn.delay = function (a, b)
		{
			return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c)
			{
				var d = setTimeout(b, a);
				c.stop = function ()
				{
					clearTimeout(d)
				}
			})
		},
		function ()
		{
			var a = Z.createElement("input"),
				b = Z.createElement("select"),
				c = b.appendChild(Z.createElement("option"));
			a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
		}();
	var db, eb, fb = _.expr.attrHandle;
	_.fn.extend(
	{
		attr: function (a, b)
		{
			return qa(this, _.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a)
		{
			return this.each(function ()
			{
				_.removeAttr(this, a)
			})
		}
	}), _.extend(
	{
		attr: function (a, b, c)
		{
			var d, e, f = a.nodeType;
			return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
		},
		removeAttr: function (a, b)
		{
			var c, d, e = 0,
				f = b && b.match(na);
			if (f && 1 === a.nodeType)
				for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks:
		{
			type:
			{
				set: function (a, b)
				{
					if (!Y.radioValue && "radio" === b && _.nodeName(a, "input"))
					{
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), eb = {
		set: function (a, b, c)
		{
			return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b)
	{
		var c = fb[b] || _.find.attr;
		fb[b] = function (a, b, d)
		{
			var e, f;
			return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
		}
	});
	var gb = /^(?:input|select|textarea|button)$/i;
	_.fn.extend(
	{
		prop: function (a, b)
		{
			return qa(this, _.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a)
		{
			return this.each(function ()
			{
				delete this[_.propFix[a] || a]
			})
		}
	}), _.extend(
	{
		propFix:
		{
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (a, b, c)
		{
			var d, e, f, g = a.nodeType;
			return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
		},
		propHooks:
		{
			tabIndex:
			{
				get: function (a)
				{
					return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), Y.optSelected || (_.propHooks.selected = {
		get: function (a)
		{
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function ()
	{
		_.propFix[this.toLowerCase()] = this
	});
	var hb = /[\t\r\n\f]/g;
	_.fn.extend(
	{
		addClass: function (a)
		{
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (_.isFunction(a)) return this.each(function (b)
			{
				_(this)
					.addClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "")
					.match(na) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ")
							.replace(hb, " ") : " "))
					{
						for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = _.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function (a)
		{
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (_.isFunction(a)) return this.each(function (b)
			{
				_(this)
					.removeClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "")
					.match(na) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ")
							.replace(hb, " ") : ""))
					{
						for (f = 0; e = b[f++];)
							for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
						g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function (a, b)
		{
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function (c)
			{
				_(this)
					.toggleClass(a.call(this, c, this.className, b), b)
			} : function ()
			{
				if ("string" === c)
					for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
				else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
			})
		},
		hasClass: function (a)
		{
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ")
					.replace(hb, " ")
					.indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var ib = /\r/g;
	_.fn.extend(
	{
		val: function (a)
		{
			var b, c, d, e = this[0];
			return arguments.length ? (d = _.isFunction(a), this.each(function (c)
			{
				var e;
				1 === this.nodeType && (e = d ? a.call(this, c, _(this)
					.val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a)
				{
					return null == a ? "" : a + ""
				})), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
			})) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
		}
	}), _.extend(
	{
		valHooks:
		{
			option:
			{
				get: function (a)
				{
					var b = _.find.attr(a, "value");
					return null != b ? b : _.trim(_.text(a))
				}
			},
			select:
			{
				get: function (a)
				{
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup")))
						{
							if (b = _(c)
								.val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function (a, b)
				{
					for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), _.each(["radio", "checkbox"], function ()
	{
		_.valHooks[this] = {
			set: function (a, b)
			{
				return _.isArray(b) ? a.checked = _.inArray(_(a)
					.val(), b) >= 0 : void 0
			}
		}, Y.checkOn || (_.valHooks[this].get = function (a)
		{
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b)
	{
		_.fn[b] = function (a, c)
		{
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), _.fn.extend(
	{
		hover: function (a, b)
		{
			return this.mouseenter(a)
				.mouseleave(b || a)
		},
		bind: function (a, b, c)
		{
			return this.on(a, null, b, c)
		},
		unbind: function (a, b)
		{
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d)
		{
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c)
		{
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var jb = _.now(),
		kb = /\?/;
	_.parseJSON = function (a)
	{
		return JSON.parse(a + "")
	}, _.parseXML = function (a)
	{
		var b, c;
		if (!a || "string" != typeof a) return null;
		try
		{
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		}
		catch (d)
		{
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror")
			.length) && _.error("Invalid XML: " + a), b
	};
	var lb = /#.*$/,
		mb = /([?&])_=[^&]*/,
		nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		pb = /^(?:GET|HEAD)$/,
		qb = /^\/\//,
		rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		sb = {},
		tb = {},
		ub = "*/".concat("*"),
		vb = a.location.href,
		wb = rb.exec(vb.toLowerCase()) || [];
	_.extend(
	{
		active: 0,
		lastModified:
		{},
		etag:
		{},
		ajaxSettings:
		{
			url: vb,
			type: "GET",
			isLocal: ob.test(wb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts:
			{
				"*": ub,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents:
			{
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields:
			{
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters:
			{
				"* text": String,
				"text html": !0,
				"text json": _.parseJSON,
				"text xml": _.parseXML
			},
			flatOptions:
			{
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b)
		{
			return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
		},
		ajaxPrefilter: J(sb),
		ajaxTransport: J(tb),
		ajax: function (a, b)
		{
			function c(a, b, c, g)
			{
				var i, k, r, s, u, w = b;
				2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (b = a, a = void 0), b = b ||
			{};
			var d, e, f, g, h, i, j, k, l = _.ajaxSetup(
				{}, b),
				m = l.context || l,
				n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
				o = _.Deferred(),
				p = _.Callbacks("once memory"),
				q = l.statusCode ||
				{},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function (a)
					{
						var b;
						if (2 === t)
						{
							if (!g)
								for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
							b = g[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function ()
					{
						return 2 === t ? f : null
					},
					setRequestHeader: function (a, b)
					{
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function (a)
					{
						return t || (l.mimeType = a), this
					},
					statusCode: function (a)
					{
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function (a)
					{
						var b = a || u;
						return d && d.abort(b), c(0, b), this
					}
				};
			if (o.promise(v)
				.complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "")
				.replace(lb, "")
				.replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*")
				.toLowerCase()
				.match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
			j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
			for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
			if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (k in
				{
					success: 1,
					error: 1,
					complete: 1
				}) v[k](l[k]);
			if (d = K(tb, l, b, v))
			{
				v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function ()
				{
					v.abort("timeout")
				}, l.timeout));
				try
				{
					t = 1, d.send(r, c)
				}
				catch (w)
				{
					if (!(2 > t)) throw w;
					c(-1, w)
				}
			}
			else c(-1, "No Transport");
			return v
		},
		getJSON: function (a, b, c)
		{
			return _.get(a, b, c, "json")
		},
		getScript: function (a, b)
		{
			return _.get(a, void 0, b, "script")
		}
	}), _.each(["get", "post"], function (a, b)
	{
		_[b] = function (a, c, d, e)
		{
			return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax(
			{
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), _._evalUrl = function (a)
	{
		return _.ajax(
		{
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, _.fn.extend(
	{
		wrapAll: function (a)
		{
			var b;
			return _.isFunction(a) ? this.each(function (b)
			{
				_(this)
					.wrapAll(a.call(this, b))
			}) : (this[0] && (b = _(a, this[0].ownerDocument)
				.eq(0)
				.clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function ()
				{
					for (var a = this; a.firstElementChild;) a = a.firstElementChild;
					return a
				})
				.append(this)), this)
		},
		wrapInner: function (a)
		{
			return this.each(_.isFunction(a) ? function (b)
			{
				_(this)
					.wrapInner(a.call(this, b))
			} : function ()
			{
				var b = _(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a)
		{
			var b = _.isFunction(a);
			return this.each(function (c)
			{
				_(this)
					.wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function ()
		{
			return this.parent()
				.each(function ()
				{
					_.nodeName(this, "body") || _(this)
						.replaceWith(this.childNodes)
				})
				.end()
		}
	}), _.expr.filters.hidden = function (a)
	{
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, _.expr.filters.visible = function (a)
	{
		return !_.expr.filters.hidden(a)
	};
	var xb = /%20/g,
		yb = /\[\]$/,
		zb = /\r?\n/g,
		Ab = /^(?:submit|button|image|reset|file)$/i,
		Bb = /^(?:input|select|textarea|keygen)/i;
	_.param = function (a, b)
	{
		var c, d = [],
			e = function (a, b)
			{
				b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function ()
		{
			e(this.name, this.value)
		});
		else
			for (c in a) O(c, a[c], b, e);
		return d.join("&")
			.replace(xb, "+")
	}, _.fn.extend(
	{
		serialize: function ()
		{
			return _.param(this.serializeArray())
		},
		serializeArray: function ()
		{
			return this.map(function ()
				{
					var a = _.prop(this, "elements");
					return a ? _.makeArray(a) : this
				})
				.filter(function ()
				{
					var a = this.type;
					return this.name && !_(this)
						.is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
				})
				.map(function (a, b)
				{
					var c = _(this)
						.val();
					return null == c ? null : _.isArray(c) ? _.map(c, function (a)
					{
						return {
							name: b.name,
							value: a.replace(zb, "\r\n")
						}
					}) :
					{
						name: b.name,
						value: c.replace(zb, "\r\n")
					}
				})
				.get()
		}
	}), _.ajaxSettings.xhr = function ()
	{
		try
		{
			return new XMLHttpRequest
		}
		catch (a)
		{}
	};
	var Cb = 0,
		Db = {},
		Eb = {
			0: 200,
			1223: 204
		},
		Fb = _.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function ()
	{
		for (var a in Db) Db[a]()
	}), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function (a)
	{
		var b;
		return Y.cors || Fb && !a.crossDomain ?
		{
			send: function (c, d)
			{
				var e, f = a.xhr(),
					g = ++Cb;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function (a)
				{
					return function ()
					{
						b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ?
						{
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
				try
				{
					f.send(a.hasContent && a.data || null)
				}
				catch (h)
				{
					if (b) throw h
				}
			},
			abort: function ()
			{
				b && b()
			}
		} : void 0
	}), _.ajaxSetup(
	{
		accepts:
		{
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents:
		{
			script: /(?:java|ecma)script/
		},
		converters:
		{
			"text script": function (a)
			{
				return _.globalEval(a), a
			}
		}
	}), _.ajaxPrefilter("script", function (a)
	{
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), _.ajaxTransport("script", function (a)
	{
		if (a.crossDomain)
		{
			var b, c;
			return {
				send: function (d, e)
				{
					b = _("<script>")
						.prop(
						{
							async: !0,
							charset: a.scriptCharset,
							src: a.url
						})
						.on("load error", c = function (a)
						{
							b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
						}), Z.head.appendChild(b[0])
				},
				abort: function ()
				{
					c && c()
				}
			}
		}
	});
	var Gb = [],
		Hb = /(=)\?(?=&|$)|\?\?/;
	_.ajaxSetup(
	{
		jsonp: "callback",
		jsonpCallback: function ()
		{
			var a = Gb.pop() || _.expando + "_" + jb++;
			return this[a] = !0, a
		}
	}), _.ajaxPrefilter("json jsonp", function (b, c, d)
	{
		var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "")
			.indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function ()
		{
			return g || _.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function ()
		{
			g = arguments
		}, d.always(function ()
		{
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), _.parseHTML = function (a, b, c)
	{
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || Z;
		var d = ga.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e)
			.remove(), _.merge([], d.childNodes))
	};
	var Ib = _.fn.load;
	_.fn.load = function (a, b, c)
	{
		if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax(
			{
				url: a,
				type: e,
				dataType: "html",
				data: b
			})
			.done(function (a)
			{
				f = arguments, g.html(d ? _("<div>")
					.append(_.parseHTML(a))
					.find(d) : a)
			})
			.complete(c && function (a, b)
			{
				g.each(c, f || [a.responseText, b, a])
			}), this
	}, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b)
	{
		_.fn[b] = function (a)
		{
			return this.on(b, a)
		}
	}), _.expr.filters.animated = function (a)
	{
		return _.grep(_.timers, function (b)
			{
				return a === b.elem
			})
			.length
	};
	var Jb = a.document.documentElement;
	_.offset = {
		setOffset: function (a, b, c)
		{
			var d, e, f, g, h, i, j, k = _.css(a, "position"),
				l = _(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i)
				.indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, _.fn.extend(
	{
		offset: function (a)
		{
			if (arguments.length) return void 0 === a ? this : this.each(function (b)
			{
				_.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f),
			{
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e) : void 0
		},
		position: function ()
		{
			if (this[0])
			{
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)),
				{
					top: b.top - d.top - _.css(c, "marginTop", !0),
					left: b.left - d.left - _.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function ()
		{
			return this.map(function ()
			{
				for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
				return a || Jb
			})
		}
	}), _.each(
	{
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (b, c)
	{
		var d = "pageYOffset" === c;
		_.fn[b] = function (e)
		{
			return qa(this, function (b, e, f)
			{
				var g = P(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), _.each(["top", "left"], function (a, b)
	{
		_.cssHooks[b] = w(Y.pixelPosition, function (a, c)
		{
			return c ? (c = v(a, b), Qa.test(c) ? _(a)
				.position()[b] + "px" : c) : void 0
		})
	}), _.each(
	{
		Height: "height",
		Width: "width"
	}, function (a, b)
	{
		_.each(
		{
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d)
		{
			_.fn[d] = function (d, e)
			{
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return qa(this, function (b, c, d)
				{
					var e;
					return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), _.fn.size = function ()
	{
		return this.length
	}, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function ()
	{
		return _
	});
	var Kb = a.jQuery,
		Lb = a.$;
	return _.noConflict = function (b)
	{
		return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
	}, typeof b === za && (a.jQuery = a.$ = _), _
}), ! function (a)
{
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a)
{
	function b(b)
	{
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l)
		{
			if (1 === g.deltaMode)
			{
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			}
			else if (2 === g.deltaMode)
			{
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect)
			{
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle)
				.apply(this, h)
		}
	}

	function c()
	{
		f = null
	}

	function d(a, b)
	{
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function ()
		{
			if (this.addEventListener)
				for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function ()
		{
			if (this.removeEventListener)
				for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b)
		{
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function (b)
		{
			return a(b)
				.height()
		},
		settings:
		{
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend(
	{
		mousewheel: function (a)
		{
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a)
		{
			return this.unbind("mousewheel", a)
		}
	})
}), ! function (a)
{
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else
	{
		var b;
		b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.PIXI = a()
	}
}(function ()
{
	var a;
	return function b(a, c, d)
	{
		function e(g, h)
		{
			if (!c[g])
			{
				if (!a[g])
				{
					var i = "function" == typeof require && require;
					if (!h && i) return i(g, !0);
					if (f) return f(g, !0);
					var j = new Error("Cannot find module '" + g + "'");
					throw j.code = "MODULE_NOT_FOUND", j
				}
				var k = c[g] = {
					exports:
					{}
				};
				a[g][0].call(k.exports, function (b)
				{
					var c = a[g][1][b];
					return e(c ? c : b)
				}, k, k.exports, b, a, c, d)
			}
			return c[g].exports
		}
		for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
		return e
	}(
	{
		1: [function (b, c, d)
		{
			(function (b, d)
			{
				! function ()
				{
					function e()
					{}

					function f(a)
					{
						return a
					}

					function g(a)
					{
						return !!a
					}

					function h(a)
					{
						return !a
					}

					function i(a)
					{
						return function ()
						{
							if (null === a) throw new Error("Callback was already called.");
							a.apply(this, arguments), a = null
						}
					}

					function j(a)
					{
						return function ()
						{
							null !== a && (a.apply(this, arguments), a = null)
						}
					}

					function k(a)
					{
						return O(a) || "number" == typeof a.length && a.length >= 0 && a.length % 1 === 0
					}

					function l(a, b)
					{
						for (var c = -1, d = a.length; ++c < d;) b(a[c], c, a)
					}

					function m(a, b)
					{
						for (var c = -1, d = a.length, e = Array(d); ++c < d;) e[c] = b(a[c], c, a);
						return e
					}

					function n(a)
					{
						return m(Array(a), function (a, b)
						{
							return b
						})
					}

					function o(a, b, c)
					{
						return l(a, function (a, d, e)
						{
							c = b(c, a, d, e)
						}), c
					}

					function p(a, b)
					{
						l(Q(a), function (c)
						{
							b(a[c], c)
						})
					}

					function q(a, b)
					{
						for (var c = 0; c < a.length; c++)
							if (a[c] === b) return c;
						return -1
					}

					function r(a)
					{
						var b, c, d = -1;
						return k(a) ? (b = a.length, function ()
						{
							return d++, b > d ? d : null
						}) : (c = Q(a), b = c.length, function ()
						{
							return d++, b > d ? c[d] : null
						})
					}

					function s(a, b)
					{
						return b = null == b ? a.length - 1 : +b,
							function ()
							{
								for (var c = Math.max(arguments.length - b, 0), d = Array(c), e = 0; c > e; e++) d[e] = arguments[e + b];
								switch (b)
								{
								case 0:
									return a.call(this, d);
								case 1:
									return a.call(this, arguments[0], d)
								}
							}
					}

					function t(a)
					{
						return function (b, c, d)
						{
							return a(b, d)
						}
					}

					function u(a)
					{
						return function (b, c, d)
						{
							d = j(d || e), b = b || [];
							var f = r(b);
							if (0 >= a) return d(null);
							var g = !1,
								h = 0,
								k = !1;
							! function l()
							{
								if (g && 0 >= h) return d(null);
								for (; a > h && !k;)
								{
									var e = f();
									if (null === e) return g = !0, void(0 >= h && d(null));
									h += 1, c(b[e], e, i(function (a)
									{
										h -= 1, a ? (d(a), k = !0) : l()
									}))
								}
							}()
						}
					}

					function v(a)
					{
						return function (b, c, d)
						{
							return a(L.eachOf, b, c, d)
						}
					}

					function w(a)
					{
						return function (b, c, d, e)
						{
							return a(u(c), b, d, e)
						}
					}

					function x(a)
					{
						return function (b, c, d)
						{
							return a(L.eachOfSeries, b, c, d)
						}
					}

					function y(a, b, c, d)
					{
						d = j(d || e), b = b || [];
						var f = k(b) ? [] :
						{};
						a(b, function (a, b, d)
						{
							c(a, function (a, c)
							{
								f[b] = c, d(a)
							})
						}, function (a)
						{
							d(a, f)
						})
					}

					function z(a, b, c, d)
					{
						var e = [];
						a(b, function (a, b, d)
						{
							c(a, function (c)
							{
								c && e.push(
								{
									index: b,
									value: a
								}), d()
							})
						}, function ()
						{
							d(m(e.sort(function (a, b)
							{
								return a.index - b.index
							}), function (a)
							{
								return a.value
							}))
						})
					}

					function A(a, b, c, d)
					{
						z(a, b, function (a, b)
						{
							c(a, function (a)
							{
								b(!a)
							})
						}, d)
					}

					function B(a, b, c)
					{
						return function (d, e, f, g)
						{
							function h()
							{
								g && g(c(!1, void 0))
							}

							function i(a, d, e)
							{
								return g ? void f(a, function (d)
								{
									g && b(d) && (g(c(!0, a)), g = f = !1), e()
								}) : e()
							}
							arguments.length > 3 ? a(d, e, i, h) : (g = f, f = e, a(d, i, h))
						}
					}

					function C(a, b)
					{
						return b
					}

					function D(a, b, c)
					{
						c = c || e;
						var d = k(b) ? [] :
						{};
						a(b, function (a, b, c)
						{
							a(s(function (a, e)
							{
								e.length <= 1 && (e = e[0]), d[b] = e, c(a)
							}))
						}, function (a)
						{
							c(a, d)
						})
					}

					function E(a, b, c, d)
					{
						var e = [];
						a(b, function (a, b, d)
						{
							c(a, function (a, b)
							{
								e = e.concat(b || []), d(a)
							})
						}, function (a)
						{
							d(a, e)
						})
					}

					function F(a, b, c)
					{
						function d(a, b, c, d)
						{
							if (null != d && "function" != typeof d) throw new Error("task callback must be a function");
							return a.started = !0, O(b) || (b = [b]), 0 === b.length && a.idle() ? L.setImmediate(function ()
							{
								a.drain()
							}) : (l(b, function (b)
							{
								var f = {
									data: b,
									callback: d || e
								};
								c ? a.tasks.unshift(f) : a.tasks.push(f), a.tasks.length === a.concurrency && a.saturated()
							}), void L.setImmediate(a.process))
						}

						function f(a, b)
						{
							return function ()
							{
								g -= 1;
								var c = !1,
									d = arguments;
								l(b, function (a)
								{
									l(h, function (b, d)
									{
										b !== a || c || (h.splice(d, 1), c = !0)
									}), a.callback.apply(a, d)
								}), a.tasks.length + g === 0 && a.drain(), a.process()
							}
						}
						if (null == b) b = 1;
						else if (0 === b) throw new Error("Concurrency must not be zero");
						var g = 0,
							h = [],
							j = {
								tasks: [],
								concurrency: b,
								payload: c,
								saturated: e,
								empty: e,
								drain: e,
								started: !1,
								paused: !1,
								push: function (a, b)
								{
									d(j, a, !1, b)
								},
								kill: function ()
								{
									j.drain = e, j.tasks = []
								},
								unshift: function (a, b)
								{
									d(j, a, !0, b)
								},
								process: function ()
								{
									for (; !j.paused && g < j.concurrency && j.tasks.length;)
									{
										var b = j.payload ? j.tasks.splice(0, j.payload) : j.tasks.splice(0, j.tasks.length),
											c = m(b, function (a)
											{
												return a.data
											});
										0 === j.tasks.length && j.empty(), g += 1, h.push(b[0]);
										var d = i(f(j, b));
										a(c, d)
									}
								},
								length: function ()
								{
									return j.tasks.length
								},
								running: function ()
								{
									return g
								},
								workersList: function ()
								{
									return h
								},
								idle: function ()
								{
									return j.tasks.length + g === 0
								},
								pause: function ()
								{
									j.paused = !0
								},
								resume: function ()
								{
									if (j.paused !== !1)
									{
										j.paused = !1;
										for (var a = Math.min(j.concurrency, j.tasks.length), b = 1; a >= b; b++) L.setImmediate(j.process)
									}
								}
							};
						return j
					}

					function G(a)
					{
						return s(function (b, c)
						{
							b.apply(null, c.concat([s(function (b, c)
							{
								"object" == typeof console && (b ? console.error && console.error(b) : console[a] && l(c, function (b)
								{
									console[a](b)
								}))
							})]))
						})
					}

					function H(a)
					{
						return function (b, c, d)
						{
							a(n(b), c, d)
						}
					}

					function I(a)
					{
						return s(function (b, c)
						{
							var d = s(function (c)
							{
								var d = this,
									e = c.pop();
								return a(b, function (a, b, e)
								{
									a.apply(d, c.concat([e]))
								}, e)
							});
							return c.length ? d.apply(this, c) : d
						})
					}

					function J(a)
					{
						return s(function (b)
						{
							var c = b.pop();
							b.push(function ()
							{
								var a = arguments;
								d ? L.setImmediate(function ()
								{
									c.apply(null, a)
								}) : c.apply(null, a)
							});
							var d = !0;
							a.apply(this, b), d = !1
						})
					}
					var K, L = {},
						M = "object" == typeof self && self.self === self && self || "object" == typeof d && d.global === d && d || this;
					null != M && (K = M.async), L.noConflict = function ()
					{
						return M.async = K, L
					};
					var N = Object.prototype.toString,
						O = Array.isArray || function (a)
						{
							return "[object Array]" === N.call(a)
						},
						P = function (a)
						{
							var b = typeof a;
							return "function" === b || "object" === b && !!a
						},
						Q = Object.keys || function (a)
						{
							var b = [];
							for (var c in a) a.hasOwnProperty(c) && b.push(c);
							return b
						},
						R = "function" == typeof setImmediate && setImmediate,
						S = R ? function (a)
						{
							R(a)
						} : function (a)
						{
							setTimeout(a, 0)
						};
					"object" == typeof b && "function" == typeof b.nextTick ? L.nextTick = b.nextTick : L.nextTick = S, L.setImmediate = R ? S : L.nextTick, L.forEach = L.each = function (a, b, c)
					{
						return L.eachOf(a, t(b), c)
					}, L.forEachSeries = L.eachSeries = function (a, b, c)
					{
						return L.eachOfSeries(a, t(b), c)
					}, L.forEachLimit = L.eachLimit = function (a, b, c, d)
					{
						return u(b)(a, t(c), d)
					}, L.forEachOf = L.eachOf = function (a, b, c)
					{
						function d(a)
						{
							h--, a ? c(a) : null === f && 0 >= h && c(null)
						}
						c = j(c || e), a = a || [];
						for (var f, g = r(a), h = 0; null != (f = g());) h += 1, b(a[f], f, i(d));
						0 === h && c(null)
					}, L.forEachOfSeries = L.eachOfSeries = function (a, b, c)
					{
						function d()
						{
							var e = !0;
							return null === g ? c(null) : (b(a[g], g, i(function (a)
							{
								if (a) c(a);
								else
								{
									if (g = f(), null === g) return c(null);
									e ? L.setImmediate(d) : d()
								}
							})), void(e = !1))
						}
						c = j(c || e), a = a || [];
						var f = r(a),
							g = f();
						d()
					}, L.forEachOfLimit = L.eachOfLimit = function (a, b, c, d)
					{
						u(b)(a, c, d)
					}, L.map = v(y), L.mapSeries = x(y), L.mapLimit = w(y), L.inject = L.foldl = L.reduce = function (a, b, c, d)
					{
						L.eachOfSeries(a, function (a, d, e)
						{
							c(b, a, function (a, c)
							{
								b = c, e(a)
							})
						}, function (a)
						{
							d(a, b)
						})
					}, L.foldr = L.reduceRight = function (a, b, c, d)
					{
						var e = m(a, f)
							.reverse();
						L.reduce(e, b, c, d)
					}, L.transform = function (a, b, c, d)
					{
						3 === arguments.length && (d = c, c = b, b = O(a) ? [] :
						{}), L.eachOf(a, function (a, d, e)
						{
							c(b, a, d, e)
						}, function (a)
						{
							d(a, b)
						})
					}, L.select = L.filter = v(z), L.selectLimit = L.filterLimit = w(z), L.selectSeries = L.filterSeries = x(z), L.reject = v(A), L.rejectLimit = w(A), L.rejectSeries = x(A), L.any = L.some = B(L.eachOf, g, f), L.someLimit = B(L.eachOfLimit, g, f), L.all = L.every = B(L.eachOf, h, h), L.everyLimit = B(L.eachOfLimit, h, h), L.detect = B(L.eachOf, f, C), L.detectSeries = B(L.eachOfSeries, f, C), L.detectLimit = B(L.eachOfLimit, f, C), L.sortBy = function (a, b, c)
					{
						function d(a, b)
						{
							var c = a.criteria,
								d = b.criteria;
							return d > c ? -1 : c > d ? 1 : 0
						}
						L.map(a, function (a, c)
						{
							b(a, function (b, d)
							{
								b ? c(b) : c(null,
								{
									value: a,
									criteria: d
								})
							})
						}, function (a, b)
						{
							return a ? c(a) : void c(null, m(b.sort(d), function (a)
							{
								return a.value
							}))
						})
					}, L.auto = function (a, b, c)
					{
						function d(a)
						{
							r.unshift(a)
						}

						function f(a)
						{
							var b = q(r, a);
							b >= 0 && r.splice(b, 1)
						}

						function g()
						{
							i--, l(r.slice(0), function (a)
							{
								a()
							})
						}
						"function" == typeof arguments[1] && (c = b, b = null), c = j(c || e);
						var h = Q(a),
							i = h.length;
						if (!i) return c(null);
						b || (b = i);
						var k = {},
							m = 0,
							n = !1,
							r = [];
						d(function ()
						{
							i || c(null, k)
						}), l(h, function (e)
						{
							function h()
							{
								return b > m && o(t, function (a, b)
								{
									return a && k.hasOwnProperty(b)
								}, !0) && !k.hasOwnProperty(e)
							}

							function i()
							{
								h() && (m++, f(i), l[l.length - 1](r, k))
							}
							if (!n)
							{
								for (var j, l = O(a[e]) ? a[e] : [a[e]], r = s(function (a, b)
									{
										if (m--, b.length <= 1 && (b = b[0]), a)
										{
											var d = {};
											p(k, function (a, b)
											{
												d[b] = a
											}), d[e] = b, n = !0, c(a, d)
										}
										else k[e] = b, L.setImmediate(g)
									}), t = l.slice(0, l.length - 1), u = t.length; u--;)
								{
									if (!(j = a[t[u]])) throw new Error("Has nonexistent dependency in " + t.join(", "));
									if (O(j) && q(j, e) >= 0) throw new Error("Has cyclic dependencies")
								}
								h() ? (m++, l[l.length - 1](r, k)) : d(i)
							}
						})
					}, L.retry = function (a, b, c)
					{
						function d(a, b)
						{
							if ("number" == typeof b) a.times = parseInt(b, 10) || f;
							else
							{
								if ("object" != typeof b) throw new Error("Unsupported argument type for 'times': " + typeof b);
								a.times = parseInt(b.times, 10) || f, a.interval = parseInt(b.interval, 10) || g
							}
						}

						function e(a, b)
						{
							function c(a, c)
							{
								return function (d)
								{
									a(function (a, b)
									{
										d(!a || c,
										{
											err: a,
											result: b
										})
									}, b)
								}
							}

							function d(a)
							{
								return function (b)
								{
									setTimeout(function ()
									{
										b(null)
									}, a)
								}
							}
							for (; i.times;)
							{
								var e = !(i.times -= 1);
								h.push(c(i.task, e)), !e && i.interval > 0 && h.push(d(i.interval))
							}
							L.series(h, function (b, c)
							{
								c = c[c.length - 1], (a || i.callback)(c.err, c.result)
							})
						}
						var f = 5,
							g = 0,
							h = [],
							i = {
								times: f,
								interval: g
							},
							j = arguments.length;
						if (1 > j || j > 3) throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
						return 2 >= j && "function" == typeof a && (c = b, b = a), "function" != typeof a && d(i, a), i.callback = c, i.task = b, i.callback ? e() : e
					}, L.waterfall = function (a, b)
					{
						function c(a)
						{
							return s(function (d, e)
							{
								if (d) b.apply(null, [d].concat(e));
								else
								{
									var f = a.next();
									f ? e.push(c(f)) : e.push(b), J(a)
										.apply(null, e)
								}
							})
						}
						if (b = j(b || e), !O(a))
						{
							var d = new Error("First argument to waterfall must be an array of functions");
							return b(d)
						}
						return a.length ? void c(L.iterator(a))() : b()
					}, L.parallel = function (a, b)
					{
						D(L.eachOf, a, b)
					}, L.parallelLimit = function (a, b, c)
					{
						D(u(b), a, c)
					}, L.series = function (a, b)
					{
						D(L.eachOfSeries, a, b)
					}, L.iterator = function (a)
					{
						function b(c)
						{
							function d()
							{
								return a.length && a[c].apply(null, arguments), d.next()
							}
							return d.next = function ()
							{
								return c < a.length - 1 ? b(c + 1) : null
							}, d
						}
						return b(0)
					}, L.apply = s(function (a, b)
					{
						return s(function (c)
						{
							return a.apply(null, b.concat(c))
						})
					}), L.concat = v(E), L.concatSeries = x(E), L.whilst = function (a, b, c)
					{
						if (c = c || e, a())
						{
							var d = s(function (e, f)
							{
								e ? c(e) : a.apply(this, f) ? b(d) : c.apply(null, [null].concat(f))
							});
							b(d)
						}
						else c(null)
					}, L.doWhilst = function (a, b, c)
					{
						var d = 0;
						return L.whilst(function ()
						{
							return ++d <= 1 || b.apply(this, arguments)
						}, a, c)
					}, L.until = function (a, b, c)
					{
						return L.whilst(function ()
						{
							return !a.apply(this, arguments)
						}, b, c)
					}, L.doUntil = function (a, b, c)
					{
						return L.doWhilst(a, function ()
						{
							return !b.apply(this, arguments)
						}, c)
					}, L.during = function (a, b, c)
					{
						c = c || e;
						var d = s(function (b, d)
							{
								b ? c(b) : (d.push(f), a.apply(this, d))
							}),
							f = function (a, e)
							{
								a ? c(a) : e ? b(d) : c(null)
							};
						a(f)
					}, L.doDuring = function (a, b, c)
					{
						var d = 0;
						L.during(function (a)
						{
							d++ < 1 ? a(null, !0) : b.apply(this, arguments)
						}, a, c)
					}, L.queue = function (a, b)
					{
						var c = F(function (b, c)
						{
							a(b[0], c)
						}, b, 1);
						return c
					}, L.priorityQueue = function (a, b)
					{
						function c(a, b)
						{
							return a.priority - b.priority
						}

						function d(a, b, c)
						{
							for (var d = -1, e = a.length - 1; e > d;)
							{
								var f = d + (e - d + 1 >>> 1);
								c(b, a[f]) >= 0 ? d = f : e = f - 1
							}
							return d
						}

						function f(a, b, f, g)
						{
							if (null != g && "function" != typeof g) throw new Error("task callback must be a function");
							return a.started = !0, O(b) || (b = [b]), 0 === b.length ? L.setImmediate(function ()
							{
								a.drain()
							}) : void l(b, function (b)
							{
								var h = {
									data: b,
									priority: f,
									callback: "function" == typeof g ? g : e
								};
								a.tasks.splice(d(a.tasks, h, c) + 1, 0, h), a.tasks.length === a.concurrency && a.saturated(), L.setImmediate(a.process)
							})
						}
						var g = L.queue(a, b);
						return g.push = function (a, b, c)
						{
							f(g, a, b, c)
						}, delete g.unshift, g
					}, L.cargo = function (a, b)
					{
						return F(a, 1, b)
					}, L.log = G("log"), L.dir = G("dir"), L.memoize = function (a, b)
					{
						var c = {},
							d = {},
							e = Object.prototype.hasOwnProperty;
						b = b || f;
						var g = s(function (f)
						{
							var g = f.pop(),
								h = b.apply(null, f);
							e.call(c, h) ? L.setImmediate(function ()
							{
								g.apply(null, c[h])
							}) : e.call(d, h) ? d[h].push(g) : (d[h] = [g], a.apply(null, f.concat([s(function (a)
							{
								c[h] = a;
								var b = d[h];
								delete d[h];
								for (var e = 0, f = b.length; f > e; e++) b[e].apply(null, a)
							})])))
						});
						return g.memo = c, g.unmemoized = a, g
					}, L.unmemoize = function (a)
					{
						return function ()
						{
							return (a.unmemoized || a)
								.apply(null, arguments)
						}
					}, L.times = H(L.map), L.timesSeries = H(L.mapSeries), L.timesLimit = function (a, b, c, d)
					{
						return L.mapLimit(n(a), b, c, d)
					}, L.seq = function ()
					{
						var a = arguments;
						return s(function (b)
						{
							var c = this,
								d = b[b.length - 1];
							"function" == typeof d ? b.pop() : d = e, L.reduce(a, b, function (a, b, d)
							{
								b.apply(c, a.concat([s(function (a, b)
								{
									d(a, b)
								})]))
							}, function (a, b)
							{
								d.apply(c, [a].concat(b))
							})
						})
					}, L.compose = function ()
					{
						return L.seq.apply(null, Array.prototype.reverse.call(arguments))
					}, L.applyEach = I(L.eachOf), L.applyEachSeries = I(L.eachOfSeries), L.forever = function (a, b)
					{
						function c(a)
						{
							return a ? d(a) : void f(c)
						}
						var d = i(b || e),
							f = J(a);
						c()
					}, L.ensureAsync = J, L.constant = s(function (a)
					{
						var b = [null].concat(a);
						return function (a)
						{
							return a.apply(this, b)
						}
					}), L.wrapSync = L.asyncify = function (a)
					{
						return s(function (b)
						{
							var c, d = b.pop();
							try
							{
								c = a.apply(this, b)
							}
							catch (e)
							{
								return d(e)
							}
							P(c) && "function" == typeof c.then ? c.then(function (a)
							{
								d(null, a)
							})["catch"](function (a)
							{
								d(a.message ? a : new Error(a))
							}) : d(null, c)
						})
					}, "object" == typeof c && c.exports ? c.exports = L : "function" == typeof a && a.amd ? a([], function ()
					{
						return L
					}) : M.async = L
				}()
			})
			.call(this, b("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window :
			{})
		},
		{
			_process: 3
		}],
		2: [function (a, b, c)
		{
			(function (a)
			{
				function b(a, b)
				{
					for (var c = 0, d = a.length - 1; d >= 0; d--)
					{
						var e = a[d];
						"." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
					}
					if (b)
						for (; c--; c) a.unshift("..");
					return a
				}

				function d(a, b)
				{
					if (a.filter) return a.filter(b);
					for (var c = [], d = 0; d < a.length; d++) b(a[d], d, a) && c.push(a[d]);
					return c
				}
				var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
					f = function (a)
					{
						return e.exec(a)
							.slice(1)
					};
				c.resolve = function ()
				{
					for (var c = "", e = !1, f = arguments.length - 1; f >= -1 && !e; f--)
					{
						var g = f >= 0 ? arguments[f] : a.cwd();
						if ("string" != typeof g) throw new TypeError("Arguments to path.resolve must be strings");
						g && (c = g + "/" + c, e = "/" === g.charAt(0))
					}
					return c = b(d(c.split("/"), function (a)
						{
							return !!a
						}), !e)
						.join("/"), (e ? "/" : "") + c || "."
				}, c.normalize = function (a)
				{
					var e = c.isAbsolute(a),
						f = "/" === g(a, -1);
					return a = b(d(a.split("/"), function (a)
						{
							return !!a
						}), !e)
						.join("/"), a || e || (a = "."), a && f && (a += "/"), (e ? "/" : "") + a
				}, c.isAbsolute = function (a)
				{
					return "/" === a.charAt(0)
				}, c.join = function ()
				{
					var a = Array.prototype.slice.call(arguments, 0);
					return c.normalize(d(a, function (a, b)
						{
							if ("string" != typeof a) throw new TypeError("Arguments to path.join must be strings");
							return a
						})
						.join("/"))
				}, c.relative = function (a, b)
				{
					function d(a)
					{
						for (var b = 0; b < a.length && "" === a[b]; b++);
						for (var c = a.length - 1; c >= 0 && "" === a[c]; c--);
						return b > c ? [] : a.slice(b, c - b + 1)
					}
					a = c.resolve(a)
						.substr(1), b = c.resolve(b)
						.substr(1);
					for (var e = d(a.split("/")), f = d(b.split("/")), g = Math.min(e.length, f.length), h = g, i = 0; g > i; i++)
						if (e[i] !== f[i])
						{
							h = i;
							break
						}
					for (var j = [], i = h; i < e.length; i++) j.push("..");
					return j = j.concat(f.slice(h)), j.join("/")
				}, c.sep = "/", c.delimiter = ":", c.dirname = function (a)
				{
					var b = f(a),
						c = b[0],
						d = b[1];
					return c || d ? (d && (d = d.substr(0, d.length - 1)), c + d) : "."
				}, c.basename = function (a, b)
				{
					var c = f(a)[2];
					return b && c.substr(-1 * b.length) === b && (c = c.substr(0, c.length - b.length)), c
				}, c.extname = function (a)
				{
					return f(a)[3]
				};
				var g = "b" === "ab".substr(-1) ? function (a, b, c)
				{
					return a.substr(b, c)
				} : function (a, b, c)
				{
					return 0 > b && (b = a.length + b), a.substr(b, c)
				}
			})
			.call(this, a("_process"))
		},
		{
			_process: 3
		}],
		3: [function (a, b, c)
		{
			function d()
			{
				k = !1, h.length ? j = h.concat(j) : l = -1, j.length && e()
			}

			function e()
			{
				if (!k)
				{
					var a = setTimeout(d);
					k = !0;
					for (var b = j.length; b;)
					{
						for (h = j, j = []; ++l < b;) h && h[l].run();
						l = -1, b = j.length
					}
					h = null, k = !1, clearTimeout(a)
				}
			}

			function f(a, b)
			{
				this.fun = a, this.array = b
			}

			function g()
			{}
			var h, i = b.exports = {},
				j = [],
				k = !1,
				l = -1;
			i.nextTick = function (a)
			{
				var b = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
				j.push(new f(a, b)), 1 !== j.length || k || setTimeout(e, 0)
			}, f.prototype.run = function ()
			{
				this.fun.apply(null, this.array)
			}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.binding = function (a)
			{
				throw new Error("process.binding is not supported")
			}, i.cwd = function ()
			{
				return "/"
			}, i.chdir = function (a)
			{
				throw new Error("process.chdir is not supported")
			}, i.umask = function ()
			{
				return 0
			}
		},
		{}],
		4: [function (b, c, d)
		{
			(function (b)
			{
				! function (e)
				{
					function f(a)
					{
						throw new RangeError(I[a])
					}

					function g(a, b)
					{
						for (var c = a.length, d = []; c--;) d[c] = b(a[c]);
						return d
					}

					function h(a, b)
					{
						var c = a.split("@"),
							d = "";
						c.length > 1 && (d = c[0] + "@", a = c[1]), a = a.replace(H, ".");
						var e = a.split("."),
							f = g(e, b)
							.join(".");
						return d + f
					}

					function i(a)
					{
						for (var b, c, d = [], e = 0, f = a.length; f > e;) b = a.charCodeAt(e++), b >= 55296 && 56319 >= b && f > e ? (c = a.charCodeAt(e++), 56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b), e--)) : d.push(b);
						return d
					}

					function j(a)
					{
						return g(a, function (a)
							{
								var b = "";
								return a > 65535 && (a -= 65536, b += L(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), b += L(a)
							})
							.join("")
					}

					function k(a)
					{
						return 10 > a - 48 ? a - 22 : 26 > a - 65 ? a - 65 : 26 > a - 97 ? a - 97 : x
					}

					function l(a, b)
					{
						return a + 22 + 75 * (26 > a) - ((0 != b) << 5)
					}

					function m(a, b, c)
					{
						var d = 0;
						for (a = c ? K(a / B) : a >> 1, a += K(a / b); a > J * z >> 1; d += x) a = K(a / J);
						return K(d + (J + 1) * a / (a + A))
					}

					function n(a)
					{
						var b, c, d, e, g, h, i, l, n, o, p = [],
							q = a.length,
							r = 0,
							s = D,
							t = C;
						for (c = a.lastIndexOf(E), 0 > c && (c = 0), d = 0; c > d; ++d) a.charCodeAt(d) >= 128 && f("not-basic"), p.push(a.charCodeAt(d));
						for (e = c > 0 ? c + 1 : 0; q > e;)
						{
							for (g = r, h = 1, i = x; e >= q && f("invalid-input"), l = k(a.charCodeAt(e++)), (l >= x || l > K((w - r) / h)) && f("overflow"), r += l * h, n = t >= i ? y : i >= t + z ? z : i - t, !(n > l); i += x) o = x - n, h > K(w / o) && f("overflow"), h *= o;
							b = p.length + 1, t = m(r - g, b, 0 == g), K(r / b) > w - s && f("overflow"), s += K(r / b), r %= b, p.splice(r++, 0, s)
						}
						return j(p)
					}

					function o(a)
					{
						var b, c, d, e, g, h, j, k, n, o, p, q, r, s, t, u = [];
						for (a = i(a), q = a.length, b = D, c = 0, g = C, h = 0; q > h; ++h) p = a[h], 128 > p && u.push(L(p));
						for (d = e = u.length, e && u.push(E); q > d;)
						{
							for (j = w, h = 0; q > h; ++h) p = a[h], p >= b && j > p && (j = p);
							for (r = d + 1, j - b > K((w - c) / r) && f("overflow"), c += (j - b) * r, b = j, h = 0; q > h; ++h)
								if (p = a[h], b > p && ++c > w && f("overflow"), p == b)
								{
									for (k = c, n = x; o = g >= n ? y : n >= g + z ? z : n - g, !(o > k); n += x) t = k - o, s = x - o, u.push(L(l(o + t % s, 0))), k = K(t / s);
									u.push(L(l(k, 0))), g = m(c, r, d == e), c = 0, ++d
								}++c, ++b
						}
						return u.join("")
					}

					function p(a)
					{
						return h(a, function (a)
						{
							return F.test(a) ? n(a.slice(4)
								.toLowerCase()) : a
						})
					}

					function q(a)
					{
						return h(a, function (a)
						{
							return G.test(a) ? "xn--" + o(a) : a
						})
					}
					var r = "object" == typeof d && d && !d.nodeType && d,
						s = "object" == typeof c && c && !c.nodeType && c,
						t = "object" == typeof b && b;
					(t.global === t || t.window === t || t.self === t) && (e = t);
					var u, v, w = 2147483647,
						x = 36,
						y = 1,
						z = 26,
						A = 38,
						B = 700,
						C = 72,
						D = 128,
						E = "-",
						F = /^xn--/,
						G = /[^\x20-\x7E]/,
						H = /[\x2E\u3002\uFF0E\uFF61]/g,
						I = {
							overflow: "Overflow: input needs wider integers to process",
							"not-basic": "Illegal input >= 0x80 (not a basic code point)",
							"invalid-input": "Invalid input"
						},
						J = x - y,
						K = Math.floor,
						L = String.fromCharCode;
					if (u = {
							version: "1.3.2",
							ucs2:
							{
								decode: i,
								encode: j
							},
							decode: n,
							encode: o,
							toASCII: q,
							toUnicode: p
						}, "function" == typeof a && "object" == typeof a.amd && a.amd) a("punycode", function ()
					{
						return u
					});
					else if (r && s)
						if (c.exports == r) s.exports = u;
						else
							for (v in u) u.hasOwnProperty(v) && (r[v] = u[v]);
					else e.punycode = u
				}(this)
			})
			.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window :
			{})
		},
		{}],
		5: [function (a, b, c)
		{
			"use strict";

			function d(a, b)
			{
				return Object.prototype.hasOwnProperty.call(a, b)
			}
			b.exports = function (a, b, c, f)
			{
				b = b || "&", c = c || "=";
				var g = {};
				if ("string" != typeof a || 0 === a.length) return g;
				var h = /\+/g;
				a = a.split(b);
				var i = 1e3;
				f && "number" == typeof f.maxKeys && (i = f.maxKeys);
				var j = a.length;
				i > 0 && j > i && (j = i);
				for (var k = 0; j > k; ++k)
				{
					var l, m, n, o, p = a[k].replace(h, "%20"),
						q = p.indexOf(c);
					q >= 0 ? (l = p.substr(0, q), m = p.substr(q + 1)) : (l = p, m = ""), n = decodeURIComponent(l), o = decodeURIComponent(m), d(g, n) ? e(g[n]) ? g[n].push(o) : g[n] = [g[n], o] : g[n] = o
				}
				return g
			};
			var e = Array.isArray || function (a)
			{
				return "[object Array]" === Object.prototype.toString.call(a)
			}
		},
		{}],
		6: [function (a, b, c)
		{
			"use strict";

			function d(a, b)
			{
				if (a.map) return a.map(b);
				for (var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
				return c
			}
			var e = function (a)
			{
				switch (typeof a)
				{
				case "string":
					return a;
				case "boolean":
					return a ? "true" : "false";
				case "number":
					return isFinite(a) ? a : "";
				default:
					return ""
				}
			};
			b.exports = function (a, b, c, h)
			{
				return b = b || "&", c = c || "=", null === a && (a = void 0), "object" == typeof a ? d(g(a), function (g)
					{
						var h = encodeURIComponent(e(g)) + c;
						return f(a[g]) ? d(a[g], function (a)
							{
								return h + encodeURIComponent(e(a))
							})
							.join(b) : h + encodeURIComponent(e(a[g]))
					})
					.join(b) : h ? encodeURIComponent(e(h)) + c + encodeURIComponent(e(a)) : ""
			};
			var f = Array.isArray || function (a)
				{
					return "[object Array]" === Object.prototype.toString.call(a)
				},
				g = Object.keys || function (a)
				{
					var b = [];
					for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
					return b
				}
		},
		{}],
		7: [function (a, b, c)
		{
			"use strict";
			c.decode = c.parse = a("./decode"), c.encode = c.stringify = a("./encode")
		},
		{
			"./decode": 5,
			"./encode": 6
		}],
		8: [function (a, b, c)
		{
			function d()
			{
				this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
			}

			function e(a, b, c)
			{
				if (a && j(a) && a instanceof d) return a;
				var e = new d;
				return e.parse(a, b, c), e
			}

			function f(a)
			{
				return i(a) && (a = e(a)), a instanceof d ? a.format() : d.prototype.format.call(a)
			}

			function g(a, b)
			{
				return e(a, !1, !0)
					.resolve(b)
			}

			function h(a, b)
			{
				return a ? e(a, !1, !0)
					.resolveObject(b) : b
			}

			function i(a)
			{
				return "string" == typeof a
			}

			function j(a)
			{
				return "object" == typeof a && null !== a
			}

			function k(a)
			{
				return null === a
			}

			function l(a)
			{
				return null == a
			}
			var m = a("punycode");
			c.parse = e, c.resolve = g, c.resolveObject = h, c.format = f, c.Url = d;
			var n = /^([a-z0-9.+-]+:)/i,
				o = /:[0-9]*$/,
				p = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
				q = ["{", "}", "|", "\\", "^", "`"].concat(p),
				r = ["'"].concat(q),
				s = ["%", "/", "?", ";", "#"].concat(r),
				t = ["/", "?", "#"],
				u = 255,
				v = /^[a-z0-9A-Z_-]{0,63}$/,
				w = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
				x = {
					javascript: !0,
					"javascript:": !0
				},
				y = {
					javascript: !0,
					"javascript:": !0
				},
				z = {
					http: !0,
					https: !0,
					ftp: !0,
					gopher: !0,
					file: !0,
					"http:": !0,
					"https:": !0,
					"ftp:": !0,
					"gopher:": !0,
					"file:": !0
				},
				A = a("querystring");
			d.prototype.parse = function (a, b, c)
			{
				if (!i(a)) throw new TypeError("Parameter 'url' must be a string, not " + typeof a);
				var d = a;
				d = d.trim();
				var e = n.exec(d);
				if (e)
				{
					e = e[0];
					var f = e.toLowerCase();
					this.protocol = f, d = d.substr(e.length)
				}
				if (c || e || d.match(/^\/\/[^@\/]+@[^@\/]+/))
				{
					var g = "//" === d.substr(0, 2);
					!g || e && y[e] || (d = d.substr(2), this.slashes = !0)
				}
				if (!y[e] && (g || e && !z[e]))
				{
					for (var h = -1, j = 0; j < t.length; j++)
					{
						var k = d.indexOf(t[j]); - 1 !== k && (-1 === h || h > k) && (h = k)
					}
					var l, o;
					o = -1 === h ? d.lastIndexOf("@") : d.lastIndexOf("@", h), -1 !== o && (l = d.slice(0, o), d = d.slice(o + 1), this.auth = decodeURIComponent(l)), h = -1;
					for (var j = 0; j < s.length; j++)
					{
						var k = d.indexOf(s[j]); - 1 !== k && (-1 === h || h > k) && (h = k)
					} - 1 === h && (h = d.length), this.host = d.slice(0, h), d = d.slice(h), this.parseHost(), this.hostname = this.hostname || "";
					var p = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
					if (!p)
						for (var q = this.hostname.split(/\./), j = 0, B = q.length; B > j; j++)
						{
							var C = q[j];
							if (C && !C.match(v))
							{
								for (var D = "", E = 0, F = C.length; F > E; E++) D += C.charCodeAt(E) > 127 ? "x" : C[E];
								if (!D.match(v))
								{
									var G = q.slice(0, j),
										H = q.slice(j + 1),
										I = C.match(w);
									I && (G.push(I[1]), H.unshift(I[2])), H.length && (d = "/" + H.join(".") + d), this.hostname = G.join(".");
									break
								}
							}
						}
					if (this.hostname.length > u ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !p)
					{
						for (var J = this.hostname.split("."), K = [], j = 0; j < J.length; ++j)
						{
							var L = J[j];
							K.push(L.match(/[^A-Za-z0-9_-]/) ? "xn--" + m.encode(L) : L)
						}
						this.hostname = K.join(".")
					}
					var M = this.port ? ":" + this.port : "",
						N = this.hostname || "";
					this.host = N + M, this.href += this.host, p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== d[0] && (d = "/" + d))
				}
				if (!x[f])
					for (var j = 0, B = r.length; B > j; j++)
					{
						var O = r[j],
							P = encodeURIComponent(O);
						P === O && (P = escape(O)), d = d.split(O)
							.join(P)
					}
				var Q = d.indexOf("#"); - 1 !== Q && (this.hash = d.substr(Q), d = d.slice(0, Q));
				var R = d.indexOf("?");
				if (-1 !== R ? (this.search = d.substr(R), this.query = d.substr(R + 1), b && (this.query = A.parse(this.query)), d = d.slice(0, R)) : b && (this.search = "", this.query = {}), d && (this.pathname = d), z[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search)
				{
					var M = this.pathname || "",
						L = this.search || "";
					this.path = M + L
				}
				return this.href = this.format(), this
			}, d.prototype.format = function ()
			{
				var a = this.auth || "";
				a && (a = encodeURIComponent(a), a = a.replace(/%3A/i, ":"), a += "@");
				var b = this.protocol || "",
					c = this.pathname || "",
					d = this.hash || "",
					e = !1,
					f = "";
				this.host ? e = a + this.host : this.hostname && (e = a + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (e += ":" + this.port)), this.query && j(this.query) && Object.keys(this.query)
					.length && (f = A.stringify(this.query));
				var g = this.search || f && "?" + f || "";
				return b && ":" !== b.substr(-1) && (b += ":"), this.slashes || (!b || z[b]) && e !== !1 ? (e = "//" + (e || ""), c && "/" !== c.charAt(0) && (c = "/" + c)) : e || (e = ""), d && "#" !== d.charAt(0) && (d = "#" + d), g && "?" !== g.charAt(0) && (g = "?" + g), c = c.replace(/[?#]/g, function (a)
				{
					return encodeURIComponent(a)
				}), g = g.replace("#", "%23"), b + e + c + g + d
			}, d.prototype.resolve = function (a)
			{
				return this.resolveObject(e(a, !1, !0))
					.format()
			}, d.prototype.resolveObject = function (a)
			{
				if (i(a))
				{
					var b = new d;
					b.parse(a, !1, !0), a = b
				}
				var c = new d;
				if (Object.keys(this)
					.forEach(function (a)
					{
						c[a] = this[a]
					}, this), c.hash = a.hash, "" === a.href) return c.href = c.format(), c;
				if (a.slashes && !a.protocol) return Object.keys(a)
					.forEach(function (b)
					{
						"protocol" !== b && (c[b] = a[b])
					}), z[c.protocol] && c.hostname && !c.pathname && (c.path = c.pathname = "/"), c.href = c.format(), c;
				if (a.protocol && a.protocol !== c.protocol)
				{
					if (!z[a.protocol]) return Object.keys(a)
						.forEach(function (b)
						{
							c[b] = a[b]
						}), c.href = c.format(), c;
					if (c.protocol = a.protocol, a.host || y[a.protocol]) c.pathname = a.pathname;
					else
					{
						for (var e = (a.pathname || "")
								.split("/"); e.length && !(a.host = e.shift()););
						a.host || (a.host = ""), a.hostname || (a.hostname = ""), "" !== e[0] && e.unshift(""), e.length < 2 && e.unshift(""), c.pathname = e.join("/")
					}
					if (c.search = a.search, c.query = a.query, c.host = a.host || "", c.auth = a.auth, c.hostname = a.hostname || a.host, c.port = a.port, c.pathname || c.search)
					{
						var f = c.pathname || "",
							g = c.search || "";
						c.path = f + g
					}
					return c.slashes = c.slashes || a.slashes, c.href = c.format(), c
				}
				var h = c.pathname && "/" === c.pathname.charAt(0),
					j = a.host || a.pathname && "/" === a.pathname.charAt(0),
					m = j || h || c.host && a.pathname,
					n = m,
					o = c.pathname && c.pathname.split("/") || [],
					e = a.pathname && a.pathname.split("/") || [],
					p = c.protocol && !z[c.protocol];
				if (p && (c.hostname = "", c.port = null, c.host && ("" === o[0] ? o[0] = c.host : o.unshift(c.host)), c.host = "", a.protocol && (a.hostname = null, a.port = null, a.host && ("" === e[0] ? e[0] = a.host : e.unshift(a.host)), a.host = null), m = m && ("" === e[0] || "" === o[0])), j) c.host = a.host || "" === a.host ? a.host : c.host, c.hostname = a.hostname || "" === a.hostname ? a.hostname : c.hostname, c.search = a.search, c.query = a.query, o = e;
				else if (e.length) o || (o = []), o.pop(), o = o.concat(e), c.search = a.search, c.query = a.query;
				else if (!l(a.search))
				{
					if (p)
					{
						c.hostname = c.host = o.shift();
						var q = c.host && c.host.indexOf("@") > 0 ? c.host.split("@") : !1;
						q && (c.auth = q.shift(), c.host = c.hostname = q.shift())
					}
					return c.search = a.search, c.query = a.query, k(c.pathname) && k(c.search) || (c.path = (c.pathname ? c.pathname : "") + (c.search ? c.search : "")), c.href = c.format(), c
				}
				if (!o.length) return c.pathname = null, c.search ? c.path = "/" + c.search : c.path = null, c.href = c.format(), c;
				for (var r = o.slice(-1)[0], s = (c.host || a.host) && ("." === r || ".." === r) || "" === r, t = 0, u = o.length; u >= 0; u--) r = o[u], "." == r ? o.splice(u, 1) : ".." === r ? (o.splice(u, 1), t++) : t && (o.splice(u, 1), t--);
				if (!m && !n)
					for (; t--; t) o.unshift("..");
				!m || "" === o[0] || o[0] && "/" === o[0].charAt(0) || o.unshift(""), s && "/" !== o.join("/")
					.substr(-1) && o.push("");
				var v = "" === o[0] || o[0] && "/" === o[0].charAt(0);
				if (p)
				{
					c.hostname = c.host = v ? "" : o.length ? o.shift() : "";
					var q = c.host && c.host.indexOf("@") > 0 ? c.host.split("@") : !1;
					q && (c.auth = q.shift(), c.host = c.hostname = q.shift())
				}
				return m = m || c.host && o.length, m && !v && o.unshift(""), o.length ? c.pathname = o.join("/") : (c.pathname = null, c.path = null), k(c.pathname) && k(c.search) || (c.path = (c.pathname ? c.pathname : "") + (c.search ? c.search : "")), c.auth = a.auth || c.auth, c.slashes = c.slashes || a.slashes, c.href = c.format(), c
			}, d.prototype.parseHost = function ()
			{
				var a = this.host,
					b = o.exec(a);
				b && (b = b[0], ":" !== b && (this.port = b.substr(1)), a = a.substr(0, a.length - b.length)), a && (this.hostname = a)
			}
		},
		{
			punycode: 4,
			querystring: 7
		}],
		9: [function (a, b, c)
		{
			"use strict";

			function d(a, b, c)
			{
				c = c || 2;
				var d = b && b.length,
					f = d ? b[0] * c : a.length,
					h = e(a, 0, f, c, !0),
					i = [];
				if (!h) return i;
				var j, k, m, n, o, p, q;
				if (d && (h = l(a, b, h, c)), a.length > 80 * c)
				{
					j = m = a[0], k = n = a[1];
					for (var r = c; f > r; r += c) o = a[r], p = a[r + 1], j > o && (j = o), k > p && (k = p), o > m && (m = o), p > n && (n = p);
					q = Math.max(m - j, n - k)
				}
				return g(h, i, c, j, k, q), i
			}

			function e(a, b, c, d, e)
			{
				var f, g, h, i = 0;
				for (f = b, g = c - d; c > f; f += d) i += (a[g] - a[f]) * (a[f + 1] + a[g + 1]), g = f;
				if (e === i > 0)
					for (f = b; c > f; f += d) h = C(f, a[f], a[f + 1], h);
				else
					for (f = c - d; f >= b; f -= d) h = C(f, a[f], a[f + 1], h);
				return h
			}

			function f(a, b)
			{
				if (!a) return a;
				b || (b = a);
				var c, d = a;
				do
					if (c = !1, d.steiner || !w(d, d.next) && 0 !== v(d.prev, d, d.next)) d = d.next;
					else
					{
						if (D(d), d = b = d.prev, d === d.next) return null;
						c = !0
					}
				while (c || d !== b);
				return b
			}

			function g(a, b, c, d, e, l, m)
			{
				if (a)
				{
					!m && l && p(a, d, e, l);
					for (var n, o, q = a; a.prev !== a.next;)
						if (n = a.prev, o = a.next, l ? i(a, d, e, l) : h(a)) b.push(n.i / c), b.push(a.i / c), b.push(o.i / c), D(a), a = o.next, q = o.next;
						else if (a = o, a === q)
					{
						m ? 1 === m ? (a = j(a, b, c), g(a, b, c, d, e, l, 2)) : 2 === m && k(a, b, c, d, e, l) : g(f(a), b, c, d, e, l, 1);
						break
					}
				}
			}

			function h(a)
			{
				var b = a.prev,
					c = a,
					d = a.next;
				if (v(b, c, d) >= 0) return !1;
				for (var e = a.next.next; e !== a.prev;)
				{
					if (t(b.x, b.y, c.x, c.y, d.x, d.y, e.x, e.y) && v(e.prev, e, e.next) >= 0) return !1;
					e = e.next
				}
				return !0
			}

			function i(a, b, c, d)
			{
				var e = a.prev,
					f = a,
					g = a.next;
				if (v(e, f, g) >= 0) return !1;
				for (var h = e.x < f.x ? e.x < g.x ? e.x : g.x : f.x < g.x ? f.x : g.x, i = e.y < f.y ? e.y < g.y ? e.y : g.y : f.y < g.y ? f.y : g.y, j = e.x > f.x ? e.x > g.x ? e.x : g.x : f.x > g.x ? f.x : g.x, k = e.y > f.y ? e.y > g.y ? e.y : g.y : f.y > g.y ? f.y : g.y, l = r(h, i, b, c, d), m = r(j, k, b, c, d), n = a.nextZ; n && n.z <= m;)
				{
					if (n !== a.prev && n !== a.next && t(e.x, e.y, f.x, f.y, g.x, g.y, n.x, n.y) && v(n.prev, n, n.next) >= 0) return !1;
					n = n.nextZ
				}
				for (n = a.prevZ; n && n.z >= l;)
				{
					if (n !== a.prev && n !== a.next && t(e.x, e.y, f.x, f.y, g.x, g.y, n.x, n.y) && v(n.prev, n, n.next) >= 0) return !1;
					n = n.prevZ
				}
				return !0
			}

			function j(a, b, c)
			{
				var d = a;
				do {
					var e = d.prev,
						f = d.next.next;
					x(e, d, d.next, f) && z(e, f) && z(f, e) && (b.push(e.i / c), b.push(d.i / c), b.push(f.i / c), D(d), D(d.next), d = a = f), d = d.next
				} while (d !== a);
				return d
			}

			function k(a, b, c, d, e, h)
			{
				var i = a;
				do {
					for (var j = i.next.next; j !== i.prev;)
					{
						if (i.i !== j.i && u(i, j))
						{
							var k = B(i, j);
							return i = f(i, i.next), k = f(k, k.next), g(i, b, c, d, e, h), void g(k, b, c, d, e, h)
						}
						j = j.next
					}
					i = i.next
				} while (i !== a)
			}

			function l(a, b, c, d)
			{
				var g, h, i, j, k, l = [];
				for (g = 0, h = b.length; h > g; g++) i = b[g] * d, j = h - 1 > g ? b[g + 1] * d : a.length, k = e(a, i, j, d, !1), k === k.next && (k.steiner = !0), l.push(s(k));
				for (l.sort(m), g = 0; g < l.length; g++) n(l[g], c), c = f(c, c.next);
				return c
			}

			function m(a, b)
			{
				return a.x - b.x
			}

			function n(a, b)
			{
				if (b = o(a, b))
				{
					var c = B(b, a);
					f(c, c.next)
				}
			}

			function o(a, b)
			{
				var c, d = b,
					e = a.x,
					f = a.y,
					g = -(1 / 0);
				do {
					if (f <= d.y && f >= d.next.y)
					{
						var h = d.x + (f - d.y) * (d.next.x - d.x) / (d.next.y - d.y);
						e >= h && h > g && (g = h, c = d.x < d.next.x ? d : d.next)
					}
					d = d.next
				} while (d !== b);
				if (!c) return null;
				if (a.x === c.x) return c.prev;
				var i, j = c,
					k = 1 / 0;
				for (d = c.next; d !== j;) e >= d.x && d.x >= c.x && t(f < c.y ? e : g, f, c.x, c.y, f < c.y ? g : e, f, d.x, d.y) && (i = Math.abs(f - d.y) / (e - d.x), (k > i || i === k && d.x > c.x) && z(d, a) && (c = d, k = i)), d = d.next;
				return c
			}

			function p(a, b, c, d)
			{
				var e = a;
				do null === e.z && (e.z = r(e.x, e.y, b, c, d)), e.prevZ = e.prev, e.nextZ = e.next, e = e.next; while (e !== a);
				e.prevZ.nextZ = null, e.prevZ = null, q(e)
			}

			function q(a)
			{
				var b, c, d, e, f, g, h, i, j = 1;
				do {
					for (c = a, a = null, f = null, g = 0; c;)
					{
						for (g++, d = c, h = 0, b = 0; j > b && (h++, d = d.nextZ); b++);
						for (i = j; h > 0 || i > 0 && d;) 0 === h ? (e = d, d = d.nextZ, i--) : 0 !== i && d ? c.z <= d.z ? (e = c, c = c.nextZ, h--) : (e = d, d = d.nextZ, i--) : (e = c, c = c.nextZ, h--), f ? f.nextZ = e : a = e, e.prevZ = f, f = e;
						c = d
					}
					f.nextZ = null, j *= 2
				} while (g > 1);
				return a
			}

			function r(a, b, c, d, e)
			{
				return a = 32767 * (a - c) / e, b = 32767 * (b - d) / e, a = 16711935 & (a | a << 8), a = 252645135 & (a | a << 4), a = 858993459 & (a | a << 2), a = 1431655765 & (a | a << 1), b = 16711935 & (b | b << 8), b = 252645135 & (b | b << 4), b = 858993459 & (b | b << 2), b = 1431655765 & (b | b << 1), a | b << 1
			}

			function s(a)
			{
				var b = a,
					c = a;
				do b.x < c.x && (c = b), b = b.next; while (b !== a);
				return c
			}

			function t(a, b, c, d, e, f, g, h)
			{
				return (e - g) * (b - h) - (a - g) * (f - h) >= 0 && (a - g) * (d - h) - (c - g) * (b - h) >= 0 && (c - g) * (f - h) - (e - g) * (d - h) >= 0
			}

			function u(a, b)
			{
				return w(a, b) || a.next.i !== b.i && a.prev.i !== b.i && !y(a, b) && z(a, b) && z(b, a) && A(a, b)
			}

			function v(a, b, c)
			{
				return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
			}

			function w(a, b)
			{
				return a.x === b.x && a.y === b.y
			}

			function x(a, b, c, d)
			{
				return v(a, b, c) > 0 != v(a, b, d) > 0 && v(c, d, a) > 0 != v(c, d, b) > 0
			}

			function y(a, b)
			{
				var c = a;
				do {
					if (c.i !== a.i && c.next.i !== a.i && c.i !== b.i && c.next.i !== b.i && x(c, c.next, a, b)) return !0;
					c = c.next
				} while (c !== a);
				return !1
			}

			function z(a, b)
			{
				return v(a.prev, a, a.next) < 0 ? v(a, b, a.next) >= 0 && v(a, a.prev, b) >= 0 : v(a, b, a.prev) < 0 || v(a, a.next, b) < 0
			}

			function A(a, b)
			{
				var c = a,
					d = !1,
					e = (a.x + b.x) / 2,
					f = (a.y + b.y) / 2;
				do c.y > f != c.next.y > f && e < (c.next.x - c.x) * (f - c.y) / (c.next.y - c.y) + c.x && (d = !d), c = c.next; while (c !== a);
				return d
			}

			function B(a, b)
			{
				var c = new E(a.i, a.x, a.y),
					d = new E(b.i, b.x, b.y),
					e = a.next,
					f = b.prev;
				return a.next = b, b.prev = a, c.next = e, e.prev = c, d.next = c, c.prev = d, f.next = d, d.prev = f, d
			}

			function C(a, b, c, d)
			{
				var e = new E(a, b, c);
				return d ? (e.next = d.next, e.prev = d, d.next.prev = e, d.next = e) : (e.prev = e, e.next = e), e
			}

			function D(a)
			{
				a.next.prev = a.prev, a.prev.next = a.next, a.prevZ && (a.prevZ.nextZ = a.nextZ), a.nextZ && (a.nextZ.prevZ = a.prevZ)
			}

			function E(a, b, c)
			{
				this.i = a, this.x = b, this.y = c, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
			}
			b.exports = d
		},
		{}],
		10: [function (a, b, c)
		{
			"use strict";

			function d(a, b, c)
			{
				this.fn = a, this.context = b, this.once = c || !1
			}

			function e()
			{}
			var f = "function" != typeof Object.create ? "~" : !1;
			e.prototype._events = void 0, e.prototype.listeners = function (a, b)
			{
				var c = f ? f + a : a,
					d = this._events && this._events[c];
				if (b) return !!d;
				if (!d) return [];
				if (d.fn) return [d.fn];
				for (var e = 0, g = d.length, h = new Array(g); g > e; e++) h[e] = d[e].fn;
				return h
			}, e.prototype.emit = function (a, b, c, d, e, g)
			{
				var h = f ? f + a : a;
				if (!this._events || !this._events[h]) return !1;
				var i, j, k = this._events[h],
					l = arguments.length;
				if ("function" == typeof k.fn)
				{
					switch (k.once && this.removeListener(a, k.fn, void 0, !0), l)
					{
					case 1:
						return k.fn.call(k.context), !0;
					case 2:
						return k.fn.call(k.context, b), !0;
					case 3:
						return k.fn.call(k.context, b, c), !0;
					case 4:
						return k.fn.call(k.context, b, c, d), !0;
					case 5:
						return k.fn.call(k.context, b, c, d, e), !0;
					case 6:
						return k.fn.call(k.context, b, c, d, e, g), !0
					}
					for (j = 1, i = new Array(l - 1); l > j; j++) i[j - 1] = arguments[j];
					k.fn.apply(k.context, i)
				}
				else
				{
					var m, n = k.length;
					for (j = 0; n > j; j++) switch (k[j].once && this.removeListener(a, k[j].fn, void 0, !0), l)
					{
					case 1:
						k[j].fn.call(k[j].context);
						break;
					case 2:
						k[j].fn.call(k[j].context, b);
						break;
					case 3:
						k[j].fn.call(k[j].context, b, c);
						break;
					default:
						if (!i)
							for (m = 1, i = new Array(l - 1); l > m; m++) i[m - 1] = arguments[m];
						k[j].fn.apply(k[j].context, i)
					}
				}
				return !0
			}, e.prototype.on = function (a, b, c)
			{
				var e = new d(b, c || this),
					g = f ? f + a : a;
				return this._events || (this._events = f ?
				{} : Object.create(null)), this._events[g] ? this._events[g].fn ? this._events[g] = [this._events[g], e] : this._events[g].push(e) : this._events[g] = e, this
			}, e.prototype.once = function (a, b, c)
			{
				var e = new d(b, c || this, !0),
					g = f ? f + a : a;
				return this._events || (this._events = f ?
				{} : Object.create(null)), this._events[g] ? this._events[g].fn ? this._events[g] = [this._events[g], e] : this._events[g].push(e) : this._events[g] = e, this
			}, e.prototype.removeListener = function (a, b, c, d)
			{
				var e = f ? f + a : a;
				if (!this._events || !this._events[e]) return this;
				var g = this._events[e],
					h = [];
				if (b)
					if (g.fn)(g.fn !== b || d && !g.once || c && g.context !== c) && h.push(g);
					else
						for (var i = 0, j = g.length; j > i; i++)(g[i].fn !== b || d && !g[i].once || c && g[i].context !== c) && h.push(g[i]);
				return h.length ? this._events[e] = 1 === h.length ? h[0] : h : delete this._events[e], this
			}, e.prototype.removeAllListeners = function (a)
			{
				return this._events ? (a ? delete this._events[f ? f + a : a] : this._events = f ?
				{} : Object.create(null), this) : this
			}, e.prototype.off = e.prototype.removeListener, e.prototype.addListener = e.prototype.on, e.prototype.setMaxListeners = function ()
			{
				return this
			}, e.prefixed = f, "undefined" != typeof b && (b.exports = e)
		},
		{}],
		11: [function (a, b, c)
		{
			"use strict";

			function d(a)
			{
				if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
				return Object(a)
			}
			var e = Object.prototype.hasOwnProperty,
				f = Object.prototype.propertyIsEnumerable;
			b.exports = Object.assign || function (a, b)
			{
				for (var c, g, h = d(a), i = 1; i < arguments.length; i++)
				{
					c = Object(arguments[i]);
					for (var j in c) e.call(c, j) && (h[j] = c[j]);
					if (Object.getOwnPropertySymbols)
					{
						g = Object.getOwnPropertySymbols(c);
						for (var k = 0; k < g.length; k++) f.call(c, g[k]) && (h[g[k]] = c[g[k]])
					}
				}
				return h
			}
		},
		{}],
		12: [function (b, c, d)
		{
			(function (b)
			{
				! function ()
				{
					function d(a)
					{
						var b = !1;
						return function ()
						{
							if (b) throw new Error("Callback was already called.");
							b = !0, a.apply(e, arguments)
						}
					}
					var e, f, g = {};
					e = this, null != e && (f = e.async), g.noConflict = function ()
					{
						return e.async = f, g
					};
					var h = Object.prototype.toString,
						i = Array.isArray || function (a)
						{
							return "[object Array]" === h.call(a)
						},
						j = function (a, b)
						{
							for (var c = 0; c < a.length; c += 1) b(a[c], c, a)
						},
						k = function (a, b)
						{
							if (a.map) return a.map(b);
							var c = [];
							return j(a, function (a, d, e)
							{
								c.push(b(a, d, e))
							}), c
						},
						l = function (a, b, c)
						{
							return a.reduce ? a.reduce(b, c) : (j(a, function (a, d, e)
							{
								c = b(c, a, d, e)
							}), c)
						},
						m = function (a)
						{
							if (Object.keys) return Object.keys(a);
							var b = [];
							for (var c in a) a.hasOwnProperty(c) && b.push(c);
							return b
						};
					"undefined" != typeof b && b.nextTick ? (g.nextTick = b.nextTick, "undefined" != typeof setImmediate ? g.setImmediate = function (a)
						{
							setImmediate(a)
						} : g.setImmediate = g.nextTick) : "function" == typeof setImmediate ? (g.nextTick = function (a)
						{
							setImmediate(a)
						}, g.setImmediate = g.nextTick) : (g.nextTick = function (a)
						{
							setTimeout(a, 0)
						}, g.setImmediate = g.nextTick),
						g.each = function (a, b, c)
						{
							function e(b)
							{
								b ? (c(b), c = function () {}) : (f += 1, f >= a.length && c())
							}
							if (c = c || function () {}, !a.length) return c();
							var f = 0;
							j(a, function (a)
							{
								b(a, d(e))
							})
						}, g.forEach = g.each, g.eachSeries = function (a, b, c)
						{
							if (c = c || function () {}, !a.length) return c();
							var d = 0,
								e = function ()
								{
									b(a[d], function (b)
									{
										b ? (c(b), c = function () {}) : (d += 1, d >= a.length ? c() : e())
									})
								};
							e()
						}, g.forEachSeries = g.eachSeries, g.eachLimit = function (a, b, c, d)
						{
							var e = n(b);
							e.apply(null, [a, c, d])
						}, g.forEachLimit = g.eachLimit;
					var n = function (a)
						{
							return function (b, c, d)
							{
								if (d = d || function () {}, !b.length || 0 >= a) return d();
								var e = 0,
									f = 0,
									g = 0;
								! function h()
								{
									if (e >= b.length) return d();
									for (; a > g && f < b.length;) f += 1, g += 1, c(b[f - 1], function (a)
									{
										a ? (d(a), d = function () {}) : (e += 1, g -= 1, e >= b.length ? d() : h())
									})
								}()
							}
						},
						o = function (a)
						{
							return function ()
							{
								var b = Array.prototype.slice.call(arguments);
								return a.apply(null, [g.each].concat(b))
							}
						},
						p = function (a, b)
						{
							return function ()
							{
								var c = Array.prototype.slice.call(arguments);
								return b.apply(null, [n(a)].concat(c))
							}
						},
						q = function (a)
						{
							return function ()
							{
								var b = Array.prototype.slice.call(arguments);
								return a.apply(null, [g.eachSeries].concat(b))
							}
						},
						r = function (a, b, c, d)
						{
							if (b = k(b, function (a, b)
								{
									return {
										index: b,
										value: a
									}
								}), d)
							{
								var e = [];
								a(b, function (a, b)
								{
									c(a.value, function (c, d)
									{
										e[a.index] = d, b(c)
									})
								}, function (a)
								{
									d(a, e)
								})
							}
							else a(b, function (a, b)
							{
								c(a.value, function (a)
								{
									b(a)
								})
							})
						};
					g.map = o(r), g.mapSeries = q(r), g.mapLimit = function (a, b, c, d)
					{
						return s(b)(a, c, d)
					};
					var s = function (a)
					{
						return p(a, r)
					};
					g.reduce = function (a, b, c, d)
					{
						g.eachSeries(a, function (a, d)
						{
							c(b, a, function (a, c)
							{
								b = c, d(a)
							})
						}, function (a)
						{
							d(a, b)
						})
					}, g.inject = g.reduce, g.foldl = g.reduce, g.reduceRight = function (a, b, c, d)
					{
						var e = k(a, function (a)
							{
								return a
							})
							.reverse();
						g.reduce(e, b, c, d)
					}, g.foldr = g.reduceRight;
					var t = function (a, b, c, d)
					{
						var e = [];
						b = k(b, function (a, b)
						{
							return {
								index: b,
								value: a
							}
						}), a(b, function (a, b)
						{
							c(a.value, function (c)
							{
								c && e.push(a), b()
							})
						}, function (a)
						{
							d(k(e.sort(function (a, b)
							{
								return a.index - b.index
							}), function (a)
							{
								return a.value
							}))
						})
					};
					g.filter = o(t), g.filterSeries = q(t), g.select = g.filter, g.selectSeries = g.filterSeries;
					var u = function (a, b, c, d)
					{
						var e = [];
						b = k(b, function (a, b)
						{
							return {
								index: b,
								value: a
							}
						}), a(b, function (a, b)
						{
							c(a.value, function (c)
							{
								c || e.push(a), b()
							})
						}, function (a)
						{
							d(k(e.sort(function (a, b)
							{
								return a.index - b.index
							}), function (a)
							{
								return a.value
							}))
						})
					};
					g.reject = o(u), g.rejectSeries = q(u);
					var v = function (a, b, c, d)
					{
						a(b, function (a, b)
						{
							c(a, function (c)
							{
								c ? (d(a), d = function () {}) : b()
							})
						}, function (a)
						{
							d()
						})
					};
					g.detect = o(v), g.detectSeries = q(v), g.some = function (a, b, c)
					{
						g.each(a, function (a, d)
						{
							b(a, function (a)
							{
								a && (c(!0), c = function () {}), d()
							})
						}, function (a)
						{
							c(!1)
						})
					}, g.any = g.some, g.every = function (a, b, c)
					{
						g.each(a, function (a, d)
						{
							b(a, function (a)
							{
								a || (c(!1), c = function () {}), d()
							})
						}, function (a)
						{
							c(!0)
						})
					}, g.all = g.every, g.sortBy = function (a, b, c)
					{
						g.map(a, function (a, c)
						{
							b(a, function (b, d)
							{
								b ? c(b) : c(null,
								{
									value: a,
									criteria: d
								})
							})
						}, function (a, b)
						{
							if (a) return c(a);
							var d = function (a, b)
							{
								var c = a.criteria,
									d = b.criteria;
								return d > c ? -1 : c > d ? 1 : 0
							};
							c(null, k(b.sort(d), function (a)
							{
								return a.value
							}))
						})
					}, g.auto = function (a, b)
					{
						b = b || function () {};
						var c = m(a),
							d = c.length;
						if (!d) return b();
						var e = {},
							f = [],
							h = function (a)
							{
								f.unshift(a)
							},
							k = function (a)
							{
								for (var b = 0; b < f.length; b += 1)
									if (f[b] === a) return void f.splice(b, 1)
							},
							n = function ()
							{
								d--, j(f.slice(0), function (a)
								{
									a()
								})
							};
						h(function ()
						{
							if (!d)
							{
								var a = b;
								b = function () {}, a(null, e)
							}
						}), j(c, function (c)
						{
							var d = i(a[c]) ? a[c] : [a[c]],
								f = function (a)
								{
									var d = Array.prototype.slice.call(arguments, 1);
									if (d.length <= 1 && (d = d[0]), a)
									{
										var f = {};
										j(m(e), function (a)
										{
											f[a] = e[a]
										}), f[c] = d, b(a, f), b = function () {}
									}
									else e[c] = d, g.setImmediate(n)
								},
								o = d.slice(0, Math.abs(d.length - 1)) || [],
								p = function ()
								{
									return l(o, function (a, b)
									{
										return a && e.hasOwnProperty(b)
									}, !0) && !e.hasOwnProperty(c)
								};
							if (p()) d[d.length - 1](f, e);
							else
							{
								var q = function ()
								{
									p() && (k(q), d[d.length - 1](f, e))
								};
								h(q)
							}
						})
					}, g.retry = function (a, b, c)
					{
						var d = 5,
							e = [];
						"function" == typeof a && (c = b, b = a, a = d), a = parseInt(a, 10) || d;
						var f = function (d, f)
						{
							for (var h = function (a, b)
								{
									return function (c)
									{
										a(function (a, d)
										{
											c(!a || b,
											{
												err: a,
												result: d
											})
										}, f)
									}
								}; a;) e.push(h(b, !(a -= 1)));
							g.series(e, function (a, b)
							{
								b = b[b.length - 1], (d || c)(b.err, b.result)
							})
						};
						return c ? f() : f
					}, g.waterfall = function (a, b)
					{
						if (b = b || function () {}, !i(a))
						{
							var c = new Error("First argument to waterfall must be an array of functions");
							return b(c)
						}
						if (!a.length) return b();
						var d = function (a)
						{
							return function (c)
							{
								if (c) b.apply(null, arguments), b = function () {};
								else
								{
									var e = Array.prototype.slice.call(arguments, 1),
										f = a.next();
									f ? e.push(d(f)) : e.push(b), g.setImmediate(function ()
									{
										a.apply(null, e)
									})
								}
							}
						};
						d(g.iterator(a))()
					};
					var w = function (a, b, c)
					{
						if (c = c || function () {}, i(b)) a.map(b, function (a, b)
						{
							a && a(function (a)
							{
								var c = Array.prototype.slice.call(arguments, 1);
								c.length <= 1 && (c = c[0]), b.call(null, a, c)
							})
						}, c);
						else
						{
							var d = {};
							a.each(m(b), function (a, c)
							{
								b[a](function (b)
								{
									var e = Array.prototype.slice.call(arguments, 1);
									e.length <= 1 && (e = e[0]), d[a] = e, c(b)
								})
							}, function (a)
							{
								c(a, d)
							})
						}
					};
					g.parallel = function (a, b)
					{
						w(
						{
							map: g.map,
							each: g.each
						}, a, b)
					}, g.parallelLimit = function (a, b, c)
					{
						w(
						{
							map: s(b),
							each: n(b)
						}, a, c)
					}, g.series = function (a, b)
					{
						if (b = b || function () {}, i(a)) g.mapSeries(a, function (a, b)
						{
							a && a(function (a)
							{
								var c = Array.prototype.slice.call(arguments, 1);
								c.length <= 1 && (c = c[0]), b.call(null, a, c)
							})
						}, b);
						else
						{
							var c = {};
							g.eachSeries(m(a), function (b, d)
							{
								a[b](function (a)
								{
									var e = Array.prototype.slice.call(arguments, 1);
									e.length <= 1 && (e = e[0]), c[b] = e, d(a)
								})
							}, function (a)
							{
								b(a, c)
							})
						}
					}, g.iterator = function (a)
					{
						var b = function (c)
						{
							var d = function ()
							{
								return a.length && a[c].apply(null, arguments), d.next()
							};
							return d.next = function ()
							{
								return c < a.length - 1 ? b(c + 1) : null
							}, d
						};
						return b(0)
					}, g.apply = function (a)
					{
						var b = Array.prototype.slice.call(arguments, 1);
						return function ()
						{
							return a.apply(null, b.concat(Array.prototype.slice.call(arguments)))
						}
					};
					var x = function (a, b, c, d)
					{
						var e = [];
						a(b, function (a, b)
						{
							c(a, function (a, c)
							{
								e = e.concat(c || []), b(a)
							})
						}, function (a)
						{
							d(a, e)
						})
					};
					g.concat = o(x), g.concatSeries = q(x), g.whilst = function (a, b, c)
					{
						a() ? b(function (d)
						{
							return d ? c(d) : void g.whilst(a, b, c)
						}) : c()
					}, g.doWhilst = function (a, b, c)
					{
						a(function (d)
						{
							if (d) return c(d);
							var e = Array.prototype.slice.call(arguments, 1);
							b.apply(null, e) ? g.doWhilst(a, b, c) : c()
						})
					}, g.until = function (a, b, c)
					{
						a() ? c() : b(function (d)
						{
							return d ? c(d) : void g.until(a, b, c)
						})
					}, g.doUntil = function (a, b, c)
					{
						a(function (d)
						{
							if (d) return c(d);
							var e = Array.prototype.slice.call(arguments, 1);
							b.apply(null, e) ? c() : g.doUntil(a, b, c)
						})
					}, g.queue = function (a, b)
					{
						function c(a, b, c, d)
						{
							return a.started || (a.started = !0), i(b) || (b = [b]), 0 == b.length ? g.setImmediate(function ()
							{
								a.drain && a.drain()
							}) : void j(b, function (b)
							{
								var e = {
									data: b,
									callback: "function" == typeof d ? d : null
								};
								c ? a.tasks.unshift(e) : a.tasks.push(e), a.saturated && a.tasks.length === a.concurrency && a.saturated(), g.setImmediate(a.process)
							})
						}
						void 0 === b && (b = 1);
						var e = 0,
							f = {
								tasks: [],
								concurrency: b,
								saturated: null,
								empty: null,
								drain: null,
								started: !1,
								paused: !1,
								push: function (a, b)
								{
									c(f, a, !1, b)
								},
								kill: function ()
								{
									f.drain = null, f.tasks = []
								},
								unshift: function (a, b)
								{
									c(f, a, !0, b)
								},
								process: function ()
								{
									if (!f.paused && e < f.concurrency && f.tasks.length)
									{
										var b = f.tasks.shift();
										f.empty && 0 === f.tasks.length && f.empty(), e += 1;
										var c = function ()
											{
												e -= 1, b.callback && b.callback.apply(b, arguments), f.drain && f.tasks.length + e === 0 && f.drain(), f.process()
											},
											g = d(c);
										a(b.data, g)
									}
								},
								length: function ()
								{
									return f.tasks.length
								},
								running: function ()
								{
									return e
								},
								idle: function ()
								{
									return f.tasks.length + e === 0
								},
								pause: function ()
								{
									f.paused !== !0 && (f.paused = !0)
								},
								resume: function ()
								{
									if (f.paused !== !1)
									{
										f.paused = !1;
										for (var a = 1; a <= f.concurrency; a++) g.setImmediate(f.process)
									}
								}
							};
						return f
					}, g.priorityQueue = function (a, b)
					{
						function c(a, b)
						{
							return a.priority - b.priority
						}

						function d(a, b, c)
						{
							for (var d = -1, e = a.length - 1; e > d;)
							{
								var f = d + (e - d + 1 >>> 1);
								c(b, a[f]) >= 0 ? d = f : e = f - 1
							}
							return d
						}

						function e(a, b, e, f)
						{
							return a.started || (a.started = !0), i(b) || (b = [b]), 0 == b.length ? g.setImmediate(function ()
							{
								a.drain && a.drain()
							}) : void j(b, function (b)
							{
								var h = {
									data: b,
									priority: e,
									callback: "function" == typeof f ? f : null
								};
								a.tasks.splice(d(a.tasks, h, c) + 1, 0, h), a.saturated && a.tasks.length === a.concurrency && a.saturated(), g.setImmediate(a.process)
							})
						}
						var f = g.queue(a, b);
						return f.push = function (a, b, c)
						{
							e(f, a, b, c)
						}, delete f.unshift, f
					}, g.cargo = function (a, b)
					{
						var c = !1,
							d = [],
							e = {
								tasks: d,
								payload: b,
								saturated: null,
								empty: null,
								drain: null,
								drained: !0,
								push: function (a, c)
								{
									i(a) || (a = [a]), j(a, function (a)
									{
										d.push(
										{
											data: a,
											callback: "function" == typeof c ? c : null
										}), e.drained = !1, e.saturated && d.length === b && e.saturated()
									}), g.setImmediate(e.process)
								},
								process: function f()
								{
									if (!c)
									{
										if (0 === d.length) return e.drain && !e.drained && e.drain(), void(e.drained = !0);
										var g = "number" == typeof b ? d.splice(0, b) : d.splice(0, d.length),
											h = k(g, function (a)
											{
												return a.data
											});
										e.empty && e.empty(), c = !0, a(h, function ()
										{
											c = !1;
											var a = arguments;
											j(g, function (b)
											{
												b.callback && b.callback.apply(null, a)
											}), f()
										})
									}
								},
								length: function ()
								{
									return d.length
								},
								running: function ()
								{
									return c
								}
							};
						return e
					};
					var y = function (a)
					{
						return function (b)
						{
							var c = Array.prototype.slice.call(arguments, 1);
							b.apply(null, c.concat([function (b)
							{
								var c = Array.prototype.slice.call(arguments, 1);
								"undefined" != typeof console && (b ? console.error && console.error(b) : console[a] && j(c, function (b)
								{
									console[a](b)
								}))
							}]))
						}
					};
					g.log = y("log"), g.dir = y("dir"), g.memoize = function (a, b)
					{
						var c = {},
							d = {};
						b = b || function (a)
						{
							return a
						};
						var e = function ()
						{
							var e = Array.prototype.slice.call(arguments),
								f = e.pop(),
								h = b.apply(null, e);
							h in c ? g.nextTick(function ()
							{
								f.apply(null, c[h])
							}) : h in d ? d[h].push(f) : (d[h] = [f], a.apply(null, e.concat([function ()
							{
								c[h] = arguments;
								var a = d[h];
								delete d[h];
								for (var b = 0, e = a.length; e > b; b++) a[b].apply(null, arguments)
							}])))
						};
						return e.memo = c, e.unmemoized = a, e
					}, g.unmemoize = function (a)
					{
						return function ()
						{
							return (a.unmemoized || a)
								.apply(null, arguments)
						}
					}, g.times = function (a, b, c)
					{
						for (var d = [], e = 0; a > e; e++) d.push(e);
						return g.map(d, b, c)
					}, g.timesSeries = function (a, b, c)
					{
						for (var d = [], e = 0; a > e; e++) d.push(e);
						return g.mapSeries(d, b, c)
					}, g.seq = function ()
					{
						var a = arguments;
						return function ()
						{
							var b = this,
								c = Array.prototype.slice.call(arguments),
								d = c.pop();
							g.reduce(a, c, function (a, c, d)
							{
								c.apply(b, a.concat([function ()
								{
									var a = arguments[0],
										b = Array.prototype.slice.call(arguments, 1);
									d(a, b)
								}]))
							}, function (a, c)
							{
								d.apply(b, [a].concat(c))
							})
						}
					}, g.compose = function ()
					{
						return g.seq.apply(null, Array.prototype.reverse.call(arguments))
					};
					var z = function (a, b)
					{
						var c = function ()
						{
							var c = this,
								d = Array.prototype.slice.call(arguments),
								e = d.pop();
							return a(b, function (a, b)
							{
								a.apply(c, d.concat([b]))
							}, e)
						};
						if (arguments.length > 2)
						{
							var d = Array.prototype.slice.call(arguments, 2);
							return c.apply(this, d)
						}
						return c
					};
					g.applyEach = o(z), g.applyEachSeries = q(z), g.forever = function (a, b)
					{
						function c(d)
						{
							if (d)
							{
								if (b) return b(d);
								throw d
							}
							a(c)
						}
						c()
					}, "undefined" != typeof c && c.exports ? c.exports = g : "undefined" != typeof a && a.amd ? a([], function ()
					{
						return g
					}) : e.async = g
				}()
			})
			.call(this, b("_process"))
		},
		{
			_process: 3
		}],
		13: [function (a, b, c)
		{
			function d(a, b)
			{
				h.call(this), b = b || 10, this.baseUrl = a || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._boundOnLoad = this._onLoad.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = e.queue(this._boundLoadResource, b), this.resources = {}
			}
			var e = a("async"),
				f = a("url"),
				g = a("./Resource"),
				h = a("eventemitter3");
			d.prototype = Object.create(h.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.add = d.prototype.enqueue = function (a, b, c, d)
			{
				if (Array.isArray(a))
				{
					for (var e = 0; e < a.length; ++e) this.add(a[e]);
					return this
				}
				if ("object" == typeof a && (d = b || a.callback || a.onComplete, c = a, b = a.url, a = a.name || a.key || a.url), "string" != typeof b && (d = c, c = b, b = a), "string" != typeof b) throw new Error("No url passed to add resource to loader.");
				if ("function" == typeof c && (d = c, c = null), this.resources[a]) throw new Error('Resource with name "' + a + '" already exists.');
				return b = this._handleBaseUrl(b), this.resources[a] = new g(a, b, c), "function" == typeof d && this.resources[a].once("afterMiddleware", d), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[a]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[a]), this._progressChunk = 100 / this._buffer.length), this
			}, d.prototype._handleBaseUrl = function (a)
			{
				var b = f.parse(a);
				return b.protocol || 0 === b.pathname.indexOf("//") ? a : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== a.charAt(0) ? this.baseUrl + "/" + a : this.baseUrl + a
			}, d.prototype.before = d.prototype.pre = function (a)
			{
				return this._beforeMiddleware.push(a), this
			}, d.prototype.after = d.prototype.use = function (a)
			{
				return this._afterMiddleware.push(a), this
			}, d.prototype.reset = function ()
			{
				this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1, this.resources = {}
			}, d.prototype.load = function (a)
			{
				if ("function" == typeof a && this.once("complete", a), this._queue.started) return this;
				this.emit("start", this);
				for (var b = 0; b < this._buffer.length; ++b) this._queue.push(this._buffer[b]);
				return this._buffer.length = 0, this
			}, d.prototype._loadResource = function (a, b)
			{
				var c = this;
				a._dequeue = b, this._runMiddleware(a, this._beforeMiddleware, function ()
				{
					a.load(c._boundOnLoad)
				})
			}, d.prototype._onComplete = function ()
			{
				this.emit("complete", this, this.resources)
			}, d.prototype._onLoad = function (a)
			{
				this.progress += this._progressChunk, this.emit("progress", this, a), this._runMiddleware(a, this._afterMiddleware, function ()
				{
					a.emit("afterMiddleware", a), this._numToLoad--, 0 === this._numToLoad && (this.progress = 100, this._onComplete()), a.error ? this.emit("error", a.error, this, a) : this.emit("load", this, a)
				}), a._dequeue()
			}, d.prototype._runMiddleware = function (a, b, c)
			{
				var d = this;
				e.eachSeries(b, function (b, c)
				{
					b.call(d, a, c)
				}, c.bind(this, a))
			}, d.LOAD_TYPE = g.LOAD_TYPE, d.XHR_READY_STATE = g.XHR_READY_STATE, d.XHR_RESPONSE_TYPE = g.XHR_RESPONSE_TYPE
		},
		{
			"./Resource": 14,
			async: 12,
			eventemitter3: 10,
			url: 8
		}],
		14: [function (a, b, c)
		{
			function d(a, b, c)
			{
				if (g.call(this), c = c ||
					{}, "string" != typeof a || "string" != typeof b) throw new Error("Both name and url are required for constructing a resource.");
				this.name = a, this.url = b, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = c.crossOrigin === !0 ? "anonymous" : c.crossOrigin, this.loadType = c.loadType || this._determineLoadType(), this.xhrType = c.xhrType, this.metadata = c.metadata ||
				{}, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
			}

			function e(a)
			{
				return a.toString()
					.replace("object ", "")
			}

			function f(a, b, c)
			{
				b && 0 === b.indexOf(".") && (b = b.substring(1)), b && (a[b] = c)
			}
			var g = a("eventemitter3"),
				h = a("url"),
				i = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
				j = null;
			d.prototype = Object.create(g.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.complete = function ()
			{
				this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError), this.data.removeEventListener("load", this._boundComplete), this.data.removeEventListener("progress", this._boundOnProgress), this.data.removeEventListener("canplaythrough", this._boundComplete)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError), this.xhr.removeEventListener("abort", this._boundXhrOnAbort), this.xhr.removeEventListener("progress", this._boundOnProgress), this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.emit("complete", this)
			}, d.prototype.load = function (a)
			{
				switch (this.emit("start", this), a && this.once("complete", a), (this.crossOrigin === !1 || "string" != typeof this.crossOrigin) && (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType)
				{
				case d.LOAD_TYPE.IMAGE:
					this._loadImage();
					break;
				case d.LOAD_TYPE.AUDIO:
					this._loadElement("audio");
					break;
				case d.LOAD_TYPE.VIDEO:
					this._loadElement("video");
					break;
				case d.LOAD_TYPE.XHR:
				default:
					i && this.crossOrigin ? this._loadXdr() : this._loadXhr()
				}
			}, d.prototype._loadImage = function ()
			{
				this.data = new Image, this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.data.src = this.url, this.isImage = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
			}, d.prototype._loadElement = function (a)
			{
				if ("audio" === a && "undefined" != typeof Audio ? this.data = new Audio : this.data = document.createElement(a), null === this.data) return this.error = new Error("Unsupported element " + a), void this.complete();
				if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
				else if (Array.isArray(this.url))
					for (var b = 0; b < this.url.length; ++b) this.data.appendChild(this._createSource(a, this.url[b]));
				else this.data.appendChild(this._createSource(a, this.url));
				this["is" + a[0].toUpperCase() + a.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
			}, d.prototype._loadXhr = function ()
			{
				"string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
				var a = this.xhr = new XMLHttpRequest;
				a.open("GET", this.url, !0), this.xhrType === d.XHR_RESPONSE_TYPE.JSON || this.xhrType === d.XHR_RESPONSE_TYPE.DOCUMENT ? a.responseType = d.XHR_RESPONSE_TYPE.TEXT : a.responseType = this.xhrType, a.addEventListener("error", this._boundXhrOnError, !1), a.addEventListener("abort", this._boundXhrOnAbort, !1), a.addEventListener("progress", this._boundOnProgress, !1), a.addEventListener("load", this._boundXhrOnLoad, !1), a.send()
			}, d.prototype._loadXdr = function ()
			{
				"string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
				var a = this.xhr = new XDomainRequest;
				a.timeout = 5e3, a.onerror = this._boundXhrOnError, a.ontimeout = this._boundXdrOnTimeout, a.onprogress = this._boundOnProgress, a.onload = this._boundXhrOnLoad, a.open("GET", this.url, !0), setTimeout(function ()
				{
					a.send()
				}, 0)
			}, d.prototype._createSource = function (a, b, c)
			{
				c || (c = a + "/" + b.substr(b.lastIndexOf(".") + 1));
				var d = document.createElement("source");
				return d.src = b, d.type = c, d
			}, d.prototype._onError = function (a)
			{
				this.error = new Error("Failed to load element using " + a.target.nodeName), this.complete()
			}, d.prototype._onProgress = function (a)
			{
				a && a.lengthComputable && this.emit("progress", this, a.loaded / a.total)
			}, d.prototype._xhrOnError = function ()
			{
				this.error = new Error(e(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'), this.complete()
			}, d.prototype._xhrOnAbort = function ()
			{
				this.error = new Error(e(this.xhr) + " Request was aborted by the user."), this.complete()
			}, d.prototype._xdrOnTimeout = function ()
			{
				this.error = new Error(e(this.xhr) + " Request timed out."), this.complete()
			}, d.prototype._xhrOnLoad = function ()
			{
				var a = this.xhr,
					b = void 0 !== a.status ? a.status : 200;
				if (200 === b || 204 === b || 0 === b && a.responseText.length > 0)
					if (this.xhrType === d.XHR_RESPONSE_TYPE.TEXT) this.data = a.responseText;
					else if (this.xhrType === d.XHR_RESPONSE_TYPE.JSON) try
				{
					this.data = JSON.parse(a.responseText), this.isJson = !0
				}
				catch (c)
				{
					this.error = new Error("Error trying to parse loaded json:", c)
				}
				else if (this.xhrType === d.XHR_RESPONSE_TYPE.DOCUMENT) try
				{
					if (window.DOMParser)
					{
						var e = new DOMParser;
						this.data = e.parseFromString(a.responseText, "text/xml")
					}
					else
					{
						var f = document.createElement("div");
						f.innerHTML = a.responseText, this.data = f
					}
					this.isXml = !0
				}
				catch (c)
				{
					this.error = new Error("Error trying to parse loaded xml:", c)
				}
				else this.data = a.response || a.responseText;
				else this.error = new Error("[" + a.status + "]" + a.statusText + ":" + a.responseURL);
				this.complete()
			}, d.prototype._determineCrossOrigin = function (a, b)
			{
				if (0 === a.indexOf("data:")) return "";
				b = b || window.location, j || (j = document.createElement("a")), j.href = a, a = h.parse(j.href);
				var c = !a.port && "" === b.port || a.port === b.port;
				return a.hostname === b.hostname && c && a.protocol === b.protocol ? "" : "anonymous"
			}, d.prototype._determineXhrType = function ()
			{
				return d._xhrTypeMap[this._getExtension()] || d.XHR_RESPONSE_TYPE.TEXT
			}, d.prototype._determineLoadType = function ()
			{
				return d._loadTypeMap[this._getExtension()] || d.LOAD_TYPE.XHR
			}, d.prototype._getExtension = function ()
			{
				var a, b = this.url;
				if (this.isDataUrl)
				{
					var c = b.indexOf("/");
					a = b.substring(c + 1, b.indexOf(";", c))
				}
				else
				{
					var d = b.indexOf("?"); - 1 !== d && (b = b.substring(0, d)), a = b.substring(b.lastIndexOf(".") + 1)
				}
				return a
			}, d.prototype._getMimeFromXhrType = function (a)
			{
				switch (a)
				{
				case d.XHR_RESPONSE_TYPE.BUFFER:
					return "application/octet-binary";
				case d.XHR_RESPONSE_TYPE.BLOB:
					return "application/blob";
				case d.XHR_RESPONSE_TYPE.DOCUMENT:
					return "application/xml";
				case d.XHR_RESPONSE_TYPE.JSON:
					return "application/json";
				case d.XHR_RESPONSE_TYPE.DEFAULT:
				case d.XHR_RESPONSE_TYPE.TEXT:
				default:
					return "text/plain"
				}
			}, d.LOAD_TYPE = {
				XHR: 1,
				IMAGE: 2,
				AUDIO: 3,
				VIDEO: 4
			}, d.XHR_READY_STATE = {
				UNSENT: 0,
				OPENED: 1,
				HEADERS_RECEIVED: 2,
				LOADING: 3,
				DONE: 4
			}, d.XHR_RESPONSE_TYPE = {
				DEFAULT: "text",
				BUFFER: "arraybuffer",
				BLOB: "blob",
				DOCUMENT: "document",
				JSON: "json",
				TEXT: "text"
			}, d._loadTypeMap = {
				gif: d.LOAD_TYPE.IMAGE,
				png: d.LOAD_TYPE.IMAGE,
				bmp: d.LOAD_TYPE.IMAGE,
				jpg: d.LOAD_TYPE.IMAGE,
				jpeg: d.LOAD_TYPE.IMAGE,
				tif: d.LOAD_TYPE.IMAGE,
				tiff: d.LOAD_TYPE.IMAGE,
				webp: d.LOAD_TYPE.IMAGE,
				tga: d.LOAD_TYPE.IMAGE
			}, d._xhrTypeMap = {
				xhtml: d.XHR_RESPONSE_TYPE.DOCUMENT,
				html: d.XHR_RESPONSE_TYPE.DOCUMENT,
				htm: d.XHR_RESPONSE_TYPE.DOCUMENT,
				xml: d.XHR_RESPONSE_TYPE.DOCUMENT,
				tmx: d.XHR_RESPONSE_TYPE.DOCUMENT,
				tsx: d.XHR_RESPONSE_TYPE.DOCUMENT,
				svg: d.XHR_RESPONSE_TYPE.DOCUMENT,
				gif: d.XHR_RESPONSE_TYPE.BLOB,
				png: d.XHR_RESPONSE_TYPE.BLOB,
				bmp: d.XHR_RESPONSE_TYPE.BLOB,
				jpg: d.XHR_RESPONSE_TYPE.BLOB,
				jpeg: d.XHR_RESPONSE_TYPE.BLOB,
				tif: d.XHR_RESPONSE_TYPE.BLOB,
				tiff: d.XHR_RESPONSE_TYPE.BLOB,
				webp: d.XHR_RESPONSE_TYPE.BLOB,
				tga: d.XHR_RESPONSE_TYPE.BLOB,
				json: d.XHR_RESPONSE_TYPE.JSON,
				text: d.XHR_RESPONSE_TYPE.TEXT,
				txt: d.XHR_RESPONSE_TYPE.TEXT
			}, d.setExtensionLoadType = function (a, b)
			{
				f(d._loadTypeMap, a, b)
			}, d.setExtensionXhrType = function (a, b)
			{
				f(d._xhrTypeMap, a, b)
			}
		},
		{
			eventemitter3: 10,
			url: 8
		}],
		15: [function (a, b, c)
		{
			b.exports = {
				_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				encodeBinary: function (a)
				{
					for (var b, c = "", d = new Array(4), e = 0, f = 0, g = 0; e < a.length;)
					{
						for (b = new Array(3), f = 0; f < b.length; f++) e < a.length ? b[f] = 255 & a.charCodeAt(e++) : b[f] = 0;
						switch (d[0] = b[0] >> 2, d[1] = (3 & b[0]) << 4 | b[1] >> 4, d[2] = (15 & b[1]) << 2 | b[2] >> 6, d[3] = 63 & b[2], g = e - (a.length - 1))
						{
						case 2:
							d[3] = 64, d[2] = 64;
							break;
						case 1:
							d[3] = 64
						}
						for (f = 0; f < d.length; f++) c += this._keyStr.charAt(d[f])
					}
					return c
				}
			}
		},
		{}],
		16: [function (a, b, c)
		{
			b.exports = a("./Loader"), b.exports.Resource = a("./Resource"), b.exports.middleware = {
				caching:
				{
					memory: a("./middlewares/caching/memory")
				},
				parsing:
				{
					blob: a("./middlewares/parsing/blob")
				}
			}
		},
		{
			"./Loader": 13,
			"./Resource": 14,
			"./middlewares/caching/memory": 17,
			"./middlewares/parsing/blob": 18
		}],
		17: [function (a, b, c)
		{
			var d = {};
			b.exports = function ()
			{
				return function (a, b)
				{
					d[a.url] ? (a.data = d[a.url], a.complete()) : a.once("complete", function ()
					{
						d[this.url] = this.data
					}), b()
				}
			}
		},
		{}],
		18: [function (a, b, c)
		{
			var d = a("../../Resource"),
				e = a("../../b64");
			window.URL = window.URL || window.webkitURL, b.exports = function ()
			{
				return function (a, b)
				{
					if (!a.data) return b();
					if (a.xhr && a.xhrType === d.XHR_RESPONSE_TYPE.BLOB)
						if (window.Blob && "string" != typeof a.data)
						{
							if (0 === a.data.type.indexOf("image"))
							{
								var c = URL.createObjectURL(a.data);
								a.blob = a.data, a.data = new Image, a.data.src = c, a.isImage = !0, a.data.onload = function ()
								{
									URL.revokeObjectURL(c), a.data.onload = null, b()
								}
							}
						}
						else
						{
							var f = a.xhr.getResponseHeader("content-type");
							f && 0 === f.indexOf("image") && (a.data = new Image, a.data.src = "data:" + f + ";base64," + e.encodeBinary(a.xhr.responseText), a.isImage = !0, a.data.onload = function ()
							{
								a.data.onload = null, b()
							})
						}
					else b()
				}
			}
		},
		{
			"../../Resource": 14,
			"../../b64": 15
		}],
		19: [function (a, b, c)
		{
			function d(a)
			{
				var b = document.createElement("div");
				b.style.width = "100px", b.style.height = "100px", b.style.position = "absolute", b.style.top = 0, b.style.left = 0, b.style.zIndex = 2, this.div = b, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = a, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, window.addEventListener("keydown", this._onKeyDown, !1)
			}
			var e = a("../core");
			Object.assign(e.DisplayObject.prototype, a("./accessibleTarget")), d.prototype.constructor = d, b.exports = d, d.prototype.activate = function ()
			{
				this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode.appendChild(this.div))
			}, d.prototype.deactivate = function ()
			{
				this.isActive && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode.removeChild(this.div))
			}, d.prototype.updateAccessibleObjects = function (a)
			{
				if (a.visible && (a.accessible && a.interactive && (a._accessibleActive || this.addChild(a), a.renderId = this.renderId), a.interactiveChildren))
					for (var b = a.children, c = b.length - 1; c >= 0; c--) this.updateAccessibleObjects(b[c])
			}, d.prototype.update = function ()
			{
				this.updateAccessibleObjects(this.renderer._lastObjectRendered);
				var a = this.renderer.view.getBoundingClientRect(),
					b = a.width / this.renderer.width,
					c = a.height / this.renderer.height,
					d = this.div;
				d.style.left = a.left + "px", d.style.top = a.top + "px", d.style.width = this.renderer.width + "px", d.style.height = this.renderer.height + "px";
				for (var f = 0; f < this.children.length; f++)
				{
					var g = this.children[f];
					if (g.renderId !== this.renderId) g._accessibleActive = !1, e.utils.removeItems(this.children, f, 1), this.div.removeChild(g._accessibleDiv), this.pool.push(g._accessibleDiv), g._accessibleDiv = null, f--, 0 === this.children.length && this.deactivate();
					else
					{
						d = g._accessibleDiv;
						var h = g.hitArea,
							i = g.worldTransform;
						g.hitArea ? (d.style.left = (i.tx + h.x * i.a) * b + "px", d.style.top = (i.ty + h.y * i.d) * c + "px", d.style.width = h.width * i.a * b + "px", d.style.height = h.height * i.d * c + "px") : (h = g.getBounds(), this.capHitArea(h), d.style.left = h.x * b + "px", d.style.top = h.y * c + "px", d.style.width = h.width * b + "px", d.style.height = h.height * c + "px")
					}
				}
				this.renderId++
			}, d.prototype.capHitArea = function (a)
			{
				a.x < 0 && (a.width += a.x, a.x = 0), a.y < 0 && (a.height += a.y, a.y = 0), a.x + a.width > this.renderer.width && (a.width = this.renderer.width - a.x), a.y + a.height > this.renderer.height && (a.height = this.renderer.height - a.y)
			}, d.prototype.addChild = function (a)
			{
				var b = this.pool.pop();
				b || (b = document.createElement("button"), b.style.width = "100px", b.style.height = "100px", b.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", b.style.position = "absolute", b.style.zIndex = 2, b.style.borderStyle = "none", b.addEventListener("click", this._onClick.bind(this)), b.addEventListener("focus", this._onFocus.bind(this)), b.addEventListener("focusout", this._onFocusOut.bind(this))), b.title = a.accessibleTitle || "displayObject " + this.tabIndex, a._accessibleActive = !0, a._accessibleDiv = b, b.displayObject = a, this.children.push(a), this.div.appendChild(a._accessibleDiv), a._accessibleDiv.tabIndex = a.tabIndex
			}, d.prototype._onClick = function (a)
			{
				var b = this.renderer.plugins.interaction;
				b.dispatchEvent(a.target.displayObject, "click", b.eventData)
			}, d.prototype._onFocus = function (a)
			{
				var b = this.renderer.plugins.interaction;
				b.dispatchEvent(a.target.displayObject, "mouseover", b.eventData)
			}, d.prototype._onFocusOut = function (a)
			{
				var b = this.renderer.plugins.interaction;
				b.dispatchEvent(a.target.displayObject, "mouseout", b.eventData)
			}, d.prototype._onKeyDown = function (a)
			{
				9 === a.keyCode && this.activate()
			}, d.prototype._onMouseMove = function ()
			{
				this.deactivate()
			}, d.prototype.destroy = function ()
			{
				this.div = null;
				for (var a = 0; a < this.children.length; a++) this.children[a].div = null;
				window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
			}, e.WebGLRenderer.registerPlugin("accessibility", d), e.CanvasRenderer.registerPlugin("accessibility", d)
		},
		{
			"../core": 29,
			"./accessibleTarget": 20
		}],
		20: [function (a, b, c)
		{
			var d = {
				accessible: !1,
				accessibleTitle: null,
				tabIndex: 0,
				_accessibleActive: !1,
				_accessibleDiv: !1
			};
			b.exports = d
		},
		{}],
		21: [function (a, b, c)
		{
			b.exports = {
				accessibleTarget: a("./accessibleTarget"),
				AccessibilityManager: a("./AccessibilityManager")
			}
		},
		{
			"./AccessibilityManager": 19,
			"./accessibleTarget": 20
		}],
		22: [function (a, b, c)
		{
			var d = {
				VERSION: "3.0.10",
				PI_2: 2 * Math.PI,
				RAD_TO_DEG: 180 / Math.PI,
				DEG_TO_RAD: Math.PI / 180,
				TARGET_FPMS: .06,
				RENDERER_TYPE:
				{
					UNKNOWN: 0,
					WEBGL: 1,
					CANVAS: 2
				},
				BLEND_MODES:
				{
					NORMAL: 0,
					ADD: 1,
					MULTIPLY: 2,
					SCREEN: 3,
					OVERLAY: 4,
					DARKEN: 5,
					LIGHTEN: 6,
					COLOR_DODGE: 7,
					COLOR_BURN: 8,
					HARD_LIGHT: 9,
					SOFT_LIGHT: 10,
					DIFFERENCE: 11,
					EXCLUSION: 12,
					HUE: 13,
					SATURATION: 14,
					COLOR: 15,
					LUMINOSITY: 16
				},
				DRAW_MODES:
				{
					POINTS: 0,
					LINES: 1,
					LINE_LOOP: 2,
					LINE_STRIP: 3,
					TRIANGLES: 4,
					TRIANGLE_STRIP: 5,
					TRIANGLE_FAN: 6
				},
				SCALE_MODES:
				{
					DEFAULT: 0,
					LINEAR: 0,
					NEAREST: 1
				},
				RETINA_PREFIX: /@(.+)x/,
				RESOLUTION: 1,
				FILTER_RESOLUTION: 1,
				DEFAULT_RENDER_OPTIONS:
				{
					view: null,
					resolution: 1,
					antialias: !1,
					forceFXAA: !1,
					autoResize: !1,
					transparent: !1,
					backgroundColor: 0,
					clearBeforeRender: !0,
					preserveDrawingBuffer: !1,
					roundPixels: !1
				},
				SHAPES:
				{
					POLY: 0,
					RECT: 1,
					CIRC: 2,
					ELIP: 3,
					RREC: 4
				},
				SPRITE_BATCH_SIZE: 2e3
			};
			b.exports = d
		},
		{}],
		23: [function (a, b, c)
		{
			function d()
			{
				g.call(this), this.children = []
			}
			var e = a("../math"),
				f = a("../utils"),
				g = a("./DisplayObject"),
				h = a("../textures/RenderTexture"),
				i = new e.Matrix;
			d.prototype = Object.create(g.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				width:
				{
					get: function ()
					{
						return this.scale.x * this.getLocalBounds()
							.width
					},
					set: function (a)
					{
						var b = this.getLocalBounds()
							.width;
						0 !== b ? this.scale.x = a / b : this.scale.x = 1, this._width = a
					}
				},
				height:
				{
					get: function ()
					{
						return this.scale.y * this.getLocalBounds()
							.height
					},
					set: function (a)
					{
						var b = this.getLocalBounds()
							.height;
						0 !== b ? this.scale.y = a / b : this.scale.y = 1, this._height = a
					}
				}
			}), d.prototype.onChildrenChange = function () {}, d.prototype.addChild = function (a)
			{
				var b = arguments.length;
				if (b > 1)
					for (var c = 0; b > c; c++) this.addChild(arguments[c]);
				else a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), this.onChildrenChange(this.children.length - 1), a.emit("added", this);
				return a
			}, d.prototype.addChildAt = function (a, b)
			{
				if (b >= 0 && b <= this.children.length) return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), this.onChildrenChange(b), a.emit("added", this), a;
				throw new Error(a + "addChildAt: The index " + b + " supplied is out of bounds " + this.children.length)
			}, d.prototype.swapChildren = function (a, b)
			{
				if (a !== b)
				{
					var c = this.getChildIndex(a),
						d = this.getChildIndex(b);
					if (0 > c || 0 > d) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
					this.children[c] = b, this.children[d] = a, this.onChildrenChange(d > c ? c : d)
				}
			}, d.prototype.getChildIndex = function (a)
			{
				var b = this.children.indexOf(a);
				if (-1 === b) throw new Error("The supplied DisplayObject must be a child of the caller");
				return b
			}, d.prototype.setChildIndex = function (a, b)
			{
				if (0 > b || b >= this.children.length) throw new Error("The supplied index is out of bounds");
				var c = this.getChildIndex(a);
				f.removeItems(this.children, c, 1), this.children.splice(b, 0, a), this.onChildrenChange(b)
			}, d.prototype.getChildAt = function (a)
			{
				if (0 > a || a >= this.children.length) throw new Error("getChildAt: Supplied index " + a + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
				return this.children[a]
			}, d.prototype.removeChild = function (a)
			{
				var b = arguments.length;
				if (b > 1)
					for (var c = 0; b > c; c++) this.removeChild(arguments[c]);
				else
				{
					var d = this.children.indexOf(a);
					if (-1 === d) return;
					a.parent = null, f.removeItems(this.children, d, 1), this.onChildrenChange(d), a.emit("removed", this)
				}
				return a
			}, d.prototype.removeChildAt = function (a)
			{
				var b = this.getChildAt(a);
				return b.parent = null, f.removeItems(this.children, a, 1), this.onChildrenChange(a), b.emit("removed", this), b
			}, d.prototype.removeChildren = function (a, b)
			{
				var c, d, e = a || 0,
					f = "number" == typeof b ? b : this.children.length,
					g = f - e;
				if (g > 0 && f >= g)
				{
					for (c = this.children.splice(e, g), d = 0; d < c.length; ++d) c[d].parent = null;
					for (this.onChildrenChange(a), d = 0; d < c.length; ++d) c[d].emit("removed", this);
					return c
				}
				if (0 === g && 0 === this.children.length) return [];
				throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
			}, d.prototype.generateTexture = function (a, b, c)
			{
				var d = this.getLocalBounds(),
					e = new h(a, 0 | d.width, 0 | d.height, c, b);
				return i.tx = -d.x,
					i.ty = -d.y, e.render(this, i), e
			}, d.prototype.updateTransform = function ()
			{
				if (this.visible)
				{
					this.displayObjectUpdateTransform();
					for (var a = 0, b = this.children.length; b > a; ++a) this.children[a].updateTransform()
				}
			}, d.prototype.containerUpdateTransform = d.prototype.updateTransform, d.prototype.getBounds = function ()
			{
				if (!this._currentBounds)
				{
					if (0 === this.children.length) return e.Rectangle.EMPTY;
					for (var a, b, c, d = 1 / 0, f = 1 / 0, g = -(1 / 0), h = -(1 / 0), i = !1, j = 0, k = this.children.length; k > j; ++j)
					{
						var l = this.children[j];
						l.visible && (i = !0, a = this.children[j].getBounds(), d = d < a.x ? d : a.x, f = f < a.y ? f : a.y, b = a.width + a.x, c = a.height + a.y, g = g > b ? g : b, h = h > c ? h : c)
					}
					if (!i) return e.Rectangle.EMPTY;
					var m = this._bounds;
					m.x = d, m.y = f, m.width = g - d, m.height = h - f, this._currentBounds = m
				}
				return this._currentBounds
			}, d.prototype.containerGetBounds = d.prototype.getBounds, d.prototype.getLocalBounds = function ()
			{
				var a = this.worldTransform;
				this.worldTransform = e.Matrix.IDENTITY;
				for (var b = 0, c = this.children.length; c > b; ++b) this.children[b].updateTransform();
				return this.worldTransform = a, this._currentBounds = null, this.getBounds(e.Matrix.IDENTITY)
			}, d.prototype.renderWebGL = function (a)
			{
				if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
				{
					var b, c;
					if (this._mask || this._filters)
					{
						for (a.currentRenderer.flush(), this._filters && this._filters.length && a.filterManager.pushFilter(this, this._filters), this._mask && a.maskManager.pushMask(this, this._mask), a.currentRenderer.start(), this._renderWebGL(a), b = 0, c = this.children.length; c > b; b++) this.children[b].renderWebGL(a);
						a.currentRenderer.flush(), this._mask && a.maskManager.popMask(this, this._mask), this._filters && a.filterManager.popFilter(), a.currentRenderer.start()
					}
					else
						for (this._renderWebGL(a), b = 0, c = this.children.length; c > b; ++b) this.children[b].renderWebGL(a)
				}
			}, d.prototype._renderWebGL = function (a) {}, d.prototype._renderCanvas = function (a) {}, d.prototype.renderCanvas = function (a)
			{
				if (this.visible && !(this.alpha <= 0) && this.renderable)
				{
					this._mask && a.maskManager.pushMask(this._mask, a), this._renderCanvas(a);
					for (var b = 0, c = this.children.length; c > b; ++b) this.children[b].renderCanvas(a);
					this._mask && a.maskManager.popMask(a)
				}
			}, d.prototype.destroy = function (a)
			{
				if (g.prototype.destroy.call(this), a)
					for (var b = 0, c = this.children.length; c > b; ++b) this.children[b].destroy(a);
				this.removeChildren(), this.children = null
			}
		},
		{
			"../math": 33,
			"../textures/RenderTexture": 71,
			"../utils": 77,
			"./DisplayObject": 24
		}],
		24: [function (a, b, c)
		{
			function d()
			{
				g.call(this), this.position = new e.Point, this.scale = new e.Point(1, 1), this.pivot = new e.Point(0, 0), this.skew = new e.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.worldTransform = new e.Matrix, this.filterArea = null, this._sr = 0, this._cr = 1, this._bounds = new e.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null
			}
			var e = a("../math"),
				f = a("../textures/RenderTexture"),
				g = a("eventemitter3"),
				h = a("../const"),
				i = new e.Matrix,
				j = {
					worldTransform: new e.Matrix,
					worldAlpha: 1,
					children: []
				};
			d.prototype = Object.create(g.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				x:
				{
					get: function ()
					{
						return this.position.x
					},
					set: function (a)
					{
						this.position.x = a
					}
				},
				y:
				{
					get: function ()
					{
						return this.position.y
					},
					set: function (a)
					{
						this.position.y = a
					}
				},
				worldVisible:
				{
					get: function ()
					{
						var a = this;
						do {
							if (!a.visible) return !1;
							a = a.parent
						} while (a);
						return !0
					}
				},
				mask:
				{
					get: function ()
					{
						return this._mask
					},
					set: function (a)
					{
						this._mask && (this._mask.renderable = !0), this._mask = a, this._mask && (this._mask.renderable = !1)
					}
				},
				filters:
				{
					get: function ()
					{
						return this._filters && this._filters.slice()
					},
					set: function (a)
					{
						this._filters = a && a.slice()
					}
				}
			}), d.prototype.updateTransform = function ()
			{
				var a, b, c, d, e, f, g = this.parent.worldTransform,
					j = this.worldTransform;
				this.skew.x || this.skew.y ? (i.setTransform(this.position.x, this.position.y, this.pivot.x, this.pivot.y, this.scale.x, this.scale.y, this.rotation, this.skew.x, this.skew.y), j.a = i.a * g.a + i.b * g.c, j.b = i.a * g.b + i.b * g.d, j.c = i.c * g.a + i.d * g.c, j.d = i.c * g.b + i.d * g.d, j.tx = i.tx * g.a + i.ty * g.c + g.tx, j.ty = i.tx * g.b + i.ty * g.d + g.ty) : this.rotation % h.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), a = this._cr * this.scale.x, b = this._sr * this.scale.x, c = -this._sr * this.scale.y, d = this._cr * this.scale.y, e = this.position.x, f = this.position.y, (this.pivot.x || this.pivot.y) && (e -= this.pivot.x * a + this.pivot.y * c, f -= this.pivot.x * b + this.pivot.y * d), j.a = a * g.a + b * g.c, j.b = a * g.b + b * g.d, j.c = c * g.a + d * g.c, j.d = c * g.b + d * g.d, j.tx = e * g.a + f * g.c + g.tx, j.ty = e * g.b + f * g.d + g.ty) : (a = this.scale.x, d = this.scale.y, e = this.position.x - this.pivot.x * a, f = this.position.y - this.pivot.y * d, j.a = a * g.a, j.b = a * g.b, j.c = d * g.c, j.d = d * g.d, j.tx = e * g.a + f * g.c + g.tx, j.ty = e * g.b + f * g.d + g.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._currentBounds = null
			}, d.prototype.displayObjectUpdateTransform = d.prototype.updateTransform, d.prototype.getBounds = function (a)
			{
				return e.Rectangle.EMPTY
			}, d.prototype.getLocalBounds = function ()
			{
				return this.getBounds(e.Matrix.IDENTITY)
			}, d.prototype.toGlobal = function (a)
			{
				return this.parent ? this.displayObjectUpdateTransform() : (this.parent = j, this.displayObjectUpdateTransform(), this.parent = null), this.worldTransform.apply(a)
			}, d.prototype.toLocal = function (a, b, c)
			{
				return b && (a = b.toGlobal(a)), this.parent ? this.displayObjectUpdateTransform() : (this.parent = j, this.displayObjectUpdateTransform(), this.parent = null), this.worldTransform.applyInverse(a, c)
			}, d.prototype.renderWebGL = function (a) {}, d.prototype.renderCanvas = function (a) {}, d.prototype.generateTexture = function (a, b, c)
			{
				var d = this.getLocalBounds(),
					e = new f(a, 0 | d.width, 0 | d.height, b, c);
				return i.tx = -d.x, i.ty = -d.y, e.render(this, i), e
			}, d.prototype.setParent = function (a)
			{
				if (!a || !a.addChild) throw new Error("setParent: Argument must be a Container");
				return a.addChild(this), a
			}, d.prototype.setTransform = function (a, b, c, d, e, f, g, h, i)
			{
				return this.position.x = a || 0, this.position.y = b || 0, this.scale.x = c ? c : 1, this.scale.y = d ? d : 1, this.rotation = e || 0, this.skew.x = f || 0, this.skew.y = g || 0, this.pivot.x = h || 0, this.pivot.y = i || 0, this
			}, d.prototype.destroy = function ()
			{
				this.position = null, this.scale = null, this.pivot = null, this.skew = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.worldTransform = null, this.filterArea = null
			}
		},
		{
			"../const": 22,
			"../math": 33,
			"../textures/RenderTexture": 71,
			eventemitter3: 10
		}],
		25: [function (a, b, c)
		{
			function d()
			{
				e.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = k.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new j.Rectangle(0, 0, 1, 1), this.dirty = !0, this.glDirty = !1, this.boundsDirty = !0, this.cachedSpriteDirty = !1
			}
			var e = a("../display/Container"),
				f = a("../textures/Texture"),
				g = a("../renderers/canvas/utils/CanvasBuffer"),
				h = a("../renderers/canvas/utils/CanvasGraphics"),
				i = a("./GraphicsData"),
				j = a("../math"),
				k = a("../const"),
				l = new j.Point;
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				var a = new d;
				a.renderable = this.renderable, a.fillAlpha = this.fillAlpha, a.lineWidth = this.lineWidth, a.lineColor = this.lineColor, a.tint = this.tint, a.blendMode = this.blendMode, a.isMask = this.isMask, a.boundsPadding = this.boundsPadding, a.dirty = !0, a.glDirty = !0, a.cachedSpriteDirty = this.cachedSpriteDirty;
				for (var b = 0; b < this.graphicsData.length; ++b) a.graphicsData.push(this.graphicsData[b].clone());
				return a.currentPath = a.graphicsData[a.graphicsData.length - 1], a.updateLocalBounds(), a
			}, d.prototype.lineStyle = function (a, b, c)
			{
				if (this.lineWidth = a || 0, this.lineColor = b || 0, this.lineAlpha = void 0 === c ? 1 : c, this.currentPath)
					if (this.currentPath.shape.points.length)
					{
						var d = new j.Polygon(this.currentPath.shape.points.slice(-2));
						d.closed = !1, this.drawShape(d)
					}
					else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
				return this
			}, d.prototype.moveTo = function (a, b)
			{
				var c = new j.Polygon([a, b]);
				return c.closed = !1, this.drawShape(c), this
			}, d.prototype.lineTo = function (a, b)
			{
				return this.currentPath.shape.points.push(a, b), this.dirty = !0, this
			}, d.prototype.quadraticCurveTo = function (a, b, c, d)
			{
				this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
				var e, f, g = 20,
					h = this.currentPath.shape.points;
				0 === h.length && this.moveTo(0, 0);
				for (var i = h[h.length - 2], j = h[h.length - 1], k = 0, l = 1; g >= l; ++l) k = l / g, e = i + (a - i) * k, f = j + (b - j) * k, h.push(e + (a + (c - a) * k - e) * k, f + (b + (d - b) * k - f) * k);
				return this.dirty = this.boundsDirty = !0, this
			}, d.prototype.bezierCurveTo = function (a, b, c, d, e, f)
			{
				this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
				for (var g, h, i, j, k, l = 20, m = this.currentPath.shape.points, n = m[m.length - 2], o = m[m.length - 1], p = 0, q = 1; l >= q; ++q) p = q / l, g = 1 - p, h = g * g, i = h * g, j = p * p, k = j * p, m.push(i * n + 3 * h * p * a + 3 * g * j * c + k * e, i * o + 3 * h * p * b + 3 * g * j * d + k * f);
				return this.dirty = this.boundsDirty = !0, this
			}, d.prototype.arcTo = function (a, b, c, d, e)
			{
				this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(a, b) : this.moveTo(a, b);
				var f = this.currentPath.shape.points,
					g = f[f.length - 2],
					h = f[f.length - 1],
					i = h - b,
					j = g - a,
					k = d - b,
					l = c - a,
					m = Math.abs(i * l - j * k);
				if (1e-8 > m || 0 === e)(f[f.length - 2] !== a || f[f.length - 1] !== b) && f.push(a, b);
				else
				{
					var n = i * i + j * j,
						o = k * k + l * l,
						p = i * k + j * l,
						q = e * Math.sqrt(n) / m,
						r = e * Math.sqrt(o) / m,
						s = q * p / n,
						t = r * p / o,
						u = q * l + r * j,
						v = q * k + r * i,
						w = j * (r + s),
						x = i * (r + s),
						y = l * (q + t),
						z = k * (q + t),
						A = Math.atan2(x - v, w - u),
						B = Math.atan2(z - v, y - u);
					this.arc(u + a, v + b, e, A, B, j * k > l * i)
				}
				return this.dirty = this.boundsDirty = !0, this
			}, d.prototype.arc = function (a, b, c, d, e, f)
			{
				if (f = f || !1, d === e) return this;
				!f && d >= e ? e += 2 * Math.PI : f && e >= d && (d += 2 * Math.PI);
				var g = f ? -1 * (d - e) : e - d,
					h = 40 * Math.ceil(Math.abs(g) / (2 * Math.PI));
				if (0 === g) return this;
				var i = a + Math.cos(d) * c,
					j = b + Math.sin(d) * c;
				this.currentPath ? this.currentPath.shape.points.push(i, j) : this.moveTo(i, j);
				for (var k = this.currentPath.shape.points, l = g / (2 * h), m = 2 * l, n = Math.cos(l), o = Math.sin(l), p = h - 1, q = p % 1 / p, r = 0; p >= r; r++)
				{
					var s = r + q * r,
						t = l + d + m * s,
						u = Math.cos(t),
						v = -Math.sin(t);
					k.push((n * u + o * v) * c + a, (n * -v + o * u) * c + b)
				}
				return this.dirty = this.boundsDirty = !0, this
			}, d.prototype.beginFill = function (a, b)
			{
				return this.filling = !0, this.fillColor = a || 0, this.fillAlpha = void 0 === b ? 1 : b, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
			}, d.prototype.endFill = function ()
			{
				return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
			}, d.prototype.drawRect = function (a, b, c, d)
			{
				return this.drawShape(new j.Rectangle(a, b, c, d)), this
			}, d.prototype.drawRoundedRect = function (a, b, c, d, e)
			{
				return this.drawShape(new j.RoundedRectangle(a, b, c, d, e)), this
			}, d.prototype.drawCircle = function (a, b, c)
			{
				return this.drawShape(new j.Circle(a, b, c)), this
			}, d.prototype.drawEllipse = function (a, b, c, d)
			{
				return this.drawShape(new j.Ellipse(a, b, c, d)), this
			}, d.prototype.drawPolygon = function (a)
			{
				var b = a,
					c = !0;
				if (b instanceof j.Polygon && (c = b.closed, b = b.points), !Array.isArray(b))
				{
					b = new Array(arguments.length);
					for (var d = 0; d < b.length; ++d) b[d] = arguments[d]
				}
				var e = new j.Polygon(b);
				return e.closed = c, this.drawShape(e), this
			}, d.prototype.clear = function ()
			{
				return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
			}, d.prototype.generateTexture = function (a, b, c)
			{
				b = b || 1;
				var d = this.getLocalBounds(),
					e = new g(d.width * b, d.height * b),
					i = f.fromCanvas(e.canvas, c);
				return i.baseTexture.resolution = b, e.context.scale(b, b), e.context.translate(-d.x, -d.y), h.renderGraphics(this, e.context), i
			}, d.prototype._renderWebGL = function (a)
			{
				this.glDirty && (this.dirty = !0, this.glDirty = !1), a.setObjectRenderer(a.plugins.graphics), a.plugins.graphics.render(this)
			}, d.prototype._renderCanvas = function (a)
			{
				if (this.isMask !== !0)
				{
					this._prevTint !== this.tint && (this.dirty = !0);
					var b = a.context,
						c = this.worldTransform,
						d = a.blendModes[this.blendMode];
					d !== b.globalCompositeOperation && (b.globalCompositeOperation = d);
					var e = a.resolution;
					b.setTransform(c.a * e, c.b * e, c.c * e, c.d * e, c.tx * e, c.ty * e), h.renderGraphics(this, b)
				}
			}, d.prototype.getBounds = function (a)
			{
				if (!this._currentBounds)
				{
					if (!this.renderable) return j.Rectangle.EMPTY;
					this.boundsDirty && (this.updateLocalBounds(), this.glDirty = !0, this.cachedSpriteDirty = !0, this.boundsDirty = !1);
					var b = this._localBounds,
						c = b.x,
						d = b.width + b.x,
						e = b.y,
						f = b.height + b.y,
						g = a || this.worldTransform,
						h = g.a,
						i = g.b,
						k = g.c,
						l = g.d,
						m = g.tx,
						n = g.ty,
						o = h * d + k * f + m,
						p = l * f + i * d + n,
						q = h * c + k * f + m,
						r = l * f + i * c + n,
						s = h * c + k * e + m,
						t = l * e + i * c + n,
						u = h * d + k * e + m,
						v = l * e + i * d + n,
						w = o,
						x = p,
						y = o,
						z = p;
					y = y > q ? q : y, y = y > s ? s : y, y = y > u ? u : y, z = z > r ? r : z, z = z > t ? t : z, z = z > v ? v : z, w = q > w ? q : w, w = s > w ? s : w, w = u > w ? u : w, x = r > x ? r : x, x = t > x ? t : x, x = v > x ? v : x, this._bounds.x = y, this._bounds.width = w - y, this._bounds.y = z, this._bounds.height = x - z, this._currentBounds = this._bounds
				}
				return this._currentBounds
			}, d.prototype.containsPoint = function (a)
			{
				this.worldTransform.applyInverse(a, l);
				for (var b = this.graphicsData, c = 0; c < b.length; c++)
				{
					var d = b[c];
					if (d.fill && d.shape && d.shape.contains(l.x, l.y)) return !0
				}
				return !1
			}, d.prototype.updateLocalBounds = function ()
			{
				var a = 1 / 0,
					b = -(1 / 0),
					c = 1 / 0,
					d = -(1 / 0);
				if (this.graphicsData.length)
					for (var e, f, g, h, i, j, l = 0; l < this.graphicsData.length; l++)
					{
						var m = this.graphicsData[l],
							n = m.type,
							o = m.lineWidth;
						if (e = m.shape, n === k.SHAPES.RECT || n === k.SHAPES.RREC) g = e.x - o / 2, h = e.y - o / 2, i = e.width + o, j = e.height + o, a = a > g ? g : a, b = g + i > b ? g + i : b, c = c > h ? h : c, d = h + j > d ? h + j : d;
						else if (n === k.SHAPES.CIRC) g = e.x, h = e.y, i = e.radius + o / 2, j = e.radius + o / 2, a = a > g - i ? g - i : a, b = g + i > b ? g + i : b, c = c > h - j ? h - j : c, d = h + j > d ? h + j : d;
						else if (n === k.SHAPES.ELIP) g = e.x, h = e.y, i = e.width + o / 2, j = e.height + o / 2, a = a > g - i ? g - i : a, b = g + i > b ? g + i : b, c = c > h - j ? h - j : c, d = h + j > d ? h + j : d;
						else
						{
							f = e.points;
							for (var p = 0; p < f.length; p += 2) g = f[p], h = f[p + 1], a = a > g - o ? g - o : a, b = g + o > b ? g + o : b, c = c > h - o ? h - o : c, d = h + o > d ? h + o : d
						}
					}
				else a = 0, b = 0, c = 0, d = 0;
				var q = this.boundsPadding;
				this._localBounds.x = a - q, this._localBounds.width = b - a + 2 * q, this._localBounds.y = c - q, this._localBounds.height = d - c + 2 * q
			}, d.prototype.drawShape = function (a)
			{
				this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
				var b = new i(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, a);
				return this.graphicsData.push(b), b.type === k.SHAPES.POLY && (b.shape.closed = b.shape.closed || this.filling, this.currentPath = b), this.dirty = this.boundsDirty = !0, b
			}, d.prototype.destroy = function ()
			{
				e.prototype.destroy.apply(this, arguments);
				for (var a = 0; a < this.graphicsData.length; ++a) this.graphicsData[a].destroy();
				for (var b in this._webgl)
					for (var c = 0; c < this._webgl[b].data.length; ++c) this._webgl[b].data[c].destroy();
				this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
			}
		},
		{
			"../const": 22,
			"../display/Container": 23,
			"../math": 33,
			"../renderers/canvas/utils/CanvasBuffer": 45,
			"../renderers/canvas/utils/CanvasGraphics": 46,
			"../textures/Texture": 72,
			"./GraphicsData": 26
		}],
		26: [function (a, b, c)
		{
			function d(a, b, c, d, e, f, g)
			{
				this.lineWidth = a, this.lineColor = b, this.lineAlpha = c, this._lineTint = b, this.fillColor = d, this.fillAlpha = e, this._fillTint = d, this.fill = f, this.shape = g, this.type = g.type
			}
			d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				return new d(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
			}, d.prototype.destroy = function ()
			{
				this.shape = null
			}
		},
		{}],
		27: [function (a, b, c)
		{
			function d(a)
			{
				h.call(this, a), this.graphicsDataPool = [], this.primitiveShader = null, this.complexPrimitiveShader = null, this.maximumSimplePolySize = 200
			}
			var e = a("../../utils"),
				f = a("../../math"),
				g = a("../../const"),
				h = a("../../renderers/webgl/utils/ObjectRenderer"),
				i = a("../../renderers/webgl/WebGLRenderer"),
				j = a("./WebGLGraphicsData"),
				k = a("earcut");
			d.prototype = Object.create(h.prototype), d.prototype.constructor = d, b.exports = d, i.registerPlugin("graphics", d), d.prototype.onContextChange = function () {}, d.prototype.destroy = function ()
			{
				h.prototype.destroy.call(this);
				for (var a = 0; a < this.graphicsDataPool.length; ++a) this.graphicsDataPool[a].destroy();
				this.graphicsDataPool = null
			}, d.prototype.render = function (a)
			{
				var b, c = this.renderer,
					d = c.gl,
					f = c.shaderManager.plugins.primitiveShader;
				(a.dirty || !a._webGL[d.id]) && this.updateGraphics(a);
				var g = a._webGL[d.id];
				c.blendModeManager.setBlendMode(a.blendMode);
				for (var h = 0, i = g.data.length; i > h; h++) b = g.data[h], 1 === g.data[h].mode ? (c.stencilManager.pushStencil(a, b), d.uniform1f(c.shaderManager.complexPrimitiveShader.uniforms.alpha._location, a.worldAlpha * b.alpha), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), c.stencilManager.popStencil(a, b)) : (f = c.shaderManager.primitiveShader, c.shaderManager.setShader(f), d.uniformMatrix3fv(f.uniforms.translationMatrix._location, !1, a.worldTransform.toArray(!0)), d.uniformMatrix3fv(f.uniforms.projectionMatrix._location, !1, c.currentRenderTarget.projectionMatrix.toArray(!0)), d.uniform3fv(f.uniforms.tint._location, e.hex2rgb(a.tint)), d.uniform1f(f.uniforms.alpha._location, a.worldAlpha), d.bindBuffer(d.ARRAY_BUFFER, b.buffer), d.vertexAttribPointer(f.attributes.aVertexPosition, 2, d.FLOAT, !1, 24, 0), d.vertexAttribPointer(f.attributes.aColor, 4, d.FLOAT, !1, 24, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, b.indexBuffer), d.drawElements(d.TRIANGLE_STRIP, b.indices.length, d.UNSIGNED_SHORT, 0)), c.drawCount++
			}, d.prototype.updateGraphics = function (a)
			{
				var b = this.renderer.gl,
					c = a._webGL[b.id];
				c || (c = a._webGL[b.id] = {
					lastIndex: 0,
					data: [],
					gl: b
				}), a.dirty = !1;
				var d;
				if (a.clearDirty)
				{
					for (a.clearDirty = !1, d = 0; d < c.data.length; d++)
					{
						var e = c.data[d];
						e.reset(), this.graphicsDataPool.push(e)
					}
					c.data = [], c.lastIndex = 0
				}
				var f;
				for (d = c.lastIndex; d < a.graphicsData.length; d++)
				{
					var h = a.graphicsData[d];
					if (h.type === g.SHAPES.POLY)
					{
						if (h.points = h.shape.points.slice(), h.shape.closed && (h.points[0] !== h.points[h.points.length - 2] || h.points[1] !== h.points[h.points.length - 1]) && h.points.push(h.points[0], h.points[1]), h.fill && h.points.length >= 6)
							if (h.points.length < 2 * this.maximumSimplePolySize)
							{
								f = this.switchMode(c, 0);
								var i = this.buildPoly(h, f);
								i || (f = this.switchMode(c, 1), this.buildComplexPoly(h, f))
							}
							else f = this.switchMode(c, 1), this.buildComplexPoly(h, f);
						h.lineWidth > 0 && (f = this.switchMode(c, 0), this.buildLine(h, f))
					}
					else f = this.switchMode(c, 0), h.type === g.SHAPES.RECT ? this.buildRectangle(h, f) : h.type === g.SHAPES.CIRC || h.type === g.SHAPES.ELIP ? this.buildCircle(h, f) : h.type === g.SHAPES.RREC && this.buildRoundedRectangle(h, f);
					c.lastIndex++
				}
				for (d = 0; d < c.data.length; d++) f = c.data[d], f.dirty && f.upload()
			}, d.prototype.switchMode = function (a, b)
			{
				var c;
				return a.data.length ? (c = a.data[a.data.length - 1], (c.points.length > 32e4 || c.mode !== b || 1 === b) && (c = this.graphicsDataPool.pop() || new j(a.gl), c.mode = b, a.data.push(c))) : (c = this.graphicsDataPool.pop() || new j(a.gl), c.mode = b, a.data.push(c)), c.dirty = !0, c
			}, d.prototype.buildRectangle = function (a, b)
			{
				var c = a.shape,
					d = c.x,
					f = c.y,
					g = c.width,
					h = c.height;
				if (a.fill)
				{
					var i = e.hex2rgb(a.fillColor),
						j = a.fillAlpha,
						k = i[0] * j,
						l = i[1] * j,
						m = i[2] * j,
						n = b.points,
						o = b.indices,
						p = n.length / 6;
					n.push(d, f), n.push(k, l, m, j), n.push(d + g, f), n.push(k, l, m, j), n.push(d, f + h), n.push(k, l, m, j), n.push(d + g, f + h), n.push(k, l, m, j), o.push(p, p, p + 1, p + 2, p + 3, p + 3)
				}
				if (a.lineWidth)
				{
					var q = a.points;
					a.points = [d, f, d + g, f, d + g, f + h, d, f + h, d, f], this.buildLine(a, b), a.points = q
				}
			}, d.prototype.buildRoundedRectangle = function (a, b)
			{
				var c = a.shape,
					d = c.x,
					f = c.y,
					g = c.width,
					h = c.height,
					i = c.radius,
					j = [];
				if (j.push(d, f + i), this.quadraticBezierCurve(d, f + h - i, d, f + h, d + i, f + h, j), this.quadraticBezierCurve(d + g - i, f + h, d + g, f + h, d + g, f + h - i, j), this.quadraticBezierCurve(d + g, f + i, d + g, f, d + g - i, f, j), this.quadraticBezierCurve(d + i, f, d, f, d, f + i + 1e-10, j), a.fill)
				{
					var l = e.hex2rgb(a.fillColor),
						m = a.fillAlpha,
						n = l[0] * m,
						o = l[1] * m,
						p = l[2] * m,
						q = b.points,
						r = b.indices,
						s = q.length / 6,
						t = k(j, null, 2),
						u = 0;
					for (u = 0; u < t.length; u += 3) r.push(t[u] + s), r.push(t[u] + s), r.push(t[u + 1] + s), r.push(t[u + 2] + s), r.push(t[u + 2] + s);
					for (u = 0; u < j.length; u++) q.push(j[u], j[++u], n, o, p, m)
				}
				if (a.lineWidth)
				{
					var v = a.points;
					a.points = j, this.buildLine(a, b), a.points = v
				}
			}, d.prototype.quadraticBezierCurve = function (a, b, c, d, e, f, g)
			{
				function h(a, b, c)
				{
					var d = b - a;
					return a + d * c
				}
				for (var i, j, k, l, m, n, o = 20, p = g || [], q = 0, r = 0; o >= r; r++) q = r / o, i = h(a, c, q), j = h(b, d, q), k = h(c, e, q), l = h(d, f, q), m = h(i, k, q), n = h(j, l, q), p.push(m, n);
				return p
			}, d.prototype.buildCircle = function (a, b)
			{
				var c, d, f = a.shape,
					h = f.x,
					i = f.y;
				a.type === g.SHAPES.CIRC ? (c = f.radius, d = f.radius) : (c = f.width, d = f.height);
				var j = Math.floor(30 * Math.sqrt(f.radius)) || Math.floor(15 * Math.sqrt(f.width + f.height)),
					k = 2 * Math.PI / j,
					l = 0;
				if (a.fill)
				{
					var m = e.hex2rgb(a.fillColor),
						n = a.fillAlpha,
						o = m[0] * n,
						p = m[1] * n,
						q = m[2] * n,
						r = b.points,
						s = b.indices,
						t = r.length / 6;
					for (s.push(t), l = 0; j + 1 > l; l++) r.push(h, i, o, p, q, n), r.push(h + Math.sin(k * l) * c, i + Math.cos(k * l) * d, o, p, q, n), s.push(t++, t++);
					s.push(t - 1)
				}
				if (a.lineWidth)
				{
					var u = a.points;
					for (a.points = [], l = 0; j + 1 > l; l++) a.points.push(h + Math.sin(k * l) * c, i + Math.cos(k * l) * d);
					this.buildLine(a, b), a.points = u
				}
			}, d.prototype.buildLine = function (a, b)
			{
				var c = 0,
					d = a.points;
				if (0 !== d.length)
				{
					var g = new f.Point(d[0], d[1]),
						h = new f.Point(d[d.length - 2], d[d.length - 1]);
					if (g.x === h.x && g.y === h.y)
					{
						d = d.slice(), d.pop(), d.pop(), h = new f.Point(d[d.length - 2], d[d.length - 1]);
						var i = h.x + .5 * (g.x - h.x),
							j = h.y + .5 * (g.y - h.y);
						d.unshift(i, j), d.push(i, j)
					}
					var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H = b.points,
						I = b.indices,
						J = d.length / 2,
						K = d.length,
						L = H.length / 6,
						M = a.lineWidth / 2,
						N = e.hex2rgb(a.lineColor),
						O = a.lineAlpha,
						P = N[0] * O,
						Q = N[1] * O,
						R = N[2] * O;
					for (m = d[0], n = d[1], o = d[2], p = d[3], s = -(n - p), t = m - o, G = Math.sqrt(s * s + t * t), s /= G, t /= G, s *= M, t *= M, H.push(m - s, n - t, P, Q, R, O), H.push(m + s, n + t, P, Q, R, O), c = 1; J - 1 > c; c++) m = d[2 * (c - 1)], n = d[2 * (c - 1) + 1], o = d[2 * c], p = d[2 * c + 1], q = d[2 * (c + 1)], r = d[2 * (c + 1) + 1], s = -(n - p), t = m - o, G = Math.sqrt(s * s + t * t), s /= G, t /= G, s *= M, t *= M, u = -(p - r), v = o - q, G = Math.sqrt(u * u + v * v), u /= G, v /= G, u *= M, v *= M, y = -t + n - (-t + p), z = -s + o - (-s + m), A = (-s + m) * (-t + p) - (-s + o) * (-t + n), B = -v + r - (-v + p), C = -u + o - (-u + q), D = (-u + q) * (-v + p) - (-u + o) * (-v + r), E = y * C - B * z, Math.abs(E) < .1 ? (E += 10.1, H.push(o - s, p - t, P, Q, R, O), H.push(o + s, p + t, P, Q, R, O)) : (k = (z * D - C * A) / E, l = (B * A - y * D) / E, F = (k - o) * (k - o) + (l - p) * (l - p), F > 19600 ? (w = s - u, x = t - v, G = Math.sqrt(w * w + x * x), w /= G, x /= G, w *= M, x *= M, H.push(o - w, p - x), H.push(P, Q, R, O), H.push(o + w, p + x), H.push(P, Q, R, O), H.push(o - w, p - x), H.push(P, Q, R, O), K++) : (H.push(k, l), H.push(P, Q, R, O), H.push(o - (k - o), p - (l - p)), H.push(P, Q, R, O)));
					for (m = d[2 * (J - 2)], n = d[2 * (J - 2) + 1], o = d[2 * (J - 1)], p = d[2 * (J - 1) + 1], s = -(n - p), t = m - o, G = Math.sqrt(s * s + t * t), s /= G, t /= G, s *= M, t *= M, H.push(o - s, p - t), H.push(P, Q, R, O), H.push(o + s, p + t), H.push(P, Q, R, O), I.push(L), c = 0; K > c; c++) I.push(L++);
					I.push(L - 1)
				}
			}, d.prototype.buildComplexPoly = function (a, b)
			{
				var c = a.points.slice();
				if (!(c.length < 6))
				{
					var d = b.indices;
					b.points = c, b.alpha = a.fillAlpha, b.color = e.hex2rgb(a.fillColor);
					for (var f, g, h = 1 / 0, i = -(1 / 0), j = 1 / 0, k = -(1 / 0), l = 0; l < c.length; l += 2) f = c[l], g = c[l + 1], h = h > f ? f : h, i = f > i ? f : i, j = j > g ? g : j, k = g > k ? g : k;
					c.push(h, j, i, j, i, k, h, k);
					var m = c.length / 2;
					for (l = 0; m > l; l++) d.push(l)
				}
			}, d.prototype.buildPoly = function (a, b)
			{
				var c = a.points;
				if (!(c.length < 6))
				{
					var d = b.points,
						f = b.indices,
						g = c.length / 2,
						h = e.hex2rgb(a.fillColor),
						i = a.fillAlpha,
						j = h[0] * i,
						l = h[1] * i,
						m = h[2] * i,
						n = k(c, null, 2);
					if (!n) return !1;
					var o = d.length / 6,
						p = 0;
					for (p = 0; p < n.length; p += 3) f.push(n[p] + o), f.push(n[p] + o), f.push(n[p + 1] + o), f.push(n[p + 2] + o), f.push(n[p + 2] + o);
					for (p = 0; g > p; p++) d.push(c[2 * p], c[2 * p + 1], j, l, m, i);
					return !0
				}
			}
		},
		{
			"../../const": 22,
			"../../math": 33,
			"../../renderers/webgl/WebGLRenderer": 49,
			"../../renderers/webgl/utils/ObjectRenderer": 63,
			"../../utils": 77,
			"./WebGLGraphicsData": 28,
			earcut: 9
		}],
		28: [function (a, b, c)
		{
			function d(a)
			{
				this.gl = a, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0, this.glPoints = null, this.glIndices = null
			}
			d.prototype.constructor = d, b.exports = d, d.prototype.reset = function ()
			{
				this.points.length = 0, this.indices.length = 0
			}, d.prototype.upload = function ()
			{
				var a = this.gl;
				this.glPoints = new Float32Array(this.points), a.bindBuffer(a.ARRAY_BUFFER, this.buffer), a.bufferData(a.ARRAY_BUFFER, this.glPoints, a.STATIC_DRAW), this.glIndices = new Uint16Array(this.indices), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.glIndices, a.STATIC_DRAW), this.dirty = !1
			}, d.prototype.destroy = function ()
			{
				this.color = null, this.points = null, this.indices = null, this.gl.deleteBuffer(this.buffer), this.gl.deleteBuffer(this.indexBuffer), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
			}
		},
		{}],
		29: [function (a, b, c)
		{
			var d = b.exports = Object.assign(a("./const"), a("./math"),
			{
				utils: a("./utils"),
				ticker: a("./ticker"),
				DisplayObject: a("./display/DisplayObject"),
				Container: a("./display/Container"),
				Sprite: a("./sprites/Sprite"),
				ParticleContainer: a("./particles/ParticleContainer"),
				SpriteRenderer: a("./sprites/webgl/SpriteRenderer"),
				ParticleRenderer: a("./particles/webgl/ParticleRenderer"),
				Text: a("./text/Text"),
				Graphics: a("./graphics/Graphics"),
				GraphicsData: a("./graphics/GraphicsData"),
				GraphicsRenderer: a("./graphics/webgl/GraphicsRenderer"),
				Texture: a("./textures/Texture"),
				BaseTexture: a("./textures/BaseTexture"),
				RenderTexture: a("./textures/RenderTexture"),
				VideoBaseTexture: a("./textures/VideoBaseTexture"),
				TextureUvs: a("./textures/TextureUvs"),
				CanvasRenderer: a("./renderers/canvas/CanvasRenderer"),
				CanvasGraphics: a("./renderers/canvas/utils/CanvasGraphics"),
				CanvasBuffer: a("./renderers/canvas/utils/CanvasBuffer"),
				WebGLRenderer: a("./renderers/webgl/WebGLRenderer"),
				WebGLManager: a("./renderers/webgl/managers/WebGLManager"),
				ShaderManager: a("./renderers/webgl/managers/ShaderManager"),
				Shader: a("./renderers/webgl/shaders/Shader"),
				TextureShader: a("./renderers/webgl/shaders/TextureShader"),
				PrimitiveShader: a("./renderers/webgl/shaders/PrimitiveShader"),
				ComplexPrimitiveShader: a("./renderers/webgl/shaders/ComplexPrimitiveShader"),
				ObjectRenderer: a("./renderers/webgl/utils/ObjectRenderer"),
				RenderTarget: a("./renderers/webgl/utils/RenderTarget"),
				AbstractFilter: a("./renderers/webgl/filters/AbstractFilter"),
				FXAAFilter: a("./renderers/webgl/filters/FXAAFilter"),
				SpriteMaskFilter: a("./renderers/webgl/filters/SpriteMaskFilter"),
				autoDetectRenderer: function (a, b, c, e)
				{
					return a = a || 800, b = b || 600, !e && d.utils.isWebGLSupported() ? new d.WebGLRenderer(a, b, c) : new d.CanvasRenderer(a, b, c)
				}
			})
		},
		{
			"./const": 22,
			"./display/Container": 23,
			"./display/DisplayObject": 24,
			"./graphics/Graphics": 25,
			"./graphics/GraphicsData": 26,
			"./graphics/webgl/GraphicsRenderer": 27,
			"./math": 33,
			"./particles/ParticleContainer": 39,
			"./particles/webgl/ParticleRenderer": 41,
			"./renderers/canvas/CanvasRenderer": 44,
			"./renderers/canvas/utils/CanvasBuffer": 45,
			"./renderers/canvas/utils/CanvasGraphics": 46,
			"./renderers/webgl/WebGLRenderer": 49,
			"./renderers/webgl/filters/AbstractFilter": 50,
			"./renderers/webgl/filters/FXAAFilter": 51,
			"./renderers/webgl/filters/SpriteMaskFilter": 52,
			"./renderers/webgl/managers/ShaderManager": 56,
			"./renderers/webgl/managers/WebGLManager": 58,
			"./renderers/webgl/shaders/ComplexPrimitiveShader": 59,
			"./renderers/webgl/shaders/PrimitiveShader": 60,
			"./renderers/webgl/shaders/Shader": 61,
			"./renderers/webgl/shaders/TextureShader": 62,
			"./renderers/webgl/utils/ObjectRenderer": 63,
			"./renderers/webgl/utils/RenderTarget": 65,
			"./sprites/Sprite": 67,
			"./sprites/webgl/SpriteRenderer": 68,
			"./text/Text": 69,
			"./textures/BaseTexture": 70,
			"./textures/RenderTexture": 71,
			"./textures/Texture": 72,
			"./textures/TextureUvs": 73,
			"./textures/VideoBaseTexture": 74,
			"./ticker": 76,
			"./utils": 77
		}],
		30: [function (a, b, c)
		{
			function d(a)
			{
				return 0 > a ? -1 : a > 0 ? 1 : 0
			}

			function e()
			{
				for (var a = 0; 16 > a; a++)
				{
					var b = [];
					l.push(b);
					for (var c = 0; 16 > c; c++)
						for (var e = d(f[a] * f[c] + h[a] * g[c]), m = d(g[a] * f[c] + i[a] * g[c]), n = d(f[a] * h[c] + h[a] * i[c]), o = d(g[a] * h[c] + i[a] * i[c]), p = 0; 16 > p; p++)
							if (f[p] === e && g[p] === m && h[p] === n && i[p] === o)
							{
								b.push(p);
								break
							}
				}
				for (a = 0; 16 > a; a++)
				{
					var q = new k;
					q.set(f[a], g[a], h[a], i[a], 0, 0), j.push(q)
				}
			}
			var f = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
				g = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
				h = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
				i = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
				j = [],
				k = a("./Matrix"),
				l = [];
			e();
			var m = {
				E: 0,
				SE: 1,
				S: 2,
				SW: 3,
				W: 4,
				NW: 5,
				N: 6,
				NE: 7,
				MIRROR_VERTICAL: 8,
				MIRROR_HORIZONTAL: 12,
				uX: function (a)
				{
					return f[a]
				},
				uY: function (a)
				{
					return g[a]
				},
				vX: function (a)
				{
					return h[a]
				},
				vY: function (a)
				{
					return i[a]
				},
				inv: function (a)
				{
					return 8 & a ? 15 & a : 7 & -a
				},
				add: function (a, b)
				{
					return l[a][b]
				},
				sub: function (a, b)
				{
					return l[a][m.inv(b)]
				},
				rotate180: function (a)
				{
					return 4 ^ a
				},
				isSwapWidthHeight: function (a)
				{
					return 2 === (3 & a)
				},
				byDirection: function (a, b)
				{
					return 2 * Math.abs(a) <= Math.abs(b) ? b >= 0 ? m.S : m.N : 2 * Math.abs(b) <= Math.abs(a) ? a > 0 ? m.E : m.W : b > 0 ? a > 0 ? m.SE : m.SW : a > 0 ? m.NE : m.NW
				},
				matrixAppendRotationInv: function (a, b, c, d)
				{
					var e = j[m.inv(b)];
					c = c || 0, d = d || 0, e.tx = c, e.ty = d, a.append(e)
				}
			};
			b.exports = m
		},
		{
			"./Matrix": 31
		}],
		31: [function (a, b, c)
		{
			function d()
			{
				this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
			}
			var e = a("./Point");
			d.prototype.constructor = d, b.exports = d, d.prototype.fromArray = function (a)
			{
				this.a = a[0], this.b = a[1], this.c = a[3], this.d = a[4], this.tx = a[2], this.ty = a[5]
			}, d.prototype.set = function (a, b, c, d, e, f)
			{
				return this.a = a, this.b = b, this.c = c, this.d = d, this.tx = e, this.ty = f, this
			}, d.prototype.toArray = function (a, b)
			{
				this.array || (this.array = new Float32Array(9));
				var c = b || this.array;
				return a ? (c[0] = this.a, c[1] = this.b, c[2] = 0, c[3] = this.c, c[4] = this.d, c[5] = 0, c[6] = this.tx, c[7] = this.ty, c[8] = 1) : (c[0] = this.a, c[1] = this.c, c[2] = this.tx, c[3] = this.b, c[4] = this.d, c[5] = this.ty, c[6] = 0, c[7] = 0, c[8] = 1), c
			}, d.prototype.apply = function (a, b)
			{
				b = b || new e;
				var c = a.x,
					d = a.y;
				return b.x = this.a * c + this.c * d + this.tx, b.y = this.b * c + this.d * d + this.ty, b
			}, d.prototype.applyInverse = function (a, b)
			{
				b = b || new e;
				var c = 1 / (this.a * this.d + this.c * -this.b),
					d = a.x,
					f = a.y;
				return b.x = this.d * c * d + -this.c * c * f + (this.ty * this.c - this.tx * this.d) * c, b.y = this.a * c * f + -this.b * c * d + (-this.ty * this.a + this.tx * this.b) * c, b
			}, d.prototype.translate = function (a, b)
			{
				return this.tx += a, this.ty += b, this
			}, d.prototype.scale = function (a, b)
			{
				return this.a *= a, this.d *= b, this.c *= a, this.b *= b, this.tx *= a, this.ty *= b, this
			}, d.prototype.rotate = function (a)
			{
				var b = Math.cos(a),
					c = Math.sin(a),
					d = this.a,
					e = this.c,
					f = this.tx;
				return this.a = d * b - this.b * c, this.b = d * c + this.b * b, this.c = e * b - this.d * c, this.d = e * c + this.d * b, this.tx = f * b - this.ty * c, this.ty = f * c + this.ty * b, this
			}, d.prototype.append = function (a)
			{
				var b = this.a,
					c = this.b,
					d = this.c,
					e = this.d;
				return this.a = a.a * b + a.b * d, this.b = a.a * c + a.b * e, this.c = a.c * b + a.d * d, this.d = a.c * c + a.d * e, this.tx = a.tx * b + a.ty * d + this.tx, this.ty = a.tx * c + a.ty * e + this.ty, this
			}, d.prototype.setTransform = function (a, b, c, d, e, f, g, h, i)
			{
				var j, k, l, m, n, o, p, q, r, s;
				return n = Math.sin(g), o = Math.cos(g), p = Math.cos(i), q = Math.sin(i), r = -Math.sin(h), s = Math.cos(h), j = o * e, k = n * e, l = -n * f, m = o * f, this.a = p * j + q * l, this.b = p * k + q * m, this.c = r * j + s * l, this.d = r * k + s * m, this.tx = a + (c * j + d * l), this.ty = b + (c * k + d * m), this
			}, d.prototype.prepend = function (a)
			{
				var b = this.tx;
				if (1 !== a.a || 0 !== a.b || 0 !== a.c || 1 !== a.d)
				{
					var c = this.a,
						d = this.c;
					this.a = c * a.a + this.b * a.c, this.b = c * a.b + this.b * a.d, this.c = d * a.a + this.d * a.c, this.d = d * a.b + this.d * a.d
				}
				return this.tx = b * a.a + this.ty * a.c + a.tx, this.ty = b * a.b + this.ty * a.d + a.ty, this
			}, d.prototype.invert = function ()
			{
				var a = this.a,
					b = this.b,
					c = this.c,
					d = this.d,
					e = this.tx,
					f = a * d - b * c;
				return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
			}, d.prototype.identity = function ()
			{
				return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
			}, d.prototype.clone = function ()
			{
				var a = new d;
				return a.a = this.a, a.b = this.b, a.c = this.c, a.d = this.d, a.tx = this.tx, a.ty = this.ty, a
			}, d.prototype.copy = function (a)
			{
				return a.a = this.a, a.b = this.b, a.c = this.c, a.d = this.d, a.tx = this.tx, a.ty = this.ty, a
			}, d.IDENTITY = new d, d.TEMP_MATRIX = new d
		},
		{
			"./Point": 32
		}],
		32: [function (a, b, c)
		{
			function d(a, b)
			{
				this.x = a || 0, this.y = b || 0
			}
			d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				return new d(this.x, this.y)
			}, d.prototype.copy = function (a)
			{
				this.set(a.x, a.y)
			}, d.prototype.equals = function (a)
			{
				return a.x === this.x && a.y === this.y
			}, d.prototype.set = function (a, b)
			{
				this.x = a || 0, this.y = b || (0 !== b ? this.x : 0)
			}
		},
		{}],
		33: [function (a, b, c)
		{
			b.exports = {
				Point: a("./Point"),
				Matrix: a("./Matrix"),
				GroupD8: a("./GroupD8"),
				Circle: a("./shapes/Circle"),
				Ellipse: a("./shapes/Ellipse"),
				Polygon: a("./shapes/Polygon"),
				Rectangle: a("./shapes/Rectangle"),
				RoundedRectangle: a("./shapes/RoundedRectangle")
			}
		},
		{
			"./GroupD8": 30,
			"./Matrix": 31,
			"./Point": 32,
			"./shapes/Circle": 34,
			"./shapes/Ellipse": 35,
			"./shapes/Polygon": 36,
			"./shapes/Rectangle": 37,
			"./shapes/RoundedRectangle": 38
		}],
		34: [function (a, b, c)
		{
			function d(a, b, c)
			{
				this.x = a || 0, this.y = b || 0, this.radius = c || 0, this.type = f.SHAPES.CIRC
			}
			var e = a("./Rectangle"),
				f = a("../../const");
			d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				return new d(this.x, this.y, this.radius)
			}, d.prototype.contains = function (a, b)
			{
				if (this.radius <= 0) return !1;
				var c = this.x - a,
					d = this.y - b,
					e = this.radius * this.radius;
				return c *= c, d *= d,
					e >= c + d
			}, d.prototype.getBounds = function ()
			{
				return new e(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
			}
		},
		{
			"../../const": 22,
			"./Rectangle": 37
		}],
		35: [function (a, b, c)
		{
			function d(a, b, c, d)
			{
				this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this.type = f.SHAPES.ELIP
			}
			var e = a("./Rectangle"),
				f = a("../../const");
			d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				return new d(this.x, this.y, this.width, this.height)
			}, d.prototype.contains = function (a, b)
			{
				if (this.width <= 0 || this.height <= 0) return !1;
				var c = (a - this.x) / this.width,
					d = (b - this.y) / this.height;
				return c *= c, d *= d, 1 >= c + d
			}, d.prototype.getBounds = function ()
			{
				return new e(this.x - this.width, this.y - this.height, this.width, this.height)
			}
		},
		{
			"../../const": 22,
			"./Rectangle": 37
		}],
		36: [function (a, b, c)
		{
			function d(a)
			{
				var b = a;
				if (!Array.isArray(b))
				{
					b = new Array(arguments.length);
					for (var c = 0; c < b.length; ++c) b[c] = arguments[c]
				}
				if (b[0] instanceof e)
				{
					for (var d = [], g = 0, h = b.length; h > g; g++) d.push(b[g].x, b[g].y);
					b = d
				}
				this.closed = !0, this.points = b, this.type = f.SHAPES.POLY
			}
			var e = a("../Point"),
				f = a("../../const");
			d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				return new d(this.points.slice())
			}, d.prototype.contains = function (a, b)
			{
				for (var c = !1, d = this.points.length / 2, e = 0, f = d - 1; d > e; f = e++)
				{
					var g = this.points[2 * e],
						h = this.points[2 * e + 1],
						i = this.points[2 * f],
						j = this.points[2 * f + 1],
						k = h > b != j > b && (i - g) * (b - h) / (j - h) + g > a;
					k && (c = !c)
				}
				return c
			}
		},
		{
			"../../const": 22,
			"../Point": 32
		}],
		37: [function (a, b, c)
		{
			function d(a, b, c, d)
			{
				this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this.type = e.SHAPES.RECT
			}
			var e = a("../../const");
			d.prototype.constructor = d, b.exports = d, d.EMPTY = new d(0, 0, 0, 0), d.prototype.clone = function ()
			{
				return new d(this.x, this.y, this.width, this.height)
			}, d.prototype.contains = function (a, b)
			{
				return this.width <= 0 || this.height <= 0 ? !1 : a >= this.x && a < this.x + this.width && b >= this.y && b < this.y + this.height
			}
		},
		{
			"../../const": 22
		}],
		38: [function (a, b, c)
		{
			function d(a, b, c, d, f)
			{
				this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this.radius = f || 20, this.type = e.SHAPES.RREC
			}
			var e = a("../../const");
			d.prototype.constructor = d, b.exports = d, d.prototype.clone = function ()
			{
				return new d(this.x, this.y, this.width, this.height, this.radius)
			}, d.prototype.contains = function (a, b)
			{
				return this.width <= 0 || this.height <= 0 ? !1 : a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height
			}
		},
		{
			"../../const": 22
		}],
		39: [function (a, b, c)
		{
			function d(a, b, c)
			{
				e.call(this), c = c || 15e3, a = a || 15e3;
				var d = 16384;
				c > d && (c = d), c > a && (c = a), this._properties = [!1, !0, !1, !1, !1], this._maxSize = a, this._batchSize = c, this._buffers = null, this._bufferToUpdate = 0, this.interactiveChildren = !1, this.blendMode = f.BLEND_MODES.NORMAL, this.roundPixels = !0, this.setProperties(b)
			}
			var e = a("../display/Container"),
				f = a("../const");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.setProperties = function (a)
			{
				a && (this._properties[0] = "scale" in a ? !!a.scale : this._properties[0], this._properties[1] = "position" in a ? !!a.position : this._properties[1], this._properties[2] = "rotation" in a ? !!a.rotation : this._properties[2], this._properties[3] = "uvs" in a ? !!a.uvs : this._properties[3], this._properties[4] = "alpha" in a ? !!a.alpha : this._properties[4])
			}, d.prototype.updateTransform = function ()
			{
				this.displayObjectUpdateTransform()
			}, d.prototype.renderWebGL = function (a)
			{
				this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (a.setObjectRenderer(a.plugins.particle), a.plugins.particle.render(this))
			}, d.prototype.onChildrenChange = function (a)
			{
				var b = Math.floor(a / this._batchSize);
				b < this._bufferToUpdate && (this._bufferToUpdate = b)
			}, d.prototype.renderCanvas = function (a)
			{
				if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable)
				{
					var b = a.context,
						c = this.worldTransform,
						d = !0,
						e = 0,
						f = 0,
						g = 0,
						h = 0,
						i = a.blendModes[this.blendMode];
					i !== b.globalCompositeOperation && (b.globalCompositeOperation = i), b.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
					for (var j = 0; j < this.children.length; ++j)
					{
						var k = this.children[j];
						if (k.visible)
						{
							var l = k.texture.frame;
							if (b.globalAlpha = this.worldAlpha * k.alpha, k.rotation % (2 * Math.PI) === 0) d && (b.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), d = !1), e = k.anchor.x * (-l.width * k.scale.x) + k.position.x + .5, f = k.anchor.y * (-l.height * k.scale.y) + k.position.y + .5, g = l.width * k.scale.x, h = l.height * k.scale.y;
							else
							{
								d || (d = !0), k.displayObjectUpdateTransform();
								var m = k.worldTransform;
								a.roundPixels ? b.setTransform(m.a, m.b, m.c, m.d, 0 | m.tx, 0 | m.ty) : b.setTransform(m.a, m.b, m.c, m.d, m.tx, m.ty), e = k.anchor.x * -l.width + .5, f = k.anchor.y * -l.height + .5, g = l.width, h = l.height
							}
							b.drawImage(k.texture.baseTexture.source, l.x, l.y, l.width, l.height, e, f, g, h)
						}
					}
				}
			}, d.prototype.destroy = function ()
			{
				if (e.prototype.destroy.apply(this, arguments), this._buffers)
					for (var a = 0; a < this._buffers.length; ++a) this._buffers[a].destroy();
				this._properties = null, this._buffers = null
			}
		},
		{
			"../const": 22,
			"../display/Container": 23
		}],
		40: [function (a, b, c)
		{
			function d(a, b, c, d)
			{
				this.gl = a, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = d, this.dynamicProperties = [], this.staticProperties = [];
				for (var e = 0; e < b.length; e++)
				{
					var f = b[e];
					c[e] ? this.dynamicProperties.push(f) : this.staticProperties.push(f)
				}
				this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
			}
			d.prototype.constructor = d, b.exports = d, d.prototype.initBuffers = function ()
			{
				var a, b, c = this.gl,
					d = 0;
				for (this.dynamicStride = 0, a = 0; a < this.dynamicProperties.length; a++) b = this.dynamicProperties[a], b.offset = d, d += b.size, this.dynamicStride += b.size;
				this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, this.dynamicBuffer), c.bufferData(c.ARRAY_BUFFER, this.dynamicData, c.DYNAMIC_DRAW);
				var e = 0;
				for (this.staticStride = 0, a = 0; a < this.staticProperties.length; a++) b = this.staticProperties[a], b.offset = e, e += b.size, this.staticStride += b.size;
				this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, this.staticBuffer), c.bufferData(c.ARRAY_BUFFER, this.staticData, c.DYNAMIC_DRAW)
			}, d.prototype.uploadDynamic = function (a, b, c)
			{
				for (var d = this.gl, e = 0; e < this.dynamicProperties.length; e++)
				{
					var f = this.dynamicProperties[e];
					f.uploadFunction(a, b, c, this.dynamicData, this.dynamicStride, f.offset)
				}
				d.bindBuffer(d.ARRAY_BUFFER, this.dynamicBuffer), d.bufferSubData(d.ARRAY_BUFFER, 0, this.dynamicData)
			}, d.prototype.uploadStatic = function (a, b, c)
			{
				for (var d = this.gl, e = 0; e < this.staticProperties.length; e++)
				{
					var f = this.staticProperties[e];
					f.uploadFunction(a, b, c, this.staticData, this.staticStride, f.offset)
				}
				d.bindBuffer(d.ARRAY_BUFFER, this.staticBuffer), d.bufferSubData(d.ARRAY_BUFFER, 0, this.staticData)
			}, d.prototype.bind = function ()
			{
				var a, b, c = this.gl;
				for (c.bindBuffer(c.ARRAY_BUFFER, this.dynamicBuffer), a = 0; a < this.dynamicProperties.length; a++) b = this.dynamicProperties[a], c.vertexAttribPointer(b.attribute, b.size, c.FLOAT, !1, 4 * this.dynamicStride, 4 * b.offset);
				for (c.bindBuffer(c.ARRAY_BUFFER, this.staticBuffer), a = 0; a < this.staticProperties.length; a++) b = this.staticProperties[a], c.vertexAttribPointer(b.attribute, b.size, c.FLOAT, !1, 4 * this.staticStride, 4 * b.offset)
			}, d.prototype.destroy = function ()
			{
				this.dynamicProperties = null, this.dynamicData = null, this.gl.deleteBuffer(this.dynamicBuffer), this.staticProperties = null, this.staticData = null, this.gl.deleteBuffer(this.staticBuffer)
			}
		},
		{}],
		41: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a);
				var b = 98304;
				this.indices = new Uint16Array(b);
				for (var c = 0, d = 0; b > c; c += 6, d += 4) this.indices[c + 0] = d + 0, this.indices[c + 1] = d + 1, this.indices[c + 2] = d + 2, this.indices[c + 3] = d + 0, this.indices[c + 4] = d + 2, this.indices[c + 5] = d + 3;
				this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new i.Matrix
			}
			var e = a("../../renderers/webgl/utils/ObjectRenderer"),
				f = a("../../renderers/webgl/WebGLRenderer"),
				g = a("./ParticleShader"),
				h = a("./ParticleBuffer"),
				i = a("../../math");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, f.registerPlugin("particle", d), d.prototype.onContextChange = function ()
			{
				var a = this.renderer.gl;
				this.shader = new g(this.renderer.shaderManager), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), this.properties = [
				{
					attribute: this.shader.attributes.aVertexPosition,
					size: 2,
					uploadFunction: this.uploadVertices,
					offset: 0
				},
				{
					attribute: this.shader.attributes.aPositionCoord,
					size: 2,
					uploadFunction: this.uploadPosition,
					offset: 0
				},
				{
					attribute: this.shader.attributes.aRotation,
					size: 1,
					uploadFunction: this.uploadRotation,
					offset: 0
				},
				{
					attribute: this.shader.attributes.aTextureCoord,
					size: 2,
					uploadFunction: this.uploadUvs,
					offset: 0
				},
				{
					attribute: this.shader.attributes.aColor,
					size: 1,
					uploadFunction: this.uploadAlpha,
					offset: 0
				}]
			}, d.prototype.start = function ()
			{
				var a = this.renderer.gl;
				a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				var b = this.shader;
				this.renderer.shaderManager.setShader(b)
			}, d.prototype.render = function (a)
			{
				var b = a.children,
					c = b.length,
					d = a._maxSize,
					e = a._batchSize;
				if (0 !== c)
				{
					c > d && (c = d), a._buffers || (a._buffers = this.generateBuffers(a)), this.renderer.blendModeManager.setBlendMode(a.blendMode);
					var f = this.renderer.gl,
						g = a.worldTransform.copy(this.tempMatrix);
					g.prepend(this.renderer.currentRenderTarget.projectionMatrix), f.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, !1, g.toArray(!0)), f.uniform1f(this.shader.uniforms.uAlpha._location, a.worldAlpha);
					var h = b[0]._texture.baseTexture;
					if (h._glTextures[f.id]) f.bindTexture(f.TEXTURE_2D, h._glTextures[f.id]);
					else
					{
						if (!this.renderer.updateTexture(h)) return;
						a._properties[0] && a._properties[3] || (a._bufferToUpdate = 0)
					}
					for (var i = 0, j = 0; c > i; i += e, j += 1)
					{
						var k = c - i;
						k > e && (k = e);
						var l = a._buffers[j];
						l.uploadDynamic(b, i, k), a._bufferToUpdate === j && (l.uploadStatic(b, i, k), a._bufferToUpdate = j + 1), l.bind(this.shader), f.drawElements(f.TRIANGLES, 6 * k, f.UNSIGNED_SHORT, 0), this.renderer.drawCount++
					}
				}
			}, d.prototype.generateBuffers = function (a)
			{
				var b, c = this.renderer.gl,
					d = [],
					e = a._maxSize,
					f = a._batchSize,
					g = a._properties;
				for (b = 0; e > b; b += f) d.push(new h(c, this.properties, g, f));
				return d
			}, d.prototype.uploadVertices = function (a, b, c, d, e, f)
			{
				for (var g, h, i, j, k, l, m, n, o, p = 0; c > p; p++) g = a[b + p], h = g._texture, j = g.scale.x, k = g.scale.y, h.trim ? (i = h.trim, m = i.x - g.anchor.x * i.width, l = m + h.crop.width, o = i.y - g.anchor.y * i.height, n = o + h.crop.height) : (l = h._frame.width * (1 - g.anchor.x), m = h._frame.width * -g.anchor.x, n = h._frame.height * (1 - g.anchor.y), o = h._frame.height * -g.anchor.y), d[f] = m * j, d[f + 1] = o * k, d[f + e] = l * j, d[f + e + 1] = o * k, d[f + 2 * e] = l * j, d[f + 2 * e + 1] = n * k, d[f + 3 * e] = m * j, d[f + 3 * e + 1] = n * k, f += 4 * e
			}, d.prototype.uploadPosition = function (a, b, c, d, e, f)
			{
				for (var g = 0; c > g; g++)
				{
					var h = a[b + g].position;
					d[f] = h.x, d[f + 1] = h.y, d[f + e] = h.x, d[f + e + 1] = h.y, d[f + 2 * e] = h.x, d[f + 2 * e + 1] = h.y, d[f + 3 * e] = h.x, d[f + 3 * e + 1] = h.y, f += 4 * e
				}
			}, d.prototype.uploadRotation = function (a, b, c, d, e, f)
			{
				for (var g = 0; c > g; g++)
				{
					var h = a[b + g].rotation;
					d[f] = h, d[f + e] = h, d[f + 2 * e] = h, d[f + 3 * e] = h, f += 4 * e
				}
			}, d.prototype.uploadUvs = function (a, b, c, d, e, f)
			{
				for (var g = 0; c > g; g++)
				{
					var h = a[b + g]._texture._uvs;
					h ? (d[f] = h.x0, d[f + 1] = h.y0, d[f + e] = h.x1, d[f + e + 1] = h.y1, d[f + 2 * e] = h.x2, d[f + 2 * e + 1] = h.y2, d[f + 3 * e] = h.x3, d[f + 3 * e + 1] = h.y3, f += 4 * e) : (d[f] = 0, d[f + 1] = 0, d[f + e] = 0, d[f + e + 1] = 0, d[f + 2 * e] = 0, d[f + 2 * e + 1] = 0, d[f + 3 * e] = 0, d[f + 3 * e + 1] = 0, f += 4 * e)
				}
			}, d.prototype.uploadAlpha = function (a, b, c, d, e, f)
			{
				for (var g = 0; c > g; g++)
				{
					var h = a[b + g].alpha;
					d[f] = h, d[f + e] = h, d[f + 2 * e] = h, d[f + 3 * e] = h, f += 4 * e
				}
			}, d.prototype.destroy = function ()
			{
				this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), e.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
			}
		},
		{
			"../../math": 33,
			"../../renderers/webgl/WebGLRenderer": 49,
			"../../renderers/webgl/utils/ObjectRenderer": 63,
			"./ParticleBuffer": 40,
			"./ParticleShader": 42
		}],
		42: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"),
				{
					uAlpha:
					{
						type: "1f",
						value: 1
					}
				},
				{
					aPositionCoord: 0,
					aRotation: 0
				})
			}
			var e = a("../../renderers/webgl/shaders/TextureShader");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d
		},
		{
			"../../renderers/webgl/shaders/TextureShader": 62
		}],
		43: [function (a, b, c)
		{
			function d(a, b, c, d)
			{
				if (h.call(this), e.sayHello(a), d)
					for (var i in g.DEFAULT_RENDER_OPTIONS) "undefined" == typeof d[i] && (d[i] = g.DEFAULT_RENDER_OPTIONS[i]);
				else d = g.DEFAULT_RENDER_OPTIONS;
				this.type = g.RENDERER_TYPE.UNKNOWN, this.width = b || 800, this.height = c || 600, this.view = d.view || document.createElement("canvas"), this.resolution = d.resolution, this.transparent = d.transparent, this.autoResize = d.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = d.preserveDrawingBuffer, this.clearBeforeRender = d.clearBeforeRender, this.roundPixels = d.roundPixels, this._backgroundColor = 0, this._backgroundColorRgb = [0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = d.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = {
					worldTransform: new f.Matrix,
					worldAlpha: 1,
					children: []
				}, this._lastObjectRendered = this._tempDisplayObjectParent
			}
			var e = a("../utils"),
				f = a("../math"),
				g = a("../const"),
				h = a("eventemitter3");
			d.prototype = Object.create(h.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				backgroundColor:
				{
					get: function ()
					{
						return this._backgroundColor
					},
					set: function (a)
					{
						this._backgroundColor = a, this._backgroundColorString = e.hex2string(a), e.hex2rgb(a, this._backgroundColorRgb)
					}
				}
			}), d.prototype.resize = function (a, b)
			{
				this.width = a * this.resolution, this.height = b * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
			}, d.prototype.destroy = function (a)
			{
				a && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = g.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgb = null, this._backgroundColorString = null
			}
		},
		{
			"../const": 22,
			"../math": 33,
			"../utils": 77,
			eventemitter3: 10
		}],
		44: [function (a, b, c)
		{
			function d(a, b, c)
			{
				c = c ||
				{}, e.call(this, "Canvas", a, b, c), this.type = i.RENDERER_TYPE.CANVAS, this.context = this.view.getContext("2d",
				{
					alpha: this.transparent
				}), this.refresh = !0, this.maskManager = new f, this.smoothProperty = "imageSmoothingEnabled", this.context.imageSmoothingEnabled || (this.context.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.context.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.context.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.context.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this._mapBlendModes(), this._tempDisplayObjectParent = {
					worldTransform: new h.Matrix,
					worldAlpha: 1
				}, this.resize(a, b)
			}
			var e = a("../SystemRenderer"),
				f = a("./utils/CanvasMaskManager"),
				g = a("../../utils"),
				h = a("../../math"),
				i = a("../../const");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, g.pluginTarget.mixin(d), d.prototype.render = function (a)
			{
				this.emit("prerender");
				var b = a.parent;
				this._lastObjectRendered = a, a.parent = this._tempDisplayObjectParent, a.updateTransform(), a.parent = b, this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.context.globalCompositeOperation = this.blendModes[i.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = this._backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(a, this.context), this.emit("postrender")
			}, d.prototype.destroy = function (a)
			{
				this.destroyPlugins(), e.prototype.destroy.call(this, a), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
			}, d.prototype.renderDisplayObject = function (a, b)
			{
				var c = this.context;
				this.context = b, a.renderCanvas(this), this.context = c
			}, d.prototype.resize = function (a, b)
			{
				e.prototype.resize.call(this, a, b), this.smoothProperty && (this.context[this.smoothProperty] = i.SCALE_MODES.DEFAULT === i.SCALE_MODES.LINEAR)
			}, d.prototype._mapBlendModes = function ()
			{
				this.blendModes || (this.blendModes = {}, g.canUseNewCanvasBlendModes() ? (this.blendModes[i.BLEND_MODES.NORMAL] = "source-over", this.blendModes[i.BLEND_MODES.ADD] = "lighter", this.blendModes[i.BLEND_MODES.MULTIPLY] = "multiply", this.blendModes[i.BLEND_MODES.SCREEN] = "screen", this.blendModes[i.BLEND_MODES.OVERLAY] = "overlay", this.blendModes[i.BLEND_MODES.DARKEN] = "darken", this.blendModes[i.BLEND_MODES.LIGHTEN] = "lighten", this.blendModes[i.BLEND_MODES.COLOR_DODGE] = "color-dodge", this.blendModes[i.BLEND_MODES.COLOR_BURN] = "color-burn", this.blendModes[i.BLEND_MODES.HARD_LIGHT] = "hard-light", this.blendModes[i.BLEND_MODES.SOFT_LIGHT] = "soft-light", this.blendModes[i.BLEND_MODES.DIFFERENCE] = "difference", this.blendModes[i.BLEND_MODES.EXCLUSION] = "exclusion", this.blendModes[i.BLEND_MODES.HUE] = "hue", this.blendModes[i.BLEND_MODES.SATURATION] = "saturate", this.blendModes[i.BLEND_MODES.COLOR] = "color", this.blendModes[i.BLEND_MODES.LUMINOSITY] = "luminosity") : (this.blendModes[i.BLEND_MODES.NORMAL] = "source-over", this.blendModes[i.BLEND_MODES.ADD] = "lighter", this.blendModes[i.BLEND_MODES.MULTIPLY] = "source-over", this.blendModes[i.BLEND_MODES.SCREEN] = "source-over", this.blendModes[i.BLEND_MODES.OVERLAY] = "source-over", this.blendModes[i.BLEND_MODES.DARKEN] = "source-over", this.blendModes[i.BLEND_MODES.LIGHTEN] = "source-over", this.blendModes[i.BLEND_MODES.COLOR_DODGE] = "source-over", this.blendModes[i.BLEND_MODES.COLOR_BURN] = "source-over", this.blendModes[i.BLEND_MODES.HARD_LIGHT] = "source-over", this.blendModes[i.BLEND_MODES.SOFT_LIGHT] = "source-over", this.blendModes[i.BLEND_MODES.DIFFERENCE] = "source-over", this.blendModes[i.BLEND_MODES.EXCLUSION] = "source-over", this.blendModes[i.BLEND_MODES.HUE] = "source-over", this.blendModes[i.BLEND_MODES.SATURATION] = "source-over", this.blendModes[i.BLEND_MODES.COLOR] = "source-over", this.blendModes[i.BLEND_MODES.LUMINOSITY] = "source-over"))
			}
		},
		{
			"../../const": 22,
			"../../math": 33,
			"../../utils": 77,
			"../SystemRenderer": 43,
			"./utils/CanvasMaskManager": 47
		}],
		45: [function (a, b, c)
		{
			function d(a, b)
			{
				this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = a, this.canvas.height = b
			}
			d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				width:
				{
					get: function ()
					{
						return this.canvas.width
					},
					set: function (a)
					{
						this.canvas.width = a
					}
				},
				height:
				{
					get: function ()
					{
						return this.canvas.height
					},
					set: function (a)
					{
						this.canvas.height = a
					}
				}
			}), d.prototype.clear = function ()
			{
				this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
			}, d.prototype.resize = function (a, b)
			{
				this.canvas.width = a, this.canvas.height = b
			}, d.prototype.destroy = function ()
			{
				this.context = null, this.canvas = null
			}
		},
		{}],
		46: [function (a, b, c)
		{
			var d = a("../../../const"),
				e = {};
			b.exports = e, e.renderGraphics = function (a, b)
			{
				var c = a.worldAlpha;
				a.dirty && (this.updateGraphicsTint(a), a.dirty = !1);
				for (var e = 0; e < a.graphicsData.length; e++)
				{
					var f = a.graphicsData[e],
						g = f.shape,
						h = f._fillTint,
						i = f._lineTint;
					if (b.lineWidth = f.lineWidth, f.type === d.SHAPES.POLY)
					{
						b.beginPath();
						var j = g.points;
						b.moveTo(j[0], j[1]);
						for (var k = 1; k < j.length / 2; k++) b.lineTo(j[2 * k], j[2 * k + 1]);
						g.closed && b.lineTo(j[0], j[1]), j[0] === j[j.length - 2] && j[1] === j[j.length - 1] && b.closePath(), f.fill && (b.globalAlpha = f.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | h)
								.toString(16))
							.substr(-6), b.fill()), f.lineWidth && (b.globalAlpha = f.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | i)
								.toString(16))
							.substr(-6), b.stroke())
					}
					else if (f.type === d.SHAPES.RECT)(f.fillColor || 0 === f.fillColor) && (b.globalAlpha = f.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | h)
							.toString(16))
						.substr(-6), b.fillRect(g.x, g.y, g.width, g.height)), f.lineWidth && (b.globalAlpha = f.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | i)
							.toString(16))
						.substr(-6), b.strokeRect(g.x, g.y, g.width, g.height));
					else if (f.type === d.SHAPES.CIRC) b.beginPath(), b.arc(g.x, g.y, g.radius, 0, 2 * Math.PI), b.closePath(), f.fill && (b.globalAlpha = f.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | h)
							.toString(16))
						.substr(-6), b.fill()), f.lineWidth && (b.globalAlpha = f.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | i)
							.toString(16))
						.substr(-6), b.stroke());
					else if (f.type === d.SHAPES.ELIP)
					{
						var l = 2 * g.width,
							m = 2 * g.height,
							n = g.x - l / 2,
							o = g.y - m / 2;
						b.beginPath();
						var p = .5522848,
							q = l / 2 * p,
							r = m / 2 * p,
							s = n + l,
							t = o + m,
							u = n + l / 2,
							v = o + m / 2;
						b.moveTo(n, v), b.bezierCurveTo(n, v - r, u - q, o, u, o), b.bezierCurveTo(u + q, o, s, v - r, s, v), b.bezierCurveTo(s, v + r, u + q, t, u, t), b.bezierCurveTo(u - q, t, n, v + r, n, v), b.closePath(), f.fill && (b.globalAlpha = f.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | h)
								.toString(16))
							.substr(-6), b.fill()), f.lineWidth && (b.globalAlpha = f.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | i)
								.toString(16))
							.substr(-6), b.stroke())
					}
					else if (f.type === d.SHAPES.RREC)
					{
						var w = g.x,
							x = g.y,
							y = g.width,
							z = g.height,
							A = g.radius,
							B = Math.min(y, z) / 2 | 0;
						A = A > B ? B : A, b.beginPath(), b.moveTo(w, x + A), b.lineTo(w, x + z - A), b.quadraticCurveTo(w, x + z, w + A, x + z), b.lineTo(w + y - A, x + z), b.quadraticCurveTo(w + y, x + z, w + y, x + z - A), b.lineTo(w + y, x + A), b.quadraticCurveTo(w + y, x, w + y - A, x), b.lineTo(w + A, x), b.quadraticCurveTo(w, x, w, x + A), b.closePath(), (f.fillColor || 0 === f.fillColor) && (b.globalAlpha = f.fillAlpha * c, b.fillStyle = "#" + ("00000" + (0 | h)
								.toString(16))
							.substr(-6), b.fill()), f.lineWidth && (b.globalAlpha = f.lineAlpha * c, b.strokeStyle = "#" + ("00000" + (0 | i)
								.toString(16))
							.substr(-6), b.stroke())
					}
				}
			}, e.renderGraphicsMask = function (a, b)
			{
				var c = a.graphicsData.length;
				if (0 !== c)
				{
					b.beginPath();
					for (var e = 0; c > e; e++)
					{
						var f = a.graphicsData[e],
							g = f.shape;
						if (f.type === d.SHAPES.POLY)
						{
							var h = g.points;
							b.moveTo(h[0], h[1]);
							for (var i = 1; i < h.length / 2; i++) b.lineTo(h[2 * i], h[2 * i + 1]);
							h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && b.closePath()
						}
						else if (f.type === d.SHAPES.RECT) b.rect(g.x, g.y, g.width, g.height), b.closePath();
						else if (f.type === d.SHAPES.CIRC) b.arc(g.x, g.y, g.radius, 0, 2 * Math.PI), b.closePath();
						else if (f.type === d.SHAPES.ELIP)
						{
							var j = 2 * g.width,
								k = 2 * g.height,
								l = g.x - j / 2,
								m = g.y - k / 2,
								n = .5522848,
								o = j / 2 * n,
								p = k / 2 * n,
								q = l + j,
								r = m + k,
								s = l + j / 2,
								t = m + k / 2;
							b.moveTo(l, t), b.bezierCurveTo(l, t - p, s - o, m, s, m), b.bezierCurveTo(s + o, m, q, t - p, q, t), b.bezierCurveTo(q, t + p, s + o, r, s, r), b.bezierCurveTo(s - o, r, l, t + p, l, t), b.closePath()
						}
						else if (f.type === d.SHAPES.RREC)
						{
							var u = g.x,
								v = g.y,
								w = g.width,
								x = g.height,
								y = g.radius,
								z = Math.min(w, x) / 2 | 0;
							y = y > z ? z : y, b.moveTo(u, v + y), b.lineTo(u, v + x - y), b.quadraticCurveTo(u, v + x, u + y, v + x), b.lineTo(u + w - y, v + x), b.quadraticCurveTo(u + w, v + x, u + w, v + x - y), b.lineTo(u + w, v + y), b.quadraticCurveTo(u + w, v, u + w - y, v), b.lineTo(u + y, v), b.quadraticCurveTo(u, v, u, v + y), b.closePath()
						}
					}
				}
			}, e.updateGraphicsTint = function (a)
			{
				if (16777215 !== a.tint || a._prevTint !== a.tint)
				{
					a._prevTint = a.tint;
					for (var b = (a.tint >> 16 & 255) / 255, c = (a.tint >> 8 & 255) / 255, d = (255 & a.tint) / 255, e = 0; e < a.graphicsData.length; e++)
					{
						var f = a.graphicsData[e],
							g = 0 | f.fillColor,
							h = 0 | f.lineColor;
						f._fillTint = ((g >> 16 & 255) / 255 * b * 255 << 16) + ((g >> 8 & 255) / 255 * c * 255 << 8) + (255 & g) / 255 * d * 255, f._lineTint = ((h >> 16 & 255) / 255 * b * 255 << 16) + ((h >> 8 & 255) / 255 * c * 255 << 8) + (255 & h) / 255 * d * 255
					}
				}
			}
		},
		{
			"../../../const": 22
		}],
		47: [function (a, b, c)
		{
			function d()
			{}
			var e = a("./CanvasGraphics");
			d.prototype.constructor = d, b.exports = d, d.prototype.pushMask = function (a, b)
			{
				b.context.save();
				var c = a.alpha,
					d = a.worldTransform,
					f = b.resolution;
				b.context.setTransform(d.a * f, d.b * f, d.c * f, d.d * f, d.tx * f, d.ty * f), a.texture || (e.renderGraphicsMask(a, b.context), b.context.clip()), a.worldAlpha = c
			}, d.prototype.popMask = function (a)
			{
				a.context.restore()
			}, d.prototype.destroy = function () {}
		},
		{
			"./CanvasGraphics": 46
		}],
		48: [function (a, b, c)
		{
			var d = a("../../../utils"),
				e = {};
			b.exports = e, e.getTintedTexture = function (a, b)
			{
				var c = a.texture;
				b = e.roundColor(b);
				var d = "#" + ("00000" + (0 | b)
						.toString(16))
					.substr(-6);
				if (c.tintCache = c.tintCache ||
					{}, c.tintCache[d]) return c.tintCache[d];
				var f = e.canvas || document.createElement("canvas");
				if (e.tintMethod(c, b, f), e.convertTintToImage)
				{
					var g = new Image;
					g.src = f.toDataURL(), c.tintCache[d] = g
				}
				else c.tintCache[d] = f, e.canvas = null;
				return f
			}, e.tintWithMultiply = function (a, b, c)
			{
				var d = c.getContext("2d"),
					e = a.baseTexture.resolution,
					f = a.crop.clone();
				f.x *= e, f.y *= e, f.width *= e, f.height *= e, c.width = f.width, c.height = f.height, d.fillStyle = "#" + ("00000" + (0 | b)
						.toString(16))
					.substr(-6), d.fillRect(0, 0, f.width, f.height), d.globalCompositeOperation = "multiply", d.drawImage(a.baseTexture.source, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height), d.globalCompositeOperation = "destination-atop", d.drawImage(a.baseTexture.source, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height)
			}, e.tintWithOverlay = function (a, b, c)
			{
				var d = c.getContext("2d"),
					e = a.baseTexture.resolution,
					f = a.crop.clone();
				f.x *= e, f.y *= e, f.width *= e, f.height *= e, c.width = f.width, c.height = f.height, d.globalCompositeOperation = "copy", d.fillStyle = "#" + ("00000" + (0 | b)
						.toString(16))
					.substr(-6), d.fillRect(0, 0, f.width, f.height), d.globalCompositeOperation = "destination-atop", d.drawImage(a.baseTexture.source, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height)
			}, e.tintWithPerPixel = function (a, b, c)
			{
				var e = c.getContext("2d"),
					f = a.baseTexture.resolution,
					g = a.crop.clone();
				g.x *= f, g.y *= f, g.width *= f, g.height *= f, c.width = g.width, c.height = g.height, e.globalCompositeOperation = "copy", e.drawImage(a.baseTexture.source, g.x, g.y, g.width, g.height, 0, 0, g.width, g.height);
				for (var h = d.hex2rgb(b), i = h[0], j = h[1], k = h[2], l = e.getImageData(0, 0, g.width, g.height), m = l.data, n = 0; n < m.length; n += 4) m[n + 0] *= i, m[n + 1] *= j, m[n + 2] *= k;
				e.putImageData(l, 0, 0)
			}, e.roundColor = function (a)
			{
				var b = e.cacheStepsPerColorChannel,
					c = d.hex2rgb(a);
				return c[0] = Math.min(255, c[0] / b * b), c[1] = Math.min(255, c[1] / b * b), c[2] = Math.min(255, c[2] / b * b), d.rgb2hex(c)
			}, e.cacheStepsPerColorChannel = 8, e.convertTintToImage = !1, e.canUseMultiply = d.canUseNewCanvasBlendModes(), e.tintMethod = e.canUseMultiply ? e.tintWithMultiply : e.tintWithPerPixel
		},
		{
			"../../../utils": 77
		}],
		49: [function (a, b, c)
		{
			function d(a, b, c)
			{
				c = c ||
				{}, e.call(this, "WebGL", a, b, c), this.type = o.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._useFXAA = !!c.forceFXAA && c.antialias, this._FXAAFilter = null, this._contextOptions = {
					alpha: this.transparent,
					antialias: c.antialias,
					premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
					stencil: !0,
					preserveDrawingBuffer: c.preserveDrawingBuffer
				}, this.drawCount = 0, this.shaderManager = new f(this), this.maskManager = new g(this), this.stencilManager = new h(this), this.filterManager = new i(this), this.blendModeManager = new j(this), this.currentRenderTarget = null, this.currentRenderer = new l(this), this.initPlugins(), this._createContext(), this._initContext(), this._mapGlModes(), this._managedTextures = [], this._renderTargetStack = []
			}
			var e = a("../SystemRenderer"),
				f = a("./managers/ShaderManager"),
				g = a("./managers/MaskManager"),
				h = a("./managers/StencilManager"),
				i = a("./managers/FilterManager"),
				j = a("./managers/BlendModeManager"),
				k = a("./utils/RenderTarget"),
				l = a("./utils/ObjectRenderer"),
				m = a("./filters/FXAAFilter"),
				n = a("../../utils"),
				o = a("../../const");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, n.pluginTarget.mixin(d), d.glContextId = 0, d.prototype._createContext = function ()
			{
				var a = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
				if (this.gl = a, !a) throw new Error("This browser does not support webGL. Try using the canvas renderer");
				this.glContextId = d.glContextId++, a.id = this.glContextId, a.renderer = this
			}, d.prototype._initContext = function ()
			{
				var a = this.gl;
				a.disable(a.DEPTH_TEST), a.disable(a.CULL_FACE), a.enable(a.BLEND), this.renderTarget = new k(a, this.width, this.height, null, this.resolution, !0), this.setRenderTarget(this.renderTarget), this.emit("context", a), this.resize(this.width, this.height), this._useFXAA || (this._useFXAA = this._contextOptions.antialias && !a.getContextAttributes()
					.antialias), this._useFXAA && (window.console.warn("FXAA antialiasing being used instead of native antialiasing"), this._FXAAFilter = [new m])
			}, d.prototype.render = function (a)
			{
				if (this.emit("prerender"), !this.gl.isContextLost())
				{
					this.drawCount = 0, this._lastObjectRendered = a, this._useFXAA && (this._FXAAFilter[0].uniforms.resolution.value.x = this.width, this._FXAAFilter[0].uniforms.resolution.value.y = this.height, a.filterArea = this.renderTarget.size, a.filters = this._FXAAFilter);
					var b = a.parent;
					a.parent = this._tempDisplayObjectParent, a.updateTransform(), a.parent = b;
					var c = this.gl;
					this.setRenderTarget(this.renderTarget), this.clearBeforeRender && (this.transparent ? c.clearColor(0, 0, 0, 0) : c.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1), c.clear(c.COLOR_BUFFER_BIT)), this.renderDisplayObject(a, this.renderTarget), this.emit("postrender")
				}
			}, d.prototype.renderDisplayObject = function (a, b, c)
			{
				this.setRenderTarget(b), c && b.clear(), this.filterManager.setFilterStack(b.filterStack), a.renderWebGL(this), this.currentRenderer.flush()
			}, d.prototype.setObjectRenderer = function (a)
			{
				this.currentRenderer !== a && (this.currentRenderer.stop(), this.currentRenderer = a, this.currentRenderer.start())
			}, d.prototype.setRenderTarget = function (a)
			{
				this.currentRenderTarget !== a && (this.currentRenderTarget = a, this.currentRenderTarget.activate(), this.stencilManager.setMaskStack(a.stencilMaskStack))
			}, d.prototype.resize = function (a, b)
			{
				e.prototype.resize.call(this, a, b), this.filterManager.resize(a, b), this.renderTarget.resize(a, b), this.currentRenderTarget === this.renderTarget && (this.renderTarget.activate(), this.gl.viewport(0, 0, this.width, this.height))
			}, d.prototype.updateTexture = function (a)
			{
				if (a = a.baseTexture || a, a.hasLoaded)
				{
					var b = this.gl;
					return a._glTextures[b.id] || (a._glTextures[b.id] = b.createTexture(), a.on("update", this.updateTexture, this), a.on("dispose", this.destroyTexture, this), this._managedTextures.push(a)), b.bindTexture(b.TEXTURE_2D, a._glTextures[b.id]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultipliedAlpha), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, a.scaleMode === o.SCALE_MODES.LINEAR ? b.LINEAR : b.NEAREST), a.mipmap && a.isPowerOfTwo ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, a.scaleMode === o.SCALE_MODES.LINEAR ? b.LINEAR_MIPMAP_LINEAR : b.NEAREST_MIPMAP_NEAREST), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, a.scaleMode === o.SCALE_MODES.LINEAR ? b.LINEAR : b.NEAREST), a.isPowerOfTwo ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)), a._glTextures[b.id]
				}
			}, d.prototype.destroyTexture = function (a, b)
			{
				if (a = a.baseTexture || a, a.hasLoaded && a._glTextures[this.gl.id] && (this.gl.deleteTexture(a._glTextures[this.gl.id]), delete a._glTextures[this.gl.id], !b))
				{
					var c = this._managedTextures.indexOf(a); - 1 !== c && n.removeItems(this._managedTextures, c, 1)
				}
			}, d.prototype.handleContextLost = function (a)
			{
				a.preventDefault()
			}, d.prototype.handleContextRestored = function ()
			{
				this._initContext();
				for (var a = 0; a < this._managedTextures.length; ++a)
				{
					var b = this._managedTextures[a];
					b._glTextures[this.gl.id] && delete b._glTextures[this.gl.id]
				}
			}, d.prototype.destroy = function (a)
			{
				this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored);
				for (var b = 0; b < this._managedTextures.length; ++b)
				{
					var c = this._managedTextures[b];
					this.destroyTexture(c, !0), c.off("update", this.updateTexture, this), c.off("dispose", this.destroyTexture, this)
				}
				e.prototype.destroy.call(this, a), this.uid = 0, this.shaderManager.destroy(), this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.blendModeManager.destroy(), this.shaderManager = null, this.maskManager = null, this.filterManager = null, this.blendModeManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this._managedTextures = null, this.drawCount = 0, this.gl.useProgram(null), this.gl = null
			}, d.prototype._mapGlModes = function ()
			{
				var a = this.gl;
				this.blendModes || (this.blendModes = {}, this.blendModes[o.BLEND_MODES.NORMAL] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.ADD] = [a.ONE, a.DST_ALPHA], this.blendModes[o.BLEND_MODES.MULTIPLY] = [a.DST_COLOR, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.SCREEN] = [a.ONE, a.ONE_MINUS_SRC_COLOR], this.blendModes[o.BLEND_MODES.OVERLAY] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.DARKEN] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.LIGHTEN] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.COLOR_DODGE] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.COLOR_BURN] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.HARD_LIGHT] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.SOFT_LIGHT] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.DIFFERENCE] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.EXCLUSION] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.HUE] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.SATURATION] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.COLOR] = [a.ONE, a.ONE_MINUS_SRC_ALPHA], this.blendModes[o.BLEND_MODES.LUMINOSITY] = [a.ONE, a.ONE_MINUS_SRC_ALPHA]), this.drawModes || (this.drawModes = {}, this.drawModes[o.DRAW_MODES.POINTS] = a.POINTS, this.drawModes[o.DRAW_MODES.LINES] = a.LINES, this.drawModes[o.DRAW_MODES.LINE_LOOP] = a.LINE_LOOP, this.drawModes[o.DRAW_MODES.LINE_STRIP] = a.LINE_STRIP, this.drawModes[o.DRAW_MODES.TRIANGLES] = a.TRIANGLES, this.drawModes[o.DRAW_MODES.TRIANGLE_STRIP] = a.TRIANGLE_STRIP, this.drawModes[o.DRAW_MODES.TRIANGLE_FAN] = a.TRIANGLE_FAN)
			}
		},
		{
			"../../const": 22,
			"../../utils": 77,
			"../SystemRenderer": 43,
			"./filters/FXAAFilter": 51,
			"./managers/BlendModeManager": 53,
			"./managers/FilterManager": 54,
			"./managers/MaskManager": 55,
			"./managers/ShaderManager": 56,
			"./managers/StencilManager": 57,
			"./utils/ObjectRenderer": 63,
			"./utils/RenderTarget": 65
		}],
		50: [function (a, b, c)
		{
			function d(a, b, c)
			{
				this.shaders = [], this.padding = 0, this.uniforms = c ||
				{}, this.vertexSrc = a || e.defaultVertexSrc, this.fragmentSrc = b || e.defaultFragmentSrc
			}
			var e = a("../shaders/TextureShader");
			d.prototype.constructor = d, b.exports = d, d.prototype.getShader = function (a)
			{
				var b = a.gl,
					c = this.shaders[b.id];
				return c || (c = new e(a.shaderManager, this.vertexSrc, this.fragmentSrc, this.uniforms, this.attributes), this.shaders[b.id] = c), c
			}, d.prototype.applyFilter = function (a, b, c, d)
			{
				var e = this.getShader(a);
				a.filterManager.applyFilter(e, b, c, d)
			}, d.prototype.syncUniform = function (a)
			{
				for (var b = 0, c = this.shaders.length; c > b; ++b) this.shaders[b].syncUniform(a)
			}
		},
		{
			"../shaders/TextureShader": 62
		}],
		51: [function (a, b, c)
		{
			function d()
			{
				e.call(this, "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',
				{
					resolution:
					{
						type: "v2",
						value:
						{
							x: 1,
							y: 1
						}
					}
				})
			}
			var e = a("./AbstractFilter");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager,
					e = this.getShader(a);
				d.applyFilter(e, b, c)
			}
		},
		{
			"./AbstractFilter": 50
		}],
		52: [function (a, b, c)
		{
			function d(a)
			{
				var b = new f.Matrix;
				e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n",
				{
					mask:
					{
						type: "sampler2D",
						value: a._texture
					},
					alpha:
					{
						type: "f",
						value: 1
					},
					otherMatrix:
					{
						type: "mat3",
						value: b.toArray(!0)
					}
				}), this.maskSprite = a, this.maskMatrix = b
			}
			var e = a("./AbstractFilter"),
				f = a("../../../math");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager;
				this.uniforms.mask.value = this.maskSprite._texture, d.calculateMappedMatrix(b.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.alpha.value = this.maskSprite.worldAlpha;
				var e = this.getShader(a);
				d.applyFilter(e, b, c)
			}, Object.defineProperties(d.prototype,
			{
				map:
				{
					get: function ()
					{
						return this.uniforms.mask.value
					},
					set: function (a)
					{
						this.uniforms.mask.value = a
					}
				},
				offset:
				{
					get: function ()
					{
						return this.uniforms.offset.value
					},
					set: function (a)
					{
						this.uniforms.offset.value = a
					}
				}
			})
		},
		{
			"../../../math": 33,
			"./AbstractFilter": 50
		}],
		53: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a), this.currentBlendMode = 99999
			}
			var e = a("./WebGLManager");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.setBlendMode = function (a)
			{
				if (this.currentBlendMode === a) return !1;
				this.currentBlendMode = a;
				var b = this.renderer.blendModes[this.currentBlendMode];
				return this.renderer.gl.blendFunc(b[0], b[1]), !0
			}
		},
		{
			"./WebGLManager": 58
		}],
		54: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a), this.filterStack = [], this.filterStack.push(
				{
					renderTarget: a.currentRenderTarget,
					filter: [],
					bounds: null
				}), this.texturePool = [], this.textureSize = new i.Rectangle(0, 0, a.width, a.height), this.currentFrame = null
			}
			var e = a("./WebGLManager"),
				f = a("../utils/RenderTarget"),
				g = a("../../../const"),
				h = a("../utils/Quad"),
				i = a("../../../math");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.onContextChange = function ()
			{
				this.texturePool.length = 0;
				var a = this.renderer.gl;
				this.quad = new h(a)
			}, d.prototype.setFilterStack = function (a)
			{
				this.filterStack = a
			}, d.prototype.pushFilter = function (a, b)
			{
				var c = a.filterArea ? a.filterArea.clone() : a.getBounds();
				c.x = 0 | c.x, c.y = 0 | c.y, c.width = 0 | c.width, c.height = 0 | c.height;
				var d = 0 | b[0].padding;
				if (c.x -= d, c.y -= d, c.width += 2 * d, c.height += 2 * d, this.renderer.currentRenderTarget.transform)
				{
					var e = this.renderer.currentRenderTarget.transform;
					c.x += e.tx, c.y += e.ty, this.capFilterArea(c), c.x -= e.tx, c.y -= e.ty
				}
				else this.capFilterArea(c);
				if (c.width > 0 && c.height > 0)
				{
					this.currentFrame = c;
					var f = this.getRenderTarget();
					this.renderer.setRenderTarget(f), f.clear(), this.filterStack.push(
					{
						renderTarget: f,
						filter: b
					})
				}
				else this.filterStack.push(
				{
					renderTarget: null,
					filter: b
				})
			}, d.prototype.popFilter = function ()
			{
				var a = this.filterStack.pop(),
					b = this.filterStack[this.filterStack.length - 1],
					c = a.renderTarget;
				if (a.renderTarget)
				{
					var d = b.renderTarget,
						e = this.renderer.gl;
					this.currentFrame = c.frame, this.quad.map(this.textureSize, c.frame), e.bindBuffer(e.ARRAY_BUFFER, this.quad.vertexBuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
					var f = a.filter;
					if (e.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, e.FLOAT, !1, 0, 0), e.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, e.FLOAT, !1, 0, 32), e.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, e.FLOAT, !1, 0, 64), this.renderer.blendModeManager.setBlendMode(g.BLEND_MODES.NORMAL), 1 === f.length) f[0].uniforms.dimensions && (f[0].uniforms.dimensions.value[0] = this.renderer.width, f[0].uniforms.dimensions.value[1] = this.renderer.height, f[0].uniforms.dimensions.value[2] = this.quad.vertices[0], f[0].uniforms.dimensions.value[3] = this.quad.vertices[5]), f[0].applyFilter(this.renderer, c, d), this.returnRenderTarget(c);
					else
					{
						for (var h = c, i = this.getRenderTarget(!0), j = 0; j < f.length - 1; j++)
						{
							var k = f[j];
							k.uniforms.dimensions && (k.uniforms.dimensions.value[0] = this.renderer.width, k.uniforms.dimensions.value[1] = this.renderer.height, k.uniforms.dimensions.value[2] = this.quad.vertices[0], k.uniforms.dimensions.value[3] = this.quad.vertices[5]), k.applyFilter(this.renderer, h, i);
							var l = h;
							h = i, i = l
						}
						f[f.length - 1].applyFilter(this.renderer, h, d), this.returnRenderTarget(h), this.returnRenderTarget(i)
					}
					return a.filter
				}
			}, d.prototype.getRenderTarget = function (a)
			{
				var b = this.texturePool.pop() || new f(this.renderer.gl, this.textureSize.width, this.textureSize.height, g.SCALE_MODES.LINEAR, this.renderer.resolution * g.FILTER_RESOLUTION);
				return b.frame = this.currentFrame, a && b.clear(!0), b
			}, d.prototype.returnRenderTarget = function (a)
			{
				this.texturePool.push(a)
			}, d.prototype.applyFilter = function (a, b, c, d)
			{
				var e = this.renderer.gl;
				this.renderer.setRenderTarget(c), d && c.clear(), this.renderer.shaderManager.setShader(a), a.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), a.syncUniforms(), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, b.texture), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), this.renderer.drawCount++
			}, d.prototype.calculateMappedMatrix = function (a, b, c)
			{
				var d = b.worldTransform.copy(i.Matrix.TEMP_MATRIX),
					e = b._texture.baseTexture,
					f = c.identity(),
					g = this.textureSize.height / this.textureSize.width;
				f.translate(a.x / this.textureSize.width, a.y / this.textureSize.height), f.scale(1, g);
				var h = this.textureSize.width / e.width,
					j = this.textureSize.height / e.height;
				return d.tx /= e.width * h, d.ty /= e.width * h, d.invert(), f.prepend(d), f.scale(1, 1 / g), f.scale(h, j), f.translate(b.anchor.x, b.anchor.y), f
			}, d.prototype.capFilterArea = function (a)
			{
				a.x < 0 && (a.width += a.x, a.x = 0), a.y < 0 && (a.height += a.y, a.y = 0), a.x + a.width > this.textureSize.width && (a.width = this.textureSize.width - a.x), a.y + a.height > this.textureSize.height && (a.height = this.textureSize.height - a.y)
			}, d.prototype.resize = function (a, b)
			{
				this.textureSize.width = a, this.textureSize.height = b;
				for (var c = 0; c < this.texturePool.length; c++) this.texturePool[c].resize(a, b)
			}, d.prototype.destroy = function ()
			{
				this.quad.destroy(), e.prototype.destroy.call(this), this.filterStack = null, this.offsetY = 0;
				for (var a = 0; a < this.texturePool.length; a++) this.texturePool[a].destroy();
				this.texturePool = null
			}
		},
		{
			"../../../const": 22,
			"../../../math": 33,
			"../utils/Quad": 64,
			"../utils/RenderTarget": 65,
			"./WebGLManager": 58
		}],
		55: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a), this.stencilStack = [], this.reverse = !0, this.count = 0, this.alphaMaskPool = []
			}
			var e = a("./WebGLManager"),
				f = a("../filters/SpriteMaskFilter");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.pushMask = function (a, b)
			{
				b.texture ? this.pushSpriteMask(a, b) : this.pushStencilMask(a, b)
			}, d.prototype.popMask = function (a, b)
			{
				b.texture ? this.popSpriteMask(a, b) : this.popStencilMask(a, b)
			}, d.prototype.pushSpriteMask = function (a, b)
			{
				var c = this.alphaMaskPool.pop();
				c || (c = [new f(b)]), c[0].maskSprite = b, this.renderer.filterManager.pushFilter(a, c)
			}, d.prototype.popSpriteMask = function ()
			{
				var a = this.renderer.filterManager.popFilter();
				this.alphaMaskPool.push(a)
			}, d.prototype.pushStencilMask = function (a, b)
			{
				this.renderer.stencilManager.pushMask(b)
			}, d.prototype.popStencilMask = function (a, b)
			{
				this.renderer.stencilManager.popMask(b)
			}
		},
		{
			"../filters/SpriteMaskFilter": 52,
			"./WebGLManager": 58
		}],
		56: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a), this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
				for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
				this.stack = [], this._currentId = -1, this.currentShader = null
			}
			var e = a("./WebGLManager"),
				f = a("../shaders/TextureShader"),
				g = a("../shaders/ComplexPrimitiveShader"),
				h = a("../shaders/PrimitiveShader"),
				i = a("../../../utils");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, i.pluginTarget.mixin(d), b.exports = d, d.prototype.onContextChange = function ()
			{
				this.initPlugins();
				var a = this.renderer.gl;
				this.maxAttibs = a.getParameter(a.MAX_VERTEX_ATTRIBS), this.attribState = [];
				for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
				this.defaultShader = new f(this), this.primitiveShader = new h(this), this.complexPrimitiveShader = new g(this)
			}, d.prototype.setAttribs = function (a)
			{
				var b;
				for (b = 0; b < this.tempAttribState.length; b++) this.tempAttribState[b] = !1;
				for (var c in a) this.tempAttribState[a[c]] = !0;
				var d = this.renderer.gl;
				for (b = 0; b < this.attribState.length; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.attribState[b] ? d.enableVertexAttribArray(b) : d.disableVertexAttribArray(b))
			}, d.prototype.setShader = function (a)
			{
				return this._currentId === a.uid ? !1 : (this._currentId = a.uid, this.currentShader = a, this.renderer.gl.useProgram(a.program), this.setAttribs(a.attributes), !0)
			}, d.prototype.destroy = function ()
			{
				this.primitiveShader.destroy(), this.complexPrimitiveShader.destroy(), e.prototype.destroy.call(this), this.destroyPlugins(), this.attribState = null, this.tempAttribState = null
			}
		},
		{
			"../../../utils": 77,
			"../shaders/ComplexPrimitiveShader": 59,
			"../shaders/PrimitiveShader": 60,
			"../shaders/TextureShader": 62,
			"./WebGLManager": 58
		}],
		57: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a), this.stencilMaskStack = null
			}
			var e = a("./WebGLManager"),
				f = a("../../../utils");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.setMaskStack = function (a)
			{
				this.stencilMaskStack = a;
				var b = this.renderer.gl;
				0 === a.stencilStack.length ? b.disable(b.STENCIL_TEST) : b.enable(b.STENCIL_TEST)
			}, d.prototype.pushStencil = function (a, b)
			{
				this.renderer.currentRenderTarget.attachStencilBuffer();
				var c = this.renderer.gl,
					d = this.stencilMaskStack;
				this.bindGraphics(a, b), 0 === d.stencilStack.length && (c.enable(c.STENCIL_TEST), c.clear(c.STENCIL_BUFFER_BIT), d.reverse = !0, d.count = 0), d.stencilStack.push(b);
				var e = d.count;
				c.colorMask(!1, !1, !1, !1), c.stencilFunc(c.ALWAYS, 0, 255), c.stencilOp(c.KEEP, c.KEEP, c.INVERT), 1 === b.mode ? (c.drawElements(c.TRIANGLE_FAN, b.indices.length - 4, c.UNSIGNED_SHORT, 0), d.reverse ? (c.stencilFunc(c.EQUAL, 255 - e, 255), c.stencilOp(c.KEEP, c.KEEP, c.DECR)) : (c.stencilFunc(c.EQUAL, e, 255), c.stencilOp(c.KEEP, c.KEEP, c.INCR)), c.drawElements(c.TRIANGLE_FAN, 4, c.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), d.reverse ? c.stencilFunc(c.EQUAL, 255 - (e + 1), 255) : c.stencilFunc(c.EQUAL, e + 1, 255), d.reverse = !d.reverse) : (d.reverse ? (c.stencilFunc(c.EQUAL, e, 255), c.stencilOp(c.KEEP, c.KEEP, c.INCR)) : (c.stencilFunc(c.EQUAL, 255 - e, 255), c.stencilOp(c.KEEP, c.KEEP, c.DECR)), c.drawElements(c.TRIANGLE_STRIP, b.indices.length, c.UNSIGNED_SHORT, 0), d.reverse ? c.stencilFunc(c.EQUAL, e + 1, 255) : c.stencilFunc(c.EQUAL, 255 - (e + 1), 255)), c.colorMask(!0, !0, !0, !0), c.stencilOp(c.KEEP, c.KEEP, c.KEEP), d.count++
			}, d.prototype.bindGraphics = function (a, b)
			{
				var c, d = this.renderer.gl;
				1 === b.mode ? (c = this.renderer.shaderManager.complexPrimitiveShader, this.renderer.shaderManager.setShader(c), d.uniformMatrix3fv(c.uniforms.translationMatrix._location, !1, a.worldTransform.toArray(!0)), d.uniformMatrix3fv(c.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), d.uniform3fv(c.uniforms.tint._location, f.hex2rgb(a.tint)), d.uniform3fv(c.uniforms.color._location, b.color), d.uniform1f(c.uniforms.alpha._location, a.worldAlpha), d.bindBuffer(d.ARRAY_BUFFER, b.buffer), d.vertexAttribPointer(c.attributes.aVertexPosition, 2, d.FLOAT, !1, 8, 0), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, b.indexBuffer)) : (c = this.renderer.shaderManager.primitiveShader, this.renderer.shaderManager.setShader(c), d.uniformMatrix3fv(c.uniforms.translationMatrix._location, !1, a.worldTransform.toArray(!0)), d.uniformMatrix3fv(c.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), d.uniform3fv(c.uniforms.tint._location, f.hex2rgb(a.tint)), d.uniform1f(c.uniforms.alpha._location, a.worldAlpha), d.bindBuffer(d.ARRAY_BUFFER, b.buffer), d.vertexAttribPointer(c.attributes.aVertexPosition, 2, d.FLOAT, !1, 24, 0), d.vertexAttribPointer(c.attributes.aColor, 4, d.FLOAT, !1, 24, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, b.indexBuffer))
			}, d.prototype.popStencil = function (a, b)
			{
				var c = this.renderer.gl,
					d = this.stencilMaskStack;
				if (d.stencilStack.pop(), d.count--, 0 === d.stencilStack.length) c.disable(c.STENCIL_TEST);
				else
				{
					var e = d.count;
					this.bindGraphics(a, b), c.colorMask(!1, !1, !1, !1), 1 === b.mode ? (d.reverse = !d.reverse, d.reverse ? (c.stencilFunc(c.EQUAL, 255 - (e + 1), 255), c.stencilOp(c.KEEP, c.KEEP, c.INCR)) : (c.stencilFunc(c.EQUAL, e + 1, 255), c.stencilOp(c.KEEP, c.KEEP, c.DECR)), c.drawElements(c.TRIANGLE_FAN, 4, c.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), c.stencilFunc(c.ALWAYS, 0, 255), c.stencilOp(c.KEEP, c.KEEP, c.INVERT), c.drawElements(c.TRIANGLE_FAN, b.indices.length - 4, c.UNSIGNED_SHORT, 0), this.renderer.drawCount += 2, d.reverse ? c.stencilFunc(c.EQUAL, e, 255) : c.stencilFunc(c.EQUAL, 255 - e, 255)) : (d.reverse ? (c.stencilFunc(c.EQUAL, e + 1, 255), c.stencilOp(c.KEEP, c.KEEP, c.DECR)) : (c.stencilFunc(c.EQUAL, 255 - (e + 1), 255), c.stencilOp(c.KEEP, c.KEEP, c.INCR)), c.drawElements(c.TRIANGLE_STRIP, b.indices.length, c.UNSIGNED_SHORT, 0), this.renderer.drawCount++, d.reverse ? c.stencilFunc(c.EQUAL, e, 255) : c.stencilFunc(c.EQUAL, 255 - e, 255)), c.colorMask(!0, !0, !0, !0), c.stencilOp(c.KEEP, c.KEEP, c.KEEP)
				}
			}, d.prototype.destroy = function ()
			{
				e.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
			}, d.prototype.pushMask = function (a)
			{
				this.renderer.setObjectRenderer(this.renderer.plugins.graphics), a.dirty && this.renderer.plugins.graphics.updateGraphics(a, this.renderer.gl), a._webGL[this.renderer.gl.id].data.length && this.pushStencil(a, a._webGL[this.renderer.gl.id].data[0])
			}, d.prototype.popMask = function (a)
			{
				this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.popStencil(a, a._webGL[this.renderer.gl.id].data[0])
			}
		},
		{
			"../../../utils": 77,
			"./WebGLManager": 58
		}],
		58: [function (a, b, c)
		{
			function d(a)
			{
				this.renderer = a, this.renderer.on("context", this.onContextChange, this)
			}
			d.prototype.constructor = d, b.exports = d, d.prototype.onContextChange = function () {}, d.prototype.destroy = function ()
			{
				this.renderer.off("context", this.onContextChange, this), this.renderer = null
			}
		},
		{}],
		59: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a, ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"),
				{
					tint:
					{
						type: "3f",
						value: [0, 0, 0]
					},
					alpha:
					{
						type: "1f",
						value: 0
					},
					color:
					{
						type: "3f",
						value: [0, 0, 0]
					},
					translationMatrix:
					{
						type: "mat3",
						value: new Float32Array(9)
					},
					projectionMatrix:
					{
						type: "mat3",
						value: new Float32Array(9)
					}
				},
				{
					aVertexPosition: 0
				})
			}
			var e = a("./Shader");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d
		},
		{
			"./Shader": 61
		}],
		60: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"),
				{
					tint:
					{
						type: "3f",
						value: [0, 0, 0]
					},
					alpha:
					{
						type: "1f",
						value: 0
					},
					translationMatrix:
					{
						type: "mat3",
						value: new Float32Array(9)
					},
					projectionMatrix:
					{
						type: "mat3",
						value: new Float32Array(9)
					}
				},
				{
					aVertexPosition: 0,
					aColor: 0
				})
			}
			var e = a("./Shader");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d
		},
		{
			"./Shader": 61
		}],
		61: [function (a, b, c)
		{
			function d(a, b, c, d, f)
			{
				if (!b || !c) throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");
				this.uid = e.uid(), this.gl = a.renderer.gl, this.shaderManager = a, this.program = null, this.uniforms = d ||
				{}, this.attributes = f ||
				{}, this.textureCount = 1, this.vertexSrc = b, this.fragmentSrc = c, this.init()
			}
			var e = a("../../../utils");
			d.prototype.constructor = d, b.exports = d, d.prototype.init = function ()
			{
				this.compile(), this.gl.useProgram(this.program), this.cacheUniformLocations(Object.keys(this.uniforms)), this.cacheAttributeLocations(Object.keys(this.attributes))
			}, d.prototype.cacheUniformLocations = function (a)
			{
				for (var b = 0; b < a.length; ++b) this.uniforms[a[b]]._location = this.gl.getUniformLocation(this.program, a[b])
			}, d.prototype.cacheAttributeLocations = function (a)
			{
				for (var b = 0; b < a.length; ++b) this.attributes[a[b]] = this.gl.getAttribLocation(this.program, a[b])
			}, d.prototype.compile = function ()
			{
				var a = this.gl,
					b = this._glCompile(a.VERTEX_SHADER, this.vertexSrc),
					c = this._glCompile(a.FRAGMENT_SHADER, this.fragmentSrc),
					d = a.createProgram();
				return a.attachShader(d, b), a.attachShader(d, c), a.linkProgram(d), a.getProgramParameter(d, a.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", a.getProgramParameter(d, a.VALIDATE_STATUS)), console.error("gl.getError()", a.getError()), "" !== a.getProgramInfoLog(d) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", a.getProgramInfoLog(d)), a.deleteProgram(d), d = null), a.deleteShader(b), a.deleteShader(c), this.program = d
			}, d.prototype.syncUniform = function (a)
			{
				var b, c, d = a._location,
					f = a.value,
					g = this.gl;
				switch (a.type)
				{
				case "b":
				case "bool":
				case "boolean":
					g.uniform1i(d, f ? 1 : 0);
					break;
				case "i":
				case "1i":
					g.uniform1i(d, f);
					break;
				case "f":
				case "1f":
					g.uniform1f(d, f);
					break;
				case "2f":
					g.uniform2f(d, f[0], f[1]);
					break;
				case "3f":
					g.uniform3f(d, f[0], f[1], f[2]);
					break;
				case "4f":
					g.uniform4f(d, f[0], f[1], f[2], f[3]);
					break;
				case "v2":
					g.uniform2f(d, f.x, f.y);
					break;
				case "v3":
					g.uniform3f(d, f.x, f.y, f.z);
					break;
				case "v4":
					g.uniform4f(d, f.x, f.y, f.z, f.w);
					break;
				case "1iv":
					g.uniform1iv(d, f);
					break;
				case "2iv":
					g.uniform2iv(d, f);
					break;
				case "3iv":
					g.uniform3iv(d, f);
					break;
				case "4iv":
					g.uniform4iv(d, f);
					break;
				case "1fv":
					g.uniform1fv(d, f);
					break;
				case "2fv":
					g.uniform2fv(d, f);
					break;
				case "3fv":
					g.uniform3fv(d, f);
					break;
				case "4fv":
					g.uniform4fv(d, f);
					break;
				case "m2":
				case "mat2":
				case "Matrix2fv":
					g.uniformMatrix2fv(d, a.transpose, f);
					break;
				case "m3":
				case "mat3":
				case "Matrix3fv":
					g.uniformMatrix3fv(d, a.transpose, f);
					break;
				case "m4":
				case "mat4":
				case "Matrix4fv":
					g.uniformMatrix4fv(d, a.transpose, f);
					break;
				case "c":
					"number" == typeof f && (f = e.hex2rgb(f)), g.uniform3f(d, f[0], f[1], f[2]);
					break;
				case "iv1":
					g.uniform1iv(d, f);
					break;
				case "iv":
					g.uniform3iv(d, f);
					break;
				case "fv1":
					g.uniform1fv(d, f);
					break;
				case "fv":
					g.uniform3fv(d, f);
					break;
				case "v2v":
					for (a._array || (a._array = new Float32Array(2 * f.length)), b = 0, c = f.length; c > b; ++b) a._array[2 * b] = f[b].x, a._array[2 * b + 1] = f[b].y;
					g.uniform2fv(d, a._array);
					break;
				case "v3v":
					for (a._array || (a._array = new Float32Array(3 * f.length)), b = 0, c = f.length; c > b; ++b) a._array[3 * b] = f[b].x, a._array[3 * b + 1] = f[b].y, a._array[3 * b + 2] = f[b].z;
					g.uniform3fv(d, a._array);
					break;
				case "v4v":
					for (a._array || (a._array = new Float32Array(4 * f.length)), b = 0, c = f.length; c > b; ++b) a._array[4 * b] = f[b].x, a._array[4 * b + 1] = f[b].y, a._array[4 * b + 2] = f[b].z, a._array[4 * b + 3] = f[b].w;
					g.uniform4fv(d, a._array);
					break;
				case "t":
				case "sampler2D":
					if (!a.value || !a.value.baseTexture.hasLoaded) break;
					g.activeTexture(g["TEXTURE" + this.textureCount]);
					var h = a.value.baseTexture._glTextures[g.id];
					h || (this.initSampler2D(a), h = a.value.baseTexture._glTextures[g.id]), g.bindTexture(g.TEXTURE_2D, h), g.uniform1i(a._location, this.textureCount), this.textureCount++;
					break;
				default:
					console.warn("Pixi.js Shader Warning: Unknown uniform type: " + a.type)
				}
			}, d.prototype.syncUniforms = function ()
			{
				this.textureCount = 1;
				for (var a in this.uniforms) this.syncUniform(this.uniforms[a])
			}, d.prototype.initSampler2D = function (a)
			{
				var b = this.gl,
					c = a.value.baseTexture;
				if (c.hasLoaded)
					if (a.textureData)
					{
						var d = a.textureData;
						c._glTextures[b.id] = b.createTexture(), b.bindTexture(b.TEXTURE_2D, c._glTextures[b.id]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, c.premultipliedAlpha), b.texImage2D(b.TEXTURE_2D, 0, d.luminance ? b.LUMINANCE : b.RGBA, b.RGBA, b.UNSIGNED_BYTE, c.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, d.magFilter ? d.magFilter : b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, d.wrapS ? d.wrapS : b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, d.wrapS ? d.wrapS : b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, d.wrapT ? d.wrapT : b.CLAMP_TO_EDGE)
					}
					else this.shaderManager.renderer.updateTexture(c)
			}, d.prototype.destroy = function ()
			{
				this.gl.deleteProgram(this.program), this.gl = null, this.uniforms = null, this.attributes = null, this.vertexSrc = null, this.fragmentSrc = null
			}, d.prototype._glCompile = function (a, b)
			{
				var c = this.gl.createShader(a);
				return this.gl.shaderSource(c, b), this.gl.compileShader(c), this.gl.getShaderParameter(c, this.gl.COMPILE_STATUS) ? c : (console.log(this.gl.getShaderInfoLog(c)), null)
			}
		},
		{
			"../../../utils": 77
		}],
		62: [function (a, b, c)
		{
			function d(a, b, c, f, g)
			{
				var h = {
					uSampler:
					{
						type: "sampler2D",
						value: 0
					},
					projectionMatrix:
					{
						type: "mat3",
						value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
					}
				};
				if (f)
					for (var i in f) h[i] = f[i];
				var j = {
					aVertexPosition: 0,
					aTextureCoord: 0,
					aColor: 0
				};
				if (g)
					for (var k in g) j[k] = g[k];
				b = b || d.defaultVertexSrc, c = c || d.defaultFragmentSrc, e.call(this, a, b, c, h, j)
			}
			var e = a("./Shader");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.defaultVertexSrc = ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), d.defaultFragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"].join("\n");
},
		{
			"./Shader": 61
		}],
		63: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a)
			}
			var e = a("../managers/WebGLManager");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.start = function () {}, d.prototype.stop = function ()
			{
				this.flush()
			}, d.prototype.flush = function () {}, d.prototype.render = function (a) {}
		},
		{
			"../managers/WebGLManager": 58
		}],
		64: [function (a, b, c)
		{
			function d(a)
			{
				this.gl = a, this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]), this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, 128, a.DYNAMIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), this.upload()
			}
			d.prototype.constructor = d, d.prototype.map = function (a, b)
			{
				var c = 0,
					d = 0;
				this.uvs[0] = c, this.uvs[1] = d, this.uvs[2] = c + b.width / a.width, this.uvs[3] = d, this.uvs[4] = c + b.width / a.width, this.uvs[5] = d + b.height / a.height, this.uvs[6] = c, this.uvs[7] = d + b.height / a.height, c = b.x, d = b.y, this.vertices[0] = c, this.vertices[1] = d, this.vertices[2] = c + b.width, this.vertices[3] = d, this.vertices[4] = c + b.width, this.vertices[5] = d + b.height, this.vertices[6] = c, this.vertices[7] = d + b.height, this.upload()
			}, d.prototype.upload = function ()
			{
				var a = this.gl;
				a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices), a.bufferSubData(a.ARRAY_BUFFER, 32, this.uvs), a.bufferSubData(a.ARRAY_BUFFER, 64, this.colors)
			}, d.prototype.destroy = function ()
			{
				var a = this.gl;
				a.deleteBuffer(this.vertexBuffer), a.deleteBuffer(this.indexBuffer)
			}, b.exports = d
		},
		{}],
		65: [function (a, b, c)
		{
			var d = a("../../../math"),
				e = a("../../../utils"),
				f = a("../../../const"),
				g = a("./StencilMaskStack"),
				h = function (a, b, c, h, i, j)
				{
					if (this.gl = a, this.frameBuffer = null, this.texture = null, this.size = new d.Rectangle(0, 0, 1, 1), this.resolution = i || f.RESOLUTION, this.projectionMatrix = new d.Matrix, this.transform = null, this.frame = null, this.stencilBuffer = null, this.stencilMaskStack = new g, this.filterStack = [
						{
							renderTarget: this,
							filter: [],
							bounds: this.size
						}], this.scaleMode = h || f.SCALE_MODES.DEFAULT, this.root = j, !this.root)
					{
						this.frameBuffer = a.createFramebuffer(), this.texture = a.createTexture(), a.bindTexture(a.TEXTURE_2D, this.texture), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, h === f.SCALE_MODES.LINEAR ? a.LINEAR : a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, h === f.SCALE_MODES.LINEAR ? a.LINEAR : a.NEAREST);
						var k = e.isPowerOfTwo(b, c);
						k ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.REPEAT), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.REPEAT)) : (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE)), a.bindFramebuffer(a.FRAMEBUFFER, this.frameBuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.texture, 0)
					}
					this.resize(b, c)
				};
			h.prototype.constructor = h, b.exports = h, h.prototype.clear = function (a)
			{
				var b = this.gl;
				a && b.bindFramebuffer(b.FRAMEBUFFER, this.frameBuffer), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT)
			}, h.prototype.attachStencilBuffer = function ()
			{
				if (!this.stencilBuffer && !this.root)
				{
					var a = this.gl;
					this.stencilBuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, this.stencilBuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this.stencilBuffer), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution)
				}
			}, h.prototype.activate = function ()
			{
				var a = this.gl;
				a.bindFramebuffer(a.FRAMEBUFFER, this.frameBuffer);
				var b = this.frame || this.size;
				this.calculateProjection(b), this.transform && this.projectionMatrix.append(this.transform), a.viewport(0, 0, b.width * this.resolution, b.height * this.resolution)
			}, h.prototype.calculateProjection = function (a)
			{
				var b = this.projectionMatrix;
				b.identity(), this.root ? (b.a = 1 / a.width * 2, b.d = -1 / a.height * 2, b.tx = -1 - a.x * b.a, b.ty = 1 - a.y * b.d) : (b.a = 1 / a.width * 2, b.d = 1 / a.height * 2, b.tx = -1 - a.x * b.a, b.ty = -1 - a.y * b.d)
			}, h.prototype.resize = function (a, b)
			{
				if (a = 0 | a, b = 0 | b, this.size.width !== a || this.size.height !== b)
				{
					if (this.size.width = a, this.size.height = b, !this.root)
					{
						var c = this.gl;
						c.bindTexture(c.TEXTURE_2D, this.texture), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a * this.resolution, b * this.resolution, 0, c.RGBA, c.UNSIGNED_BYTE, null), this.stencilBuffer && (c.bindRenderbuffer(c.RENDERBUFFER, this.stencilBuffer), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_STENCIL, a * this.resolution, b * this.resolution))
					}
					var d = this.frame || this.size;
					this.calculateProjection(d)
				}
			}, h.prototype.destroy = function ()
			{
				var a = this.gl;
				a.deleteRenderbuffer(this.stencilBuffer), a.deleteFramebuffer(this.frameBuffer), a.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
			}
		},
		{
			"../../../const": 22,
			"../../../math": 33,
			"../../../utils": 77,
			"./StencilMaskStack": 66
		}],
		66: [function (a, b, c)
		{
			function d()
			{
				this.stencilStack = [], this.reverse = !0, this.count = 0
			}
			d.prototype.constructor = d, b.exports = d
		},
		{}],
		67: [function (a, b, c)
		{
			function d(a)
			{
				g.call(this), this.anchor = new e.Point, this._texture = null, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = j.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = a || f.EMPTY
			}
			var e = a("../math"),
				f = a("../textures/Texture"),
				g = a("../display/Container"),
				h = a("../renderers/canvas/utils/CanvasTinter"),
				i = a("../utils"),
				j = a("../const"),
				k = new e.Point,
				l = e.GroupD8,
				m = new e.Matrix;
			d.prototype = Object.create(g.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				width:
				{
					get: function ()
					{
						return Math.abs(this.scale.x) * this.texture._frame.width
					},
					set: function (a)
					{
						var b = i.sign(this.scale.x) || 1;
						this.scale.x = b * a / this.texture._frame.width, this._width = a
					}
				},
				height:
				{
					get: function ()
					{
						return Math.abs(this.scale.y) * this.texture._frame.height
					},
					set: function (a)
					{
						var b = i.sign(this.scale.y) || 1;
						this.scale.y = b * a / this.texture._frame.height, this._height = a
					}
				},
				texture:
				{
					get: function ()
					{
						return this._texture
					},
					set: function (a)
					{
						this._texture !== a && (this._texture = a, this.cachedTint = 16777215, a && (a.baseTexture.hasLoaded ? this._onTextureUpdate() : a.once("update", this._onTextureUpdate, this)))
					}
				}
			}), d.prototype._onTextureUpdate = function ()
			{
				this._width && (this.scale.x = i.sign(this.scale.x) * this._width / this.texture.frame.width), this._height && (this.scale.y = i.sign(this.scale.y) * this._height / this.texture.frame.height)
			}, d.prototype._renderWebGL = function (a)
			{
				a.setObjectRenderer(a.plugins.sprite), a.plugins.sprite.render(this)
			}, d.prototype.getBounds = function (a)
			{
				if (!this._currentBounds)
				{
					var b, c, d, e, f = this._texture._frame.width,
						g = this._texture._frame.height,
						h = f * (1 - this.anchor.x),
						i = f * -this.anchor.x,
						j = g * (1 - this.anchor.y),
						k = g * -this.anchor.y,
						l = a || this.worldTransform,
						m = l.a,
						n = l.b,
						o = l.c,
						p = l.d,
						q = l.tx,
						r = l.ty,
						s = m * i + o * k + q,
						t = p * k + n * i + r,
						u = m * h + o * k + q,
						v = p * k + n * h + r,
						w = m * h + o * j + q,
						x = p * j + n * h + r,
						y = m * i + o * j + q,
						z = p * j + n * i + r;
					if (b = s, b = b > u ? u : b, b = b > w ? w : b, b = b > y ? y : b, d = t, d = d > v ? v : d, d = d > x ? x : d, d = d > z ? z : d, c = s, c = u > c ? u : c, c = w > c ? w : c, c = y > c ? y : c, e = t, e = v > e ? v : e, e = x > e ? x : e, e = z > e ? z : e, this.children.length)
					{
						var A = this.containerGetBounds();
						h = A.x, i = A.x + A.width, j = A.y, k = A.y + A.height, b = h > b ? b : h, d = j > d ? d : j, c = c > i ? c : i, e = e > k ? e : k
					}
					var B = this._bounds;
					B.x = b, B.width = c - b, B.y = d, B.height = e - d, this._currentBounds = B
				}
				return this._currentBounds
			}, d.prototype.getLocalBounds = function ()
			{
				return this._bounds.x = -this._texture._frame.width * this.anchor.x, this._bounds.y = -this._texture._frame.height * this.anchor.y, this._bounds.width = this._texture._frame.width, this._bounds.height = this._texture._frame.height, this._bounds
			}, d.prototype.containsPoint = function (a)
			{
				this.worldTransform.applyInverse(a, k);
				var b, c = this._texture._frame.width,
					d = this._texture._frame.height,
					e = -c * this.anchor.x;
				return k.x > e && k.x < e + c && (b = -d * this.anchor.y, k.y > b && k.y < b + d)
			}, d.prototype._renderCanvas = function (a)
			{
				if (!(this.texture.crop.width <= 0 || this.texture.crop.height <= 0))
				{
					var b = a.blendModes[this.blendMode];
					if (b !== a.context.globalCompositeOperation && (a.context.globalCompositeOperation = b), this.texture.valid)
					{
						var c, d, e = this._texture,
							f = this.worldTransform,
							g = e.crop.width,
							i = e.crop.height;
						a.context.globalAlpha = this.worldAlpha;
						var k = e.baseTexture.scaleMode === j.SCALE_MODES.LINEAR;
						a.smoothProperty && a.context[a.smoothProperty] !== k && (a.context[a.smoothProperty] = k), 2 === (3 & e.rotate) && (g = e.crop.height, i = e.crop.width), e.trim ? (c = e.crop.width / 2 + e.trim.x - this.anchor.x * e.trim.width, d = e.crop.height / 2 + e.trim.y - this.anchor.y * e.trim.height) : (c = (.5 - this.anchor.x) * e._frame.width, d = (.5 - this.anchor.y) * e._frame.height), e.rotate && (f.copy(m), f = m, l.matrixAppendRotationInv(f, e.rotate, c, d), c = 0, d = 0), c -= g / 2, d -= i / 2, a.roundPixels ? (a.context.setTransform(f.a, f.b, f.c, f.d, f.tx * a.resolution | 0, f.ty * a.resolution | 0), c = 0 | c, d = 0 | d) : a.context.setTransform(f.a, f.b, f.c, f.d, f.tx * a.resolution, f.ty * a.resolution);
						var n = e.baseTexture.resolution;
						16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = h.getTintedTexture(this, this.tint)), a.context.drawImage(this.tintedTexture, 0, 0, g * n, i * n, c * a.resolution, d * a.resolution, g * a.resolution, i * a.resolution)) : a.context.drawImage(e.baseTexture.source, e.crop.x * n, e.crop.y * n, g * n, i * n, c * a.resolution, d * a.resolution, g * a.resolution, i * a.resolution)
					}
				}
			}, d.prototype.destroy = function (a, b)
			{
				g.prototype.destroy.call(this), this.anchor = null, a && this._texture.destroy(b), this._texture = null, this.shader = null
			}, d.fromFrame = function (a)
			{
				var b = i.TextureCache[a];
				if (!b) throw new Error('The frameId "' + a + '" does not exist in the texture cache');
				return new d(b)
			}, d.fromImage = function (a, b, c)
			{
				return new d(f.fromImage(a, b, c))
			}
		},
		{
			"../const": 22,
			"../display/Container": 23,
			"../math": 33,
			"../renderers/canvas/utils/CanvasTinter": 48,
			"../textures/Texture": 72,
			"../utils": 77
		}],
		68: [function (a, b, c)
		{
			function d(a)
			{
				e.call(this, a), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = g.SPRITE_BATCH_SIZE;
				var b = 4 * this.size * this.vertByteSize,
					c = 6 * this.size;
				this.vertices = new ArrayBuffer(b), this.positions = new Float32Array(this.vertices), this.colors = new Uint32Array(this.vertices), this.indices = new Uint16Array(c);
				for (var d = 0, f = 0; c > d; d += 6, f += 4) this.indices[d + 0] = f + 0, this.indices[d + 1] = f + 1, this.indices[d + 2] = f + 2, this.indices[d + 3] = f + 0, this.indices[d + 4] = f + 2, this.indices[d + 5] = f + 3;
				this.currentBatchSize = 0, this.sprites = [], this.shader = null
			}
			var e = a("../../renderers/webgl/utils/ObjectRenderer"),
				f = a("../../renderers/webgl/WebGLRenderer"),
				g = a("../../const");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, f.registerPlugin("sprite", d), d.prototype.onContextChange = function ()
			{
				var a = this.renderer.gl;
				this.shader = this.renderer.shaderManager.defaultShader, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW), this.currentBlendMode = 99999
			}, d.prototype.render = function (a)
			{
				var b = a._texture;
				this.currentBatchSize >= this.size && this.flush();
				var c = b._uvs;
				if (c)
				{
					var d, e, f, g, h = a.anchor.x,
						i = a.anchor.y;
					if (b.trim && void 0 === a.tileScale)
					{
						var j = b.trim;
						e = j.x - h * j.width, d = e + b.crop.width, g = j.y - i * j.height, f = g + b.crop.height
					}
					else d = b._frame.width * (1 - h), e = b._frame.width * -h, f = b._frame.height * (1 - i), g = b._frame.height * -i;
					var k = this.currentBatchSize * this.vertByteSize,
						l = a.worldTransform,
						m = l.a,
						n = l.b,
						o = l.c,
						p = l.d,
						q = l.tx,
						r = l.ty,
						s = this.colors,
						t = this.positions;
					if (this.renderer.roundPixels)
					{
						var u = this.renderer.resolution;
						t[k] = ((m * e + o * g + q) * u | 0) / u, t[k + 1] = ((p * g + n * e + r) * u | 0) / u, t[k + 5] = ((m * d + o * g + q) * u | 0) / u, t[k + 6] = ((p * g + n * d + r) * u | 0) / u, t[k + 10] = ((m * d + o * f + q) * u | 0) / u, t[k + 11] = ((p * f + n * d + r) * u | 0) / u, t[k + 15] = ((m * e + o * f + q) * u | 0) / u, t[k + 16] = ((p * f + n * e + r) * u | 0) / u
					}
					else t[k] = m * e + o * g + q, t[k + 1] = p * g + n * e + r, t[k + 5] = m * d + o * g + q, t[k + 6] = p * g + n * d + r, t[k + 10] = m * d + o * f + q, t[k + 11] = p * f + n * d + r, t[k + 15] = m * e + o * f + q, t[k + 16] = p * f + n * e + r;
					t[k + 2] = c.x0, t[k + 3] = c.y0, t[k + 7] = c.x1, t[k + 8] = c.y1, t[k + 12] = c.x2, t[k + 13] = c.y2, t[k + 17] = c.x3, t[k + 18] = c.y3;
					var v = a.tint;
					s[k + 4] = s[k + 9] = s[k + 14] = s[k + 19] = (v >> 16) + (65280 & v) + ((255 & v) << 16) + (255 * a.worldAlpha << 24), this.sprites[this.currentBatchSize++] = a
				}
			}, d.prototype.flush = function ()
			{
				if (0 !== this.currentBatchSize)
				{
					var a, b = this.renderer.gl;
					if (this.currentBatchSize > .5 * this.size) b.bufferSubData(b.ARRAY_BUFFER, 0, this.vertices);
					else
					{
						var c = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
						b.bufferSubData(b.ARRAY_BUFFER, 0, c)
					}
					for (var d, e, f, g, h = 0, i = 0, j = null, k = this.renderer.blendModeManager.currentBlendMode, l = null, m = !1, n = !1, o = 0, p = this.currentBatchSize; p > o; o++) g = this.sprites[o], d = g._texture.baseTexture, e = g.blendMode, f = g.shader || this.shader, m = k !== e, n = l !== f, (j !== d || m || n) && (this.renderBatch(j, h, i), i = o, h = 0, j = d, m && (k = e, this.renderer.blendModeManager.setBlendMode(k)), n && (l = f, a = l.shaders ? l.shaders[b.id] : l, a || (a = l.getShader(this.renderer)), this.renderer.shaderManager.setShader(a), a.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), a.syncUniforms(), b.activeTexture(b.TEXTURE0))), h++;
					this.renderBatch(j, h, i), this.currentBatchSize = 0
				}
			}, d.prototype.renderBatch = function (a, b, c)
			{
				if (0 !== b)
				{
					var d = this.renderer.gl;
					a._glTextures[d.id] ? d.bindTexture(d.TEXTURE_2D, a._glTextures[d.id]) : this.renderer.updateTexture(a), d.drawElements(d.TRIANGLES, 6 * b, d.UNSIGNED_SHORT, 6 * c * 2), this.renderer.drawCount++
				}
			}, d.prototype.start = function ()
			{
				var a = this.renderer.gl;
				a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				var b = this.vertByteSize;
				a.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, a.FLOAT, !1, b, 0), a.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, a.FLOAT, !1, b, 8), a.vertexAttribPointer(this.shader.attributes.aColor, 4, a.UNSIGNED_BYTE, !0, b, 16)
			}, d.prototype.destroy = function ()
			{
				this.renderer.gl.deleteBuffer(this.vertexBuffer), this.renderer.gl.deleteBuffer(this.indexBuffer), e.prototype.destroy.call(this), this.shader.destroy(), this.renderer = null, this.vertices = null, this.positions = null, this.colors = null, this.indices = null, this.vertexBuffer = null, this.indexBuffer = null, this.sprites = null, this.shader = null
			}
		},
		{
			"../../const": 22,
			"../../renderers/webgl/WebGLRenderer": 49,
			"../../renderers/webgl/utils/ObjectRenderer": 63
		}],
		69: [function (a, b, c)
		{
			function d(a, b, c)
			{
				this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = c || i.RESOLUTION, this._text = null, this._style = null;
				var d = f.fromCanvas(this.canvas);
				d.trim = new g.Rectangle, e.call(this, d), this.text = a, this.style = b
			}
			var e = a("../sprites/Sprite"),
				f = a("../textures/Texture"),
				g = a("../math"),
				h = a("../utils"),
				i = a("../const");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.fontPropertiesCache = {}, d.fontPropertiesCanvas = document.createElement("canvas"), d.fontPropertiesContext = d.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(d.prototype,
			{
				width:
				{
					get: function ()
					{
						return this.dirty && this.updateText(), this.scale.x * this._texture._frame.width
					},
					set: function (a)
					{
						this.scale.x = a / this._texture._frame.width, this._width = a
					}
				},
				height:
				{
					get: function ()
					{
						return this.dirty && this.updateText(), this.scale.y * this._texture._frame.height
					},
					set: function (a)
					{
						this.scale.y = a / this._texture._frame.height, this._height = a
					}
				},
				style:
				{
					get: function ()
					{
						return this._style
					},
					set: function (a)
					{
						a = a ||
						{}, "number" == typeof a.fill && (a.fill = h.hex2string(a.fill)), "number" == typeof a.stroke && (a.stroke = h.hex2string(a.stroke)), "number" == typeof a.dropShadowColor && (a.dropShadowColor = h.hex2string(a.dropShadowColor)), a.font = a.font || "bold 20pt Arial", a.fill = a.fill || "black", a.align = a.align || "left", a.stroke = a.stroke || "black", a.strokeThickness = a.strokeThickness || 0, a.wordWrap = a.wordWrap || !1, a.wordWrapWidth = a.wordWrapWidth || 100, a.dropShadow = a.dropShadow || !1, a.dropShadowColor = a.dropShadowColor || "#000000", a.dropShadowAngle = void 0 !== a.dropShadowAngle ? a.dropShadowAngle : Math.PI / 6, a.dropShadowDistance = void 0 !== a.dropShadowDistance ? a.dropShadowDistance : 5, a.dropShadowBlur = void 0 !== a.dropShadowBlur ? a.dropShadowBlur : 0, a.padding = a.padding || 0, a.textBaseline = a.textBaseline || "alphabetic", a.lineJoin = a.lineJoin || "miter", a.miterLimit = a.miterLimit || 10, this._style = a, this.dirty = !0
					}
				},
				text:
				{
					get: function ()
					{
						return this._text
					},
					set: function (a)
					{
						a = a.toString() || " ", this._text !== a && (this._text = a, this.dirty = !0)
					}
				}
			}), d.prototype.updateText = function ()
			{
				var a = this._style;
				this.context.font = a.font;
				for (var b = a.wordWrap ? this.wordWrap(this._text) : this._text, c = b.split(/(?:\r\n|\r|\n)/), d = new Array(c.length), e = 0, f = this.determineFontProperties(a.font), g = 0; g < c.length; g++)
				{
					var h = this.context.measureText(c[g])
						.width;
					d[g] = h, e = Math.max(e, h)
				}
				var i = e + a.strokeThickness;
				a.dropShadow && (i += a.dropShadowDistance), this.canvas.width = (i + this.context.lineWidth) * this.resolution;
				var j = this.style.lineHeight || f.fontSize + a.strokeThickness,
					k = j * c.length;
				a.dropShadow && (k += a.dropShadowDistance), this.canvas.height = (k + 2 * this._style.padding) * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = a.font, this.context.strokeStyle = a.stroke, this.context.lineWidth = a.strokeThickness, this.context.textBaseline = a.textBaseline, this.context.lineJoin = a.lineJoin, this.context.miterLimit = a.miterLimit;
				var l, m;
				if (a.dropShadow)
				{
					a.dropShadowBlur > 0 ? (this.context.shadowColor = a.dropShadowColor, this.context.shadowBlur = a.dropShadowBlur) : this.context.fillStyle = a.dropShadowColor;
					var n = Math.cos(a.dropShadowAngle) * a.dropShadowDistance,
						o = Math.sin(a.dropShadowAngle) * a.dropShadowDistance;
					for (g = 0; g < c.length; g++) l = a.strokeThickness / 2, m = a.strokeThickness / 2 + g * j + f.ascent, "right" === a.align ? l += e - d[g] : "center" === a.align && (l += (e - d[g]) / 2), a.fill && this.context.fillText(c[g], l + n, m + o + this._style.padding)
				}
				for (this.context.fillStyle = a.fill, g = 0; g < c.length; g++) l = a.strokeThickness / 2, m = a.strokeThickness / 2 + g * j + f.ascent, "right" === a.align ? l += e - d[g] : "center" === a.align && (l += (e - d[g]) / 2), a.stroke && a.strokeThickness && this.context.strokeText(c[g], l, m + this._style.padding), a.fill && this.context.fillText(c[g], l, m + this._style.padding);
				this.updateTexture()
			}, d.prototype.updateTexture = function ()
			{
				var a = this._texture;
				a.baseTexture.hasLoaded = !0, a.baseTexture.resolution = this.resolution, a.baseTexture.width = this.canvas.width / this.resolution, a.baseTexture.height = this.canvas.height / this.resolution, a.crop.width = a._frame.width = this.canvas.width / this.resolution, a.crop.height = a._frame.height = this.canvas.height / this.resolution, a.trim.x = 0, a.trim.y = -this._style.padding, a.trim.width = a._frame.width, a.trim.height = a._frame.height - 2 * this._style.padding, this._width = this.canvas.width / this.resolution, this._height = this.canvas.height / this.resolution, a.baseTexture.emit("update", a.baseTexture), this.dirty = !1
			}, d.prototype.renderWebGL = function (a)
			{
				this.dirty && this.updateText(), e.prototype.renderWebGL.call(this, a)
			}, d.prototype._renderCanvas = function (a)
			{
				this.dirty && this.updateText(), e.prototype._renderCanvas.call(this, a)
			}, d.prototype.determineFontProperties = function (a)
			{
				var b = d.fontPropertiesCache[a];
				if (!b)
				{
					b = {};
					var c = d.fontPropertiesCanvas,
						e = d.fontPropertiesContext;
					e.font = a;
					var f = Math.ceil(e.measureText("|MÃ‰q")
							.width),
						g = Math.ceil(e.measureText("M")
							.width),
						h = 2 * g;
					g = 1.4 * g | 0, c.width = f, c.height = h, e.fillStyle = "#f00", e.fillRect(0, 0, f, h), e.font = a, e.textBaseline = "alphabetic", e.fillStyle = "#000", e.fillText("|MÃ‰q", 0, g);
					var i, j, k = e.getImageData(0, 0, f, h)
						.data,
						l = k.length,
						m = 4 * f,
						n = 0,
						o = !1;
					for (i = 0; g > i; i++)
					{
						for (j = 0; m > j; j += 4)
							if (255 !== k[n + j])
							{
								o = !0;
								break
							}
						if (o) break;
						n += m
					}
					for (b.ascent = g - i, n = l - m, o = !1, i = h; i > g; i--)
					{
						for (j = 0; m > j; j += 4)
							if (255 !== k[n + j])
							{
								o = !0;
								break
							}
						if (o) break;
						n -= m
					}
					b.descent = i - g, b.fontSize = b.ascent + b.descent, d.fontPropertiesCache[a] = b
				}
				return b
			}, d.prototype.wordWrap = function (a)
			{
				for (var b = "", c = a.split("\n"), d = this._style.wordWrapWidth, e = 0; e < c.length; e++)
				{
					for (var f = d, g = c[e].split(" "), h = 0; h < g.length; h++)
					{
						var i = this.context.measureText(g[h])
							.width,
							j = i + this.context.measureText(" ")
							.width;
						0 === h || j > f ? (h > 0 && (b += "\n"), b += g[h], f = d - i) : (f -= j, b += " " + g[h])
					}
					e < c.length - 1 && (b += "\n")
				}
				return b
			}, d.prototype.getBounds = function (a)
			{
				return this.dirty && this.updateText(), e.prototype.getBounds.call(this, a)
			}, d.prototype.destroy = function (a)
			{
				this.context = null, this.canvas = null, this._style = null, this._texture.destroy(void 0 === a ? !0 : a)
			}
		},
		{
			"../const": 22,
			"../math": 33,
			"../sprites/Sprite": 67,
			"../textures/Texture": 72,
			"../utils": 77
		}],
		70: [function (a, b, c)
		{
			function d(a, b, c)
			{
				g.call(this), this.uid = e.uid(), this.resolution = c || 1, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = b || f.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = !1, this._glTextures = {}, a && this.loadSource(a)
			}
			var e = a("../utils"),
				f = a("../const"),
				g = a("eventemitter3");
			d.prototype = Object.create(g.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.update = function ()
			{
				this.realWidth = this.source.naturalWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = e.isPowerOfTwo(this.realWidth, this.realHeight), this.emit("update", this)
			}, d.prototype.loadSource = function (a)
			{
				var b = this.isLoading;
				if (this.hasLoaded = !1, this.isLoading = !1, b && this.source && (this.source.onload = null, this.source.onerror = null), this.source = a, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
				else if (!a.getContext)
				{
					this.isLoading = !0;
					var c = this;
					a.onload = function ()
					{
						a.onload = null, a.onerror = null, c.isLoading && (c.isLoading = !1, c._sourceLoaded(), c.emit("loaded", c))
					}, a.onerror = function ()
					{
						a.onload = null, a.onerror = null, c.isLoading && (c.isLoading = !1, c.emit("error", c))
					}, a.complete && a.src && (this.isLoading = !1, a.onload = null, a.onerror = null, a.width && a.height ? (this._sourceLoaded(), b && this.emit("loaded", this)) : b && this.emit("error", this))
				}
			}, d.prototype._sourceLoaded = function ()
			{
				this.hasLoaded = !0, this.update()
			}, d.prototype.destroy = function ()
			{
				this.imageUrl ? (delete e.BaseTextureCache[this.imageUrl], delete e.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete e.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
			}, d.prototype.dispose = function ()
			{
				this.emit("dispose", this)
			}, d.prototype.updateSourceImage = function (a)
			{
				this.source.src = a, this.loadSource(this.source)
			}, d.fromImage = function (a, b, c)
			{
				var f = e.BaseTextureCache[a];
				if (void 0 === b && 0 !== a.indexOf("data:") && (b = !0), !f)
				{
					var g = new Image;
					b && (g.crossOrigin = ""), f = new d(g, c), f.imageUrl = a, g.src = a, e.BaseTextureCache[a] = f, f.resolution = e.getResolutionOfUrl(a)
				}
				return f
			}, d.fromCanvas = function (a, b)
			{
				a._pixiId || (a._pixiId = "canvas_" + e.uid());
				var c = e.BaseTextureCache[a._pixiId];
				return c || (c = new d(a, b), e.BaseTextureCache[a._pixiId] = c), c
			}
		},
		{
			"../const": 22,
			"../utils": 77,
			eventemitter3: 10
		}],
		71: [function (a, b, c)
		{
			function d(a, b, c, d, l)
			{
				if (!a) throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");
				b = b || 100, c = c || 100, l = l || k.RESOLUTION;
				var m = new e;
				if (m.width = b, m.height = c, m.resolution = l, m.scaleMode = d || k.SCALE_MODES.DEFAULT, m.hasLoaded = !0, f.call(this, m, new j.Rectangle(0, 0, b, c)), this.width = b, this.height = c, this.resolution = l, this.render = null, this.renderer = a, this.renderer.type === k.RENDERER_TYPE.WEBGL)
				{
					var n = this.renderer.gl;
					this.textureBuffer = new g(n, this.width, this.height, m.scaleMode, this.resolution), this.baseTexture._glTextures[n.id] = this.textureBuffer.texture, this.filterManager = new h(this.renderer), this.filterManager.onContextChange(), this.filterManager.resize(b, c), this.render = this.renderWebGL, this.renderer.currentRenderer.start(), this.renderer.currentRenderTarget.activate()
				}
				else this.render = this.renderCanvas, this.textureBuffer = new i(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
				this.valid = !0, this._updateUvs()
			}
			var e = a("./BaseTexture"),
				f = a("./Texture"),
				g = a("../renderers/webgl/utils/RenderTarget"),
				h = a("../renderers/webgl/managers/FilterManager"),
				i = a("../renderers/canvas/utils/CanvasBuffer"),
				j = a("../math"),
				k = a("../const"),
				l = new j.Matrix;
			d.prototype = Object.create(f.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.resize = function (a, b, c)
			{
				(a !== this.width || b !== this.height) && (this.valid = a > 0 && b > 0, this.width = this._frame.width = this.crop.width = a, this.height = this._frame.height = this.crop.height = b, c && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.valid && (this.textureBuffer.resize(this.width, this.height), this.filterManager && this.filterManager.resize(this.width, this.height)))
			}, d.prototype.clear = function ()
			{
				this.valid && (this.renderer.type === k.RENDERER_TYPE.WEBGL && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
			}, d.prototype.renderWebGL = function (a, b, c, d)
			{
				if (this.valid)
				{
					if (d = void 0 !== d ? d : !0, this.textureBuffer.transform = b, this.textureBuffer.activate(), a.worldAlpha = 1, d)
					{
						a.worldTransform.identity(), a.currentBounds = null;
						var e, f, g = a.children;
						for (e = 0, f = g.length; f > e; ++e) g[e].updateTransform()
					}
					var h = this.renderer.filterManager;
					this.renderer.filterManager = this.filterManager, this.renderer.renderDisplayObject(a, this.textureBuffer, c), this.renderer.filterManager = h
				}
			}, d.prototype.renderCanvas = function (a, b, c, d)
			{
				if (this.valid)
				{
					d = !!d;
					var e = l;
					e.identity(), b && e.append(b);
					var f = a.worldTransform;
					a.worldTransform = e, a.worldAlpha = 1;
					var g, h, i = a.children;
					for (g = 0, h = i.length; h > g; ++g) i[g].updateTransform();
					c && this.textureBuffer.clear();
					var j = this.textureBuffer.context,
						k = this.renderer.resolution;
					this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(a, j), this.renderer.resolution = k, a.worldTransform === e && (a.worldTransform = f)
				}
			}, d.prototype.destroy = function ()
			{
				f.prototype.destroy.call(this, !0), this.textureBuffer.destroy(), this.filterManager && this.filterManager.destroy(), this.renderer = null
			}, d.prototype.getImage = function ()
			{
				var a = new Image;
				return a.src = this.getBase64(), a
			}, d.prototype.getBase64 = function ()
			{
				return this.getCanvas()
					.toDataURL()
			}, d.prototype.getCanvas = function ()
			{
				if (this.renderer.type === k.RENDERER_TYPE.WEBGL)
				{
					var a = this.renderer.gl,
						b = this.textureBuffer.size.width,
						c = this.textureBuffer.size.height,
						d = new Uint8Array(4 * b * c);
					a.bindFramebuffer(a.FRAMEBUFFER, this.textureBuffer.frameBuffer), a.readPixels(0, 0, b, c, a.RGBA, a.UNSIGNED_BYTE, d), a.bindFramebuffer(a.FRAMEBUFFER, null);
					var e = new i(b, c),
						f = e.context.getImageData(0, 0, b, c);
					return f.data.set(d), e.context.putImageData(f, 0, 0), e.canvas
				}
				return this.textureBuffer.canvas
			}, d.prototype.getPixels = function ()
			{
				var a, b;
				if (this.renderer.type === k.RENDERER_TYPE.WEBGL)
				{
					var c = this.renderer.gl;
					a = this.textureBuffer.size.width, b = this.textureBuffer.size.height;
					var d = new Uint8Array(4 * a * b);
					return c.bindFramebuffer(c.FRAMEBUFFER, this.textureBuffer.frameBuffer), c.readPixels(0, 0, a, b, c.RGBA, c.UNSIGNED_BYTE, d), c.bindFramebuffer(c.FRAMEBUFFER, null), d
				}
				return a = this.textureBuffer.canvas.width, b = this.textureBuffer.canvas.height, this.textureBuffer.canvas.getContext("2d")
					.getImageData(0, 0, a, b)
					.data
			}, d.prototype.getPixel = function (a, b)
			{
				if (this.renderer.type === k.RENDERER_TYPE.WEBGL)
				{
					var c = this.renderer.gl,
						d = new Uint8Array(4);
					return c.bindFramebuffer(c.FRAMEBUFFER, this.textureBuffer.frameBuffer), c.readPixels(a, b, 1, 1, c.RGBA, c.UNSIGNED_BYTE, d), c.bindFramebuffer(c.FRAMEBUFFER, null), d
				}
				return this.textureBuffer.canvas.getContext("2d")
					.getImageData(a, b, 1, 1)
					.data
			}
		},
		{
			"../const": 22,
			"../math": 33,
			"../renderers/canvas/utils/CanvasBuffer": 45,
			"../renderers/webgl/managers/FilterManager": 54,
			"../renderers/webgl/utils/RenderTarget": 65,
			"./BaseTexture": 70,
			"./Texture": 72
		}],
		72: [function (a, b, c)
		{
			function d(a, b, c, e, f)
			{
				if (h.call(this), this.noFrame = !1, b || (this.noFrame = !0, b = new i.Rectangle(0, 0, 1, 1)), a instanceof d && (a = a.baseTexture), this.baseTexture = a, this._frame = b, this.trim = e, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = c || b, this._rotate = +(f || 0), f === !0) this._rotate = 2;
				else if (this._rotate % 2 !== 0) throw "attempt to use diamond-shaped UVs. If you are sure, set rotation manually";
				a.hasLoaded ? (this.noFrame && (b = new i.Rectangle(0, 0, a.width, a.height), a.on("update", this.onBaseTextureUpdated, this)), this.frame = b) : a.once("loaded", this.onBaseTextureLoaded, this)
			}
			var e = a("./BaseTexture"),
				f = a("./VideoBaseTexture"),
				g = a("./TextureUvs"),
				h = a("eventemitter3"),
				i = a("../math"),
				j = a("../utils");
			d.prototype = Object.create(h.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				frame:
				{
					get: function ()
					{
						return this._frame
					},
					set: function (a)
					{
						if (this._frame = a, this.noFrame = !1, this.width = a.width, this.height = a.height, !this.trim && !this.rotate && (a.x + a.width > this.baseTexture.width || a.y + a.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
						this.valid = a && a.width && a.height && this.baseTexture.hasLoaded, this.trim ? (this.width = this.trim.width, this.height = this.trim.height, this._frame.width = this.trim.width, this._frame.height = this.trim.height) : this.crop = a, this.valid && this._updateUvs()
					}
				},
				rotate:
				{
					get: function ()
					{
						return this._rotate
					},
					set: function (a)
					{
						this._rotate = a, this.valid && this._updateUvs()
					}
				}
			}), d.prototype.update = function ()
			{
				this.baseTexture.update()
			}, d.prototype.onBaseTextureLoaded = function (a)
			{
				this.noFrame ? this.frame = new i.Rectangle(0, 0, a.width, a.height) : this.frame = this._frame, this.emit("update", this)
			}, d.prototype.onBaseTextureUpdated = function (a)
			{
				this._frame.width = a.width, this._frame.height = a.height, this.emit("update", this)
			}, d.prototype.destroy = function (a)
			{
				this.baseTexture && (a && this.baseTexture.destroy(), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.crop = null, this.valid = !1, this.off("dispose", this.dispose, this), this.off("update", this.update, this)
			}, d.prototype.clone = function ()
			{
				return new d(this.baseTexture, this.frame, this.crop, this.trim, this.rotate)
			}, d.prototype._updateUvs = function ()
			{
				this._uvs || (this._uvs = new g), this._uvs.set(this.crop, this.baseTexture, this.rotate)
			}, d.fromImage = function (a, b, c)
			{
				var f = j.TextureCache[a];
				return f || (f = new d(e.fromImage(a, b, c)), j.TextureCache[a] = f), f
			}, d.fromFrame = function (a)
			{
				var b = j.TextureCache[a];
				if (!b) throw new Error('The frameId "' + a + '" does not exist in the texture cache');
				return b
			}, d.fromCanvas = function (a, b)
			{
				return new d(e.fromCanvas(a, b))
			}, d.fromVideo = function (a, b)
			{
				return "string" == typeof a ? d.fromVideoUrl(a, b) : new d(f.fromVideo(a, b))
			}, d.fromVideoUrl = function (a, b)
			{
				return new d(f.fromUrl(a, b))
			}, d.addTextureToCache = function (a, b)
			{
				j.TextureCache[b] = a
			}, d.removeTextureFromCache = function (a)
			{
				var b = j.TextureCache[a];
				return delete j.TextureCache[a], delete j.BaseTextureCache[a], b
			}, d.EMPTY = new d(new e)
		},
		{
			"../math": 33,
			"../utils": 77,
			"./BaseTexture": 70,
			"./TextureUvs": 73,
			"./VideoBaseTexture": 74,
			eventemitter3: 10
		}],
		73: [function (a, b, c)
		{
			function d()
			{
				this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1
			}
			b.exports = d;
			var e = a("../math/GroupD8");
			d.prototype.set = function (a, b, c)
			{
				var d = b.width,
					f = b.height;
				if (c)
				{
					var g = e.isSwapWidthHeight(c),
						h = (g ? a.height : a.width) / 2 / d,
						i = (g ? a.width : a.height) / 2 / f,
						j = a.x / d + h,
						k = a.y / f + i;
					c = e.add(c, e.NW), this.x0 = j + h * e.uX(c), this.y0 = k + i * e.uY(c), c = e.add(c, 2), this.x1 = j + h * e.uX(c), this.y1 = k + i * e.uY(c), c = e.add(c, 2), this.x2 = j + h * e.uX(c), this.y2 = k + i * e.uY(c), c = e.add(c, 2), this.x3 = j + h * e.uX(c), this.y3 = k + i * e.uY(c)
				}
				else this.x0 = a.x / d, this.y0 = a.y / f, this.x1 = (a.x + a.width) / d, this.y1 = a.y / f, this.x2 = (a.x + a.width) / d, this.y2 = (a.y + a.height) / f, this.x3 = a.x / d, this.y3 = (a.y + a.height) / f
			}
		},
		{
			"../math/GroupD8": 30
		}],
		74: [function (a, b, c)
		{
			function d(a, b)
			{
				if (!a) throw new Error("No video source element specified.");
				(a.readyState === a.HAVE_ENOUGH_DATA || a.readyState === a.HAVE_FUTURE_DATA) && a.width && a.height && (a.complete = !0), f.call(this, a, b), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), a.complete || (a.addEventListener("canplay", this._onCanPlay), a.addEventListener("canplaythrough", this._onCanPlay), a.addEventListener("play", this._onPlayStart.bind(this)), a.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
			}

			function e(a, b)
			{
				b || (b = "video/" + a.substr(a.lastIndexOf(".") + 1));
				var c = document.createElement("source");
				return c.src = a, c.type = b, c
			}
			var f = a("./BaseTexture"),
				g = a("../utils");
			d.prototype = Object.create(f.prototype), d.prototype.constructor = d, b.exports = d, d.prototype._onUpdate = function ()
			{
				this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
			}, d.prototype._onPlayStart = function ()
			{
				this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
			}, d.prototype._onPlayStop = function ()
			{
				this.autoUpdate = !1
			}, d.prototype._onCanPlay = function ()
			{
				this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
			}, d.prototype.destroy = function ()
			{
				this.source && this.source._pixiId && (delete g.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), f.prototype.destroy.call(this)
			}, d.fromVideo = function (a, b)
			{
				a._pixiId || (a._pixiId = "video_" + g.uid());
				var c = g.BaseTextureCache[a._pixiId];
				return c || (c = new d(a, b), g.BaseTextureCache[a._pixiId] = c), c
			}, d.fromUrl = function (a, b)
			{
				var c = document.createElement("video");
				if (Array.isArray(a))
					for (var f = 0; f < a.length; ++f) c.appendChild(e(a[f].src || a[f], a[f].mime));
				else c.appendChild(e(a.src || a, a.mime));
				return c.load(), c.play(), d.fromVideo(c, b)
			}, d.fromUrls = d.fromUrl
		},
		{
			"../utils": 77,
			"./BaseTexture": 70
		}],
		75: [function (a, b, c)
		{
			function d()
			{
				var a = this;
				this._tick = function (b)
				{
					a._requestId = null, a.started && (a.update(b), a.started && null === a._requestId && a._emitter.listeners(g, !0) && (a._requestId = requestAnimationFrame(a._tick)))
				}, this._emitter = new f, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / e.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
			}
			var e = a("../const"),
				f = a("eventemitter3"),
				g = "tick";
			Object.defineProperties(d.prototype,
			{
				FPS:
				{
					get: function ()
					{
						return 1e3 / this.elapsedMS
					}
				},
				minFPS:
				{
					get: function ()
					{
						return 1e3 / this._maxElapsedMS
					},
					set: function (a)
					{
						var b = Math.min(Math.max(0, a) / 1e3, e.TARGET_FPMS);
						this._maxElapsedMS = 1 / b
					}
				}
			}), d.prototype._requestIfNeeded = function ()
			{
				null === this._requestId && this._emitter.listeners(g, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
			}, d.prototype._cancelIfNeeded = function ()
			{
				null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
			}, d.prototype._startIfPossible = function ()
			{
				this.started ? this._requestIfNeeded() : this.autoStart && this.start()
			}, d.prototype.add = function (a, b)
			{
				return this._emitter.on(g, a, b), this._startIfPossible(), this
			}, d.prototype.addOnce = function (a, b)
			{
				return this._emitter.once(g, a, b), this._startIfPossible(), this
			}, d.prototype.remove = function (a, b)
			{
				return this._emitter.off(g, a, b), this._emitter.listeners(g, !0) || this._cancelIfNeeded(), this
			}, d.prototype.start = function ()
			{
				this.started || (this.started = !0, this._requestIfNeeded())
			}, d.prototype.stop = function ()
			{
				this.started && (this.started = !1, this._cancelIfNeeded())
			}, d.prototype.update = function (a)
			{
				var b;
				a = a || performance.now(), b = this.elapsedMS = a - this.lastTime, b > this._maxElapsedMS && (b = this._maxElapsedMS), this.deltaTime = b * e.TARGET_FPMS * this.speed, this._emitter.emit(g, this.deltaTime), this.lastTime = a
			}, b.exports = d
		},
		{
			"../const": 22,
			eventemitter3: 10
		}],
		76: [function (a, b, c)
		{
			var d = a("./Ticker"),
				e = new d;
			e.autoStart = !0, b.exports = {
				shared: e,
				Ticker: d
			}
		},
		{
			"./Ticker": 75
		}],
		77: [function (a, b, c)
		{
			var d = a("../const"),
				e = b.exports = {
					_uid: 0,
					_saidHello: !1,
					EventEmitter: a("eventemitter3"),
					pluginTarget: a("./pluginTarget"),
					async: a("async"),
					uid: function ()
					{
						return ++e._uid
					},
					hex2rgb: function (a, b)
					{
						return b = b || [], b[0] = (a >> 16 & 255) / 255, b[1] = (a >> 8 & 255) / 255, b[2] = (255 & a) / 255, b
					},
					hex2string: function (a)
					{
						return a = a.toString(16), a = "000000".substr(0, 6 - a.length) + a, "#" + a
					},
					rgb2hex: function (a)
					{
						return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
					},
					canUseNewCanvasBlendModes: function ()
					{
						if ("undefined" == typeof document) return !1;
						var a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",
							b = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
							c = new Image;
						c.src = a + "AP804Oa6" + b;
						var d = new Image;
						d.src = a + "/wCKxvRF" + b;
						var e = document.createElement("canvas");
						e.width = 6, e.height = 1;
						var f = e.getContext("2d");
						f.globalCompositeOperation = "multiply", f.drawImage(c, 0, 0), f.drawImage(d, 2, 0);
						var g = f.getImageData(2, 0, 1, 1)
							.data;
						return 255 === g[0] && 0 === g[1] && 0 === g[2]
					},
					getNextPowerOfTwo: function (a)
					{
						if (a > 0 && 0 === (a & a - 1)) return a;
						for (var b = 1; a > b;) b <<= 1;
						return b
					},
					isPowerOfTwo: function (a, b)
					{
						return a > 0 && 0 === (a & a - 1) && b > 0 && 0 === (b & b - 1)
					},
					getResolutionOfUrl: function (a)
					{
						var b = d.RETINA_PREFIX.exec(a);
						return b ? parseFloat(b[1]) : 1
					},
					sayHello: function (a)
					{
						if (!e._saidHello)
						{
							if (navigator.userAgent.toLowerCase()
								.indexOf("chrome") > -1)
							{
								var b = ["\n %c %c %c Pixi.js " + d.VERSION + " - âœ° " + a + " âœ°  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
								window.console.log.apply(console, b)
							}
							else window.console && window.console.log("Pixi.js " + d.VERSION + " - " + a + " - http://www.pixijs.com/");
							e._saidHello = !0
						}
					},
					isWebGLSupported: function ()
					{
						var a = {
							stencil: !0
						};
						try
						{
							if (!window.WebGLRenderingContext) return !1;
							var b = document.createElement("canvas"),
								c = b.getContext("webgl", a) || b.getContext("experimental-webgl", a);
							return !(!c || !c.getContextAttributes()
								.stencil)
						}
						catch (d)
						{
							return !1
						}
					},
					sign: function (a)
					{
						return a ? 0 > a ? -1 : 1 : 0
					},
					removeItems: function (a, b, c)
					{
						var d = a.length;
						if (!(b >= d || 0 === c))
						{
							c = b + c > d ? d - b : c;
							for (var e = b, f = d - c; f > e; ++e) a[e] = a[e + c];
							a.length = f
						}
					},
					TextureCache:
					{},
					BaseTextureCache:
					{}
				}
		},
		{
			"../const": 22,
			"./pluginTarget": 78,
			async: 1,
			eventemitter3: 10
		}],
		78: [function (a, b, c)
		{
			function d(a)
			{
				a.__plugins = {}, a.registerPlugin = function (b, c)
				{
					a.__plugins[b] = c
				}, a.prototype.initPlugins = function ()
				{
					this.plugins = this.plugins ||
					{};
					for (var b in a.__plugins) this.plugins[b] = new a.__plugins[b](this)
				}, a.prototype.destroyPlugins = function ()
				{
					for (var a in this.plugins) this.plugins[a].destroy(), this.plugins[a] = null;
					this.plugins = null
				}
			}
			b.exports = {
				mixin: function (a)
				{
					d(a)
				}
			}
		},
		{}],
		79: [function (a, b, c)
		{
			var d = a("./core"),
				e = a("./mesh"),
				f = a("./extras"),
				g = a("./filters");
			d.SpriteBatch = function ()
			{
				throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
			}, d.AssetLoader = function ()
			{
				throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
			}, Object.defineProperties(d,
			{
				Stage:
				{
					get: function ()
					{
						return console.warn("You do not need to use a PIXI Stage any more, you can simply render any container."), d.Container
					}
				},
				DisplayObjectContainer:
				{
					get: function ()
					{
						return console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."), d.Container
					}
				},
				Strip:
				{
					get: function ()
					{
						return console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), e.Mesh
					}
				},
				Rope:
				{
					get: function ()
					{
						return console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), e.Rope
					}
				},
				MovieClip:
				{
					get: function ()
					{
						return console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), f.MovieClip
					}
				},
				TilingSprite:
				{
					get: function ()
					{
						return console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), f.TilingSprite
					}
				},
				BitmapText:
				{
					get: function ()
					{
						return console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), f.BitmapText
					}
				},
				blendModes:
				{
					get: function ()
					{
						return console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), d.BLEND_MODES
					}
				},
				scaleModes:
				{
					get: function ()
					{
						return console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), d.SCALE_MODES
					}
				},
				BaseTextureCache:
				{
					get: function ()
					{
						return console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), d.utils.BaseTextureCache
					}
				},
				TextureCache:
				{
					get: function ()
					{
						return console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), d.utils.TextureCache
					}
				},
				math:
				{
					get: function ()
					{
						return console.warn("The math namespace is deprecated, please access members already accessible on PIXI."), d
					}
				}
			}), d.Sprite.prototype.setTexture = function (a)
			{
				this.texture = a, console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
			}, f.BitmapText.prototype.setText = function (a)
			{
				this.text = a, console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
			}, d.Text.prototype.setText = function (a)
			{
				this.text = a, console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
			}, d.Text.prototype.setStyle = function (a)
			{
				this.style = a, console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
			}, d.Texture.prototype.setFrame = function (a)
			{
				this.frame = a, console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
			}, Object.defineProperties(g,
			{
				AbstractFilter:
				{
					get: function ()
					{
						return console.warn("filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on."), d.AbstractFilter
					}
				},
				FXAAFilter:
				{
					get: function ()
					{
						return console.warn("filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on."), d.FXAAFilter
					}
				},
				SpriteMaskFilter:
				{
					get: function ()
					{
						return console.warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), d.SpriteMaskFilter
					}
				}
			}), d.utils.uuid = function ()
			{
				return console.warn("utils.uuid() is deprecated, please use utils.uid() from now on."), d.utils.uid()
			}
		},
		{
			"./core": 29,
			"./extras": 86,
			"./filters": 103,
			"./mesh": 128
		}],
		80: [function (a, b, c)
		{
			function d(a, b)
			{
				e.Container.call(this), b = b ||
				{}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
					tint: void 0 !== b.tint ? b.tint : 16777215,
					align: b.align || "left",
					name: null,
					size: 0
				}, this.font = b.font, this._text = a, this.maxWidth = 0, this.maxLineHeight = 0, this.dirty = !1, this.updateText()
			}
			var e = a("../core");
			d.prototype = Object.create(e.Container.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				tint:
				{
					get: function ()
					{
						return this._font.tint
					},
					set: function (a)
					{
						this._font.tint = "number" == typeof a && a >= 0 ? a : 16777215, this.dirty = !0
					}
				},
				align:
				{
					get: function ()
					{
						return this._font.align
					},
					set: function (a)
					{
						this._font.align = a || "left", this.dirty = !0
					}
				},
				font:
				{
					get: function ()
					{
						return this._font
					},
					set: function (a)
					{
						a && ("string" == typeof a ? (a = a.split(" "), this._font.name = 1 === a.length ? a[0] : a.slice(1)
							.join(" "), this._font.size = a.length >= 2 ? parseInt(a[0], 10) : d.fonts[this._font.name].size) : (this._font.name = a.name, this._font.size = "number" == typeof a.size ? a.size : parseInt(a.size, 10)), this.dirty = !0)
					}
				},
				text:
				{
					get: function ()
					{
						return this._text
					},
					set: function (a)
					{
						a = a.toString() || " ", this._text !== a && (this._text = a, this.dirty = !0)
					}
				}
			}), d.prototype.updateText = function ()
			{
				for (var a = d.fonts[this._font.name], b = new e.Point, c = null, f = [], g = 0, h = 0, i = [], j = 0, k = this._font.size / a.size, l = -1, m = 0, n = 0; n < this.text.length; n++)
				{
					var o = this.text.charCodeAt(n);
					if (l = /(\s)/.test(this.text.charAt(n)) ? n : l, /(?:\r\n|\r|\n)/.test(this.text.charAt(n))) i.push(g), h = Math.max(h, g), j++, b.x = 0, b.y += a.lineHeight, c = null;
					else if (-1 !== l && this.maxWidth > 0 && b.x * k > this.maxWidth) e.utils.removeItems(f, l, n - l), n = l, l = -1, i.push(g), h = Math.max(h, g), j++, b.x = 0, b.y += a.lineHeight, c = null;
					else
					{
						var p = a.chars[o];
						p && (c && p.kerning[c] && (b.x += p.kerning[c]), f.push(
						{
							texture: p.texture,
							line: j,
							charCode: o,
							position: new e.Point(b.x + p.xOffset, b.y + p.yOffset)
						}), g = b.x + (p.texture.width + p.xOffset), b.x += p.xAdvance, m = Math.max(m, p.yOffset + p.texture.height), c = o)
					}
				}
				i.push(g), h = Math.max(h, g);
				var q = [];
				for (n = 0; j >= n; n++)
				{
					var r = 0;
					"right" === this._font.align ? r = h - i[n] : "center" === this._font.align && (r = (h - i[n]) / 2), q.push(r)
				}
				var s = f.length,
					t = this.tint;
				for (n = 0; s > n; n++)
				{
					var u = this._glyphs[n];
					u ? u.texture = f[n].texture : (u = new e.Sprite(f[n].texture), this._glyphs.push(u)), u.position.x = (f[n].position.x + q[f[n].line]) * k, u.position.y = f[n].position.y * k, u.scale.x = u.scale.y = k, u.tint = t, u.parent || this.addChild(u)
				}
				for (n = s; n < this._glyphs.length; ++n) this.removeChild(this._glyphs[n]);
				this.textWidth = h * k, this.textHeight = (b.y + a.lineHeight) * k, this.maxLineHeight = m * k
			}, d.prototype.updateTransform = function ()
			{
				this.validate(), this.containerUpdateTransform()
			}, d.prototype.getLocalBounds = function ()
			{
				return this.validate(), e.Container.prototype.getLocalBounds.call(this)
			}, d.prototype.validate = function ()
			{
				this.dirty && (this.updateText(), this.dirty = !1)
			}, d.fonts = {}
		},
		{
			"../core": 29
		}],
		81: [function (a, b, c)
		{
			function d(a)
			{
				e.Sprite.call(this, a[0] instanceof e.Texture ? a[0] : a[0].texture), this._textures = null, this._durations = null, this.textures = a, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
			}
			var e = a("../core");
			d.prototype = Object.create(e.Sprite.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				totalFrames:
				{
					get: function ()
					{
						return this._textures.length
					}
				},
				textures:
				{
					get: function ()
					{
						return this._textures
					},
					set: function (a)
					{
						if (a[0] instanceof e.Texture) this._textures = a, this._durations = null;
						else
						{
							this._textures = [], this._durations = [];
							for (var b = 0; b < a.length; b++) this._textures.push(a[b].texture), this._durations.push(a[b].time)
						}
					}
				},
				currentFrame:
				{
					get: function ()
					{
						var a = Math.floor(this._currentTime) % this._textures.length;
						return 0 > a && (a += this._textures.length), a
					}
				}
			}), d.prototype.stop = function ()
			{
				this.playing && (this.playing = !1, e.ticker.shared.remove(this.update, this))
			}, d.prototype.play = function ()
			{
				this.playing || (this.playing = !0, e.ticker.shared.add(this.update, this))
			}, d.prototype.gotoAndStop = function (a)
			{
				this.stop(), this._currentTime = a, this._texture = this._textures[this.currentFrame]
			}, d.prototype.gotoAndPlay = function (a)
			{
				this._currentTime = a, this.play()
			}, d.prototype.update = function (a)
			{
				var b = this.animationSpeed * a;
				if (null !== this._durations)
				{
					var c = this._currentTime % 1 * this._durations[this.currentFrame];
					for (c += b / 60 * 1e3; 0 > c;) this._currentTime--, c += this._durations[this.currentFrame];
					var d = Math.sign(this.animationSpeed * a);
					for (this._currentTime = Math.floor(this._currentTime); c >= this._durations[this.currentFrame];) c -= this._durations[this.currentFrame] * d, this._currentTime += d;
					this._currentTime += c / this._durations[this.currentFrame]
				}
				else this._currentTime += b;
				this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : this._texture = this._textures[this.currentFrame]
			}, d.prototype.destroy = function ()
			{
				this.stop(), e.Sprite.prototype.destroy.call(this)
			}, d.fromFrames = function (a)
			{
				for (var b = [], c = 0; c < a.length; ++c) b.push(new e.Texture.fromFrame(a[c]));
				return new d(b)
			}, d.fromImages = function (a)
			{
				for (var b = [], c = 0; c < a.length; ++c) b.push(new e.Texture.fromImage(a[c]));
				return new d(b)
			}
		},
		{
			"../core": 29
		}],
		82: [function (a, b, c)
		{
			function d(a, b, c)
			{
				e.Sprite.call(this, a), this.tileScale = new e.Point(1, 1), this.tilePosition = new e.Point(0, 0), this._width = b || 100, this._height = c || 100, this._uvs = new e.TextureUvs, this._canvasPattern = null, this.shader = new e.AbstractFilter(["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "uniform vec4 uFrame;", "uniform vec4 uTransform;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vec2 coord = aTextureCoord;", "   coord -= uTransform.xy;", "   coord /= uTransform.zw;", "   vTextureCoord = coord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform vec4 uFrame;", "uniform vec2 uPixelSize;", "void main(void){", "   vec2 coord = mod(vTextureCoord, uFrame.zw);", "   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);", "   coord += uFrame.xy;", "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;", "}"].join("\n"),
				{
					uFrame:
					{
						type: "4fv",
						value: [0, 0, 1, 1]
					},
					uTransform:
					{
						type: "4fv",
						value: [0, 0, 1, 1]
					},
					uPixelSize:
					{
						type: "2fv",
						value: [1, 1]
					}
				})
			}
			var e = a("../core"),
				f = new e.Point,
				g = a("../core/renderers/canvas/utils/CanvasTinter");
			d.prototype = Object.create(e.Sprite.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				width:
				{
					get: function ()
					{
						return this._width
					},
					set: function (a)
					{
						this._width = a
					}
				},
				height:
				{
					get: function ()
					{
						return this._height
					},
					set: function (a)
					{
						this._height = a
					}
				}
			}), d.prototype._onTextureUpdate = function () {}, d.prototype._renderWebGL = function (a)
			{
				var b = this._texture;
				if (b && b._uvs)
				{
					var c = b._uvs,
						d = b._frame.width,
						e = b._frame.height,
						f = b.baseTexture.width,
						g = b.baseTexture.height;
					b._uvs = this._uvs, b._frame.width = this.width, b._frame.height = this.height, this.shader.uniforms.uPixelSize.value[0] = 1 / f, this.shader.uniforms.uPixelSize.value[1] = 1 / g, this.shader.uniforms.uFrame.value[0] = c.x0, this.shader.uniforms.uFrame.value[1] = c.y0, this.shader.uniforms.uFrame.value[2] = c.x1 - c.x0, this.shader.uniforms.uFrame.value[3] = c.y2 - c.y0, this.shader.uniforms.uTransform.value[0] = this.tilePosition.x % (d * this.tileScale.x) / this._width, this.shader.uniforms.uTransform.value[1] = this.tilePosition.y % (e * this.tileScale.y) / this._height, this.shader.uniforms.uTransform.value[2] = f / this._width * this.tileScale.x, this.shader.uniforms.uTransform.value[3] = g / this._height * this.tileScale.y, a.setObjectRenderer(a.plugins.sprite), a.plugins.sprite.render(this), b._uvs = c, b._frame.width = d, b._frame.height = e
				}
			}, d.prototype._renderCanvas = function (a)
			{
				var b = this._texture;
				if (b.baseTexture.hasLoaded)
				{
					var c = a.context,
						d = this.worldTransform,
						f = a.resolution,
						h = b.baseTexture,
						i = this.tilePosition.x / this.tileScale.x % b._frame.width,
						j = this.tilePosition.y / this.tileScale.y % b._frame.height;
					if (!this._canvasPattern)
					{
						var k = new e.CanvasBuffer(b._frame.width, b._frame.height);
						16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = g.getTintedTexture(this, this.tint)), k.context.drawImage(this.tintedTexture, 0, 0)) : k.context.drawImage(h.source, -b._frame.x, -b._frame.y), this._canvasPattern = k.context.createPattern(k.canvas, "repeat")
					}
					c.globalAlpha = this.worldAlpha, c.setTransform(d.a * f, d.b * f, d.c * f, d.d * f, d.tx * f, d.ty * f), c.scale(this.tileScale.x, this.tileScale.y), c.translate(i + this.anchor.x * -this._width, j + this.anchor.y * -this._height);
					var l = a.blendModes[this.blendMode];
					l !== a.context.globalCompositeOperation && (c.globalCompositeOperation = l), c.fillStyle = this._canvasPattern, c.fillRect(-i, -j, this._width / this.tileScale.x, this._height / this.tileScale.y)
				}
			}, d.prototype.getBounds = function ()
			{
				var a, b, c, d, e = this._width,
					f = this._height,
					g = e * (1 - this.anchor.x),
					h = e * -this.anchor.x,
					i = f * (1 - this.anchor.y),
					j = f * -this.anchor.y,
					k = this.worldTransform,
					l = k.a,
					m = k.b,
					n = k.c,
					o = k.d,
					p = k.tx,
					q = k.ty,
					r = l * h + n * j + p,
					s = o * j + m * h + q,
					t = l * g + n * j + p,
					u = o * j + m * g + q,
					v = l * g + n * i + p,
					w = o * i + m * g + q,
					x = l * h + n * i + p,
					y = o * i + m * h + q;
				a = r, a = a > t ? t : a, a = a > v ? v : a, a = a > x ? x : a, c = s, c = c > u ? u : c, c = c > w ? w : c, c = c > y ? y : c, b = r, b = t > b ? t : b, b = v > b ? v : b, b = x > b ? x : b, d = s, d = u > d ? u : d, d = w > d ? w : d, d = y > d ? y : d;
				var z = this._bounds;
				return z.x = a, z.width = b - a, z.y = c, z.height = d - c, this._currentBounds = z, z
			}, d.prototype.containsPoint = function (a)
			{
				this.worldTransform.applyInverse(a, f);
				var b, c = this._width,
					d = this._height,
					e = -c * this.anchor.x;
				return f.x > e && f.x < e + c && (b = -d * this.anchor.y, f.y > b && f.y < b + d)
			}, d.prototype.destroy = function ()
			{
				e.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
			}, d.fromFrame = function (a, b, c)
			{
				var f = e.utils.TextureCache[a];
				if (!f) throw new Error('The frameId "' + a + '" does not exist in the texture cache ' + this);
				return new d(f, b, c)
			}, d.fromImage = function (a, b, c, f, g)
			{
				return new d(e.Texture.fromImage(a, f, g), b, c)
			}
		},
		{
			"../core": 29,
			"../core/renderers/canvas/utils/CanvasTinter": 48
		}],
		83: [function (a, b, c)
		{
			var d = a("../core"),
				e = d.DisplayObject,
				f = new d.Matrix;
			e.prototype._cacheAsBitmap = !1, e.prototype._originalRenderWebGL = null, e.prototype._originalRenderCanvas = null, e.prototype._originalUpdateTransform = null, e.prototype._originalHitTest = null, e.prototype._originalDestroy = null, e.prototype._cachedSprite = null, Object.defineProperties(e.prototype,
			{
				cacheAsBitmap:
				{
					get: function ()
					{
						return this._cacheAsBitmap
					},
					set: function (a)
					{
						this._cacheAsBitmap !== a && (this._cacheAsBitmap = a, a ? (this._originalRenderWebGL = this.renderWebGL, this._originalRenderCanvas = this.renderCanvas, this._originalUpdateTransform = this.updateTransform, this._originalGetBounds = this.getBounds, this._originalDestroy = this.destroy, this._originalContainsPoint = this.containsPoint, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (this._cachedSprite && this._destroyCachedDisplayObject(), this.renderWebGL = this._originalRenderWebGL, this.renderCanvas = this._originalRenderCanvas, this.getBounds = this._originalGetBounds, this.destroy = this._originalDestroy, this.updateTransform = this._originalUpdateTransform, this.containsPoint = this._originalContainsPoint))
					}
				}
			}), e.prototype._renderCachedWebGL = function (a)
			{
				!this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(a), this._cachedSprite.worldAlpha = this.worldAlpha, a.setObjectRenderer(a.plugins.sprite), a.plugins.sprite.render(this._cachedSprite))
			}, e.prototype._initCachedDisplayObject = function (a)
			{
				if (!this._cachedSprite)
				{
					a.currentRenderer.flush();
					var b = this.getLocalBounds()
						.clone();
					if (this._filters)
					{
						var c = this._filters[0].padding;
						b.x -= c, b.y -= c, b.width += 2 * c, b.height += 2 * c
					}
					var e = a.currentRenderTarget,
						g = a.filterManager.filterStack,
						h = new d.RenderTexture(a, 0 | b.width, 0 | b.height),
						i = f;
					i.tx = -b.x, i.ty = -b.y, this.renderWebGL = this._originalRenderWebGL, h.render(this, i, !0, !0), a.setRenderTarget(e), a.filterManager.filterStack = g, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new d.Sprite(h), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(b.x / b.width), this._cachedSprite.anchor.y = -(b.y / b.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
				}
			}, e.prototype._renderCachedCanvas = function (a)
			{
				!this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(a), this._cachedSprite.worldAlpha = this.worldAlpha, this._cachedSprite.renderCanvas(a))
			}, e.prototype._initCachedDisplayObjectCanvas = function (a)
			{
				if (!this._cachedSprite)
				{
					var b = this.getLocalBounds(),
						c = a.context,
						e = new d.RenderTexture(a, 0 | b.width, 0 | b.height),
						g = f;
					g.tx = -b.x, g.ty = -b.y, this.renderCanvas = this._originalRenderCanvas, e.render(this, g, !0), a.context = c, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new d.Sprite(e), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(b.x / b.width), this._cachedSprite.anchor.y = -(b.y / b.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
				}
			}, e.prototype._getCachedBounds = function ()
			{
				return this._cachedSprite._currentBounds = null, this._cachedSprite.getBounds()
			}, e.prototype._destroyCachedDisplayObject = function ()
			{
				this._cachedSprite._texture.destroy(), this._cachedSprite = null
			}, e.prototype._cacheAsBitmapDestroy = function ()
			{
				this.cacheAsBitmap = !1, this._originalDestroy()
			}
		},
		{
			"../core": 29
		}],
		84: [function (a, b, c)
		{
			var d = a("../core");
			d.DisplayObject.prototype.name = null, d.Container.prototype.getChildByName = function (a)
			{
				for (var b = 0; b < this.children.length; b++)
					if (this.children[b].name === a) return this.children[b];
				return null
			}
		},
		{
			"../core": 29
		}],
		85: [function (a, b, c)
		{
			var d = a("../core");
			d.DisplayObject.prototype.getGlobalPosition = function (a)
			{
				return a = a || new d.Point, this.parent ? (this.displayObjectUpdateTransform(), a.x = this.worldTransform.tx, a.y = this.worldTransform.ty) : (a.x = this.position.x, a.y = this.position.y), a
			}
		},
		{
			"../core": 29
		}],
		86: [function (a, b, c)
		{
			a("./cacheAsBitmap"), a("./getChildByName"), a("./getGlobalPosition"), b.exports = {
				MovieClip: a("./MovieClip"),
				TilingSprite: a("./TilingSprite"),
				BitmapText: a("./BitmapText")
			}
		},
		{
			"./BitmapText": 80,
			"./MovieClip": 81,
			"./TilingSprite": 82,
			"./cacheAsBitmap": 83,
			"./getChildByName": 84,
			"./getGlobalPosition": 85
		}],
		87: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",
				{
					dimensions:
					{
						type: "4fv",
						value: new Float32Array([0, 0, 0, 0])
					},
					pixelSize:
					{
						type: "1f",
						value: 8
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				size:
				{
					get: function ()
					{
						return this.uniforms.pixelSize.value
					},
					set: function (a)
					{
						this.uniforms.pixelSize.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		88: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this), this.blurXFilter = new f, this.blurYFilter = new g, this.defaultFilter = new e.AbstractFilter
			}
			var e = a("../../core"),
				f = a("../blur/BlurXFilter"),
				g = a("../blur/BlurYFilter");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager.getRenderTarget(!0);
				this.defaultFilter.applyFilter(a, b, c), this.blurXFilter.applyFilter(a, b, d), a.blendModeManager.setBlendMode(e.BLEND_MODES.SCREEN), this.blurYFilter.applyFilter(a, d, c), a.blendModeManager.setBlendMode(e.BLEND_MODES.NORMAL), a.filterManager.returnRenderTarget(d)
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.blurXFilter.blur
					},
					set: function (a)
					{
						this.blurXFilter.blur = this.blurYFilter.blur = a
					}
				},
				blurX:
				{
					get: function ()
					{
						return this.blurXFilter.blur
					},
					set: function (a)
					{
						this.blurXFilter.blur = a
					}
				},
				blurY:
				{
					get: function ()
					{
						return this.blurYFilter.blur
					},
					set: function (a)
					{
						this.blurYFilter.blur = a
					}
				}
			})
		},
		{
			"../../core": 29,
			"../blur/BlurXFilter": 91,
			"../blur/BlurYFilter": 92
		}],
		89: [function (a, b, c)
		{
			function d(a, b)
			{
				e.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n",
				{
					strength:
					{
						type: "1f",
						value: 1
					},
					dirX:
					{
						type: "1f",
						value: a || 0
					},
					dirY:
					{
						type: "1f",
						value: b || 0
					}
				}), this.defaultFilter = new e.AbstractFilter, this.passes = 1, this.dirX = a || 0, this.dirY = b || 0, this.strength = 4
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c, d)
			{
				var e = this.getShader(a);
				if (this.uniforms.strength.value = this.strength / 4 / this.passes * (b.frame.width / b.size.width), 1 === this.passes) a.filterManager.applyFilter(e, b, c, d);
				else
				{
					var f = a.filterManager.getRenderTarget(!0);
					a.filterManager.applyFilter(e, b, f, d);
					for (var g = 0; g < this.passes - 2; g++) a.filterManager.applyFilter(e, f, f, d);
					a.filterManager.applyFilter(e, f, c, d), a.filterManager.returnRenderTarget(f)
				}
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.strength
					},
					set: function (a)
					{
						this.padding = .5 * a, this.strength = a
					}
				},
				dirX:
				{
					get: function ()
					{
						return this.dirX
					},
					set: function (a)
					{
						this.uniforms.dirX.value = a
					}
				},
				dirY:
				{
					get: function ()
					{
						return this.dirY
					},
					set: function (a)
					{
						this.uniforms.dirY.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		90: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this), this.blurXFilter = new f, this.blurYFilter = new g
			}
			var e = a("../../core"),
				f = a("./BlurXFilter"),
				g = a("./BlurYFilter");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager.getRenderTarget(!0);
				this.blurXFilter.applyFilter(a, b, d), this.blurYFilter.applyFilter(a, d, c), a.filterManager.returnRenderTarget(d)
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.blurXFilter.blur
					},
					set: function (a)
					{
						this.padding = .5 * Math.abs(a), this.blurXFilter.blur = this.blurYFilter.blur = a
					}
				},
				passes:
				{
					get: function ()
					{
						return this.blurXFilter.passes
					},
					set: function (a)
					{
						this.blurXFilter.passes = this.blurYFilter.passes = a
					}
				},
				blurX:
				{
					get: function ()
					{
						return this.blurXFilter.blur
					},
					set: function (a)
					{
						this.blurXFilter.blur = a
					}
				},
				blurY:
				{
					get: function ()
					{
						return this.blurYFilter.blur
					},
					set: function (a)
					{
						this.blurYFilter.blur = a
					}
				}
			})
		},
		{
			"../../core": 29,
			"./BlurXFilter": 91,
			"./BlurYFilter": 92
		}],
		91: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",
				{
					strength:
					{
						type: "1f",
						value: 1
					}
				}), this.passes = 1, this.strength = 4
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c, d)
			{
				var e = this.getShader(a);
				if (this.uniforms.strength.value = this.strength / 4 / this.passes * (b.frame.width / b.size.width), 1 === this.passes) a.filterManager.applyFilter(e, b, c, d);
				else
				{
					for (var f = a.filterManager.getRenderTarget(!0), g = b, h = f, i = 0; i < this.passes - 1; i++)
					{
						a.filterManager.applyFilter(e, g, h, !0);
						var j = h;
						h = g, g = j
					}
					a.filterManager.applyFilter(e, g, c, d), a.filterManager.returnRenderTarget(f)
				}
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.strength
					},
					set: function (a)
					{
						this.padding = .5 * Math.abs(a), this.strength = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		92: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",
				{
					strength:
					{
						type: "1f",
						value: 1
					}
				}), this.passes = 1, this.strength = 4
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c, d)
			{
				var e = this.getShader(a);
				if (this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (b.frame.height / b.size.height), 1 === this.passes) a.filterManager.applyFilter(e, b, c, d);
				else
				{
					for (var f = a.filterManager.getRenderTarget(!0), g = b, h = f, i = 0; i < this.passes - 1; i++)
					{
						a.filterManager.applyFilter(e, g, h, !0);
						var j = h;
						h = g, g = j
					}
					a.filterManager.applyFilter(e, g, c, d), a.filterManager.returnRenderTarget(f)
				}
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.strength
					},
					set: function (a)
					{
						this.padding = .5 * Math.abs(a), this.strength = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		93: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",
				{
					delta:
					{
						type: "v2",
						value:
						{
							x: .1,
							y: 0
						}
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d
		},
		{
			"../../core": 29
		}],
		94: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n",
				{
					m:
					{
						type: "1fv",
						value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype._loadMatrix = function (a, b)
			{
				b = !!b;
				var c = a;
				b && (this._multiply(c, this.uniforms.m.value, a), c = this._colorMatrix(c)), this.uniforms.m.value = c
			}, d.prototype._multiply = function (a, b, c)
			{
				return a[0] = b[0] * c[0] + b[1] * c[5] + b[2] * c[10] + b[3] * c[15], a[1] = b[0] * c[1] + b[1] * c[6] + b[2] * c[11] + b[3] * c[16], a[2] = b[0] * c[2] + b[1] * c[7] + b[2] * c[12] + b[3] * c[17], a[3] = b[0] * c[3] + b[1] * c[8] + b[2] * c[13] + b[3] * c[18], a[4] = b[0] * c[4] + b[1] * c[9] + b[2] * c[14] + b[3] * c[19], a[5] = b[5] * c[0] + b[6] * c[5] + b[7] * c[10] + b[8] * c[15], a[6] = b[5] * c[1] + b[6] * c[6] + b[7] * c[11] + b[8] * c[16], a[7] = b[5] * c[2] + b[6] * c[7] + b[7] * c[12] + b[8] * c[17], a[8] = b[5] * c[3] + b[6] * c[8] + b[7] * c[13] + b[8] * c[18], a[9] = b[5] * c[4] + b[6] * c[9] + b[7] * c[14] + b[8] * c[19], a[10] = b[10] * c[0] + b[11] * c[5] + b[12] * c[10] + b[13] * c[15], a[11] = b[10] * c[1] + b[11] * c[6] + b[12] * c[11] + b[13] * c[16], a[12] = b[10] * c[2] + b[11] * c[7] + b[12] * c[12] + b[13] * c[17], a[13] = b[10] * c[3] + b[11] * c[8] + b[12] * c[13] + b[13] * c[18], a[14] = b[10] * c[4] + b[11] * c[9] + b[12] * c[14] + b[13] * c[19], a[15] = b[15] * c[0] + b[16] * c[5] + b[17] * c[10] + b[18] * c[15], a[16] = b[15] * c[1] + b[16] * c[6] + b[17] * c[11] + b[18] * c[16], a[17] = b[15] * c[2] + b[16] * c[7] + b[17] * c[12] + b[18] * c[17], a[18] = b[15] * c[3] + b[16] * c[8] + b[17] * c[13] + b[18] * c[18], a[19] = b[15] * c[4] + b[16] * c[9] + b[17] * c[14] + b[18] * c[19], a
			}, d.prototype._colorMatrix = function (a)
			{
				var b = new Float32Array(a);
				return b[4] /= 255, b[9] /= 255, b[14] /= 255, b[19] /= 255, b
			}, d.prototype.brightness = function (a, b)
			{
				var c = [a, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(c, b)
			}, d.prototype.greyscale = function (a, b)
			{
				var c = [a, a, a, 0, 0, a, a, a, 0, 0, a, a, a, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(c, b)
			}, d.prototype.grayscale = d.prototype.greyscale, d.prototype.blackAndWhite = function (a)
			{
				var b = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.hue = function (a, b)
			{
				a = (a || 0) / 180 * Math.PI;
				var c = Math.cos(a),
					d = Math.sin(a),
					e = .213,
					f = .715,
					g = .072,
					h = [e + c * (1 - e) + d * -e, f + c * -f + d * -f, g + c * -g + d * (1 - g), 0, 0, e + c * -e + .143 * d, f + c * (1 - f) + .14 * d, g + c * -g + d * -.283, 0, 0, e + c * -e + d * -(1 - e), f + c * -f + d * f, g + c * (1 - g) + d * g, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(h, b)
			}, d.prototype.contrast = function (a, b)
			{
				var c = (a || 0) + 1,
					d = -128 * (c - 1),
					e = [c, 0, 0, 0, d, 0, c, 0, 0, d, 0, 0, c, 0, d, 0, 0, 0, 1, 0];
				this._loadMatrix(e, b)
			}, d.prototype.saturate = function (a, b)
			{
				var c = 2 * (a || 0) / 3 + 1,
					d = (c - 1) * -.5,
					e = [c, d, d, 0, 0, d, c, d, 0, 0, d, d, c, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(e, b)
			}, d.prototype.desaturate = function (a)
			{
				this.saturate(-1)
			}, d.prototype.negative = function (a)
			{
				var b = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.sepia = function (a)
			{
				var b = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.technicolor = function (a)
			{
				var b = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.polaroid = function (a)
			{
				var b = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.toBGR = function (a)
			{
				var b = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.kodachrome = function (a)
			{
				var b = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.browni = function (a)
			{
				var b = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.vintage = function (a)
			{
				var b = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.colorTone = function (a, b, c, d, e)
			{
				a = a || .2, b = b || .15, c = c || 16770432, d = d || 3375104;
				var f = (c >> 16 & 255) / 255,
					g = (c >> 8 & 255) / 255,
					h = (255 & c) / 255,
					i = (d >> 16 & 255) / 255,
					j = (d >> 8 & 255) / 255,
					k = (255 & d) / 255,
					l = [.3, .59, .11, 0, 0, f, g, h, a, 0, i, j, k, b, 0, f - i, g - j, h - k, 0, 0];
				this._loadMatrix(l, e)
			}, d.prototype.night = function (a, b)
			{
				a = a || .1;
				var c = [-2 * a, -a, 0, 0, 0, -a, 0, a, 0, 0, 0, a, 2 * a, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(c, b)
			}, d.prototype.predator = function (a, b)
			{
				var c = [11.224130630493164 * a, -4.794486999511719 * a, -2.8746118545532227 * a, 0 * a, .40342438220977783 * a, -3.6330697536468506 * a, 9.193157196044922 * a, -2.951810836791992 * a, 0 * a, -1.316135048866272 * a, -3.2184197902679443 * a, -4.2375030517578125 * a, 7.476448059082031 * a, 0 * a, .8044459223747253 * a, 0, 0, 0, 1, 0];
				this._loadMatrix(c, b)
			}, d.prototype.lsd = function (a)
			{
				var b = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(b, a)
			}, d.prototype.reset = function ()
			{
				var a = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
				this._loadMatrix(a, !1)
			}, Object.defineProperties(d.prototype,
			{
				matrix:
				{
					get: function ()
					{
						return this.uniforms.m.value
					},
					set: function (a)
					{
						this.uniforms.m.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		95: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n",
				{
					step:
					{
						type: "1f",
						value: 5
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				step:
				{
					get: function ()
					{
						return this.uniforms.step.value
					},
					set: function (a)
					{
						this.uniforms.step.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		96: [function (a, b, c)
		{
			function d(a, b, c)
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",
				{
					matrix:
					{
						type: "1fv",
						value: new Float32Array(a)
					},
					texelSize:
					{
						type: "v2",
						value:
						{
							x: 1 / b,
							y: 1 / c
						}
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				matrix:
				{
					get: function ()
					{
						return this.uniforms.matrix.value
					},
					set: function (a)
					{
						this.uniforms.matrix.value = new Float32Array(a)
					}
				},
				width:
				{
					get: function ()
					{
						return 1 / this.uniforms.texelSize.value.x
					},
					set: function (a)
					{
						this.uniforms.texelSize.value.x = 1 / a
					}
				},
				height:
				{
					get: function ()
					{
						return 1 / this.uniforms.texelSize.value.y
					},
					set: function (a)
					{
						this.uniforms.texelSize.value.y = 1 / a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		97: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d
		},
		{
			"../../core": 29
		}],
		98: [function (a, b, c)
		{
			function d(a, b)
			{
				var c = new e.Matrix;
				a.renderable = !1, e.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision mediump float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n",
				{
					mapSampler:
					{
						type: "sampler2D",
						value: a.texture
					},
					otherMatrix:
					{
						type: "mat3",
						value: c.toArray(!0)
					},
					scale:
					{
						type: "v2",
						value:
						{
							x: 1,
							y: 1
						}
					}
				}), this.maskSprite = a, this.maskMatrix = c, (null === b || void 0 === b) && (b = 20), this.scale = new e.Point(b, b)
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager;
				d.calculateMappedMatrix(b.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.scale.value.x = this.scale.x * (1 / b.frame.width), this.uniforms.scale.value.y = this.scale.y * (1 / b.frame.height);
				var e = this.getShader(a);
				d.applyFilter(e, b, c)
			}, Object.defineProperties(d.prototype,
			{
				map:
				{
					get: function ()
					{
						return this.uniforms.mapSampler.value
					},
					set: function (a)
					{
						this.uniforms.mapSampler.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		99: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",
				{
					scale:
					{
						type: "1f",
						value: 1
					},
					angle:
					{
						type: "1f",
						value: 5
					},
					dimensions:
					{
						type: "4fv",
						value: [0, 0, 0, 0]
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				scale:
				{
					get: function ()
					{
						return this.uniforms.scale.value
					},
					set: function (a)
					{
						this.uniforms.scale.value = a
					}
				},
				angle:
				{
					get: function ()
					{
						return this.uniforms.angle.value
					},
					set: function (a)
					{
						this.uniforms.angle.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		100: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n",
				{
					blur:
					{
						type: "1f",
						value: 1 / 512
					},
					color:
					{
						type: "c",
						value: [0, 0, 0]
					},
					alpha:
					{
						type: "1f",
						value: .7
					},
					offset:
					{
						type: "2f",
						value: [5, 5]
					},
					strength:
					{
						type: "1f",
						value: 1
					}
				}), this.passes = 1, this.strength = 4
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c, d)
			{
				var e = this.getShader(a);
				if (this.uniforms.strength.value = this.strength / 4 / this.passes * (b.frame.height / b.size.height), 1 === this.passes) a.filterManager.applyFilter(e, b, c, d);
				else
				{
					for (var f = a.filterManager.getRenderTarget(!0), g = b, h = f, i = 0; i < this.passes - 1; i++)
					{
						a.filterManager.applyFilter(e, g, h, d);
						var j = h;
						h = g, g = j
					}
					a.filterManager.applyFilter(e, g, c, d), a.filterManager.returnRenderTarget(f)
				}
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.strength
					},
					set: function (a)
					{
						this.padding = .5 * a, this.strength = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		101: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this), this.blurXFilter = new f, this.blurYTintFilter = new g, this.defaultFilter = new e.AbstractFilter, this.padding = 30, this._dirtyPosition = !0, this._angle = 45 * Math.PI / 180, this._distance = 10, this.alpha = .75, this.hideObject = !1, this.blendMode = e.BLEND_MODES.MULTIPLY
			}
			var e = a("../../core"),
				f = a("../blur/BlurXFilter"),
				g = a("./BlurYTintFilter");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager.getRenderTarget(!0);
				this._dirtyPosition && (this._dirtyPosition = !1, this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance, this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance), this.blurXFilter.applyFilter(a, b, d), a.blendModeManager.setBlendMode(this.blendMode), this.blurYTintFilter.applyFilter(a, d, c), a.blendModeManager.setBlendMode(e.BLEND_MODES.NORMAL), this.hideObject || this.defaultFilter.applyFilter(a, b, c), a.filterManager.returnRenderTarget(d)
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.blurXFilter.blur
					},
					set: function (a)
					{
						this.blurXFilter.blur = this.blurYTintFilter.blur = a
					}
				},
				blurX:
				{
					get: function ()
					{
						return this.blurXFilter.blur
					},
					set: function (a)
					{
						this.blurXFilter.blur = a
					}
				},
				blurY:
				{
					get: function ()
					{
						return this.blurYTintFilter.blur
					},
					set: function (a)
					{
						this.blurYTintFilter.blur = a
					}
				},
				color:
				{
					get: function ()
					{
						return e.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)
					},
					set: function (a)
					{
						this.blurYTintFilter.uniforms.color.value = e.utils.hex2rgb(a)
					}
				},
				alpha:
				{
					get: function ()
					{
						return this.blurYTintFilter.uniforms.alpha.value
					},
					set: function (a)
					{
						this.blurYTintFilter.uniforms.alpha.value = a
					}
				},
				distance:
				{
					get: function ()
					{
						return this._distance
					},
					set: function (a)
					{
						this._dirtyPosition = !0, this._distance = a
					}
				},
				angle:
				{
					get: function ()
					{
						return this._angle
					},
					set: function (a)
					{
						this._dirtyPosition = !0, this._angle = a
					}
				}
			})
		},
		{
			"../../core": 29,
			"../blur/BlurXFilter": 91,
			"./BlurYTintFilter": 100
		}],
		102: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n",
				{
					gray:
					{
						type: "1f",
						value: 1
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				gray:
				{
					get: function ()
					{
						return this.uniforms.gray.value
					},
					set: function (a)
					{
						this.uniforms.gray.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		103: [function (a, b, c)
		{
			b.exports = {
				AsciiFilter: a("./ascii/AsciiFilter"),
				BloomFilter: a("./bloom/BloomFilter"),
				BlurFilter: a("./blur/BlurFilter"),
				BlurXFilter: a("./blur/BlurXFilter"),
				BlurYFilter: a("./blur/BlurYFilter"),
				BlurDirFilter: a("./blur/BlurDirFilter"),
				ColorMatrixFilter: a("./color/ColorMatrixFilter"),
				ColorStepFilter: a("./color/ColorStepFilter"),
				ConvolutionFilter: a("./convolution/ConvolutionFilter"),
				CrossHatchFilter: a("./crosshatch/CrossHatchFilter"),
				DisplacementFilter: a("./displacement/DisplacementFilter"),
				DotScreenFilter: a("./dot/DotScreenFilter"),
				GrayFilter: a("./gray/GrayFilter"),
				DropShadowFilter: a("./dropshadow/DropShadowFilter"),
				InvertFilter: a("./invert/InvertFilter"),
				NoiseFilter: a("./noise/NoiseFilter"),
				PixelateFilter: a("./pixelate/PixelateFilter"),
				RGBSplitFilter: a("./rgb/RGBSplitFilter"),
				ShockwaveFilter: a("./shockwave/ShockwaveFilter"),
				SepiaFilter: a("./sepia/SepiaFilter"),
				SmartBlurFilter: a("./blur/SmartBlurFilter"),
				TiltShiftFilter: a("./tiltshift/TiltShiftFilter"),
				TiltShiftXFilter: a("./tiltshift/TiltShiftXFilter"),
				TiltShiftYFilter: a("./tiltshift/TiltShiftYFilter"),
				TwistFilter: a("./twist/TwistFilter")
			}
		},
		{
			"./ascii/AsciiFilter": 87,
			"./bloom/BloomFilter": 88,
			"./blur/BlurDirFilter": 89,
			"./blur/BlurFilter": 90,
			"./blur/BlurXFilter": 91,
			"./blur/BlurYFilter": 92,
			"./blur/SmartBlurFilter": 93,
			"./color/ColorMatrixFilter": 94,
			"./color/ColorStepFilter": 95,
			"./convolution/ConvolutionFilter": 96,
			"./crosshatch/CrossHatchFilter": 97,
			"./displacement/DisplacementFilter": 98,
			"./dot/DotScreenFilter": 99,
			"./dropshadow/DropShadowFilter": 101,
			"./gray/GrayFilter": 102,
			"./invert/InvertFilter": 104,
			"./noise/NoiseFilter": 105,
			"./pixelate/PixelateFilter": 106,
			"./rgb/RGBSplitFilter": 107,
			"./sepia/SepiaFilter": 108,
			"./shockwave/ShockwaveFilter": 109,
			"./tiltshift/TiltShiftFilter": 111,
			"./tiltshift/TiltShiftXFilter": 112,
			"./tiltshift/TiltShiftYFilter": 113,
			"./twist/TwistFilter": 114
		}],
		104: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n",
				{
					invert:
					{
						type: "1f",
						value: 1
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				invert:
				{
					get: function ()
					{
						return this.uniforms.invert.value
					},
					set: function (a)
					{
						this.uniforms.invert.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		105: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n",
				{
					noise:
					{
						type: "1f",
						value: .5
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				noise:
				{
					get: function ()
					{
						return this.uniforms.noise.value
					},
					set: function (a)
					{
						this.uniforms.noise.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		106: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n",
				{
					dimensions:
					{
						type: "4fv",
						value: new Float32Array([0, 0, 0, 0])
					},
					pixelSize:
					{
						type: "v2",
						value:
						{
							x: 10,
							y: 10
						}
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				size:
				{
					get: function ()
					{
						return this.uniforms.pixelSize.value
					},
					set: function (a)
					{
						this.uniforms.pixelSize.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		107: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",
				{
					red:
					{
						type: "v2",
						value:
						{
							x: 20,
							y: 20
						}
					},
					green:
					{
						type: "v2",
						value:
						{
							x: -20,
							y: 20
						}
					},
					blue:
					{
						type: "v2",
						value:
						{
							x: 20,
							y: -20
						}
					},
					dimensions:
					{
						type: "4fv",
						value: [0, 0, 0, 0]
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				red:
				{
					get: function ()
					{
						return this.uniforms.red.value
					},
					set: function (a)
					{
						this.uniforms.red.value = a
					}
				},
				green:
				{
					get: function ()
					{
						return this.uniforms.green.value
					},
					set: function (a)
					{
						this.uniforms.green.value = a
					}
				},
				blue:
				{
					get: function ()
					{
						return this.uniforms.blue.value
					},
					set: function (a)
					{
						this.uniforms.blue.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		108: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n",
				{
					sepia:
					{
						type: "1f",
						value: 1
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				sepia:
				{
					get: function ()
					{
						return this.uniforms.sepia.value
					},
					set: function (a)
					{
						this.uniforms.sepia.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		109: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",
				{
					center:
					{
						type: "v2",
						value:
						{
							x: .5,
							y: .5
						}
					},
					params:
					{
						type: "v3",
						value:
						{
							x: 10,
							y: .8,
							z: .1
						}
					},
					time:
					{
						type: "1f",
						value: 0
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				center:
				{
					get: function ()
					{
						return this.uniforms.center.value
					},
					set: function (a)
					{
						this.uniforms.center.value = a
					}
				},
				params:
				{
					get: function ()
					{
						return this.uniforms.params.value
					},
					set: function (a)
					{
						this.uniforms.params.value = a
					}
				},
				time:
				{
					get: function ()
					{
						return this.uniforms.time.value
					},
					set: function (a)
					{
						this.uniforms.time.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		110: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",
				{
					blur:
					{
						type: "1f",
						value: 100
					},
					gradientBlur:
					{
						type: "1f",
						value: 600
					},
					start:
					{
						type: "v2",
						value:
						{
							x: 0,
							y: window.innerHeight / 2
						}
					},
					end:
					{
						type: "v2",
						value:
						{
							x: 600,
							y: window.innerHeight / 2
						}
					},
					delta:
					{
						type: "v2",
						value:
						{
							x: 30,
							y: 30
						}
					},
					texSize:
					{
						type: "v2",
						value:
						{
							x: window.innerWidth,
							y: window.innerHeight
						}
					}
				}), this.updateDelta()
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.updateDelta = function ()
			{
				this.uniforms.delta.value.x = 0, this.uniforms.delta.value.y = 0
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.uniforms.blur.value
					},
					set: function (a)
					{
						this.uniforms.blur.value = a
					}
				},
				gradientBlur:
				{
					get: function ()
					{
						return this.uniforms.gradientBlur.value
					},
					set: function (a)
					{
						this.uniforms.gradientBlur.value = a
					}
				},
				start:
				{
					get: function ()
					{
						return this.uniforms.start.value
					},
					set: function (a)
					{
						this.uniforms.start.value = a, this.updateDelta()
					}
				},
				end:
				{
					get: function ()
					{
						return this.uniforms.end.value
					},
					set: function (a)
					{
						this.uniforms.end.value = a, this.updateDelta()
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		111: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this), this.tiltShiftXFilter = new f, this.tiltShiftYFilter = new g
			}
			var e = a("../../core"),
				f = a("./TiltShiftXFilter"),
				g = a("./TiltShiftYFilter");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.applyFilter = function (a, b, c)
			{
				var d = a.filterManager.getRenderTarget(!0);
				this.tiltShiftXFilter.applyFilter(a, b, d), this.tiltShiftYFilter.applyFilter(a, d, c), a.filterManager.returnRenderTarget(d)
			}, Object.defineProperties(d.prototype,
			{
				blur:
				{
					get: function ()
					{
						return this.tiltShiftXFilter.blur
					},
					set: function (a)
					{
						this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = a
					}
				},
				gradientBlur:
				{
					get: function ()
					{
						return this.tiltShiftXFilter.gradientBlur
					},
					set: function (a)
					{
						this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = a
					}
				},
				start:
				{
					get: function ()
					{
						return this.tiltShiftXFilter.start
					},
					set: function (a)
					{
						this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = a
					}
				},
				end:
				{
					get: function ()
					{
						return this.tiltShiftXFilter.end
					},
					set: function (a)
					{
						this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = a
					}
				}
			})
		},
		{
			"../../core": 29,
			"./TiltShiftXFilter": 112,
			"./TiltShiftYFilter": 113
		}],
		112: [function (a, b, c)
		{
			function d()
			{
				e.call(this)
			}
			var e = a("./TiltShiftAxisFilter");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.updateDelta = function ()
			{
				var a = this.uniforms.end.value.x - this.uniforms.start.value.x,
					b = this.uniforms.end.value.y - this.uniforms.start.value.y,
					c = Math.sqrt(a * a + b * b);
				this.uniforms.delta.value.x = a / c, this.uniforms.delta.value.y = b / c
			}
		},
		{
			"./TiltShiftAxisFilter": 110
		}],
		113: [function (a, b, c)
		{
			function d()
			{
				e.call(this)
			}
			var e = a("./TiltShiftAxisFilter");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.updateDelta = function ()
			{
				var a = this.uniforms.end.value.x - this.uniforms.start.value.x,
					b = this.uniforms.end.value.y - this.uniforms.start.value.y,
					c = Math.sqrt(a * a + b * b);
				this.uniforms.delta.value.x = -b / c, this.uniforms.delta.value.y = a / c
			}
		},
		{
			"./TiltShiftAxisFilter": 110
		}],
		114: [function (a, b, c)
		{
			function d()
			{
				e.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n",
				{
					radius:
					{
						type: "1f",
						value: .5
					},
					angle:
					{
						type: "1f",
						value: 5
					},
					offset:
					{
						type: "v2",
						value:
						{
							x: .5,
							y: .5
						}
					}
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.AbstractFilter.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				offset:
				{
					get: function ()
					{
						return this.uniforms.offset.value
					},
					set: function (a)
					{
						this.uniforms.offset.value = a
					}
				},
				radius:
				{
					get: function ()
					{
						return this.uniforms.radius.value
					},
					set: function (a)
					{
						this.uniforms.radius.value = a
					}
				},
				angle:
				{
					get: function ()
					{
						return this.uniforms.angle.value
					},
					set: function (a)
					{
						this.uniforms.angle.value = a
					}
				}
			})
		},
		{
			"../../core": 29
		}],
		115: [function (a, b, c)
		{
			(function (c)
			{
				a("./polyfill");
				var d = b.exports = a("./core");
				d.extras = a("./extras"), d.filters = a("./filters"), d.interaction = a("./interaction"), d.loaders = a("./loaders"), d.mesh = a("./mesh"), d.accessibility = a("./accessibility"), d.loader = new d.loaders.Loader, Object.assign(d, a("./deprecation")), c.PIXI = d
			})
			.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window :
			{})
		},
		{
			"./accessibility": 21,
			"./core": 29,
			"./deprecation": 79,
			"./extras": 86,
			"./filters": 103,
			"./interaction": 118,
			"./loaders": 121,
			"./mesh": 128,
			"./polyfill": 133
		}],
		116: [function (a, b, c)
		{
			function d()
			{
				this.global = new e.Point, this.target = null, this.originalEvent = null
			}
			var e = a("../core");
			d.prototype.constructor = d, b.exports = d, d.prototype.getLocalPosition = function (a, b, c)
			{
				return a.worldTransform.applyInverse(c || this.global, b)
			}
		},
		{
			"../core": 29
		}],
		117: [function (a, b, c)
		{
			function d(a, b)
			{
				b = b ||
				{}, this.renderer = a, this.autoPreventDefault = void 0 !== b.autoPreventDefault ? b.autoPreventDefault : !0, this.interactionFrequency = b.interactionFrequency || 10, this.mouse = new f, this.eventData = {
					stopped: !1,
					target: null,
					type: null,
					data: this.mouse,
					stopPropagation: function ()
					{
						this.stopped = !0
					}
				}, this.interactiveDataPool = [], this.interactionDOMElement = null, this.moveWhenInside = !1, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this._tempPoint = new e.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
			}
			var e = a("../core"),
				f = a("./InteractionData");
			Object.assign(e.DisplayObject.prototype, a("./interactiveTarget")), d.prototype.constructor = d, b.exports = d, d.prototype.setTargetElement = function (a, b)
			{
				this.removeEvents(), this.interactionDOMElement = a, this.resolution = b || 1, this.addEvents()
			}, d.prototype.addEvents = function ()
			{
				this.interactionDOMElement && (e.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
			}, d.prototype.removeEvents = function ()
			{
				this.interactionDOMElement && (e.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
			}, d.prototype.update = function (a)
			{
				if (this._deltaTime += a, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement))
				{
					if (this.didMove) return void(this.didMove = !1);
					this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
				}
			}, d.prototype.dispatchEvent = function (a, b, c)
			{
				c.stopped || (c.target = a, c.type = b, a.emit(b, c), a[b] && a[b](c))
			}, d.prototype.mapPositionToPoint = function (a, b, c)
			{
				var d = this.interactionDOMElement.getBoundingClientRect();
				a.x = (b - d.left) * (this.interactionDOMElement.width / d.width) / this.resolution, a.y = (c - d.top) * (this.interactionDOMElement.height / d.height) / this.resolution
			}, d.prototype.processInteractive = function (a, b, c, d, e)
			{
				if (!b || !b.visible) return !1;
				var f = !1,
					g = e = b.interactive || e;
				if (b.hitArea && (g = !1), b.interactiveChildren)
					for (var h = b.children, i = h.length - 1; i >= 0; i--)
					{
						var j = h[i];
						if (this.processInteractive(a, j, c, d, g))
						{
							if (!j.parent) continue;
							f = !0, g = !1, j.interactive && (d = !1)
						}
					}
				return e && (d && !f && (b.hitArea ? (b.worldTransform.applyInverse(a, this._tempPoint), f = b.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : b.containsPoint && (f = b.containsPoint(a))), b.interactive && c(b, f)), f
			}, d.prototype.onMouseDown = function (a)
			{
				this.mouse.originalEvent = a, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0)
			}, d.prototype.processMouseDown = function (a, b)
			{
				var c = this.mouse.originalEvent,
					d = 2 === c.button || 3 === c.which;
				b && (a[d ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(a, d ? "rightdown" : "mousedown", this.eventData))
			}, d.prototype.onMouseUp = function (a)
			{
				this.mouse.originalEvent = a, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0)
			}, d.prototype.processMouseUp = function (a, b)
			{
				var c = this.mouse.originalEvent,
					d = 2 === c.button || 3 === c.which,
					e = d ? "_isRightDown" : "_isLeftDown";
				b ? (this.dispatchEvent(a, d ? "rightup" : "mouseup", this.eventData), a[e] && (a[e] = !1, this.dispatchEvent(a, d ? "rightclick" : "click", this.eventData))) : a[e] && (a[e] = !1, this.dispatchEvent(a, d ? "rightupoutside" : "mouseupoutside", this.eventData))
			}, d.prototype.onMouseMove = function (a)
			{
				this.mouse.originalEvent = a, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY), this.didMove = !0, this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
			}, d.prototype.processMouseMove = function (a, b)
			{
				this.processMouseOverOut(a, b), (!this.moveWhenInside || b) && this.dispatchEvent(a, "mousemove", this.eventData)
			}, d.prototype.onMouseOut = function (a)
			{
				this.mouse.originalEvent = a, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY), this.interactionDOMElement.style.cursor = "inherit", this.mapPositionToPoint(this.mouse.global, a.clientX, a.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1)
			}, d.prototype.processMouseOverOut = function (a, b)
			{
				b ? (a._over || (a._over = !0, this.dispatchEvent(a, "mouseover", this.eventData)), a.buttonMode && (this.cursor = a.defaultCursor)) : a._over && (a._over = !1, this.dispatchEvent(a, "mouseout", this.eventData))
			}, d.prototype.onTouchStart = function (a)
			{
				this.autoPreventDefault && a.preventDefault();
				for (var b = a.changedTouches, c = b.length, d = 0; c > d; d++)
				{
					var e = b[d],
						f = this.getTouchData(e);
					f.originalEvent = a, this.eventData.data = f, this.eventData.stopped = !1, this.processInteractive(f.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.returnTouchData(f)
				}
			}, d.prototype.processTouchStart = function (a, b)
			{
				b && (a._touchDown = !0, this.dispatchEvent(a, "touchstart", this.eventData))
			}, d.prototype.onTouchEnd = function (a)
			{
				this.autoPreventDefault && a.preventDefault();
				for (var b = a.changedTouches, c = b.length, d = 0; c > d; d++)
				{
					var e = b[d],
						f = this.getTouchData(e);
					f.originalEvent = a, this.eventData.data = f, this.eventData.stopped = !1, this.processInteractive(f.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.returnTouchData(f)
				}
			}, d.prototype.processTouchEnd = function (a, b)
			{
				b ? (this.dispatchEvent(a, "touchend", this.eventData), a._touchDown && (a._touchDown = !1, this.dispatchEvent(a, "tap", this.eventData))) : a._touchDown && (a._touchDown = !1, this.dispatchEvent(a, "touchendoutside", this.eventData))
			}, d.prototype.onTouchMove = function (a)
			{
				this.autoPreventDefault && a.preventDefault();
				for (var b = a.changedTouches, c = b.length, d = 0; c > d; d++)
				{
					var e = b[d],
						f = this.getTouchData(e);
					f.originalEvent = a, this.eventData.data = f, this.eventData.stopped = !1, this.processInteractive(f.global, this.renderer._lastObjectRendered, this.processTouchMove, this.moveWhenInside), this.returnTouchData(f)
				}
			}, d.prototype.processTouchMove = function (a, b)
			{
				(!this.moveWhenInside || b) && this.dispatchEvent(a, "touchmove", this.eventData)
			}, d.prototype.getTouchData = function (a)
			{
				var b = this.interactiveDataPool.pop();
				return b || (b = new f), b.identifier = a.identifier, this.mapPositionToPoint(b.global, a.clientX, a.clientY), navigator.isCocoonJS && (b.global.x = b.global.x / this.resolution, b.global.y = b.global.y / this.resolution), a.globalX = b.global.x, a.globalY = b.global.y, b
			}, d.prototype.returnTouchData = function (a)
			{
				this.interactiveDataPool.push(a)
			}, d.prototype.destroy = function ()
			{
				this.removeEvents(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
			}, e.WebGLRenderer.registerPlugin("interaction", d), e.CanvasRenderer.registerPlugin("interaction", d)
		},
		{
			"../core": 29,
			"./InteractionData": 116,
			"./interactiveTarget": 119
		}],
		118: [function (a, b, c)
		{
			b.exports = {
				InteractionData: a("./InteractionData"),
				InteractionManager: a("./InteractionManager"),
				interactiveTarget: a("./interactiveTarget")
			}
		},
		{
			"./InteractionData": 116,
			"./InteractionManager": 117,
			"./interactiveTarget": 119
		}],
		119: [function (a, b, c)
		{
			var d = {
				interactive: !1,
				buttonMode: !1,
				interactiveChildren: !0,
				defaultCursor: "pointer",
				_over: !1,
				_touchDown: !1
			};
			b.exports = d
		},
		{}],
		120: [function (a, b, c)
		{
			function d(a, b)
			{
				var c = {},
					d = a.data.getElementsByTagName("info")[0],
					e = a.data.getElementsByTagName("common")[0];
				c.font = d.getAttribute("face"), c.size = parseInt(d.getAttribute("size"), 10), c.lineHeight = parseInt(e.getAttribute("lineHeight"), 10), c.chars = {};
				for (var h = a.data.getElementsByTagName("char"), i = 0; i < h.length; i++)
				{
					var j = parseInt(h[i].getAttribute("id"), 10),
						k = new f.Rectangle(parseInt(h[i].getAttribute("x"), 10) + b.frame.x, parseInt(h[i].getAttribute("y"), 10) + b.frame.y, parseInt(h[i].getAttribute("width"), 10), parseInt(h[i].getAttribute("height"), 10));
					c.chars[j] = {
						xOffset: parseInt(h[i].getAttribute("xoffset"), 10),
						yOffset: parseInt(h[i].getAttribute("yoffset"), 10),
						xAdvance: parseInt(h[i].getAttribute("xadvance"), 10),
						kerning:
						{},
						texture: new f.Texture(b.baseTexture, k)
					}
				}
				var l = a.data.getElementsByTagName("kerning");
				for (i = 0; i < l.length; i++)
				{
					var m = parseInt(l[i].getAttribute("first"), 10),
						n = parseInt(l[i].getAttribute("second"), 10),
						o = parseInt(l[i].getAttribute("amount"), 10);
					c.chars[n] && (c.chars[n].kerning[m] = o)
				}
				a.bitmapFont = c, g.BitmapText.fonts[c.font] = c
			}
			var e = a("resource-loader")
				.Resource,
				f = a("../core"),
				g = a("../extras"),
				h = a("path");
			b.exports = function ()
			{
				return function (a, b)
				{
					if (!a.data || !a.isXml) return b();
					if (0 === a.data.getElementsByTagName("page")
						.length || 0 === a.data.getElementsByTagName("info")
						.length || null === a.data.getElementsByTagName("info")[0].getAttribute("face")) return b();
					var c = h.dirname(a.url);
					"." === c && (c = ""), this.baseUrl && c && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (c += "/"), c = c.replace(this.baseUrl, "")), c && "/" !== c.charAt(c.length - 1) && (c += "/");
					var g = c + a.data.getElementsByTagName("page")[0].getAttribute("file");
					if (f.utils.TextureCache[g]) d(a, f.utils.TextureCache[g]), b();
					else
					{
						var i = {
							crossOrigin: a.crossOrigin,
							loadType: e.LOAD_TYPE.IMAGE,
							metadata: a.metadata.imageMetadata
						};
						this.add(a.name + "_image", g, i, function (c)
						{
							d(a, c.texture), b()
						})
					}
				}
			}
		},
		{
			"../core": 29,
			"../extras": 86,
			path: 2,
			"resource-loader": 16
		}],
		121: [function (a, b, c)
		{
			b.exports = {
				Loader: a("./loader"),
				bitmapFontParser: a("./bitmapFontParser"),
				spritesheetParser: a("./spritesheetParser"),
				textureParser: a("./textureParser"),
				Resource: a("resource-loader")
					.Resource
			}
		},
		{
			"./bitmapFontParser": 120,
			"./loader": 122,
			"./spritesheetParser": 123,
			"./textureParser": 124,
			"resource-loader": 16
		}],
		122: [function (a, b, c)
		{
			function d(a, b)
			{
				e.call(this, a, b);
				for (var c = 0; c < d._pixiMiddleware.length; ++c) this.use(d._pixiMiddleware[c]())
			}
			var e = a("resource-loader"),
				f = a("./textureParser"),
				g = a("./spritesheetParser"),
				h = a("./bitmapFontParser");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d._pixiMiddleware = [e.middleware.parsing.blob, f, g, h], d.addPixiMiddleware = function (a)
			{
				d._pixiMiddleware.push(a)
			};
			var i = e.Resource;
			i.setExtensionXhrType("fnt", i.XHR_RESPONSE_TYPE.DOCUMENT)
		},
		{
			"./bitmapFontParser": 120,
			"./spritesheetParser": 123,
			"./textureParser": 124,
			"resource-loader": 16
		}],
		123: [function (a, b, c)
		{
			var d = a("resource-loader")
				.Resource,
				e = a("path"),
				f = a("../core");
			b.exports = function ()
			{
				return function (a, b)
				{
					if (!a.data || !a.isJson || !a.data.frames) return b();
					var c = {
							crossOrigin: a.crossOrigin,
							loadType: d.LOAD_TYPE.IMAGE,
							metadata: a.metadata.imageMetadata
						},
						g = e.dirname(a.url.replace(this.baseUrl, "")),
						h = f.utils.getResolutionOfUrl(a.url);
					this.add(a.name + "_image", g + "/" + a.data.meta.image, c, function (c)
					{
						a.textures = {};
						var d = a.data.frames;
						for (var e in d)
						{
							var g = d[e].frame;
							if (g)
							{
								var i = null,
									j = null;
								if (i = d[e].rotated ? new f.Rectangle(g.x, g.y, g.h, g.w) : new f.Rectangle(g.x, g.y, g.w, g.h), d[e].trimmed && (j = new f.Rectangle(d[e].spriteSourceSize.x / h, d[e].spriteSourceSize.y / h, d[e].sourceSize.w / h, d[e].sourceSize.h / h)), d[e].rotated)
								{
									var k = i.width;
									i.width = i.height, i.height = k
								}
								i.x /= h, i.y /= h, i.width /= h, i.height /= h, a.textures[e] = new f.Texture(c.texture.baseTexture, i, i.clone(), j, d[e].rotated ? 2 : 0), f.utils.TextureCache[e] = a.textures[e]
							}
						}
						b()
					})
				}
			}
		},
		{
			"../core": 29,
			path: 2,
			"resource-loader": 16
		}],
		124: [function (a, b, c)
		{
			var d = a("../core");
			b.exports = function ()
			{
				return function (a, b)
				{
					if (a.data && a.isImage)
					{
						var c = new d.BaseTexture(a.data, null, d.utils.getResolutionOfUrl(a.url));
						c.imageUrl = a.url, a.texture = new d.Texture(c), d.utils.BaseTextureCache[a.url] = c, d.utils.TextureCache[a.url] = a.texture
					}
					b()
				}
			}
		},
		{
			"../core": 29
		}],
		125: [function (a, b, c)
		{
			function d(a, b, c, f, g)
			{
				e.Container.call(this), this._texture = null, this.uvs = c || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertices = b || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = f || new Uint16Array([0, 1, 3, 2]), this.dirty = !0, this.blendMode = e.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = g || d.DRAW_MODES.TRIANGLE_MESH, this.texture = a, this.shader = null
			}
			var e = a("../core"),
				f = new e.Point,
				g = new e.Polygon;
			d.prototype = Object.create(e.Container.prototype), d.prototype.constructor = d, b.exports = d, Object.defineProperties(d.prototype,
			{
				texture:
				{
					get: function ()
					{
						return this._texture
					},
					set: function (a)
					{
						this._texture !== a && (this._texture = a, a && (a.baseTexture.hasLoaded ? this._onTextureUpdate() : a.once("update", this._onTextureUpdate, this)))
					}
				}
			}), d.prototype._renderWebGL = function (a)
			{
				a.setObjectRenderer(a.plugins.mesh), a.plugins.mesh.render(this)
			}, d.prototype._renderCanvas = function (a)
			{
				var b = a.context,
					c = this.worldTransform;
				a.roundPixels ? b.setTransform(c.a, c.b, c.c, c.d, 0 | c.tx, 0 | c.ty) : b.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), this.drawMode === d.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(b) : this._renderCanvasTriangles(b)
			}, d.prototype._renderCanvasTriangleMesh = function (a)
			{
				for (var b = this.vertices, c = this.uvs, d = b.length / 2, e = 0; d - 2 > e; e++)
				{
					var f = 2 * e;
					this._renderCanvasDrawTriangle(a, b, c, f, f + 2, f + 4)
				}
			}, d.prototype._renderCanvasTriangles = function (a)
			{
				for (var b = this.vertices, c = this.uvs, d = this.indices, e = d.length, f = 0; e > f; f += 3)
				{
					var g = 2 * d[f],
						h = 2 * d[f + 1],
						i = 2 * d[f + 2];
					this._renderCanvasDrawTriangle(a, b, c, g, h, i)
				}
			}, d.prototype._renderCanvasDrawTriangle = function (a, b, c, d, e, f)
			{
				var g = this._texture.baseTexture.source,
					h = this._texture.baseTexture.width,
					i = this._texture.baseTexture.height,
					j = b[d],
					k = b[e],
					l = b[f],
					m = b[d + 1],
					n = b[e + 1],
					o = b[f + 1],
					p = c[d] * h,
					q = c[e] * h,
					r = c[f] * h,
					s = c[d + 1] * i,
					t = c[e + 1] * i,
					u = c[f + 1] * i;
				if (this.canvasPadding > 0)
				{
					var v = this.canvasPadding / this.worldTransform.a,
						w = this.canvasPadding / this.worldTransform.d,
						x = (j + k + l) / 3,
						y = (m + n + o) / 3,
						z = j - x,
						A = m - y,
						B = Math.sqrt(z * z + A * A);
					j = x + z / B * (B + v), m = y + A / B * (B + w), z = k - x, A = n - y, B = Math.sqrt(z * z + A * A), k = x + z / B * (B + v), n = y + A / B * (B + w), z = l - x, A = o - y, B = Math.sqrt(z * z + A * A), l = x + z / B * (B + v), o = y + A / B * (B + w)
				}
				a.save(), a.beginPath(), a.moveTo(j, m), a.lineTo(k, n), a.lineTo(l, o), a.closePath(), a.clip();
				var C = p * t + s * r + q * u - t * r - s * q - p * u,
					D = j * t + s * l + k * u - t * l - s * k - j * u,
					E = p * k + j * r + q * l - k * r - j * q - p * l,
					F = p * t * l + s * k * r + j * q * u - j * t * r - s * q * l - p * k * u,
					G = m * t + s * o + n * u - t * o - s * n - m * u,
					H = p * n + m * r + q * o - n * r - m * q - p * o,
					I = p * t * o + s * n * r + m * q * u - m * t * r - s * q * o - p * n * u;
				a.transform(D / C, G / C, E / C, H / C, F / C, I / C), a.drawImage(g, 0, 0), a.restore()
			}, d.prototype.renderMeshFlat = function (a)
			{
				var b = this.context,
					c = a.vertices,
					d = c.length / 2;
				b.beginPath();
				for (var e = 1; d - 2 > e; e++)
				{
					var f = 2 * e,
						g = c[f],
						h = c[f + 2],
						i = c[f + 4],
						j = c[f + 1],
						k = c[f + 3],
						l = c[f + 5];
					b.moveTo(g, j), b.lineTo(h, k), b.lineTo(i, l)
				}
				b.fillStyle = "#FF0000", b.fill(), b.closePath()
			}, d.prototype._onTextureUpdate = function ()
			{
				this.updateFrame = !0
			}, d.prototype.getBounds = function (a)
			{
				if (!this._currentBounds)
				{
					for (var b = a || this.worldTransform, c = b.a, d = b.b, f = b.c, g = b.d, h = b.tx, i = b.ty, j = -(1 / 0), k = -(1 / 0), l = 1 / 0, m = 1 / 0, n = this.vertices, o = 0, p = n.length; p > o; o += 2)
					{
						var q = n[o],
							r = n[o + 1],
							s = c * q + f * r + h,
							t = g * r + d * q + i;
						l = l > s ? s : l, m = m > t ? t : m, j = s > j ? s : j, k = t > k ? t : k
					}
					if (l === -(1 / 0) || k === 1 / 0) return e.Rectangle.EMPTY;
					var u = this._bounds;
					u.x = l, u.width = j - l, u.y = m, u.height = k - m, this._currentBounds = u
				}
				return this._currentBounds
			}, d.prototype.containsPoint = function (a)
			{
				if (!this.getBounds()
					.contains(a.x, a.y)) return !1;
				this.worldTransform.applyInverse(a, f);
				var b, c, e = this.vertices,
					h = g.points;
				if (this.drawMode === d.DRAW_MODES.TRIANGLES)
				{
					var i = this.indices;
					for (c = this.indices.length, b = 0; c > b; b += 3)
					{
						var j = 2 * i[b],
							k = 2 * i[b + 1],
							l = 2 * i[b + 2];
						if (h[0] = e[j], h[1] = e[j + 1], h[2] = e[k], h[3] = e[k + 1], h[4] = e[l], h[5] = e[l + 1], g.contains(f.x, f.y)) return !0
					}
				}
				else
					for (c = e.length, b = 0; c > b; b += 6)
						if (h[0] = e[b], h[1] = e[b + 1], h[2] = e[b + 2], h[3] = e[b + 3], h[4] = e[b + 4], h[5] = e[b + 5], g.contains(f.x, f.y)) return !0; return !1
			}, d.DRAW_MODES = {
				TRIANGLE_MESH: 0,
				TRIANGLES: 1
			}
		},
		{
			"../core": 29
		}],
		126: [function (a, b, c)
		{
			function d(a, b, c)
			{
				e.call(this, a), this._ready = !0, this.segmentsX = b || 10, this.segmentsY = c || 10, this.drawMode = e.DRAW_MODES.TRIANGLES, this.refresh()
			}
			var e = a("./Mesh");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.refresh = function ()
			{
				var a = this.segmentsX * this.segmentsY,
					b = [],
					c = [],
					d = [],
					e = [],
					f = this.texture,
					g = this.segmentsX - 1,
					h = this.segmentsY - 1,
					i = 0,
					j = f.width / g,
					k = f.height / h;
				for (i = 0; a > i; i++)
				{
					var l = i % this.segmentsX,
						m = i / this.segmentsX | 0;
					b.push(l * j, m * k), d.push(f._uvs.x0 + (f._uvs.x1 - f._uvs.x0) * (l / (this.segmentsX - 1)), f._uvs.y0 + (f._uvs.y3 - f._uvs.y0) * (m / (this.segmentsY - 1)))
				}
				var n = g * h;
				for (i = 0; n > i; i++)
				{
					var o = i % g,
						p = i / g | 0,
						q = p * this.segmentsX + o,
						r = p * this.segmentsX + o + 1,
						s = (p + 1) * this.segmentsX + o,
						t = (p + 1) * this.segmentsX + o + 1;
					e.push(q, r, s), e.push(r, t, s)
				}
				this.vertices = new Float32Array(b), this.uvs = new Float32Array(d), this.colors = new Float32Array(c), this.indices = new Uint16Array(e)
			}, d.prototype._onTextureUpdate = function ()
			{
				e.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
			}
		},
		{
			"./Mesh": 125
		}],
		127: [function (a, b, c)
		{
			function d(a, b)
			{
				e.call(this, a), this.points = b, this.vertices = new Float32Array(4 * b.length), this.uvs = new Float32Array(4 * b.length), this.colors = new Float32Array(2 * b.length), this.indices = new Uint16Array(2 * b.length), this._ready = !0, this.refresh()
			}
			var e = a("./Mesh"),
				f = a("../core");
			d.prototype = Object.create(e.prototype), d.prototype.constructor = d, b.exports = d, d.prototype.refresh = function ()
			{
				var a = this.points;
				if (!(a.length < 1) && this._texture._uvs)
				{
					var b = this.uvs,
						c = this.indices,
						d = this.colors,
						e = this._texture._uvs,
						g = new f.Point(e.x0, e.y0),
						h = new f.Point(e.x2 - e.x0, e.y2 - e.y0);
					b[0] = 0 + g.x, b[1] = 0 + g.y, b[2] = 0 + g.x, b[3] = 1 * h.y + g.y, d[0] = 1, d[1] = 1, c[0] = 0, c[1] = 1;
					for (var i, j, k, l = a.length, m = 1; l > m; m++) i = a[m], j = 4 * m, k = m / (l - 1), b[j] = k * h.x + g.x, b[j + 1] = 0 + g.y, b[j + 2] = k * h.x + g.x, b[j + 3] = 1 * h.y + g.y, j = 2 * m, d[j] = 1, d[j + 1] = 1, j = 2 * m, c[j] = j, c[j + 1] = j + 1;
					this.dirty = !0
				}
			}, d.prototype._onTextureUpdate = function ()
			{
				e.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
			}, d.prototype.updateTransform = function ()
			{
				var a = this.points;
				if (!(a.length < 1))
				{
					for (var b, c, d, e, f, g, h = a[0], i = 0, j = 0, k = this.vertices, l = a.length, m = 0; l > m; m++) c = a[m], d = 4 * m, b = m < a.length - 1 ? a[m + 1] : c, j = -(b.x - h.x), i = b.y - h.y, e = 10 * (1 - m / (l - 1)), e > 1 && (e = 1), f = Math.sqrt(i * i + j * j), g = this._texture.height / 2, i /= f, j /= f, i *= g, j *= g, k[d] = c.x + i, k[d + 1] = c.y + j, k[d + 2] = c.x - i, k[d + 3] = c.y - j, h = c;
					this.containerUpdateTransform()
				}
			}
		},
		{
			"../core": 29,
			"./Mesh": 125
		}],
		128: [function (a, b, c)
		{
			b.exports = {
				Mesh: a("./Mesh"),
				Plane: a("./Plane"),
				Rope: a("./Rope"),
				MeshRenderer: a("./webgl/MeshRenderer"),
				MeshShader: a("./webgl/MeshShader")
			}
		},
		{
			"./Mesh": 125,
			"./Plane": 126,
			"./Rope": 127,
			"./webgl/MeshRenderer": 129,
			"./webgl/MeshShader": 130
		}],
		129: [function (a, b, c)
		{
			function d(a)
			{
				e.ObjectRenderer.call(this, a), this.indices = new Uint16Array(15e3);
				for (var b = 0, c = 0; 15e3 > b; b += 6, c += 4) this.indices[b + 0] = c + 0, this.indices[b + 1] = c + 1, this.indices[b + 2] = c + 2, this.indices[b + 3] = c + 0, this.indices[b + 4] = c + 2, this.indices[b + 5] = c + 3;
				this.currentShader = null
			}
			var e = a("../../core"),
				f = a("../Mesh");
			d.prototype = Object.create(e.ObjectRenderer.prototype), d.prototype.constructor = d, b.exports = d, e.WebGLRenderer.registerPlugin("mesh", d), d.prototype.onContextChange = function () {}, d.prototype.render = function (a)
			{
				a._vertexBuffer || this._initWebGL(a);
				var b = this.renderer,
					c = b.gl,
					d = a._texture.baseTexture,
					e = a.shader,
					g = a.drawMode === f.DRAW_MODES.TRIANGLE_MESH ? c.TRIANGLE_STRIP : c.TRIANGLES;
				b.blendModeManager.setBlendMode(a.blendMode), e = e ? e.shaders[c.id] || e.getShader(b) : b.shaderManager.plugins.meshShader, this.renderer.shaderManager.setShader(e), e.uniforms.translationMatrix.value = a.worldTransform.toArray(!0), e.uniforms.projectionMatrix.value = b.currentRenderTarget.projectionMatrix.toArray(!0), e.uniforms.alpha.value = a.worldAlpha, e.syncUniforms(), a.dirty ? (a.dirty = !1, c.bindBuffer(c.ARRAY_BUFFER, a._vertexBuffer), c.bufferData(c.ARRAY_BUFFER, a.vertices, c.STATIC_DRAW), c.vertexAttribPointer(e.attributes.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, a._uvBuffer), c.bufferData(c.ARRAY_BUFFER, a.uvs, c.STATIC_DRAW), c.vertexAttribPointer(e.attributes.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), d._glTextures[c.id] ? c.bindTexture(c.TEXTURE_2D, d._glTextures[c.id]) : this.renderer.updateTexture(d), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, a._indexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER, a.indices, c.STATIC_DRAW)) : (c.bindBuffer(c.ARRAY_BUFFER, a._vertexBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, a.vertices), c.vertexAttribPointer(e.attributes.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, a._uvBuffer), c.vertexAttribPointer(e.attributes.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), d._glTextures[c.id] ? c.bindTexture(c.TEXTURE_2D, d._glTextures[c.id]) : this.renderer.updateTexture(d), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, a._indexBuffer), c.bufferSubData(c.ELEMENT_ARRAY_BUFFER, 0, a.indices)), c.drawElements(g, a.indices.length, c.UNSIGNED_SHORT, 0)
			}, d.prototype._initWebGL = function (a)
			{
				var b = this.renderer.gl;
				a._vertexBuffer = b.createBuffer(), a._indexBuffer = b.createBuffer(), a._uvBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, a._vertexBuffer), b.bufferData(b.ARRAY_BUFFER, a.vertices, b.DYNAMIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, a._uvBuffer), b.bufferData(b.ARRAY_BUFFER, a.uvs, b.STATIC_DRAW), a.colors && (a._colorBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, a._colorBuffer), b.bufferData(b.ARRAY_BUFFER, a.colors, b.STATIC_DRAW)), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, a._indexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, a.indices, b.STATIC_DRAW)
			}, d.prototype.flush = function () {}, d.prototype.start = function ()
			{
				this.currentShader = null
			}, d.prototype.destroy = function ()
			{
				e.ObjectRenderer.prototype.destroy.call(this)
			}
		},
		{
			"../../core": 29,
			"../Mesh": 125
		}],
		130: [function (a, b, c)
		{
			function d(a)
			{
				e.Shader.call(this, a, ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;", "}"].join("\n"),
				{
					alpha:
					{
						type: "1f",
						value: 0
					},
					translationMatrix:
					{
						type: "mat3",
						value: new Float32Array(9)
					},
					projectionMatrix:
					{
						type: "mat3",
						value: new Float32Array(9)
					}
				},
				{
					aVertexPosition: 0,
					aTextureCoord: 0
				})
			}
			var e = a("../../core");
			d.prototype = Object.create(e.Shader.prototype), d.prototype.constructor = d, b.exports = d, e.ShaderManager.registerPlugin("meshShader", d)
		},
		{
			"../../core": 29
		}],
		131: [function (a, b, c)
		{
			Math.sign || (Math.sign = function (a)
			{
				return a = +a, 0 === a || isNaN(a) ? a : a > 0 ? 1 : -1
			})
		},
		{}],
		132: [function (a, b, c)
		{
			Object.assign || (Object.assign = a("object-assign"))
		},
		{
			"object-assign": 11
		}],
		133: [function (a, b, c)
		{
			a("./Object.assign"), a("./requestAnimationFrame"), a("./Math.sign")
		},
		{
			"./Math.sign": 131,
			"./Object.assign": 132,
			"./requestAnimationFrame": 134
		}],
		134: [function (a, b, c)
		{
			(function (a)
			{
				if (Date.now && Date.prototype.getTime || (Date.now = function ()
					{
						return (new Date)
							.getTime()
					}), !a.performance || !a.performance.now)
				{
					var b = Date.now();
					a.performance || (a.performance = {}), a.performance.now = function ()
					{
						return Date.now() - b
					}
				}
				for (var c = Date.now(), d = ["ms", "moz", "webkit", "o"], e = 0; e < d.length && !a.requestAnimationFrame; ++e) a.requestAnimationFrame = a[d[e] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
				a.requestAnimationFrame || (a.requestAnimationFrame = function (a)
				{
					if ("function" != typeof a) throw new TypeError(a + "is not a function");
					var b = Date.now(),
						d = 16 + c - b;
					return 0 > d && (d = 0), c = b, setTimeout(function ()
					{
						c = Date.now(), a(performance.now())
					}, d)
				}), a.cancelAnimationFrame || (a.cancelAnimationFrame = function (a)
				{
					clearTimeout(a)
				})
			})
			.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window :
			{})
		},
		{}]
	},
	{}, [115])(115)
});
var Stats = function ()
{
	function a(a, b, c)
	{
		return a = document.createElement(a), a.id = b, a.style.cssText = c, a
	}

	function b(b, c, d)
	{
		var e = a("div", b, "padding:0 0 3px 3px;text-align:left;background:" + d),
			f = a("div", b + "Text", "font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:" + c);
		for (f.innerHTML = b.toUpperCase(), e.appendChild(f), b = a("div", b + "Graph", "width:74px;height:30px;background:" + c), e.appendChild(b), c = 0; 74 > c; c++) b.appendChild(a("span", "", "width:1px;height:30px;float:left;opacity:0.9;background:" + d));
		return e
	}

	function c(a)
	{
		for (var b = j.children, c = 0; c < b.length; c++) b[c].style.display = c === a ? "block" : "none";
		i = a
	}

	function d(a, b)
	{
		a.appendChild(a.firstChild)
			.style.height = Math.min(30, 30 - 30 * b) + "px"
	}
	var e = self.performance && self.performance.now ? self.performance.now.bind(performance) : Date.now,
		f = e(),
		g = f,
		h = 0,
		i = 0,
		j = a("div", "stats", "width:80px;opacity:0.9;cursor:pointer");
	j.addEventListener("mousedown", function (a)
	{
		a.preventDefault(), c(++i % j.children.length)
	}, !1);
	var k = 0,
		l = 1 / 0,
		m = 0,
		n = b("fps", "#0ff", "#002"),
		o = n.children[0],
		p = n.children[1];
	j.appendChild(n);
	var q = 0,
		r = 1 / 0,
		s = 0,
		n = b("ms", "#0f0", "#020"),
		t = n.children[0],
		u = n.children[1];
	if (j.appendChild(n), self.performance && self.performance.memory)
	{
		var v = 0,
			w = 1 / 0,
			x = 0,
			n = b("mb", "#f08", "#201"),
			y = n.children[0],
			z = n.children[1];
		j.appendChild(n)
	}
	return c(i),
	{
		REVISION: 14,
		domElement: j,
		setMode: c,
		begin: function ()
		{
			f = e()
		},
		end: function ()
		{
			var a = e();
			if (q = a - f, r = Math.min(r, q), s = Math.max(s, q), t.textContent = (0 | q) + " MS (" + (0 | r) + "-" + (0 | s) + ")", d(u, q / 200), h++, a > g + 1e3 && (k = Math.round(1e3 * h / (a - g)), l = Math.min(l, k), m = Math.max(m, k), o.textContent = k + " FPS (" + l + "-" + m + ")",
					d(p, k / 100), g = a, h = 0, void 0 !== v))
			{
				var b = performance.memory.usedJSHeapSize,
					c = performance.memory.jsHeapSizeLimit;
				v = Math.round(9.54e-7 * b), w = Math.min(w, v), x = Math.max(x, v), y.textContent = v + " MB (" + w + "-" + x + ")", d(z, b / c)
			}
			return a
		},
		update: function ()
		{
			f = this.end()
		}
	}
};
"object" == typeof module && (module.exports = Stats);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = []))
.push(function ()
	{
		"use strict";
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c)
			{
				var d = function (a)
					{
						var b, c = [],
							d = a.length;
						for (b = 0; b !== d; c.push(a[b++]));
						return c
					},
					e = function (a, b, c)
					{
						var d, e, f = a.cycle;
						for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
						delete a.cycle
					},
					f = function (a, b, d)
					{
						c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = f.prototype.render
					},
					g = 1e-10,
					h = c._internals,
					i = h.isSelector,
					j = h.isArray,
					k = f.prototype = c.to(
					{}, .1,
					{}),
					l = [];
				f.version = "1.18.2", k.constructor = f, k.kill()
					._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function ()
					{
						return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
					}, k.updateTo = function (a, b)
					{
						var d, e = this.ratio,
							f = this.vars.immediateRender || a.immediateRender;
						b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
						for (d in a) this.vars[d] = a[d];
						if (this._initted || f)
							if (b) this._initted = !1, f && this.render(0, !0, !0);
							else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998)
						{
							var g = this._totalTime;
							this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
						}
						else if (this._initted = !1, this._init(), this._time > 0 || f)
							for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
						return this
					}, k.render = function (a, b, c)
					{
						this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
						var d, e, f, i, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
							o = this._time,
							p = this._totalTime,
							q = this._cycle,
							r = this._duration,
							s = this._rawPrevTime;
						if (a >= n - 1e-7 ? (this._totalTime = n, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0, s > g && (e = "onReverseComplete")), this._rawPrevTime = m = !b || a || s === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === r && s > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0), this._rawPrevTime = m = !b || a || s === a ? a : g)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = r + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time), this._time > r ? this._time = r : this._time < 0 && (this._time = 0)), this._easeType ? (j = this._time / r, k = this._easeType, l = this._easePower, (1 === k || 3 === k && j >= .5) && (j = 1 - j), 3 === k && (j *= 2), 1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j), 1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / r < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / r)), o === this._time && !c && q === this._cycle) return void(p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
						if (!this._initted)
						{
							if (this._init(), !this._initted || this._gc) return;
							if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = o, this._totalTime = p, this._rawPrevTime = s, this._cycle = q, h.lazyTweens.push(this), void(this._lazy = [a, b]);
							this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
						}
						for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0), 0 === p && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
						this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== p || d) && this._callback("onUpdate")), this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0))
					}, f.to = function (a, b, c)
					{
						return new f(a, b, c)
					}, f.from = function (a, b, c)
					{
						return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
					}, f.fromTo = function (a, b, c, d)
					{
						return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
					}, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n)
					{
						h = h || 0;
						var o, p, q, r, s = 0,
							t = [],
							u = function ()
							{
								g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
							},
							v = g.cycle,
							w = g.startAt && g.startAt.cycle;
						for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++)
						{
							p = {};
							for (r in g) p[r] = g[r];
							if (v && e(p, a, q), w)
							{
								w = p.startAt = {};
								for (r in g.startAt) w[r] = g.startAt[r];
								e(p.startAt, a, q)
							}
							p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
						}
						return t
					}, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h)
					{
						return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
					}, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i)
					{
						return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
					}, f.delayedCall = function (a, b, c, d, e)
					{
						return new f(b, 0,
						{
							delay: a,
							onComplete: b,
							onCompleteParams: c,
							callbackScope: d,
							onReverseComplete: b,
							onReverseCompleteParams: c,
							immediateRender: !1,
							useFrames: e,
							overwrite: 0
						})
					}, f.set = function (a, b)
					{
						return new f(a, 0, b)
					}, f.isTweening = function (a)
					{
						return c.getTweensOf(a, !0)
							.length > 0
					};
				var m = function (a, b)
					{
						for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
						return d
					},
					n = f.getAllTweens = function (b)
					{
						return m(a._rootTimeline, b)
							.concat(m(a._rootFramesTimeline, b))
					};
				f.killAll = function (a, c, d, e)
				{
					null == c && (c = !0), null == d && (d = !0);
					var f, g, h, i = n(0 != e),
						j = i.length,
						k = c && d && e;
					for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
				}, f.killChildTweensOf = function (a, b)
				{
					if (null != a)
					{
						var e, g, k, l, m, n = h.tweenLookup;
						if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
							for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
						else
						{
							e = [];
							for (k in n)
								for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
							for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
						}
					}
				};
				var o = function (a, c, d, e)
				{
					c = c !== !1, d = d !== !1, e = e !== !1;
					for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
				};
				return f.pauseAll = function (a, b, c)
				{
					o(!0, a, b, c)
				}, f.resumeAll = function (a, b, c)
				{
					o(!1, a, b, c)
				}, f.globalTimeScale = function (b)
				{
					var d = a._rootTimeline,
						e = c.ticker.time;
					return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
				}, k.progress = function (a)
				{
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
				}, k.totalProgress = function (a)
				{
					return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
				}, k.time = function (a, b)
				{
					return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
				}, k.duration = function (b)
				{
					return arguments.length ? a.prototype.duration.call(this, b) : this._duration
				}, k.totalDuration = function (a)
				{
					return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, k.repeat = function (a)
				{
					return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
				}, k.repeatDelay = function (a)
				{
					return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
				}, k.yoyo = function (a)
				{
					return arguments.length ? (this._yoyo = a, this) : this._yoyo
				}, f
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c)
			{
				var d = function (a)
					{
						b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var c, d, e = this.vars;
						for (d in e) c = e[d], i(c) && -1 !== c.join("")
							.indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
						i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
					},
					e = 1e-10,
					f = c._internals,
					g = d._internals = {},
					h = f.isSelector,
					i = f.isArray,
					j = f.lazyTweens,
					k = f.lazyRender,
					l = _gsScope._gsDefine.globals,
					m = function (a)
					{
						var b, c = {};
						for (b in a) c[b] = a[b];
						return c
					},
					n = function (a, b, c)
					{
						var d, e, f = a.cycle;
						for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
						delete a.cycle
					},
					o = g.pauseCallback = function () {},
					p = function (a)
					{
						var b, c = [],
							d = a.length;
						for (b = 0; b !== d; c.push(a[b++]));
						return c
					},
					q = d.prototype = new b;
				return d.version = "1.18.2", q.constructor = d, q.kill()
					._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e)
					{
						var f = d.repeat && l.TweenMax || c;
						return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
					}, q.from = function (a, b, d, e)
					{
						return this.add((d.repeat && l.TweenMax || c)
							.from(a, b, d), e)
					}, q.fromTo = function (a, b, d, e, f)
					{
						var g = e.repeat && l.TweenMax || c;
						return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
					}, q.staggerTo = function (a, b, e, f, g, i, j, k)
					{
						var l, o, q = new d(
							{
								onComplete: i,
								onCompleteParams: j,
								callbackScope: k,
								smoothChildTiming: this.smoothChildTiming
							}),
							r = e.cycle;
						for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && n(l, a, o), q.to(a[o], b, l, o * f);
						return this.add(q, g)
					}, q.staggerFrom = function (a, b, c, d, e, f, g, h)
					{
						return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
					}, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i)
					{
						return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
					}, q.call = function (a, b, d, e)
					{
						return this.add(c.delayedCall(0, a, b, d), e)
					}, q.set = function (a, b, d)
					{
						return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
					}, d.exportRoot = function (a, b)
					{
						a = a ||
						{}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
						var e, f, g = new d(a),
							h = g._timeline;
						for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
						return h.add(g, 0), g
					}, q.add = function (e, f, g, h)
					{
						var j, k, l, m, n, o;
						if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))
						{
							if (e instanceof Array || e && e.push && i(e))
							{
								for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d(
								{
									tweens: m
								})), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
								return this._uncache(!0)
							}
							if ("string" == typeof e) return this.addLabel(e, f);
							if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
							e = c.delayedCall(0, e)
						}
						if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
							for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
						return this
					}, q.remove = function (b)
					{
						if (b instanceof a)
						{
							this._remove(b, !1);
							var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
							return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
						}
						if (b instanceof Array || b && b.push && i(b))
						{
							for (var d = b.length; --d > -1;) this.remove(b[d]);
							return this
						}
						return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
					}, q._remove = function (a, c)
					{
						b.prototype._remove.call(this, a, c);
						var d = this._last;
						return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
					}, q.append = function (a, b)
					{
						return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
					}, q.insert = q.insertMultiple = function (a, b, c, d)
					{
						return this.add(a, b || 0, c, d)
					}, q.appendMultiple = function (a, b, c, d)
					{
						return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
					}, q.addLabel = function (a, b)
					{
						return this._labels[a] = this._parseTimeOrLabel(b), this
					}, q.addPause = function (a, b, d, e)
					{
						var f = c.delayedCall(0, o, d, e || this);
						return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
					}, q.removeLabel = function (a)
					{
						return delete this._labels[a], this
					}, q.getLabelTime = function (a)
					{
						return null != this._labels[a] ? this._labels[a] : -1
					}, q._parseTimeOrLabel = function (b, c, d, e)
					{
						var f;
						if (e instanceof a && e.timeline === this) this.remove(e);
						else if (e && (e instanceof Array || e.push && i(e)))
							for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
						if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
						if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
						else
						{
							if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
							c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
						}
						return Number(b) + c
					}, q.seek = function (a, b)
					{
						return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
					}, q.stop = function ()
					{
						return this.paused(!0)
					}, q.gotoAndPlay = function (a, b)
					{
						return this.play(a, b)
					}, q.gotoAndStop = function (a, b)
					{
						return this.pause(a, b)
					}, q.render = function (a, b, c)
					{
						this._gc && this._enabled(!0, !1);
						var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
							o = this._time,
							p = this._startTime,
							q = this._timeScale,
							r = this._paused;
						if (a >= n - 1e-7) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = n + 1e-4;
						else if (1e-7 > a)
							if (this._totalTime = this._time = 0, (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
							else
							{
								if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
									for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
								a = 0, this._initted || (i = !0)
							}
						else
						{
							if (this._hasPause && !this._forcingPlayhead && !b)
							{
								if (a >= o)
									for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
								else
									for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
								l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
							}
							this._totalTime = this._time = this._rawPrevTime = a
						}
						if (this._time !== o && this._first || c || i || l)
						{
							if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")), m = this._time, m >= o)
								for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
							else
								for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));)
								{
									if (d._active || d._startTime <= o && !d._paused && !d._gc)
									{
										if (l === d)
										{
											for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
											l = null, this.pause()
										}
										d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
									}
									d = g
								}
							this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
						}
					}, q._hasPausedChild = function ()
					{
						for (var a = this._first; a;)
						{
							if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
							a = a._next
						}
						return !1
					}, q.getChildren = function (a, b, d, e)
					{
						e = e || -9999999999;
						for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
						return f
					}, q.getTweensOf = function (a, b)
					{
						var d, e, f = this._gc,
							g = [],
							h = 0;
						for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
						return f && this._enabled(!1, !0), g
					}, q.recent = function ()
					{
						return this._recent
					}, q._contains = function (a)
					{
						for (var b = a.timeline; b;)
						{
							if (b === this) return !0;
							b = b.timeline
						}
						return !1
					}, q.shiftChildren = function (a, b, c)
					{
						c = c || 0;
						for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
						if (b)
							for (d in f) f[d] >= c && (f[d] += a);
						return this._uncache(!0)
					}, q._kill = function (a, b)
					{
						if (!a && !b) return this._enabled(!1, !1);
						for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
						return e
					}, q.clear = function (a)
					{
						var b = this.getChildren(!1, !0, !0),
							c = b.length;
						for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
						return a !== !1 && (this._labels = {}), this._uncache(!0)
					}, q.invalidate = function ()
					{
						for (var b = this._first; b;) b.invalidate(), b = b._next;
						return a.prototype.invalidate.call(this)
					}, q._enabled = function (a, c)
					{
						if (a === this._gc)
							for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
						return b.prototype._enabled.call(this, a, c)
					}, q.totalTime = function (b, c, d)
					{
						this._forcingPlayhead = !0;
						var e = a.prototype.totalTime.apply(this, arguments);
						return this._forcingPlayhead = !1, e
					}, q.duration = function (a)
					{
						return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
					}, q.totalDuration = function (a)
					{
						if (!arguments.length)
						{
							if (this._dirty)
							{
								for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
								this._duration = this._totalDuration = d, this._dirty = !1
							}
							return this._totalDuration
						}
						return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
					}, q.paused = function (b)
					{
						if (!b)
							for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
						return a.prototype.paused.apply(this, arguments)
					}, q.usesFrames = function ()
					{
						for (var b = this._timeline; b._timeline;) b = b._timeline;
						return b === a._rootFramesTimeline
					}, q.rawTime = function ()
					{
						return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
					}, d
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c)
			{
				var d = function (b)
					{
						a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
					},
					e = 1e-10,
					f = b._internals,
					g = f.lazyTweens,
					h = f.lazyRender,
					i = new c(null, null, 1, 0),
					j = d.prototype = new a;
				return j.constructor = d, j.kill()
					._gc = !1, d.version = "1.18.2", j.invalidate = function ()
					{
						return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
					}, j.addCallback = function (a, c, d, e)
					{
						return this.add(b.delayedCall(0, a, d, e), c)
					}, j.removeCallback = function (a, b)
					{
						if (a)
							if (null == b) this._kill(null, a);
							else
								for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
						return this
					}, j.removePause = function (b)
					{
						return this.removeCallback(a._internals.pauseCallback, b)
					}, j.tweenTo = function (a, c)
					{
						c = c ||
						{};
						var d, e, f, g = {
							ease: i,
							useFrames: this.usesFrames(),
							immediateRender: !1
						};
						for (e in c) g[e] = c[e];
						return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new b(this, d, g), g.onStart = function ()
						{
							f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && f._callback("onStart")
						}, f
					}, j.tweenFromTo = function (a, b, c)
					{
						c = c ||
						{}, a = this._parseTimeOrLabel(a), c.startAt = {
							onComplete: this.seek,
							onCompleteParams: [a],
							callbackScope: this
						}, c.immediateRender = c.immediateRender !== !1;
						var d = this.tweenTo(b, c);
						return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
					}, j.render = function (a, b, c)
					{
						this._gc && this._enabled(!0, !1);
						var d, f, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
							p = this._duration,
							q = this._time,
							r = this._totalTime,
							s = this._startTime,
							t = this._timeScale,
							u = this._rawPrevTime,
							v = this._paused,
							w = this._cycle;
						if (a >= o - 1e-7) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p, a = p + 1e-4);
						else if (1e-7 > a)
							if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
							else
							{
								if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
									for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
								a = 0, this._initted || (k = !0)
							}
						else if (0 === p && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b)
						{
							if (a = this._time, a >= q)
								for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
							else
								for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
							m && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
						}
						if (this._cycle !== w && !this._locked)
						{
							var x = this._yoyo && 0 !== (1 & w),
								y = x === (this._yoyo && 0 !== (1 & this._cycle)),
								z = this._totalTime,
								A = this._cycle,
								B = this._rawPrevTime,
								C = this._time;
							if (this._totalTime = w * p, this._cycle < w ? x = !x : this._totalTime += p, this._time = q, this._rawPrevTime = 0 === p ? u - 1e-4 : u, this._cycle = w, this._locked = !0, q = x ? 0 : p, this.render(q, b, 0 === p), b || this._gc || this.vars.onRepeat && this._callback("onRepeat"), q !== this._time) return;
							if (y && (q = x ? p + 1e-4 : -1e-4, this.render(q, !0, !1)), this._locked = !1, this._paused && !v) return;
							this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
						}
						if (!(this._time !== q && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
						if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && 0 !== this._totalTime && (b || this._callback("onStart")), n = this._time, n >= q)
							for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
						else
							for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));)
							{
								if (d._active || d._startTime <= q && !d._paused && !d._gc)
								{
									if (m === d)
									{
										for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
										m = null, this.pause()
									}
									d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
								}
								d = i
							}
						this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
					}, j.getActive = function (a, b, c)
					{
						null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
						var d, e, f = [],
							g = this.getChildren(a, b, c),
							h = 0,
							i = g.length;
						for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
						return f
					}, j.getLabelAfter = function (a)
					{
						a || 0 !== a && (a = this._time);
						var b, c = this.getLabelsArray(),
							d = c.length;
						for (b = 0; d > b; b++)
							if (c[b].time > a) return c[b].name;
						return null
					}, j.getLabelBefore = function (a)
					{
						null == a && (a = this._time);
						for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
							if (b[c].time < a) return b[c].name;
						return null
					}, j.getLabelsArray = function ()
					{
						var a, b = [],
							c = 0;
						for (a in this._labels) b[c++] = {
							time: this._labels[a],
							name: a
						};
						return b.sort(function (a, b)
						{
							return a.time - b.time
						}), b
					}, j.progress = function (a, b)
					{
						return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
					}, j.totalProgress = function (a, b)
					{
						return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
					}, j.totalDuration = function (b)
					{
						return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
					}, j.time = function (a, b)
					{
						return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
					}, j.repeat = function (a)
					{
						return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
					}, j.repeatDelay = function (a)
					{
						return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
					}, j.yoyo = function (a)
					{
						return arguments.length ? (this._yoyo = a, this) : this._yoyo
					}, j.currentLabel = function (a)
					{
						return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
					}, d
			}, !0),
			function ()
			{
				var a = 180 / Math.PI,
					b = [],
					c = [],
					d = [],
					e = {},
					f = _gsScope._gsDefine.globals,
					g = function (a, b, c, d)
					{
						this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
					},
					h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
					i = function (a, b, c, d)
					{
						var e = {
								a: a
							},
							f = {},
							g = {},
							h = {
								c: d
							},
							i = (a + b) / 2,
							j = (b + c) / 2,
							k = (c + d) / 2,
							l = (i + j) / 2,
							m = (j + k) / 2,
							n = (m - l) / 8;
						return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
					},
					j = function (a, e, f, g, h)
					{
						var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
							x = 0,
							y = a[0].a;
						for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
						n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
					},
					k = function (a, d, e, f)
					{
						var h, i, j, k, l, m, n = [];
						if (f)
							for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
						if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
						for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
						return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
					},
					l = function (a, f, g, i, l, m)
					{
						var n, o, p, q, r, s, t, u, v = {},
							w = [],
							x = m || a[0];
						l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
						for (o in a[0]) w.push(o);
						if (a.length > 1)
						{
							for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
								if (o = w[n], Math.abs(x[o] - u[o]) > .05)
								{
									t = !1;
									break
								}
							t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
						}
						for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
						for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
						if (!i)
						{
							for (n = w.length; --n > -1;)
								if (e[o])
									for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q], d[q] = (d[q] || 0) + r * r;
							for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
						}
						for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
						return v
					},
					m = function (a, b, c)
					{
						b = b || "soft";
						var d, e, f, h, i, j, k, l, m, n, o, p = {},
							q = "cubic" === b ? 3 : 2,
							r = "soft" === b,
							s = [];
						if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
						for (m in a[0]) s.push(m);
						for (j = s.length; --j > -1;)
						{
							for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
							for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
							i.length = n
						}
						return p
					},
					n = function (a, b, c)
					{
						for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
							for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
					},
					o = function (a, b)
					{
						b = b >> 0 || 6;
						var c, d, e, f, g = [],
							h = [],
							i = 0,
							j = 0,
							k = b - 1,
							l = [],
							m = [];
						for (c in a) n(a[c], g, b);
						for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0,
							l[f] = m, h[f] = j, i = 0, m = []);
						return {
							length: j,
							lengths: h,
							segments: l
						}
					},
					p = _gsScope._gsDefine.plugin(
					{
						propName: "bezier",
						priority: -1,
						version: "1.3.4",
						API: 2,
						global: !0,
						init: function (a, b, c)
						{
							this._target = a, b instanceof Array && (b = {
								values: b
							}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
							var d, e, f, g, h, i = b.values || [],
								j = {},
								k = i[0],
								n = b.autoRotate || c.vars.orientToBezier;
							this._autoRotate = n ? n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]] : null;
							for (d in k) this._props.push(d);
							for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
							if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes)
							{
								var p = o(this._beziers, this._timeRes);
								this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
							}
							if (n = this._autoRotate)
								for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;)
								{
									for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
									d = n[f][2], this._initialRotations[f] = this._func[d] ? this._func[d].call(this._target) : this._target[d]
								}
							return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
						},
						set: function (b)
						{
							var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
								n = this._func,
								o = this._target,
								p = b !== this._startRatio;
							if (this._timeRes)
							{
								if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e)
								{
									for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
									this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
								}
								else if (b < this._l1 && e > 0)
								{
									for (; e > 0 && (this._l1 = k[--e]) >= b;);
									0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
								}
								if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1)
								{
									for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
									this._s1 = l[e - 1], this._si = e
								}
								else if (b < this._s1 && e > 0)
								{
									for (; e > 0 && (this._s1 = l[--e]) >= b;);
									0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
								}
								h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
							}
							else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
							for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = Math.round(i)), n[f] ? o[f](i) : o[f] = i;
							if (this._autoRotate)
							{
								var q, r, s, t, u, v, w, x = this._autoRotate;
								for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], n[f] ? o[f](i) : o[f] = i)
							}
						}
					}),
					q = p.prototype;
				p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c)
				{
					return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
				}, p._cssRegister = function ()
				{
					var a = f.CSSPlugin;
					if (a)
					{
						var b = a._internals,
							c = b._parseToProxy,
							d = b._setPluginRatio,
							e = b.CSSPropTween;
						b._registerComplexSpecialProp("bezier",
						{
							parser: function (a, b, f, g, h, i)
							{
								b instanceof Array && (b = {
									values: b
								}), i = new p;
								var j, k, l, m = b.values,
									n = m.length - 1,
									o = [],
									q = {};
								if (0 > n) return h;
								for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
								for (k in b) q[k] = b[k];
								return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform), i._onInitTween(l.proxy, q, g._tween), h
							}
						})
					}
				}, q._roundProps = function (a, b)
				{
					for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
				}, q._kill = function (a)
				{
					var b, c, d = this._props;
					for (b in this._beziers)
						if (b in a)
							for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
					return this._super._kill.call(this, a)
				}
			}(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b)
			{
				var c, d, e, f, g = function ()
					{
						a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
					},
					h = _gsScope._gsDefine.globals,
					i = {},
					j = g.prototype = new a("css");
				j.constructor = g, g.version = "1.18.2", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
					top: j,
					right: j,
					bottom: j,
					left: j,
					width: j,
					height: j,
					fontSize: j,
					padding: j,
					margin: j,
					perspective: j,
					lineHeight: ""
				};
				var k, l, m, n, o, p, q = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
					r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					u = /(?:\d|\-|\+|=|#|\.)*/g,
					v = /opacity *= *([^)]*)/i,
					w = /opacity:([^;]*)/i,
					x = /alpha\(opacity *=.+?\)/i,
					y = /^(rgb|hsl)/,
					z = /([A-Z])/g,
					A = /-([a-z])/gi,
					B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					C = function (a, b)
					{
						return b.toUpperCase()
					},
					D = /(?:Left|Right|Width)/i,
					E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					G = /,(?=[^\)]*(?:\(|$))/gi,
					H = Math.PI / 180,
					I = 180 / Math.PI,
					J = {},
					K = document,
					L = function (a)
					{
						return K.createElementNS ? K.createElementNS("http://www.w3.org/1999/xhtml", a) : K.createElement(a)
					},
					M = L("div"),
					N = L("img"),
					O = g._internals = {
						_specialProps: i
					},
					P = navigator.userAgent,
					Q = function ()
					{
						var a = P.indexOf("Android"),
							b = L("a");
						return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8, 1)) > 3), o = m && Number(P.substr(P.indexOf("Version/") + 8, 1)) < 6, n = -1 !== P.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
					}(),
					R = function (a)
					{
						return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					S = function (a)
					{
						window.console && console.log(a)
					},
					T = "",
					U = "",
					V = function (a, b)
					{
						b = b || M;
						var c, d, e = b.style;
						if (void 0 !== e[a]) return a;
						for (a = a.charAt(0)
							.toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
						return d >= 0 ? (U = 3 === d ? "ms" : c[d], T = "-" + U.toLowerCase() + "-", U + a) : null
					},
					W = K.defaultView ? K.defaultView.getComputedStyle : function () {},
					X = g.getStyle = function (a, b, c, d, e)
					{
						var f;
						return Q || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || W(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1")
							.toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : R(a)
					},
					Y = O.convertToPixels = function (a, c, d, e, f)
					{
						if ("px" === e || !e) return d;
						if ("auto" === e || !d) return 0;
						var h, i, j, k = D.test(c),
							l = a,
							m = M.style,
							n = 0 > d;
						if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
						else
						{
							if (m.cssText = "border:0 solid red;position:" + X(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
							else
							{
								if (l = a.parentNode || K.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
								m[k ? "width" : "height"] = d + e
							}
							l.appendChild(M), h = parseFloat(M[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(M), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache ||
							{}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = Y(a, c, d, e, !0))
						}
						return n ? -h : h
					},
					Z = O.calculateOffset = function (a, b, c)
					{
						if ("absolute" !== X(a, "position", c)) return 0;
						var d = "left" === b ? "Left" : "Top",
							e = X(a, "margin" + d, c);
						return a["offset" + d] - (Y(a, b, parseFloat(e), e.replace(u, "")) || 0)
					},
					$ = function (a, b)
					{
						var c, d, e, f = {};
						if (b = b || W(a, null))
							if (c = b.length)
								for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || za === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
							else
								for (c in b)(-1 === c.indexOf("Transform") || ya === c) && (f[c] = b[c]);
						else if (b = a.currentStyle || a.style)
							for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
						return Q || (f.opacity = R(a)), d = La(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ba && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
					},
					_ = function (a, b, c, d, e)
					{
						var f, g, h, i = {},
							j = a.style;
						for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : Z(a, g), void 0 !== j[g] && (h = new oa(j, g, j[g], h)));
						if (d)
							for (g in d) "className" !== g && (i[g] = d[g]);
						return {
							difs: i,
							firstMPT: h
						}
					},
					aa = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					ba = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					ca = function (a, b, c)
					{
						var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
							e = aa[b],
							f = e.length;
						for (c = c || W(a, null); --f > -1;) d -= parseFloat(X(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(X(a, "border" + e[f] + "Width", c, !0)) || 0;
						return d
					},
					da = function (a, b)
					{
						if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
						(null == a || "" === a) && (a = "0 0");
						var c = a.split(" "),
							d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
							e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
						return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "")
							.indexOf("=")) && (d = "50%"), a = d + " " + e + (c.length > 2 ? " " + c[2] : ""), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(t, "")), b.oy = parseFloat(e.replace(t, "")), b.v = a), b || a
					},
					ea = function (a, b)
					{
						return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
					},
					fa = function (a, b)
					{
						return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
					},
					ga = function (a, b, c, d)
					{
						var e, f, g, h, i, j = 1e-6;
						return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : I) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
					},
					ha = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					ia = function (a, b, c)
					{
						return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
					},
					ja = g.parseColor = function (a, b)
					{
						var c, d, e, f, g, h, i, j, k, l, m;
						if (a)
							if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
							else
							{
								if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ha[a]) c = ha[a];
								else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
								else if ("hsl" === a.substr(0, 3))
									if (c = m = a.match(q), b)
									{
										if (-1 !== a.indexOf("=")) return a.match(r)
									}
									else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ia(g + 1 / 3, d, e), c[1] = ia(g, d, e), c[2] = ia(g - 1 / 3, d, e);
								else c = a.match(q) || ha.transparent;
								c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
							}
						else c = ha.black;
						return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
					},
					ka = function (a, b)
					{
						var c, d, e, f = a.match(la) || [],
							g = 0,
							h = f.length ? "" : a;
						for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = ja(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
						return h
					},
					la = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (j in ha) la += "|" + j + "\\b";
				la = new RegExp(la + ")", "gi"), g.colorStringFilter = function (a)
				{
					var b, c = a[0] + a[1];
					la.lastIndex = 0, la.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = ka(a[0], b), a[1] = ka(a[1], b))
				}, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
				var ma = function (a, b, c, d)
					{
						if (null == a) return function (a)
						{
							return a
						};
						var e, f = b ? (a.match(la) || [""])[0] : "",
							g = a.split(f)
							.join("")
							.match(s) || [],
							h = a.substr(0, a.indexOf(g[0])),
							i = ")" === a.charAt(a.length - 1) ? ")" : "",
							j = -1 !== a.indexOf(" ") ? " " : ",",
							k = g.length,
							l = k > 0 ? g[0].replace(q, "") : "";
						return k ? e = b ? function (a)
						{
							var b, m, n, o;
							if ("number" == typeof a) a += l;
							else if (d && G.test(a))
							{
								for (o = a.replace(G, "|")
									.split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
								return o.join(",")
							}
							if (b = (a.match(la) || [f])[0], m = a.split(b)
								.join("")
								.match(s) || [], n = m.length, k > n--)
								for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
							return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
						} : function (a)
						{
							var b, f, m;
							if ("number" == typeof a) a += l;
							else if (d && G.test(a))
							{
								for (f = a.replace(G, "|")
									.split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
								return f.join(",")
							}
							if (b = a.match(s) || [], m = b.length, k > m--)
								for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
							return h + b.join(j) + i
						} : function (a)
						{
							return a
						}
					},
					na = function (a)
					{
						return a = a.split(","),
							function (b, c, d, e, f, g, h)
							{
								var i, j = (c + "")
									.split(" ");
								for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
								return e.parse(b, h, f, g)
							}
					},
					oa = (O._setPluginRatio = function (a)
					{
						this.plugin.setRatio(a);
						for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
						if (g.autoRotate && (g.autoRotate.rotation = h.rotation), 1 === a || 0 === a)
							for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;)
							{
								if (c = i.t, c.type)
								{
									if (1 === c.type)
									{
										for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
										c[f] = e
									}
								}
								else c[f] = c.s + c.xs0;
								i = i._next
							}
					}, function (a, b, c, d, e)
					{
						this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
					}),
					pa = (O._parseToProxy = function (a, b, c, d, e, f)
					{
						var g, h, i, j, k, l = d,
							m = {},
							n = {},
							o = c._transform,
							p = J;
						for (c._transform = null, J = b, d = k = c.parse(a, b, d, e), J = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;)
						{
							if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new oa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
								for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new oa(d, i, h, j, d.rxp[i]));
							d = d._next
						}
						return {
							proxy: m,
							end: n,
							firstMPT: j,
							pt: k
						}
					}, O.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m)
					{
						this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof pa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
					}),
					qa = function (a, b, c, d, e, f)
					{
						var g = new pa(a, b, c, d - c, e, -1, f);
						return g.b = c, g.e = g.xs0 = d, g
					},
					ra = g.parseComplex = function (a, b, c, d, e, f, g, h, i, j)
					{
						c = c || f || "", g = new pa(a, b, 0, 0, g, j ? 2 : 1, null, !1, h, c, d), d += "";
						var l, m, n, o, p, s, t, u, v, w, x, y, z, A = c.split(", ")
							.join(",")
							.split(" "),
							B = d.split(", ")
							.join(",")
							.split(" "),
							C = A.length,
							D = k !== !1;
						for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ")
								.replace(G, ", ")
								.split(" "), B = B.join(" ")
								.replace(G, ", ")
								.split(" "), C = A.length), C !== B.length && (A = (f || "")
								.split(" "), C = A.length), g.plugin = i, g.setRatio = j, la.lastIndex = 0, l = 0; C > l; l++)
							if (o = A[l], p = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ea(p, u), p.replace(r, ""), D && -1 !== p.indexOf("px"), !0);
							else if (e && la.test(o)) y = "," === p.charAt(p.length - 1) ? ")," : ")", z = -1 !== p.indexOf("hsl") && Q, o = ja(o, z), p = ja(p, z), v = o.length + p.length > 6, v && !Q && 0 === p[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l])
							.join("transparent")) : (Q || (v = !1), z ? g.appendXtra(v ? "hsla(" : "hsl(", o[0], ea(p[0], o[0]), ",", !1, !0)
							.appendXtra("", o[1], ea(p[1], o[1]), "%,", !1)
							.appendXtra("", o[2], ea(p[2], o[2]), v ? "%," : "%" + y, !1) : g.appendXtra(v ? "rgba(" : "rgb(", o[0], p[0] - o[0], ",", !0, !0)
							.appendXtra("", o[1], p[1] - o[1], ",", !0)
							.appendXtra("", o[2], p[2] - o[2], v ? "," : y, !0), v && (o = o.length < 4 ? 1 : o[3], g.appendXtra("", o, (p.length < 4 ? 1 : p[3]) - o, y, !1))), la.lastIndex = 0;
						else if (s = o.match(q))
						{
							if (t = p.match(r), !t || t.length !== s.length) return g;
							for (n = 0, m = 0; m < s.length; m++) x = s[m], w = o.indexOf(x, n), g.appendXtra(o.substr(n, w - n), Number(x), ea(t[m], x), "", D && "px" === o.substr(w + x.length, 2), 0 === m), n = w + x.length;
							g["xs" + g.l] += o.substr(n)
						}
						else g["xs" + g.l] += g.l ? " " + p : p;
						if (-1 !== d.indexOf("=") && g.data)
						{
							for (y = g.xs0 + g.data.s, l = 1; l < g.l; l++) y += g["xs" + l] + g.data["xn" + l];
							g.e = y + g["xs" + l]
						}
						return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
					},
					sa = 9;
				for (j = pa.prototype, j.l = j.pr = 0; --sa > 0;) j["xn" + sa] = 0, j["xs" + sa] = "";
				j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f)
				{
					var g = this,
						h = g.l;
					return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new pa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
						s: b + c
					}, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
				};
				var ta = function (a, b)
					{
						b = b ||
						{}, this.p = b.prefix ? V(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || ma(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
					},
					ua = O._registerComplexSpecialProp = function (a, b, c)
					{
						"object" != typeof b && (b = {
							parser: c
						});
						var d, e, f = a.split(","),
							g = b.defaultValue;
						for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ta(f[d], b)
					},
					va = function (a)
					{
						if (!i[a])
						{
							var b = a.charAt(0)
								.toUpperCase() + a.substr(1) + "Plugin";
							ua(a,
							{
								parser: function (a, c, d, e, f, g, j)
								{
									var k = h.com.greensock.plugins[b];
									return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (S("Error: " + b + " js file not loaded."), f)
								}
							})
						}
					};
				j = ta.prototype, j.parseComplex = function (a, b, c, d, e, f)
				{
					var g, h, i, j, k, l, m = this.keyword;
					if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|")
							.split("|"), i = c.replace(G, "|")
							.split("|")) : m && (h = [b], i = [c])), i)
					{
						for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m)
							.join("") : -1 === k && (h[g] += " " + m)));
						b = h.join(", "), c = i.join(", ")
					}
					return ra(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
				}, j.parse = function (a, b, c, d, f, g, h)
				{
					return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
				}, g.registerSpecialProp = function (a, b, c)
				{
					ua(a,
					{
						parser: function (a, d, e, f, g, h, i)
						{
							var j = new pa(a, e, 0, 0, g, 2, e, !1, c);
							return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
						},
						priority: c
					})
				}, g.useSVGTransformAttr = m || n;
				var wa, xa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					ya = V("transform"),
					za = T + "transform",
					Aa = V("transformOrigin"),
					Ba = null !== V("perspective"),
					Ca = O.Transform = function ()
					{
						this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ba ? g.defaultForce3D || "auto" : !1
					},
					Da = window.SVGElement,
					Ea = function (a, b, c)
					{
						var d, e = K.createElementNS("http://www.w3.org/2000/svg", a),
							f = /([a-z])([A-Z])/g;
						for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2")
							.toLowerCase(), c[d]);
						return b.appendChild(e), e
					},
					Fa = K.documentElement,
					Ga = function ()
					{
						var a, b, c, d = p || /Android/i.test(P) && !window.chrome;
						return K.createElementNS && !d && (a = Ea("svg", Fa), b = Ea("rect", a,
							{
								width: 100,
								height: 50,
								x: 100
							}), c = b.getBoundingClientRect()
							.width, b.style[Aa] = "50% 50%", b.style[ya] = "scaleX(0.5)", d = c === b.getBoundingClientRect()
							.width && !(n && Ba), Fa.removeChild(a)), d
					}(),
					Ha = function (a, b, c, d, e)
					{
						var f, h, i, j, k, l, m, n, o, p, q, r, s, t, u = a._gsTransform,
							v = Ka(a, !0);
						u && (s = u.xOrigin, t = u.yOrigin), (!d || (f = d.split(" "))
							.length < 2) && (m = a.getBBox(), b = da(b)
							.split(" "), f = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * m.width : parseFloat(b[0])) + m.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * m.height : parseFloat(b[1])) + m.y]), c.xOrigin = j = parseFloat(f[0]), c.yOrigin = k = parseFloat(f[1]), d && v !== Ja && (l = v[0], m = v[1], n = v[2], o = v[3], p = v[4], q = v[5], r = l * o - m * n, h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r, i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r, j = c.xOrigin = f[0] = h, k = c.yOrigin = f[1] = i), u && (e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (h = j - s, i = k - t, u.xOffset += h * v[0] + i * v[2] - h, u.yOffset += h * v[1] + i * v[3] - i) : u.xOffset = u.yOffset = 0), a.setAttribute("data-svg-origin", f.join(" "))
					},
					Ia = function (a)
					{
						return !!(Da && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
					},
					Ja = [1, 0, 0, 1, 0, 0],
					Ka = function (a, b)
					{
						var c, d, e, f, g, h = a._gsTransform || new Ca,
							i = 1e5;
						if (ya ? d = X(a, za, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(E), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, (h.svg || a.getBBox && Ia(a)) && (c && -1 !== (a.style[ya] + "")
								.indexOf("matrix") && (d = a.style[ya], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi)
									.join(",") + ")", c = 0))), c) return Ja;
						for (e = (d || "")
							.match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], sa = e.length; --sa > -1;) f = Number(e[sa]), e[sa] = (g = f - (f |= 0)) ? (g * i + (0 > g ? -.5 : .5) | 0) / i + f : f;
						return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
					},
					La = O.getTransform = function (a, c, d, f)
					{
						if (a._gsTransform && d && !f) return a._gsTransform;
						var h, i, j, k, l, m, n = d ? a._gsTransform || new Ca : new Ca,
							o = n.scaleX < 0,
							p = 2e-5,
							q = 1e5,
							r = Ba ? parseFloat(X(a, Aa, c, !1, "0 0 0")
								.split(" ")[2]) || n.zOrigin || 0 : 0,
							s = parseFloat(g.defaultTransformPerspective) || 0;
						if (n.svg = !(!a.getBBox || !Ia(a)), n.svg && (Ha(a, X(a, Aa, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")), wa = g.useSVGTransformAttr || Ga), h = Ka(a), h !== Ja)
						{
							if (16 === h.length)
							{
								var t, u, v, w, x, y = h[0],
									z = h[1],
									A = h[2],
									B = h[3],
									C = h[4],
									D = h[5],
									E = h[6],
									F = h[7],
									G = h[8],
									H = h[9],
									J = h[10],
									K = h[12],
									L = h[13],
									M = h[14],
									N = h[11],
									O = Math.atan2(E, J);
								n.zOrigin && (M = -n.zOrigin, K = G * M - h[12], L = H * M - h[13], M = J * M + n.zOrigin - h[14]), n.rotationX = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), t = C * w + G * x, u = D * w + H * x, v = E * w + J * x, G = C * -x + G * w, H = D * -x + H * w, J = E * -x + J * w, N = F * -x + N * w, C = t, D = u, E = v), O = Math.atan2(-A, J), n.rotationY = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), t = y * w - G * x, u = z * w - H * x, v = A * w - J * x, H = z * x + H * w, J = A * x + J * w, N = B * x + N * w, y = t, z = u, A = v), O = Math.atan2(z, y), n.rotation = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), y = y * w + C * x, u = z * w + D * x, D = z * -x + D * w, E = A * -x + E * w, z = u), n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0, n.rotationY = 180 - n.rotationY), n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q, n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q, n.scaleZ = (Math.sqrt(E * E + J * J) * q + .5 | 0) / q, n.skewX = 0, n.perspective = N ? 1 / (0 > N ? -N : N) : 0, n.x = K, n.y = L, n.z = M, n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C), n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
							}
							else if ((!Ba || f || !h.length || n.x !== h[4] || n.y !== h[5] || !n.rotationX && !n.rotationY) && (void 0 === n.x || "none" !== X(a, "display", c)))
							{
								var P = h.length >= 6,
									Q = P ? h[0] : 1,
									R = h[1] || 0,
									S = h[2] || 0,
									T = P ? h[3] : 1;
								n.x = h[4] || 0, n.y = h[5] || 0, j = Math.sqrt(Q * Q + R * R), k = Math.sqrt(T * T + S * S), l = Q || R ? Math.atan2(R, Q) * I : n.rotation || 0, m = S || T ? Math.atan2(S, T) * I + l : n.skewX || 0, Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (j *= -1, m += 0 >= l ? 180 : -180, l += 0 >= l ? 180 : -180) : (k *= -1, m += 0 >= m ? 180 : -180)), n.scaleX = j, n.scaleY = k, n.rotation = l, n.skewX = m, Ba && (n.rotationX = n.rotationY = n.z = 0, n.perspective = s, n.scaleZ = 1), n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S), n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
							}
							n.zOrigin = r;
							for (i in n) n[i] < p && n[i] > -p && (n[i] = 0)
						}
						return d && (a._gsTransform = n, n.svg && (wa && a.style[ya] ? b.delayedCall(.001, function ()
						{
							Pa(a.style, ya)
						}) : !wa && a.getAttribute("transform") && b.delayedCall(.001, function ()
						{
							a.removeAttribute("transform")
						}))), n
					},
					Ma = function (a)
					{
						var b, c, d = this.data,
							e = -d.rotation * H,
							f = e + d.skewX * H,
							g = 1e5,
							h = (Math.cos(e) * d.scaleX * g | 0) / g,
							i = (Math.sin(e) * d.scaleX * g | 0) / g,
							j = (Math.sin(f) * -d.scaleY * g | 0) / g,
							k = (Math.cos(f) * d.scaleY * g | 0) / g,
							l = this.t.style,
							m = this.t.currentStyle;
						if (m)
						{
							c = i, i = -j, j = -c, b = m.filter, l.filter = "";
							var n, o, q = this.t.offsetWidth,
								r = this.t.offsetHeight,
								s = "absolute" !== m.position,
								t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
								w = d.x + q * d.xPercent / 100,
								x = d.y + r * d.yPercent / 100;
							if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, w += n - (n * h + o * i), x += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s)
							{
								var y, z, A, B = 8 > p ? 1 : -1;
								for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), sa = 0; 4 > sa; sa++) z = ba[sa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : Y(this.t, z, parseFloat(y), y.replace(u, "")) || 0, A = c !== d[z] ? 2 > sa ? -d.ieOffsetX : -d.ieOffsetY : 2 > sa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === sa || 2 === sa ? 1 : B))) + "px"
							}
						}
					},
					Na = O.set3DTransformRatio = O.setTransformRatio = function (a)
					{
						var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
							A = this.t.style,
							B = z.rotation,
							C = z.rotationX,
							D = z.rotationY,
							E = z.scaleX,
							F = z.scaleY,
							G = z.scaleZ,
							I = z.x,
							J = z.y,
							K = z.z,
							L = z.svg,
							M = z.perspective,
							N = z.force3D;
						if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || wa && L || !Ba) return void(B || z.skewX || L ? (B *= H, x = z.skewX * H, y = 1e5, b = Math.cos(B) * E, e = Math.sin(B) * E, c = Math.sin(B - x) * -F, f = Math.cos(B - x) * F, x && "simple" === z.skewType && (s = Math.tan(x), s = Math.sqrt(1 + s * s), c *= s, f *= s, z.skewY && (b *= s, e *= s)), L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset, wa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(), I += .01 * z.xPercent * p.width, J += .01 * z.yPercent * p.height), p = 1e-6, p > I && I > -p && (I = 0), p > J && J > -p && (J = 0)), u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + I + "," + J + ")", L && wa ? this.t.setAttribute("transform", "matrix(" + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + I + "," + J + ")");
						if (n && (p = 1e-4, p > E && E > -p && (E = G = 2e-5), p > F && F > -p && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || z.skewX) B *= H, q = b = Math.cos(B), r = e = Math.sin(B), z.skewX && (B -= z.skewX * H, q = Math.cos(B), r = Math.sin(B), "simple" === z.skewType && (s = Math.tan(z.skewX * H), s = Math.sqrt(1 + s * s), q *= s, r *= s, z.skewY && (b *= s, e *= s))), c = -r, f = q;
						else
						{
							if (!(D || C || 1 !== G || M || L)) return void(A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
							b = f = 1, c = e = 0
						}
						j = 1, d = g = h = i = k = l = 0, m = M ? -1 / M : 0, o = z.zOrigin, p = 1e-6, v = ",", w = "0", B = D * H, B && (q = Math.cos(B), r = Math.sin(B), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), B = C * H, B && (q = Math.cos(B), r = Math.sin(B), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== G && (d *= G, g *= G, j *= G, m *= G), 1 !== F && (c *= F, f *= F, i *= F, l *= F), 1 !== E && (b *= E, e *= E, h *= E, k *= E), (o || L) && (o && (I += d * -o, J += g * -o, K += j * -o + o), L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset), p > I && I > -p && (I = w), p > J && J > -p && (J = w), p > K && K > -p && (K = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f), C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")", A[ya] = u
					};
				j = Ca.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
				{
					parser: function (a, b, c, d, f, h, i)
					{
						if (d._lastParsedTransform === i) return f;
						d._lastParsedTransform = i;
						var j, k, l, m, n, o, p, q, r, s, t = a._gsTransform,
							u = a.style,
							v = 1e-6,
							w = xa.length,
							x = i,
							y = {},
							z = "transformOrigin";
						if (i.display ? (m = X(a, "display"), u.display = "block", j = La(a, e, !0, i.parseTransform), u.display = m) : j = La(a, e, !0, i.parseTransform), d._transform = j, "string" == typeof x.transform && ya) m = M.style, m[ya] = x.transform, m.display = "block", m.position = "absolute", K.body.appendChild(M), k = La(M, null, !1), K.body.removeChild(M), k.perspective || (k.perspective = j.perspective), null != x.xPercent && (k.xPercent = fa(x.xPercent, j.xPercent)), null != x.yPercent && (k.yPercent = fa(x.yPercent, j.yPercent));
						else if ("object" == typeof x)
						{
							if (k = {
									scaleX: fa(null != x.scaleX ? x.scaleX : x.scale, j.scaleX),
									scaleY: fa(null != x.scaleY ? x.scaleY : x.scale, j.scaleY),
									scaleZ: fa(x.scaleZ, j.scaleZ),
									x: fa(x.x, j.x),
									y: fa(x.y, j.y),
									z: fa(x.z, j.z),
									xPercent: fa(x.xPercent, j.xPercent),
									yPercent: fa(x.yPercent, j.yPercent),
									perspective: fa(x.transformPerspective, j.perspective)
								}, q = x.directionalRotation, null != q)
								if ("object" == typeof q)
									for (m in q) x[m] = q[m];
								else x.rotation = q;
								"string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0, k.xPercent = fa(x.x, j.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0, k.yPercent = fa(x.y, j.yPercent)), k.rotation = ga("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : j.rotation, j.rotation, "rotation", y), Ba && (k.rotationX = ga("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", y), k.rotationY = ga("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", y)), k.skewX = null == x.skewX ? j.skewX : ga(x.skewX, j.skewX), k.skewY = null == x.skewY ? j.skewY : ga(x.skewY, j.skewY), (l = k.skewY - j.skewY) && (k.skewX += l, k.rotation += l)
						}
						for (Ba && null != x.force3D && (j.force3D = x.force3D, p = !0), j.skewType = x.skewType || j.skewType || g.defaultSkewType, o = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, o || null == x.scale || (k.scaleZ = 1); --w > -1;) c = xa[w], n = k[c] - j[c], (n > v || -v > n || null != x[c] || null != J[c]) && (p = !0, f = new pa(j, c, j[c], n, f), c in y && (f.e = y[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
						return n = x.transformOrigin, j.svg && (n || x.svgOrigin) && (r = j.xOffset, s = j.yOffset, Ha(a, da(n), k, x.svgOrigin, x.smoothOrigin), f = qa(j, "xOrigin", (t ? j : k)
							.xOrigin, k.xOrigin, f, z), f = qa(j, "yOrigin", (t ? j : k)
							.yOrigin, k.yOrigin, f, z), (r !== j.xOffset || s !== j.yOffset) && (f = qa(j, "xOffset", t ? r : j.xOffset, j.xOffset, f, z), f = qa(j, "yOffset", t ? s : j.yOffset, j.yOffset, f, z)), n = wa ? null : "0px 0px"), (n || Ba && o && j.zOrigin) && (ya ? (p = !0, c = Aa, n = (n || X(a, c, e, !1, "50% 50%")) + "", f = new pa(u, c, 0, 0, f, -1, z), f.b = u[c], f.plugin = h, Ba ? (m = j.zOrigin, n = n.split(" "), j.zOrigin = (n.length > 2 && (0 === m || "0px" !== n[2]) ? parseFloat(n[2]) : m) || 0, f.xs0 = f.e = n[0] + " " + (n[1] || "50%") + " 0px", f = new pa(j, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = j.zOrigin) : f.xs0 = f.e = n) : da(n + "", j)), p && (d._transformType = j.svg && wa || !o && 3 !== this._transformType ? 2 : 3), f
					},
					prefix: !0
				}), ua("boxShadow",
				{
					defaultValue: "0px 0px 0px 0px #999",
					prefix: !0,
					color: !0,
					multi: !0,
					keyword: "inset"
				}), ua("borderRadius",
				{
					defaultValue: "0px",
					parser: function (a, b, c, f, g, h)
					{
						b = this.format(b);
						var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							z = a.style;
						for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = V(y[j])), m = l = X(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "")
							.length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "")
							.length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "")
							.length)), "" === s && (s = d[c] || t), s !== t && (v = Y(a, "borderLeft", o, t),
							w = Y(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = Y(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = ra(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
						return g
					},
					prefix: !0,
					formatter: ma("0px 0px 0px 0px", !1, !0)
				}), ua("backgroundPosition",
				{
					defaultValue: "0 0",
					parser: function (a, b, c, d, f, g)
					{
						var h, i, j, k, l, m, n = "background-position",
							o = e || W(a, null),
							q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
							r = this.format(b);
						if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a, "backgroundImage")
								.replace(B, ""), m && "none" !== m))
						{
							for (h = q.split(" "), i = r.split(" "), N.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
							q = h.join(" ")
						}
						return this.parseComplex(a.style, q, r, f, g)
					},
					formatter: da
				}), ua("backgroundSize",
				{
					defaultValue: "0 0",
					formatter: da
				}), ua("perspective",
				{
					defaultValue: "0px",
					prefix: !0
				}), ua("perspectiveOrigin",
				{
					defaultValue: "50% 50%",
					prefix: !0
				}), ua("transformStyle",
				{
					prefix: !0
				}), ua("backfaceVisibility",
				{
					prefix: !0
				}), ua("userSelect",
				{
					prefix: !0
				}), ua("margin",
				{
					parser: na("marginTop,marginRight,marginBottom,marginLeft")
				}), ua("padding",
				{
					parser: na("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), ua("clip",
				{
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function (a, b, c, d, f, g)
					{
						var h, i, j;
						return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b)
							.split(",")
							.join(j)) : (h = this.format(X(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
					}
				}), ua("textShadow",
				{
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), ua("autoRound,strictUnits",
				{
					parser: function (a, b, c, d, e)
					{
						return e
					}
				}), ua("border",
				{
					defaultValue: "0px solid #000",
					parser: function (a, b, c, d, f, g)
					{
						return this.parseComplex(a.style, this.format(X(a, "borderTopWidth", e, !1, "0px") + " " + X(a, "borderTopStyle", e, !1, "solid") + " " + X(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
					},
					color: !0,
					formatter: function (a)
					{
						var b = a.split(" ");
						return b[0] + " " + (b[1] || "solid") + " " + (a.match(la) || ["#000"])[0]
					}
				}), ua("borderWidth",
				{
					parser: na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), ua("float,cssFloat,styleFloat",
				{
					parser: function (a, b, c, d, e, f)
					{
						var g = a.style,
							h = "cssFloat" in g ? "cssFloat" : "styleFloat";
						return new pa(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
					}
				});
				var Oa = function (a)
				{
					var b, c = this.t,
						d = c.filter || X(this.data, "filter") || "",
						e = this.s + this.c * a | 0;
					100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !X(this.data, "filter")) : (c.filter = d.replace(x, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
				};
				ua("opacity,alpha,autoAlpha",
				{
					defaultValue: "1",
					parser: function (a, b, c, d, f, g)
					{
						var h = parseFloat(X(a, "opacity", e, !1, "1")),
							i = a.style,
							j = "autoAlpha" === c;
						return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === X(a, "visibility", e) && 0 !== b && (h = 0), Q ? f = new pa(i, "opacity", h, b - h, f) : (f = new pa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Oa), j && (f = new pa(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
					}
				});
				var Pa = function (a, b)
					{
						b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(z, "-$1")
							.toLowerCase())) : a.removeAttribute(b))
					},
					Qa = function (a)
					{
						if (this.t._gsClassPT = this, 1 === a || 0 === a)
						{
							this.t.setAttribute("class", 0 === a ? this.b : this.e);
							for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Pa(c, b.p), b = b._next;
							1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						}
						else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				ua("className",
				{
					parser: function (a, b, d, f, g, h, i)
					{
						var j, k, l, m, n, o = a.getAttribute("class") || "",
							p = a.style.cssText;
						if (g = f._classNamePT = new pa(a, d, 0, 0, g, 2), g.setRatio = Qa, g.pr = -11, c = !0, g.b = o, k = $(a, e), l = a._gsClassPT)
						{
							for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
							l.setRatio(1)
						}
						return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = _(a, k, $(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
					}
				});
				var Ra = function (a)
				{
					if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data)
					{
						var b, c, d, e, f, g = this.t.style,
							h = i.transform.parse;
						if ("all" === this.e) g.cssText = "", e = !0;
						else
							for (b = this.e.split(" ")
								.join("")
								.split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Aa : i[c].p), Pa(g, c);
						e && (Pa(g, ya), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
					}
				};
				for (ua("clearProps",
					{
						parser: function (a, b, d, e, f)
						{
							return f = new pa(a, d, 0, 0, f, 2), f.setRatio = Ra, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
						}
					}), j = "bezier,throwProps,physicsProps,physics2D".split(","), sa = j.length; sa--;) va(j[sa]);
				j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h)
				{
					if (!a.nodeType) return !1;
					this._target = a, this._tween = h, this._vars = b, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = W(a, ""), f = this._overwriteProps;
					var j, n, p, q, r, s, t, u, v, x = a.style;
					if (l && "" === x.zIndex && (j = X(a, "zIndex", e), ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)), "string" == typeof b && (q = x.cssText, j = $(a, e), x.cssText = q + ";" + b, j = _(a, j, $(a))
							.difs, !Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, x.cssText = q), b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = n = this.parse(a, b, null), this._transformType)
					{
						for (v = 3 === this._transformType, ya ? m && (l = !0, "" === x.zIndex && (t = X(a, "zIndex", e), ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)), o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1, p = n; p && p._next;) p = p._next;
						u = new pa(a, "transform", 0, 0, null, 2), this._linkCSSP(u, null, p), u.setRatio = ya ? Na : Ma, u.data = this._transform || La(a, e, !0), u.tween = h, u.pr = -1, f.pop()
					}
					if (c)
					{
						for (; n;)
						{
							for (s = n._next, p = q; p && p.pr > n.pr;) p = p._next;
							(n._prev = p ? p._prev : r) ? n._prev._next = n: q = n, (n._next = p) ? p._prev = n : r = n, n = s
						}
						this._firstPT = q
					}
					return !0
				}, j.parse = function (a, b, c, f)
				{
					var g, h, j, l, m, n, o, p, q, r, s = a.style;
					for (g in b) n = b[g], h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = X(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ja(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = ra(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "")
						.length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ca(a, g, e), o = "px") : "left" === g || "top" === g ? (j = Z(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(u, "")) : (l = parseFloat(n), p = q ? n.replace(u, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a, g, j, o), "%" === p ? (j /= Y(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Y(a, g, 1, p) : "px" !== p && (l = Y(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + j + p)), r && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new pa(s, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : S("invalid " + g + " tween value: " + b[g]) : (c = new pa(s, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = ra(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
					return c
				}, j.setRatio = function (a)
				{
					var b, c, d, e = this._firstPT,
						f = 1e-6;
					if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
							for (; e;)
							{
								if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
									if (1 === e.type)
										if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
										else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
								else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
								else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
								else
								{
									for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
									e.t[e.p] = c
								}
								else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
								else e.t[e.p] = b + e.xs0;
								e = e._next
							}
						else
							for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
						else
							for (; e;)
							{
								if (2 !== e.type)
									if (e.r && -1 !== e.type)
										if (b = Math.round(e.s + e.c), e.type)
										{
											if (1 === e.type)
											{
												for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
												e.t[e.p] = c
											}
										}
										else e.t[e.p] = b + e.xs0;
								else e.t[e.p] = e.e;
								else e.setRatio(a);
								e = e._next
							}
				}, j._enableTransforms = function (a)
				{
					this._transform = this._transform || La(this._target, e, !0), this._transformType = this._transform.svg && wa || !a && 3 !== this._transformType ? 2 : 3
				};
				var Sa = function (a)
				{
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				j._addLazySet = function (a, b, c)
				{
					var d = this._firstPT = new pa(a, b, 0, 0, this._firstPT, 2);
					d.e = c, d.setRatio = Sa, d.data = this
				}, j._linkCSSP = function (a, b, c, d)
				{
					return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
				}, j._kill = function (b)
				{
					var c, d, e, f = b;
					if (b.autoAlpha || b.alpha)
					{
						f = {};
						for (d in b) f[d] = b[d];
						f.opacity = 1, f.autoAlpha && (f.visibility = 1)
					}
					return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
				};
				var Ta = function (a, b, c)
				{
					var d, e, f, g;
					if (a.slice)
						for (e = a.length; --e > -1;) Ta(a[e], b, c);
					else
						for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push($(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ta(f, b, c)
				};
				return g.cascadeTo = function (a, c, d)
				{
					var e, f, g, h, i = b.to(a, c, d),
						j = [i],
						k = [],
						l = [],
						m = [],
						n = b._internals.reservedProps;
					for (a = i._targets || i.target, Ta(a, k, m), i.render(c, !0, !0), Ta(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
						if (f = _(m[e], k[e], l[e]), f.firstMPT)
						{
							f = f.difs;
							for (g in d) n[g] && (f[g] = d[g]);
							h = {};
							for (g in f) h[g] = k[e][g];
							j.push(b.fromTo(m[e], c, h, f))
						}
					return j
				}, a.activate([g]), g
			}, !0),
			function ()
			{
				var a = _gsScope._gsDefine.plugin(
					{
						propName: "roundProps",
						version: "1.5",
						priority: -1,
						API: 2,
						init: function (a, b, c)
						{
							return this._tween = c, !0
						}
					}),
					b = function (a)
					{
						for (; a;) a.f || a.blob || (a.r = 1), a = a._next
					},
					c = a.prototype;
				c._onInitAllProps = function ()
				{
					for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = 1;
					for (g = f.length; --g > -1;)
						for (a = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._roundProps(h, !0) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
					return !1
				}, c._add = function (a, b, c, d)
				{
					this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
				}
			}(),
			function ()
			{
				_gsScope._gsDefine.plugin(
				{
					propName: "attr",
					API: 2,
					version: "0.5.0",
					init: function (a, b, c)
					{
						var d;
						if ("function" != typeof a.setAttribute) return !1;
						for (d in b) this._addTween(a, "setAttribute", a.getAttribute(d) + "", b[d] + "", d, !1, d), this._overwriteProps.push(d);
						return !0
					}
				})
			}(), _gsScope._gsDefine.plugin(
			{
				propName: "directionalRotation",
				version: "0.2.1",
				API: 2,
				init: function (a, b, c)
				{
					"object" != typeof b && (b = {
						rotation: b
					}), this.finals = {};
					var d, e, f, g, h, i, j = b.useRadians === !0 ? 2 * Math.PI : 360,
						k = 1e-6;
					for (d in b) "useRadians" !== d && (i = (b[d] + "")
						.split("_"), e = i[0], f = parseFloat("function" != typeof a[d] ? a[d] : a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]()), g = this.finals[d] = "string" == typeof e && "=" === e.charAt(1) ? f + parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) || 0, h = g - f, i.length && (e = i.join("_"), -1 !== e.indexOf("short") && (h %= j, h !== h % (j / 2) && (h = 0 > h ? h + j : h - j)), -1 !== e.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * j) % j - (h / j | 0) * j : -1 !== e.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * j) % j - (h / j | 0) * j)), (h > k || -k > h) && (this._addTween(a, d, f, f + h, d), this._overwriteProps.push(d)));
					return !0
				},
				set: function (a)
				{
					var b;
					if (1 !== a) this._super.setRatio.call(this, a);
					else
						for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
				}
			})
			._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a)
			{
				var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
					f = e.com.greensock,
					g = 2 * Math.PI,
					h = Math.PI / 2,
					i = f._class,
					j = function (b, c)
					{
						var d = i("easing." + b, function () {}, !0),
							e = d.prototype = new a;
						return e.constructor = d, e.getRatio = c, d
					},
					k = a.register || function () {},
					l = function (a, b, c, d, e)
					{
						var f = i("easing." + a,
						{
							easeOut: new b,
							easeIn: new c,
							easeInOut: new d
						}, !0);
						return k(f, a), f
					},
					m = function (a, b, c)
					{
						this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
					},
					n = function (b, c)
					{
						var d = i("easing." + b, function (a)
							{
								this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							e = d.prototype = new a;
						return e.constructor = d, e.getRatio = c, e.config = function (a)
						{
							return new d(a)
						}, d
					},
					o = l("Back", n("BackOut", function (a)
					{
						return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
					}), n("BackIn", function (a)
					{
						return a * a * ((this._p1 + 1) * a - this._p1)
					}), n("BackInOut", function (a)
					{
						return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
					})),
					p = i("easing.SlowMo", function (a, b, c)
					{
						b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
					}, !0),
					q = p.prototype = new a;
				return q.constructor = p, q.getRatio = function (a)
				{
					var b = a + (.5 - a) * this._p;
					return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
				}, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c)
				{
					return new p(a, b, c)
				}, b = i("easing.SteppedEase", function (a)
				{
					a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
				}, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a)
				{
					return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
				}, q.config = b.config = function (a)
				{
					return new b(a)
				}, c = i("easing.RoughEase", function (b)
				{
					b = b ||
					{};
					for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
						x: c,
						y: d
					};
					for (j.sort(function (a, b)
						{
							return a.x - b.x
						}), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
					this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
				}, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a)
				{
					var b = this._prev;
					if (a > b.t)
					{
						for (; b.next && a >= b.t;) b = b.next;
						b = b.prev
					}
					else
						for (; b.prev && a <= b.t;) b = b.prev;
					return this._prev = b, b.v + (a - b.t) / b.gap * b.c
				}, q.config = function (a)
				{
					return new c(a)
				}, c.ease = new c, l("Bounce", j("BounceOut", function (a)
				{
					return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
				}), j("BounceIn", function (a)
				{
					return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
				}), j("BounceInOut", function (a)
				{
					var b = .5 > a;
					return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
				})), l("Circ", j("CircOut", function (a)
				{
					return Math.sqrt(1 - (a -= 1) * a)
				}), j("CircIn", function (a)
				{
					return -(Math.sqrt(1 - a * a) - 1)
				}), j("CircInOut", function (a)
				{
					return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
				})), d = function (b, c, d)
				{
					var e = i("easing." + b, function (a, b)
						{
							this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
						}, !0),
						f = e.prototype = new a;
					return f.constructor = e, f.getRatio = c, f.config = function (a, b)
					{
						return new e(a, b)
					}, e
				}, l("Elastic", d("ElasticOut", function (a)
				{
					return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
				}, .3), d("ElasticIn", function (a)
				{
					return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
				}, .3), d("ElasticInOut", function (a)
				{
					return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
				}, .45)), l("Expo", j("ExpoOut", function (a)
				{
					return 1 - Math.pow(2, -10 * a)
				}), j("ExpoIn", function (a)
				{
					return Math.pow(2, 10 * (a - 1)) - .001
				}), j("ExpoInOut", function (a)
				{
					return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
				})), l("Sine", j("SineOut", function (a)
				{
					return Math.sin(a * h)
				}), j("SineIn", function (a)
				{
					return -Math.cos(a * h) + 1
				}), j("SineInOut", function (a)
				{
					return -.5 * (Math.cos(Math.PI * a) - 1)
				})), i("easing.EaseLookup",
				{
					find: function (b)
					{
						return a.map[b]
					}
				}, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (a, b)
	{
		"use strict";
		var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
		if (!c.TweenLite)
		{
			var d, e, f, g, h, i = function (a)
				{
					var b, d = a.split("."),
						e = c;
					for (b = 0; b < d.length; b++) e[d[b]] = e = e[d[b]] ||
					{};
					return e
				},
				j = i("com.greensock"),
				k = 1e-10,
				l = function (a)
				{
					var b, c = [],
						d = a.length;
					for (b = 0; b !== d; c.push(a[b++]));
					return c
				},
				m = function () {},
				n = function ()
				{
					var a = Object.prototype.toString,
						b = a.call([]);
					return function (c)
					{
						return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
					}
				}(),
				o = {},
				p = function (d, e, f, g)
				{
					this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
					var h = [];
					this.check = function (j)
					{
						for (var k, l, m, n, q, r = e.length, s = r; --r > -1;)(k = o[e[r]] || new p(e[r], []))
							.gsClass ? (h[r] = k.gsClass, s--) : j && k.sc.push(this);
						if (0 === s && f)
							for (l = ("com.greensock." + d)
								.split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, q = "undefined" != typeof module && module.exports, !q && "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".")
									.pop(), [],
									function ()
									{
										return n
									}) : d === b && q && (module.exports = n)), r = 0; r < this.sc.length; r++) this.sc[r].check()
					}, this.check(!0)
				},
				q = a._gsDefine = function (a, b, c, d)
				{
					return new p(a, b, c, d)
				},
				r = j._class = function (a, b, c)
				{
					return b = b || function () {}, q(a, [], function ()
					{
						return b
					}, c), b
				};
			q.globals = c;
			var s = [0, 0, 1, 1],
				t = [],
				u = r("easing.Ease", function (a, b, c, d)
				{
					this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
				}, !0),
				v = u.map = {},
				w = u.register = function (a, b, c, d)
				{
					for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut")
							.split(","); --k > -1;)
						for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] ||
							{}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
				};
			for (f = u.prototype, f._calcEnd = !1, f.getRatio = function (a)
				{
					if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
					var b = this._type,
						c = this._power,
						d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
					return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
				}, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
			v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
			var x = r("events.EventDispatcher", function (a)
			{
				this._listeners = {}, this._eventTarget = a || this
			});
			f = x.prototype, f.addEventListener = function (a, b, c, d, e)
			{
				e = e || 0;
				var f, i, j = this._listeners[a],
					k = 0;
				for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && f.pr < e && (k = i + 1);
				j.splice(k, 0,
				{
					c: b,
					s: c,
					up: d,
					pr: e
				}), this !== g || h || g.wake()
			}, f.removeEventListener = function (a, b)
			{
				var c, d = this._listeners[a];
				if (d)
					for (c = d.length; --c > -1;)
						if (d[c].c === b) return void d.splice(c, 1)
			}, f.dispatchEvent = function (a)
			{
				var b, c, d, e = this._listeners[a];
				if (e)
					for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c,
					{
						type: a,
						target: c
					}) : d.c.call(d.s || c))
			};
			var y = a.requestAnimationFrame,
				z = a.cancelAnimationFrame,
				A = Date.now || function ()
				{
					return (new Date)
						.getTime()
				},
				B = A();
			for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
			r("Ticker", function (a, b)
			{
				var c, d, e, f, i, j = this,
					l = A(),
					n = b !== !1 && y ? "auto" : !1,
					o = 500,
					p = 33,
					q = "tick",
					r = function (a)
					{
						var b, g, h = A() - B;
						h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(r)), g && j.dispatchEvent(q)
					};
				x.call(j), j.time = j.frame = 0, j.tick = function ()
				{
					r(!0)
				}, j.lagSmoothing = function (a, b)
				{
					o = a || 1 / k, p = Math.min(b, o, 0)
				}, j.sleep = function ()
				{
					null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
				}, j.wake = function (a)
				{
					null !== e ? j.sleep() : a ? l += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function (a)
					{
						return setTimeout(a, 1e3 * (i - j.time) + 1 | 0)
					}, j === g && (h = !0), r(2)
				}, j.fps = function (a)
				{
					return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
				}, j.useRAF = function (a)
				{
					return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
				}, j.fps(a), setTimeout(function ()
				{
					"auto" === n && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
				}, 1500)
			}), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
			var C = r("core.Animation", function (a, b)
			{
				if (this.vars = b = b ||
					{}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, V)
				{
					h || g.wake();
					var c = this.vars.useFrames ? U : V;
					c.add(this, c._time), this.vars.paused && this.paused(!0)
				}
			});
			g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
			var D = function ()
			{
				h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
			};
			D(), f.play = function (a, b)
			{
				return null != a && this.seek(a, b), this.reversed(!1)
					.paused(!1)
			}, f.pause = function (a, b)
			{
				return null != a && this.seek(a, b), this.paused(!0)
			}, f.resume = function (a, b)
			{
				return null != a && this.seek(a, b), this.paused(!1)
			}, f.seek = function (a, b)
			{
				return this.totalTime(Number(a), b !== !1)
			}, f.restart = function (a, b)
			{
				return this.reversed(!1)
					.paused(!1)
					.totalTime(a ? -this._delay : 0, b !== !1, !0)
			}, f.reverse = function (a, b)
			{
				return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0)
					.paused(!1)
			}, f.render = function (a, b, c) {}, f.invalidate = function ()
			{
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, f.isActive = function ()
			{
				var a, b = this._timeline,
					c = this._startTime;
				return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
			}, f._enabled = function (a, b)
			{
				return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
			}, f._kill = function (a, b)
			{
				return this._enabled(!1, !1)
			}, f.kill = function (a, b)
			{
				return this._kill(a, b), this
			}, f._uncache = function (a)
			{
				for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
				return this
			}, f._swapSelfInParams = function (a)
			{
				for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
				return c
			}, f._callback = function (a)
			{
				var b = this.vars;
				b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || t)
			}, f.eventCallback = function (a, b, c, d)
			{
				if ("on" === (a || "")
					.substr(0, 2))
				{
					var e = this.vars;
					if (1 === arguments.length) return e[a];
					null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("")
						.indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
				}
				return this
			}, f.delay = function (a)
			{
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
			}, f.duration = function (a)
			{
				return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, f.totalDuration = function (a)
			{
				return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
			}, f.time = function (a, b)
			{
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
			}, f.totalTime = function (a, b, c)
			{
				if (h || g.wake(), !arguments.length) return this._totalTime;
				if (this._timeline)
				{
					if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming)
					{
						this._dirty && this.totalDuration();
						var d = this._totalDuration,
							e = this._timeline;
						if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
							for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X())
				}
				return this
			}, f.progress = f.totalProgress = function (a, b)
			{
				var c = this.duration();
				return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
			}, f.startTime = function (a)
			{
				return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
			}, f.endTime = function (a)
			{
				return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
			}, f.timeScale = function (a)
			{
				if (!arguments.length) return this._timeScale;
				if (a = a || k, this._timeline && this._timeline.smoothChildTiming)
				{
					var b = this._pauseTime,
						c = b || 0 === b ? b : this._timeline.totalTime();
					this._startTime = c - (c - this._startTime) * this._timeScale / a
				}
				return this._timeScale = a, this._uncache(!1)
			}, f.reversed = function (a)
			{
				return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, f.paused = function (a)
			{
				if (!arguments.length) return this._paused;
				var b, c, d = this._timeline;
				return a != this._paused && d && (h || a || g.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
			};
			var E = r("core.SimpleTimeline", function (a)
			{
				C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			f = E.prototype = new C, f.constructor = E, f.kill()
				._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function (a, b, c, d)
				{
					var e, f;
					if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
						for (f = a._startTime; e && e._startTime > f;) e = e._prev;
					return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
				}, f._remove = function (a, b)
				{
					return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
				}, f.render = function (a, b, c)
				{
					var d, e = this._first;
					for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
				}, f.rawTime = function ()
				{
					return h || g.wake(), this._totalTime
				};
			var F = r("TweenLite", function (b, c, d)
				{
					if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
					this.target = b = "string" != typeof b ? b : F.selector(b) || b;
					var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
						i = this.vars.overwrite;
					if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
						for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
					else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
				}, !0),
				G = function (b)
				{
					return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
				},
				H = function (a, b)
				{
					var c, d = {};
					for (c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);
					a.css = d
				};
			f = F.prototype = new C, f.constructor = F, f.kill()
				._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.18.2", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = 120, F.lagSmoothing = function (a, b)
				{
					g.lagSmoothing(a, b)
				}, F.selector = a.$ || a.jQuery || function (b)
				{
					var c = a.$ || a.jQuery;
					return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
				};
			var I = [],
				J = {},
				K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				L = function (a)
				{
					for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
				},
				M = function (a, b, c, d)
				{
					var e, f, g, h, i, j, k, l = [a, b],
						m = 0,
						n = "",
						o = 0;
					for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
						_next: l._firstPT,
						t: l,
						p: l.length - 1,
						s: g,
						c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
						f: 0,
						r: o && 4 > o
					}), m += k.length;
					return n += b.substr(m), n && l.push(n), l.setRatio = L, l
				},
				N = function (a, b, c, d, e, f, g, h)
				{
					var i, j, k = "get" === c ? a[b] : c,
						l = typeof a[b],
						m = "string" == typeof d && "=" === d.charAt(1),
						n = {
							t: a,
							p: b,
							s: k,
							f: "function" === l,
							pg: 0,
							n: e || b,
							r: f,
							pr: 0,
							c: m ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0
						};
					return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), n.s = k = g ? a[j](g) : a[j]()), "string" == typeof k && (g || isNaN(k)) ? (n.fp = g, i = M(k, d, h || F.defaultStringFilter, n), n = {
						t: i,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: e || b,
						pr: 0
					}) : m || (n.s = parseFloat(k), n.c = parseFloat(d) - n.s || 0)), n.c ? ((n._next = this._firstPT) && (n._next._prev = n), this._firstPT = n, n) : void 0
				},
				O = F._internals = {
					isArray: n,
					isSelector: G,
					lazyTweens: I,
					blobDif: M
				},
				P = F._plugins = {},
				Q = O.tweenLookup = {},
				R = 0,
				S = O.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1
				},
				T = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				U = C._rootFramesTimeline = new E,
				V = C._rootTimeline = new E,
				W = 30,
				X = O.lazyRender = function ()
				{
					var a, b = I.length;
					for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
					I.length = 0
				};
			V._startTime = g.time, U._startTime = g.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function ()
			{
				var a, b, c;
				if (I.length && X(), V.render((g.time - V._startTime) * V._timeScale, !1, !1), U.render((g.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), g.frame >= W)
				{
					W = g.frame + (parseInt(F.autoSleep, 10) || 120);
					for (c in Q)
					{
						for (b = Q[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
						0 === b.length && delete Q[c]
					}
					if (c = V._first, (!c || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length)
					{
						for (; c && c._paused;) c = c._next;
						c || g.sleep()
					}
				}
			}, g.addEventListener("tick", C._updateRoot);
			var Y = function (a, b, c)
				{
					var d, e, f = a._gsTweenID;
					if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {
							target: a,
							tweens: []
						}), b && (d = Q[f].tweens, d[e = d.length] = b, c))
						for (; --e > -1;) d[e] === b && d.splice(e, 1);
					return Q[f].tweens
				},
				Z = function (a, b, c, d)
				{
					var e, f, g = a.vars.onOverwrite;
					return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
				},
				$ = function (a, b, c, d, e)
				{
					var f, g, h, i;
					if (1 === d || d >= 4)
					{
						for (i = e.length, f = 0; i > f; f++)
							if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
							else if (5 === d) break;
						return g
					}
					var j, l = b._startTime + k,
						m = [],
						n = 0,
						o = 0 === b._duration;
					for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && l - h._startTime <= 2e-10 || (m[n++] = h)));
					for (f = n; --f > -1;)
						if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted)
						{
							if (2 !== d && !Z(h, b)) continue;
							h._enabled(!1, !1) && (g = !0)
						}
					return g
				},
				_ = function (a, b, c)
				{
					for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;)
					{
						if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
						d = d._timeline
					}
					return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
				};
			f._init = function ()
			{
				var a, b, c, d, e, f = this.vars,
					g = this._overwrittenProps,
					h = this._duration,
					i = !!f.immediateRender,
					j = f.ease;
				if (f.startAt)
				{
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
					for (d in f.startAt) e[d] = f.startAt[d];
					if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
						if (this._time > 0) this._startAt = null;
						else if (0 !== h) return
				}
				else if (f.runBackwards && 0 !== h)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else
					{
						0 !== this._time && (i = !1), c = {};
						for (d in f) S[d] && "autoCSS" !== d || (c[d] = f[d]);
						if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i)
						{
							if (0 === this._time) return
						}
						else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					}
				if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
				else b = this._initProps(this.target, this._propLookup, this._siblings, g);
				if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
					for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
				this._onUpdate = f.onUpdate, this._initted = !0
			}, f._initProps = function (b, c, d, e)
			{
				var f, g, h, i, j, k;
				if (null == b) return !1;
				J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);
				for (f in this.vars)
					if (k = this.vars[f], S[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("")
						.indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
					else if (P[f] && (i = new P[f])
					._onInitTween(b, this.vars[f], this))
				{
					for (this._firstPT = j = {
							_next: this._firstPT,
							t: i,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: f,
							pg: 1,
							pr: i._priority
						}, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
					(i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0), j._next && (j._next._prev = j)
				}
				else c[f] = N.call(this, b, f, "get", k, f, 0, null, this.vars.stringFilter);
				return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
			}, f.render = function (a, b, c)
			{
				var d, e, f, g, h = this._time,
					i = this._duration,
					j = this._rawPrevTime;
				if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === k && "isPause" !== this.data) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
				else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
				else if (this._totalTime = this._time = a, this._easeType)
				{
					var l = a / i,
						m = this._easeType,
						n = this._easePower;
					(1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), 1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / i ? this.ratio = l / 2 : this.ratio = 1 - l / 2
				}
				else this.ratio = this._ease.getRatio(a / i);
				if (this._time !== h || c)
				{
					if (!this._initted)
					{
						if (this._init(), !this._initted || this._gc) return;
						if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
						this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
					this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
				}
			}, f._kill = function (a, b, c)
			{
				if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
				var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
				if ((n(b) || G(b)) && "number" != typeof b[0])
					for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
				else
				{
					if (this._targets)
					{
						for (d = this._targets.length; --d > -1;)
							if (b === this._targets[d])
							{
								h = this._propLookup[d] ||
								{}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] ||
								{} : "all";
								break
							}
					}
					else
					{
						if (b !== this.target) return !1;
						h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps ||
						{} : "all"
					}
					if (h)
					{
						if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite))
						{
							for (f in j) h[f] && (l || (l = []), l.push(f));
							if ((l || !a) && !Z(this, c, b, l)) return !1
						}
						for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return i
			}, f.invalidate = function ()
			{
				return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ?
				{} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
			}, f._enabled = function (a, b)
			{
				if (h || g.wake(), a && this._gc)
				{
					var c, d = this._targets;
					if (d)
						for (c = d.length; --c > -1;) this._siblings[c] = Y(d[c], this, !0);
					else this._siblings = Y(this.target, this, !0)
				}
				return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
			}, F.to = function (a, b, c)
			{
				return new F(a, b, c)
			}, F.from = function (a, b, c)
			{
				return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
			}, F.fromTo = function (a, b, c, d)
			{
				return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
			}, F.delayedCall = function (a, b, c, d, e)
			{
				return new F(b, 0,
				{
					delay: a,
					onComplete: b,
					onCompleteParams: c,
					callbackScope: d,
					onReverseComplete: b,
					onReverseCompleteParams: c,
					immediateRender: !1,
					lazy: !1,
					useFrames: e,
					overwrite: 0
				})
			}, F.set = function (a, b)
			{
				return new F(a, 0, b)
			}, F.getTweensOf = function (a, b)
			{
				if (null == a) return [];
				a = "string" != typeof a ? a : F.selector(a) || a;
				var c, d, e, f;
				if ((n(a) || G(a)) && "number" != typeof a[0])
				{
					for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
					for (c = d.length; --c > -1;)
						for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
				}
				else
					for (d = Y(a)
						.concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
				return d
			}, F.killTweensOf = F.killDelayedCallsTo = function (a, b, c)
			{
				"object" == typeof b && (c = b, b = !1);
				for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
			};
			var aa = r("plugins.TweenPlugin", function (a, b)
			{
				this._overwriteProps = (a || "")
					.split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype
			}, !0);
			if (f = aa.prototype, aa.version = "1.18.0", aa.API = 2, f._firstPT = null, f._addTween = N, f.setRatio = L, f._kill = function (a)
				{
					var b, c = this._overwriteProps,
						d = this._firstPT;
					if (null != a[this._propName]) this._overwriteProps = [];
					else
						for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
					for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
					return !1
				}, f._roundProps = function (a, b)
				{
					for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_")
						.join("")]) && (c.r = b), c = c._next
				}, F._onPluginEvent = function (a, b)
				{
					var c, d, e, f, g, h = b._firstPT;
					if ("_onInitAllProps" === a)
					{
						for (; h;)
						{
							for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
							(h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
						}
						h = b._firstPT = e
					}
					for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
					return c
				}, aa.activate = function (a)
				{
					for (var b = a.length; --b > -1;) a[b].API === aa.API && (P[(new a[b])
						._propName] = a[b]);
					return !0
				}, q.plugin = function (a)
				{
					if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
					var b, c = a.propName,
						d = a.priority || 0,
						e = a.overwriteProps,
						f = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_roundProps",
							initAll: "_onInitAllProps"
						},
						g = r("plugins." + c.charAt(0)
							.toUpperCase() + c.substr(1) + "Plugin",
							function ()
							{
								aa.call(this, c, d), this._overwriteProps = e || []
							}, a.global === !0),
						h = g.prototype = new aa(c);
					h.constructor = g, g.API = a.API;
					for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
					return g.version = a.version, aa.activate([g]), g
				}, d = a._gsQueue)
			{
				for (e = 0; e < d.length; e++) d[e]();
				for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
			}
			h = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var renderer, hasBonus = !0;
$(function ()
	{
		var a = "assets/img/",
			b = "assets/videos/",
			c = "assets/sounds/",
			d = y,
			e = z,
			f = 1280,
			g = 720,
			h = 0,
			j = 0,
			k = {
				img: a + "logo_retro_minder.png",
				calmDownTM: null,
				chgTM1: null,
				chgTM2: null
			};
		k.init = function ()
		{
			this.load()
		}, k.load = function ()
		{
			k.createStage()
		}, k.createFilters = function ()
		{
			var b = this;
			b.displacementSprite = PIXI.Sprite.fromImage(a + "textures/displacment_12_reverse.png"), b.displacementFullSprite = PIXI.Sprite.fromImage(a + "textures/largedisplacment_reverse.png"), b.displacementFilter = new PIXI.filters.DisplacementFilter(b.displacementSprite), b.displacementFullFilter = new PIXI.filters.DisplacementFilter(b.displacementFullSprite), b.stage.addChild(b.displacementSprite), b.stage.addChild(b.displacementFullSprite), b.rgbFilter = new PIXI.filters.RGBSplitFilter, b.rgbFilter.blue.y = b.rgbFilter.green.y = b.rgbFilter.red.y = 0, b.brightFilter = new PIXI.filters.ColorMatrixFilter, b.pixelateFilter = new PIXI.filters.PixelateFilter, b.pixelateFilter.size.x = 1, b.pixelateFilter.size.y = 1
		}, k.createStage = function ()
		{
			var a = this;
			if (a.isEndScreen = !1, a.screenFrame1 = !1, a.screenFrame2 = !1, B || C) renderer = new PIXI.CanvasRenderer(d, e,
			{
				resolution: 1
			}), hasBonus = B;
			else
			{
				renderer = new PIXI.autoDetectRenderer(d, e,
				{
					resolution: 1
				});
				var b = renderer.gl,
					c = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
				b.getParameter(b.MAX_VIEWPORT_DIMS);
				(4096 >= c || "Chrome" == x.browser && x.version < 50) && (hasBonus = !1)
			}
			$(".site-ct")
				.append(renderer.view), a.isIntroducing = !1, a.resizableElements = [], a.stage = new PIXI.Container, a.tvContainer = new PIXI.Container, a.framesMask = new PIXI.Container, a.stage.addChild(a.framesMask), a.resize(), a.createFilters(), a.tvContainer.filters = [a.rgbFilter], a.introductionScreen(), a.stage.addChild(a.tvContainer), $(window)
				.on("resize", function ()
				{
					a.resizeAfterLoad()
				})
		}, k.resizeAfterLoad = function ()
		{
			var a, b, c, d;
			y = $(window)
				.width(), z = $(window)
				.height(), a = y, b = j / h * y, z > b && (b = z, a = h / j * z), c = (y - a) / 2, d = (z - b) / 2, $("body canvas")
				.css(
				{
					width: a,
					height: b,
					position: "absolute",
					marginLeft: c,
					marginTop: d
				})
		}, k.resize = function ()
		{
			var a, b, c, i, k = this;
			y = $(window)
				.width(), z = $(window)
				.height(), d = y, e = z, a = d, b = g / f * d, e > b && (b = e, a = f / g * e), c = (d - a) / 2, i = (e - b) / 2, k.tvContainer.width = a, k.tvContainer.height = b, k.tvContainer.position.x = k.tvContainer.getLocalBounds()
				.x + c, k.tvContainer.position.y = k.tvContainer.getLocalBounds()
				.y + i, renderer.resize(d, e), h = d, j = e
		}, k.createScreen = function (a)
		{
			for (var b = this, c = new PIXI.Container, f = new PIXI.Container, g = new PIXI.Container, h = [g, f], i = 0; 1 > i; i++)
			{
				var j = PIXI.Sprite.fromImage(b.img);
				j.width = d, j.height = e, h[i].addChild(j);
				var k = PIXI.Sprite.fromImage(b.img);
				k.width = d, k.height = e, h[i].addChild(k), b.resizableElements.push(j), b.resizableElements.push(k), u.isRunning, h[i].filters = [b.displacementFilter, b.displacementFullFilter], c.addChild(h[i])
			}
			return c = b.addFrameMask(c, a)
		}, k.addFrameMask = function (a, b)
		{
			var c = this,
				f = 5,
				g = new PIXI.Graphics;
			c.tvContainer.addChild(g), g.lineStyle(0), g.beginFill(16777215), g.moveTo(0, 0);
			for (var h = 0; h < Math.round(e / f); h++) g.drawRect(0, f * h, d, f / 2);
			if (g.endFill(), g.isMask = !0, b)
			{
				g.position.y = f / 2;
				var i = new PIXI.filters.ColorMatrixFilter;
				i.brightness(1.5), a.filters = [i]
			}
			return a.mask = g, a
		}, k.createNoise = function ()
		{
			var b = this,
				c = PIXI.Texture.fromImage(a + "textures/bignoisebg.png");
			b.tilingNoise = new PIXI.extras.TilingSprite(c, 2 * d, 2 * e), b.tilingNoise.alpha = 1, b.tilingNoise.blendMode = PIXI.BLEND_MODES.DIFFERENCE, b.tilingNoise.filters = [b.rgbFilter], b.stage.addChild(b.tilingNoise)
		}, k.createAnswerScreen = function ()
		{
			function b(b)
			{
				var f = PIXI.Sprite.fromImage(a + "typos/" + b + ".png");
				return f.width = 800, f.height = 400, f.position.x = d / 2 - 400, f.position.y = e / 2 - 200, f.alpha = 0, c.answerCt.addChild(f), f
			}
			var c = this;
			c.answerCt = new PIXI.Container;
			var f = new PIXI.Graphics;
			f.lineStyle(0), f.beginFill(0, .8), f.moveTo(0, 0), f.drawRect(0, 0, d, e), f.endFill(), c.answerCt.addChild(f), c.answers = {};
			for (var g = ["perfect", "amazing", "great", "wrong", "noway", "toobad", "bonus", "gameover"], h = 0; h < g.length; h++) c.answers[g[h]] = b(g[h]);
			c.answerCt.filters = [c.rgbFilter, c.brightFilter], c.answerCt.alpha = 0, c.stage.addChild(c.answerCt)
		}, k.showTypo = function (a)
		{
			var b = this;
			for (i in b.answers) b.answers[i].alpha = 0;
			b.answers[a].alpha = 1, b.answerCt.alpha = 1, E.answers[a].currentTime = 0, E.answers[a].play(), t.$game.hide(), $("body")
				.addClass("low")
		}, k.hideTypo = function ()
		{
			var a = this;
			a.answerCt.alpha = 0;
			for (i in a.answers) a.answers[i].alpha = 0;
			$("body")
				.removeClass("low"), u.isRunning && t.$game.show()
		}, k.changeCharacter = function (a)
		{
			var b = this;
			b.isInTransition = !0, E.stopSound(), a.sound && E.playCharacterSound(a.sound, !0, .8, .01), b.noiseOpacity = .3, b.stage.removeChild(b.videoTransitionSprite), b.stage.addChild(b.videoSprite), clearTimeout(b.chgTM1), clearTimeout(b.chgTM2), b.chanceJump = .3, b.jumpOffset = 700, b.jumpEffect = 20, b.rgbCoef = 1, u.isRunning ? b.chgTM1 = setTimeout(function ()
			{
				b.stage.removeChild(b.videoSprite), b.stage.addChild(b.videoTransitionSprite), b.img = a.img, b.tvContainer.removeChild(b.screenFrame1), b.tvContainer.removeChild(b.screenFrame2), b.screenFrame1 = b.createScreen(!0), b.screenFrame2 = b.createScreen(!1), b.tvContainer.addChildAt(b.screenFrame1, 0), b.tvContainer.addChildAt(b.screenFrame2, 0), v.to(b, .1,
					{
						noiseOpacity: .8,
						offset: 80,
						jumpOffset: 300,
						rgbCoef: 2,
						chanceJump: .9
					}), v.to(b, 3,
					{
						noiseOpacity: .1,
						offset: 0,
						jumpOffset: 1,
						rgbCoef: .1,
						chanceJump: 1,
						delay: .1
					}), b.hideTypo(), b.isInTransition = !1, $("body")
					.addClass("bright"), b.chgTM2 = setTimeout(function ()
					{
						$("body")
							.removeClass("bright"), b.stage.removeChild(b.videoTransitionSprite), b.stage.addChild(b.videoSprite)
					}, 2e3)
			}, 1e3) : (clearTimeout(b.calmDownTM), b.calmDownTM = setTimeout(function ()
			{
				k.calmDown()
			}, 1e3))
		}, k.calmDown = function ()
		{
			var a = this;
			a.isInTransition = !1, a.stage.removeChild(a.videoTransitionSprite), v.to(a, 1,
			{
				noiseOpacity: .05,
				offset: 0,
				jumpOffset: 1,
				rgbCoef: .1,
				chanceJump: 2
			})
		}, k.animate = function ()
		{
			function a()
			{
				if (c += .005, d++, d > 4 && (d = 0, b.screenFrame1 && (b.screenFrame1.x = b.offset + 5 * Math.random()), b.screenFrame2 && (b.screenFrame2.x = -b.offset + 5 * Math.random())), b.displacementSprite.y < e ? b.displacementSprite.y += 3 : b.displacementSprite.y = 0, b.isIntroducing || (b.displacementFullSprite.y < e && (b.displacementFullSprite.y += .5), Math.random() > .9 && (b.displacementFullSprite.y = Math.random() * e)), Math.random() > .96)
				{
					var f = "x";
					b.rgbFilter.blue[f] = 20 * Math.random() * b.rgbCoef, b.rgbFilter.green[f] = 30 * -Math.random() * b.rgbCoef, b.rgbFilter.red[f] = (60 * Math.random() - 30) * b.rgbCoef
				}
				else b.rgbFilter.blue.x -= b.rgbFilter.blue.x / 100, b.rgbFilter.green.x -= b.rgbFilter.green.x / 100, b.rgbFilter.red.x -= b.rgbFilter.red.x / 10;
				Math.random() > b.chanceJump && (b.jumpEffect = 20 * Math.random() + 10, b.jumpOffset = Math.random() * e / 3), b.jumpEffect > 0 ? (b.tvContainer.position.y = b.jumpOffset, b.jumpEffect--) : b.tvContainer.position.y = 0, b.tilingNoise.alpha = b.noiseOpacity, b.tilingNoise.tilePosition.x += 500, b.tilingNoise.tilePosition.y += 500;
				var g = Math.random();
				g > .9 ? b.brightFilter.brightness(.2) : g > .5 ? b.brightFilter.brightness(1.5) : b.brightFilter.brightness(1), b.isIntroducing && k.updateIntroductionScreen(), b.welcomeTransition && k.updateWelcomeTransition(), renderer.render(b.stage), requestAnimationFrame(a), b.statsActive && stats.update()
			}
			var b = this,
				c = 0;
			b.noiseOpacity = .5, b.offset = 4, b.rgbCoef = .4, b.chanceJump = 1, b.jumpOffset = 0, b.jumpEffect = 0;
			var d = 0;
			requestAnimationFrame(a)
		}, k.showStat = function ()
		{
			this.statsActive = !0, stats = new Stats, stats.domElement.style.position = "absolute", stats.domElement.style.top = "0px", stats.domElement.style.zIndex = "10000", document.body.appendChild(stats.domElement)
		}, k.updateIntroductionScreen = function ()
		{
			var a = this;
			a.tvContainer.alpha = Math.min(1, a.tvContainer.alpha + .1)
		}, k.introductionScreen = function ()
		{
			var a = this;
			a.tvContainer.alpha = 0;
			var f = $("#loader-lines"),
				g = $("#loading-screen"),
				h = 0,
				i = new PIXI.loaders.Loader;
			i.add("glitchnormal", b + "normal.mp4"), i.add("glitchtransition", b + "transition.mp4");
			var j = ["", ".", "..", "..."],
				k = 0,
				l = setInterval(function ()
				{
					k = k < j.length - 1 ? k + 1 : 0, g.find("#pct-load p sub")
						.text(j[k]), 0 != k && 2 != k || g.find("#headphones")
						.toggleClass("active")
				}, 200);
			v.to(g.find("#headphones i"), 1,
			{
				opacity: 1,
				y: 0,
				scale: .7,
				delay: .5
			}), v.to(g.find("#headphones p"), 1,
			{
				opacity: 1,
				y: 0,
				delay: 1
			}), i.on("progress", function ()
			{
				h = this.progress, g.find("#pct-load span b")
					.text(Math.round(h)), 25 > h ? v.to(f.find(".bdt"), .2,
					{
						width: 100 * (1 - h / 25) + "%"
					}) : 50 > h ? (v.to(f.find(".bdt"), .2,
					{
						width: 0
					}), v.to(f.find(".bdr"), .2,
					{
						height: 100 * (1 - (h - 25) / 25) + "%"
					})) : 75 > h ? (v.to(f.find(".bdr"), .2,
					{
						height: 0
					}), v.to(f.find(".bdb"), .2,
					{
						width: 100 * (1 - (h - 50) / 25) + "%"
					})) : 100 > h && (v.to(f.find(".bdb"), .2,
					{
						width: 0
					}), v.to(f.find(".bdl"), .2,
					{
						height: 100 * (1 - (h - 75) / 25) + "%"
					}))
			}), i.once("complete", function ()
			{
				f.hide(), g.find("#pct-load p")
					.text("CHANNEL 001"), g.find("#pct-load span")
					.text("PLAY"), a.videoGlitchTransitionTexture = new PIXI.Texture(PIXI.VideoBaseTexture.fromUrl(b + "transition.mp4")), a.videoTransitionSprite = new PIXI.Sprite(a.videoGlitchTransitionTexture), a.videoTransitionSprite.width = d, a.videoTransitionSprite.height = e, a.videoTransitionSprite.blendMode = PIXI.BLEND_MODES.ADD, a.videoGlitchTransitionTexture.baseTexture.source.loop = !0, a.stage.addChild(a.videoTransitionSprite), a.videoGlitchEffectTexture = new PIXI.Texture(PIXI.VideoBaseTexture.fromUrl(b + "normal.mp4")), a.videoSprite = new PIXI.Sprite(a.videoGlitchEffectTexture), a.videoSprite.width = d, a.videoSprite.height = e, a.videoSprite.blendMode = PIXI.BLEND_MODES.ADD, a.videoGlitchEffectTexture.baseTexture.source.loop = !0, (B || C || "Chrome" == x.browser && x.version < 50) && (a.videoGlitchTransitionTexture.baseTexture.source.pause(), a.videoGlitchEffectTexture.baseTexture.source.pause(), a.videoTransitionSprite.alpha = 0, a.videoSprite.alpha = 0), a.createAnswerScreen(), a.createNoise(), setTimeout(function ()
					{
						a.welcomeTransition = !1, a.isInTransition = !1, a.isIntroducing = !0, a.screenFrame1 = a.createIntroScreen(!0), a.screenFrame2 = a.createIntroScreen(!1), a.introductionScreen = new PIXI.Container, a.introductionScreen.alpha = 0, a.introductionScreen.addChild(a.screenFrame1), a.introductionScreen.addChild(a.screenFrame2);
						e / 2 - a.screenFrame1.height / 2;
						a.tvContainer.addChild(a.introductionScreen), a.stage.removeChild(a.videoTransitionSprite), a.stage.addChild(a.videoSprite), a.animate(), a.resize(), a.introBgTexture.baseTexture.source.currentTime = 0, a.introBgTexture.baseTexture.source.play(), E.playSound(c + "effects/intro_opening.lite.mp3", !0, .8, .01), E.theme.play(), a.introductionScreen.alpha = 1, v.to(g.find("#headphones i"), .5,
						{
							opacity: 0,
							y: -30,
							scale: .7
						}), v.to(g.find("#headphones p"), .5,
						{
							opacity: 0,
							y: -30,
							delay: .2
						}), v.to(g, .1,
						{
							opacity: 0,
							delay: .5,
							onComplete: function ()
							{
								clearInterval(l)
							}
						})
					}, 1e3)
			});
			var m = document.createElement("video");
			m.src = b + "introduction.mp4", m.preload = !0, m.load(), m.onloadeddata = function ()
			{
				a.introBgTexture = new PIXI.Texture.fromVideo(m), a.introBgTexture.baseTexture.source.pause(), i.load()
			}
		}, k.updateWelcomeTransition = function ()
		{
			var a = this;
			a.welcomeTransition = !1
		}, k.createIntroScreen = function (a)
		{
			var b = this,
				c = new PIXI.Container,
				f = new PIXI.Container,
				g = new PIXI.Sprite(b.introBgTexture);
			return g.width = d, g.height = e, f.position.y = .05 * -e, f.addChild(g), b.resizableElements.push(g), c.addChild(f), c = b.addFrameMask(c, a), v.to(b, 5,
			{
				offset: .1,
				noiseOpacity: .05,
				rgbCoef: .1
			}), a && (b.introBgTexture.baseTexture.source.ontimeupdate = function ()
			{
				b.isIntroducing || this.pause(), this.currentTime > 14.5 && (this.currentTime = 10, this.play()), this.currentTime > 4 && (b.showStart || (b.showStart = !0, $("#welcome-screen")
					.fadeIn(800)))
			}), c
		};
		var l, m, n, o, p, q, r, s = function () {},
			t = {
				$welcome: $("#welcome-screen"),
				$start: $("#start-screen"),
				$game: $("#interface"),
				$end: $("#endgame"),
				$bonus: $("#bonus-screen"),
				$scores: $("#scores-screen"),
				$menu: $("#menu-screen"),
				$record: $("#savescore-screen"),
				$credits: $("#credits-screen")
			},
			u = {
				score: 0,
				nbParties: 0,
				cardsWon: [],
				cardsPack: [],
				currentCardsIdx: 0,
				duration: 90,
				partyDuration: new Date(1e4),
				isRunning: !1,
				pointsLoop: 2e3,
				maxPoints: 3e3,
				minPoints: 500,
				goods: 0,
				perfects: 0,
				wrongs: 0,
				startTime: 0,
				curTime: 0,
				diffTime: 0,
				chronoTime: 0,
				bonusPassed: !1,
				hasRecord: !1,
				numberBonus: 2,
				indexBonus: 0,
				bonusScoreInterval: 8e3,
				bonusSprites: [a + "bonus/DBZ_sprite.jpg", a + "bonus/over_sprite.jpg", a + "bonus/JCVD_sprite.jpg", a + "bonus/tmnt_sprite.jpg", a + "bonus/recall_sprite.jpg"],
				init: function ()
				{
					var a = this;
					l = $("#input"), p = $("#writer"), t.$end = $("#endgame"), m = $("#main-score"), n = $("#timer"), y = d = $(window)
						.width(), z = e = $(window)
						.height(), q = $("#fb_share"), o = $("#play"), r = $("#skip-message"), k.init(), k.loadStarScene(), $("footer")
						.hide(), a.runParty = !1, $("#start")
						.click(function ()
						{
							$("#start")
								.hide(), a.loadParty(), a.setupTuto()
						}), $("#try-again")
						.click(function ()
						{
							k.isEndScreen && a.tryAgain()
						}), $("#open-menu")
						.click(function ()
						{
							t.$menu.show()
						}), $("#close-bt")
						.click(function ()
						{
							t.$menu.hide()
						}), $("#play")
						.click(function ()
						{
							u.runParty || k.transitionSpaceScreen()
						}), $(window)
						.on("keypress keydown keyup", function (b)
						{
							a.isRunning && !l.is(":focus") && l.focus(), 13 == b.keyCode && !a.runParty && a.isTutorial && k.transitionSpaceScreen()
						}), l.keyup(function (b)
						{
							b.preventDefault(), 13 == b.keyCode && a.isRunning && (r.removeClass("active"), E.vhsClick03.currentTime = 1, E.vhsClick03.play(), a.valideAnswer())
						}), $("#record-score")
						.click(function ()
						{
							$(this)
								.hasClass("send") || ($(this)
									.addClass("send"), a.recordScore())
						}), $("#record-score")
						.addClass("send"), $("#record_score_name")
						.on("keyup", function (b)
						{
							3 == $(this)
								.val()
								.length ? $("#record-score")
								.removeClass("send") : $("#record-score")
								.addClass("send"), $(this)
								.hasClass("send") || 13 == b.keyCode && 3 == $(this)
								.val()
								.length && ($(this)
									.addClass("send"), a.recordScore())
						}), a.setInputCaret(), a.setupScoreScreen(), a.setupCreditScreen(), a.setupEndScreen()
				},
				valideAnswer: function ()
				{
					var a = this,
						b = l.val()
						.toLowerCase(),
						c = stringCompare(b, u.currentCharacter.answers, u.currentCharacter.greatanswers);
					r.removeClass("active"), "great" == c || "perfect" == c || "amazing" == c ? (u.score++, u.cardsWon.push(u.currentCharacter), u.cardsPack.splice(u.currentCardsIdx, 1), "great" == c ? a.goods++ : (a.pointsLoop += 2e3, a.perfects++), a.score += a.pointsLoop) : a.wrongs++, l.val("")
						.trigger("keydown"), u.cardsPack.length > 0 ? u.score > a.bonusScoreInterval && !a.bonusPassed && hasBonus ? (a.indexBonus++, a.indexBonus >= a.numberBonus && (a.bonusPassed = !0), a.bonusScoreInterval = 3 * a.bonusScoreInterval, k.bonusStage(function ()
						{
							u.currentCardsIdx = Math.round(Math.random() * (u.cardsPack.length - 1)), u.currentCharacter = u.cardsPack[u.currentCardsIdx], k.changeCharacter(u.currentCharacter), u.continueTime(), k.loadBonusScene(a.bonusSprites[Math.floor(a.bonusSprites.length * Math.random())])
						})) : (k.showTypo(c), u.currentCardsIdx = Math.round(Math.random() * (u.cardsPack.length - 1)), u.currentCharacter = u.cardsPack[u.currentCardsIdx], k.changeCharacter(u.currentCharacter)) : u.end(), a.pointsLoop = a.maxPoints, m.find("span")
						.text(addZero(u.score, 6))
				},
				loadParty: function ()
				{
					var a = this;
					k.welcomeTransition = !0, a.duration = 90, a.bonusScoreInterval = 8e3;
					var b = w.slice();
					shuffle(b), a.cardsPack = b.slice(0, 30), k.endScreen && k.stage.removeChild(k.endScreen);
					var c = $("#loader-lines");
					c.show(), v.set(c.find(".bdt, .bdb"),
					{
						width: "100%"
					}), v.set(c.find(".bdr, .bdl"),
					{
						height: "100%"
					});
					for (var d = 0, e = new PIXI.loaders.Loader, f = 0; f < a.cardsPack.length; f++) e.add(a.cardsPack[f].name, a.cardsPack[f].img), e.add(a.cardsPack[f].name + "sound", a.cardsPack[f].sound);
					e.on("progress", function ()
					{
						d = this.progress, $("#pct-load span")
							.text(Math.round(d)), 25 > d ? v.to(c.find(".bdt"), .2,
							{
								width: 100 * (1 - d / 25) + "%"
							}) : 50 > d ? (v.to(c.find(".bdt"), .2,
							{
								width: 0
							}), v.to(c.find(".bdr"), .2,
							{
								height: 100 * (1 - (d - 25) / 25) + "%"
							})) : 75 > d ? (v.to(c.find(".bdr"), .2,
							{
								height: 0
							}), v.to(c.find(".bdb"), .2,
							{
								width: 100 * (1 - (d - 50) / 25) + "%"
							})) : 100 > d && (v.to(c.find(".bdb"), .2,
							{
								width: 0
							}), v.to(c.find(".bdl"), .2,
							{
								height: 100 * (1 - (d - 75) / 25) + "%"
							}))
					}), e.once("complete", function ()
					{
						c.hide(), o.fadeIn(), $("body")
							.removeClass("playing")
					}), e.load(), t.$welcome && v.to(t.$welcome, 1,
					{
						opacity: 0,
						onComplete: function ()
						{
							t.$welcome.remove(), t.$welcome = null
						}
					}), v.fromTo(t.$start, 1,
					{
						opacity: 0,
						display: "block"
					},
					{
						opacity: 1,
						delay: 2
					}), v.to(k.introductionScreen, 1,
					{
						alpha: 0
					}), v.to(k.starScreen, 1,
					{
						alpha: 1,
						delay: 1,
						onComplete: function ()
						{
							a.enableScreenScore = !0, $("footer")
								.fadeIn()
						}
					}), a.isTutorial = !0, hasBonus && k.loadBonusScene(a.bonusSprites[Math.floor(a.bonusSprites.length * Math.random())])
				},
				tryAgain: function ()
				{
					var a = this;
					k.VHSIdx != u.cardsWon.length && k.VHSslide(u.cardsWon.length), k.isEndScreen = !1, l.val("")
						.trigger("keydown"), $("footer")
						.fadeOut(), v.to(t.$end, 1,
						{
							opacity: 0
						}), v.to(k.endScreen, 1,
						{
							alpha: 0,
							onComplete: function ()
							{
								t.$start.find(".vam")
									.show(), t.$start.find(".start-timeout")
									.hide()
									.text(3), v.set(t.$end,
									{
										display: "none"
									}), a.loadParty(), k.tvContainer.removeChild(k.screenFrame1), k.tvContainer.removeChild(k.screenFrame2)
							}
						}), a.handTL.pause()
				},
				setupTuto: function ()
				{
					function a()
					{
						if (b > d[c].length - 1) e.text(""), b = 0, c = c < d.length - 1 ? c + 1 : 0, $("#enter-btn")
							.addClass("pressed"), setTimeout(function ()
							{
								$("#enter-btn")
									.removeClass("pressed")
							}, 200);
						else
						{
							var f = e.text();
							e.text(f + d[c][b]), b++
						}
						setTimeout(a, 20 + 180 * Math.random())
					}
					var b = 0,
						c = 0,
						d = ["Tom hanks", "Forrest gump"],
						e = t.$start.find(".fake-input span");
					k.introBgTexture.baseTexture.source.pause(), a()
				},
				createNew: function ()
				{
					var a = this;
					a.enableScreenScore = !1, $("body")
						.addClass("playing inparty"), $("#ff-mention")
						.remove(), a.partyDuration = new Date(1e3 * a.duration), a.bonusPassed = !1, a.score = 0, a.goods = 0, a.perfects = 0, a.wrongs = 0, a.nbParties++, a.cardsWon = [], a.isRunning = !0, E.vhsClick01.play(), E.theme.pause(), l.show(), l.focus(), u.currentCardsIdx = Math.round(Math.random() * (u.cardsPack.length - 1)), u.currentCharacter = u.cardsPack[u.currentCardsIdx], k.isIntroducing = !1, k.changeCharacter(u.currentCharacter), k.tvContainer.alpha = 1, clearInterval(a.partyTimeout), clearInterval(a.winInterval), clearInterval(a.timerInterval), n.text("00:00:000"), m.find("span")
						.text("000000");
					var b = (1e3 * a.partyDuration, 0),
						c = 0,
						d = 0;
					a.startTime = new Date, a.timerInterval = setInterval(function ()
					{
						a.isPaused || (a.curTime = new Date, a.diffTime = new Date(a.curTime - a.startTime), a.chronoTime = new Date(a.partyDuration - a.diffTime), b = addZero(a.chronoTime.getMinutes(), 2), c = addZero(a.chronoTime.getSeconds(), 2), d = addZero(a.chronoTime.getMilliseconds(), 3), n.text(b + ":" + c + ":" + d), a.pointsLoop = Math.max(a.minPoints, a.pointsLoop - 5), a.pointsLoop < 1700 && 0 == l.val()
							.length && r.addClass("active"), a.chronoTime.getTime() <= 0 && (clearInterval(a.timerInterval), a.isRunning && u.end()))
					}, 10), t.$end.hide()
				},
				setupEndScreen: function ()
				{
					var a = this,
						b = t.$end.find("#show-vhs-hand");
					a.handTL = new TimelineMax(
						{
							paused: !0,
							repeat: -1,
							repeatDelay: 4
						}), a.handTL.to(b, .6,
						{
							x: -40,
							ease: Quad.easeOut,
							onComplete: function ()
							{
								a.scoreScreenActive || E.handSqueeze.play()
							}
						})
						.to(b, .8,
						{
							x: 0,
							ease: Bounce.easeOut
						})
				},
				end: function ()
				{
					var a = this;
					a.setupShare(), t.$game.fadeOut(), a.isRunning = !1, $("body")
						.removeClass("inparty"), l.val(""), t.$end.find(".total-score span")
						.text(a.score), t.$end.find(".nb-cards span")
						.text(a.cardsWon.length), t.$end.find(".perfects span")
						.text(a.perfects), t.$end.find(".goods span")
						.text(a.goods), t.$end.find(".wrongs span")
						.text(a.wrongs), a.hasRecord = a.lowRecord < a.score, k.loadEndScreen()
				},
				recordScore: function ()
				{
					var a = this;
					if (a.hasRecord)
					{
						var base32 = new Nibbler(
						{
							dataBits: 8,
							codeBits: 5,
							keyString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
							pad: "="
						});
						a.encodeScore = base32.encode(a.score.toString()), a.playerName = $("#record_score_name")
							.val(), a.playerScoreSaved = a.score;
						var b = [
						{
							name: "dbyyeh",
							value: u.encodeScore
						},
						{
							name: "name",
							value: a.playerName
						}];
						$.ajax(
						{
							url: "db/playerrecord.php",
							type: "POST",
							data: b,
							beforeSend: function () {},
							success: function (a, b, c)
							{
								v.to(t.$record, 1,
								{
									alpha: 0,
									onComplete: function ()
									{
										t.$record.css(
										{
											display: "none"
										})
									}
								}), E.fadeOutSound(E.people), k.introVHSScreen()
							},
							error: function (a, b, c)
							{
								console.log(a, b, c), submited = !1
							}
						})
					}
				},
				refreshScoreScreen: function (a)
				{
					var b = this;
					b.lowRecord = 999999, $.ajax(
					{
						url: "db/getscores.php",
						type: "POST",
						beforeSend: function () {},
						success: function (c, d, e)
						{
							var c = $.parseJSON(c),
								f = ["st", "nd", "rd", "th"];
							if (a)
							{
								t.$scores.find("#score-table")
									.empty();
								for (var g = 0; g < c.scores.length; g++)
								{
									var h = g < f.length ? f[g] : "th",
										i = $('<li><p><span class="nb">' + (g + 1) + '<i></i><i class="wh"></i><sup>' + h + '</sup></span><span class="name" data-text="' + c.scores[g][0] + '"><strong>' + c.scores[g][0] + '</strong></span><span class="score">' + c.scores[g][1] + "</span></p></li>");
									t.$scores.find("#score-table")
										.append(i), b.lowRecord = Math.min(b.lowRecord, c.scores[g][1])
								}
								a()
							}
							else
							{
								t.$scores.find("#score-table li p")
									.removeClass("active");
								for (var g = 0; g < c.scores.length; g++)
								{
									b.playerName = $("#record_score_name")
										.val(), b.playerScoreSaved = b.score;
									var h = g < f.length ? f[g] : "th",
										i = $('<span class="nb">' + (g + 1) + '<i></i><i class="wh"></i><sup>' + h + '</sup></span><span class="name" data-text="' + c.scores[g][0] + '"><strong>' + c.scores[g][0] + '</strong></span><span class="score">' + c.scores[g][1] + "</span>");
									b.playerName == c.scores[g][0] && b.playerScoreSaved == c.scores[g][1] && t.$scores.find("#score-table li")
										.eq(g)
										.find("p")
										.addClass("active"), t.$scores.find("#score-table li")
										.eq(g)
										.find("p")
										.empty()
										.append(i), b.lowRecord = Math.min(b.lowRecord, c.scores[g][1])
								}
							}
						},
						error: function (a, b, c)
						{
							console.log(a, b, c)
						}
					})
				},
				setupScoreScreen: function ()
				{
					var a = this;
					a.scrollScoreActive = !1, a.scoreScreenActive = !1, a.enableScreenScore = !1;
					var b = 120,
						c = t.$scores.find("#close-score"),
						d = setTimeout(function ()
						{
							a.isRunning || a.scoreScreenActive || !a.enableScreenScore ? d = setTimeout(function ()
							{
								a.isRunning || a.scoreScreenActive || !a.enableScreenScore || a.showScoreScreen()
							}, 1e3 * b) : a.showScoreScreen()
						}, 1e3 * b);
					$(window)
						.on("mousemove", function (b)
						{
							a.scoreScreenActive && v.set(c,
							{
								x: b.pageX,
								y: b.pageY
							})
						}), $(window)
						.on("click", function (c)
						{
							var e = $(c.target);
							e.is("#bt-scorescreen") || e.parents("#bt-scorescreen")
								.length > 0 || (a.scoreScreenActive && a.hideScoreScreen(), clearTimeout(d), d = setTimeout(function ()
								{
									clearTimeout(d), a.isRunning || a.scoreScreenActive || !a.enableScreenScore || a.showScoreScreen()
								}, 1e3 * b))
						}), $(window)
						.on("mousewheel", function (b)
						{
							if (a.scoreScreenActive && a.scrollScoreActive)
							{
								a.scoreTabTL.pause();
								var c = $(".scores-ct")
									.height() + 170 - e + 170,
									d = Math.max(-c, Math.min(0, a.scoreTabCurPos.y + b.deltaY / 2));
								v.to(t.$scores.find(".scores-ct"), .2,
								{
									y: d,
									ease: Linear.easeNone
								}), v.to(a.scoreTabCurPos, .2,
								{
									y: d,
									ease: Linear.easeNone
								})
							}
						}), a.scoreTabCurPos = {
							y: 0
						}, a.scoreTabTL = new TimelineMax(
						{
							repeatDelay: 2,
							repeat: -1,
							paused: !0
						}), a.refreshScoreScreen(function ()
						{
							t.$scores.css(
							{
								display: "block",
								opacity: 0
							});
							var b = $(".scores-ct")
								.height() + 170 - z + 170;
							a.scoreTabTL.fromTo(t.$scores.find(".scores-ct"), 1,
								{
									opacity: 0
								},
								{
									opacity: 1
								}, "start")
								.staggerFrom(t.$scores.find(".scores-ct li")
									.slice(0, 10), 1,
									{
										x: -y / 2,
										opacity: 0
									}, .1, "start",
									function ()
									{
										a.scrollScoreActive = !0
									})
								.to(a.scoreTabCurPos, b / 15,
								{
									y: -b,
									ease: Linear.easeNone
								}, "start")
								.to(t.$scores.find(".scores-ct"), b / 15,
								{
									y: -b,
									ease: Linear.easeNone
								}, "start", function ()
								{
									a.scrollScoreActive = !1
								})
								.to(t.$scores.find(".scores-ct"), 1,
								{
									opacity: 0
								})
								.to(t.$scores.find(".scores-ct"), .1,
								{
									y: 0
								})
						}), $("#bt-scorescreen")
						.click(function ()
						{
							a.isRunning || a.scoreScreenActive || !a.enableScreenScore || (clearTimeout(d), a.showScoreScreen())
						})
				},
				showScoreScreen: function ()
				{
					var a = this;
					!a.scoreScreenActive && a.enableScreenScore && (a.refreshScoreScreen(), a.scoreScreenActive = !0, a.scrollScoreActive = !1, $("body")
						.addClass("nocursor"), $("footer")
						.fadeOut(), a.hideAllScreens(), k.tvContainer && v.to(k.tvContainer, 1,
						{
							alpha: 0
						}), k.endScreen && v.to(k.endScreen, 1,
						{
							alpha: 0
						}), v.to(k.starScreen, 1,
						{
							alpha: 1,
							delay: 1,
							onComplete: function ()
							{
								t.$scores.css(
								{
									display: "block",
									opacity: 1
								}), a.scoreTabTL.restart()
							}
						}))
				},
				hideScoreScreen: function ()
				{
					var a = this;
					$("footer")
						.fadeIn(), $("body")
						.removeClass("nocursor"), v.to(t.$scores, 1,
						{
							alpha: 0,
							onComplete: function ()
							{
								t.$scores.hide()
							}
						}), a.isTutorial ? v.fromTo(t.$start, 1,
						{
							opacity: 0,
							display: "block"
						},
						{
							opacity: 1
						}) : k.isEndScreen ? (v.to(k.starScreen, 1,
						{
							alpha: 0
						}), v.to(k.endScreen, 1,
						{
							alpha: 1
						}), v.to(t.$end, 1,
						{
							opacity: 1,
							display: "block"
						})) : (v.to(k.starScreen, 1,
						{
							alpha: 0
						}), v.to(k.tvContainer, 1,
						{
							alpha: 1
						}), v.fromTo(t.$welcome, 1,
						{
							opacity: 0,
							display: "block"
						},
						{
							opacity: 1
						})), a.scoreScreenActive = !1
				},
				setupCreditScreen: function ()
				{
					var a = this;
					a.creditScreenActive = !1;
					var b = t.$credits.find("#close-credits");
					$(window)
						.on("mousemove", function (c)
						{
							a.creditScreenActive && v.set(b,
							{
								x: c.pageX,
								y: c.pageY
							})
						}), $(window)
						.on("click", function (b)
						{
							var c = $(b.target);
							c.is("#bt-credits") || c.parents("#bt-credits")
								.length > 0 || a.creditScreenActive && a.hideCreditScreen()
						}), $("#bt-credits")
						.click(function ()
						{
							a.enableScreenScore && a.showCreditScreen()
						})
				},
				showCreditScreen: function ()
				{
					var a = this;
					a.creditScreenActive || ($("footer")
						.fadeOut(), a.creditScreenActive = !0, a.enableScreenScore = !1, $("body")
						.addClass("nocursor"), a.hideAllScreens(), k.tvContainer && v.to(k.tvContainer, 1,
						{
							alpha: 0
						}), k.endScreen && v.to(k.endScreen, 1,
						{
							alpha: 0
						}), v.to(k.starScreen, 1,
						{
							alpha: 1,
							onComplete: function ()
							{
								t.$credits.css(
								{
									display: "block",
									opacity: 1
								}), v.staggerFrom(t.$credits.find("h2, p"), 1,
								{
									opacity: 0,
									y: 30
								}, .1)
							}
						}))
				},
				hideCreditScreen: function ()
				{
					var a = this;
					$("footer")
						.fadeIn(), $("body")
						.removeClass("nocursor"), v.to(t.$credits, 1,
						{
							alpha: 0,
							onComplete: function ()
							{
								t.$credits.hide()
							}
						}), a.isTutorial ? v.fromTo(t.$start, 1,
						{
							opacity: 0,
							display: "block"
						},
						{
							opacity: 1,
							delay: 1
						}) : k.isEndScreen ? (v.to(k.starScreen, 1,
						{
							alpha: 0
						}), v.to(k.endScreen, 1,
						{
							alpha: 1,
							delay: 1
						}), v.to(t.$end, 1,
						{
							opacity: 1,
							display: "block"
						})) : (v.to(k.starScreen, 1,
						{
							alpha: 0
						}), v.to(k.tvContainer, 1,
						{
							alpha: 1,
							delay: 1
						}), v.fromTo(t.$welcome, 1,
						{
							opacity: 0,
							display: "block"
						},
						{
							opacity: 1,
							delay: 1
						})), a.creditScreenActive = !1, a.enableScreenScore = !0
				},
				setInputCaret: function ()
				{
					function a(a, b)
					{
						b = b || window.event;
						var c = p[0],
							d = a.value;
						c.innerHTML = d
					}

					function b(a, b)
					{
						b = b || window.event;
						var e = b.keyCode || b.which;
						37 == e && parseInt(c.style.left) >= 0 - (a - 1) * d ? c.style.left = parseInt(c.style.left) - d + "px" : 39 == e && parseInt(c.style.left) + d <= 0 && (c.style.left = parseInt(c.style.left) + d + "px")
					}
					var c;
					c = document.getElementById("cursor"), c.style.left = "0px", l.on("keydown", function (c)
					{
						p.hasClass("glance") && p.removeClass("glance")
							.find("b")
							.remove(), a(this, c), b(this.value.length, c)
					}), l.on("keyup keypress", function (b)
					{
						a(this, b)
					});
					var d = 68
				},
				testEndScreen: function ()
				{
					u.cardsWon = w.slice(0, 20), k.loadEndScreen()
				},
				pauseTime: function ()
				{
					var a = this;
					a.isPaused = !0, a.pauseStartTime = new Date
				},
				continueTime: function ()
				{
					var a = this;
					a.curTime = new Date, a.diffTime = new Date(a.curTime - a.pauseStartTime), a.partyDuration = new Date(1e3 * (a.duration + a.diffTime.getSeconds() + k.bonusTimeResult)), a.duration = a.partyDuration.getTime() / 1e3, a.isPaused = !1
				},
				hideAllScreens: function ()
				{
					var a = this;
					a.isTutorial ? v.to(t.$start, 1,
					{
						opacity: 0,
						onComplete: function ()
						{
							t.$start.hide()
						}
					}) : k.isEndScreen && v.to(t.$end, 1,
					{
						opacity: 0,
						onComplete: function ()
						{
							t.$end.hide()
						}
					})
				},
				setupShare: function ()
				{
					var a = this;
					$("#share-tw-c iframe")
						.remove();
					var b = "I've found " + a.cardsWon.length + " characters on the Retrominder, try to beat me !";
					q.off("click", s), s = function ()
						{
							FB.ui(
							{
								method: "feed",
								name: b,
								link: "http://www.retrominder.tv",
								picture: "http://www.retrominder.tv/assets/img/retrominder_fb.jpg",
								caption: "Retrominder",
								description: "90 seconds to test your videotape culture !"
							}, function (a) {})
						}, q.on("click", s), "undefined" == typeof twttr ? $("share-tw-c")
						.hide() : twttr.widgets.createShareButton("http://www.retrominder.tv", document.getElementById("share-tw-c"),
						{
							text: b,
							size: "large",
							count: "none"
						})
				}
			};
		k.loadBonusScene = function (a)
		{
			function b(a, b)
			{
				c.bonusResources = b
			}
			var c = this,
				d = new PIXI.loaders.Loader;
			d.add("bonusSprite", a), d.load(b)
		}, k.bonusStage = function (a)
		{
			var b = this;
			u.pauseTime(), b.isRunning = !0, b.isIntroducing = !1, b.tvContainer.removeChild(b.screenFrame1), b.tvContainer.removeChild(b.screenFrame2), b.bonusScreen = new PIXI.Container, b.tvContainer.addChild(b.bonusScreen), b.showTypo("bonus");
			var c = !1;
			setTimeout(function ()
			{
				function f()
				{
					j.css(
					{
						height: h + "%"
					});
					var a = Math.round(h / 100 * b.bonusSprite.totalFrames);
					b.bonusSprite.gotoAndStop(a), h >= 100 && g()
				}

				function g()
				{
					c = !1, clearInterval(q), b.bonusSprite.gotoAndPlay(0), b.bonusSprite.animationSpeed = .3, t.$bonus.hide(), i = !1;
					var f = "";
					b.bonusTimeResult = h / 10 + parseInt(n), f = h >= 70 ? "amazing" : h > 20 ? "great" : "toobad", E.fadeOutSound(E.people), E.fadeOutSound(E.theme), E.letsplay.currentTime = 0, E.letsplay.play(), b.bonusTimeScore = new PIXI.Text("+" + Math.round(k.bonusTimeResult),
					{
						font: "150px Abduction",
						fill: 16777215
					});
					var g = new PIXI.filters.BlurFilter;
					g.passes = 3, g.blur = 3, b.bonusTimeScore.filters = [k.rgbFilter, g], b.bonusScreen.addChild(b.bonusTimeScore);
					var j = new PIXI.Text("SEC",
					{
						font: "40px Abduction",
						fill: 16777215
					});
					j.position.x = b.bonusTimeScore.width - 5, j.position.y = b.bonusTimeScore.height - j.height - 10, b.bonusTimeScore.addChild(j), b.bonusTimeScore.position.x = d / 2 - b.bonusTimeScore.width / 2 - 40, b.bonusTimeScore.position.y = e / 2 - b.bonusTimeScore.height / 2, setTimeout(function ()
					{
						b.showTypo(f), b.tvContainer.removeChild(b.bonusScreen), a()
					}, 2e3)
				}
				b.hideTypo(), b.answerCt.removeChild(b.bonusMessage), t.$bonus.show()
					.find(".bonus-message")
					.show(), t.$game.hide(), b.bonusSprite = k.createBonusSprite(), b.bonusSprite.width = d, b.bonusSprite.height = e, b.bonusScreen.addChild(b.bonusSprite), b.bonusScreen.filters = [b.displacementFilter, b.displacementFullFilter], b.calmDown(), E.characterSd && E.characterSd.pause(), E.people.currentTime = 0, E.people.volume = 1, E.people.play(), E.theme.currentTime = 47, E.fadeInSound(E.theme);
				var h = 0,
					i = !0,
					j = $("#jauge-ct .jauge-cache"),
					l = $("#space-btn"),
					m = $("#bonus-timeout");
				m.text(""), c = !0, $(document)
					.keyup(function (a)
					{
						32 == a.keyCode && i && c && (t.$bonus.find(".bonus-message")
							.hide(), l.removeClass("pressed"), h += 3, f())
					}), $(document)
					.keydown(function (a)
					{
						32 == a.keyCode && i && l.addClass("pressed")
					});
				var n = 0,
					o = new Date(8e3),
					p = new Date,
					q = setInterval(function ()
					{
						var a = new Date,
							b = new Date(a - p),
							c = new Date(o - b);
						n = addZero(c.getSeconds(), 2), m.text(n), h -= 1, f(), c.getTime() <= 0 && (n = 0, g())
					}, 100)
			}, 1e3)
		}, k.createBonusSprite = function ()
		{
			for (var a = this, b = [], c = 0; 12 > c; c++)
			{
				var d = new PIXI.Texture(a.bonusResources.bonusSprite.texture, new PIXI.Rectangle(0, 360 * c, 640, 360));
				b.push(d)
			}
			var e = new PIXI.extras.MovieClip(b);
			return e.animationSpeed = 0, e.gotoAndStop(0), e
		}, k.loadEndScreen = function ()
		{
			function b(a, b)
			{
				c.K7resources = b, k.setupEndScreen()
			}
			for (var c = this, d = new PIXI.loaders.Loader, e = 1; 5 > e; e++) d.add("sp_K7_" + e, a + "K7/sprite_K7_" + e + ".png"), d.add(a + "K7/K7_" + e + ".png");
			d.load(b)
		}, k.createTVSprite = function (a)
		{
			for (var b = this, c = [], d = 0; 3 > d; d++)
			{
				var e = new PIXI.Texture(b.K7resources["sp_K7_" + a].texture, new PIXI.Rectangle(0, 214 * d, 382, 214));
				c.push(e)
			}
			var f = new PIXI.extras.MovieClip(c);
			return f.animationSpeed = 1, f
		}, k.setupEndScreen = function ()
		{
			function c()
			{
				var a = Math.random() > .7 ? Math.random() + 1 : 10 * Math.random() + 10;
				v.to(f.lensFlare, .5,
				{
					alpha: Math.random()
				}), v.to(f.starsBG, .5,
				{
					alpha: Math.random()
				}), setTimeout(function ()
				{
					c()
				}, 10 * a)
			}
			var f = this;
			f.baseColor = "0x53C0EF", f.isEndScreen = !0, f.isEndScreenScroll = !0, f.endScreen = new PIXI.Container, f.scoreScreen = new PIXI.Container, f.BGendScreen = new PIXI.Container, f.vhsFullCt = new PIXI.Container, f.vhsContainer = new PIXI.Container, f.VHSDirection = -1.5, f.vhsFullCt.addChild(f.vhsContainer), f.vhsFullCt.position.x = 0, f.vhsFullCt.position.y = 0, f.vhsFullCt.width = d, f.vhsFullCt.height = e, f.curVHS = null, f.endScreen.addChild(f.BGendScreen), f.endScreen.addChild(f.scoreScreen), f.stage.addChild(f.displacementSprite);
			var g = new PIXI.filters.BlurFilter;
			g.passes = 7, g.blur = 7;
			var h = new PIXI.filters.BlurFilter;
			h.blur = 100, h.passes = 10;
			var i = new PIXI.Sprite.fromImage("assets/img/test/mask.jpg");
			i.width = d, i.height = e, f.scoreScreen.addChild(i), f.scoreNb = new PIXI.Text(0,
			{
				font: "228px Abduction",
				fill: 16777215
			}), f.scoreNb.position.x = 200, f.scoreNb.position.y = 120, f.scoreNb.width = 300, f.scoreNb.alpha = .9, f.scoreNb.mask = i, f.scoreScreen.addChild(f.scoreNb), f.scoreNbShadow = new PIXI.Text(0,
			{
				font: "228px Abduction",
				fill: 16777215
			}), f.scoreNbShadow.position.x = 200, f.scoreNbShadow.position.y = 120, f.scoreNbShadow.width = 300, f.scoreNbShadow.alpha = .5, f.scoreNbShadow.mask = i, f.scoreScreen.addChild(f.scoreNbShadow), f.scoreNbShadow.filters = [h], f.scoreValue = new PIXI.Text(u.score,
			{
				font: "35px Abduction",
				fill: 16777215
			}), f.scoreValue.position.x = d - 360, f.scoreValue.position.y = 200, f.scoreScreen.addChild(f.scoreValue);
			var j = new PIXI.Text("PTS",
			{
				font: "18px Abduction",
				fill: 16777215
			});
			j.position.x = f.scoreValue.width + 14, j.position.y = 3, f.scoreValue.addChild(j), f.scoreValue.text = 0, f.scoreValue.filters = [g], f.endScreen.addChild(f.vhsFullCt), f.BGendScreen.filters = [f.testDisplacmentFilter], f.blueBG = new PIXI.Sprite.fromImage(a + "bg/fond_bleu.jpg"), f.blueBG.position.x = 0, f.blueBG.position.y = 0, f.blueBG.width = d, f.blueBG.height = e, f.BGendScreen.addChild(f.blueBG), f.starsBG = new PIXI.Sprite.fromImage(a + "bg/stars.png"), f.starsBG.position.x = 0, f.starsBG.position.y = 0, f.starsBG.width = d, f.starsBG.height = e, f.BGendScreen.addChild(f.starsBG);
			var l = new PIXI.Sprite.fromImage(a + "bg/ambiance_mask.jpg");
			l.width = d, l.height = e, f.scoreScreen.addChild(l), f.bgGradient = new PIXI.Graphics, f.bgGradient.beginFill(f.baseColor), f.bgGradient.drawRect(0, 0, d, e), f.bgGradient.tintIdx = 0, f.bgGradient.mask = l, f.bgGradient.alpha = .2, f.BGendScreen.addChild(f.bgGradient), f.gridSprite = k.createGridSprite(), f.gridSprite.width = d, f.gridSprite.height = 1280 / d * 350, f.gridSprite.position.x = 0, f.gridSprite.position.y = e - f.gridSprite.height, f.gridSprite.blendMode = PIXI.BLEND_MODES.ADD, f.gridSprite.alpha = .5, f.gridSprite.play(), f.gridMask = new PIXI.Graphics, f.gridMask.beginFill(16777215), f.gridMask.beginFill(f.baseColor), f.gridMask.drawRect(0, 0, f.gridSprite.width, f.gridSprite.position.y - 30), f.gridMask.position.x = f.gridSprite.position.x, f.gridMask.position.y = f.gridSprite.position.y + 30, f.BGendScreen.addChild(f.gridMask), f.gridSprite.mask = f.gridMask, f.BGendScreen.addChild(f.gridSprite), f.BGendScreen.addChild(f.gridSprite), f.shadowBG = new PIXI.Sprite.fromImage(a + "bg/ombre.png"), f.shadowBG.position.x = 0, f.shadowBG.position.y = 0, f.shadowBG.width = d, f.shadowBG.height = e;
			for (var m = 0; m < u.cardsWon.length; m++)
			{
				var n = k.createVHS(.5 * d * m, u.cardsWon[m]);
				f.vhsContainer.addChild(n)
			}
			f.endScreen.visible = !0, f.smokeVideo = new PIXI.Texture.fromVideo(b + "fumee.mp4"), f.smokeVideoSprite = new PIXI.Sprite(f.smokeVideo), f.smokeVideoSprite.width = d, f.smokeVideoSprite.height = e, f.smokeVideoSprite.blendMode = PIXI.BLEND_MODES.ADD, f.smokeVideoSprite.tint = f.baseColor, f.smokeVideo.baseTexture.source.loop = !0, f.endScreen.addChild(f.smokeVideoSprite), f.topMask = new PIXI.Graphics, f.topMask.beginFill(f.baseColor), f.topMask.drawRect(0, 0, d, e), f.topMask.tintIdx = 0, f.topMask.mask = l, f.topMask.alpha = .1, f.endScreen.addChild(f.topMask), f.blurXFilter = new PIXI.filters.BlurFilter, f.blurXFilter.blurX = 0, f.blurXFilter.blurY = 0, f.vhsFullCt.filters = [f.blurXFilter], f.lensFlare = new PIXI.Container, f.lensFlare.addChild(new PIXI.Sprite.fromImage(a + "bg/lens_part_3.png")), f.lensFlare.addChild(new PIXI.Sprite.fromImage(a + "bg/lens_part_1.png")), f.lensFlare.addChild(new PIXI.Sprite.fromImage(a + "bg/lens_part_2.png"));
			for (var m = 0; m < f.lensFlare.children.length; m++) f.lensFlare.children[m].width = d, f.lensFlare.children[m].height = e, f.lensFlare.children[m].originalScale = {
				x: d / 1280,
				y: e / 720
			}, f.lensFlare.children[m].alpha = 1, f.lensFlare.children[m].tint = f.baseColor;
			f.endScreen.addChild(f.lensFlare), c(), f.rgbCoef = .1, f.endScreen.filters = [f.rgbFilter, f.displacementFilter], f.endScreen.alpha = 0, k.createVHSnav(), f.addLightFrames(f.endScreen), f.stage.addChildAt(f.endScreen, 2), k.endScreenSetupAction(), k.endScreenOpening(), v.set(t.$end,
			{
				display: "block",
				opacity: 1
			}), v.set(t.$end.find(".scoring"),
			{
				opacity: 0,
				x: .6 * d
			}), v.set(t.$end.find("#back-to-end"),
			{
				opacity: 0,
				x: .4 * -d
			})
		}, k.endScreenOpening = function ()
		{
			var a = this;
			a.tvContainer.alpha = 0, a.VHSIdx = u.cardsWon.length, E.characterSd && E.characterSd.pause(), clearTimeout(a.chgTM1), clearTimeout(a.chgTM2), a.showTypo("gameover"), a.stage.removeChild(a.videoTransitionSprite), a.stage.addChild(a.videoSprite), a.noiseOpacity = .15, a.offset = 0, a.jumpOffset = 0, a.rgbCoef = .1, u.hasRecord && (a.scoreScreen.alpha = 0, a.vhsContainer.position.x = d), v.to(a.endScreen, 1,
			{
				alpha: 1,
				delay: 3
			}), v.to(a.answerCt, 1,
			{
				alpha: 0,
				delay: 3,
				onComplete: function ()
				{
					a.hideTypo(), t.$game.hide(), u.hasRecord ? (t.$record.find("#record_score_name")
						.val(""), v.fromTo(t.$record, 1,
						{
							alpha: 0
						},
						{
							alpha: 1,
							display: "block",
							onComplete: function ()
							{
								t.$record.find("#record_score_name")
									.focus()
							}
						}), E.people.volume = 1, E.people.currentTime = 0, E.people.play()) : k.introVHSScreen()
				}
			}), setTimeout(function ()
			{
				E.endtheme.volume = 1, E.endtheme.currentTime = 0, E.endtheme.play()
			}, 3e3)
		}, k.introVHSScreen = function ()
		{
			var a = this,
				b = (-3.3 * u.cardsWon.length, u.cardsWon.length * -.8),
				c = (u.cardsWon.length - 1) * (d / 2) + 273,
				e = Math.max(1, Math.min(8, .2 * u.cardsWon.length));
			v.to(a.scoreScreen, .3,
			{
				alpha: 1
			});
			var f = setInterval(function ()
			{
				E.scoreVHS.currentTime = 0, E.scoreVHS.play()
			}, 200);
			v.to(a.scoreValue, e,
			{
				text: u.score,
				ease: Expo.easeInOut,
				roundProps: "text",
				onComplete: function ()
				{
					$("body")
						.removeClass("playing"), clearInterval(f)
				}
			}), v.to(a.scoreNb, e,
			{
				text: u.cardsWon.length,
				ease: Expo.easeInOut,
				roundProps: "text"
			}), v.to(a.scoreNbShadow, e,
			{
				text: u.cardsWon.length,
				ease: Expo.easeInOut,
				roundProps: "text"
			}), v.to(a.vhsContainer.position, e,
			{
				x: -c,
				ease: Expo.easeInOut,
				onUpdate: function ()
				{
					for (var b = 0; b < a.vhsContainer.children.length; b++) a.vhsContainer.children[b].typo.position.x = a.vhsContainer.children[b].getLocalBounds()
						.x + a.vhsContainer.children[b].typo.position.originalX - 100 * this.progress()
				}
			}), v.to(a.blurXFilter, e / 2,
			{
				blurX: b,
				ease: Quad.easeIn
			}), v.to(a.blurXFilter, e / 2,
			{
				blurX: 0,
				ease: Quad.easeOut,
				delay: e / 2
			}), v.to(t.$end.find(".scoring"), 1,
			{
				opacity: 1,
				x: 0,
				ease: Expo.easeInOut,
				delay: .9 * e,
				onComplete: function ()
				{
					u.enableScreenScore = !0
				}
			}), v.to(a.scoreScreen, .5,
			{
				alpha: 0,
				delay: .9 * e
			}), u.handTL.restart()
		}, k.endScreenSetupAction = function ()
		{
			var a = this;
			$(document)
				.on("mousemove", function (b)
				{
					A.pos = {
						x: b.pageX,
						y: b.pageY
					}, a.isEndScreen && !u.scoreScreenActive && (A.cy = e / 2 - b.pageY, A.cx = d / 2 - b.pageX, a.onMousemove())
				}), $(window)
				.on("click", function (b)
				{
					if (a.isEndScreen && !u.scoreScreenActive && (A.pos.x < d / 3 || A.pos.x > d / 3 * 2))
					{
						var c = A.pos.x < d / 3 ? 1 : -1;
						if (c > 0 && 0 == a.VHSIdx || 0 > c && a.VHSIdx >= u.cardsWon.length) return;
						a.VHSslide(a.VHSIdx - c)
					}
				})
		}, k.VHSslide = function (a)
		{
			function b(a)
			{
				var b = parseColor(j.tint);
				c.bgGradient.clear(), c.bgGradient.beginFill(b), c.bgGradient.drawRect(0, 0, d, e), c.topMask.clear(), c.topMask.beginFill(b), c.topMask.drawRect(0, 0, d, e), c.smokeVideoSprite.tint = b
			}
			var c = this;
			if (!c.vhsSliding)
			{
				c.vhsSliding = !0;
				var f = null,
					g = null,
					h = null,
					i = a > c.VHSIdx ? -1 : 1;
				c.VHSIdx != u.cardsWon.length && (f = c.vhsContainer.children[c.VHSIdx], v.to(f.scale, .3,
				{
					y: 1,
					x: 1
				}), v.to(f.position, .3,
				{
					x: f.initialPosition.x,
					y: f.initialPosition.y
				})), c.VHSIdx > 0 && (g = c.vhsContainer.children[a - 1]), c.VHSIdx = a, 0 > i && c.VHSIdx == u.cardsWon.length ? (v.to(t.$end.find(".scoring"), 1,
				{
					opacity: 1,
					x: 0,
					ease: Expo.easeInOut
				}), v.to(t.$end.find("#vhs-navigation"), 1,
				{
					opacity: 0,
					x: .4 * -d,
					ease: Expo.easeInOut
				}), v.to(t.$end.find("#back-to-end"), 1,
				{
					opacity: 0,
					x: .6 * -d,
					ease: Expo.easeInOut
				}), u.handTL.restart(), v.to(c.scoreScreen, .5,
				{
					alpha: 0
				})) : (v.to(t.$end.find(".scoring"), 1,
				{
					opacity: 0,
					x: .4 * d,
					ease: Expo.easeInOut
				}), v.to(t.$end.find("#vhs-navigation"), 1,
				{
					opacity: 1,
					x: 0,
					ease: Expo.easeInOut
				}), u.handTL.pause(), v.to(c.scoreScreen, .5,
				{
					alpha: 1,
					delay: .5
				}), h = c.vhsContainer.children[c.VHSIdx], c.VHSIdx == u.cardsWon.length - 1 ? v.to(t.$end.find("#back-to-end"), 1,
				{
					opacity: 1,
					x: 0,
					ease: Expo.easeInOut
				}) : v.to(t.$end.find("#back-to-end"), 1,
				{
					opacity: 0,
					x: .6 * d,
					ease: Expo.easeInOut
				})), v.to(c.blurXFilter, .5,
				{
					blurX: 10,
					ease: Quad.easeIn,
					onComplete: function ()
					{
						f && (f.spriteK7.visible = !1), h && (h.spriteK7.visible = !0), c.scoreNb.text = c.VHSIdx + 1, c.scoreNbShadow.text = c.VHSIdx + 1, E.nbVHS.currentTime = 0, E.nbVHS.play(), c.$vhsPuces.removeClass("active")
							.eq(c.VHSIdx)
							.addClass("active")
					}
				});
				var j = {
						tint: f ? f.bgColor : c.baseColor.replace("0x", "#")
					},
					k = h ? h.bgColor : c.baseColor.replace("0x", "#");
				if (v.to(j, 1,
					{
						tint: k,
						onUpdateParams: [j.bgColor],
						onUpdate: b
					}), v.to(c.blurXFilter, .5,
					{
						blurX: 0,
						ease: Quad.easeOut,
						delay: .5,
						onComplete: function ()
						{
							h && (v.to(h.scale, .3,
							{
								y: 1.05,
								x: 1.05
							}), v.to(h.position, .3,
							{
								x: h.initialPosition.x - 10,
								y: h.initialPosition.y - 10
							}))
						}
					}), v.to(c.vhsContainer.position, 1,
					{
						x: -(c.VHSIdx - 1) * (d / 2) - 273,
						ease: Expo.easeInOut
					}), g && v.to(g.typo.position, 1.3,
					{
						x: g.getLocalBounds()
							.x + g.typo.position.originalX - 100,
						ease: Expo.easeInOut
					}), c.VHSIdx < u.cardsWon.length - 1)
				{
					var l = c.vhsContainer.children[c.VHSIdx + 1];
					v.to(l.typo.position, 1.3,
					{
						x: l.getLocalBounds()
							.x + l.typo.position.originalX + 100,
						ease: Expo.easeInOut
					})
				}
				h && v.to(h.typo.position, 1.3,
				{
					x: h.getLocalBounds()
						.x + h.typo.position.originalX,
					ease: Expo.easeInOut
				}), c.curVHS = h, v.to(c.starsBG.position, 1,
				{
					x: "+=" + 7 * i,
					ease: Expo.easeInOut
				}), v.to(c.starsBG.position, .8,
				{
					x: "-=" + 7 * i,
					delay: 1
				}), v.to(c.gridSprite.position, 1,
				{
					x: "+=" + 15 * i,
					ease: Expo.easeInOut
				}), v.to(c.gridSprite.position, .8,
				{
					x: "-=" + 15 * i,
					delay: 1
				}), v.to(c.scoreScreen.position, 1,
				{
					x: "+=" + 30 * i,
					ease: Expo.easeInOut
				}), v.to(c.scoreScreen.position, .8,
				{
					x: "-=" + 30 * i,
					delay: 1,
					onComplete: function ()
					{
						c.vhsSliding = !1
					}
				}), c.curVHS ? c.curVHS.character.sound && (v.to(E.endtheme, .6,
				{
					volume: .05
				}), E.playCharacterSound(c.curVHS.character.sound, !0, .8, .01)) : (E.fadeOutSound(E.characterSd), v.to(E.endtheme, .6,
				{
					volume: 1
				}))
			}
		}, k.getFramesFromSpriteSheet = function (a, b, c)
		{
			for (var d = [], e = 0; 3 * b > e; e += b)
			{
				var f = new PIXI.Texture.fromImage(a);
				f.baseTexture.frame = new PIXI.Rectangle(0, e, b, c), d.push(f.baseTexture)
			}
			return d
		}, k.createVHSnav = function ()
		{
			var a = this;
			a.$vhsNav = t.$end.find("#vhs-navigation nav"), a.$vhsNav.empty();
			for (var b = 0; b < u.cardsWon.length; b++)
			{
				var c = $('<div class="pts"><p data-text="Â°">Â°</p></div>');
				a.$vhsNav.append(c)
			}
			a.$vhsPuces = a.$vhsNav.find(".pts"), a.$vhsPuces.click(function ()
			{
				var b = $(this)
					.index();
				a.VHSslide(b)
			})
		}, k.createVHS = function (a, b)
		{
			var c = 546,
				d = 308,
				f = new PIXI.Container;
			f.character = b, f.initialPosition = {}, f.width = c, f.height = d, f.position.x = f.initialPosition.x = a, f.position.y = f.initialPosition.y = e / 2 - d / 2, f.bgColor = b.color, f.bgTint = .01 * Math.random(), f.pivot.y = 20;
			var g = new PIXI.Sprite.fromImage(b.img);
			g.width = c - 214, g.height = d - 112, g.position.x = 107, g.position.y = 66, f.addChild(g);
			var h = Math.ceil(4 * Math.random()),
				i = new PIXI.Sprite.fromImage("assets/img/K7/K7_" + h + ".png");
			i.width = c, i.height = d, f.addChild(i);
			var j = k.createTVSprite(h);
			j.width = c, j.height = d, j.play(), j.visible = !1, f.addChild(j), f.spriteK7 = j;
			var l = new PIXI.Sprite.fromImage(b.typo);
			return l.width = 300, l.height = 300, l.position.y = l.position.originalY = d - 200, l.position.x = l.position.originalX = (c - l.width) / 2, l.alpha = 1, f.typo = l, f.addChild(l), f
		}, k.onMousemove = function ()
		{
			var a = this;
			if (!a.vhsSliding)
			{
				a.starBG && v.to(a.starsBG.position, .1,
				{
					x: d - 1.04 * (a.starsBG.width - 56) + A.cx / 300,
					y: e - 1.04 * (a.starsBG.height - 56) + A.cy / 300,
					delay: .1
				}), v.to(a.gridSprite.position, .1,
				{
					x: d - 1.04 * (a.gridSprite.width - 56) + A.cx / 200,
					delay: .1,
					onUpdate: function ()
					{
						a.gridMask.position.y = a.gridSprite.position.y + 30
					}
				}), v.to(a.scoreScreen.position, .1,
				{
					x: A.cx / 150,
					y: A.cy / 150,
					delay: .1
				}), v.to(a.vhsFullCt.position, .1,
				{
					x: A.cx / 60,
					y: A.cy / 60,
					delay: .1
				}), a.curVHS && v.to(a.curVHS.typo.position, .1,
				{
					x: a.curVHS.getLocalBounds()
						.x + a.curVHS.typo.position.originalX + A.cx / 50,
					y: a.curVHS.getLocalBounds()
						.y + a.curVHS.typo.position.originalY + A.cy / 50,
					delay: .1
				});
				for (var b = 0; b < a.lensFlare.children.length; b++) v.to(a.lensFlare.children[b].position, .1,
				{
					x: A.cx / (70 - 30 * b),
					y: A.cy / (70 - 30 * b),
					delay: .1
				}), v.to(a.lensFlare.children[b].scale, .1,
				{
					x: a.lensFlare.children[b].originalScale.x + A.cx / (d * (20 - 3 * b)),
					y: a.lensFlare.children[b].originalScale.y + A.cy / (e * (20 - 3 * b)),
					delay: .1
				})
			}
		};
		var v, w, x, y = window.innerWidth,
			z = window.innerHeight,
			A = {
				pos: ""
			},
			B = !1,
			C = !1;
		$(function ()
		{
			function a()
			{
				var a = document.getElementById("iswebgl"),
					d = !1;
				x = D, x.init(), a.width = 1, a.height = 1;
				var e = !1;
				try
				{
					d = a.getContext("webgl")
				}
				catch (f)
				{
					d = null
				}
				if (null == d) try
				{
					d = a.getContext("experimental-webgl"), e = !0
				}
				catch (f)
				{
					d = null
				}
				$(a)
					.remove(), $("body")
					.addClass(x.browser), B = "Firefox" == x.browser, C = "Safari" == x.browser, "Explorer" == x.browser && c(), d ? b() : c()
			}

			function b()
			{
				$.getJSON("assets/data/characters.json", function (a)
				{
					w = a, E.init(), u.init()
				})
			}

			function c()
			{
				window.location += "unsupported.html"
			}
			v = TweenMax, y = $(window)
				.width(), z = $(window)
				.height(), window.mobileAndTabletcheck = function ()
				{
					var a = !1;
					return function (b)
					{
						(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
					}(navigator.userAgent || navigator.vendor || window.opera), a
				}, touch = mobileAndTabletcheck(), touch ? window.location = "http://mobile.retrominder.tv/" : a()
		});
		var D = {
				init: function ()
				{
					var a = this.searchString(this.dataBrowser) ||
					{
						identity: "unknown"
					};
					this.browser = a.identity, this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.platformInfo = this.searchString(this.dataPlatform) || this.dataPlatform.unknown, this.platform = this.platformInfo.identity;
					var b = this.urls[this.browser];
					if (b)
					{
						if (b.platforms)
						{
							var a = b.platforms[this.platform];
							a && (b = a)
						}
					}
					else b = this.urls.unknown;
					this.urls = b
				},
				searchString: function (a)
				{
					for (var b = 0; b < a.length; b++)
					{
						var c = a[b],
							d = c.string,
							e = c.prop;
						if (this.versionSearchString = c.versionSearch || c.identity, d)
						{
							if (-1 != d.indexOf(c.subString))
							{
								var f = !1;
								if (c.excludeSubstrings)
									for (var g = 0; g < c.excludeSubstrings.length; ++g)
										if (-1 != d.indexOf(c.excludeSubstrings[g]))
										{
											f = !0;
											break
										}
								if (!f) return c
							}
						}
						else if (e) return c
					}
				},
				searchVersion: function (a)
				{
					var b = a.indexOf(this.versionSearchString);
					if (-1 != b) return parseFloat(a.substring(b + this.versionSearchString.length + 1))
				},
				dataBrowser: [
				{
					string: navigator.userAgent,
					subString: "Chrome",
					excludeSubstrings: ["OPR/"],
					identity: "Chrome"
				},
				{
					string: navigator.userAgent,
					subString: "OmniWeb",
					versionSearch: "OmniWeb/",
					identity: "OmniWeb"
				},
				{
					string: navigator.vendor,
					subString: "Apple",
					identity: "Safari",
					versionSearch: "Version"
				},
				{
					string: navigator.vendor,
					subString: "Opera",
					identity: "Opera"
				},
				{
					string: navigator.userAgent,
					subString: "Android",
					identity: "Android"
				},
				{
					string: navigator.vendor,
					subString: "iCab",
					identity: "iCab"
				},
				{
					string: navigator.vendor,
					subString: "KDE",
					identity: "Konqueror"
				},
				{
					string: navigator.userAgent,
					subString: "Firefox",
					identity: "Firefox"
				},
				{
					string: navigator.vendor,
					subString: "Camino",
					identity: "Camino"
				},
				{
					string: navigator.userAgent,
					subString: "Netscape",
					identity: "Netscape"
				},
				{
					string: navigator.userAgent,
					subString: "MSIE",
					identity: "Explorer",
					versionSearch: "MSIE"
				},
				{
					string: navigator.userAgent,
					subString: "Trident",
					identity: "Explorer",
					versionSearch: "rv"
				},
				{
					string: navigator.userAgent,
					subString: "Gecko",
					identity: "Mozilla",
					versionSearch: "rv"
				},
				{
					string: navigator.userAgent,
					subString: "Mozilla",
					identity: "Netscape",
					versionSearch: "Mozilla"
				}],
				dataPlatform: [
				{
					string: navigator.platform,
					subString: "Win",
					identity: "Windows",
					browsers: [
					{
						url: "http://www.mozilla.com/en-US/firefox/new/",
						name: "Mozilla Firefox"
					},
					{
						url: "http://www.opera.com/",
						name: "Opera"
					},
					{
						url: "http://www.google.com/chrome/",
						name: "Google Chrome"
					},
					{
						url: "http://www.microsoft.com/ie",
						name: "Internet Explorer"
					}]
				},
				{
					string: navigator.platform,
					subString: "Mac",
					identity: "Mac",
					browsers: [
					{
						url: "http://www.mozilla.com/en-US/firefox/new/",
						name: "Mozilla Firefox"
					},
					{
						url: "http://www.google.com/chrome/",
						name: "Google Chrome"
					},
					{
						url: "http://www.opera.com/",
						name: "Opera"
					},
					{
						url: "http://www.webkit.org/",
						name: "WebKit Developer Builds"
					}]
				},
				{
					string: navigator.userAgent,
					subString: "iPhone",
					identity: "iPhone/iPod",
					browsers: [
					{
						url: "http://www.mozilla.com/en-US/firefox/new/",
						name: "Mozilla Firefox"
					}]
				},
				{
					string: navigator.platform,
					subString: "iPad",
					identity: "iPad",
					browsers: [
					{
						url: "http://www.mozilla.com/en-US/firefox/new/",
						name: "Mozilla Firefox"
					}]
				},
				{
					string: navigator.userAgent,
					subString: "Android",
					identity: "Android",
					browsers: [
					{
						url: "https://market.android.com/details?id=org.mozilla.firefox",
						name: "Mozilla Firefox"
					},
					{
						url: "https://market.android.com/details?id=com.opera.browser",
						name: "Opera Mobile"
					}]
				},
				{
					string: navigator.platform,
					subString: "Linux",
					identity: "Linux",
					browsers: [
					{
						url: "http://www.mozilla.com/en-US/firefox/new/",
						name: "Mozilla Firefox"
					},
					{
						url: "http://www.google.com/chrome/",
						name: "Google Chrome"
					},
					{
						url: "http://www.opera.com/",
						name: "Opera"
					}]
				},
				{
					string: "unknown",
					subString: "unknown",
					identity: "unknown",
					browsers: [
					{
						url: "http://www.mozilla.com/en-US/firefox/new/",
						name: "Mozilla Firefox"
					},
					{
						url: "http://www.google.com/chrome/",
						name: "Google Chrome"
					},
					{
						url: "http://www.opera.com/",
						name: "Opera"
					},
					{
						url: "http://www.webkit.org/",
						name: "WebKit Developer Builds"
					}]
				}],
				urls:
				{
					Chrome:
					{
						upgradeUrl: "http://www.google.com/support/chrome/bin/answer.py?answer=95346",
						troubleshootingUrl: "http://www.google.com/support/chrome/bin/answer.py?answer=1220892"
					},
					Firefox:
					{
						upgradeUrl: "http://www.mozilla.com/en-US/firefox/new/",
						troubleshootingUrl: "https://support.mozilla.com/en-US/kb/how-do-i-upgrade-my-graphics-drivers"
					},
					Opera:
					{
						platforms:
						{
							Android:
							{
								upgradeUrl: "https://market.android.com/details?id=com.opera.browser",
								troubleshootingUrl: "http://www.opera.com/support/"
							}
						},
						upgradeUrl: "http://www.opera.com/",
						troubleshootingUrl: "http://www.opera.com/support/"
					},
					Android:
					{
						upgradeUrl: null,
						troubleshootingUrl: null
					},
					Safari:
					{
						platforms:
						{
							"iPhone/iPod":
							{
								upgradeUrl: "http://www.apple.com/ios/",
								troubleshootingUrl: "http://www.apple.com/support/iphone/"
							},
							iPad:
							{
								upgradeUrl: "http://www.apple.com/ios/",
								troubleshootingUrl: "http://www.apple.com/support/ipad/"
							},
							Mac:
							{
								upgradeUrl: "http://www.webkit.org/",
								troubleshootingUrl: "http://www.webkit.org/blog/919/webgl-draft-specification-now-available/"
							}
						},
						upgradeUrl: "http://www.webkit.org/",
						troubleshootingUrl: "http://www.webkit.org/blog/919/webgl-draft-specification-now-available/"
					},
					Explorer:
					{
						upgradeUrl: "http://www.microsoft.com/ie",
						troubleshootingUrl: "http://msdn.microsoft.com/en-us/library/ie/bg182648(v=vs.85).aspx"
					},
					unknown:
					{
						upgradeUrl: null,
						troubleshootingUrl: null
					}
				}
			},
			E = {
				SO:
				{},
				extWav: ".mp3",
				curSound: null,
				characterSd: null,
				vhsLittleNoise: new Audio("assets/sounds/effects/vhs_noise.lite.mp3"),
				vhsClick01: new Audio("assets/sounds/effects/vhs_click_01.lite.mp3"),
				vhsClick03: new Audio("assets/sounds/effects/vhs_click_03.lite.mp3"),
				btnClick: new Audio("assets/sounds/effects/btn_click.lite.mp3"),
				letsplay: new Audio("assets/sounds/effects/lets_play.lite.mp3"),
				scoreVHS: new Audio("assets/sounds/effects/scoreVHS.lite.mp3"),
				nbVHS: new Audio("assets/sounds/effects/nbVHS.lite.mp3"),
				handSqueeze: new Audio("assets/sounds/effects/hand_sound.lite.mp3"),
				theme: new Audio("assets/sounds/retro_theme_light.mp3"),
				endtheme: new Audio("assets/sounds/retro_end_theme.lite.mp3"),
				people: new Audio("assets/sounds/effects/peoplescream.lite.mp3"),
				answers:
				{
					perfect: new Audio("assets/sounds/answers/Answer_Good_Perfect.lite.mp3"),
					amazing: new Audio("assets/sounds/answers/Answer_Good_Amazing.lite.mp3"),
					great: new Audio("assets/sounds/answers/Answer_Good_Great.lite.mp3"),
					wrong: new Audio("assets/sounds/answers/Answer_Wrong_Wrong.lite.mp3"),
					noway: new Audio("assets/sounds/answers/Answer_Wrong_No_Way.lite.mp3"),
					toobad: new Audio("assets/sounds/answers/Answer_Wrong_Too_Bad.lite.mp3"),
					bonus: new Audio("assets/sounds/answers/Answer_Bonus_Stage.lite.mp3"),
					gameover: new Audio("assets/sounds/answers/Answer_TimesUp.lite.mp3")
				},
				init: function ()
				{
					var a = this;
					a.vhsClick03.volume = .2, a.endtheme.onended = function ()
						{
							a.endtheme.play()
						}, a.theme.onended = function ()
						{
							a.theme.currentTime = 7, a.theme.play()
						}, $(".glitch-hover")
						.click(function ()
						{
							a.btnClick.currentTime = 0, a.btnClick.play()
						}), a.handSqueeze.volume = .3
				},
				playSound: function (a, b, c, d)
				{
					var e = this;
					e.curSound = new Audio(a), b && (e.curSound.volume = 0, e.fadeInSound(e.curSound, c, d)),
						e.curSound.play()
				},
				playCharacterSound: function (a, b, c, d)
				{
					var e = this;
					e.curSound.pause(), e.vhsLittleNoise.currentTime = 0, e.vhsLittleNoise.play(), e.vhsClick01.currentTime = 0, e.vhsClick01.play(), e.characterSd && e.fadeOutSound(e.characterSd), e.characterSd = new Audio(a), B ? e.characterSd.onloadeddata = function ()
					{
						e.characterSd.currentTime = 1.5, e.characterSd.onended = function ()
						{
							u.isRunning && u.valideAnswer()
						}, b && (e.characterSd.volume = 0, e.fadeInSound(e.characterSd, c, d)), e.characterSd.play()
					} : (e.characterSd.currentTime = 1.5, e.characterSd.onended = function ()
					{
						u.isRunning && u.valideAnswer()
					}, b && (e.characterSd.volume = 0, e.fadeInSound(e.characterSd, c, d)), e.characterSd.play())
				},
				stopSound: function ()
				{
					var a = this;
					a.curSound && a.fadeOutSound(a.curSound)
				},
				fadeOutSound: function (a, b)
				{
					"undefined" == typeof b && (b = !1), v.to(a, 1,
					{
						volume: 0,
						onComplete: function ()
						{
							b ? b() : a.pause()
						}
					})
				},
				fadeInSound: function (a, b, c)
				{
					"undefined" == typeof b && (b = 1), a.volume = 0, a.play(), v.to(a, .3,
					{
						volume: b
					})
				}
			};
		k.loadStarScene = function ()
		{
			function b(a, b)
			{
				c.gridResources = b, k.createStarScene()
			}
			var c = this,
				d = new PIXI.loaders.Loader;
			d.add("grid_sprite", a + "bg/grid_anim_sprite_light.png"), d.load(b)
		}, k.createStarScene = function ()
		{
			function c()
			{
				var a = Math.random() > .7 ? Math.random() + 1 : 10 * Math.random() + 10;
				v.to(f.lensFlare, .5,
				{
					alpha: Math.random()
				}), v.to(f.starsBG, .5,
				{
					alpha: Math.random()
				}), setTimeout(function ()
				{
					c()
				}, 10 * a)
			}
			var f = this;
			f.baseColor = "0x53C0EF", f.starScreen = new PIXI.Container, f.BG = new PIXI.Container, f.starScreen.addChild(f.BG), f.testDisplacmentSprite = new PIXI.Sprite.fromImage(a + "textures/linear_test.png"), f.testDisplacmentSprite.position.x = 0, f.testDisplacmentSprite.position.y = 0, f.testDisplacmentSprite.width = d, f.testDisplacmentSprite.height = e, f.stage.addChild(f.testDisplacmentSprite), f.testDisplacmentFilter = new PIXI.filters.DisplacementFilter(f.testDisplacmentSprite), f.blueBG = new PIXI.Sprite.fromImage(a + "bg/fond_bleu.jpg"), f.blueBG.position.x = 0, f.blueBG.position.y = 0, f.blueBG.width = d, f.blueBG.height = e, f.BG.addChild(f.blueBG), f.starsBG = new PIXI.Sprite.fromImage(a + "bg/stars.png"), f.starsBG.position.x = 0, f.starsBG.position.y = 0, f.starsBG.width = d, f.starsBG.height = e, f.BG.addChild(f.starsBG), f.gridSprite = k.createGridSprite(), f.gridSprite.width = d, f.gridSprite.height = 1280 / d * 350, f.gridSprite.position.x = 0, f.gridSprite.position.y = e - f.gridSprite.height, f.gridSprite.blendMode = PIXI.BLEND_MODES.ADD, f.gridSprite.alpha = .5, f.gridSprite.play(), f.BG.addChild(f.gridSprite), f.smokeVideo = new PIXI.Texture.fromVideo(b + "fumee.mp4"), f.smokeVideoSprite = new PIXI.Sprite(f.smokeVideo), f.smokeVideoSprite.width = d, f.smokeVideoSprite.height = e, f.smokeVideoSprite.blendMode = PIXI.BLEND_MODES.ADD, f.smokeVideoSprite.tint = f.baseColor, f.smokeVideo.baseTexture.source.loop = !0, f.BG.addChild(f.smokeVideoSprite), f.lensFlare = new PIXI.Container, f.lensFlare.addChild(new PIXI.Sprite.fromImage(a + "bg/lens_part_3.png")), f.lensFlare.addChild(new PIXI.Sprite.fromImage(a + "bg/lens_part_1.png")), f.lensFlare.addChild(new PIXI.Sprite.fromImage(a + "bg/lens_part_2.png"));
			for (var g = 0; g < f.lensFlare.children.length; g++) f.lensFlare.children[g].width = d, f.lensFlare.children[g].height = e, f.lensFlare.children[g].originalScale = {
				x: d / 1280,
				y: e / 720
			}, f.lensFlare.children[g].alpha = 1, f.lensFlare.children[g].tint = f.baseColor;
			f.BG.addChild(f.lensFlare), c(), f.starScreen.alpha = 0, f.starScreen.filters = [f.rgbFilter, f.testDisplacmentFilter, f.displacementFilter], f.addLightFrames(), f.stage.addChildAt(f.starScreen, 1)
		}, k.addLightFrames = function (a)
		{
			var b = this,
				c = 5;
			b.globalFrames = new PIXI.Graphics, b.globalFrames.lineStyle(0), b.globalFrames.beginFill(16777215), b.globalFrames.moveTo(0, 0);
			for (var f = 0; f < Math.round(e / c); f++) b.globalFrames.drawRect(0, c * f, d, c / 2);
			b.globalFrames.endFill(), b.globalFrames.alpha = .03, b.globalFrames.blendMode = PIXI.BLEND_MODES.COLOR_BURN, b.stage.addChild(b.globalFrames)
		}, k.createGridSprite = function ()
		{
			for (var a = this, b = [], c = 0; 16 > c; c++)
			{
				var d = new PIXI.Texture(a.gridResources.grid_sprite.texture, new PIXI.Rectangle(0, 350 * c, 1280, 350));
				b.push(d)
			}
			var e = new PIXI.extras.MovieClip(b);
			return e.animationSpeed = .5, e
		}, k.transitionSpaceScreen = function ()
		{
			var a = this;
			u.runParty = !0, u.isTutorial = !1, t.$start.find(".vam")
				.fadeOut();
			var b = 1.2;
			v.to(a.starScreen, 2,
			{
				alpha: 0,
				delay: 2
			}), v.to(a.starScreen.scale, 4,
			{
				x: b,
				y: b
			}), v.to(a.starScreen.position, 4,
			{
				x: (d - b * d) / 2,
				y: (e - b * e) / 2
			}), a.gridSprite && v.to(a.gridSprite, 2,
			{
				animationSpeed: 5
			});
			var c = new TimelineMax,
				f = t.$start.find(".start-timeout");
			E.fadeOutSound(E.theme), E.fadeOutSound(E.endtheme), $("body")
				.addClass("playing"), f.show(), c.to(f, .9,
				{
					opacity: 0,
					scale: .7,
					delay: .1,
					onComplete: function ()
					{
						f.text("2"), v.set(f,
						{
							opacity: 1,
							scale: 1
						}), E.btnClick.currentTime = 0, E.btnClick.play()
					}
				})
				.to(f, .9,
				{
					opacity: 0,
					scale: .7,
					delay: .1,
					onComplete: function ()
					{
						f.text("1"), v.set(f,
						{
							opacity: 1,
							scale: 1
						}), E.btnClick.currentTime = 0, E.btnClick.play()
					}
				})
				.to(f, .9,
				{
					opacity: 0,
					scale: .7,
					delay: .1,
					onComplete: function ()
					{
						t.$game.show(), t.$start.hide(), u.createNew(), E.letsplay.play(), a.gridSprite && v.set(a.gridSprite, 2,
						{
							animationSpeed: .5
						}), u.runParty = !1
					}
				})
		}, Array.prototype.max = function ()
		{
			return Math.max.apply(null, this)
		}, Array.prototype.min = function ()
		{
			return Math.min.apply(null, this)
		}
	}),
	function (a, b)
	{
		"function" == typeof define && "object" == typeof define.amd && define.amd ? define(function ()
		{
			return b(a)
		}) : "object" == typeof module && module && module.exports ? module.exports = b(a) : a.Levenshtein = b(a)
	}(this, function (a)
	{
		function b(a, b)
		{
			var c, d;
			for (c = -1, d = a.length; ++c < d;) b(a[c], c, a)
		}

		function c(a, c)
		{
			var d;
			return d = Array(a.length), b(a, function (a, b, e)
			{
				d[b] = c(a, b, e)
			}), d
		}

		function d(a, c, d)
		{
			return b(a, function (a, b, e)
			{
				d = c(a, b, e)
			}), d
		}

		function Levenshtein(a, c)
		{
			var d, e, f;
			return f = this._matrix = [], a == c ? this.distance = 0 : "" == a ? this.distance = c.length : "" == c ? this.distance = a.length : (d = [0], b(a, function (a, b)
			{
				b++, d[b] = b
			}), f[0] = d, b(c, function (g, h)
			{
				e = [++h], b(a, function (b, f)
				{
					f++, a.charAt(f - 1) == c.charAt(h - 1) ? e[f] = d[f - 1] : e[f] = Math.min(d[f] + 1, e[f - 1] + 1, d[f - 1] + 1)
				}), d = e, f[f.length] = d
			}), this.distance = e[e.length - 1])
		}
		return Levenshtein.prototype.toString = Levenshtein.prototype.inspect = function (a)
		{
			var b, e, f, g, h;
			for (b = this.getMatrix(), e = d(b, function (a, b)
				{
					return Math.max(a, d(b, Math.max, 0))
				}, 0), f = Array((e + "")
					.length)
				.join(" "), g = []; g.length < (b[0] && b[0].length || 0);) g[g.length] = Array(f.length + 1)
				.join("-");
			return g = g.join("-+") + "-", h = c(b, function (a)
			{
				var b;
				return b = c(a, function (a)
				{
					return (f + a)
						.slice(-f.length)
				}), b.join(" |") + " "
			}), h.join("\n" + g + "\n")
		}, Levenshtein.prototype.getMatrix = function ()
		{
			return this._matrix.slice()
		}, Levenshtein.prototype.valueOf = function ()
		{
			return this.distance
		}, Levenshtein
	});
var Nibbler = function (a)
{
	"use strict";
	var b, c, d, e, f, g, h, i, j, k, l, m, n;
	b = function ()
	{
		var b, l, m;
		for (c = a.pad || "", d = a.dataBits, e = a.codeBits, f = a.keyString, g = a.arrayData, l = Math.max(d, e), m = 0, h = [], b = 0; l > b; b += 1) h.push(m), m += m + 1;
		j = m, i = d / k(d, e)
	}, k = function (a, b)
	{
		for (var c; 0 !== b;) c = b, b = a % b, a = c;
		return a
	}, l = function (a, b, d, e)
	{
		var k, l, m, n, o, p, q, r;
		for (r = function (a)
			{
				e ? g ? q.push(a) : q.push(String.fromCharCode(a)) : q.push(f.charAt(a))
			}, o = 0, p = 0, q = [], l = a.length, k = 0; l > k; k += 1)
		{
			if (p += b, e)
			{
				if (m = a.charAt(k), n = f.indexOf(m), m === c) break;
				if (0 > n) throw 'the character "' + m + '" is not a member of ' + f
			}
			else if (n = g ? a[k] : a.charCodeAt(k), (n | j) !== j) throw n + " is outside the range 0-" + j;
			for (o = o << b | n; p >= d;) p -= d, r(o >> p), o &= h[p]
		}
		if (!e && p > 0)
			for (r(o << d - p); q.length % i > 0;) q.push(c);
		return g && e ? q : q.join("")
	}, m = function (a)
	{
		return l(a, d, e, !1)
	}, n = function (a)
	{
		return l(a, e, d, !0)
	}, this.encode = m, this.decode = n, b()
};
parseColor = function (a)
{
	var b, c = parseInt,
		a = a.replace(/\s\s*/g, "");
	if (b = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(a)) b = [c(b[1], 16), c(b[2], 16), c(b[3], 16)];
	else if (b = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(a)) b = [17 * c(b[1], 16), 17 * c(b[2], 16), 17 * c(b[3], 16)];
	else if (b = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(a)) b = [+b[1], +b[2], +b[3], +b[4]];
	else
	{
		if (!(b = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(a))) throw Error(a + " is not supported by $.parseColor");
		b = [+b[1], +b[2], +b[3]]
	}
	isNaN(b[3]) && (b[3] = 1);
	var d = b.slice(0, 3 + !!$.support.rgba);
	return rgbToHex(d)
};
//# sourceMappingURL=app.min.map
