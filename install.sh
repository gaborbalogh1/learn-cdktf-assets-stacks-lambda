#! /bin/bash
# to make it work:
cd cdktf
npm install
npm install -g npm@8.19.2   // optional
npm fund

# Next install cdktf
npm install --global cdktf-cli@latest
npm fund

run cdktf help //to confirm installation

# initialize new project with typescript 
cdktf init --template=typescript --local

# Next install provider 
cdktf provider add "aws@~>4.0" random 
cdktf list
cdktf provider add kreuzwerker/docker
# Next Deploy the lambda function
cdktf deploy lambda-hello-world
cdktf deploy lambda-hello-name

# install terraform 

https://learn.hashicorp.com/tutorials/terraform/install-cli
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