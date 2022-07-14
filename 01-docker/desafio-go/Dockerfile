FROM golang:1.18 as builder
WORKDIR /app
COPY hello-world.go .
RUN go build hello-world.go

FROM scratch
COPY --from=builder /app/ .
CMD ["./hello-world"]