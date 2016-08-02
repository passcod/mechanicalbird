// @flow
import { createRenderer } from 'react-addons-test-utils'

export function testRender (ctx/* : React$Element<*> */, cb/* : Function */) {
  const shallow = createRenderer()
  shallow.render(ctx)
  cb(shallow.getRenderOutput())
}
