# Download the latest version of the script from github
# Moreover, help you install the nessessary packages
# Usage: download.sh readme | gitignore | eslint | unocss | mit
# Tip: create an alias might be helpful

if [ $1 = "readme" ]
then
    curl -o README.md https://raw.githubusercontent.com/Cheng-DX/config/main/configs/READMETemplate.MD
elif [ $1 = "gitignore" ]
then
    curl -o .gitignore https://raw.githubusercontent.com/Cheng-DX/config/main/configs/.gitignore
elif [ $1 = "mit" ]
then
    curl -o LICENSE https://raw.githubusercontent.com/Cheng-DX/config/main/MITLICENSE
elif [ $1 = "eslint" ]
then
    curl -o .eslintrc https://raw.githubusercontent.com/Cheng-DX/config/main/.eslintrc
    echo "Installing package for you :P"
    npm i -D eslint @antfu/eslint-config
    echo "Done, enjoy :)"
elif [ $1 = "unocss" ]
then
    curl -o uno.config.ts https://raw.githubusercontent.com/Cheng-DX/config/main/uno.config.ts
    echo "Intalling packages for you :P"
    npm i -D unocss
    npm i -D @unocss/preset-icons @iconify-json/carbon
else
    echo "Invalid param"
fi