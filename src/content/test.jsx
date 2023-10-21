import React from 'react';
 // Import the CSS for Tippy


import { Tooltip } from 'react-tooltip';

export default function Test() {

  return (
    <div>
{/* 
<a
  data-tooltip-id="my-tooltip"
  // data-tooltip-content="1"
  data-some-relevant-attr="wow"
>
  ◕‿‿◕
</a>
<a
  data-tooltip-id="my-tooltip"
  // data-tooltip-content="2"
  data-some-relevant-attr="so relevant"
>
  ◕‿‿◕
</a>
<a
  data-tooltip-id="my-tooltip"
  // data-tooltip-content="3"
  data-some-relevant-attr="much important"
>
  ◕‿‿◕
</a>
<Tooltip
  id="my-tooltip"
  render={({ content, activeAnchor }) => (
    <span>
      <h1>The element #{content} is currently active.</h1>
      <br/>
      Relevant attribute: {activeAnchor?.getAttribute('data-some-relevant-attr') || 'not set'}
    </span>
  )}
/> */}
{/* <a data-tooltip-id="my-tooltip-children-multiline"> ◕‿‿◕ </a> */}
{/* <Tooltip id="my-tooltip-children-multiline">
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span>Hello</span>
    <span>some stuff in between</span>
    <span>world!</span>
  </div>
</Tooltip> */}
    </div>
  )
}
