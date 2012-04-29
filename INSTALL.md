# Software requirements 


## Install nginx
* Download source
	* curl -O http://nginx.org/download/nginx-1.2.0.tar.gz

* Extract content from tgz file
	* tar xzf nginx-1.2.0.tar.gz
	* cd nginx-1.2.0

* Configure, build, and install
	* ./configure
	* make
	* sudo make install
	* Note: Ubuntu 11.10 I did not have the Perl Regular Expressions Library needed by the rewriting of urls. To install this on Ubuntu I did:
		* sudo apt-get install libpcre3 libpcre3-dev
		* Then tried configure, make, and make install again.


## Install Python
* Check if python is installed by:
	* python -V


The above command if works should print out the version of python. Install python if version is not greater or equal to 2.6, or an error results from running the command.


Here is the python documentation for installation on unix type operating systems (http://docs.python.org/using/unix.html#building-python). Also this information is below.


### Instructions to install Python
* Download source 
	* curl -O http://www.python.org/ftp/python/2.7.3/Python-2.7.3.tgz


* Extract contents from tgz file
	* tar xzf Python-2.7.3.tgz
	* cd Python-2.7.3


* Configure, build, and install
	* ./configure
	* make
	* [sudo] make install




## Install PIP
* First check if pip is installed.
	* pip --help


If the above command prints out help information for the pip command-line program, then pip is installed and ignore installion instructions below. Otherwise, an error ocurred and pip is not installed, therefore, follow the instructions below for installing pip


### Instructions to install PIP
* Download source
	* curl -o pip-1.1.tar.gz http://pypi.python.org/packages/source/p/pip/pip-1.1.tar.gz#md5=62a9f08dd5dc69d76734568a6c040508


* Extract contents from tgz file
	* tar xzf pip-1.1.tar.gz
	* cd pip-1.1


* Install
	* python setup.py install # may need to be root or sudo




## Install redis

* Download source
	* curl -O http://redis.googlecode.com/files/redis-2.4.10.tar.gz


* Extract contents from tgz file
	* tar xzf redis-2.4.10.tar.gz
	* cd redis-2.4.10


* Build, and install
	* make
	* [sudo] make install


## Using PIP to install python library components
### install tornado web - the web frame word for python
* [sudo] pip install tornado

### install simplejson - used for python data structure -> json responses
* [sudo] pip install simplejson

### install redis - python library for talking to Redis server
* run [sudo] pip install redis