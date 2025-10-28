# Changelog

## [3.0.4](https://github.com/touchspot/eslint-config/compare/v3.0.3...v3.0.4) (2025-10-28)


### Bug Fixes

* allow Next.js 16 in peer deps ([0a0d393](https://github.com/touchspot/eslint-config/commit/0a0d393875d2aa8d124b2b090bc2fb578c864855))

## [3.0.3](https://github.com/touchspot/eslint-config/compare/v3.0.2...v3.0.3) (2025-10-23)


### Bug Fixes

* prevent parse errors when linting JS files ([adaabe4](https://github.com/touchspot/eslint-config/commit/adaabe4a9ce8d166f6d4445aa78ec975ba705630))

## [3.0.2](https://github.com/touchspot/eslint-config/compare/v3.0.1...v3.0.2) (2025-10-23)


### Bug Fixes

* support typescript-eslint FlatConfig; introduce ConfigArray ([824263b](https://github.com/touchspot/eslint-config/commit/824263bfd54034602a39e09de095d093c2de0410))

## [3.0.1](https://github.com/touchspot/eslint-config/compare/v3.0.0...v3.0.1) (2025-10-22)


### Bug Fixes

* widen `Config` type to include `EslintConfig.Config[]` ([3442fd0](https://github.com/touchspot/eslint-config/commit/3442fd0fd5c247cc28b2ba6a055ac30de672485b))

## [3.0.0](https://github.com/touchspot/eslint-config/compare/v2.3.1...v3.0.0) (2025-10-22)


### ⚠ BREAKING CHANGES

* require tsconfigRootDir as option and remove compiler option from next/react preset

### Features

* update plugins ([d15ee0c](https://github.com/touchspot/eslint-config/commit/d15ee0c8093c59ae14bc37fb21d52f6c8b5aaa51))


### Bug Fixes

* disable `better-tailwindcss/enforce-consistent-class-order` ([3fd833c](https://github.com/touchspot/eslint-config/commit/3fd833c804f07787e68f97fb15dc64e2dc352fcf))

## [2.3.1](https://github.com/touchspot/eslint-config/compare/v2.3.0...v2.3.1) (2025-07-18)


### Bug Fixes

* allow tailwindcss@^3 as peer ([4782a54](https://github.com/touchspot/eslint-config/commit/4782a5407ecb72981253c6c12463b24e2c4b2a80))

## [2.3.0](https://github.com/touchspot/eslint-config/compare/v2.2.0...v2.3.0) (2025-07-18)


### Features

* allow jotai atom mutations ([06c0ba6](https://github.com/touchspot/eslint-config/commit/06c0ba6fa57d86f0b60271e191ad45807f767ebd))


### Bug Fixes

* upgrade dependencies ([c583855](https://github.com/touchspot/eslint-config/commit/c583855ce83afc645055f6da5e98c6e0e94c2904))

## [2.2.0](https://github.com/touchspot/eslint-config/compare/v2.1.1...v2.2.0) (2025-07-13)


### Features

* upgrade eslint-plugin-better-tailwindcss ([7cd8ebd](https://github.com/touchspot/eslint-config/commit/7cd8ebd8c4a9b01e286a909bbcdf8922255876bc))

## [2.1.1](https://github.com/touchspot/eslint-config/compare/v2.1.0...v2.1.1) (2025-07-11)


### Bug Fixes

* fix publish error ([be8899f](https://github.com/touchspot/eslint-config/commit/be8899f5e44f25ec67811080e03fed375ee0bda9))

## [2.1.0](https://github.com/touchspot/eslint-config/compare/v2.0.0...v2.1.0) (2025-07-11)


### Features

* enable `better-tailwindcss/enforce-shorthand-classes` ([fc34d6b](https://github.com/touchspot/eslint-config/commit/fc34d6ba00c40fe1c6e10552ad430536696b1eb5))

## [2.0.0](https://github.com/touchspot/eslint-config/compare/v1.7.1...v2.0.0) (2025-07-09)


### ⚠ BREAKING CHANGES

* replace eslint-plugin-tailwindcss with eslint-plugin-better-tailwindcss

### Features

* support tailwindcss v4 ([0b292ec](https://github.com/touchspot/eslint-config/commit/0b292ec1150e3c9cff40bf04bffe8b73097977da))


### Bug Fixes

* update dependencies ([ae310c3](https://github.com/touchspot/eslint-config/commit/ae310c389a27300e16b69b8d77c9521757d2e0ff))

## [1.7.1](https://github.com/touchspot/eslint-config/compare/v1.7.0...v1.7.1) (2025-05-06)


### Bug Fixes

* bump patch version to update latest tag ([2d0d0ea](https://github.com/touchspot/eslint-config/commit/2d0d0eac40e500c2063ed0ce1ebbbcdfdb59f775))

## [1.7.0](https://github.com/touchspot/eslint-config/compare/v1.6.4...v1.7.0) (2025-05-06)


### Features

* upgrade dependencies ([3e709aa](https://github.com/touchspot/eslint-config/commit/3e709aa77615d809ad9eee8c46590ac82b01b16b))

## [1.6.4](https://github.com/touchspot/eslint-config/compare/v1.6.3...v1.6.4) (2025-05-06)


### Bug Fixes

* set `allowDeclarations: true` for `@typescript-eslint/no-namespace` ([c28736f](https://github.com/touchspot/eslint-config/commit/c28736f419d721cd0b447f82f0c9294d74a489df))

## [1.6.3](https://github.com/touchspot/eslint-config/compare/v1.6.2...v1.6.3) (2025-04-17)


### Bug Fixes

* allow default export for `*.config.ts` ([d8b8f26](https://github.com/touchspot/eslint-config/commit/d8b8f26422c6e18f52651daec768a963cefe03f1))

## [1.6.2](https://github.com/touchspot/eslint-config/compare/v1.6.1...v1.6.2) (2025-04-14)


### Bug Fixes

* export `Config` type ([8a90741](https://github.com/touchspot/eslint-config/commit/8a90741a2f9a101635213a7d4deb043d6277eb29))
* remove usage of `@typescript-eslint/utils` ([4a0f79d](https://github.com/touchspot/eslint-config/commit/4a0f79d725c4e054936423e1b330b9645f3691e6))

## [1.6.1](https://github.com/touchspot/eslint-config/compare/v1.6.0...v1.6.1) (2025-04-14)


### Bug Fixes

* improve typings ([ff61865](https://github.com/touchspot/eslint-config/commit/ff618658b2eab5fee3d3f7eb9ec7bc843bd63b57))

## [1.6.0](https://github.com/touchspot/eslint-config/compare/v1.5.6...v1.6.0) (2025-04-14)


### Features

* upgrade plugins ([f53711b](https://github.com/touchspot/eslint-config/commit/f53711b04a7c2d17ce639129bedb07d50e8efca1))

## [1.5.6](https://github.com/touchspot/eslint-config/compare/v1.5.5...v1.5.6) (2025-02-02)


### Bug Fixes

* set `ignoreTernaryTests` to `false` for `@typescript-eslint/prefer-nullish-coalescing` ([2e76e0b](https://github.com/touchspot/eslint-config/commit/2e76e0b71c50073a9168885fc3ac2b48f8558c2f))
* upgrade dependencies ([6ad9e32](https://github.com/touchspot/eslint-config/commit/6ad9e328cc0b89dad89e6f7421bc91d5671d24fa))

## [1.5.5](https://github.com/touchspot/eslint-config/compare/v1.5.4...v1.5.5) (2024-12-11)


### Bug Fixes

* upgrade dependencies ([071836d](https://github.com/touchspot/eslint-config/commit/071836d39bc9508c903de239d5de3a0ba5bbceb8))

## [1.5.4](https://github.com/touchspot/eslint-config/compare/v1.5.3...v1.5.4) (2024-12-06)


### Bug Fixes

* upgrade React and other dependencies ([f2833fc](https://github.com/touchspot/eslint-config/commit/f2833fca18cbd2ff5a2f46a492c9f66e1b13e07a))
* use new resolver system of `eslint-plugin-import-x` ([5ba977e](https://github.com/touchspot/eslint-config/commit/5ba977e99d9c71cac8ad0ee4420391ee71609c0b))

## [1.5.3](https://github.com/touchspot/eslint-config/compare/v1.5.2...v1.5.3) (2024-11-22)


### Bug Fixes

* allow react@18 as peer dep ([c37e52b](https://github.com/touchspot/eslint-config/commit/c37e52bb53fb656c7eddd30000f99cfca087f696))
* upgrade dependencies ([a8dcaed](https://github.com/touchspot/eslint-config/commit/a8dcaedbb994c9dcdc3d5884f98ae844d8a4eae8))

## [1.5.2](https://github.com/touchspot/eslint-config/compare/v1.5.1...v1.5.2) (2024-10-23)


### Bug Fixes

* do not report error for react callback functions which have no problem ([4afedcc](https://github.com/touchspot/eslint-config/commit/4afedcc30ded6503af7cdbc2431f7fbbfafd3269))

## [1.5.1](https://github.com/touchspot/eslint-config/compare/v1.5.0...v1.5.1) (2024-10-23)


### Bug Fixes

* handle `useEffectEvent` correctly ([686763a](https://github.com/touchspot/eslint-config/commit/686763ad0076f660eca302374887c294f4244c6d))

## [1.5.0](https://github.com/touchspot/eslint-config/compare/v1.4.1...v1.5.0) (2024-10-23)


### Features

* support react compiler ([a1afa76](https://github.com/touchspot/eslint-config/commit/a1afa7649606c13356ea10c350c42f21d33eee99))


### Bug Fixes

* fix config names ([1407250](https://github.com/touchspot/eslint-config/commit/14072503e8571ba2191be67e35c49ea635871b58))

## [1.4.1](https://github.com/touchspot/eslint-config/compare/v1.4.0...v1.4.1) (2024-10-23)


### Bug Fixes

* upgrade dependencies ([5cd72a5](https://github.com/touchspot/eslint-config/commit/5cd72a5593e5a5be91c92c0f3fee62518d2eec91))

## [1.4.0](https://github.com/touchspot/eslint-config/compare/v1.3.0...v1.4.0) (2024-10-22)


### Features

* support Next.js 15 ([8f8c867](https://github.com/touchspot/eslint-config/commit/8f8c867f3dee4e2c0fc77a7bba2d8d6f10d92b04))

## [1.3.0](https://github.com/touchspot/eslint-config/compare/v1.2.5...v1.3.0) (2024-10-15)


### Features

* separate entry points for each preset ([597e3d7](https://github.com/touchspot/eslint-config/commit/597e3d7100409698a0295c879f523df68de8d0bc))

## [1.2.5](https://github.com/touchspot/eslint-config/compare/v1.2.4...v1.2.5) (2024-10-15)


### Bug Fixes

* ignore `coverage` directory by default ([d805c3f](https://github.com/touchspot/eslint-config/commit/d805c3fd34a0af136a2516b5ceb1d61e6f278a0e))

## [1.2.4](https://github.com/touchspot/eslint-config/compare/v1.2.3...v1.2.4) (2024-10-12)


### Bug Fixes

* disable buggy rules ([c74e491](https://github.com/touchspot/eslint-config/commit/c74e491b862d51b698980de2323ea50ca182ccd3))

## [1.2.3](https://github.com/touchspot/eslint-config/compare/v1.2.2...v1.2.3) (2024-10-12)


### Bug Fixes

* fix unintentional override of linting target glob ([3b3e64a](https://github.com/touchspot/eslint-config/commit/3b3e64aa55261e3199e00783447d2bd47d5f17e4))

## [1.2.2](https://github.com/touchspot/eslint-config/compare/v1.2.1...v1.2.2) (2024-10-12)


### Bug Fixes

* disable type-aware-linting rules for javascript files ([4c5eb7f](https://github.com/touchspot/eslint-config/commit/4c5eb7f6c53a56e6c3a0c1ef98f677fa59e3afb1))

## [1.2.1](https://github.com/touchspot/eslint-config/compare/v1.2.0...v1.2.1) (2024-10-12)


### Bug Fixes

* disable `projectService` for javascript files ([7324743](https://github.com/touchspot/eslint-config/commit/732474376e7d80a4031d5ba03146144555946fcf))

## [1.2.0](https://github.com/touchspot/eslint-config/compare/v1.1.0...v1.2.0) (2024-10-12)


### Features

* set `allowDefaultProject` for javascript files ([97bb1d7](https://github.com/touchspot/eslint-config/commit/97bb1d7140f4a1ae4afabb9f122ae50cf6d162e2))


### Bug Fixes

* use eslint-plugin-react-hooks@5 ([7987851](https://github.com/touchspot/eslint-config/commit/7987851989bc1685fb55fb3ae795947754896096))

## [1.1.0](https://github.com/touchspot/eslint-config/compare/v1.0.6...v1.1.0) (2024-10-12)


### Features

* upgrade dependencies ([9eaff9a](https://github.com/touchspot/eslint-config/commit/9eaff9aa03f9591eb5f86cb9bb1c35194048013a))

## [1.0.6](https://github.com/touchspot/eslint-config/compare/v1.0.5...v1.0.6) (2024-09-29)


### Bug Fixes

* correct usage of `eslint-plugin-import-x` ([936632b](https://github.com/touchspot/eslint-config/commit/936632b5951171148bba6cbc24f237368afa43ee))
* solve eslint warnings ([8f8badf](https://github.com/touchspot/eslint-config/commit/8f8badf4b3d27087248b796c85737d3859f66f27))
* upgrade dependencies ([c3555e0](https://github.com/touchspot/eslint-config/commit/c3555e07cf0e2aeaabc1dabec3ae347e910e5831))

## [1.0.5](https://github.com/touchspot/eslint-config/compare/v1.0.4...v1.0.5) (2024-09-23)


### Bug Fixes

* export `FlatConfig` type ([668978e](https://github.com/touchspot/eslint-config/commit/668978e9fb8ae05e9c1f79b8b6855a40da7c0a37))
* upgrade dependencies ([50ff619](https://github.com/touchspot/eslint-config/commit/50ff619cd99e19744e89ef94754b692341545aec))

## [1.0.4](https://github.com/touchspot/eslint-config/compare/v1.0.3...v1.0.4) (2024-08-27)


### Bug Fixes

* enable `env.browser()` and `env.node()` when `frameworks.next()` is used ([bac51a5](https://github.com/touchspot/eslint-config/commit/bac51a57d1afea3043ed693a54b5b5ea40eaed10))

## [1.0.3](https://github.com/touchspot/eslint-config/compare/v1.0.2...v1.0.3) (2024-08-27)


### Bug Fixes

* add default ignore patterns ([667686f](https://github.com/touchspot/eslint-config/commit/667686f0ec9d518c0a8466fc1d4f9b942c7a3645))

## [1.0.2](https://github.com/touchspot/eslint-config/compare/v1.0.1...v1.0.2) (2024-08-27)


### Bug Fixes

* global ignores should be set without any other options ([90b4864](https://github.com/touchspot/eslint-config/commit/90b48640c8e286529b99aab66c63ea299c5f6abf))

## [1.0.1](https://github.com/touchspot/eslint-config/compare/v1.0.0...v1.0.1) (2024-08-27)


### Bug Fixes

* disable some rules for dts files ([cfa118f](https://github.com/touchspot/eslint-config/commit/cfa118fc8af988e153a6a1792ea1cb06dc9e8a40))

## 1.0.0 (2024-08-27)


### ⚠ BREAKING CHANGES

* works only with `eslint@9`

### Features

* **eslint-plugin:** enable `arrow-body-style` ([18ed3d1](https://github.com/touchspot/eslint-config/commit/18ed3d1c3091f5bd0f358d67e7a726a366eee107))
* **eslint-plugin:** enforce `import/consistent-type-specifier-style` ([37a82ed](https://github.com/touchspot/eslint-config/commit/37a82edd93988b431be26cc8f644097b8133b8c3))
* **eslint-plugin:** introduce `eslint-plugin-security` ([a4a4d88](https://github.com/touchspot/eslint-config/commit/a4a4d88ebfc4db1fc436183fe454cb07236b2e7c))
* **eslint-plugin:** remove `eslint-plugin-import-access` usage ([85ddeef](https://github.com/touchspot/eslint-config/commit/85ddeef87df0b6591f55626b8439cb2dfe14f1b5))
* **eslint-plugin:** replace `eslint-plugin-import` with `eslint-plugin-import-x` ([728e0f6](https://github.com/touchspot/eslint-config/commit/728e0f66b97dce50631f116f739560bd2b5cf36b))
* **eslint-plugin:** update rules for `functional/immutable-data` ([83788a3](https://github.com/touchspot/eslint-config/commit/83788a35e77ad5b214cd81acb36290357ae2acd4))
* **eslint-plugin:** upgrade dependencies ([8d984ac](https://github.com/touchspot/eslint-config/commit/8d984acb7abc400f40a1a5d887b87a3fff348ae4))
* remake as shared flat config ([e85bf6b](https://github.com/touchspot/eslint-config/commit/e85bf6b6e57974f4b3d254c56edad0523558875b))
* setup codebase ported from @mozisan/eslint-plugin ([e529723](https://github.com/touchspot/eslint-config/commit/e529723d78a26e61fe8c89f9fbf36db650ec4998))
* upgrade dependent plugins ([cfed1cd](https://github.com/touchspot/eslint-config/commit/cfed1cd6fec2d3e3f022b5fe799a27b4ef72d55c))
