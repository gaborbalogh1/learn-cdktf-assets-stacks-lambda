#! /bin/bash

echo "begin installation"

# install terraform 
# https://learn.hashicorp.com/tutorials/terraform/install-cli
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common

wget -O- https://apt.releases.hashicorp.com/gpg | \
    gpg --dearmor | \
    sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
    https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
    sudo tee /etc/apt/sources.list.d/hashicorp.list

sudo apt update
sudo apt upgrade -y

sudo apt-get install terraform

# install nodejs
sudo apt-get install -y nodejs

echo "installing yarn"

sleep -5

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update
sudo apt install yarn

sudo apt install --no-install-recommends yarn

echo "checking yarn version"
yarn --version

sudo apt autoremove -y

# install aws cli 
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install


# install step 2 set up aws cdk globally
# install the cdk
npm install -g aws-cdk

# check version
cdk --version

echo "initialize new project with typescript by running cdktf init --template=typescript --local"
echo "Intallation finished goodbye..."
