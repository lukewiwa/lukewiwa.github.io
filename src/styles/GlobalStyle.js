import { createGlobalStyle } from 'styled-components'
import { mainColour, textColour } from './variables'

export default createGlobalStyle`
  html {
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    color: ${textColour};
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

  body,
  button,
  input,
  select,
  textarea {
    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1.875rem 0 0;
  }

  address,
  blockquote,
  dl,
  figure,
  hr,
  ol,
  p,
  pre,
  table,
  ul {
    margin: 0.9375rem 0 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.625rem;
  }

  h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1rem;
  }

  a {
    -webkit-text-decoration-skip: objects;
    color: ${mainColour};
    text-decoration: none;
  }

  a:active,
  a:hover {
    text-decoration: underline;
  }

  b,
  dt,
  strong {
    font-weight: 600;
  }

  code,
  kbd,
  samp {
    background-color: #f2f2f2;
    font-size: 85%;
    padding: 0.2em 0.3em;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    background-color: #f2f2f2;
    line-height: 1.2;
    overflow: auto;
    padding: 0.9375rem;
  }

  pre,
  pre code {
    font-size: 0.8125rem;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }

  blockquote {
    border-left: 5px solid #ddd;
    color: #777;
    padding-left: 0.9375rem;
  }

  ol,
  ul {
    padding-left: 1.875rem;
  }

  dd,
  dt,
  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin: 0;
  }

  hr {
    border: 0;
    border-top: 1px solid #ddd;
  }

  small,
  sub,
  sup {
    font-size: 85%;
  }

  sub,
  sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.2em;
  }

  sup {
    top: -.4em;
  }

  address,
  time {
    font-style: normal;
  }

  mark {
    background-color: #ff0;
    color: #333;
    padding: 0 0.2em;
  }

  rt {
    font-size: 60%;
  }

  abbr[title] {
    -webkit-text-decoration: underline dotted;
    border-bottom: 0;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
    display: block;
    max-width: 90%;
    min-width: 20em;
    margin-left: auto;
    margin-right: auto;

  }

  audio,
  img,
  video {
    max-width: 90%;
  }

  figcaption {
    color: #777;
    font-size: 85%;
  }

  [role=button] {
    cursor: pointer;
  }

  [role=button],
  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  ::-webkit-file-upload-button,
  [type=reset],
  [type=submit],
  button,
  html [type=button] {
    -webkit-appearance: button;
    appearance: button;
  }

  [type=search] {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  [hidden] {
    display: none;
  }

  fieldset {
    border: 1px solid #ddd;
    margin: 0.9375rem 0 0;
    padding: 0 0.9375rem 0.9375rem;
  }

  legend {
    padding: 0 0.2em;
  }

  optgroup {
    color: #777;
    font-style: normal;
    font-weight: 400;
  }

  option {
    color: #333;
  }

  progress {
    max-width: 100%;
  }

  .container,
  .container-fluid,
  .container-wider {
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    overflow: hidden;
    padding: 0 0.9375rem 4em 0.9375rem;
  }

  .container {
    max-width: 50rem;
  }

  .container-wider {
    max-width: 75rem;
  }

  .flex-bottom,
  .flex-center,
  .flex-left,
  .flex-middle,
  .flex-right,
  .flex-top,
  .flex-vertical {
    -ms-flex-flow: row nowrap;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-flow: row nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row nowrap;
  }

  .flex-bottom,
  .flex-center,
  .flex-left,
  .flex-middle,
  .flex-right,
  .flex-top,
  .flex-vertical.flex-bottom,
  .flex-vertical.flex-center,
  .flex-vertical.flex-left,
  .flex-vertical.flex-middle,
  .flex-vertical.flex-right,
  .flex-vertical.flex-top {
    -ms-flex-align: stretch;
    -ms-flex-pack: start;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    align-items: stretch;
    justify-content: flex-start;
  }

  .flex-center,
  .flex-vertical.flex-middle {
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .flex-right,
  .flex-vertical.flex-bottom {
    -ms-flex-pack: end;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
  }

  .flex-top,
  .flex-vertical.flex-left {
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    -webkit-box-align: start;
    align-items: flex-start;
  }

  .flex-middle,
  .flex-vertical.flex-center {
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .flex-bottom,
  .flex-vertical.flex-right {
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    -webkit-box-align: end;
    align-items: flex-end;
  }

  .units-gap {
    margin-left: -.46875rem;
    margin-right: -.46875rem;
  }

  .units-gap > .unit,
  .units-gap > .unit-0,
  .units-gap > .unit-1,
  .units-gap > .unit-1-2,
  .units-gap > .unit-1-3,
  .units-gap > .unit-1-4,
  .units-gap > .unit-1-on-mobile,
  .units-gap > .unit-2-3,
  .units-gap > .unit-3-4 {
    padding-left: 0.46875rem;
    padding-right: 0.46875rem;
  }

  .units-gap-big {
    margin-left: -.9375rem;
    margin-right: -.9375rem;
  }

  .units-gap-big > .unit,
  .units-gap-big > .unit-0,
  .units-gap-big > .unit-1,
  .units-gap-big > .unit-1-2,
  .units-gap-big > .unit-1-3,
  .units-gap-big > .unit-1-4,
  .units-gap-big > .unit-1-on-mobile,
  .units-gap-big > .unit-2-3,
  .units-gap-big > .unit-3-4 {
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  .unit {
    -ms-flex-positive: 1;
    -ms-flex-preferred-size: 0;
    -webkit-box-flex: 1;
    -webkit-flex-basis: 0;
    -webkit-flex-grow: 1;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .unit-1,
  .unit-1-2,
  .unit-1-3,
  .unit-1-4,
  .unit-1-on-mobile,
  .unit-2-3,
  .unit-3-4 {
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }

  .unit-1 {
    -ms-flex-preferred-size: 100%;
    -webkit-flex-basis: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }

  .unit-1-2 {
    -ms-flex-preferred-size: 50%;
    -webkit-flex-basis: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }

  .unit-1-3 {
    -ms-flex-preferred-size: 33.33%;
    -webkit-flex-basis: 33.33%;
    flex-basis: 33.33%;
    max-width: 33.33%;
  }

  .unit-2-3 {
    -ms-flex-preferred-size: 66.67%;
    -webkit-flex-basis: 66.67%;
    flex-basis: 66.67%;
    max-width: 66.67%;
  }

  .unit-1-4 {
    -ms-flex-preferred-size: 25%;
    -webkit-flex-basis: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }

  .unit-3-4 {
    -ms-flex-preferred-size: 75%;
    -webkit-flex-basis: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }

  .flex-vertical {
    -ms-flex-direction: column;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .flex-vertical > .unit,
  .flex-vertical > .unit-0,
  .flex-vertical > .unit-1,
  .flex-vertical > .unit-1-2,
  .flex-vertical > .unit-1-3,
  .flex-vertical > .unit-1-4,
  .flex-vertical > .unit-1-on-mobile,
  .flex-vertical > .unit-2-3,
  .flex-vertical > .unit-3-4 {
    max-width: none;
  }

  .flex-vertical > .unit-1 {
    max-height: 100%;
  }

  .flex-vertical > .unit-1-2 {
    max-height: 50%;
  }

  .flex-vertical > .unit-1-3 {
    max-height: 33.33%;
  }

  .flex-vertical > .unit-2-3 {
    max-height: 66.67%;
  }

  .flex-vertical > .unit-1-4 {
    max-height: 25%;
  }

  .flex-vertical > .unit-3-4 {
    max-height: 75%;
  }

  .flex-wrap {
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    .unit-1-on-mobile {
        -ms-flex-preferred-size: 100%;
        -webkit-flex-basis: 100%;
        flex-basis: 100%;
        max-width: 100%;
    }

    .flex-vertical > .unit-1-on-mobile {
        max-height: 100%;
    }
  }

  .top-gap-big {
    margin-top: 1.875rem !important;
  }

  .top-gap {
    margin-top: 0.9375rem !important;
  }

  .top-gap-0 {
    margin-top: 0 !important;
  }

  @media (max-width: 767px) {
    .hide-on-mobile {
        display: none !important;
    }
  }

  @media (min-width: 768px) {
    .show-on-mobile {
        display: none !important;
    }
  }

  table {
    background-color: #fff;
    border: 0;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  table caption {
    caption-side: bottom;
    color: #777;
    font-size: 85%;
  }

  table caption,
  table td,
  table th {
    padding: 0.3125rem;
    text-align: left;
  }

  table td,
  table th {
    border: 0;
    border-bottom: 1px solid #ddd;
  }

  table th {
    background-color: #f2f2f2;
    font-weight: 600;
  }

  .btn {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.1875rem;
    color: #333;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 1rem;
    line-height: 1.25;
    margin: 0.9375rem 0 0;
    padding: 0.3125rem 0.625rem;
    text-align: center;
  }

  .btn:active,
  .btn:hover {
    background-color: #f2f2f2;
    text-decoration: none;
  }

  .btn[disabled] {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  .btn-primary {
    background-color: #267fd9;
    border-color: #267fd9;
    color: #fff;
  }

  .btn-primary:active,
  .btn-primary:hover {
    background-color: #2273c3;
  }

  .btn-primary[disabled] {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  .btn-danger {
    background-color: #db5757;
    border-color: #db5757;
    color: #fff;
  }

  .btn-danger:active,
  .btn-danger:hover {
    background-color: #d74242;
  }

  .btn-danger[disabled] {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .form {
    margin: 0;
  }

  .form label {
    border: 1px solid transparent;
    cursor: pointer;
    display: block;
    line-height: 1.25;
    margin-top: 0.9375rem;
    padding-bottom: 0.3125rem;
    padding-top: 0.3125rem;
  }

  .form [type=email],
  .form [type=number],
  .form [type=password],
  .form [type=search],
  .form [type=tel],
  .form [type=text],
  .form [type=url],
  .form select,
  .form textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.1875rem;
    color: #333;
    display: block;
    font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 1rem;
    line-height: 1.25;
    margin: 0.9375rem 0 0;
    padding: 0.3125rem;
    width: 100%;
  }

  .form [type=email]:focus,
  .form [type=number]:focus,
  .form [type=password]:focus,
  .form [type=search]:focus,
  .form [type=tel]:focus,
  .form [type=text]:focus,
  .form [type=url]:focus,
  .form select:focus,
  .form textarea:focus {
    border-color: #267fd9;
    outline: 0;
  }

  @media (max-width: 767px) {
    .form [type=date],
    .form [type=datetime-local],
    .form [type=month],
    .form [type=time],
    .form [type=week] {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 0.1875rem;
        color: #333;
        display: block;
        font-family: -apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        font-size: 1rem;
        line-height: 1.25;
        margin: 0.9375rem 0 0;
        padding: 0.3125rem;
        width: 100%;
    }
  }

  @media (max-width: 767px) {
    .form [type=date]:focus,
    .form [type=datetime-local]:focus,
    .form [type=month]:focus,
    .form [type=time]:focus,
    .form [type=week]:focus {
        border-color: #267fd9;
        outline: 0;
    }
  }

  .form [type=checkbox],
  .form [type=radio] {
    cursor: pointer;
    margin: 0 0.3125rem 0 0;
  }

  .form select {
    cursor: pointer;
  }

  .form [type=file],
  .form [type=range] {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    line-height: 1.25;
    padding-bottom: 0.3125rem;
    padding-top: 0.3125rem;
    width: 100%;
  }

  .form [type=color],
  .form [type=file],
  .form [type=image],
  .form [type=range] {
    cursor: pointer;
    display: block;
    margin: 0.9375rem 0 0;
  }

  .form [disabled] {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  .form [readonly] {
    background-color: #f2f2f2;
  }

  .scroll-view {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-muted {
    color: #777;
  }

  .text-primary {
    color: #267fd9;
  }

  .text-danger {
    color: #db5757;
  }

  a.text-danger,
  a.text-muted,
  a.text-primary {
    text-decoration: underline;
  }

  .text-small {
    font-size: 85%;
  }
`
