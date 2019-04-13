import {
  getBBox as getBoundingBox
} from '../../util/Elements';

var DEFAULT_OFFSET = 10;

export default function HoverContainer(
    mouseTracking, interactionEvents, selection, eventBus) {

  this._mouseTracking = mouseTracking;
  this._interactionEvents = interactionEvents;
  this._selection = selection;

  var self = this;

  function minimizeHoverArea(event) {

    var element = event.element;

    if (!isContainerElement(element)) {
      return;
    }

    var hoverContext = self._mouseTracking.getHoverContext(),
        hoveredPoint = hoverContext.point;


    // decorate event with additional information whether event is happened on the border
    // of an container element
    var onBorder = event.onBorder = isOnBorder(hoveredPoint, element);

    return onBorder;

  }

  function preventNonBorderDrag(event) {
    var element = event.element;

    if (isContainerElement(element) && !self._selection.isSelected(element)) {
      event.element = element.parent;
    }
  }

  // todo(pinussilvestrus): deprecated?
  eventBus.on('element.hover', function(event) {
    self._interactionEvents.registerEvent(event.gfx, 'mousemove', 'element.mousemove');
  });

  // todo(pinussilvestrus): deprecated?
  eventBus.on('element.out', function(event) {
    self._interactionEvents.unregisterEvent(event.gfx, 'mousemove', 'element.mousemove');
  });

  // todo(pinussilvestrus): deprecated?
  eventBus.on('element.mousemove', function(event) {
    minimizeHoverArea(event);
  });

  eventBus.on('element.click', function(event) {
    minimizeHoverArea(event);
  });

  eventBus.on('element.mousedown', function(event) {
    preventNonBorderDrag(event);
  });

}

HoverContainer.$inject = [
  'mouseTracking',
  'interactionEvents',
  'selection',
  'eventBus'
];

// helper ///////////////

// todo(pinussilvestrus): move to somewhere else
function isContainerElement(element) {
  // todo(pinussilvestrus): remove me
  return element.type === 'bpmn:Group';
  // return element.isContainer;
}

// todo(pinussilvestrus): maybe move to ElementsHelper
function isOnBorder(point, element,offset) {
  var bbox = getBoundingBox(element);

  // allow a few pixels around
  offset = offset || DEFAULT_OFFSET;

  // todo(pinussilvestrus): refactor me
  return (point.x >= bbox.x && point.x <= bbox.x + bbox.width && ( // horizontal border
    point.y >= bbox.y - offset && point.y <= bbox.y + offset || // upper
    point.y >= bbox.y + bbox.height - offset && point.y <= bbox.y + bbox.height + offset) // lower
  ) ||
    (point.y >= bbox.y && point.y <= bbox.y + bbox.height && ( // vertical border
      point.x >= bbox.x - offset && point.x <= bbox.x + offset || // left
      point.x >= bbox.x + bbox.width - offset && point.x <= bbox.x + bbox.width + offset)); // right
}