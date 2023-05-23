Vagrant.configure("2") do |config|

  config.vm.define :cliente do |cliente|
  config.vm.box = "bento/centos-7.9"
  cliente.vm.network :private_network, ip: "192.168.50.9"
  cliente.vm.network :public_network, bridge: "Realtek PCIe GbE Family Controller"
  cliente.vm.hostname = "cliente"
  cliente.vm.provider "virtualbox" do |v|
    v.cpus = 2 
  end
  end
  config.vm.define :servidor do |servidor|
  config.vm.box = "bento/centos-7.9"
  servidor.vm.network :private_network, ip: "192.168.50.8"
  servidor.vm.hostname = "servidor"
  servidor.vm.provider "virtualbox" do |v|
    v.cpus = 2 
  end
  end
end
