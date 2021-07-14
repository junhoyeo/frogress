# Frogress

[![NPM version](https://badgen.net/npm/v/@frogress/line)](https://www.npmjs.com/package/@frogress/line)
[![Package size](https://badgen.net/bundlephobia/minzip/@frogress/line)](https://bundlephobia.com/result?p=@frogress/line)

> ❄️ The ultimate Line Progress Bar UI for React

# @frogress/line

## 📦 Installation

```bash
# Install peer depedencies
yarn add react react-dom styled-components

# Install Frogress's Line Progress Bar component
yarn add @frogress/line
```

- `styled-components` will be replaced soon by React's internal `StyleSheet`(to reduce depedencies).

## 🚀 Usage

```tsx
import { LineProgressBar } from '@frogress/line'

<LineProgressBar percent={65} />
```

`percent` is the **percentage of the progress bar**(`number` type value with a range of `0` to `100`).
This property is required in TypeScript, but it will default to `0` if you ignore it.

### 👓 Compile-time Type checking
```diff
- <LineProgressBar percent={-32} />
- <LineProgressBar percent={-1} />

+ <LineProgressBar percent={0} />
+ <LineProgressBar percent={45} />
+ <LineProgressBar percent={100} />

- <LineProgressBar percent={101} />
- <LineProgressBar percent={9999} />
```

The type is enforced so that **only integers within the correct range are allowed.**

## 💡 What problem does this solve?

![Compared](./docs/images/compared.png)

Most existing line progress bar UI implementations do not support gradation or rounded edges.

## 🌸 Styling
TBD

### Size

### Color

### Rounding

### Direction

# @frogress/docs

<p align="center">

  <a href="https://frogress.vercel.app">
    <img alt="website-preview" src="./docs/images/website.png" width="520px" />
  </a>
  <blockquote align="center"><a href="https://frogress.vercel.app">📖 Documentation</a></blockquote>
</p>

## Development

```bash
# 🖨 Clone git repository
git clone https://github.com/junhoyeo/frogress
cd frogress

# 📦 Install depedencies
yarn install

# 🔨 Build @frogress/line
yarn workspace @frogress/line build

# 🏃‍♀️ Run development server for @frogress/docs
yarn workspace @frogress/docs dev
```
