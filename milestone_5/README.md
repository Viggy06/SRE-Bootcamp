## Milestone:-  5 - Deploy REST API & its dependent services on bare metal


## Prerequisites


Make sure you have the following installed on your system:

- [Vagrant](https://developer.hashicorp.com/vagrant/install?product_intent=vagrant)
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads)


### Follow these steps:


### Start the vagrant box and ssh into it
```bash
vagrant up
vagrant ssh
```

### To Install Dependencies
```bash
chmod +x package_setup
./package_setup
```

### Start the API Container
```bash
cd application
make up
```

### To stop the API Container
```bash
make down
```

### To stop the Vagrant box
```bash
exit
vagrant destroy
```
