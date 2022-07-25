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
