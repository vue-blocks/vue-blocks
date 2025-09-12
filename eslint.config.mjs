// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import unusedImports from 'eslint-plugin-unused-imports'

export default withNuxt(
    // Your custom configs here
    {
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            'no-console': 'off',
            'node/prefer-global/process': 'off',
            'ts/explicit-function-return-type': 'off',
            'vue/block-order': 'off',
            'vue/valid-template-root': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'no-async-promise-executor': 'off',
            'vue/no-multiple-template-root': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'vue/no-v-html': 'off',
            'vue/multi-word-component-names': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
)
