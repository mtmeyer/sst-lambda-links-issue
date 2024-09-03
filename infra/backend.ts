import { resolve } from "node:path";
import { allSecrets } from "./secrets"

export const api = new sst.aws.ApiGatewayV2("test-api", {
});

api.route(
  "ANY /{route+}",
  {
    runtime: "provided.al2023",
    architecture: "x86_64",
    bundle: build(),
    handler: "bootstrap",
    url: true,
    live: false,
    link: [...allSecrets],
    environment: {
      ENVIRONMENT: "prod",
    },
  }
)

function build() {
  const BUILD_DIR = resolve(__dirname, "../../backend")
  const OUTPUT_DIR = resolve(__dirname, "../../.build/lambda")
  require("child_process").execSync(`
   cd ${BUILD_DIR} 
    GOOS=linux GOARCH=amd64 go build -o bootstrap .
    mkdir -p ${OUTPUT_DIR}
    cp ${BUILD_DIR}/bootstrap ${OUTPUT_DIR}/bootstrap
  `);
  return OUTPUT_DIR;
}
