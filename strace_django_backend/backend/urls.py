from django.contrib import admin
from django.urls import path

from backend.views import StraceOutput
urlpatterns = [
    path('', StraceOutput.as_view()),
]
