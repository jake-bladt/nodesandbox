# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", path: "boot.sh"
  
  config.vm.network "forwarded_port", guest: 80, host: 8980
  config.vm.network "forwarded_port", guest: 8124, host: 8981
  config.vm.network "forwarded_port", guest: 3000, host: 8982
end
