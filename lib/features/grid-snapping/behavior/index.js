import GridSnapping from '../GridSnapping';

import ResizeBehavior from './ResizeBehavior';
import SpaceToolBehavior from './SpaceToolBehavior';
import ToggleCollapseBehavior from './ToggleCollapseBehavior';

export default {
  __depends__: [
    GridSnapping
  ],
  __init__: [
    'gridSnappingResizeBehavior',
    'gridSnappingSpaceToolBehavior',
    'gridSnappingToggleCollapseBehavior'
  ],
  gridSnappingResizeBehavior: [ 'type', ResizeBehavior ],
  gridSnappingSpaceToolBehavior: [ 'type', SpaceToolBehavior ],
  gridSnappingToggleCollapseBehavior: [ 'type', ToggleCollapseBehavior ]
};