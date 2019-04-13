import HoverContainerModule from '../hover-container';
import SelectionModule from '../selection';

import Dragging from './Dragging';
import HoverFix from './HoverFix';

export default {
  __init__: [
    'hoverFix'
  ],
  __depends__: [
    HoverContainerModule,
    SelectionModule
  ],
  dragging: [ 'type', Dragging ],
  hoverFix: [ 'type', HoverFix ]
};