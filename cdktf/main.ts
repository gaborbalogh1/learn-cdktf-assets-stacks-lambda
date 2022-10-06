import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
//import * as aws from "@cdktf/provider-aws";
import * as random from "@cdktf/provider-random";
import * as docker from "@cdktf/provider-docker";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    new random.provider.RandomProvider(this, "random");

    // declare provider resources here
    new docker.provider.DockerProvider(this, "docker");

    // Create random value
    // Create random value
    const pet = new random.pet.Pet(this, "random-name", {
      length: 2,
    });

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
  }
}

const app = new App();
new MyStack(app, "cdktf");
app.synth();
