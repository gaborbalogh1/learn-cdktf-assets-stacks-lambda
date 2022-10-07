#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwscdkStack } from '../lib/awscdk-stack';

const app = new cdk.App();
new AwscdkStack(app, 'AwscdkStack');
