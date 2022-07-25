# AWS EC@

## apache config file update

### file name - /etc/apache2/sites-available/000-default.conf

```
Alias /media /home/ubuntu/strace/strace_django_backend/media
<Directory /home/ubuntu/strace/strace_django_backend/media>
Require all granted
</Directory>
Alias /static /home/ubuntu/strace/strace_django_backend/static
<Directory /home/ubuntu/strace/strace_django_backend/static>
Require all granted
</Directory>
<Directory /home/ubuntu/strace/strace_django_backend/strace_django_backend>
<Files wsgi.py>
Require all granted
</Files>
</Directory>

        WSGIDaemonProcess strace_django_backend python-home=/home/ubuntu/strace/env/ python-path=/home/ubuntu/strace/strace_django_backend
        WSGIProcessGroup strace_django_backend
        WSGIScriptAlias / /home/ubuntu/strace/strace_django_backend/strace_django_backend/wsgi.py
```

### Next Step:

- sudo apt-get install libapache2-mod-wsgi-py3
- sudo apache2ctl configtest
- sudo ufw allow 'Apache Full'

### if 403 forbidden error:

- it is because apache don't have permission to read the **strace_django_backend** directory.
- To read the wsgi.py file it must have the permission to access the whole path that is in my case: _/home/ubuntu/strace/strace_django_backend/_
- chown :www-data home
- chown :www-data ubuntu
- chown :www-data strace
- chown :www-data strace_django_backend

### Refernce:

- [https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-apache-and-mod_wsgi-on-ubuntu-16-04](serve django application with apache)
