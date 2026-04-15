## Milestone:-  5 - Deploy REST API & its dependent services on bare metal


## Prerequisites


Make sure you have the following installed on your system:

- [Vagrant](https://developer.hashicorp.com/vagrant/install?product_intent=vagrant)
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads)


### Follow these steps:


### Start the vagrant box and run the API
```bash
vagrant up
```

### To stop the API
```bash
vagrant ssh
cd /vagrant/application
make docker-compose-down-students-api
```

### To stop the vagrant box
```bash
exit
vagrant destroy
```
