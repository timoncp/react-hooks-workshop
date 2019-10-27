import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';

export default (props) => (
  <SyntaxHighlighter language='javascript' style={prism.atomDark}>
    {props.children}
  </SyntaxHighlighter>
);
