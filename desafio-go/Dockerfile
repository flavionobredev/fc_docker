FROM golang:1.20rc1-alpine3.17 as builder
WORKDIR /app
COPY . .
RUN go env -w GO111MODULE=auto
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o desafio-go

FROM scratch
COPY --from=builder /app/desafio-go /app/
CMD [ "/app/desafio-go" ]