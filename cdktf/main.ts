import { Construct } from "constructs";
import { App, TerraformStack, } from "cdktf";
import {Image, Container} from './.gen/providers/docker';
//import { AwsProvider, ec2 } from "./.gen/providers/aws";


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    // const image = new Image(this, "nginxImage", {
    //   name: 'nginx:latest',
    //   keepLocally: false,
    // })

    // new Container(this, "nginxContainer", {
    //   image: image.latest,
    //   name: "tutorial",
    //   ports: [{
    //     internal: 80,
    //     external: 8080
    //   }],
    // })

    // docker example dont work will try aws instead

    // new AwsProvider(this, "AWS", {
    //   region: "us-west-1",
    // });

    // const instance = new ec2.Instance(this, "compute", {
    //   ami: "ami-01456a894f71116f2",
    //   instanceType: "t2.micro",
    // });

    // new TerraformOutput(this, "public_ip", {
    //   value: instance.publicIp,
    // });

  }
}

const app = new App();
new MyStack(app, "cdktf");
app.synth();
