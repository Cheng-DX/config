<br>

<p align="center">
<img style="width: 100px" src="./asset/config-icon.png"/>
</p>

<h1 align="center">CONFIG</h1>

<p align="center">Some configs</p>

## Usage
### ui(NEW)
You can use a better ui(Powered by [prompt](https://github.com/flatiron/prompt)) to add config files now. Moreover, It will read options.js file then generate file list with a simple config.
Learn more in [Contributing](https://github.com/Cheng-DX/config#contributing) 

> <br>
> <img src="./asset/jsshell.png"/>
> <h3 align='center'>Preview</h3>

### shell(OLD)

There is a shell file -> [`download.sh`](download.sh) to download config files and dependencies for you._

```shell
$ sh download.sh [config]
```
The slot of [config] is as `Configs` </br>
like `unocss`
```shell
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  100% [==============================] 100% 1.00  kB/s   00:00:00 --:--:-- --:--:--
```

## Contributing
This repo needs your help, upload your config file then it will be available for everyone.

### Steps
- Fork Me [Go to fork](https://github.com/Cheng-DX/config/fork)
- Add your file to `/configs`
- Add an item in file [options.js](options.js) to make your file available in the ui
> See option value type declaration in [options.d.ts](%40types/options.d.ts) to help you.

## Configs

<details open>
<summary>UnoCss</summary>

🌭 [`unocss`](uno.config.ts) -- **_unocss config file_**
```sh
npm i -D unocss
npm i -D @unocss/preset-icons @iconify-json/carbon
```

</details>

<details open>
<summary>GitIgnore</summary>

🍕 [`gitingore`](.gitignore) -- **_gitignore file_**

- Logs
- dependencies
- Editor directories and files

</details>

<details open>
<summary>MIT LICENSE</summary>

🥞 [`mit`](MITLICENSE) -- **_Mit License_**

- 2022 Year
</details>

<details open>
<summary>READEME</summary>

🥠 [`readme`](READMETemplate.MD) -- **_readme template_**

- Icon slot
- Description slot
- Features slot
- Usage slot
- License slot

</details>

<details open>
<summary>ESLint</summary>

🌮 [`eslint`](./.eslintrc) -- **_eslint config based on AntFu's_**

```sh
npm i -D eslint @antfu/eslint-config
```
- Turned off `arrow-paren`
</details>

## License

[MIT](./LICENSE) License © 2022 [Cheng-DX](https://github.com/Cheng-DX)
