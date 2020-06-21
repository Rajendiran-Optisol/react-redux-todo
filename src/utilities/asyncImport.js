import { join } from 'path';
import * as Components from '../views';

function makeComponent(component) {
    return import(Components[component])
}

export default makeComponent;