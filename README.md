# PowerStack GraphiQL Explorer

PowerStack GraphiQL Explorer

https://explorer.powerstack.xyz

## Credits

This project is a fork of [hasura/graphiql-online](https://github.com/hasura/graphiql-online)

## Environment Variables

This app uses a few environment variables which are required for development. The production build uses values directly present in index.html serving this app.

We use [dotenv](https://github.com/motdotla/dotenv) for setting environment variables for development. Create a `.env` file in the root directory (wherever package.json is) and set the following values. Replace accordingly for testing.

```
PORT=3000
NODE_ENV=development
GRAPHQL_ENDPOINT=https://api.powerstack.xyz/v1/graphql
HEADER_STRING='{}'
VARIABLE_STRING='{}'
QUERY_STRING=''
```
## Docker

```
# Build the image
docker build -t powerstack-explorer:local .

# Start a container
docker run --name powerstack-explorer --env-file .env -p 8080:8080 -d powerstack-explorer:local

# Get container ID
docker ps -aqf "name=^powerstack-explorer$"

# Print app output
docker logs -f powerstack-explorer

# Stop, start, restart, kill
docker stop powerstack-explorer
docker start powerstack-explorer
docker restart powerstack-explorer
docker kill powerstack-explorer
```
## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
