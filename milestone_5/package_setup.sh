#!/bin/bash
set -e

install_make() {
  echo "Installing make dependency..."
  sudo apt-get update
  sudo apt install make -y  
}

install_docker() {
    echo "Installing Docker..."
    sudo apt-get install ca-certificates curl -y
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
    sudo service docker start
    sudo usermod -aG docker ${USER}
}


verify_installation() {
    echo "Verifying installations..."
    make --version
    docker --version
}

main() {
    install_make
    install_docker
    verify_installation
}

main
