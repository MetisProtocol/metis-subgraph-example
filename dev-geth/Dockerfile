#syntax=docker/dockerfile:1
FROM ethereum/client-go:v1.13.10
RUN apk add --no-cache jq
COPY --chmod=775 entrypoint.sh /entrypoint.sh
VOLUME ["/data"]
ENTRYPOINT ["/entrypoint.sh"]
