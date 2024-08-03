import { join } from 'node:path';
import { rmSync } from 'fs-extra';

const artifacts = [join(__dirname, './keystone.db')];

const dropDb = () => {
    for (const path of artifacts) {
        console.log(`[DROP ARTIFACT] ${path}`);
        rmSync(path);
    }
};
dropDb();
