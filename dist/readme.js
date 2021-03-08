function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../_snowpack/pkg/react.js';
import { mdx } from '../_snowpack/pkg/@mdx-js/react.js';
/* @jsxRuntime classic */

/* @jsx mdx */

const layoutProps = {};
const MDXLayout = "wrapper";
export default function MDXContent({
  components,
  ...props
}) {
  return mdx(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), mdx("h1", null, `harToCurl`), mdx("p", null, `Convert webdev HTTP Archive Request files (.har) to curl requests`));
}
;
MDXContent.isMDXComponent = true;