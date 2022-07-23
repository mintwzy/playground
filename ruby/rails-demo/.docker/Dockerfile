FROM ruby:3.1.0

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions
# that follow it in the Dockerfile. If the WORKDIR doesn’t exist, it will be created even if it’s not used in
# any subsequent Dockerfile instruction.
WORKDIR /myapp

COPY ../Gemfile /myapp/Gemfile
COPY ../Gemfile.lock /myapp/Gemfile.lock
RUN bundle install