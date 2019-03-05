import KeyboardModule from '../keyboard';
import SelectionModule from '../selection';
import RulesModule from '../rules';

import KeyboardMoveSelection from './KeyboardMoveSelection';

export default {
  __depends__: [
    KeyboardModule,
    SelectionModule,
    RulesModule
  ],
  __init__: [
    'keyboardMoveSelection'
  ],
  keyboardMoveSelection: [ 'type', KeyboardMoveSelection ]
};
