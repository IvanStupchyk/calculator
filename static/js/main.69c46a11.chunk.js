(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,function(t,e,n){t.exports={btn_container:"Btn_btn_container__3lh6F",btn_zero:"Btn_btn_zero__Mn535",btn_equally:"Btn_btn_equally__3EKet",btn_arithmetic:"Btn_btn_arithmetic__1NjCm",btn_eraser:"Btn_btn_eraser__2BSPI"}},function(t,e,n){t.exports={board_container:"Board_board_container__31lc4",result:"Board_result__2sJAW",intermediate_data:"Board_intermediate_data__2LRmX"}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var E_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_components_Calculator_border__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(E_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),intermediateValue=_useState2[0],setIntermediateValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState4=Object(E_react_projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),resultValue=_useState4[0],setResultValue=_useState4[1],getItemButton=function getItemButton(value){var lastElement=intermediateValue[intermediateValue.length-1],checkConditions="-"===lastElement||"+"===lastElement||"*"===lastElement||"/"===lastElement||"."===lastElement||0===intermediateValue.length;switch(value){case"C":setIntermediateValue(""),setResultValue(0);break;case"=":if(!checkConditions){var fractionalPartLength=(eval(intermediateValue)-Math.trunc(eval(intermediateValue))).toString().length;setResultValue(fractionalPartLength>4?eval(intermediateValue).toFixed(4):eval(intermediateValue))}break;case"0":intermediateValue.length&&")"!==intermediateValue[intermediateValue.length-1]&&intermediateValue.length<17&&setIntermediateValue((function(t){return t+value}));break;case"+":case"-":case"*":case"/":case".":checkConditions||setIntermediateValue((function(t){return t+value}));break;case"<":")"===intermediateValue[intermediateValue.length-1]&&setIntermediateValue((function(t){return t.substring(1,intermediateValue.length-1)})),setIntermediateValue((function(t){return t.substring(0,intermediateValue.length-1)}));break;case"()":")"===lastElement||checkConditions||setIntermediateValue((function(t){return"(".concat(t,")")}));break;default:")"!==intermediateValue[intermediateValue.length-1]&&intermediateValue.length<17&&setIntermediateValue((function(t){return t+value}))}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Calculator_border__WEBPACK_IMPORTED_MODULE_3__.a,{resultValue:resultValue,intermediateValue:intermediateValue,getItemButton:getItemButton})})}__webpack_exports__.a=App},function(t,e,n){t.exports={calculator_container:"Calculator-border_calculator_container__22h1n"}},function(t,e,n){t.exports={panel_container:"Input-panel_panel_container__zdDuW"}},function(t,e,n){"use strict";n(1);var _=n(8),a=n.n(_),r=n(3),u=n.n(r),c=n(0);var i=function(t){return Object(c.jsxs)("div",{className:u.a.board_container,children:[Object(c.jsx)("p",{className:u.a.intermediate_data,children:t.intermediateValue}),Object(c.jsx)("p",{className:u.a.result,children:t.resultValue.toLocaleString()})]})},o=n(9),s=n.n(o),l=n(2),b=n.n(l);var m=function(t){return Object(c.jsx)("a",{onClick:function(){t.getItemButton&&t.getItemButton(t.BtnContent)},className:"".concat(b.a.btn_container," ").concat(t.btnZero?b.a.btn_zero:t.btnEqually?b.a.btn_equally:t.btnsArithmetic?b.a.btn_arithmetic:t.btnsEraser?b.a.btn_eraser:""),children:t.BtnContent})};var B=function(t){var e=!0,n=!0,_=!0,a=!0,r={btnZero:"0",btnOne:"1",btnTwo:"2",btnThree:"3",btnFour:"4",btnFive:"5",btnSix:"6",btnSeven:"7",btnEight:"8",btnNine:"9",btnDot:"."},u={btnPlus:"+",btnMinus:"-",btnMultiply:"*",btnSplit:"/",btnEqually:"=",btnPercentage:"()",btnDischarge:"C",btnChangeSign:"<"};return Object(c.jsxs)("div",{className:s.a.panel_container,children:[Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsEraser:_,BtnContent:u.btnDischarge}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsEraser:_,BtnContent:u.btnChangeSign}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsEraser:_,BtnContent:u.btnPercentage}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsArithmetic:a,BtnContent:u.btnSplit}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnSeven}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnEight}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnNine}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsArithmetic:a,BtnContent:u.btnMultiply}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnFour}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnFive}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnSix}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsArithmetic:a,BtnContent:u.btnMinus}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnOne}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnTwo}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnThree}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnsArithmetic:a,BtnContent:u.btnPlus}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnZero:e,BtnContent:r.btnZero}),Object(c.jsx)(m,{getItemButton:t.getItemButton,BtnContent:r.btnDot}),Object(c.jsx)(m,{getItemButton:t.getItemButton,btnEqually:n,BtnContent:u.btnEqually})]})};e.a=function(t){return Object(c.jsxs)("div",{className:a.a.calculator_container,children:[Object(c.jsx)(i,{resultValue:t.resultValue,intermediateValue:t.intermediateValue}),Object(c.jsx)(B,{getItemButton:t.getItemButton})]})}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var _=n(1),a=n.n(_),r=n(6),u=n.n(r),c=(n(15),n(7)),i=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,_=e.getFID,a=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),_(t),a(t),r(t),u(t)}))},o=n(0);u.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(c.a,{})}),document.getElementById("root")),i()}],[[18,1,2]]]);
//# sourceMappingURL=main.69c46a11.chunk.js.map