FROM python:3.6-slim-buster
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG="FALSE"
RUN apt-get update
# Remove all the unecessary packages installed by the update command
RUN rm -rf /var/lib/apt/lists/*
# Install python packages
COPY requirements.txt .
RUN pip install -r requirements.txt
EXPOSE 5000
COPY app.py /home/app.py
ENTRYPOINT FLASK_APP=/home/app.py flask run --host=0.0.0.0