import {url} from '../../../variables.js';
async function getAdviceData() {
    const response = await fetch(url);
    const { slip } = await response.json();
    return slip;
}
export { getAdviceData }