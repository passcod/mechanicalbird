import 'domready'
import 'immutable'
import 'moment'

import { TextDecoder, TextEncoder } from 'text-encoding'
if (!('TextDecoder' in window)) { Object.assign(window, { TextDecoder }) }
if (!('TextEncoder' in window)) { Object.assign(window, { TextEncoder }) }
