import { CASE_STUDIES } from './case-studies';
import fs from 'fs';

fs.writeFileSync('case-studies.json', JSON.stringify(CASE_STUDIES, null, 2));

console.log(`Exported ${CASE_STUDIES.length} cases`);
