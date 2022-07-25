# Strace

## Introduction

strace is a useful diagnostic, instructional, and debugging tool.
System administrators, diagnosticians and trouble-shooters will
find it invaluable for solving problems with programs for which
the source is not readily available since they do not need to be
recompiled in order to trace them. Students, hackers and the
overly-curious will find that a great deal can be learned about a
system and its system calls by tracing even ordinary programs.
And programmers will find that since system calls and signals are
events that happen at the user/kernel interface, a close
examination of this boundary is very useful for bug isolation,
sanity checking and attempting to capture race conditions. Click here for [https://man7.org/linux/man-pages/man1/strace.1.html](man page of strace).

## About Project

Strace is a command line tool and don't have graphical interface. I tried to counter that with a web application created using Django and Reactjs, with minimal UI so everybody can use that for debugging.

## Feature

- user can enter either process name or process id and a particular sys call can be tracked if he wants to.
- The program will be wrapped in a docker container so user don't have to start the server on their own (upcoming).

## How to run?

- First clone the repo.
- create a python virtual environment, I have used **virtualenv** module.
- pip install django djangorestframework django-cors-headers
- python strace_django_backend/manage.py runserver
- edit strace_frontend/src/App.js for django server IP(default:**127.0.0.1:8000**).
- cd strace_frontend && npm install && npm start

## Upcoming Update:

- the frontend directory will be removed and only django directory will remain.
- dockerizing the whole process and provide a docker image.
