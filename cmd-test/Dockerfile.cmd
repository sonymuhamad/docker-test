FROM alpine:3.20

# everything that comes after the docker run command is override the command
CMD [ "echo","Hello from cmd test from dockerfile.cmd" ]