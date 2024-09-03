/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "SomeSecretOne": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "SomeSecretTwo": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "test-api": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
  }
}
export {}
