import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import * as aws from "@cdktf/provider-aws";
import * as random from "@cdktf/provider-random";
import * as docker from "@cdktf/provider-docker";
import * as caller from "@cdktf/provider-aws/lib/data-aws-caller-identity";

const access_Key = ''
const secret_Key = ''

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    //declare aws provider here
    new aws.provider.AwsProvider(this, 'aws', {
      region: 'us-west-2',
      accessKey: access_Key,
      secretKey: secret_Key,
    })
    
    const account_id = new caller.DataAwsCallerIdentity(this, "current",)

    // declare random provider here
    new random.provider.RandomProvider(this, "random");

    // declare docker provider here
    new docker.provider.DockerProvider(this, "docker");

    // Create random value
    const pet = new random.pet.Pet(this, "random-name", {
      length: 2,
    });

    const bucket_name = "learning-cdkt-{pet.id}"

    // Create S3 bucket
    const bucket = new aws.s3Bucket.S3Bucket(this, 'bucket', {
      bucketPrefix: bucket_name,
      //acl: "public-read",
    })

    // bucket acl
    const bucket_acl = new aws.s3BucketAcl.S3BucketAcl(this, 'bucket_policy', {
      bucket: bucket.bucket,
      acl:"public-read",
    })

    const image = new docker.image.Image(this, "nginx", {
      name: "nginx",
      keepLocally: false,
    })

    const container = new docker.container.Container(this, "nginxContainer", {
      image: image.name,
      name: "tutorial",
      ports: [{
        internal: 80,
        external: 8080
      }],
    })

    new TerraformOutput(this, 'docker_image_id', {
      value: container.id
    });

    new TerraformOutput(this, 'docker_image_sha_id', {
      value: image.imageId
    });

    new TerraformOutput(this, 'pet_id', {
      value: pet.id
    });

    new TerraformOutput(this, 'bucket_acl', {
      value: bucket_acl.id
    });

    new TerraformOutput(this, 'account_id', {
      value: account_id.accountId,
    });

  }
}

const app = new App();
new MyStack(app, "cdktf");
app.synth();
