'use strict';

const { run } = require('../utils/test-utils');
const helpHeader = 'The build tool for modern web applications';

describe('help flag with multiple arguments', () => {
    it('outputs info with dashed syntax', () => {
        const { stdout, stderr } = run(__dirname, ['--help', '--target', 'browser']);
        expect(stdout).toContain(helpHeader);
        expect(stderr).toHaveLength(0);
    });

    it('outputs info with multiple arguments using dashes and with precedence', () => {
        const { stdout, stderr } = run(__dirname, ['--target', 'browser', '--help']);
        expect(stdout).toContain(helpHeader);
        expect(stderr).toHaveLength(0);
    });

    it('outputs info with multiple commands and with precedence', () => {
        const { stdout, stderr } = run(__dirname, ['init', 'help']);
        expect(stdout).toContain(helpHeader);
        expect(stderr).toHaveLength(0);
    });
});
