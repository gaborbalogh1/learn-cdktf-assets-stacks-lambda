## Learn Terraform CDKTF - Assets, Stacks and Lambda

This repo is a companion repo to the [Deploy Multiple Lambda Functions with TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-assets-stacks-lambda?in=terraform/cdktf) tutorial, containing configuration files for both CDKTF and Lambda functions.

The `cdktf` directory contains all the CDKTF configuration. The `lambda-hello-world` and ////`lambda-hello-name` are sample Lambda functions that print "Hello world" and "Hello name", where `name` is the `name` query parameter.
https://learn.hashicorp.com/tutorials/terraform/cdktf-install

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

# install aws cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# I have now set a basic script up to run the installation 
# after it has run you should have all dependencies installed to start a project

# manual steps

# to make it work:
cd cdktf

echo "Next install cdktf" 
npm install --global cdktf-cli@latest

echo "runing cdktf help to confirm installation"

cdktf --version

# initialize new project
cdktf init --template=typescript --local

npm fund
npm install -g npm@8.19.2   // optional
npm fund
# Next install provider 
cdktf provider add "aws@~>4.0" random 
cdktf list
cdktf provider add kreuzwerker/docker
# Next Deploy the lambda function
cdktf deploy lambda-hello-world
cdktf deploy lambda-hello-name

# this doesnt work
import * as docker from @cdktf/provider-docker;
import * as aws from "@cdktf/provider-aws";
import * as random from "@cdktf/provider-random";

import { AwsProvider, ec2 } from "./.gen/providers/aws";


# because I want to learn both cdktf and awscdk I have created both folder 
cd awscdk

# install the cdk
npm install -g aws-cdk

# check version
cdk --version

# create base project with typescript
mkdir awscdk && cd awscdk
cdk init sample-app --language typescript

# overview of the files
# https://cdkworkshop.com/20-typescript/20-create-project/300-structure.html

lib/cdk-workshop-stack.ts is where your CDK application’s main stack is defined. This is the file we’ll be spending most of our time in.
bin/cdk-workshop.ts is the entrypoint of the CDK application. It will load the stack defined in lib/cdk-workshop-stack.ts.
package.json is your npm module manifest. It includes information like the name of your app, version, dependencies and build scripts like “watch” and “build” (package-lock.json is maintained by npm)
cdk.json tells the toolkit how to run your app. In our case it will be "npx ts-node bin/cdk-workshop.ts"
tsconfig.json your project’s typescript configuration
.gitignore and .npmignore tell git and npm which files to include/exclude from source control and when publishing this module to the package manager.
node_modules is maintained by npm and includes all your project’s dependencies.

# next run cdk synth
cdk synth

# next run bootstrap
cdk bootstrap

# make sure aws cli is installed and you have provided credentials

# and finally deploy the stack
cdk deploy

# remove the example code from the /lib/stackname.ts file
# run diff
cdk diff

# run deploy to clean up 
cdk deploy

# start coding head over to filename.ts and add in some resouce to the stack >>

# more available commands
cdk watch - enable hot deployments
cdk watch --no-hotswap - to disable hot deployments