(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{168:function(e,t,r){"use strict";var n=0;function o(e){if(!n){var s=document.createElement("script");s.setAttribute("src",e),document.body.appendChild(s),n=new Promise((function(e){s.onload=function(){e(window.twttr)}}))}return n}var d={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};e.exports={addPlatformScript:o,twitterEmbedComponent:function(e){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},d,e.props),mounted:function(){var t,r=this;t="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:o("//platform.twitter.com/widgets.js")).then((function(n){return e.embedComponent(n,t,r.$el,r.options)})).then((function(data){r.isAvailable=void 0!==data,r.isLoaded=!0}))},render:function(e){if(this.isLoaded&&this.isAvailable)return e("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var t=e("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return e("div",[t])}return e("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},172:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Moment",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return d.default}});var n=l(r(173)),o=l(r(174)),d=l(r(175));function l(e){return e&&e.__esModule?e:{default:e}}},173:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(168).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTweetEmbed.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(168).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createMoment.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(168).twitterEmbedComponent)({embedComponent:function(e){for(var t,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return(t=e.widgets).createTimeline.apply(t,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});t.default=n},194:function(e,t,r){"use strict";r.r(t);var n=r(24),o=r(172),d=Object(n.defineComponent)({name:"TwitterBot",components:{Timeline:o.Timeline}}),l=r(15),component=Object(l.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("Timeline",{attrs:{id:"newcodeofpoints","source-type":"profile"}})}),[],!1,null,null,null);t.default=component.exports}}]);