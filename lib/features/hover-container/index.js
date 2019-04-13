import HoverContainer from './HoverContainer';
import MouseTrackingModule from '../mouse-tracking';

export default {
  __depends__: [
    MouseTrackingModule
  ],
  __init__: [ 'hoverContainer' ],
  hoverContainer: [ 'type', HoverContainer ]
};
