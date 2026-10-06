FROM python:3.11-slim
WORKDIR /app
COPY . /app
ENV PORT=3000
ENV REQUIRE_AUTH=true
EXPOSE 3000
CMD ["python3", "server.py"]
