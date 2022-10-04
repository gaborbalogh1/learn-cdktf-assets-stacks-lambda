## Learn Terraform CDKTF - Assets, Stacks and Lambda

This repo is a companion repo to the [Deploy Multiple Lambda Functions with TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-assets-stacks-lambda?in=terraform/cdktf) tutorial, containing configuration files for both CDKTF and Lambda functions.

The `cdktf` directory contains all the CDKTF configuration. The `lambda-hello-world` and `lambda-hello-name` are sample Lambda functions that print "Hello world" and "Hello name", where `name` is the `name` query parameter.

to make it work:
cd cdktf
npm install
npm install -g npm@8.19.2   // optional
npm fund

Next install cdktf
npm install --global cdktf-cli@latest
npm fund

run cdktf help //to confirm installation