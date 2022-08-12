import { container } from '../di/dependencyContainer'
import { core } from '../core'

container.createLink.execute(new core.CreateLinkInputPort('a', 'b', new Date()))
console.log(container.loadLink.execute('link01'))
// db.print()