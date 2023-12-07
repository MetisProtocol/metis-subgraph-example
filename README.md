# Metis Subgraph Example

## Learn subgraph protocol

https://thegraph.com/docs/en/quick-start/

## Deployment

- create a new user on the [0xgraph.xyz](https://metis.0xgraph.xyz), it's working in progress, you may need to apply the deployment permission(you can file an github issue for that)
- get your first api key on the [dashboard](https://metis.0xgraph.xyz/dashboard/api) and add it by `graph auth https://metisapi.0xgraph.xyz/deploy`
- create your subgraph by `graph create --node https://metisapi.0xgraph.xyz/deploy YOUR_USER_NAME/YOUR_SUBGRAPH_NAME`
- deploy your subgraph by `graph deploy --version-label v0.0.1 --network andromeda --node https://metisapi.0xgraph.xyz/deploy --ipfs https://metisapi.0xgraph.xyz/ipfs YOUR_USER_NAME/YOUR_SUBGRAPH_NAME`

for more details, please read the [subgraph](./subgraph) workspace.
