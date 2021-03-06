export * from './helper';

import {
  insertCSS
} from './helper';

import diagramCSS from '../assets/diagram-js.css';

insertCSS('diagram-js.css', diagramCSS);

insertCSS('diagram-js-testing.css',
  '.test-container .test-content-container { height: 500px; max-height: 100%; }'
);


import BoundsMatchers from './matchers/BoundsMatchers';
import ConnectionMatchers from './matchers/ConnectionMatchers';

/* global chai */

// add suite specific matchers
chai.use(BoundsMatchers);
chai.use(ConnectionMatchers);
