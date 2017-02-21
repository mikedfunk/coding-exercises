FROM php:fpm
ENV ENV_DGBP_IDEKEY=mikedfunkxd
RUN docker-php-ext-install pdo pdo_mysql
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug
COPY php.ini /usr/local/etc/php/php.ini
RUN ln -sf /usr/local/etc/php/php.ini /usr/local/etc/php-fpm.d/php.ini
