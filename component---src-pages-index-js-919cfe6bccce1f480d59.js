(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(147),i=n.n(o),l=(n(143),n(148)),s=n.n(l),d=(n(72),n(7)),c=n.n(d),h=n(172),m=n.n(h),u=n(149),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={bookList:[],search:[],searchResults:[],isLoading:!0,isError:!1,searchQuery:""},t.rebuildIndex=function(){var e=t.state.bookList,n=new u.Search("isbn");n.indexStrategy=new u.PrefixIndexStrategy,n.sanitizer=new u.LowerCaseSanitizer,n.searchIndex=new u.TfIdfSearchIndex("isbn"),n.addIndex("title"),n.addIndex("ratio"),n.addDocuments(e),t.setState({search:n,isLoading:!1})},t.searchData=function(e){var n=t.state.search.search(e.target.value);t.setState({searchQuery:e.target.value,searchResults:n})},t.handleSubmit=function(e){e.preventDefault()},t}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=s()(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("/Car-Tire-Database/tires.json").then(function(e){var n=e.data;t.setState({bookList:n.books}),t.rebuildIndex()}).catch(function(e){t.setState({isError:!0}),console.log("===================================="),console.log("Something bad happened while fetching the data\n"+e),console.log("====================================")});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.state,t=e.isError,n=e.isLoading,r=e.bookList,o=e.searchResults,i=e.searchQuery,l=""===i?r:o;return n?a.a.createElement("div",{style:{margin:"1.2rem 1rem 1.2rem 1rem"}},a.a.createElement("h1",{style:{marginTop:"3em",textAlign:"center"}},"Getting the search all setup")):t?a.a.createElement("div",{style:{margin:"1.2rem 1rem 1.2rem 1rem"}},a.a.createElement("h1",{style:{marginTop:"3em",textAlign:"center"}},"Ohh no!!!!!"),a.a.createElement("h3",{style:{marginTop:"2em",padding:"2em 0em",textAlign:"center"}},"Something really bad happened")):a.a.createElement("div",null,a.a.createElement("div",{style:{margin:"0 auto"}},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",{style:{margin:"0 auto"}},a.a.createElement("label",{htmlFor:"Search",style:{paddingRight:"10px"}},"Enter your search here"),a.a.createElement("input",{id:"Search",value:i,onChange:this.searchData,placeholder:"Enter your search here",style:{margin:"0 auto",width:"400px"}}))),a.a.createElement("div",null,"Number of items:",l.length,a.a.createElement("table",{style:{width:"100%",borderCollapse:"collapse",borderRadius:"4px",border:"1px solid #d3d3d3"}},a.a.createElement("thead",{style:{border:"1px solid #808080"}},a.a.createElement("tr",null,a.a.createElement("th",{style:{textAlign:"left",padding:"5px",fontSize:"14px",fontWeight:600,borderBottom:"2px solid #d3d3d3",cursor:"pointer"}},"Tire index"),a.a.createElement("th",{style:{textAlign:"left",padding:"5px",fontSize:"14px",fontWeight:600,borderBottom:"2px solid #d3d3d3",cursor:"pointer"}},"Tire description"),a.a.createElement("th",{style:{textAlign:"left",padding:"5px",fontSize:"14px",fontWeight:600,borderBottom:"2px solid #d3d3d3",cursor:"pointer"}},"Book Ratio"))),a.a.createElement("tbody",null,l.map(function(e){return a.a.createElement("tr",{key:"row_"+e.isbn},a.a.createElement("td",{style:{fontSize:"14px",border:"1px solid #d3d3d3"}},e.isbn),a.a.createElement("td",{style:{fontSize:"14px",border:"1px solid #d3d3d3"}},e.title),a.a.createElement("td",{style:{fontSize:"14px",border:"1px solid #d3d3d3"}},e.ratio))}))))))},t}(r.Component);t.default=function(){return a.a.createElement("div",null,a.a.createElement("h1",{style:{marginTop:"3em",textAlign:"center"}},"Search data using JS Search"),a.a.createElement("div",null,a.a.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-919cfe6bccce1f480d59.js.map