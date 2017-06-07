FROM spikerlabs/angular4-cli
WORKDIR /app
COPY . /app
RUN npm install \
  &&
# setup environment
ENV APP_HOST ${APP_HOST:-localhost}
ENV APP_PORT ${APP_PORT:-4200}
EXPOSE ${PORT}
# run
ENTRYPOINT ["ng", "serve", "--environment", "prod", "--host", "${HOST}", "--port", "${PORT}"]
