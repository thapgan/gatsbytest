webpackJsonp([50739212244294],{39:function(t,e,n){t.exports={default:n(41),__esModule:!0}},29:function(t,e,n){t.exports={default:n(42),__esModule:!0}},24:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(39),a=o(r);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},40:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},41:function(t,e,n){n(48),t.exports=n(9).Object.assign},42:function(t,e,n){n(49),t.exports=n(9).Object.keys},45:function(t,e,n){"use strict";var o=n(21),r=n(54),a=n(47),i=n(25),l=n(65),u=Object.assign;t.exports=!u||n(19)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=o})?function(t,e){for(var n=i(t),u=arguments.length,s=1,c=r.f,f=a.f;u>s;)for(var p,d=l(arguments[s++]),h=c?o(d).concat(c(d)):o(d),m=h.length,v=0;m>v;)f.call(d,p=h[v++])&&(n[p]=d[p]);return n}:u},36:function(t,e,n){var o=n(16),r=n(9),a=n(19);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],i={};i[t]=e(n),o(o.S+o.F*a(function(){n(1)}),"Object",i)}},48:function(t,e,n){var o=n(16);o(o.S+o.F,"Object",{assign:n(45)})},49:function(t,e,n){var o=n(25),r=n(21);n(36)("keys",function(){return function(t){return r(o(t))}})},17:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return a(j+t)}function a(t){return t.replace(/^\/\//g,"/")}function i(t,e){var n=(0,O.createLocation)(t,null,null,e.location);return n.pathname=r(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var l=n(24),u=o(l),s=n(29),c=o(s),f=n(40),p=o(f),d=n(23),h=o(d),m=n(31),v=o(m),y=n(30),g=o(y);e.withPrefix=r;var b=n(1),w=o(b),_=n(52),E=n(5),S=o(E),O=n(69),j="/";j="/gatsbytest";var T={activeClassName:S.default.string,activeStyle:S.default.object,exact:S.default.bool,strict:S.default.bool,isActive:S.default.func,location:S.default.object},x=function(t,e){var n=new window.IntersectionObserver(function(o){o.forEach(function(o){t===o.target&&(o.isIntersecting||o.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},k=function(t){function e(n,o){(0,h.default)(this,e);var r=(0,v.default)(this,t.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var l=o.router.history,u=i(n.to,l);return r.state={path:(0,O.createPath)(u),to:u,IOSupported:a},r.handleRef=r.handleRef.bind(r),r}return(0,g.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=i(t.to,history);this.setState({path:(0,O.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.path)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&x(t,function(){___loader.enqueue(e.state.path)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,o=(0,p.default)(e,["onClick"]),r=void 0;return r=(0,c.default)(T).some(function(e){return t.props[e]})?_.NavLink:_.Link,w.default.createElement(r,(0,u.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var o=t.state.path;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var r=t.state.path.split("#").slice(1).join("#"),a=document.getElementById(r);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.path)}return!0}},o,{to:this.state.to,innerRef:this.handleRef}))},e}(w.default.Component);k.propTypes=(0,u.default)({},T,{innerRef:S.default.func,onClick:S.default.func,to:S.default.oneOfType([S.default.string,S.default.object]).isRequired}),k.contextTypes={router:S.default.object},e.default=k;e.navigateTo=function(t){window.___navigateTo(t)}},91:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=n(1),u=o(l);n(118);var s=function(t){function e(n){r(this,e);var o=a(this,t.call(this,n));return o.state={showLoadingEnable:!o.props.showLoadingButton||o.props.showLoadingButton},o.onScroll=o.onScroll.bind(o),o}return i(e,t),e.prototype.update=function(){var t=document.documentElement.offsetHeight-(window.scrollY+window.innerHeight);this.setState({showLoadingEnable:!1}),t<100&&this.props.onInfiniteScroll(),this.ticking=!1},e.prototype.onScroll=function(){var t=this;this.ticking||(this.ticking=!0,requestAnimationFrame(function(){return t.update()}))},e.prototype.componentDidMount=function(){window.addEventListener("scroll",this.onScroll)},e.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},e.prototype.render=function(){var t=this;return this.state.showLoadingEnable?u.default.createElement("a",{className:"more-btn",onClick:function(){t.onScroll(),t.setState({infinteScrollEnable:!0})}},u.default.createElement("span",null,"More")):null},e}(u.default.Component);e.default=s,t.exports=e.default},118:function(t,e){},92:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return i.default.createElement(u.default,{to:""+t.post.frontmatter.path,className:"post-item"},i.default.createElement("div",null,i.default.createElement("h1",{className:"post-title"},t.post.frontmatter.title),i.default.createElement("time",{dateTime:t.post.frontmatter.date,className:"post-time"},t.post.frontmatter.date+" | "+t.post.timeToRead+" minute read"),i.default.createElement("div",{className:"post-item-line"}),i.default.createElement("p",null,t.post.excerpt)))}e.__esModule=!0,e.default=r;var a=n(1),i=o(a),l=n(17),u=o(l);n(119),t.exports=e.default},119:function(t,e){},237:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=n(1),u=o(l),s=n(17),c=o(s),f=n(92),p=o(f),d=n(91),h=o(d),m=function(t){function e(){r(this,e);var n=a(this,t.call(this));return n.state={postsToShow:2},n.infiniteScrollHandler=n.infiniteScrollHandler.bind(n),n}return i(e,t),e.prototype.infiniteScrollHandler=function(){this.setState({postsToShow:this.state.postsToShow+2})},e.prototype.render=function(){var t=this.props.pathContext,e=t.tagPosts,n=t.posts,o=t.tagName,r=t.prefix;return o?u.default.createElement("div",null,u.default.createElement("h1",null,n.length," post",1===n.length?"":"s"," ","tag"==r?" tagged with "+o:" in "+o+" category"),u.default.createElement("div",null,n.slice(0,this.state.postsToShow).map(function(t){return u.default.createElement(p.default,{post:t})})),u.default.createElement(c.default,{to:"/"+("tag"==r?"tags":"categories")},"All ","tag"==r?"tags":"categories"),this.state.postsToShow<n.length&&u.default.createElement("div",{style:{textAlign:"center",paddingTop:"50px"}},u.default.createElement(h.default,{onInfiniteScroll:this.infiniteScrollHandler,showLoadingButton:!0}))):u.default.createElement("div",null,u.default.createElement("h1",null,"tag"==r?"Tags":"Categories"),u.default.createElement("ul",{className:"tags"},Object.keys(e).map(function(t){var n=e[t];return u.default.createElement("li",{key:t},u.default.createElement(c.default,{to:"/"+r+"/"+t},t," | ",n.length," posts"))})))},e}(u.default.Component);e.default=m,t.exports=e.default}});
//# sourceMappingURL=component---src-templates-tags-js-75526c8c8ddc64b70037.js.map