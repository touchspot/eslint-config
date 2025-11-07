# @touchspot/eslint-config

## Installation

```sh
pnpm add -D @touchspot/eslint-config eslint typescript
```

## Usage

```js
import config from "@touchspot/eslint-config";

export default config({
    tsconfigRootDir: import.meta.dirname,
});
```

### Addons

#### React

```js
import config from "@touchspot/eslint-config";
import react from "@touchspot/eslint-config/react";

export default config(
    {
        tsconfigRootDir: import.meta.dirname,
    },
    react(),
);
```

#### Next.js

```js
import config from "@touchspot/eslint-config";
import next from "@touchspot/eslint-config/next";

export default config(
    {
        tsconfigRootDir: import.meta.dirname,
    },
    next(),
);
```

#### Tailwind CSS v4

```js
import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/tailwindcss";

export default config(
    {
        tsconfigRootDir: import.meta.dirname,
    },
    tailwindcss({
        entryPoint: "path/to/css",
    }),
);
```

#### Tailwind CSS v3

```js
import config from "@touchspot/eslint-config";
import tailwindcss from "@touchspot/eslint-config/tailwindcss";

export default config(
    {
        tsconfigRootDir: import.meta.dirname,
    },
    tailwindcss({
        version: 3,
        tailwindConfig: "path/to/config", // default: "tailwind.config.js"
    }),
);
```

#### Environment helpers

```js
import config, { env } from "@touchspot/eslint-config";

export default config(
    {
        tsconfigRootDir: import.meta.dirname,
    },
    env.node(),
    env.browser(),
);
```
