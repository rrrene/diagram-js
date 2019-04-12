import inherits from 'inherits';

import CommandInterceptor from '../../../command/CommandInterceptor';

var LOW_PRIORITY = 500;


export default function ToggleCollapseBehavior(eventBus) {
  CommandInterceptor.call(this, eventBus);

  this.postExecuted([ 'shape.toggleCollapse' ], LOW_PRIORITY, function(event) {
    var context = event.context,
        hints = context.hints,
        shape = context.shape;

    if (hints && (hints.root === false || hints.autoResize === false)) {
      return;
    }

    if (shape.collapsed) {
      return;
    }

    console.log('TODO')
  });
}

ToggleCollapseBehavior.$inject = [ 'eventBus' ];

inherits(ToggleCollapseBehavior, CommandInterceptor);