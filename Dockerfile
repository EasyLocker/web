FROM node:18 AS build

# Create src directory
WORKDIR /src

# Bundle app source
COPY . .

RUN yarn install
RUN yarn build

# For runtime
FROM httpd:alpine AS runtime
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i 's#AllowOverride [Nn]one#AllowOverride All#' /usr/local/apache2/conf/httpd.conf
COPY --from=build /src/dist /usr/local/apache2/htdocs/
