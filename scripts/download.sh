# Download the latest version of the script from github
# Moreover, help you install the nessessary packages
# Usage: download.sh readme | gitignore | eslint | unocss | mit
# Tip: create an alias might be helpful

BASE_URL="https://raw.githubusercontent.com/Cheng-DX/config/main/configs/"

# my readme file
if [ $1 = "readme" ]
then
    curl -o README.md $BASE_URL+="READMETemplate.MD"

# .gitignore file from create-vite/vue
elif [ $1 = "gitignore" ]
then
    curl -o .gitignore $BASE_URL+=".gitignore"

# mit license
elif [ $1 = "mit" ]
then
    curl -o LICENSE $BASE_URL+="MITLICENSE"

# eslint
elif [ $1 = "eslint" ]
then
    curl -o .eslintrc $BASE_URL+=".eslintrc"
    echo "Installing package for you :P"
    ni -D eslint @antfu/eslint-config --prefer-offline
    echo "Done, enjoy :)"

# unocss @see https://github.com/unocss/unocss
# uno.config.ts: with presets like attributify, icons, webfonts and my custom rules
elif [ $1 = "unocss" ]
then
    curl -o uno.config.ts $BASE_URL+="uno.config.ts"
    echo "Intalling packages for you :P"
    ni -D unocss @unocss/preset-icons @iconify-json/carbon --prefer-offline

# package.json for starter-ts @see https://github.com/antfu/starter-ts
elif [ $1 = "ts-packagejson" ]
then 
    curl -o package.json $BASE_URL+="ts-package.json"

else
    echo "Invalid param"
fi
