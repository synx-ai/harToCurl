import React from "../../_snowpack/pkg/react.js";
import { jsx as _jsx } from "../../_snowpack/pkg/react/jsx-runtime.js";
import { jsxs as _jsxs } from "../../_snowpack/pkg/react/jsx-runtime.js";
export const Header = () => {
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/_jsx("header", {
      children: /*#__PURE__*/_jsx("div", {
        className: "fluid-container",
        children: /*#__PURE__*/_jsxs("div", {
          className: "row",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-6",
            children: /*#__PURE__*/_jsx("a", {
              href: "https://synx.ai",
              target: "_blank",
              children: /*#__PURE__*/_jsx("img", {
                src: "assets/img/synx-logo.svg",
                className: "logo"
              })
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-6",
            children: /*#__PURE__*/_jsx("a", {
              href: "https://synx.ai",
              target: "_blank",
              children: /*#__PURE__*/_jsx("img", {
                src: "assets/img/github.svg",
                className: "github"
              })
            })
          })]
        })
      })
    })
  });
};
export default Header;