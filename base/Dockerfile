FROM cypress/included:12.0.1

WORKDIR /einbaum

# Build image
COPY ./build /einbaum
RUN mv ./scripts /scripts && \
    chmod -R 755 /scripts && \
    npm install github:unb-libraries/einbaum && \
    # Uninstall local cypress as base image ships with a global install
    npm uninstall cypress

ENTRYPOINT [ "/scripts/run.sh" ]

# Container metadata
LABEL ca.unb.lib.generator="einbaum" \
  org.label-schema.build-date=$BUILD_DATE \
  org.label-schema.description="docker-einbaum is the base E2E testing image at UNB Libraries." \
  org.label-schema.name="einbaum" \
  org.label-schema.url="https://github.com/unb-libraries/docker-einbaum" \
  org.label-schema.vcs-ref=$VCS_REF \
  org.label-schema.vcs-url="https://github.com/unb-libraries/docker-einbaum" \
  org.label-schema.version=$VERSION \
  org.opencontainers.image.source="https://github.com/unb-libraries/docker-einbaum"