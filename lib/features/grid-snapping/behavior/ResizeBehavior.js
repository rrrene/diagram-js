import inherits from 'inherits';

import CommandInterceptor from '../../../command/CommandInterceptor';

export default function ResizeBehavior(eventBus, gridSnapping) {
  CommandInterceptor.call(this, eventBus);

  this.preExecute('shape.resize', function(event) {
    var context = event.context,
        newBounds = context.newBounds;

    // snap width/height to multiples of 10 >= width/height
    [ 'width', 'height' ].forEach(function(value) {
      newBounds[ value ] = gridSnapping.snapValue(newBounds[ value ], {
        min: newBounds[ value ]
      });
    });
  });
}

ResizeBehavior.$inject = [
  'eventBus',
  'gridSnapping'
];

inherits(ResizeBehavior, CommandInterceptor);