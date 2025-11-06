import configWebApp, { defineConfig } from 'eslint-config-cityssm';
import { cspellWords } from 'eslint-config-cityssm/exports';
export const config = defineConfig(configWebApp, {
    files: ['**/*.ts'],
    languageOptions: {
        parserOptions: {
            project: ['./tsconfig.json', './javascripts/tsconfig.json'],
            projectService: true
        }
    },
    rules: {
        '@cspell/spellchecker': [
            'warn',
            {
                cspell: {
                    words: [...cspellWords, 'javascripts']
                }
            }
        ],
        'unicorn/numeric-separators-style': 'off'
    }
});
export default config;
