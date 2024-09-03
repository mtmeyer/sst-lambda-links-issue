export const secrets = {
  SOME_SECRET_ONE: new sst.Secret("SomeSecretOne"),
  SOME_SECRET_TWO: new sst.Secret("SomeSecretTwo")
}

export const allSecrets = Object.values(secrets)
