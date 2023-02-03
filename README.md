# unb-libraries/docker-einbaum  [![GitHub license](https://img.shields.io/github/license/unb-libraries/docker-einbaum)](https://github.com/unb-libraries/lib.unb.ca/blob/prod/LICENSE) ![GitHub repo size](https://img.shields.io/github/repo-size/unb-libraries/docker-einbaum?label=lean%20repo%20size)
A lightweight einbaum docker image for running cypress based tests in a local or CI environment.

## Images
We are currently maintaining the following images:

| Image  | Current                                           | Cypress |
|--------|---------------------------------------------------|---------|
| base   | ghcr.io/unb-libraries/einbaum/base:12.x-1.x       | 12.x    |
| drupal | ghcr.io/unb-libraries/einbaum/drupal:12.x-9.x-1.x | 12.x    |

## Usage
To use an image in local development or in a CI workflow, include the following in your ```docker-compose.yml```:
```yaml
services:
  app:
    # ...
    networks:
      - app.local.network
  
  cypress:
    image: # <IMAGE_TAG>
    container_name: einbaum.app
    depends_on:
      - app
    environment:
      - BASE_URL=http://app  # http://<APP_CONTAINER_NAME>
    volumes:
      - ./path/to/einbaum/e2e:/einbaum/e2e
      - ./path/to/einbaum/fixtures:/einbaum/fixtures
      
      # (optional) Video and Failure screenshot
      - ./path/to/einbaum/screenshots:/einbaum/cypress/screenshots
      - ./path/to/einbaum/videos:/einbaum/cypress/videos
    networks:
      # must be in same network as "app"
      - app.local.network
        
networks:
  app.local.network:
    name: app.local.network
```

## Author / Contributors
This application was created at [![UNB Libraries](https://github.com/unb-libraries/assets/raw/master/unblibbadge.png "UNB Libraries")](https://lib.unb.ca) by the following humans:

<a href="https://github.com/patschilf"><img src="https://avatars.githubusercontent.com/u/46682967?v=4" title="Patrick Schilf" width="128" height="128"></a>

## License
- As part of our 'open' ethos, UNB Libraries licenses its applications and workflows to be freely available to all whenever possible.
- Consequently, the contents of this repository [unb-libraries/docker-einbaum] are licensed under the [MIT License](http://opensource.org/licenses/mit-license.html). This license explicitly excludes:
    - Any website content, which remains the exclusive property of its author(s).
    - The UNB logo and any of the associated suite of visual identity assets, which remains the exclusive property of the University of New Brunswick.
