FROM mysql

ENV MYSQL_ROOT_PASSWORD=docker
ENV MYSQL_DATABASE=fullcycle
ENV LANG=C.UTF-8

EXPOSE 3306

COPY init.sql /docker-entrypoint-initdb.d